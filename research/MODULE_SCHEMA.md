# Learning-module JSON schema

One file per module: `research/modules/<id>.json`, a single JSON object.

```json
{
  "id": "m01-number-system",
  "track": "maths | english | gk",
  "title": "Number System, HCF & LCM",
  "phase": 1,
  "order": 1,
  "estMinutes": 180,
  "topics": ["number-system", "hcf-lcm"],
  "why": "2-4 sentences: what the IPO paper asks from this chapter and why it is worth the time.",
  "lessons": [
    { "title": "Lesson title", "body": "Markdown. KaTeX in $...$ / $$...$$." }
  ],
  "formulas": [
    { "name": "Sum of first n natural numbers", "tex": "\\frac{n(n+1)}{2}", "when": "optional: when to use it" }
  ],
  "examples": [
    { "q": "Worked example question (may include options as a list in text)", "solution": "Step 1 ...\nStep 2 ...\nAnswer: ...", "shortcut": "optional faster exam method" }
  ],
  "traps": ["Common mistake + how to avoid it"],
  "practice": [ /* question objects, schema in SCHEMA.md, plus "level": 1|2|3 */ ]
}
```

Content rules
- `topics` use the slugs from SCHEMA.md. Past-paper questions with these topics are auto-linked by the site.
- Markdown supported in `body`: paragraphs, `###` headings, `**bold**`, `*italic*`, bullet and numbered lists, pipe tables, `> ` callouts. No raw HTML.
- Maths is KaTeX. Escape backslashes for JSON (`\\frac`). Never use `$` for money; write ₹ or Rs.
- Practice question ids: `<module id>-p01`, `-p02`, … `source`: "Practice (IPO-style)". Include `level` (1 = direct formula, 2 = two-step, 3 = exam-hard).
- `explanation` for maths practice: step-by-step, one step per line (`\n`), ending with `Answer: (x)`, then optional line `Shortcut: ...`.
- Every numeric answer must be verified with python before writing. Distractors should be the answers you get from common mistakes.
- Match the IPO exam: 4-option MCQ, Class 11–12 NCERT level + arithmetic, solvable in ~1 minute (150 min for 175 Qs; maths gets ~65 min for 75 Qs).
