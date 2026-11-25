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

> **What you'll learn:** how to solve two equations in $x$ and $y$ when one is linear and the other is quadratic by substituting one variable out.
>
> **Prerequisites:** [Factorise and solve](/library/pure-mathematics/equations-and-inequalities/factorise-and-solve) and [The quadratic formula](/library/pure-mathematics/equations-and-inequalities/the-quadratic-formula).

## 1. Collapse two unknowns down to one quadratic

A single equation in two unknowns—like $x^{2} + y^{2} = 10$—has infinitely many solutions. Adding a linear condition—like $x - y = 2$—pins down the exact $(x;\ y)$ pairs that satisfy both at the same time.

Rearrange the **linear** equation so one variable stands alone, substitute it into the **quadratic**, and you are left with an ordinary one-variable quadratic equation.

```rule
title: Four-step substitution plan
\text{1. Isolate } x \text{ or } y \text{ in the linear equation} \quad \text{2. Substitute into the quadratic} \quad \text{3. Solve for the first variable} \quad \text{4. Substitute back into the linear equation}
```

## 2. Choose the easier variable to isolate

```compare
title: Picking which letter to isolate
left_title: Good choice (no fractions)
left:
In $2x - y = 1$, $y$ has coefficient $-1$:
$$y = 2x - 1$$
Clean substitution with no denominators.
right_title: Harder choice (introduces fractions)
right:
Isolating $x$ in $2x - y = 1$ gives:
$$x = \frac{y + 1}{2}$$
Still works, but clearing fractions adds extra algebra and sign errors.
```

> Always substitute back into the **linear** equation at the end—it gives a single matching partner for each solution and avoids creating false pairs.

```tryit
title: Quick check
prompt: Which letter should you isolate first in $3x + y = 7$ and $x^{2} + xy = 10$, and what does the substitution look like?
hint: $y$ has coefficient $1$, so isolate $y$.
answer: Isolate $y = 7 - 3x$, then substitute into the quadratic to get $x^{2} + x(7 - 3x) = 10$.
```

## 3. Worked examples

```steps
title: Example 1 (Both given with $y$ alone): Solve $y = x + 1$ and $y = x^{2} - 2x - 3$
Both equal $y$, so equate them :: x + 1 = x^{2} - 2x - 3
Write in standard form :: x^{2} - 3x - 4 = 0
Factorise :: (x - 4)(x + 1) = 0
Solve for $x$ :: x = 4 \quad\text{or}\quad x = -1
Find matching $y$ from $y = x + 1$ :: (4;\ 5) \quad\text{and}\quad (-1;\ 0)
```

```steps
title: Example 2 (Both variables mixed): Solve $x + y = 3$ and $x^{2} + xy + y^{2} = 7$
Isolate $y$ in the linear equation :: y = 3 - x
Substitute into the quadratic :: x^{2} + x(3 - x) + (3 - x)^{2} = 7
Expand carefully :: x^{2} + 3x - x^{2} + 9 - 6x + x^{2} = 7
Simplify to standard form :: x^{2} - 3x + 2 = 0
Factorise :: (x - 1)(x - 2) = 0 \;\Longrightarrow\; x = 1 \text{ or } x = 2
Find $y = 3 - x$ for each $x$ :: (1;\ 2) \quad\text{and}\quad (2;\ 1)
```

```steps
title: Example 3 (Exam level — negative squared bracket): Solve $2x - y = 1$ and $x^{2} + xy - y^{2} = 1$
Isolate $y$ :: y = 2x - 1
Substitute into the quadratic :: x^{2} + x(2x - 1) - (2x - 1)^{2} = 1
Expand $(2x - 1)^{2}$ inside brackets first :: x^{2} + 2x^{2} - x - (4x^{2} - 4x + 1) = 1
Distribute the minus sign :: 3x^{2} - x - 4x^{2} + 4x - 1 = 1
Collect like terms and multiply by $-1$ :: -x^{2} + 3x - 2 = 0 \;\Longrightarrow\; x^{2} - 3x + 2 = 0
Factorise and find $y = 2x - 1$ :: (x - 1)(x - 2) = 0 \;\Longrightarrow\; (1;\ 1) \text{ and } (2;\ 3)
```

> **Common mistakes**
>
> - **Stopping after finding $x$:** simultaneous equations always require ordered pairs $(x;\ y)$.
> - **Mismatching pairs:** keep each $x$ paired with the $y$ computed directly from it.
> - **Dropping brackets after a minus sign:** in $-(2x - 1)^{2}$, expand $(2x - 1)^{2} = 4x^{2} - 4x + 1$ inside brackets before applying the negative sign.
> - **Squaring a binomial incorrectly:** $(3 - x)^{2} = 9 - 6x + x^{2}$, not $9 - x^{2}$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Solve $y = x - 1$ and $y = x^{2} - 4x + 3$.
A: $x - 1 = x^{2} - 4x + 3 \implies x^{2} - 5x + 4 = 0 \implies (x - 1)(x - 4) = 0$. Pairs: $(1;\ 0)$ and $(4;\ 3)$.
---
Q: Solve $x + y = 5$ and $xy = 6$.
A: $y = 5 - x \implies x(5 - x) = 6 \implies x^{2} - 5x + 6 = 0 \implies (x - 2)(x - 3) = 0$. Pairs: $(2;\ 3)$ and $(3;\ 2)$.
---
Q: Solve $y = 2x + 1$ and $y = x^{2} - 2$.
A: $2x + 1 = x^{2} - 2 \implies x^{2} - 2x - 3 = 0 \implies (x - 3)(x + 1) = 0$. Pairs: $(3;\ 7)$ and $(-1;\ -1)$.
---
Q: Solve $x - y = 2$ and $x^{2} + y^{2} = 10$.
A: $y = x - 2 \implies x^{2} + (x - 2)^{2} = 10 \implies 2x^{2} - 4x - 6 = 0 \implies x^{2} - 2x - 3 = 0$. So $x = 3$ or $x = -1$. Pairs: $(3;\ 1)$ and $(-1;\ -3)$.
---
Q: **(Exam level)** Solve $2x + y = 4$ and $x^{2} - y = 1$, leaving your answers in simplest surd form.
A: $y = 4 - 2x \implies x^{2} - (4 - 2x) = 1 \implies x^{2} + 2x - 5 = 0$. By the quadratic formula, $x = -1 \pm \sqrt{6}$, and $y = 4 - 2(-1 \pm \sqrt{6}) = 6 \mp 2\sqrt{6}$. Pairs: $(-1 + \sqrt{6};\ 6 - 2\sqrt{6})$ and $(-1 - \sqrt{6};\ 6 + 2\sqrt{6})$.
```

## Further help

- Siyavula Mathematics Grade 11, [2.8 Simultaneous equations](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-08).
