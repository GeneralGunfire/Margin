---
title: Same-base method
subject: pure-mathematics
topic: Exponents and surds
part: Algebra
term: 1
subtopic: Solving exponential equations
order: 121
---

> **What you'll learn:** how to solve an equation where the unknown sits in an exponent, by writing both sides as powers of the same base.
>
> **Prerequisites:** [Simplifying with common bases and factoring powers](/library/pure-mathematics/exponents-and-surds/simplifying-with-common-bases-and-factoring-powers), and solving linear equations.

## The idea in plain language

An equation like $3^{2x} = 27^{x-1}$ looks hard because $x$ is up in the exponent. But look at the bases: $27$ is just $3^3$. Once both sides are powers of $3$, the two sides can only be equal if the exponents are equal. So you swap an exponential equation for an ordinary linear equation.

## The rule

```rule
title: Same base, same exponent
a^{m} = a^{n} \;\Longrightarrow\; m = n \qquad (a > 0,\ a \neq 1)
```

**Method**

1. Write every base as a power of the same small number (2, 3, 5, ...).
2. Use the exponent laws until each side is a single power.
3. Equate the exponents and solve.
4. Check by substituting back.

## Worked example 1 (basic)

```steps
title: Solve $3^{2x} = 27^{x-1}$
Write 27 as a power of 3 :: 3^{2x} = \left(3^{3}\right)^{x-1}
Multiply the exponents on the right :: 3^{2x} = 3^{3(x-1)}
Same base, so the exponents are equal :: 2x = 3(x-1)
Expand the bracket :: 2x = 3x - 3
Collect the x terms :: x = 3
Check: both sides give $729$ :: 3^{6} = 729 \quad\text{and}\quad 27^{2} = 729
```

## Worked example 2 (two different bases)

```steps
title: Solve $4^{x+1} = 8^{x-2}$
Both 4 and 8 are powers of 2 :: \left(2^{2}\right)^{x+1} = \left(2^{3}\right)^{x-2}
Multiply the exponents :: 2^{2x+2} = 2^{3x-6}
Equate the exponents :: 2x + 2 = 3x - 6
Solve :: x = 8
```

## Worked example 3 (exam level)

```steps
title: Solve $2^{3x-1} = \frac{1}{\sqrt{8}}$
Turn the right side into a power of 2 :: \sqrt{8} = 8^{1/2} = 2^{3/2}
A reciprocal gives a negative exponent :: \frac{1}{\sqrt{8}} = 2^{-3/2}
Equate the exponents :: 3x - 1 = -\frac{3}{2}
Add 1 to both sides :: 3x = -\frac{1}{2}
Divide by 3 :: x = -\frac{1}{6}
```

> **Common mistakes**
>
> - Equating exponents before the bases match. $4^{x} = 2^{3}$ does **not** mean $x = 3$.
> - Forgetting to multiply when raising a power to a power: $\left(3^3\right)^{x-1} = 3^{3(x-1)}$, so the bracket must be expanded.
> - Dividing the bases instead of rewriting them: $\frac{9^x}{3^x}$ is not "3" until you write $9^x = 3^{2x}$.
> - Losing a negative sign when you write a reciprocal as a negative exponent.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Solve $2^{x} = 64$.
A: $64 = 2^{6}$, so $2^{x} = 2^{6}$ and $x = 6$.
---
Q: Solve $5^{x-1} = 125$.
A: $125 = 5^{3}$, so $x - 1 = 3$ and $x = 4$.
---
Q: Solve $9^{x} = 27$.
A: $9 = 3^2$ and $27 = 3^3$, so $3^{2x} = 3^{3}$. Then $2x = 3$ and $x = \frac{3}{2}$.
---
Q: Solve $4^{2x-1} = 8^{x+1}$.
A: $2^{2(2x-1)} = 2^{3(x+1)}$, which is $2^{4x-2} = 2^{3x+3}$. So $4x - 2 = 3x + 3$ and $x = 5$.
---
Q: Solve $\frac{2^{x+3}}{4^{x}} = 16$.
A: $\frac{2^{x+3}}{2^{2x}} = 2^{x+3-2x} = 2^{3-x}$. Since $16 = 2^4$: $3 - x = 4$, so $x = -1$.
---
Q: Solve $3^{x+1}\cdot 9^{x} = \frac{1}{27}$.
A: $3^{x+1}\cdot 3^{2x} = 3^{3x+1}$ and $\frac{1}{27} = 3^{-3}$. So $3x + 1 = -3$ and $x = -\frac{4}{3}$.
```

## Further help

- Siyavula Mathematics Grade 11, [1.4 Applications of exponentials](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-04).
- Siyavula Mathematics Grade 11, [1.1 Revision](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-01).
