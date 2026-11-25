---
title: Substitution with k = a^x
youtube_query: Grade 11 exponential equations using substitution
subject: pure-mathematics
topic: Exponents and surds
part: Algebra
term: 1
subtopic: Solving exponential equations
order: 122
---

> **What you'll learn:** how to spot an exponential equation that is secretly a quadratic, solve it using $k = a^x$, and know *why* any $k \leq 0$ must be rejected.
>
> **Prerequisites:** [Same-base method](/library/pure-mathematics/exponents-and-surds/same-base-method), and factorising quadratics.

## 1. Spotting a hidden quadratic

Same-base works when there is one term on each side. When there are **three terms** with $+ $ or $-$—like $4^x - 5\cdot 2^x + 4 = 0$—notice that $4^x = (2^2)^x = (2^x)^2$.

Giving $2^x$ a temporary name $k$ turns the equation into $k^2 - 5k + 4 = 0$:

```rule
title: Substitution k = a^x (where a > 0)
a^{2x} = k^{2} \qquad a^{x+1} = a \cdot k \qquad a^{x-1} = \frac{k}{a} \qquad k = a^{x} > 0
```

## 2. Why $k \leq 0$ is always rejected

A positive base raised to **any** real exponent is always strictly positive—never zero, and never negative (even when $x$ is negative, $2^{-3} = \frac{1}{8} > 0$). Test different values of $k$ below to see why $2^x = k$ only cuts the curve when $k > 0$:

```diagram
name: exp-always-positive
```

So if solving the quadratic gives $k = -1$ or $k = 0$, that branch has **no real solution** and must be rejected explicitly.

```compare
title: Two ways $k$-substitution questions catch students out
left_title: Splitting $2^{2x+1}$
left:
Use $a^{m+n} = a^m \cdot a^n$:
$$2^{2x+1} = 2^{2x}\cdot 2^1 = 2k^2$$
Not $2^{2x} + 2$, and not $4^x \cdot 1$.
right_title: Handling negative $k$
right:
If $(k-3)(k+1) = 0$:
- $k = 3 \implies 3^x = 3 \implies x = 1$
- $k = -1 \implies 3^x = -1$ (**no solution**, since $3^x > 0$)
```

```tryit
title: Try it first
prompt: Solve $9^x - 2\cdot 3^x - 3 = 0$.
hint: Write $9^x = (3^x)^2$ and let $k = 3^x$. Remember $3^x > 0$.
answer: $k^2 - 2k - 3 = 0 \implies (k-3)(k+1) = 0$. Since $3^x > 0$, reject $k = -1$. From $3^x = 3$, $x = 1$.
```

## 3. Worked examples

```steps
title: Example 1: Solve $4^{x} - 5\cdot 2^{x} + 4 = 0$
Rewrite $4^x$ as $(2^x)^2$ :: \left(2^{x}\right)^{2} - 5\cdot 2^{x} + 4 = 0
Let $k = 2^x$ :: k^{2} - 5k + 4 = 0
Factorise :: (k - 1)(k - 4) = 0
Both values are positive :: k = 1 \quad\text{or}\quad k = 4
Substitute back $2^x = k$ and solve :: 2^x = 1 \implies x = 0, \qquad 2^x = 4 \implies x = 2
```

```steps
title: Example 2: Solve $2^{2x+1} - 5\cdot 2^{x} + 2 = 0$
Split $2^{2x+1} = 2\cdot (2^x)^2$ :: 2\left(2^{x}\right)^{2} - 5\cdot 2^{x} + 2 = 0
Let $k = 2^x$ :: 2k^{2} - 5k + 2 = 0
Factorise :: (2k - 1)(k - 2) = 0
Both values are positive :: k = \frac{1}{2} \quad\text{or}\quad k = 2
Solve $2^x = 2^{-1}$ and $2^x = 2^1$ :: x = -1 \quad\text{or}\quad x = 1
```

```steps
title: Example 3 (Exam level): Solve $2^{x} + 2^{3-x} = 9$
Rewrite the negative exponent as a fraction :: 2^{x} + \frac{2^{3}}{2^{x}} = 9 \;\Longrightarrow\; 2^{x} + \frac{8}{2^{x}} = 9
Let $k = 2^x$ (note $k > 0$) :: k + \frac{8}{k} = 9
Multiply through by $k$ :: k^{2} + 8 = 9k \;\Longrightarrow\; k^{2} - 9k + 8 = 0
Factorise :: (k - 1)(k - 8) = 0
Solve back for $x$ :: 2^x = 1 \implies x = 0, \qquad 2^x = 8 \implies x = 3
```

> **Common mistakes**
>
> - **Stopping at $k$:** the equation asks for $x$, not $k$. Always solve $a^x = k$ at the end.
> - **Forgetting to reject $k \leq 0$:** write "no solution since $a^x > 0$" so the marker sees why it was dropped.
> - **Dividing the equation by $2^x$:** only ever clear fractions by multiplying through by $k = 2^x$ (valid because $k > 0$).

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Solve $9^{x} - 10\cdot 3^{x} + 9 = 0$.
A: Let $k = 3^x$: $k^2 - 10k + 9 = 0 \implies (k-1)(k-9) = 0$. Thus $3^x = 1 \implies x = 0$ or $3^x = 9 \implies x = 2$.
---
Q: Solve $4^{x} - 6\cdot 2^{x} + 8 = 0$.
A: Let $k = 2^x$: $k^2 - 6k + 8 = 0 \implies (k-2)(k-4) = 0$, so $x = 1$ or $x = 2$.
---
Q: Solve $25^{x} - 4\cdot 5^{x} - 5 = 0$.
A: Let $k = 5^x$: $k^2 - 4k - 5 = 0 \implies (k-5)(k+1) = 0$. Reject $k = -1$ ($5^x > 0$), leaving $5^x = 5 \implies x = 1$.
---
Q: Solve $3^{2x+1} - 10\cdot 3^{x} + 3 = 0$.
A: $3k^2 - 10k + 3 = 0 \implies (3k-1)(k-3) = 0$. So $3^x = \frac{1}{3} \implies x = -1$ or $3^x = 3 \implies x = 1$.
---
Q: Solve $2^{x} - 12\cdot 2^{-x} = 1$.
A: Let $k = 2^x$: $k - \frac{12}{k} = 1 \implies k^2 - k - 12 = 0 \implies (k-4)(k+3) = 0$. Reject $k = -3$. Thus $2^x = 4 \implies x = 2$.
```

## Further help

- Siyavula Mathematics Grade 11, [1.4 Applications of exponentials](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-04).
- Siyavula Mathematics Grade 11, [2.4 Substitution](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-04).
