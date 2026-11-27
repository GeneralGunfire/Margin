---
title: Resolving a vector into components
subject: physical-sciences
topic: Vectors in two dimensions
part: Physics
term: 1
subtopic: Resolving and combining vectors
order: 111
pages: []
---

> **What you'll learn:** how to split any angled vector into two perpendicular pieces (horizontal and vertical components), and how to tell when cosine goes with $x$ and when it goes with $y$.
>
> **Prerequisites:** right-angled trigonometry ($\sin\theta$, $\cos\theta$), Pythagoras' theorem, and choosing positive directions.
>
> **Why this matters:** in real problems, ropes pull at $35^\circ$, cannons fire at $40^\circ$, and boxes sit on slopes tilted at $25^\circ$. You cannot add angled pushes directly — splitting them along perpendicular axes turns every 2D problem into two simple 1D sums.

## The idea in plain language

Adding perpendicular vectors builds **one diagonal resultant from two axis vectors**. **Resolving** a vector runs that process in reverse: you start with one diagonal vector $\vec{R}$ and split it into two perpendicular components, $R_x$ (along the horizontal axis) and $R_y$ (along the vertical axis), that together produce the exact same physical effect.

Think of dragging a suitcase by a handle tilted at $35^\circ$ above the floor. Part of your pull moves the suitcase *forward* ($F_x$), and part of your pull lifts the suitcase slightly *upward* ($F_y$). Neither piece exists as a separate rope, yet the suitcase responds as if those two perpendicular pulls were acting at once.

```diagram
name: vector-components-explorer
```

### Definition to memorise

```definition
title: Components of a vector
The components of a vector are two perpendicular vectors (usually horizontal and vertical, or parallel and perpendicular to a slope) whose resultant is equal to the original vector.
```

## Formulas

```formula
title: Horizontal and vertical components (angle measured from the horizontal)
formula: R_x = R \cos\theta
formula: R_y = R \sin\theta
R | magnitude of the original vector | N, m or m·s⁻¹ | scalar (magnitude)
\theta | acute angle between the vector and the horizontal axis | degrees (°) | scalar
R_x | horizontal component (side adjacent to θ) | same unit as R | signed scalar (direction given by sign or axis)
R_y | vertical component (side opposite θ) | same unit as R | signed scalar (direction given by sign or axis)
use: when the given angle θ is measured from the horizontal (x) axis. Always check which axis θ touches before picking cos or sin.
```

> **The golden rule — never memorise "$x$ is always $\cos$":**
> **$\cos$ always goes with the side touching (adjacent to) the angle $\theta$.**
> **$\sin$ always goes with the side across from (opposite to) the angle $\theta$.**
> If a question measures $\theta$ from the *vertical* axis (for example "$25^\circ$ east of north"), then $R_y = R\cos 25^\circ$ is adjacent and $R_x = R\sin 25^\circ$ is opposite!

### Choosing signs from the quadrant

After calculating the *sizes* of the two components with $\sin$ and $\cos$, look at which way the arrow points and assign signs using your chosen positive directions (usually $+x$ = east/right, $+y$ = north/up):

| Direction of vector | $x$-component sign | $y$-component sign |
| --- | --- | --- |
| North-east (Quadrant I) | $+$ | $+$ |
| North-west (Quadrant II) | $-$ | $+$ |
| South-west (Quadrant III) | $-$ | $-$ |
| South-east (Quadrant IV) | $+$ | $-$ |

Alternatively, if you measure $\theta$ anticlockwise all the way from the positive $x$-axis ($0^\circ$ to $360^\circ$), then $R_x = R\cos\theta$ and $R_y = R\sin\theta$ automatically produce the right signs. Using the acute triangle + quadrant check is usually safer and easier to verify visually.

## Worked examples

### Example 1 (basic): pulling a sled at an angle from the horizontal

A child pulls a sled with a force of $80\ \text{N}$ at $35^\circ$ above the horizontal to the right. Take right ($+x$) and up ($+y$) as positive. Calculate the horizontal and vertical components of the force.

```worked
title: Example 1
Given: $F = 80\ \text{N}$ at $35^\circ$ above the $+x$-axis. Take right and up as positive.
Unknown: $F_x$ and $F_y$
Equation: $F_x = F\cos\theta$ (adjacent to $35^\circ$) and $F_y = F\sin\theta$ (opposite $35^\circ$)
Substitution: $F_x = +(80\ \text{N})\cos 35^\circ = +65{,}53...\ \text{N}$
Substitution: $F_y = +(80\ \text{N})\sin 35^\circ = +45{,}88...\ \text{N}$
Answer: $F_x = 65{,}5\ \text{N}$ to the right and $F_y = 45{,}9\ \text{N}$ upwards.
```

Quick sanity check: $\sqrt{65{,}53^2 + 45{,}88^2} = 80{,}0\ \text{N}$, and $F_x > F_y$ makes sense because $35^\circ < 45^\circ$ leans closer to the horizontal.

### Example 2 (medium): angle given from the vertical, pointing south-west

A yacht sails with velocity $14\ \text{m·s}^{-1}$ on a bearing of $205^\circ$ (which is $25^\circ$ west of south). Take east and north as positive. Find $v_x$ and $v_y$.

```steps
title: Breaking the direction into components
step: Sketch the compass axes and locate the arrow. $205^\circ$ clockwise from north is $25^\circ$ west of south (Quadrant III: west and south).
step: Identify which side touches the $25^\circ$ angle. The $25^\circ$ angle sits between the velocity arrow and the **south** (vertical) axis, so the vertical component is adjacent ($\cos$) and the horizontal component is opposite ($\sin$).
step: Calculate magnitudes: $|v_y| = 14\cos 25^\circ = 12{,}69\ \text{m·s}^{-1}$; $|v_x| = 14\sin 25^\circ = 5{,}92\ \text{m·s}^{-1}$.
step: Apply quadrant signs (west is $-x$, south is $-y$): $v_x = -5{,}92\ \text{m·s}^{-1}$ ($5{,}92\ \text{m·s}^{-1}$ west) and $v_y = -12{,}69\ \text{m·s}^{-1}$ ($12{,}7\ \text{m·s}^{-1}$ south).
```

### Example 3 (exam skill): components parallel and perpendicular to a ramp

A $10\ \text{kg}$ crate rests on a ramp inclined at $28^\circ$ to the horizontal. Its weight is $w = mg = 10 \times 9{,}8 = 98\ \text{N}$ straight downwards. Resolve the weight into components **parallel to the slope** ($w_\parallel$) and **perpendicular to the slope** ($w_\perp$).

By geometry (two pairs of perpendicular sides), the angle between the vertical weight vector and the line perpendicular to the ramp equals the ramp angle $\theta = 28^\circ$:
- $w_\perp$ touches the angle $\theta$: $w_\perp = w\cos\theta = 98\cos 28^\circ = 86{,}5\ \text{N}$ (into the slope).
- $w_\parallel$ is opposite the angle $\theta$: $w_\parallel = w\sin\theta = 98\sin 28^\circ = 46{,}0\ \text{N}$ (down the slope).

You will use $w_\parallel = mg\sin\theta$ and $w_\perp = mg\cos\theta$ in almost every Newton's second law incline question!

```tryit
title: Quick check: which component uses cosine?
prompt: A force of 50 N acts at $30^\circ$ east of north. What is the northward component $F_y$?
hint: Sketch north (+y) and draw the arrow $30^\circ$ to the right of north. Which side of the right triangle touches $30^\circ$?
answer: $F_y$ is adjacent to the $30^\circ$ angle measured from north, so $F_y = 50\cos 30^\circ = 43{,}3\ \text{N}$ north. (And $F_x = 50\sin 30^\circ = 25{,}0\ \text{N}$ east.)
```

> **Common mistakes**
>
> - Blindly writing $F_x = F\cos\theta$ even when $\theta$ is measured from the vertical axis or from north/south (bearing).
> - Forgetting minus signs for west, left, south, or downward components before adding vectors together.
> - Leaving your calculator in radian mode instead of degree mode.

## Practice

```questions
Q: A cable pulls a barge with a force of $120\ \text{N}$ at $40^\circ$ north of east. Find the eastward and northward components of the force.
A: Take east ($+x$) and north ($+y$) as positive. Both components are positive (Quadrant I).
$F_x = 120\cos 40^\circ = 91{,}9\ \text{N}$ east.
$F_y = 120\sin 40^\circ = 77{,}1\ \text{N}$ north.
---
Q: A wind velocity is $18\ \text{m·s}^{-1}$ in a direction $32^\circ$ south of west. Take east and north as positive and find $v_x$ and $v_y$.
A: South of west is Quadrant III, so both components are negative. The $32^\circ$ angle touches the west (horizontal) axis.
$v_x = -18\cos 32^\circ = -15{,}3\ \text{m·s}^{-1}$ ($15{,}3\ \text{m·s}^{-1}$ west).
$v_y = -18\sin 32^\circ = -9{,}54\ \text{m·s}^{-1}$ ($9{,}54\ \text{m·s}^{-1}$ south).
---
Q: A force $\vec{F}$ has a horizontal component $F_x = -24\ \text{N}$ and a vertical component $F_y = +18\ \text{N}$. Reconstruct the magnitude and direction of $\vec{F}$.
A: Magnitude: $F = \sqrt{(-24)^2 + 18^2} = \sqrt{576 + 324} = \sqrt{900} = 30\ \text{N}$.
Quadrant II (left/west and up/north): $\tan\theta = \dfrac{18}{24} \implies \theta = 36{,}9^\circ$ above the negative $x$-axis (or $36{,}9^\circ$ north of west).
---
Q: A $6{,}0\ \text{kg}$ block sits on a $22^\circ$ incline ($g = 9{,}8\ \text{m·s}^{-2}$). Calculate the components of its weight parallel and perpendicular to the incline.
A: Weight $w = mg = 6{,}0 \times 9{,}8 = 58{,}8\ \text{N}$.
$w_\parallel = w\sin 22^\circ = 58{,}8\sin 22^\circ = 22{,}0\ \text{N}$ down the slope.
$w_\perp = w\cos 22^\circ = 58{,}8\cos 22^\circ = 54{,}5\ \text{N}$ perpendicular into the slope.
```

## Further help

- Siyavula Physical Sciences Grade 11, [1.3 Components of vectors](https://www.siyavula.com/read/za/physical-sciences/grade-11/vectors-in-two-dimensions/01-vectors-in-two-dimensions-03).
