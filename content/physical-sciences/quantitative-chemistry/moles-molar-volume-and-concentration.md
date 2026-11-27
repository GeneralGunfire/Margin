---
title: Moles, molar gas volume and concentration
subject: physical-sciences
topic: Quantitative aspects of chemical change
part: Chemistry
term: 3
subtopic: Moles, molar volume and concentration
order: 1011
pages: []
---

> **What you'll learn:** how the **mole** acts as chemistry's universal counting unit linking mass ($m$), particle count ($N$), STP gas volume ($V$), and solution concentration ($c$), and when you ARE (and are NOT!) allowed to use $V_m = 22{,}4\ \text{dm}^3\cdot\text{mol}^{-1}$.
>
> **Prerequisites:** relative atomic mass ($A_r$), relative molecular/formula mass ($M_r$ / molar mass $M$), and converting $\text{cm}^3$ to $\text{dm}^3$.
>
> **Why this matters:** quantitative stoichiometry makes up ~25–30% of Paper 2! Every stoichiometry problem converts *given data $\to$ moles $\to$ mole ratio $\to$ target unit*, and converting smoothly into moles is step 1.

## The idea in plain language

Suppose a chemistry equation says:
$$\text{N}_2 + 3\,\text{H}_2 \longrightarrow 2\,\text{NH}_3$$
That means **1 molecule** of $\text{N}_2$ reacts with **3 molecules** of $\text{H}_2$. You can't weigh 1 single molecule on a laboratory scale — atoms are unimaginably tiny! So chemists count in giant standardized batches called **moles** (just like a "dozen" means $12$, a **mole** means **$6{,}02 \times 10^{23}$ particles** — Avogadro's constant, $N_A$).

Why that odd number $6{,}02 \times 10^{23}$? Because it makes the mass of $1\ \text{mol}$ of any substance in **grams** numerically equal to its atomic/molecular mass on the periodic table!
- $1\ \text{C}$ atom $= 12\ \text{u}$ $\implies$ $1\ \text{mol}$ of $\text{C}$ atoms $= 12\ \text{g}$.
- $1\ \text{H}_2\text{O}$ molecule $= 18\ \text{u}$ $\implies$ $1\ \text{mol}$ of $\text{H}_2\text{O}$ $= 18\ \text{g}$.

### Definitions to memorise

```definition
title: One mole (mol)
One mole is the amount of substance having the same number of particles as there are atoms in $12\ \text{g}$ of carbon-12 ($N_A = 6{,}02 \times 10^{23}\ \text{mol}^{-1}$).
```

```definition
title: Molar mass (M)
Molar mass is the mass of one mole of a substance measured in $\text{g·mol}^{-1}$.
```

```definition
title: Molar gas volume ($V_m$) at STP
According to Avogadro's Law, one mole of **any** gas occupies the **same volume** at the same temperature and pressure. At **STP** ($T = 273\ \text{K} = 0^\circ\text{C}$ and $p = 101{,}3\ \text{kPa}$), one mole of any gas occupies **$22{,}4\ \text{dm}^3$**.
```

```definition
title: Concentration ($c$)
Concentration (molarity) is the number of moles of solute dissolved per cubic decimetre ($\text{dm}^3$) of solution ($c = \dfrac{n}{V}$).
```

## The four mole formulas (your central toolkit)

```formula
title: Converting any measurement into moles (n)
formula: n = \frac{m}{M} \qquad\qquad n = \frac{N}{N_A}
formula: n = \frac{V}{V_m}\ \text{(gas at STP)} \qquad\qquad c = \frac{n}{V} = \frac{m}{M V}\ \text{(solutions)}
n | amount of substance | mol | scalar
m | mass of substance | g (grams — NOT kg!) | scalar
M | molar mass from Periodic Table | g·mol⁻¹ | scalar
N | number of particles (atoms, molecules, ions) | dimensionless | scalar
N_A | Avogadro's constant ($6{,}02 \times 10^{23}\ \text{mol}^{-1}$) | mol⁻¹ | scalar
V | gas volume (for $V/V_m$) OR solution volume (for $c = n/V$) | dm³ ($1\ \text{dm}^3 = 1\,000\ \text{cm}^3 = 1\ \text{L}$) | scalar
V_m | molar gas volume at STP ($22{,}4\ \text{dm}^3\cdot\text{mol}^{-1}$) | dm³·mol⁻¹ | scalar
c | molar concentration | mol·dm⁻³ | scalar
use: ALWAYS divide cm³ by 1 000 to get dm³ BEFORE using V_m or c = n/V! If a gas is NOT at STP (0 °C, 101,3 kPa), use pV = nRT instead of 22,4!
```

```diagram
name: stoich-roadmap-visual
```

## Worked examples

### Example 1 (mass $\leftrightarrow$ moles $\leftrightarrow$ particles): counting oxygen molecules and atoms

Calculate (a) the number of moles, (b) the number of $\text{O}_2$ **molecules**, and (c) the total number of **oxygen atoms** in $8{,}0\ \text{g}$ of oxygen gas ($\text{O}_2$).

```worked
title: Example 1
Given: $m(\text{O}_2) = 8{,}0\ \text{g}$, $M(\text{O}_2) = 2 \times 16 = 32\ \text{g·mol}^{-1}$, $N_A = 6{,}02 \times 10^{23}\ \text{mol}^{-1}$
Unknown: $n$, $N(\text{O}_2\text{ molecules})$, $N(\text{O atoms})$
Equation: $n = \dfrac{m}{M}$ and $N = n N_A$
Substitution: (a) $n = \dfrac{8{,}0}{32} = 0{,}25\ \text{mol}$
Substitution: (b) $N(\text{O}_2) = 0{,}25 \times 6{,}02 \times 10^{23} = 1{,}51 \times 10^{23}\ \text{molecules}$
Substitution: (c) Each $\text{O}_2$ molecule contains 2 O atoms: $N(\text{O atoms}) = 2 \times 1{,}505 \times 10^{23} = 3{,}01 \times 10^{23}\ \text{atoms}$
Answer: $0{,}25\ \text{mol}$, $1{,}51 \times 10^{23}\ \text{molecules}$, and $3{,}01 \times 10^{23}\ \text{atoms}$.
```

### Example 2 (standard solution preparation): mass for desired concentration

What mass of solid sodium carbonate ($\text{Na}_2\text{CO}_3$, $M = 106\ \text{g·mol}^{-1}$) is needed to prepare $250\ \text{cm}^3$ of a $0{,}40\ \text{mol·dm}^{-3}$ standard solution?

```steps
title: Preparing a standard solution cleanly
step: Convert volume from $\text{cm}^3$ to $\text{dm}^3$: $V = \dfrac{250}{1\,000} = 0{,}250\ \text{dm}^3$.
step: Calculate moles required: $n = cV = (0{,}40\ \text{mol·dm}^{-3})(0{,}250\ \text{dm}^3) = 0{,}10\ \text{mol}$.
step: Convert moles to mass: $m = nM = (0{,}10\ \text{mol})(106\ \text{g·mol}^{-1}) = 10{,}6\ \text{g}$.
(Or directly in one step: $m = cMV = 0{,}40 \times 106 \times 0{,}250 = 10{,}6\ \text{g}$!)
```

### Example 3 (STP gas volume vs concentration): checking STP carefully

A cylinder holds $5{,}60\ \text{dm}^3$ of carbon dioxide gas ($\text{CO}_2$) at **STP**. Calculate (a) the number of moles of $\text{CO}_2$ and (b) the mass of $\text{CO}_2$ ($M = 44\ \text{g·mol}^{-1}$).
- (a) At STP, $n = \dfrac{V}{V_m} = \dfrac{5{,}60}{22{,}4} = 0{,}25\ \text{mol}$.
- (b) $m = nM = 0{,}25 \times 44 = 11{,}0\ \text{g}$.

```tryit
title: Spot the STP trap!
prompt: A learner has $10\ \text{dm}^3$ of $\text{H}_2$ gas at **$25^\circ\text{C}$ and $100\ \text{kPa}$** and divides $10 \div 22{,}4$ to find moles. Why is that wrong, and what should they do instead?
hint: What are the exact temperature and pressure of **STP**?
answer: **STP is $0^\circ\text{C}$ ($273\ \text{K}$) and $101{,}3\ \text{kPa}$!** At $25^\circ\text{C}$ and $100\ \text{kPa}$ the gas is NOT at STP, so you CANNOT use $22{,}4\ \text{dm}^3\cdot\text{mol}^{-1}$ — you must use **$n = \dfrac{pV}{RT}$** (with $p = 100\,000\ \text{Pa}$, $V = 0{,}010\ \text{m}^3$, $T = 298\ \text{K}$)!
```

> **Common mistakes**
>
> - Forgetting to convert $\text{cm}^3 \to \text{dm}^3$ ($\div 1\,000$) when calculating concentration $c = \frac{n}{V}$ or STP gas moles $n = \frac{V}{22{,}4}$.
> - Using $V_m = 22{,}4\ \text{dm}^3\cdot\text{mol}^{-1}$ for **liquids or solids** (like water)! $22{,}4\ \text{dm}^3$ is **ONLY for gases at STP**!
> - Using molar mass $M(\text{O}) = 16$ instead of $M(\text{O}_2) = 32$ for diatomic gases ($\text{H}_2, \text{N}_2, \text{O}_2, \text{F}_2, \text{Cl}_2, \text{Br}_2, \text{I}_2$).
> - Confusing **"number of moles ($n$)"** with **"number of particles ($N$)"**: moles is small numbers like $0{,}25\ \text{mol}$; particles is huge numbers with $\times 10^{23}$!

## Practice

```questions
Q: Calculate the number of moles in (a) $19{,}6\ \text{g}$ of sulfuric acid ($\text{H}_2\text{SO}_4$, $M = 98\ \text{g·mol}^{-1}$) and (b) $336\ \text{cm}^3$ of $\text{NH}_3$ gas at STP.
A: (a) $n = \dfrac{19{,}6}{98} = 0{,}20\ \text{mol}$.
(b) $V = 0{,}336\ \text{dm}^3 \implies n = \dfrac{0{,}336}{22{,}4} = 0{,}015\ \text{mol}$.
---
Q: What is the concentration of **chloride ions ($\text{Cl}^-$)** in a solution made by dissolving $11{,}1\ \text{g}$ of $\text{CaCl}_2$ ($M = 111\ \text{g·mol}^{-1}$) in $500\ \text{cm}^3$ of water?
A: $n(\text{CaCl}_2) = \dfrac{11{,}1}{111} = 0{,}10\ \text{mol}$.
Since $\text{CaCl}_2 \to \text{Ca}^{2+} + 2\,\text{Cl}^-$, $n(\text{Cl}^-) = 2 \times 0{,}10 = 0{,}20\ \text{mol}$.
$V = 0{,}500\ \text{dm}^3 \implies c(\text{Cl}^-) = \dfrac{0{,}20}{0{,}500} = 0{,}40\ \text{mol·dm}^{-3}$.
---
Q: How many **molecules** are in $4{,}48\ \text{dm}^3$ of methane gas ($\text{CH}_4$) at STP?
A: $n = \dfrac{4{,}48}{22{,}4} = 0{,}20\ \text{mol} \implies N = 0{,}20 \times 6{,}02 \times 10^{23} = 1{,}20 \times 10^{23}\ \text{molecules}$.
```

## Further help

- Siyavula Physical Sciences Grade 11, [8.1 Quantitative aspects of chemical change](https://www.siyavula.com/read/za/physical-sciences/grade-11/quantitative-aspects-of-chemical-change/08-quantitative-aspects-of-chemical-change-01) and [8.2 Molar volume and concentration](https://www.siyavula.com/read/za/physical-sciences/grade-11/quantitative-aspects-of-chemical-change/08-quantitative-aspects-of-chemical-change-02).
