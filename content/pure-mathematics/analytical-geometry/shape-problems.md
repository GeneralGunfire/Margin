---
title: Shape problems
youtube_query: Grade 11 analytical geometry parallelogram and rhombus problems
subject: pure-mathematics
topic: Analytical geometry
part: Geometry
term: 2
subtopic: Distance, midpoint, gradient and the equation of a line
order: 514
---

> **What you'll learn:** how to choose the shortest analytical test to classify triangles and quadrilaterals (parallelogram, rectangle, rhombus, square), and how to find a missing fourth vertex in two steps.
>
> **Prerequisites:** [Parallel and perpendicular lines](/library/pure-mathematics/analytical-geometry/parallel-and-perpendicular-lines).

## 1. Use the hierarchy of quadrilaterals to avoid wasted work

In Paper 2, you are often given four vertices $A, B, C, D$ and asked to prove that $ABCD$ is a specific shape. Never test more properties than you need—follow this **minimal proof ladder**:

| Shape to prove | Fastest analytical proof |
| --- | --- |
| **Parallelogram** | Diagonals bisect each other ($M_{AC} = M_{BD}$), **or** both opposite pairs parallel ($m_{AB} = m_{CD}$ and $m_{BC} = m_{AD}$). |
| **Rectangle** | First show it is a parallelogram, **then** show one corner is $90^\circ$ ($m_{AB}\cdot m_{BC} = -1$) or diagonals are equal ($AC = BD$). |
| **Rhombus** | First show it is a parallelogram, **then** show two adjacent sides are equal ($AB = BC$) or diagonals are perpendicular ($m_{AC}\cdot m_{BD} = -1$). |
| **Square** | Prove it is a **rectangle AND a rhombus** (e.g., parallelogram + $AB = BC$ + $m_{AB}\cdot m_{BC} = -1$). |

```rule
title: Quickest triangle & quadrilateral shortcuts
\text{Right triangle at } B: \quad m_{AB} \cdot m_{BC} = -1 \quad (\text{or } AB^{2} + BC^{2} = AC^{2})
\text{Parallelogram } ABCD: \quad M_{AC} = M_{BD} \quad (\text{diagonals share the same midpoint})
```

## 2. Finding a missing fourth vertex $D$ of parallelogram $ABCD$

Notice vertex order matters! In $ABCD$, **$A$ and $C$** are opposite corners (first diagonal $AC$), and **$B$ and $D$** are opposite corners (second diagonal $BD$).

```compare
title: Two clean ways to locate vertex D of parallelogram ABCD
left_title: Method 1: Midpoints of diagonals match
left:
Set $M_{BD} = M_{AC}$:
$$\frac{x_{B} + x_{D}}{2} = \frac{x_{A} + x_{C}}{2},\qquad \frac{y_{B} + y_{D}}{2} = \frac{y_{A} + y_{C}}{2}$$
Gives $x_{D} = x_{A} + x_{C} - x_{B}$ immediately!
right_title: Method 2: Vector / step translation
right:
To walk from $B$ to $A$, move $(\Delta x,\ \Delta y)$.
Opposite side $CD$ is equal and parallel, so take that **exact same step** from $C$ to land on $D$!
```

```tryit
title: Quick check
prompt: Given parallelogram $ABCD$ with $A(1;\ 2)$, $B(5;\ 3)$, and $C(6;\ 7)$, find the coordinates of $D$.
hint: Diagonals $AC$ and $BD$ share the same midpoint $M$. Find $M_{AC}$ first, or use $D = A + C - B$.
answer: $M_{AC} = \left(\frac{1+6}{2};\ \frac{2+7}{2}\right) = (3{,}5;\ 4{,}5)$. Setting $\frac{5+x_D}{2} = 3{,}5$ and $\frac{3+y_D}{2} = 4{,}5$ gives $D(2;\ 6)$.
```

## 3. Worked examples

```steps
title: Example 1 (Classify a triangle and find its area): Show that $\triangle PQR$ with $P(-2;\ 1)$, $Q(2;\ 3)$, and $R(4;\ -1)$ is right-angled isosceles, and find its area
Check adjacent gradients at $Q$ :: m_{PQ} = \frac{3 - 1}{2 - (-2)} = \frac{1}{2},\qquad m_{QR} = \frac{-1 - 3}{4 - 2} = -2
Multiply gradients :: m_{PQ}\cdot m_{QR} = \frac{1}{2}(-2) = -1 \;\Longrightarrow\; P\hat{Q}R = 90^\circ
Check lengths $PQ$ and $QR$ :: PQ = \sqrt{4^{2} + 2^{2}} = \sqrt{20},\qquad QR = \sqrt{2^{2} + (-4)^{2}} = \sqrt{20}
Equal legs and $90^\circ$ at $Q$ :: \triangle PQR \text{ is right-angled isosceles}
Area $= \frac{1}{2}(\text{base})(\text{height})$ :: \text{Area} = \frac{1}{2}\sqrt{20}\cdot\sqrt{20} = 10\text{ square units}
```

```steps
title: Example 2 (Prove a quadrilateral is a rhombus): Show that $A(0;\ 0)$, $B(4;\ 3)$, $C(9;\ 3)$, and $D(5;\ 0)$ form a rhombus
Test midpoints of diagonals $AC$ and $BD$ :: M_{AC} = \left(\frac{9}{2};\ \frac{3}{2}\right),\quad M_{BD} = \left(\frac{4+5}{2};\ \frac{3+0}{2}\right) = \left(\frac{9}{2};\ \frac{3}{2}\right)
Diagonals bisect each other :: ABCD \text{ is a parallelogram}
Check lengths of two adjacent sides $AB$ and $BC$ :: AB = \sqrt{4^{2} + 3^{2}} = 5,\qquad BC = 9 - 4 = 5
Parallelogram with adjacent sides equal :: ABCD \text{ is a rhombus}
```

```steps
title: Example 3 (Exam level — intersecting diagonals and rectangle test): In $KLMN$, $K(-1;\ 1)$, $L(3;\ 3)$, $M(5;\ -1)$, and $N(1;\ -3)$. Prove $KLMN$ is a square.
Check midpoint of diagonals :: M_{KM} = (2;\ 0),\quad M_{LN} = (2;\ 0) \;\Longrightarrow\; \text{parallelogram}
Check angle at $L$ :: m_{KL} = \frac{2}{4} = \frac{1}{2},\quad m_{LM} = \frac{-4}{2} = -2 \;\Longrightarrow\; m_{KL}\cdot m_{LM} = -1 \ (K\hat{L}M = 90^\circ)
Check adjacent side lengths :: KL = \sqrt{4^{2} + 2^{2}} = \sqrt{20},\quad LM = \sqrt{2^{2} + (-4)^{2}} = \sqrt{20}
Parallelogram + $90^\circ$ corner + equal adjacent sides :: KLMN \text{ is a square}
```

> **Common mistakes**
>
> - **Assuming equal opposite sides automatically proves a rectangle:** a parallelogram also has equal opposite sides—you must also prove one $90^\circ$ corner (or equal diagonals).
> - **Reading vertices in the wrong order:** going clockwise or anticlockwise around $ABCD$ means the diagonals are $AC$ and $BD$, never $AB$ and $CD$.
> - **Dropping units² or squaring wrong:** in area $= \frac{1}{2}\cdot b\cdot h$, remember $\sqrt{20}\cdot\sqrt{20} = 20$, not $400$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Given $P(2;\ 1)$, $Q(6;\ 2)$, $R(5;\ 6)$, and $S(1;\ 5)$, prove that $PQRS$ is a parallelogram.
A: $M_{PR} = (3{,}5;\ 3{,}5)$ and $M_{QS} = (3{,}5;\ 3{,}5)$. Since the diagonals bisect each other, $PQRS$ is a parallelogram.
---
Q: Using Question 1, prove further that $PQRS$ is a square.
A: $m_{PQ} = \frac{1}{4}$ and $m_{QR} = \frac{4}{-1} = -4$, so $m_{PQ}\cdot m_{QR} = -1$ ($\hat{Q} = 90^\circ$). Also $PQ = \sqrt{4^{2} + 1^{2}} = \sqrt{17}$ and $QR = \sqrt{(-1)^{2} + 4^{2}} = \sqrt{17}$. Hence $PQRS$ is a square.
---
Q: Three vertices of parallelogram $EFGH$ are $E(-2;\ 0)$, $F(3;\ 2)$, and $G(5;\ 7)$. Find $H$.
A: $M_{EG} = (1{,}5;\ 3{,}5) = \left(\frac{3+x_H}{2};\ \frac{2+y_H}{2}\right) \implies H(0;\ 5)$.
---
Q: **(Exam level)** In $\triangle ABC$, $A(1;\ 4)$, $B(-3;\ -2)$, and $C(5;\ -4)$. Find the coordinates of the midpoint $M$ of $BC$, and find the length of $AM$.
A: $M = \left(\frac{-3+5}{2};\ \frac{-2+(-4)}{2}\right) = (1;\ -3)$. Since $A(1;\ 4)$ and $M(1;\ -3)$ share $x = 1$, $AM = 4 - (-3) = 7$ units.
```

## Further help

- Siyavula Mathematics Grade 11, [4.5 Chapter summary](https://www.siyavula.com/read/za/mathematics/grade-11/analytical-geometry/04-analytical-geometry-05).
