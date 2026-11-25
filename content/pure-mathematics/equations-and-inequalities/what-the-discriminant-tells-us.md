---
title: What the discriminant tells us
youtube_query: Grade 11 discriminant and nature of roots
subject: pure-mathematics
topic: Equations and inequalities
part: Algebra
term: 1
subtopic: Nature of roots
order: 231
---

> **What you'll learn:** how the discriminant $\Delta = b^2 - 4ac$ tells you the nature of the roots of a quadratic without solving it.
>
> **Prerequisites:** [The quadratic formula](/library/pure-mathematics/equations-and-inequalities/the-quadratic-formula).

## The idea in plain language

In the quadratic formula the part under the root, $b^2 - 4ac$, decides everything about the answers. It is called the **discriminant** and is written $\Delta$ (delta).

- If $\Delta$ is positive, the square root is a real number, and $\pm$ gives **two different** real roots.
- If $\Delta = 0$, the $\pm$ does nothing, so the two roots are **equal**.
- If $\Delta$ is negative, you cannot take a real square root, so there are **no real roots**.

On a graph, the roots are where the parabola meets the $x$-axis. So $\Delta$ also tells you how many times the parabola touches the axis.

![Three parabolas: one crossing the x-axis twice (delta positive), one touching it once (delta zero), one never reaching it (delta negative)](/content-images/discriminant-three-cases.svg)

## The rules

```rule
title: Nature of the roots
\Delta = b^{2} - 4ac
\Delta > 0:\ \text{two unequal real roots} \qquad \Delta = 0:\ \text{two equal real roots} \qquad \Delta < 0:\ \text{no real roots}
```

When $a$, $b$ and $c$ are rational and $\Delta > 0$:

- $\Delta$ a **perfect square** gives **rational** roots (the quadratic factorises).
- $\Delta$ **not** a perfect square gives **irrational** roots (surds).

## Worked example 1 (basic)

```steps
title: Describe the roots of $x^{2} - 4x + 4 = 0$
Identify $a$, $b$, $c$ :: a = 1,\quad b = -4,\quad c = 4
Work out the discriminant :: \Delta = (-4)^{2} - 4(1)(4)
Simplify :: \Delta = 16 - 16 = 0
Conclusion :: \text{two equal real roots}
```

## Worked example 2 (rational or irrational)

```steps
title: Describe the roots of $2x^{2} + 3x - 5 = 0$ and of $3x^{2} - 5x + 1 = 0$
First equation: $a = 2,\ b = 3,\ c = -5$ :: \Delta = 9 - 4(2)(-5) = 49
$49 = 7^2$ is a perfect square :: \text{two unequal, rational roots}
Second equation: $a = 3,\ b = -5,\ c = 1$ :: \Delta = 25 - 12 = 13
13 is not a perfect square :: \text{two unequal, irrational roots}
```

## Worked example 3 (exam level)

```steps
title: Prove that $x^{2} - px - 3 = 0$ has real roots for every real $p$
Identify $a$, $b$, $c$ :: a = 1,\quad b = -p,\quad c = -3
Work out the discriminant :: \Delta = (-p)^{2} - 4(1)(-3)
Simplify :: \Delta = p^{2} + 12
A square is never negative :: p^{2} \geq 0
So $\Delta$ is always positive :: \Delta \geq 12 > 0
Conclusion :: \text{the roots are real for all } p
```

> **Common mistakes**
>
> - Reading $\Delta = 0$ as "no roots". It means two **equal** roots (one repeated root).
> - Forgetting that $\Delta$ is worked out with the signs of $b$ and $c$. For $c = -3$ the term $-4ac$ becomes positive when $a > 0$.
> - Saying roots are rational whenever $\Delta > 0$. They are rational only when $\Delta$ is a perfect square.
> - Using $\Delta$ before the equation is in standard form.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Determine the nature of the roots of $x^{2} + 6x + 9 = 0$.
A: $\Delta = 36 - 36 = 0$, so the roots are real and equal.
---
Q: Determine the nature of the roots of $x^{2} + x + 3 = 0$.
A: $\Delta = 1 - 12 = -11 < 0$, so there are no real roots.
---
Q: Determine the nature of the roots of $x^{2} - 5x + 3 = 0$.
A: $\Delta = 25 - 12 = 13 > 0$ and not a perfect square, so the roots are real, unequal and irrational.
---
Q: Determine the nature of the roots of $6x^{2} - x - 2 = 0$.
A: $\Delta = 1 + 48 = 49 = 7^2$, so the roots are real, unequal and rational.
---
Q: Show that $2x^{2} - 3x - 5 = 0$ has rational roots, then solve it.
A: $\Delta = 9 + 40 = 49 = 7^2$, a perfect square, so the roots are rational. $x = \frac{3 \pm 7}{4}$, giving $x = \frac{5}{2}$ or $x = -1$.
---
Q: Prove that $x^{2} + (m+2)x + m = 0$ has real roots for every real $m$.
A: $\Delta = (m+2)^2 - 4m = m^2 + 4m + 4 - 4m = m^2 + 4$. Since $m^2 \geq 0$, $\Delta \geq 4 > 0$, so the roots are always real (and unequal).
```

## Further help

- Siyavula Mathematics Grade 11, [2.6 Nature of roots](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-06).
