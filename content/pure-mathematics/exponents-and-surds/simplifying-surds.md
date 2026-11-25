---
title: Simplifying surds
youtube_query: Grade 11 simplifying surds
subject: pure-mathematics
topic: Exponents and surds
part: Algebra
term: 1
subtopic: Surds: operations and simplification
order: 131
---

> **What you'll learn:** what a surd actually is, how to simplify any surd in one step by pulling out the largest perfect square, and how to combine surds under multiplication and division.
>
> **Prerequisites:** perfect squares up to $15^2$, and factor pairs of whole numbers.

## 1. Splitting out the largest square factor

A **surd** is a root that cannot be written as an exact fraction or whole number, such as $\sqrt{2}$ or $\sqrt{15}$. Leaving it in root form keeps the answer exact rather than rounding a decimal.

To simplify $\sqrt{72}$, split $72$ into two factors where the first is the **largest perfect square** dividing $72$:

```diagram
name: surd-split
```

Because $\sqrt{a \cdot b} = \sqrt{a}\cdot\sqrt{b}$ (for $a, b > 0$), the square factor comes outside as a whole number while the square-free core stays under the root.

```rule
title: Surd laws (a, b > 0)
\sqrt{a}\cdot\sqrt{b} = \sqrt{ab} \qquad \frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}} \qquad \left(\sqrt{a}\right)^{2} = a \qquad \sqrt{a^{2}} = a
```

```tryit
title: Quick check
prompt: Simplify **(a)** $\sqrt{50}$ and **(b)** $\sqrt{180}$.
hint: Find the biggest number from $\{4, 9, 16, 25, 36, 49, \dots\}$ that divides cleanly into $50$ and $180$.
answer: **(a)** $\sqrt{25 \times 2} = 5\sqrt{2}$. **(b)** $\sqrt{36 \times 5} = 6\sqrt{5}$.
```

## 2. Multiplying, dividing, and squaring surds

Multiply or divide numbers **outside** roots separately from numbers **inside** roots—or combine everything under a single square root to cancel before evaluating:

```compare
title: Two critical rules with roots
left_title: Multiplication splits cleanly
left:
$$\sqrt{4 \times 9} = \sqrt{36} = 6$$
$$\sqrt{4}\cdot\sqrt{9} = 2 \cdot 3 = 6$$
Roots distribute over **multiplication and division**.
right_title: Addition NEVER splits
right:
$$\sqrt{9 + 16} = \sqrt{25} = 5$$
$$\sqrt{9} + \sqrt{16} = 3 + 4 = 7$$
Roots **never** distribute across $+$ or $-$.
```

When squaring a term like $\left(3\sqrt{2}\right)^2$, square **both** parts: $3^2 \times \left(\sqrt{2}\right)^2 = 9 \times 2 = 18$.

```tryit
title: Try it first
prompt: Simplify **(a)** $\left(2\sqrt{5}\right)^2$ and **(b)** $\dfrac{\sqrt{54}}{\sqrt{6}}$.
hint: In (a), square both $2$ and $\sqrt{5}$. In (b), write both under one root first.
answer: **(a)** $4 \times 5 = 20$. **(b)** $\sqrt{\dfrac{54}{6}} = \sqrt{9} = 3$.
```

## 3. Worked examples

```steps
title: Example 1: Simplify $\sqrt{72}$ and $\sqrt{48}$
72 has largest square factor 36 :: \sqrt{72} = \sqrt{36 \times 2} = 6\sqrt{2}
48 has largest square factor 16 :: \sqrt{48} = \sqrt{16 \times 3} = 4\sqrt{3}
```

```steps
title: Example 2: Simplify $\left(2\sqrt{3}\right)\left(5\sqrt{6}\right)$
Multiply outside numbers and inside roots separately :: (2 \times 5)\sqrt{3 \times 6} = 10\sqrt{18}
Simplify $\sqrt{18} = \sqrt{9 \times 2} = 3\sqrt{2}$ :: = 10 \cdot 3\sqrt{2} = 30\sqrt{2}
```

```steps
title: Example 3 (Exam level): Simplify $\dfrac{\sqrt{12}\cdot\sqrt{18}}{\sqrt{6}}$ without a calculator
Combine everything under one square root :: \sqrt{\frac{12 \times 18}{6}}
Cancel $18 \div 6 = 3$ before multiplying :: = \sqrt{12 \times 3} = \sqrt{36}
Evaluate :: = 6
```

> **Common mistakes**
>
> - **Stopping half-way:** $\sqrt{72} = 2\sqrt{18}$ is incomplete because $18 = 9 \times 2$ still holds a square factor.
> - **Splitting roots over $+$:** $\sqrt{x^2 + 9} \neq x + 3$.
> - **Forgetting to square the coefficient:** $\left(3\sqrt{2}\right)^2 = 18$, not $6$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Simplify $\sqrt{98}$.
A: $\sqrt{49 \times 2} = 7\sqrt{2}$.
---
Q: Simplify $\sqrt{108}$.
A: $\sqrt{36 \times 3} = 6\sqrt{3}$.
---
Q: Simplify $\sqrt{6}\cdot\sqrt{24}$.
A: $\sqrt{144} = 12$.
---
Q: Simplify $\dfrac{\sqrt{75}}{\sqrt{3}}$.
A: $\sqrt{\dfrac{75}{3}} = \sqrt{25} = 5$.
---
Q: Simplify $\left(3\sqrt{2}\right)^2$.
A: $9 \times 2 = 18$.
---
Q: Simplify $\dfrac{\sqrt{8}\cdot\sqrt{27}}{\sqrt{6}}$.
A: $\sqrt{\dfrac{8 \times 27}{6}} = \sqrt{4 \times 9} = 6$.
```

## Further help

- Siyavula Mathematics Grade 11, [1.2 Rational exponents and surds](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-02).
