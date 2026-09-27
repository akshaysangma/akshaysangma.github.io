# Fact-check log: GK in the five related MPSC papers (2026-09-27)

## Scope
- GK section of related_field_assistant_2025 (50), related_primary_investigator_2025 (25), related_legal_metrology_2025 (24), related_investigator_housing_2024 (35) and related_insp_statistics_2025 (16): 150 items.
- English items whose confidence is not "certain": ih24-31, ih24-35, is25-16, is25-17, is25-18, is25-21 (6 items).

## Method
- I answered every item myself before looking at the stored key.
- I checked time-sensitive items against official pages where they were reachable (sci.gov.in, mea.gov.in, un.org, nobelprize.org, sipri.org, inside.fifa.com, bbc.com). Where the official site was down (megassembly.gov.in, nfr.indianrailways.gov.in), I used recently revised Wikipedia pages.
- Staleness rule (user instruction): every note either states a confirmed Sept 2026 fact ("As of Sep 2026: ...") or is left out. No "check before the exam" wording remains. The two older notes that said this (fa25-61, lm25-55) were replaced.

## Result
- No `answer` changed. No keyed answer is wrong, and the two unkeyed papers had no wrong answers.
- 1 confidence change: fa25-60, certain -> likely. The fact behind the key is shakier than the explanation said.
- The 6 English "likely" items were reviewed. Their answers and notes hold, so no change.
- `python3 tools/build.py --strict` passes (exit 0).

## Changes

| File | id | Field | Before -> After | Reason | Source |
|---|---|---|---|---|---|
| related_field_assistant_2025 | fa25-51 | explanation, note | Before: "It is the state's only railhead; Byrnihat is still under construction." After: the exam-year fact (Mendipathar, inaugurated 30 Nov 2014; the Tetelia-Byrnihat line not open by 2025). New note: "As of Sep 2026: Mendipathar is still Meghalaya's only railway station; Tetelia-Byrnihat still planned/under construction." | Staleness; exact inauguration date added | https://en.wikipedia.org/wiki/Mendipathar_railway_station (rev. 26 Sep 2026); https://en.wikipedia.org/wiki/Tetelia%E2%80%93Byrnihat_line (rev. 12 Sep 2026) |
| related_field_assistant_2025 | fa25-60 | explanation, confidence, note | Before: "received the Padma Vibhushan in 2007 ... first sportsperson ... Sachin got it in 2008". After: the official MHA directory lists Anand and Sachin Tendulkar in the same 2008 Padma Vibhushan list (Anand named first; presented 10 May 2008). Confidence certain -> likely. The note explains the 2007 vs 2008 discrepancy. The key (C) is unchanged. | Factual error: the directory does not support "2007, before Sachin" | MHA Padma Awards Directory 1954-2013 (LST-PDAWD-2013.pdf, 2008 section, via https://web.archive.org/web/2015/http://mha.nic.in/sites/upload_files/mha/files/LST-PDAWD-2013.pdf) |
| related_field_assistant_2025 | fa25-61 | explanation, note | Explanation now says "as of the April 2025 exam" and gives the 9 March 2023 election date. Old note "Time-sensitive ... Check again after the next Assembly election" -> "As of Sep 2026: Thomas A. Sangma is still Speaker; Deputy Speaker is now Limison D. Sangma (since 12 Sep 2025); Timothy D. Shira became Fisheries Minister in Sep 2025." | Staleness: the Deputy Speaker named in the explanation has changed | https://en.wikipedia.org/wiki/Meghalaya_Legislative_Assembly (infobox); https://en.wikipedia.org/wiki/Timothy_Shira (megassembly.gov.in unreachable) |
| related_field_assistant_2025 | fa25-74 | explanation, note | Old note "Later SIPRI five-year windows may rank countries differently" -> "As of Sep 2026: SIPRI's March 2026 report (2021-25) again ranks Ukraine first (9.7%) and India second." | Staleness, confirmed | https://www.sipri.org/media/press-release/2026/global-arms-flows-jump-nearly-10-cent-european-demand-soars ; https://www.sipri.org/publications/2026/sipri-fact-sheets/trends-international-arms-transfers-2025 |
| related_legal_metrology_2025 | lm25-55 | explanation, note | Old note "...successor is selected during 2026. Check the latest before the exam." -> "As of Sep 2026: Guterres is still SG; term ends 31 Dec 2026; the Security Council had held straw polls but had not yet recommended a successor." | Staleness, confirmed | https://www.un.org/sg/en (Guterres speaking to the UNGA on 22 Sep 2026); https://en.wikipedia.org/wiki/2026_United_Nations_Secretary-General_selection |
| related_legal_metrology_2025 | lm25-70 | note | "Later Peace Prize winners: ..." -> "As of Sep 2026: ... Nihon Hidankyo (2024), Maria Corina Machado (2025)." | Format; facts confirmed | https://www.nobelprize.org/prizes/peace/2024/summary/ ; https://www.nobelprize.org/prizes/peace/2025/summary/ |
| related_legal_metrology_2025 | lm25-71 | explanation, note | Explanation gains the exact date (30 May 2019) and "at the July 2025 exam". New note: "As of Sep 2026: S. Jaishankar is still External Affairs Minister." | Staleness, confirmed | https://www.mea.gov.in/ (homepage, Sep 2026) |
| related_legal_metrology_2025 | lm25-72 | explanation, note | Removed "The 2026 edition is hosted by..." (future tense, now past). New note: "As of Sep 2026: 2026 WC held in USA/Canada/Mexico; Spain beat Argentina 1-0 aet in the final, 19 July 2026." | Staleness, confirmed | https://inside.fifa.com/ ("Spain v Argentina: Final - FIFA World Cup 2026", Rodri lifts trophy); https://www.bbc.com/sport/football/world-cup |
| related_investigator_housing_2024 | ih24-42 | note | "Could not verify the official key." -> "No official key is available for this paper." | User rule: nothing marked unconfirmed (the fact is that the paper has no key) | related_papers_meta.json |
| related_investigator_housing_2024 | ih24-53 | explanation | Removed the unsourced claim "draft amendment regulations released in 2024 on SIM-swap rules". Now: TRAI frames the MNP Regulations (2009, amended from time to time) and issues drafts; the other options are identified. | I could not confirm the date from TRAI's site, so the claim was dropped (the answer does not depend on it) | https://www.trai.gov.in/ |
| related_investigator_housing_2024 | ih24-58 | note | "Could not re-verify online during transcription; ..." -> "The answer is chosen by elimination: DRDO (through DFRL Mysuru) is the only defence food-research body among the options." Confidence stays likely. | User rule: nothing marked unconfirmed | none (by elimination) |
| related_investigator_housing_2024 | ih24-61 | explanation, note | Note "Since changed: ... Surya Kant (53rd, Nov 2025)" -> "As of Sep 2026: CJI is Surya Kant, 53rd (sworn in 24 Nov 2025, retires 9 Feb 2027); preceded by Sanjiv Khanna (51st) and B.R. Gavai (52nd)." | Staleness, confirmed | https://www.sci.gov.in/chief-justice-judges/ |

## Checked, no change needed (time-sensitive or tricky)
- pi25-55: 12 nominated members, all in the Rajya Sabha. The Anglo-Indian Lok Sabha seats lapsed in 2020, and this has not changed since.
- pi25-64: UP has 80 Lok Sabha seats, the most of any state. No delimitation has happened since.
- ih24-63: Paris 2024 is a past event. The explanation already names LA 2028 and Brisbane 2032.
- lm25-73: England won the 2019 World Cup. The explanation already names Australia as the 2023 winner.
- ih24-54 (Aditya-L1 with ESA), ih24-57 (North Korea's constitution, Sept 2023), ih24-59 (Pragyan found sulphur): these are fixed facts, and each is dated to the exam year.
- fa25-66: Krem Liat Prah is still described as the longest natural cave in South Asia (about 34 km). Source: https://en.wikipedia.org/wiki/Krem_Liat_Prah
- fa25-52 and fa25-73 stay "disputed" with the official-key notes (keyboard; a NOTA item where full marks were given to all). Their answers are unchanged.
- English ih24-31, ih24-35, is25-16/17/18/21: all stay "likely". The notes already give the alternative readings.
