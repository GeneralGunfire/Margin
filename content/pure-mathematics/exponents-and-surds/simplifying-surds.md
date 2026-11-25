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

> **What you'll learn:** how to write a surd in its simplest form, such as $\sqrt{72} = 6\sqrt{2}$, and how to multiply and divide surds.
>
> **Prerequisites:** your perfect squares up to $15^2$, and factor pairs of whole numbers.

## The idea in plain language

A **surd** is a root that does not come out as a whole number, like $\sqrt{2}$ or $\sqrt[3]{5}$. To simplify one, look for a perfect square hiding inside it and pull that square out. Since $72 = 36 \times 2$ and $36$ is a perfect square:

$$\sqrt{72} = \sqrt{36 \times 2} = \sqrt{36}\times\sqrt{2} = 6\sqrt{2}.$$

The skill is spotting the **largest** perfect square factor. If you pick a smaller one you will have to simplify again.

## Rules

```rule
title: Surd laws (a, b > 0)
\sqrt{a}\cdot\sqrt{b} = \sqrt{ab}
\frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}}
\left(\sqrt{a}\right)^{2} = a \qquad \sqrt{a^{2}} = a
```

Perfect squares worth knowing: $4,\ 9,\ 16,\ 25,\ 36,\ 49,\ 64,\ 81,\ 100,\ 121,\ 144$.

## Worked example 1 (basic)

```steps
title: Simplify $\sqrt{72}$ and $\sqrt{48}$
Find the largest perfect square factor of 72 :: 72 = 36 \times 2
Split the root :: \sqrt{72} = \sqrt{36}\times\sqrt{2}
Take the root of 36 :: \sqrt{72} = 6\sqrt{2}
Now 48. The largest square factor is 16 :: \sqrt{48} = \sqrt{16 \times 3}
Take the root of 16 :: \sqrt{48} = 4\sqrt{3}
```

## Worked example 2 (multiplying and dividing)

```steps
title: Simplify $\sqrt{5}\cdot\sqrt{20}$ and $\frac{\sqrt{75}}{\sqrt{3}}$
Multiply under one root :: \sqrt{5}\cdot\sqrt{20} = \sqrt{100}
Take the root :: = 10
Divide under one root :: \frac{\sqrt{75}}{\sqrt{3}} = \sqrt{\frac{75}{3}}
Work out the fraction :: = \sqrt{25}
Take the root :: = 5
```

## Worked example 3 (exam level)

```steps
title: Simplify without a calculator: $\frac{\sqrt{12}\cdot\sqrt{18}}{\sqrt{6}}$
Combine everything under one root :: \sqrt{\frac{12\times 18}{6}}
Cancel before multiplying :: = \sqrt{12\times 3}
Multiply :: = \sqrt{36}
Take the root :: = 6
```

> **Common mistakes**
>
> - Writing $\sqrt{a + b} = \sqrt{a} + \sqrt{b}$. It is false: $\sqrt{9 + 16} = 5$, but $\sqrt{9} + \sqrt{16} = 7$.
> - Stopping early. $\sqrt{72} = 2\sqrt{18}$ is true but not simplest. Use the **largest** square factor.
> - Dropping the leftover factor. $\sqrt{72} = 6$ is wrong: the $2$ stays under the root, giving $6\sqrt{2}$.
> - Forgetting that $\left(2\sqrt{3}\right)^2 = 4\times 3 = 12$, not $4\sqrt{3}$.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Simplify $\sqrt{50}$.
A: $\sqrt{25 \times 2} = 5\sqrt{2}$.
---
Q: Simplify $\sqrt{98}$.
A: $98 = 49 \times 2$, so $\sqrt{98} = 7\sqrt{2}$.
---
Q: Simplify $\sqrt{180}$.
A: $180 = 36 \times 5$, so $\sqrt{180} = 6\sqrt{5}$.
---
Q: Simplify $\sqrt{6}\cdot\sqrt{24}$.
A: $\sqrt{6\times 24} = \sqrt{144} = 12$.
---
Q: Simplify $\frac{\sqrt{54}}{\sqrt{6}}$.
A: $\sqrt{\frac{54}{6}} = \sqrt{9} = 3$.
---
Q: Simplify $\left(3\sqrt{2}\right)^{2}$.
A: $3^2 \times \left(\sqrt{2}\right)^2 = 9\times 2 = 18$.
---
Q: Simplify $\left(2\sqrt{3}\right)\left(5\sqrt{6}\right)$.
A: Multiply the outside numbers and the roots separately: $10\sqrt{18} = 10\sqrt{9\times 2} = 10\times 3\sqrt{2} = 30\sqrt{2}$.
```

## Further help

- Siyavula Mathematics Grade 11, [1.2 Rational exponents and surds](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-02).
