---
title: Closed vector diagrams and equilibrium
subject: physical-sciences
topic: Vectors in two dimensions
part: Physics
term: 1
subtopic: Resolving and combining vectors
order: 113
pages: []
---

> **What you'll learn:** what it means when forces are in equilibrium, how a closed tail-to-head triangle represents zero resultant force, and how to solve hanging-sign or suspended-mass problems using both components and triangle geometry.
>
> **Prerequisites:** resolving vectors into components, Pythagoras' theorem, and sine/cosine trigonometry.
>
> **Why this matters:** traffic lights hung from two cables, pictures hanging on wall wires, and cranes holding steady loads are all **static equilibrium** problems — a classic Section B favourite in Paper 1.

## The idea in plain language

Imagine drawing three vectors tail-to-head: you start at point $O$, draw $\vec{F}_1$, attach $\vec{F}_2$, and attach $\vec{F}_3$. If the tip of the final arrow lands **right back at the starting tail $O$**, there is zero gap from start to finish. That means the resultant is **zero**:

$$\vec{F}_{\text{net}} = \vec{0}$$

When all forces acting on an object cancel out like this, the object is in **equilibrium**: if it was stationary, it stays stationary; if it was moving at constant velocity, it keeps moving at that exact constant velocity.

There are two equivalent ways to solve a three-force equilibrium problem:
1. **Closed vector triangle:** draw the three forces tail-to-head so they close into a triangle, fill in the angles inside the triangle, and use trigonometry ($\sin$, $\cos$, $\tan$, or the sine/cosine rule).
2. **Components ($\sum F_x = 0$ and $\sum F_y = 0$):** split every force horizontally and vertically. Balance left against right, and balance up against down.

### Definitions to memorise

```definition
title: Equilibrium (translational)
An object is in equilibrium when the resultant (net) force acting on it is zero ($\vec{F}_{\text{net}} = \vec{0}$), so it remains at rest or moves at constant velocity.
```

```definition
title: Closed vector diagram
A closed vector diagram is a tail-to-head vector polygon in which the head of the last vector ends at the tail of the first vector, indicating a zero resultant vector.
```

## Formulas

```formula
title: Conditions for 2D equilibrium
formula: F_{\text{net},x} = \sum F_x = 0 \qquad\text{and}\qquad F_{\text{net},y} = \sum F_y = 0
F_{\text{net},x} | sum of all horizontal force components | N | signed scalar
F_{\text{net},y} | sum of all vertical force components | N | signed scalar
use: whenever an object is stationary ("hangs at rest") or moves at constant velocity.
```

```diagram
name: vector-components-explorer
```

## Worked examples

### Example 1 (right-angled triangle): traffic light / block pulled aside by a rope

A $12\ \text{kg}$ block hangs from the ceiling by cable $T_1$. A horizontal rope pulls it sideways with tension $T_2$ until cable $T_1$ makes an angle of $35^\circ$ with the vertical. The block is stationary. Calculate $T_1$ and $T_2$ ($g = 9{,}8\ \text{m·s}^{-2}$).

First, find the weight: $w = mg = 12 \times 9{,}8 = 117{,}6\ \text{N}$ downwards.

#### Method A: Closed vector triangle

Because the three forces ($w$ straight down, $T_2$ horizontal right, and $T_1$ up-left at $35^\circ$ from the vertical) hold the block in equilibrium, placing them tail-to-head creates a **right-angled triangle** where $w$ is vertical, $T_2$ is horizontal, $T_1$ is the hypotenuse, and the angle between $w$ and $T_1$ is $35^\circ$:

```worked
title: Example 1 (Triangle method)
Given: $w = 117{,}6\ \text{N}$ down, $T_2$ horizontal, angle between vertical $w$ and $T_1$ is $35^\circ$
Unknown: $T_1$ and $T_2$
Equation: $\cos 35^\circ = \dfrac{w}{T_1}$ and $\tan 35^\circ = \dfrac{T_2}{w}$
Substitution: $T_1 = \dfrac{117{,}6}{\cos 35^\circ} = 143{,}56\ \text{N}$
Substitution: $T_2 = 117{,}6 \tan 35^\circ = 82{,}34\ \text{N}$
Answer: $T_1 = 143{,}6\ \text{N}$ and $T_2 = 82{,}3\ \text{N}$.
```

#### Method B: Components ($\sum F_x = 0, \sum F_y = 0$)

Let's check that components give the exact same numbers:
- Vertical ($\sum F_y = 0$): up equals down $\implies T_1\cos 35^\circ = w \implies T_1 = \dfrac{117{,}6}{\cos 35^\circ} = 143{,}6\ \text{N}$.
- Horizontal ($\sum F_x = 0$): left equals right $\implies T_1\sin 35^\circ = T_2 \implies T_2 = 143{,}56\sin 35^\circ = 82{,}3\ \text{N}$.

Notice how Method A and Method B are simply two ways of reading the exact same right-angled triangle!

### Example 2 (exam level): asymmetrical V-shaped cables

A loudspeaker of mass $15\ \text{kg}$ hangs at rest from two roof cables. Cable $A$ makes an angle of $30^\circ$ with the horizontal ceiling to the left, and cable $B$ makes an angle of $50^\circ$ with the horizontal ceiling to the right. Calculate the tension in each cable.

Weight $w = mg = 15 \times 9{,}8 = 147{,}0\ \text{N}$ downwards.

```steps
title: Solving asymmetrical equilibrium with components
step: Horizontal balance ($\sum F_x = 0$): the leftward pull of $A$ must equal the rightward pull of $B$:
$T_A\cos 30^\circ = T_B\cos 50^\circ \implies T_A = T_B \dfrac{\cos 50^\circ}{\cos 30^\circ} = 0{,}7422\, T_B$.
step: Vertical balance ($\sum F_y = 0$): the two upward components together support the weight $w$:
$T_A\sin 30^\circ + T_B\sin 50^\circ = 147{,}0$.
step: Substitute $T_A = 0{,}7422\, T_B$:
$(0{,}7422\, T_B)(0{,}5000) + T_B(0{,}7660) = 147{,}0 \implies 1{,}1371\, T_B = 147{,}0$.
step: Solve: $T_B = \dfrac{147{,}0}{1{,}1371} = 129{,}3\ \text{N}$, and $T_A = 0{,}7422 \times 129{,}28 = 95{,}9\ \text{N}$.
```

Notice the physical intuition: Cable $B$ is steeper ($50^\circ$ vs $30^\circ$), so cable $B$ carries **more** of the vertical weight ($T_B = 129{,}3\ \text{N} > T_A = 95{,}9\ \text{N}$). Checking which cable is steeper is an instant sanity check in exams.

```tryit
title: Spot the equilibrant
prompt: Two forces have a resultant $\vec{R} = 45\ \text{N}$ at $20^\circ$ north of east. What single third force $\vec{E}$ must be added to put the object into equilibrium?
hint: $\vec{R} + \vec{E} = \vec{0}$, so $\vec{E} = -\vec{R}$. Flip the direction completely!
answer: The equilibrant $\vec{E}$ has the same magnitude ($45\ \text{N}$) in the **exact opposite direction**: $45\ \text{N}$ at $20^\circ$ south of west.
```

> **Common mistakes**
>
> - Drawing the resultant arrow the wrong way around in a closed triangle: in a **closed** loop, arrows follow nose-to-tail all the way round back to the start; in a **resultant** triangle, the resultant goes from the first tail to the last head.
> - Assuming two cables at *different* angles share the weight equally ($T_A = T_B$). That is only true when the angles are equal (symmetrical).
> - Thinking that if $\vec{F}_{\text{net}} = 0$, the object *must* be stationary. An object moving at **constant velocity** (no acceleration) is also in equilibrium!

## Practice

```questions
Q: A $5{,}0\ \text{kg}$ spotlight hangs from a vertical chain, and a horizontal wire pulls it sideways until the chain is at $25^\circ$ to the vertical. Calculate the tension in the chain and the horizontal wire.
A: $w = 5{,}0 \times 9{,}8 = 49{,}0\ \text{N}$.
Vertical balance: $T_{\text{chain}}\cos 25^\circ = 49{,}0 \implies T_{\text{chain}} = \dfrac{49{,}0}{\cos 25^\circ} = 54{,}07\ \text{N}$.
Horizontal balance: $T_{\text{wire}} = T_{\text{chain}}\sin 25^\circ = 54{,}07\sin 25^\circ = 22{,}85\ \text{N}$ (or $49{,}0\tan 25^\circ$).
---
Q: A symmetric street lamp of weight $240\ \text{N}$ hangs from the midpoint of two identical wires, each inclined at $20^\circ$ below the horizontal ceiling. Calculate the tension in each wire.
A: By symmetry $T_1 = T_2 = T$. Both upward components support the weight:
$2T\sin 20^\circ = 240 \implies T = \dfrac{240}{2\sin 20^\circ} = 350{,}86\ \text{N}$.
Notice that shallow wires ($20^\circ$) must pull much harder than the weight itself!
---
Q: Three forces keep a knot in equilibrium: $F_1 = 30\ \text{N}$ east, $F_2 = 40\ \text{N}$ north, and $F_3$. Find the magnitude and direction of $F_3$.
A: Resultant of $F_1$ and $F_2$ is $R = \sqrt{30^2 + 40^2} = 50\ \text{N}$ at $\tan^{-1}(40/30) = 53{,}13^\circ$ north of east.
For equilibrium, $F_3$ must cancel $R$ exactly: $F_3 = 50\ \text{N}$ at $53{,}13^\circ$ south of west.
```

## Further help

- Siyavula Physical Sciences Grade 11, [1.2 Resultant of perpendicular vectors](https://www.siyavula.com/read/za/physical-sciences/grade-11/vectors-in-two-dimensions/01-vectors-in-two-dimensions-02) and [1.3 Components of vectors](https://www.siyavula.com/read/za/physical-sciences/grade-11/vectors-in-two-dimensions/01-vectors-in-two-dimensions-03).
