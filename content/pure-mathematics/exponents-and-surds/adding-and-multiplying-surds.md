---
title: Adding and multiplying surds
subject: pure-mathematics
topic: Exponents and surds
part: Algebra
term: 1
subtopic: Surds: operations and simplification
order: 132
---

> **What you'll learn:** how to add and subtract surds, and how to multiply brackets that contain surds, including the pattern $(a+\sqrt{b})(a-\sqrt{b})$.
>
> **Prerequisites:** [Simplifying surds](/library/pure-mathematics/exponents-and-surds/simplifying-surds), and expanding two brackets.

## The idea in plain language

Surds behave like letters in algebra. You can only add **like** surds, the ones with the same number under the root, just as $3x + 5x = 8x$:

$$3\sqrt{2} + 5\sqrt{2} = 8\sqrt{2}, \qquad\text{but}\qquad \sqrt{2} + \sqrt{3}\ \text{cannot be combined.}$$

Often surds look unlike until you simplify them. $\sqrt{12} + \sqrt{27}$ becomes $2\sqrt{3} + 3\sqrt{3} = 5\sqrt{3}$.

To multiply brackets, expand as normal and use $\left(\sqrt{a}\right)^2 = a$.

## Rules

```rule
title: Useful patterns
(a + \sqrt{b})(a - \sqrt{b}) = a^{2} - b
(a + \sqrt{b})^{2} = a^{2} + 2a\sqrt{b} + b
```

The first pattern removes the surd completely. It is the key to the next lesson.

## Worked example 1 (basic)

```steps
title: Simplify $\sqrt{12} + \sqrt{27} - \sqrt{3}$
Simplify each surd :: 2\sqrt{3} + 3\sqrt{3} - \sqrt{3}
They are now like surds. Add the numbers in front :: (2 + 3 - 1)\sqrt{3}
Finish :: = 4\sqrt{3}
```

## Worked example 2 (brackets)

```steps
title: Expand and simplify $(2+\sqrt{3})(4-\sqrt{3})$
Multiply each term in the first bracket by each term in the second :: 8 - 2\sqrt{3} + 4\sqrt{3} - \left(\sqrt{3}\right)^{2}
Use $\left(\sqrt{3}\right)^2 = 3$ :: 8 - 2\sqrt{3} + 4\sqrt{3} - 3
Collect like terms :: 5 + 2\sqrt{3}
```

## Worked example 3 (exam level)

```steps
title: Simplify $\left(\sqrt{7}+2\right)^{2} - \left(\sqrt{7}-2\right)^{2}$
Expand the first bracket :: 7 + 4\sqrt{7} + 4
Expand the second bracket :: 7 - 4\sqrt{7} + 4
Subtract (keep the second in brackets) :: (11 + 4\sqrt{7}) - (11 - 4\sqrt{7})
Remove the brackets, changing signs :: 11 + 4\sqrt{7} - 11 + 4\sqrt{7}
Collect like terms :: 8\sqrt{7}
```

> **Common mistakes**
>
> - Adding unlike surds: $\sqrt{2} + \sqrt{3} \neq \sqrt{5}$.
> - Forgetting to simplify first, so like surds are missed.
> - Squaring a bracket as $(a+\sqrt{b})^2 = a^2 + b$. The middle term $2a\sqrt{b}$ must be there.
> - Sign slips when subtracting brackets. Put the second bracket in brackets and change every sign.
> - Writing $\left(\sqrt{3}\right)^{2} = \sqrt{9}$. It equals $3$.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Simplify $4\sqrt{3} + \sqrt{3} - 2\sqrt{3}$.
A: $(4 + 1 - 2)\sqrt{3} = 3\sqrt{3}$.
---
Q: Simplify $\sqrt{20} + \sqrt{45}$.
A: $2\sqrt{5} + 3\sqrt{5} = 5\sqrt{5}$.
---
Q: Simplify $\sqrt{8} - \sqrt{18} + \sqrt{50}$.
A: $2\sqrt{2} - 3\sqrt{2} + 5\sqrt{2} = 4\sqrt{2}$.
---
Q: Expand $(3 - \sqrt{2})(3 + \sqrt{2})$.
A: Use $a^2 - b$: $9 - 2 = 7$.
---
Q: Expand and simplify $(\sqrt{5} + 2)(\sqrt{5} - 3)$.
A: $5 - 3\sqrt{5} + 2\sqrt{5} - 6 = -1 - \sqrt{5}$.
---
Q: Expand and simplify $(2\sqrt{3} - 1)^{2}$.
A: $\left(2\sqrt{3}\right)^2 - 2\cdot 2\sqrt{3}\cdot 1 + 1 = 12 - 4\sqrt{3} + 1 = 13 - 4\sqrt{3}$.
---
Q: Expand and simplify $(\sqrt{6} + \sqrt{3})^{2}$.
A: $6 + 2\sqrt{18} + 3 = 9 + 2\times 3\sqrt{2} = 9 + 6\sqrt{2}$.
```

## Further help

- Siyavula Mathematics Grade 11, [1.2 Rational exponents and surds](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-02).
