---
title: Equations that become quadratics
youtube_query: Grade 11 equations that reduce to quadratics
subject: pure-mathematics
topic: Equations and inequalities
part: Algebra
term: 1
subtopic: Quadratic equations: factorising and the formula
order: 223
---

> **What you'll learn:** how to solve equations with fractions in them by clearing the denominators, so that they become quadratics.
>
> **Prerequisites:** [The quadratic formula](/library/pure-mathematics/equations-and-inequalities/the-quadratic-formula) and [Factorise and solve](/library/pure-mathematics/equations-and-inequalities/factorise-and-solve), and adding algebraic fractions.

## The idea in plain language

An equation like $x + \frac{6}{x} = 5$ is not a quadratic yet, because $x$ is in a denominator. Multiply every term by the common denominator and the fractions disappear. What is left is a quadratic you already know how to solve.

Two safety rules:

- A denominator can never be zero, so write down the **restrictions** (values $x$ cannot be).
- After solving, discard any answer that breaks a restriction.

## The method

```rule
title: Clearing fractions
\text{multiply every term by the common denominator, then rearrange to } ax^{2} + bx + c = 0
```

## Worked example 1 (basic)

```steps
title: Solve $x + \frac{6}{x} = 5$
Restriction: the denominator cannot be zero :: x \neq 0
Multiply every term by $x$ :: x^{2} + 6 = 5x
Make one side zero :: x^{2} - 5x + 6 = 0
Factorise :: (x-2)(x-3) = 0
Solve :: x = 2 \quad\text{or}\quad x = 3
```

## Worked example 2 (a fraction on each side)

```steps
title: Solve $\frac{3}{x-1} = x + 1$
Restriction :: x \neq 1
Multiply both sides by $(x-1)$ :: 3 = (x+1)(x-1)
Expand the right side :: 3 = x^{2} - 1
Make one side zero :: x^{2} - 4 = 0
Solve :: x = 2 \quad\text{or}\quad x = -2
Both satisfy $x \neq 1$ :: x = 2 \ \text{ or } \ x = -2
```

## Worked example 3 (exam level)

```steps
title: Solve $\frac{2}{x+1} + \frac{3}{x-2} = 1$, correct to 2 decimal places
Restrictions :: x \neq -1 \quad\text{and}\quad x \neq 2
Multiply every term by $(x+1)(x-2)$ :: 2(x-2) + 3(x+1) = (x+1)(x-2)
Expand both sides :: 2x - 4 + 3x + 3 = x^{2} - x - 2
Simplify the left side :: 5x - 1 = x^{2} - x - 2
Standard form :: x^{2} - 6x - 1 = 0
The formula with $a = 1,\ b = -6,\ c = -1$ :: x = \frac{6 \pm \sqrt{36 + 4}}{2} = 3 \pm \sqrt{10}
Both answers are allowed by the restrictions :: x \approx 6{,}16 \quad\text{or}\quad x \approx -0{,}16
```

> **Common mistakes**
>
> - Multiplying only some terms by the denominator. **Every** term, on both sides, must be multiplied.
> - Forgetting the restrictions and accepting an answer that makes a denominator zero.
> - Expanding $(x+1)(x-2)$ wrongly. Use FOIL carefully.
> - Cross-adding denominators: $\frac{2}{x+1} + \frac{3}{x-2} \neq \frac{5}{2x - 1}$.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Solve $x - \frac{12}{x} = 1$.
A: $x \neq 0$. Multiply by $x$: $x^2 - 12 = x$, so $x^2 - x - 12 = 0$ and $(x-4)(x+3) = 0$. Then $x = 4$ or $x = -3$.
---
Q: Solve $\frac{x}{3} = \frac{4}{x - 1}$.
A: $x \neq 1$. Cross-multiply: $x(x-1) = 12$, so $x^2 - x - 12 = 0$ and $(x-4)(x+3) = 0$. Then $x = 4$ or $x = -3$.
---
Q: Solve $\frac{1}{x} + \frac{1}{x+2} = \frac{3}{4}$.
A: $x \neq 0,\ -2$. Multiply by $4x(x+2)$: $4(x+2) + 4x = 3x(x+2)$, so $8x + 8 = 3x^2 + 6x$ and $3x^2 - 2x - 8 = 0$. Factorise: $(3x + 4)(x - 2) = 0$. Then $x = 2$ or $x = -\frac{4}{3}$.
---
Q: Solve $\frac{x+1}{x-2} = \frac{2x}{x+3}$, leaving your answer in surd form.
A: $x \neq 2,\ -3$. Cross-multiply: $(x+1)(x+3) = 2x(x-2)$, so $x^2 + 4x + 3 = 2x^2 - 4x$ and $x^2 - 8x - 3 = 0$. This gives $x = \frac{8 \pm \sqrt{76}}{2} = 4 \pm \sqrt{19}$.
---
Q: Solve $x - \frac{3}{x} = 2$.
A: $x \neq 0$. Multiply by $x$: $x^2 - 3 = 2x$, so $x^2 - 2x - 3 = 0$ and $(x-3)(x+1) = 0$. Then $x = 3$ or $x = -1$.
---
Q: Solve $\frac{2}{x+1} + \frac{3}{x-2} = 1$ and write the answers as surds.
A: As in Worked example 3: $x^2 - 6x - 1 = 0$, so $x = 3 \pm \sqrt{10}$.
```

## Further help

- Siyavula Mathematics Grade 11, [2.3 Quadratic formula](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-03).
- Siyavula Mathematics Grade 11, [2.4 Substitution](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-04).
