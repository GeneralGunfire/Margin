---
title: Simplifying with common bases and factoring powers
subject: pure-mathematics
topic: Exponents and surds
part: Algebra
term: 1
subtopic: Rational exponents and their laws
order: 113
---

**What you'll learn:** how to rewrite numbers with different bases as one base, and how to factor out a common power so that long expressions collapse to a simple number.

**Prerequisites:** [Exponent laws with fractions](/library/pure-mathematics/exponents-and-surds/exponent-laws-with-fractions), and factorising a common factor.

## The idea in plain language

The exponent laws only work when the **bases match**. If you see $4^x$ and $2^x$ together, you cannot combine them until you notice $4 = 2^2$. So the first move is always:

1. Break every base into prime factors (2, 3, 5, 7, ...). For example $4 = 2^2$, $8 = 2^3$, $9 = 3^2$, $27 = 3^3$, $12 = 2^2 \cdot 3$.
2. Rewrite the powers so that each prime has its own exponent.
3. Apply the laws.

Expressions that mix a **sum or difference** of powers, like $2^{n+2} - 2^n$, need a second trick: **factor out the smallest power**. Because $2^{n+2} = 2^n \cdot 2^2$, the term $2^n$ is a common factor.

## Rules and tools

- Split a sum in the exponent: $a^{n+k} = a^n \cdot a^k$, and $a^{n-k} = \frac{a^n}{a^k}$.
- Split a product base: $(ab)^n = a^n b^n$, so $6^n = 2^n \cdot 3^n$ and $12^n = 2^{2n}\cdot 3^n$.
- Factor out the **lowest** power: $3^{n+2} + 3^n = 3^n(3^2 + 1) = 3^n \cdot 10$.
- Only common **factors** cancel, never single terms of a sum. Factorise first.

## Worked example 1 (basic)

Simplify $\frac{2^{n+2} - 2^{n}}{2^{n-1}}$.

**Step 1.** Split the exponents so every power has the form $2^n \times$ a number:
$$2^{n+2} = 2^n \cdot 4 \qquad\text{and}\qquad 2^{n-1} = \frac{2^n}{2}.$$

**Step 2.** Factor $2^n$ out of the top:
$$2^{n+2}-2^n = 2^n(4-1) = 3\cdot 2^n.$$

**Step 3.** Divide, remembering that dividing by $\frac{2^n}{2}$ is the same as multiplying by $\frac{2}{2^n}$:
$$\frac{3\cdot 2^n}{\frac{2^n}{2}} = 3 \cdot 2 = 6.$$

The answer does not depend on $n$. That is what these questions are designed to show.

## Worked example 2 (changing the base)

Simplify $9^{x/2} \cdot 3^{1-x}$.

**Step 1.** Write 9 as $3^2$:
$$9^{x/2} = \left(3^2\right)^{x/2} = 3^{x}.$$

**Step 2.** Now the bases match, so add the exponents:
$$3^{x}\cdot 3^{1-x} = 3^{x+1-x} = 3^1 = 3.$$

## Worked example 3 (exam level)

**(a)** Simplify $\frac{2^{n+1}\cdot 3^{n+2}}{6^n}$.

**(b)** Show that $\frac{3^{n+2}-3^n}{8} = 3^n$.

**(a)** Split the numerator and write $6^n = 2^n \cdot 3^n$:
$$\frac{2^n\cdot 2 \cdot 3^n \cdot 9}{2^n \cdot 3^n} = 2 \cdot 9 = 18.$$

**(b)** Work on the left-hand side only. Factor out $3^n$:
$$\frac{3^{n+2}-3^n}{8} = \frac{3^n\left(3^2 - 1\right)}{8} = \frac{3^n \cdot 8}{8} = 3^n.$$

This equals the right-hand side, so the statement is shown to be true.

> **Common mistakes**
>
> - Cancelling part of a sum. In $\frac{2^n + 5}{2^n}$ the $2^n$ does not cancel to leave 5. Only a factor of the whole top can cancel.
> - Losing the 1 when factoring: $3^{n+1}+3^n = 3^n(3+1)$, not $3^n \cdot 3$.
> - Mixing up $2^{n+3}$ with $2^n + 3$. The $+3$ sits in the exponent, so it means $2^n \cdot 2^3$.
> - Forgetting to change the base before adding exponents: $4^x \cdot 2^x = 2^{2x}\cdot 2^x = 2^{3x}$, not $2^{2x}$.
> - Merging different bases and different exponents: $2^x \cdot 3^x = 6^x$ is fine, but $2^x \cdot 3^y$ is not $6^{x+y}$.

## Practice

**1.** Simplify $\frac{2^{x+1}\cdot 2^{x-1}}{4^x}$.

**2.** Evaluate without a calculator: $9^{1/2}\cdot 27^{2/3}$.

**3.** Simplify $\frac{25^x}{5^{2x-1}}$.

**4.** Simplify $\frac{3^{n+2}-3^n}{8\cdot 3^{n-1}}$.

**5.** Simplify $\frac{2^{n+3}+2^{n+1}}{5\cdot 2^{n-1}}$.

**6.** Simplify $\frac{12^n}{3^{n-1}\cdot 2^{2n}}$.

**7.** Simplify $\frac{2^{x+2}\cdot 3^{x-1}}{6^x}$.

**8.** Evaluate without a calculator: $49^{-1/2}\cdot 343^{2/3}$.

### Answers with full working

**1.** Top: $2^{x+1+x-1} = 2^{2x}$. Bottom: $4^x = (2^2)^x = 2^{2x}$. The quotient is $1$.

**2.** $9^{1/2} = 3$ and $27^{2/3} = (\sqrt[3]{27})^2 = 9$. Product: $27$.

**3.** $25^x = (5^2)^x = 5^{2x}$. Then $5^{2x} \div 5^{2x-1} = 5^{2x-(2x-1)} = 5^1 = 5$.

**4.** Top: $3^n(3^2-1) = 8\cdot 3^n$. Bottom: $8\cdot 3^{n-1} = 8\cdot\frac{3^n}{3}$. So the quotient is $\frac{8\cdot 3^n}{8\cdot 3^n}\cdot 3 = 3$.

**5.** Top: $2^n(2^3+2^1) = 2^n\cdot 10$. Bottom: $5\cdot\frac{2^n}{2}$. Quotient: $\frac{10\cdot 2^n \cdot 2}{5\cdot 2^n} = \frac{20}{5} = 4$.

**6.** $12^n = (2^2\cdot 3)^n = 2^{2n}\cdot 3^n$. Bottom: $3^{n-1}\cdot 2^{2n}$. The $2^{2n}$ cancels, leaving $\frac{3^n}{3^{n-1}} = 3^{n-(n-1)} = 3$.

**7.** $2^{x+2} = 2^x\cdot 4$ and $3^{x-1} = \frac{3^x}{3}$, and $6^x = 2^x\cdot 3^x$. So
$$\frac{2^x\cdot 4\cdot 3^x\cdot\frac{1}{3}}{2^x\cdot 3^x} = \frac{4}{3}.$$

**8.** $49^{-1/2} = \frac{1}{\sqrt{49}} = \frac{1}{7}$ and $343^{2/3} = (\sqrt[3]{343})^2 = 7^2 = 49$. Product: $\frac{49}{7} = 7$.


## Further help

- Siyavula Mathematics Grade 11, [1.1 Revision](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-01).
- Siyavula Mathematics Grade 11, [1.2 Rational exponents and surds](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-02).
