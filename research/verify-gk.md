# GK fact-check log (2026-09-27)

Scope:
- Modules g01–g06: 240 practice items plus every lesson, example and trap.
- Real 2022 paper: ids 2022-51 … 2022-100.

Method: each question was answered independently before looking at the key. Time-sensitive claims were checked on the web, preferring official sources.

Result:
- All 240 module practice keys and all 50 paper keys were correct, so no `answer` values changed.
- 20 edits in total: 1 practice explanation (g02-p39), 3 practice-level text additions (g04-p05 explanation, g04-p28 note, g05-p38 explanation), 1 paper explanation+note (2022-89), and 15 lesson/trap text edits.
- `tools/build.py --strict` passes: 29 modules, 875 practice questions, 175 paper questions.

## Named 2025–26 claims

| Claim | Status | Source |
|---|---|---|
| VB-G RAM G Act 2025 replaces MGNREGA from 1 July 2026 and guarantees 125 days of work | Confirmed; g04-p27 kept | https://www.newsonair.gov.in/union-minister-jitendra-singh-says-viksit-bharat-g-ram-g-act-guarantees-125-days-of-wage-employment-per-rural-household ; https://www.business-standard.com/india-news/vb-g-ram-g-replacing-mgnrega-to-come-into-force-across-india-from-july-1-126051100540_1.html |
| Constitution (131st Amendment) Bill 2026 failed in the Lok Sabha on 17 Apr 2026 (298–230) | Confirmed; g01 lesson kept | https://www.drishtiias.com/daily-updates/daily-news-analysis/defeat-of-the-constitution-131st-amendment-bill-2026 ; https://www.livelaw.in/top-stories/lok-sabha-rejects-constitution-131st-bill-2026-on-delimitation-530736 |
| 106 amendment Acts (the latest is the 106th, 28 Sept 2023) | Confirmed | https://en.wikipedia.org/wiki/List_of_amendments_of_the_Constitution_of_India |
| New GDP series with base year 2022-23, released 27 Feb 2026 | Confirmed; g04-p31 kept | https://www.mospi.gov.in/uploads/latestReleases/latest_release_1772189865181_f040336d-bc57-4aed-b80f-586d9ccb279e_Press_Note_on_New_Series_of_GDP_Estimates_with_Base_Year_2022-23_27022026.pdf |
| Ramsar sites = 101 (Glaw Lake, 3 Aug 2026) | Confirmed; lesson made exact | https://newsonair.gov.in/glaw-lake-in-arunachal-pradesh-designated-indias-101st-ramsar-site/ |

Also confirmed:
- CPI base 2024
- Aug 2026 MPC rates: repo 5.25%, SDF 5.00%, MSF 5.50%
- 16th Finance Commission devolution at 41%
- Income-tax Act 2025 in force from 1 Apr 2026
- NITI Aayog Vice-Chairperson Ashok Lahiri
- 58 tiger reserves (latest: Madhav)
- 18 biosphere reserves, 13 in UNESCO's MAB network
- Bharat Ratna: five awarded for 2024
- Dadasaheb Phalke: Mohanlal (2023) and Anant Nag (2024)
- Jnanpith: 59th and 60th awards
- International Booker 2026
- 2026 Men's T20 World Cup
- COP31: 9–20 Nov 2026
- 2022-78 note (Kami Rita, 32nd ascent)
- 2022-98 note (GEO-7)

Nothing had to be removed as unverifiable.

## Changes

### g01 Indian Polity
- Lesson "Union Executive & Parliament", President table, Pardoning row:
  - Before: "(Governor: Art. 161, cannot pardon death sentence)"
  - After: keeps the standard exam answer and adds that in *State of Haryana v. Raj Kumar* (Aug 2021) the SC held the Governor's Art. 161 power extends to death-row prisoners and overrides Sec. 433A CrPC.
  - Reason: the old line was an absolute statement that has since been nuanced by the SC.
  - Source: https://www.drishtiias.com/daily-news-analysis/governor-s-power-to-pardon-overrides-section-433a-sc

### g02 Indian History
- g02-indian-history-p39, explanation:
  - Before: "shot … at Gohpur (Sonitpur)"
  - After: "at Gohpur (then Darrang district, now Biswanath district)"
  - Reason: in 1942 Gohpur was in Darrang; it is now in Biswanath, which was carved from Sonitpur in 2015. "Sonitpur" is wrong for either date.
  - Source: https://en.wikipedia.org/wiki/Kanaklata_Barua
- Lesson "Ancient India II", Indo-Greeks row:
  - Before: "first gold coins in India"
  - After: "first coins attributable to named kings, and generally credited with the first gold coins (Kushanas — Vima Kadphises — first issued gold coins on a large scale)"
  - Reason: the old and new NCERT textbooks disagree on who issued the first gold coins.
  - Source: https://en.wikipedia.org/wiki/Kushan_coinage
- Lesson "Europeans, British Expansion…", English row:
  - Before: "first factory Surat (1613)"
  - After: "first factory Masulipatnam (1611); first permanent factory Surat (1613)"
  - Reason: factual precision.
  - Source: https://en.wikipedia.org/wiki/East_India_Company

### g03 Geography
- Lesson "Wetlands", Ramsar row:
  - Before: "About 100 (reported as 101 as of Aug 2026)"
  - After: "101 (as of Aug 2026): 100th = Jai Prakash Narayan Bird Sanctuary (Surha Tal, UP), June 2026; 101st = Glaw Lake (Arunachal's first), 3 Aug 2026; Tamil Nadu has the most (20)"
  - Reason: the count was confirmed, so it is now exact and dated.
  - Source: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2294036
- Lesson "Wetlands", biosphere-reserve row:
  - Before: "Cold Desert added Sept 2025"
  - After: "added 27 Sept 2025 (as of Sept 2026)"
  - Reason: time-sensitive fact, now dated.
  - Source: https://www.unesco.org/en/articles/5th-wcbr-designates-cold-desert-indias-13th-unesco-biosphere-reserve
- Lesson "India: location…", coastline row, and the matching trap:
  - Before: "re-measured 11,098.81 km (2024)"
  - After: "re-measured by NHO & Survey of India 2023–24; notified by the Ports & Shipping Ministry, 29 Apr 2025"
  - Reason: the figure was officially notified in 2025, not 2024.
  - Source: https://icsf.net/resources/revised-length-of-indias-coastline-dated-29th-april-2025/

### g04 Economy & Banking
- Lesson "Basic economics…", IIP row:
  - Before: "IIP base 2022-23 (May 2026)"
  - After: "(new series effective June 2026)"
  - Reason: May 2026 was only when the committee report and FAQs came out; the series started 1 June 2026.
  - Source: https://www.mospi.gov.in/uploads/latestReleases/latest_release_1779857844835_f8e09093-f2ef-4fb3-9890-6149d4162032_FAQ_for_new_IIP_series_with_base_year_2022-23.pdf
- Lesson "Basic economics…", WPI row:
  - Before: "WPI base 2011-12"
  - After: "new series with base 2022-23 released 15 June 2026 (old base 2011-12), with new Producer Price Indices"
  - Reason: the base year was outdated.
  - Source: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2272872
- Lesson inflation target, and g04-economy-banking-p05 explanation:
  - Before: no mention of the new period.
  - After: adds "retained for April 2026 – March 2031".
  - Reason: the government re-notified the target on 25 Mar 2026.
  - Source: https://visionias.in/current-affairs/news-today/2026-03-26/economy/union-government-notifies-the-inflation-target-for-2026-2031-under-flexible-inflation-targeting-fit-framework
- Lesson DICGC row, and g04-economy-banking-p28 note:
  - Before: "₹5 lakh (since Feb 2020)" with no status note.
  - After: adds "unchanged as of Sept 2026; ₹7.5 lakh only proposed".
  - Reason: time-sensitive fact.
  - Source: https://www.dicgc.org.in/guide-to-deposit-insurance
- Lesson "Fiscal policy…", GST 2.0 row:
  - Before: "Compensation cess ended except on tobacco products"
  - After: "Compensation cess ended (on tobacco/pan masala from 1 Feb 2026, replaced by additional excise duty and the Health & National Security Cess)"
  - Reason: the old text was outdated.
  - Source: https://www.newsonair.gov.in/govt-notifies-february-1st-as-date-from-which-additional-excise-duty-to-be-levied-on-tobacco-products/
- Lesson "Planning, NITI…", CEO row:
  - Before: "Anurag Jain (from 2026)"
  - After: "(from 18 Aug 2026, succeeding B.V.R. Subrahmanyam)"
  - Reason: precise date.
  - Source: https://www.business-standard.com/industry/news/anurag-jain-new-niti-aayog-ceo-succeeding-bvr-subrahmanyam-126081800565_1.html
- Lesson "International organisations…", BRICS:
  - Before: no mention of Saudi Arabia's status.
  - After: adds "Saudi Arabia invited in 2023 but has not formally confirmed membership (as of Sept 2026)".
  - Reason: official BRICS materials count Saudi Arabia as a member, but Riyadh has not accepted, so the status is ambiguous.
  - Source: https://en.wikipedia.org/wiki/Member_states_of_BRICS

### g05 General Science
- g05-general-science-p38, explanation:
  - Before: "Current guidelines: 30 compressions then 2 breaths…"
  - After: "Current guidelines (AHA 2025 / ERC 2025, as of September 2026): …"
  - Reason: time-sensitive guideline fact, now dated.
  - Source: https://cpr.heartandstroke.ca/resource/GuidelinesHighlightsEN2025

### g06 Computers, Environment & Misc
- Lesson "Awards, honours, books and authors", Jnanpith row:
  - Before: "Started 1965"
  - After: "1961 (first award 1965)"
  - Reason: the award was instituted in 1961; the old wording would mislead on a "when was it instituted" question.
  - Source: https://en.wikipedia.org/wiki/Jnanpith_Award
- Same lesson, Dadasaheb Phalke row:
  - Before: "Anant Nag (presented Sept 2026)"
  - After: "Anant Nag (presented 22 Sept 2026) (as of September 2026)"
  - Reason: confirmed, and dated.
  - Source: https://www.drishtiias.com/daily-updates/daily-news-analysis/anant-nag-selected-for-dadasaheb-phalke-award-2024
- Same lesson, International Booker row:
  - Change: adds "first Mandarin winner (as of September 2026)" to the 2026 *Taiwan Travelogue* entry.
  - Reason: confirmed, and dated.
  - Source: https://thebookerprizes.com/media-centre/press-releases/taiwan-travelogue-by-yang-shuang-zi-translated-by-lin-king-wins-the

### 2022 paper (ids 51–100)
- 2022-89, explanation and new `note`:
  - Before: "Ecomark (1991), issued by the Bureau of Indian Standards…"
  - After: "launched 1991 by the Environment Ministry; certification through BIS"
  - New `note`: the Ecomark Rules 2024 (notified 26 Sept 2024) replaced the 1991 scheme; CPCB now implements it with BIS.
  - The answer is unchanged.
  - Source: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2061878

## Doubtful, left unchanged
- **2022-63:** two statements are defensibly wrong ("non-enforceable", and "cannot be suspended in a national emergency"). It stays `disputed` with its existing note.
- **2022-73 (Hubble) and 2022-74 (Olympic flame):** kept at `likely` confidence; these are the standard GK-book answers.
- **g03 superlatives where sources vary:**
  - largest tiger reserve: Nagarjunsagar-Srisailam
  - highest waterfall: Kunchikal
  - highest Eastern Ghats peak: Jindhagada vs Mahendragiri
  - Kangto height
- **g04:**
  - CRR 3% / SLR 18%: no change found after the 2025 CRR cuts, but not stated explicitly in the Aug 2026 sources.
  - PNB as "first bank with purely Indian capital": the lesson already says "commonly cited".
- **g05:** "bee sting acidic, wasp sting alkaline" is standard textbook GK but weak science. No question depends on it.
