---
title: Parallel and perpendicular lines
youtube_query: Grade 11 parallel and perpendicular lines gradients
subject: pure-mathematics
topic: Analytical geometry
part: Geometry
term: 2
subtopic: Distance, midpoint, gradient and the equation of a line
order: 513
---

> **What you'll learn:** *why* parallel lines share the exact same gradient and *why* perpendicular lines satisfy $m_{1}\cdot m_{2} = -1$, and how to find equations of parallel lines, altitudes, and perpendicular bisectors.
>
> **Prerequisites:** [Line through two points and point-gradient form](/library/pure-mathematics/analytical-geometry/line-through-two-points-and-point-gradient-form).

## 1. Rotating a slope triangle by $90^\circ$

Draw a line rising $2$ units up for every $3$ units right, so $m_{1} = \frac{2}{3}$.

- A **parallel** line copies the exact same step—$2$ up for $3$ right—so **$m_{1} = m_{2}$**.
- Now rotate that slope triangle by **$90^\circ$ counter-clockwise**: $3$ units right turns into $3$ units **up**, and $2$ units up turns into $2$ units **left** ($-2$). So the new gradient becomes $-\frac{3}{2}$—the **negative reciprocal**! Multiply them together: $\frac{2}{3}\cdot\left(-\frac{3}{2}\right) = -1$.

Toggle between **Perpendicular** and **Parallel** in the diagram below to watch both triangles match:

```diagram
name: analytical-line-explorer
```

```rule
title: Parallel and perpendicular gradient tests (non-vertical lines)
\text{Parallel } (L_{1} \parallel L_{2}): \qquad m_{1} = m_{2}
\text{Perpendicular } (L_{1} \perp L_{2}): \qquad m_{1} \cdot m_{2} = -1 \quad\Longleftrightarrow\quad m_{2} = -\frac{1}{m_{1}}
\text{Special case: a horizontal line } (y = k) \text{ is perpendicular to a vertical line } (x = c).
```

## 2. Always rewrite $ax + by = c$ as $y = mx + c$ first

```compare
title: Reading gradients from standard form 2y + 4x = 10
left_title: Right: isolate y first
left:
$$2y = -4x + 10 \;\Longrightarrow\; y = -2x + 5$$
So $m = -2$. Any perpendicular line has gradient:
$$m_{\perp} = -\frac{1}{-2} = +\frac{1}{2}$$
right_title: Wrong: taking the coefficient of x before dividing
right:
Saying $m = 4$ from $2y + 4x = 10$ ignores both the sign move across $=$ and the coefficient $2$ in front of $y$!
```

```tryit
title: Quick check
prompt: Line $L_{1}$ has equation $3x - 2y = 8$. Find the gradient of a line **(a)** parallel to $L_{1}$ and **(b)** perpendicular to $L_{1}$.
hint: Rearrange $3x - 2y = 8$ into $y = mx + c$ first.
answer: $2y = 3x - 8 \implies y = \frac{3}{2}x - 4$, so $m_{1} = \frac{3}{2}$. **(a)** Parallel: $m = \frac{3}{2}$. **(b)** Perpendicular: $m = -\frac{2}{3}$.
```

## 3. Worked examples

```steps
title: Example 1 (Parallel line through a point): Find the equation of the line parallel to $y = 3x - 4$ passing through $(2;\ 1)$
Read the gradient of the given line :: m = 3
Parallel lines share the same gradient :: m_{\parallel} = 3
Substitute $(2;\ 1)$ into point-gradient form :: y - 1 = 3(x - 2) \;\Longrightarrow\; y = 3x - 5
```

```steps
title: Example 2 (Perpendicular bisector): Find the equation of the perpendicular bisector of $P(-2;\ 3)$ and $Q(4;\ 1)$
Find the midpoint $M$ (the bisector passes through $M$) :: M = \left(\frac{-2 + 4}{2};\ \frac{3 + 1}{2}\right) = (1;\ 2)
Find gradient $m_{PQ}$ :: m_{PQ} = \frac{1 - 3}{4 - (-2)} = \frac{-2}{6} = -\frac{1}{3}
Flip and negate for the perpendicular gradient :: m_{\perp} = +3
Use $M(1;\ 2)$ and $m_{\perp} = 3$ :: y - 2 = 3(x - 1) \;\Longrightarrow\; y = 3x - 1
```

```steps
title: Example 3 (Exam level — solve for an unknown coordinate): $AB \perp CD$ where $A(1;\ 2)$, $B(4;\ 8)$, $C(-1;\ 5)$, and $D(k;\ 3)$. Find $k$.
Compute gradient $m_{AB}$ :: m_{AB} = \frac{8 - 2}{4 - 1} = \frac{6}{3} = 2
Required perpendicular gradient $m_{CD}$ :: m_{CD} = -\frac{1}{2}
Write $m_{CD}$ using $C(-1;\ 5)$ and $D(k;\ 3)$ :: \frac{3 - 5}{k - (-1)} = -\frac{1}{2} \;\Longrightarrow\; \frac{-2}{k + 1} = -\frac{1}{2}
Cross-multiply and solve :: -(k + 1) = -4 \;\Longrightarrow\; k + 1 = 4 \;\Longrightarrow\; k = 3
```

> **Common mistakes**
>
> - **Negating without flipping (or flipping without negating):** perpendicular to $\frac{2}{3}$ is $-\frac{3}{2}$, not $-\frac{2}{3}$ and not $\frac{3}{2}$.
> - **Writing a perpendicular bisector through one endpoint instead of the midpoint:** a **perpendicular bisector** passes through the **midpoint** $M$, whereas an **altitude** passes through the opposite vertex.
> - **Using $m_{1}\cdot m_{2} = -1$ on horizontal/vertical lines:** $m = 0$ has no reciprocal; pair $y = c$ directly with $x = k$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Determine whether $y = \frac{2}{5}x + 1$ and $5y - 2x = 15$ are parallel, perpendicular, or neither.
A: Rearranging the second gives $5y = 2x + 15 \implies y = \frac{2}{5}x + 3$. Both have $m = \frac{2}{5}$, so they are **parallel**.
---
Q: Find the equation of the line perpendicular to $y = -4x + 7$ that passes through $(8;\ -1)$.
A: $m_{\perp} = \frac{1}{4}$. Point-gradient form: $y - (-1) = \frac{1}{4}(x - 8) \implies y + 1 = \frac{1}{4}x - 2 \implies y = \frac{1}{4}x - 3$.
---
Q: In $\triangle PQR$, $P(0;\ 5)$, $Q(2;\ 1)$, and $R(6;\ 3)$. Prove that $P\hat{Q}R = 90^\circ$.
A: $m_{PQ} = \frac{1 - 5}{2 - 0} = -2$ and $m_{QR} = \frac{3 - 1}{6 - 2} = \frac{2}{4} = \frac{1}{2}$. Since $m_{PQ}\cdot m_{QR} = -2 \cdot \frac{1}{2} = -1$, $PQ \perp QR$, so $P\hat{Q}R = 90^\circ$.
---
Q: **(Exam level)** Find the equation of the perpendicular bisector of $A(-3;\ -4)$ and $B(5;\ 2)$.
A: Midpoint $M = (1;\ -1)$. Gradient $m_{AB} = \frac{2 - (-4)}{5 - (-3)} = \frac{6}{8} = \frac{3}{4}$, so $m_{\perp} = -\frac{4}{3}$. Line: $y - (-1) = -\frac{4}{3}(x - 1) \implies y = -\frac{4}{3}x + \frac{1}{3}$.
```

## Further help

- Siyavula Mathematics Grade 11, [4.4 Parallel and perpendicular lines](https://www.siyavula.com/read/za/mathematics/grade-11/analytical-geometry/04-analytical-geometry-04).
