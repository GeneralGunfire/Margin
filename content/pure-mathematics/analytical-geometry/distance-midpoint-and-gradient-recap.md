---
title: Distance, midpoint and gradient recap
youtube_query: Grade 11 distance midpoint and gradient formulas
subject: pure-mathematics
topic: Analytical geometry
part: Geometry
term: 2
subtopic: Distance, midpoint, gradient and the equation of a line
order: 511
---

> **What you'll learn:** where the **distance**, **midpoint**, and **gradient** formulas come from geometrically, how to use them cleanly in either order, and how to test **collinear** points or solve for a missing coordinate.
>
> **Prerequisites:** Pythagoras' theorem and Grade 10 Cartesian plane coordinates.

## 1. Three formulas built from one right-angled triangle

Drop a horizontal run $\Delta x = x_{2} - x_{1}$ and a vertical rise $\Delta y = y_{2} - y_{1}$ between any two points $A(x_{1};\ y_{1})$ and $B(x_{2};\ y_{2})$:

- **Distance ($AB$):** $AB$ is the hypotenuse of that right-angled triangle, so Pythagoras immediately gives $AB = \sqrt{(x_{2} - x_{1})^{2} + (y_{2} - y_{1})^{2}}$.
- **Midpoint ($M$):** halfway along $x$ is the average of the $x$-values, and halfway along $y$ is the average of the $y$-values.
- **Gradient ($m_{AB}$):** steepness is $\frac{\text{rise}}{\text{run}} = \frac{y_{2} - y_{1}}{x_{2} - x_{1}}$.

Switch tabs below to inspect the triangle for $A(-2;\ 1)$ and $B(4;\ 5)$:

```diagram
name: analytical-line-explorer
```

```rule
title: Core analytical geometry toolkit
d_{AB} = \sqrt{(x_{2} - x_{1})^{2} + (y_{2} - y_{1})^{2}}
M_{AB} = \left(\frac{x_{1} + x_{2}}{2};\ \frac{y_{1} + y_{2}}{2}\right) \qquad m_{AB} = \frac{y_{2} - y_{1}}{x_{2} - x_{1}} \quad (x_{2} \neq x_{1})
```

## 2. Keeping signs consistent (and proving collinearity)

```compare
title: Two common slips with coordinates
left_title: Midpoint vs Distance (plus vs minus)
left:
- **Midpoint** *adds* coordinates to find the average: $\dfrac{x_1 + x_2}{2}$.
- **Distance & gradient** *subtract* coordinates to find the step between points: $x_2 - x_1$.
right_title: Testing whether A, B, C are collinear
right:
Three points lie on the **same straight line** (collinear) when the slope from $A$ to $B$ equals the slope from $B$ to $C$:
$$m_{AB} = m_{BC}$$
Because both segments share point $B$, equal slopes force one continuous line!
```

```tryit
title: Quick check
prompt: Given $P(-1;\ 4)$ and $Q(5;\ -2)$, calculate **(a)** the midpoint $M_{PQ}$, **(b)** the length $PQ$ in simplest surd form, and **(c)** the gradient $m_{PQ}$.
hint: Use $\Delta x = 5 - (-1) = 6$ and $\Delta y = -2 - 4 = -6$.
answer: **(a)** $M = \left(\frac{-1+5}{2};\ \frac{4-2}{2}\right) = (2;\ 1)$. **(b)** $PQ = \sqrt{6^{2} + (-6)^{2}} = \sqrt{72} = 6\sqrt{2}$. **(c)** $m_{PQ} = \frac{-6}{6} = -1$.
```

## 3. Worked examples

```steps
title: Example 1 (Proving three points are collinear): Show that $P(-1;\ 2)$, $Q(2;\ 4)$, and $R(5;\ 6)$ lie on the same straight line
Calculate gradient $m_{PQ}$ :: m_{PQ} = \frac{4 - 2}{2 - (-1)} = \frac{2}{3}
Calculate gradient $m_{QR}$ :: m_{QR} = \frac{6 - 4}{5 - 2} = \frac{2}{3}
Compare slopes and note shared point $Q$ :: m_{PQ} = m_{QR} \text{ with common point } Q \;\Longrightarrow\; P,\ Q,\ R \text{ are collinear}
```

```steps
title: Example 2 (Working backward from a midpoint): $M(3;\ -1)$ is the midpoint of $A(-2;\ 5)$ and $B(x;\ y)$. Find $B$.
Set $x$-average equal to $3$ :: \frac{-2 + x}{2} = 3 \;\Longrightarrow\; -2 + x = 6 \;\Longrightarrow\; x = 8
Set $y$-average equal to $-1$ :: \frac{5 + y}{2} = -1 \;\Longrightarrow\; 5 + y = -2 \;\Longrightarrow\; y = -7
Write coordinates of $B$ :: B(8;\ -7)
```

```steps
title: Example 3 (Exam level — solve for unknown coordinate via distance): Find all values of $k$ if $A(1;\ 2)$ and $B(5;\ k)$ are $5$ units apart
Write the distance equation and square both sides :: (5 - 1)^{2} + (k - 2)^{2} = 5^{2}
Simplify :: 16 + (k - 2)^{2} = 25 \;\Longrightarrow\; (k - 2)^{2} = 9
Take $\pm\sqrt{\phantom{9}}$ :: k - 2 = \pm 3
Solve both branches :: k = 5 \quad\text{or}\quad k = -1
```

> **Common mistakes**
>
> - **Swapping the subtraction order halfway through a gradient:** if $y_{2} - y_{1}$ is at the top, $x_{2} - x_{1}$ (in the **exact same order**) must be at the bottom.
> - **Writing $(5 - (-1))^{2}$ as $4^{2}$:** subtracting a negative adds ($5 + 1 = 6$).
> - **Forgetting $\pm$ when taking a square root in distance equations:** geometrically, two points on a vertical line $x = 5$ sit at distance $5$ from $A(1;\ 2)$—one above ($k = 5$) and one below ($k = -1$).

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Find the distance, midpoint, and gradient between $A(2;\ -3)$ and $B(6;\ 5)$.
A: $AB = \sqrt{(6-2)^{2} + (5-(-3))^{2}} = \sqrt{16 + 64} = \sqrt{80} = 4\sqrt{5}$; $M = (4;\ 1)$; $m_{AB} = \frac{8}{4} = 2$.
---
Q: If $M(-1;\ 3)$ is the midpoint of $P(a;\ 7)$ and $Q(4;\ b)$, find $a$ and $b$.
A: $\frac{a+4}{2} = -1 \implies a = -6$; $\frac{7+b}{2} = 3 \implies b = -1$.
---
Q: Determine whether $K(-3;\ 7)$, $L(1;\ -1)$, and $M(4;\ -7)$ are collinear.
A: $m_{KL} = \frac{-1 - 7}{1 - (-3)} = \frac{-8}{4} = -2$; $m_{LM} = \frac{-7 - (-1)}{4 - 1} = \frac{-6}{3} = -2$. Since $m_{KL} = m_{LM}$ and $L$ is shared, they are collinear.
---
Q: **(Exam level)** Given $C(p;\ 1)$ and $D(3;\ 5)$ with $CD = \sqrt{20}$, calculate the possible values of $p$.
A: $(3 - p)^{2} + (5 - 1)^{2} = 20 \implies (3 - p)^{2} + 16 = 20 \implies (3 - p)^{2} = 4 \implies 3 - p = \pm 2$. So $p = 1$ or $p = 5$.
```

## Further help

- Siyavula Mathematics Grade 11, [4.1 Revision](https://www.siyavula.com/read/za/mathematics/grade-11/analytical-geometry/04-analytical-geometry-01).
