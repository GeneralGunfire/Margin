---
title: Isolate, square, solve, check
youtube_query: Grade 11 solving surd equations
subject: pure-mathematics
topic: Exponents and surds
part: Algebra
term: 1
subtopic: Equations involving surds
order: 141
---

> **What you'll learn:** how to solve equations with a square root in them by isolating the root, squaring both sides, and checking for false answers.
>
> **Prerequisites:** [Rationalising denominators](/library/pure-mathematics/exponents-and-surds/rationalising-denominators), expanding $(a+b)^2$, and solving quadratic equations by factorising.

## The idea in plain language

To undo a square root, square it. But squaring is a blunt tool: $(-2)^2 = 4$ and $2^2 = 4$, so squaring can invent answers that the original equation never allowed. The fix is simple and non-negotiable: **always substitute your answers back** into the original equation.

The graph shows why. For $\sqrt{x+7} = x + 1$ the quadratic gives two candidates, $x = 2$ and $x = -3$. The curve and the line cross only at $x = 2$. At $x = -3$ the curve is at height $2$ but the line is at height $-2$, so $-3$ is false.

![The curve y = square root of (x + 7) and the line y = x + 1 cross at (2;3) only. At x = -3 the curve is at 2 and the line at -2.](/content-images/surd-equation-check.svg)

## The method

```rule
title: Isolate, square, solve, check
\sqrt{f(x)} = g(x) \;\Rightarrow\; f(x) = \left[g(x)\right]^{2} \;\text{, then test every answer}
```

1. Get the surd alone on one side.
2. Square both sides. Square the whole side, not each term.
3. Solve the new equation.
4. Substitute each answer into the **original** equation. Reject any that fail.

## Worked example 1 (basic)

```steps
title: Solve $\sqrt{x+7} = x+1$
The surd is already alone. Square both sides :: x + 7 = (x+1)^{2}
Expand the right side :: x + 7 = x^{2} + 2x + 1
Write in standard form :: x^{2} + x - 6 = 0
Factorise :: (x+3)(x-2) = 0
Two candidates :: x = -3 \quad\text{or}\quad x = 2
Check $x = 2$: $\sqrt{9} = 3$ and $2 + 1 = 3$ :: \text{accepted}
Check $x = -3$: $\sqrt{4} = 2$ but $-3 + 1 = -2$ :: \text{rejected}
```

## Worked example 2 (isolate first)

```steps
title: Solve $\sqrt{2x-1} + 2 = x$
Isolate the surd first :: \sqrt{2x-1} = x - 2
Square both sides :: 2x - 1 = (x-2)^{2}
Expand :: 2x - 1 = x^{2} - 4x + 4
Standard form :: x^{2} - 6x + 5 = 0
Factorise :: (x-1)(x-5) = 0
Check $x = 1$: $\sqrt{1} + 2 = 3$, but the right side is $1$ :: \text{rejected}
Check $x = 5$: $\sqrt{9} + 2 = 5$ :: \text{accepted}
```

## Worked example 3 (exam level)

```steps
title: Solve $\sqrt{x^{2}+5} = x+1$
Square both sides :: x^{2} + 5 = (x+1)^{2}
Expand :: x^{2} + 5 = x^{2} + 2x + 1
The $x^2$ terms cancel :: 4 = 2x
Solve :: x = 2
Check: $\sqrt{9} = 3$ and $2 + 1 = 3$ :: \text{accepted}
```

> **Common mistakes**
>
> - Squaring before isolating the surd. $\sqrt{2x-1} + 2 = x$ cannot be squared term by term.
> - Squaring each term of a side: $(x - 2)^2 \neq x^2 - 4$. Expand it as a bracket.
> - Not checking. Most "extra" answers come from this step being skipped.
> - Checking in the squared equation instead of the original. Both candidates will pass there.
> - Thinking one answer is always false. In some questions both are valid; check each separately.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Solve $\sqrt{x-2} = 3$.
A: Square: $x - 2 = 9$, so $x = 11$. Check: $\sqrt{9} = 3$ ✓.
---
Q: Solve $\sqrt{3x+4} = x$.
A: Square: $3x + 4 = x^2$, so $x^2 - 3x - 4 = 0$ and $(x-4)(x+1) = 0$. Check $x = 4$: $\sqrt{16} = 4$ ✓. Check $x = -1$: $\sqrt{1} = 1$ but the right side is $-1$, so reject. Answer: $x = 4$.
---
Q: Solve $\sqrt{x+6} = x$.
A: Square: $x + 6 = x^2$, so $x^2 - x - 6 = 0$ and $(x-3)(x+2) = 0$. Check $x = 3$: $\sqrt{9} = 3$ ✓. Check $x = -2$: $\sqrt{4} = 2$ but the right side is $-2$, so reject. Answer: $x = 3$.
---
Q: Solve $x - 1 = \sqrt{x+11}$.
A: Square: $x^2 - 2x + 1 = x + 11$, so $x^2 - 3x - 10 = 0$ and $(x-5)(x+2) = 0$. Check $x = 5$: $4 = \sqrt{16}$ ✓. Check $x = -2$: $-3$ but $\sqrt{9} = 3$, so reject. Answer: $x = 5$.
---
Q: Solve $x + 1 = \sqrt{5x+1}$.
A: Square: $x^2 + 2x + 1 = 5x + 1$, so $x^2 - 3x = 0$ and $x(x-3) = 0$. Check $x = 0$: $1 = \sqrt{1}$ ✓. Check $x = 3$: $4 = \sqrt{16}$ ✓. Both are valid: $x = 0$ or $x = 3$.
---
Q: Solve $\sqrt{x^{2}+8} = x + 2$.
A: Square: $x^2 + 8 = x^2 + 4x + 4$, so $4 = 4x$ and $x = 1$. Check: $\sqrt{9} = 3$ and $1 + 2 = 3$ ✓.
```

## Further help

- Siyavula Mathematics Grade 11, [1.3 Solving surd equations](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-03).
