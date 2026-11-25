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

> **What you'll learn:** how to use the exponent laws when the exponents are fractions, to simplify expressions with letters.
>
> **Prerequisites:** [From roots to fractional exponents](/library/pure-mathematics/exponents-and-surds/from-roots-to-fractional-exponents), and adding and subtracting fractions.

## The idea in plain language

Good news: nothing new to learn. The laws you used for whole-number exponents work exactly the same for fractional exponents. The only extra skill is adding, subtracting and multiplying fractions neatly.

The habit that wins marks: **convert every root to a fractional exponent first**, then apply the laws, then (only if the question asks) go back to root form.

## The laws

For $x, y > 0$ and rational exponents $m$ and $n$:

| Law | Rule |
| --- | --- |
| Product | $x^m \cdot x^n = x^{m+n}$ |
| Quotient | $\frac{x^m}{x^n} = x^{m-n}$ |
| Power of a power | $(x^m)^n = x^{mn}$ |
| Power of a product | $(xy)^n = x^n y^n$ |
| Power of a quotient | $\left(\frac{x}{y}\right)^n = \frac{x^n}{y^n}$ |
| Negative exponent | $x^{-n} = \frac{1}{x^n}$ |
| Zero exponent | $x^0 = 1$ |

Two reminders:

- The laws do not work across a $+$ or $-$ sign. $x^{1/2} + x^{1/3}$ cannot be combined into one power.
- When a bracket contains a number and letters, the outer exponent goes on **each** factor, including the number: $(27a^6)^{2/3} = 27^{2/3}\,a^{4}$.

## Worked example 1 (basic)

Simplify $\frac{x^{3/2} \cdot x^{1/2}}{x}$.

Add the exponents on top: $\frac{3}{2}+\frac{1}{2} = 2$, so the top is $x^2$. Then divide by $x = x^1$:
$$\frac{x^2}{x^1} = x^{2-1} = x.$$

## Worked example 2 (brackets and negative exponents)

Simplify $\left(27a^6 b^{-3}\right)^{2/3}$, and leave the answer with positive exponents.

**Step 1.** Apply the outer exponent to every factor:
$$27^{2/3} \cdot (a^6)^{2/3} \cdot (b^{-3})^{2/3}.$$

**Step 2.** Work out each piece:

- $27^{2/3} = (\sqrt[3]{27})^2 = 9$
- $(a^6)^{2/3} = a^{6 \cdot 2/3} = a^4$
- $(b^{-3})^{2/3} = b^{-2}$

**Step 3.** Put together and make the exponent positive:
$$9a^4b^{-2} = \frac{9a^4}{b^2}.$$

## Worked example 3 (exam level)

Press **Next step** to build the solution one line at a time.

```steps
title: Simplify $\frac{\sqrt{x^3}\cdot\sqrt[3]{x^2}}{x^{1/6}}$
Convert every root to an exponent first :: \frac{x^{3/2} \cdot x^{2/3}}{x^{1/6}}
Multiply on top by adding exponents. Divide by subtracting :: = x^{3/2+2/3-1/6}
Use a common denominator of 6 :: = x^{9/6+4/6-1/6}
Add and subtract the numerators :: = x^{12/6}
Simplify the fraction :: = x^{2}
```

> **Common mistakes**
>
> - Multiplying exponents when you should add: $x^{1/2} \cdot x^{1/3} = x^{5/6}$, not $x^{1/6}$.
> - Adding exponents in a power of a power: $(x^{2/3})^3 = x^2$ (multiply), not $x^{11/3}$.
> - Forgetting the number inside a bracket: in $(16x^8)^{3/4}$ the 16 must also be raised to $\frac{3}{4}$.
> - Trying to combine terms across a plus sign, such as $x^{1/2} + x^{1/3}$.
> - Losing a negative sign when subtracting a negative exponent: dividing by $x^{-2}$ means adding 2 to the exponent.
> - Sloppy fraction arithmetic. Write the common denominator down; do not do it in your head.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Simplify $x^{1/2} \cdot x^{3/2}$.
A: $x^{1/2+3/2} = x^2$.
---
Q: Simplify $\left(x^{2/3}\right)^3$.
A: $x^{2/3\cdot 3} = x^2$.
---
Q: Simplify $4x^{1/2} \cdot 3x^{-3/2}$. Leave your answer with positive exponents.
A: Multiply the numbers: $4 \times 3 = 12$. Add the exponents: $\frac{1}{2}+\left(-\frac{3}{2}\right) = -1$. So $12x^{-1} = \frac{12}{x}$.
---
Q: Simplify $\left(16x^8\right)^{3/4}$.
A: $16^{3/4} = (\sqrt[4]{16})^3 = 2^3 = 8$ and $(x^8)^{3/4} = x^6$. Answer: $8x^6$.
---
Q: Simplify $\frac{\sqrt{x}\cdot\sqrt[3]{x}}{x^{5/6}}$ (assume $x > 0$).
A: Convert: $x^{1/2} \cdot x^{1/3} \div x^{5/6} = x^{1/2+1/3-5/6}$. Now $\frac{3}{6}+\frac{2}{6}-\frac{5}{6} = 0$, so the answer is $x^0 = 1$.
---
Q: Simplify $\frac{\left(a^{2/3}b^{-1/2}\right)^6}{a^2 b^{-3}}$. Leave your answer with positive exponents.
A: Top: $a^{2/3\cdot 6}\,b^{-1/2\cdot 6} = a^4 b^{-3}$. Divide: $a^{4-2}\,b^{-3-(-3)} = a^2 b^0 = a^2$.
---
Q: Simplify $\left(\tfrac{1}{2}x^{-1/2}\right)^{-2}$.
A: Apply the exponent $-2$ to each factor: $\left(\tfrac{1}{2}\right)^{-2} = 4$ and $\left(x^{-1/2}\right)^{-2} = x^1$. Answer: $4x$.
```

## Further help

- Siyavula Mathematics Grade 11, [1.1 Revision](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-01) (the laws for integer exponents).
- Siyavula Mathematics Grade 11, [1.2 Rational exponents and surds](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-02).
