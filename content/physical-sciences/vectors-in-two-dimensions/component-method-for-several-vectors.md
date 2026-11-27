---
title: Resultant of several vectors by components
subject: physical-sciences
topic: Vectors in two dimensions
part: Physics
term: 1
subtopic: Resolving and combining vectors
order: 112
pages: []
---

> **What you'll learn:** how to add three or more 2D vectors at arbitrary angles accurately using the algebraic component method.
>
> **Prerequisites:** resolving a vector into $x$ and $y$ components, and finding the resultant of perpendicular vectors.
>
> **Why this matters:** in real Grade 11 exams you regularly face three or four forces acting on a ring, knot, or boat at different angles. Trying to solve a messy four-sided polygon by hand-drawn ruler and protractor invites errors; the component method works cleanly every time.

## The idea in plain language

Suppose three tugboats pull a ship in three different directions. Trying to combine diagonal arrows directly is awkward because directions mix together. Instead, use a simple three-step strategy: **split, total, recombine**.

1. **Split** every vector into an east-west ($x$) piece and a north-south ($y$) piece.
2. **Total** all the $x$-pieces together (ordinary 1D addition with $+$ and $-$ signs) to get $R_x$, and total all the $y$-pieces together to get $R_y$.
3. **Recombine** the single perpendicular pair $R_x$ and $R_y$ with Pythagoras and $\tan\theta$ to get the final resultant $\vec{R}$.

Notice why this works: motion east/west and motion north/south are completely independent, so once every vector lies purely along the $x$- or $y$-axis, adding them is just ordinary arithmetic.

### Key steps (your exam recipe)

```steps
title: The component method for any number of 2D vectors
step: Draw a neat rough sketch showing all vectors from the origin and **declare your positive directions** (for example: east $+x$, north $+y$).
step: Resolve **every** vector into its $x$- and $y$-components, attaching $+$ or $-$ signs according to its quadrant.
step: Sum the $x$-components to find $R_x = F_{1x} + F_{2x} + \dots$, and sum the $y$-components to find $R_y = F_{1y} + F_{2y} + \dots$
step: Sketch $R_x$ and $R_y$ tail-to-head to confirm which quadrant $\vec{R}$ points into.
step: Calculate magnitude $R = \sqrt{R_x^2 + R_y^2}$ and reference angle $\theta = \tan^{-1}\!\left(\dfrac{|R_y|}{|R_x|}\right)$. Convert $\theta$ into a full direction (e.g. bearing or "north of west").
```

```diagram
name: vector-components-explorer
```

## Worked examples

### Example 1 (exam style): three forces on a metal ring

Three horizontal forces act simultaneously on a small metal ring at the origin:
- $\vec{F}_1 = 40\ \text{N}$ east
- $\vec{F}_2 = 50\ \text{N}$ at $60^\circ$ north of east
- $\vec{F}_3 = 60\ \text{N}$ at $30^\circ$ north of west

Take **east ($+x$) and north ($+y$) as positive**. Determine the magnitude and direction of the resultant force.

Organising components in a table keeps signs clean and earns method marks immediately:

| Vector | $x$-component (N) | $y$-component (N) |
| --- | --- | --- |
| $\vec{F}_1 = 40\ \text{N}$ east | $+40{,}0$ | $0$ |
| $\vec{F}_2 = 50\ \text{N}$, $60^\circ$ N of E | $+50\cos 60^\circ = +25{,}0$ | $+50\sin 60^\circ = +43{,}30$ |
| $\vec{F}_3 = 60\ \text{N}$, $30^\circ$ N of W | $-60\cos 30^\circ = -51{,}96$ | $+60\sin 30^\circ = +30{,}0$ |
| **Resultant $\vec{R}$** | $R_x = +13{,}04$ | $R_y = +73{,}30$ |

```worked
title: Example 1 (recombining R_x and R_y)
Given: $R_x = +13{,}04\ \text{N}$ (east), $R_y = +73{,}30\ \text{N}$ (north)
Unknown: $R$ (magnitude and direction)
Equation: $R = \sqrt{R_x^2 + R_y^2}$ and $\tan\theta = \dfrac{|R_y|}{|R_x|}$ (θ above the +x-axis)
Substitution: $R = \sqrt{(13{,}04)^2 + (73{,}30)^2} = \sqrt{170{,}04 + 5372{,}89} = 74{,}45\ \text{N}$
Substitution: $\tan\theta = \dfrac{73{,}30}{13{,}04} = 5{,}621 \implies \theta = 79{,}9^\circ$
Answer: $\vec{R} = 74{,}5\ \text{N}$ at $79{,}9^\circ$ north of east (bearing $010{,}1^\circ$).
```

### Example 2 (tricky signs and bearings): hiker displacements

A surveyor walks three legs: $300\ \text{m}$ on a bearing of $040^\circ$, then $450\ \text{m}$ due south, then $200\ \text{m}$ due west. Find the surveyor's resultant displacement from camp.

Remember: a **bearing** is measured clockwise from north! So bearing $040^\circ$ means $40^\circ$ east of north (vertical axis touches the angle!).

```steps
title: Computing net displacement
step: Take east ($+x$) and north ($+y$) as positive.
step: Leg 1 ($300\ \text{m}$ at $40^\circ$ E of N): $x_1 = +300\sin 40^\circ = +192{,}84\ \text{m}$, $y_1 = +300\cos 40^\circ = +229{,}81\ \text{m}$.
step: Leg 2 ($450\ \text{m}$ south): $x_2 = 0\ \text{m}$, $y_2 = -450\ \text{m}$.
step: Leg 3 ($200\ \text{m}$ west): $x_3 = -200\ \text{m}$, $y_3 = 0\ \text{m}$.
step: Totals: $R_x = 192{,}84 + 0 - 200 = -7{,}16\ \text{m}$ (west), $R_y = 229{,}81 - 450 + 0 = -220{,}19\ \text{m}$ (south).
step: Recombine (Quadrant III): $R = \sqrt{(-7{,}16)^2 + (-220{,}19)^2} = 220{,}3\ \text{m}$. From the south axis, $\tan\alpha = \dfrac{7{,}16}{220{,}19} \implies \alpha = 1{,}9^\circ$ west of south (bearing $181{,}9^\circ$).
```

```compare
title: Graphical tail-to-head vs Algebraic component method
left: Graphical (tail-to-head scale drawing)
- Good for visualising the physical path and checking your answer roughly.
- Accuracy is limited by pencil thickness, ruler, and protractor ($\pm 1^\circ$ to $2^\circ$).
- Used in exams only when specifically asked for a scale diagram.
right: Algebraic (component table)
- Works for 2, 3, 4 or more vectors at any angle.
- Exact to as many decimal places as your calculator gives.
- Default method for Physical Sciences Paper 1 calculations.
```

> **Common mistakes**
>
> - Dropping a negative sign when copying from the component table into $R_x$ or $R_y$.
> - Using $\tan^{-1}(R_y / R_x)$ without drawing a quadrant sketch, causing you to report $79{,}9^\circ$ north of east when both components were actually negative (south of west)!
> - Rounding $R_x$ and $R_y$ to 1 decimal place too early. Keep at least 3–4 decimal places in intermediate steps, and round only the final answer to two decimal places (DBE standard: 2 decimal places unless told otherwise).

## Practice

```questions
Q: Two forces act on an object: $F_1 = 20\ \text{N}$ at $30^\circ$ north of east and $F_2 = 15\ \text{N}$ at $50^\circ$ north of west. Find the magnitude and direction of the resultant force.
A: Take east ($+x$) and north ($+y$) positive.
$F_{1x} = +20\cos 30^\circ = +17{,}32\ \text{N}$, $F_{1y} = +20\sin 30^\circ = +10{,}00\ \text{N}$.
$F_{2x} = -15\cos 50^\circ = -9{,}64\ \text{N}$, $F_{2y} = +15\sin 50^\circ = +11{,}49\ \text{N}$.
$R_x = 17{,}32 - 9{,}64 = +7{,}68\ \text{N}$; $R_y = 10{,}00 + 11{,}49 = +21{,}49\ \text{N}$.
$R = \sqrt{7{,}68^2 + 21{,}49^2} = 22{,}82\ \text{N}$.
$\tan\theta = \dfrac{21{,}49}{7{,}68} \implies \theta = 70{,}33^\circ$ north of east.
---
Q: Three forces pull a post: $80\ \text{N}$ north, $60\ \text{N}$ east, and $100\ \text{N}$ at $37^\circ$ south of west. Find the net force on the post.
A: Take east ($+x$) and north ($+y$) positive.
$R_x = 0 + 60 - 100\cos 37^\circ = 60 - 79{,}86 = -19{,}86\ \text{N}$.
$R_y = 80 + 0 - 100\sin 37^\circ = 80 - 60{,}18 = +19{,}82\ \text{N}$.
$R = \sqrt{(-19{,}86)^2 + 19{,}82^2} = 28{,}06\ \text{N}$.
Quadrant II (west and north): $\tan\theta = \dfrac{19{,}82}{19{,}86} \implies \theta = 44{,}94^\circ$ north of west.
---
Q: A plane flies $200\ \text{km}$ east, then $150\ \text{km}$ on a bearing of $120^\circ$. What is its resultant displacement from its starting point?
A: Bearing $120^\circ$ is $30^\circ$ south of east ($+x$, $-y$).
$R_x = 200 + 150\cos 30^\circ = 329{,}90\ \text{km}$.
$R_y = 0 - 150\sin 30^\circ = -75{,}00\ \text{km}$.
$R = \sqrt{329{,}90^2 + (-75{,}00)^2} = 338{,}32\ \text{km}$.
$\tan\theta = \dfrac{75{,}00}{329{,}90} \implies \theta = 12{,}81^\circ$ south of east (bearing $102{,}81^\circ$).
```

## Further help

- Siyavula Physical Sciences Grade 11, [1.3 Components of vectors](https://www.siyavula.com/read/za/physical-sciences/grade-11/vectors-in-two-dimensions/01-vectors-in-two-dimensions-03).
