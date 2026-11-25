---
title: Factorise and solve
youtube_query: Grade 11 solving quadratic equations by factorising
subject: pure-mathematics
topic: Equations and inequalities
part: Algebra
term: 1
subtopic: Quadratic equations: factorising and the formula
order: 221
---

> **What you'll learn:** how to solve a quadratic equation by factorising and using the zero-product law.
>
> **Prerequisites:** factorising trinomials and common factors (Grade 10).

## The idea in plain language

If two numbers multiply to give zero, at least one of them must be zero. So if you can write a quadratic as a product of two brackets equal to zero, each bracket gives you one answer. This is the fastest method when the quadratic factorises.

The one rule that cannot be skipped: the equation must equal **zero** before you factorise.

## The method

```rule
title: Zero-product law
A \cdot B = 0 \;\Longrightarrow\; A = 0 \ \text{ or } \ B = 0
```

1. Move everything to one side so the other side is $0$ (standard form $ax^2 + bx + c = 0$).
2. Factorise.
3. Set each bracket equal to $0$ and solve.

## Worked example 1 (basic)

```steps
title: Solve $x^{2} - 5x + 6 = 0$
Find two numbers that multiply to 6 and add to $-5$ :: -2 \text{ and } -3
Factorise :: (x-2)(x-3) = 0
Each bracket can be zero :: x - 2 = 0 \quad\text{or}\quad x - 3 = 0
Solve :: x = 2 \quad\text{or}\quad x = 3
```

## Worked example 2 (a is not 1)

```steps
title: Solve $2x^{2} + x - 6 = 0$
Look for factors of $2 \times (-6) = -12$ that add to 1 :: 4 \text{ and } -3
Split the middle term :: 2x^{2} + 4x - 3x - 6 = 0
Group in pairs :: 2x(x+2) - 3(x+2) = 0
Take out the common bracket :: (x+2)(2x-3) = 0
Solve each bracket :: x = -2 \quad\text{or}\quad x = \frac{3}{2}
```

## Worked example 3 (exam level)

```steps
title: Solve $x(x-3) = 10$
Expand the left side :: x^{2} - 3x = 10
Make the right side zero :: x^{2} - 3x - 10 = 0
Factorise :: (x-5)(x+2) = 0
Solve :: x = 5 \quad\text{or}\quad x = -2
Check $x = 5$: $5 \times 2 = 10$ :: \checkmark
Check $x = -2$: $-2 \times (-5) = 10$ :: \checkmark
```

> **Common mistakes**
>
> - Factorising before the right side is zero. From $x(x-3) = 10$ you may **not** say $x = 10$ or $x - 3 = 10$.
> - Sign errors in the brackets: $(x-2)(x-3) = 0$ gives $x = +2$ and $x = +3$.
> - Dividing both sides by $x$ and losing the answer $x = 0$. Factor out $x$ instead.
> - Stopping after one bracket. A quadratic usually has two solutions.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Solve $x^{2} + 7x + 12 = 0$.
A: $(x+3)(x+4) = 0$, so $x = -3$ or $x = -4$.
---
Q: Solve $x^{2} - 9 = 0$.
A: Difference of squares: $(x-3)(x+3) = 0$, so $x = 3$ or $x = -3$.
---
Q: Solve $3x^{2} = 12x$.
A: $3x^2 - 12x = 0$, so $3x(x - 4) = 0$. Then $x = 0$ or $x = 4$. (Dividing by $x$ would lose $x = 0$.)
---
Q: Solve $2x^{2} - 5x - 3 = 0$.
A: Factors of $-6$ adding to $-5$: $-6$ and $1$. $2x^2 - 6x + x - 3 = 2x(x-3) + (x-3) = (x-3)(2x+1) = 0$. So $x = 3$ or $x = -\frac{1}{2}$.
---
Q: Solve $(x+1)(x-4) = 6$.
A: Expand: $x^2 - 3x - 4 = 6$, so $x^2 - 3x - 10 = 0$ and $(x-5)(x+2) = 0$. Then $x = 5$ or $x = -2$.
---
Q: Solve $6x^{2} + 11x - 10 = 0$.
A: Factors of $-60$ adding to $11$: $15$ and $-4$. $6x^2 + 15x - 4x - 10 = 3x(2x+5) - 2(2x+5) = (2x+5)(3x-2) = 0$. So $x = -\frac{5}{2}$ or $x = \frac{2}{3}$.
```

## Further help

- Siyavula Mathematics Grade 11, [2.3 Quadratic formula](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-03).
