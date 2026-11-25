---
title: Simplifying with common bases and factoring powers
youtube_query: Grade 11 simplifying exponents common bases and factorising
subject: pure-mathematics
topic: Exponents and surds
part: Algebra
term: 1
subtopic: Rational exponents and their laws
order: 113
---

> **What you'll learn:** how to break composite bases into primes so exponent laws apply, and why factoring out the smallest power collapses sums like $2^{n+2} - 2^n$ into clean numbers.
>
> **Prerequisites:** [Exponent laws with fractions](/library/pure-mathematics/exponents-and-surds/exponent-laws-with-fractions), and taking out a common factor.

## 1. Products and quotients: prime-factor every base

Exponent laws only merge powers that share a **base**. If you see $4^x$, $9^n$, or $12^n$, break each base into primes first ($4 = 2^2$, $9 = 3^2$, $12 = 2^2 \cdot 3$):

$$\frac{12^n}{3^{n-1}\cdot 2^{2n}} = \frac{(2^2 \cdot 3)^n}{3^{n-1}\cdot 2^{2n}} = \frac{2^{2n}\cdot 3^n}{3^{n-1}\cdot 2^{2n}} = 3^{n-(n-1)} = 3$$

```rule
title: Breaking bases and exponents apart
(ab)^{n} = a^{n} b^{n} \qquad a^{n+k} = a^{n}\cdot a^{k} \qquad a^{n-k} = a^{n}\cdot a^{-k} = \frac{a^{n}}{a^{k}}
```

```tryit
title: Quick check
prompt: Simplify **(a)** $9^{x/2} \cdot 3^{1-x}$ and **(b)** $\dfrac{2^{x+2}\cdot 3^{x-1}}{6^x}$.
hint: Write $9 = 3^2$ in (a), and write $6^x = 2^x \cdot 3^x$ in (b).
answer: **(a)** $(3^2)^{x/2} \cdot 3^{1-x} = 3^x \cdot 3^{1-x} = 3^{x + 1 - x} = 3$. **(b)** $\dfrac{2^x \cdot 4 \cdot 3^x \cdot 3^{-1}}{2^x \cdot 3^x} = \dfrac{4}{3}$.
```

## 2. Sums and differences: factor out the common power

When a fraction contains $+$ or $-$ between powers, you **cannot** cancel individual terms. Instead, split each exponent (`a^{n+k} = a^n \cdot a^k`) and **factor out the shared base power**:

```diagram
name: factor-power
```

Notice what happens when you factor out $a^n$: the $n$-dependence cancels completely, leaving pure arithmetic.

```compare
title: Why you must factor before cancelling
left_title: Right: factor the whole numerator
left:
$$\frac{3^{n+2} - 3^n}{8} = \frac{3^n(3^2 - 1)}{8} = \frac{3^n \cdot 8}{8} = 3^n$$
Every term in the numerator contained $3^n$, so it became a factor of the entire top.
right_title: Wrong: cancelling across + or −
right:
$$\frac{2^n + 5}{2^n} \neq 5$$
$2^n$ is added to $5$, not multiplied by $5$. It is **not** a common factor and cannot cancel.
```

```tryit
title: Try it first
prompt: Simplify $\dfrac{3^{n+1} + 3^n}{2 \cdot 3^{n-1}}$.
hint: Factor $3^n$ out of the numerator ($3^{n+1} + 3^n = 3^n(3 + 1)$), and write $3^{n-1} = \dfrac{3^n}{3}$.
answer: $\dfrac{3^n(3 + 1)}{2 \cdot \frac{3^n}{3}} = \dfrac{4}{\frac{2}{3}} = 4 \times \dfrac{3}{2} = 6$.
```

## 3. Worked examples

```steps
title: Example 1: Simplify $\dfrac{2^{n+2} - 2^{n}}{2^{n-1}}$
Split the exponents around $2^n$ :: \frac{2^{n}\cdot 2^{2} - 2^{n}\cdot 1}{2^{n}\cdot 2^{-1}}
Factor $2^n$ out of the numerator :: = \frac{2^{n}(4 - 1)}{2^{n}\cdot \frac{1}{2}}
Cancel $2^n$ and divide by $\frac{1}{2}$ :: = \frac{3}{\frac{1}{2}} = 6
```

```steps
title: Example 2: Simplify $\dfrac{2^{n+1}\cdot 3^{n+2}}{6^n}$
Write $6^n$ as $2^n \cdot 3^n$ and split the top :: \frac{2^n \cdot 2^1 \cdot 3^n \cdot 3^2}{2^n \cdot 3^n}
Cancel $2^n$ and $3^n$ :: = 2 \cdot 9 = 18
```

```steps
title: Example 3 (Exam level): Show that $\dfrac{5^{x+2} - 5^{x}}{3 \cdot 5^{x+1}} = \dfrac{8}{5}$
Work on the left-hand side. Factor $5^x$ out of the top :: \text{LHS} = \frac{5^x(5^2 - 1)}{3 \cdot 5^x \cdot 5^1}
Cancel $5^x$ and compute the numbers :: = \frac{25 - 1}{3 \cdot 5} = \frac{24}{15} = \frac{8}{5} = \text{RHS}
```

> **Common mistakes**
>
> - **Dropping the $1$ when factoring:** $3^{n+1} + 3^n = 3^n(3 + 1)$, not $3^n(3)$.
> - **Confusing $2^{n+3}$ with $2^n + 3$:** $+3$ in the exponent means multiply by $2^3 = 8$.
> - **Merging unlike bases with unlike exponents:** $2^x \cdot 3^x = 6^x$ is valid, but $2^x \cdot 3^y \neq 6^{x+y}$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Simplify $\dfrac{2^{x+1}\cdot 2^{x-1}}{4^x}$.
A: Top: $2^{(x+1)+(x-1)} = 2^{2x}$. Bottom: $4^x = (2^2)^x = 2^{2x}$. Quotient: $1$.
---
Q: Evaluate without a calculator: $9^{1/2}\cdot 27^{2/3}$.
A: $9^{1/2} = 3$ and $27^{2/3} = (\sqrt[3]{27})^2 = 9$. Product: $27$.
---
Q: Simplify $\dfrac{25^x}{5^{2x-1}}$.
A: $\dfrac{(5^2)^x}{5^{2x-1}} = 5^{2x-(2x-1)} = 5^1 = 5$.
---
Q: Simplify $\dfrac{3^{n+2}-3^n}{8\cdot 3^{n-1}}$.
A: $\dfrac{3^n(9 - 1)}{8 \cdot \frac{3^n}{3}} = \dfrac{8 \cdot 3^n}{8 \cdot 3^n} \cdot 3 = 3$.
---
Q: Simplify $\dfrac{2^{n+3}+2^{n+1}}{5\cdot 2^{n-1}}$.
A: $\dfrac{2^n(8 + 2)}{5 \cdot \frac{2^n}{2}} = \dfrac{10}{\frac{5}{2}} = 4$.
---
Q: Simplify $\dfrac{12^n}{3^{n-1}\cdot 2^{2n}}$.
A: $\dfrac{2^{2n}\cdot 3^n}{3^{n-1}\cdot 2^{2n}} = 3^{n-(n-1)} = 3$.
---
Q: Evaluate without a calculator: $49^{-1/2}\cdot 343^{2/3}$.
A: $49^{-1/2} = \dfrac{1}{7}$ and $343^{2/3} = (\sqrt[3]{343})^2 = 7^2 = 49$. Product: $\dfrac{49}{7} = 7$.
```

## Further help

- Siyavula Mathematics Grade 11, [1.1 Revision](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-01).
- Siyavula Mathematics Grade 11, [1.2 Rational exponents and surds](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-02).
