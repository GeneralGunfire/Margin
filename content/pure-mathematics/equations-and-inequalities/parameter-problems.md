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

> **What you'll learn:** how to find the value or the range of a letter ($k$, $p$, $m$) so that a quadratic has equal, real or non-real roots.
>
> **Prerequisites:** [What the discriminant tells us](/library/pure-mathematics/equations-and-inequalities/what-the-discriminant-tells-us), and solving simple inequalities.

## The idea in plain language

Parameter questions give you a quadratic with an unknown letter and describe how the roots must behave. Your job is to turn the description into a statement about $\Delta$, then solve for the letter.

| The question says | Write |
| --- | --- |
| equal roots | $\Delta = 0$ |
| real roots | $\Delta \geq 0$ |
| two distinct real roots | $\Delta > 0$ |
| no real roots (non-real) | $\Delta < 0$ |

When the condition is an inequality, treat $\Delta$ as an expression in the letter and solve the inequality. **Reverse the inequality sign when you divide by a negative number.**

## The rule

```rule
title: The recipe
\text{1. find } \Delta \text{ in terms of the letter} \qquad \text{2. set the condition on } \Delta \qquad \text{3. solve for the letter}
```

## Worked example 1 (equal roots)

```steps
title: For which values of $k$ does $x^{2} + kx + 9 = 0$ have equal roots?
Identify $a$, $b$, $c$ :: a = 1,\quad b = k,\quad c = 9
Write the discriminant :: \Delta = k^{2} - 4(1)(9) = k^{2} - 36
Equal roots means $\Delta = 0$ :: k^{2} - 36 = 0
Solve :: (k-6)(k+6) = 0
Two values :: k = 6 \quad\text{or}\quad k = -6
```

## Worked example 2 (an inequality)

```steps
title: For which values of $k$ does $x^{2} - 4x + k = 0$ have non-real roots?
Identify $a$, $b$, $c$ :: a = 1,\quad b = -4,\quad c = k
Write the discriminant :: \Delta = 16 - 4k
Non-real roots means $\Delta < 0$ :: 16 - 4k < 0
Subtract 16 from both sides :: -4k < -16
Divide by $-4$ and reverse the sign :: k > 4
```

## Worked example 3 (exam level)

```steps
title: Show that $x^{2} + (k+1)x + k = 0$ always has real roots, and find $k$ when the roots are equal
Identify $a$, $b$, $c$ :: a = 1,\quad b = k + 1,\quad c = k
Write the discriminant :: \Delta = (k+1)^{2} - 4k
Expand :: \Delta = k^{2} + 2k + 1 - 4k
Simplify to a perfect square :: \Delta = k^{2} - 2k + 1 = (k-1)^{2}
A square is never negative, so the roots are always real :: (k-1)^{2} \geq 0
Equal roots when $\Delta = 0$ :: k = 1
```

> **Common mistakes**
>
> - Forgetting to square the whole bracket: $(k+1)^2 = k^2 + 2k + 1$, not $k^2 + 1$.
> - Not reversing the inequality when dividing by a negative number.
> - Using $\Delta > 0$ when the question says "real roots". Real includes equal roots, so use $\Delta \geq 0$.
> - Writing only one value of $k$ when $k^2 = 36$ gives two.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: For which values of $p$ does $x^{2} + px + 16 = 0$ have equal roots?
A: $\Delta = p^2 - 64 = 0$, so $p = 8$ or $p = -8$.
---
Q: For which values of $k$ does $x^{2} - 6x + k = 0$ have two distinct real roots?
A: $\Delta = 36 - 4k > 0$, so $-4k > -36$ and $k < 9$.
---
Q: For which values of $m$ does $2x^{2} + 4x + m = 0$ have no real roots?
A: $\Delta = 16 - 8m < 0$, so $-8m < -16$ and $m > 2$.
---
Q: For which values of $k$ does $kx^{2} + 6x + 3 = 0$ have real roots?
A: $\Delta = 36 - 12k \geq 0$, so $-12k \geq -36$ and $k \leq 3$. Also $k \neq 0$, otherwise the equation is not quadratic.
---
Q: Find $k$ if $x^{2} - (k+3)x + 4 = 0$ has equal roots. Both values.
A: $\Delta = (k+3)^2 - 16 = 0$, so $(k+3)^2 = 16$ and $k + 3 = \pm 4$. Then $k = 1$ or $k = -7$.
---
Q: Prove that $x^{2} + (2m-1)x + m^{2} - m = 0$ has two distinct real roots for every real $m$.
A: $\Delta = (2m-1)^2 - 4(m^2 - m) = 4m^2 - 4m + 1 - 4m^2 + 4m = 1$. Since $\Delta = 1 > 0$ for every $m$, the roots are always real and distinct.
```

## Further help

- Siyavula Mathematics Grade 11, [2.6 Nature of roots](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-06).
