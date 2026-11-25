---
title: Same-base method
youtube_query: Grade 11 exponential equations same base method
subject: pure-mathematics
topic: Exponents and surds
part: Algebra
term: 1
subtopic: Solving exponential equations
order: 121
---

> **What you'll learn:** *why* matching bases lets you equate exponents directly, and how to turn exponential equations with fractions, roots, or multiple terms into ordinary linear equations.
>
> **Prerequisites:** [Simplifying with common bases and factoring powers](/library/pure-mathematics/exponents-and-surds/simplifying-with-common-bases-and-factoring-powers), and solving linear equations.

## 1. Why matching the base works

Because an exponential graph $y = a^x$ (with $a > 0$ and $a \neq 1$) strictly climbs or falls without ever turning around, each $y$-value belongs to **exactly one** exponent $x$.

So the moment both sides are written as single powers of the **same** base, their exponents must be equal:

```rule
title: Same base, same exponent
a^{m} = a^{n} \;\Longrightarrow\; m = n \qquad (a > 0,\ a \neq 1)
```

Notice the restriction $a \neq 1$: $1^3 = 1^{99}$, so equating exponents when the base is $1$ would fail.

```tryit
title: Quick check
prompt: Solve **(a)** $2^x = 32$ and **(b)** $9^x = 27$.
hint: Express $32$ as a power of $2$, and both $9$ and $27$ as powers of $3$.
answer: **(a)** $2^x = 2^5 \implies x = 5$. **(b)** $(3^2)^x = 3^3 \implies 2x = 3 \implies x = \dfrac{3}{2}$.
```

## 2. Three moves when the equation looks messy

1. **Isolate the power term** if there is a coefficient or constant next to it (e.g., $5 \cdot 2^x = 40 \implies 2^x = 8$).
2. **Rewrite roots and reciprocals as exponents:** $\frac{1}{27} = 3^{-3}$ and $\sqrt{8} = 2^{3/2}$.
3. **Multiply inner and outer exponents** carefully using brackets before dropping the base.

```compare
title: Two mistakes that break the method
left_title: Dropping unequal bases
left:
In $4^x = 2^3$, the bases are $4$ and $2$, so $x \neq 3$.
First rewrite $4^x = 2^{2x}$:
$$2^{2x} = 2^3 \implies 2x = 3 \implies x = \frac{3}{2}$$
right_title: Dividing out coefficients vs exponents
right:
In $3 \cdot 2^x = 24$, **do not** multiply $3 \times 2$ to get $6^x$.
Divide both sides by $3$ first:
$$2^x = 8 = 2^3 \implies x = 3$$
```

```tryit
title: Try it first
prompt: Solve $2 \cdot 5^{x-1} = 50$.
hint: Divide both sides by $2$ before rewriting $25$ as a power of $5$.
answer: $5^{x-1} = 25 = 5^2 \implies x - 1 = 2 \implies x = 3$.
```

## 3. Worked examples

```steps
title: Example 1: Solve $3^{2x} = 27^{x-1}$
Write 27 as $3^3$ :: 3^{2x} = \left(3^{3}\right)^{x-1}
Multiply the exponents on the right :: 3^{2x} = 3^{3x-3}
Bases match, so equate exponents :: 2x = 3x - 3
Solve for $x$ :: x = 3
```

```steps
title: Example 2: Solve $4^{x+1} = 8^{x-2}$
Rewrite both 4 and 8 as powers of 2 :: \left(2^{2}\right)^{x+1} = \left(2^{3}\right)^{x-2}
Expand the exponents :: 2^{2x+2} = 2^{3x-6}
Equate exponents :: 2x + 2 = 3x - 6
Solve :: x = 8
```

```steps
title: Example 3 (Exam level): Solve $2^{3x-1} = \dfrac{1}{\sqrt{8}}$
Convert $\sqrt{8}$ into base 2 :: \sqrt{8} = 8^{1/2} = \left(2^{3}\right)^{1/2} = 2^{3/2}
Move to numerator with a negative exponent :: 2^{3x-1} = 2^{-3/2}
Equate exponents :: 3x - 1 = -\frac{3}{2}
Add 1 and divide by 3 :: 3x = -\frac{1}{2} \;\Longrightarrow\; x = -\frac{1}{6}
```

> **Common mistakes**
>
> - **Forgetting brackets when multiplying exponents:** $(3^3)^{x-1} = 3^{3x-3}$, not $3^{3x-1}$.
> - **Multiplying base and coefficient:** $3 \cdot 2^x \neq 6^x$ because the exponent $x$ belongs only to $2$.
> - **Skipping the quick substitution check:** plugging $x$ back in takes ten seconds and catches sign flips immediately.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Solve $2^{x} = 64$.
A: $2^x = 2^6 \implies x = 6$.
---
Q: Solve $5^{x-1} = 125$.
A: $5^{x-1} = 5^3 \implies x - 1 = 3 \implies x = 4$.
---
Q: Solve $3 \cdot 2^{x+1} = 48$.
A: Divide by $3$: $2^{x+1} = 16 = 2^4$, so $x + 1 = 4$ and $x = 3$.
---
Q: Solve $4^{2x-1} = 8^{x+1}$.
A: $2^{2(2x-1)} = 2^{3(x+1)} \implies 4x - 2 = 3x + 3 \implies x = 5$.
---
Q: Solve $\dfrac{2^{x+3}}{4^{x}} = 16$.
A: $\dfrac{2^{x+3}}{2^{2x}} = 2^{3-x} = 2^4 \implies 3 - x = 4 \implies x = -1$.
---
Q: Solve $3^{x+1}\cdot 9^{x} = \dfrac{1}{27}$.
A: $3^{x+1}\cdot 3^{2x} = 3^{3x+1} = 3^{-3} \implies 3x + 1 = -3 \implies x = -\dfrac{4}{3}$.
```

## Further help

- Siyavula Mathematics Grade 11, [1.4 Applications of exponentials](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-04).
- Siyavula Mathematics Grade 11, [1.1 Revision](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-01).
