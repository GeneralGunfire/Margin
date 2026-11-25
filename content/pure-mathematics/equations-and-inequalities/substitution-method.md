---
title: Substitution method
youtube_query: Grade 11 simultaneous equations substitution method quadratic
subject: pure-mathematics
topic: Equations and inequalities
part: Algebra
term: 1
subtopic: Simultaneous equations (one linear, one quadratic)
order: 251
---

> **What you'll learn:** how to solve two equations in two unknowns when one is linear and the other is quadratic, by substitution.
>
> **Prerequisites:** [Factorise and solve](/library/pure-mathematics/equations-and-inequalities/factorise-and-solve) and [The quadratic formula](/library/pure-mathematics/equations-and-inequalities/the-quadratic-formula), and making a letter the subject of a formula.

## The idea in plain language

Two equations in $x$ and $y$ describe two conditions that must hold at the same time. When one equation is linear, you can rearrange it to get $x$ or $y$ **alone**, then replace that letter in the quadratic. That leaves one equation in one unknown, a quadratic, which you can solve.

The answer is always a **pair**: finish by finding the matching value of the other letter for each solution.

## The method

```rule
title: Substitution
\text{1. make } y \text{ (or } x\text{) the subject of the linear equation} \quad \text{2. substitute into the quadratic} \quad \text{3. solve} \quad \text{4. find the other letter}
```

Always substitute back into the **linear** equation to find the other value. It is the simplest, and it avoids false pairs.

## Worked example 1 (basic)

```steps
title: Solve $y = x + 1$ and $y = x^{2} - 2x - 3$
Both equal $y$, so set them equal :: x + 1 = x^{2} - 2x - 3
Move everything to one side :: 0 = x^{2} - 3x - 4
Factorise :: (x-4)(x+1) = 0
Two values of $x$ :: x = 4 \quad\text{or}\quad x = -1
Find $y$ from $y = x + 1$ :: y = 5 \quad\text{or}\quad y = 0
Write the pairs :: (4;\ 5) \quad\text{and}\quad (-1;\ 0)
```

## Worked example 2 (both letters in the quadratic)

```steps
title: Solve $x + y = 3$ and $x^{2} + xy + y^{2} = 7$
Make $y$ the subject of the linear equation :: y = 3 - x
Substitute into the quadratic :: x^{2} + x(3-x) + (3-x)^{2} = 7
Expand each part :: x^{2} + 3x - x^{2} + 9 - 6x + x^{2} = 7
Collect like terms :: x^{2} - 3x + 9 = 7
Standard form :: x^{2} - 3x + 2 = 0
Factorise :: (x-1)(x-2) = 0
Find $y = 3 - x$ for each :: (1;\ 2) \quad\text{and}\quad (2;\ 1)
```

## Worked example 3 (exam level)

```steps
title: Solve $2x - y = 1$ and $x^{2} + xy - y^{2} = 1$
Make $y$ the subject :: y = 2x - 1
Substitute :: x^{2} + x(2x-1) - (2x-1)^{2} = 1
Expand $(2x-1)^2$ carefully :: x^{2} + 2x^{2} - x - (4x^{2} - 4x + 1) = 1
Remove the bracket, changing signs :: 3x^{2} - x - 4x^{2} + 4x - 1 = 1
Collect like terms :: -x^{2} + 3x - 1 = 1
Standard form :: x^{2} - 3x + 2 = 0
Factorise :: (x-1)(x-2) = 0
Find $y = 2x - 1$ :: (1;\ 1) \quad\text{and}\quad (2;\ 3)
```

> **Common mistakes**
>
> - Giving only the $x$-values. The answer is a pair $(x;\ y)$ each time.
> - Substituting into the wrong equation, or back into the quadratic (which can give false pairs).
> - Expanding $(2x-1)^2$ as $4x^2 - 1$. It is $4x^2 - 4x + 1$.
> - Not changing every sign when subtracting a bracket.
> - Mismatching pairs: the $x$-value $4$ goes with $y = 5$, not with $y = 0$.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Solve $y = x - 1$ and $y = x^{2} - 4x + 3$.
A: $x - 1 = x^2 - 4x + 3$, so $x^2 - 5x + 4 = 0$ and $(x-1)(x-4) = 0$. Then $x = 1,\ y = 0$ or $x = 4,\ y = 3$. Pairs: $(1;\ 0)$ and $(4;\ 3)$.
---
Q: Solve $x + y = 5$ and $xy = 6$.
A: $y = 5 - x$, so $x(5 - x) = 6$, giving $x^2 - 5x + 6 = 0$ and $(x-2)(x-3) = 0$. Pairs: $(2;\ 3)$ and $(3;\ 2)$.
---
Q: Solve $y = 2x + 1$ and $y = x^{2} - 2$.
A: $2x + 1 = x^2 - 2$, so $x^2 - 2x - 3 = 0$ and $(x-3)(x+1) = 0$. Pairs: $(3;\ 7)$ and $(-1;\ -1)$.
---
Q: Solve $x - y = 2$ and $x^{2} + y^{2} = 10$.
A: $y = x - 2$. Then $x^2 + (x-2)^2 = 10$, so $2x^2 - 4x + 4 = 10$ and $x^2 - 2x - 3 = 0$, giving $(x-3)(x+1) = 0$. Pairs: $(3;\ 1)$ and $(-1;\ -3)$.
---
Q: Solve $2x + y = 4$ and $x^{2} - y = 1$. Leave in surd form.
A: $y = 4 - 2x$. Then $x^2 - (4 - 2x) = 1$, so $x^2 + 2x - 5 = 0$ and $x = -1 \pm \sqrt{6}$. Then $y = 4 - 2x = 6 \mp 2\sqrt{6}$. Pairs: $\left(-1 + \sqrt{6};\ 6 - 2\sqrt{6}\right)$ and $\left(-1 - \sqrt{6};\ 6 + 2\sqrt{6}\right)$.
```

## Further help

- Siyavula Mathematics Grade 11, [2.8 Simultaneous equations](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-08).
