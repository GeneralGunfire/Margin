---
title: From roots to fractional exponents
subject: pure-mathematics
topic: Exponents and surds
part: Algebra
term: 1
subtopic: Rational exponents and their laws
order: 111
---

> **What you'll learn:** how a root can be written as a fractional exponent (and back again), and how to work out values like $16^{3/4}$ without a calculator.
>
> **Prerequisites:** the Grade 10 laws for integer exponents, and knowing your squares, cubes and roots (the table below).

## The idea in plain language

In Grade 10 an exponent counted how many times a number was multiplied by itself. So what could $x^{1/2}$ possibly mean? Half a multiplication?

Let the exponent laws decide. If the product law $x^m \cdot x^n = x^{m+n}$ is to keep working, then

$$x^{1/2} \cdot x^{1/2} = x^{1/2+1/2} = x^1 = x.$$

So $x^{1/2}$ is a number that, multiplied by itself, gives $x$. That is exactly the square root. The same thinking gives $x^{1/3}\cdot x^{1/3}\cdot x^{1/3} = x$, so $x^{1/3}$ is the cube root.

## Rules and definitions

For $x > 0$ and integers $p$ and $q$ with $q \geq 2$:

```rule
title: Fractional exponents
\text{root: } x^{1/q} = \sqrt[q]{x}
\text{power over root: } x^{p/q} = \left(\sqrt[q]{x}\right)^{p} = \sqrt[q]{x^{p}}
\text{negative exponent: } x^{-p/q} = \frac{1}{x^{p/q}}
```

- The **denominator** $q$ is the root. The **numerator** $p$ is the power.
- A negative exponent flips the number over. It does **not** make the answer negative.
- **Tip:** take the root first, then the power. It keeps the numbers small: $16^{3/4} = (\sqrt[4]{16})^3 = 2^3 = 8$, which is easier than $\sqrt[4]{4096}$.

Know these by heart, because every question in this topic relies on them:

| Squares | Cubes | Fourth and fifth powers |
| --- | --- | --- |
| $4,\ 9,\ 16,\ 25,\ 36,\ 49,\ 64,\ 81,\ 100$ | $8,\ 27,\ 64,\ 125,\ 216$ | $2^4=16,\ 3^4=81,\ 2^5=32$ |

## Worked example 1 (basic)

Evaluate without a calculator: **(a)** $25^{1/2}$ **(b)** $27^{1/3}$ **(c)** $16^{3/4}$.

**(a)** The denominator is 2, so take the square root: $25^{1/2} = \sqrt{25} = 5$.

**(b)** The denominator is 3, so take the cube root: $27^{1/3} = \sqrt[3]{27} = 3$.

**(c)** Root first (the 4th root of 16 is 2), then the power 3:
$$16^{3/4} = \left(\sqrt[4]{16}\right)^3 = 2^3 = 8.$$

Part (c) again, one step at a time. Press **Next step** to reveal each line:

```steps
title: Evaluate $16^{3/4}$
The denominator is 4 and the numerator is 3 :: 16^{3/4}
Root first: the 4th root of 16 :: = \left(\sqrt[4]{16}\right)^{3}
Since $2^4 = 16$, the 4th root of 16 is 2 :: = 2^{3}
Now the power :: = 8
```

## Worked example 2 (negative exponents)

Evaluate without a calculator: **(a)** $8^{-2/3}$ **(b)** $\left(\frac{1}{4}\right)^{-3/2}$.

**(a)** Deal with the negative sign first by flipping:
$$8^{-2/3} = \frac{1}{8^{2/3}} = \frac{1}{\left(\sqrt[3]{8}\right)^2} = \frac{1}{2^2} = \frac{1}{4}.$$

**(b)** A negative exponent on a fraction flips the fraction:
$$\left(\frac{1}{4}\right)^{-3/2} = 4^{3/2} = \left(\sqrt{4}\right)^3 = 2^3 = 8.$$

## Worked example 3 (exam level)

Evaluate without a calculator. Work out each power on its own, then combine.

```steps
title: Evaluate $\frac{4^{3/2} \cdot 27^{2/3}}{8^{-1/3}}$
Start with the top-left power :: 4^{3/2} = \left(\sqrt{4}\right)^{3} = 2^{3} = 8
Next, the top-right power :: 27^{2/3} = \left(\sqrt[3]{27}\right)^{2} = 3^{2} = 9
Now the bottom. Flip because the exponent is negative :: 8^{-1/3} = \frac{1}{\sqrt[3]{8}} = \frac{1}{2}
Put the values back in :: \frac{8 \cdot 9}{\frac{1}{2}} = 72 \div \frac{1}{2}
Dividing by a half doubles the number :: = 72 \times 2 = 144
```

## Converting between roots and exponents

To work with letters, you will often switch forms:

| Root form | Exponent form |
| --- | --- |
| $\sqrt{x}$ | $x^{1/2}$ |
| $\sqrt[3]{x^2}$ | $x^{2/3}$ |
| $\frac{1}{\sqrt{x}}$ | $x^{-1/2}$ |
| $\frac{4}{\sqrt[3]{x^2}}$ | $4x^{-2/3}$ (only the $x$ moves, the 4 stays) |

> **Common mistakes**
>
> - Reading $x^{p/q}$ with the numerator as the root. The **denominator** is the root: $8^{2/3}$ involves a cube root, not a square root.
> - Giving $\pm$ answers. $9^{1/2} = 3$ only. The exponent notation stands for the positive root.
> - Thinking a negative exponent gives a negative answer. $8^{-2/3} = \frac{1}{4}$, which is positive.
> - Flipping the coefficient too: $\frac{4}{\sqrt[3]{x^2}} = 4x^{-2/3}$, not $\frac{1}{4}x^{2/3}$.
> - Doing the power first on big numbers (for example $16^3 = 4096$) and then struggling with the root. Root first.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Write in exponent form: **(a)** $\sqrt{x}$ **(b)** $\sqrt[3]{x^5}$ **(c)** $\frac{1}{\sqrt[4]{x}}$ **(d)** $\frac{6}{\sqrt{x^3}}$
A: (a) $x^{1/2}$. (b) $x^{5/3}$. (c) $x^{-1/4}$. (d) $6x^{-3/2}$.
---
Q: Evaluate without a calculator: **(a)** $49^{1/2}$ **(b)** $125^{1/3}$ **(c)** $32^{1/5}$
A: (a) $\sqrt{49} = 7$. (b) $\sqrt[3]{125} = 5$. (c) $\sqrt[5]{32} = 2$, because $2^5 = 32$.
---
Q: Evaluate without a calculator: **(a)** $81^{3/4}$ **(b)** $64^{2/3}$ **(c)** $8^{5/3}$
A: (a) $(\sqrt[4]{81})^3 = 3^3 = 27$. (b) $(\sqrt[3]{64})^2 = 4^2 = 16$. (c) $(\sqrt[3]{8})^5 = 2^5 = 32$.
---
Q: Evaluate without a calculator: **(a)** $27^{-2/3}$ **(b)** $32^{-2/5}$ **(c)** $\left(\frac{16}{81}\right)^{-3/4}$
A: (a) $\frac{1}{(\sqrt[3]{27})^2} = \frac{1}{3^2} = \frac{1}{9}$.
(b) $\frac{1}{(\sqrt[5]{32})^2} = \frac{1}{2^2} = \frac{1}{4}$.
(c) Flip the fraction: $\left(\frac{81}{16}\right)^{3/4} = \left(\sqrt[4]{\tfrac{81}{16}}\right)^3 = \left(\tfrac{3}{2}\right)^3 = \frac{27}{8}$.
---
Q: Evaluate without a calculator: $\left(0{,}008\right)^{-2/3}$
A: Write $0{,}008 = \frac{8}{1000} = \left(\frac{2}{10}\right)^3 = \left(\frac{1}{5}\right)^3$. Then
$$\left(\tfrac{1}{5}\right)^{3 \cdot \left(-2/3\right)} = \left(\tfrac{1}{5}\right)^{-2} = 5^2 = 25.$$
---
Q: Evaluate without a calculator: $9^{-1/2} \cdot 125^{2/3}$
A: $9^{-1/2} = \frac{1}{\sqrt{9}} = \frac{1}{3}$ and $125^{2/3} = (\sqrt[3]{125})^2 = 5^2 = 25$. Product: $\frac{25}{3}$.
```

## Further help

- Siyavula Mathematics Grade 11, [1.1 Revision](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-01) (integer exponent laws to refresh first).
- Siyavula Mathematics Grade 11, [1.2 Rational exponents and surds](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-02).
