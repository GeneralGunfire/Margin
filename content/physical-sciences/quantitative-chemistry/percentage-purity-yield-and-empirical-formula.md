---
title: Percentage purity, percentage yield and empirical formula
subject: physical-sciences
topic: Quantitative aspects of chemical change
part: Chemistry
term: 3
subtopic: Stoichiometry, limiting reagents, yield and formulae
order: 1022
pages: []
---

> **What you'll learn:** how to handle real-world messy samples where reactants are **impure** (% purity) or reactions produce less than the theoretical maximum (% yield), and how to determine **empirical** and **molecular** formulas (plus waters of crystallisation) from percentage composition.
>
> **Prerequisites:** moles ($n = m/M$) and basic stoichiometry.
>
> **Why this matters:** almost every Grade 11 Paper 2 stoichiometry question finishes with a percentage purity or percentage yield twist, and empirical-formula tables appear regularly in Section B.

## The idea in plain language

Real chemistry never happens with 100% pure crystals and 100% perfect factories:
- **Percentage purity (goes BEFORE the reaction — on a REACTANT):** When you dig limestone ($\text{CaCO}_3$) out of a quarry, part of the rock is inert sand or rock that does **not** react! Only the **pure** portion undergoes the chemical reaction.
- **Percentage yield (goes AFTER the reaction — on a PRODUCT):** Even with pure reactants, side reactions or losses during filtering mean you collect *less* actual product than your balanced equation predicted (**theoretical yield**).

### Definitions and formulas to memorise

```formula
title: Percentage composition, purity, yield, and empirical-to-molecular multiplier
formula: \%\text{ Purity} = \frac{m_{\text{pure reactant}}}{m_{\text{impure sample}}} \times 100\%
formula: \%\text{ Yield} = \frac{m_{\text{actual yield}}}{m_{\text{theoretical yield}}} \times 100\%
formula: \text{Multiplier } k = \frac{M_{\text{molecular}}}{M_{\text{empirical}}}
m_{\text{pure}} | actual mass of the reacting substance inside the sample | g | scalar
m_{\text{impure}} | total mass of the crude sample (pure + impurities) | g | scalar
m_{\text{actual}} | measured mass (or moles) of product actually collected | g | scalar
m_{\text{theoretical}} | maximum possible mass predicted by stoichiometry | g | scalar
use: ALWAYS remember: % Purity compares PURE/IMPURE (<= 100%) on a REACTANT; % Yield compares ACTUAL/THEORETICAL (<= 100%) on a PRODUCT!
```

```definition
title: Empirical formula vs Molecular formula
The **empirical formula** is the simplest whole-number ratio of atoms of each element in a compound. The **molecular formula** shows the exact number of atoms of each element in one molecule.
```

## Worked examples

### Example 1 (percentage purity of an impure limestone sample)

A $12{,}5\ \text{g}$ sample of **impure** calcium carbonate ($\text{CaCO}_3$, $M = 100\ \text{g·mol}^{-1}$) reacts completely with excess hydrochloric acid, releasing $2{,}24\ \text{dm}^3$ of $\text{CO}_2$ gas at **STP**:
$$\text{CaCO}_3(s) + 2\,\text{HCl}(aq) \longrightarrow \text{CaCl}_2(aq) + \text{H}_2\text{O}(\ell) + \text{CO}_2(g)$$
Calculate the **percentage purity** of the calcium carbonate sample.

```worked
title: Example 1 (% Purity)
Given: $m_{\text{impure}} = 12{,}5\ \text{g}$, $V(\text{CO}_2) = 2{,}24\ \text{dm}^3$ at STP
Unknown: $\%$ purity of $\text{CaCO}_3$
Equation: $n = \dfrac{V}{V_m}$, $m = nM$, $\%\text{ Purity} = \dfrac{m_{\text{pure}}}{m_{\text{impure}}} \times 100\%$
Substitution: $n(\text{CO}_2) = \dfrac{2{,}24}{22{,}4} = 0{,}100\ \text{mol}$
Substitution: Ratio $\text{CO}_2 : \text{CaCO}_3 = 1 : 1 \implies n(\text{CaCO}_3)_{\text{pure}} = 0{,}100\ \text{mol}$
Substitution: $m_{\text{pure}}(\text{CaCO}_3) = (0{,}100)(100) = 10{,}0\ \text{g}$
Substitution: $\%\text{ Purity} = \dfrac{10{,}0}{12{,}5} \times 100\% = 80{,}0\%$
Answer: The sample is $80{,}0\%$ pure $\text{CaCO}_3$ (the other $2{,}5\ \text{g}$ is unreactive impurity).
```

### Example 2 (percentage yield): synthesis reaction

When $14{,}0\ \text{g}$ of nitrogen gas ($\text{N}_2$, $M = 28\ \text{g·mol}^{-1}$) reacts with excess hydrogen ($\text{N}_2 + 3\text{H}_2 \longrightarrow 2\text{NH}_3$), only $13{,}6\ \text{g}$ of ammonia ($\text{NH}_3$, $M = 17\ \text{g·mol}^{-1}$) is actually collected. Calculate the **percentage yield**.

```steps
title: Calculating percentage yield
step: Find moles of pure limiting reactant: $n(\text{N}_2) = \dfrac{14{,}0}{28} = 0{,}500\ \text{mol}$.
step: Use stoichiometry to calculate **theoretical yield** of $\text{NH}_3$:
Ratio $1 : 2 \implies n(\text{NH}_3)_{\text{theor}} = 2 \times 0{,}500 = 1{,}00\ \text{mol} \implies m_{\text{theor}} = 1{,}00 \times 17 = 17{,}0\ \text{g}$.
step: Compare actual collected mass ($13{,}6\ \text{g}$) to theoretical maximum ($17{,}0\ \text{g}$):
$\%\text{ Yield} = \dfrac{13{,}6}{17{,}0} \times 100\% = 80{,}0\%$.
```

### Example 3 (empirical & molecular formula — the clean 4-step table!)

An organic compound contains $40{,}0\%\ \text{C}$, $6{,}67\%\ \text{H}$, and $53{,}33\%\ \text{O}$ by mass. Its molar mass is $180\ \text{g·mol}^{-1}$. Find its **empirical formula** and **molecular formula**.

Assume **$100\ \text{g}$** of compound so percentages turn directly into grams:

| Step | Carbon ($\text{C}$) | Hydrogen ($\text{H}$) | Oxygen ($\text{O}$) |
| --- | --- | --- | --- |
| 1. Mass in $100\ \text{g}$ | $40{,}0\ \text{g}$ | $6{,}67\ \text{g}$ | $53{,}33\ \text{g}$ |
| 2. Divide by $A_r$ ($n = m/M$) | $\dfrac{40{,}0}{12} = 3{,}333$ | $\dfrac{6{,}67}{1} = 6{,}67$ | $\dfrac{53{,}33}{16} = 3{,}333$ |
| 3. Divide all by smallest ($3{,}333$) | $\dfrac{3{,}333}{3{,}333} = \mathbf{1}$ | $\dfrac{6{,}67}{3{,}333} = \mathbf{2}$ | $\dfrac{3{,}333}{3{,}333} = \mathbf{1}$ |

- **Empirical formula:** $\text{CH}_2\text{O}$ (empirical formula mass $= 12 + 2(1) + 16 = 30\ \text{g·mol}^{-1}$).
- **Multiplier:** $k = \dfrac{180}{30} = 6$.
- **Molecular formula:** $(\text{CH}_2\text{O})_6 = \mathbf{\text{C}_6\text{H}_{12}\text{O}_6}$ (glucose!).

> **Pro tip for step 3:** if dividing by the smallest number gives a `.5`, `.33`, or `.25` decimal (like $1 : 1{,}5$), **do NOT round $1{,}5$ to $2$!** Multiply ALL ratios by $2$ (turning $1 : 1{,}5$ into $2 : 3$)!

```tryit
title: Hydrated salt check (water of crystallisation)
prompt: When $4{,}92\ \text{g}$ of hydrated magnesium sulfate ($\text{MgSO}_4 \cdot x\text{H}_2\text{O}$) is heated strongly until all water evaporates, $2{,}40\ \text{g}$ of anhydrous $\text{MgSO}_4$ ($M = 120\ \text{g·mol}^{-1}$) remains. Find $x$.
hint: Subtract to find mass of water driven off, then compare $n(\text{MgSO}_4) : n(\text{H}_2\text{O})$!
answer: Mass of $\text{H}_2\text{O}$ lost $= 4{,}92 - 2{,}40 = 2{,}52\ \text{g}$.
$n(\text{MgSO}_4) = \dfrac{2{,}40}{120} = 0{,}020\ \text{mol}$; $n(\text{H}_2\text{O}) = \dfrac{2{,}52}{18} = 0{,}140\ \text{mol}$.
Ratio $= \dfrac{0{,}140}{0{,}020} = \mathbf{7} \implies \text{MgSO}_4 \cdot 7\text{H}_2\text{O}$!
```

> **Common mistakes**
>
> - Dividing $m_{\text{impure}}$ by $M$ first and expecting purity from that! You **cannot** use $m_{\text{impure}}$ in stoichiometry directly — always work backwards from the *product* formed to find $m_{\text{pure}}$, then divide by $m_{\text{impure}}$!
> - Rounding $1{,}5$ or $1{,}33$ in an empirical formula ratio! Multiply the whole row by $2$ (for $,5$) or $3$ (for $,33$ / $,67$).
> - Getting a percentage purity or yield **over $100\%$** (a sure sign your fraction is upside down!).

## Practice

```questions
Q: Find the empirical formula of an iron oxide containing $70{,}0\%\ \text{Fe}$ ($M = 56$) and $30{,}0\%\ \text{O}$ ($M = 16$).
A: In $100\ \text{g}$: $n(\text{Fe}) = \dfrac{70{,}0}{56} = 1{,}25\ \text{mol}$; $n(\text{O}) = \dfrac{30{,}0}{16} = 1{,}875\ \text{mol}$.
Divide by $1{,}25$: $\text{Fe} = 1$, $\text{O} = 1{,}5$.
Multiply both by $2$: **$\text{Fe}_2\text{O}_3$**.
---
Q: A $5{,}0\ \text{g}$ piece of impure zinc ($M = 65\ \text{g·mol}^{-1}$) reacts with excess $\text{HCl}$ ($\text{Zn} + 2\text{HCl} \to \text{ZnCl}_2 + \text{H}_2$), generating $1{,}344\ \text{dm}^3$ of $\text{H}_2$ at STP. Calculate the percentage purity of the zinc.
A: $n(\text{H}_2) = \dfrac{1{,}344}{22{,}4} = 0{,}060\ \text{mol} \implies n(\text{Zn})_{\text{pure}} = 0{,}060\ \text{mol}$.
$m(\text{Zn})_{\text{pure}} = 0{,}060 \times 65 = 3{,}90\ \text{g}$.
$\%\text{ Purity} = \dfrac{3{,}90}{5{,}0} \times 100\% = 78{,}0\%$.
---
Q: In a reaction where theoretical yield of aspirin is $18{,}0\ \text{g}$, a student achieves a $75\%$ yield. What actual mass of aspirin did the student isolate?
A: $m_{\text{actual}} = 0{,}75 \times 18{,}0 = 13{,}5\ \text{g}$.
```

## Further help

- Siyavula Physical Sciences Grade 11, [8.3 Stoichiometric calculations](https://www.siyavula.com/read/za/physical-sciences/grade-11/quantitative-aspects-of-chemical-change/08-quantitative-aspects-of-chemical-change-03).
