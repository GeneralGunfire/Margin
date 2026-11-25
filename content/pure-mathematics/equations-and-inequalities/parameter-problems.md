---
title: Parameter problems
youtube_query: Grade 11 quadratic equations with parameters
subject: pure-mathematics
topic: Equations and inequalities
part: Algebra
term: 1
subtopic: Nature of roots
order: 232
---

> **What you'll learn:** how to find the value or range of a parameter ($k$, $p$, or $m$) so that a quadratic has equal, real, distinct, or non-real roots.
>
> **Prerequisites:** [What the discriminant tells us](/library/pure-mathematics/equations-and-inequalities/what-the-discriminant-tells-us) and linear/quadratic inequalities.

## 1. Turn the root condition into an equation or inequality in $\Delta$

In a parameter problem, the equation contains an extra letter—such as $x^{2} + kx + 9 = 0$—and the question tells you how many real solutions it has. Because $\Delta = b^{2} - 4ac$ decides the nature of the roots, you translate the English condition directly into a statement about $\Delta$, then solve for the parameter:

| Condition in the question | Condition on $\Delta$ | Typical result |
| --- | --- | --- |
| Equal roots (one repeated root) | $\Delta = 0$ | Specific value(s) of $k$ |
| Real roots (includes equal roots) | $\Delta \geq 0$ | A range of $k$ |
| Two distinct / unequal real roots | $\Delta > 0$ | A strict range of $k$ |
| Non-real / no real roots | $\Delta < 0$ | A strict range of $k$ |

```rule
title: Four-step recipe for parameter problems
\text{1. Write } ax^{2} + bx + c = 0 \quad \text{2. Compute } \Delta = b^{2} - 4ac \quad \text{3. Apply } \Delta \text{ condition} \quad \text{4. Solve for the parameter}
```

```compare
title: Watch the boundary sign
left_title: "Real roots" → Δ ≥ 0
left:
"Real" includes **both** unequal real roots ($\Delta > 0$) and equal real roots ($\Delta = 0$).
Use $\geq 0$ so you keep the boundary value.
right_title: "Distinct / unequal real roots" → Δ > 0
right:
"Distinct" means two **different** roots, so equal roots ($\Delta = 0$) are excluded.
Use strictly $> 0$ and drop the boundary value.
```

```tryit
title: Quick check
prompt: For $x^{2} + 6x + k = 0$, write down the inequality you must solve if the equation has **(a)** non-real roots, and **(b)** real roots.
hint: First compute $\Delta = 6^{2} - 4(1)(k) = 36 - 4k$.
answer: **(a)** $36 - 4k < 0 \implies k > 9$. **(b)** $36 - 4k \geq 0 \implies k \leq 9$.
```

## 2. Worked examples

```steps
title: Example 1 (Equal roots): Find $k$ if $x^{2} + kx + 9 = 0$ has equal roots
Identify $a, b, c$ :: a = 1,\quad b = k,\quad c = 9
Compute $\Delta$ :: \Delta = k^{2} - 4(1)(9) = k^{2} - 36
Equal roots means $\Delta = 0$ :: k^{2} - 36 = 0
Factorise and solve :: (k - 6)(k + 6) = 0 \;\Longrightarrow\; k = 6 \text{ or } k = -6
```

```steps
title: Example 2 (Linear inequality in the parameter): Find $k$ if $x^{2} - 4x + k = 0$ has non-real roots
Identify $a, b, c$ :: a = 1,\quad b = -4,\quad c = k
Compute $\Delta$ :: \Delta = (-4)^{2} - 4(1)(k) = 16 - 4k
Non-real roots means $\Delta < 0$ :: 16 - 4k < 0
Isolate $k$ :: -4k < -16
Divide by $-4$ and flip the inequality sign :: k > 4
```

```steps
title: Example 3 (Exam level — quadratic inequality in $k$): Find $k$ if $x^{2} + kx + (k + 3) = 0$ has non-real roots
Identify $a, b, c$ :: a = 1,\quad b = k,\quad c = k + 3
Compute $\Delta$ :: \Delta = k^{2} - 4(1)(k + 3) = k^{2} - 4k - 12
Set $\Delta < 0$ :: k^{2} - 4k - 12 < 0
Factorise :: (k - 6)(k + 2) < 0
Critical values are $-2$ and $6$; between them is negative :: -2 < k < 6
```

> **Common mistakes**
>
> - **Forgetting to flip the inequality** when dividing by a negative number (like $-4k < -16 \implies k > 4$).
> - **Using $\Delta > 0$ for "real roots":** real roots include equal roots, so use $\Delta \geq 0$.
> - **Dropping one solution** when taking a square root (for example, $k^{2} = 36$ gives both $6$ and $-6$).
> - **Missing a quadratic restriction:** if $k$ is the coefficient of $x^{2}$, check whether $k \neq 0$ is needed for the equation to remain quadratic.

## 3. Practice

Try each question on paper before opening the worked answer.

```questions
Q: For which values of $p$ does $x^{2} + px + 16 = 0$ have equal roots?
A: $\Delta = p^{2} - 4(1)(16) = p^{2} - 64 = 0$, so $p = 8$ or $p = -8$.
---
Q: For which values of $k$ does $x^{2} - 6x + k = 0$ have two distinct real roots?
A: $\Delta = 36 - 4k > 0 \implies -4k > -36 \implies k < 9$.
---
Q: For which values of $m$ does $2x^{2} + 4x + m = 0$ have no real roots?
A: $\Delta = 16 - 8m < 0 \implies -8m < -16 \implies m > 2$.
---
Q: Find $k$ if $x^{2} - (k + 3)x + 4 = 0$ has equal roots.
A: $\Delta = (k + 3)^{2} - 16 = 0 \implies (k + 3)^{2} = 16 \implies k + 3 = \pm 4$, so $k = 1$ or $k = -7$.
---
Q: **(Exam level)** For which values of $k$ does $kx^{2} + 6x + 3 = 0$ ($k \neq 0$) have real roots?
A: $\Delta = 36 - 12k \geq 0 \implies k \leq 3$. Since $k \neq 0$, the solution is $k \leq 3,\ k \neq 0$.
---
Q: **(Exam level)** Prove that $x^{2} + (2m - 1)x + m^{2} - m = 0$ has two distinct real roots for every real value of $m$.
A: $\Delta = (2m - 1)^{2} - 4(1)(m^{2} - m) = 4m^{2} - 4m + 1 - 4m^{2} + 4m = 1$. Since $\Delta = 1 > 0$ for all real $m$, the equation always has two distinct real roots.
```

## Further help

- Siyavula Mathematics Grade 11, [2.6 Nature of roots](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-06).
