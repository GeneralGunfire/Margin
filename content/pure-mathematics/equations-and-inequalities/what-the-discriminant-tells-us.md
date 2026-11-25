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

> **What you'll learn:** *why* $\Delta = b^2 - 4ac$ alone decides whether a quadratic has two, one, or zero real roots—and whether those roots are rational or surds—without solving the equation.
>
> **Prerequisites:** [The quadratic formula](/library/pure-mathematics/equations-and-inequalities/the-quadratic-formula).

## 1. The piece under the square root runs the show

Look inside the quadratic formula $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$. The expression under the square root—$\Delta = b^2 - 4ac$, called the **discriminant**—controls everything:

- **$\Delta > 0$:** $\sqrt{\Delta}$ is a positive real number, so $\pm$ creates **two distinct real roots** (the parabola crosses the $x$-axis twice).
- **$\Delta = 0$:** $\sqrt{0} = 0$, so $\pm 0$ collapses both answers into **two equal real roots** (the parabola touches the $x$-axis once).
- **$\Delta < 0$:** the square root of a negative number is non-real, so there are **no real roots** (the parabola misses the $x$-axis completely).

Explore all three cases interactively:

```diagram
name: discriminant-explorer
```

```rule
title: Nature of the roots (a, b, c rational)
\Delta = b^{2} - 4ac
\Delta > 0:\ \text{real and unequal} \qquad \Delta = 0:\ \text{real and equal} \qquad \Delta < 0:\ \text{non-real}
```

```tryit
title: Quick check
prompt: Without solving, determine the nature of the roots of **(a)** $x^2 + 6x + 9 = 0$ and **(b)** $x^2 + x + 3 = 0$.
hint: Compute $\Delta = b^2 - 4ac$ and check its sign.
answer: **(a)** $\Delta = 6^2 - 4(1)(9) = 0 \implies$ real and equal roots. **(b)** $\Delta = 1^2 - 4(1)(3) = -11 < 0 \implies$ non-real roots.
```

## 2. Rational vs irrational roots

When $a$, $b$, and $c$ are rational and $\Delta > 0$, look at whether $\sqrt{\Delta}$ simplifies cleanly:

```compare
title: Perfect square Δ vs non-square Δ
left_title: Δ is a perfect square → Rational
left:
For $2x^2 + 3x - 5 = 0$:
$$\Delta = 3^2 - 4(2)(-5) = 49 = 7^2$$
Since $\sqrt{49} = 7$ is exact, the roots are **rational** (and the quadratic factorises cleanly).
right_title: Δ is NOT a perfect square → Irrational
right:
For $3x^2 - 5x + 1 = 0$:
$$\Delta = (-5)^2 - 4(3)(1) = 13$$
Since $\sqrt{13}$ is a surd, the roots are **irrational** (real and unequal).
```

```tryit
title: Try it first
prompt: Determine whether $6x^2 - x - 2 = 0$ has rational or irrational roots using $\Delta$.
hint: Compute $\Delta = (-1)^2 - 4(6)(-2)$ and check if it is a perfect square.
answer: $\Delta = 1 + 48 = 49 = 7^2 > 0$. Since $\Delta$ is a positive perfect square, the roots are **real, unequal, and rational**.
```

## 3. Worked examples

```steps
title: Example 1: Describe the roots of $x^{2} - 4x + 4 = 0$
Identify $a, b, c$ :: a = 1,\quad b = -4,\quad c = 4
Compute $\Delta$ :: \Delta = (-4)^{2} - 4(1)(4) = 16 - 16 = 0
State nature of roots :: \text{real and equal roots}
```

```steps
title: Example 2: Show that $2x^{2} - 3x - 5 = 0$ has rational roots, then solve
Compute $\Delta$ :: \Delta = (-3)^{2} - 4(2)(-5) = 9 + 40 = 49 = 7^{2}
Since $49 > 0$ is a perfect square :: \text{roots are real, unequal and rational}
Use the formula (or factorise) :: x = \frac{3 \pm 7}{4} \;\Longrightarrow\; x = \frac{5}{2} \text{ or } x = -1
```

```steps
title: Example 3 (Exam level): Prove that $x^{2} - px - 3 = 0$ has real, unequal roots for all real $p$
Identify $a, b, c$ :: a = 1,\quad b = -p,\quad c = -3
Compute $\Delta$ :: \Delta = (-p)^{2} - 4(1)(-3) = p^{2} + 12
Use $p^2 \geq 0$ for any real $p$ :: p^{2} \geq 0 \;\Longrightarrow\; \Delta = p^{2} + 12 \geq 12 > 0
Conclusion :: \text{roots are real and unequal for every real } p
```

> **Common mistakes**
>
> - **Thinking $\Delta = 0$ means "no roots":** it means **two equal real roots** (the vertex sits right on the $x$-axis).
> - **Calling roots rational whenever $\Delta > 0$:** they are rational only if $\Delta$ is also a **perfect square** (and $a, b, c$ are rational).
> - **Computing $\Delta$ before standard form:** always rearrange to $ax^2 + bx + c = 0$ first.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Determine the nature of the roots of $x^{2} - 5x + 3 = 0$.
A: $\Delta = 25 - 12 = 13 > 0$ (not a perfect square), so the roots are real, unequal, and irrational.
---
Q: Determine the nature of the roots of $4x^{2} - 12x + 9 = 0$.
A: $\Delta = (-12)^2 - 4(4)(9) = 144 - 144 = 0$, so the roots are real and equal.
---
Q: Determine the nature of the roots of $2x^{2} + x + 4 = 0$.
A: $\Delta = 1 - 32 = -31 < 0$, so the roots are non-real.
---
Q: **(Exam level)** Prove that $x^{2} + (m+2)x + m = 0$ has real, unequal roots for every real value of $m$.
A: $\Delta = (m+2)^2 - 4(1)(m) = m^2 + 4m + 4 - 4m = m^2 + 4$. Since $m^2 \geq 0$, $\Delta \geq 4 > 0$, so the roots are real and unequal for all real $m$.
```

## Further help

- Siyavula Mathematics Grade 11, [2.6 Nature of roots](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-06).
