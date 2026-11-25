---
title: Parabola sketch method
youtube_query: Grade 11 solving quadratic inequalities with a parabola sketch
subject: pure-mathematics
topic: Equations and inequalities
part: Algebra
term: 1
subtopic: Quadratic inequalities
order: 242
---

> **What you'll learn:** how to solve a quadratic inequality by sketching the parabola and reading off where it is above or below the $x$-axis, including the cases with no critical values.
>
> **Prerequisites:** [Critical values and sign table](/library/pure-mathematics/equations-and-inequalities/critical-values-and-sign-table).

## The idea in plain language

A parabola is above the $x$-axis where the expression is positive, and below it where the expression is negative. If you sketch the graph, you can read the answer straight off the picture.

You do not need an accurate graph. You only need three things:

1. The **shape**: opens up if $a > 0$, down if $a < 0$.
2. The **$x$-intercepts** (the critical values).
3. Which parts are above and which are below the axis.

For $y = x^2 - x - 6$ the parabola opens up and cuts the axis at $-2$ and $3$. It is **below** the axis between the intercepts and **above** outside them.

![The parabola y = x squared minus x minus 6 with the part below the x-axis between -2 and 3 shaded](/content-images/parabola-inequality-regions.svg)

## The method

```rule
title: Reading a parabola
f(x) > 0 \text{ where the curve is above the } x\text{-axis} \qquad f(x) < 0 \text{ where it is below}
```

If $\Delta < 0$ the parabola never touches the axis. Then $f(x)$ is positive **everywhere** (when $a > 0$) or negative everywhere (when $a < 0$).

## Worked example 1 (basic)

```steps
title: Solve $x^{2} - x - 6 > 0$ by sketching
Factorise to find the intercepts :: (x-3)(x+2) = 0
The $x$-intercepts :: x = -2 \quad\text{and}\quad x = 3
$a > 0$, so the parabola opens upward :: \text{a smile shape}
We want $y > 0$: the parts above the axis :: \text{left of } -2 \text{ and right of } 3
Write the answer :: x < -2 \quad\text{or}\quad x > 3
```

## Worked example 2 (opens downward)

```steps
title: Solve $-x^{2} + 4x - 3 \geq 0$
Multiply by $-1$ and reverse the sign :: x^{2} - 4x + 3 \leq 0
Factorise :: (x-1)(x-3) \leq 0
Critical values :: x = 1 \quad\text{and}\quad x = 3
The upward parabola is below the axis between them :: \text{between the intercepts}
Include the intercepts (the sign has $=$) :: 1 \leq x \leq 3
```

## Worked example 3 (exam level)

```steps
title: Solve $x^{2} + x + 2 > 0$ and $x^{2} + x + 2 \leq 0$
Find the discriminant :: \Delta = 1 - 8 = -7
$\Delta < 0$: the parabola never reaches the axis :: \text{no intercepts}
$a > 0$, so it lies entirely above the axis :: x^{2} + x + 2 > 0 \text{ for every real } x
First inequality :: x \in \mathbb{R}
Second inequality needs values on or below the axis :: \text{no solution}
```

> **Common mistakes**
>
> - Shading the wrong region because the parabola opens down. Always check the sign of $a$.
> - Forgetting that $\Delta < 0$ means the answer is "all real numbers" or "no solution", never an interval.
> - Not reversing the sign when multiplying by $-1$.
> - Giving the answer as a point or a set of points. An inequality answer is a region.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Solve $x^{2} - 2x - 3 \leq 0$ by sketching.
A: $(x-3)(x+1) \leq 0$. Intercepts $-1$ and $3$. The upward parabola is on or below the axis between them: $-1 \leq x \leq 3$.
---
Q: Solve $x^{2} + 3x - 10 > 0$ by sketching.
A: $(x+5)(x-2) > 0$. Intercepts $-5$ and $2$. The parabola is above the axis outside them: $x < -5$ or $x > 2$.
---
Q: Solve $-x^{2} + 5x - 4 > 0$.
A: Multiply by $-1$ and reverse: $x^2 - 5x + 4 < 0$, so $(x-1)(x-4) < 0$ and $1 < x < 4$.
---
Q: Solve $2x^{2} - 5x - 3 < 0$.
A: $(2x+1)(x-3) < 0$. Intercepts $-\frac{1}{2}$ and $3$. Below the axis between them: $-\frac{1}{2} < x < 3$.
---
Q: Solve $x^{2} - 4x + 5 > 0$.
A: $\Delta = 16 - 20 = -4 < 0$ and $a > 0$, so the parabola is above the axis for every $x$. The solution is all real numbers.
---
Q: Solve $x^{2} - 6x + 10 \leq 0$.
A: $\Delta = 36 - 40 = -4 < 0$ and $a > 0$, so the parabola is always above the axis. It is never on or below it, so there is no solution.
```

## Further help

- Siyavula Mathematics Grade 11, [2.7 Quadratic inequalities](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-07).
