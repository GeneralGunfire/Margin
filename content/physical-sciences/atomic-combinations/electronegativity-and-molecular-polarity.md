---
title: Electronegativity, bond polarity and molecular polarity
subject: physical-sciences
topic: Atomic combinations and molecular structure
part: Chemistry
term: 2
subtopic: Polarity and bond energy
order: 721
pages: []
---

> **What you'll learn:** what **electronegativity (EN)** measures, how to use $\Delta\text{EN}$ to classify bonds (non-polar covalent, polar covalent, ionic), and the **crucial two-step test** for whether an *entire molecule* is polar or non-polar (even when its bonds are polar!).
>
> **Prerequisites:** Lewis diagrams and VSEPR molecular shapes.
>
> **Why this matters:** Paper 2 examiners love asking: *"$\text{CO}_2$ and $\text{H}_2\text{O}$ both have polar covalent bonds. Explain why $\text{CO}_2$ is non-polar while $\text{H}_2\text{O}$ is polar."* Answering that cleanly gets full marks here AND unlocks Intermolecular Forces next!

## The idea in plain language

When two atoms share electrons in a covalent bond, is it always a fair 50–50 share?
- If the two atoms are **identical** (like $\text{H}-\text{H}$ or $\text{Cl}-\text{Cl}$), both nuclei pull with the exact same strength $\implies$ **non-polar covalent bond** (equal sharing).
- If one atom pulls electrons more greedily than the other (like $\text{O}$ vs $\text{H}$, or $\text{Cl}$ vs $\text{H}$), the shared electron cloud spends more time hovering around the greedier atom! That atom gets a **partial negative charge ($\delta^-$)** and the other atom is left with a **partial positive charge ($\delta^+$)** $\implies$ **polar covalent bond** (a bond dipole).

That "electron-pulling greediness" inside a chemical bond is **electronegativity (EN)** (fluorine is the highest at $4{,}0$; values are given on your periodic table in exams!).

### Definitions to memorise

```definition
title: Electronegativity
Electronegativity is a measure of the tendency of an atom in a molecule to attract bonding electrons.
```

```definition
title: Polar vs Non-polar covalent bond
A **non-polar covalent bond** forms when electrons are shared equally between atoms ($\Delta\text{EN} = 0$, or very small). A **polar covalent bond** forms when electrons are shared unequally between atoms with different electronegativities ($\Delta\text{EN} > 0$), creating $\delta^+$ and $\delta^-$ ends.
```

## Classifying bond type using $\Delta\text{EN}$

Subtract the smaller electronegativity from the larger one: $\Delta\text{EN} = \text{EN}_{\text{larger}} - \text{EN}_{\text{smaller}}$.

| Difference $\Delta\text{EN}$ | Dominant bond character | Electron behaviour | Example |
| --- | --- | --- | --- |
| $\Delta\text{EN} = 0$ | **Pure non-polar covalent** | Equal sharing | $\text{H}_2$ ($2{,}1 - 2{,}1 = 0$) |
| $0 < \Delta\text{EN} \le 0{,}4$ | **Weakly polar / effectively non-polar** | Almost equal sharing | $\text{CH}_4$ ($2{,}5 - 2{,}1 = 0{,}4$) |
| $0{,}4 < \Delta\text{EN} < 1{,}7\text{–}2{,}0$ | **Polar covalent** | Unequal sharing ($\delta^+ \to \delta^-$) | $\text{HCl}$ ($3{,}0 - 2{,}1 = 0{,}9$), $\text{H}_2\text{O}$ ($3{,}5 - 2{,}1 = 1{,}4$) |
| $\Delta\text{EN} \ge 2{,}1$ (or metal + non-metal) | **Ionic** | Electron transfer ($+$ and $-$ ions) | $\text{NaCl}$ ($3{,}0 - 0{,}9 = 2{,}1$) |

> **Note:** Metal + non-metal is usually ionic, though check $\Delta\text{EN}$ carefully — a small-difference pair like $\text{BeCl}_2$ ($3{,}0 - 1{,}5 = 1{,}5$) actually behaves covalently!

## Bond polarity vs Molecular polarity (the key 2-step test!)

Having **polar bonds** does **NOT** automatically make a molecule polar! Remember Topic 1 vectors: **bond dipoles are vectors!** If identical bond dipoles point symmetrically in opposite directions, **they cancel out to zero net dipole**, making the *molecule* **non-polar**!

```compare
title: Symmetrical (Dipoles cancel -> NON-POLAR) vs Asymmetrical (Dipoles add -> POLAR)
left: Symmetrical shapes (with identical outer atoms)
- **Linear** ($\text{CO}_2$, $\text{BeCl}_2$): two equal dipoles pull $180^\circ$ opposite ways $\implies$ cancel!
- **Trigonal planar** ($\text{BF}_3$): three equal dipoles at $120^\circ$ $\implies$ cancel!
- **Tetrahedral** ($\text{CH}_4$, $\text{CCl}_4$): four equal dipoles symmetrically in 3D $\implies$ cancel!
- Result: **NON-POLAR molecule** (charge distributed evenly).
right: Asymmetrical shapes (or mixed outer atoms!)
- **Bent / Angular** ($\text{H}_2\text{O}$, $\text{H}_2\text{S}$, $\text{SO}_2$): lone pairs bend bonds so dipoles point to the same side!
- **Trigonal pyramidal** ($\text{NH}_3$, $\text{PCl}_3$): lone pair pushes bonds downward $\implies$ net dipole toward apex!
- **Mixed outer atoms** (e.g. $\text{CH}_3\text{Cl}$ or $\text{HCN}$): different pull strengths cannot cancel!
- Result: **POLAR molecule (dipole)**.
```

```diagram
name: vsepr-polarity-explorer
```

## Worked examples

### Example 1 (classic Paper 2 essay question): $\text{CO}_2$ vs $\text{H}_2\text{O}$

Given electronegativities: $\text{H} = 2{,}1$, $\text{C} = 2{,}5$, $\text{O} = 3{,}5$. Explain why $\text{CO}_2$ is a non-polar molecule whereas $\text{H}_2\text{O}$ is a polar molecule.

```steps
title: Structuring a full-mark polarity explanation
step: **Check bond polarity first:**
- $\text{C}=\text{O}$: $\Delta\text{EN} = 3{,}5 - 2{,}5 = 1{,}0$ (**polar covalent** bonds).
- $\text{O}-\text{H}$: $\Delta\text{EN} = 3{,}5 - 2{,}1 = 1{,}4$ (**polar covalent** bonds).
Both molecules have polar bonds!
step: **Compare VSEPR shapes (symmetry):**
- **$\text{CO}_2$** has 2 bonding regions and **0 lone pairs** on C $\implies$ **linear ($180^\circ$)** and symmetrical. The two equal $\text{C}\to\text{O}$ bond dipoles pull directly opposite each other and **cancel out** (net dipole = 0) $\implies$ **non-polar molecule**.
- **$\text{H}_2\text{O}$** has 2 bonding pairs and **2 lone pairs** on O $\implies$ **bent / angular ($104{,}5^\circ$)** and asymmetrical. The two $\text{H}\to\text{O}$ bond dipoles do **not** cancel and add together towards oxygen $\implies$ **polar molecule** ($\text{O}$ side $\delta^-$, $\text{H}$ side $\delta^+$).
```

### Example 2 (tricky mixed-atom tetrahedron): $\text{CCl}_4$ vs $\text{CHCl}_3$

- **$\text{CCl}_4$** is tetrahedral with **four identical** $\text{C}-\text{Cl}$ polar bonds ($\Delta\text{EN} = 3{,}0 - 2{,}5 = 0{,}5$). By symmetry, all four dipoles cancel $\implies$ **non-polar molecule**.
- **$\text{CHCl}_3$** (chloroform) is also tetrahedral, **but** one outer atom is $\text{H}$ ($\text{EN} = 2{,}1$) instead of $\text{Cl}$ ($\text{EN} = 3{,}0$)! The $\text{C}-\text{H}$ bond dipole does not match the three $\text{C}-\text{Cl}$ dipoles, so the shape is **asymmetrical** in electron pull $\implies$ **polar molecule**!

```tryit
title: Spot the symmetry trap
prompt: Classify each molecule as **polar** or **non-polar**, giving a one-line reason: (a) $\text{BF}_3$, (b) $\text{NH}_3$, (c) $\text{HCl}$.
hint: Check shape + whether outer atoms are identical!
answer: - (a) **$\text{BF}_3$:** **Non-polar** — symmetrical trigonal planar with 3 identical B–F dipoles at $120^\circ$ that cancel.
- (b) **$\text{NH}_3$:** **Polar** — asymmetrical trigonal pyramidal (1 lone pair on N), so dipoles add towards N.
- (c) **$\text{HCl}$:** **Polar** — linear diatomic with two *different* atoms ($\Delta\text{EN} = 0{,}9$), so one end is $\delta^+$ and the other $\delta^-$.
```

> **Common mistakes**
>
> - Saying *"$\text{CO}_2$ is non-polar because it has non-polar bonds."* Wrong! $\text{C}=\text{O}$ has $\Delta\text{EN} = 1{,}0$ (very polar bonds!). $\text{CO}_2$ is non-polar because its **symmetrical linear shape** makes the two polar bond dipoles **cancel**.
> - Saying *"Any tetrahedral molecule is non-polar."* Only when all four outer atoms are **identical** (e.g. $\text{CH}_4$, $\text{CCl}_4$). $\text{CH}_3\text{Cl}$ is tetrahedral yet **polar**.
> - Confusing $\delta^+/\delta^-$ (partial charges in a polar covalent bond) with full $+1/-1$ ionic charges.

## Practice

```questions
Q: Using $\text{EN}(\text{H}) = 2{,}1$, $\text{EN}(\text{N}) = 3{,}0$, $\text{EN}(\text{F}) = 4{,}0$, $\text{EN}(\text{K}) = 0{,}8$, calculate $\Delta\text{EN}$ and classify the bond in (a) $\text{F}_2$, (b) $\text{NH}_3$, and (c) $\text{KF}$.
A: (a) $\text{F}_2$: $\Delta\text{EN} = 4{,}0 - 4{,}0 = 0 \implies$ **pure non-polar covalent**.
(b) $\text{NH}_3$: $\Delta\text{EN} = 3{,}0 - 2{,}1 = 0{,}9 \implies$ **polar covalent**.
(c) $\text{KF}$: $\Delta\text{EN} = 4{,}0 - 0{,}8 = 3{,}2 \implies$ **ionic**.
---
Q: Both $\text{BeCl}_2$ and $\text{OF}_2$ contain three atoms and two polar covalent bonds. Explain why $\text{BeCl}_2$ is non-polar while $\text{OF}_2$ is polar.
A: $\text{BeCl}_2$ has 0 lone pairs on central Be, so it is **linear ($180^\circ$)** and symmetrical — the two equal $\text{Be}-\text{Cl}$ bond dipoles cancel out ($\implies$ **non-polar**). $\text{OF}_2$ has **2 lone pairs** on central O, making it **bent / angular** and asymmetrical — the two $\text{O}-\text{F}$ dipoles do not cancel ($\implies$ **polar**).
---
Q: Which atom carries the partial negative charge ($\delta^-$) in the $\text{H}-\text{Br}$ bond ($\text{EN}(\text{H}) = 2{,}1$, $\text{EN}(\text{Br}) = 2{,}8$)?
A: **Bromine ($\text{Br}$)** carries $\delta^-$ because it has the higher electronegativity ($2{,}8 > 2{,}1$) and attracts the shared bonding pair closer to itself.
```

## Further help

- Siyavula Physical Sciences Grade 11, [3.4 Electronegativity](https://www.siyavula.com/read/za/physical-sciences/grade-11/atomic-combinations/03-atomic-combinations-04).
