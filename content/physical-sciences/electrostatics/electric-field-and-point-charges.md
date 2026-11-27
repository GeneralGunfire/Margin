---
title: Electric fields and electric field strength
subject: physical-sciences
topic: Electrostatics
part: Physics
term: 1
subtopic: Electric fields
order: 421
pages: []
---

> **What you'll learn:** what an electric field is, how to draw field patterns around point charges and parallel plates, how to define electric field at a point ($E = \dfrac{F}{q}$), and how to find the **net electric field** created by two charges at an empty point in space.
>
> **Prerequisites:** Coulomb's Law and 1D/2D vector addition.
>
> **Why this matters:** students constantly confuse $E = \dfrac{F}{q}$ (which uses the *test* charge $q$ feeling the force) with $E = \dfrac{kQ}{r^2}$ (which uses the *source* charge $Q$ creating the field). Separating those two ideas unlocks every Electrostatics question.

## The idea in plain language

How does charge $A$ across an empty room "know" charge $B$ is sitting there? Michael Faraday explained this by imagining that every charged object changes the **space around itself** — filling that space with an invisible **electric field**.

Even if no second charge is sitting at point $P$, the electric field $\vec{E}$ is *already waiting* there!

To measure both the size and direction of that waiting field at point $P$, imagine placing a tiny **positive test charge** $+q$ at point $P$:
- The **direction** of the electric field at $P$ is **always the direction a POSITIVE test charge would move** if placed at $P$:
  - Away from a positive source charge ($+$)
  - Towards a negative source charge ($-$)
- The **strength** of the electric field is simply the **force per unit positive charge**: $E = \dfrac{F}{q}$ (in $\text{N·C}^{-1}$).

If you double the test charge $q$, the force $F$ doubles too, so the ratio $E = \dfrac{F}{q}$ **does NOT depend on the test charge** — it belongs purely to the source charge $Q$ and your distance $r$ from it ($E = \dfrac{kQ}{r^2}$)!

### Definitions to memorise

```definition
title: Electric field
An electric field is a region of space in which an electric charge experiences a force.
```

```definition
title: Electric field at a point (E)
The electric field at a point is the electrostatic force experienced per unit positive charge placed at that point: $E = \dfrac{F}{q}$.
```

## Formulas

```formula
title: Electric field at a point and around a point charge
formula: E = \frac{F}{q} \qquad\text{and}\qquad E = \frac{k Q}{r^2}
E | magnitude of electric field strength | N·C⁻¹ | vector (direction a + test charge moves)
F | electrostatic force experienced by test charge q | N | vector
q | magnitude of the test charge placed at the point | C | scalar
k | Coulomb's constant ($9{,}0 \times 10^9\ \text{N·m}^2\text{·C}^{-2}$) | N·m²·C⁻² | scalar
Q | magnitude of the **source** charge producing the field | C | scalar
r | distance from the source charge Q to the point | m | scalar
use: E = F/q when given force and test charge; E = kQ/r² when given source charge Q and distance r. Always plug unsigned |Q| into kQ/r² and get direction from a positive test charge!
```

### Drawing electric field lines (exam rules)

```diagram
name: coulomb-2d-and-field-visual
```

Switch to the **"Electric field"** mode in the explorer above and notice the strict rules markers check on every sketch:
1. Field lines **start on positive ($+$) charges** and **end on negative ($-$) charges** (arrows always point **out of $+$, into $-$**).
2. Field lines leave/enter surfaces at **$90^\circ$ (perpendicular)** and **NEVER cross** each other (crossing would mean two directions at one point!).
3. **Closer lines = stronger field** (lines bunch tightly near charges and spread out further away). Between two oppositely charged **parallel plates**, the lines are parallel and evenly spaced (**uniform electric field**).

## Worked examples

### Example 1 (using $E = F/q$ vs $E = kQ/r^2$)

An electron ($q_e = -1{,}6 \times 10^{-19}\ \text{C}$) placed at point $P$ experiences an electrostatic force of $4{,}8 \times 10^{-15}\ \text{N}$ **to the west**.
(a) Calculate the magnitude and direction of the electric field at point $P$.
(b) What force would a $+3{,}0\ \text{nC}$ charge experience if placed at point $P$?

```steps
title: Careful — negative test charges move OPPOSITE to the field!
step: Magnitude: $E = \dfrac{F}{|q|} = \dfrac{4{,}8 \times 10^{-15}}{1{,}6 \times 10^{-19}} = 3{,}0 \times 10^4\ \text{N·C}^{-1}$.
step: Direction trap! The electron is **negative**, and it felt a force **west**. A **positive** test charge at $P$ would be pushed the exact opposite way — so $\vec{E}$ points **east**!
Answer (a): $E = 3{,}0 \times 10^4\ \text{N·C}^{-1}$ **east**.
step: Force on $+3{,}0\ \text{nC}$ at $P$: $F = qE = (3{,}0 \times 10^{-9})(3{,}0 \times 10^4) = 9{,}0 \times 10^{-5}\ \text{N}$ **east** (same direction as $\vec{E}$, because the charge is positive!).
```

### Example 2 (net electric field at an empty point $P$ between two charges)

Two point charges are $0{,}60\ \text{m}$ apart in air: $Q_1 = +4{,}0\ \text{nC}$ on the left and $Q_2 = -9{,}0\ \text{nC}$ on the right. Calculate the **net electric field at point $P$**, located $0{,}20\ \text{m}$ to the right of $Q_1$ (so $0{,}40\ \text{m}$ to the left of $Q_2$).

```worked
title: Example 2 (Net electric field at P)
Given: $Q_1 = +4{,}0 \times 10^{-9}\ \text{C}$ ($r_1 = 0{,}20\ \text{m}$), $Q_2 = -9{,}0 \times 10^{-9}\ \text{C}$ ($r_2 = 0{,}40\ \text{m}$). Take right as positive.
Unknown: $E_{\text{net}}$ at P
Equation: $E = \dfrac{kQ}{r^2}$ for each source charge, then add vectors at P
Substitution: $E_1 = \dfrac{(9{,}0 \times 10^9)(4{,}0 \times 10^{-9})}{(0{,}20)^2} = \dfrac{36}{0{,}040} = 900\ \text{N·C}^{-1}$ **right** (away from $+Q_1$)
Substitution: $E_2 = \dfrac{(9{,}0 \times 10^9)(9{,}0 \times 10^{-9})}{(0{,}40)^2} = \dfrac{81}{0{,}16} = 506{,}25\ \text{N·C}^{-1}$ **right** (towards $-Q_2$!)
Substitution: Both point right! $E_{\text{net}} = (+900) + (+506{,}25) = +1\,406{,}25\ \text{N·C}^{-1}$
Answer: $E_{\text{net}} = 1{,}41 \times 10^3\ \text{N·C}^{-1}$ to the **right**.
```

Notice why $E_1$ and $E_2$ pointed the *same* way at $P$: imagine standing at $P$ holding a $+1\ \text{C}$ test charge — $+Q_1$ on your left shoves you right, and $-Q_2$ on your right pulls you right!

```tryit
title: Spot the mistake in this student's formula choice
prompt: A learner writes: *"A $+2\ \mu\text{C}$ charge creates a field, and I place a $+5\ \text{nC}$ test charge $0{,}1\ \text{m}$ away. To find $E$, I use $E = k(5 \times 10^{-9})/(0{,}1)^2$."* What did the learner mix up?
hint: Which charge **creates** the field at that point, and which charge merely **feels** it?
answer: They plugged in the **test charge** ($5\ \text{nC}$) instead of the **source charge** ($Q = 2\ \mu\text{C}$)! Always use the source charge $Q$ in $E = \dfrac{kQ}{r^2}$: $E = \dfrac{(9 \times 10^9)(2 \times 10^{-6})}{(0{,}1)^2} = 1{,}8 \times 10^6\ \text{N·C}^{-1}$.
```

> **Common mistakes**
>
> - Substituting the negative sign of $Q$ into $E = \dfrac{kQ}{r^2}$. Always use $|Q|$, then determine direction by imagining a **positive test charge** at point $P$.
> - Forgetting that a **negative** charge placed in an electric field feels a force in the **opposite** direction to $\vec{E}$.
> - Drawing field lines that touch or cross each other, or arrows pointing *into* a positive charge.
> - Confusing electric force $F$ (unit: $\text{N}$) with electric field $E$ (unit: $\text{N·C}^{-1}$).

## Practice

```questions
Q: Point charge $Q = -6{,}0\ \mu\text{C}$ sits at the origin. Calculate the magnitude and direction of the electric field at point $P$, $0{,}30\ \text{m}$ east of $Q$.
A: $E = \dfrac{k|Q|}{r^2} = \dfrac{(9{,}0 \times 10^9)(6{,}0 \times 10^{-6})}{(0{,}30)^2} = \dfrac{5{,}4 \times 10^4}{0{,}090} = 6{,}0 \times 10^5\ \text{N·C}^{-1}$.
Since $Q$ is negative, a positive test charge at $P$ is attracted **west** (towards $Q$).
Answer: $6{,}0 \times 10^5\ \text{N·C}^{-1}$ **west**.
---
Q: At a point $X$, the electric field is $4{,}0 \times 10^3\ \text{N·C}^{-1}$ north. Calculate the magnitude and direction of the electrostatic force on a charge of $-2{,}5\ \mu\text{C}$ placed at $X$.
A: $F = |q|E = (2{,}5 \times 10^{-6})(4{,}0 \times 10^3) = 1{,}0 \times 10^{-2}\ \text{N}$.
Because the charge is **negative**, the force is opposite to the field: $1{,}0 \times 10^{-2}\ \text{N}$ **south**.
---
Q: Two charges $Q_1 = +2{,}0\ \mu\text{C}$ and $Q_2 = +8{,}0\ \mu\text{C}$ are $0{,}90\ \text{m}$ apart. Find the distance from $Q_1$ (between the charges) where the net electric field is zero.
A: Let the point be distance $x$ from $Q_1$ and $(0{,}90 - x)$ from $Q_2$. At zero net field, $E_1 = E_2$:
$\dfrac{k(2{,}0 \times 10^{-6})}{x^2} = \dfrac{k(8{,}0 \times 10^{-6})}{(0{,}90 - x)^2} \implies \dfrac{1}{x^2} = \dfrac{4}{(0{,}90 - x)^2}$.
Take square root: $\dfrac{1}{x} = \dfrac{2}{0{,}90 - x} \implies 2x = 0{,}90 - x \implies 3x = 0{,}90 \implies x = 0{,}30\ \text{m}$ from $Q_1$.
```

## Further help

- Siyavula Physical Sciences Grade 11, [9.3 Electric fields](https://www.siyavula.com/read/za/physical-sciences/grade-11/electrostatics/09-electrostatics-03).
