# Question JSON schema (shared by all research agents)

Each question file is a JSON array of objects:

```json
{
  "id": "2022-101",
  "source": "IPO 2022 (MPSC, 26-Nov-2022, Series III)",
  "section": "english | gk | maths",
  "topic": "<topic slug from the lists below>",
  "q": "Question text. Maths in KaTeX inline $...$ or display $$...$$.",
  "options": ["a text", "b text", "c text", "d text"],
  "answer": 0,
  "confidence": "certain | likely | disputed",
  "explanation": "Why the answer is right. For maths: full step-by-step working, one step per line (use \\n). For English/GK: the fact + a one-line memory hook.",
  "note": "Optional: printing errors in the original, ambiguous options, outdated facts (e.g. 'as of 2022; changed in 2024 to ...')."
}
```

Rules
- `answer` is the 0-based index into `options`. If the official answer is unknown, solve it yourself and set `confidence`.
- Copy the question and options exactly as printed. Fix obvious OCR/print typos only in `q`/`options` if meaning is unambiguous, and record the fix in `note`.
- Never use `$` for currency; write "Rs." or "₹".
- In JSON strings, backslashes must be escaped (`\\frac`, `\\sqrt`).

Topic slugs
- english: one-word-substitution, fill-in-blanks, confusables, idioms-phrases, synonyms, antonyms, spelling, error-spotting, sentence-improvement, prepositions, articles, tenses, voice, narration, comprehension, para-jumbles, grammar-misc
- gk: meghalaya, indian-polity, indian-history, indian-geography, world-geography, indian-economy, science-biology, science-physics, science-chemistry, computers, environment, current-affairs, awards-books-days, sports, defence, international-orgs, culture
- maths: sets-relations-functions, trigonometry, complex-numbers, quadratic-equations, linear-equations-inequalities, sequences-series, permutations-combinations, binomial, matrices-determinants, coordinate-geometry-2d, conic-sections, 3d-geometry, vectors, limits-continuity, differentiation, applications-of-derivatives, integration, definite-integrals-area, differential-equations, probability, statistics, linear-programming, number-system, hcf-lcm, percentage, profit-loss, simple-compound-interest, ratio-proportion, averages, time-work, time-speed-distance, mensuration, mechanics-applied, mathematical-reasoning
