---
title: Critical values and sign table
youtube_query: Grade 11 quadratic inequalities sign table method
subject: pure-mathematics
topic: Equations and inequalities
part: Algebra
term: 1
subtopic: Quadratic inequalities
order: 241
---

> **What you'll learn:** how to solve a quadratic inequality using critical values and a sign table on a number line.
>
> **Prerequisites:** [Factorise and solve](/library/pure-mathematics/equations-and-inequalities/factorise-and-solve), and solving linear inequalities.

## The idea in plain language

A quadratic inequality asks **where** an expression is positive or negative, not where it is zero. The zeros are still the starting point: they are the only places where the sign can change. Those are the **critical values**.

The plan: find the critical values, mark them on a number line, test each region for its sign, then pick the regions that match the inequality.

For $x^2 - x - 6 = (x-3)(x+2)$ the critical values are $-2$ and $3$:

![A number line with critical values -2 and 3. The expression is positive left of -2, negative between -2 and 3, positive right of 3](/content-images/sign-number-line.svg)

## The method

```rule
title: Quadratic inequality
\text{1. make one side } 0 \quad \text{2. factorise} \quad \text{3. critical values} \quad \text{4. sign of each region} \quad \text{5. choose regions}
```

- Strict signs ($<$ and $>$) leave the critical values **out**.
- Signs with equality ($\leq$ and $\geq$) include them.

## Worked example 1 (basic)

```steps
title: Solve $x^{2} - x - 6 < 0$
Factorise :: (x-3)(x+2) < 0
Critical values :: x = -2 \quad\text{and}\quad x = 3
Test $x = 0$ (in the middle): $(-3)(2) = -6$ :: \text{negative between } -2 \text{ and } 3
The outer regions are positive :: x < -2:\ + \qquad x > 3:\ +
We want negative values, strict sign :: -2 < x < 3
```

## Worked example 2 (two outer regions)

```steps
title: Solve $x^{2} - 5x + 6 \geq 0$
Factorise :: (x-2)(x-3) \geq 0
Critical values :: x = 2 \quad\text{and}\quad x = 3
Test $x = 2{,}5$: $(0{,}5)(-0{,}5) < 0$ :: \text{negative between } 2 \text{ and } 3
We want positive or zero, so take the outer regions :: x \leq 2 \quad\text{or}\quad x \geq 3
```

## Worked example 3 (exam level)

```steps
title: Solve $2x^{2} + x \leq 3$
Make the right side zero :: 2x^{2} + x - 3 \leq 0
Factorise :: (2x+3)(x-1) \leq 0
Critical values :: x = -\frac{3}{2} \quad\text{and}\quad x = 1
Test $x = 0$: $(3)(-1) = -3$, so the middle is negative :: \text{negative between the critical values}
We want negative or zero, so keep the middle and the endpoints :: -\frac{3}{2} \leq x \leq 1
```

> **Common mistakes**
>
> - Solving it like an equation and stopping at $x = -2$ and $x = 3$.
> - Writing $x > 3$ and $x < -2$ as "$3 < x < -2$". Outer regions must be written with the word **or**.
> - Forgetting to move everything to one side first. $2x^2 + x \leq 3$ cannot be factorised as it stands.
> - Dividing by an expression with $x$ in it. Always factorise instead.
> - Including the critical values for a strict inequality.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Solve $x^{2} - 9 > 0$.
A: $(x-3)(x+3) > 0$. Critical values $-3$ and $3$. The middle region is negative, so we take the outer regions: $x < -3$ or $x > 3$.
---
Q: Solve $x^{2} + 2x - 8 \leq 0$.
A: $(x+4)(x-2) \leq 0$. Critical values $-4$ and $2$. The middle is negative, so $-4 \leq x \leq 2$.
---
Q: Solve $x^{2} - 4x - 5 > 0$.
A: $(x-5)(x+1) > 0$. Critical values $-1$ and $5$. Outer regions: $x < -1$ or $x > 5$.
---
Q: Solve $3x^{2} - 7x + 2 \leq 0$.
A: $(3x-1)(x-2) \leq 0$. Critical values $\frac{1}{3}$ and $2$. The middle is negative: $\frac{1}{3} \leq x \leq 2$.
---
Q: Solve $x^{2} \geq 2x + 15$.
A: $x^2 - 2x - 15 \geq 0$, so $(x-5)(x+3) \geq 0$. Critical values $-3$ and $5$. Outer regions: $x \leq -3$ or $x \geq 5$.
---
Q: Solve $x(x + 4) < 12$.
A: $x^2 + 4x - 12 < 0$, so $(x+6)(x-2) < 0$. Critical values $-6$ and $2$. The middle is negative: $-6 < x < 2$.
```

## Further help

- Siyavula Mathematics Grade 11, [2.7 Quadratic inequalities](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-07).
