---
title: Exponent laws with fractions
youtube_query: Grade 11 exponent laws with fractions
subject: pure-mathematics
topic: Exponents and surds
part: Algebra
term: 1
subtopic: Rational exponents and their laws
order: 112
---

> **What you'll learn:** *why* the Grade 10 exponent laws still work with fractions, how to evaluate and simplify expressions with roots and negative rational powers cleanly, and how to avoid the traps around brackets and $+$ signs.
>
> **Prerequisites:** [From roots to fractional exponents](/library/pure-mathematics/exponents-and-surds/from-roots-to-fractional-exponents), and adding/subtracting fractions.

## 1. One habit that solves almost everything

Nothing changes when exponents become fractions—product still adds, quotient still subtracts, power-of-a-power still multiplies. The only catch is that roots hide the exponent.

Always convert every root into a **fractional exponent first**, apply the laws, and simplify:

$$\frac{\sqrt{x^3}\cdot\sqrt[3]{x^2}}{x^{1/6}} = \frac{x^{3/2}\cdot x^{2/3}}{x^{1/6}} = x^{\frac{3}{2} + \frac{2}{3} - \frac{1}{6}} = x^{\frac{9+4-1}{6}} = x^2$$

```rule
title: Exponent laws for rational exponents (x, y > 0)
x^{m} \cdot x^{n} = x^{m+n} \qquad \frac{x^{m}}{x^{n}} = x^{m-n} \qquad \left(x^{m}\right)^{n} = x^{mn}
(xy)^{n} = x^{n}y^{n} \qquad \left(\frac{x}{y}\right)^{n} = \frac{x^{n}}{y^{n}} \qquad x^{-n} = \frac{1}{x^{n}} \qquad x^{0} = 1
```

```tryit
title: Quick check
prompt: Simplify **(a)** $x^{1/2} \cdot x^{3/2}$ and **(b)** $\left(x^{2/3}\right)^{6}$.
hint: Multiply like bases by **adding** exponents; raise a power to a power by **multiplying** exponents.
answer: **(a)** $x^{\frac{1}{2}+\frac{3}{2}} = x^{2}$. **(b)** $x^{\frac{2}{3}\cdot 6} = x^{4}$.
```

## 2. Brackets, numbers, and signs

When a product sits inside a bracket raised to a fractional power, the exponent applies to **every factor**—numbers included:

$$\left(27a^6 b^{-3}\right)^{2/3} = 27^{2/3}\cdot \left(a^6\right)^{2/3}\cdot \left(b^{-3}\right)^{2/3} = 9a^4 b^{-2} = \frac{9a^4}{b^2}$$

```compare
title: Two classic traps
left_title: Multiply vs add exponents
left:
Multiply exponents **only** for a power of a power:
$$\left(x^{1/2}\right)^{1/3} = x^{1/6}$$
Multiplying powers with the same base **adds** exponents:
$$x^{1/2}\cdot x^{1/3} = x^{\frac{3}{6}+\frac{2}{6}} = x^{5/6}$$
right_title: Terms added together
right:
Laws only apply to **multiplication and division**:
$$x^{1/2} + x^{1/3} \neq x^{5/6}$$
There is no single-power shortcut across $+$ or $-$.
```

```tryit
title: Try it first
prompt: Simplify $\left(16x^8 y^{-4}\right)^{3/4}$ and leave your answer with positive exponents.
hint: Compute $16^{3/4}$ first using root-first ($\sqrt[4]{16} = 2$), then multiply each variable exponent by $\frac{3}{4}$.
answer: $16^{3/4} x^{8 \cdot \frac{3}{4}} y^{-4 \cdot \frac{3}{4}} = 2^3 x^6 y^{-3} = \dfrac{8x^6}{y^3}$.
```

## 3. Worked examples

```steps
title: Example 1: Simplify $\dfrac{x^{3/2}\cdot x^{1/2}}{x}$ ($x > 0$)
Add the exponents in the numerator :: \frac{x^{\frac{3}{2}+\frac{1}{2}}}{x^{1}} = \frac{x^{2}}{x^{1}}
Subtract the denominator exponent :: = x^{2-1} = x
```

```steps
title: Example 2: Simplify $\dfrac{\sqrt{x^3}\cdot\sqrt[3]{x^2}}{x^{1/6}}$ ($x > 0$)
Convert every root to fractional exponent form :: \frac{x^{3/2} \cdot x^{2/3}}{x^{1/6}}
Combine using product and quotient laws :: = x^{\frac{3}{2}+\frac{2}{3}-\frac{1}{6}}
Write with common denominator 6 :: = x^{\frac{9}{6}+\frac{4}{6}-\frac{1}{6}}
Add and simplify :: = x^{\frac{12}{6}} = x^{2}
```

```steps
title: Example 3 (Exam level): Simplify $\left(\dfrac{8a^{-3}b^{6}}{27a^{3}}\right)^{-2/3}$
Simplify inside the bracket first :: \left(\frac{8b^{6}}{27a^{6}}\right)^{-2/3}
Flip the fraction to make the outer exponent positive :: = \left(\frac{27a^{6}}{8b^{6}}\right)^{2/3}
Apply the exponent $\frac{2}{3}$ to every factor (root first for 27 and 8) :: = \frac{27^{2/3}\,a^{4}}{8^{2/3}\,b^{4}} = \frac{9a^{4}}{4b^{4}}
```

> **Common mistakes**
>
> - **Forgetting the coefficient:** $(16x^8)^{3/4}$ requires $16^{3/4} = 8$, not $16x^6$.
> - **Subtracting negative exponents poorly:** $\frac{x^2}{x^{-3}} = x^{2 - (-3)} = x^5$, not $x^{-1}$.
> - **Skipping common denominators:** write $\frac{3}{6} + \frac{2}{6}$ down rather than guessing $\frac{1}{2} + \frac{1}{3}$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Simplify $x^{1/2} \cdot x^{3/2}$.
A: $x^{\frac{1}{2}+\frac{3}{2}} = x^2$.
---
Q: Simplify $\left(x^{2/3}\right)^3$.
A: $x^{\frac{2}{3}\cdot 3} = x^2$.
---
Q: Simplify $4x^{1/2} \cdot 3x^{-3/2}$ with positive exponents.
A: Multiply coefficients ($4 \times 3 = 12$) and add exponents ($\frac{1}{2} - \frac{3}{2} = -1$): $12x^{-1} = \dfrac{12}{x}$.
---
Q: Simplify $\left(16x^8\right)^{3/4}$.
A: $16^{3/4} = (\sqrt[4]{16})^3 = 8$ and $(x^8)^{3/4} = x^6$, giving $8x^6$.
---
Q: Simplify $\dfrac{\sqrt{x}\cdot\sqrt[3]{x}}{x^{5/6}}$ ($x > 0$).
A: $\dfrac{x^{1/2}\cdot x^{1/3}}{x^{5/6}} = x^{\frac{3}{6}+\frac{2}{6}-\frac{5}{6}} = x^0 = 1$.
---
Q: Simplify $\dfrac{\left(a^{2/3}b^{-1/2}\right)^6}{a^2 b^{-3}}$ ($a, b > 0$).
A: Numerator: $a^4 b^{-3}$. Divide: $a^{4-2} b^{-3 - (-3)} = a^2 b^0 = a^2$.
---
Q: Simplify $\left(\tfrac{1}{2}x^{-1/2}\right)^{-2}$.
A: $\left(\tfrac{1}{2}\right)^{-2} \cdot \left(x^{-1/2}\right)^{-2} = 4x$.
```

## Further help

- Siyavula Mathematics Grade 11, [1.1 Revision](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-01).
- Siyavula Mathematics Grade 11, [1.2 Rational exponents and surds](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-02).
