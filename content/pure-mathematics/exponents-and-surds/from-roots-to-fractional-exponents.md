---
title: From roots to fractional exponents
youtube_query: Grade 11 surds and fractional exponents
subject: pure-mathematics
topic: Exponents and surds
part: Algebra
term: 1
subtopic: Rational exponents and their laws
order: 111
---

> **What you'll learn:** *why* a fractional exponent means a root and a power, how to evaluate numbers like $16^{3/4}$ and $8^{-2/3}$ without a calculator, and how to switch cleanly between root form and exponent form.

## 1. Why a fractional exponent is a root

In Grade 10, exponents counted repeated multiplication ($5^2 = 5 \times 5 = 25$). So what could $25^{1/2}$ mean?

Instead of guessing, let the Grade 10 product law $x^m \cdot x^n = x^{m+n}$ tell us:

$$25^{1/2} \cdot 25^{1/2} = 25^{\frac{1}{2} + \frac{1}{2}} = 25^1 = 25$$

$25^{1/2}$ is the positive number that multiplies by itself to give $25$. That is the exact definition of the **square root**: $25^{1/2} = \sqrt{25} = 5$.

The same logic works for any unit fraction $\frac{1}{q}$:

$$27^{1/3} \cdot 27^{1/3} \cdot 27^{1/3} = 27^{\frac{1}{3}+\frac{1}{3}+\frac{1}{3}} = 27^1 = 27 \implies 27^{1/3} = \sqrt[3]{27} = 3$$

```tryit
title: Quick check
prompt: Without a calculator, find the value of **(a)** $49^{1/2}$ and **(b)** $16^{1/4}$.
hint: Ask yourself: what positive number multiplied by itself $2$ times gives $49$? And $4$ times gives $16$?
answer: **(a)** $49^{1/2} = \sqrt{49} = 7$ (since $7^2 = 49$). **(b)** $16^{1/4} = \sqrt[4]{16} = 2$ (since $2^4 = 16$).
```

## 2. Power over root: what $x^{p/q}$ means

Using the power-of-a-power law $(x^m)^n = x^{mn}$, we can split $\frac{p}{q}$ in two orders:

$$x^{p/q} = \left(x^{1/q}\right)^p = \left(\sqrt[q]{x}\right)^p \qquad \text{or} \qquad x^{p/q} = \left(x^p\right)^{1/q} = \sqrt[q]{x^p}$$

```diagram
name: exponent-anatomy
```

```rule
title: Rational exponents (for x > 0 and integers p, q with q >= 2)
x^{1/q} = \sqrt[q]{x}
x^{p/q} = \left(\sqrt[q]{x}\right)^{p} = \sqrt[q]{x^{p}}
x^{-p/q} = \frac{1}{x^{p/q}} = \frac{1}{\left(\sqrt[q]{x}\right)^{p}}
```

We state the general rules for $x > 0$ because even roots of negative numbers (like $(-16)^{1/2} = \sqrt{-16}$) are non-real.

### Take the root first, then the power

Without a calculator, always take the **root first** so your numbers stay small. Compare both ways below:

```diagram
name: root-vs-power
```

## 3. Negative fractional exponents

A negative exponent **flips** the term across the fraction line—it **never** makes the answer negative:

$$x^{-p/q} = \frac{x^0}{x^{p/q}} = \frac{1}{x^{p/q}}$$

If the base is a fraction, flipping it upside down turns the negative exponent positive:

$$\left(\frac{a}{b}\right)^{-p/q} = \left(\frac{b}{a}\right)^{p/q}$$

```compare
title: Watch where the minus sign sits
left_title: In the exponent: $8^{-2/3}$
left:
Flips the power into the denominator:
$$8^{-2/3} = \frac{1}{8^{2/3}} = \frac{1}{(\sqrt[3]{8})^2} = \frac{1}{2^2} = \frac{1}{4}$$
The result is **positive**.
right_title: In front of the base: $-8^{2/3}$
right:
Multiplies the positive power by $-1$:
$$-8^{2/3} = -\left(\sqrt[3]{8}\right)^2 = -(2^2) = -4$$
Compare with $(-8)^{2/3} = (\sqrt[3]{-8})^2 = (-2)^2 = +4$.
```

```tryit
title: Try it first
prompt: Evaluate without a calculator: **(a)** $9^{-3/2}$ and **(b)** $\left(\dfrac{8}{27}\right)^{-2/3}$.
hint: Flip first to make the exponent positive, then take the root before the power.
answer: **(a)** $9^{-3/2} = \dfrac{1}{(\sqrt{9})^3} = \dfrac{1}{3^3} = \dfrac{1}{27}$. **(b)** $\left(\dfrac{8}{27}\right)^{-2/3} = \left(\dfrac{27}{8}\right)^{2/3} = \left(\dfrac{3}{2}\right)^2 = \dfrac{9}{4}$.
```

## 4. Worked examples and converting forms

Most non-calculator questions rely on recognising powers of $2$, $3$, and $5$ (and turning decimals like $0{,}008 = \frac{8}{1000} = \frac{1}{125}$ into simplified fractions first):

| Base | Powers to recognise |
| --- | --- |
| $2$ | $2^2=4,\quad 2^3=8,\quad 2^4=16,\quad 2^5=32,\quad 2^6=64$ |
| $3$ | $3^2=9,\quad 3^3=27,\quad 3^4=81,\quad 3^5=243$ |
| $5$ | $5^2=25,\quad 5^3=125,\quad 5^4=625$ |

```steps
title: Example 1: Evaluate $(0{,}008)^{-2/3}$ without a calculator
Convert the decimal to a simplified fraction :: 0{,}008 = \frac{8}{1000} = \frac{1}{125}
Flip the fraction to make the exponent positive :: \left(\frac{1}{125}\right)^{-2/3} = 125^{2/3}
Root first ($\sqrt[3]{125} = 5$), then square :: = \left(\sqrt[3]{125}\right)^{2} = 5^{2} = 25
```

```steps
title: Example 2 (Exam level): Evaluate $\dfrac{4^{3/2} \cdot 27^{2/3}}{8^{-1/3} \cdot 16^{1/4}}$
Move $8^{-1/3}$ to the numerator so all exponents are positive :: \dfrac{4^{3/2} \cdot 27^{2/3} \cdot 8^{1/3}}{16^{1/4}}
Evaluate each power using root-first ($4^{3/2}=2^3=8$, $27^{2/3}=3^2=9$, $8^{1/3}=2$, $16^{1/4}=2$) :: = \dfrac{8 \cdot 9 \cdot 2}{2}
Cancel $2$ and multiply :: = 8 \cdot 9 = 72
```

When simplifying algebraic expressions, switch roots into fractional exponents first:

| Root form | Exponent form | Note |
| --- | --- | --- |
| $\sqrt{x}$ | $x^{1/2}$ | Unwritten root index is $2$. |
| $\sqrt[3]{x^5}$ | $x^{5/3}$ | Power $5$ over root $3$. |
| $\dfrac{4}{\sqrt[3]{x^2}}$ | $4x^{-2/3}$ | Only $x^2$ moves up; the $4$ stays in the numerator. |
| $\sqrt[3]{8x^2}$ | $2x^{2/3}$ | The cube root applies to both $8$ and $x^2$. |

> **Common mistakes**
>
> - **Swapping power and root:** $8^{2/3} = (\sqrt[3]{8})^2 = 4$, not $(\sqrt{8})^3$.
> - **Writing $\pm$ on $9^{1/2}$:** $9^{1/2} = \sqrt{9} = 3$ only (principal positive root).
> - **Moving a free coefficient:** $\frac{4}{\sqrt[3]{x^2}} = 4x^{-2/3}$, not $\frac{1}{4}x^{-2/3}$.
> - **Splitting roots across $+$ or $-$:** $\sqrt{9 + 16} = \sqrt{25} = 5$, not $3 + 4$.

## 5. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Write in exponential form ($x > 0$): **(a)** $\sqrt[3]{x^5}$ **(b)** $\dfrac{1}{\sqrt[4]{x}}$ **(c)** $\dfrac{6}{\sqrt{x^3}}$ **(d)** $\sqrt{9x^3}$
A: **(a)** $x^{5/3}$
**(b)** $x^{-1/4}$
**(c)** $6x^{-3/2}$
**(d)** $\sqrt{9} \cdot \sqrt{x^3} = 3x^{3/2}$
---
Q: Write in root form with positive exponents only: **(a)** $x^{3/4}$ **(b)** $5x^{-2/3}$ **(c)** $(5x)^{-2/3}$
A: **(a)** $\sqrt[4]{x^3}$
**(b)** $\dfrac{5}{\sqrt[3]{x^2}}$ (only $x$ has the negative exponent)
**(c)** $\dfrac{1}{\sqrt[3]{25x^2}}$ (brackets include the $5$)
---
Q: Evaluate without a calculator: **(a)** $81^{3/4}$ **(b)** $64^{2/3}$ **(c)** $32^{-2/5}$ **(d)** $\left(\dfrac{16}{81}\right)^{-3/4}$
A: **(a)** $(\sqrt[4]{81})^3 = 3^3 = 27$
**(b)** $(\sqrt[3]{64})^2 = 4^2 = 16$
**(c)** $\dfrac{1}{(\sqrt[5]{32})^2} = \dfrac{1}{2^2} = \dfrac{1}{4}$
**(d)** $\left(\dfrac{81}{16}\right)^{3/4} = \left(\dfrac{3}{2}\right)^3 = \dfrac{27}{8}$
---
Q: Evaluate without a calculator: $9^{-1/2} \cdot 125^{2/3}$
A: $9^{-1/2} = \dfrac{1}{\sqrt{9}} = \dfrac{1}{3}$ and $125^{2/3} = (\sqrt[3]{125})^2 = 5^2 = 25$.
Product: $\dfrac{1}{3} \cdot 25 = \dfrac{25}{3}$.
---
Q: Evaluate without a calculator: $32^{3/5} + 27^{-1/3}$
A: $32^{3/5} = (\sqrt[5]{32})^3 = 2^3 = 8$ and $27^{-1/3} = \dfrac{1}{\sqrt[3]{27}} = \dfrac{1}{3}$.
Sum: $8 + \dfrac{1}{3} = \dfrac{25}{3}$.
---
Q: **(Exam level)** Evaluate without a calculator: $\dfrac{81^{3/4} - 16^{1/2}}{125^{-1/3}}$
A: $81^{3/4} = 3^3 = 27$, $16^{1/2} = 4$, and $125^{-1/3} = \dfrac{1}{5}$.
$$\frac{27 - 4}{\frac{1}{5}} = 23 \times 5 = 115$$
```

## Further help

- Siyavula Mathematics Grade 11, [1.1 Revision](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-01) (integer exponent laws to refresh first).
- Siyavula Mathematics Grade 11, [1.2 Rational exponents and surds](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-02).
