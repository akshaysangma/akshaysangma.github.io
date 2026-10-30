#!/usr/bin/env python3
"""Parse je-electrical/research/*.md into je-electrical/data.js."""
import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "je-electrical"
RESEARCH = SITE / "research"

DECKS = [
    {"id": "me", "name": "About you & HR", "blurb": "Introduction, why PWD, integrity and situation questions. Fill in the [brackets] in your notes."},
    {"id": "work", "name": "Your MeECL work", "blurb": "Your current job, field problems and safety: the board will build on whatever you say here."},
    {"id": "pwd", "name": "PWD role & works procedure", "blurb": "How PWD (Buildings) is organised, the SOR, estimates, sanctions, tenders, MB and bills."},
    {"id": "bldg", "name": "Building electrical", "blurb": "Wiring, earthing, testing, load design, substations, DG sets, lifts, solar and site safety."},
    {"id": "rules", "name": "Acts, rules & codes", "blurb": "Electricity Act 2003, CEA Safety Regulations 2023, NBC and IS codes."},
    {"id": "fund", "name": "Electrical fundamentals", "blurb": "Circuits, transformers, machines, T&D, protection, measurement and mental numericals."},
    {"id": "gk", "name": "Meghalaya & power sector", "blurb": "MeECL, hydro stations, Garo Hills, office holders and 2025-26 current affairs."},
]

# (file prefix, section number or title start) -> deck id
SECTION_DECK = {
    "00": {"1": "me", "2": "work", "3": "pwd"},
    "02": {"1": "bldg", "2": "bldg", "3": "bldg", "4": "bldg", "5": "bldg", "6": "bldg", "7": "bldg",
           "8": "bldg", "9": "rules", "10": "pwd", "11": "bldg", "Questions with a Meghalaya": "work"},
    "03": {"1": "fund", "2": "fund", "3": "fund", "4": "fund", "5": "fund", "6": "fund", "7": "fund",
           "8": "fund", "9": "work", "10": "fund"},
    "04": {"6": "gk"},
}

DOCS = [
    ("recruitment", "Recruitment & PWD facts", "01-recruitment-and-pwd.md", None),
    ("meghalaya", "Meghalaya, MeECL & power notes", "04-meghalaya-power-gk.md", None),
    ("unverified-bldg", "Unverified values: building electrical", "02-building-electrical-pwd.md", "## Values I could not verify"),
    ("unverified-fund", "Unverified values: fundamentals", "03-electrical-fundamentals.md", "## Items marked (verify)"),
]

FIELDS_02 = [("a", re.compile(r"^A:\s*")), ("src", re.compile(r"^Source:\s*")), ("fu", re.compile(r"^Likely follow-up:\s*"))]
FIELDS_03 = [("a", re.compile(r"^\*\*A:\*\*\s*")), ("fu", re.compile(r"^\*Likely follow-up:\*\s*"))]
FIELDS_04 = [("a", re.compile(r"^A:\s*"))]

errors = []


def deck_for(prefix, heading):
    table = SECTION_DECK.get(prefix, {})
    m = re.match(r"(\d+)\.", heading)
    if m and m.group(1) in table:
        return table[m.group(1)]
    for key, deck in table.items():
        if not key.isdigit() and heading.startswith(key):
            return deck
    return None


def parse(path):
    prefix = path.name[:2]
    if prefix == "03":
        q_re, fields = re.compile(r"^### (?:Q([\d.]+)|(N\d+)\.|(Extra quick checks))\s*(.*)$"), FIELDS_03
    elif prefix == "04":
        q_re, fields = re.compile(r"^(\d+)\. \*\*Q:\s*(.*?)\*\*\s*$"), FIELDS_04
    else:
        q_re, fields = re.compile(r"^\*\*Q([A-Z]?[\d.]+|M\.\d+)\s+(.*?)\*\*\s*$"), FIELDS_02

    cards, deck, section, card, field = [], None, "", None, None

    def close():
        nonlocal card
        if card:
            for k in ("a", "src", "fu"):
                if k in card:
                    card[k] = "\n".join(card[k]).strip()
                    if not card[k]:
                        del card[k]
            if not card.get("a"):
                errors.append(f"{path.name}:{card['id']}: no answer")
            else:
                text = " ".join(card.get(k, "") for k in ("a", "src", "fu"))
                if re.search(r"\((unverified|verify)\)|UNVERIFIED", text):
                    card["unv"] = True
                cards.append(card)
        card = None

    for raw in path.read_text().splitlines():
        line = re.sub(r"^ {3,4}", "", raw) if prefix == "04" else raw
        if raw.startswith("## "):
            close()
            section = raw[3:].strip()
            deck = deck_for(prefix, section)
            continue
        if raw.strip() == "---":
            close()
            continue
        if deck is None:
            continue
        m = q_re.match(raw)
        if m:
            close()
            if prefix == "03":
                qid = m.group(1) or m.group(2) or "X"
                q = m.group(4) if not m.group(3) else "Extra quick checks: say each answer in one line"
            else:
                qid, q = m.group(1), m.group(2)
            card = {"id": f"{prefix}-{qid}", "deck": deck, "sec": re.sub(r"^\d+\.\s*|\s*\(.*\)$", "", section), "q": q.strip()}
            field = "a" if (prefix == "03" and m.group(3)) else None
            if field:
                card["a"] = []
            continue
        if card is None:
            continue
        for key, rx in fields:
            fm = rx.match(line)
            if fm:
                field = key
                card[key] = [line[fm.end():]]
                break
        else:
            if field:
                card[field].append(line)
            elif line.strip():
                field = "a"
                card["a"] = [line]
    close()
    return cards


def main():
    cards = []
    for path in sorted(RESEARCH.glob("0*.md")):
        cards.extend(parse(path))
    seen = set()
    for c in cards:
        if c["id"] in seen:
            errors.append(f"duplicate id {c['id']}")
        seen.add(c["id"])
    deck_ids = {d["id"] for d in DECKS}
    for d in DECKS:
        n = sum(c["deck"] == d["id"] for c in cards)
        print(f"{d['id']:6} {n:4} cards")
        if not n:
            errors.append(f"deck {d['id']} is empty")
    assert all(c["deck"] in deck_ids for c in cards)

    docs = []
    for did, title, fname, start in DOCS:
        text = (RESEARCH / fname).read_text()
        if start:
            i = text.find(start)
            if i < 0:
                errors.append(f"{fname}: missing '{start}'")
                continue
            text = text[i:]
        docs.append({"id": did, "title": title, "md": text})

    if errors:
        print("\n".join(errors), file=sys.stderr)
        if "--strict" in sys.argv:
            sys.exit(1)

    payload = json.dumps({"decks": DECKS, "cards": cards, "docs": docs}, ensure_ascii=False, separators=(",", ":"))
    (SITE / "data.js").write_text(f"window.JE_DATA={payload};\n")

    index = SITE / "index.html"
    html = index.read_text()
    for rel in ("data.js", "app.js", "app.css"):
        digest = hashlib.md5((SITE / rel).read_bytes()).hexdigest()[:8]
        html = re.sub(rf'{re.escape(rel)}\?v=[0-9a-f]+', f"{rel}?v={digest}", html)
    index.write_text(html)
    print(f"{len(cards)} cards, {len(docs)} docs -> je-electrical/data.js")


if __name__ == "__main__":
    main()
