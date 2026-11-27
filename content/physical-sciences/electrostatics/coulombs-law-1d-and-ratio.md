---
title: Coulomb's law in 1D and charge sharing
subject: physical-sciences
topic: Electrostatics
part: Physics
term: 1
subtopic: Coulomb's law
order: 411
pages: []
---

> **What you'll learn:** how electric force depends on charge size and distance, why you must substitute **unsigned (positive) magnitudes** into Coulomb's formula and determine direction physically, how to find the net force on one charge in a line, and how touching spheres share charge.
>
> **Prerequisites:** Grade 10 charge conservation ($Q_{\text{new}} = \frac{Q_1 + Q_2}{2}$), prefixes ($\mu\text{C}$, $\text{nC}$), and inverse-square ratios.
>
> **Why this matters:** Coulomb's Law looks almost identical in shape to Newton's Law of Universal Gravitation, except charges can both **attract** (unlike signs) and **repel** (like signs) — and the force is billions of times stronger!

## The idea in plain language

Two charged spheres exert an invisible push or pull on each other:
- **Opposite charges ($+$ and $-$):** pull together (**attract**).
- **Like charges ($+$ and $+$, or $-$ and $-$):** push apart (**repel**).

Just like gravity, the electric force is an **inverse-square law**: double the centre-to-centre distance $r$, and the force drops to **$\frac{1}{4}$**; halve the distance, and the force jumps **$4\times$** stronger. And by Newton's Third Law, even if one sphere carries $+10\ \mu\text{C}$ and the other carries $-1\ \mu\text{C}$, they push or pull on **each other** with the **exact same force magnitude**!

### Crucial sign rule for Coulomb's law (never skip this!)

When calculating $F = \dfrac{k Q_1 Q_2}{r^2}$, **NEVER plug the minus sign of a negative charge into the equation!**
Always:
1. Substitute **positive magnitudes** $|Q_1|$ and $|Q_2|$ into $F = \dfrac{kQ_1Q_2}{r^2}$ to find the **size** of the force.
2. Decide the **direction** separately by asking: *"Do these two charges attract or repel?"* Then assign $+$ or $-$ signs according to your chosen positive direction (e.g. right = $+$, left = $-$).

Why? Because putting negative signs inside $F = \frac{kQ_1Q_2}{r^2}$ only tells you attract vs repel — it cannot tell you "left" vs "right"! Thinking physically about which way the target charge is pushed or pulled makes 1D and 2D net-force questions effortless.

### Definition to memorise

```definition
title: Coulomb's Law
The magnitude of the electrostatic force exerted by two point charges (Q₁ and Q₂) on each other is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance (r) between them.
```

## Formulas

```formula
title: Coulomb's law and charge sharing between identical conductors
formula: F = \frac{k Q_1 Q_2}{r^2}
formula: Q_{\text{new}} = \frac{Q_1 + Q_2}{2} \qquad\text{and}\qquad n = \frac{\Delta Q}{q_e}
F | magnitude of the electrostatic force between the two point charges | N | vector (direction from attract/repel)
k | Coulomb's constant ($9{,}0 \times 10^9\ \text{N·m}^2\text{·C}^{-2}$) | N·m²·C⁻² | scalar constant
Q_1,\ Q_2 | magnitudes of the two point charges (use unsigned values!) | C | scalar
r | distance between the centres of the charges | m | scalar
Q_{\text{new}} | final charge on each of two identical conducting spheres after touching | C | signed scalar
n | number of electrons transferred ($q_e = 1{,}6 \times 10^{-19}\ \text{C}$) | dimensionless | scalar integer
use: convert μC (× 10⁻⁶), nC (× 10⁻⁹), pC (× 10⁻¹²), cm (× 10⁻²) and mm (× 10⁻³) BEFORE substituting!
```

```diagram
name: inverse-square-explorer
```

## Worked examples

### Example 1 (touching spheres + Coulomb's law): standard exam starter

Two **identical** insulated metal spheres $A$ ($+6{,}0\ \mu\text{C}$) and $B$ ($-2{,}0\ \mu\text{C}$) are brought into contact and then separated so their centres are $30\ \text{mm}$ apart. Calculate the electrostatic force that $A$ exerts on $B$ after separation.

```worked
title: Example 1
Given: $Q_A = +6{,}0 \times 10^{-6}\ \text{C}$, $Q_B = -2{,}0 \times 10^{-6}\ \text{C}$, $r = 30\ \text{mm} = 0{,}030\ \text{m}$
Unknown: $F_{A\text{ on }B}$ (magnitude and direction)
Equation: $Q_{\text{new}} = \dfrac{Q_A + Q_B}{2}$ and $F = \dfrac{k Q_1 Q_2}{r^2}$
Substitution: $Q_{\text{new}} = \dfrac{(+6{,}0 \times 10^{-6}) + (-2{,}0 \times 10^{-6})}{2} = +2{,}0 \times 10^{-6}\ \text{C}$ on EACH sphere!
Substitution: $F = \dfrac{(9{,}0 \times 10^9)(2{,}0 \times 10^{-6})(2{,}0 \times 10^{-6})}{(0{,}030)^2} = \dfrac{0{,}036}{9{,}0 \times 10^{-4}} = 40\ \text{N}$
Answer: $F = 40\ \text{N}$ repulsion (away from sphere A), because both spheres now carry $+2{,}0\ \mu\text{C}$.
```

Notice: how many electrons moved during contact? Sphere $A$ went from $+6{,}0\ \mu\text{C}$ to $+2{,}0\ \mu\text{C}$, meaning electrons moved **from $B$ to $A$**:
$$n = \frac{\Delta Q}{q_e} = \frac{4{,}0 \times 10^{-6}\ \text{C}}{1{,}6 \times 10^{-19}\ \text{C}} = 2{,}5 \times 10^{13}\ \text{electrons}.$$

### Example 2 (1D net force on one charge in a line of three)

Three point charges lie along a straight horizontal line:
- $Q_1 = +4{,}0\ \text{nC}$ at $x = 0$
- $Q_2 = -2{,}0\ \text{nC}$ at $x = 0{,}20\ \text{m}$
- $Q_3 = +8{,}0\ \text{nC}$ at $x = 0{,}50\ \text{m}$

Take **to the right as positive** and calculate the **net electrostatic force acting on $Q_2$**.

```steps
title: Net force on Q₂ (1D superposition)
step: Find $F_{1\text{ on }2}$ (distance $r_{12} = 0{,}20\ \text{m}$):
$F_{12} = \dfrac{(9{,}0 \times 10^9)(4{,}0 \times 10^{-9})(2{,}0 \times 10^{-9})}{(0{,}20)^2} = \dfrac{7{,}2 \times 10^{-8}}{0{,}040} = 1{,}80 \times 10^{-6}\ \text{N}$.
Direction: $Q_1$ ($+$) **attracts** $Q_2$ ($-$) towards $Q_1$, i.e. **to the left** ($\implies -1{,}80 \times 10^{-6}\ \text{N}$).
step: Find $F_{3\text{ on }2}$ (careful — distance $r_{23} = 0{,}50 - 0{,}20 = 0{,}30\ \text{m}$!):
$F_{32} = \dfrac{(9{,}0 \times 10^9)(8{,}0 \times 10^{-9})(2{,}0 \times 10^{-9})}{(0{,}30)^2} = \dfrac{1{,}44 \times 10^{-7}}{0{,}090} = 1{,}60 \times 10^{-6}\ \text{N}$.
Direction: $Q_3$ ($+$) **attracts** $Q_2$ ($-$) towards $Q_3$, i.e. **to the right** ($\implies +1{,}60 \times 10^{-6}\ \text{N}$).
step: Add the signed vectors acting on $Q_2$:
$F_{\text{net on }2} = (-1{,}80 \times 10^{-6}) + (+1{,}60 \times 10^{-6}) = -2{,}0 \times 10^{-7}\ \text{N}$.
Answer: $2{,}0 \times 10^{-7}\ \text{N}$ to the **left**.
```

### Example 3 (equilibrium position — finding where $F_{\text{net}} = 0$)

Two charges $Q_1 = +4{,}0\ \mu\text{C}$ and $Q_2 = +9{,}0\ \mu\text{C}$ are fixed $1{,}0\ \text{m}$ apart. Where on the line between them can a third charge $q$ be placed so the net force on $q$ is zero?

Because $Q_1$ and $Q_2$ have the **same sign** ($+$), a charge placed *between* them gets pushed in opposite directions by $Q_1$ and $Q_2$, so $F_{\text{net}} = 0$ occurs **closer to the smaller charge ($Q_1$)**. Let the distance from $Q_1$ be $x$, so the distance from $Q_2$ is $(1{,}0 - x)$:

$$\frac{k Q_1 q}{x^2} = \frac{k Q_2 q}{(1{,}0 - x)^2} \implies \frac{4{,}0}{x^2} = \frac{9{,}0}{(1{,}0 - x)^2}$$

Take the positive square root of both sides (much faster than expanding a quadratic!):
$$\frac{2}{x} = \frac{3}{1{,}0 - x} \implies 3x = 2(1{,}0 - x) \implies 5x = 2{,}0 \implies x = 0{,}40\ \text{m}\ \text{from } Q_1.$$

```tryit
title: Spot the equilibrium region for OPPOSITE charges
prompt: Suppose $Q_1 = +4{,}0\ \mu\text{C}$ and $Q_2 = -9{,}0\ \mu\text{C}$ sit $1{,}0\ \text{m}$ apart. Can a third charge ever experience $F_{\text{net}} = 0$ **between** $Q_1$ and $Q_2$? Where must the zero-force point sit instead?
hint: Put a positive test charge between $+4$ and $-9$. Which way does $+4$ push it? Which way does $-9$ pull it?
answer: **Never between them!** Between $+4$ and $-9$, $+4$ pushes right and $-9$ *also* pulls right, so the two forces **add** instead of cancelling. The zero-force point must lie **outside** them on the side of the **smaller magnitude charge** (to the left of $Q_1 = +4{,}0\ \mu\text{C}$).
```

> **Common mistakes**
>
> - Plugging negative charges directly into $F = \frac{kQ_1Q_2}{r^2}$ and then guessing whether a minus result means "left" or "attract". Always use magnitudes and draw arrows on the target charge!
> - Forgetting to square $r$, or forgetting to convert $\text{mm}$ / $\text{cm}$ to $\text{m}$ and $\mu\text{C}$ / $\text{nC}$ to $\text{C}$.
> - In Example 2, using $x_3 = 0{,}50\ \text{m}$ instead of the **separation** $r_{23} = 0{,}30\ \text{m}$ between $Q_2$ and $Q_3$.
> - Using $Q_{\text{new}} = \dfrac{Q_1 + Q_2}{2}$ *with unsigned values*: charge sharing IS signed addition (e.g. $(+6) + (-2) = +4$, divided by $2$ gives $+2$)!

## Practice

```questions
Q: Two point charges $+3{,}0\ \mu\text{C}$ and $-5{,}0\ \mu\text{C}$ are placed $20\ \text{cm}$ apart in air. Calculate the magnitude and nature (attraction or repulsion) of the electrostatic force between them.
A: $r = 0{,}20\ \text{m}$.
$F = \dfrac{(9{,}0 \times 10^9)(3{,}0 \times 10^{-6})(5{,}0 \times 10^{-6})}{(0{,}20)^2} = \dfrac{0{,}135}{0{,}040} = 3{,}38\ \text{N}$ (**attraction**).
---
Q: The electrostatic force between two charged spheres is $F$. What happens to the force if the charge on one sphere is doubled, the charge on the other is tripled, and the distance between their centres is tripled?
A: $F_{\text{new}} = \dfrac{k(2Q_1)(3Q_2)}{(3r)^2} = \dfrac{6}{9} F = \dfrac{2}{3}F$.
---
Q: Two identical metal spheres on insulated stands carry charges $-8{,}0\ \text{nC}$ and $+2{,}0\ \text{nC}$. They touch and are placed $10\ \text{cm}$ apart. Find the force between them and state whether electrons moved from the $-8{,}0\ \text{nC}$ sphere or onto it.
A: $Q_{\text{new}} = \dfrac{-8{,}0 + 2{,}0}{2} = -3{,}0\ \text{nC}$ on each sphere.
$F = \dfrac{(9{,}0 \times 10^9)(3{,}0 \times 10^{-9})(3{,}0 \times 10^{-9})}{(0{,}10)^2} = 8{,}1 \times 10^{-6}\ \text{N}$ repulsion.
Because $-8{,}0\ \text{nC}$ became less negative ($-3{,}0\ \text{nC}$), electrons moved **from** the $-8{,}0\ \text{nC}$ sphere **to** the $+2{,}0\ \text{nC}$ sphere.
```

## Further help

- Siyavula Physical Sciences Grade 11, [9.2 Coulomb's law](https://www.siyavula.com/read/za/physical-sciences/grade-11/electrostatics/09-electrostatics-02).
