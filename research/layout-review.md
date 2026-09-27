# Layout, typography, theme and mobile UX review

Scope: `index.html`, `assets/app.css`, `assets/app.js` as of 2026-09-27, measured against published guidance for a self-study site. The learner is an adult, weak in maths, with about 60 days to the exam, and uses both a laptop and a phone.

Method: all numbers are computed from the CSS box model. Character-per-line figures use real glyph advance widths, measured with fontTools on the site's own lesson prose (163k characters, maths and tables stripped). Fonts measured: SF Pro (macOS/iOS `-apple-system`, at text optical size) and Arial/Helvetica. Arial/Helvetica stand in for Segoe UI and Roboto, which were not measured. Contrast uses the WCAG 2.x relative-luminance formula. No browser was available, so rendered behaviour marked **(inferred)** comes from reading the code and was not observed.

Evidence labels: **Standard** = WCAG normative text. **Strong / Moderate / Weak** = strength of the research. **Guidance** = platform or practitioner guidance. **Opinion** = my judgement.

---

## 0. Current layout (from the code)

- **Chrome**: sticky `header.top` holding the menu button (hidden above 900px), brand, a countdown with the day number in `--bad` red, a path progress bar with "n/N steps" (hidden under 900px), and the theme toggle. Computed height ≈ 54px (35.1px icon button + 18px padding + 1px border). `nav.side` still hard-codes `top:51px` (app.css:49, :158).
- **Grid**: `.layout` is `240px 1fr` with `max-width:1320px`. `main` padding is 24/32px, or 16/14px under 900px. Under 900px the sidebar becomes a full-screen overlay opened with ☰.
- **Lessons**: one `.card.md` per lesson, holding a whole markdown lesson. Across 225 lessons, the median is 389 words and the maximum 969. Lessons contain 348 tables in total, and 638 table rows have 4 or more columns. There are 197 display-maths blocks. Pill "lesson-nav" sits above, and Prev / "Done — next lesson →" sits below.
- **Practice / pretest / mix / review / PYQ**: `mountPractice()` (app.js:491) renders **every** question of the set as a vertical list of `.q` cards. A module practice set has 18–30 questions after 25% are held out for the check. Clicking an option replaces that card in place with the revealed explanation.
- **Exam mode** (app.js:811): one question at a time, with a 280px sticky side panel (timer, Submit, legend, 34px palette). Under 900px the panel becomes `position:static; order:-1`, which puts it **above** the question.
- **Theme**: `data-theme` comes from localStorage, otherwise from `prefers-color-scheme`. The ◐ button toggles it.
- **Maths**: KaTeX auto-render. `md(…, bigFrac)` turns `\frac` into `\dfrac` in questions and options. `.katex-display{overflow-x:auto}`.

---

## 1. Guidance table

| # | Guideline | Source | Evidence | Our status (evidence in code) | Exact fix |
|---|---|---|---|---|---|
| 1 | Text contrast ≥ 4.5:1 (normal text) | WCAG 2.2 SC 1.4.3 — https://www.w3.org/TR/WCAG22/#contrast-minimum | Standard (AA) | **Fails in places.** Light `--muted` #8a8984 is 3.50 on card and 3.24 on bg. It is used for `.muted` intro paragraphs, `.small muted` hints, `.qhead`, the `.opt .l` letters, `.stat-label` and `.formula .when`. Light `--accent` links are 4.42/4.08. White on `.btn.primary` is 4.42 (light) and 3.64 (dark). Dark white-on-`--good` (palette "answered", `.btn.good`) is **2.22**, and white-on-`--meg` (palette "marked") is **2.54**. `.tag.acc` is 3.87/3.99. Full table in §2.3. | Light: `--muted:#6b6a65` (5.01 on bg, 5.42 on card); `--accent:#1f6bc2` (4.93 on bg, 5.33 on card, white on it 5.33). Dark: add `--on-accent:#141413` and use `color:var(--on-accent)` on `.btn.primary`, `.btn.good`, `.palette .ans` and `.palette .flag` (8.30 on good, 7.26 on meg, 5.07 on accent). Light `--on-accent:#fff`. `.tag.acc{color:var(--ink)}`. |
| 2 | Non-text contrast ≥ 3:1 for UI states and graphics | SC 1.4.11 — https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | Standard (AA) | **Mostly meets.** Text buttons don't need a 3:1 border ("If a control has visible content … a border … is not required"). The selected option's border `--accent` vs card is 4.42/4.59 ✓. The progress fill vs track is 4.15/5.71 ✓. The meter is 3.41/3.49 ✓. **Fails:** `input[type=date]`, `select` and `textarea` use a `--line` border at 1.30/1.32. These have no visible content, so the boundary identifies them. | Add `--line-strong` (light #8a8984 = 3.50; dark #6d6c66 = 3.17) and use it on the form-control border. |
| 3 | Reflow at 320 CSS px with no 2-D scrolling (data tables and 2-D content exempt) | SC 1.4.10 — https://www.w3.org/WAI/WCAG22/Understanding/reflow.html | Standard (AA) | **Fails at 320px (inferred).** `.brand` and `.countdown` are `white-space:nowrap` flex items. The header's min-content width is ≈ 359px (Arial metrics) to ≈ 370px (SF), which is wider than 320, so the whole page scrolls sideways. It is borderline at 360px, a common Android width, and fits at 390px. Tables (`display:block;overflow-x:auto`) and `.katex-display` scroll inside their own box ✓ (exempt). | `@media (max-width:480px){.brand{min-width:0;overflow:hidden;text-overflow:ellipsis}.countdown{font-size:12px}}`. |
| 4 | Text spacing overrides don't break content | SC 1.4.12 — https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html | Standard (AA) | **Likely meets (inferred).** The only fixed height on text is `.palette button{height:32px}` with 12px digits; at a 1.5 line-height that is 18px of text, so it fits. No `overflow:hidden` on text containers. | None needed. Optionally change the palette to `min-height:32px`. |
| 5 | Target size ≥ 24×24 CSS px (AA); 44×44 (AAA 2.5.5) | SC 2.5.8 — https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html | Standard | **Meets AA; below AAA and platform guidance** (see §2.4). The smallest targets are the "I'm guessing" label (≈19.8px tall; passes only through the spacing exception) and the path checkbox (18px; also the spacing exception). | See row 6. |
| 6 | Touch targets 44×44 pt (iOS default; 28 pt minimum) / 48×48 dp with 8 dp spacing | Apple HIG Accessibility — https://developer.apple.com/design/human-interface-guidelines/accessibility ; Android — https://support.google.com/accessibility/android/answer/7101858 ; Lighthouse — https://developer.chrome.com/docs/lighthouse/seo/tap-targets | Guidance | **Partly.** `.opt` is 46.4px ✓. `.tabs` is 43.1px ≈. `.btn` is 39.1px, nav links 35.1px, the ☰/◐ icons 35.1px, the palette 32×~35px (5px gap), `.btn.sm` 31.5px, `.filters` and `.lesson-nav` 29.5px (6px gap), and `.guess` 19.8px. | `@media (pointer:coarse){.btn,.btn.icon,nav.side a{min-height:44px}.btn.sm,.filters button,.lesson-nav button,.tabs button{min-height:40px;padding-inline:14px}.palette{grid-template-columns:repeat(auto-fill,minmax(44px,1fr));gap:8px}.palette button{height:44px}.guess{min-height:44px;padding:0 8px}.guess input{width:20px;height:20px}}` |
| 7 | Focus not hidden by sticky content | SC 2.4.11 — https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum | Standard (AA) | **Partly (inferred).** The sticky header (≈ 54px) can cover elements that scroll into view when tabbing backwards. There is no `scroll-padding-top`. | `html{scroll-padding-top:4.5rem}`. Also replace the hard-coded 51px with `--top:54px` in `nav.side` (both rules). |
| 8 | Line length 45–90 characters (Butterick); ≤ 80 (WCAG 1.4.8 AAA, Baymard); 50–60 classic | https://practicaltypography.com/line-length.html ; https://baymard.com/blog/line-length-readability ; https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html ; Dyson 2004 review, https://doi.org/10.1080/01449290410001715714 | Guidance plus moderate/mixed research. Dyson's review found characters per line to be the critical variable. Longer lines are not clearly worse for speed, but guidance converges on ≤ 75–80. | **Fails on desktop.** At a 1440px viewport, the lesson text box is 974px, which gives ≈ **132 cpl (SF Pro)** to **140 cpl (Arial/Helvetica)**. That is 1.7–1.9× the upper bound. Question text in `.q` is similar (≈ 978px). Phone at 390px: 320px gives 43–46 cpl ✓. | `.md > :is(p,ul,ol,blockquote,h2,h3,h4){max-width:34em}`, which gives ≈ 73 cpl (SF) / 78 cpl (Arial). Tables and `.katex-display` keep the full card width. `#practice,#exQ{max-width:46rem}`. **Use `em`, not `ch`**: in these fonts 1ch ("0") is 1.28–1.36× the average prose glyph, so `70ch` gives ≈ 89–95 real characters. |
| 9 | Body size: web 15–25px (Butterick); iOS body 17 pt; comprehension better at 18 pt and above on Wikipedia (Rello et al. 2016, n=104, eye-tracking) | https://practicaltypography.com/point-size.html ; Apple HIG typography ; Rello, Pielot & Marcos, CHI 2016, https://doi.org/10.1145/2858036.2858204 | Moderate (one well-powered study plus guidance) | **Partly.** Body is 16px/1.65 ✓ within range. Lots of meaningful text is smaller: `.small` 13px (instructions, hints, the "Tick I'm guessing" rule), `.qhead` 12px, `.tag` 11px, `.stat-label` 12px. Several of these are also in the failing `--muted` colour. | `.md{font-size:17px}` (lessons and explanations). Raise `.small` to 14px and `.qhead` to 13px. Keep `.tag` at 12px or more. |
| 10 | Line and paragraph spacing: line ≥ 1.5; paragraph spacing ≥ 1.5 × line spacing (AAA) | SC 1.4.8 (link above) | Standard (AAA, advisory) | Line-height 1.65 ✓. `.md p{margin:8px 0}` gives 8px between paragraphs, well under 1.5 × 26.4px. Rello 2016 found only marginal line-spacing effects (the extremes 0.8 and 1.8 were worse). | `.md p,.md ul,.md ol{margin:0 0 .9em}`. Keep line-height 1.6–1.65. |
| 11 | Avoid the F-pattern by using headings, front-loading, bold keywords and lists | NN/g — https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/ | Moderate (eye-tracking studies) | **Meets structurally.** Lessons are markdown with h2/h3, lists, bold and callout blockquotes. There is no in-lesson table of contents or "key rule" summary box at the top. | Content change (Opinion): open each lesson with a 1–3-line "What you'll be able to do" or key-rule box. |
| 12 | Progressive disclosure: show the essentials, reveal the rest on request | NN/g — https://www.nngroup.com/articles/progressive-disclosure/ | Guidance | **Meets** in worked examples (step-by-step reveal). **Doesn't** in practice lists: every question is visible at once, and every explanation stays expanded after answering. | Focus mode (§3). |
| 13 | Mayer: coherence d=0.70, signalling d=0.46, spatial contiguity d=0.79, segmenting d=0.70. Effects are stronger for low-knowledge learners. | Mayer 2017, *J. Computer Assisted Learning*, https://doi.org/10.1111/jcal.12197 (abstract checked) | Strong (many experiments). Applying it to UI chrome is an inference. | **Partly.** ✓ The explanation sits directly under its question (contiguity). ✓ The formula sheet puts name and formula side by side. ✗ The "Tick I'm guessing *before* answering" rule is a 13px muted paragraph far above the list, while the control is a 12px label in each card's header (contiguity). ✗ Exam mode on mobile puts a ≈ 390px palette between the timer and the question (contiguity and coherence). ✗ Practice lists keep 20+ other questions and expanded explanations in view (coherence and segmenting). | Put a "Not sure" toggle beside the options. Use focus mode. Collapse the mobile palette (§5). |
| 14 | Reading on phones: comprehension is similar to desktop, but hard text takes longer on mobile. Keep mobile content concise. | NN/g — https://www.nngroup.com/articles/mobile-content/ | Moderate | **Partly.** Lessons read fine at 43–46 cpl. The nested padding (main 14px + card 21px per side) spends 70px of a 390px screen (18%). Wide tables need sideways scrolling inside the table, with no visual cue. | `@media (max-width:900px){.card{padding:14px}}`, giving a 334px text box (≈ 45–48 cpl). Add a scroll-shadow cue to tables (§2.5). |
| 15 | Light (positive polarity) vs dark | Piepenbrock et al. 2013 (https://doi.org/10.1080/00140139.2013.790485), 2014 (https://doi.org/10.1177/0018720813515509, https://doi.org/10.1080/00140139.2014.948496); Dobres et al. 2017 (https://doi.org/10.1016/j.apergo.2016.11.001); NN/g — https://www.nngroup.com/articles/dark-mode/ | Moderate–strong for legibility and proofreading. No direct study of learning outcomes. | Follows the OS setting with a toggle. See §4. | See §4. |
| 16 | Gamification: small positive average effects; expected rewards can undermine intrinsic motivation; informational positive feedback helps | Sailer & Homner 2020 meta-analysis, https://doi.org/10.1007/s10648-019-09498-w ; Deci, Koestner & Ryan 1999, https://doi.org/10.1037/0033-2909.125.6.627 ; Hanus & Fox 2015, https://doi.org/10.1016/j.compedu.2014.08.019 | Moderate (both meta-analyses' abstracts checked). Hanus & Fox's abstract **could not be retrieved this session**: my recollection is that badges and leaderboards lowered motivation and exam scores over a 16-week course, but this is unverified. | The site has **no** badges, XP, leaderboards or streaks. It has informational feedback: mastery meters, first-try accuracy, path progress and "last time ✓/✗". This matches the evidence. The countdown number is in `--bad` red on every page. | Keep it this way. If you add anything, add a study-days calendar (habit), not points or badges. Opinion: show the countdown number in `--ink` and keep red for errors. Evidence on countdown colour and anxiety was not checked. |
| 17 | One question per page | GOV.UK Design System — https://design-system.service.gov.uk/patterns/question-pages/ ; Math Academy — https://www.mathacademy.com/how-it-works | Guidance / product practice | Practice uses a list; exam mode uses one at a time. | §3. |

---

## 2. Specific checks with numbers

### 2.1 Body type
- `body{font:16px/1.65 …}` gives 16px text on a 26.4px line. h1 is 26/1.25; h2 and h3 are 20px and 17px, inheriting 1.65.
- KaTeX renders at 1.21em (≈ 19.4px), and `\dfrac` in questions and options makes fraction-heavy lines taller.
- Sub-body text in use: `.small` 13px, `.qhead` / `.stat-label` / `.progress-label` / `.legend` 12px, `.tag` / `nav .grp` 11px.

### 2.2 Measure (lesson text)
| Viewport | Box model → text width | SF Pro cpl | Arial/Helvetica cpl | Verdict |
|---|---|---|---|---|
| 1440px | layout 1320 → main 1080 − 64 padding = 1016 → card −(2×20 + 2×1) = **974px** | **≈ 132** | **≈ 140** | Too long (target 45–80) |
| 390px | 390 − 28 main padding − 42 card = **320px** | **≈ 43** | **≈ 46** | OK. Low end of the range, acceptable for portrait (Baymard). |
| 360px (Android) | **290px** | ≈ 39 | ≈ 42 | Tight. Fix 14 (card padding 14px) gives ≈ 43–45. |
| With the fix `max-width:34em` at 16 or 17px | 544 / 578px | ≈ 73 | ≈ 78 | In range |

Average glyph advance on our prose: SF Pro 0.463em, Arial 0.435em. The width of "0" (= 1ch) is 0.630em in SF and 0.556em in Arial.

### 2.3 Contrast (WCAG ratio; ✗ = below the requirement)
| Pair | Used for | Light | Dark | Need |
|---|---|---|---|---|
| `--ink` / `--bg` | body on page | 15.94 | 16.46 | 4.5 |
| `--ink` / `--card` | body on card | 17.24 | 14.89 | 4.5 |
| `--ink2` / `--card` | nav links, secondary | 7.94 | 9.31 | 4.5 |
| `--muted` / `--card` | hints, `.qhead`, option letters | **3.50 ✗** | 5.07 | 4.5 |
| `--muted` / `--bg` | `.muted` intro paragraphs | **3.24 ✗** | 5.60 | 4.5 |
| `--accent` / `--card` | links on cards | **4.42 ✗** | 4.59 | 4.5 |
| `--accent` / `--bg` | links in page text | **4.08 ✗** | 5.07 | 4.5 |
| white / `--accent` | `.btn.primary` (14px) | **4.42 ✗** | **3.64 ✗** | 4.5 |
| `--accent` / `--accent-soft` | `.tag.acc` | **3.87 ✗** | **3.99 ✗** | 4.5 |
| `--good` / `--good-soft` | `.tag.good`, `.opt.right` | 4.78 | 6.88 | 4.5 |
| `--bad` / `--bad-soft` | `.tag.bad`, `.opt.wrong` | 5.72 | 5.87 | 4.5 |
| `--warn` / `--warn-soft` | `.tag.warn` | 4.54 | 6.91 | 4.5 |
| `--meg` / `--meg-soft` | `.tag.meg` | 6.29 | 6.04 | 4.5 |
| white / `--good` | `.btn.good`, palette answered | 5.38 | **2.22 ✗** | 4.5 |
| white / `--meg` | palette marked | 7.38 | **2.54 ✗** | 4.5 |
| `--line` / `--card` | borders (inputs need 3:1) | 1.30 | 1.32 | 3 (inputs only) |
| `--accent` / `--card` | selected-option border | 4.42 | 4.59 | 3 ✓ |
| `--good` / `--line` | path bar | 4.15 | 5.71 | 3 ✓ |

Proposed tokens, verified: light `--muted:#6b6a65` (5.01 / 5.42), light `--accent:#1f6bc2` (4.93 / 5.33; white on it 5.33; on `--accent-soft` 4.67). Dark: `--on-accent:#141413` on good 8.30, on meg 7.26, on accent 5.07. Optional dark link colour `#6aa6f0` (6.61 on card).

### 2.4 Tap targets (height = font-size × 1.65 + vertical padding + border)
| Element | Computed size | 2.5.8 AA (24) | 44 pt / 48 dp |
|---|---|---|---|
| `.opt` | 46.4px × full width, gap 8 | ✓ | ✓ / −1.6px |
| `.tabs button` | 43.1px | ✓ | ≈ |
| `.btn` | 39.1px | ✓ | ✗ |
| `nav.side a` | 35.1px × 220px, no gap | ✓ | ✗ |
| `.btn.icon` (☰ ◐) | 35.1 × ≈36px (glyph width estimated) | ✓ | ✗ |
| `.palette button` | 32 × 34.8px (desktop, 6 columns) / 32 × ≈35px (390px, 8 columns), gap 5 | ✓ | ✗ |
| `.btn.sm` (Submit, section jumps, Start) | 31.5px | ✓ | ✗ |
| `.filters button`, `.lesson-nav button` | 29.5px, gap 6 | ✓ | ✗ |
| `.guess` label (+13px UA checkbox) | 19.8px tall | only via the spacing exception | ✗ |
| `.path-step input` | 18 × 18 | only via the spacing exception (12px gap) | ✗ |

### 2.5 Tables on mobile
- 348 lesson tables. 638 rows have ≥ 4 columns, and 1,625 of 3,249 rows are over 60 characters. The longest row is 531 characters (GK computers table).
- `.md table{display:block;overflow-x:auto;font-size:14px}`: wide tables scroll inside themselves. This passes 1.4.10 (data tables are exempt) but gives **no cue** that more columns exist. On a 320px box a 4-column table averages 80px per column.
- `display:block` on `<table>` used to strip table semantics in some browsers; Safari fixed this in 17 (Roselli, https://adrianroselli.com/2018/02/tables-css-display-properties-and-aria.html). Low risk now.
- Fix: in marked, wrap each table in `<div class="tbl" role="region" tabindex="0" aria-label="table">` with `.tbl{overflow-x:auto}` and return the table to `display:table`. Add a scroll shadow: `.tbl{background:linear-gradient(to right,var(--card) 30%,transparent) left/40px 100% no-repeat local,linear-gradient(to left,var(--card) 30%,transparent) right/40px 100% no-repeat local,radial-gradient(farthest-side at 0 50%,rgba(0,0,0,.18),transparent) left/12px 100% no-repeat scroll,radial-gradient(farthest-side at 100% 50%,rgba(0,0,0,.18),transparent) right/12px 100% no-repeat scroll}`. Add `.md td{min-width:6em}` so columns don't collapse to one word per line.

### 2.6 KaTeX overflow
- Display maths: `.katex-display{overflow-x:auto;overflow-y:hidden;padding:4px 0}` ✓. The widest displays (a 2×2 matrix product, 250 source characters; the cross-product determinant) will scroll sideways at 320px, again with no cue. Reuse the shadow on `.katex-display`.
- Inline maths: the longest inline expression in any question or option is 82 source characters (`\tan^{-1}(1)+\cos^{-1}(-\tfrac12)+…`), and KaTeX can break it at `+`. Low overflow risk in the 324px option box. Only 5 inline expressions are over 60 characters.

### 2.7 Other layout defects found in code
- **Next/previous lesson doesn't scroll to the top (inferred).** `route()` skips `scrollTo` for any `module` route with arguments (app.js:988). "Done — next lesson →" is at the bottom of a lesson, so the next lesson opens at the old scroll offset, part-way down or at its end. Fix: `if (name !== "module" || args[1] === "learn") window.scrollTo({top:0})`, or scroll `.lesson-nav` into view.
- **Exam mode on phones (inferred).** Under 900px the panel is `order:-1` (app.css:164), and `go()` scrolls to the top on every Save & next (app.js:839). The panel is ≈ 18 + 43 (timer row) + 21 (count) + ≈ 30 (legend) + palette + 18. For a 175-question mock the palette is 22 rows × 37px = 814px, capped at 46vh ≈ 388px on an 844px phone. The question therefore starts ≈ 590px down, and on every question the learner sees the timer and palette and has to scroll to reach it.
- **Header offset.** The header is ≈ 54px tall but the sidebar uses 51px. The overlay starts 3px under the header; cosmetic.
- `html{scroll-behavior:smooth}` ignores `prefers-reduced-motion`. Add `@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}}`.

---

## 3. Should practice be one question at a time?

**Recommendation: yes, as the default for Practice, Pretest, Today's Mix and Review, and on phones in particular.** Keep a "Show all" list toggle for Past-paper Qs browsing and for the result review, which already lists questions with filters. Keep exam mode one at a time.

Evidence for:
- **Segmenting (d = 0.70) and coherence (d = 0.70)** favour learner-paced chunks with extraneous material removed. Mayer notes these principles are stronger for low-knowledge learners, which is this learner in maths (Mayer 2017, abstract checked). In the list, every other question and every expanded explanation stays on screen. That is inference from multimedia research, not a direct test of MCQ layout. **Moderate, indirect.**
- **GOV.UK "one thing per page"**: "helps users … focus on the specific question and its answer." Guidance from large-scale service testing. **Guidance.**
- **Product practice.** Math Academy runs worked example → "a series of up to 5 practice problems" and advances after "two practice problems correct in a row" (source checked). Khan Academy, Duolingo and Brilliant present one exercise per screen with a top progress indicator; this is from my knowledge of the products and was **not re-verified this session**. **Practice, not evidence.**
- **Measurement validity (fact, from code).** In `mountPractice`, a question's time is `now − lastT`, and `lastT` resets on each answer (app.js:494, 517, 521). In the list, question N's time therefore includes reading question N−1's explanation and scrolling. The "Your median time: X s (exam pace 70 s)" figure (app.js:420) is inflated. One at a time with the timer started on render fixes this.
- **Mobile.** A 20–30 card list with `\dfrac`-heavy KaTeX, where cards grow on answer, becomes a long page with layout shifts. One card plus a Next button avoids both.

Evidence against / caveats:
- A mobile web-survey meta-analysis found **no effect of scrolling vs paging on breakoff** (Mavletova & Couper 2015, https://doi.org/10.5334/bar.f). Layout alone is unlikely to change completion. The case rests on focus, pacing and timing validity.
- A list gives a desktop overview and lets the learner choose the order. Keep it available as a toggle.
- The real exam is a paper OMR booklet with all questions visible. That matters for **mocks** (flipping and skipping strategy), not for learning-phase practice.

Spec (Opinion):
- One `.q` card, max-width 46rem.
- A header strip: "7 / 24 · 5 correct" plus a thin bar.
- A "Not sure" toggle placed **with the options**, not in the header.
- After answering, show the explanation and a primary "Next →". On phones make it `position:sticky;bottom:0`.
- Keys: 1–4 / a–d to answer, Enter for Next.
- Start the timer when the card renders.
- Hide the "last time ✗" tag until after the answer (Opinion: it is a cue that can bias the attempt).
- Filters stay above the card and restart the sequence.

---

## 4. Dark vs light default for long reading

Evidence:
- **Positive polarity (dark text on light) is more legible and gives better proofreading, for younger and older adults.** Piepenbrock, Mayr & Buchner 2013: "Dark characters on light background … are strongly recommended independent of observer's age." 2014 (*Human Factors*): the advantage "linearly increased with decreasing character size". 2014 (*Ergonomics*): smaller pupils and better proofreading with positive polarity, consistent with a display-luminance mechanism. Abstracts checked. **Strong for legibility.**
- **Dobres et al. 2017:** legibility thresholds were **worst for negative polarity (dark mode) in dark ambient light**. Positive polarity in the dark, and both polarities in bright light, did better. Abstract checked. This is the phone-at-night case, and phones often switch to dark mode automatically at night.
- **NN/g summary:** for normal vision, light mode generally performs better. Dark mode can help people with cloudy ocular media (Legge 1985). NN/g recommends letting users switch. NN/g also cites Aleman et al. 2018 linking long-term light-mode reading to choroid thinning (myopia risk). That is a long-horizon concern of limited relevance to a 60-day plan.
- No study found measures **learning outcomes** (comprehension or retention) by polarity. The evidence is on legibility and proofreading, which is a proxy for careful reading of maths and options.

Recommendation (evidence-based default plus preference):
- Default to **light** when there is no stored choice, instead of following `prefers-color-scheme`. In index.html: `dataset.theme = localStorage.getItem("ipo-theme") || "light"`.
- Keep the ◐ toggle and make it discoverable in Settings with one line on why light is the default.
- This is a judgement call. Honouring the OS setting is the common web convention; overriding it trades user expectation for legibility. If you keep OS-following, at least fix the dark-theme contrast failures (§2.3).
- For dark mode (Opinion): soften `--ink` to about `#e8e6df` to reduce halation around fine maths strokes, which is currently 14.9:1 on card. Keep KaTeX at 1.21em; small glyphs lose the most in dark mode per Piepenbrock 2014.

---

## 5. Top 12 changes, ranked by impact ÷ effort

| Rank | Change | Why | Effort |
|---|---|---|---|
| 1 | **Fix contrast tokens.** Light `--muted:#6b6a65`, `--accent:#1f6bc2`. Add `--on-accent` (light #fff, dark #141413) for primary and good buttons and palette ans/flag. `.tag.acc{color:var(--ink)}`. | 1.4.3 failures on every page's hints, links and buttons; dark palette at 2.2–2.5:1 | 6 CSS lines |
| 2 | **Lesson measure.** `.md > :is(p,ul,ol,blockquote,h2,h3,h4){max-width:34em}` | 132–140 cpl → 73–78 | 1 line |
| 3 | **Scroll to top on next/prev lesson** (app.js:988) | You currently land mid-lesson after "Done — next" | 1 line |
| 4 | **Mobile exam: question first.** Collapse the palette in `<details>` (closed on phones) and show a compact sticky timer/Submit bar. | The question starts ≈ 590px down on every question | ~20 lines |
| 5 | **Header reflow**: `.brand{min-width:0;overflow:hidden;text-overflow:ellipsis}` at ≤ 480px | 1.4.10 failure at 320px, borderline at 360 | 1 line |
| 6 | **Light default theme** with the toggle kept | Positive-polarity evidence, including the dark-room result | 1 line |
| 7 | **Coarse-pointer target sizes** (the §1 row 6 block) | Most controls are 29–39px vs 44/48 | ~8 CSS lines |
| 8 | **Type scale.** `.md{font-size:17px}`, `.md p{margin:0 0 .9em}`, `.small` 14px, `.qhead` 13px | Rello 2016 (bigger is better up to 18), AAA paragraph spacing, key instructions currently 12–13px | 4 lines |
| 9 | **Focus-mode practice** (§3 spec) with a list toggle | Segmenting and coherence; fixes the inflated timing metric; mobile | ~80 JS lines |
| 10 | **"Not sure" control next to the options**, ≥ 44px | Contiguity; it's a 19.8px label in a 12px header | Small, done with #9 |
| 11 | **Mobile gutters and sticky offsets.** `.card{padding:14px}` ≤ 900px; `html{scroll-padding-top:4.5rem}`; header height into `--top` | +14px text width; 2.4.11 | 4 lines |
| 12 | **Table and display-maths scroll cue** (wrapper plus shadow, `td{min-width:6em}`) | 638 multi-column rows scroll sideways without a hint | ~10 lines + marked renderer |

Not ranked:
- Keep gamification informational; no badges or leaderboards (§1 row 16).
- Consider a neutral colour for the countdown (Opinion).
- Add `prefers-reduced-motion` for smooth scrolling.
- Stronger form-control borders (1.4.11), mainly on Settings.
