# Building and Installation Electrical Engineering, Rules and PWD Works Procedure

Interview bank for Junior Engineer (Electrical), PWD Meghalaya (MPSC), interview 12 Nov 2026.

## How to read this file

- **Source:** lines name the document and clause I checked. The short names are defined in "Sources used" at the end.
- **(unverified)** means I could not confirm the value in a primary or authoritative source. Say it as "generally" or "as per practice" in the interview, or leave it out.
- **Edition warnings. Know these before the interview:**
  - **CPWD General Specifications Part I (Internal):** a September 2023 edition exists and NITs cite it. I could only get the full text of the **2013** edition. Every "CPWD GS-I 2013" value below comes from that text and may have been revised in 2023. Where a 2023 change is likely (colour codes, minimum wire sizes), say "as per 2013 edition; the 2023 edition should be checked".
  - **NBC 2016 has been withdrawn.** Secondary sources and a BIS gazette notice listing (which I could not open) report that BIS withdrew SP 7:2016 (NBC 2016) on 30 April 2026. It was replaced by **SP 7:2026, "National Building Construction Standards 2026"**. If the board says "NBC", acknowledge both editions.
  - **CEA Safety Regulations 2023** were notified on 8 June 2023. They replaced the 2010 regulations, which had themselves replaced the Indian Electricity Rules 1956. A secondary source reports an Amendment Regulations 2026, gazetted 27 Mar 2026 and in force from 1 Apr 2027 (unverified; reported to deal mainly with battery storage).
  - **National Electrical Code:** the current edition is SP 30:2023, released by BIS on 6 Jan 2023.

---

## 1. Wiring systems and accessories

**Q1.1 Which wiring systems are used in PWD buildings today, and which are no longer permitted?**
A: Recessed (concealed) PVC or steel conduit wiring is used in new buildings, and surface conduit or PVC/aluminium channel wiring where recessing is not possible. Casing-capping, PVC batten, lead-sheathed, TRS and cleat wiring are marked "Deleted" in the CPWD life-of-installation table, so they are no longer used. Above a false ceiling, open wiring is never allowed; use recessed conduit or surface steel conduit. Expected life of conduit wiring is 20 years in non-coastal areas and 15 years in coastal areas.
Source: CPWD GS-I 2013 cl. 3.6(iii), Table 12 (life of installations).
Likely follow-up: "Why steel conduit above a false ceiling?" Mechanical protection and fire safety, and the conduit is earthed as part of the earth continuity path.

**Q1.2 What do FR, FRLS and HFFR cables mean, and where does the CEA make them compulsory?**
A: FR is flame retardant: the cable does not propagate a fire. FRLS is flame retardant, low smoke and low halogen: it gives less smoke and less corrosive gas during a fire. HFFR (or LSZH) is halogen-free flame retardant. CEA Regulation 38(3)(iv) makes FRLS power cables compulsory in buildings more than 15 m high. HFFR cables are compulsory in airports, hospitals and hotels whatever their height.
Source: CEA 2023 Reg. 38(3)(iv).
Likely follow-up: "What else does Reg. 38 require in tall buildings?" Floor distribution by bus-bar trunking, fire barriers at each floor in cable ducts, no other services in power-cable ducts, no meter in the staircase passage, and an emergency isolator at most 1.70 m above ground at the point of supply.

**Q1.3 What are the minimum wire sizes for light and power wiring in CPWD work?**
A: Only copper conductor cable is used for sub-main, circuit and point wiring. The minimum is 1.5 sq mm for light wiring and 4.0 sq mm for power wiring. A power circuit rated above 1 kW is sized by calculation. Insulation is PVC to BIS specification, and multi-stranded conductors are permitted.
Source: CPWD GS-I 2013 cl. 3.12.
Likely follow-up: "And for a split AC?" The CPWD clause covers it as "load above 1 kW, size by calculation". In practice a 1.5 TR split AC on a 16-20 A DP MCB is wired in 4 sq mm Cu (unverified practice figure). CPWD also recommends a double-pole MCB in an enclosure as the outlet for window ACs and geysers (cl. 3.14(a)(iii)).

**Q1.4 How many points and how much load can a lighting circuit carry, as per CPWD?**
A: A lighting circuit feeds light, fan and call-bell points. Each circuit may carry no more than 800 W of connected load or 10 points, whichever is less. With low-wattage CFL/LED points the number may be suitably increased. For design, a ceiling fan is taken as 60 W, a 6 A socket point as 100 W and a 16 A socket point as 1000 W, unless actual loads are known.
Source: CPWD GS-I 2013 cl. 3.9 and 3.10(i).

**Q1.5 How many outlets can a power circuit feed?**
A: In a non-residential building, a power circuit has only one outlet. In a residential building, a power circuit can feed not more than two 16 A outlets, or three 6 A outlets, or one 16 A plus two 6 A outlets. Any load above 1 kW is controlled by a suitably rated MCB, with the cable sized by calculation. 6 A sockets are wired in the power circuit, not the lighting circuit.
Source: CPWD GS-I 2013 cl. 3.5(iv), 3.10(ii)-(iv).

**Q1.6 What mounting heights do you check at site?**
A: Switch and regulator boxes: bottom at 1.25 m from floor. Sockets: 23 cm above floor in rooms and non-residential buildings, and 23 cm above the working platform in kitchens, away from stove and sink. Lamps: 2.4 m above floor unless directed otherwise. Fan blades: at (3H + W)/4, where H is room height and W is work-plane height, with at least 0.3 m between blades and ceiling. LT panel: operating handle of the highest unit at most 1.7 m, and overall board height at most 2.3 m.
Source: CPWD GS-I 2013 cl. 3.11(vi), 3.14(f)(iv), 3.15(a)(iii), 3.16(a)(iii)-(iv), LT panel clause (Ch. on switchboards).
Likely follow-up: "Fan size for a room?" CPWD gives fan capacity of about 55·D m³/min, where D is the longer room dimension in metres (cl. 3.16(a)(ii)).

**Q1.7 What are the rules for switches and sockets?**
A: A switch is always in the phase (live) conductor, never in the neutral. The neutral is never broken except by a linked switch that opens all poles together. Sockets must be 3-pin 6 A, 3-pin 16 A or 6-pin 16/6 A; 2-pin and 5-pin sockets are not permitted, and the third pin is earthed. Each socket is controlled by its own switch or MCB on the live side, and sockets above 1 kW are industrial type with plug top and MCB. No socket for portable appliances is allowed in a bathroom; fixed appliances get an MCB/isolator above 2 m and at least 1 m from the shower. In CPWD practice a modular switch is "ON" when the knob is down.
Source: CPWD GS-I 2013 cl. 3.5(iii), 3.11, 3.14(a)(i); CEA 2023 Reg. 17(ii) (no cut-out or switch in earthed neutral except a linked switch); Reg. 43(viii) proviso (all new sockets up to 250 V to be 3-pin with third pin earthed).

**Q1.8 What colour code is used for wiring?**
A: The CPWD 2013 specification uses Red/Yellow/Blue for the three phases, Red for single-phase live, Black for neutral and Yellow/Green for earth. The harmonised IEC scheme, now used by most manufacturers and newer specifications, is L1 Brown, L2 Black, L3 Grey, neutral Blue and protective earth Green-Yellow. Green-Yellow is reserved for earth in both schemes. On a solar plant, the CEA also requires the three AC phases and the DC positive and negative to be marked in different colours.
Source: CPWD GS-I 2013 cl. 3.5(v); IEC 60445 for the brown/black/grey/blue scheme (checked from secondary summaries only; whether IS 732 and the CPWD 2023 edition have adopted it: unverified); CEA 2023 Reg. 121(1)(vi).

**Q1.9 Explain MCB Types B, C and D. Where would you use each?**
A: The type gives the instantaneous (magnetic) trip band: Type B trips at 3-5 × In, Type C at 5-10 × In and Type D at 10-20 × In. Type B suits resistive loads and long cable runs, such as lighting and heaters. Type C suits general power, small motors, ACs and LED drivers with moderate inrush. Type D suits high-inrush loads such as transformers, welding sets and large motors. Standard ratings run 6, 10, 16, 20, 25, 32, 40, 50 and 63 A.
Source: IS/IEC 60898-1 (bands confirmed from manufacturer and standards-summary sources; the standard text itself was not opened).

**Q1.10 What is the difference between an RCCB, an RCBO and an ELCB, and where are the 30, 100 and 300 mA ratings used?**
A: An RCCB trips on residual (earth-leakage) current only and gives no overload protection, so it needs an MCB or fuse in series. An RCBO combines an RCCB and an MCB in one device. "ELCB" in older usage often meant the voltage-operated type, which CPWD says is not a preferred device. Preferred sensitivities are 10, 30, 100 and 300 mA (CPWD also lists 500 mA). 30 mA and below is "high sensitivity" and protects people against shock, so use it on socket and bathroom circuits and in all domestic installations. 100 mA and 300 mA are used upstream for discrimination and for protection against fire from leakage. An RCCB can trip anywhere between 50% and 100% of its rated residual current.
Source: CPWD GS-I 2013 cl. 8.7 and Appendix G (G.1.2, G.2.4); CEA 2023 Reg. 44. The "300 mA for fire protection" usage is practice (unverified).
Likely follow-up: "Is an RCD compulsory now?" Yes. CEA 2023 Reg. 44 says the use of electricity in an installation shall be controlled by an RCD, with residual operating current not exceeding 30 mA in domestic installations. The older regime required an ELCB only above a load threshold (5 kW under IE Rule 61A, from memory: unverified).

**Q1.11 What is an isolator? Can it be operated on load?**
A: An isolator is an off-load disconnecting device that gives a visible, safe break for maintenance. It is not designed to make or break load or fault current. It is always opened after the breaker. CEA requires isolators and their controlling circuit breakers to be interlocked so the isolator cannot be operated unless the breaker is open. Earth switches must also be interlocked so they cannot close unless the isolator is open.
Source: CEA 2023 Reg. 47(1)(i)-(ii).

**Q1.12 What are SPN and TPN distribution boards? Where is each used?**
A: An SPN (single pole and neutral) DB takes a single-phase incomer, usually a DP MCB or RCCB, and feeds single-pole MCB outgoings. It is used for flats, small offices and single-phase loads. A TPN (triple pole and neutral) DB takes a three-phase 4-wire incomer, such as a 4-pole MCB/RCCB or MCCB. It feeds either single-phase outgoings balanced across the three phases or three-phase outgoings, and is used for floors, labs and pump rooms. Every DB must have reasonable spare outgoing ways for future load. The DB earth connector is bonded to the upstream switchboard earth bar by a protective conductor.
Source: CPWD GS-I 2013 (MDB/DB spare-ways clause; cl. 8.4.3(iv)).

**Q1.13 How is point wiring measured and paid?**
A: Light, fan, exhaust-fan and call-bell points are measured on a unit basis by counting, with no linear measurement. They are classified Group A (Type I-III quarters and hostels), Group B (Type IV and above quarters, barracks) or Group C (all non-residential buildings). 6 A and 16 A socket-outlet wiring is measured on a linear basis from the tapping point to the socket. The socket, box and switch are paid separately. Circuit and sub-main wiring is measured linearly along the run of conduit. Extra length for diversions or slack is not paid.
Source: CPWD GS-I 2013 cl. 3.4.3-3.4.5 and the circuit/sub-main measurement clause.

---

## 2. Earthing and lightning protection

**Q2.1 What types of earth electrode are used, and what sizes does CPWD specify?**
A: CPWD allows pipe, plate and strip (or conductor) electrodes. Pipe: GI medium class, 40 mm dia, 4.5 m long without a joint, with its top at least 20 cm below ground. Plate: GI 60 × 60 cm × 6 mm or copper 60 × 60 cm × 3 mm, buried vertically with its top at least 3.0 m below ground. Strip: GI 100 sq mm or copper 40 sq mm section, at least 15 m long, in a trench at least 0.5 m deep. Chemical (maintenance-free) electrodes are widely used where soil resistivity is high or space is limited. They must still meet the required resistance.
Source: CPWD GS-I 2013 cl. 8.2.1, 8.2.1.2, 8.4.1.1, Table IX. IS 3043:2018 is the current earthing code; its treatment of chemical electrodes is (unverified).

**Q2.2 Where do you locate earth pits, and how far apart?**
A: An electrode should be at least 1.5 m from any building, placed so that excavation does not affect the foundation. It should be where the soil is likely to stay moist, and not under entrances, pavements or roads. Adjacent electrodes are at least 2 m apart. Plate and pipe electrodes have a 20 mm watering pipe with a funnel, in a masonry chamber of at least 30 × 30 × 30 cm with a lockable cover.
Source: CPWD GS-I 2013 cl. 8.3, 8.4.1.1(iii), 8.4.1.3.

**Q2.3 What earth resistance is acceptable?**
A: In CPWD internal-installation work, no earth electrode may exceed 5 Ω; in rocky soil up to 8 Ω is allowed. If this is not achieved, add electrodes, change the electrode type or treat the soil. For a lightning protection system, the whole system should not exceed 10 Ω. The earth continuity path from the electrode to any point in the installation should not exceed 1 Ω. Large substations and power stations are designed for much lower values, often below 1 Ω (unverified as a code figure).
Source: CPWD GS-I 2013 cl. 8.5, 9.5.6(ii), 16.4.

**Q2.4 What are the minimum sizes of earthing lead and protective (ECC) conductor?**
A: Earthing conductor (electrode to main earth bar): at least 4 mm dia (8 SWG) copper wire, 25 × 4 mm GI strip or 20 × 3 mm copper strip, of the same material as the electrode. Protective conductor in a circuit: same size as the phase conductor up to 16 sq mm; 16 sq mm for phase conductors above 16 and up to 35 sq mm; half the phase conductor above 35 sq mm. Every circuit and sub-main runs its own ECC. A three-phase circuit or sub-main gets two ECCs, and a switchboard carrying 3-phase switchgear gets two protective conductors.
Source: CPWD GS-I 2013 cl. 8.2.2, 8.2.3, 8.4.3; CEA 2023 Reg. 43(vii) (apparatus above 250 V earthed by two separate and distinct connections).

**Q2.5 Explain TN-S, TN-C-S and TT earthing systems.**
A: The first letter gives the source's relation to earth, the second gives how exposed metal parts are earthed. TN-S: source neutral earthed, and a separate protective earth conductor (PE) runs from the source to the consumer, so N and PE are separate throughout. TN-C-S: the supplier uses a combined PEN conductor, split into separate N and PE at the consumer's origin. TT: the source neutral is earthed at the substation, and the consumer has an independent local earth electrode. Fault current is then limited by two earth resistances, so an RCD is essential for automatic disconnection.
Source: IEC 60364 classification as used by IS 732 and IS 3043 (system definitions are standard; whether TT or TN predominates in Indian LV distribution: unverified, sources disagree). CEA 2023 Reg. 18(1) proviso requires a consumer above 250 V to provide an independent earth electrode interlinked with the supplier's earthed terminal.

**Q2.6 How do you test earth resistance with an earth megger?**
A: Use the fall-of-potential (three-electrode) method. Disconnect the electrode under test (A) from the system. Drive a current spike (C) at least 30 m away and a potential spike (P) midway, using 13 mm MS rods about 1 m deep. Pass current between A and C, measure the voltage between A and P, and read R = V/I directly on the earth tester. Move P a little either side. If three consecutive readings do not agree, increase the A-C distance up to 50 m and repeat. Test on a dry day in the dry season.
Source: CPWD GS-I 2013 cl. 16.5.1-16.5.6; CEA 2023 Reg. 50(8) (every earthing system above 650 V tested once a year on a dry day in the dry season, records kept) and Reg. 43(x) (supplier's earthing tested at least once a year).

**Q2.7 Which neutral and frame earthing rules apply to transformers and generators?**
A: The neutral point of every generator and transformer is earthed by not less than two separate and distinct connections to the earthing system. The frame of every generator, motor and transformer, and the metal of apparatus at 250-650 V, is earthed by two separate and distinct connections. Every building must have protective equipotential bonding of exposed and extraneous conductive parts.
Source: CEA 2023 Reg. 43(v), 43(vii), 43(xiii), 50(2)(i).

**Q2.8 What does lightning protection to IS/IEC 62305 involve?**
A: IS/IEC 62305 has four parts: general principles, risk assessment, physical damage and life hazard, and protection of electrical and electronic systems with SPDs. It defines four lightning protection levels (LPL I-IV). The external system is air terminations, down conductors, test joints and an earth termination network. The air termination is positioned by the rolling sphere, mesh or protective angle method. Rolling sphere radius is 20, 30, 45 and 60 m and mesh size 5 × 5, 10 × 10, 15 × 15 and 20 × 20 m for LPL I, II, III and IV.
Source: IS/IEC 62305 (adopted 2010). Sphere and mesh values agree across several secondary sources; I did not open the standard text.
Likely follow-up: "Down-conductor spacing?" Typically 10 m for LPL I and II, 15 m for III and 20 m for IV (unverified; secondary sources conflict). Note that CPWD GS-I 2013 still refers to the older IS 2309:1989 for lightning protection.

**Q2.9 What are the CPWD/CEA rules for lightning-protection earthing?**
A: Each down conductor has a test joint, and each earth station's resistance should not exceed 10 Ω multiplied by the number of electrodes in it. The whole system should not exceed 10 Ω. If it does, extend the electrodes or add a buried ring conductor. Gas pipes are never bonded to the lightning earth. For lightning arresters, the CEA requires the earthing lead to be as short and direct as possible. It must not pass through iron or steel pipe and goes to a separate vertical electrode or a junction of the substation earth mat.
Source: CPWD GS-I 2013 cl. 9.5.4(vi), 9.5.5, 9.5.6; CEA 2023 Reg. 77(2).

**Q2.10 What is the earth loop impedance condition for RCCB protection?**
A: The rated residual current of the RCCB (in A) multiplied by the earth loop impedance (in Ω) should not exceed 50. In other words, the touch voltage at the trip current must stay at or below 50 V. For example, a 30 mA RCCB tolerates up to about 1667 Ω, while a 300 mA RCCB tolerates about 167 Ω.
Source: CPWD GS-I 2013 Appendix G.1.1, quoting IS 732:1989.

---

## 3. Testing and commissioning

**Q3.1 Which tests must be done on a completed internal installation before it is commissioned?**
A: CPWD lists four tests: (1) insulation resistance, (2) polarity of switches, (3) earth continuity and (4) earth electrode resistance. They are done by the contractor in the presence of, and to the satisfaction of, the Engineer-in-Charge. All results are recorded and submitted to the department. The CEA adds earth fault loop impedance testing, to make sure the protective device operates automatically.
Source: CPWD GS-I 2013 cl. 16.1; CEA 2023 Reg. 43(ix)(c), 43(xi).

**Q3.2 At what voltage is insulation resistance tested, and what value is acceptable?**
A: Apply a DC voltage of not less than twice the working voltage, but it need not exceed 500 V for medium-voltage circuits. Test with all fuses in place, switches closed and lamps in. Test between all conductors and earth, and also between phase and neutral with lamps in position and switches off. The acceptable value is 12.5 MΩ divided by the number of outlets, but never below 1 MΩ. For a preliminary test before lamps are fitted, use 25 MΩ divided by the number of outlets, with a minimum of 2 MΩ. Separately disconnected appliances must show at least 1 MΩ between case and live parts.
Source: CPWD GS-I 2013 cl. 16.2.1-16.2.7. The extracted text says "12.5 mega ohms ... subject to a minimum of 1 mega ohm" and refers to "the formula". The "÷ number of outlets" part comes from IS 732:1989 as I recall it and is partly verified.
Likely follow-up: "What instrument?" A 500 V insulation tester (megger) for LV wiring; 1000 V and above for LT panels and cables, and 2.5-5 kV for HT equipment as per manufacturer or standard (test voltages above 500 V are practice: unverified).

**Q3.3 How do you do a polarity test?**
A: The aim is to confirm that every single-pole switch is in the phase conductor, never the neutral. Connect the installation to supply. Touch a test lamp, with one lead to earth, to the switch terminals. Full brilliance with the switch ON shows the switch is in the phase. In 3- and 4-wire installations, check that every non-linked single-pole switch is in a conductor marked as a phase.
Source: CPWD GS-I 2013 cl. 16.3.

**Q3.4 What is the earth continuity test?**
A: Test the whole earth continuity conductor, including metal conduits and cable sheaths, for continuity. Measure from the earth-electrode connection to any point in the installation. The resistance, including the earthing lead but excluding any added resistance or ELCB, must not exceed 1 Ω.
Source: CPWD GS-I 2013 cl. 16.4.

**Q3.5 What is earth fault loop impedance, and why measure it?**
A: It is the total impedance of the fault path: source winding, phase conductor up to the fault, protective conductor, and the return through earth or PEN to the source neutral. It must be low enough that, on an earth fault, the MCB, fuse or RCD disconnects before touch voltage becomes harmful. As a reference, IEC 60364-4-41 requires disconnection within 0.4 s for TN final circuits at 230 V and 0.2 s for TT. Distribution circuits allow 5 s (TN) or 1 s (TT).
Source: CEA 2023 Reg. 43(ix)(b), 43(xi), 43(xii) (requirement); IEC 60364-4-41 Table 41.1 (times confirmed from secondary sources only).

**Q3.6 Under CEA 2023, who inspects a new installation before supply: the Electrical Inspector or the owner?**
A: It depends on the "notified voltage" fixed by the Appropriate Government (here, Meghalaya). An installation at or below the notified voltage is inspected, tested and self-certified by the owner, supplier or consumer, and the report is sent to the Electrical Inspector in the Schedule II forms. If the Inspector does not acknowledge it within three working days, it is deemed received, and supply can then be given. An installation above the notified voltage must be inspected and approved in writing by the Electrical Inspector before supply. The owner may always choose inspection by the Electrical Inspector instead of self-certification.
Source: CEA 2023 Reg. 45(1)-(3) (new or after 6 months shutdown), Reg. 32 (periodic). Meghalaya's notified voltage could not be found (unverified). For comparison, J&K first notified 650 V and later 11 kV.
Likely follow-up: "Who can help with self-certification?" A Chartered Electrical Safety Engineer authorised by the State Government (Reg. 6). A CESE may also test the consumer's installation at or below the notified voltage on the owner's request (Reg. 33(1) proviso).

**Q3.7 How often must an installation be inspected periodically?**
A: The Appropriate Government fixes the periodicity, but it cannot exceed five years. Above the notified voltage the Electrical Inspector inspects; at or below it the owner self-certifies. If defects pointed out by the Inspector are not rectified in time, the installation can be disconnected after not less than 48 hours' notice. Where the Factories Act applies and connected load exceeds 250 kW, the Electrical Safety Officer must inspect at intervals of not more than one year.
Source: CEA 2023 Reg. 32(1)-(3), 32(7), 5(3).

**Q3.8 What does the supplier check before connecting a new consumer?**
A: Before new or additional supply, or before reconnection after six months' disconnection, the supplier tests the installation itself or accepts test results signed by the licensed electrical contractor. The supplier must check that there is no leakage of a magnitude detrimental to safety, by measuring insulation resistance per the relevant standard. If the installation is dangerous, the supplier serves notice and may refuse connection. Testing instruments must be calibrated by a Government-authorised or NABL-accredited laboratory.
Source: CEA 2023 Reg. 33(1)-(5), 35(1).

**Q3.9 Who may carry out wiring work for a consumer?**
A: Only an electrical contractor licensed by the State Government. The work is done under the direct supervision of a holder of a certificate of competency, by a person holding a permit (wireman licence). Work done in contravention cannot be energised. Small replacements of lamps, fans, fuses, switches and domestic appliances up to 250 V are exempt. For Central Government works, a contractor licensed by any State need not take another State's licence.
Source: CEA 2023 Reg. 31.

**Q3.10 What are the extra conditions for a multi-storey building above 15 m?**
A: The owner gives at least 30 days' written notice to the Electrical Inspector before applying for supply, and supply cannot start in that period without the Inspector's written approval. The building must have:
- an emergency isolator at the point of supply, at most 1.70 m above ground;
- FRLS cables;
- bus-bar trunking for floor distribution;
- fire barriers in ducts at each floor;
- lightning protection;
- wiring verification as per standards;
- no meter in the staircase passage.
Source: CEA 2023 Reg. 38(2)-(3).

**Q3.11 What tests are needed before charging HT equipment such as a transformer or VCB?**
A: No new apparatus, cable or line above 650 V can be commissioned without site tests as per the relevant standards. The same applies to equipment disconnected for six months or more. Manufacturer's type, acceptance and routine test certificates are produced if the Inspector asks. The CEA Schedule III test form for a transformer lists the following, with all results recorded:
- IR (HV-LV, HV-E, LV-E)
- oil BDV for top and bottom samples
- vector group, polarity, magnetic balance and tan delta tests
- OTI/WTI settings and their trip operation
- Buchholz and PRV operation
- body and neutral earth resistance
Source: CEA 2023 Reg. 48(1)-(3), Schedule III (transformer test form).

---

## 4. Load calculation and design

**Q4.1 What is the difference between connected load and maximum demand?**
A: Connected load is the sum of the ratings, in kW or kVA, of all apparatus connected that may be used simultaneously. Maximum demand is the highest average load actually drawn over a demand interval, typically 15 or 30 minutes (interval: unverified for MePDCL). MD is always less than or equal to connected load because not everything runs at full load together. In Meghalaya the tariff fixed charge is levied per kVA of load per month for most categories, and per kW for LT General Purpose.
Source: CEA 2023 Reg. 2(1)(n) (definition of connected load); MSERC Tariff Order FY 2026-27 (fixed charges per kVA/month; GP per kW/month).

**Q4.2 Define demand factor and diversity factor.**
A: Demand factor = maximum demand ÷ connected load. It is always 1 or less. Diversity factor = sum of individual maximum demands ÷ maximum demand of the whole group. It is always 1 or more, because the individual peaks happen at different times. A high diversity factor lets you choose a smaller transformer, cable and DG set than the simple sum of loads would suggest. Load factor = average load ÷ maximum demand over a period.
Source: standard definitions (no code reference needed).

**Q4.3 How do you size a cable?**
A: Use four checks:
1. Find the design current: I = P ÷ (√3 × V × pf) for three phase, or P ÷ (V × pf) for single phase.
2. Pick a size whose current rating, after derating for ambient or ground temperature, grouping and laying method, is at least the design current and the protective device rating.
3. Check the voltage drop over the run.
4. Check the short-circuit withstand for the fault level and the breaker clearing time.

CPWD's cable tables give ground-temperature rating factors of 0.95, 0.9, 0.85 and 0.8 at 20, 25, 30 and 35 °C.
Source: CPWD GS-I 2013 cable tables, Note 2 (rating factors). Method is standard practice.

**Q4.4 What voltage drop is allowed?**
A: IEC 60364-5-52 guidance allows 3% for lighting and 5% for other uses, from the origin of an installation fed from the public LV network to the equipment terminals. For a private LV source, the limits are 6% and 8%. Supply-side voltage limits come from the state's distribution standards; the older IE Rule 54 allowed ±6% at LV (unverified).
Source: IEC 60364-5-52 limits from a secondary source. Whether IS 732 adopts the same figures is (unverified). The IE Rule 54 figure is (unverified).
Likely follow-up: "Formula?" Three phase: VD = √3 × I × L × (R cos φ + X sin φ), with R and X in Ω/km from the manufacturer's table and L in km.

**Q4.5 Why improve power factor, and what PF does CPWD aim for?**
A: Low PF means more current for the same kW. That causes higher voltage drop, higher I²R losses, larger transformers and cables, and on kVAh tariffs a higher bill. CPWD requires consumers to maintain at least 0.95 lagging at the point of connection. Improving PF from 0.7 to 1.0 cuts load current by 30% and transformer losses by 51%. Leading PF is also harmful because it raises voltage and core losses. In Meghalaya, HT categories are billed in Rs per kVAh, so poor PF directly increases the energy bill.
Source: CPWD GS-I 2013 cl. 2.6; MSERC Tariff Order FY 2026-27 (HT energy charges in Rs/kVAh).

**Q4.6 How do you size a capacitor bank? Give an example.**
A: Use kVAR = kW × (tan φ1 − tan φ2). Example: a 100 kW load at 0.70 pf, improved to 0.95. tan φ1 = 1.020 and tan φ2 = 0.329, so kVAR = 100 × 0.691 = 69 kVAR. You would choose about 75 kVAR in APFC steps. CPWD gives a multiplying-factor table built the same way (0.70 to 0.95 gives 0.691).
Source: CPWD GS-I 2013 PF table ("Required kVAR = kW × multiplying factor"); arithmetic checked.
Likely follow-up: "Where do you connect it?" Close to the inductive load (motor terminals) for best loss reduction, or an APFC panel on the main LT bus for a building. The CEA requires automatic or manual discharge of every condenser (Reg. 53).

**Q4.7 What illumination levels would you design for in a government office?**
A: As per IS 3646 and NBC: general offices 300-500-750 lux (design around 300-500), conference rooms and executive offices 300-500-750 lux, corridors and stairs about 50-150 lux. Classrooms are commonly designed at 300 lux. Escape routes need at least 10 lux of emergency lighting during a power failure.
Source: CPWD GS-I 2013 Table 11 (IS 3646 Part 2 values; office 300-500-750 agrees with NBC 2005 values quoted in the GRIHA manual). Classroom and corridor values, and the 10 lux escape-route figure, are from secondary NBC 2016 summaries (unverified). Check the SP 7:2026 values.

**Q4.8 Explain the lumen method with an example.**
A: N = (E × A) ÷ (Φ × UF × MF). E is required lux, A is area in m², Φ is lumens per luminaire, UF is utilisation factor and MF is maintenance factor. Example: a 6 m × 5 m office (30 m²) at 300 lux, with LED panels of 3600 lm, UF 0.6 and MF 0.8. N = (300 × 30) ÷ (3600 × 0.6 × 0.8) = 9000 ÷ 1728 = 5.2, so provide 6 panels in a 3 × 2 grid.
Source: standard method; UF and MF are typical assumed values.

**Q4.9 What is LED efficacy, and why has LED replaced CFL and tube lights?**
A: Efficacy is lumens per watt. Typical LED luminaires today give about 100-150 lm/W, against roughly 50-60 for CFL (typical values: unverified). Per the Ministry of Power, a 7 W LED bulb gives the same light as a 14 W CFL, and an LED bulb uses about 1 unit to run for the period quoted in the PIB note. LEDs also last longer, contain no mercury and dim easily. CPWD GS-I 2013 already noted that LEDs need good drivers, surge protection and heat sinking.
Source: PIB, "UJALA: 10 Years of Energy-Efficient Lighting", 6 Jan 2025 (7 W LED equals 14 W CFL); CPWD GS-I 2013 cl. 2.13.4.

**Q4.10 Worked example: estimate the load of a small single-storey government office (about 300 m²).**

Connected load (CPWD design ratings where they exist):

| Item | Qty × rating | Connected load (kW) | Demand factor (assumed) | Demand (kW) |
|---|---|---|---|---|
| LED panels | 40 × 36 W | 1.44 | 0.9 | 1.30 |
| Ceiling fans | 20 × 60 W | 1.20 | 0.9 | 1.08 |
| 6 A sockets | 30 × 100 W | 3.00 | 0.5 | 1.50 |
| 16 A power sockets | 10 × 1000 W | 10.00 | 0.3 | 3.00 |
| 1.5 TR split ACs | 8 × 1.6 kW (input, assumed) | 12.80 | 0.8 | 10.24 |
| Water pump | 1 × 2.2 kW (3 HP) | 2.20 | 1.0 | 2.20 |
| Compound/outdoor lights | | 1.00 | 1.0 | 1.00 |
| **Total** | | **31.64** | | **20.32** |

Steps:
- Overall demand factor = 20.32 ÷ 31.64 ≈ 0.64.
- At 0.9 pf, MD ≈ 22.6 kVA. Adding about 20% for future growth gives about 27 kVA.
- Three-phase current = 27,000 ÷ (√3 × 415) ≈ 38 A. Choose a 63 A 4-pole MCCB or MCB incomer with a 100 mA or 300 mA RCCB, a TPN DB and a three-phase LT connection, balancing single-phase circuits across R, Y and B.
- Under the 2006 Meghalaya Supply Code, more than 5 kW up to 50 kW is LT three-phase (400 V), and above 50 kW is HT at 11 kV and above. Check the current code (2018/2026) for the threshold.
- Standby DG for essential loads (lights, fans, 6 A sockets, pump, outdoor; ACs excluded): about 7.1 kW ÷ 0.8 ≈ 9 kVA. Choose 15 kVA to allow for pump starting.

Source: CPWD GS-I 2013 cl. 3.9 (fan 60 W, 6 A point 100 W, 16 A point 1000 W); Meghalaya Electricity Supply Code 2006 cl. 3. The demand factors and AC input rating are design assumptions, not code values. Say so in the interview.

**Q4.11 How do you size the transformer for a campus?**
A: Add up the maximum demands of buildings and external loads (street lights, pumps), apply diversity, convert to kVA at the expected pf, and add growth margin. Then pick the next standard rating so the transformer runs at about 60-80% load. Example: 400 kW MD at 0.9 pf is 444 kVA; at 80% loading that needs 555 kVA, so choose 630 kVA. Its LV full-load current = 630,000 ÷ (√3 × 433) ≈ 840 A, so use a 1000 A ACB or MCCB incomer.
Source: method is standard. The 60-80% loading target is (unverified practice). The 630 kVA rating is one of the common IS 1180 ratings; the full list of standard ratings is (unverified).

---

## 5. HT side: substations, transformers and switchgear

**Q5.1 Describe a typical 11 kV/433 V substation for a government campus.**
A: The 11 kV incoming line or cable comes to an RMU or VCB panel with the HT metering cubicle (CT/PT and TVM meter, the supplier's apparatus). From there it goes to the transformer through an HT cable with terminations, and on to an LT panel with an ACB or MCCB incomer, bus bars, outgoing MCCBs and an APFC panel. Then come the earthing system (neutral and body earth pits), lightning arresters and the fire extinguishers and sand buckets. The CEA requires a separate building or locked weatherproof, fireproof enclosure for the supplier's apparatus and metering, with access at all times. All live parts must be inaccessible except to designated persons.
Source: CEA 2023 Reg. 46(1)(a)-(b), 29(1).

**Q5.2 Oil-filled or dry-type transformer: when do you use each?**
A: Oil-filled (ONAN) transformers are cheaper, have better overload capacity and suit outdoor and plinth or pole substations. Dry-type (cast resin) transformers have no oil fire risk. The CEA says only dry-type transformers shall be used inside residential and commercial buildings. Oil-filled transformers installed indoors in other buildings go on the ground floor or not below the first basement. Equipment with more than 2000 litres of oil may not go in a basement without proper oil draining. Above 2000 litres, fire walls and a soak pit are needed, and above 9000 litres in one tank, oil drainage arrangements are required.
Source: CEA 2023 Reg. 46(2)(vi), (vii), (xi), (xii).

**Q5.3 What does Dyn11 mean, and why is it used for distribution transformers?**
A: D means the HV winding is delta, y means the LV winding is star, and n means the LV neutral is brought out. 11 means the LV voltage phasor is at 11 o'clock, i.e., it leads HV by 30°. Delta on HV traps triplen harmonics and gives a balanced HV load. The star with neutral on LV gives a 433/250 V 3-phase 4-wire supply and a point to earth. Dyn11 is the standard group in utility and CPWD specifications for 11/0.433 kV units.
Source: utility technical specification (WBSEDCL) for IS 1180 transformers; IS 1180 (Part 1):2014 covers oil-immersed distribution transformers up to 2500 kVA and 33 kV. I did not open the IS 1180 text for the vector-group clause.
Likely follow-up: "Conditions for paralleling transformers?" Same voltage ratio, same vector group and phase sequence, similar percentage impedance, and compatible kVA ratio (standard theory). The CEA requires that, when transformers operate in parallel, tripping a primary breaker also trips the secondary breaker of that transformer (Reg. 47(1)(iv)).

**Q5.4 What switchgear must be provided on the primary and secondary of a transformer?**
A: Primary: a linked switch with fuse, or a gang-operated AB switch with fuse, or a circuit breaker. For transformers of 1000 kVA and above, a circuit breaker is compulsory. Secondary: a circuit breaker of adequate rating, except that a supplier's transformer below 1000 kVA may use a linked switch with fuse. For a consumer at the point of supply, the main control below 11 kV is a switch-fuse unit or circuit breaker, and at 11 kV and above a circuit breaker.
Source: CEA 2023 Reg. 37(2), 37(3)(i)-(ii).

**Q5.5 What is a VCB, and why has it replaced the OCB?**
A: In a vacuum circuit breaker, the contacts separate inside a sealed vacuum interrupter. The arc is quenched at the first current zero because there is no medium to sustain ionisation. VCBs are compact, need little maintenance and carry no oil fire risk, so they are standard for 11 and 33 kV indoor panels. They are used with numerical relays for overcurrent and earth fault protection, through CTs.
Source: standard theory. Protection duty from CEA 2023 Reg. 47(2)(i)-(ii).

**Q5.6 What is an RMU, and where is it used?**
A: A Ring Main Unit is a compact, sealed (usually SF6-insulated) 11 kV switchgear unit. It typically has two load-break switches for the ring incomer and outgoer and one breaker or fuse-switch for the transformer feeder. It lets a cable ring be sectionalised so a faulted section can be isolated and supply restored from the other side. It is used in campuses and urban underground distribution.
Source: standard practice. The CEA requires supply lines to be sectionalised to limit the area affected by a failure (Reg. 41(1)).

**Q5.7 ACB or MCCB: what are they, and where are they used?**
A: An ACB (air circuit breaker) is used as the main LT incomer and bus coupler, typically from about 630 A to 6300 A. It is draw-out, with adjustable microprocessor releases and high short-time ratings. An MCCB (moulded-case circuit breaker) covers about 16 A to 1600 A and is used for outgoing feeders and smaller incomers. MCBs (up to 63 or 125 A) are for final circuits. LT panels are CRCA sheet of at least 2.0 mm for load-bearing members and 1.6 mm for doors, compartmentalised, with separate incomer and bus-section panels.
Source: CPWD GS-I 2013 LT panel clause (sheet thickness, compartmentalisation). The ACB/MCCB current ranges are (unverified; typical manufacturer ranges).

**Q5.8 What are CTs and PTs, and why must a CT secondary never be left open?**
A: A CT steps current down (e.g., 100/5 A) and a PT steps voltage down (e.g., 11 kV/110 V) for metering and protection. A CT secondary is a current source. If it is opened while primary current flows, there is no opposing ampere-turns, so the core saturates and a dangerously high voltage appears across the open terminals. This can kill and can damage the insulation. Always short the CT secondary before removing a meter or relay.
Source: standard theory.

**Q5.9 What protections are compulsory on a transformer, and what do the Buchholz relay, OTI and WTI do?**
A: For transformers of 1000 kVA and above, the CEA makes a Buchholz relay, a pressure relief device, and winding and oil temperature protection with alarm and trip contacts compulsory. Transformers of 10 MVA and above also need differential protection.
- The Buchholz relay sits in the pipe between the tank and conservator. Its upper float gives an alarm on slow gas build-up from an incipient fault; its lower flap trips on a sudden oil surge from a major internal fault.
- The OTI measures top-oil temperature.
- The WTI simulates hot-spot winding temperature using a CT-fed heater.
Both give alarm and trip.
Source: CEA 2023 Reg. 47(2)(iii)-(iv); Schedule III transformer test form (OTI/WTI settings, Buchholz and PRV operation).

**Q5.10 What tests are done on transformer oil?**
A: Breakdown voltage (BDV): a 2.5 mm gap test cell, as per IS 6792 (identical to IEC 60156). Also water content (ppm), acidity (neutralisation value), resistivity, tan delta, interfacial tension, flash point, sludge, and dissolved gas analysis (DGA) to diagnose internal faults. The CEA transformer test form asks for BDV of top and bottom samples.
Source: CEA 2023 Schedule III; IS 6792:2023 (BDV method; from BIS summary). Numeric BDV acceptance limits are (unverified): commonly quoted figures are at least 30 kV for new oil as received and at least 60 kV after filtration (IS 335), with lower limits for in-service oil (IS 1866). Sources conflict, so quote only if asked and say "as per IS 335 and IS 1866".

**Q5.11 What are the HT and LT consumer categories in Meghalaya (MSERC tariff)?**
A: The MSERC tariff order for FY 2026-27 (26 Mar 2026) has three groups. Energy is billed in kWh on LT and in kVAh on HT/EHT.
- **LT:** Domestic (including BPL/Kutir Jyoti), Commercial, LT Industrial, Public Lighting, Public Water Supply, General Purpose (Government connections not in any other public category), Agriculture and Crematorium.
- **HT:** Domestic HT, General Purpose/Bulk Supply, Commercial HT, Industrial HT, Ferro Alloys and Public Water Supply HT, plus EV charging.
- **EHT:** Industrial, Ferro Alloys and EV.

Examples for FY 2026-27:
- LT General Purpose: Rs 180/kW/month plus Rs 7.35/kWh.
- HT General Purpose/Bulk Supply: Rs 420/kVA/month plus Rs 6.10/kVAh.
- HT Industrial: ToD tariff, +20% in the peak (17:00-23:00) and −15% off-peak (23:00-06:00).
- Average cost of supply in the FY 2025-26 order: Rs 8.48/unit.

Source: MSERC Order, Case No. 11 of 2025, Table 46 and Schedule of Approved Tariffs (cl. 9.1.6, 9.2.2, 9.2.4). The Rs 8.48 figure is from secondary reporting of the FY 2025-26 order.
Likely follow-up: "Which category does a PWD office building fall in?" LT General Purpose if supplied at LT. The order says schools, colleges and hospitals run by Government on a non-profit basis are billed under Domestic. Large campuses on 11 kV fall in HT General Purpose/Bulk Supply.

**Q5.12 What clearances must be kept around switchboards?**
A: For installations above 250 V, keep at least 1 m clear space in front of a switchboard. If there are bare connections at the back, the space behind must be either less than 20 cm or more than 75 cm. If more than 75 cm, there must be a passage from either end clear to 1.8 m height. Insulating mats must be provided in front and rear of panels where operation or maintenance is done, and panels are labelled front and back.
Source: CEA 2023 Reg. 39(iii), 21(5)-(6).

---

## 6. DG sets and UPS

**Q6.1 How do you size a DG set?**
A: List the essential loads (fire pumps, lifts, water pumps, emergency and exit lights, critical AC, data or UPS loads), apply diversity, and convert kW to kVA at 0.8 pf (DG ratings are at 0.8 pf). Check that the largest motor can start. Starting kVA under DOL is about 6-8 times running, so a star-delta or soft starter may let you avoid oversizing. Add margin for growth, and avoid running the set at very light load (wet stacking). CPWD lists lifts, pumps, fire fighting, exit and staircase lights and critical AC as essential loads.
Source: CPWD GS-I 2013 cl. 2.5 (essential loads). The 0.8 pf rating and DOL starting multiple are standard practice (unverified figures).

**Q6.2 What is an AMF panel?**
A: An Automatic Mains Failure panel senses mains failure (no voltage, under-voltage or single phasing) and starts the DG automatically. Once voltage and frequency are stable, it transfers the load through an interlocked changeover (contactor or ACB pair). When mains returns and stays healthy for a set time, it transfers back and runs the DG on no-load to cool before stopping. The CEA requires breakers or switches of two supplies not meant to run in parallel to be interlocked against paralleling or backfeed.
Source: CEA 2023 Reg. 47(1)(iii).

**Q6.3 What changeover arrangements are used, and what is the safety point?**
A: Options are a manual changeover switch (on-load, 4-pole), an ATS (automatic transfer switch) or interlocked ACBs. The changeover must switch the neutral, i.e., 4-pole in TN systems, unless the system design calls for something else (practice: unverified). The point is that the DG must never backfeed into the utility network, because a lineman working on a "dead" line could be electrocuted.
Source: CEA 2023 Reg. 47(1)(iii); 4-pole neutral switching is practice (unverified).

**Q6.4 What conditions must be met before synchronising two DG sets or a DG with the grid?**
A: The incoming machine must match the bus in voltage magnitude, frequency (slightly higher), phase sequence and phase angle. Check with a synchroscope or auto-synchroniser. Load is then shared through governor control (kW) and AVR/excitation control (kVAR). Where generators run in parallel with neutral switching, the CEA requires an interlock so the generator breaker cannot close unless one neutral is earthed.
Source: CEA 2023 Reg. 47(1)(vi). Synchronising conditions are standard theory.

**Q6.5 What are the CPCB noise norms for DG sets?**
A: For new DG sets up to 1000 kVA, the maximum sound pressure level is 75 dB(A) at 1 m from the enclosure surface. The acoustic enclosure or room treatment must give at least 25 dB(A) insertion loss, or meet ambient standards, whichever is higher. The exhaust muffler must also give at least 25 dB(A) insertion loss. Manufacturers must offer the standard 25 dB(A) enclosure and muffler.
Source: Environment (Protection) Rules noise limits for DG sets (CPCB/MoEF text reproduced in Puducherry PPCC and CPCB documents). The effective date of the 75 dB(A) limit is quoted as 1 July 2003 in one source and 1 Jan 2005 in another (unverified which).

**Q6.6 What are the current CPCB emission norms for DG sets?**
A: New gensets up to 800 kW must meet the emission limits notified by GSR 804(E) of 3 Nov 2022 (Environment (Protection) Third Amendment Rules, 2022), effective 1 July 2023. These are popularly called "CPCB IV+". They are enforced at manufacturing stage through type approval and conformity of production (ARAI testing). In practice, PWD should specify CPCB IV+ compliant sets and check the type-approval certificate.
Source: ARAI document reproducing the rule; Environment (Protection) Third Amendment Rules, 2022. Exhaust stack height formula H = h + 0.2√kVA is (unverified).

**Q6.7 How is a DG set earthed?**
A: The neutral is earthed by not less than two separate and distinct connections, and the frame by two separate connections. In practice that means four earth pits for an LT DG: two neutral and two body. The CEA commissioning form records body earth resistance, neutral earth resistances N1 and N2, and earth flat size and material. Generators of 100 kVA and above need earth-fault or leakage protection. Generators of 1000 kVA and above need restricted earth fault or differential protection.
Source: CEA 2023 Reg. 43(vii), 43(xiii), 47(2)(v)-(vi), Schedule III (DG form). "Four pits" is practice (unverified as a code figure).

**Q6.8 What should a JE check at DG commissioning?**
A: Check the foundation and anti-vibration mounts, the acoustic enclosure, the exhaust routing and stack, and that the fuel tank and day tank meet fire norms. Check the earth pits and their resistance, and the interlock with mains. Test the AMF operation, load test (typically 4-8 hours: unverified), protections (low lube oil pressure, high water temperature, overspeed, over/under voltage, earth fault) and the battery and charger. Check the CPCB IV+ type approval and the noise test.
Source: CEA 2023 Schedule III (DG form: interlocking, earth resistance, protection details); the remaining items are practice.

**Q6.9 Online, offline or line-interactive UPS: which do you choose, and how is it sized?**
A: An online (double-conversion) UPS powers the load continuously through rectifier and inverter, with zero transfer time and clean output. It is used for servers, labs and hospitals. An offline (standby) UPS switches to the inverter on failure after a few milliseconds and is used for desktop PCs. Line-interactive sits in between, with an autotransformer for voltage regulation. Size the UPS at load kW ÷ output pf, plus about 20-25% margin. Size the battery Ah for the required backup minutes at the inverter DC voltage. CPWD notes that UPS circuits need separate wiring and dedicated earthing for computers.
Source: CPWD GS-I 2013 cl. 2.5 (no-break supply requirement; dedicated earthing for computer installations, cl. 8.1). The sizing margin is (unverified practice).

---

## 7. Lifts, fire alarm systems and pumps

**Q7.1 Which codes govern lifts in buildings?**
A: The NBC Part 8 Section 5 (Lifts and Escalators), now carried into SP 7:2026, and IS 14665 (electric traction lifts). Many states also have Lift Acts and rules administered by the Electrical Inspectorate (Meghalaya's Lift Act or rules: unverified). The CEA requires lifts on the essential (DG-backed) supply in multi-storey buildings, and CPWD lists lifts as essential load.
Source: CPWD GS-I 2013 cl. 2.5; NBC/SP 7 Part 8 Section 5 (section number from NBC 2016 structure). IS 14665 part numbers are (unverified).

**Q7.2 Name the main safety devices in a lift.**
A:
- Door interlocks: the car cannot move unless the landing and car doors are closed and locked, and landing doors cannot open unless the car is at that floor.
- Overspeed governor working with safety gear, which grips the guide rails if the car overspeeds.
- Buffers in the pit.
- Upper and lower final limit switches.
- Car emergency alarm, intercom and emergency light.
- Automatic Rescue Device (ARD), which brings the car to the nearest floor and opens the doors on power failure.
- Fireman's switch, which brings the lift to the ground floor for fire-service use.
- Overload sensing, phase-reversal and phase-failure relays.
Source: standard lift safety practice per IS 14665/NBC (device list is general knowledge; clause numbers not verified).

**Q7.3 What electrical arrangements does a lift need?**
A: A dedicated feeder from the main LT panel, and the essential/DG bus where applicable, with its own isolator in the machine room. Separate lighting and socket circuits for the machine room, well and pit. Earthing of the machine, controller, guide rails and car frame. An emergency supply for the ARD, car light and alarm. Cables in the lift well must be FRLS in tall buildings.
Source: CEA 2023 Reg. 38(3)(iv) (FRLS in buildings above 15 m); the other items are practice.

**Q7.4 What is IS 2189, and what does a fire detection and alarm system consist of?**
A: IS 2189 is the code of practice for selection, installation and maintenance of automatic fire detection and alarm systems (2008 edition; a newer edition is referred to in 2026 sources: unverified). A system has the following parts:
- Control and indicating panel: conventional zone or addressable.
- Detectors: smoke (optical/ionisation), heat (fixed temperature or rate-of-rise), multi-sensor, beam and aspirating.
- Manual call points.
- Hooters and sounders, with strobes where needed.
- Response indicators.
- Interface modules: AHU trip, lift homing, door release, PA.
- Fire-survival cabling.
- Mains plus battery backup.
Source: IS 2189 scope (BIS listing).
Likely follow-up: "MCP height and spacing?" Commonly 1.4 m above floor to the centre, with no one travelling more than 30 m to reach one (both from secondary summaries of IS 2189: unverified). Smoke-detector coverage figures in secondary sources conflict (unverified).

**Q7.5 Smoke detector or heat detector: where do you use each?**
A: Smoke detectors give earlier warning and are used in offices, corridors, electrical and server rooms and hostels. Heat detectors are used where smoke, dust or steam would cause false alarms: kitchens, DG rooms, parking and boiler rooms. Avoid putting smoke detectors near AC supply diffusers or in dusty areas.
Source: general practice consistent with IS 2189 selection guidance (not clause-verified).

**Q7.6 DOL or star-delta: which starter, and up to what motor size?**
A: A DOL starter connects the motor straight to the line, so starting current is about 6-8 times full-load current. It is used for small motors, typically up to about 5 HP (3.7 kW) and sometimes 7.5 HP, depending on the supply authority. A star-delta starter starts the motor in star (1/√3 of line voltage per winding), cutting starting current and torque to about one-third of DOL, then switches to delta. It needs a 6-terminal motor and is used for medium motors above that range. Larger motors or soft-start duty use soft starters or VFDs. Every motor must have a linked switch or breaker adjacent to it that cuts off all supply.
Source: CEA 2023 Reg. 37(5) (control of motors). The kW/HP limits are (unverified): utility- and state-specific, with no CEA clause found.
Likely follow-up: "Protections in a pump starter?" Overload relay, single-phasing preventer, dry-run (low-water) protection, under/over-voltage, and earth leakage.

**Q7.7 What is special about submersible pump installations?**
A: The motor is water-cooled and runs submerged, so it needs a minimum flow past the motor and must never run dry. Use a flat 3-core (or 4-core) PVC drop cable sized for voltage drop over the long run, with a properly made and tested water-tight joint. Use a control panel with a starter, overload relay, single-phasing preventer, dry-run protection and a capacitor for single-phase motors. Earth the motor and panel, and keep a non-return valve. Measure IR of motor and cable before lowering into the bore.
Source: practice; IS 8034 (submersible pumpsets) by title only (clauses not verified).

**Q7.8 How do you select a pump motor?**
A: Pump power (kW) = (ρ × g × Q × H) ÷ (1000 × η). Q is flow in m³/s, H is total head in m (static plus friction plus residual), and η is pump efficiency. Motor kW = pump kW ÷ motor efficiency, rounded up to the next standard rating with a service margin of about 10-20%. Example: 5 l/s (0.005 m³/s) at 30 m head with 60% pump efficiency gives 1000 × 9.81 × 0.005 × 30 ÷ 0.6 ≈ 2.45 kW, so choose a 3 kW (4 HP) motor.
Source: standard formula; the margin is practice (unverified). CPWD's energy-efficiency chapter says motor HP ratings shall not exceed 20% above the calculated maximum load (CPWD GS-I 2013, energy clause).

**Q7.9 Which fire-fighting pumps are on the electrical side?**
A: A typical set is a main electric fire pump, a jockey pump to maintain pressure, and a diesel-engine standby pump. The electric fire pump is fed from a dedicated, separately protected circuit off the incoming side of the main switch, so it stays live when building loads are tripped. It is also on the DG bus. Fire-pump circuit breakers should not trip on overload (alarm only) (practice: unverified clause).
Source: CPWD GS-I 2013 cl. 2.5 (fire fighting as essential load); the remainder is practice.

---

## 8. Solar and energy efficiency

**Q8.1 What are the components of a grid-connected rooftop solar system?**
A: PV modules on a mounting structure, and DC cables (UV-protected) to a DC combiner or DCDB with fuses, isolator and SPD. Then a grid-tie inverter with anti-islanding, an ACDB with MCB/RCCB, SPD and manual isolator, and a bidirectional net meter (plus a solar generation meter where required). Earthing and lightning protection complete the system. The CEA's solar rules require the following:
- a 75 cm pathway with handrails for rooftop access;
- the inverter near the array at the building periphery;
- a manual grid-isolation switch outside the AC combiner box;
- protection for overload, surge, short circuit, over/under voltage and frequency, reverse polarity and lightning;
- SPDs in combiner boxes;
- earth-fault and insulation monitoring;
- welded (not bolted) earth-strip joints.
Source: CEA 2023 Reg. 121(1)-(3).

**Q8.2 Net metering or gross metering: what is the difference?**
A: With net metering, the solar output first supplies the building's own load and only the surplus is exported. A bidirectional meter records import and export, and the consumer is billed for the net, with surplus credited as per regulations. With gross metering, the entire solar generation is exported to the DISCOM at a fixed feed-in tariff, and the consumer's consumption is billed separately at the normal tariff. Net metering suits self-consumption, as in government buildings. Gross metering suits investor-owned rooftop plants.
Source: definitions are standard. In Meghalaya, the 2015 MSERC Rooftop Solar (Net Metering) Regulations (amended 2025) have been followed by the MSERC Grid-Interactive Distributed Renewable Energy Sources Regulations, 2026 (notified per secondary reporting, May 2026). The draft proposed DRES up to 10 MW with gross metering up to 10 MW. Final capacity limits are (unverified).

**Q8.3 How do you size a rooftop plant (kWp)?**
A: kWp = daily energy to be offset ÷ specific yield (kWh/kWp/day). In India the specific yield is roughly 4 kWh/kWp/day: MNRE's planning assumption of about 1.5 million units per MW per year works out to about 4.1. A modelled estimate for Shillong gives roughly 4-5.8 kWh/kWp/day by season. Example: an office using 40 kWh/day needs 40 ÷ 4 = 10 kWp. Shadow-free roof area of roughly 10 m² per kWp is needed (unverified rule of thumb).
Source: MNRE assumption quoted in a Lok Sabha answer (partly seen in a search snippet); Profilesolar modelled data (NASA POWER) for Shillong. A Meghalaya-specific official yield figure was not found (unverified). Monsoon cloud cover in Meghalaya pulls the annual average down.

**Q8.4 What is PM Surya Ghar: Muft Bijli Yojana?**
A: A central scheme to install rooftop solar on 1 crore households. Each household gets up to 300 units of free electricity per month, with a total outlay of Rs 75,021 crore. It was launched on 13 Feb 2024 and approved by the Cabinet on 29 Feb 2024. Central Financial Assistance (CFA) is 60% of the system cost up to 2 kW and 40% of the additional cost for 2-3 kW, capped at 3 kW.
- **General states:** Rs 30,000/kW for the first 2 kW and Rs 18,000 for the 3rd kW, so 1 kW gets Rs 30,000, 2 kW gets Rs 60,000, and 3 kW or more gets Rs 78,000.
- **Special category states, including the North East and Meghalaya:** Rs 33,000/kW for the first 2 kW and Rs 19,800 for the 3rd kW, a maximum of Rs 85,800.

Applications are made on the national portal pmsuryaghar.gov.in.
Source: PM India release on Cabinet approval; Rajya Sabha replies (Feb/Mar 2025) via search snippets; special-category rates per parliamentary reply. Check current MNRE guidelines before quoting the special-category figures.

**Q8.5 What is ECBC 2017, and when does it apply?**
A: The Energy Conservation Building Code 2017, issued by BEE under the Energy Conservation Act 2001, sets minimum energy performance for the building envelope, HVAC, lighting and electrical systems. It applies to commercial buildings with connected load of 100 kW or more, or contract demand of 120 kVA or more. It has three tiers: ECBC, ECBC+ and Super ECBC. It becomes binding in a state only when the state notifies its own rules, and Meghalaya's notification status is (unverified). The Energy Conservation (Amendment) Act 2022 moves ECBC towards an "Energy Conservation and Sustainable Building Code". BEE has issued ECSBC 2024. A June 2026 Ministry of Power draft links ECSBC, ECSBC+ and Super ECSBC to 3, 4 and 5 star building ratings.
Source: ADB summary of ECBC 2017 (applicability), BEE ECSBC 2024 documents, Ministry of Power draft notification (June 2026). The CPWD GS-I 2013 energy chapter used ECBC 2007 (e.g., office lighting power density 10.8 W/m²).

**Q8.6 What are BEE star labels, and which items does a PWD JE meet them on?**
A: Under BEE's Standards and Labelling programme, appliances carry 1-5 star labels; more stars means more efficient. A JE specifies star-rated ACs, ceiling fans, LED lamps, pumps, geysers and distribution transformers. IS 1180 (Part 1) Amendment 4 defines five energy efficiency levels for distribution transformers, corresponding to 1-5 star as prescribed by BEE. Specify the label level in the tender and check the label and BEE registration at delivery.
Source: IS 1180 (Part 1):2014 Amendment 4 (from BIS circular summary). The S&L programme launch year and list of mandatory appliances are (unverified).

**Q8.7 What is UJALA, and what has it achieved?**
A: UJALA (Unnat Jyoti by Affordable LEDs for All) was launched on 5 Jan 2015. EESL is the implementing agency, and it is described as the world's largest zero-subsidy domestic lighting programme. It sells LED bulbs at Rs 70, LED tube lights at Rs 220 and energy-efficient fans at Rs 1110. As of 6 Jan 2025:
- LED bulbs distributed: 36.87 crore
- energy saved: about 47,883 million kWh per year
- peak demand avoided: 9,586 MW
- consumer savings: about Rs 19,153 crore per year
- CO₂ reduced: about 3.88 crore tonnes per year

The Street Lighting National Programme (SLNP), launched the same day, replaces street lights with LEDs.
Source: PIB, "UJALA: 10 Years of Energy-Efficient Lighting" (6 Jan 2025).

**Q8.8 Name energy-saving measures you would put in a PWD building estimate.**
A:
- LED fittings with occupancy sensors in enclosed rooms up to 30 m², meeting rooms, classrooms and storage spaces.
- Daylight-linked controls.
- 5-star ACs and BLDC fans.
- An APFC panel to keep PF at 0.95 or above.
- Energy-efficient (IE3) motors with VFDs on variable-flow pumps.
- Star-rated transformers.
- Sub-metering of major loads.
- Rooftop solar.
- Timer or astronomical-clock street lighting.
Source: CPWD GS-I 2013 energy chapter (occupancy sensors for spaces up to 30 m², meeting rooms, classrooms and storage), cl. 2.6 (PF 0.95). IE3 and BLDC are current practice.

**Q8.9 What are the main CEA safety points for a solar plant on a PWD roof?**
A:
- A 75 cm walkway with handrails.
- Walkways between rows for cleaning.
- Ground-mounted plants fenced to at least 1.8 m.
- AC phases and DC polarity colour-coded.
- DC cables UV-protected or in UV-protected pipe.
- Inverter frame bonded with flexible braided copper.
- Interconnected earth pits.
- Lightning arresters and SPDs.
- Fire detection and suppression as per standards.
Source: CEA 2023 Reg. 121.

---

## 9. Rules and Acts

**Q9.1 Which sections of the Electricity Act 2003 should an electrical engineer know?**
A:
- S.2: definitions.
- S.12: authorised persons to transmit and supply.
- S.14: grant of licence.
- S.42: distribution licensee duties and open access.
- S.43: duty to supply on request.
- S.50: Electricity Supply Code.
- S.53: safety and electricity supply (the CEA safety regulations are made under it).
- S.54: control of transmission and use of electricity.
- S.55: meters.
- S.56: disconnection for non-payment.
- S.61/62: tariff regulations and determination.
- S.68: overhead lines.
- S.73: functions of the CEA.
- S.86: functions of the State Commission.
- S.126: assessment of unauthorised use.
- S.135: theft of electricity.
- S.136: theft of lines and materials.
- S.138: interference with meters.
- S.161: notice of accidents.
- S.162: appointment of Chief Electrical Inspector and Electrical Inspectors.
- S.177: CEA's power to make regulations.
- S.185: repeal and saving.
Source: Electricity Act 2003 section titles (bare-act index on AdvocateKhoj); CEA 2023 preamble (made under S.177(2)(b) read with S.53).
Likely follow-up: "Is theft cognizable?" Yes. Theft under S.135 is a cognizable offence (Parliament answer quoted in search results).

**Q9.2 What replaced the Indian Electricity Rules 1956?**
A: The Electricity Act 2003 repealed the Indian Electricity Act 1910. Under S.185(2)(c), the IE Rules 1956 continued until the CEA made regulations under S.53. The CEA made the Measures relating to Safety and Electric Supply Regulations, 2010. Those were superseded by the CEA (Measures relating to Safety and Electric Supply) Regulations, 2023, notified 8 June 2023 and in force from Gazette publication. Old rule numbers such as Rule 50 (supply and use), Rule 61 (earthing), Rule 63 (inspector's approval) and Rules 79-80 (building clearances) are still quoted at site, but the current references are the 2023 regulations.
Source: CEA 2023 notification preamble and Reg. 1; Electricity Act 2003 S.185 title. IE Rule numbers are from the rules' table of contents (search results); their detailed contents are (unverified).

**Q9.3 What clearances are required from buildings for LT and HT overhead lines?**
A: Buildings must not be built under existing lines, and lines should not cross existing buildings as far as possible.
- **Up to 650 V:** 2.5 m vertical above the highest accessible point of a flat roof, balcony or verandah, or directly under the line for a pitched roof; 1.2 m horizontal from the nearest point. If this cannot be met, use aerial bunched cable on an earthed bearer wire.
- **Above 650 V up to 33 kV:** 3.7 m vertical. Above 33 kV, add 0.30 m for every further 33 kV.
- **Horizontal for HV:** 1.2 m up to 11 kV, and 2.0 m for 11-33 kV. Above 33 kV, 2.0 m plus 0.3 m per further 33 kV.

All clearances are taken at maximum sag (vertical) or maximum wind deflection (horizontal).
Source: CEA 2023 Reg. 62 and 63.
Likely follow-up: "Ground clearance of an 11 kV line?" Across a street 6.5 m, along a street 5.8 m, elsewhere 4.6 m. For LT up to 650 V: 5.8, 5.5 and 4.6 m (CEA 2023 Schedule VIII A under Reg. 60).

**Q9.4 What does CEA 2023 say about the Electrical Safety Officer?**
A: Every supplier (generating, transmission and distribution company) designates an Electrical Safety Officer. So does the owner of any installation, including a factory, with more than 250 kW connected load, and mines and oil-fields above 2000 kW. Qualification: an electrical engineering degree with 5 years of O&M experience, or a diploma with 10 years. The ESO carries out periodic tests, inspects at intervals of not more than one year, keeps records in the Schedule II forms and a register of recommendations, and shows them to the Electrical Inspector.
Source: CEA 2023 Reg. 5.

**Q9.5 What does the CEA require for permit-to-work?**
A: Before shutdown work or testing, the engineer or supervisor in charge must:
- identify the hazards and brief the gang;
- obtain a proper permit-to-work from the operation in-charge;
- ensure the line or apparatus is isolated from all sources, de-energised and earthed;
- fix local earths at the work zone, and keep them until all men and material are clear and the permit is returned;
- positively confirm the section is dead before allowing approach;
- maintain safe distance from adjacent live parts.

No lone working is allowed. Supervision cannot be delegated to sub-contractor staff. For multi-day shutdowns, the earths are re-checked every morning.
Source: CEA 2023 Schedule I, Part II (under Reg. 21(3)).

**Q9.6 What are the CEA rules on handling lines and on PPE?**
A: Before anything is handled, it must be discharged and earthed so it cannot be accidentally charged. Every worker must be given PPE and tools suitable for the voltage: rubber gloves, safety footwear, safety belt, non-conductive ladder, earthing devices, helmet, line tester, voltage detector and hand tools. Arc-flash protection is also required. Only designated persons with a certificate of competency or electrical work permit may operate or maintain equipment.
Source: CEA 2023 Reg. 3(3), 21(1)-(3).

**Q9.7 Where must danger notices and shock-treatment charts be displayed?**
A: Every installation above 250 V must carry a permanent danger notice with skull and bones, in Hindi or English and the local language. It goes on motors, generators, transformers and control gear, and on climbable supports of lines above 650 V. Shock-resuscitation instructions must be displayed in generating stations, enclosed substations and switching stations, mines and factories, and staff must be competent to apply them. The address and phone number of the nearest doctor, hospital, ambulance and fire service go near the chart.
Source: CEA 2023 Reg. 20, 29(6), 30.

**Q9.8 What is IS 732?**
A: IS 732 is the BIS Code of Practice for Electrical Wiring Installations. It covers design, selection, erection, inspection and testing of LV wiring, and is broadly aligned with IEC 60364. The current edition is IS 732:2019; the BIS catalogue also shows a later revision linked to IS 18732:2023 (status unverified). CPWD GS-I 2013 cites IS 732:1989 for the RCCB rule IΔn × Zs ≤ 50.
Source: BIS catalogue listing (secondary); CPWD GS-I 2013 Appendix G.

**Q9.9 What is NBC Part 8 Section 2, and what is its current status?**
A: NBC 2016 Part 8 "Building Services", Section 2, is "Electrical and Allied Installations". It covers planning, substations, distribution, wiring, fittings, earthing, inspection and testing, and lightning protection for buildings. CEA 2023 Reg. 14(2) requires the National Electrical Code and National Building Code to be followed. NBC 2016 (SP 7:2016) was reported withdrawn on 30 April 2026 and replaced by SP 7:2026, "National Building Construction Standards 2026". A BIS draft of the fourth revision of Part 8 Section 2 was circulated in 2025 (comments due 2 June 2025).
Source: CEA 2023 Reg. 14(2); BIS draft "Part 8 Section 2 Electrical and Allied Installations [Fourth Revision]" (search summary); SP 7:2026 replacement per gazette listing reported by secondary sources (gazette PDF not opened).

**Q9.10 What is the National Electrical Code?**
A: It is SP 30, published by BIS. The current edition is SP 30:2023 (second revision), released on 6 Jan 2023, replacing the 2011 edition. It is a compendium of good practice for electrical installations by occupancy type. CEA Reg. 14(2) requires it to be followed alongside the regulations.
Source: BIS blog and weekly bulletin on NEC 2023; CEA 2023 Reg. 14(2).

**Q9.11 What does CEA 2023 say about cables, oil and fire in substations?**
A: Cable trenches in substations must be filled with sand or pebbles, or covered with non-inflammable slabs. A transformer room in a basement must be in the first basement at the periphery, with direct outside access, 4-hour fire-rated walls, 2-hour fire doors kept closed, an oil curb, 2-hour sealing of cable openings and FRLS cables. Transformers of 10 MVA and above need an automatic fire-fighting system. Fire buckets with dry sand and suitable extinguishers are kept in all substations.
Source: CEA 2023 Reg. 46(2)(ix), (x), (xiii); 29(1).

**Q9.12 What is a "designated person" and a "Chartered Electrical Safety Engineer"?**
A: A designated person is someone whose name is entered in the supplier's or owner's record as authorised to operate and work on lines and apparatus. They must hold a certificate of competency or electrical work permit from the Appropriate Government. A Chartered Electrical Safety Engineer is authorised by the Appropriate Government, and listed on its web portal, to help owners and consumers with self-certification under Reg. 32 and Reg. 45.
Source: CEA 2023 Reg. 2(1)(h), 2(1)(t), 3, 6.

---

## 10. Works procedure in PWD

> PWD Meghalaya's own manual, codes and delegation of powers were not available online. Answers below follow the CPWD Works Manual 2022 and GFR 2017, which state PWDs broadly follow. Mention this framing in the interview. Delegated monetary limits for Meghalaya PWD officers are (unverified).

**Q10.1 What types of estimate are there?**
A:
- **Rough cost estimate:** a quick figure on the client's request.
- **Preliminary estimate (PE):** prepared on plinth-area rates or similar, without detailed items, to obtain Administrative Approval and Expenditure Sanction.
- **Detailed estimate (DE):** prepared after AA&ES, item by item from the Schedule of Rates (market rates for non-SOR items), with drawings and specifications. It is the basis of Technical Sanction.
- **Revised estimate:** needed when expenditure is likely to exceed the sanction beyond the permissible limit. For deposit works, CPWD requires a revised estimate if expenditure exceeds AA&ES by more than 10%.
- **Supplementary estimate:** for development not contingent on the work as first sanctioned.
Source: CPWD Works Manual 2022, Definitions and cl. 3.1.1.1, 3.1.1.2, 3.1.4(1); GFR 2017 Rule 136(3).

**Q10.2 What is AA&ES?**
A: Administrative Approval and Expenditure Sanction is the formal acceptance of the proposal by the competent authority of the administrative (client) department. It is given on the preliminary estimate or DPR, and it fixes the scope and the money. Under GFR, no work may start or liability be incurred until all seven conditions are met: AA, expenditure sanction, a sanctioned detailed design, a sanctioned SOR-based detailed estimate, funds provided for the year, tenders processed per rules, and a work order issued.
Source: CPWD Works Manual 2022, Definitions and cl. 3.1.1.5; GFR 2017 Rule 136(1).

**Q10.3 What is Technical Sanction?**
A: TS is a certificate that the detailed estimate has been prepared and approved on the basis of a properly detailed design. It is issued by the TS authority (as per delegated powers) before tenders are invited for item-rate or percentage-rate contracts. The TS package includes the TS memo, AA&ES order, detailed estimate with drawings and specifications, geotechnical report, structural drawings and preliminary services drawings. TS is not required for Design-and-Build/EPC contracts. A revised TS is issued only for deviation in scope due to structural requirements.
Source: CPWD Works Manual 2022, Definitions and cl. 3.1.1.6.

**Q10.4 What is the Schedule of Rates, and what is rate analysis?**
A: The SOR is the department's list of item rates, with nomenclature and specifications. CPWD's Delhi SOR is issued by DG, CPWD and is ordinarily revised once in two years, with a cost index for other places. PWD Meghalaya issues its own SOR (edition: unverified). Rate analysis builds an item rate for a non-SOR item from materials, labour, tools and plant, carriage, water charges, and contractor's profit and overheads, using market rates.
Source: CPWD Works Manual 2022 cl. 3.1.1.9. The CP&OH percentage (often quoted as 15%) and water charges (1%) are (unverified).

**Q10.5 Walk me through e-tendering.**
A:
1. Prepare the NIT and bid documents after TS.
2. Publish on the e-procurement portal (CPPP or the state portal). GFR makes receipt of all bids through e-procurement mandatory.
3. Hold the pre-bid meeting.
4. Bids are uploaded online with EMD or a bid-securing declaration.
5. Open the technical (and eligibility) bids and evaluate.
6. Open the financial bids of qualified bidders and identify the L1.
7. Negotiate only as permitted by rules.
8. Accept the bid within the competent authority's powers and issue the letter of acceptance.
9. The contractor submits the performance guarantee and the agreement is signed.
10. Issue the work order.

For works a Ministry executes itself, GFR calls for open tenders from Rs 10 lakh to Rs 60 lakh and limited tenders below Rs 10 lakh.
Source: GFR 2017 Rule 160(i), Rule 139(iv)-(v) (as amended 10.07.2024); CPWD Works Manual 2022 ch. 5.

**Q10.6 What are EMD, performance guarantee and security deposit, and how much is each?**
A:
- **EMD (earnest money):** protects against a bidder withdrawing during validity. In CPWD it is 2% of estimated cost for works up to Rs 10 crore, and Rs 20 lakh plus 1% of the excess over Rs 10 crore above that. The EE may waive it for petty works up to Rs 25,000. GFR (Rule 170) gives 2-5% for goods and allows a bid-securing declaration instead.
- **Performance guarantee:** taken from the successful bidder. CPWD WM 2022 says 5% of contract amount "or as prescribed from time to time", valid 60 days beyond completion of all obligations. For works, GFR (as amended 1 Jan 2024) caps performance security plus security deposit/retention at 3-10%.
- **Security deposit:** deducted from running and final bills as per the GCC, and refunded after the defect liability period.
Source: CPWD Works Manual 2022 cl. 5.1.2, 5.2, 5.5; GFR 2017 Rules 170-171 with DoE OM F.1/2/2023-PPD dated 01.01.2024. The CPWD SD rate (often quoted as 2.5%) is (unverified).

**Q10.7 What is the Measurement Book, and how does a JE record measurements?**
A: The MB is the basic record of quantities of work done and supplies received. It is the foundation for all payments, so it is a legal document. CPWD now enters measurements through the e-MB module on PFMS; physical MBs follow SOP 5/20. Good practice for a JE:
- Record measurements personally at site, in the presence of the contractor or their agent.
- Write in ink (or digitally), with name of work, agreement number, date, item number and description as in the agreement.
- Record dimensions (L × B × D or number) and quantity.
- No erasing or overwriting: strike through, rewrite and initial.
- Get the contractor's signature accepting the measurements.
- Draw the abstract.
- Give the MB reference in the bill.

For electrical items, record point wiring by counting points by group, conduit and circuit wiring by length along the run, and cables by length. Claimed but inadmissible items are recorded separately "without prejudice". The officer who records or test-checks a measurement is responsible for its quality, quantity and dimensional accuracy.
Source: CPWD Works Manual 2022 cl. 5.12, 5.12.1, 5.12.3, and the quality/measurement responsibility clause; CPWD GS-I 2013 cl. 3.4.3-3.4.5. The ink/no-erasure/signature practices are standard MB rules from SOP 5/20, which I did not open (unverified detail).

**Q10.8 What are running and final bills, and how fast must they be paid?**
A: A running account (RA) bill is an interim payment for work measured to date, less previous payments, security deposit, taxes and recoveries. The final bill is prepared after completion and the final measurements. In CPWD, an ad-hoc payment of 75% of an eligible RA bill is due within 10 working days of submission. The JE and AE scrutinise and certify it within five working days in total, accounts take three days and the EE two. The balance is paid within 28 working days. Final payment for a work is made only on the executing officer's personal certificate that the work meets the agreement specifications.
Source: CPWD Works Manual 2022 cl. 5.18.1; GFR 2017 Rule 139(vii).

**Q10.9 What is deviation, and who can approve it?**
A: Deviation is a variation between the quantities in the schedule of quantities and the quantities actually executed. Extra items are new items not in the schedule; substituted items replace scheduled items. Deviations within the contractual limit are paid at agreement rates, and beyond it at rates fixed per the GCC. For maintenance works under CPWD, completion cost cannot exceed 2.0 times the tendered amount. The EE approves up to 1.25 times, the SE/CE up to 1.5 times, and the ADG/SDG up to 2.0 times in exceptional cases.
Source: CPWD Works Manual 2022, Definitions and cl. 12.1. The deviation limit and rate clause (Clause 12) for original works under the GCC is (unverified).

**Q10.10 What is a completion certificate?**
A: When work is substantially complete and fit for its purpose, a provisional completion certificate is recorded with a list of balance items. The final completion certificate is recorded after inspection, before release of final payment. For building and infrastructure works up to Rs 10 crore, the EE records it; above that, the EE and the SE or CE. The occupancy certificate and as-built drawings of services must be handed over to the client and the maintenance unit.
Source: CPWD Works Manual 2022 cl. 5.17.1-5.17.3.

**Q10.11 What is the Defect Liability Period?**
A: The DLP is the period after completion during which the contractor must make good, at their own cost, any defects arising from bad materials or workmanship. In the CPWD-pattern GCC it is twelve months from completion; it is six months for works other than road works costing Rs 10 lakh or less. It is automatically extended while defects remain unrectified. The security deposit is not refunded before the DLP ends and the final bill is passed.
Source: CPWD-pattern GCC Clause 17/17A and Clause 1A, as reproduced in NIT Meghalaya's GCC. The CPWD GCC 2023 text itself was not opened.

**Q10.12 What GFR 2017 basics should a works engineer know?**
A:
- Rule 133: repair works up to Rs 60 lakh may be done departmentally. Original works, and repairs above Rs 60 lakh, go to a Public Works Organisation such as CPWD or a State PWD.
- Rule 136: no work starts without AA, ES, design, estimate, funds, tenders and a work order.
- Rule 137: a group of works forming one project is treated as one work, so it cannot be split to stay within a lower authority's powers.
- Rule 138: savings cannot be used for unsanctioned work.
- Rule 139: tender thresholds, and final payment only on the personal certificate.
- Rule 160: e-procurement mandatory.
- Rules 170/171: bid security and performance security.
Source: GFR 2017 (updated to 31.01.2026), Rules 133, 136-139, 160, 170, 171.

**Q10.13 What are the roles of the JE, AE and EE?**
A:
- **JE (Junior Engineer):** the field engineer. Supervises execution daily, checks materials and workmanship against specifications, records measurements in the MB, maintains site order and hindrance records, makes RA bills, and reports hindrances to the Engineer-in-Charge at once. Writes hindrances in the site order book; the physical hindrance register has been dispensed with for NITs from 19.02.2019.
- **AE (Assistant Engineer):** heads the sub-division. Test-checks measurements, certifies bills with the JE, prepares estimates and supervises several works.
- **EE (Executive Engineer):** the Divisional Officer, usually the Engineer-in-Charge. Signs the agreement on behalf of the Governor/President, accepts tenders within powers, receives and disburses public money, passes bills and records completion certificates up to Rs 10 crore.
Source: CPWD Works Manual 2022, Definitions ("Divisional Officer", "Engineer-in-Charge"), cl. 5.15(1), 5.17.1, 5.18.1. The test-check percentages (e.g., AE 50%, EE 10%) are (unverified).

**Q10.14 What are contingencies and departmental charges?**
A: Contingencies are a provision in the estimate for unforeseen incidental expenses that are not a distinct sub-head but belong to the work as a whole. Examples: site office, watch and ward, surveys, material testing and inspection vehicles. The TS authority can use them for small works not provided for, with the client's approval. Departmental (agency) charges are not levied on Government works, only on works for private bodies, local bodies and PSUs.
Source: CPWD Works Manual 2022, Definitions and cl. 3.1.1.3-3.1.1.4.

---

## 11. Site safety

**Q11.1 What is permit-to-work, and how is it different from LOTO?**
A: A permit-to-work is the written authorisation from the operation in-charge to the work in-charge, stating:
- that a named section is isolated, de-energised and earthed;
- what work is allowed and by whom;
- the precautions to be taken.

It is returned and cancelled only when all men and material are clear. LOTO (lockout/tagout) is the physical side. Each isolating device is locked in the OFF position with a personal padlock and tagged with name, date and reason, so nobody can re-energise while work is on. Each worker holds their own lock and key. Use both on any shutdown job.
Source: CEA 2023 Schedule I Part II (permit-to-work, isolation from all energy sources, earthing). LOTO procedure is international practice (OSHA 1910.147 pattern; no Indian code clause found).

**Q11.2 Give the steps of safe isolation before working on an LT or HT circuit.**
A:
1. Identify the correct circuit from drawings and labels.
2. Switch off the breaker, and open the isolator after the breaker.
3. Lock and tag.
4. Prove the voltage detector on a known live source.
5. Test the circuit dead, phase to phase and phase to earth.
6. Re-prove the detector.
7. For HT, discharge and apply earths on both sides of the work point.
8. Only then start work.

On completion, reverse the steps after a head count and return of the permit.
Source: CEA 2023 Reg. 21(1), Schedule I Part II (positively confirm dead, local earths).

**Q11.3 What PPE do electrical workers need?**
A: Rubber gloves of the correct voltage class, electrical safety shoes, a helmet, safety belt or harness for height, a non-conductive (FRP) ladder, and arc-flash clothing and face shield where arc-flash risk exists. Also insulated hand tools, discharge rods and earthing sets, a line tester and voltage detector, and hand lines. All PPE must conform to standards and be kept in sound condition. Insulating mats are required in front of and behind panels.
Source: CEA 2023 Reg. 21(2), 21(5).

**Q11.4 A worker is in contact with a live conductor. What do you do?**
A:
1. Do not touch the victim with bare hands.
2. Switch off the supply at once (switch, MCB or plug). If you cannot, separate them using dry non-conducting material such as a dry wooden stick, rubber or a dry rope, standing on something dry and insulating.
3. Call an ambulance (108) and a doctor.
4. Check response and breathing. If not breathing normally, start CPR at once (chest compressions at about 100-120/min, 30 compressions to 2 breaths if trained) and continue until help arrives or the person recovers.
5. Treat burns with cool clean water and a sterile dressing.
6. Every shock victim needs medical examination, even if they seem fine.

Afterwards, report the accident. S.161 of the Act requires notice of accidents.
Source: CEA 2023 Reg. 30 (resuscitation instructions to be displayed; staff competent to apply them); Electricity Act 2003 S.161. CPR rates and ratio are current resuscitation guidance, not checked against a source here (unverified).

**Q11.5 Which fire extinguishers do you use on an electrical fire?**
A: Never use water or water-based foam on live equipment. Use CO₂ (clean, non-conductive, no residue; best for panels and electronics) or dry chemical powder (ABC or BC). Clean-agent extinguishers are used in server rooms. After isolating the supply, the fire is treated by the class of material burning. Fire classes per IS 15683/IS 2190:
- A: ordinary combustible solids
- B: flammable liquids
- C: flammable gases
- D: combustible metals such as magnesium, sodium and potassium
- F: cooking oils and fats

Electrical fire is not a separate letter class in this scheme. The CEA requires dry sand buckets plus suitable extinguishers in all substations.
Source: IS 2190 (2010, and a 2024 edition listed by BIS: classes A, D and F confirmed from the BIS text summary; B and C wording unverified); CEA 2023 Reg. 29(1)-(2). That CO₂/DCP suits electrical fires is from secondary sources (unverified clause).

**Q11.6 What safety equipment must be kept in a substation?**
A:
- Fire buckets with clean dry sand, and suitable extinguishers, maintained and periodically tested.
- First-aid boxes, kept under trained persons.
- At least two gas masks where transformation capacity is 5 MVA or more.
- An artificial respirator.
- The shock-treatment chart.
- Contact numbers of the nearest doctor, hospital, ambulance and fire service, displayed near the chart.
Source: CEA 2023 Reg. 29(1)-(6), 30.

**Q11.7 What precautions do you take when working at height on poles or rooftops?**
A: Use full-body harnesses anchored to a secure point, FRP ladders footed and tied, and helmets. Barricade below. Never work alone. Ladders are carried horizontally near live lines, and cranes or man-lifts near live parts are earthed. Keep safe distance from adjacent live lines. On multi-day shutdowns, the supervisor checks earths each morning before anyone climbs. On solar roofs, use the 75 cm pathway with handrails.
Source: CEA 2023 Schedule I Part II (ladders horizontal, cranes earthed, no lone worker, daily earth checks); Reg. 121(1)(i).

**Q11.8 What is a "lone worker" rule and the supervision rule?**
A: The CEA says a lone worker shall never be allowed to work on lines, equipment or apparatus, or during testing. Supervising personnel must stay at the spot throughout shutdown work at height or testing, and supervision must never be delegated to sub-contractor staff. This matters directly to a PWD JE supervising a contractor's electricians.
Source: CEA 2023 Schedule I Part II, "Further precautions" (2)-(4).

**Q11.9 What must be done after an electrical accident?**
A: Give first aid and medical help first. Then make the area safe and preserve the scene. Report to superiors and send notice to the Electrical Inspector as required by S.161 of the Electricity Act and the state rules (the time limit and form are in the state's rules: unverified). Investigate the cause and record corrective actions.
Source: Electricity Act 2003 S.161 ("Notice of accidents and inquiries").

---

## Questions with a Meghalaya or MeECL angle (likely from a MeECL member of the board)

**QM.1 You work at MeECL. How will that help you at PWD?**
A: I already know the supply side that PWD buildings connect to: LT and HT service connection procedure, metering, the MSERC tariff categories (PWD campuses are usually LT General Purpose or HT Bulk Supply), the safety rules under CEA 2023, and how the Electrical Inspectorate approves HT installations. At PWD I will be on the consumer side. I can design installations that pass supplier inspection first time, choose the right tariff category and PF correction, and coordinate shutdowns safely using permit-to-work.
Source: MSERC Tariff Order FY 2026-27; CEA 2023 Reg. 33, 45.

**QM.2 What are the LT/HT supply classifications in Meghalaya?**
A: The Meghalaya Electricity Supply Code 2006 classifies:
- up to 5 kW: 230 V single phase (LT);
- above 5 kW up to 50 kW: 400 V three-phase 4-wire (LT);
- above 50 kW: 11 kV and above including 33 kV (HT);
- 5000 kW and above: 132 kV and above (EHT).

MSERC has since issued Supply Code Regulations in 2018 and a new Supply Code (1 of 2026), dated 22 April 2026. Check the current thresholds in the 2026 code.
Source: Meghalaya Electricity Supply Code 2006 cl. 3. Thresholds in the 2018/2026 codes: (unverified).

---

## Values I could not verify (summary)

- The CPWD GS Part I (Internal) **2023** text. All CPWD wiring values are from the **2013** edition.
- IEC 60445 colour adoption in IS 732 and CPWD 2023.
- "÷ number of outlets" in the CPWD insulation-resistance formula (partly verified).
- IS 3043:2018 resistance values and its chemical-electrode clause.
- IEC 62305 down-conductor spacing.
- IR test voltages above 500 V.
- Transformer oil BDV limits (IS 335 / IS 1866).
- Full list of IS 1180 standard transformer ratings, and the 60-80% loading target.
- DOL/star-delta kW limits.
- DG items:
  - 0.8 pf rating rule;
  - "four earth pits";
  - DG stack-height formula;
  - DG load-test hours;
  - effective date of the 75 dB(A) limit.
- Voltage-drop limits in IS 732; IE Rule 54 voltage tolerance.
- 2010-regime RCD threshold (5 kW).
- IS 2189 MCP height (1.4 m), 30 m travel distance and detector coverage.
- Lift Act/rules for Meghalaya; IS 14665 part numbers.
- Meghalaya **notified voltage** for self-certification.
- MSERC DRES 2026 capacity limits; Meghalaya-specific solar yield; roof-area rule of thumb.
- Meghalaya ECBC notification status; BEE S&L programme start year.
- CPWD security deposit %; CP&OH and water-charge percentages; test-check percentages; GCC Clause 12 deviation limits for original works.
- Classroom and corridor lux values and the 10 lux escape-route value in NBC 2016.
- CPR figures; S.161 notice time limits.
- Meghalaya Supply Code 2018/2026 thresholds; PWD Meghalaya SOR edition and delegation limits.
- Details of the CEA Amendment Regulations 2026.

---

## Sources used

- **CEA 2023:** Central Electricity Authority (Measures relating to Safety and Electric Supply) Regulations, 2023, Gazette notification No. CEA-PS-16/1/2021-CEI dated 8 June 2023. Full text read from https://kseb.in/uploads/Downloadtemsuppy/Central%20Electricity%20Authority%20(Measures%20relating%20to%20Safety%20and%20Electric%20Supply)%20Regulations,%202023-1699594973944568556.pdf ; CEA listing: https://cea.nic.in/notification/central-electricity-authority-measures-relating-to-safety-and-electric-supply-regulations-2023/?lang=en
- **CPWD GS-I 2013:** CPWD General Specifications for Electrical Works Part I (Internal) 2013. Full text read from https://dgll.nic.in/sites/default/files/2023-06/CPWD%20%E0%A4%95%E0%A5%87%20General%20Specifications%20for%20Electrical%20Works%20%28Part-1%20Internal%29%202013_compressed.pdf . The existence of the September 2023 edition is from bookseller listings and NITs (e.g., https://www.amazon.in/CPWD-General-Specification-Electrical-Works/dp/B0CJFH6ZGS , https://fsi.nic.in/uploads/tenders/ten_1855098_NIT%2011%20.pdf).
- **CPWD Works Manual 2022:** https://www.ndmc.gov.in/departments/Departments/Finance/nodal_cell/CPWD%20Works%20Manual%202022.pdf
- **GFR 2017 (updated to 31.01.2026):** https://www.iitbbs.ac.in/wp-content/uploads/2026/06/GFR-updated-up-to-31.01.2026.pdf
- **CPWD-pattern GCC (Clauses 1A, 17A):** NIT Meghalaya GCC, https://nitm.ac.in/nitmeghalaya/ckfinder/userfiles/files/E_General%20Conditions%20of%20Contract%20(GCC).pdf
- **MSERC Tariff Order FY 2026-27** (Case No. 11 of 2025, 26.03.2026): https://mserc.gov.in/orders/TariffOrders_2025_2026/Case_No_11_MSERC_MePDCL_ARR_Order_FY_2026_27_26_03_2026.pdf ; list of orders: https://mserc.gov.in/tarifforders.html
- **Meghalaya Electricity Supply Code 2006:** https://meghalaya.gov.in/meghalaya/sites/default/files/rules/4.pdf
- **Electricity Act 2003 section titles:** https://www.advocatekhoj.com/library/bareacts/electricity/index.php?Title=Electricity%20Act,%202003
- **UJALA (PIB, 6 Jan 2025):** https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/jan/doc202516481801.pdf
- **PM Surya Ghar:** https://www.pmindia.gov.in/en/news_updates/cabinet-approves-pm-surya-ghar-muft-bijli-yojana/ ; Rajya Sabha replies, e.g. https://rsdebate.nic.in/bitstream/123456789/759049/1/PQ_267_11032025_U1419_p455_p456.pdf (seen via search snippet; the page redirects)
- **DG emissions (CPCB IV+):** ARAI, https://cms.araiindia.com/MediaFiles/3_Emission%20Limits%20Applicability%20Test%20cycle%20and%20Rquirements_11916.pdf ; Environment (Protection) Third Amendment Rules 2022, https://indiaenvironmentportal.org.in/reports-and-documents/environment-protection-third-amendment-rules-2022
- **DG noise:** https://dste.py.gov.in/ppcc/Pdf/Standards/noiselimit_diesegenset.pdf ; https://cpcb.nic.in/uploads/Standerds/Generator-Set/divisionsofheadoffice/generator1000diesel.pdf
- **ECBC 2017 applicability:** https://lpr.adb.org/resource/energy-conservation-building-code-2017-india ; ECSBC 2024: https://beeindia.gov.in/sites/default/files/BEE_ECSBC_2024.pdf ; MoP draft (2026): https://powermin.gov.in/static/uploads/2026/07/f981ac1fc7a15c1136606ec2cd1979ca.pdf
- **NBC 2016 withdrawal and SP 7:2026:** https://www.agileregulatory.com/latest-updates/bis-update-2026-national-building-code-2016-replaced-by-sp-7-2026 ; gazette listing https://egazette.gov.in/WriteReadData/2026/272177.pdf (not opened: certificate error)
- **NEC 2023:** https://www.services.bis.gov.in/php/BIS_2.0/BISBlog/national-electrical-code-of-india-2023/
- **IS 1180 star levels and Dyn11 specification:** https://services.bis.gov.in/tmp/Guidelines_1180_A4_O2ga_2021-04-19.pdf ; https://www.wbsedcl.in/irj/go/km/docs/internet/webpage/techspec/Final%20%20SPEC%20-%203%20Star%20315%20%20%20KVA%20DTR%20BIS.pdf
- **MSERC DRES Regulations 2026 (secondary):** https://solarquarter.com/2026/05/05/mserc-notifies-dres-regulations-2026-to-boost-grid-connected-renewable-energy-adoption-in-meghalaya/
- **IS 2190 (fire classes):** https://services.bis.gov.in/tmp/CED20221197_21082024_1.pdf
- **IEC 60364-4-41 disconnection times (secondary):** https://www.electrical-installation.org/enwiki/TT_system_-_Practical_aspects ; voltage drop: https://www.electrical-installation.org/enwiki/Maximum_voltage_drop_limit
