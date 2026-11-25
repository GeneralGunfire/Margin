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

> **What you'll learn:** how to solve any quadratic inequality in seconds by sketching a rough parabola and reading where it lies above or below the $x$-axis—including cases with no critical values.
>
> **Prerequisites:** [Critical values and sign table](/library/pure-mathematics/equations-and-inequalities/critical-values-and-sign-table).

## 1. Read the sign straight off a quick sketch

Instead of testing three separate numbers on a number line, picture the graph of $y = ax^{2} + bx + c$:

- Where the curve is **above** the $x$-axis, $y > 0$.
- Where the curve is **below** the $x$-axis, $y < 0$.

Toggle between $> 0$ and $< 0$ below to see how an upward parabola immediately tells you whether the solution is the **two outer wings** or the **single interval between the roots**:

```diagram
name: inequality-sign
```

You only need three pieces of information to sketch: whether $a > 0$ (opens up) or $a < 0$ (opens down), the $x$-intercepts, and whether the inequality wants above or below the axis.

```rule
title: Reading a parabola sketch
f(x) > 0 \;\Longleftrightarrow\; \text{curve is above the } x\text{-axis}
f(x) < 0 \;\Longleftrightarrow\; \text{curve is below the } x\text{-axis}
```

## 2. What if $a < 0$ or $\Delta < 0$?

```compare
title: Two special cases on a sketch
left_title: Leading coefficient a < 0
left:
Either sketch a downward parabola ($\cap$-shape), **or** multiply by $-1$ first and **flip** the inequality sign so $a > 0$ ($\cup$-shape):
$$-x^{2} + 4x - 3 \geq 0 \;\Longleftrightarrow\; x^{2} - 4x + 3 \leq 0$$
right_title: Discriminant Δ < 0 (no x-intercepts)
right:
The parabola floats completely above (if $a > 0$) or completely below (if $a < 0$) the $x$-axis.
The answer is either **all real numbers** ($x \in \mathbb{R}$) or **no solution**.
```

```tryit
title: Quick check
prompt: Without a sign table, solve $(x + 1)(x - 5) > 0$ by imagining the upward parabola through $-1$ and $5$.
hint: An upward parabola sits above the $x$-axis to the left of the smaller root and to the right of the larger root.
answer: $x < -1$ or $x > 5$.
```

## 3. Worked examples

```steps
title: Example 1 (Upward parabola): Solve $x^{2} - x - 6 > 0$
Factorise to find $x$-intercepts :: (x - 3)(x + 2) = 0 \;\Longrightarrow\; x = -2 \text{ or } x = 3
$a = 1 > 0$, so the parabola opens up ($\cup$) :: \text{below axis on } (-2;\ 3),\ \text{above outside}
We want $> 0$ (strictly above the axis) :: x < -2 \quad\text{or}\quad x > 3
```

```steps
title: Example 2 (Negative $x^{2}$ coefficient): Solve $-x^{2} + 4x - 3 \geq 0$
Multiply by $-1$ and reverse the inequality sign :: x^{2} - 4x + 3 \leq 0
Factorise to find intercepts :: (x - 1)(x - 3) \leq 0 \;\Longrightarrow\; x = 1,\ 3
Upward parabola is on or below the axis between $1$ and $3$ :: 1 \leq x \leq 3
```

```steps
title: Example 3 (Exam level — $\Delta < 0$): Solve $x^{2} + x + 2 > 0$ and $x^{2} + x + 2 \leq 0$
Check the discriminant :: \Delta = 1^{2} - 4(1)(2) = -7 < 0
No $x$-intercepts and $a = 1 > 0$ :: \text{parabola lies entirely above the } x\text{-axis}
First inequality ($> 0$): always true :: x \in \mathbb{R}
Second inequality ($\leq 0$): curve never reaches or drops below axis :: \text{no real solution}
```

> **Common mistakes**
>
> - **Forgetting that $\Delta < 0$ means "all real numbers" or "no solution":** if there are no $x$-intercepts, you cannot write an interval between two numbers.
> - **Forgetting to flip the sign** when multiplying through by $-1$ to make $a > 0$.
> - **Confusing above vs below for a downward parabola:** if you keep $a < 0$, the parabola is positive *between* the intercepts, not outside them.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Solve $x^{2} - 2x - 3 \leq 0$ by sketching.
A: $(x - 3)(x + 1) \leq 0$. Intercepts $-1$ and $3$; upward parabola is on or below the axis between them: $-1 \leq x \leq 3$.
---
Q: Solve $x^{2} + 3x - 10 > 0$ by sketching.
A: $(x + 5)(x - 2) > 0$. Intercepts $-5$ and $2$; upward parabola is above the axis on the outer wings: $x < -5$ or $x > 2$.
---
Q: Solve $-x^{2} + 5x - 4 > 0$.
A: Multiply by $-1$ and flip: $x^{2} - 5x + 4 < 0 \implies (x - 1)(x - 4) < 0$, so $1 < x < 4$.
---
Q: Solve $2x^{2} - 5x - 3 < 0$.
A: $(2x + 1)(x - 3) < 0$. Intercepts $-\frac{1}{2}$ and $3$; below the axis between them: $-\frac{1}{2} < x < 3$.
---
Q: Solve $x^{2} - 4x + 5 > 0$.
A: $\Delta = 16 - 20 = -4 < 0$ and $a > 0$, so the parabola is always above the $x$-axis. Solution: $x \in \mathbb{R}$.
---
Q: Solve $x^{2} - 6x + 10 \leq 0$.
A: $\Delta = 36 - 40 = -4 < 0$ and $a > 0$, so the parabola never touches or drops below the $x$-axis. No real solution.
```

## Further help

- Siyavula Mathematics Grade 11, [2.7 Quadratic inequalities](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-07).
