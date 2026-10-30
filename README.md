# Exam prep

The home page (`index.html`) links each prep: the IPO written exam prep in `ipo/` and the JE (Electrical) interview prep in `je-electrical/`. Old IPO links (`/#/...`) are forwarded to `ipo/`.

## IPO Meghalaya — Written Exam Prep

A static study site for the MPSC **Industrial Promotion Officer** written exam (175 MCQs: General English 50, General Knowledge 50, Mathematics 75; 350 marks; 2½ hours; no negative marking).

- Learning path from a diagnostic test to full mocks, with a heavier maths track (lessons → formulas → worked examples → practice → past-paper questions)
- The IPO 2022 paper, in timed exam mode or practice mode, with worked solutions
- Random mock tests using the exam's section blueprint, a spaced-repetition review queue, formula flashcards, a mental-maths speed drill and topic analysis
- Progress is saved in the browser (`localStorage`), with export/import under Settings

## Run locally

    python3 -m http.server 8000   # then open http://localhost:8000/ipo/

## Rebuild data after editing content

Content source of truth is `research/modules/*.json` (learning modules) and `research/data/*.json` (past papers). Formats are described in `research/SCHEMA.md` and `research/MODULE_SCHEMA.md`.

    python3 tools/build.py --strict      # validates and writes data/*.js
    node tools/check_katex.cjs           # needs `npm i katex`; checks every formula renders

## Host on GitHub Pages

Push the repo, then Settings → Pages → deploy from branch `main`, folder `/`.

## JE (Electrical) interview prep

`je-electrical/` is a separate interview-prep section for the MPSC JE (Electrical) under PWD personal interview. Its content source is `je-electrical/research/*.md`; rebuild `je-electrical/data.js` after editing:

    python3 tools/build_je.py --strict
