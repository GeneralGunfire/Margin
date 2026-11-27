---
title: Stoichiometry and limiting reagents
subject: physical-sciences
topic: Quantitative aspects of chemical change
part: Chemistry
term: 3
subtopic: Stoichiometry, limiting reagents, yield and formulae
order: 1021
pages: []
---

> **What you'll learn:** how to use the **3-step stoichiometry bridge** (convert to moles $\to$ mole ratio $\to$ target quantity), how to prove mathematically which reactant is the **limiting reagent**, and how to calculate the exact mass/moles of **excess reactant left over**.
>
> **Prerequisites:** balancing chemical equations and converting mass, STP gas volume, or solution concentration into moles.
>
> **Why this matters:** whenever an exam gives starting amounts for **TWO** reactants instead of one, one reactant runs out first and stops the reaction! Calculating products using the excess reactant instead of the limiting reagent is the #1 Paper 2 mark-loser.

## The idea in plain language

Think of making cheese sandwiches: each sandwich needs **2 slices of bread** $+$ **1 slice of cheese**. Suppose your fridge has **10 slices of bread** and **3 slices of cheese**:
- How many sandwiches can you make? **3 sandwiches!** (Not 5!)
- Why? Even though you have *more* slices of bread (10 vs 3), you run out of **cheese** after 3 sandwiches!
- Cheese is the **limiting reagent** (controls how much product forms), and **4 slices of bread are left over in excess** ($10 - 6 = 4$)!

Chemical reactions obey the exact same rule, except the recipe numbers (the coefficients in a **balanced equation**) count **MOLES**, **NEVER GRAMS**! You can have $100\ \text{g}$ of heavy lead nitrate and only $10\ \text{g}$ of light hydrochloric acid — and yet the $100\ \text{g}$ reactant might still run out first if its molar mass is huge!

### Definition to memorise

```definition
title: Limiting reagent (limiting reactant)
The limiting reagent is the reactant that is completely consumed first during a chemical reaction, thereby determining the maximum amount of product that can be formed.
```

## The universal stoichiometry bridge

```diagram
name: stoich-roadmap-visual
```

Never try to go directly from grams of A to grams of B, or $\text{dm}^3$ of solution A to $\text{dm}^3$ of gas B — **always cross the central mole-ratio bridge!**

```steps
title: Solving ANY limiting-reagent problem without confusion
step: Write and verify the **balanced chemical equation**.
step: Convert BOTH given reactant quantities into **moles** ($n_{\text{available}}$).
step: Test which reactant runs out first (choose ONE clean method):
- **Need-vs-Have test:** take reactant A's moles and multiply by the equation ratio to find how many moles of B are *needed* to react completely with all of A. Compare $n_{\text{needed}}(B)$ to $n_{\text{available}}(B)$!
- **Divide-by-coefficient test:** divide each reactant's available moles by its coefficient in the balanced equation. The **smaller value** is the limiting reagent!
step: Use **ONLY the limiting reagent's moles** across the balanced mole ratio to calculate products formed AND moles of excess reactant actually used.
step: Excess remaining $= n_{\text{available}} - n_{\text{used}}$ (convert back to grams or $\text{dm}^3$ if asked).
```

## Worked examples

### Example 1 (basic single-reactant stoichiometry): acid + carbonate

Excess hydrochloric acid reacts completely with $5{,}30\ \text{g}$ of sodium carbonate ($\text{Na}_2\text{CO}_3$, $M = 106\ \text{g·mol}^{-1}$) according to:
$$\text{Na}_2\text{CO}_3(s) + 2\,\text{HCl}(aq) \longrightarrow 2\,\text{NaCl}(aq) + \text{H}_2\text{O}(\ell) + \text{CO}_2(g)$$
Calculate the volume of $\text{CO}_2(g)$ produced at **STP**.

```worked
title: Example 1 (Mass -> Moles -> Ratio -> STP Gas Volume)
Given: $m(\text{Na}_2\text{CO}_3) = 5{,}30\ \text{g}$, $M = 106\ \text{g·mol}^{-1}$, $V_m = 22{,}4\ \text{dm}^3\cdot\text{mol}^{-1}$, excess $\text{HCl}$
Unknown: $V(\text{CO}_2)$ at STP
Equation: $n = \dfrac{m}{M}$, mole ratio $1 : 1$, $V = n V_m$
Substitution: $n(\text{Na}_2\text{CO}_3) = \dfrac{5{,}30}{106} = 0{,}050\ \text{mol}$
Substitution: Ratio $\text{Na}_2\text{CO}_3 : \text{CO}_2 = 1 : 1 \implies n(\text{CO}_2) = 0{,}050\ \text{mol}$
Substitution: $V(\text{CO}_2) = (0{,}050)(22{,}4) = 1{,}12\ \text{dm}^3$
Answer: $1{,}12\ \text{dm}^3$ of $\text{CO}_2$ gas at STP.
```

### Example 2 (full exam limiting-reagent + excess calculation)

In the reaction:
$$2\,\text{Al}(s) + 3\,\text{Cl}_2(g) \longrightarrow 2\,\text{AlCl}_3(s)$$
$10{,}8\ \text{g}$ of aluminium ($M = 27\ \text{g·mol}^{-1}$) is reacted with $11{,}2\ \text{dm}^3$ of chlorine gas ($M = 71\ \text{g·mol}^{-1}$) at **STP**.
(a) Determine by calculation which reactant is the limiting reagent.
(b) Calculate the mass of $\text{AlCl}_3$ ($M = 133{,}5\ \text{g·mol}^{-1}$) formed.
(c) Calculate the mass of the excess reactant remaining when the reaction stops.

```steps
title: Complete limiting reagent + excess solution
step: **Convert both starting reactants to moles:**
- $n(\text{Al})_{\text{avail}} = \dfrac{10{,}8}{27} = 0{,}400\ \text{mol}$
- $n(\text{Cl}_2)_{\text{avail}} = \dfrac{11{,}2}{22{,}4} = 0{,}500\ \text{mol}$
step: **Identify limiting reagent (Need-vs-Have):**
From the balanced equation, ratio $\text{Al} : \text{Cl}_2 = 2 : 3$.
To use up all $0{,}400\ \text{mol}$ of $\text{Al}$, we **need**: $n(\text{Cl}_2)_{\text{needed}} = 0{,}400 \times \dfrac{3}{2} = 0{,}600\ \text{mol}$.
We only **have** $0{,}500\ \text{mol}$ of $\text{Cl}_2$ ($< 0{,}600\ \text{mol}$)!
Therefore **$\text{Cl}_2$ runs out first — $\text{Cl}_2$ is the limiting reagent** (and $\text{Al}$ is in excess!).
step: **Calculate mass of $\text{AlCl}_3$ from the LIMITING reagent ($\text{Cl}_2$):**
Ratio $\text{Cl}_2 : \text{AlCl}_3 = 3 : 2 \implies n(\text{AlCl}_3) = 0{,}500 \times \dfrac{2}{3} = 0{,}3333\ \text{mol}$.
$m(\text{AlCl}_3) = (0{,}3333)(133{,}5) = 44{,}5\ \text{g}$.
step: **Find excess $\text{Al}$ remaining:**
Moles of $\text{Al}$ actually **used** with $0{,}500\ \text{mol}\ \text{Cl}_2$: $n(\text{Al})_{\text{used}} = 0{,}500 \times \dfrac{2}{3} = 0{,}3333\ \text{mol}$.
Moles of $\text{Al}$ **left over**: $n(\text{Al})_{\text{excess}} = 0{,}400 - 0{,}3333 = 0{,}0667\ \text{mol}$.
Mass of excess $\text{Al}$: $m = (0{,}0667)(27) = 1{,}80\ \text{g}$.
```

```tryit
title: Gas volume shortcut at constant T and p!
prompt: Hydrogen burns in oxygen: $2\,\text{H}_2(g) + \text{O}_2(g) \longrightarrow 2\,\text{H}_2\text{O}(g)$. Suppose $60\ \text{cm}^3$ of $\text{H}_2$ and $40\ \text{cm}^3$ of $\text{O}_2$ react at the same temperature and pressure. Which gas is in excess, and what is the **total gas volume** afterwards?
hint: By Avogadro's Law, at the same $T$ and $p$, **gas volume ratios equal mole ratios** ($2 : 1 : 2$)!
answer: **$\text{O}_2$ is in excess!** $60\ \text{cm}^3$ of $\text{H}_2$ needs only $30\ \text{cm}^3$ of $\text{O}_2$ (leaving **$10\ \text{cm}^3$ of $\text{O}_2$** unreacted), and produces **$60\ \text{cm}^3$ of $\text{H}_2\text{O}(g)$**. Total gas volume afterwards $= 60 + 10 = \mathbf{70\ \text{cm}^3}$.
```

> **Common mistakes**
>
> - Choosing the reactant with the smaller mass in grams as the limiting reagent! Always convert to **moles** AND account for the balanced **mole ratio**.
> - Multiplying by the mole ratio upside down: always put **what you want on top, what you have on the bottom** ($\text{want}/\text{have}$).
> - Calculating excess remaining by subtracting $n(\text{Cl}_2) - n(\text{Al})$ directly ($0{,}500 - 0{,}400$)! Always subtract **moles of Al available minus moles of Al used**!

## Practice

```questions
Q: Zinc reacts with dilute hydrochloric acid: $\text{Zn}(s) + 2\,\text{HCl}(aq) \longrightarrow \text{ZnCl}_2(aq) + \text{H}_2(g)$. If $3{,}25\ \text{g}$ of $\text{Zn}$ ($M = 65\ \text{g·mol}^{-1}$) reacts with $80\ \text{cm}^3$ of $1{,}0\ \text{mol·dm}^{-3}\ \text{HCl}$, determine (a) the limiting reagent and (b) the volume of $\text{H}_2$ formed at STP.
A: (a) $n(\text{Zn}) = \dfrac{3{,}25}{65} = 0{,}050\ \text{mol}$; $n(\text{HCl}) = (1{,}0)(0{,}080) = 0{,}080\ \text{mol}$.
$0{,}050\ \text{mol}\ \text{Zn}$ needs $2 \times 0{,}050 = 0{,}100\ \text{mol}\ \text{HCl}$, but only $0{,}080\ \text{mol}$ is available $\implies$ **$\text{HCl}$ is limiting**.
(b) Ratio $\text{HCl} : \text{H}_2 = 2 : 1 \implies n(\text{H}_2) = \dfrac{0{,}080}{2} = 0{,}040\ \text{mol} \implies V(\text{H}_2) = 0{,}040 \times 22{,}4 = 0{,}896\ \text{dm}^3$.
---
Q: Ammonia burns in oxygen: $4\,\text{NH}_3(g) + 5\,\text{O}_2(g) \longrightarrow 4\,\text{NO}(g) + 6\,\text{H}_2\text{O}(g)$. What mass of $\text{NO}$ ($M = 30\ \text{g·mol}^{-1}$) forms when $34\ \text{g}$ of $\text{NH}_3$ ($M = 17$) reacts with $64\ \text{g}$ of $\text{O}_2$ ($M = 32$)?
A: $n(\text{NH}_3) = \dfrac{34}{17} = 2{,}0\ \text{mol}$; $n(\text{O}_2) = \dfrac{64}{32} = 2{,}0\ \text{mol}$.
Divide by coefficients: $\text{NH}_3 \to 2{,}0 / 4 = 0{,}50$; $\text{O}_2 \to 2{,}0 / 5 = 0{,}40$ (smaller!).
**$\text{O}_2$ is limiting!** $n(\text{NO}) = 2{,}0 \times \dfrac{4}{5} = 1{,}6\ \text{mol} \implies m(\text{NO}) = 1{,}6 \times 30 = 48\ \text{g}$.
```

## Further help

- Siyavula Physical Sciences Grade 11, [8.3 Stoichiometric calculations](https://www.siyavula.com/read/za/physical-sciences/grade-11/quantitative-aspects-of-chemical-change/08-quantitative-aspects-of-chemical-change-03).
