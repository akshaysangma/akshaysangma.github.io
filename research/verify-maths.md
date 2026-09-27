# Maths verification log

Independent check of every maths `practice` item, `examples` entry and `formulas` entry in modules m01–m17, plus the 75 real 2022 maths questions in `research/data/ipo2022_maths.json`. Each question was solved from `q` + `options` only (own sympy/python scripts, not the authoring agents' scripts), then compared with `answer`; explanation steps, the final `Answer: (x)` letter, option uniqueness and question wording were checked too. Backups of the pre-check files: /tmp/mbackup.

**Totals checked:** 455 practice items, 136 worked examples, 426 formulas (m01–m17); 75 paper questions (2022).
**Result:** no wrong answer key in any module or in the 2022 key. Changes below are rendering fixes, formula-sheet conditions, and wording clarifications.

## KaTeX pre-superscript fix (coordinator request)

- m16-probability-statistics.formulas[2] ("Combinations"): `^nC_r=…,\quad ^nC_2=…` → `{}^nC_r=…,\quad {}^nC_2=…` — `\quad ^n` failed to parse in KaTeX ("Got group of unknown type: 'internal'").
- Same `^X` → `{}^X` normalisation for every bare leading pre-superscript before C/P (e.g. `$^nC_r$`, `$^5P_2$`) so they all render the same way: m06 (4), m08 (23), m16 (22), ipo2022_maths (7). Rendering-only; no maths changed.

## Batch results

### m01-m03
- m03-ratio-average-work.formulas[10] ("Replacement changes average"): `when` "" → "New = value of the person coming in, Old = value of the person replaced, n = group size; + if the average rises, − if it falls" — wording: "New/Old" could be misread as the new/old averages

### m04-m06
- No changes. All 75 practice keys, 24 worked examples and 61 formulas verified independently (hand solve + /tmp/vm/m04-m06/check.py: sympy numerics, brute-force enumeration of relations/functions on small sets). Distractor rationales in explanations also checked.

### m07-m09
No changes. Checked: m07 25 practice / 8 examples / 24 formulas; m08 25 / 8 / 25; m09 30 / 8 / 30. All keys, explanation steps, distractor notes and formulas verified independently (sympy scripts in /tmp/vm/m07-09/).

### m10-m12
- m10-trigonometry, m11-coordinate-2d, m12-conic-sections: no changes — all 80 practice keys, 24 examples and 82 formulas verified correct (independent sympy/numpy checks in /tmp/vm/b4/).

### m13-m15
- m13-3d-vectors, m14-differential-calculus, m15-integral-calculus: no changes. 90 practice items, 24 examples, 98 formulas checked independently (sympy); all keys, explanation steps, distractor notes and formulas correct.

### m16-m17
- m17-lpp-reasoning-applied-p09 (explanation, Shortcut line): "Intercepts of $x + y = 2$ are (2, 2); of $2x + 3y = 12$ are (6, 4)" → "$x + y = 2$ cuts the x-axis at 2 and the y-axis at 2; $2x + 3y = 12$ cuts them at 6 and 4 …" — wording: intercept pairs were written like coordinate points ((2,2) is not even on the line), confusing for a weak student. Key unchanged (c).

### 2022
- 2022-107: confidence certain → disputed; note extended — all four options (parallelogram, rectangle, square, rhombus) are literally true for this square; answer kept (c) Square as the most specific.

## Formula-sheet clarifications (coordinator pass, conditions flagged by batch checkers)

- m15-integral-calculus.formulas[10] (Power of a function times its derivative), `tex`: `\int[f(x)]^nf'(x)\,dx=\frac{[f(x)]^{n+1}}{n+1}+C` → `\int[f(x)]^nf'(x)\,dx=\frac{[f(x)]^{n+1}}{n+1}+C\ (n\neq -1)` — formula is false for n = −1 (that case is log|f(x)|); condition was missing.
- m07-equations-inequalities.formulas[23] (Square less than / greater than), `tex`: `t^2 < k^2 \iff -k < t < k;\quad t^2 > k^2 \iff t < -k \text{ or } t > k` → `(k>0):\ t^2 < k^2 \iff -k < t < k;\quad t^2 > k^2 \iff t < -k \text{ or } t > k` — statement only holds for k > 0; condition was missing.
- m12-conic-sections.formulas[24] (Recognising a conic), `tex`: `Ax^2 + By^2 + \ldots:\ A = B \text{ circle},\ AB > 0 \text{ ellipse},\ AB < 0 \text{ hyperbola},\ AB = 0 \text{ parabola}` → `Ax^2 + By^2 + \ldots\ (\text{no } xy \text{ term}):\ A = B \text{ circle},\ AB > 0,\ A\neq B \text{ ellipse},\ AB < 0 \text{ hyperbola},\ AB = 0 \text{ parabola}` — as written, A = B (a circle) also satisfied 'AB > 0 ellipse'; made the cases exclusive and stated the no-xy-term assumption.
- m13-3d-vectors.formulas[27] (Distance between parallel planes), `when`: `` → `planes ax+by+cz+d_1=0 and ax+by+cz+d_2=0: first rewrite both with the same a, b, c (e.g. divide 4x−2y+4z+5=0 by 2)` — d_1, d_2 are only meaningful once both equations share the same a, b, c; without this a student would get p27-type questions wrong.

## Existing flags reviewed and kept (no change)

- 2022-131: already `disputed` — options (a) y−8=0 and (c) −y+8=0 are the same line.
- 2022-104: already `likely` — "one child is a boy" read as "at least one" gives 1/3; a specific child would give 1/2.
- 2022-120: data strictly gives "at least 38%", but 38% is the only feasible option, so the key stands.
