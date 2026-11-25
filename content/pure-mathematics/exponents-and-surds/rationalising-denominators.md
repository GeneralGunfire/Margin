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

> **What you'll learn:** *why* multiplying by a smart form of $1$ removes roots from a denominator without changing the fraction's value, and how conjugates handle two-term denominators like $\sqrt{7} - 2$.
>
> **Prerequisites:** [Adding and multiplying surds](/library/pure-mathematics/exponents-and-surds/adding-and-multiplying-surds), especially $(a+\sqrt{b})(a-\sqrt{b}) = a^2 - b$.

## 1. Multiplying by a clever form of 1

Dividing by an irrational decimal like $\sqrt{3} \approx 1.73205\dots$ is awkward, and standard mathematical form keeps denominators **rational** (whole numbers or integers).

To change the denominator without changing the value of the fraction, multiply top and bottom by the **exact same expression** (multiplying by $1$):

- **Single surd denominator:** multiply by $\dfrac{\sqrt{a}}{\sqrt{a}}$, since $\sqrt{a}\cdot\sqrt{a} = a$.
- **Binomial denominator** like $\sqrt{7} - 2$: multiply by $\dfrac{\sqrt{7} + 2}{\sqrt{7} + 2}$ (its **conjugate**), using $(a - b)(a + b) = a^2 - b^2$ to kill the square root.

```rule
title: Rationalising rules (a, b > 0)
\frac{1}{\sqrt{a}} = \frac{\sqrt{a}}{a} \qquad \frac{1}{a + \sqrt{b}} = \frac{a - \sqrt{b}}{a^{2} - b} \qquad \frac{1}{\sqrt{a} - \sqrt{b}} = \frac{\sqrt{a} + \sqrt{b}}{a - b}
```

```tryit
title: Quick check
prompt: Rationalise **(a)** $\dfrac{10}{\sqrt{5}}$ and **(b)** $\dfrac{3}{2\sqrt{3}}$.
hint: In (b), you only need to multiply top and bottom by $\sqrt{3}$ (not $2\sqrt{3}$).
answer: **(a)** $\dfrac{10\sqrt{5}}{5} = 2\sqrt{5}$. **(b)** $\dfrac{3\sqrt{3}}{2 \cdot 3} = \dfrac{\sqrt{3}}{2}$.
```

## 2. Picking the right conjugate

For a binomial denominator, **keep both terms in the same order and flip only the sign between them**. Why does $\sqrt{7} + 2$ work on $\sqrt{7} - 2$ when multiplying by $\sqrt{7}$ alone fails?

```compare
title: Two-term denominator: single surd vs conjugate
left_title: Multiplying by $\sqrt{7}$ alone (fails)
left:
$$(\sqrt{7} - 2)\sqrt{7} = 7 - 2\sqrt{7}$$
The surd is **still** in the denominator.
right_title: Multiplying by the conjugate $\sqrt{7} + 2$ (works)
right:
$$(\sqrt{7} - 2)(\sqrt{7} + 2) = (\sqrt{7})^2 - 2^2 = 7 - 4 = 3$$
Cross terms $+2\sqrt{7}$ and $-2\sqrt{7}$ cancel, leaving $3$.
```

```tryit
title: Try it first
prompt: Rationalise $\dfrac{6}{\sqrt{10} - 2}$ and simplify completely.
hint: Multiply top and bottom by $\sqrt{10} + 2$, compute the denominator $10 - 4$, then cancel.
answer: $\dfrac{6(\sqrt{10} + 2)}{10 - 4} = \dfrac{6(\sqrt{10} + 2)}{6} = \sqrt{10} + 2$.
```

## 3. Worked examples

```steps
title: Example 1: Rationalise $\dfrac{5}{\sqrt{7} - 2}$
Multiply top and bottom by the conjugate $\sqrt{7} + 2$ :: \frac{5}{\sqrt{7}-2} \times \frac{\sqrt{7}+2}{\sqrt{7}+2}
Use $(a-b)(a+b) = a^2 - b^2$ on the bottom :: = \frac{5(\sqrt{7}+2)}{7 - 4}
Simplify the denominator :: = \frac{5(\sqrt{7}+2)}{3}
```

```steps
title: Example 2: Rationalise $\dfrac{3}{\sqrt{5} - \sqrt{2}}$
Multiply top and bottom by $\sqrt{5} + \sqrt{2}$ :: \frac{3}{\sqrt{5}-\sqrt{2}} \times \frac{\sqrt{5}+\sqrt{2}}{\sqrt{5}+\sqrt{2}}
Denominator becomes $5 - 2 = 3$ :: = \frac{3(\sqrt{5}+\sqrt{2})}{3}
Cancel the common factor $3$ :: = \sqrt{5} + \sqrt{2}
```

```steps
title: Example 3 (Exam level): Simplify $\dfrac{1}{\sqrt{5}-\sqrt{3}} + \dfrac{1}{\sqrt{5}+\sqrt{3}}$
Notice the two denominators are conjugates of each other :: \frac{(\sqrt{5}+\sqrt{3}) + (\sqrt{5}-\sqrt{3})}{(\sqrt{5}-\sqrt{3})(\sqrt{5}+\sqrt{3})}
Cancel $\pm\sqrt{3}$ on top and compute $5 - 3 = 2$ below :: = \frac{2\sqrt{5}}{2}
Cancel $2$ :: = \sqrt{5}
```

> **Common mistakes**
>
> - **Multiplying only the denominator:** always multiply numerator and denominator by the same expression.
> - **Expanding the numerator too early:** keep $6(\sqrt{10}+2)$ factored until you see whether the $6$ cancels with the new denominator.
> - **Writing $(a+\sqrt{b})(a-\sqrt{b}) = a^2 + b$:** difference of squares always has a **minus** sign: $a^2 - b$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Rationalise $\dfrac{12}{\sqrt{3}}$.
A: $\dfrac{12\sqrt{3}}{3} = 4\sqrt{3}$.
---
Q: Rationalise $\dfrac{1}{\sqrt{3} + 1}$.
A: $\dfrac{\sqrt{3} - 1}{3 - 1} = \dfrac{\sqrt{3} - 1}{2}$.
---
Q: Rationalise $\dfrac{\sqrt{2}}{\sqrt{2} - 1}$.
A: Multiply by $\dfrac{\sqrt{2}+1}{\sqrt{2}+1}$: denominator is $2 - 1 = 1$, numerator is $\sqrt{2}(\sqrt{2}+1) = 2 + \sqrt{2}$.
---
Q: Rationalise and simplify $\dfrac{4}{\sqrt{6} + \sqrt{2}}$.
A: $\dfrac{4(\sqrt{6}-\sqrt{2})}{6 - 2} = \dfrac{4(\sqrt{6}-\sqrt{2})}{4} = \sqrt{6} - \sqrt{2}$.
---
Q: **(Exam level)** Show that $\dfrac{1}{2 - \sqrt{3}} - \dfrac{1}{2 + \sqrt{3}} = 2\sqrt{3}$.
A: Combine over $(2-\sqrt{3})(2+\sqrt{3}) = 4 - 3 = 1$: numerator is $(2+\sqrt{3}) - (2-\sqrt{3}) = 2\sqrt{3}$.
```

## Further help

- Siyavula Mathematics Grade 11, [1.2 Rational exponents and surds](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-02).
