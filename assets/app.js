"use strict";

const MODULES = window.IPO_MODULES || [];
const PAPERS = window.IPO_PAPERS || [];
const TRACKS = {
  maths: { name: "Mathematics", qs: 100, marks: 200, secPerQ: 55, color: "var(--maths)" },
  english: { name: "General English", qs: 38, marks: 76, secPerQ: 35, color: "var(--english)" },
  gk: { name: "General Knowledge", qs: 37, marks: 74, secPerQ: 25, color: "var(--gk)" },
};
const PATTERNS = {
  2026: { label: "2026 pattern (advertised)", english: 38, gk: 37, maths: 100 },
  2022: { label: "2022 paper pattern", english: 50, gk: 50, maths: 75 },
};
const EXAM = {
  scheme: "General English & General Knowledge 150 marks · Mathematics 200 marks",
  schemeSource: "MPSC Advt. No. MPSC/ADVT-54/1/2023-2024/138 (16 Jan 2024), clause 9.1(b)",
  schemeUrl: "https://mpsc.meghalaya.gov.in/advt/Advt16Jan2024.pdf",
  date: "2026-11-28",
  time: "10:00 AM – 12:30 PM",
  venues: ["MPSC Office, Lower Lachaumiere, Shillong", "Shillong Law College, Dhankheti, Shillong", "Garo Union Hr. Sec. School, Tura"],
  vacancies: 26,
  source: "MPSC Programme of Examination No. MPSC/EX-C/25/2026/42, 25 Sep 2026",
  sourceUrl: "https://mpsc.meghalaya.gov.in/programme/Notice25Sep2026a.pdf",
};
const SECTION_ORDER = ["english", "gk", "maths"];
const LETTERS = "abcdefgh";
const REVIEW_DAYS = [1, 3, 7, 14, 30, 60];
const CARD_DAYS = [1, 3, 7, 14, 30];
const DAY = 86400000;
const EXAM_TIME = new Date(EXAM.date + "T00:00").getTime();
const SWEEP_TIME = EXAM_TIME - 7 * DAY;
const MOCK_WINDOW_DAYS = 10;

const $ = (s, el = document) => el.querySelector(s);
const app = $("#app");
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const pct = (a, b) => (b ? Math.round((100 * a) / b) : 0);
const today = () => new Date(new Date().toDateString()).getTime();
const fmtDate = t => new Date(t).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
const fmtTime = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

const KEY = "ipo-prep-v1";
const S = Object.assign(
  { lessons: {}, attempts: {}, tests: [], review: {}, path: {}, active: null, drillBest: {}, cards: {}, pretest: {} },
  JSON.parse(localStorage.getItem(KEY) || "{}")
);
const save = () => localStorage.setItem(KEY, JSON.stringify(S));

const Q = {};
MODULES.forEach(m => m.practice.forEach(q => (Q[q.id] = q)));
PAPERS.forEach(p => p.questions.forEach(q => (Q[q.id] = q)));
const MOD = Object.fromEntries(MODULES.map(m => [m.id, m]));
const PAPER = Object.fromEntries(PAPERS.map(p => [p.id, p]));
const paperQs = () => PAPERS.flatMap(p => p.questions);
const ipoQs = () => PAPERS.filter(p => p.kind === "ipo").flatMap(p => p.questions);
const sectionOf = q => q.section || MOD[q.module]?.track;

function md(src, inline = false, bigFrac = false) {
  if (!src) return "";
  const stash = [];
  const s = String(src).replace(/\$\$[\s\S]+?\$\$|\$[^$\n]+?\$/g, m => `@@M${stash.push(bigFrac ? m.replace(/\\frac/g, "\\dfrac") : m) - 1}@@`);
  const html = inline ? marked.parseInline(s, { breaks: true }) : marked.parse(s, { breaks: true });
  return html.replace(/@@M(\d+)@@/g, (_, i) => esc(stash[i]));
}
function typeset(el) {
  if (window.renderMathInElement)
    renderMathInElement(el, {
      delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }],
      throwOnError: false,
    });
}
const tex = (t, big = false) => { try { return katex.renderToString(big ? `\\displaystyle ${t}` : t, { throwOnError: false, displayMode: false }); } catch { return esc(t); } };

// ---------- progress model ----------
const nextDue = days => {
  const due = today() + days * DAY;
  return today() < SWEEP_TIME && due > SWEEP_TIME ? SWEEP_TIME : due;
};
function recordAttempt(id, choice, ms = 0, guess = false) {
  const q = Q[id];
  const c = choice === q.answer ? 1 : 0;
  (S.attempts[id] ||= []).push({ a: choice, c, t: Math.min(ms, 600000), d: Date.now(), g: guess ? 1 : 0 });
  if (S.attempts[id].length > 8) S.attempts[id].splice(1, 1);
  const r = S.review[id];
  if (!c || guess) S.review[id] = { box: 0, due: today() + DAY };
  else if (r && r.due <= today() + DAY) {
    r.box = Math.min(r.box + 1, REVIEW_DAYS.length - 1);
    r.due = nextDue(REVIEW_DAYS[r.box]);
  }
  return c;
}
const lastAttempt = id => S.attempts[id]?.at(-1);
const firstAttempt = id => S.attempts[id]?.[0];
const dueReviews = () => Object.entries(S.review).filter(([id, r]) => Q[id] && r.due <= today()).map(([id]) => id);

MODULES.forEach(m => {
  m.checkIds = m.practice.filter((_, i) => i % 4 === 3).map(q => q.id);
  m.practiceIds = m.practice.filter((_, i) => i % 4 !== 3).map(q => q.id);
  const n = m.practiceIds.length;
  m.pretestIds = [...new Set([0, 1, 2, 3, 4].map(k => m.practiceIds[Math.round((k * (n - 1)) / 4)]))];
});
const checkTests = m => S.tests.filter(t => t.kind === `check-${m.id}`);
const median = a => { if (!a.length) return 0; const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };

function moduleStats(m) {
  const read = (S.lessons[m.id] || []).length;
  const ids = m.practiceIds;
  const tried = ids.filter(id => S.attempts[id]);
  const first = tried.filter(id => firstAttempt(id).c).length;
  const firstAcc = pct(first, tried.length);
  const practiceOk = tried.length >= Math.ceil(0.8 * ids.length) && firstAcc >= 70;
  const checks = checkTests(m);
  const passedCheck = checks.find(t => t.score / t.max >= 0.75);
  const mastered = practiceOk && !!passedCheck;
  const recent = passedCheck ? m.practice.map(q => q.id).flatMap(id => (S.attempts[id] || []).filter(a => a.d > passedCheck.date)).sort((a, b) => b.d - a.d).slice(0, 8) : [];
  const needsReview = mastered && recent.length >= 5 && pct(recent.filter(a => a.c).length, recent.length) < 60;
  const secs = tried.map(id => firstAttempt(id).t).filter(Boolean).map(t => t / 1000);
  const progress = Math.round(70 * Math.min(1, tried.length / Math.max(1, Math.ceil(0.8 * ids.length))) + 30 * (passedCheck ? 1 : 0));
  return { read, lessons: m.lessons.length, total: ids.length, tried: tried.length, firstAcc, practiceOk, checks, passedCheck, mastered, needsReview, medianSec: Math.round(median(secs)), progress };
}

function topicStats(ids) {
  const by = {};
  ids.forEach(id => {
    const q = Q[id], a = lastAttempt(id);
    if (!q || !a) return;
    const k = q.topic;
    by[k] ||= { topic: k, section: sectionOf(q), n: 0, c: 0 };
    by[k].n++; by[k].c += a.c;
  });
  return Object.values(by).map(t => ({ ...t, acc: pct(t.c, t.n) }));
}

function pyqWeight(m) {
  return ipoQs().filter(q => m.topics?.includes(q.topic)).length;
}

// ---------- learning path ----------
function buildPath() {
  const phases = [
    { n: 0, title: "Baseline", goal: "An honest starting score, without preparing. The result page tells you which modules you can move through quickly and which need full study.", steps: [
      { id: "read-strategy", title: "Read the exam pattern & strategy", href: "#/about", est: 10, auto: () => S.path["read-strategy"] },
      ...PAPERS.slice(0, 1).map(p => ({ id: `diag-${p.id}`, title: `Placement test: the real ${p.title} paper, maths section (75 Q, 70 min) or full paper`, href: `#/paper/${p.id}`, est: 90, auto: () => S.tests.some(t => t.ref === p.id) })),
    ]},
  ];
  const titles = { 1: "Foundations — arithmetic, vocabulary, core GK", 2: "Algebra & Trigonometry + grammar", 3: "Coordinate geometry, 3D & vectors", 4: "Calculus, probability & the rest" };
  const goals = {
    1: "Arithmetic is the quickest win in maths: school-level ideas, asked every year. Rebuild calculation speed with the daily Speed Drill.",
    2: "Class 11 algebra and trigonometry is the core of the maths paper. Learn the formulas properly, then practise until they're automatic.",
    3: "Coordinate and 3D geometry are formula-driven. Memorise the formula sheet for these chapters and questions become quick marks.",
    4: "Calculus and probability questions in this paper use standard results. Learn the standard tables and properties.",
  };
  const phaseNums = [...new Set(MODULES.map(m => m.phase))].sort();
  phaseNums.forEach(n => {
    const mods = MODULES.filter(m => m.phase === n);
    const maths = mods.filter(m => m.track === "maths"), other = mods.filter(m => m.track !== "maths");
    const slot = k => Math.ceil(((k + 1) * maths.length) / (other.length + 1)) - 1;
    const steps = [];
    let oi = 0;
    if (!maths.length) other.forEach(m => steps.push(modStep(m)));
    maths.forEach((m, i) => {
      steps.push(modStep(m));
      while (oi < other.length && slot(oi) <= i) steps.push(modStep(other[oi++]));
    });
    if (maths.length)
      steps.push({ id: `check-${n}`, title: `Phase ${n} checkpoint: 30-question maths test on this phase and earlier ones (35 min). Aim for 60%+`, href: `#/mock/phase/${n}`, est: 45, auto: () => S.tests.some(t => t.kind === `phase-${n}` && t.score / t.max >= 0.6) });
    phases.push({ n, title: titles[n] || `Phase ${n}`, goal: goals[n] || "", steps });
  });
  phases.push({ n: phases.length, title: "Exam readiness", goal: `The last ${MOCK_WINDOW_DAYS} days: full-length timed mocks under exam conditions (10:00 AM start, like the real exam). Review every wrong answer the same day.`, steps: [
    { id: "formula-revision", title: "Every formula card reviewed at least once in flashcard mode", href: "#/formulas/cards", auto: () => allCards().every(c => S.cards[c.key]) },
    { id: "mock-1", title: "Full mock test #1 (175 Q, 150 min, 2026 pattern)", href: "#/mock/full", auto: () => S.tests.filter(t => t.kind === "full").length >= 1 },
    { id: "mock-2", title: "Full mock test #2", href: "#/mock/full", auto: () => S.tests.filter(t => t.kind === "full").length >= 2 },
    { id: "maths-sec", title: "Maths sectional mock (100 Q, 95 min). Target 140/200", href: "#/mock/maths", auto: () => S.tests.some(t => t.kind === "maths" && t.score >= 140) },
    { id: "mock-3", title: "Full mock test #3", href: "#/mock/full", auto: () => S.tests.filter(t => t.kind === "full").length >= 3 },
    { id: "sweep", title: "Final sweep (one week before the exam): clear every due review item and formula card", href: "#/review", auto: () => today() >= SWEEP_TIME && dueReviews().length === 0 },
  ]});
  return phases;
}
function modStep(m) {
  const t = TRACKS[m.track].name;
  return { id: `mod-${m.id}`, module: m.id, title: `${t}: ${m.title}`, href: `#/module/${m.id}`, est: m.estMinutes, auto: () => moduleStats(m).mastered };
}
const stepDone = s => !!(S.path[s.id] || s.auto());
const stepMinutesLeft = s => Math.round((s.est || 45) * (s.module ? 1 - moduleStats(MOD[s.module]).progress / 100 : 1));
function dailyPlan() {
  const open = pathProgress().steps.filter(s => !stepDone(s));
  const studyEnd = EXAM_TIME - MOCK_WINDOW_DAYS * DAY;
  const inMockWindow = today() >= studyEnd;
  const studyDays = Math.max(1, Math.round((studyEnd - today()) / DAY));
  const study = open.filter(s => !s.id.startsWith("mock") && !["maths-sec", "sweep", "formula-revision"].includes(s.id));
  const minutesLeft = study.reduce((a, s) => a + stepMinutesLeft(s), 0);
  const perDay = inMockWindow ? 0 : Math.ceil(minutesLeft / studyDays);
  const picks = [];
  let acc = 0;
  for (const s of inMockWindow ? open : study) {
    picks.push(s);
    acc += stepMinutesLeft(s);
    if (acc >= Math.max(perDay, 60) || picks.length >= 3) break;
  }
  return { studyEnd, studyDays, inMockWindow, minutesLeft, perDay, picks };
}
function pathProgress() {
  const steps = buildPath().flatMap(p => p.steps);
  const done = steps.filter(stepDone).length;
  return { steps, done, total: steps.length, next: steps.find(s => !stepDone(s)) };
}

// ---------- chrome ----------
function refreshChrome() {
  const { done, total } = pathProgress();
  $("#pathBar").style.width = pct(done, total) + "%";
  $("#pathLabel").textContent = `${done}/${total} steps`;
  const days = daysLeft();
  $("#countdown").innerHTML = days > 0 ? `<b>${days}</b> days to exam` : days === 0 ? "<b>Exam today</b>" : "Exam date passed";
  const due = dueReviews().length;
  $("#dueTag").textContent = due || "";
  $("#dueTag").className = due ? "tag bad" : "tag";
  const h = location.hash || "#/";
  document.querySelectorAll("nav.side a").forEach(a => a.classList.toggle("active", h === a.getAttribute("href") || (a.getAttribute("href") !== "#/" && h.startsWith(a.getAttribute("href")))));
}
const daysLeft = () => Math.ceil((new Date(EXAM.date + "T00:00").getTime() - today()) / DAY);

// ---------- views ----------
const views = {};

views[""] = () => {
  const { done, total } = pathProgress();
  const days = daysLeft();
  const due = dueReviews().length;
  const cardsDue = dueCards().length;
  const plan = dailyPlan();
  const lastTest = S.tests.at(-1);
  const allIds = Object.keys(S.attempts).filter(id => Q[id]);
  const secAcc = Object.keys(TRACKS).map(k => {
    const ids = allIds.filter(id => sectionOf(Q[id]) === k);
    return { k, n: ids.length, acc: pct(ids.filter(id => lastAttempt(id).c).length, ids.length) };
  });
  const weak = topicStats(allIds).filter(t => t.n >= 3).sort((a, b) => a.acc - b.acc).slice(0, 5);
  const mixN = mixedSet().length;
  const hrs = m => (m >= 60 ? `${Math.floor(m / 60)} h ${m % 60 ? `${m % 60} min` : ""}` : `${m} min`).trim();
  const exam = fmtDate(EXAM_TIME);
  return `
  <h1>Industrial Promotion Officer — Screening Test</h1>
  <p class="muted">Meghalaya Public Service Commission · written MCQ Screening Test · 350 marks (English &amp; GK 150, Maths 200) · 2½ hours · then Personal Interview</p>
  <div class="callout meg"><b>${exam}, ${EXAM.time}</b> · ${EXAM.vacancies} vacancies · ${EXAM.venues.join(" · ")}<br><span class="small"><a href="${EXAM.sourceUrl}" target="_blank" rel="noopener">${EXAM.source}</a></span></div>
  <h2>Today</h2>
  <div class="card">
    ${plan.inMockWindow ? `<p><b>Mock phase.</b> Take one full mock at 10:00 AM (exam time), then review every mistake. Keep the daily mix and formula cards going.</p>`
      : `<p class="small muted">About <b>${hrs(plan.minutesLeft)}</b> of study left and <b>${plan.studyDays} days</b> until mocks start on ${fmtDate(plan.studyEnd)}. That works out to <b>~${hrs(plan.perDay)} a day</b>, plus the 25 minutes of daily habits below.${plan.perDay > 240 ? ` <span class="tag bad">Heavy.</span> Use each module's pretest to skip what you already know, and give priority to modules with the most past-paper questions.` : ""}</p>`}
    ${plan.picks.map((s, i) => `<div class="path-step"><div class="pnum" style="width:26px;height:26px;border-radius:50%;background:${i ? "var(--line)" : "var(--accent)"};color:${i ? "var(--ink)" : "#fff"};display:grid;place-items:center;font-size:13px;flex:none">${i + 1}</div><div style="flex:1"><a class="ptitle" href="${s.href}">${esc(s.title)}</a><div class="small muted">~${hrs(stepMinutesLeft(s))} left${s.module ? ` · ${moduleHint(MOD[s.module])}` : ""}</div></div>${i ? "" : `<a class="btn primary sm" href="${s.href}">Start →</a>`}</div>`).join("") || `<p>Every step is done. Keep taking mocks and clearing reviews.</p>`}
    <h3>Daily habits</h3>
    <div class="grid">
      <a class="card" href="#/mix" style="text-decoration:none;color:inherit"><div class="stat-label">Today's mix · 15 min</div><div class="stat">${mixN}</div><div class="small muted">Mixed questions from everything you've studied, plus due reviews</div></a>
      <a class="card" href="#/formulas/cards" style="text-decoration:none;color:inherit"><div class="stat-label">Formula cards · 5 min</div><div class="stat">${cardsDue}</div><div class="small muted">due today</div></a>
      <a class="card" href="#/drill" style="text-decoration:none;color:inherit"><div class="stat-label">Speed drill · 5 min</div><div class="stat">${Object.keys(S.drillBest).length}/6</div><div class="small muted">drills with a best score</div></a>
      <a class="card" href="#/review" style="text-decoration:none;color:inherit"><div class="stat-label">Review queue</div><div class="stat">${due}</div><div class="small muted">due today (also in the mix)</div></a>
    </div>
  </div>
  <div class="grid" style="margin-top:4px">
    <div class="card"><div class="stat-label">Days to exam</div><div class="stat">${Math.max(0, days)}</div><div class="small muted">${exam}</div></div>
    <div class="card"><div class="stat-label">Learning path</div><div class="stat">${pct(done, total)}%</div><div class="meter good"><div style="width:${pct(done, total)}%"></div></div><div class="small muted" style="margin-top:6px">${done} of ${total} steps · <a href="#/path">see path</a></div></div>
    <div class="card"><div class="stat-label">Last test</div><div class="stat">${lastTest ? `${lastTest.score}/${lastTest.max}` : "—"}</div><div class="small muted">${lastTest ? `<a href="#/result/${lastTest.id}">${esc(lastTest.title)}</a>` : "No tests yet"}</div></div>
  </div>
  <h2>Section readiness</h2>
  <div class="card">${secAcc.map(s => barRow(TRACKS[s.k].name, s.n ? s.acc : 0, s.n ? `${s.acc}%` : "—", TRACKS[s.k].color, `${s.n} Qs answered`)).join("")}</div>
  ${weak.length ? `<h2>Weakest topics</h2><div class="card">${weak.map(t => barRow(topicName(t.topic), t.acc, `${t.acc}%`, t.acc < 50 ? "var(--bad)" : "var(--warn)", `${t.n} answered`)).join("")}<p class="small"><a href="#/stats">Full topic analysis →</a></p></div>` : ""}
  `;
};
function moduleHint(m) {
  const st = moduleStats(m);
  if (!st.tried && !S.pretest[m.id]) return "start with the 5-question pretest";
  if (!st.practiceOk) return `practice ${st.tried}/${st.total}, first-try accuracy ${st.tried ? st.firstAcc + "%" : "—"} (need 70%)`;
  if (!st.passedCheck) return "practice done. Take the module check";
  return "mastered";
}

function barRow(label, value, right, color, title = "") {
  return `<div class="bar-row" title="${esc(title)}"><div>${esc(label)}</div><div class="track"><div class="fill" style="width:${Math.max(0, Math.min(100, value))}%;background:${color}"></div></div><div class="small" style="text-align:right">${right}</div></div>`;
}
const topicName = slug => slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

views.path = () => {
  const phases = buildPath();
  return `<h1>Learning Path</h1>
  <p class="muted">Work top to bottom; the dashboard's <a href="#/">Today</a> list tracks your place. A module ticks itself when you reach <b>70%+ first-try accuracy</b> on its practice questions and <b>pass its module check</b> (unseen questions, 75%+). First tries count because they measure what you can do, not what you just read in an explanation. You can also tick a step by hand.</p>
  ${phases.map(p => {
    const d = p.steps.filter(stepDone).length;
    return `<div class="card"><div class="phase-head"><div class="pnum">${p.n}</div><h2 style="margin:0">${esc(p.title)}</h2><span class="spacer"></span><span class="tag ${d === p.steps.length ? "good" : ""}">${d}/${p.steps.length}</span></div>
    <p class="muted small">${esc(p.goal)}</p>
    ${p.steps.map(s => {
      const done = stepDone(s);
      const m = s.module && MOD[s.module];
      const st = m && moduleStats(m);
      return `<div class="path-step ${done ? "done" : ""}"><input type="checkbox" data-step="${s.id}" ${done ? "checked" : ""} ${s.auto() ? "disabled" : ""}>
        <div style="flex:1"><a class="ptitle" href="${s.href}">${esc(s.title)}</a>
        ${st ? `<div class="small muted">${moduleHint(m)}${st.needsReview ? ` <span class="tag warn">needs review</span>` : ""}${s.est ? ` · ~${Math.round(s.est / 60 * 10) / 10} h` : ""}</div><div class="meter ${st.mastered ? "good" : ""}" style="max-width:320px"><div style="width:${st.progress}%"></div></div>` : ""}
        </div></div>`;
    }).join("")}</div>`;
  }).join("")}`;
};
function bindPath() {
  app.onchange = e => {
    const id = e.target.dataset.step;
    if (!id) return;
    if (e.target.checked) S.path[id] = true; else delete S.path[id];
    save(); refreshChrome();
  };
}

views.about = () => {
  const qs = ipoQs();
  const mathsTopics = {};
  qs.filter(q => q.section === "maths").forEach(q => (mathsTopics[q.topic] = (mathsTopics[q.topic] || 0) + 1));
  const sortedTopics = Object.entries(mathsTopics).sort((a, b) => b[1] - a[1]);
  const maxT = sortedTopics[0]?.[1] || 1;
  const modFor = t => MODULES.find(m => m.topics?.includes(t));
  return `<h1>Exam Pattern &amp; Strategy</h1>
  <div class="card">
    <h3 style="margin-top:0">Selection process</h3>
    <p><b>Stage 1 — Screening Test</b>: the written MCQ paper below, on <b>${fmtDate(new Date(EXAM.date + "T00:00"))}</b>. → <b>Stage 2 — Personal Interview</b> for shortlisted candidates. In the last cycle, 40 candidates cleared the 26 Nov 2022 Screening Test and were called for interview on 14–16 Feb 2023 (MPSC notification of 11 Jan 2023). This time there are ${EXAM.vacancies} posts and seats for ~1,100 candidates, so expect competition (MPSC has not published past cut-offs). A sensible personal target is 250+/350.</p>
    <h3>The 2026 paper: what's officially known</h3>
    <div class="callout warn"><b>The marks split changed.</b> The advertisement for this recruitment sets the Screening Test as <b>${EXAM.scheme}</b> (<a href="${EXAM.schemeUrl}" target="_blank" rel="noopener">${EXAM.schemeSource}</a>). The 2022 paper was English 100 + GK 100 + Maths 150. <b>Maths now carries 200 of 350 marks (57%).</b> MPSC hasn't published how many questions each part will have. If it keeps 175 questions at 2 marks each, as in 2022 and fitting the same 2½-hour slot, that means about <b>100 maths questions and 75 English + GK</b>. The mocks here use that layout; the 2022 layout is also available.</div>
    <table class="t"><tr><th>Part</th><th>2022 paper (actual)</th><th>2026 (advertised marks · likely questions)</th><th>Suggested time in 2026</th></tr>
    <tr><td>General English</td><td>50 Q · 100 marks</td><td rowspan="2">150 marks · ~75 Q combined</td><td>~22 min (35 s/Q)</td></tr>
    <tr><td>General Knowledge</td><td>50 Q · 100 marks</td><td>~16 min (25 s/Q)</td></tr>
    <tr><td><b>Mathematics</b></td><td>75 Q · 150 marks</td><td><b>200 marks · ~100 Q</b></td><td><b>~95 min (55 s/Q)</b></td></tr>
    <tr><td><b>Total</b></td><td>175 Q · 350 · 2½ h</td><td>350 · 2½ h (10:00–12:30)</td><td>~17 min buffer</td></tr></table>
    <ul>
      <li>The 2022 paper was one OMR multiple-choice booklet with 4 options per question, <b>2 marks per question and no negative marking</b>. Read the cover instructions on exam day. If there's still no negative marking, never leave a bubble empty.</li>
      <li>Maths is <b>57% of the marks in 2026</b>, up from 43% in 2022. Speed matters: ~55 seconds per question. In 2022 it was Class 11–12 NCERT level (trigonometry, relations &amp; functions, coordinate &amp; 3D geometry, vectors, calculus, probability) plus arithmetic (percentages, averages, LCM, speed, mensuration).</li>
      <li>English is basic, textbook-style usage: one-word substitutions, similes and idioms, confusable words, articles, prepositions, synonyms/antonyms.</li>
      <li>GK is mostly static (polity, history, geography, science, books, days, organisations). The 2022 "current affairs" were from 2019–2021, and there was almost no Meghalaya-specific GK.</li>
    </ul>
  </div>
  <div class="card callout">
    <b>Order of attack in the exam hall:</b> GK first (fast; either you know it or you don't) → English → Maths. In maths, do a first pass taking every question you can solve in under a minute, and circle the rest. Then a second pass on the circled ones. In the last 3 minutes, fill every empty bubble.
  </div>
  <h2>What the 2022 maths section tested</h2>
  <div class="card">${sortedTopics.map(([t, n]) => { const m = modFor(t); return barRow(topicName(t), (100 * n) / maxT, `${n} Q`, "var(--maths)") .replace(`<div>${esc(topicName(t))}</div>`, `<div>${m ? `<a href="#/module/${m.id}">${esc(topicName(t))}</a>` : esc(topicName(t))}</div>`); }).join("") || `<p class="muted">Past-paper data not loaded.</p>`}</div>
  <h2>Where this content comes from</h2>
  <div class="card small">
    <ul>
      <li><b>IPO 2022</b> is transcribed from MPSC's own question booklet. MPSC never published an answer key for it, so every answer was worked out and then re-checked independently. Each item is marked certain, likely or disputed, and uncertain ones carry a note.</li>
      <li><b>Related MPSC papers</b> share the English, GK and arithmetic sections. Only those sections are included. Where MPSC published an official answer key, that key is used.</li>
      <li><b>Practice questions, lessons, formulas, shortcuts and traps</b> were written for this site, then fact-checked by a separate reviewer. Every maths answer and formula was re-derived with a computer algebra system. English usage was checked against dictionaries. GK facts were checked against official sources (PIB, MPSC, Government of Meghalaya) as of September 2026, and time-sensitive facts are marked "as of".</li>
      <li><b>Exam facts</b> (date, venues, vacancies, marks split) come from MPSC's notices, linked where they appear.</li>
    </ul>
    <label class="row"><input type="checkbox" id="readStrategy" ${S.path["read-strategy"] ? "checked" : ""}> I've read this</label>
  </div>`;
};
function bindAbout() {
  $("#readStrategy")?.addEventListener("change", e => { if (e.target.checked) S.path["read-strategy"] = true; else delete S.path["read-strategy"]; save(); refreshChrome(); });
}

views.track = ([track]) => {
  const t = TRACKS[track];
  if (!t) return notFound();
  const mods = MODULES.filter(m => m.track === track);
  const phases = [...new Set(mods.map(m => m.phase))].sort();
  const intro = {
    maths: "200 of 350 marks in 2026 (57%, about 100 questions), and your biggest opportunity. Modules go from arithmetic (fast wins) to Class 12 calculus. Each one teaches from scratch: lessons → formulas → worked examples → practice → real past-paper questions.",
    english: "50 questions, 100 marks. The paper tests fixed usage (idioms, one-word substitutions, confusables) more than reasoning. That rewards memory, so use the review queue.",
    gk: "50 questions, 100 marks. Mostly static GK. Learn the tables — most questions come straight from them.",
  }[track];
  return `<h1>${t.name}</h1><p class="muted">${intro}</p>
  ${phases.map(p => `<h2>Phase ${p}</h2><div class="modlist">${mods.filter(m => m.phase === p).map(modCard).join("")}</div>`).join("")}
  ${mods.length ? "" : `<div class="card muted">Modules for this section are still being prepared.</div>`}`;
};
function modCard(m) {
  const s = moduleStats(m);
  const w = pyqWeight(m);
  return `<a class="card mod ${s.mastered ? "done" : ""}" href="#/module/${m.id}"><div class="num">${s.mastered ? "✓" : m.order > 100 ? m.order % 100 : m.order}</div>
  <div class="body"><div class="title">${esc(m.title)}</div>
  <div class="small muted">${m.lessons.length} lessons · ${m.practice.length} practice Qs${w ? ` · <span class="tag acc">${w} past-paper Qs</span>` : ""}${m.estMinutes ? ` · ~${Math.round(m.estMinutes / 6) / 10} h` : ""}</div>
  <div class="meter ${s.mastered ? "good" : ""}"><div style="width:${s.progress}%"></div></div></div></a>`;
}

const defaultTab = m => (!S.pretest[m.id] && !moduleStats(m).tried ? "pretest" : "learn");
views.module = ([id, tab, arg]) => {
  const m = MOD[id];
  if (!m) return notFound();
  tab ||= defaultTab(m);
  const s = moduleStats(m);
  const pyq = paperQs().filter(q => m.topics?.includes(q.topic));
  const pre = S.pretest[m.id];
  const tabs = [["pretest", `1 Pretest${pre ? ` ${pre.score}/${pre.n}` : ""}`], ["learn", `2 Learn ${s.read}/${s.lessons}`], ["examples", `3 Examples`], ["practice", `4 Practice ${s.tried}/${s.total}`], ["check", `5 Check${s.passedCheck ? " ✓" : ""}`], ["formulas", `Formulas`], ["traps", "Traps"], ["pyq", `Past papers ${pyq.length}`]]
    .filter(([k]) => k !== "formulas" || m.formulas?.length).filter(([k]) => k !== "traps" || m.traps?.length).filter(([k]) => k !== "pyq" || pyq.length);
  let body = "";
  if (tab === "pretest") {
    body = `<div class="callout">Five questions <b>before</b> you study, with answers shown after each one. Guessing is fine: attempting a question first makes the lesson that follows stick better. Your pretest score doesn't count towards mastery.${pre ? `<br><b>Your pretest: ${pre.score}/${pre.n}.</b> ${pretestAdvice(pre)}` : ""}</div><div id="practice"></div>`;
  } else if (tab === "check") {
    const secPerQ = TRACKS[m.track].secPerQ;
    const minutes = Math.max(5, Math.ceil((m.checkIds.length * secPerQ * 1.3) / 60));
    body = `<div class="card"><p><b>${m.checkIds.length} questions you haven't seen in practice · ${minutes} min · pass mark 75%.</b></p>
      <p class="small muted">This tests whether you can do the chapter cold, without explanations fresh on the screen. ${s.practiceOk ? "Your practice accuracy is good enough, so take it now." : "Best taken after your first-try practice accuracy reaches 70%."} If you don't pass, the result page shows what to revisit. Retake it after a day.</p>
      ${s.checks.length ? `<p class="small">Previous attempts: ${s.checks.map(t => `<a href="#/result/${t.id}">${t.score / 2}/${t.max / 2}</a>`).join(", ")}</p>` : ""}</div>`
      + startScreen({ title: `Module check: ${m.title}`, n: m.checkIds.length, minutes, kind: `check-${m.id}`, ref: `check-${m.id}`, qids: shuffle([...m.checkIds]) }).replace(/^<h1>.*?<\/h1>/, "");
  } else if (tab === "learn") {
    const i = Math.min(+arg || firstUnread(m), m.lessons.length - 1);
    const read = S.lessons[m.id] || [];
    const l = m.lessons[i];
    body = `<div class="row" style="margin-bottom:12px"><select id="lessonPick" aria-label="Choose lesson">${m.lessons.map((x, j) => `<option value="${j}" ${j === i ? "selected" : ""}>${read.includes(j) ? "✓ " : ""}Lesson ${j + 1}: ${esc(lessonTitle(x.title))}</option>`).join("")}</select><span class="small muted">Lesson ${i + 1} of ${m.lessons.length} · ${read.length} done</span></div>
    <div class="card md lesson"><h2 style="margin-top:0">${esc(lessonTitle(l.title))}</h2>${md(l.body)}</div>
    <div class="row">${i > 0 ? `<a class="btn" href="#/module/${m.id}/learn/${i - 1}">← Previous</a>` : ""}<span class="spacer"></span>
    <button class="btn good" id="markRead" data-i="${i}">${read.includes(i) ? "✓ Done" : "Done"}${i < m.lessons.length - 1 ? " — next lesson →" : " — on to worked examples →"}</button></div>
    <p class="small muted">Before moving on, look away and say the lesson's key rule out loud, or write it down. Recalling it is what makes it stick; re-reading doesn't.</p>`;
  } else if (tab === "formulas") {
    body = `<div class="card">${m.formulas.map(f => `<div class="formula"><div class="name">${md(f.name, true)}</div><div>${tex(f.tex, true)}</div>${f.when ? `<div class="when">${md(f.when, true)}</div>` : ""}</div>`).join("")}</div>`;
  } else if (tab === "examples") {
    body = `<p class="small muted">Try each example on paper first. Then reveal the solution <b>one step at a time</b>, and before each reveal, say what you think the next step is. From example ${Math.min(4, (m.examples || []).length)} on, try to finish before looking at anything.</p>`
      + (m.examples || []).map((ex, j) => {
        const steps = String(ex.solution).split("\n").filter(x => x.trim());
        return `<div class="card" data-ex><div class="stat-label">Example ${j + 1}</div><div class="md">${md(ex.q, false, true)}</div>
        <div class="expl md" hidden>${steps.map(l => `<div class="step" hidden>${md(l, true)}</div>`).join("")}${ex.shortcut ? `<div class="callout good step" hidden><b>Shortcut:</b> ${md(ex.shortcut, true)}</div>` : ""}</div>
        <div class="row" style="margin-top:10px"><button class="btn sm primary" data-step>Reveal step 1 of ${steps.length}</button><button class="btn sm" data-all>Show full solution</button></div></div>`;
      }).join("");
  } else if (tab === "traps") {
    body = `<div class="card md"><ul>${m.traps.map(t => `<li>${md(t, true)}</li>`).join("")}</ul></div>`;
  } else if (tab === "practice") {
    body = `<p class="small muted">First tries count towards mastery. Guessing? Tick <b>Not sure</b> under the options.${m.track === "maths" && s.medianSec ? ` Median time: <b>${s.medianSec} s</b>/question (exam pace ${TRACKS.maths.secPerQ} s).` : ""}</p><div id="practice"></div>`;
  } else if (tab === "pyq") {
    body = `<p class="muted small">Real questions from past papers on this module's topics. They show the exam's actual level. If you took the 2022 paper as your placement test, you've already seen these, so treat them as revision rather than a test.</p><div id="practice"></div>`;
  }
  const w = pyqWeight(m);
  return `<div class="small muted"><a href="#/track/${m.track}">${TRACKS[m.track].name}</a> · Phase ${m.phase}</div>
  <h1>${esc(m.title)}</h1>
  ${m.why && (tab === "pretest" || (tab === "learn" && !(+arg))) ? `<div class="callout">${md(m.why, true)}${w ? ` <span class="tag acc">${w} questions in the 2022 paper</span>` : ""}</div>` : ""}
  <div class="row small muted">${moduleHint(m)} ${s.mastered ? `<span class="tag good">Mastered</span>` : ""}${s.needsReview ? `<span class="tag warn">Needs review: recent accuracy under 60%</span>` : ""}</div>
  <div class="tabs">${tabs.map(([k, label]) => `<button class="${k === tab ? "on" : ""}" data-go="#/module/${m.id}/${k}">${label}</button>`).join("")}</div>
  ${body}`;
};
const lessonTitle = t => String(t).replace(/^\s*(lesson\s*)?\d+[.):]\s*/i, "");
const firstUnread = m => { const r = S.lessons[m.id] || []; const i = m.lessons.findIndex((_, j) => !r.includes(j)); return i < 0 ? 0 : i; };
function pretestAdvice(p) {
  if (p.score >= p.n) return "You already know a lot of this. Skim the formulas, then go straight to Practice.";
  if (p.score >= p.n - 1) return "Good base. Skim the lessons, focus on worked examples, then Practice.";
  return "Work through the lessons in order. This chapter needs full study.";
}
function bindModule([id, tab]) {
  const m = MOD[id];
  if (!m) return;
  tab ||= defaultTab(m);
  const onTab = $(".tabs .on");
  if (onTab) onTab.parentElement.scrollLeft = onTab.offsetLeft - 16;
  $("#lessonPick")?.addEventListener("change", e => (location.hash = `#/module/${m.id}/learn/${e.target.value}`));
  if (tab === "pretest") {
    const ans = {};
    mountPractice($("#practice"), m.pretestIds, { record: false, onDone: (qid, a) => {
      ans[qid] = a;
      if (Object.keys(ans).length === m.pretestIds.length) {
        S.pretest[m.id] = { score: m.pretestIds.filter(x => ans[x] === Q[x].answer).length, n: m.pretestIds.length, d: Date.now() };
        save();
        $("#practice").insertAdjacentHTML("beforeend", `<div class="callout good"><b>Pretest: ${S.pretest[m.id].score}/${S.pretest[m.id].n}.</b> ${pretestAdvice(S.pretest[m.id])} <a class="btn primary sm" href="#/module/${m.id}/learn/0">Start the lessons →</a></div>`);
      }
    } });
  }
  if (tab === "check") bindStart();
  if (tab === "examples") app.querySelectorAll("[data-ex]").forEach(card => {
    const steps = [...card.querySelectorAll(".step")];
    const box = card.querySelector(".expl");
    const btn = card.querySelector("[data-step]");
    let k = 0;
    const show = n => { box.hidden = false; steps.slice(0, n).forEach(x => (x.hidden = false)); k = n; btn.textContent = k < steps.length ? `Reveal step ${k + 1} of ${steps.length}` : "All steps shown"; btn.disabled = k >= steps.length; };
    btn.textContent = `Reveal step 1 of ${steps.length}`;
    btn.onclick = () => show(k + 1);
    card.querySelector("[data-all]").onclick = () => show(steps.length);
  });
  $("#markRead")?.addEventListener("click", e => {
    const i = +e.currentTarget.dataset.i;
    const r = (S.lessons[m.id] ||= []);
    if (!r.includes(i)) r.push(i);
    save();
    location.hash = i < m.lessons.length - 1 ? `#/module/${m.id}/learn/${i + 1}` : `#/module/${m.id}/examples`;
  });
  if (tab === "practice") mountPractice($("#practice"), m.practiceIds, { filters: true, levels: true, guess: true });
  if (tab === "pyq") mountPractice($("#practice"), paperQs().filter(q => m.topics?.includes(q.topic)).map(q => q.id), { filters: true });
}

// ---------- practice widget ----------
const session = {};
function qCard(id, n, { reveal = false, chosen = null, showPrev = true, disabled = false, guess = false } = {}) {
  const q = Q[id];
  const prev = showPrev && lastAttempt(id);
  const cls = i => !reveal ? (chosen === i ? "sel" : "") : i === q.answer ? "right" : i === chosen ? "wrong" : "";
  const src = q.paper ? `<span class="tag meg">${esc(q.source || q.paper)}</span>` : "";
  return `<div class="q" data-id="${id}">
    <div class="qhead"><b>Q${n}</b>${src}<span class="tag">${esc(topicName(q.topic || ""))}</span>${q.level ? `<span class="tag">L${q.level}</span>` : ""}${q.confidence && q.confidence !== "certain" ? `<span class="tag warn">answer ${esc(q.confidence)}</span>` : ""}
    <span class="spacer"></span>${prev && !reveal ? `<span class="tag ${prev.c ? "good" : "bad"}">last time ${prev.c ? "✓" : "✗"}</span>` : ""}</div>
    <div class="qtext md">${md(q.q, false, true)}</div>
    <div class="opts">${q.options.map((o, i) => `<button class="opt ${cls(i)}" data-i="${i}" ${reveal || disabled ? "disabled" : ""}><span class="l">${LETTERS[i]})</span><span class="md">${md(o, true, true)}</span></button>`).join("")}</div>
    ${guess && !reveal ? `<label class="guess"><input type="checkbox" data-guess> Not sure: I'm guessing</label>` : ""}
    ${reveal ? `<div class="expl md"><b>${chosen === q.answer ? "✓ Correct." : chosen == null ? "Not answered." : "✗ Not quite."}</b> Answer: (${LETTERS[q.answer]})<br>${md(q.explanation)}${q.note ? `<div class="note">Note: ${md(q.note, true)}</div>` : ""}</div>` : ""}
  </div>`;
}
function mountPractice(el, ids, { filters = false, levels = false, onDone, record = true, guess = false } = {}) {
  if (!el) return;
  let filter = "all", idx = 0, list = [], lastT = performance.now();
  const one = () => !S.listMode;
  const compute = () => {
    list = ids.filter(id => Q[id]);
    if (filter === "new") list = list.filter(id => !S.attempts[id]);
    if (filter === "wrong") list = list.filter(id => lastAttempt(id) && !lastAttempt(id).c);
    if (/^L\d$/.test(filter)) list = list.filter(id => Q[id].level === +filter[1]);
    idx = 0;
  };
  const countText = () => `${ids.filter(x => S.attempts[x]).length}/${ids.length} attempted · ${ids.filter(x => lastAttempt(x)?.c).length} correct`;
  const state = id => ({ guess, showPrev: record, ...(record ? session[id] : {}) });
  const nav = () => `<div class="q-nav"><button class="btn" data-prev ${idx ? "" : "disabled"}>← Prev</button><span class="small muted">Question ${idx + 1} of ${list.length} · keys: A–D to answer, → next</span><span class="spacer"></span><button class="btn ${session[list[idx]]?.reveal || !record ? "primary" : ""}" data-next>${idx < list.length - 1 ? "Next →" : "Finish"}</button></div>`;
  const draw = () => {
    const fs = [["all", "All"], ["new", "Not attempted"], ["wrong", "Got wrong"], ...(levels ? [["L1", "Level 1"], ["L2", "Level 2"], ["L3", "Level 3"]] : [])];
    const head = `<div class="row" style="margin-bottom:10px">${filters ? `<select data-filter aria-label="Filter questions">${fs.map(([k, l]) => `<option value="${k}" ${k === filter ? "selected" : ""}>${l}</option>`).join("")}</select>` : ""}<span class="small muted" data-count>${countText()}</span><span class="spacer"></span><button class="btn sm" data-mode>${one() ? "Show all" : "One at a time"}</button></div>`;
    const body = !list.length ? `<div class="card muted">Nothing here.</div>`
      : idx >= list.length ? `<div class="card callout good"><b>Set finished.</b> ${countText()}. <button class="btn sm" data-restart>Go through again</button></div>`
      : one() ? qCard(list[idx], idx + 1, state(list[idx])) + nav()
      : list.map((id, i) => qCard(id, i + 1, state(id))).join("");
    el.innerHTML = head + body;
    typeset(el);
    lastT = performance.now();
  };
  const go = i => { idx = Math.max(0, Math.min(list.length, i)); draw(); el.scrollIntoView({ block: "start" }); };
  const answer = (card, a) => {
    const id = card.dataset.id;
    const now = performance.now();
    if (record) {
      recordAttempt(id, a, now - lastT, !!card.querySelector("[data-guess]")?.checked);
      session[id] = { reveal: true, chosen: a };
      save(); refreshChrome();
    }
    lastT = now;
    const n = card.querySelector(".qhead b").textContent.slice(1);
    const tmp = document.createElement("div");
    tmp.innerHTML = qCard(id, n, { reveal: true, chosen: a, showPrev: false });
    const fresh = tmp.firstElementChild;
    card.replaceWith(fresh);
    typeset(fresh);
    const c = el.querySelector("[data-count]");
    if (c) c.textContent = countText();
    el.querySelector("[data-next]")?.classList.add("primary");
    onDone?.(id, a);
  };
  el.onchange = e => { if (e.target.matches("[data-filter]")) { filter = e.target.value; compute(); draw(); } };
  el.onclick = e => {
    if (e.target.closest("[data-mode]")) { S.listMode = !S.listMode; save(); draw(); return; }
    if (e.target.closest("[data-prev]")) return go(idx - 1);
    if (e.target.closest("[data-next]")) return go(idx + 1);
    if (e.target.closest("[data-restart]")) { list.forEach(id => delete session[id]); return go(0); }
    const b = e.target.closest(".opt");
    if (b && !b.disabled) answer(b.closest(".q"), +b.dataset.i);
  };
  window.__keys = e => {
    if (!one() || !el.isConnected || /input|select|textarea/i.test(e.target.tagName)) return;
    const card = el.querySelector(".q");
    const k = e.key.toLowerCase();
    const i = "abcd".indexOf(k) >= 0 ? "abcd".indexOf(k) : "1234".indexOf(k);
    if (card && i >= 0) { const b = card.querySelectorAll(".opt")[i]; if (b && !b.disabled) answer(card, i); }
    else if (k === "arrowright" || k === "enter") go(idx + 1);
    else if (k === "arrowleft") go(idx - 1);
  };
  compute();
  draw();
}

views.review = () => {
  const due = dueReviews();
  const all = Object.keys(S.review).filter(id => Q[id]);
  return `<h1>Review Queue</h1>
  <p class="muted">Every question you get wrong, or get right while guessing, lands here. Each correct answer pushes it further out: 1 → 3 → 7 → 14 → 30 → 60 days. Nothing retires before the exam, and everything is due again for a final sweep on ${fmtDate(SWEEP_TIME)}, one week before the exam. Spacing reviews like this is what moves facts and formulas into long-term memory. Due reviews also appear in <a href="#/mix">Today's mix</a>.</p>
  <div class="row"><span class="tag bad">${due.length} due today</span><span class="tag">${all.length} in queue</span></div>
  <div id="practice" style="margin-top:14px"></div>`;
};
function bindReview() {
  const due = dueReviews();
  due.forEach(id => delete session[id]);
  if (due.length) mountPractice($("#practice"), shuffle(due), {});
  else $("#practice").innerHTML = `<div class="card callout good">Nothing due. Keep practising — mistakes will show up here.</div>`;
}

function mixedSet(n = 15) {
  const valid = ids => ids.filter(id => Q[id]);
  if (S.mix?.date === today()) return valid(S.mix.ids);
  const due = dueReviews();
  const recentCut = Date.now() - 2 * DAY;
  const pool = MODULES.filter(m => moduleStats(m).practiceOk)
    .flatMap(m => (moduleStats(m).passedCheck ? m.practice.map(q => q.id) : m.practiceIds))
    .filter(id => !due.includes(id) && !(lastAttempt(id)?.d > recentCut))
    .sort((a, b) => (lastAttempt(a)?.d || 0) - (lastAttempt(b)?.d || 0));
  const take = Math.max(n - Math.min(due.length, 10), 5);
  const ids = shuffle([...shuffle(due).slice(0, 10), ...shuffle(pool.slice(0, take * 3)).slice(0, take)]);
  if (ids.length) { S.mix = { date: today(), ids }; save(); }
  return ids;
}
views.mix = () => {
  const ids = mixedSet();
  return `<h1>Today's Mix</h1>
  <p class="muted">A daily shuffled set drawn from <b>every module you've finished practising</b>, plus your due reviews. Questions from different chapters come in random order, so you have to work out <i>which method</i> each one needs, just as in the exam. That's harder than one-chapter practice, and that's why it works. Do it every day, about 15 minutes.</p>
  ${ids.length ? `<div id="practice"></div>` : `<div class="card callout">Nothing yet. The mix starts once you've reached 70% first-try accuracy on a module's practice set.</div>`}`;
};
function bindMix() {
  const ids = mixedSet();
  ids.forEach(id => delete session[id]);
  if (ids.length) mountPractice($("#practice"), ids, { filters: false, guess: true });
}

// ---------- formulas & flashcards ----------
const allCards = () => MODULES.filter(m => m.track === "maths").flatMap(m => (m.formulas || []).map((f, i) => ({ ...f, key: `${m.id}:${i}`, mod: m.title, mid: m.id })));
const dueCards = () => allCards().filter(c => S.cards[c.key] && S.cards[c.key].due <= today());
const newCards = () => {
  const started = new Set(MODULES.filter(m => (S.lessons[m.id] || []).length || moduleStats(m).tried).map(m => m.id));
  return allCards().filter(c => !S.cards[c.key] && started.has(c.mid));
};
views.formulas = ([mode]) => {
  const mods = MODULES.filter(m => m.formulas?.length && m.track === "maths");
  if (mode === "cards") return `<h1>Formula Flashcards</h1><p class="muted">Recall the formula in your head or on paper, then tap to check. Be honest. "Again" brings the card back tomorrow. "Got it" spaces it out: 1 → 3 → 7 → 14 → 30 days. New cards come from modules you've started.</p>
    <div class="row"><select id="fcMod"><option value="">Due today (${dueCards().length}) + new (${Math.min(15, newCards().length)})</option>${mods.map(m => `<option value="${m.id}">Whole module: ${esc(m.title)}</option>`).join("")}</select><span class="spacer"></span><a class="btn" href="#/formulas">← Sheet view</a></div>
    <div class="card flash" id="flash" style="margin-top:14px"></div><div class="row" id="fcBtns"></div>`;
  return `<h1>Formula Sheet</h1>
  <p class="muted">Every maths formula in one place. Print it (Ctrl/Cmd+P) for revision, or drill it as flashcards.</p>
  <div class="row noprint"><a class="btn primary" href="#/formulas/cards">Flashcards (${dueCards().length} due)</a><button class="btn" onclick="print()">Print</button>
  <select id="fsJump" aria-label="Jump to chapter"><option value="">Jump to chapter…</option>${mods.map(m => `<option value="fs-${m.id}">${esc(m.title)}</option>`).join("")}</select></div>
  ${mods.map(m => `<h2 id="fs-${m.id}"><a href="#/module/${m.id}/formulas">${esc(m.title)}</a></h2><div class="card">${m.formulas.map(f => `<div class="formula"><div class="name">${md(f.name, true)}</div><div>${tex(f.tex, true)}</div>${f.when ? `<div class="when">${md(f.when, true)}</div>` : ""}</div>`).join("")}</div>`).join("")}`;
};
function bindFormulas([mode]) {
  $("#fsJump")?.addEventListener("change", e => e.target.value && document.getElementById(e.target.value)?.scrollIntoView());
  if (mode !== "cards") return;
  let deck = [], cur = null, flipped = false, seen = 0;
  const build = () => {
    const mid = $("#fcMod").value;
    deck = mid ? shuffle(allCards().filter(c => c.mid === mid)) : [...shuffle(dueCards()), ...newCards().slice(0, 15)];
    seen = 0; next();
  };
  const next = () => { cur = deck.shift(); flipped = false; draw(); };
  const draw = () => {
    const el = $("#flash");
    if (!cur) { el.innerHTML = `<div>${seen ? `Done: ${seen} cards reviewed.` : "No cards due. Start a module to unlock its formula cards, or choose a whole module above."}</div>`; $("#fcBtns").innerHTML = ""; return; }
    el.innerHTML = flipped ? `<div><div class="small muted">${esc(cur.name)}</div><div style="font-size:24px;margin-top:8px">${tex(cur.tex, true)}</div>${cur.when ? `<div class="small muted" style="margin-top:8px">${md(cur.when, true)}</div>` : ""}</div>`
      : `<div><div class="small muted">${esc(cur.mod)}</div><div style="margin-top:6px">${md(cur.name, true)}</div><div class="small muted" style="margin-top:12px">tap to reveal · ${deck.length} left</div></div>`;
    typeset(el);
    $("#fcBtns").innerHTML = flipped ? `<button class="btn danger" id="fcNo">Again</button><button class="btn good" id="fcYes">Got it</button>` : "";
    if (flipped) {
      $("#fcNo").onclick = () => { S.cards[cur.key] = { box: 0, due: today() + DAY }; save(); deck.splice(Math.min(deck.length, 3 + Math.floor(Math.random() * 4)), 0, cur); seen++; next(); };
      $("#fcYes").onclick = () => { const c = S.cards[cur.key]; const box = c ? Math.min(c.box + 1, CARD_DAYS.length - 1) : 1; S.cards[cur.key] = { box, due: nextDue(CARD_DAYS[box]) }; save(); seen++; next(); };
    }
  };
  $("#flash").onclick = () => { if (cur && !flipped) { flipped = true; draw(); } };
  $("#fcMod").onchange = build;
  build();
}

// ---------- speed drill ----------
const DRILLS = {
  squares: { name: "Squares 11–30", gen: () => { const n = 11 + rnd(20); return [`${n}^2`, n * n]; } },
  cubes: { name: "Cubes 1–15", gen: () => { const n = 1 + rnd(15); return [`${n}^3`, n ** 3]; } },
  tables: { name: "Tables 12–19", gen: () => { const a = 12 + rnd(8), b = 2 + rnd(8); return [`${a}\\times${b}`, a * b]; } },
  percent: { name: "Fraction → %", gen: () => { const d = [2, 3, 4, 5, 6, 8, 9, 11, 12, 16, 20, 25][rnd(12)]; const n = 1 + rnd(d - 1); const v = Math.round((10000 * n) / d) / 100; return [`\\frac{${n}}{${d}}\\ \\text{as } \\%`, v, 0.2]; } },
  pctOf: { name: "x% of y", gen: () => { const p = [5, 10, 12.5, 15, 20, 25, 30, 37.5, 40, 60, 75, 120][rnd(12)]; const y = (1 + rnd(40)) * 40; return [`${p}\\%\\text{ of }${y}`, (p * y) / 100]; } },
  trig: { name: "Trig values", gen: () => {
    const T = [["\\sin 30^\\circ", "1/2"], ["\\cos 60^\\circ", "1/2"], ["\\tan 45^\\circ", "1"], ["\\sin 90^\\circ", "1"], ["\\cos 90^\\circ", "0"], ["\\tan 60^\\circ", "√3"], ["\\tan 30^\\circ", "1/√3"], ["\\sin 60^\\circ", "√3/2"], ["\\cos 30^\\circ", "√3/2"], ["\\sin 45^\\circ", "1/√2"], ["\\cos 120^\\circ", "-1/2"], ["\\sin 150^\\circ", "1/2"], ["\\cos 180^\\circ", "-1"], ["\\tan 135^\\circ", "-1"], ["\\sin 210^\\circ", "-1/2"], ["\\cos 480^\\circ", "-1/2"], ["\\sec 60^\\circ", "2"], ["\\csc 30^\\circ", "2"], ["\\cot 45^\\circ", "1"], ["\\sin 300^\\circ", "-√3/2"]];
    const [q, a] = T[rnd(T.length)]; return [q, a, 0, ["0", "1", "-1", "1/2", "-1/2", "√3/2", "-√3/2", "1/√2", "√3", "1/√3", "2"]]; } },
};
const rnd = n => Math.floor(Math.random() * n);
views.drill = () => `<h1>Maths Speed Drill</h1>
  <p class="muted">60-second rounds of mental maths. Slow calculation is the main reason people run out of time in Part C. Do 2–3 rounds a day. Your best scores are saved.</p>
  <div class="grid">${Object.entries(DRILLS).map(([k, d]) => `<div class="card"><b>${d.name}</b><div class="small muted">Best: ${S.drillBest[k] ?? "—"}</div><button class="btn primary sm" style="margin-top:8px" data-drill="${k}">Start</button></div>`).join("")}</div>
  <div id="drillArea"></div>`;
function bindDrill() {
  app.onclick = e => {
    const k = e.target.dataset?.drill;
    if (!k) return;
    runDrill(k);
  };
}
function runDrill(k) {
  const d = DRILLS[k];
  const area = $("#drillArea");
  let score = 0, wrong = 0, cur, left = 60;
  const ask = () => {
    cur = d.gen();
    const choices = cur[3];
    area.innerHTML = `<div class="card" style="margin-top:16px"><div class="row"><div class="timer" id="dt">${left}s</div><span class="spacer"></span><span class="tag good">${score} ✓</span><span class="tag bad">${wrong} ✗</span></div>
      <div style="font-size:30px;text-align:center;margin:18px 0">${tex(cur[0])} = ?</div>
      ${choices ? `<div class="row" style="justify-content:center">${choices.map(c => `<button class="btn" data-c="${c}">${c}</button>`).join("")}</div>`
        : `<form id="df" class="row" style="justify-content:center"><input id="din" type="text" inputmode="decimal" autocomplete="off" style="font-size:22px;width:160px;text-align:center"><button class="btn primary">↵</button></form>`}</div>`;
    const check = v => {
      const ok = choices ? v === cur[1] : Math.abs(parseFloat(v) - cur[1]) <= (cur[2] || 0) + 1e-9;
      ok ? score++ : wrong++;
      if (!ok) flash = `${tex(cur[0])} = ${esc(cur[1])}`;
      ask();
    };
    if (choices) area.querySelectorAll("[data-c]").forEach(b => (b.onclick = () => check(b.dataset.c)));
    else { $("#din").focus(); $("#df").onsubmit = ev => { ev.preventDefault(); check($("#din").value.trim()); }; }
    if (flash) area.firstElementChild.insertAdjacentHTML("beforeend", `<div class="small muted" style="text-align:center">last miss: ${flash}</div>`);
  };
  let flash = "";
  clearInterval(window.__drill);
  window.__drill = setInterval(() => {
    left--;
    const t = $("#dt");
    if (!t) { clearInterval(window.__drill); return; }
    t.textContent = left + "s";
    if (left <= 0) {
      clearInterval(window.__drill);
      const best = Math.max(S.drillBest[k] || 0, score);
      const isBest = score > (S.drillBest[k] || 0);
      S.drillBest[k] = best; save();
      area.innerHTML = `<div class="card callout ${isBest ? "good" : ""}" style="margin-top:16px"><b>${d.name}: ${score} correct, ${wrong} wrong.</b> ${isBest ? "New best!" : `Best: ${best}`} <button class="btn sm" data-drill="${k}">Again</button></div>`;
    }
  }, 1000);
  ask();
}

// ---------- papers, mocks, exam engine ----------
views.papers = () => `<h1>Past Papers</h1>
  <p class="muted">Take each paper in <b>exam mode</b> (timed, with a question palette like the OMR sheet and a full analysis at the end) or <b>practice mode</b> (answers revealed as you go).</p>
  ${PAPERS.map(p => {
    const runs = S.tests.filter(t => t.ref === p.id);
    const short = { english: "English", gk: "GK", maths: "Maths" };
    const counts = SECTION_ORDER.map(s => [s, p.questions.filter(q => q.section === s).length]).filter(([, n]) => n).map(([s, n]) => `${n} ${short[s]}`).join(" · ");
    const keyTag = p.kind === "ipo" ? "" : /official answer key/i.test(p.source) ? `<span class="tag good">official answer key</span>` : `<span class="tag">answers worked out</span>`;
    return `<div class="card"><div class="row"><div><b>${esc(p.title)}</b> <span class="tag ${p.kind === "ipo" ? "meg" : ""}">${p.kind === "ipo" ? "IPO paper" : "Related MPSC post"}</span> ${keyTag}<div class="small muted">${p.date ? fmtDate(new Date(p.date)) + " · " : ""}${p.questions.length} questions (${counts})</div>
      ${runs.length ? `<div class="small">Attempts: ${runs.map(r => `<a href="#/result/${r.id}">${r.score}/${r.max}</a>`).join(", ")}</div>` : ""}</div>
      <span class="spacer"></span><a class="btn primary" href="#/paper/${p.id}">Exam mode</a><a class="btn" href="#/paper/${p.id}/practice">Practice mode</a></div></div>`;
  }).join("") || `<div class="card muted">No papers loaded.</div>`}
  <div class="card small muted">IPO 2022 is the only IPO question paper MPSC has published; the 2013 IPO paper was never put online. The other papers here are from <b>related MPSC posts</b>, which share the English, GK and arithmetic sections. Only those sections are included. Papers marked "official answer key" use MPSC's published answers; the rest were solved and checked independently.</div>`;

views.paper = ([id, mode]) => {
  const p = PAPER[id];
  if (!p) return notFound();
  if (mode === "practice") return `<h1>${esc(p.title)} — practice mode</h1><div class="sec-tabs" id="secTabs">${SECTION_ORDER.filter(s => p.questions.some(q => q.section === s)).map(s => `<button class="btn sm" data-sec="${s}">${TRACKS[s].name}</button>`).join("")}</div><div id="practice"></div>`;
  const mathsIds = p.questions.filter(q => q.section === "maths").map(q => q.id);
  return startScreen({ title: p.title, n: p.questions.length, minutes: p.durationMin, kind: "paper", ref: p.id, qids: p.questions.map(q => q.id) })
    + (mathsIds.length && !S.active ? `<div class="card"><b>Short on time? Take the maths section only</b> (${mathsIds.length} Q, 70 min). It's the section that shapes your study plan most.<div class="row" style="margin-top:8px"><button class="btn" id="startMathsOnly">Start maths section</button></div></div>` : "");
};
function bindPaper([id, mode]) {
  const p = PAPER[id];
  if (!p) return;
  if (mode === "practice") {
    const show = s => { mountPractice($("#practice"), p.questions.filter(q => q.section === s).map(q => q.id), { filters: true }); document.querySelectorAll("#secTabs button").forEach(b => b.classList.toggle("primary", b.dataset.sec === s)); };
    $("#secTabs").onclick = e => e.target.dataset.sec && show(e.target.dataset.sec);
    show(p.questions.some(q => q.section === "maths") ? "maths" : p.questions[0].section);
  } else {
    bindStart();
    $("#startMathsOnly")?.addEventListener("click", () => {
      S.active = { id: "t" + Date.now(), title: `${p.title} — maths section`, kind: "paper", ref: p.id, qids: p.questions.filter(q => q.section === "maths").map(q => q.id), answers: {}, flags: {}, spent: {}, cur: 0, start: Date.now(), minutes: 70 };
      save(); location.hash = "#/exam";
    });
  }
}

let pendingTest = null;
function startScreen(t) {
  pendingTest = t;
  const resume = S.active && S.active.ref === t.ref && S.active.kind === t.kind;
  return `<h1>${esc(t.title)}</h1>
  <div class="card"><p><b>${t.n} questions · ${t.minutes} minutes</b> · scored like the 2022 paper: 2 marks each, no negative marking</p>
  <ul class="small"><li>Use the palette to jump around. "Mark for review" flags a question, as you'd circle it on the booklet.</li>
  <li>The timer keeps running if you leave this page. You can come back and resume.</li>
  <li>When time runs out, the test submits automatically. Wrong and unanswered questions go to your review queue.</li></ul>
  <div class="row">${resume ? `<button class="btn primary" id="resumeTest">Resume (${fmtTime(Math.max(0, remainingSec()))} left)</button><button class="btn danger" id="startTest">Discard and restart</button>` : `<button class="btn primary" id="startTest">Start test</button>`}</div></div>`;
}
function bindStart() {
  $("#startTest")?.addEventListener("click", () => {
    const t = pendingTest;
    S.active = { id: "t" + Date.now(), title: t.title, kind: t.kind, ref: t.ref, qids: t.qids, answers: {}, flags: {}, spent: {}, cur: 0, start: Date.now(), minutes: t.minutes };
    save(); location.hash = "#/exam";
  });
  $("#resumeTest")?.addEventListener("click", () => (location.hash = "#/exam"));
}
const remainingSec = () => S.active ? S.active.minutes * 60 - (Date.now() - S.active.start) / 1000 : 0;

views.mock = ([kind, arg]) => {
  if (kind) {
    const t = buildMock(kind, arg);
    if (!t) return notFound();
    return startScreen(t);
  }
  const hist = S.tests.filter(t => t.kind !== "paper").slice(-10).reverse();
  return `<h1>Mock Tests</h1>
  <p class="muted">A fresh random mock every time, drawn from the practice bank with the exam's blueprint. Maths questions are weighted by how often each chapter appeared in the 2022 IPO paper.</p>
  <div class="grid">
    <div class="card"><b>Full mock (2026 pattern)</b><p class="small muted">38 English + 37 GK + 100 Maths · 150 min. Follows the advertised 150/200 marks split.</p><a class="btn primary" href="#/mock/full">Set up</a></div>
    <div class="card"><b>Full mock (2022 pattern)</b><p class="small muted">50 English + 50 GK + 75 Maths · 150 min. The layout of the last real paper.</p><a class="btn" href="#/mock/full/2022">Set up</a></div>
    <div class="card"><b>Maths sectional</b><p class="small muted">100 maths · 95 min. Trains the ~55 s/question pace the 2026 maths section needs.</p><a class="btn primary" href="#/mock/maths">Set up</a></div>
    <div class="card"><b>English + GK sectional</b><p class="small muted">75 questions · 40 min.</p><a class="btn primary" href="#/mock/verbal">Set up</a></div>
    <div class="card"><b>Weak-topic mock</b><p class="small muted">30 questions from your 5 weakest topics · 35 min.</p><a class="btn primary" href="#/mock/weak">Set up</a></div>
  </div>
  <h2>Custom test</h2>
  <div class="card"><div class="row"><select id="cMod" multiple size="8" style="min-width:300px">${MODULES.map(m => `<option value="${m.id}">${TRACKS[m.track].name.split(" ").pop()} · ${esc(m.title)}</option>`).join("")}</select>
  <div><label>Questions <input type="number" id="cN" value="20" min="5" max="100" style="width:80px"></label><br><br><label>Minutes <input type="number" id="cMin" value="20" min="5" max="180" style="width:80px"></label><br><br><button class="btn primary" id="cGo">Start custom test</button></div></div>
  <p class="small muted">Hold Ctrl/Cmd to select several modules.</p></div>
  ${hist.length ? `<h2>History</h2><div class="card"><table class="t"><tr><th>Date</th><th>Test</th><th>Score</th></tr>${hist.map(t => `<tr><td>${fmtDate(t.date)}</td><td><a href="#/result/${t.id}">${esc(t.title)}</a></td><td>${t.score}/${t.max} (${pct(t.score, t.max)}%)</td></tr>`).join("")}</table></div>` : ""}`;
};
function bindMock([kind]) {
  if (kind) return bindStart();
  $("#cGo")?.addEventListener("click", () => {
    const mods = [...$("#cMod").selectedOptions].map(o => o.value);
    if (!mods.length) return alertInline("Pick at least one module.");
    const n = Math.max(5, Math.min(100, +$("#cN").value || 20));
    pendingTest = { title: `Custom test (${mods.length} module${mods.length > 1 ? "s" : ""})`, kind: "custom", ref: "custom", minutes: +$("#cMin").value || 20, qids: pickFrom(mods.map(id => MOD[id]), n), n };
    pendingTest.n = pendingTest.qids.length;
    S.active = null;
    app.innerHTML = startScreen(pendingTest);
    bindStart();
  });
}
function alertInline(msg) { const d = document.createElement("div"); d.className = "callout warn"; d.textContent = msg; app.prepend(d); setTimeout(() => d.remove(), 3000); }

function pickFrom(mods, n, weights) {
  const pool = mods.map(m => shuffle(m.practice.map(q => q.id)).sort((a, b) => (S.attempts[a] ? 1 : 0) - (S.attempts[b] ? 1 : 0)));
  const w = weights || mods.map(() => 1);
  const total = w.reduce((a, b) => a + b, 0);
  const alloc = w.map(x => Math.floor((n * x) / total));
  let rest = n - alloc.reduce((a, b) => a + b, 0);
  w.map((x, i) => [((n * x) / total) % 1, i]).sort((a, b) => b[0] - a[0]).forEach(([, i]) => { if (rest > 0) { alloc[i]++; rest--; } });
  const out = [];
  pool.forEach((p, i) => out.push(...p.slice(0, alloc[i])));
  const spare = shuffle(pool.flatMap((p, i) => p.slice(alloc[i])));
  while (out.length < n && spare.length) out.push(spare.pop());
  return out;
}
function buildMock(kind, arg) {
  const by = t => MODULES.filter(m => m.track === t && m.practice.length);
  const mathsW = by("maths").map(m => 1 + pyqWeight(m));
  const sec = (t, n) => shuffle(pickFrom(by(t), n, t === "maths" ? mathsW : null));
  if (kind === "full") { const pt = PATTERNS[arg] || PATTERNS[2026]; const qids = [...sec("english", pt.english), ...sec("gk", pt.gk), ...sec("maths", pt.maths)]; return { title: `Full mock test — ${pt.label}`, kind, ref: `full-${arg || 2026}`, minutes: 150, qids, n: qids.length }; }
  if (kind === "maths") { const qids = sec("maths", 100); return { title: "Maths sectional mock", kind, ref: "maths", minutes: 95, qids, n: qids.length }; }
  if (kind === "verbal") { const qids = [...sec("english", 38), ...sec("gk", 37)]; return { title: "English + GK sectional", kind, ref: "verbal", minutes: 40, qids, n: qids.length }; }
  if (kind === "phase") {
    const mods = by("maths").filter(m => m.phase === +arg);
    if (!mods.length) return null;
    const earlier = by("maths").filter(m => m.phase < +arg);
    const qids = shuffle([...pickFrom(mods, earlier.length ? 21 : 30), ...(earlier.length ? pickFrom(earlier, 9) : [])]);
    return { title: `Phase ${arg} checkpoint`, kind: `phase-${arg}`, ref: `phase-${arg}`, minutes: 35, qids, n: qids.length }; }
  if (kind === "weak") {
    const weak = topicStats(Object.keys(S.attempts).filter(id => Q[id])).filter(t => t.n >= 2).sort((a, b) => a.acc - b.acc).slice(0, 5).map(t => t.topic);
    const ids = shuffle(MODULES.flatMap(m => m.practice).filter(q => weak.includes(q.topic)).map(q => q.id)).sort((a, b) => (lastAttempt(a)?.c ?? 0) - (lastAttempt(b)?.c ?? 0)).slice(0, 30);
    if (!ids.length) return { title: "Weak-topic mock — answer some practice questions first", kind, ref: "weak", minutes: 35, qids: pickFrom(by("maths"), 30), n: 30 };
    return { title: `Weak-topic mock (${weak.map(topicName).join(", ")})`, kind, ref: "weak", minutes: 35, qids: shuffle(ids), n: ids.length };
  }
  return null;
}

let examTimer = null, qShownAt = 0;
views.exam = () => {
  const t = S.active;
  if (!t) return `<div class="card">No test in progress. <a href="#/mock">Start one</a>.</div>`;
  return `<div class="exam"><div id="exQ"></div>
  <div class="panel card"><div class="row"><div class="timer" id="exTimer"></div><span class="spacer"></span><button class="btn primary sm" id="exSubmit">Submit</button></div>
  <div class="small muted" id="exCount"></div>
  <details id="palWrap" ${innerWidth > 900 ? "open" : ""}><summary class="small" style="cursor:pointer;padding:6px 0">Question palette</summary>
  <div class="legend"><span><i style="background:var(--good)"></i>answered</span><span><i style="background:var(--meg)"></i>marked</span><span><i style="border:1px solid var(--line)"></i>not answered</span></div>
  <div class="palette" id="exPal"></div></details></div></div>`;
};
function bindExam() {
  const t = S.active;
  if (!t) return;
  const secOf = id => sectionOf(Q[id]);
  const track = () => { const id = t.qids[t.cur]; t.spent[id] = (t.spent[id] || 0) + (Date.now() - qShownAt); qShownAt = Date.now(); };
  const drawQ = () => {
    const id = t.qids[t.cur];
    const secStart = t.qids.findIndex(x => secOf(x) === secOf(id));
    $("#exQ").innerHTML = `<div class="row small muted" style="margin-bottom:8px"><span class="tag acc" data-timer></span>${[...new Set(t.qids.map(secOf))].map(s => `<button class="btn sm ${s === secOf(id) ? "primary" : ""}" data-jump="${t.qids.findIndex(x => secOf(x) === s)}">${TRACKS[s].name}</button>`).join("")}</div>`
      + qCard(id, t.cur + 1, { chosen: t.answers[id] ?? null, showPrev: false }).replace(`<b>Q${t.cur + 1}</b>`, `<b>Q${t.cur + 1}</b><span>(${TRACKS[secOf(id)].name} ${t.cur - secStart + 1})</span>`)
      + `<div class="row"><button class="btn" id="exPrev" ${t.cur ? "" : "disabled"}>← Prev</button><button class="btn" id="exFlag">${t.flags[id] ? "Unmark" : "Mark for review"}</button><button class="btn" id="exClear">Clear</button><span class="spacer"></span><button class="btn primary" id="exNext">${t.cur < t.qids.length - 1 ? "Save & next →" : "Last question"}</button></div>`;
    typeset($("#exQ"));
    drawPal();
  };
  const drawPal = () => {
    $("#exPal").innerHTML = t.qids.map((id, i) => `<button data-jump="${i}" class="${t.answers[id] != null ? "ans" : ""} ${t.flags[id] ? "flag" : ""} ${i === t.cur ? "cur" : ""}">${i + 1}</button>`).join("");
    const a = Object.keys(t.answers).length;
    $("#exCount").textContent = `${a}/${t.qids.length} answered · ${Object.values(t.flags).filter(Boolean).length} marked`;
  };
  const go = i => { track(); t.cur = Math.max(0, Math.min(t.qids.length - 1, i)); save(); drawQ(); window.scrollTo({ top: 0 }); };
  app.onclick = e => {
    const j = e.target.closest("[data-jump]");
    if (j) return go(+j.dataset.jump);
    const o = e.target.closest(".opt");
    if (o) { t.answers[t.qids[t.cur]] = +o.dataset.i; save(); drawQ(); return; }
    const id = e.target.closest("button")?.id;
    if (id === "exPrev") go(t.cur - 1);
    if (id === "exNext") go(t.cur + 1);
    if (id === "exFlag") { t.flags[t.qids[t.cur]] = !t.flags[t.qids[t.cur]]; save(); drawQ(); }
    if (id === "exClear") { delete t.answers[t.qids[t.cur]]; save(); drawQ(); }
    if (id === "exSubmit") {
      const left = t.qids.length - Object.keys(t.answers).length;
      if (left && !confirmInline(`${left} unanswered. With no negative marking (as in 2022), a guess can only gain marks. Fill them in, or click Submit again to submit anyway.`)) return;
      track(); finishTest();
    }
  };
  const tick = () => {
    const r = remainingSec();
    const el = $("#exTimer");
    if (!el) return clearInterval(examTimer);
    el.textContent = fmtTime(Math.max(0, r));
    document.querySelectorAll("[data-timer]").forEach(x => (x.textContent = "⏱ " + fmtTime(Math.max(0, r))));
    el.classList.toggle("low", r < 300);
    if (r <= 0) { track(); finishTest(); }
  };
  qShownAt = Date.now();
  clearInterval(examTimer);
  examTimer = setInterval(tick, 1000);
  tick(); drawQ();
}
let confirmArmed = 0;
function confirmInline(msg) {
  if (Date.now() - confirmArmed < 8000) return true;
  confirmArmed = Date.now(); alertInline(msg); return false;
}
function finishTest() {
  clearInterval(examTimer);
  const t = S.active;
  if (!t) return;
  let score = 0;
  t.qids.forEach(id => {
    const a = t.answers[id];
    if (a == null) { S.review[id] = { box: 0, due: today() + DAY }; return; }
    score += recordAttempt(id, a, t.spent[id] || 0) * 2;
  });
  const res = { id: t.id, title: t.title, kind: t.kind, ref: t.ref, date: Date.now(), qids: t.qids, answers: t.answers, spent: t.spent, score, max: t.qids.length * 2, durationSec: Math.round(Math.min(t.minutes * 60, (Date.now() - t.start) / 1000)) };
  S.tests.push(res);
  if (S.tests.length > 60) S.tests.shift();
  S.active = null;
  confirmArmed = 0;
  save();
  location.hash = `#/result/${res.id}`;
}

views.result = ([id]) => {
  const r = S.tests.find(t => t.id === id);
  if (!r) return notFound();
  const secs = [...new Set(r.qids.map(q => sectionOf(Q[q])))];
  const row = s => {
    const ids = r.qids.filter(q => sectionOf(Q[q]) === s);
    const c = ids.filter(q => r.answers[q] === Q[q].answer).length;
    const un = ids.filter(q => r.answers[q] == null).length;
    const time = ids.reduce((a, q) => a + (r.spent?.[q] || 0), 0) / 1000;
    const seen = ids.filter(q => r.spent?.[q]).length;
    return { s, n: ids.length, c, un, wrong: ids.length - c - un, time, avg: seen ? time / seen : 0 };
  };
  const rows = secs.map(row);
  const topics = {};
  r.qids.forEach(q => { const k = Q[q].topic; topics[k] ||= { n: 0, c: 0 }; topics[k].n++; topics[k].c += r.answers[q] === Q[q].answer ? 1 : 0; });
  const tlist = Object.entries(topics).map(([k, v]) => ({ k, ...v, acc: pct(v.c, v.n) })).sort((a, b) => a.acc - b.acc);
  const prev = S.tests.filter(t => t.ref === r.ref && t.date < r.date).at(-1);
  return `<h1>${esc(r.title)} — result</h1><p class="muted">${fmtDate(r.date)} · time used ${fmtTime(r.durationSec)}</p>
  <div class="grid"><div class="card"><div class="stat-label">Score</div><div class="stat">${r.score}/${r.max}</div><div class="small muted">${pct(r.score, r.max)}%${prev ? ` · previous attempt ${prev.score}/${prev.max}` : ""}</div></div>
  ${rows.map(x => `<div class="card"><div class="stat-label">${TRACKS[x.s].name}</div><div class="stat">${x.c * 2}/${x.n * 2}</div><div class="small muted">${x.c} ✓ · ${x.wrong} ✗ · ${x.un} blank · avg ${Math.round(x.avg)} s/Q (target ${TRACKS[x.s].secPerQ})</div></div>`).join("")}</div>
  ${rows.some(x => x.un) ? `<div class="callout warn">You left ${rows.reduce((a, x) => a + x.un, 0)} questions blank. Under 2022 scoring (no negative marking), random guesses would have earned about ${Math.round(rows.reduce((a, x) => a + x.un, 0) / 4) * 2} more marks on average.</div>` : ""}
  ${r.kind === "paper" && PAPER[r.ref]?.kind === "ipo" ? placement(r) : ""}
  ${r.kind.startsWith("check-") ? checkAdvice(r) : ""}
  <h2>By topic (weakest first)</h2><div class="card">${tlist.map(t => barRow(topicName(t.k), t.acc, `${t.c}/${t.n}`, t.acc < 50 ? "var(--bad)" : t.acc < 75 ? "var(--warn)" : "var(--good)")).join("")}</div>
  <h2>Question review</h2><div class="filters" id="rf"><button class="on" data-f="wrong">Wrong &amp; blank</button><button data-f="all">All</button><button data-f="slow">Slowest 15</button></div><div id="rlist"></div>`;
};
function placement(r) {
  const rows = MODULES.map(m => {
    const ids = r.qids.filter(q => m.topics?.includes(Q[q].topic));
    const c = ids.filter(q => r.answers[q] === Q[q].answer).length;
    return { m, n: ids.length, c, acc: pct(c, ids.length) };
  }).filter(x => x.n >= 2).sort((a, b) => a.acc - b.acc);
  if (!rows.length) return "";
  const verdict = x => x.acc >= 75 ? `<span class="tag good">strong: pretest, then straight to practice</span>` : x.acc >= 40 ? `<span class="tag warn">partial: skim lessons, focus on examples</span>` : `<span class="tag bad">study fully</span>`;
  return `<h2>Placement: what this means for your study plan</h2><div class="card"><p class="small muted">Based on the modules with at least 2 questions in this paper. Small samples, so treat this as a guide, and confirm with each module's pretest.</p>
  <table class="t"><tr><th>Module</th><th>Score</th><th>Suggestion</th></tr>${rows.map(x => `<tr><td><a href="#/module/${x.m.id}">${esc(x.m.title)}</a></td><td>${x.c}/${x.n}</td><td>${verdict(x)}</td></tr>`).join("")}</table></div>`;
}
function checkAdvice(r) {
  const m = MOD[r.kind.slice(6)];
  if (!m) return "";
  const pass = r.score / r.max >= 0.75;
  const missed = [...new Set(r.qids.filter(q => r.answers[q] !== Q[q].answer).map(q => Q[q].topic))];
  return `<div class="callout ${pass ? "good" : "warn"}">${pass ? `<b>Passed.</b> ${esc(m.title)} is now in your daily mix, so it will keep coming back until the exam.` : `<b>Not yet: 75% needed.</b> Revisit ${missed.map(t => `<b>${esc(topicName(t))}</b>`).join(", ")} using the worked examples and the questions you got wrong below. Retake the check tomorrow.`} <a href="#/module/${m.id}">Back to module →</a></div>`;
}
function bindResult([id]) {
  const r = S.tests.find(t => t.id === id);
  if (!r) return;
  const draw = f => {
    let ids = r.qids;
    if (f === "wrong") ids = ids.filter(q => r.answers[q] !== Q[q].answer);
    if (f === "slow") ids = [...ids].sort((a, b) => (r.spent?.[b] || 0) - (r.spent?.[a] || 0)).slice(0, 15);
    const el = $("#rlist");
    el.innerHTML = ids.map(q => qCard(q, r.qids.indexOf(q) + 1, { reveal: true, chosen: r.answers[q] ?? null, showPrev: false }).replace("</b>", `</b><span>${Math.round((r.spent?.[q] || 0) / 1000)} s</span>`)).join("") || `<div class="card callout good">Nothing to show — all correct!</div>`;
    typeset(el);
    document.querySelectorAll("#rf button").forEach(b => b.classList.toggle("on", b.dataset.f === f));
  };
  $("#rf").onclick = e => e.target.dataset.f && draw(e.target.dataset.f);
  draw("wrong");
}

views.stats = () => {
  const ids = Object.keys(S.attempts).filter(id => Q[id]);
  if (!ids.length) return `<h1>Topic Analysis</h1><div class="card muted">Answer some practice questions first.</div>`;
  const ts = topicStats(ids);
  const full = S.tests.filter(t => t.kind === "full" || t.kind === "paper");
  return `<h1>Topic Analysis</h1><p class="muted">Accuracy on your latest attempt at each question, grouped by topic. Red topics are where extra study hours earn the most marks.</p>
  ${Object.keys(TRACKS).map(s => { const list = ts.filter(t => t.section === s).sort((a, b) => a.acc - b.acc); return list.length ? `<h2>${TRACKS[s].name}</h2><div class="card">${list.map(t => barRow(topicName(t.topic), t.acc, `${t.acc}% (${t.n})`, t.acc < 50 ? "var(--bad)" : t.acc < 75 ? "var(--warn)" : "var(--good)")).join("")}</div>` : ""; }).join("")}
  ${full.length ? `<h2>Full-length tests</h2><div class="card">${full.map(t => barRow(`${fmtDate(t.date)} · ${t.title}`, pct(t.score, t.max), `${t.score}/${t.max}`, "var(--accent)")).join("")}</div>` : ""}`;
};

views.settings = () => `<h1>Settings &amp; Backup</h1>
  <div class="card"><h3 style="margin-top:0">Backup</h3><p class="small muted">Progress is stored only in this browser. Export it to move to another device or keep a backup.</p>
  <div class="row"><button class="btn" id="exp">Export progress</button><label class="btn">Import progress<input type="file" id="imp" accept="application/json" hidden></label></div></div>
  <div class="card"><h3 style="margin-top:0">Reset</h3><button class="btn danger" id="reset">Erase all progress</button></div>`;
function bindSettings() {
  $("#exp").onclick = () => { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(S)], { type: "application/json" })); a.download = `ipo-prep-progress-${new Date().toISOString().slice(0, 10)}.json`; a.click(); };
  $("#imp").onchange = async e => { try { const d = JSON.parse(await e.target.files[0].text()); Object.assign(S, d); save(); route(); alertInline("Imported."); } catch { alertInline("That file isn't a valid progress export."); } };
  $("#reset").onclick = () => { if (!confirmInline("Click Erase again within 8 seconds to erase everything.")) return; localStorage.removeItem(KEY); location.hash = "#/"; location.reload(); };
}

const notFound = () => `<div class="card">Page not found. <a href="#/">Go to the dashboard</a>.</div>`;

const binders = { mix: bindMix, path: bindPath, about: bindAbout, module: bindModule, review: bindReview, formulas: bindFormulas, drill: bindDrill, paper: bindPaper, mock: bindMock, exam: bindExam, result: bindResult, settings: bindSettings };

function route() {
  window.__keys = null;
  clearInterval(examTimer);
  clearInterval(window.__drill);
  const [name = "", ...args] = (location.hash.replace(/^#\/?/, "") || "").split("/");
  if (S.active && name !== "exam" && remainingSec() <= 0) finishTest();
  app.onclick = null; app.onchange = null;
  app.innerHTML = (views[name] || notFound)(args);
  typeset(app);
  binders[name]?.(args);
  refreshChrome();
  $("#side").classList.remove("open");
  window.scrollTo({ top: 0 });
}

app.addEventListener("click", e => { const g = e.target.closest("[data-go]"); if (g) location.hash = g.dataset.go; });
$("#menuBtn").onclick = () => $("#side").classList.toggle("open");
$("#themeBtn").onclick = () => { const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark"; document.documentElement.dataset.theme = t; localStorage.setItem("ipo-theme", t); };
window.addEventListener("hashchange", route);
document.addEventListener("keydown", e => window.__keys?.(e));
route();
