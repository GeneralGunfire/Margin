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

> **What you'll learn:** *why* the zero-product law works only when one side equals zero, how to factorise quadratics with $a = 1$ or $a \neq 1$, and how to avoid losing $x = 0$.
>
> **Prerequisites:** factorising common factors, difference of squares, and trinomials (Grade 10).

## 1. Why one side MUST equal zero

If two numbers multiply to give $10$ ($A \cdot B = 10$), there are infinitely many pairs that work ($2 \times 5$, $1 \times 10$, $\frac{1}{2} \times 20$, ...). You learn nothing certain about $A$ or $B$.

Only **$0$** is special: if $A \cdot B = 0$, at least one factor is forced to be $0$:

```rule
title: Zero-product law
A \cdot B = 0 \;\Longrightarrow\; A = 0 \ \text{ or } \ B = 0
```

That is why you must **expand and move everything to one side until the other side is $0$** before you factorise.

```compare
title: Never factorise before the right side is 0
left_title: Right: expand and make zero first
left:
$$x(x - 3) = 10$$
$$x^2 - 3x - 10 = 0$$
$$(x - 5)(x + 2) = 0 \implies x = 5 \text{ or } x = -2$$
right_title: Wrong: setting factors equal to 10
right:
$$x(x - 3) = 10 \;\not\Rightarrow\; x = 10 \text{ or } x - 3 = 10$$
Check $x = 10$: $10(7) = 70 \neq 10$.
```

```tryit
title: Quick check
prompt: Solve **(a)** $x^2 + 7x + 12 = 0$ and **(b)** $(x+1)(x-4) = 6$.
hint: In (b), expand the left side first, subtract $6$, and then factorise.
answer: **(a)** $(x+3)(x+4) = 0 \implies x = -3$ or $x = -4$. **(b)** $x^2 - 3x - 4 = 6 \implies x^2 - 3x - 10 = 0 \implies (x-5)(x+2) = 0 \implies x = 5$ or $x = -2$.
```

## 2. Don't divide away a variable

When every term contains $x$ (like $3x^2 = 12x$), dividing both sides by $x$ silently deletes the solution $x = 0$ (since dividing by $x$ assumes $x \neq 0$). **Factor out $x$ instead**:

$$3x^2 - 12x = 0 \;\Longrightarrow\; 3x(x - 4) = 0 \;\Longrightarrow\; x = 0 \ \text{ or } \ x = 4$$

```tryit
title: Try it first
prompt: Solve **(a)** $2x^2 = 10x$ and **(b)** $2x^2 - 5x - 3 = 0$.
hint: In (a), move $10x$ left and take out a common factor. In (b), split the middle term using factors of $2 \times (-3) = -6$ that add to $-5$.
answer: **(a)** $2x(x-5) = 0 \implies x = 0$ or $x = 5$. **(b)** $(2x+1)(x-3) = 0 \implies x = -\frac{1}{2}$ or $x = 3$.
```

## 3. Worked examples

```steps
title: Example 1: Solve $x^{2} - 5x + 6 = 0$
Find two numbers multiplying to $+6$ and adding to $-5$ :: -2 \text{ and } -3
Factorise :: (x - 2)(x - 3) = 0
Set each factor to $0$ :: x - 2 = 0 \quad\text{or}\quad x - 3 = 0
Solve :: x = 2 \quad\text{or}\quad x = 3
```

```steps
title: Example 2: Solve $2x^{2} + x - 6 = 0$
Find factors of $2 \times (-6) = -12$ adding to $+1$ :: +4 \text{ and } -3
Split the middle term and group in pairs :: 2x^{2} + 4x - 3x - 6 = 2x(x+2) - 3(x+2) = 0
Factor out $(x+2)$ :: (x + 2)(2x - 3) = 0
Solve each bracket :: x = -2 \quad\text{or}\quad x = \frac{3}{2}
```

```steps
title: Example 3 (Exam level): Solve $6x^{2} + 11x - 10 = 0$
Find factors of $6 \times (-10) = -60$ adding to $+11$ :: +15 \text{ and } -4
Split the middle term :: 6x^{2} + 15x - 4x - 10 = 0
Factor in pairs :: 3x(2x + 5) - 2(2x + 5) = 0 \;\Longrightarrow\; (2x + 5)(3x - 2) = 0
Solve :: x = -\frac{5}{2} \quad\text{or}\quad x = \frac{2}{3}
```

> **Common mistakes**
>
> - **Dividing by $x$:** turns $x^2 = 5x$ into $x = 5$ and loses $x = 0$.
> - **Sign flip at the last step:** $(2x + 5) = 0$ gives $x = -\frac{5}{2}$, not $+\frac{5}{2}$.
> - **Forgetting difference of squares:** $x^2 - 9 = 0$ gives $(x-3)(x+3) = 0$, so **two** answers: $x = \pm 3$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Solve $x^{2} - 9 = 0$.
A: $(x-3)(x+3) = 0 \implies x = 3$ or $x = -3$.
---
Q: Solve $3x^{2} = 12x$.
A: $3x^2 - 12x = 0 \implies 3x(x-4) = 0 \implies x = 0$ or $x = 4$.
---
Q: Solve $x^{2} - 8x + 15 = 0$.
A: $(x-3)(x-5) = 0 \implies x = 3$ or $x = 5$.
---
Q: Solve $3x^{2} + 10x - 8 = 0$.
A: Factors of $-24$ adding to $10$ are $12$ and $-2$: $(3x-2)(x+4) = 0 \implies x = \dfrac{2}{3}$ or $x = -4$.
---
Q: **(Exam level)** Solve $\dfrac{x(x+3)}{2} = 5$.
A: Multiply by $2$: $x^2 + 3x = 10 \implies x^2 + 3x - 10 = 0 \implies (x+5)(x-2) = 0 \implies x = -5$ or $x = 2$.
```

## Further help

- Siyavula Mathematics Grade 11, [2.3 Quadratic formula](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-03).
