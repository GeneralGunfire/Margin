---
title: Bond energy, bond length and enthalpy from bonds
subject: physical-sciences
topic: Atomic combinations and molecular structure
part: Chemistry
term: 2
subtopic: Polarity and bond energy
order: 722
pages: []
---

> **What you'll learn:** what **bond length** and **bond energy** measure, how potential energy changes as two atoms approach to form a bond, the three factors that make a bond shorter and stronger, and how to calculate enthalpy change ($\Delta H$) from bond energies.
>
> **Prerequisites:** covalent bonding (single, double, triple bonds) and reading graphs.
>
> **Why this matters:** bond breaking vs bond forming explains *why* chemical reactions absorb or release heat — linking Topic 7 (Atomic Combinations) directly to Term 3 Energy & Chemical Change!

## The idea in plain language

Imagine two hydrogen atoms floating far apart:
- **Far apart ($r$ large):** they barely feel each other, so potential energy is **zero**.
- **Moving closer:** each nucleus attracts the other atom's electron cloud $\implies$ potential energy **drops** (becomes negative — more stable!).
- **Too close:** the two positively charged nuclei violently repel each other, so potential energy shoots sharply upwards!

Somewhere between "too far" and "too close" sits the **sweet spot (minimum potential energy)**: the atoms settle at their equilibrium separation (**bond length**), trapped in an energy well of depth equal to the **bond energy**!

### Definitions to memorise

```definition
title: Bond length
Bond length is the average distance between the nuclei of two bonded atoms (in $\text{pm}$, where $1\ \text{pm} = 10^{-12}\ \text{m}$, or $\text{nm}$).
```

```definition
title: Bond energy (bond dissociation energy)
Bond energy is the amount of energy absorbed to break **one mole** of a specific covalent bond in the **gas phase** into separate gaseous atoms (in $\text{kJ·mol}^{-1}$).
```

> **Crucial principle:**
> - **Breaking bonds ALWAYS ABSORBS energy** (endothermic, $+$). You have to put energy IN to pull two bonded atoms apart!
> - **Forming bonds ALWAYS RELEASES energy** (exothermic, $-$). Two atoms falling into a bond drop down into a lower-energy state!

## Three factors controlling bond length and bond strength

As a simple rule of thumb: **shorter bonds = tighter grip = higher bond energy (stronger bond)**!

| Factor | Effect on bond length | Effect on bond energy (strength) | Example |
| --- | --- | --- | --- |
| **1. Atomic size (radius)** | **Smaller** atoms get nuclei closer $\implies$ **shorter** bond | **Higher** bond energy | $\text{H}-\text{F}$ ($92\ \text{pm}$, $567\ \text{kJ·mol}^{-1}$) vs $\text{H}-\text{I}$ ($161\ \text{pm}$, $298\ \text{kJ·mol}^{-1}$) |
| **2. Bond order (single / double / triple)** | More shared pairs pull nuclei closer: **triple $<$ double $<$ single** | **Triple $>$ double $>$ single** | $\text{C}-\text{C}$ ($154\ \text{pm}$, $347\ \text{kJ·mol}^{-1}$) vs $\text{C}=\text{C}$ ($134\ \text{pm}$, $614$) vs $\text{C}\equiv\text{C}$ ($120\ \text{pm}$, $839$) |
| **3. Electronegativity difference** | Larger $\Delta\text{EN}$ adds extra $\delta^+/\delta^-$ attraction $\implies$ slightly shorter | **Stronger** bond | $\text{H}-\text{Cl}$ stronger than $\text{Cl}-\text{Cl}$ |

## Formula: calculating $\Delta H$ from bond energies

```formula
title: Enthalpy change (ΔH) using average bond energies
formula: \Delta H = \sum E_{\text{bonds broken (reactants)}} - \sum E_{\text{bonds formed (products)}}
\Delta H | enthalpy change (heat of reaction) | kJ·mol⁻¹ | signed scalar ($\Delta H < 0$ exothermic; $\Delta H > 0$ endothermic)
\sum E_{\text{broken}} | total energy needed to break ALL reactant bonds (positive) | kJ·mol⁻¹ | scalar
\sum E_{\text{formed}} | total energy released when ALL product bonds form (subtracted!) | kJ·mol⁻¹ | scalar
use: DRAW the structural (Couper) formula of every molecule first so you count the exact number of single, double, or triple bonds multiplied by coefficients!
```

## Worked examples

### Example 1 (calculating $\Delta H$ from a table of bond energies)

Calculate $\Delta H$ for the combustion of methane:
$$\text{CH}_4(g) + 2\,\text{O}_2(g) \longrightarrow \text{CO}_2(g) + 2\,\text{H}_2\text{O}(g)$$

Given average bond energies ($\text{kJ·mol}^{-1}$): $\text{C}-\text{H} = 413$, $\text{O}=\text{O} = 498$, $\text{C}=\text{O} = 805$, $\text{O}-\text{H} = 464$.

```worked
title: Example 1 (Counting every bond carefully!)
Given: Reactants: $1 \times \text{CH}_4$ ($4\ \text{C}-\text{H}$ bonds) $+ 2 \times \text{O}_2$ ($2\ \text{O}=\text{O}$ bonds).
Products: $1 \times \text{CO}_2$ ($2\ \text{C}=\text{O}$ double bonds!) $+ 2 \times \text{H}_2\text{O}$ ($2 \times 2 = 4\ \text{O}-\text{H}$ bonds).
Unknown: $\Delta H$
Equation: $\Delta H = \sum E_{\text{broken}} - \sum E_{\text{formed}}$
Substitution: $\sum E_{\text{broken}} = 4(413) + 2(498) = 1\,652 + 996 = 2\,648\ \text{kJ·mol}^{-1}$
Substitution: $\sum E_{\text{formed}} = 2(805) + 4(464) = 1\,610 + 1\,856 = 3\,466\ \text{kJ·mol}^{-1}$
Substitution: $\Delta H = 2\,648 - 3\,466 = -818\ \text{kJ·mol}^{-1}$
Answer: $\Delta H = -818\ \text{kJ·mol}^{-1}$ (exothermic — more energy is released forming strong $\text{CO}_2$ and $\text{H}_2\text{O}$ bonds than was needed to break reactant bonds).
```

### Example 2 (interpreting bond energy & bond length comparison)

Why is nitrogen gas ($\text{N}_2$) extremely unreactive at room temperature, whereas fluorine ($\text{F}_2$) is fiercely reactive?
- $\text{N}_2$ has a **triple covalent bond ($\text{N}\equiv\text{N}$)** with a very short bond length ($110\ \text{pm}$) and huge bond energy ($945\ \text{kJ·mol}^{-1}$) — huge activation energy is needed to break it!
- $\text{F}_2$ has a weak **single bond ($\text{F}-\text{F}$)** with lone-pair repulsion ($142\ \text{pm}$, only $159\ \text{kJ·mol}^{-1}$), so it snaps apart easily!

```tryit
title: Spot the sign flip trap!
prompt: A learner calculates $\sum E_{\text{broken}} = 679\ \text{kJ}$ and $\sum E_{\text{formed}} = 864\ \text{kJ}$ for $\text{H}_2 + \text{Cl}_2 \to 2\text{HCl}$, and writes $\Delta H = 864 - 679 = +185\ \text{kJ}$. Is the reaction really endothermic? Fix the learner's mistake.
hint: Always check **Reactants (broken) MINUS Products (formed)**!
answer: No! The learner subtracted backwards (**formed $-$ broken** instead of **broken $-$ formed**). Correctly: $\Delta H = 679 - 864 = \mathbf{-185\ \text{kJ}}$, which is **exothermic** because stronger bonds are formed in $\text{HCl}$!
```

> **Common mistakes**
>
> - Doing $\sum E_{\text{products}} - \sum E_{\text{reactants}}$ instead of **$\sum E_{\text{broken (reactants)}} - \sum E_{\text{formed (products)}}$**. Remember: breaking absorbs ($+$) and forming releases ($-$)!
> - Forgetting that one $\text{CO}_2$ molecule has **TWO** $\text{C}=\text{O}$ double bonds, and one $\text{H}_2\text{O}$ molecule has **TWO** $\text{O}-\text{H}$ bonds (so $2\,\text{H}_2\text{O}$ has **FOUR** $\text{O}-\text{H}$ bonds!).
> - Thinking "bond breaking releases energy" (common misconception from biology "ATP breaks to release energy"). In chemistry/physics, **breaking ANY chemical bond ALWAYS absorbs energy**.

## Practice

```questions
Q: Arrange the following bonds in order of **increasing bond energy** (weakest to strongest): $\text{H}-\text{Br}$, $\text{H}-\text{F}$, $\text{H}-\text{Cl}$, $\text{H}-\text{I}$. Explain your order.
A: Order: **$\text{H}-\text{I} < \text{H}-\text{Br} < \text{H}-\text{Cl} < \text{H}-\text{F}$**.
Explanation: Going up Group 17 from $\text{I}$ to $\text{F}$, atomic radius **decreases**, so the bond length becomes **shorter** and electronegativity difference increases — making the bond stronger and raising bond energy.
---
Q: Use the bond energies ($\text{H}-\text{H} = 436$, $\text{N}\equiv\text{N} = 945$, $\text{N}-\text{H} = 391\ \text{kJ·mol}^{-1}$) to calculate $\Delta H$ for the Haber process: $\text{N}_2(g) + 3\,\text{H}_2(g) \longrightarrow 2\,\text{NH}_3(g)$.
A: Bonds broken (reactants): $1(\text{N}\equiv\text{N}) + 3(\text{H}-\text{H}) = 945 + 3(436) = 945 + 1\,308 = 2\,253\ \text{kJ}$.
Bonds formed (products): $2 \times 3 = 6\ \text{N}-\text{H}$ bonds $= 6(391) = 2\,346\ \text{kJ}$.
$\Delta H = 2\,253 - 2\,346 = -93\ \text{kJ}$ (exothermic).
---
Q: On a potential energy vs internuclear distance graph for $\text{H}_2$, the minimum occurs at $(74\ \text{pm};\ -436\ \text{kJ·mol}^{-1})$. State the bond length and bond energy of $\text{H}_2$.
A: Bond length $= 74\ \text{pm}$; bond energy $= +436\ \text{kJ·mol}^{-1}$ (the energy required to pull the bonded molecule back up to $0\ \text{kJ}$ separated atoms).
```

## Further help

- Siyavula Physical Sciences Grade 11, [3.4 Electronegativity and bond energy](https://www.siyavula.com/read/za/physical-sciences/grade-11/atomic-combinations/03-atomic-combinations-04).
