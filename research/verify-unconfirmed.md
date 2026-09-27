# Resolving "unconfirmed" items (27 Sep 2026)

Rule: every fact is either confirmed from an authoritative source or removed. No practice question depended on a removed claim, so no questions were replaced. Only one practice item changed: the `note` on g08-industry-policy-p37 was deleted.

## Confirmed (text rewritten as plain fact)

| Item | Module | New text (summary) | Source |
|---|---|---|---|
| ISFR 2025 release | g03 | Left as is: "ISFR 2023 — still the latest edition as of Sept 2026". The FSI report page lists nothing after 2023 (footer: last updated 15 Apr 2026) | https://fsi.nic.in/forest-report-2023 |
| DCIC count / Eastern West Khasi Hills | g08 | Dept site lists 11 DCICs, covering every district except Eastern West Khasi Hills (as of Sep 2026) | https://megindustry.gov.in/ |
| C&I Service (Amendment) Rules 2026 | g08 | Cabinet approval on 13 Aug 2026 raised the ST upper age limit from 27 to 32. Worded as a Cabinet approval only, not a gazetted rule | CMO Meghalaya official posts; https://hubnetwork.in/nine-big-decisions-from-meghalaya-cabinet-uranium-mining-resolution-language-bill-excise-overhaul-among-key-approvals/ |
| MSIPF (Amendment) Act 2025 | g08 | Act No. 8 of 2025; Governor's assent 5 May 2025; gazetted 6 May 2025 (Gazette Extraordinary No. 77); passed 13 Mar 2025 | https://invest.meghalaya.gov.in/Documents/Acts/MSIPandF_Amendment_Act_2025-Gazette_260424_181921.pdf ; megassembly.gov.in LOB 13 Mar 2025 |
| MIIPP 16 priority sectors | g08 | Now reads "16 priority sectors, food processing and tourism among them". The unconfirmed "full list" clause was dropped | State Govt statement reported by Highland Post (16 Dec 2024); MIIPP state profile |
| GST threshold for Meghalaya | g08 | ₹20 lakh for both goods and services. Notification 10/2019-CT (7 Mar 2019) excludes Meghalaya from the ₹40 lakh goods limit. Under s.22 Expl. (iii) CGST Act, Meghalaya is excluded from the "special category States", so the ₹10 lakh limit covers only Manipur, Mizoram, Nagaland and Tripura | Notification 10/2019-CT text (India Code; ICAI GST law compilation); s.22 CGST Act Expl. (iii) |
| Operational SEZ in Meghalaya | g08 | Meghalaya has no SEZ: none approved, notified or operational | https://sezindia.gov.in/sites/default/files/approved_sez/State-wise%20.pdf (as on 18.03.2025); https://sezindia.gov.in/sites/default/files/operational_SEZ/Operational%20SEZs%20in%20India%20276%20%281%29.pdf (up to 31.12.2025) |
| Stand-Up India status | g08 | Scheme period up to 31.03.2025. Budget 2025-26 is kept as a separate fact: ₹2 cr term loans for 5 lakh first-time women/SC/ST entrepreneurs. The "revamp" claim was removed | https://financialservices.gov.in/stand-india-scheme-supi ; Budget speech 2025-26 |
| UNNATI registration | g08 | "Registration window as notified: 09.03.2024 – 31.03.2026". The extension clause was removed | unnati.dpiit.gov.in FAQ/Handbook; PIB 7 Mar 2024 |
| 2027 National Games | g07 | "Feb–Mar 2027 window per the IOA; host-state agreement signed 30 May 2026". The "dates not announced" hedge was dropped | olympics.com (12 Feb 2025); PIB 30 May 2026; Meghalaya Sports & Youth Affairs |
| Shillong Peak height (hedge "sources differ") | g07 lesson + practice explanation | About 1,965 m | https://www.meghalayatourism.in (Shillong Peak page) |

## Removed

| Item | Module | Why |
|---|---|---|
| Hand-in-Hand resumption | g06 | No authoritative report of a post-2019 edition. The parenthetical was removed; the row (China, Army) stays |
| 2026 Nobel "check before the exam" | g06 | Future event |
| Largest district by area after 2021 split | g07 | No official post-split area table found |
| Sohra 12-month rainfall figure | g07 | The Guinness page is gone (404) and figures differ. The period (Aug 1860 – Jul 1861) stays |
| Uranium share of national reserves | g07 | No authoritative figure |
| Separate Khasi handloom GI | g07 | No GI registration found. Bullet deleted |
| "Re-check before the exam" (current affairs) | g07 | Future-facing instruction. Now reads "All items as of 27 Sep 2026" |
| Balpakram NP establishment year | g07 | Sources give 1985, 1986 and 1987. The "disputed" clause was deleted and no year is stated |
| Pa Togan "exact place varies by source" | g07 | Hedge deleted; no place is claimed |
| MIIPP new registration end date | g08 | Cabinet (13 Aug 2026) and news give "one year" but no date. The inferred 31.03.2027 was deleted; the one-year extension stays |
| Single Window Agency set-up year | g08 | Sources differ |
| PMEGP continuation after 2025-26 | g08 | The PMEGP portal says continuation awaits approval. Clause deleted |
| PM-DevINE continuation after 2025-26 | g08 | No approval found (MDoNER/PIB Mar 2026 cite only 2022-23 to 2025-26). Clause deleted |
| Kalaichar district | g08 | MIDC/MeghIDC say West Garo Hills; academic sources say South West Garo Hills. Now just "Garo Hills" |
| Border haat reopening / "still shut mid-2025" | g08 lesson, summary, p37 note | Not confirmable. Only "Suspended Aug 2024" is kept |

## Not changed
- related_legal_metrology_2025.json (Guterres note): already rewritten before this pass, with no "check before the exam" wording.
- `"confidence": "disputed"` fields in research/data past-paper items: these flag disputed official answer keys, not unconfirmed facts.

Checks: `grep -ril "unconfirmed\|not confirmed\|unverified" research/modules research/data` returns nothing. `python3 tools/build.py --strict` exits 0.
