---
title: Effect of a, p and q
youtube_query: Grade 11 effect of a p q on graphs
subject: pure-mathematics
topic: Functions
part: Algebra
term: 2
subtopic: The parabola
order: 611
---

> **What you'll learn:** how each parameter in $y = a(x + p)^{2} + q$ shapes and shifts the parent parabola $y = x^{2}$, and why $+p$ shifts the graph **left** rather than right.
>
> **Prerequisites:** Grade 10 quadratic graphs $y = ax^{2} + q$ and [Completing the square](/library/pure-mathematics/equations-and-inequalities/why-complete-the-square).

## 1. Transforming the parent curve $y = x^{2}$

Every parabola in turning-point form, $y = a(x + p)^{2} + q$, transforms the basic parabola $y = x^{2}$ in three clean steps:

- **$a$ (vertical stretch and flip):** if $a > 0$ the parabola opens upward (minimum turning point); if $a < 0$ it opens downward (maximum turning point). Larger $|a|$ pulls every $y$-value further from the axis, making the curve steeper and narrower.
- **$p$ (horizontal shift):** why does $y = (x + 2)^{2}$ move **left**? To hit the lowest point $y = 0$, the bracket $(x + 2)$ must equal $0$, which happens at **$x = -2$** ($2$ units left of $0$)! In general, the turning point lands at $x = -p$.
- **$q$ (vertical shift):** adds $q$ to every output height, sliding the whole curve up ($q > 0$) or down ($q < 0$) by $|q|$ units.

Experiment with $a$, $p$, and $q$ below to watch the turning point and range respond live:

```diagram
name: parabola-explorer
```

```rule
title: Turning-point form of a parabola
y = a(x + p)^{2} + q
\text{Turning point: } (-p;\ q) \qquad \text{Axis of symmetry: } x = -p
\text{Range: } y \geq q \text{ if } a > 0 \quad\text{or}\quad y \leq q \text{ if } a < 0
```

## 2. Why $(x + 2)^{2}$ moves left, not right

```compare
title: Sign of p inside the bracket
left_title: y = (x + 2)² → shifts 2 LEFT
left:
Ask: *which $x$ makes the squared bracket equal $0$?*
$$x + 2 = 0 \;\Longrightarrow\; x = -2$$
The vertex moves from $(0;\ 0)$ to $(-2;\ 0)$ (left).
right_title: y = (x - 2)² → shifts 2 RIGHT
right:
Ask: *which $x$ makes the squared bracket equal $0$?*
$$x - 2 = 0 \;\Longrightarrow\; x = +2$$
The vertex moves from $(0;\ 0)$ to $(2;\ 0)$ (right).
```

```tryit
title: Quick check
prompt: For $f(x) = -2(x - 3)^{2} + 5$, state **(a)** the turning point, **(b)** the axis of symmetry, and **(c)** the range.
hint: Set $(x - 3) = 0$ for the turning point's $x$-coordinate, and check the sign of $a = -2$ for minimum vs maximum.
answer: **(a)** Turning point is $(3;\ 5)$. **(b)** Axis of symmetry is $x = 3$. **(c)** Since $a = -2 < 0$, the parabola opens downward, so the range is $y \leq 5$.
```

## 3. Worked examples

```steps
title: Example 1 (Read properties directly): Describe $f(x) = 3(x + 1)^{2} - 4$
Identify parameters :: a = 3,\quad p = 1,\quad q = -4
Turning point $(-p;\ q)$ :: (-1;\ -4)
Axis of symmetry $x = -p$ :: x = -1
Since $a = 3 > 0$, it has a minimum value of $-4$ :: \text{Domain: } x \in \mathbb{R},\quad \text{Range: } y \geq -4
```

```steps
title: Example 2 (Shifts and transformations): $g(x) = 2x^{2} - 3$ is shifted $4$ units right and $5$ units up to form $h(x)$. Find $h(x)$.
Shift $4$ units right: replace $x$ with $(x - 4)$ :: 2(x - 4)^{2} - 3
Shift $5$ units up: add $5$ :: h(x) = 2(x - 4)^{2} - 3 + 5 = 2(x - 4)^{2} + 2
Check the turning point moved from $(0;\ -3)$ to $(4;\ 2)$ :: (0 + 4;\ -3 + 5) = (4;\ 2)
```

```steps
title: Example 3 (Exam level — rewrite standard form first): Find the turning point and range of $f(x) = -x^{2} + 6x - 5$
Factor out $-1$ from the $x$-terms :: f(x) = -(x^{2} - 6x) - 5
Complete the square inside: half of $-6$ is $-3$, $(-3)^{2} = 9$ :: f(x) = -\bigl((x - 3)^{2} - 9\bigr) - 5
Distribute the minus sign and simplify :: f(x) = -(x - 3)^{2} + 9 - 5 = -(x - 3)^{2} + 4
Read turning point and range ($a = -1 < 0$) :: \text{TP: } (3;\ 4),\quad \text{Range: } y \leq 4
```

> **Common mistakes**
>
> - **Reading $+p$ as shifting right:** in $a(x + p)^{2} + q$, $x + 3$ means $p = +3$, so the turning point sits at $x = -3$ (shifted **left**).
> - **Writing the range as $x \geq q$:** domain describes $x$ (all real numbers $\mathbb{R}$ for a parabola), while **range** describes $y$.
> - **Forgetting to multiply $-9$ by $a$** when completing the square on $-(x^{2} - 6x) - 5$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: State the turning point, axis of symmetry, and range of $f(x) = (x - 4)^{2} + 1$.
A: $a = 1 > 0$, $-p = 4$, $q = 1$. Turning point: $(4;\ 1)$; axis of symmetry: $x = 4$; range: $y \geq 1$.
---
Q: State the turning point and maximum value of $g(x) = -3(x + 2)^{2} + 7$.
A: Turning point: $(-2;\ 7)$. Since $a = -3 < 0$, the maximum value is $7$.
---
Q: Describe the transformation from $y = x^{2}$ to $y = -(x + 5)^{2} + 2$.
A: Reflected across the $x$-axis ($a = -1$), shifted $5$ units left, and shifted $2$ units up.
---
Q: If $f(x) = 2(x - 1)^{2} - 3$ is reflected across the $x$-axis, write the equation of the new graph $g(x)$.
A: Reflecting across the $x$-axis negates $y$: $g(x) = -f(x) = -2(x - 1)^{2} + 3$.
---
Q: **(Exam level)** Write $f(x) = 2x^{2} - 12x + 11$ in the form $a(x + p)^{2} + q$ and state its minimum value.
A: $f(x) = 2(x^{2} - 6x) + 11 = 2\bigl((x - 3)^{2} - 9\bigr) + 11 = 2(x - 3)^{2} - 7$. The minimum value is $-7$ (at $x = 3$).
```

## Further help

- Siyavula Mathematics Grade 11, [5.1 Quadratic functions](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-01).
