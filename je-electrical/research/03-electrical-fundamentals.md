# 03 · Electrical Fundamentals: Interview Q&A Bank

For: MPSC interview, Junior Engineer (Electrical), PWD Meghalaya, 12 Nov 2026.
Candidate background: contract engineer with MeECL, Tura (Garo Hills).

How to use this bank: every answer is sized to be said aloud in 20-60 seconds. Lead with the one-line definition, then give the "why", then one practical example, ideally from MeECL field work. Items marked **(verify)** could not be confirmed from a primary source; check them before the interview or avoid quoting exact figures.

---

## 1. DC and AC Circuits

### Q1.1 State Ohm's law. Where does it not apply?
**A:** At constant temperature, the current through a conductor is proportional to the voltage across it: V = IR. It does not apply to non-linear or unilateral elements such as diodes, transistors, SCRs, electric arcs, electrolytes and vacuum tubes. It also fails when temperature changes, because resistance changes (a lamp filament's hot resistance is roughly 10 times its cold resistance).
*Likely follow-up:* Is Ohm's law valid for AC? Yes, with impedance: V = IZ, using phasors.

### Q1.2 State Kirchhoff's laws. What is each based on?
**A:** KCL: the algebraic sum of currents at a node is zero, i.e. current in equals current out. It follows from conservation of charge. KVL: around any closed loop, the algebraic sum of the EMFs equals the sum of the IR drops, i.e. the sum of voltages is zero. It follows from conservation of energy. Both hold for DC and, using phasors, for AC.
*Likely follow-up:* Which network-analysis methods use them? Mesh analysis uses KVL; nodal analysis uses KCL.

### Q1.3 What is RMS value? Why do we quote AC in RMS?
**A:** The RMS (effective) value of an AC is the DC value that produces the same heat in the same resistor in the same time. For a sine wave, Vrms = Vm/√2 = 0.707 Vm. Heating, lighting and power all depend on RMS, so meters and nameplates use it: "230 V" means 230 V RMS, with a peak of about 325 V.
*Likely follow-up:* What does a moving-iron or digital true-RMS meter read? RMS.

### Q1.4 Average value, form factor and peak factor of a sine wave?
**A:** The average over a full cycle is zero, so we take the half-cycle average: Vavg = 2Vm/π = 0.637 Vm. Form factor = RMS/average = 1.11. Peak (crest) factor = peak/RMS = 1.414. For a square wave both are 1; for a triangular wave the form factor is 1.155 and the peak factor 1.732.
*Likely follow-up:* Why does form factor matter? Rectifier-type meters respond to the average and are scaled by 1.11, so they read wrongly on non-sinusoidal waves.

### Q1.5 Define active, reactive and apparent power.
**A:** Active power P = VI cos φ, in watts, does real work (heat, mechanical output). Reactive power Q = VI sin φ, in VAR, flows back and forth to build the magnetic fields of motors and transformers and the electric fields of capacitors; it does no net work. Apparent power S = VI, in VA, is what the conductors and transformer must carry. They form the power triangle: S² = P² + Q².
*Likely follow-up:* Which one does the consumer's kWh meter bill? Active energy (kWh). HT consumers are often billed on kVAh or kVA demand too.

### Q1.6 What is power factor?
**A:** Power factor is the cosine of the angle between voltage and current, which equals P/S (kW/kVA). It shows how much of the current drawn does useful work. Unity is ideal. Inductive loads give a lagging PF and capacitive loads a leading PF.
*Likely follow-up:* Can PF be greater than 1? No.

### Q1.7 What causes low power factor, and what are its effects?
**A:** Causes: induction motors, especially when lightly loaded; transformers on no-load or light load; welding sets; arc and induction furnaces; chokes of discharge lamps. Effects: more current is drawn for the same kW, which means (1) higher I²R losses, (2) bigger kVA ratings for generators, transformers, cables and switchgear, (3) larger voltage drop and poor regulation, and (4) PF penalties or kVAh billing for the consumer.
*Likely follow-up:* Why is a lightly loaded motor worse? Its magnetising (reactive) current stays almost constant while the active current falls.

### Q1.8 How is power factor improved?
**A:** By supplying the lagging kVAR locally: (1) static shunt capacitor banks, fixed or through an APFC (automatic power factor correction) panel that switches steps; (2) synchronous condensers, i.e. over-excited synchronous motors on no-load, for large substations; (3) phase advancers for large induction motors. The required capacitor kVAR = P(tan φ1 − tan φ2).
*Likely follow-up:* Where should the capacitor be placed? As close to the load as possible, so the line carries less reactive current along its length.

### Q1.9 What is resonance in an RLC circuit?
**A:** Resonance occurs when XL = XC, at f0 = 1/(2π√LC). In a series RLC circuit the impedance is at its minimum (= R), current is at its maximum, PF is unity, and the voltages across L and C can be many times the supply voltage (voltage magnification, Q = (1/R)√(L/C)). That is why it is called an acceptor circuit. A parallel circuit at resonance has maximum impedance and minimum line current: a rejector circuit, with current magnification.
*Likely follow-up:* Where does resonance cause trouble? Capacitor banks resonating with system inductance at a harmonic frequency, which causes overvoltage and capacitor failure.

### Q1.10 Give the star and delta relations.
**A:** Star: VL = √3 Vph and IL = Iph, and a neutral is available, so we get both 400 V and 230 V. Delta: VL = Vph and IL = √3 Iph. Line voltages lead the corresponding star phase voltages by 30°. For a balanced load, converting delta to star gives Z_Y = Z_Δ/3.
*Likely follow-up:* Why is the distribution transformer's LV side in star? It gives a neutral for single-phase 230 V supply and a point to earth.

### Q1.11 What is 3-phase power?
**A:** P = √3 VL IL cos φ watts, the same formula for star and delta. Q = √3 VL IL sin φ and S = √3 VL IL. For balanced loads, 3-phase power is constant, not pulsating, which gives smooth motor torque.
*Likely follow-up:* Why 3-phase rather than single-phase? For the same power and voltage it uses less conductor material, gives constant power, and produces a rotating field, so induction motors are self-starting.

### Q1.12 Why is AC used for transmission rather than DC?
**A:** (1) A transformer can step AC voltage up and down easily and efficiently. High voltage means low current, so I²R loss and conductor size fall. (2) AC current passes through natural zeros, so circuit breakers interrupt it more easily. (3) AC generators and induction motors are simpler and cheaper. DC (HVDC) is preferred only for very long bulk lines, submarine cables and asynchronous links.
*Likely follow-up:* Is DC used in India? Yes, HVDC, e.g. the ±800 kV Biswanath Chariali (Assam)–Agra link that carries north-east power west.

### Q1.13 Why is the frequency 50 Hz in India?
**A:** India followed the British/European standard. Technically 50-60 Hz is a compromise. A lower frequency needs bigger, costlier transformer and motor cores and causes visible lamp flicker (below about 40 Hz). A higher frequency increases line reactance, voltage drop, skin effect and core losses. The grid frequency band is kept close to 50 Hz (roughly 49.9-50.05 Hz under the grid code) **(verify the current band)**.
*Likely follow-up:* What happens to frequency when load exceeds generation? Frequency falls, and under-frequency relays shed load.

### Q1.14 What is the difference between a series and a parallel connection in house wiring, and why parallel?
**A:** In series the same current flows through every element and the voltages add; one failure breaks everything. In parallel every appliance gets the full 230 V and can be switched independently, and one failure does not affect the others. That is why house wiring is parallel.
*Likely follow-up:* What is the equivalent resistance of two equal resistors in parallel? R/2.

---

## 2. Transformers

### Q2.1 What is the working principle of a transformer?
**A:** Mutual induction (Faraday's law). AC in the primary sets up an alternating flux in the core; this flux links the secondary and induces an EMF E = 4.44 f N Φm. The voltage ratio equals the turns ratio, V1/V2 = N1/N2 = I2/I1. It is a static device: frequency is unchanged and power is transferred with very high efficiency (about 97-99%).
*Likely follow-up:* Will a transformer work on DC? No. There is no changing flux, so no EMF is induced, and the primary draws a very large current limited only by its resistance, so it burns.

### Q2.2 Why is the transformer core laminated?
**A:** To reduce eddy-current loss. The alternating flux induces circulating currents in the core; thin, insulated laminations (about 0.27-0.35 mm CRGO silicon steel) cut their path, and eddy loss is proportional to the square of the thickness. Silicon steel is used to reduce hysteresis loss.
*Likely follow-up:* Hysteresis loss vs eddy loss formulas? Wh ∝ Bm^1.6 f (Steinmetz); We ∝ Bm² f² t².

### Q2.3 Iron loss vs copper loss?
**A:** Iron (core) loss = hysteresis + eddy current loss. It depends on voltage and frequency, so it is practically constant whenever the transformer is energised, even at no load. Copper loss = I²R in the windings and varies with the square of the load. In short: iron loss is constant and copper loss is variable.
*Likely follow-up:* How are they measured? Iron loss by the OC test, copper loss by the SC test.

### Q2.4 Explain the open-circuit and short-circuit tests.
**A:** OC test: rated voltage is applied to the LV side with the HV open. The wattmeter reads the iron loss, because the no-load current is small and copper loss is negligible. It gives the shunt branch (R0, X0). SC test: the LV side is shorted and a reduced voltage (about 5-10% of rated) is applied to the HV side until rated current flows. The wattmeter reads the full-load copper loss, because flux is low and iron loss is negligible. It gives the equivalent R, X and the percentage impedance.
*Likely follow-up:* Why is the OC test done on the LV side? Rated LV voltage is easier and safer to apply, and the instruments are lower range.

### Q2.5 What is the condition for maximum efficiency?
**A:** Efficiency is maximum when copper loss equals iron loss (variable loss = constant loss). The load at which this happens is x = √(Pi / Pcu,FL) times full load. At a given load, efficiency is highest at unity PF.
*Likely follow-up:* Why do we design power transformers and DTs differently? See Q2.6.

### Q2.6 What is all-day efficiency? Why does it matter for distribution transformers?
**A:** All-day (energy) efficiency = kWh output / kWh input over 24 hours. A distribution transformer stays energised for 24 hours but is on light load much of the time, so its iron loss runs all day. It is therefore designed with low iron loss and maximum efficiency at about 50-60% load. Power transformers in generating stations run near full load, so they are designed for maximum efficiency near full load.
*Likely follow-up:* What is an energy-efficient (star-rated or amorphous-core) DT? One with lower losses per BEE/IS 1180 levels; amorphous cores greatly reduce no-load loss.

### Q2.7 Why are transformers rated in kVA and not kW?
**A:** Transformer losses decide its heating, and hence its rating. Copper loss depends on current and iron loss depends on voltage; neither depends on the load power factor. The manufacturer does not know the PF of the load, so the rating is given as V × I = kVA. The same applies to alternators.
*Likely follow-up:* Why is a motor rated in kW or HP? Its output is mechanical power.

### Q2.8 What is a vector group? Which is used for distribution transformers?
**A:** The vector group shows how the HV and LV windings are connected (D/Y/Z) and the phase shift between them as a clock position (each hour = 30°). Indian 11 kV/433 V DTs are typically **Dyn11**: delta HV, star LV with the neutral brought out, and LV leading HV by 30°. Delta on the HV side traps third-harmonic currents and limits the effect of unbalance; star LV gives a neutral for 230 V loads.
*Likely follow-up:* Can Dyn11 and Dyn1 be paralleled? No; their phase shifts differ by 60°, so heavy circulating current flows.

### Q2.9 What are the conditions for parallel operation of transformers?
**A:** Essential: (1) same voltage ratio; (2) same polarity; (3) for 3-phase units, same phase sequence and same phase displacement (compatible vector group). For good load sharing: (4) equal percentage impedance, and (5) similar X/R ratio. If the ratios differ, a circulating current flows even at no load. If the percentage impedances differ, the transformer with lower impedance overloads.
*Likely follow-up:* What happens with wrong polarity? A dead short circuit through the windings.

### Q2.10 What is a tap changer? Off-load vs on-load?
**A:** It changes the turns ratio to keep the secondary voltage within limits as load and incoming voltage vary. Taps are placed on the HV winding because its current is lower, which makes switching easier, and it has more turns, which gives finer steps. An off-circuit tap changer (on DTs) is operated only after de-energising. An OLTC (on 33/11 kV and higher power transformers) changes taps under load, using a transition resistor or reactor so the circuit is never opened or shorted. Typical steps are 1.25-2.5% per tap.
*Likely follow-up:* Tail-end consumers complain of low voltage; can you change the DT tap? Yes, after shutting the DT down, to a tap that raises the LV. Check that consumers near the DT do not then get overvoltage.

### Q2.11 Explain ONAN and ONAF cooling.
**A:** The four letters are: cooling medium inside, how it circulates, external medium, how it circulates. ONAN = Oil Natural, Air Natural: oil circulates by convection through radiators and air cools them naturally. Used for DTs and small power transformers. ONAF = Oil Natural, Air Forced: fans are added on the radiators, giving a higher rating (often about 25-33% more) on the same transformer. OFAF and ODAF use pumps (forced or directed oil) for large units; OFWF uses water coolers.
*Likely follow-up:* Why is a transformer often given two ratings, e.g. 16/20 MVA? ONAN/ONAF: the higher rating applies with the fans running.

### Q2.12 What is a Buchholz relay?
**A:** A gas-actuated relay fitted in the pipe between the main tank and the conservator of oil-immersed transformers (typically above about 500 kVA). Incipient faults such as core heating or minor insulation breakdown produce gas slowly, which collects and tilts the upper float, operating the **alarm**. A severe fault produces a sudden oil surge that tilts the lower float or vane, operating the **trip**. Analysing the collected gas tells you the type of fault.
*Likely follow-up:* What is its limitation? It is slow (about 0.1 s or more) and cannot detect faults outside the tank, such as bushing faults. It must be backed up by differential and overcurrent protection.

### Q2.13 Why must a CT secondary never be open-circuited?
**A:** The CT primary current is fixed by the line load, not by the CT. Normally the secondary ampere-turns oppose and cancel the primary ampere-turns, keeping the core flux low. If the secondary is opened, nothing opposes the primary MMF, so the core goes into deep saturation and (1) a dangerously high voltage, possibly kilovolts, appears across the open terminals, (2) the core overheats, and (3) residual magnetism spoils the CT's accuracy. So short the CT secondary before removing a meter or relay.
*Likely follow-up:* And a PT? A PT secondary must never be short-circuited; it behaves like a voltage source.

### Q2.14 What is an auto-transformer? Its advantages and disadvantages?
**A:** A transformer with a single winding, part of which is common to primary and secondary. Power is transferred partly by conduction and partly by induction. It saves copper: the saving is K times the copper of a two-winding transformer, where K = V2/V1, so it is best when the ratio is close to 1. It is smaller, cheaper and more efficient. Disadvantage: there is no electrical isolation, so a fault in the common winding can put the full primary voltage on the secondary. Uses: motor starting, variacs, interconnecting 400/220 kV systems.
*Likely follow-up:* Why is it not used for 11 kV/433 V DTs? The ratio is far from 1, so the saving is small and isolation is unsafe.

### Q2.15 What is the purpose of the conservator and the breather?
**A:** The conservator lets the oil expand and contract with temperature while keeping the main tank full. The breather (silica gel) dries the air drawn in as the oil contracts. Blue silica gel turns pink when saturated and must then be replaced or reactivated. Moist oil loses dielectric strength, which is a common cause of DT failure.
*Likely follow-up:* What is the minimum BDV of transformer oil? Commonly cited: about 30 kV for in-service oil and about 60 kV for new filtered oil (2.5 mm gap) **(verify against IS 1866)**.

---

## 3. DC Machines and Induction Motors

### Q3.1 What is back EMF in a DC motor, and what is its significance?
**A:** When the armature rotates in the field, it generates an EMF that opposes the applied voltage, by Lenz's law: Eb = PΦZN/60A, so Ia = (V − Eb)/Ra. It makes the motor self-regulating: when load increases, speed drops slightly, Eb falls, and Ia rises to meet the torque. At starting, Eb = 0, so the current would be V/Ra, which is very large. That is why a starter (3-point or 4-point) with series resistance is needed.
*Likely follow-up:* What is the difference between a 3-point and a 4-point starter? In a 4-point starter the no-volt coil is independent of the field circuit, so it can be used with field speed control.

### Q3.2 Why should a DC series motor never be started without load?
**A:** In a series motor the field current equals the armature current, and speed is roughly proportional to Eb/Φ. At no load the current is very small, so the flux is very small and the speed rises dangerously high. The armature can burst from centrifugal force. That is why series motors are always directly coupled or geared to the load, never belt-driven (a belt can slip off).
*Likely follow-up:* Where is a series motor used? Traction, cranes and hoists, because its starting torque is high (T ∝ Ia² before saturation).

### Q3.3 How is the speed of a DC shunt motor controlled?
**A:** N ∝ (V − IaRa)/Φ. (1) Field (flux) control: a rheostat in the field reduces Φ to get speeds above base speed. (2) Armature voltage or resistance control gives speeds below base speed. (3) Ward-Leonard or a modern thyristor drive varies the armature voltage smoothly over a wide range.
*Likely follow-up:* What happens if the field of a running shunt motor opens? Flux falls to the residual value and the motor overspeeds; the field-failure (no-volt) release must trip it.

### Q3.4 What is slip in an induction motor?
**A:** Slip s = (Ns − N)/Ns, where Ns = 120f/P. The rotor must run slower than the rotating field so that there is relative motion, so EMF and current are induced in the rotor and torque is produced. At synchronous speed there is no relative motion and no torque. Full-load slip is typically 2-5%, and rotor frequency = s × f (a few Hz).
*Likely follow-up:* Slip at starting? s = 1.

### Q3.5 Explain the torque-slip characteristic.
**A:** Torque T ∝ sE2²R2/(R2² + (sX2)²). At low slip (the normal operating region) T ∝ s, a nearly straight line: stable region. At high slip T ∝ 1/s: unstable region. Maximum (pull-out or breakdown) torque occurs at s = R2/X2, and its value is independent of R2. Adding rotor resistance (slip-ring motor) shifts the maximum toward starting, so starting torque rises. Torque ∝ V², so a 10% voltage dip cuts torque by about 19%.
*Likely follow-up:* Why do motors stall and burn on low voltage? Torque falls with V², slip and current rise, and the windings overheat.

### Q3.6 Why is an induction motor called a rotating transformer?
**A:** It works on the same mutual-induction principle as a transformer. The stator is the primary and the rotor the secondary; power crosses the air gap with no electrical connection. The difference is that the secondary rotates, so the rotor EMF and frequency are scaled by slip (sE2, sf), and the output is mechanical. At standstill (s = 1) it is literally a transformer with a short-circuited secondary.
*Likely follow-up:* Why does an induction motor draw more no-load current than a transformer? The air gap needs a large magnetising current, about 25-40% of full-load current.

### Q3.7 What are the starting methods for 3-phase induction motors?
**A:** At rated voltage the starting current is about 5-8 times full-load current, so: (1) **DOL**: full voltage, for small motors (commonly up to about 5 HP). (2) **Star-delta**: start in star, run in delta. Phase voltage is 1/√3, so starting current and starting torque both fall to one third. Only for delta-run motors. (3) **Auto-transformer**: reduced voltage at tapping K; current and torque fall by K² (taps typically 50/65/80%). (4) **Rotor resistance**: for slip-ring motors; gives high starting torque with low current. (5) **Soft starter**: thyristors ramp the voltage smoothly. (6) **VFD**: starts at low frequency with V/f constant, giving full torque at low current, plus speed control and energy saving.
*Likely follow-up:* Why not star-delta for a loaded conveyor? Starting torque is only one third, so the motor may not break away.

### Q3.8 What is single-phasing? How is it prevented?
**A:** One phase of a running 3-phase motor is lost through a blown fuse, broken conductor or loose contact. The motor keeps running on two phases but draws about 1.7-2 times its normal current in the healthy phases. It overheats and burns if not tripped. A stopped motor will not start; it just hums. Protection: single-phasing preventers, motor protection relays with negative-sequence or phase-loss detection, and thermal overload relays with differential (phase-failure) trip.
*Likely follow-up:* Is it common in the field? Yes. One fuse of a DT's LT side or a jumper snapping on a pole gives exactly this, and pump-set owners complain.

### Q3.9 Why is a single-phase induction motor not self-starting?
**A:** A single winding produces a pulsating field, not a rotating one. By double-revolving-field theory, this equals two equal fields rotating in opposite directions. At standstill their torques are equal and opposite, so net torque is zero. Given a push in either direction, one field dominates and the motor runs. To start it, we create a second field displaced in space and time: a split-phase auxiliary winding, a capacitor or a shaded pole.
*Likely follow-up:* How do you reverse a single-phase motor? Reverse the connections of either the main or the auxiliary winding, not both.

### Q3.10 Explain the capacitor-start motor.
**A:** A capacitor is placed in series with the auxiliary winding so that its current leads the main-winding current by nearly 90°, giving a nearly rotating field and high starting torque. At about 70-80% of synchronous speed, a centrifugal switch disconnects the auxiliary winding and capacitor. Capacitor-start capacitor-run motors keep a smaller run capacitor in circuit for better PF and efficiency. Ceiling fans use a permanent-split capacitor.
*Likely follow-up:* A fan hums but does not start, and starts if pushed. Why? The capacitor has failed.

### Q3.11 How is induction motor speed controlled?
**A:** Ns = 120f/P and N = Ns(1 − s). (1) **Frequency control with a VFD** keeping V/f constant: the modern standard, efficient and wide-range. (2) Pole changing: two-speed motors. (3) Rotor resistance: slip-ring motors only, and wasteful. (4) Stator voltage control: fans and pumps, small range. (5) Slip-power recovery: large drives.
*Likely follow-up:* Why keep V/f constant? To keep the air-gap flux constant. Lowering f alone at full voltage would saturate the core.

### Q3.12 What happens if a 3-phase induction motor runs on low voltage?
**A:** For the same load torque it draws more current (T ∝ V² × slip factor). Slip rises, copper loss rises, and the motor overheats. It may stall and burn if the overload protection is not set correctly. This is a frequent field complaint at tail-end pump sets.
*Likely follow-up:* And on overvoltage? Magnetising current and core loss rise, PF drops and the insulation is stressed.

### Q3.13 How do you reverse a 3-phase induction motor?
**A:** Interchange any two of the three supply leads. This reverses the phase sequence and hence the direction of the rotating field.
*Likely follow-up:* Which instrument checks the sequence before coupling a pump? A phase-sequence meter.

---

## 4. Synchronous Machines and Generation (Hydro Focus)

### Q4.1 What are the conditions for synchronising an alternator to the grid?
**A:** The incoming machine must match the busbar in (1) voltage magnitude, (2) frequency (machine slightly higher so it picks up load), (3) phase sequence, and (4) phase angle at the instant of closing, with similar waveform. They are checked with a synchroscope, the dark-lamp or bright-lamp method, or an auto-synchroniser with a check-synchronising relay. Closing out of phase gives a huge current surge and mechanical shock to the shaft and coupling.
*Likely follow-up:* Which condition is checked only once, at commissioning? Phase sequence.

### Q4.2 What is the excitation system of an alternator?
**A:** It supplies DC to the rotor field. Types: (1) DC exciter, older; (2) brushless: an AC exciter on the shaft with rotating diodes, no slip rings; (3) static: thyristor rectifier fed from the generator terminals through an excitation transformer, via slip rings, with a fast response. An AVR controls the excitation to hold terminal voltage. On the grid, raising excitation raises the machine's reactive (kVAR) output, not its kW. kW is set by the turbine input (governor).
*Likely follow-up:* What is under-excitation or loss of field? The machine absorbs kVAR from the grid and may slip out of step; a loss-of-excitation relay trips it.

### Q4.3 Why is a synchronous motor not self-starting?
**A:** The stator field rotates at Ns from the start. The heavy rotor cannot accelerate to Ns within half a cycle, so the torque reverses every half cycle and the average torque is zero. It is started as an induction motor using damper (amortisseur) windings, or by a pony motor or VFD, and the DC field is applied near synchronous speed to pull it into step.
*Likely follow-up:* Its speed? Exactly Ns at all loads, until pull-out.

### Q4.4 What is a synchronous condenser?
**A:** An over-excited synchronous motor running at no load. It draws a leading current and so behaves like a capacitor, supplying kVAR to improve PF and support voltage. Unlike capacitors, it can be adjusted smoothly from leading to lagging by varying excitation, and it adds inertia and short-circuit strength to the grid. Its V-curves show armature current against field current.
*Likely follow-up:* What is the drawback compared with capacitors? Higher cost and losses, and it has moving parts and needs maintenance.

### Q4.5 How does a hydroelectric plant work? Give the power formula.
**A:** Water stored at height (potential energy) flows through the penstock to a turbine coupled to an alternator. P = ρgQHη = 9.81 × Q (m³/s) × H (m) × η kW. Main parts: dam/reservoir, intake, head-race tunnel, surge tank (absorbs water hammer when the load changes suddenly), penstock, turbine, generator, tail-race. Turbine choice by head: **Pelton** (impulse) for high head, **Francis** (reaction) for medium head, **Kaplan** (propeller) for low head with large flow.
*Likely follow-up:* What does the surge tank do? It protects the penstock from water hammer when the governor closes the wicket gates suddenly.

### Q4.6 What are the advantages and limitations of hydro power?
**A:** Advantages: no fuel cost and no emissions; very low running cost; long life (50+ years); starts and loads in minutes, so it is ideal for **peak load** and frequency support; black-start capability; multipurpose reservoirs. Limitations: high capital cost and long gestation; generation depends on rainfall and is **seasonal**; remote sites need long transmission lines; land and ecological issues.
*Likely follow-up:* How does this play out in Meghalaya? Generation is high in the monsoon and lower in the dry winter months, when the state relies more on purchased power **(inferred; verify with MePGCL data)**.

### Q4.7 Tell us about Meghalaya's hydro stations.
**A:** Generation is with MePGCL; MeECL is the holding company over MePGCL, MePTCL and MePDCL. Per CEA's list of operating hydro stations (as of Oct 2025), MePGCL's stations of 25 MW and above total **322 MW**:
- **Umiam Stage I**: 36 MW, on the Umiam (Barapani) reservoir.
- **Kyrdemkulai (Umiam Stage III)**: 60 MW.
- **Umiam Stage IV**: 60 MW.
- **New Umtru**: 40 MW (2 × 20 MW), commissioned about 2017-18.
- **Myntdu Leshka Stage I**: 126 MW (3 × 42 MW), Jaintia Hills, the largest.

Smaller plants include **Umiam Stage II**, 18 MW **(verify)**. Closest to Tura is **Ganol**, 22.5 MW (3 × 7.5 MW) on the Ganol river in West Garo Hills; its first unit was inaugurated in Jan 2023 **(verify the current owner/operator and whether all units run)**. The Umiam stages are a **cascade**: water released from one stage is reused downstream.
*Likely follow-up:* What is a cascade scheme? The tail-race of one station feeds the next, so the same water generates several times.

### Q4.8 Compare thermal, hydro and solar plants.
**A:** **Thermal (coal)**: Rankine cycle, efficiency about 33-40%; base load; slow to start (hours); fuel cost and pollution; sited near coal or water. **Hydro**: efficiency about 85-90%; peak load; quick start; seasonal; no fuel. **Solar PV**: DC from panels, converted by an inverter with MPPT; no moving parts and no fuel; output only in daytime and varies with weather; capacity utilisation factor typically about 15-20%; needs storage or grid backup.
*Likely follow-up:* What is MPPT? Maximum Power Point Tracking. The inverter adjusts the operating voltage so the panels deliver maximum power under varying sunlight and temperature.

### Q4.9 What are base load and peak load plants?
**A:** Base load plants run continuously at high output: coal, nuclear and run-of-river hydro. Peak load plants run only during demand peaks: storage hydro, gas turbines, pumped storage. They are chosen by cost structure. Base load needs low running cost; peak load needs quick start.
*Likely follow-up:* What is pumped storage? It pumps water uphill with surplus off-peak power and generates at peak, acting as a large battery.

### Q4.10 What is a governor in a hydro or thermal set?
**A:** It controls turbine input (water through the wicket gates, or steam through valves) to hold speed, and hence frequency, as load changes. With droop (typically about 4-5%) set on all machines, load is shared between them in proportion to their ratings.
*Likely follow-up:* What happens on sudden load rejection? Speed rises. The governor closes the gates slowly to avoid water hammer, and an overspeed trip is the backup.

### Q4.11 Why are alternators built with a rotating field and a stationary armature?
**A:** The armature carries high voltage and high current. Keeping it stationary means easy insulation and no sliding contacts for the main power. Only the low-voltage DC field passes through slip rings, or none at all in brushless designs. The rotor is also lighter and stronger. Hydro alternators have many salient poles and run slowly (e.g. 300-500 rpm); thermal ones have a cylindrical rotor, 2-pole at 3000 rpm.
*Likely follow-up:* Number of poles for 50 Hz at 375 rpm? P = 120f/N = 16.

### Q4.12 What is an alternator's voltage regulation?
**A:** The rise in terminal voltage when full load is removed, at constant speed and excitation, expressed as a percentage of rated voltage: (E0 − V)/V × 100. It is positive for lagging and unity PF loads and can be negative for leading loads. It is determined by the EMF (synchronous impedance), MMF or ZPF methods.

---

## 5. Transmission and Distribution

### Q5.1 What are the standard voltage levels in India?
**A:** Generation: 11-21 kV (some hydro and older sets 6.6-11 kV). EHV transmission: 765, 400 and 220 kV; HVDC ±500 and ±800 kV. Sub-transmission: 132 and 66 kV. Primary distribution: 33 kV and 11 kV. Secondary distribution (LT): 3-phase 400/415 V between lines and 230/240 V phase to neutral. DTs have a 433 V no-load secondary to allow for the drop. In Meghalaya the typical chain is 400/220/132 kV grid → 33 kV → 11 kV → DT → 415/240 V.
*Note:* the nominal LT value is now generally stated as 230/400 V, while older texts and field staff say 240/415 V. Both are understood **(verify which one your board's syllabus uses)**.

### Q5.2 What are the permissible voltage variations at the consumer end?
**A:** The classic limits (Indian Electricity Rules 1956, Rule 54, carried into the CEA regulations) are: LT ±6%; HT +6% / −9%; EHT +10% / −12.5% **(verify against the current CEA 2023 Safety Regulations and the MSERC Supply Code)**. Frequency should be within the grid-code band.

### Q5.3 What is the Ferranti effect?
**A:** On a long line that is open-circuited or lightly loaded, the receiving-end voltage becomes higher than the sending-end voltage. The line's shunt capacitance draws a leading charging current, which flows through the series inductance; the resulting drop adds in phase with the voltage and raises it. It matters on long EHV lines and cables. Remedy: shunt reactors at the line ends, which are switched in at light load.
*Likely follow-up:* Is it noticeable on short 11 kV lines? Not significantly; capacitance is small.

### Q5.4 What is skin effect?
**A:** With AC, current crowds toward the outer surface of a conductor. The inner core links more flux, so it has more inductance and opposes current more. This raises the effective AC resistance. It increases with frequency, conductor diameter and permeability. It is small at 50 Hz for ordinary conductors, and it is a reason stranded ACSR (with a steel core in the low-current centre) and hollow or bundled conductors are used. There is no skin effect on DC. A related effect is the proximity effect.
*Likely follow-up:* Why is the steel core of ACSR acceptable? Little current flows in the centre anyway, so steel can take the mechanical load.

### Q5.5 What is corona?
**A:** When the field at the conductor surface exceeds the breakdown strength of air (about 30 kV/cm peak), the surrounding air ionises. It shows as a faint violet glow and hissing, and produces ozone, power loss and radio interference. It increases with higher voltage, smaller conductor diameter, rough or dirty surfaces, and in rain, fog and high altitude (lower air density, relevant in hilly Meghalaya). Remedies: larger diameter or **bundled conductors**, larger spacing, smooth hardware, corona rings. A side benefit: corona slightly damps lightning surges.
*Likely follow-up:* What is the critical disruptive voltage? The voltage at which corona just starts.

### Q5.6 What is sag, and why is it necessary?
**A:** Sag is the vertical dip of a conductor below the line joining its supports. Some sag is essential. A tight conductor would carry dangerously high tension and could snap when it contracts in cold weather or carries wind or ice loads. Too much sag violates ground clearance and needs taller supports. For equal supports, S = wl²/8T. Sag increases in summer heat and with heavy current.
*Likely follow-up:* What are the minimum ground clearances? CEA regulations specify them by voltage and location, e.g. LT across a street about 5.8 m and 11 kV along a street about 5.8 m **(verify the exact CEA table values)**.

### Q5.7 What is ACSR? Name some conductors.
**A:** Aluminium Conductor Steel Reinforced: aluminium strands for conductivity around a galvanised steel core for tensile strength. That gives longer spans and less sag at low cost. Code names are animal names. Typical use: **Rabbit / Weasel** on LT and 11 kV, **Dog** on 11/33 kV, **Panther** on 132 kV, **Zebra** on 220 kV, **Moose** on 400 kV (typical practice; utilities vary). Alternatives: AAAC (all-aluminium alloy), and AB cable (aerial bunched, insulated) for LT, which reduces hooking theft and faults from trees.
*Likely follow-up:* Why AB cable in towns like Tura? It is insulated, so it resists direct hooking, tree contact and phase-to-phase faults in wind.

### Q5.8 What are the types of overhead insulator?
**A:** **Pin**: mounted on a pin on the cross-arm; up to 33 kV (beyond that it becomes too big). **Suspension (disc)**: a string of discs hanging from the cross-arm, each disc rated for about 11 kV, used above 33 kV. Add discs for higher voltage; replace a single failed disc. **Strain (tension)**: suspension discs mounted horizontally at dead ends, sharp turns, angle points and river crossings, to take the line tension. **Shackle**: small reel-type, for LT lines and service connections, vertical or horizontal. Others: post insulators and stay insulators (egg type, in the stay wire). Materials: porcelain, toughened glass, polymer/composite.
*Likely follow-up:* Why is a stay (guy) insulator used? So that if a live conductor touches the stay wire, the lower part near the ground does not become live.

### Q5.9 What is string efficiency? How is it improved?
**A:** In a suspension string, each disc and the tower form shunt capacitances, so voltage is not shared equally. The disc nearest the conductor carries the most. String efficiency = voltage across the string / (n × voltage across the disc nearest the conductor) × 100. It is always below 100% and falls as more discs are added. It is improved by (1) a longer cross-arm (reduces the ratio of shunt to self capacitance), (2) capacitance grading (discs of different capacitance), and (3) static shielding with a **guard (grading) ring**.
*Likely follow-up:* Which disc fails first? The one nearest the conductor.

### Q5.10 Feeder vs distributor vs service mains? Radial vs ring main?
**A:** A **feeder** carries power from the substation to the distribution area with **no tappings**, so its current is the same along its length and it is designed for current capacity. A **distributor** has tappings to consumers, so current varies along it and it is designed for **voltage drop** (limit about ±6% at LT). **Service mains** run from the distributor to the consumer's terminals. **Radial**: fed from one end; simple and cheap, but one fault cuts off everyone downstream and tail-end voltage is poor. **Ring main**: a loop fed from one or more points; supply can be restored from the other side and voltage is better, at higher cost. Rural Garo Hills feeders are mostly long radial ones.
*Likely follow-up:* What is an RMU? A Ring Main Unit: compact switchgear (load-break switches and a breaker) used in underground 11 kV ring networks.

### Q5.11 What is the difference between T&D losses and AT&C losses?
**A:** **T&D loss** = (energy input − energy billed) / energy input. It includes technical losses (I²R in lines and DTs, core losses) and non-technical losses (theft, meter defects, unbilled consumption). **AT&C (Aggregate Technical & Commercial) loss** also includes **non-collection**. AT&C loss = [1 − (billing efficiency × collection efficiency)] × 100, where billing efficiency = units billed / units input and collection efficiency = amount collected / amount billed. AT&C is the true measure of a discom's health; it is the key target under RDSS.
*Likely follow-up:* Input 100 MU, billed 80 MU, 90% collection: AT&C = 1 − 0.8 × 0.9 = 28%.

### Q5.12 How do you reduce technical and commercial losses?
**A:** Technical: reconductoring with bigger conductor; shortening long LT lines by adding DTs closer to the load (**HVDS**: High Voltage Distribution System, with small DTs so LT lines are short); balancing phase loads; shunt capacitors; energy-efficient DTs; good joints and connections. Commercial: 100% metering, including DT and feeder meters for **energy accounting and audit**; **smart prepaid meters** (RDSS); AB cable against hooking; vigilance raids and cases under the Electricity Act (Sec 126/135); regular billing and collection drives; replacing stopped or defective meters.
*Likely follow-up:* What is DT metering used for? Comparing DT-level input with the sum of consumer billing pinpoints high-loss DTs (energy audit).

### Q5.13 What are the basics of HVDC transmission?
**A:** AC is converted to DC by thyristor or IGBT converters (rectifier), sent over a line, and inverted back to AC. Advantages: no reactive power, charging current, skin effect or stability limit, so it suits very long bulk lines and submarine or underground cables; only 2 conductors (bipole), so a narrower right of way; it can link **asynchronous** grids (different frequencies); power flow is fast and controllable. Disadvantages: costly converter stations, harmonics (filters needed), and DC breakers are difficult. It is economical beyond a break-even distance of roughly 500-800 km for overhead lines. Indian example: the **±800 kV, 6000 MW Biswanath Chariali–Alipurduar–Agra** link, evacuating north-east hydro **(verify the rating)**.

### Q5.14 Why do pole-mounted and distribution transformers fail?
**A:** (1) **Overloading** from unauthorised load growth and hooking; (2) **unbalanced loading** of phases, which overheats one winding; (3) **low oil level** or oil theft, and moisture ingress (failed breather or gaskets); (4) **lightning and switching surges** when the LA is missing or damaged or the **earthing is poor** (high earth resistance); (5) **improper protection**: HG/DO fuses or LT fuses replaced with thick wire, or no LT protection, so LT faults are fed for a long time; (6) loose connections and bushing flashover from bird or animal contact; (7) prolonged LT short circuits through tree contact or conductor clashing; (8) poor manufacturing or repair quality.
*Likely follow-up:* How would you reduce DT failures in your section? Load surveys and augmentation, phase balancing, proper fuse ratings, LA and earth testing before the monsoon, oil top-up and silica-gel checks, and vegetation clearing.

### Q5.15 What is the difference between 3-phase 3-wire and 3-phase 4-wire systems?
**A:** 3-wire (delta or ungrounded star) is used for 11 and 33 kV distribution, which serves only balanced 3-phase loads (DTs). 4-wire (star with neutral) is used at LT so both 3-phase 415 V and single-phase 240 V loads can be served; the neutral carries the unbalance current.

---

## 6. Switchgear and Protection

### Q6.1 Compare a fuse, an MCB and a circuit breaker.
**A:** **Fuse**: a weak link that melts on overcurrent. Cheap and fast, but it must be replaced after operation, cannot be switched, and rewiring with the wrong wire is a hazard. HRC fuses have high breaking capacity. **MCB**: an automatic resettable switch with a thermal (bimetal, overload) element and a magnetic (short-circuit) element; up to about 125 A; curves B, C and D. **MCCB**: higher ratings (to about 1600-2500 A), adjustable settings. **Circuit breaker (ACB/VCB/SF6)**: switches normal and fault currents at HV and high fault levels, is operated by relays, and can be closed and opened remotely. **RCCB/ELCB** detects earth leakage (30 mA for human protection, 100-300 mA for fire protection); it does not protect against overload unless it is an RCBO.
*Likely follow-up:* Why does an MCB not protect a person from shock? Shock current (tens of mA) is far below its trip current; an RCCB is needed.

### Q6.2 How is an arc formed and quenched in a circuit breaker?
**A:** When contacts separate under current, the gap ionises and an arc keeps the current flowing. Two methods quench it. **High-resistance method**: lengthen, cool and split the arc (arc chutes or splitters). Used in DC and low-voltage air breakers. **Low-resistance (current-zero) method**: AC has a natural zero every half cycle. At the zero, the medium (oil, vacuum, SF6) must build dielectric strength faster than the **restriking voltage** rises, so the arc does not re-strike. Important terms: recovery voltage, restriking voltage, RRRV (rate of rise of restriking voltage).
*Likely follow-up:* Why is DC harder to interrupt? It has no natural current zero.

### Q6.3 What are the types of circuit breaker, and where is each used?
**A:** **ACB** (air): LT panels up to about 6300 A, 415 V. **OCB** (bulk or minimum oil): older 11/33 kV, being phased out because of fire risk and maintenance. **VCB** (vacuum): the standard for 11 and 33 kV indoor and outdoor. The vacuum gives very high dielectric recovery, short contact travel, little maintenance and long life. **SF6**: 33 kV up to 765 kV and in GIS. SF6 is electronegative (captures free electrons), with dielectric strength about 2-3 times that of air. It is a potent greenhouse gas, so leaks must be monitored with gas-pressure alarms and lockout.
*Likely follow-up:* What is the drawback of a VCB? Current chopping on small inductive currents can cause overvoltages (surge arresters or RC suppressors are used).

### Q6.4 What is a relay? Explain overcurrent and earth fault relays.
**A:** A relay senses an abnormal condition through a CT or PT and closes the trip circuit of the breaker. **Overcurrent relay**: operates when phase current exceeds the setting. Used on 11/33 kV feeders and DTs. **Earth fault relay**: connected in the residual circuit of 3 CTs (or a CBCT, core-balance CT). It sees only the unbalance (3I0), so it can be set much lower (e.g. 10-20% of CT rating) for sensitive earth-fault detection. Feeders typically have 3 O/C + 1 E/F, or 2 O/C + 1 E/F.
*Likely follow-up:* Why does an E/F relay trip on a healthy feeder? Possible causes: CT polarity or wiring errors, heavy unbalance, a broken conductor touching earth, or leakage through trees.

### Q6.5 What is an IDMT relay? Explain PSM and TMS.
**A:** Inverse Definite Minimum Time: the higher the fault current, the faster it trips, but never faster than a definite minimum. The IEC standard-inverse curve is t = 0.14 × TMS / (PSM^0.02 − 1); at PSM 10 and TMS 1 it trips in about 3 s, hence "3-second relay". **PSM** (plug setting multiplier) = fault current on the relay side / (plug setting × CT secondary rating). **TMS** (time multiplier setting, 0.05-1) scales the time. Grading: the downstream relay operates first, and upstream relays have higher TMS with a margin of about 0.3-0.4 s.
*Likely follow-up:* What are the other curves? Very inverse, extremely inverse (for fuse coordination), and definite time.

### Q6.6 What is differential protection?
**A:** Merz-Price circulating-current principle. CTs on both sides of the protected zone (transformer, generator, busbar) compare the currents. For through-load and external faults the CT secondary currents balance and no current flows in the relay. For an internal fault they do not balance and the relay trips instantly. For transformers: CT ratios and connections compensate for the ratio and vector-group shift; **percentage bias** prevents false trips from CT mismatch and tap changes; **2nd-harmonic restraint** blocks tripping on magnetising inrush.
*Likely follow-up:* Why does a transformer differential relay sometimes trip on charging? Inrush current is rich in 2nd harmonic; without harmonic restraint it looks like an internal fault.

### Q6.7 What is distance protection?
**A:** The relay measures impedance (V/I) at the relaying point. Line impedance is proportional to distance, so a fault inside the set reach gives a low impedance and the relay trips. Zones: **Zone 1** about 80% of the line, instantaneous; **Zone 2** about 120%, time-delayed (about 0.3-0.4 s), covers the line end plus a margin; **Zone 3** backup for the next line, longer delay. Types: impedance, reactance (short lines, arc resistance), mho (long lines, inherently directional). Used on 66/132 kV and above.
*Likely follow-up:* Why not 100% in Zone 1? CT, PT and line-data errors could make it overreach into the next section.

### Q6.8 Explain the CT and the PT.
**A:** A **CT** (current transformer) steps line current down to 1 A or 5 A for meters and relays. Its primary is in series with the line. It has two classes: **metering cores** (e.g. 0.2S, 0.5S), accurate at normal currents and saturating on faults to protect meters; and **protection cores** (e.g. 5P10, 5P20), staying accurate up to 10-20 times rated current. Never open its secondary. A **PT/VT** (potential transformer) steps high voltage down to 110 V (line) for meters and relays. It is connected in parallel and its secondary is fused; never short it. Both secondaries are **earthed at one point** for safety.
*Likely follow-up:* What is the burden? The VA load of the connected meters, relays and leads. Exceeding it reduces accuracy.

### Q6.9 What is a lightning arrester? Where is it placed?
**A:** A surge arrester (LA) is connected between line and earth. At normal voltage it is an insulator. On a lightning or switching surge, its non-linear resistance (modern **metal-oxide/ZnO, gapless**) drops sharply and diverts the surge to earth, then it returns to insulating. It must be placed **as close as possible** to the equipment it protects (DT, substation) with a short, separate, low-resistance earth. Other surge protection: earth (shield) wire on top of lines, rod gaps, and the surge suppressors on DTs.
*Likely follow-up:* What happens when the LA earthing is poor? The surge cannot drain, so the DT's insulation takes it. This is a major cause of DT failures in the monsoon.

### Q6.10 Isolator vs circuit breaker: what is the operating sequence?
**A:** An **isolator** is an off-load device. It only provides visible isolation and must never be operated on load (it has no arc quenching). A **CB** makes and breaks load and fault current. **Switching off**: open the CB → open the isolators → close the earth switch. **Switching on**: open the earth switch → close the isolators → close the CB. Interlocks (mechanical or electrical) enforce this sequence.
*Likely follow-up:* What is a load-break switch? It can break load current but not fault current; used in RMUs, often with fuses.

### Q6.11 What are the types of fault in a power system?
**A:** **Symmetrical**: 3-phase (LLL or LLLG). Rare (about 5%) but usually the most severe; used for fixing the breaker rating. **Unsymmetrical**: single line-to-ground (**LG**, the most common, roughly 70-80%), line-to-line (LL), and double line-to-ground (LLG). There are also **open-conductor faults** (broken jumper, blown fuse, giving single-phasing) and **high-impedance faults** (a conductor on dry ground or a tree), which may not trip overcurrent relays.
*Likely follow-up:* A conductor has snapped and is lying on the road but the feeder has not tripped. Why? A high-impedance earth fault below the E/F setting. It is very dangerous: get the line isolated immediately.

### Q6.12 What is the concept of symmetrical components?
**A:** Fortescue's theorem: any unbalanced set of 3-phase phasors can be resolved into three balanced sets. **Positive sequence**: normal ABC rotation. **Negative sequence**: reverse ACB rotation; it causes rotor heating in machines. **Zero sequence**: three equal in-phase phasors; it flows only if there is a return path through neutral or earth. The operator a = 1∠120°. Uses: unbalanced fault calculation, and earth-fault relays (sensing zero-sequence 3I0) and negative-sequence relays.
*Likely follow-up:* Which sequences are present in an LG fault? All three, with I1 = I2 = I0 = Ia/3.

### Q6.13 What protection does a distribution transformer have?
**A:** HV side: **drop-out (DO) fuses** or HG fuses, and **lightning arresters**. LT side: LT fuse unit, MCCB or an LT distribution box. Proper **earthing**: neutral, body and LA earths, ideally separate. Larger DTs and substation transformers add OC/EF relays with a breaker, and Buchholz, oil and winding temperature, and differential protection.
*Likely follow-up:* What fuse size for a 100 kVA DT on the 11 kV side? HV full-load current is about 5.25 A; the fuse is chosen per utility norms (a few times the FLC to ride through inrush) **(follow MeECL norms)**.

---

## 7. Measurement and Instruments

### Q7.1 What is a megger? How is it used?
**A:** An insulation resistance tester. It applies a high DC test voltage (hand-cranked or electronic) and reads resistance in MΩ/GΩ, using a ratiometer (cross-coil) movement. Typical test voltages: 500 V for LT wiring, 1 kV for LT motors and cables, 2.5-5 kV for HT cables and transformers. Always isolate and discharge the equipment before testing and discharge it again afterwards. A common rule-of-thumb minimum is 1 MΩ per kV + 1 MΩ. For LT installations, IR should not be below about 1 MΩ; CEA/IS give the exact criteria **(verify)**. PI (Polarisation Index) = 10-minute reading / 1-minute reading; above 2 is good.
*Likely follow-up:* What does the guard terminal do? It bypasses surface leakage so only volume insulation resistance is measured.

### Q7.2 What is a tong tester (clamp meter)?
**A:** It measures current without breaking the circuit. The jaws clamp around **one** conductor and act as the core of a CT, with the conductor as the primary. AC-only types use the CT principle; AC/DC types use a Hall-effect sensor. Clamping both phase and neutral reads about zero, because the currents cancel. That is used for leakage checks, and to detect theft when phase and neutral currents differ.
*Likely follow-up:* How do you check load balance on a DT? Clamp each LT phase and the neutral. A high neutral current indicates imbalance.

### Q7.3 What does a multimeter measure? What are the precautions?
**A:** Voltage (AC/DC), current, resistance, continuity, and on digital meters often diode test, capacitance and frequency. Precautions: select the correct range and function before connecting; never measure resistance or continuity on a live circuit; never connect in the current mode across a voltage (it shorts the supply and blows the fuse); use CAT-rated probes (CAT III/IV for distribution work).

### Q7.4 How does an electromechanical (induction) energy meter work?
**A:** It has four systems. (1) **Driving**: a shunt (pressure) magnet and a series (current) magnet produce shifting fluxes that induce eddy currents in an aluminium disc, giving torque ∝ VI cos φ. (2) **Moving**: the aluminium disc on a spindle. (3) **Braking**: a permanent magnet whose eddy-current drag makes speed ∝ power. (4) **Registering**: a counter, giving revolutions ∝ energy (rev/kWh constant). Errors: **creeping** (rotation with no load, prevented by two holes in the disc), friction, phase and speed errors.
*Likely follow-up:* What is creeping, and how is it stopped? Slow rotation with only voltage applied; holes drilled in the disc, or a small iron piece, stop it.

### Q7.5 Static vs smart vs prepaid meters?
**A:** A **static (electronic) meter** has no moving parts. It samples V and I and computes energy digitally. It is more accurate (class 1.0, 0.5S, 0.2S), records MD, tamper events and load survey, and is read through an optical port (CMRI). A **smart meter** adds two-way communication (RF/GPRS/PLC) with the utility's head-end system: remote reading, remote connect and disconnect, time-of-day tariff, outage and tamper alerts. A **prepaid smart meter** works like mobile recharge: the consumer recharges first, and supply is disconnected when the balance runs out (with friendly-hours provisions). It improves collection efficiency. It is being rolled out under **RDSS**.
*Likely follow-up:* What tamper events does a static meter log? Magnet influence, neutral missing, phase-neutral reversal, earth loading, cover open, current unbalance.

### Q7.6 What is CT-operated metering?
**A:** For loads too large for whole-current meters (bulk LT and HT consumers), CTs (and PTs for HT) step down current and voltage to the meter. Actual consumption = meter reading difference × **multiplying factor (MF)**, where MF = (CT ratio × PT ratio) / (meter-rated CT × PT ratio). Field checks: CT polarity (P1 toward the source), correct phase association, secondary not shorted (a tampering method), and sealing of the CT chamber and terminal box.
*Likely follow-up:* A 200/5 A CT meter has a meter rated 5 A and the reading difference is 1,000 units. Billed units = 1,000 × 40 = 40,000.

### Q7.7 How is earth resistance measured?
**A:** With a 3-terminal earth tester using the **fall-of-potential method**. Disconnect the earth electrode under test (E) from the system. Drive the current spike (C) about 20-30 m away, or several times the electrode length, and the potential spike (P) in line at about **62%** of the E-C distance. The tester passes current through E and C and measures V between E and P, giving R = V/I. Move P ±10% to confirm the reading is stable. Typical guide values: large substation ≤ 1 Ω, small substation ≤ 2 Ω, DT and pole structure earths a few ohms, about ≤ 5-10 Ω **(verify against IS 3043 and utility norms)**.
*Likely follow-up:* How do you reduce earth resistance? Pour water and salt/charcoal (traditional) or use chemical earthing compound, add parallel electrodes, or use a deeper electrode.

### Q7.8 What is a phase-sequence meter?
**A:** It shows whether the phase order is RYB (positive) or reversed. Older types are a small 3-phase induction motor whose disc direction shows the sequence; others use lamp/capacitor circuits or electronic indication. It is used before connecting 3-phase motors and pumps (wrong sequence = reverse rotation), when synchronising, and when paralleling transformers or feeders.

### Q7.9 How does a wattmeter work?
**A:** An electrodynamometer wattmeter has a fixed **current coil** (thick, in series with the load) and a moving **pressure coil** (thin, with high series resistance, across the supply). The deflecting torque ∝ VI cos φ, i.e. average power. Low-PF wattmeters are used for OC tests. Precaution: the current coil can be overloaded even when the reading is within scale at low PF, so also use an ammeter.

### Q7.10 Explain the two-wattmeter method of 3-phase power measurement.
**A:** For a 3-phase 3-wire load, balanced or unbalanced: current coils go in two lines and pressure coils between each of those lines and the third. Total power P = W1 + W2. For a balanced load, tan φ = √3 (W1 − W2)/(W1 + W2). Special cases: PF = 1 → W1 = W2; PF = 0.5 → one wattmeter reads **zero**; PF < 0.5 → one reads **negative** (reverse its pressure-coil connection and subtract); PF = 0 → equal readings of opposite sign.
*Likely follow-up:* Why not use it on a 4-wire unbalanced system? Neutral current gives a return path, so 3 wattmeters are needed (Blondel's theorem: n − 1 wattmeters for n wires).

### Q7.11 What are the types of ammeter and voltmeter?
**A:** **PMMC**: DC only, uniform scale, accurate; used in DC meters and, with a rectifier, in multimeters. **Moving iron**: AC and DC, non-uniform scale, rugged, cheap; common on panels. **Dynamometer**: AC/DC, used as a wattmeter. **Digital**: true-RMS types are accurate on distorted waveforms. Ammeters have very low resistance and go in series; voltmeters have very high resistance and go in parallel. Range extension: shunt for an ammeter, series multiplier for a voltmeter, CT/PT for AC.

---

## 8. Power Electronics and Basics

### Q8.1 What is a diode? Explain forward and reverse bias.
**A:** A PN junction that conducts in one direction only. Forward bias (P to +): conducts after the cut-in voltage (about 0.7 V for silicon, 0.3 V for germanium). Reverse bias: only a tiny leakage current flows until breakdown. Types: rectifier diode, Zener (operated in reverse breakdown as a voltage regulator), LED, Schottky (fast, low drop), freewheeling diode across inductive loads.
*Likely follow-up:* What does a freewheeling diode do? It gives inductive current a path when the switch turns off, preventing voltage spikes.

### Q8.2 What is an SCR? How is it turned on and off?
**A:** A Silicon Controlled Rectifier: a 4-layer PNPN device with 3 junctions and terminals anode, cathode and gate. It blocks in both directions until a **gate pulse** (with forward anode voltage) turns it on. It then latches on; once current exceeds the **latching current**, the gate loses control. It turns off only when anode current falls below the **holding current**: naturally at the AC current zero (line commutation) or by forced commutation in DC circuits. Applications: controlled rectifiers, DC drives, soft starters, HVDC valves, AC voltage controllers.
*Likely follow-up:* Latching current vs holding current? Latching current is needed to stay on just after triggering; holding current is the minimum to remain on. Latching current > holding current.

### Q8.3 Half-wave, full-wave and bridge rectifiers?
**A:** **Half-wave**: 1 diode, conducts on alternate half-cycles. Vdc = Vm/π, ripple factor 1.21, poor transformer utilisation. **Full-wave centre-tap**: 2 diodes and a centre-tapped transformer. Vdc = 2Vm/π, ripple about 0.48; each diode's PIV = 2Vm. **Bridge**: 4 diodes, no centre tap. Vdc = 2Vm/π, PIV = Vm per diode; the most common. Filters: a capacitor (and/or inductor) smooths the ripple. A controlled rectifier (using SCRs) varies DC output by delaying the firing angle α.

### Q8.4 What is an inverter? How is it different from a UPS?
**A:** An inverter converts DC to AC. Modern designs use IGBT/MOSFET with PWM to produce a near-sinusoidal output (pure sine wave versus square or modified sine). A home "inverter" switches over when mains fails, with a small changeover gap (about 10-20 ms) and charges the battery from mains. A **UPS**: an **online (double-conversion)** UPS always runs the load through rectifier → battery/DC bus → inverter, so there is **zero transfer time** and the output is clean and regulated. Used for computers, servers and SCADA. An **offline/line-interactive** UPS switches in a few ms.
*Likely follow-up:* Why does a substation have a battery bank? DC control supply: breaker trip and close coils, relays and indication must work even when AC fails. Typically a 110 V or 220 V DC battery with a charger.

### Q8.5 What is a VFD and why is it used?
**A:** A Variable Frequency Drive: rectifier (AC→DC) → DC link (capacitor) → PWM inverter (DC→variable-frequency, variable-voltage AC). It controls induction motor speed at constant V/f, gives soft starting with low starting current, saves large amounts of energy on pumps and fans (power ∝ speed³ under the affinity laws), improves PF on the supply side, and includes built-in protection. Drawbacks: harmonics injected into the supply, motor-insulation stress from fast dv/dt, bearing currents, and the need for cooling.
*Likely follow-up:* Why do pumps save so much? Running at 80% speed needs only about 51% of the power (0.8³).

### Q8.6 Lead-acid vs Li-ion batteries?
**A:** **Lead-acid**: 2 V per cell; Pb/PbO2 plates in dilute H2SO4. Cheap, robust, recyclable, heavy, about 300-1000+ cycles; the state of charge can be checked by specific gravity (about 1.25-1.28 when fully charged, depending on type **(verify)**). Needs topping up with distilled water (flooded type) or is sealed VRLA; it gives off hydrogen while charging, so the room must be ventilated. **Li-ion**: about 3.2 V (LiFePO4) to 3.6-3.7 V (NMC) per cell. High energy density, light, long cycle life (2000+), deep discharge, low maintenance, but costlier. It needs a **BMS** for thermal runaway and overcharge protection. Used in EVs, solar storage and modern UPS.
*Likely follow-up:* What is the capacity unit? Ampere-hour (Ah). A 150 Ah battery delivers about 15 A for 10 hours (C10 rating).

### Q8.7 What are harmonics, and why do they cause trouble?
**A:** Harmonics are currents and voltages at integer multiples of 50 Hz (150, 250, 350 Hz …), produced by **non-linear loads**: SMPS (computers, LED drivers, TVs), VFDs, UPS, rectifiers, CFLs, arc furnaces. Effects: (1) **neutral overheating**, because triplen harmonics (3rd, 9th…) add in the neutral instead of cancelling; (2) extra heating and loss in transformers (derating is needed) and motors; (3) **capacitor bank failure or resonance**; (4) nuisance tripping and relay malfunction; (5) metering errors and interference with communication lines. They are measured as **THD**. Remedies: passive or active filters, line reactors, multi-pulse (12/18-pulse) drives, delta windings (trap triplens), K-rated transformers, detuned reactors with capacitors. Limits are given by IEEE 519 and CEA grid-connectivity rules.
*Likely follow-up:* Why can the neutral in an office building carry more current than the phases? The triplen harmonic currents from three phases add arithmetically in it.

### Q8.8 What is a transistor? BJT vs MOSFET vs IGBT?
**A:** A **BJT** is current-controlled (base current), has low conduction loss and slow switching. A **MOSFET** is voltage-controlled (gate), switches very fast, and is best at low voltage and high frequency. An **IGBT** combines a MOSFET gate with BJT conduction. It is voltage-controlled, handles high voltage and current at medium frequency, and is the workhorse of VFDs, inverters, UPS and modern HVDC (VSC).

### Q8.9 What is a Zener diode used for?
**A:** It operates in reverse breakdown, where the voltage stays almost constant over a wide current range. Used as a simple voltage regulator or reference and for over-voltage clamping.

### Q8.10 What does a solar inverter do, and what is net metering?
**A:** It converts the panels' DC to grid-synchronised AC. It does MPPT and has **anti-islanding** protection: it shuts down when the grid fails so it does not back-feed a line that line staff believe is dead. **Net metering**: a bidirectional meter records import and export; the consumer pays only for net consumption (rooftop solar, e.g. PM Surya Ghar). **Gross metering**: all generation is sold at a fixed tariff.
*Likely follow-up:* Why is anti-islanding a safety issue for line staff? A rooftop plant could energise an isolated LT line through the DT and back-feed 11 kV. This is another reason to earth lines before working.

---

## 9. Practical and Field Questions (Utility / Field Engineer)

### Q9.1 A distribution transformer in your area has failed. What do you do?
**A:** (1) **Safety first**: open the AB switch / DO fuses on the 11 kV side, confirm isolation, discharge and earth. (2) **Inspect**: oil leakage or smell, bulging tank, burnt bushings, blown HV fuses, LA status, earth connections; megger HV-LV, HV-earth and LV-earth; check winding continuity and ratio if possible. (3) **Find the cause**: check overloading (load-survey data), phase imbalance, LT faults, oil level, earthing and LA condition, fuse ratings. Replacing it without fixing the cause means it fails again. (4) **Restore supply**: arrange a replacement from the store or failed-DT bank following the procedure (indent, transport, testing). Before charging, check oil, fittings, earthing and LA, and use correctly rated fuses. (5) **Record and report**: failure report and warranty claim if it is within the guarantee period; send it for repair. Meanwhile, inform consumers and arrange alternative supply by back-feeding from a nearby DT if load permits.
*Likely follow-up:* What is the target replacement time? Per the MSERC Standards of Performance **(check MeECL/MSERC norms; often 24-72 h depending on urban or rural area)**.

### Q9.2 What do you check during line patrolling?
**A:** Conductors: broken or damaged strands, sag (too low over roads or houses), clashing spans, loose or overheated **jumpers and joints** (look for discoloration). Insulators: cracked, chipped or flashed-over (burn marks), or tilted pin insulators. Poles and structures: leaning or rotten poles, damaged foundations, missing or broken **stays and stay insulators**, missing danger plates and anti-climbing devices. **Vegetation**: trees and bamboo touching or close to lines (a major issue in Garo Hills) and **right-of-way** encroachment, such as new construction under lines. DTs and equipment: oil leaks, LA condition, earth leads cut or stolen, DO fuse condition, fence and plinth. Theft signs: hooking/kundi connections and tapped AB cable. Record defects with location and pole number, prioritise hazards, and plan a shutdown for repairs. Pre-monsoon patrol is the most important.
*Likely follow-up:* Ground patrol vs night patrol? Night (or thermal-camera) patrol reveals sparking and hot joints.

### Q9.3 How do you locate a fault in an underground cable?
**A:** (1) **Identify the fault type** with a megger and continuity tests: phase-to-earth, phase-to-phase, open circuit, low or high resistance. (2) **Pre-location** (distance from the end): **TDR** (time-domain reflectometer / pulse echo) for low-resistance and open faults; **Murray loop** (Wheatstone bridge, needs a healthy core) for low-resistance faults; **Varley loop**; arc reflection or **surge (thumper) methods** for high-resistance faults. (3) **Pinpointing** along the route: a surge generator plus an acoustic/electromagnetic detector (hear the "thump" at the fault), or a route tracer. (4) Excavate, repair with a jointing kit, and test (IR, HV test) before re-energising.
*Likely follow-up:* What is the Murray loop principle? The faulty core and a healthy core form a loop into a bridge. At balance, the ratio gives the distance to the fault: x = (R/(P+R)) × loop length (for the standard configuration).

### Q9.4 Why do fuses blow repeatedly on a DT or a consumer's service?
**A:** (1) **Overload** beyond the fuse rating: unauthorised load, AC or heater additions; (2) a **persistent fault**: a short or earth fault downstream, damaged cable, tree contact, a faulty appliance; (3) **loose connections** and poor fuse-carrier contact, which overheat the fuse wire and melt it below rated current; (4) the **wrong fuse size** or material; (5) **phase imbalance** overloading one phase; (6) **inrush** of motors or transformers on a fuse that is too small; (7) a **harmonic or neutral problem**. Remedy: find the cause (load measurement with a tong tester, IR test), fix it, and use the correct rated fuse. **Never** bypass the fuse with thick wire: it transfers the damage to the DT or the wiring.

### Q9.5 What is a floating neutral? How do you identify it?
**A:** On a 3-phase 4-wire LT system, if the **neutral breaks** (loose joint, burnt connection at the DT or a pole, theft of the neutral conductor), single-phase loads on the three phases are now in series across the line voltage. The neutral point shifts toward the heavily loaded phase. Houses on the **lightly loaded phase get very high voltage**, up to near 400 V, and appliances burn; houses on the heavily loaded phase get low voltage. **Symptoms**: some houses with very bright bulbs or burnt appliances and others with dim lights on the same LT line; voltage changing as loads switch. **Identification**: measure phase-to-neutral voltages at the DT and along the line (they will be unequal and very different from 240 V); measure neutral-to-earth voltage (significant volts = a neutral problem); clamp-check neutral current; trace the break by checking voltage pole by pole. **Prevention**: sound neutral joints, neutral earthing at the DT **and repeated earthing along the line**, balanced loads.
*Likely follow-up:* Why does earthing the neutral at multiple points help? If the neutral breaks somewhere, the earth path still holds the neutral potential near zero.

### Q9.6 Why is voltage low at the tail end of a feeder? What can you do?
**A:** Causes: (1) **long LT/11 kV lines** with large voltage drop (I × Z grows with length and load); (2) **undersized conductor**; (3) **overloaded DT** or feeder; (4) **low power factor** of loads (pumps, motors), which raises reactive drop; (5) **phase imbalance**; (6) **loose joints**, bad jumpers and corroded connections, with high resistance; (7) wrong DT tap position; (8) low sending-end voltage at the 33/11 kV substation. Remedies: shorten the LT lines (add a new DT near the tail, HVDS); reconductor with a bigger size; adjust the DT tap or substation OLTC; **shunt capacitors** on the feeder; balance phase loads; repair joints; bifurcate the feeder; use AVRs (automatic voltage regulators) on long rural 11 kV feeders.

### Q9.7 How do you handle a meter-tampering or theft case?
**A:** (1) **Inspect with a team**: carry authorisation and, ideally, a witness or police help if needed. (2) **Document everything**: photographs and video, seal condition, the tampering method (bypass or hooking, neutral removal, magnet, reversed CT, shunted CT secondary, opened meter, slowed disc), meter readings, and the **connected-load survey**. (3) **Prepare the inspection report and seizure memo** on the spot, signed by the consumer or their representative, with a copy given to them; seize the meter and evidence in sealed condition for lab testing. (4) **Assessment**: provisional and final assessment under the **Electricity Act 2003**: **Section 135** (theft of electricity, which includes tampering, hooking and bypass), **Section 138** (interference with meters or works), and **Section 126** (unauthorised use, assessed by the assessing officer); per the MSERC Supply Code procedure. (5) **Disconnection** where the Act or Code permits, an FIR for theft, and hearing of the consumer's objections. Remain professional and follow the procedure strictly: a case lost on procedure costs the utility.
*Likely follow-up:* How do you prevent theft in the long term? AB cable, smart prepaid meters with tamper alerts, meters on poles or in sealed boxes outside premises, DT-wise energy audit, and community awareness.

### Q9.8 Describe a safe line clear / permit to work procedure.
**A:** (1) **Request** a line clear (LC) or permit to work (PTW) from the authorised person or controlling substation, specifying the section, purpose and time. (2) **Isolate**: open the breaker, then the isolators or AB switch at **all** possible feeding points, including back-feed from other feeders, DTs and generators or rooftop solar. **Lock and tag** them (LOTO, "Men at Work" boards). (3) **Test for dead** with a voltage detector (discharge rod or HV tester) at the work site; never assume. (4) **Discharge and earth**: apply **portable earths** (earthing sets) **on both sides of the work location**, connecting to earth first and then to the conductors (removal in reverse). (5) Issue the **written permit**, brief the gang on its limits, and give PPE (helmet, insulated gloves, safety belt/harness, shoes). (6) On completion: count the men and tools, remove the earths, have all personnel sign off, **return the permit** formally; only then is the line re-energised by the controlling authority. **Never** work on a line cleared verbally or by phone without confirmation, and never re-energise on a "time-based" assumption.
*Likely follow-up:* Why earth on both sides? Protection from back-feed, induced voltage from parallel lines, accidental energisation and lightning, so the work zone stays at earth potential (equipotential zone).

### Q9.9 What first aid do you give for an electric shock?
**A:** (1) **Do not touch** the victim while they are in contact with the supply. **Switch off** the supply or pull the plug. If that is impossible, push them away using dry wood, a dry rope or other insulating material while standing on dry insulation. For HV, do not approach until the line is confirmed isolated. (2) Call for help and an **ambulance (108)**. (3) Check **response and breathing**. If they are not breathing normally, start **CPR**: 30 chest compressions (hard and fast, about 100-120/min, about 5 cm deep) followed by 2 rescue breaths; use an AED if available. (4) If breathing, place them in the **recovery position**, keep them warm and monitor. (5) Cover **burns** (at the entry and exit points) with clean, dry dressings; do not apply grease. (6) Even if they seem fine, send them to hospital: shock can cause delayed heart rhythm problems and internal burns.

### Q9.10 How do you carry out a load survey and phase balancing of a DT?
**A:** At peak hours, measure the current in R, Y, B and N with a tong tester, plus the voltages. Compare the load with the DT rating: on a 415 V base, FLC ≈ 1.39 A per kVA (about 139 A per phase for 100 kVA). If imbalance is significant (high neutral current, one phase much higher), **shift single-phase consumers** from the heavily loaded phase to the lightly loaded one at the poles. If total load is near or above the rating, propose augmentation (higher-kVA DT) or an additional DT to split the load.

### Q9.11 What earthing is done at a DT and on poles, and why?
**A:** At a DT: typically separate earth pits for the **LV neutral**, the **body/tank and structure**, and the **LA**. Pits and conductors follow IS 3043 and utility norms (GI pipe or plate, or chemical earth; GI or copper strips). Purpose: to provide a low-resistance path for fault current so protection operates, to limit touch and step voltages, to stabilise the neutral, and to drain surges. Metal poles and stays and every 4th-5th pole of an LT line (neutral re-earthing) are also earthed **(verify the interval with utility practice)**. Earth pits are tested every year, ideally in the **dry season**, when resistance is highest.

### Q9.12 A consumer complains of a shock from a metal water tap or appliance body. What do you check?
**A:** Likely causes: earth leakage from faulty appliance insulation with **no proper earthing** in the house; a **neutral fault** (high neutral-to-earth voltage); or a service-line leakage. Check: earth continuity and earth-pit resistance; neutral-earth voltage; IR of the wiring; the service cable and meter connections. Advise installing an **RCCB (30 mA)**. If the source is on the utility side (a neutral or service-line fault), rectify it immediately.

### Q9.13 How would you restore supply after an 11 kV feeder trips?
**A:** Note the relay indications (O/C or E/F, which phase) and the time. If the trip is not on a severe fault and the utility's practice allows, try **one test charge** after a short interval. If it trips again, **sectionalise**: open the AB switches along the feeder and charge section by section to isolate the faulty segment. Restore the healthy sections and patrol the faulty section (look for a broken insulator, tree contact, a snapped jumper, a failed DT or LA). Fix it under LC/PTW and then restore. An E/F trip with a likely conductor on the ground: **patrol before re-charging** if public safety is at risk.

### Q9.14 What problems in Garo Hills specifically affect distribution reliability?
**A:** *(Answer from your own MeECL Tura experience; this is a scaffold.)* Long radial 11 kV and LT feeders across hilly, forested terrain → frequent **tree and bamboo faults**, difficult patrol access, and tail-end low voltage. **Heavy monsoon and lightning** → LA and insulator failures and DT failures. Landslides and leaning poles. Theft by hooking in some pockets → overloaded DTs. Remedies: vegetation-clearance drives, AB cable, LA and earthing maintenance before the monsoon, sectionalisers, additional DTs (HVDS), and smart metering.

---

## 10. Numerical One-Liners (all results checked in Python)

### N1. Single-phase power: 230 V, 10 A, PF 0.8?
**A:** P = V × I × cos φ = 230 × 10 × 0.8 = **1840 W = 1.84 kW**. (S = 2.3 kVA.)

### N2. Three-phase power: 415 V line, 20 A line, PF 0.85?
**A:** P = √3 × 415 × 20 × 0.85 = **12,220 W ≈ 12.2 kW** (√3 × 415 ≈ 718.8; × 20 = 14,376 VA; × 0.85 = 12,220 W).

### N3. Units consumed: a 1.5 kW AC runs 6 h/day for 30 days. Units and bill at ₹6/unit?
**A:** Energy = 1.5 × 6 × 30 = **270 kWh (units)**; bill = 270 × 6 = **₹1,620** (energy charge only).

### N4. Full-load currents of a 100 kVA, 11 kV/433 V transformer?
**A:** I = kVA × 1000 / (√3 × V). HV: 100,000 / (√3 × 11,000) = **5.25 A**. LV: 100,000 / (√3 × 433) = **133.3 A** (139 A on a 415 V base). Shortcut: LV ≈ **1.39 A per kVA** at 415 V; HV at 11 kV ≈ **0.0525 A per kVA** (1 MVA → 52.5 A).

### N5. Synchronous speed of a 4-pole, 50 Hz motor? 6-pole? 2-pole?
**A:** Ns = 120f/P = 120 × 50 / 4 = **1500 rpm**; 6-pole = **1000 rpm**; 2-pole = **3000 rpm**.

### N6. A 4-pole, 50 Hz induction motor runs at 1440 rpm. Slip and rotor frequency?
**A:** s = (1500 − 1440)/1500 = 60/1500 = **0.04 = 4%**; rotor frequency = s × f = 0.04 × 50 = **2 Hz**.

### N7. Capacitor kVAR to raise the PF of a 100 kW load from 0.7 to 0.95?
**A:** Q = P (tan φ1 − tan φ2). tan(cos⁻¹0.7) = 1.020 and tan(cos⁻¹0.95) = 0.329, so Q = 100 × (1.020 − 0.329) = **≈ 69.2 kVAR** (a standard 70 or 75 kVAR bank in practice).

### N8. The supply is 230 V RMS. Peak and average (half-cycle) values?
**A:** Vm = 230 × √2 = **325.3 V**. Vavg = 0.637 × Vm = 2Vm/π = **207.1 V**. Check: form factor = 230/207.1 = 1.11.

### N9. A 100 kVA transformer has iron loss 500 W and full-load copper loss 1500 W. At what load is efficiency maximum? What is its full-load efficiency at unity PF?
**A:** Maximum efficiency where Cu loss = iron loss: x = √(500/1500) = 0.577, i.e. at **≈ 57.7 kVA (57.7% load)**. Full-load efficiency at UPF = 100 / (100 + 0.5 + 1.5) = **98.04%**. Maximum efficiency at UPF = 57.7 / (57.7 + 0.5 + 0.5) = **98.30%**.

### N10. Hydro: flow 10 m³/s, net head 100 m, overall efficiency 90%. Power output?
**A:** P = ρgQHη = 1000 × 9.81 × 10 × 100 × 0.9 = 8,829,000 W ≈ **8.83 MW**. Quick mental form: P (kW) ≈ 9.81 × Q × H × η = 9.81 × 10 × 100 × 0.9 = 8,829 kW.

### Extra quick checks (also verified)
- Phase voltage of a 415 V star system: 415/√3 = **239.6 V** (400/√3 = 230.9 V).
- Hot resistance of a 60 W, 230 V lamp: R = V²/P = 230²/60 = **881.7 Ω**.
- IDMT standard-inverse relay at PSM 10, TMS 1: t = 0.14/(10^0.02 − 1) = **2.97 s ≈ 3 s**; at PSM 5, TMS 0.1: **0.43 s**.
- AT&C: input 100 MU, billed 80 MU, collection 90% → 1 − 0.8 × 0.9 = **28%**.
- Alternator poles for 375 rpm at 50 Hz: P = 120 × 50/375 = **16 poles**.

---

## Items marked (verify): check before the interview
1. The exact current grid frequency band (Q1.13).
2. Transformer oil BDV figures (Q2.15).
3. Umiam Stage II capacity (18 MW), and Ganol's owner/operator and how many units run (Q4.7). The 322 MW MePGCL total for stations of 25 MW and above, and the per-plant figures, come from CEA's operating hydro list (Oct 2025).
4. Hydro seasonality and the state's dependence on purchased power in winter: inferred, not sourced (Q4.6).
5. Whether the board expects the nominal LT voltage as 230/400 V or 240/415 V (Q5.1).
6. Voltage-variation limits (±6%, +6/−9%, +10/−12.5%) as stated in the current CEA 2023 Safety Regulations and the MSERC Supply Code (Q5.2).
7. CEA ground-clearance table values (Q5.6).
8. The rating of the Biswanath Chariali–Agra HVDC link (Q5.13).
9. Minimum insulation-resistance criteria (Q7.1) and earth-resistance guide values (Q7.7, Q9.11; IS 3043 and utility norms).
10. Lead-acid specific gravity range (Q8.6).
11. MeECL/MSERC norms for DT replacement time, fuse sizing and neutral re-earthing interval (Q6.13, Q9.1, Q9.11).
