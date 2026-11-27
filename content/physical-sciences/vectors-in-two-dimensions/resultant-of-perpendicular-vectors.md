---
title: Resultant of perpendicular vectors
subject: physical-sciences
topic: Vectors in two dimensions
part: Physics
term: 1
subtopic: Resultant of perpendicular vectors
order: 101
pages: []
---

> **What you'll learn:** how to replace two vectors that act at right angles to each other by one vector (the resultant), and how to give its size and its direction.
>
> **Prerequisites:** vectors and scalars from Grade 10, Pythagoras' theorem, and the tangent ratio (opposite over adjacent) in a right-angled triangle.
>
> **Why this matters:** two people pulling a boat with ropes, a plane flying through a crosswind, and a hiker who walks east and then north all have the same problem. Several pushes or movements act at once, and you want the single push or movement that does the same job.

## The idea in plain language

Some quantities only need a number and a unit: a mass of 3 kg, a time of 5 s. Others need a **direction** as well: a force of 5 N *to the east*, a velocity of 12 m·s⁻¹ *upwards*. The second kind are vectors, and they cannot be added by simply adding the numbers.

Think of a crate with one rope pulling it east and another pulling it north. It does not move east, and it does not move north. It moves *diagonally*, somewhere between the two. The single force that would make the crate move exactly like that is the **resultant**.

To find it, draw the vectors **tail to head**: put the tail of the second vector on the head of the first. The resultant is the arrow from the tail of the first to the head of the second. When the two vectors are at right angles, the three arrows form a right-angled triangle, and you can use Pythagoras for the size and the tangent ratio for the direction.

```diagram
name: perpendicular-resultant
ax: 4
ay: 3
aLabel: A
bLabel: B
rLabel: R
thetaLabel: θ
caption: A and B are drawn tail to head. The resultant R closes the triangle and θ is its direction, measured from A.
```

### Definitions to memorise

```definition
title: Vector quantity
A vector quantity is a physical quantity that has both magnitude and direction.
```

```definition
title: Scalar quantity
A scalar quantity is a physical quantity that has magnitude only.
```

```definition
title: Resultant vector
The resultant of two or more vectors is the single vector which has the same effect as the original vectors taken together.
```

> **Note on the wording:** these are the standard CAPS-style definitions. Check them against your own class notes or textbook and use the exact phrasing your teacher marks to, because Physics marks are often given for the key words.

## Formulas

```formula
title: Size (magnitude) of the resultant
formula: R^2 = A^2 + B^2
formula: R = \sqrt{A^2 + B^2}
R | magnitude of the resultant | N, m or m·s⁻¹ | scalar (the magnitude of a vector)
A, B | magnitudes of the two perpendicular vectors | as for A and B | scalars (magnitudes of vectors)
use: when two vectors of the same kind (two forces, two velocities, two displacements) act at 90° to each other.
```

```formula
title: Direction of the resultant
formula: \tan\theta = \frac{\text{opposite}}{\text{adjacent}} = \frac{B}{A}
formula: \theta = \tan^{-1}\!\left(\frac{B}{A}\right)
\theta | angle between R and vector A | degrees (°) | scalar
B | side opposite θ (the vector that does not touch θ) | as for B | scalar (magnitude)
A | side adjacent to θ (the vector that touches θ) | as for A | scalar (magnitude)
use: after finding R, to say which way it points. State which line θ is measured from, for example "37° south of west".
```

The magnitude and the direction together describe the resultant. An answer without a direction is only half an answer.

## Worked examples

Every Physics answer is laid out the same way: **Given, Unknown, Equation, Substitution (with units), Answer (with unit, direction, and the right number of significant figures)**. Marks are given for each part, so show them all.

### Example 1 (basic): two ropes on a crate

Two ropes pull a crate. One pulls with 30.0 N to the east, the other with 40.0 N to the north. Find the resultant force.

```diagram
name: perpendicular-resultant
ax: 30
ay: 40
aLabel: 30.0 N east
bLabel: 40.0 N north
rLabel: R
thetaLabel: θ
caption: Example 1. The two ropes pull at right angles, so the resultant is the hypotenuse.
```

```worked
title: Example 1
Given: $F_1 = 30.0\ \text{N}$ east, $F_2 = 40.0\ \text{N}$ north (at 90° to each other)
Unknown: $R$ (magnitude and direction)
Equation: $R^2 = F_1^2 + F_2^2$ and $\tan\theta = \dfrac{F_2}{F_1}$
Substitution: $R^2 = (30.0\ \text{N})^2 + (40.0\ \text{N})^2 = 2500\ \text{N}^2$
Substitution: $R = 50.0\ \text{N}$
Substitution: $\tan\theta = \dfrac{40.0\ \text{N}}{30.0\ \text{N}}$, so $\theta = 53.1°$
Answer: $R = 50.0\ \text{N}$ at $53.1°$ north of east.
```

### Example 2 (medium): a boat in a current

A boat's engine drives it north across a river at 6.0 m·s⁻¹ relative to the water. The current flows east at 2.5 m·s⁻¹. Find the velocity of the boat relative to the river bank.

```diagram
name: perpendicular-resultant
ax: 2.5
ay: 6
aLabel: current 2.5 m·s⁻¹
bLabel: boat 6.0 m·s⁻¹
rLabel: v
thetaLabel: θ
from: y
caption: Example 2. Here θ is measured from the boat's heading (north), because that is the side next to it.
```

```worked
title: Example 2
Given: $v_{\text{boat}} = 6.0\ \text{m·s}^{-1}$ north, $v_{\text{current}} = 2.5\ \text{m·s}^{-1}$ east
Unknown: $v_{R}$ (the resultant velocity: magnitude and direction)
Equation: $v_R^2 = v_{\text{boat}}^2 + v_{\text{current}}^2$ and $\tan\theta = \dfrac{v_{\text{current}}}{v_{\text{boat}}}$ (θ from north)
Substitution: $v_R^2 = (6.0\ \text{m·s}^{-1})^2 + (2.5\ \text{m·s}^{-1})^2 = 42.25\ \text{m}^2\text{·s}^{-2}$
Substitution: $v_R = 6.5\ \text{m·s}^{-1}$
Substitution: $\tan\theta = \dfrac{2.5\ \text{m·s}^{-1}}{6.0\ \text{m·s}^{-1}}$, so $\theta = 23°$
Answer: $v_R = 6.5\ \text{m·s}^{-1}$ at $23°$ east of north.
```

### Example 3 (exam level): choose a positive direction first

A drifting buoy is pushed by two forces at right angles: 12 N to the west and 9.0 N to the south. Take **east and north as positive** and find the resultant force.

```diagram
name: perpendicular-resultant
ax: -12
ay: -9
aLabel: 12 N west
bLabel: 9.0 N south
rLabel: R
thetaLabel: θ
axes: true
caption: Example 3. East and north are positive, so both forces are negative. The resultant points into the south-west quarter.
```

```worked
title: Example 3
Given: Take east (+x) and north (+y) as positive. $F_x = -12\ \text{N}$ and $F_y = -9.0\ \text{N}$
Unknown: $R$ (magnitude and direction)
Equation: $R^2 = F_x^2 + F_y^2$ and $\tan\theta = \dfrac{|F_y|}{|F_x|}$ (θ from the west axis)
Substitution: $R^2 = (-12\ \text{N})^2 + (-9.0\ \text{N})^2 = 225\ \text{N}^2$
Substitution: $R = 15\ \text{N}$
Substitution: $\tan\theta = \dfrac{9.0\ \text{N}}{12\ \text{N}}$, so $\theta = 37°$
Answer: $R = 15\ \text{N}$ at $37°$ south of west.
```

Squaring removes the minus signs, so the magnitude is never negative. The signs tell you which quarter the resultant points into, and you use them to write the direction.

### Stating the direction

```diagram
name: direction-two-ways
```

The same resultant can be described by an angle from the horizontal axis or an angle from the vertical axis. Both are correct if you say which one you used. Make the angle part of the answer in words: "37° south of west" or "23° east of north".

```diagram
name: vector-components-explorer
```

## Units and conversions

Both vectors must be in the **same unit** before you use Pythagoras. Convert first, then calculate.

| You have | You want | Do this |
| --- | --- | --- |
| km | m | multiply by 1000 |
| cm | m | divide by 100 |
| km·h⁻¹ | m·s⁻¹ | divide by 3.6 |
| m·s⁻¹ | km·h⁻¹ | multiply by 3.6 |
| min | s | multiply by 60 |

SI units to use: force in newton (N), velocity in m·s⁻¹, displacement in m. For angles, make sure your calculator is in **degree mode**.

> **Common mistakes**
>
> - Adding the magnitudes: $30\ \text{N} + 40\ \text{N} = 70\ \text{N}$ is the answer only if both forces point the *same* way. At 90° the resultant is $50\ \text{N}$, which is less than $70\ \text{N}$.
> - Leaving out the direction. A vector answer needs a size, a unit and a direction.
> - Measuring θ from the wrong line, or not saying which line. "$\theta = 37°$" on its own is not enough. Say "$37°$ south of west".
> - Putting the sides the wrong way round: tan θ is the side opposite θ divided by the side next to θ. Swap them and you get the angle from the *other* axis.
> - Mixing units, such as km with m, or km·h⁻¹ with m·s⁻¹.
> - Forgetting to choose a positive direction in a question with negative values. Say it at the start (for example "east and north are positive").
> - Calculator in radian mode, or rounding in the middle of a calculation. Keep full values until the last line, then round to the same number of significant figures as the data.
> - Treating a scalar like a vector. Distance and speed have no direction. Displacement and velocity do.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Two forces act on a ring at right angles to each other: 5.0 N and 12 N. Calculate the magnitude of the resultant force, and the angle it makes with the 12 N force.
A: **Given:** $F_1 = 5.0\ \text{N}$, $F_2 = 12\ \text{N}$, at 90°.

**Unknown:** $R$ and θ (from the 12 N force).

**Equation:** $R^2 = F_1^2 + F_2^2$, $\tan\theta = \dfrac{F_1}{F_2}$

**Substitution:** $R^2 = (5.0\ \text{N})^2 + (12\ \text{N})^2 = 169\ \text{N}^2$, so $R = 13\ \text{N}$.
$\tan\theta = \dfrac{5.0\ \text{N}}{12\ \text{N}}$, so $\theta = 23°$.

**Answer:** $R = 13\ \text{N}$, at $23°$ to the 12 N force (towards the 5.0 N force).
---
Q: A plane flies north at 48 m·s⁻¹ relative to the air. A wind blows from the west at 14 m·s⁻¹, so the air moves towards the east. Find the velocity of the plane relative to the ground.
A: **Given:** $v_{\text{plane}} = 48\ \text{m·s}^{-1}$ north, $v_{\text{wind}} = 14\ \text{m·s}^{-1}$ east.

**Unknown:** $v_R$, magnitude and direction.

**Equation:** $v_R^2 = v_{\text{plane}}^2 + v_{\text{wind}}^2$, $\tan\theta = \dfrac{v_{\text{wind}}}{v_{\text{plane}}}$ (θ from north)

**Substitution:** $v_R^2 = (48\ \text{m·s}^{-1})^2 + (14\ \text{m·s}^{-1})^2 = 2500\ \text{m}^2\text{·s}^{-2}$, so $v_R = 50\ \text{m·s}^{-1}$.
$\tan\theta = \dfrac{14\ \text{m·s}^{-1}}{48\ \text{m·s}^{-1}}$, so $\theta = 16°$.

**Answer:** $v_R = 50\ \text{m·s}^{-1}$ at $16°$ east of north.
---
Q: A hiker walks 4.5 km east and then 2.8 km south. (a) What distance did the hiker walk? (b) What is the hiker's displacement? Give the magnitude and the direction.
A: (a) Distance is a scalar, so add the lengths: $4.5\ \text{km} + 2.8\ \text{km} = 7.3\ \text{km}$.

(b) **Given:** $\Delta x_1 = 4.5\ \text{km}$ east, $\Delta x_2 = 2.8\ \text{km}$ south.

**Unknown:** resultant displacement.

**Equation:** $R^2 = \Delta x_1^2 + \Delta x_2^2$, $\tan\theta = \dfrac{\Delta x_2}{\Delta x_1}$

**Substitution:** $R^2 = (4.5\ \text{km})^2 + (2.8\ \text{km})^2 = 28.09\ \text{km}^2$, so $R = 5.3\ \text{km}$.
$\tan\theta = \dfrac{2.8\ \text{km}}{4.5\ \text{km}}$, so $\theta = 32°$.

**Answer:** displacement $= 5.3\ \text{km}$ at $32°$ south of east. It is shorter than the $7.3\ \text{km}$ walked because displacement is the straight line from start to finish.
---
Q: The resultant of two perpendicular forces is 25 N. One of the forces is 7.0 N. Calculate the other force, and the angle the resultant makes with it.
A: **Given:** $R = 25\ \text{N}$, $F_1 = 7.0\ \text{N}$, forces at 90°.

**Unknown:** $F_2$, and the angle θ between $R$ and $F_2$.

**Equation:** $R^2 = F_1^2 + F_2^2$, so $F_2^2 = R^2 - F_1^2$; and $\tan\theta = \dfrac{F_1}{F_2}$

**Substitution:** $F_2^2 = (25\ \text{N})^2 - (7.0\ \text{N})^2 = 576\ \text{N}^2$, so $F_2 = 24\ \text{N}$.
$\tan\theta = \dfrac{7.0\ \text{N}}{24\ \text{N}}$, so $\theta = 16°$.

**Answer:** $F_2 = 24\ \text{N}$, and $R$ makes an angle of $16°$ with it.
---
Q: A learner says: "Two forces of 6.0 N and 8.0 N act on a block, so the resultant is 14 N." (a) When is the learner right? (b) What is the resultant if the forces act in opposite directions? (c) What is the resultant if they are at 90° to each other?
A: (a) Only when both forces point in the **same** direction: $6.0\ \text{N} + 8.0\ \text{N} = 14\ \text{N}$ in that direction.

(b) Opposite directions: subtract the magnitudes, $8.0\ \text{N} - 6.0\ \text{N} = 2.0\ \text{N}$, in the direction of the larger force.

(c) At 90°: $R = \sqrt{(6.0\ \text{N})^2 + (8.0\ \text{N})^2} = 10\ \text{N}$, at $\tan^{-1}\!\left(\dfrac{6.0}{8.0}\right) = 37°$ to the 8.0 N force.

The resultant depends on the angle between the vectors, so it is always between $2.0\ \text{N}$ and $14\ \text{N}$ for these two forces.
---
Q: Take east and north as positive. A wind blows at 15 m·s⁻¹ towards the west while an air current moves at 8.0 m·s⁻¹ towards the south, both acting on a weather balloon. Find the velocity of the balloon relative to the ground, assuming it moves with the combined air flow. Give the direction as an angle from the west.
A: **Given:** east and north positive. $v_x = -15\ \text{m·s}^{-1}$, $v_y = -8.0\ \text{m·s}^{-1}$.

**Unknown:** $v_R$ and its direction.

**Equation:** $v_R^2 = v_x^2 + v_y^2$, $\tan\theta = \dfrac{|v_y|}{|v_x|}$ (θ from the west axis)

**Substitution:** $v_R^2 = (-15\ \text{m·s}^{-1})^2 + (-8.0\ \text{m·s}^{-1})^2 = 289\ \text{m}^2\text{·s}^{-2}$, so $v_R = 17\ \text{m·s}^{-1}$.
$\tan\theta = \dfrac{8.0}{15}$, so $\theta = 28°$.

**Answer:** $v_R = 17\ \text{m·s}^{-1}$ at $28°$ south of west.
```

## Further help

- Siyavula Physical Sciences Grade 11, [1.2 Resultant of perpendicular vectors](https://www.siyavula.com/read/za/physical-sciences/grade-11/vectors-in-two-dimensions/01-vectors-in-two-dimensions-02).
- Siyavula Physical Sciences Grade 11, [1.3 Components of vectors](https://www.siyavula.com/read/za/physical-sciences/grade-11/vectors-in-two-dimensions/01-vectors-in-two-dimensions-03) (for the next lesson).
