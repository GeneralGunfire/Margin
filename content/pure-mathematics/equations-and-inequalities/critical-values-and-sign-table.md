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

> **What you'll learn:** how to solve a quadratic inequality by finding its critical values, testing the sign of each interval on a number line, and writing the correct interval notation.
>
> **Prerequisites:** [Factorise and solve](/library/pure-mathematics/equations-and-inequalities/factorise-and-solve) and linear inequalities.

## 1. Zeros divide the number line into constant-sign regions

A continuous expression like $(x - 3)(x + 2)$ can only change from positive to negative where it passes through zero. Those zeros—here $x = -2$ and $x = 3$—are called the **critical values**. Once you mark them on a number line, every point inside the same region shares the exact same sign:

```diagram
name: inequality-sign
```

Pick one easy test value inside each region (such as $x = 0$ in the middle) to check whether the product is $+$ or $-$, then select the region(s) asked for by the inequality.

```rule
title: Five-step sign-table method
\text{1. Make one side } 0 \quad \text{2. Factorise} \quad \text{3. Find critical values} \quad \text{4. Test signs} \quad \text{5. Write regions}
```

```compare
title: Strict (<, >) vs inclusive (≤, ≥)
left_title: Strict (< or >) → open circles
left:
Critical values make the expression equal to $0$, so they are **excluded**:
- Use $<$ or $>$ (open circles on the number line).
- Example: $-2 < x < 3$
right_title: Inclusive (≤ or ≥) → closed circles
right:
Zero is allowed, so the critical values are **included**:
- Use $\leq$ or $\geq$ (filled dots on the number line).
- Example: $-2 \leq x \leq 3$
```

```tryit
title: Quick check
prompt: For $(x + 1)(x - 4) \leq 0$, find the critical values and test $x = 0$ to see which region is negative.
hint: Critical values make each bracket zero. At $x = 0$, compute $(0 + 1)(0 - 4)$.
answer: Critical values are $x = -1$ and $x = 4$. At $x = 0$ (in the middle), $(1)(-4) = -4 < 0$, so the middle region is negative: $-1 \leq x \leq 4$.
```

## 2. Worked examples

```steps
title: Example 1 (Middle region): Solve $x^{2} - x - 6 < 0$
Factorise :: (x - 3)(x + 2) < 0
Find critical values :: x = -2 \quad\text{and}\quad x = 3
Test $x = 0$ (middle): $(0 - 3)(0 + 2) = -6$ :: \text{middle region } (-2;\ 3) \text{ is } (-)
Test $x = -3$ and $x = 4$ (outer regions) :: x < -2 \text{ is } (+),\quad x > 3 \text{ is } (+)
Keep the negative region (strict sign) :: -2 < x < 3
```

```steps
title: Example 2 (Two outer wings): Solve $x^{2} - 5x + 6 \geq 0$
Factorise :: (x - 2)(x - 3) \geq 0
Critical values :: x = 2 \quad\text{and}\quad x = 3
Test $x = 2{,}5$: $(0{,}5)(-0{,}5) = -0{,}25$ :: \text{middle is } (-), \text{ outer wings are } (+)
We want $\geq 0$, so take the outer wings and include endpoints :: x \leq 2 \quad\text{or}\quad x \geq 3
```

```steps
title: Example 3 (Exam level): Solve $2x^{2} + x \leq 3$
Move all terms to one side :: 2x^{2} + x - 3 \leq 0
Factorise :: (2x + 3)(x - 1) \leq 0
Critical values :: x = -\frac{3}{2} \quad\text{and}\quad x = 1
Test $x = 0$: $(3)(-1) = -3 < 0$ :: \text{middle region is } (-)
Keep the middle region and endpoints :: -\frac{3}{2} \leq x \leq 1
```

> **Common mistakes**
>
> - **Stopping at the critical values:** $x = -2$ and $x = 3$ solves an equation, not an inequality—your answer must be an interval (or union of two intervals).
> - **Combining outer wings into one chain:** never write $3 < x < -2$; outer regions are separate and must be joined with **or** ($x < -2$ or $x > 3$).
> - **Factorising before zeroing one side:** $x(x + 4) < 12$ must be expanded and rewritten as $x^{2} + 4x - 12 < 0$ first.
> - **Dividing both sides by a factor with $x$:** you might divide by zero or flip the sign without knowing.

## 3. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Solve $x^{2} - 9 > 0$.
A: $(x - 3)(x + 3) > 0$. Critical values $-3$ and $3$. The outer wings are positive: $x < -3$ or $x > 3$.
---
Q: Solve $x^{2} + 2x - 8 \leq 0$.
A: $(x + 4)(x - 2) \leq 0$. Critical values $-4$ and $2$. Testing $x = 0$ gives $-8 < 0$, so $-4 \leq x \leq 2$.
---
Q: Solve $x^{2} - 4x - 5 > 0$.
A: $(x - 5)(x + 1) > 0$. Critical values $-1$ and $5$. Outer wings are positive: $x < -1$ or $x > 5$.
---
Q: Solve $3x^{2} - 7x + 2 \leq 0$.
A: $(3x - 1)(x - 2) \leq 0$. Critical values $\frac{1}{3}$ and $2$. Testing $x = 1$ gives $(2)(-1) < 0$, so $\frac{1}{3} \leq x \leq 2$.
---
Q: Solve $x^{2} \geq 2x + 15$.
A: $x^{2} - 2x - 15 \geq 0 \implies (x - 5)(x + 3) \geq 0$. Critical values $-3$ and $5$. Outer wings: $x \leq -3$ or $x \geq 5$.
---
Q: Solve $x(x + 4) < 12$.
A: $x^{2} + 4x - 12 < 0 \implies (x + 6)(x - 2) < 0$. Critical values $-6$ and $2$. Middle region is negative: $-6 < x < 2$.
```

## Further help

- Siyavula Mathematics Grade 11, [2.7 Quadratic inequalities](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-07).
