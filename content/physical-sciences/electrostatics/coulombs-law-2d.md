---
title: Coulomb's law in 2D (right-angled and vector addition)
subject: physical-sciences
topic: Electrostatics
part: Physics
term: 1
subtopic: Coulomb's law
order: 412
pages: []
---

> **What you'll learn:** how to combine Topic 1 (2D vectors) with Coulomb's Law to calculate the **net electrostatic force** on a charge sitting at a corner of a rectangle, right triangle, or general 2D grid.
>
> **Prerequisites:** Coulomb's Law ($F = \dfrac{kQ_1Q_2}{r^2}$), perpendicular vector addition (Pythagoras + $\tan\theta$), and resolving vectors into components.
>
> **Why this matters:** 2D electrostatics is the favourite Grade 11 Paper 1 question that links Topic 1 and Topic 4 together in one multi-mark problem.

## The idea in plain language

When three charges sit on a corner or grid rather than a straight line, the two forces acting on your target charge point in **different 2D directions** (for example, one east and one south, or one straight right and one diagonally up-right).

Nothing in the physics changes! You simply run a clean two-stage pipeline:
1. **Physics stage:** draw a free-body diagram of the **target charge only**. Use $F = \dfrac{kQ_1Q_2}{r^2}$ (unsigned magnitudes!) twice to get the magnitude of each individual force, and use *attract vs repel* to draw each arrow pointing the right way.
2. **Topic 1 vector stage:**
   - If the two force arrows are at **$90^\circ$**, combine them straight away with **Pythagoras** ($F_{\text{net}} = \sqrt{F_x^2 + F_y^2}$) and $\tan\theta$ for direction!
   - If one arrow is at an angle (say $60^\circ$ in an equilateral triangle), resolve it into $x$ and $y$ components first, total $F_x$ and $F_y$, then recombine!

```diagram
name: coulomb-2d-and-field-visual
```

## Worked examples

### Example 1 (right-angled arrangement — corner charge)

Three point charges are arranged at the corners of a right-angled triangle:
- $Q_1 = +4{,}0\ \mu\text{C}$ is $0{,}20\ \text{m}$ directly **north** of $Q_2$.
- $Q_2 = -2{,}0\ \mu\text{C}$ is at the right-angle corner (the origin).
- $Q_3 = -3{,}0\ \mu\text{C}$ is $0{,}30\ \text{m}$ directly **east** of $Q_2$.

Calculate the **magnitude and direction of the net electrostatic force acting on $Q_2$**.

```steps
title: Solving 2D perpendicular Coulomb forces step by step
step: **Draw the two forces acting ON $Q_2$ ($-$):**
- $Q_1$ ($+$) **attracts** $Q_2$ ($-$), so $\vec{F}_{1\text{ on }2}$ points **north** ($+y$).
- $Q_3$ ($-$) **repels** $Q_2$ ($-$), so $\vec{F}_{3\text{ on }2}$ pushes $Q_2$ **west** ($-x$, away from $Q_3$!).
step: **Calculate $F_{1\text{ on }2}$:**
$F_y = \dfrac{(9{,}0 \times 10^9)(4{,}0 \times 10^{-6})(2{,}0 \times 10^{-6})}{(0{,}20)^2} = \dfrac{0{,}072}{0{,}040} = +1{,}80\ \text{N}$ (north).
step: **Calculate $F_{3\text{ on }2}$:**
$F_x = \dfrac{(9{,}0 \times 10^9)(3{,}0 \times 10^{-6})(2{,}0 \times 10^{-6})}{(0{,}30)^2} = \dfrac{0{,}054}{0{,}090} = 0{,}60\ \text{N}$ west ($-0{,}60\ \text{N}$).
step: **Combine the perpendicular vectors (west and north $\implies$ Quadrant II, north-west):**
$F_{\text{net}} = \sqrt{(-0{,}60)^2 + (1{,}80)^2} = \sqrt{0{,}36 + 3{,}24} = \sqrt{3{,}60} = 1{,}90\ \text{N}$.
step: **Direction from the west ($-x$) axis:**
$\tan\theta = \dfrac{1{,}80}{0{,}60} = 3{,}00 \implies \theta = 71{,}6^\circ$ north of west (or $18{,}4^\circ$ west of north / bearing $341{,}6^\circ$).
```

### Example 2 (diagonal triangle using components): equilateral setup

Two identical charges $Q_1 = Q_2 = +5{,}0\ \mu\text{C}$ are fixed at the base corners of an equilateral triangle of side $0{,}30\ \text{m}$ ($60^\circ$ angles). A third charge $Q_3 = -2{,}0\ \mu\text{C}$ sits at the top apex directly above the midpoint. Find the net force on $Q_3$.

```worked
title: Example 2 (Symmetrical 2D components)
Given: $Q_1 = Q_2 = +5{,}0\ \mu\text{C}$, $Q_3 = -2{,}0\ \mu\text{C}$, $r = 0{,}30\ \text{m}$, each side makes $60^\circ$ with horizontal base.
Unknown: $F_{\text{net on }3}$
Equation: $F = \dfrac{k Q_1 Q_3}{r^2}$; resolve into $x$ and $y$
Substitution: $F_1 = F_2 = \dfrac{(9{,}0 \times 10^9)(5{,}0 \times 10^{-6})(2{,}0 \times 10^{-6})}{(0{,}30)^2} = 1{,}00\ \text{N}$ (each pulling $Q_3$ diagonally down along a side!)
Substitution: Horizontal: $F_{1x} = -1{,}00\cos 60^\circ = -0{,}50\ \text{N}$ and $F_{2x} = +1{,}00\cos 60^\circ = +0{,}50\ \text{N} \implies F_{\text{net},x} = 0$ (cancel by symmetry!)
Substitution: Vertical: both point down at $60^\circ$ below horizontal $\implies F_{\text{net},y} = -1{,}00\sin 60^\circ - 1{,}00\sin 60^\circ = -1{,}73\ \text{N}$
Answer: $F_{\text{net on }3} = 1{,}73\ \text{N}$ straight **downwards** (towards the base midpoint).
```

Look how clean symmetry makes equilateral problems: always check whether the left and right horizontal components cancel before grinding through extra arithmetic!

```tryit
title: Quick direction check before calculating
prompt: Three positive charges $+Q$, $+Q$, $+Q$ occupy three corners of a square: top-left, bottom-left, and bottom-right. Which way does the net force on the **bottom-left** charge point?
hint: Top-left ($+$) repels bottom-left straight **down**. Bottom-right ($+$) repels bottom-left straight **left**. Where does left + down point?
answer: **South-west** (specifically $45^\circ$ south of west / diagonally out away from the square's centre, because the two charges are equal and equidistant!).
```

> **Common mistakes**
>
> - Adding $F_1 + F_2$ as ordinary numbers even though the two forces are at $90^\circ$ or $60^\circ$ to each other!
> - Drawing a repulsion force arrow towards the pushing charge instead of **away** from it. Always sit on the target charge and ask: *"Am I pulled toward this neighbour or shoved away from it?"*
> - Using the wrong angle in $\sin$ and $\cos$ when resolving diagonal Coulomb forces — double-check with the triangle geometry first.

## Practice

```questions
Q: Point charges lie at three corners of a rectangle: $A$ ($+2{,}0\ \mu\text{C}$) is $0{,}30\ \text{m}$ north of $B$ ($+4{,}0\ \mu\text{C}$), and $C$ ($-6{,}0\ \mu\text{C}$) is $0{,}40\ \text{m}$ east of $B$. Calculate the magnitude and direction of the net force on $B$.
A: On $B$ ($+$):
- $A$ ($+$) **repels** $B$ **south**: $F_{AB} = \dfrac{(9{,}0 \times 10^9)(2{,}0 \times 10^{-6})(4{,}0 \times 10^{-6})}{(0{,}30)^2} = 0{,}80\ \text{N}$ south.
- $C$ ($-$) **attracts** $B$ **east**: $F_{CB} = \dfrac{(9{,}0 \times 10^9)(6{,}0 \times 10^{-6})(4{,}0 \times 10^{-6})}{(0{,}40)^2} = 1{,}35\ \text{N}$ east.
Combine perpendicular vectors (east and south):
$F_{\text{net}} = \sqrt{1{,}35^2 + 0{,}80^2} = \sqrt{1{,}8225 + 0{,}64} = 1{,}57\ \text{N}$.
$\tan\theta = \dfrac{0{,}80}{1{,}35} \implies \theta = 30{,}7^\circ$ south of east.
---
Q: Two charges $Q_1 = +3{,}0\ \mu\text{C}$ at $(0;\ 0{,}40\ \text{m})$ and $Q_2 = -3{,}0\ \mu\text{C}$ at $(0;\ -0{,}40\ \text{m})$ act on a third charge $Q_3 = +2{,}0\ \mu\text{C}$ at $(0{,}30\ \text{m};\ 0)$. Using symmetry, find the net force on $Q_3$.
A: Distance from both $Q_1$ and $Q_2$ to $Q_3$ is $r = \sqrt{0{,}30^2 + 0{,}40^2} = 0{,}50\ \text{m}$.
Magnitude of each force: $F_1 = F_2 = \dfrac{(9{,}0 \times 10^9)(3{,}0 \times 10^{-6})(2{,}0 \times 10^{-6})}{(0{,}50)^2} = 0{,}216\ \text{N}$.
$Q_1$ ($+$) pushes $Q_3$ down-right ($\sin\theta = \frac{0{,}40}{0{,}50} = 0{,}80$, $\cos\theta = 0{,}60$).
$Q_2$ ($-$) pulls $Q_3$ down-left!
Notice the horizontal pieces **cancel** ($+0{,}216(0{,}60) - 0{,}216(0{,}60) = 0$) and the vertical downward pieces **add**:
$F_{\text{net}} = 2 \times 0{,}216 \times 0{,}80 = 0{,}346\ \text{N}$ straight **south** ($-y$).
```

## Further help

- Siyavula Physical Sciences Grade 11, [9.2 Coulomb's law](https://www.siyavula.com/read/za/physical-sciences/grade-11/electrostatics/09-electrostatics-02).
