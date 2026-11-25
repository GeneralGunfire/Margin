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

> **What you'll learn:** how to solve square-root equations cleanly in four steps, and *why* squaring both sides can create fake ("extraneous") solutions that must be checked and rejected.
>
> **Prerequisites:** [Rationalising denominators](/library/pure-mathematics/exponents-and-surds/rationalising-denominators), expanding $(a+b)^2$, and solving quadratic equations.

## 1. Why squaring can invent a false answer

Squaring is not a one-to-one operation: both $2^2 = 4$ and $(-2)^2 = 4$. When you square both sides of $\sqrt{x+7} = x + 1$, you also solve the hidden twin equation $-\sqrt{x+7} = x + 1$.

Look at the graph below for $\sqrt{x+7} = x + 1$. The algebra produces two candidates, $x = 2$ and $x = -3$:
- At $x = 2$, the curve and line meet at height $3$ (**valid**).
- At $x = -3$, the curve is at $+2$ while the line is at $-2$ (**false**—they only matched *after* squaring made $(-2)^2 = (+2)^2$).

```diagram
name: surd-extraneous-visual
```

```rule
title: Four-step method for surd equations
\text{1. Isolate the surd} \;\longrightarrow\; \text{2. Square both sides} \;\longrightarrow\; \text{3. Solve} \;\longrightarrow\; \text{4. Check in the ORIGINAL equation}
```

```tryit
title: Quick check
prompt: Solve $\sqrt{x + 6} = x$ and test **both** quadratic answers in the original equation.
hint: Square both sides, rearrange to $x^2 - x - 6 = 0$, factorise, and substitute both candidates back into $\sqrt{x+6} = x$.
answer: $x + 6 = x^2 \implies (x-3)(x+2) = 0 \implies x = 3$ or $x = -2$. Checking $x = 3$: $\sqrt{9} = 3$ ($\checkmark$). Checking $x = -2$: $\sqrt{4} = 2 \neq -2$ (reject). Answer: $x = 3$.
```

## 2. Two habits that protect your marks

```compare
title: Isolate and expand properly
left_title: Right: isolate the surd first
left:
For $\sqrt{2x-1} + 2 = x$, move $+2$ first:
$$\sqrt{2x-1} = x - 2$$
Then square both **sides**:
$$2x - 1 = (x - 2)^2 = x^2 - 4x + 4$$
right_title: Wrong: squaring term by term
right:
$$\left(\sqrt{2x-1} + 2\right)^2 \neq (2x-1) + 4$$
$$(x - 2)^2 \neq x^2 - 4$$
Squaring a sum or difference always creates a middle $2ab$ term.
```

Also watch out: **always check in the original equation**, never in the squared equation (both candidates satisfy the squared equation by design). And don't assume one solution is always rejected—sometimes **both** work!

```tryit
title: Try it first
prompt: Solve $x + 1 = \sqrt{5x + 1}$. Are one or both solutions valid?
hint: The surd is already isolated. Square both sides, solve $x^2 - 3x = 0$, and test both roots.
answer: $(x+1)^2 = 5x + 1 \implies x^2 - 3x = 0 \implies x = 0$ or $x = 3$. For $x = 0$: $1 = \sqrt{1}$ ($\checkmark$). For $x = 3$: $4 = \sqrt{16}$ ($\checkmark$). **Both** $x = 0$ and $x = 3$ are valid.
```

## 3. Worked examples

```steps
title: Example 1: Solve $\sqrt{x + 7} = x + 1$
Surd is isolated; square both sides :: x + 7 = (x + 1)^{2}
Expand and move everything to one side :: x + 7 = x^{2} + 2x + 1 \;\Longrightarrow\; x^{2} + x - 6 = 0
Factorise :: (x + 3)(x - 2) = 0 \;\Longrightarrow\; x = -3 \text{ or } x = 2
Check $x = 2$: $\sqrt{9} = 3$ and $2 + 1 = 3$ :: \text{valid} \implies x = 2
Check $x = -3$: $\sqrt{4} = 2 \neq -2$ :: \text{rejected}
```

```steps
title: Example 2: Solve $\sqrt{2x - 1} + 2 = x$
Isolate the surd first :: \sqrt{2x - 1} = x - 2
Square both sides :: 2x - 1 = (x - 2)^{2} = x^{2} - 4x + 4
Standard form and factorise :: x^{2} - 6x + 5 = 0 \;\Longrightarrow\; (x - 1)(x - 5) = 0
Check $x = 1$: $\sqrt{1} + 2 = 3 \neq 1$ :: \text{rejected}
Check $x = 5$: $\sqrt{9} + 2 = 5$ :: \text{valid} \implies x = 5
```

```steps
title: Example 3 (Exam level): Solve $\sqrt{x^{2} + 5} = x + 1$
Square both sides :: x^{2} + 5 = (x + 1)^{2} = x^{2} + 2x + 1
Subtract $x^2$ from both sides :: 5 = 2x + 1 \;\Longrightarrow\; 2x = 4 \;\Longrightarrow\; x = 2
Check in original equation: $\sqrt{2^2 + 5} = \sqrt{9} = 3 = 2 + 1$ :: x = 2 \text{ is valid}
```

> **Common mistakes**
>
> - **Forgetting to check:** skipping substitution leaves invalid answers and loses the final mark.
> - **Treating $\sqrt{x+7} = -2$ as solvable:** a principal square root $\sqrt{\dots}$ is always $\geq 0$, so any step where a surd equals a negative number is immediately impossible.
> - **Checking in the squared equation:** always test against the *very first line* of the question.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Solve $\sqrt{x - 2} = 3$.
A: $x - 2 = 9 \implies x = 11$. Check: $\sqrt{9} = 3$ ($\checkmark$).
---
Q: Solve $\sqrt{3x + 4} = x$.
A: $3x + 4 = x^2 \implies (x-4)(x+1) = 0$. Check $x = 4$: $\sqrt{16} = 4$ ($\checkmark$). Check $x = -1$: $\sqrt{1} = 1 \neq -1$ (reject). Answer: $x = 4$.
---
Q: Solve $x - 1 = \sqrt{x + 11}$.
A: $x^2 - 2x + 1 = x + 11 \implies x^2 - 3x - 10 = 0 \implies (x-5)(x+2) = 0$. Check $x = 5$: $4 = \sqrt{16}$ ($\checkmark$). Check $x = -2$: $-3 \neq 3$ (reject). Answer: $x = 5$.
---
Q: Solve $\sqrt{x^{2} + 8} = x + 2$.
A: $x^2 + 8 = x^2 + 4x + 4 \implies 4x = 4 \implies x = 1$. Check: $\sqrt{9} = 3 = 1 + 2$ ($\checkmark$).
---
Q: **(Exam level)** Solve $2\sqrt{x + 3} - x = 3$.
A: Isolate: $2\sqrt{x+3} = x + 3$. Square: $4(x+3) = x^2 + 6x + 9 \implies x^2 + 2x - 3 = 0 \implies (x+3)(x-1) = 0$. Check $x = -3$: $2(0) - (-3) = 3$ ($\checkmark$). Check $x = 1$: $2(2) - 1 = 3$ ($\checkmark$). Both $x = -3$ and $x = 1$ are valid.
```

## Further help

- Siyavula Mathematics Grade 11, [1.3 Solving surd equations](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-03).
