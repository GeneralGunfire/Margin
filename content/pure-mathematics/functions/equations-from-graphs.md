---
title: Equations from graphs
youtube_query: Grade 11 determining equations from graphs
subject: pure-mathematics
topic: Functions
part: Algebra
term: 2
subtopic: The parabola
order: 613
---

> **What you'll learn:** how to choose the right parabola template from the clues marked on a sketch—turning-point form, $x$-intercept form, or standard form—and solve for the unknown parameters.
>
> **Prerequisites:** [Sketching from turning-point form](/library/pure-mathematics/functions/sketching-from-turning-point-form).

## 1. Let the given points choose the formula

Every parabola has three parameters, so you need three pieces of information to pin it down. Pick the formula that swallows two pieces of information immediately:

```compare
title: Which parabola formula should you start with?
left_title: Given: Turning point (h; k) + 1 other point
left:
Start with **turning-point form**:
$$y = a(x - h)^{2} + k$$
Substitute $(h;\ k)$ first, then plug in the extra point to solve for $a$.
right_title: Given: Two x-intercepts r₁ and r₂ + 1 other point
right:
Start with **root (intercept) form**:
$$y = a(x - r_{1})(x - r_{2})$$
Substitute $r_{1}$ and $r_{2}$ first, then plug in the extra point to solve for $a$.
```

If you are only given the $y$-intercept $(0;\ c)$ and two non-intercept points, start with standard form $y = ax^{2} + bx + c$ (since $c$ is already the $y$-intercept) and solve simultaneously for $a$ and $b$.

```rule
title: Three quadratic equation templates
\text{Turning point } (-p;\ q):\ y = a(x + p)^{2} + q
\text{Roots } r_{1}, r_{2}:\ y = a(x - r_{1})(x - r_{2})
\text{General / } y\text{-intercept } c:\ y = ax^{2} + bx + c
```

```tryit
title: Quick check
prompt: A parabola has $x$-intercepts at $(-1;\ 0)$ and $(4;\ 0)$ and passes through $(2;\ -12)$. Which formula should you use, and what is $a$?
hint: Use $y = a(x - r_{1})(x - r_{2})$ with $r_{1} = -1$ and $r_{2} = 4$, then substitute $(2;\ -12)$.
answer: $y = a(x + 1)(x - 4)$. Substituting $(2;\ -12)$: $-12 = a(3)(-2) = -6a \implies a = 2$.
```

## 2. Worked examples

```steps
title: Example 1 (From the turning point): Turning point is $(-1;\ -8)$ and the graph cuts the $y$-axis at $(0;\ -6)$. Find $y = ax^{2} + bx + c$.
Use turning-point form with $(-p;\ q) = (-1;\ -8)$ :: y = a(x + 1)^{2} - 8
Substitute the $y$-intercept $(0;\ -6)$ :: -6 = a(0 + 1)^{2} - 8
Solve for $a$ :: a = 2
Expand if standard form is requested :: y = 2(x^{2} + 2x + 1) - 8 = 2x^{2} + 4x - 6
```

```steps
title: Example 2 (From the $x$-intercepts): $x$-intercepts at $(-2;\ 0)$ and $(3;\ 0)$, passing through $(1;\ 6)$. Find $f(x)$.
Use intercept form with $r_{1} = -2$ and $r_{2} = 3$ :: f(x) = a(x + 2)(x - 3)
Substitute $(1;\ 6)$ :: 6 = a(1 + 2)(1 - 3) = a(3)(-2) = -6a
Solve for $a$ :: a = -1
Expand to standard form :: f(x) = -(x^{2} - x - 6) = -x^{2} + x + 6
```

```steps
title: Example 3 (Exam level — axis of symmetry + 2 points): Axis of symmetry is $x = 2$, and the parabola passes through $(0;\ 5)$ and $(3;\ -4)$. Find $f(x)$.
Since the axis of symmetry is $x = 2$, write turning-point form :: f(x) = a(x - 2)^{2} + q
Substitute $(0;\ 5)$ :: 5 = 4a + q \quad (1)
Substitute $(3;\ -4)$ :: -4 = a + q \quad (2)
Subtract (2) from (1) :: 9 = 3a \;\Longrightarrow\; a = 3
Find $q$ from (2) :: q = -4 - 3 = -7
Write final equation :: f(x) = 3(x - 2)^{2} - 7 = 3x^{2} - 12x + 5
```

> **Common mistakes**
>
> - **Substituting the turning point twice:** if you used $(-p;\ q)$ to build $y = a(x + p)^{2} + q$, do NOT plug $(-p;\ q)$ back in to find $a$—you will just get $q = q$! You need a **second** point.
> - **Sign flip in $(x - r_{1})(x - r_{2})$:** an $x$-intercept at $x = -2$ gives the factor $(x + 2)$, not $(x - 2)$.
> - **Leaving the equation in intercept form** when the question specifies "in the form $y = ax^{2} + bx + c$".

## 3. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Find the equation of the parabola with turning point $(3;\ -2)$ passing through $(5;\ 6)$, in turning-point form.
A: $y = a(x - 3)^{2} - 2$. Plug in $(5;\ 6)$: $6 = a(2)^{2} - 2 \implies 4a = 8 \implies a = 2$. So $y = 2(x - 3)^{2} - 2$.
---
Q: Find the equation in the form $y = ax^{2} + bx + c$ for the parabola with $x$-intercepts $(-4;\ 0)$ and $(1;\ 0)$ and $y$-intercept $(0;\ -8)$.
A: $y = a(x + 4)(x - 1)$. Plug in $(0;\ -8)$: $-8 = a(4)(-1) = -4a \implies a = 2$. Expanding: $y = 2(x^{2} + 3x - 4) = 2x^{2} + 6x - 8$.
---
Q: A parabola has vertex $(0;\ 9)$ and passes through $(3;\ 0)$. Find its equation.
A: $y = ax^{2} + 9$. Plug in $(3;\ 0)$: $0 = 9a + 9 \implies a = -1$. So $y = -x^{2} + 9$.
---
Q: **(Exam level)** A parabola has $x$-intercepts $(-1;\ 0)$ and $(5;\ 0)$ and a maximum value of $18$. Find its equation in the form $y = ax^{2} + bx + c$.
A: By symmetry, the turning point sits midway between $-1$ and $5$: $x_{\text{TP}} = \frac{-1 + 5}{2} = 2$, so TP is $(2;\ 18)$. Using $y = a(x + 1)(x - 5)$ at $(2;\ 18)$: $18 = a(3)(-3) = -9a \implies a = -2$. Expanding: $y = -2(x^{2} - 4x - 5) = -2x^{2} + 8x + 10$.
---
Q: Find $a$, $b$, and $c$ if $y = ax^{2} + bx + c$ has $y$-intercept $(0;\ 4)$ and passes through $(1;\ 3)$ and $(-2;\ 18)$.
A: $c = 4$. From $(1;\ 3)$: $a + b + 4 = 3 \implies a + b = -1$. From $(-2;\ 18)$: $4a - 2b + 4 = 18 \implies 2a - b = 7$. Adding gives $3a = 6 \implies a = 2$, so $b = -3$. Thus $y = 2x^{2} - 3x + 4$.
```

## Further help

- Siyavula Mathematics Grade 11, [5.1 Quadratic functions](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-01).
