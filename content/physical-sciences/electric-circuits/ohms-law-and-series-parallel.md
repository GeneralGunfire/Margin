---
title: Ohm's law, ohmic vs non-ohmic conductors and resistor networks
subject: physical-sciences
topic: Electric circuits
part: Physics
term: 2
subtopic: Ohm's law and resistor networks
order: 611
pages: []
---

> **What you'll learn:** what Ohm's Law really says (constant temperature!), how to tell ohmic from non-ohmic conductors on a $V$-$I$ graph, how to find equivalent resistance for series and parallel networks, and how to split current and voltage across branches cleanly.
>
> **Prerequisites:** Grade 10 electric circuits (current $I = Q/\Delta t$, potential difference $V = W/Q$, series vs parallel ammeter/voltmeter readings).
>
> **Why this matters:** Grade 11 resistor networks set the foundation directly for Grade 12 internal resistance ($r$) circuits — once you master total resistance, total current, and branch splitting here, circuit puzzles become routine.

## The idea in plain language

Imagine pushing water through pipes with a pump:
- **Potential difference ($V$, volts):** the electrical "pressure difference" pushing charges between two points.
- **Current ($I$, amperes):** how fast charge flows past a point every second.
- **Resistance ($R$, ohms):** how narrow or cluttered the pipe is, resisting the flow.

When you double the battery voltage across an ordinary metal resistor (kept at constant temperature), the current doubles too! That straight-line proportionality ($V \propto I$) is **Ohm's Law**. The slope of the straight line is constant, and that constant ratio is the resistance $R = \dfrac{V}{I}$.

Why does temperature have to stay constant? Because as a filament light bulb heats up, its atoms jiggle faster and collide more often with electrons — **its resistance INCREASES as current rises**, bending the $V$-$I$ graph! So a filament bulb is **non-ohmic**.

### Definitions to memorise

```definition
title: Ohm's Law
The potential difference across a conductor is directly proportional to the current in the conductor at constant temperature.
```

```definition
title: Ohmic vs Non-ohmic conductors
An **ohmic conductor** obeys Ohm's Law (constant resistance $R = V/I$ at constant temperature; straight-line $V$-$I$ graph through the origin). A **non-ohmic conductor** (e.g. a filament bulb or diode) does not obey Ohm's Law because its resistance changes with temperature or voltage.
```

## Formulas

```formula
title: Ohm's Law and combined resistance
formula: R = \frac{V}{I}
formula: R_s = R_1 + R_2 + \dots \qquad\text{and}\qquad \frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \dots
R | electrical resistance | Ω (ohm) | scalar
V | potential difference across the resistor/branch | V (volt) | scalar
I | electric current through the resistor/branch | A (ampere) | scalar
R_s | total equivalent resistance in series (current same; voltage splits) | Ω | scalar
R_p | total equivalent resistance in parallel (voltage same; current splits) | Ω | scalar
use: remember to flip 1/R_p at the end to get R_p! R_p is ALWAYS smaller than the smallest individual branch resistor.
```

### Series vs Parallel cheat-sheet (how voltage and current behave)

| Property | Series resistors | Parallel resistors |
| --- | --- | --- |
| **Current ($I$)** | **Same** everywhere ($I_{\text{tot}} = I_1 = I_2$) | **Splits** across branches ($I_{\text{tot}} = I_1 + I_2$, more current takes the lower-$R$ branch!) |
| **Voltage ($V$)** | **Splits** proportionally ($V_{\text{tot}} = V_1 + V_2$, bigger $R$ gets bigger share) | **Same** across every branch ($V_p = V_1 = V_2$) |
| **Adding one more resistor** | Total $R$ **increases** $\implies$ total $I$ drops | Opens an extra path $\implies$ total $R$ **decreases** $\implies$ total $I$ increases! |

```diagram
name: circuit-ohms-power-explorer
```

Use the interactive circuit explorer above: toggle **Series** vs **Parallel** and adjust $R_1$ and $R_2$ to watch how total current, branch currents, and branch voltages shift immediately!

## Worked examples

### Example 1 (graph gradient trap!): reading $R$ from an $I$-vs-$V$ graph

In an Ohm's Law experiment, a learner plots **current $I$ on the $y$-axis** and **potential difference $V$ on the $x$-axis** and obtains a straight line through $(0; 0)$ and $(6{,}0\ \text{V};\ 1{,}5\ \text{A})$. Calculate the resistance $R$.

**Watch the axes!**
- Gradient $= \dfrac{\Delta y}{\Delta x} = \dfrac{\Delta I}{\Delta V} = \dfrac{1{,}5}{6{,}0} = 0{,}25\ \Omega^{-1}$, which is **$\dfrac{1}{R}$**, NOT $R$!
- Therefore $R = \dfrac{1}{\text{gradient}} = \dfrac{V}{I} = \dfrac{6{,}0}{1{,}5} = 4{,}0\ \Omega$.
Always check which variable is on the vertical axis before assuming $\text{gradient} = R$!

### Example 2 (combination series-parallel circuit — classic Paper 1 layout)

A $12\ \text{V}$ battery (negligible internal resistance) is connected in series with a $2{,}0\ \Omega$ resistor ($R_1$) and a **parallel pair** consisting of $R_2 = 6{,}0\ \Omega$ and $R_3 = 3{,}0\ \Omega$. Calculate:
(a) the total resistance of the circuit,
(b) the total current leaving the battery,
(c) the potential difference across the parallel combination, and
(d) the current in the $3{,}0\ \Omega$ resistor.

```steps
title: Solving combination resistor networks cleanly
step: **Collapse the parallel block first:**
$\dfrac{1}{R_p} = \dfrac{1}{6{,}0} + \dfrac{1}{3{,}0} = \dfrac{1 + 2}{6{,}0} = \dfrac{3}{6{,}0} = \dfrac{1}{2{,}0} \implies R_p = 2{,}0\ \Omega$.
(Sanity check: $2{,}0\ \Omega < 3{,}0\ \Omega$, smaller than the smallest branch!)
step: **Add the series resistor:**
$R_{\text{tot}} = R_1 + R_p = 2{,}0 + 2{,}0 = 4{,}0\ \Omega$.
step: **Find total current from the battery:**
$I_{\text{tot}} = \dfrac{V_{\text{tot}}}{R_{\text{tot}}} = \dfrac{12}{4{,}0} = 3{,}0\ \text{A}$.
step: **Find voltage across the parallel block (two equivalent ways!):**
Using $R_p$: $V_p = I_{\text{tot}} R_p = (3{,}0)(2{,}0) = 6{,}0\ \text{V}$. (Check: $V_1 = I_{\text{tot}} R_1 = (3{,}0)(2{,}0) = 6{,}0\ \text{V}$, and $6{,}0 + 6{,}0 = 12\ \text{V}$!)
step: **Find branch current in $R_3 = 3{,}0\ \Omega$:**
Every parallel branch gets $V_p = 6{,}0\ \text{V}$, so $I_3 = \dfrac{V_p}{R_3} = \dfrac{6{,}0}{3{,}0} = 2{,}0\ \text{A}$.
(Check: $I_2 = \dfrac{6{,}0}{6{,}0} = 1{,}0\ \text{A}$, and $1{,}0 + 2{,}0 = 3{,}0\ \text{A}$ total! The $3\ \Omega$ branch carries twice as much current as the $6\ \Omega$ branch!)
```

```tryit
title: What happens when a switch opens a parallel branch?
prompt: In Example 2 above ($R_1 = 2\ \Omega$ in series with parallel $6\ \Omega$ and $3\ \Omega$), suppose a switch inside the $3{,}0\ \Omega$ branch is **opened** so that branch carries zero current. Does the reading on a voltmeter across the $2{,}0\ \Omega$ resistor **increase, decrease, or remain the same**?
hint: Removing a parallel path increases total resistance. What happens to total current $I_{\text{tot}}$, and then to $V_1 = I_{\text{tot}} R_1$?
answer: **Decreases!** Opening a parallel branch **increases** total circuit resistance (from $4{,}0\ \Omega$ to $2{,}0 + 6{,}0 = 8{,}0\ \Omega$), so total current drops (from $3{,}0\ \text{A}$ to $1{,}5\ \text{A}$). Since $V_1 = I_{\text{tot}} R_1$, the voltage across $R_1$ drops from $6{,}0\ \text{V}$ to $3{,}0\ \text{V}$!
```

> **Common mistakes**
>
> - Calculating $\dfrac{1}{R_p} = \dfrac{1}{6} + \dfrac{1}{3} = \dfrac{1}{2}$ and forgetting the final flip $\implies$ writing $R_p = 0{,}5\ \Omega$ instead of $2{,}0\ \Omega$!
> - Adding $R_1$ and $R_2$ in series BEFORE collapsing the parallel loop they are attached to. Collapse inner parallel branches first, then add series pieces.
> - Thinking adding a parallel resistor *increases* total resistance. Just like opening an extra tollgate lane on a highway, adding a parallel path **decreases** total resistance and **increases** total current from the battery!

## Practice

```questions
Q: A nichrome wire draws $0{,}80\ \text{A}$ when connected across a $6{,}0\ \text{V}$ supply at constant temperature. (a) Calculate its resistance. (b) What current will flow if the voltage is increased to $9{,}0\ \text{V}$ at the same temperature?
A: (a) $R = \dfrac{V}{I} = \dfrac{6{,}0}{0{,}80} = 7{,}5\ \Omega$.
(b) Since the wire is ohmic at constant temperature, $R$ stays $7{,}5\ \Omega$: $I = \dfrac{V}{R} = \dfrac{9{,}0}{7{,}5} = 1{,}2\ \text{A}$.
---
Q: Three resistors of $4{,}0\ \Omega$, $12\ \Omega$, and $6{,}0\ \Omega$ are connected in **parallel** across a $24\ \text{V}$ battery. Calculate (a) the equivalent resistance and (b) the total current from the battery.
A: (a) $\dfrac{1}{R_p} = \dfrac{1}{4{,}0} + \dfrac{1}{12} + \dfrac{1}{6{,}0} = \dfrac{3 + 1 + 2}{12} = \dfrac{6}{12} = \dfrac{1}{2{,}0} \implies R_p = 2{,}0\ \Omega$.
(b) $I_{\text{tot}} = \dfrac{24}{2{,}0} = 12\ \text{A}$ (check branches: $6 + 2 + 4 = 12\ \text{A}$).
---
Q: A $10\ \Omega$ resistor and a $15\ \Omega$ resistor are connected in parallel, and this combination is in series with a $4{,}0\ \Omega$ resistor across a $20\ \text{V}$ supply. Calculate the current through the $10\ \Omega$ resistor.
A: $\dfrac{1}{R_p} = \dfrac{1}{10} + \dfrac{1}{15} = \dfrac{5}{30} = \dfrac{1}{6{,}0} \implies R_p = 6{,}0\ \Omega$.
$R_{\text{tot}} = 4{,}0 + 6{,}0 = 10\ \Omega \implies I_{\text{tot}} = \dfrac{20}{10} = 2{,}0\ \text{A}$.
$V_p = I_{\text{tot}} R_p = (2{,}0)(6{,}0) = 12\ \text{V}$.
$I_{10\,\Omega} = \dfrac{V_p}{10} = \dfrac{12}{10} = 1{,}2\ \text{A}$.
```

## Further help

- Siyavula Physical Sciences Grade 11, [11.2 Ohm's Law](https://www.siyavula.com/read/za/physical-sciences/grade-11/electric-circuits/11-electric-circuits-02).
