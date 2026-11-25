---
title: Adding and multiplying surds
youtube_query: Grade 11 adding and multiplying surds
subject: pure-mathematics
topic: Exponents and surds
part: Algebra
term: 1
subtopic: Surds: operations and simplification
order: 132
---

> **What you'll learn:** how to add and subtract surds by simplifying to like terms first, and how multiplying conjugate brackets makes square roots vanish.
>
> **Prerequisites:** [Simplifying surds](/library/pure-mathematics/exponents-and-surds/simplifying-surds), and expanding brackets.

## 1. Like surds behave just like algebra terms

Just as $3x + 5x = 8x$ while $3x + 5y$ cannot be combined, you can only add or subtract **like surds** (identical numbers under the root):

$$3\sqrt{2} + 5\sqrt{2} = 8\sqrt{2} \qquad \text{but} \qquad \sqrt{2} + \sqrt{3} \neq \sqrt{5}$$

The hidden catch is that surds often look unlike until you **simplify each root first**:

$$\sqrt{12} + \sqrt{27} = 2\sqrt{3} + 3\sqrt{3} = 5\sqrt{3}$$

```tryit
title: Quick check
prompt: Simplify $\sqrt{8} - \sqrt{18} + \sqrt{50}$.
hint: Simplify each root using its largest square factor ($4$, $9$, and $25$) so all three share $\sqrt{2}$.
answer: $2\sqrt{2} - 3\sqrt{2} + 5\sqrt{2} = 4\sqrt{2}$.
```

## 2. Multiplying brackets and the conjugate shortcut

Expand brackets using FOIL/distributive law and simplify $\left(\sqrt{a}\right)^2 = a$. Two special patterns matter most:

```rule
title: Surd bracket patterns (b > 0)
(a + \sqrt{b})(a - \sqrt{b}) = a^{2} - b
(a + \sqrt{b})^{2} = a^{2} + 2a\sqrt{b} + b
```

Notice the first pattern: when two brackets have the **same terms with opposite middle signs**, the middle surd terms cancel completely ($+a\sqrt{b} - a\sqrt{b} = 0$), leaving a clean rational number. We use that exact trick to rationalise denominators in the next lesson.

```compare
title: Watch the middle term when squaring
left_title: Conjugate product: no middle term
left:
$$(3 + \sqrt{2})(3 - \sqrt{2}) = 3^2 - (\sqrt{2})^2 = 9 - 2 = 7$$
The cross terms $-3\sqrt{2}$ and $+3\sqrt{2}$ cancel.
right_title: Perfect square: keep the middle term
right:
$$(3 + \sqrt{2})^2 = 3^2 + 2(3)\sqrt{2} + (\sqrt{2})^2 = 11 + 6\sqrt{2}$$
Never drop the $2ab$ middle term.
```

```tryit
title: Try it first
prompt: Expand and simplify **(a)** $(4 - \sqrt{5})(4 + \sqrt{5})$ and **(b)** $(2\sqrt{3} - 1)^2$.
hint: Use $(a - \sqrt{b})(a + \sqrt{b}) = a^2 - b$ in (a), and remember $(2\sqrt{3})^2 = 4 \times 3 = 12$ in (b).
answer: **(a)** $16 - 5 = 11$. **(b)** $(2\sqrt{3})^2 - 2(2\sqrt{3})(1) + 1^2 = 12 - 4\sqrt{3} + 1 = 13 - 4\sqrt{3}$.
```

## 3. Worked examples

```steps
title: Example 1: Simplify $\sqrt{12} + \sqrt{27} - \sqrt{3}$
Pull square factors out of $\sqrt{12}$ and $\sqrt{27}$ :: 2\sqrt{3} + 3\sqrt{3} - \sqrt{3}
Collect coefficients of $\sqrt{3}$ :: = (2 + 3 - 1)\sqrt{3} = 4\sqrt{3}
```

```steps
title: Example 2: Expand and simplify $(2 + \sqrt{3})(4 - \sqrt{3})$
Multiply every pair of terms :: 8 - 2\sqrt{3} + 4\sqrt{3} - \left(\sqrt{3}\right)^{2}
Replace $(\sqrt{3})^2$ with $3$ :: = 8 + 2\sqrt{3} - 3
Combine constants :: = 5 + 2\sqrt{3}
```

```steps
title: Example 3 (Exam level): Simplify $\left(\sqrt{7}+2\right)^{2} - \left(\sqrt{7}-2\right)^{2}$
Expand both squares carefully :: \left(7 + 4\sqrt{7} + 4\right) - \left(7 - 4\sqrt{7} + 4\right)
Simplify inside each bracket :: = \left(11 + 4\sqrt{7}\right) - \left(11 - 4\sqrt{7}\right)
Distribute the minus sign across the second bracket :: = 11 + 4\sqrt{7} - 11 + 4\sqrt{7} = 8\sqrt{7}
```

> **Common mistakes**
>
> - **Adding radicands:** $\sqrt{2} + \sqrt{3} \neq \sqrt{5}$. Check with a rough decimal ($1.4 + 1.7 \approx 3.1$, while $\sqrt{5} \approx 2.2$).
> - **Dropping brackets after a minus sign:** in $A - (B)^2$, keep parentheses around $(B)^2$ until signs are distributed.
> - **Forgetting $(\sqrt{3})^2 = 3$:** leaving $\sqrt{9}$ unsimplified costs easy marks.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Simplify $4\sqrt{3} + \sqrt{3} - 2\sqrt{3}$.
A: $(4 + 1 - 2)\sqrt{3} = 3\sqrt{3}$.
---
Q: Simplify $\sqrt{20} + \sqrt{45}$.
A: $2\sqrt{5} + 3\sqrt{5} = 5\sqrt{5}$.
---
Q: Expand $(3 - \sqrt{2})(3 + \sqrt{2})$.
A: $3^2 - (\sqrt{2})^2 = 9 - 2 = 7$.
---
Q: Expand and simplify $(\sqrt{5} + 2)(\sqrt{5} - 3)$.
A: $5 - 3\sqrt{5} + 2\sqrt{5} - 6 = -1 - \sqrt{5}$.
---
Q: Expand and simplify $(\sqrt{6} + \sqrt{3})^2$.
A: $6 + 2\sqrt{18} + 3 = 9 + 2(3\sqrt{2}) = 9 + 6\sqrt{2}$.
---
Q: **(Exam level)** Simplify $\dfrac{\sqrt{48} - \sqrt{12}}{\sqrt{3}}$.
A: $\dfrac{4\sqrt{3} - 2\sqrt{3}}{\sqrt{3}} = \dfrac{2\sqrt{3}}{\sqrt{3}} = 2$.
```

## Further help

- Siyavula Mathematics Grade 11, [1.2 Rational exponents and surds](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-02).
