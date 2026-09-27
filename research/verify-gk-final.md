# GK final fact-check log (2026-09-27)

Scope:
- g07 Meghalaya and g08 Industry & Policy: every fact in lessons, examples, traps and all 80 practice items.
- g01–g06: lessons, examples, traps, and time-sensitive practice text (keys already checked; see verify-gk.md).
- IPO 2022 paper items 2022-51…100: `note` fields only.
- Cross-module redundancy and contradictions across g01–g08 (and module practice vs the 2022 paper, which the site auto-links).

Method:
- Facts were checked against official or reliable sources: PIB, PRS (state Acts and Bills), the Meghalaya Assembly NeVA bulletin, megindustry.gov.in, the DPIIT EoDB portal, UNESCO WHC, the Constitution text (Legislative Dept, as on 1 May 2024), and news outlets for state items.
- The session's WebSearch quota ran out partway through. Remaining checks used direct fetches (curl/WebFetch) of official documents and Google News RSS.

Result:
- **All 80 g07/g08 answer keys were correct.**
- **73 changes:** 18 Incorrect, 45 Stale, 10 Redundant.
- **7 practice items replaced:**
  - Redundancy: g04-p14, g07-p23, g08-p26, g08-p39, g08-p40.
  - Staleness / unverifiable: g08-p16.
  - The p38 note (Byrnihat) is new.
- `tools/build.py --strict` passes.

Redundancy decisions (canonical module ← cross-referenced module):
- **Sixth Schedule basics:** g01 ← g07. g07 keeps only the Meghalaya ADC table.
- **GST basics and GST 2.0:** g04 ← g08. g08 keeps the net-GST/ITC, threshold and Meghalaya GST Act rows.
- **RBI policy rates:** g04 ← g08.
- **Byrnihat / IQAir and GI list:** g07 ← g08.
- **Near-duplicate practice items:**
  - g08-p39 duplicated g01-p23.
  - g08-p40 duplicated g04-p12.
  - g08-p26 duplicated g04-p26.
  - g07-p23 was the same as paper 2022-55.
  - g04-p14 was the same as paper 2022-77.
- **Examples named in the brief, checked and found not duplicated:**
  - MSME limits appear only in g08 (g04 has no MSME table).
  - Meghalaya festivals appear only in g07 (g06 has none).
  - NE history in g02 already cross-references the Meghalaya module.
- **Contradiction reconciled:** g01 said each ADC has "4 nominated" members; g07 said 29 elected + 1 nominated. g01 now follows Sixth Schedule para 2(1): not more than 4.

## Incorrect (18)

- **g01 Indian Polity** — `lessons[4].body`
  - Before: | Strength | **34** (CJI + 33) — SC (Number of Judges) Amendment Act 2019 | Fixed by President |
  - After: | Strength | **38** (CJI + 37) *(as of Sept 2026)* — raised from 34 by the SC (Number of Judges) Amendment Act 2026 (Ordinance 16 May 2026; Bill passed Aug 2026); earlier 34 under the 2019 Amendment Act | Fixed by President |
  - Reason: Parliament raised SC strength from 33+CJI to 37+CJI in 2026 (Ordinance 16 May 2026; Bill passed LS 3 Aug, RS 5 Aug 2026); '34' is outdated.
  - Source: https://prsindia.org/billtrack/the-supreme-court-number-of-judges-amendment-bill-2026

- **g01 Indian Polity** — `lessons[6].body`
  - Before: - Each ADC up to **30 members** (**4 nominated by the Governor**, rest elected by adult franchise)
  - After: - Each ADC up to **30 members** (**not more than 4 nominated by the Governor**, rest elected by adult franchise; e.g. KHADC, GHADC = 29 elected + 1 nominated)
  - Reason: Sixth Schedule para 2(1) caps nominated members at 'not more than four'; it does not fix four. Also reconciles with the Meghalaya module (29 + 1).
  - Source: https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf (Constitution of India as on 1 May 2024, Sixth Schedule para 2(1))

- **g07 Meghalaya** — `lessons[0].body`
  - Before: held Meghalaya 21 Jan 1972 – 19 Sep 1973
  - After: held Meghalaya 21 Jan 1972 – 18 Sep 1973
  - Reason: Tenure ended 18 Sep 1973, not 19 Sep.
  - Source: https://en.wikipedia.org/wiki/List_of_governors_of_Meghalaya

- **g07 Meghalaya** — `lessons[0].body`
  - Before: elected unopposed 10 Mar 2023
  - After: elected unopposed 9 Mar 2023
  - Reason: Elected unopposed on 9 Mar 2023 (reports dated 9 Mar 2023).
  - Source: https://en.wikipedia.org/wiki/Meghalaya_Legislative_Assembly

- **g07 Meghalaya** — `lessons[1].body`
  - Before: - **Largest by area:** West Khasi Hills (3,890 km²). **Most populous:** East Khasi Hills (8.26 lakh, Census 2011).
  - After: - **Largest by area:** *unconfirmed* after the 2021 split (the often-quoted West Khasi Hills 3,890 km² predates Eastern West Khasi Hills, 1,356.77 km², being carved out of it). **Most populous:** East Khasi Hills (8.26 lakh, Census 2011).
  - Reason: 3,890 km² is West Khasi Hills' pre-2021 area; after Eastern West Khasi Hills (1,356.77 km²) was carved out, no current official district-area figure was found.
  - Source: https://en.wikipedia.org/wiki/List_of_districts_of_Meghalaya

- **g07 Meghalaya** — `lessons[5].body`
  - Before: | **Garo Dakmanda** (women's wrap-around) | Handloom | **2024** |
  - After: | **Garo Dakmanda** (women's wrap-around; registered as *Meghalaya Garo Textile*) | Handicraft/textile | **2024** |
  - Reason: GI registered name is 'Meghalaya Garo Textile' (class handicraft), FY 2023-24.
  - Source: https://en.wikipedia.org/wiki/Geographical_indications_in_India

- **g07 Meghalaya** — `lessons[5].body`
  - Before: | **Larnai Pottery** (black pottery, Jaintia Hills) | Handicraft | **2024** |
  - After: | **Larnai (Lyrnai) Pottery** (black pottery, Jaintia Hills; registered as *Meghalaya Lyrnai Pottery*) | Handicraft | **2024** |
  - Reason: GI registered spelling is 'Meghalaya Lyrnai Pottery'.
  - Source: https://en.wikipedia.org/wiki/Geographical_indications_in_India

- **g07 Meghalaya** — `lessons[5].body`
  - Before: | **Garo Chubitchi** (rice brew) | Food/beverage | **2024** |
  - After: | **Garo Chubitchi** (rice brew; registered as *Meghalaya Chubitchi*) | Manufactured | **2024** |
  - Reason: GI class is 'Manufactured' (registered name 'Meghalaya Chubitchi').
  - Source: https://en.wikipedia.org/wiki/Geographical_indications_in_India

- **g07 Meghalaya** — `lessons[5].body`
  - Before: | Handloom — **GI No. 1112** | **2 Apr 2025** |
  - After: | Handloom | **2 Apr 2025** |
  - Reason: GI number 1112 could not be verified in any source (GI Registry, Shillong Times, Meghalaya Monitor, Highland Post); removed.
  - Source: https://meghalayamonitor.com/state-secures-gi-tag-for-ryndia/

- **g07 Meghalaya** — `lessons[6].body`
  - Before: | **2 Apr 2025** | **Meghalaya Ryndia** (Eri silk) GI No. 1112 |
  - After: | **2 Apr 2025** | **Meghalaya Ryndia** (Eri silk) gets GI tag | ⏎ | **21 Jul 2026** | **Mission Golden Spice** launched by MDoNER and the State — ₹175.45 cr, 2025–2030, for the GI-tagged **Lakadong turmeric** value chain |
  - Reason: GI number unverifiable (removed); adds the July 2026 Lakadong mission.
  - Source: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2287186

- **g07 Meghalaya** — `practice:g07-meghalaya-p32.explanation`
  - Before: Eri silk ('Meghalaya Ryndia', GI No. 1112, 2 Apr 2025).
  - After: Eri silk ('Meghalaya Ryndia', GI tag announced 2 Apr 2025).
  - Reason: GI number unverifiable; removed.
  - Source: https://meghalayamonitor.com/state-secures-gi-tag-for-ryndia/

- **g08 Industry & Policy** — `examples[4].solution`
  - Before: Dawki (Jaintia Hills) and Dalu
  - After: Dawki (West Jaintia Hills) and Dalu
  - Reason: Dawki is in West Jaintia Hills.
  - Source: https://en.wikipedia.org/wiki/Dawki

- **g08 Industry & Policy** — `lessons[2].body`
  - Before: by the **MSIPF (Amendment) Act, 2025** (Act No. 8 of 2025; Bill introduced by the CM 3 Mar 2025; assent 5 May 2025).
  - After: by the **MSIPF (Amendment) Act, 2025** (preceded by Ordinance No. 5 of 2025, 8 Feb 2025; Bill introduced by the CM on 3 Mar 2025; Act number and assent date *unconfirmed*).
  - Reason: Act No. 8 of 2025 / assent 5 May 2025 could not be verified (not on PRS list of 2025 Acts); Ordinance and Bill dates verified from the Gazette copies.
  - Source: https://prsindia.org/files/bills_acts/bills_states/meghalaya/2025/LB28of2025MG.pdf ; https://prsindia.org/files/bills_acts/bills_states/meghalaya/2025/Ord5of2025MG.pdf

- **g08 Industry & Policy** — `lessons[6].body`
  - Before: **Star Cement, Lumshnong (East Jaintia Hills)** — clinker from 23 Dec 2004, cement Feb 2005, ~1.67 MTPA.
  - After: **Star Cement, Lumshnong (East Jaintia Hills)** — integrated unit began operations in **2005**.
  - Reason: Company history: integrated unit at Lumshnong commenced 2005 with initial capacity 0.4 MTPA; the 23 Dec 2004 date and ~1.67 MTPA figure are not supported.
  - Source: https://www.starcement.co.in/about-us-overview

- **g08 Industry & Policy** — `lessons[6].body`
  - Before: | **Dawki** | Jaintia Hills | **Export-import + passengers** |
  - After: | **Dawki** | West Jaintia Hills | **Export-import + passengers** |
  - Reason: Dawki is in West Jaintia Hills (dept page still uses the pre-2012 'Jaintia Hills'); matches the g07 module.
  - Source: https://en.wikipedia.org/wiki/Dawki ; https://megindustry.gov.in/landcustom.html

- **g08 Industry & Policy** — `lessons[6].body`
  - Before: **Eri silk — Meghalaya Ryndia** (GI No. 1112, Apr 2025); **Umden-Diwon** first Eri Silk Village (2021); Garo Dakmanda (GI 2024)
  - After: **Eri silk — Meghalaya Ryndia** (GI, Apr 2025) — GI list in *Meghalaya* module; **Umden-Diwon** first Eri Silk Village (2021)
  - Reason: 'GI No. 1112' could not be verified in any source (removed in g07 too); GI details are canonical in g07, so the rest is a cross-reference.
  - Source: https://meghalayamonitor.com/state-secures-gi-tag-for-ryndia/

- **g08 Industry & Policy** — `practice:g08-industry-policy-p14.explanation`
  - Before: by the MSIPF (Amendment) Act, 2025 (Act No. 8 of 2025, assent 5 May 2025; Shillong Times, Mar 2025).
  - After: by the MSIPF (Amendment) Act, 2025 (Bill introduced by the CM on 3 Mar 2025; MIPA runs invest.meghalaya.gov.in).
  - Reason: Act No. 8 of 2025 / assent 5 May 2025 unverifiable; Bill date verified from Gazette.
  - Source: https://prsindia.org/files/bills_acts/bills_states/meghalaya/2025/LB28of2025MG.pdf ; https://invest.meghalaya.gov.in/

- **g08 Industry & Policy** — `practice:g08-industry-policy-p36.explanation`
  - Before: Dawki (Jaintia Hills) and Dalu
  - After: Dawki (West Jaintia Hills) and Dalu
  - Reason: Dawki is in West Jaintia Hills.
  - Source: https://en.wikipedia.org/wiki/Dawki

## Stale (45)

- **../data/ipo2022_english_gk.json** — `paper:2022-78.note`
  - Before: Current status: 32 ascents, the latest on 17 May 2026 (31st on 27 May 2025).
  - After: As of Sept 2026: 32 ascents, the latest on 17 May 2026 (31st on 27 May 2025).
  - Reason: 'Current status' wording rots; replaced with an as-of date.
  - Source: https://en.wikipedia.org/wiki/Kami_Rita

- **../data/ipo2022_english_gk.json** — `paper:2022-98.note`
  - Before: GEO-7 was released in December 2025.
  - After: GEO-7 was released in December 2025 (latest edition as of Sept 2026).
  - Reason: Edition number is time-sensitive; dated.
  - Source: https://www.unep.org/geo

- **g01 Indian Polity** — `lessons[3].body`
  - Before: 1st tribal President **Droupadi Murmu** (15th President, since 25 July 2022) |
  - After: 1st tribal President **Droupadi Murmu** (15th President, since 25 July 2022) *(as of Sept 2026)* |
  - Reason: Incumbent office holder must carry an as-of date.
  - Source: https://presidentofindia.nic.in/

- **g02 Indian History** — `lessons[0].body`
  - Before: | First sermon | **Sarnath** (Deer Park) — *Dharmachakra Pravartana* | — |
  - After: | First sermon | **Sarnath** (Deer Park) — *Dharmachakra Pravartana*; UNESCO World Heritage Site (2026) | — |
  - Reason: Sarnath was inscribed on the World Heritage List in 2026.
  - Source: https://whc.unesco.org/en/statesparties/in

- **g03 Geography** — `lessons[0].body`
  - Before: | Newest UTs | J&K and Ladakh (31 Oct 2019); Dadra & Nagar Haveli and Daman & Diu merged (26 Jan 2020) |
  - After: | Newest UTs (as of Sept 2026) | J&K and Ladakh (31 Oct 2019); Dadra & Nagar Haveli and Daman & Diu merged (26 Jan 2020) |
  - Reason: 'Newest' is time-sensitive; no UT created or merged since 2020, now dated.
  - Source: https://en.wikipedia.org/wiki/States_and_union_territories_of_India

- **g03 Geography** — `lessons[3].body`
  - Before: (as of ISFR 2023).
  - After: (ISFR 2023 — still the latest edition as of Sept 2026).
  - Reason: Confirmed ISFR 2023 is the latest edition listed by FSI; dated.
  - Source: https://fsi.nic.in/forest-report-2023

- **g03 Geography** — `lessons[4].body`
  - Before: > Hook: **Khangchendzonga NP (Sikkim)** is India's only **"mixed"** (natural + cultural) UNESCO World Heritage Site (2016).
  - After: > Hook: **Khangchendzonga NP (Sikkim)** is India's only **"mixed"** (natural + cultural) UNESCO World Heritage Site (2016). India has **45** World Heritage Sites — 37 cultural, 7 natural, 1 mixed; latest: Maratha Military Landscapes (2025) and the Ancient Buddhist Site of Sarnath (2026) (as of Sept 2026).
  - Reason: Adds the current, dated WHS count; Sarnath inscribed 2026 (48th session).
  - Source: https://whc.unesco.org/en/statesparties/in

- **g04 Economy & Banking** — `lessons[2].body`
  - Before: | 1 April 2020 | 10 PSBs merged into 4 → **12 public sector banks** |
  - After: | 1 April 2020 | 10 PSBs merged into 4 → **12 public sector banks** (no merger since, as of Sept 2026) |
  - Reason: Count is time-sensitive; still 12 nationalised/public sector banks.
  - Source: https://en.wikipedia.org/wiki/Public_sector_banks_in_India

- **g06 Computers, Environment & Misc** — `lessons[2].body`
  - Before: ### Recent climate COPs
  - After: ### Climate COPs (2021–2026)
  - Reason: 'Recent' wording rots; heading now names the span covered.
  - Source: https://unfccc.int/cop31

- **g06 Computers, Environment & Misc** — `lessons[4].body`
  - Before: Latest (announced Oct 2025, as of September 2026): Peace — María Corina Machado (Venezuela); Literature — László Krasznahorkai (Hungary).
  - After: 2025 prizes (announced Oct 2025): Peace — María Corina Machado (Venezuela); Literature — László Krasznahorkai (Hungary). The 2026 prizes are announced in early Oct 2026 — check them before the exam.
  - Reason: 'Latest' will rot when the 2026 Nobels are announced (early Oct 2026, before the 28 Nov exam).
  - Source: https://www.nobelprize.org/prizes/lists/all-nobel-prizes/

- **g06 Computers, Environment & Misc** — `lessons[5].body`
  - Before: | Asian Games | 2026 Aichi–Nagoya, Japan |
  - After: | Asian Games | 2026 Aichi–Nagoya, Japan (19 Sept – 4 Oct 2026) |
  - Reason: Games in progress on the sweep date; dated rather than open-ended.
  - Source: https://en.wikipedia.org/wiki/2026_Asian_Games

- **g06 Computers, Environment & Misc** — `lessons[5].body`
  - Before: | Chess | **D. Gukesh** became the youngest undisputed world champion (Dec 2024, age 18) |
  - After: | Chess | **D. Gukesh** became the youngest undisputed world champion (Dec 2024, age 18); still champion as of Sept 2026 — defends against Candidates 2026 winner **Javokhir Sindarov** (Uzbekistan), 24 Nov – 12 Dec 2026 |
  - Reason: Title status changes after the Nov–Dec 2026 match; dated and flagged.
  - Source: https://en.wikipedia.org/wiki/World_Chess_Championship_2026

- **g06 Computers, Environment & Misc** — `lessons[5].body`
  - Before: | Commonwealth Games | 2026 Glasgow; **2030 Ahmedabad** (centenary Games, confirmed Nov 2025) |
  - After: | Commonwealth Games | 2026 Glasgow (23 July – 2 Aug 2026; Australia topped the table, India 4th with 13 gold / 29 medals); **2030 Ahmedabad** (centenary Games, confirmed Nov 2025) (as of Sept 2026) |
  - Reason: The 2026 Games have now been held; entry read as a future event.
  - Source: https://en.wikipedia.org/wiki/2026_Commonwealth_Games

- **g06 Computers, Environment & Misc** — `lessons[6].body`
  - Before: | Hand-in-Hand | China | Army (not held since 2019) |
  - After: | Hand-in-Hand | China | Army (last confirmed edition 2019; resumption unconfirmed as of Sept 2026) |
  - Reason: 'Not held since 2019' is an open-ended claim that could rot after the 2024–25 India–China thaw; could not verify either way.
  - Source: unconfirmed

- **g07 Meghalaya** — `lessons[0].body`
  - Before: James P.K. Sangma (NPP), elected unopposed June 2026, succeeding Dr W.R. Kharlukhi *(unconfirmed — news reports only)*
  - After: James P.K. Sangma (NPP), elected unopposed June 2026, succeeding Dr W.R. Kharlukhi
  - Reason: Confirmed by a second source; unconfirmed tag removed.
  - Source: https://en.wikipedia.org/wiki/2026_Rajya_Sabha_elections ; https://ommcomnews.com/india-news/npp-nominee-james-sangma-elected-unopposed-to-rajya-sabha-from-meghalaya/

- **g07 Meghalaya** — `lessons[0].body`
  - Before: | 30 (29 + 1) *(unconfirmed on the JHADC site)* |
  - After: | **30** (29 elected + 1 nominated) |
  - Reason: Seat count confirmed (29 elected + 1 nominated; 2025 council election).
  - Source: https://en.wikipedia.org/wiki/Jaintia_Hills_Autonomous_District_Council

- **g07 Meghalaya** — `lessons[2].body`
  - Before: submitted **30 Jan 2026** for the 2026–27 cycle (decision pending).
  - After: submitted **Jan 2026**; accepted as complete and due for decision at the **49th World Heritage Committee session in 2027** (as of Sep 2026).
  - Reason: Submission reported 29 Jan 2026 (exact '30 Jan' not confirmed); UNESCO accepted it for examination at the 2027 (49th) session.
  - Source: https://hubnetwork.in/unesco-to-decide-on-meghalayas-living-root-bridges-in-2027/ ; https://www.thehindu.com/news/national/india-submits-nomination-of-meghalayas-living-root-bridges-for-unesco-world-heritage-site/article70564187.ece

- **g07 Meghalaya** — `lessons[5].body`
  - Before: **Mission Lakadong (2018–2023)** — target 50,000 MT/yr.
  - After: **Mission Lakadong (2018–2023)** — target 50,000 MT/yr. **Mission Golden Spice** (MDoNER + State, launched **21 Jul 2026**): ₹175.45 cr, five-year (2025–2030) Lakadong value-chain project.
  - Reason: New central–state mission on Lakadong turmeric (July 2026) was missing.
  - Source: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2287186

- **g07 Meghalaya** — `lessons[5].body`
  - Before: - ~32 more products have applications pending (Sohra honey, pineapple, black pepper, Tungrymbai, Garo sticky rice).
  - After: - ~32 more products have applications pending (as of May 2026): Sohra honey, Meghalaya pineapple, black pepper, Tungrymbai, Garo sticky rice.
  - Reason: Count is time-sensitive; dated to the May 2026 report.
  - Source: https://hubnetwork.in/meghalaya-seeks-gi-tags-for-32-indigenous-products-from-sohra-honey-to-tribal-musical-instruments/

- **g07 Meghalaya** — `lessons[6].body`
  - Before: | Aug 2026 | Cabinet approved the **Meghalaya Official Languages Bill, 2026** to replace the Ordinance — passage by the Assembly *(unconfirmed)* |
  - After: | **13 / 28 Aug 2026** | Cabinet approved, then the Assembly **passed**, the **Meghalaya Official Languages Bill, 2026**, replacing the Ordinance |
  - Reason: The Assembly passed the Bill on 28 Aug 2026 (last day of the autumn session).
  - Source: https://cms.neva.gov.in/NeVA/ML/FileStructures//Notices/2eca3499-5562-41d8-aecb-9374c5eb7341.pdf

- **g07 Meghalaya** — `lessons[6].body`
  - Before: | June 2026 | Rajya Sabha: James P.K. Sangma (NPP) elected unopposed *(unconfirmed)* |
  - After: | June 2026 | Rajya Sabha: James P.K. Sangma (NPP) elected unopposed |
  - Reason: Confirmed by a second source; unconfirmed tag removed.
  - Source: https://en.wikipedia.org/wiki/2026_Rajya_Sabha_elections

- **g07 Meghalaya** — `lessons[6].body`
  - Before: Bill to amend the **Meghalaya GST Act, 2017** |
  - After: Bill to amend the **Meghalaya GST Act, 2017** (passed by the Assembly 28 Aug 2026) |
  - Reason: The Meghalaya GST (Amendment) Bill, 2026 was passed on 28 Aug 2026.
  - Source: https://cms.neva.gov.in/NeVA/ML/FileStructures//Notices/2eca3499-5562-41d8-aecb-9374c5eb7341.pdf

- **g07 Meghalaya** — `lessons[6].body`
  - Before: the state disputed it and shut six ferro-alloy units |
  - After: the state disputed it and shut six ferro-alloy units | ⏎ | 24 Mar 2026 | **IQAir report for 2025**: **Loni** (Ghaziabad, UP) = world's most polluted city (PM2.5 112.5 µg/m³); Byrnihat still among the world's 10 most polluted |
  - Reason: The newer IQAir report (Mar 2026) changed the top spot; Byrnihat's 'most polluted' title is for 2024 only.
  - Source: https://www.newindianexpress.com/india/2026/Mar/24/india-6th-most-polluted-country-ups-loni-worlds-most-polluted-city-delhi-4th-report

- **g07 Meghalaya** — `lessons[6].body`
  - Before: | **30 Jan 2026** | India submitted the **living root bridges** nomination ("Jingkieng Jri / Lyu Chrai Cultural Landscape") to UNESCO for 2026–27 |
  - After: | Jan 2026 | India submitted the **living root bridges** nomination ("Jingkieng Jri / Lyu Chrai Cultural Landscape") to UNESCO; decision due at the 49th World Heritage Committee session, **2027** |
  - Reason: Exact '30 Jan' not confirmed (reported 29 Jan); decision now scheduled for 2027.
  - Source: https://hubnetwork.in/unesco-to-decide-on-meghalayas-living-root-bridges-in-2027/

- **g07 Meghalaya** — `lessons[6].body`
  - Before: (Feb–Mar 2027 per IOA) — first time;
  - After: (Feb–Mar 2027 per IOA; host-state agreement signed May 2026; exact dates not announced as of Sep 2026) — first time;
  - Reason: Dated; host-state agreement signed 29–30 May 2026.
  - Source: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2266991

- **g07 Meghalaya** — `lessons[6].body`
  - Before: - **Pending six**: Langpih, Borduar, Nongwah-Mawtamur, Desh Doomreah, Block I & II, Psiar-Khanduli.
  - After: - **Pending six** (second-phase talks unresolved as of Sep 2026): Langpih, Borduar, Nongwah-Mawtamur, Desh Doomreah, Block I & II, Psiar-Khanduli.
  - Reason: Status dated; phase-2 talks still under way in July–Aug 2026.
  - Source: https://assamtribune.com/north-east/meghalaya-ready-for-border-talks-awaits-assams-regional-committee-chairman-1615245

- **g07 Meghalaya** — `practice:g07-meghalaya-p15.explanation`
  - Before: India submitted the full nomination on 30 Jan 2026.
  - After: India submitted the full nomination in Jan 2026; UNESCO is due to decide in 2027 (as of Sep 2026).
  - Reason: Exact date unconfirmed; decision timing added.
  - Source: https://hubnetwork.in/unesco-to-decide-on-meghalayas-living-root-bridges-in-2027/

- **g07 Meghalaya** — `practice:g07-meghalaya-p30.note`
  - Before: Replacement Bill approved by Cabinet in Aug 2026; Assembly passage not confirmed as of 27 Sep 2026.
  - After: The Meghalaya Official Languages Bill, 2026, replacing the Ordinance, was passed by the Assembly on 28 Aug 2026 (as of Sep 2026).
  - Reason: Bill passed 28 Aug 2026.
  - Source: https://cms.neva.gov.in/NeVA/ML/FileStructures//Notices/2eca3499-5562-41d8-aecb-9374c5eb7341.pdf

- **g07 Meghalaya** — `practice:g07-meghalaya-p38.note`
  - Before: (none)
  - After: The title is for 2024 data. In IQAir's report for 2025 (24 Mar 2026), Loni (Ghaziabad, UP) was the most polluted city; Byrnihat stayed in the world's top 10 (as of Sep 2026).
  - Reason: Newer IQAir report changed the top spot.
  - Source: https://www.newindianexpress.com/india/2026/Mar/24/india-6th-most-polluted-country-ups-loni-worlds-most-polluted-city-delhi-4th-report

- **g07 Meghalaya** — `practice:g07-meghalaya-p39.explanation`
  - Before: Six remain, including Langpih and Block I & II (PIB, Mar 2022).
  - After: Six remain (as of Sep 2026), including Langpih and Block I & II (PIB, Mar 2022).
  - Reason: Pending count is time-sensitive.
  - Source: https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1811062

- **g08 Industry & Policy** — `examples[1].solution`
  - Before: above ₹10 cr and customised packages → High-Powered Committee (CM).
  - After: above ₹10 cr → High-Powered Committee (CM); customised packages > ₹100 cr go to the State Cabinet (2025 amendment).
  - Reason: 2025 amendment moved customised packages > ₹100 cr to the Cabinet.
  - Source: https://prsindia.org/files/bills_acts/bills_states/meghalaya/2025/LB28of2025MG.pdf

- **g08 Industry & Policy** — `lessons[0].body`
  - Before: | Minister (as of Sep 2025 reshuffle) | **Sniawbhalang Dhar**, Deputy CM |
  - After: | Minister (as of Sep 2026) | **Sniawbhalang Dhar**, Deputy CM — held C&I when MIIPP 2024 was issued; retained it in the Sept 2025 reshuffle |
  - Reason: Label was tied to a 2025 event; Dhar confirmed as C&I Minister in MIIPP 2024 foreword and retained portfolio on 16 Sep 2025 reshuffle; no later change found.
  - Source: https://ukhrultimes.com/meghalaya-cm-assigns-portfolios-to-new-ministers/ ; https://megindustry.gov.in/policy/MIIPP-2024.pdf

- **g08 Industry & Policy** — `lessons[1].body`
  - Before: or patented green tech at any size — decided by the **High-Powered Committee** |
  - After: or patented green tech at any size — evaluated by the **High-Powered Committee** (MIIPP text); since the 2025 MSIPF amendment, MIPA sends packages for investments **> ₹100 cr** to the **State Cabinet** |
  - Reason: MSIPF (Amendment) Bill 2025 omits §9(2)(h) (HPC approval of customised packages) and adds §4(10): customised packages > ₹100 cr go to the State Cabinet.
  - Source: https://prsindia.org/files/bills_acts/bills_states/meghalaya/2025/LB28of2025MG.pdf

- **g08 Industry & Policy** — `lessons[2].body`
  - Before: | **High-Powered Committee** | **Chief Minister** | In-principle approval **above ₹10 cr**; **customised packages** |
  - After: | **High-Powered Committee** | **Chief Minister** | In-principle approval **above ₹10 cr** (customised packages > ₹100 cr now go to the State Cabinet — 2025 amendment) |
  - Reason: 2025 amendment omitted the HPC's power to approve customised packages (§9(2)(h)); MIPA now submits packages > ₹100 cr to the Cabinet.
  - Source: https://prsindia.org/files/bills_acts/bills_states/meghalaya/2025/LB28of2025MG.pdf

- **g08 Industry & Policy** — `lessons[3].body`
  - Before: ; > 1.5 crore registrations by early 2024 |
  - After:  |
  - Reason: Rot-prone count; SIDBI page gives an undated 'over 1.50 crore' figure, not 'early 2024'.
  - Source: https://www.sidbi.in/udyam-assist-platform

- **g08 Industry & Policy** — `lessons[4].body`
  - Before: (continuation from 2026-27 *unconfirmed*)
  - After: (continuation from 2026-27 *unconfirmed*, as of Sep 2026)
  - Reason: Time-sensitive status now dated; PIB confirms only the 2021-22 to 2025-26 approval.
  - Source: https://www.pib.gov.in/PressReleasePage.aspx?PRID=1829437

- **g08 Industry & Policy** — `lessons[5].body`
  - Before: Registration to 31.03.2026 (any extension *unconfirmed*)
  - After: Registration to 31.03.2026 (any extension *unconfirmed*, as of Sep 2026)
  - Reason: Time-sensitive status now dated.
  - Source: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2012362

- **g08 Industry & Policy** — `lessons[5].body`
  - Before: (continuation after 2025-26 *unconfirmed*)
  - After: (continuation after 2025-26 *unconfirmed*, as of Sep 2026)
  - Reason: Time-sensitive status now dated.
  - Source: https://www.pmindia.gov.in/en/news_updates/cabinet-approves-new-scheme-prime-ministers-development-initiative-for-north-east-region-pm-devine-for-the-remaining-four-years-of-the-15th-finance-commission-from-2022-23-to-2025/

- **g08 Industry & Policy** — `lessons[6].body`
  - Before: still shut mid-2025. Status in 2026 *(unconfirmed)*.
  - After: still shut mid-2025. Reopening *unconfirmed* (as of Sep 2026).
  - Reason: Time-sensitive status now dated.
  - Source: https://megindustry.gov.in/borderhaat.html

- **g08 Industry & Policy** — `lessons[7].body`
  - Before: | **BRAP** | DPIIT's Business Reforms Action Plan; since BRAP 2020 states are **categorised** (Top Achievers, Achievers, Aspirers, **Emerging Business Ecosystems**), not ranked. **Meghalaya = Emerging Business Ecosystem in BRAP 2020 and 2022** |
  - After: | **BRAP** | DPIIT's Business Reforms Action Plan; states are **categorised**, not ranked. **BRAP 2020**: Meghalaya an **Emerging Business Ecosystem**. **BRAP 2024** (latest, as of Sep 2026): bands **Top Achievers > 95%, Achievers 90–95%, Fast Movers 80–90%, Aspirers < 80%**; NE states (except Assam) and UTs (except Delhi) form a separate **Category X** — **Meghalaya = Aspirer (Category X)** |
  - Reason: BRAP 2024 state-wise results published on DPIIT EoDB portal (Meghalaya: Aspirers, Category X). 'Emerging Business Ecosystem in BRAP 2022' could not be verified (BRAP 2022 release gives no such state list) and is removed.
  - Source: https://eodb.dpiit.gov.in/PublicDoc/Download/MN1OYz0an_sss_OdQ20WT7_sss_R5A_eee__eee_ ; https://www.iasgyan.in/daily-current-affairs/business-reform-action-plan-brap

- **g08 Industry & Policy** — `lessons[7].body`
  - Before: CM's High-Powered Committee (> ₹10 cr, customised packages) — all via MIPA's UIP.
  - After: CM's High-Powered Committee (> ₹10 cr); customised packages > ₹100 cr → State Cabinet (2025 amendment) — all via MIPA's UIP.
  - Reason: 2025 amendment moved customised packages > ₹100 cr to the Cabinet.
  - Source: https://prsindia.org/files/bills_acts/bills_states/meghalaya/2025/LB28of2025MG.pdf

- **g08 Industry & Policy** — `lessons[7].body`
  - Before: Two haats (Kalaichar, Balat) suspended since Aug 2024, four more approved;
  - After: Two haats (Kalaichar, Balat) suspended in Aug 2024 (reopening unconfirmed as of Sep 2026), four more approved;
  - Reason: Removes open-ended 'since' claim; dated.
  - Source: https://megindustry.gov.in/borderhaat.html

- **g08 Industry & Policy** — `lessons[7].body`
  - Before: | **13 Aug 2026** — Cabinet approved a Bill amending the **Meghalaya GST Act, 2017** to match national changes |
  - After: | Bill amending the **Meghalaya GST Act, 2017** to match national changes — Cabinet 13 Aug 2026, **passed by the Assembly 28 Aug 2026** |
  - Reason: Status moved on: the Assembly passed the amendment Bill on 28 Aug 2026.
  - Source: https://cms.neva.gov.in/NeVA/ML/FileStructures//Notices/2eca3499-5562-41d8-aecb-9374c5eb7341.pdf

- **g08 Industry & Policy** — `practice:g08-industry-policy-p12.explanation`
  - Before: High-Powered Committee (CM) — above ₹10 cr and customised packages.
  - After: High-Powered Committee (CM) — above ₹10 cr (customised packages > ₹100 cr go to the State Cabinet since the 2025 amendment).
  - Reason: 2025 amendment moved customised packages > ₹100 cr to the Cabinet; key unchanged.
  - Source: https://prsindia.org/files/bills_acts/bills_states/meghalaya/2025/LB28of2025MG.pdf

- **g08 Industry & Policy** — `practice:g08-industry-policy-p16`
  - Before: Q: In DPIIT's Business Reforms Action Plan (BRAP) 2020 and 2022, Meghalaya was placed in the category → Emerging Business Ecosystem
  - After: Q: In DPIIT's Business Reforms Action Plan (BRAP) 2024 results, Meghalaya (Category X — NE states except Assam, and UTs except Delhi) was placed among the → Aspirers
  - Reason: Question relied on an unverifiable BRAP 2022 claim; replaced with the latest verified result (BRAP 2024: Meghalaya = Aspirers, Category X). BRAP 2020 fact kept in the explanation.
  - Source: https://eodb.dpiit.gov.in/PublicDoc/Download/MN1OYz0an_sss_OdQ20WT7_sss_R5A_eee__eee_

## Redundant (10)

- **g04 Economy & Banking** — `practice:g04-economy-banking-p14`
  - Before: Q: NITI Aayog replaced the Planning Commission with effect from → 1 January 2015
  - After: Q: The Planning Commission of India, which NITI Aayog replaced, was set up by a Cabinet resolution in → March 1950
  - Reason: Old item ('NITI Aayog replaced the Planning Commission with effect from 1 January 2015') duplicated real paper question 2022-77, which the site already links to this topic. Replaced with a different verified item on the same topic.
  - Source: https://en.wikipedia.org/wiki/Planning_Commission_(India)

- **g07 Meghalaya** — `lessons[0].body`
  - Before: - Basis: **Art. 244(2)** and **Art. 275(1)**. The Sixth Schedule covers tribal areas of **Assam, Meghalaya, Tripura and Mizoram** (hook: **"AMTM"**). ⏎ - ADC law-making subjects: land (other than reserved forest), forests, **jhum** (shifting cultivation), village administration, inheritance, marriage and social customs. ADCs also run **village courts** and collect certain taxes and royalties. ⏎ 
  - After: - Sixth Schedule basics (Arts 244(2) & 275(1), the four "AMTM" states, ADC powers, up to 30 members with not more than 4 nominated) — see *Indian Polity* module. Meghalaya has **3 of the 10 ADCs**: ⏎ 
  - Reason: Same Sixth Schedule block (basis, AMTM, ADC law-making subjects) is canonical in g01 Indian Polity (Scheduled & Tribal Areas); kept only the Meghalaya-specific ADC table here.
  - Source: https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf

- **g07 Meghalaya** — `practice:g07-meghalaya-p23`
  - Before: Q: Garia Puja is a festival mainly associated with the tribes of → Tripura (Tripuri, Jamatia, Reang etc.)
  - After: Q: Shad Suk Mynsiem, the 'Dance of the Peaceful Hearts' held in Shillong in spring, is a traditional dance of the → Khasis
  - Reason: Old item (Garia Puja is a festival of Tripura's tribes) duplicated real paper question 2022-55, already linked to this topic; the Garia trap stays in the lesson and traps. Replaced with a verified festival item.
  - Source: https://www.meghalayatourism.in/meghalaya-mosaic/traditional-dance/

- **g08 Industry & Policy** — `lessons[6].body`
  - Before: > **Byrnihat**: IQAir World Air Quality Report 2024 (Mar 2025) — **world's most polluted metro area**, PM2.5 **128.2 µg/m³**; six ferro-alloy units shut; the State disputed the report. Under UNNATI, Ri-Bhoi is **Zone B**.
  - After: > **Byrnihat** air-pollution rankings (IQAir) — see *Meghalaya* module, current affairs. Under UNNATI, Ri-Bhoi is **Zone B**.
  - Reason: Same IQAir/Byrnihat block is canonical in g07 lesson 'Current Meghalaya affairs' (now also updated for the IQAir 2025 report).
  - Source: (internal cross-module check)

- **g08 Industry & Policy** — `lessons[7].body`
  - Before: | Constitution | **101st Amendment Act, 2016**; GST from **1 July 2017** | ⏎ | Articles | **246A** — concurrent power to levy GST · **269A** — IGST on inter-state supply · **279A** — **GST Council** (chair: **Union Finance Minister**; State FMs members) | ⏎ | Structure | **CGST + SGST/UTGST** intra-state; **IGST** inter-state and imports | ⏎ 
  - After: | Basics | 101st Amendment, Arts 246A/269A/279A, GST Council, CGST/SGST/IGST, GST 2.0 slabs — see *Economy & Banking* module | ⏎ 
  - Reason: Constitution/Articles/Structure rows repeat the canonical GST table in g04 (lesson 'Fiscal policy, Budget, taxation and GST'). Kept only the industry-specific rows (ITC/net GST, threshold, Meghalaya GST Act).
  - Source: (internal cross-module check)

- **g08 Industry & Policy** — `lessons[7].body`
  - Before: | **GST 2.0** | **56th GST Council, 3 Sep 2025** → from **22 Sep 2025** mainly **two slabs, 5% and 18%**; **40%** special rate for sin/luxury goods | ⏎ 
  - After: (none)
  - Reason: GST 2.0 row duplicates g04's GST 2.0 row (and trap); covered by the cross-reference row.
  - Source: (internal cross-module check)

- **g08 Industry & Policy** — `lessons[7].body`
  - Before: | RBI (as of Aug 2026 MPC) | Repo **5.25%**, SDF 5.00%, MSF & Bank Rate 5.50%; next MPC 5–7 Oct 2026 — re-check | ⏎ 
  - After: (none)
  - Reason: Policy-rate block is canonical (and dated) in g04 'RBI and monetary policy tools'; a second time-sensitive copy here would go stale separately.
  - Source: (internal cross-module check)

- **g08 Industry & Policy** — `practice:g08-industry-policy-p26`
  - Before: Q: Stand-Up India (launched 5 April 2016) provides bank loans of ₹10 lakh to ₹1 crore for greenfield enterprises of → SC/ST and women entrepreneurs
  - After: Q: Under PMEGP, the maximum project cost admissible for a manufacturing unit is → ₹50 lakh
  - Reason: Old item (Stand-Up India loans ₹10 lakh–₹1 crore for SC/ST and women) was a near-duplicate of g04-economy-banking-p26. Replaced with a verified central-scheme item.
  - Source: https://www.pib.gov.in/PressReleasePage.aspx?PRID=1829437

- **g08 Industry & Policy** — `practice:g08-industry-policy-p39`
  - Before: Q: The GST Council is constituted under which Article of the Constitution? → Article 279A
  - After: Q: UNNATI 2024's Manufacturing & Services Linked Incentive (MSLI) is linked to a unit's 'net GST', which means → GST paid less input tax credit
  - Reason: Old item (GST Council under Art. 279A) was a near-duplicate of g01-indian-polity-p23. Replaced with a GST item specific to industrial incentives.
  - Source: https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2012362

- **g08 Industry & Policy** — `practice:g08-industry-policy-p40`
  - Before: Q: After GST rate rationalisation effective 22 September 2025, the two main GST slabs are → 5% and 18%
  - After: Q: A unit in Byrnihat (Meghalaya) sells goods to a buyer in West Bengal. Which GST applies to this supply? → IGST
  - Reason: Old item (GST 2.0: 5% and 18% main slabs) was a near-duplicate of g04-economy-banking-p12 (slabs abolished under GST 2.0). Replaced with a different verified GST item.
  - Source: https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf (Art. 269A)

## Still unconfirmed (marked "(unconfirmed)" in lessons; none used in practice)

**g07 Meghalaya**
- Khasi handloom as a separate GI
- Sohra's exact 12-month rainfall figure
- Meghalaya's share of national uranium reserves
- Year Balpakram NP was established
- Largest district by area after the 2021 split
- Exact 2027 National Games dates

**g08 Industry & Policy**
- GST registration threshold that applies to Meghalaya
- Whether PMEGP and PM-DevINE continue beyond 2025-26
- Any extension of UNNATI registration
- MIIPP's new registration end date (the one-year extension is confirmed)
- Border-haat reopening
- The Stand-Up India revamp
- The full list of 16 MIIPP priority sectors
- Number and assent date of the MSIPF (Amendment) Act 2025
- The C&I Service Rules amendment (news report only)
- Kalaichar's district
- The year the Single Window Agency was set up

**g01–g06**
- Whether exercise Hand-in-Hand (India–China) has resumed
- Whether ISFR 2025 has been released

**Re-check before the 28 Nov 2026 exam**
- 2026 Nobel prizes (early Oct)
- RBI MPC (Oct 2026)
- World Chess Championship (24 Nov – 12 Dec 2026)
- Asian Games 2026 results (ends 4 Oct)
