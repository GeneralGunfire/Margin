---
title: Rationalising denominators
youtube_query: Grade 11 rationalising the denominator surds
subject: pure-mathematics
topic: Exponents and surds
part: Algebra
term: 1
subtopic: Surds: operations and simplification
order: 133
---

> **What you'll learn:** how to remove a surd from a denominator, including denominators like $\sqrt{7} - 2$, using the conjugate.
>
> **Prerequisites:** [Adding and multiplying surds](/library/pure-mathematics/exponents-and-surds/adding-and-multiplying-surds), especially $(a+\sqrt{b})(a-\sqrt{b}) = a^2 - b$.

## The idea in plain language

By convention a final answer should not have a surd in the denominator. To **rationalise**, multiply the top and bottom by the same thing, which does not change the value, so that the bottom becomes a whole number.

- If the bottom is a single surd, such as $\sqrt{3}$, multiply by $\frac{\sqrt{3}}{\sqrt{3}}$.
- If the bottom is a binomial, such as $\sqrt{7} - 2$, multiply by its **conjugate** $\sqrt{7} + 2$ (same terms, opposite sign in the middle). The product $(a - b)(a + b)$ has no middle term, so the surd disappears.

## Rules

```rule
title: Rationalising
\frac{1}{\sqrt{a}} = \frac{\sqrt{a}}{a}
\frac{1}{a + \sqrt{b}} = \frac{a - \sqrt{b}}{a^{2} - b}
```

## Worked example 1 (a single surd)

```steps
title: Rationalise $\frac{6}{\sqrt{3}}$ and $\frac{5}{2\sqrt{5}}$
Multiply top and bottom by $\sqrt{3}$ :: \frac{6}{\sqrt{3}}\times\frac{\sqrt{3}}{\sqrt{3}} = \frac{6\sqrt{3}}{3}
Divide 6 by 3 :: = 2\sqrt{3}
For the second, multiply by $\sqrt{5}$ :: \frac{5}{2\sqrt{5}}\times\frac{\sqrt{5}}{\sqrt{5}} = \frac{5\sqrt{5}}{10}
Cancel the 5 :: = \frac{\sqrt{5}}{2}
```

## Worked example 2 (a binomial denominator)

```steps
title: Rationalise $\frac{5}{\sqrt{7}-2}$
Multiply by the conjugate over itself :: \frac{5}{\sqrt{7}-2}\times\frac{\sqrt{7}+2}{\sqrt{7}+2}
The bottom becomes $7 - 4$ :: = \frac{5(\sqrt{7}+2)}{7 - 4}
Simplify the bottom :: = \frac{5(\sqrt{7}+2)}{3}
```

## Worked example 3 (exam level)

```steps
title: Simplify $\frac{\sqrt{12}+\sqrt{27}}{\sqrt{3}}$ and $\frac{3}{\sqrt{5}-\sqrt{2}}$
Simplify the top of the first :: \frac{2\sqrt{3} + 3\sqrt{3}}{\sqrt{3}}
Add like surds :: = \frac{5\sqrt{3}}{\sqrt{3}}
Cancel :: = 5
For the second, use the conjugate :: \frac{3}{\sqrt{5}-\sqrt{2}}\times\frac{\sqrt{5}+\sqrt{2}}{\sqrt{5}+\sqrt{2}}
The bottom is $5 - 2$ :: = \frac{3(\sqrt{5}+\sqrt{2})}{3}
Cancel the 3 :: = \sqrt{5} + \sqrt{2}
```

> **Common mistakes**
>
> - Multiplying only the bottom. Whatever you multiply the denominator by, multiply the numerator by it too.
> - Using the wrong conjugate. For $\sqrt{7} - 2$ the conjugate is $\sqrt{7} + 2$, not $2 - \sqrt{7}$.
> - Expanding the bottom incorrectly. $(\sqrt{7}-2)(\sqrt{7}+2) = 7 - 4 = 3$, with no middle term.
> - Leaving the answer unsimplified when a common factor can cancel.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Rationalise $\frac{10}{\sqrt{5}}$.
A: $\frac{10\sqrt{5}}{5} = 2\sqrt{5}$.
---
Q: Rationalise $\frac{3}{2\sqrt{3}}$.
A: $\frac{3\sqrt{3}}{2\times 3} = \frac{\sqrt{3}}{2}$.
---
Q: Rationalise $\frac{1}{\sqrt{3}+1}$.
A: Multiply by $\frac{\sqrt{3}-1}{\sqrt{3}-1}$. The bottom is $3 - 1 = 2$. Answer: $\frac{\sqrt{3}-1}{2}$.
---
Q: Rationalise $\frac{6}{\sqrt{10}-2}$.
A: Multiply by $\frac{\sqrt{10}+2}{\sqrt{10}+2}$. The bottom is $10 - 4 = 6$. Answer: $\sqrt{10} + 2$.
---
Q: Simplify $\frac{\sqrt{2}}{\sqrt{2}-1}$.
A: Multiply by $\frac{\sqrt{2}+1}{\sqrt{2}+1}$. The bottom is $2 - 1 = 1$. Top: $\sqrt{2}(\sqrt{2}+1) = 2 + \sqrt{2}$. Answer: $2 + \sqrt{2}$.
---
Q: Simplify $\frac{1}{\sqrt{5}-\sqrt{3}} + \frac{1}{\sqrt{5}+\sqrt{3}}$.
A: Combine over the common denominator $(\sqrt{5}-\sqrt{3})(\sqrt{5}+\sqrt{3}) = 2$. The top is $(\sqrt{5}+\sqrt{3}) + (\sqrt{5}-\sqrt{3}) = 2\sqrt{5}$. Answer: $\frac{2\sqrt{5}}{2} = \sqrt{5}$.
```

## Further help

- Siyavula Mathematics Grade 11, [1.2 Rational exponents and surds](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-02).
