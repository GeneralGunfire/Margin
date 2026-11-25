---
title: Substitution with k = a^x
subject: pure-mathematics
topic: Exponents and surds
part: Algebra
term: 1
subtopic: Solving exponential equations
order: 122
---

> **What you'll learn:** how to solve exponential equations that turn into quadratics, by letting $k = a^x$, and why some answers must be rejected.
>
> **Prerequisites:** [Same-base method](/library/pure-mathematics/exponents-and-surds/same-base-method), and solving quadratic equations by factorising.

## The idea in plain language

Some equations mix $4^x$ and $2^x$, like $4^x - 5\cdot 2^x + 4 = 0$. Same-base alone will not finish this, because there is a sum. The trick is that $4^x = (2^x)^2$, so the equation is secretly a quadratic in $2^x$. Give $2^x$ a new name, $k$, solve the quadratic, then turn each $k$ back into $x$.

One more fact matters. A power of a positive base is **never zero or negative**. The graph of $y = 2^x$ stays above the $x$-axis, so $2^x = k$ has no solution when $k \leq 0$.

![Graph of y = 2 to the x: it always lies above the x-axis and passes through (0;1), (1;2), (2;4) and (-1;0.5)](/content-images/exp-always-positive.svg)

## The method

```rule
title: Substitution k = a^x
a^{2x} = k^{2} \qquad a^{x+1} = a\cdot k \qquad k = a^{x} > 0
```

1. Rewrite so the only powers are $a^{2x}$ and $a^{x}$.
2. Let $k = a^x$ and solve the quadratic in $k$.
3. **Reject** any $k \leq 0$.
4. Solve $a^x = k$ for each valid $k$ (same-base method).

## Worked example 1 (basic)

```steps
title: Solve $4^{x} - 5\cdot 2^{x} + 4 = 0$
Write $4^x$ with base 2 :: 2^{2x} - 5\cdot 2^{x} + 4 = 0
Let $k = 2^x$ :: k^{2} - 5k + 4 = 0
Factorise :: (k-1)(k-4) = 0
Two values of $k$ :: k = 1 \quad\text{or}\quad k = 4
Solve $2^x = 1$ :: x = 0
Solve $2^x = 4$ :: x = 2
```

## Worked example 2 (a rejected value)

```steps
title: Solve $9^{x} - 2\cdot 3^{x} - 3 = 0$
Write $9^x = 3^{2x}$ and let $k = 3^x$ :: k^{2} - 2k - 3 = 0
Factorise :: (k-3)(k+1) = 0
Two values of $k$ :: k = 3 \quad\text{or}\quad k = -1
$3^x$ is always positive, so reject $k = -1$ :: 3^{x} = 3
Solve :: x = 1
```

## Worked example 3 (exam level)

```steps
title: Solve $2^{2x+1} - 5\cdot 2^{x} + 2 = 0$
Split the exponent: $2^{2x+1} = 2\cdot 2^{2x}$ :: 2\cdot 2^{2x} - 5\cdot 2^{x} + 2 = 0
Let $k = 2^x$ :: 2k^{2} - 5k + 2 = 0
Factorise :: (2k-1)(k-2) = 0
Two values of $k$, both positive :: k = \tfrac{1}{2} \quad\text{or}\quad k = 2
$2^x = \frac{1}{2}$ :: x = -1
$2^x = 2$ :: x = 1
```

> **Common mistakes**
>
> - Forgetting to reject $k \leq 0$. Always write the check "$a^x > 0$".
> - Stopping at $k$. The question asks for $x$, so solve $a^x = k$ as well.
> - Writing $2^{2x+1} = 4^{x}\cdot 1$. The correct split is $2^{2x}\cdot 2^{1}$.
> - Dividing the whole equation by $2^x$ and losing a solution.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Solve $9^{x} - 10\cdot 3^{x} + 9 = 0$.
A: Let $k = 3^x$: $k^2 - 10k + 9 = 0$, so $(k-1)(k-9) = 0$. Then $3^x = 1$ gives $x = 0$ and $3^x = 9$ gives $x = 2$.
---
Q: Solve $4^{x} - 6\cdot 2^{x} + 8 = 0$.
A: Let $k = 2^x$: $k^2 - 6k + 8 = 0$, so $(k-2)(k-4) = 0$. Then $x = 1$ or $x = 2$.
---
Q: Solve $25^{x} - 4\cdot 5^{x} - 5 = 0$.
A: Let $k = 5^x$: $k^2 - 4k - 5 = 0$, so $(k-5)(k+1) = 0$. Reject $k = -1$ because $5^x > 0$. Then $5^x = 5$ and $x = 1$.
---
Q: Solve $2^{2x} - 3\cdot 2^{x} - 4 = 0$.
A: Let $k = 2^x$: $k^2 - 3k - 4 = 0$, so $(k-4)(k+1) = 0$. Reject $k = -1$. Then $2^x = 4$ and $x = 2$.
---
Q: Solve $3^{2x+1} - 10\cdot 3^{x} + 3 = 0$.
A: $3\cdot 3^{2x} - 10\cdot 3^x + 3 = 0$. Let $k = 3^x$: $3k^2 - 10k + 3 = 0$, so $(3k-1)(k-3) = 0$. Then $k = \tfrac{1}{3}$ or $k = 3$, so $x = -1$ or $x = 1$.
---
Q: Solve $2^{x} + 2^{3-x} = 9$.
A: $2^{3-x} = \frac{8}{2^{x}}$. Let $k = 2^x$: $k + \frac{8}{k} = 9$. Multiply by $k$: $k^2 - 9k + 8 = 0$, so $(k-1)(k-8) = 0$. Then $2^x = 1$ gives $x = 0$ and $2^x = 8$ gives $x = 3$.
```

## Further help

- Siyavula Mathematics Grade 11, [1.4 Applications of exponentials](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-04).
- Siyavula Mathematics Grade 11, [2.4 Substitution](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-04).
