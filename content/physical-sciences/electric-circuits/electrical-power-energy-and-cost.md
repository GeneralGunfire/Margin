---
title: Electrical power, energy and the cost of electricity
subject: physical-sciences
topic: Electric circuits
part: Physics
term: 2
subtopic: Electrical power, energy and cost
order: 621
pages: []
---

> **What you'll learn:** the difference between electrical **power** (rate of energy transfer, in watts) and electrical **energy** (total work done, in joules or kilowatt-hours), which power formula to pick when comparing series vs parallel bulbs, and how to calculate municipal electricity bills in rand.
>
> **Prerequisites:** Ohm's Law ($V = IR$) and series/parallel voltage-current rules.
>
> **Why this matters:** Grade 11 Paper 1 exams reliably pair a circuit calculation with bulb-brightness comparison (*"Which bulb glows brighter in series vs parallel?"*) and a municipal $\text{kWh}$ cost calculation.

## The idea in plain language

When current passes through a kettle element or a light bulb, electrical potential energy turns into heat and light. Two closely related quantities measure this:
- **Electrical energy ($W$ or $E$):** the **total amount** of energy transferred (measured in **joules, J** in physics, or **kilowatt-hours, kWh** on your home electricity meter).
- **Electrical power ($P$):** **how fast** energy is transferred per second (measured in **watts, W**, where $1\ \text{W} = 1\ \text{J·s}^{-1}$). A $2\,000\ \text{W}$ kettle boils water twice as fast as a $1\,000\ \text{W}$ kettle because it transfers twice as many joules every second!

### Definitions to memorise

```definition
title: Electrical power (P)
Electrical power is the rate at which electrical energy is converted (or work is done) in an electric circuit: $P = \dfrac{W}{\Delta t}$.
```

```definition
title: Kilowatt-hour (kWh)
One kilowatt-hour is the energy used by an appliance with a power rating of $1\ \text{kW}$ operating continuously for $1\ \text{hour}$ ($1\ \text{kWh} = 3{,}6 \times 10^6\ \text{J}$).
```

## Formulas

```formula
title: Electrical power, energy, and municipal electricity cost
formula: P = \frac{W}{\Delta t} = V I = I^2 R = \frac{V^2}{R}
formula: W = P \Delta t = V I \Delta t = I^2 R \Delta t = \frac{V^2}{R}\Delta t
formula: \text{Cost} = \text{Energy in kWh} \times \text{Tariff per kWh}
P | electrical power | W (watt) or kW ($1\ \text{kW} = 1\,000\ \text{W}$) | scalar
W | electrical energy / work done | J (for W and s) or kWh (for kW and h) | scalar
\Delta t | time duration | s (for joules) or h (for kWh) | scalar
V | potential difference across the component | V | scalar
I | current through the component | A | scalar
R | resistance of the component | Ω | scalar
use: ALWAYS match units! Use kW and hours (h) to get kWh; use W and seconds (s) to get joules (J).
```

### The three power formulas — which one predicts bulb brightness?

All three forms ($P = VI$, $P = I^2 R$, $P = \dfrac{V^2}{R}$) give the exact same answer if you plug in the *specific* $V$ and $I$ for that component. When comparing two resistors **quickly without numbers**:
- **In SERIES (same $I$):** use **$P = I^2 R$**. Since $I$ is identical for both, $P \propto R$ — the **LARGER resistance** dissipates MORE power (glows brighter)!
- **In PARALLEL (same $V$):** use **$P = \dfrac{V^2}{R}$**. Since $V$ is identical across both branches, $P \propto \dfrac{1}{R}$ — the **SMALLER resistance** draws more current and dissipates MORE power (glows brighter)!

```diagram
name: circuit-ohms-power-explorer
```

Test that exact rule in the explorer above: toggle **Series** and make $R_1 > R_2$ (watch $P_1 > P_2$), then switch to **Parallel** and watch $P_2 > P_1$ flip!

## Worked examples

### Example 1 (bulb rating + power formulas): what a kettle label really tells you

An electric kettle is rated **$2\,200\ \text{W};\ 220\ \text{V}$**. Calculate:
(a) the normal operating current,
(b) the resistance of its heating element, and
(c) the energy transferred in joules if it runs for $3{,}0\ \text{minutes}$.

```worked
title: Example 1
Given: $P = 2\,200\ \text{W}$, $V = 220\ \text{V}$, $\Delta t = 3{,}0\ \text{min} = 180\ \text{s}$
Unknown: $I$, $R$, and $W$ (in J)
Equation: $P = VI$, $P = \dfrac{V^2}{R}$ (or $R = \dfrac{V}{I}$), and $W = P\Delta t$
Substitution: (a) $I = \dfrac{P}{V} = \dfrac{2\,200}{220} = 10{,}0\ \text{A}$
Substitution: (b) $R = \dfrac{V}{I} = \dfrac{220}{10{,}0} = 22{,}0\ \Omega$
Substitution: (c) $W = P\Delta t = (2\,200\ \text{W})(180\ \text{s}) = 396\,000\ \text{J} = 3{,}96 \times 10^5\ \text{J}$
Answer: $I = 10{,}0\ \text{A}$, $R = 22{,}0\ \Omega$, $W = 3{,}96 \times 10^5\ \text{J}$.
```

### Example 2 (cost of electricity in kWh): household bill calculation

A $2\,400\ \text{W}$ geyser runs for $2{,}5\ \text{hours}$ each day during a $30\text{-day}$ month. If electricity costs $\text{R}2{,}85\ \text{per kWh}$, calculate the monthly cost of running the geyser.

```steps
title: Clean 3-step kWh cost calculation
step: Convert power from watts to **kilowatts (kW)**:
$P = \dfrac{2\,400\ \text{W}}{1\,000} = 2{,}4\ \text{kW}$.
step: Find total **hours** over the month:
$\Delta t = 2{,}5\ \text{h/day} \times 30\ \text{days} = 75\ \text{h}$.
step: Multiply $\text{kW} \times \text{h}$ to get $\text{kWh}$, then multiply by the tariff:
$E = (2{,}4\ \text{kW})(75\ \text{h}) = 180\ \text{kWh}$.
$\text{Cost} = 180 \times \text{R}2{,}85 = \text{R}513{,}00$.
```

### Example 3 (comparing two bulbs — why a "60 W bulb" isn't always 60 W!)

A $60\ \text{W};\ 220\ \text{V}$ bulb ($R_A$) and a $100\ \text{W};\ 220\ \text{V}$ bulb ($R_B$) are first connected in **parallel** across $220\ \text{V}$, and then reconnected in **series** across $220\ \text{V}$. Which bulb glows brighter in each circuit?

- First find their intrinsic resistances from their $220\ \text{V}$ ratings using $R = \dfrac{V^2}{P}$:
  - $R_{60} = \dfrac{220^2}{60} = 806{,}7\ \Omega$ (**higher** resistance!)
  - $R_{100} = \dfrac{220^2}{100} = 484{,}0\ \Omega$ (**lower** resistance!)
- **In parallel across $220\ \text{V}$:** both receive their full $220\ \text{V}$, so the **$100\ \text{W}$ bulb glows brighter** ($P = V^2/R$ gives $100\ \text{W} > 60\ \text{W}$).
- **In series across $220\ \text{V}$:** both carry the **same current $I$**! By $P = I^2 R$, the bulb with the **higher resistance** dissipates more power — so surprisingly, the **$60\ \text{W}$ bulb glows BRIGHTER** than the $100\ \text{W}$ bulb in series!

```tryit
title: Quick brightness check
prompt: A $4\ \Omega$ resistor and an $8\ \Omega$ resistor are connected across a $12\ \text{V}$ battery. Which resistor dissipates more power if they are wired in (a) series, and (b) parallel?
hint: Same current in series ($P = I^2 R$); same voltage in parallel ($P = V^2 / R$).
answer: (a) **Series:** $8\ \Omega$ dissipates more power (twice as much, since $I$ is the same and $P \propto R$).
(b) **Parallel:** $4\ \Omega$ dissipates more power (twice as much, since $V$ is the same and $P \propto 1/R$).
```

> **Common mistakes**
>
> - Leaving time in minutes or hours when calculating energy in **joules** ($W = P\Delta t$ requires **seconds** for joules!), or leaving power in **watts** instead of **kilowatts** when calculating $\text{kWh}$.
> - Thinking $\text{kWh}$ is a unit of *power* (like $\text{kW}$). $\text{kWh} = \text{power} \times \text{time}$, so it is a unit of **energy**!
> - Assuming a "$100\ \text{W}$ bulb" *always* uses $100\ \text{W}$ even when connected to $110\ \text{V}$ or in series. Power ratings only apply at the rated voltage ($220\ \text{V}$); only **resistance $R$** is the physical property of the filament!

## Practice

```questions
Q: A $12\ \Omega$ heater draws $5{,}0\ \text{A}$ for $4{,}0\ \text{minutes}$. Calculate (a) the power dissipated by the heater and (b) the energy transferred in joules.
A: (a) $P = I^2 R = (5{,}0)^2(12) = 300\ \text{W}$.
(b) $\Delta t = 4{,}0 \times 60 = 240\ \text{s} \implies W = P\Delta t = 300 \times 240 = 72\,000\ \text{J} = 72\ \text{kJ}$.
---
Q: A $1\,500\ \text{W}$ hairdryer is used for $20\ \text{minutes}$ every morning for $14\ \text{days}$. At a rate of $\text{R}2{,}60$ per $\text{kWh}$, calculate the electricity cost.
A: $P = 1{,}5\ \text{kW}$. Time per day $= \dfrac{20}{60} = \dfrac{1}{3}\ \text{h}$, so total time $= 14 \times \dfrac{1}{3} = 4{,}667\ \text{h}$.
Energy $= 1{,}5 \times 4{,}667 = 7{,}0\ \text{kWh}$.
$\text{Cost} = 7{,}0 \times \text{R}2{,}60 = \text{R}18{,}20$.
---
Q: A resistor $R_1 = 6{,}0\ \Omega$ and resistor $R_2 = 12\ \Omega$ are connected in **parallel** across a $12\ \text{V}$ battery. Calculate the power dissipated in each resistor and total power supplied by the battery.
A: $P_1 = \dfrac{V^2}{R_1} = \dfrac{12^2}{6{,}0} = 24\ \text{W}$.
$P_2 = \dfrac{V^2}{R_2} = \dfrac{12^2}{12} = 12\ \text{W}$.
Total power $= 24 + 12 = 36\ \text{W}$. (Check: $R_p = 4{,}0\ \Omega \implies P_{\text{tot}} = \dfrac{12^2}{4{,}0} = 36\ \text{W}$!)
```

## Further help

- Siyavula Physical Sciences Grade 11, [11.3 Power and energy](https://www.siyavula.com/read/za/physical-sciences/grade-11/electric-circuits/11-electric-circuits-03).
