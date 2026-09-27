#!/usr/bin/env python3
"""Validate research JSON and emit data/*.js for the site."""
import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RESEARCH = ROOT / "research"
OUT = ROOT / "data"

PAPERS = [
    {
        "id": "ipo-2022",
        "title": "IPO 2022 — Industrial Promotion Officer",
        "date": "2022-11-26",
        "kind": "ipo",
        "label": "IPO 2022 paper",
        "source": "MPSC question booklet IPO-22, Series III",
        "durationMin": 150,
        "files": ["ipo2022_english_gk.json", "ipo2022_maths.json"],
    },
]

SECTION_ORDER = ["english", "gk", "maths"]
errors = []


def err(where, msg):
    errors.append(f"{where}: {msg}")


def balanced_dollars(s):
    return s.replace("$$", "").count("$") % 2 == 0


def check_text(where, s):
    if not isinstance(s, str):
        return
    if not balanced_dollars(s):
        err(where, "unbalanced $")
    if s.count("{") != s.count("}"):
        err(where, "unbalanced braces")


def check_question(q, where):
    for key in ("id", "section", "topic", "q", "options", "answer", "explanation"):
        if key not in q:
            err(where, f"missing {key}")
            return
    if not isinstance(q["options"], list) or len(q["options"]) < 2:
        err(where, "bad options")
    elif not (0 <= q["answer"] < len(q["options"])):
        err(where, "answer out of range")
    for key in ("q", "explanation", "note"):
        check_text(f"{where}.{key}", q.get(key))
    for i, o in enumerate(q.get("options", [])):
        check_text(f"{where}.options[{i}]", o)


def load_json(path):
    try:
        return json.loads(path.read_text())
    except Exception as e:
        err(str(path.relative_to(ROOT)), f"invalid JSON: {e}")
        return None


def build_modules():
    modules = []
    for path in sorted((RESEARCH / "modules").glob("*.json")):
        m = load_json(path)
        if m is None:
            continue
        where = path.name
        for key in ("id", "track", "title", "phase", "order", "lessons", "practice"):
            if key not in m:
                err(where, f"missing {key}")
        for i, l in enumerate(m.get("lessons", [])):
            check_text(f"{where}.lessons[{i}]", l.get("body"))
        for i, f in enumerate(m.get("formulas", [])):
            check_text(f"{where}.formulas[{i}]", f.get("tex"))
        for i, ex in enumerate(m.get("examples", [])):
            check_text(f"{where}.examples[{i}].q", ex.get("q"))
            check_text(f"{where}.examples[{i}].solution", ex.get("solution"))
        track_section = {"maths": "maths", "english": "english", "gk": "gk"}.get(m.get("track"))
        for q in m.get("practice", []):
            q.setdefault("section", track_section)
            q.setdefault("source", "Practice (IPO-style)")
            q["module"] = m["id"]
            check_question(q, f"{where}:{q.get('id')}")
        modules.append(m)
    modules.sort(key=lambda m: m.get("order", 999))
    return modules


def related_papers():
    meta_path = RESEARCH / "data" / "related_papers_meta.json"
    metas = load_json(meta_path) if meta_path.exists() else {}
    out = []
    for path in sorted((RESEARCH / "data").glob("related_*.json")):
        stem = path.stem
        if stem == "related_papers_meta":
            continue
        m = (metas or {}).get(stem, {})
        title = m.get("title") or stem.replace("related_", "").replace("_", " ").title()
        out.append({
            "id": stem.replace("_", "-"),
            "title": title,
            "date": m.get("date", ""),
            "kind": "related",
            "label": title,
            "source": m.get("source", "MPSC question booklet"),
            "note": m.get("note", ""),
            "durationMin": None,
            "files": [path.name],
        })
    return out


def build_papers():
    papers = []
    for meta in PAPERS + related_papers():
        questions = []
        for fname in meta["files"]:
            path = RESEARCH / "data" / fname
            if not path.exists():
                err(meta["id"], f"missing {fname}")
                continue
            data = load_json(path) or []
            for q in data:
                q["paper"] = meta["id"]
                q["source"] = meta["label"]
                check_question(q, f"{fname}:{q.get('id')}")
            questions.extend(data)
        if not questions:
            continue
        questions.sort(key=lambda q: (SECTION_ORDER.index(q["section"]) if q.get("section") in SECTION_ORDER else 9,
                                      int(re.sub(r"\D", "", q["id"].split("-")[-1]) or 0)))
        if meta["durationMin"] is None:
            meta["durationMin"] = max(10, round(len(questions) * 0.8))
        papers.append({**{k: v for k, v in meta.items() if k != "files"}, "questions": questions})
    return papers


def stamp_assets():
    index = ROOT / "index.html"
    html = index.read_text()
    for rel in ("data/modules.js", "data/papers.js", "assets/app.js", "assets/app.css"):
        digest = hashlib.sha1((ROOT / rel).read_bytes()).hexdigest()[:8]
        html = re.sub(re.escape(rel) + r'(\?v=\w+)?"', f'{rel}?v={digest}"', html)
    index.write_text(html)


def main():
    modules = build_modules()
    papers = build_papers()
    ids = {}
    for m in modules:
        for q in m.get("practice", []):
            ids.setdefault(q["id"], []).append(m["id"])
    for p in papers:
        for q in p["questions"]:
            ids.setdefault(q["id"], []).append(p["id"])
    for qid, where in ids.items():
        if len(where) > 1:
            err(qid, f"duplicate id in {where}")

    if errors:
        print("\n".join(errors))
        print(f"\n{len(errors)} problem(s)")
        if "--strict" in sys.argv:
            sys.exit(1)

    OUT.mkdir(exist_ok=True)
    (OUT / "modules.js").write_text("window.IPO_MODULES=" + json.dumps(modules, ensure_ascii=False, separators=(",", ":")) + ";\n")
    (OUT / "papers.js").write_text("window.IPO_PAPERS=" + json.dumps(papers, ensure_ascii=False, separators=(",", ":")) + ";\n")
    stamp_assets()
    n_practice = sum(len(m.get("practice", [])) for m in modules)
    n_paper = sum(len(p["questions"]) for p in papers)
    print(f"modules: {len(modules)}  practice Qs: {n_practice}  papers: {len(papers)}  paper Qs: {n_paper}")


if __name__ == "__main__":
    main()
