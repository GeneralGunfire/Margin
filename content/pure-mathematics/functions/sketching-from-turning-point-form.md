---
title: Sketching from turning-point form
youtube_query: Grade 11 sketching a parabola from turning point form
subject: pure-mathematics
topic: Functions
part: Algebra
term: 2
subtopic: The parabola
order: 612
---

> **What you'll learn:** how to sketch any parabola cleanly with all required CAPS exam features—shape, turning point, $y$-intercept, $x$-intercepts (if any), and axis of symmetry—and read off intervals such as $f(x) > 0$ or where $f$ is increasing.
>
> **Prerequisites:** [Effect of a, p and q](/library/pure-mathematics/functions/effect-of-a-p-and-q) and [Solving and turning points](/library/pure-mathematics/equations-and-inequalities/solving-and-turning-points).

## 1. The four features every parabola sketch needs

You never need a giant table of points to sketch a parabola accurately. Four key features lock in the entire shape:

1. **Direction (shape):** $a > 0$ opens up ($\cup$); $a < 0$ opens down ($\cap$).
2. **Turning point:** $(-p;\ q)$ directly from $y = a(x + p)^{2} + q$ (or $x = -\frac{b}{2a}$ from standard form).
3. **$y$-intercept:** set $x = 0$ and evaluate $y$.
4. **$x$-intercepts:** set $y = 0$ and solve for $x$ (keep the expression in turning-point form to take $\pm\sqrt{\phantom{x}}$ directly—no need to expand!).

```rule
title: Solving for x-intercepts from turning-point form
a(x + p)^{2} + q = 0 \;\Longrightarrow\; (x + p)^{2} = -\frac{q}{a}
\text{If } -\frac{q}{a} \geq 0:\ \text{two (or one) } x\text{-intercepts} \qquad \text{If } -\frac{q}{a} < 0:\ \text{no } x\text{-intercepts}
```

## 2. Two ways to find the turning point

```compare
title: Starting from turning-point form vs standard form
left_title: Given y = a(x + p)² + q
left:
Read the turning point immediately as $(-p;\ q)$, and solve $(x + p)^{2} = -\frac{q}{a}$ for $x$-intercepts without expanding.
right_title: Given y = ax² + bx + c
right:
Either complete the square **or** find the axis of symmetry $x = -\frac{b}{2a}$ and substitute back into $y$ to get the turning point!
```

```tryit
title: Quick check
prompt: Find the turning point, $y$-intercept, and $x$-intercepts of $f(x) = 2(x - 1)^{2} - 8$.
hint: Do not expand! Set $2(x - 1)^{2} - 8 = 0$, move $8$ across, divide by $2$, and take $\pm\sqrt{\phantom{x}}$.
answer: Turning point: $(1;\ -8)$. $y$-intercept: $f(0) = 2(0 - 1)^{2} - 8 = -6$, so $(0;\ -6)$. $x$-intercepts: $(x - 1)^{2} = 4 \implies x - 1 = \pm 2 \implies (3;\ 0)$ and $(-1;\ 0)$.
```

## 3. Worked examples

```steps
title: Example 1 (Sketch from turning-point form): Find all key features of $f(x) = -(x + 2)^{2} + 9$
Direction and turning point :: a = -1 < 0\ (\cap),\quad \text{TP: } (-2;\ 9)
$y$-intercept (set $x = 0$) :: y = -(0 + 2)^{2} + 9 = 5 \;\Longrightarrow\; (0;\ 5)
$x$-intercepts (set $y = 0$) :: (x + 2)^{2} = 9 \;\Longrightarrow\; x + 2 = \pm 3
Solve for $x$ :: x = 1 \text{ or } x = -5 \;\Longrightarrow\; (1;\ 0),\ (-5;\ 0)
Axis of symmetry and range :: x = -2,\quad y \leq 9
```

```steps
title: Example 2 (When there are no $x$-intercepts): Sketch features of $g(x) = (x - 3)^{2} + 2$
Direction and turning point :: a = 1 > 0\ (\cup),\quad \text{TP: } (3;\ 2)
Check $x$-intercepts ($y = 0$) :: (x - 3)^{2} = -2 \;\Longrightarrow\; \text{no real } x\text{-intercepts}
$y$-intercept ($x = 0$) :: g(0) = (-3)^{2} + 2 = 11 \;\Longrightarrow\; (0;\ 11)
Plot symmetric point across $x = 3$ :: (6;\ 11) \text{ also lies on the curve}
```

```steps
title: Example 3 (Exam level — read intervals from the sketch): For $f(x) = -(x + 2)^{2} + 9$, where is $f(x) > 0$ and where is $f$ increasing?
$f(x) > 0$ means above the $x$-axis (between intercepts $-5$ and $1$) :: -5 < x < 1
Downward parabola rises up to the turning point $x = -2$, then falls :: \text{increasing for } x < -2
Write range :: y \leq 9
```

> **Common mistakes**
>
> - **Expanding $a(x + p)^{2} + q$ unnecessarily:** expanding wastes time and invites arithmetic errors—solve $(x + p)^{2} = -\frac{q}{a}$ directly.
> - **Plotting the $y$-intercept at $q$:** $q$ is the $y$-coordinate of the **turning point**, NOT the $y$-intercept! Always plug in $x = 0$ for the $y$-intercept.
> - **Misreading "increasing" intervals:** always give **$x$-values** ($x < -2$), not $y$-values.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Find the turning point and all intercepts of $f(x) = (x - 2)^{2} - 4$.
A: TP: $(2;\ -4)$. $y$-intercept: $(0;\ 0)$. $x$-intercepts: $(x - 2)^{2} = 4 \implies x = 4$ or $x = 0$, so $(0;\ 0)$ and $(4;\ 0)$.
---
Q: Find the turning point and all intercepts of $g(x) = -2(x + 1)^{2} + 8$.
A: TP: $(-1;\ 8)$. $y$-intercept: $g(0) = -2(1) + 8 = 6$, so $(0;\ 6)$. $x$-intercepts: $(x + 1)^{2} = 4 \implies x = 1$ or $x = -3$, so $(-3;\ 0)$ and $(1;\ 0)$.
---
Q: Find the turning point and $y$-intercept of $h(x) = 3(x + 1)^{2} + 4$. Does it cut the $x$-axis?
A: TP: $(-1;\ 4)$, $y$-intercept: $(0;\ 7)$. Since $a = 3 > 0$ and the minimum $y$-value is $4 > 0$, it never cuts the $x$-axis.
---
Q: For $f(x) = 2(x - 3)^{2} - 18$, determine the values of $x$ for which $f(x) \leq 0$.
A: $x$-intercepts: $(x - 3)^{2} = 9 \implies x = 0$ or $x = 6$. Since $a > 0$, the parabola is on or below the $x$-axis between the intercepts: $0 \leq x \leq 6$.
---
Q: **(Exam level)** Given $f(x) = -x^{2} + 4x + 5$, find the turning point, intercepts, and the interval where $f$ is decreasing.
A: $x_{\text{TP}} = -\frac{4}{2(-1)} = 2$, $y_{\text{TP}} = -(2)^{2} + 4(2) + 5 = 9$, so TP is $(2;\ 9)$. $y$-intercept: $(0;\ 5)$. $x$-intercepts: $-(x - 5)(x + 1) = 0 \implies (-1;\ 0)$ and $(5;\ 0)$. Decreasing after the vertex: $x > 2$.
```

## Further help

- Siyavula Mathematics Grade 11, [5.1 Quadratic functions](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-01).
