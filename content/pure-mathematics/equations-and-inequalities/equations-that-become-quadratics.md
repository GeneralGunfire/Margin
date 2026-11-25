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

> **What you'll learn:** how to clear variable denominators by multiplying every term by the LCD, why denominator restrictions must be written *before* clearing fractions, and how to spot disguised $k$-substitution quadratics.
>
> **Prerequisites:** [Factorise and solve](/library/pure-mathematics/equations-and-inequalities/factorise-and-solve), [The quadratic formula](/library/pure-mathematics/equations-and-inequalities/the-quadratic-formula), and algebraic fractions.

## 1. Clearing denominators (and writing restrictions first)

An equation like $x + \frac{6}{x} = 5$ doesn't look quadratic until you multiply **every** term by $x$ to get $x^2 + 6 = 5x$.

Before multiplying, write down the **restrictions**—any $x$-value that would make a denominator equal to $0$. Because division by zero is undefined, any candidate solution that hits a restriction must be rejected.

```rule
title: Fractional equations routine
\text{1. State restrictions (denominator } \neq 0\text{)} \quad\longrightarrow\quad \text{2. Multiply every term by the LCD} \quad\longrightarrow\quad \text{3. Solve \& check restrictions}
```

```tryit
title: Quick check
prompt: State the restrictions and solve $x - \dfrac{12}{x} = 1$.
hint: First note $x \neq 0$, then multiply every term ($x$, $-\frac{12}{x}$, and $1$) by $x$.
answer: Restriction: $x \neq 0$. Multiply by $x$: $x^2 - 12 = x \implies x^2 - x - 12 = 0 \implies (x-4)(x+3) = 0$. Both $x = 4$ and $x = -3$ satisfy $x \neq 0$.
```

## 2. Multiply EVERY term—not just the fractions

```compare
title: What happens to constant terms when clearing fractions?
left_title: Right: multiply every term on both sides
left:
For $\frac{2}{x+1} + \frac{3}{x-2} = 1$, multiply by $(x+1)(x-2)$:
$$2(x-2) + 3(x+1) = 1 \cdot (x+1)(x-2)$$
The right-hand $1$ also gets multiplied by the LCD.
right_title: Wrong: forgetting the whole-number term
right:
$$2(x-2) + 3(x+1) \neq 1$$
Only multiplying the fractions changes one side without changing the other.
```

```tryit
title: Try it first
prompt: State the restriction and solve $\dfrac{x}{3} = \dfrac{4}{x - 1}$.
hint: Note $x \neq 1$, then multiply both sides by $3(x-1)$ (cross-multiplying works here because each side is a single fraction).
answer: Restriction $x \neq 1$. $x(x-1) = 12 \implies x^2 - x - 12 = 0 \implies (x-4)(x+3) = 0$. Both $x = 4$ and $x = -3$ are valid.
```

## 3. Worked examples

```steps
title: Example 1: Solve $x + \dfrac{6}{x} = 5$
Write the restriction :: x \neq 0
Multiply every term by $x$ :: x^{2} + 6 = 5x
Standard form :: x^{2} - 5x + 6 = 0
Factorise :: (x - 2)(x - 3) = 0
Check against $x \neq 0$ :: x = 2 \quad\text{or}\quad x = 3
```

```steps
title: Example 2: Solve $\dfrac{3}{x-1} = x + 1$
Restriction :: x \neq 1
Multiply both sides by $(x-1)$ :: 3 = (x + 1)(x - 1) = x^{2} - 1
Standard form :: x^{2} - 4 = 0 \;\Longrightarrow\; (x - 2)(x + 2) = 0
Check against $x \neq 1$ :: x = 2 \quad\text{or}\quad x = -2
```

```steps
title: Example 3 (Exam level): Solve $\dfrac{2}{x+1} + \dfrac{3}{x-2} = 1$ correct to 2 decimals
Restrictions :: x \neq -1 \quad\text{and}\quad x \neq 2
Multiply every term by $(x+1)(x-2)$ :: 2(x - 2) + 3(x + 1) = (x + 1)(x - 2)
Expand both sides :: 5x - 1 = x^{2} - x - 2
Standard form :: x^{2} - 6x - 1 = 0
Apply the quadratic formula :: x = \frac{6 \pm \sqrt{36 + 4}}{2} = 3 \pm \sqrt{10}
Both satisfy the restrictions :: x \approx 6{,}16 \quad\text{or}\quad x \approx -0{,}16
```

> **Common mistakes**
>
> - **Cross-adding denominators:** $\frac{2}{x+1} + \frac{3}{x-2} \neq \frac{5}{2x-1}$. Always multiply by the LCD $(x+1)(x-2)$.
> - **Forgetting restrictions:** if a question yields $x = 2$ when $x - 2$ was in a denominator, $x = 2$ must be rejected.
> - **Sign errors when subtracting fractions:** keep a minus sign in front of a numerator in brackets until expanded.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Solve $x - \dfrac{3}{x} = 2$.
A: $x \neq 0$. Multiply by $x$: $x^2 - 2x - 3 = 0 \implies (x-3)(x+1) = 0 \implies x = 3$ or $x = -1$.
---
Q: Solve $\dfrac{1}{x} + \dfrac{1}{x+2} = \dfrac{3}{4}$.
A: $x \neq 0, -2$. Multiply by $4x(x+2)$: $4(x+2) + 4x = 3x(x+2) \implies 3x^2 - 2x - 8 = 0 \implies (3x+4)(x-2) = 0$. So $x = -\dfrac{4}{3}$ or $x = 2$.
---
Q: Solve $\dfrac{x+1}{x-2} = \dfrac{2x}{x+3}$ in simplest surd form.
A: $x \neq 2, -3$. $(x+1)(x+3) = 2x(x-2) \implies x^2 - 8x - 3 = 0 \implies x = \dfrac{8 \pm \sqrt{76}}{2} = 4 \pm \sqrt{19}$.
---
Q: Solve $\dfrac{x}{x-3} + \dfrac{6}{x-3} = 2$ (watch the restriction!).
A: $x \neq 3$. Multiply by $(x-3)$: $x + 6 = 2(x-3) \implies x + 6 = 2x - 6 \implies x = 12$ (valid since $12 \neq 3$).
---
Q: **(Exam level)** Solve $\left(x^2 - 2x\right)^2 - 11\left(x^2 - 2x\right) + 24 = 0$.
A: Let $k = x^2 - 2x$: $k^2 - 11k + 24 = 0 \implies (k-3)(k-8) = 0$. For $x^2 - 2x = 3$: $(x-3)(x+1) = 0 \implies x = 3$ or $-1$. For $x^2 - 2x = 8$: $(x-4)(x+2) = 0 \implies x = 4$ or $-2$.
```

## Further help

- Siyavula Mathematics Grade 11, [2.3 Quadratic formula](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-03).
- Siyavula Mathematics Grade 11, [2.4 Substitution](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-04).
