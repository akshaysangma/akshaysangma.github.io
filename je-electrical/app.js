"use strict";

const DATA = window.JE_DATA || { decks: [], cards: [], docs: [] };
const DECKS = DATA.decks;
const CARDS = DATA.cards;
const CARD = Object.fromEntries(CARDS.map(c => [c.id, c]));
const DECK = Object.fromEntries(DECKS.map(d => [d.id, d]));
const DOC = Object.fromEntries(DATA.docs.map(d => [d.id, d]));

const INTERVIEW = {
  date: "2026-11-12",
  time: "10:30",
  venue: "Office of the Meghalaya Public Service Commission, Lower Lachaumiere, Shillong",
  notice: "MPSC Notification No. MPSC/Ex-C/78/2024/20, 29 Oct 2026",
  noticeUrl: "https://mpsc.meghalaya.gov.in/results/Result29Oct2026d.pdf",
};
const MOCK_WEIGHTS = { me: 3, work: 2, pwd: 2, bldg: 3, rules: 1, fund: 3, gk: 2 };
const RATINGS = [
  { s: 0, label: "Again", cls: "danger", key: "1" },
  { s: 1, label: "OK", cls: "", key: "2" },
  { s: 2, label: "Solid", cls: "good", key: "3" },
];

const DOCUMENTS = [
  { id: "intim", text: "Intimation Letter, downloaded from the MPSC website (print 2 copies)", basis: "notice" },
  { id: "degree", text: "Original B.E. (Electrical) degree certificate and all mark sheets", basis: "advt" },
  { id: "dob", text: "Original Class X certificate / admit card (date-of-birth proof)", basis: "advt" },
  { id: "st", text: "Original Garo ST certificate (the post is reserved for Garo)", basis: "advt" },
  { id: "xii", text: "Class XII certificate and mark sheet", basis: "suggested" },
  { id: "admit", text: "Screening-test admit card (29 July 2026)", basis: "suggested" },
  { id: "id", text: "Photo ID (Aadhaar / Voter ID)", basis: "suggested" },
  { id: "photos", text: "4 passport-size photographs", basis: "suggested" },
  { id: "copies", text: "One set of self-attested photocopies of everything above", basis: "suggested" },
  { id: "noc", text: "MeECL experience certificate / NOC: not asked in the advertisement; ask your office and MPSC", basis: "ask" },
  { id: "prc", text: "Permanent Residential Certificate, if you have one", basis: "suggested" },
];
const BASIS = {
  notice: ["tag acc", "MPSC notice"],
  advt: ["tag good", "Advertisement"],
  suggested: ["tag", "Suggested"],
  ask: ["tag warn", "Check"],
};

const PLAN = [
  { d: "2026-10-31", tasks: ["Download the Intimation Letter; confirm date, time and the document list", "Ask your office about an experience certificate / NOC", "Read Reference → Recruitment & PWD facts", "About you & HR: fill in every [bracket] in the notes box"] },
  { d: "2026-11-01", tasks: ["About you & HR: say each answer aloud twice; record one on your phone", "Fundamentals: DC/AC circuits and transformers"] },
  { d: "2026-11-02", tasks: ["Fundamentals: DC and induction motors, synchronous machines and hydro", "Your MeECL work deck: prepare your one real problem-solving story (QA.10)"] },
  { d: "2026-11-03", tasks: ["Fundamentals: transmission & distribution, switchgear & protection", "Drill weak cards"] },
  { d: "2026-11-04", tasks: ["Building electrical: wiring, earthing, testing", "Fundamentals: measurement, power electronics"] },
  { d: "2026-11-05", tasks: ["Building electrical: load design (work through the 300 m² office example), HT substation", "Fundamentals: the numerical one-liners, done mentally"] },
  { d: "2026-11-06", tasks: ["Building electrical: DG sets, lifts/fire/pumps, solar, site safety", "Mock interview #1 (15 questions)"] },
  { d: "2026-11-07", tasks: ["PWD role & works procedure deck", "Acts, rules & codes deck"] },
  { d: "2026-11-08", tasks: ["Meghalaya & power sector deck", "Reference → Meghalaya, MeECL & power notes (skim the tables)", "Mock interview #2"] },
  { d: "2026-11-09", tasks: ["News check: cabinet reshuffle, Power and PWD ministers, any new MPSC notice", "Drill weak cards across all decks"] },
  { d: "2026-11-10", tasks: ["Mock interview #3 with a friend or family member asking the questions", "Pack the documents folder (Dashboard checklist); iron formal clothes"] },
  { d: "2026-11-11", tasks: ["Light revision only: About you & HR plus weak cards", "Travel to Shillong; locate the MPSC office (Lower Lachaumiere) today", "Sleep early"] },
  { d: "2026-11-12", tasks: ["Reach the MPSC office by 9:30 AM with all originals", "Interview at 10:30 AM: listen fully, answer briefly, say \"I don't know, sir/madam\" rather than guess"] },
];

const KEY = "je-prep-v1";
const S = Object.assign({ r: {}, notes: {}, docs: {}, plan: {}, mocks: [], date: "" }, JSON.parse(localStorage.getItem(KEY) || "{}"));
const save = () => localStorage.setItem(KEY, JSON.stringify(S));

const $ = (s, el = document) => el.querySelector(s);
const app = $("#app");
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const md = s => (s ? marked.parse(String(s)) : "");
const mdInline = s => (s ? marked.parseInline(String(s)) : "");
const pct = (a, b) => (b ? Math.round((100 * a) / b) : 0);
const DAY = 86400000;
const todayStr = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };
const fmtDay = iso => new Date(iso + "T00:00").toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" });
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const interviewDate = () => S.date || INTERVIEW.date;

// ---------- progress model ----------
const rating = id => S.r[id]?.s;
function rate(id, s) {
  const r = (S.r[id] ||= { n: 0 });
  r.s = s;
  r.n++;
  r.at = Date.now();
  save();
}
function deckStats(deckId) {
  const cards = deckId ? CARDS.filter(c => c.deck === deckId) : CARDS;
  const st = { total: cards.length, solid: 0, ok: 0, again: 0, fresh: 0 };
  cards.forEach(c => { const s = rating(c.id); if (s === 2) st.solid++; else if (s === 1) st.ok++; else if (s === 0) st.again++; else st.fresh++; });
  return st;
}
function queue(cards) {
  const rank = c => { const s = rating(c.id); return s === 0 ? 0 : s === undefined ? 1 : s === 1 ? 2 : 3; };
  return [...cards].sort((a, b) => rank(a) - rank(b) || (S.r[a.id]?.at || 0) - (S.r[b.id]?.at || 0));
}
const weakCards = () => CARDS.filter(c => rating(c.id) === 0);

// ---------- shared card rendering ----------
function answerBlock(c) {
  return `<div class="expl md">${md(c.a)}
    ${c.fu ? `<p class="fu"><b>Likely follow-up:</b> ${mdInline(c.fu)}</p>` : ""}
    ${c.src ? `<p class="small muted"><b>Source:</b> ${mdInline(c.src)}</p>` : ""}
    ${c.unv ? `<p class="note">Contains a value marked unverified. Say it as "generally" or leave it out.</p>` : ""}
  </div>
  <label class="small muted notes-label">Your own wording / notes
    <textarea class="notes" data-note="${esc(c.id)}" rows="3" placeholder="Write the answer the way you would say it.">${esc(S.notes[c.id] || "")}</textarea>
  </label>
  <div class="row rate-row">
    <span class="small muted">How well could you say this?</span>
    ${RATINGS.map(r => `<button class="btn sm ${r.cls} ${rating(c.id) === r.s ? "on" : ""}" data-rate="${r.s}" data-id="${esc(c.id)}" title="Key ${r.key}">${r.label}</button>`).join("")}
  </div>`;
}
const ratingTag = id => {
  const s = rating(id);
  return s === 0 ? `<span class="tag bad">Again</span>` : s === 1 ? `<span class="tag warn">OK</span>` : s === 2 ? `<span class="tag good">Solid</span>` : "";
};
function bindNotes() {
  app.oninput = e => {
    const t = e.target.closest("[data-note]");
    if (!t) return;
    if (t.value.trim()) S.notes[t.dataset.note] = t.value; else delete S.notes[t.dataset.note];
    save();
  };
}
const qhead = (c, label) => `<div class="qhead"><span>${esc(label)}</span>${ratingTag(c.id)}${c.unv ? `<span class="tag warn">has unverified value</span>` : ""}${S.notes[c.id] ? `<span class="tag acc">your notes</span>` : ""}</div>`;

// ---------- views ----------
const views = {};

views[""] = () => {
  const d = interviewDate();
  const days = Math.round((new Date(d + "T00:00") - new Date(todayStr() + "T00:00")) / DAY);
  const st = deckStats();
  const docsDone = DOCUMENTS.filter(x => S.docs[x.id]).length;
  const todays = PLAN.find(p => p.d === todayStr());
  const lastMock = S.mocks[S.mocks.length - 1];
  return `
  <h1>JE (Electrical) under PWD — personal interview</h1>
  <p class="muted">MPSC recruitment, Advt. No. MPSC/ADVT-54/1/2020-2021/45 (22 Dec 2021), one post reserved for Garo candidates, Pay Level 11.</p>
  <div class="grid">
    <div class="card"><div class="stat">${days > 0 ? days : days === 0 ? "Today" : "–"}</div><div class="stat-label">${days > 0 ? "days to interview" : days === 0 ? "interview day" : "interview date passed"}</div></div>
    <div class="card"><div class="stat">${st.solid}/${st.total}</div><div class="stat-label">cards rated solid</div></div>
    <div class="card"><div class="stat">${st.again}</div><div class="stat-label"><a href="#/weak">weak cards</a></div></div>
    <div class="card"><div class="stat">${S.mocks.length}</div><div class="stat-label">mock interviews done</div></div>
  </div>

  <div class="card" style="margin-top:16px">
    <h3 style="margin-top:0">Interview</h3>
    <table class="t">
      <tr><th>Date &amp; time</th><td><b>${fmtDay(d)} ${new Date(d + "T00:00").getFullYear()}, ${INTERVIEW.time} AM</b>${S.date ? ` <span class="tag warn">set by you</span>` : ""}</td></tr>
      <tr><th>Venue</th><td>${INTERVIEW.venue}</td></tr>
      <tr><th>Candidates</th><td>11 roll numbers called for 1 post</td></tr>
      <tr><th>Marks</th><td>Maximum not published. In recent MPSC engineering results the final total = screening marks + interview marks; interview marks awarded were about 21–36.</td></tr>
      <tr><th>Source</th><td><a href="${INTERVIEW.noticeUrl}" target="_blank" rel="noopener">${INTERVIEW.notice}</a></td></tr>
    </table>
    <div class="callout warn">The MPSC notice says <b>12 November</b>. If your Intimation Letter shows a different date, follow the letter and change the date under <a href="#/backup">Backup &amp; reset</a>.</div>
  </div>

  ${todays ? `<div class="card"><h3 style="margin-top:0">Today's plan · ${fmtDay(todays.d)}</h3>${planTasks(todays)}<p class="small"><a href="#/plan">Full 12-day plan</a></p></div>` : ""}

  <div class="card">
    <h3 style="margin-top:0">Documents to carry <span class="tag">${docsDone}/${DOCUMENTS.length}</span></h3>
    ${DOCUMENTS.map(x => `<label class="path-step ${S.docs[x.id] ? "done" : ""}"><input type="checkbox" data-doc="${x.id}" ${S.docs[x.id] ? "checked" : ""}><span><span class="ptitle">${esc(x.text)}</span> <span class="${BASIS[x.basis][0]}">${BASIS[x.basis][1]}</span></span></label>`).join("")}
    <p class="small muted">"Advertisement" items are required by the advertisement (originals of educational qualification, date of birth and caste/community certificates). The exact list is in your Intimation Letter.</p>
  </div>

  <h2>Decks</h2>
  <div class="modlist">${DECKS.map(deckRow).join("")}</div>
  ${lastMock ? `<p class="small muted">Last mock: ${new Date(lastMock.at).toLocaleString()} · ${lastMock.solid}/${lastMock.n} solid.</p>` : ""}`;
};
function deckRow(d) {
  const st = deckStats(d.id);
  return `<a class="card mod ${st.solid === st.total ? "done" : ""}" href="#/deck/${d.id}">
    <div class="num">${st.total}</div>
    <div class="body"><div class="title">${esc(d.name)}</div><div class="small muted">${esc(d.blurb)}</div>
      <div class="meter good"><div style="width:${pct(st.solid, st.total)}%"></div></div>
      <div class="small muted">${st.solid} solid · ${st.ok} OK · ${st.again} again · ${st.fresh} not yet rated</div></div></a>`;
}
function planTasks(p) {
  return p.tasks.map((t, i) => {
    const k = `${p.d}:${i}`;
    return `<label class="path-step ${S.plan[k] ? "done" : ""}"><input type="checkbox" data-plan="${k}" ${S.plan[k] ? "checked" : ""}><span class="ptitle">${esc(t)}</span></label>`;
  }).join("");
}
function bindChecks() {
  app.onchange = e => {
    const t = e.target;
    if (t.dataset.doc) { if (t.checked) S.docs[t.dataset.doc] = 1; else delete S.docs[t.dataset.doc]; }
    else if (t.dataset.plan) { if (t.checked) S.plan[t.dataset.plan] = 1; else delete S.plan[t.dataset.plan]; }
    else return;
    save();
    t.closest(".path-step")?.classList.toggle("done", t.checked);
    refreshChrome();
  };
}

views.plan = () => `
  <h1>12-day plan</h1>
  <p class="muted">About 2–3 hours a day. Say answers aloud: an interview is spoken, and reading silently feels more prepared than it is.</p>
  ${PLAN.map(p => `<div class="card ${p.d === todayStr() ? "today" : ""}"><div class="phase-head"><h3 style="margin:0">${fmtDay(p.d)}</h3>${p.d === todayStr() ? `<span class="tag acc">Today</span>` : ""}</div>${planTasks(p)}</div>`).join("")}`;

let deckFilter = "all";
views.deck = ([id]) => {
  const d = DECK[id];
  if (!d) return notFound();
  const st = deckStats(id);
  const cards = CARDS.filter(c => c.deck === id);
  const shown = cards.filter(c => {
    const s = rating(c.id);
    return deckFilter === "all" || (deckFilter === "new" && s === undefined) || (deckFilter === "again" && s === 0) || (deckFilter === "ok" && s === 1) || (deckFilter === "solid" && s === 2);
  });
  let sec = null;
  const list = shown.map(c => {
    const head = c.sec !== sec ? `<h3>${esc((sec = c.sec))}</h3>` : "";
    return `${head}<div class="q qa" id="c-${esc(c.id)}">
      ${qhead(c, c.id.slice(3))}
      <div class="qtext"><b>${mdInline(c.q)}</b></div>
      <button class="btn sm reveal" data-reveal="${esc(c.id)}">Show answer</button>
      <div class="ans" hidden></div>
    </div>`;
  }).join("");
  const f = (k, label, n) => `<button class="${deckFilter === k ? "on" : ""}" data-filter="${k}">${label} (${n})</button>`;
  return `
  <h1>${esc(d.name)}</h1>
  <p class="muted">${esc(d.blurb)}</p>
  <div class="row"><a class="btn primary" href="#/drill/${id}">Drill this deck one card at a time</a></div>
  <div class="filters">${f("all", "All", st.total)}${f("new", "Not yet rated", st.fresh)}${f("again", "Again", st.again)}${f("ok", "OK", st.ok)}${f("solid", "Solid", st.solid)}</div>
  ${list || `<div class="card muted">No cards in this filter.</div>`}`;
};
function bindDeck([id]) {
  bindNotes();
  app.onclick = e => {
    const fb = e.target.closest("[data-filter]");
    if (fb) { deckFilter = fb.dataset.filter; route(); return; }
    const rv = e.target.closest("[data-reveal]");
    if (rv) {
      const box = rv.parentElement.querySelector(".ans");
      if (box.hidden) { box.innerHTML = answerBlock(CARD[rv.dataset.reveal]); box.hidden = false; rv.textContent = "Hide answer"; }
      else { box.hidden = true; rv.textContent = "Show answer"; }
      return;
    }
    const rb = e.target.closest("[data-rate]");
    if (rb) {
      rate(rb.dataset.id, +rb.dataset.rate);
      const wrap = rb.closest(".qa");
      wrap.querySelector(".qhead").outerHTML = qhead(CARD[rb.dataset.id], rb.dataset.id.slice(3));
      wrap.querySelectorAll("[data-rate]").forEach(b => b.classList.toggle("on", b === rb));
      refreshChrome();
    }
  };
}

// one-card-at-a-time drill, used by decks, weak cards and the mock interview
let session = null;
function startSession(kind, cards, opts = {}) {
  session = { kind, ids: cards.map(c => c.id), i: 0, shown: false, results: {}, secs: opts.secs || 0, left: opts.secs || 0, timer: null, back: opts.back || "#/" };
}
views.drill = ([id]) => {
  const cards = id === "weak" ? weakCards() : CARDS.filter(c => c.deck === id);
  if (!cards.length) return `<div class="card">Nothing to drill here. <a href="#/">Back to the dashboard</a>.</div>`;
  if (!session || session.kind !== `drill:${id}`) startSession(`drill:${id}`, queue(cards).slice(0, 20), { back: id === "weak" ? "#/weak" : `#/deck/${id}` });
  return sessionView(id === "weak" ? "Weak cards" : DECK[id].name);
};
function sessionView(title) {
  const s = session;
  if (s.i >= s.ids.length) return sessionSummary(title);
  const c = CARD[s.ids[s.i]];
  return `
  <div class="row"><h1 style="margin:0">${esc(title)}</h1><span class="spacer"></span>
    ${s.secs ? `<span class="timer ${s.left <= 10 ? "low" : ""}" id="timer">${s.left}s</span>` : ""}
    <span class="tag">${s.i + 1} / ${s.ids.length}</span></div>
  <div class="q qa drill">
    ${qhead(c, `${DECK[c.deck].name} · ${c.sec}`)}
    <div class="qtext big"><b>${mdInline(c.q)}</b></div>
    ${s.shown ? answerBlock(c) : `<p class="small muted">${s.secs ? "Answer aloud before the timer runs out, then reveal." : "Say your answer aloud first, then reveal."}</p>
      <div class="row"><button class="btn primary" id="show">Reveal model answer <span class="small">(space)</span></button></div>`}
  </div>
  <div class="row"><a class="btn sm" href="${s.back}">End session</a>${s.shown ? `<span class="small muted">Rate with keys 1 / 2 / 3</span>` : ""}</div>`;
}
function sessionSummary(title) {
  const s = session;
  const ids = s.ids.filter(id => s.results[id] !== undefined);
  const n = r => ids.filter(id => s.results[id] === r).length;
  return `
  <h1>${esc(title)}: done</h1>
  <div class="grid"><div class="card"><div class="stat">${n(2)}</div><div class="stat-label">solid</div></div>
    <div class="card"><div class="stat">${n(1)}</div><div class="stat-label">OK</div></div>
    <div class="card"><div class="stat">${n(0)}</div><div class="stat-label">again</div></div></div>
  ${n(0) ? `<h2>Go over these again</h2>${ids.filter(id => s.results[id] === 0).map(id => `<div class="q"><a href="#/deck/${CARD[id].deck}">${esc(DECK[CARD[id].deck].name)}</a> · ${mdInline(CARD[id].q)}</div>`).join("")}` : ""}
  <div class="row" style="margin-top:16px"><a class="btn primary" href="${s.back}">Back</a><button class="btn" id="again">Another round</button></div>`;
}
function bindSession() {
  bindNotes();
  const s = session;
  clearInterval(s.timer);
  if (s.i >= s.ids.length) {
    $("#again").onclick = () => { session = null; route(); };
    return;
  }
  if (s.secs && !s.shown) {
    s.timer = setInterval(() => {
      s.left = Math.max(0, s.left - 1);
      const t = $("#timer");
      if (t) { t.textContent = s.left ? `${s.left}s` : "Time"; t.classList.toggle("low", s.left <= 10); }
      if (!s.left) clearInterval(s.timer);
    }, 1000);
  }
  const reveal = () => { s.shown = true; clearInterval(s.timer); route(); };
  const next = r => {
    const id = s.ids[s.i];
    rate(id, r);
    s.results[id] = r;
    s.i++;
    s.shown = false;
    s.left = s.secs;
    if (s.i >= s.ids.length && s.kind === "mock") {
      S.mocks.push({ at: Date.now(), n: s.ids.length, solid: Object.values(s.results).filter(x => x === 2).length, again: Object.values(s.results).filter(x => x === 0).length });
      save();
    }
    route();
  };
  if ($("#show")) $("#show").onclick = reveal;
  app.onclick = e => { const rb = e.target.closest("[data-rate]"); if (rb) next(+rb.dataset.rate); };
  window.__keys = e => {
    if (e.target.closest?.("textarea, input, select")) return;
    if (!s.shown && (e.key === " " || e.key === "Enter")) { e.preventDefault(); reveal(); }
    else if (s.shown && ["1", "2", "3"].includes(e.key)) next(+e.key - 1);
  };
}
const bindDrill = bindSession;

views.mock = ([state]) => {
  if (state === "run" && session?.kind === "mock") return sessionView("Mock interview");
  const hist = S.mocks.slice(-8).reverse();
  return `
  <h1>Mock interview</h1>
  <p class="muted">Random questions across all decks, weighted like a real board: more on you, your work, building electrical and fundamentals; fewer on rules and GK. Cards you have not yet rated Solid come first. Sit upright, answer aloud, and keep each answer under the time limit.</p>
  <div class="card">
    <div class="row"><label>Questions <select id="mn"><option>10</option><option selected>15</option><option>20</option></select></label>
    <label>Seconds per question <select id="ms"><option>45</option><option selected>60</option><option>90</option></select></label>
    <button class="btn primary" id="mstart">Start</button></div>
  </div>
  ${hist.length ? `<h2>Previous mocks</h2><table class="t"><tr><th>When</th><th>Questions</th><th>Solid</th><th>Again</th></tr>${hist.map(m => `<tr><td>${new Date(m.at).toLocaleString()}</td><td>${m.n}</td><td>${m.solid}</td><td>${m.again}</td></tr>`).join("")}</table>` : ""}`;
};
const OPENER = "00-A.1";
function pickMock(n) {
  const pools = Object.fromEntries(DECKS.map(d => [d.id, shuffle(CARDS.filter(c => c.deck === d.id && c.id !== OPENER)).sort((a, b) => (rating(a.id) === 2) - (rating(b.id) === 2))]));
  const out = [CARD[OPENER]];
  while (out.length < n) {
    const live = DECKS.filter(d => pools[d.id].length);
    if (!live.length) break;
    const total = live.reduce((t, d) => t + (MOCK_WEIGHTS[d.id] || 1), 0);
    let x = Math.random() * total;
    const d = live.find(d => (x -= MOCK_WEIGHTS[d.id] || 1) < 0) || live[0];
    out.push(pools[d.id].shift());
  }
  return out;
}
function bindMock([state]) {
  if (state === "run" && session?.kind === "mock") return bindSession();
  $("#mstart").onclick = () => {
    startSession("mock", pickMock(+$("#mn").value), { secs: +$("#ms").value, back: "#/mock" });
    location.hash = "#/mock/run";
  };
}

views.weak = () => {
  const w = weakCards();
  return `
  <h1>Weak cards</h1>
  <p class="muted">Every card you last rated "Again", across all decks.</p>
  ${w.length ? `<div class="row"><a class="btn primary" href="#/drill/weak">Drill weak cards</a></div>${w.map(c => `<div class="q"><div class="qhead"><a href="#/deck/${c.deck}">${esc(DECK[c.deck].name)}</a> · ${esc(c.sec)}</div>${mdInline(c.q)}</div>`).join("")}` : `<div class="card muted">No weak cards yet. Rate cards as you study them and the ones you mark "Again" collect here.</div>`}`;
};

views.doc = ([id]) => {
  const d = DOC[id];
  if (!d) return notFound();
  return `<div class="card md lesson">${md(d.md)}</div>`;
};

views.backup = () => `
  <h1>Backup &amp; reset</h1>
  <div class="card"><h3 style="margin-top:0">Interview date</h3>
    <p class="small muted">The MPSC notice gives ${INTERVIEW.date}. Change it only if your Intimation Letter says otherwise.</p>
    <div class="row"><input type="date" id="idate" value="${interviewDate()}"><button class="btn" id="dsave">Save date</button><button class="btn" id="dreset">Use notice date</button><span class="small muted" id="dmsg"></span></div></div>
  <div class="card"><h3 style="margin-top:0">Progress</h3>
    <p class="small muted">Ratings, notes and checklists are stored only in this browser. Export them to move to another device.</p>
    <div class="row"><button class="btn" id="exp">Export progress</button><label class="btn">Import progress<input type="file" id="imp" accept="application/json" hidden></label><span class="small muted" id="imsg"></span></div></div>
  <div class="card"><h3 style="margin-top:0">Reset</h3><button class="btn danger" id="reset">Erase all progress</button> <span class="small muted" id="rmsg"></span></div>`;
function bindBackup() {
  $("#dsave").onclick = () => { S.date = $("#idate").value === INTERVIEW.date ? "" : $("#idate").value; save(); refreshChrome(); $("#dmsg").textContent = "Saved."; };
  $("#dreset").onclick = () => { S.date = ""; save(); route(); };
  $("#exp").onclick = () => { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(S)], { type: "application/json" })); a.download = `je-prep-progress-${todayStr()}.json`; a.click(); };
  $("#imp").onchange = async e => {
    try { Object.assign(S, JSON.parse(await e.target.files[0].text())); save(); refreshChrome(); $("#imsg").textContent = "Imported."; }
    catch { $("#imsg").textContent = "That file isn't a valid progress export."; }
  };
  let armed = 0;
  $("#reset").onclick = () => {
    if (Date.now() - armed > 8000) { armed = Date.now(); $("#rmsg").textContent = "Click again within 8 seconds to erase everything."; return; }
    localStorage.removeItem(KEY);
    location.hash = "#/";
    location.reload();
  };
}

const notFound = () => `<div class="card">Page not found. <a href="#/">Go to the dashboard</a>.</div>`;

const binders = { "": bindChecks, plan: bindChecks, deck: bindDeck, drill: bindDrill, mock: bindMock, backup: bindBackup };

function refreshChrome() {
  const days = Math.round((new Date(interviewDate() + "T00:00") - new Date(todayStr() + "T00:00")) / DAY);
  $("#countdown").innerHTML = days > 0 ? `<b>${days}</b> days to interview` : days === 0 ? "<b>Interview today</b>" : "Interview date passed";
  const st = deckStats();
  $("#pathBar").style.width = `${pct(st.solid, st.total)}%`;
  $("#pathLabel").textContent = `${st.solid}/${st.total} solid`;
  $("#weakTag").textContent = st.again || "";
  $("#deckNav").innerHTML = DECKS.map(d => { const s = deckStats(d.id); return `<a href="#/deck/${d.id}">${esc(d.name)} <span class="tag">${s.solid}/${s.total}</span></a>`; }).join("");
  $("#docNav").innerHTML = DATA.docs.map(d => `<a href="#/doc/${d.id}">${esc(d.title)}</a>`).join("");
  const here = location.hash || "#/";
  document.querySelectorAll("nav.side a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === here || (here.startsWith("#/mock") && a.getAttribute("href") === "#/mock")));
}

function route() {
  window.__keys = null;
  if (session?.timer) clearInterval(session.timer);
  const [name = "", ...args] = (location.hash.replace(/^#\/?/, "") || "").split("/");
  if (name !== "drill" && name !== "mock") session = null;
  app.onclick = null;
  app.onchange = null;
  app.oninput = null;
  app.innerHTML = (views[name] || notFound)(args);
  binders[name]?.(args);
  refreshChrome();
  $("#side").classList.remove("open");
  window.scrollTo({ top: 0 });
}

$("#menuBtn").onclick = () => $("#side").classList.toggle("open");
$("#themeBtn").onclick = () => { const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark"; document.documentElement.dataset.theme = t; localStorage.setItem("je-theme", t); };
window.addEventListener("hashchange", route);
document.addEventListener("keydown", e => window.__keys?.(e));
route();
