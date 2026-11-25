---
title: Intersections of graphs
youtube_query: Grade 11 parabola and straight line intersection
subject: pure-mathematics
topic: Equations and inequalities
part: Algebra
term: 1
subtopic: Simultaneous equations (one linear, one quadratic)
order: 252
---

> **What you'll learn:** how solving simultaneous equations finds where a line meets a curve, how the discriminant tells you how many meeting points there are, and how to read where one graph lies above another.
>
> **Prerequisites:** [Substitution method](/library/pure-mathematics/equations-and-inequalities/substitution-method) and [What the discriminant tells us](/library/pure-mathematics/equations-and-inequalities/what-the-discriminant-tells-us).

## The idea in plain language

Where two graphs meet, they share the same $x$ and the same $y$. So the meeting points are exactly the solutions of the two equations written as a pair. Setting $f(x) = g(x)$ gives an equation in $x$ only. Its solutions are the $x$-coordinates of the intersections.

The picture shows $f(x) = -x^2 + 2x + 3$ and the line $g(x) = x + 1$. They meet at $(-1;\ 0)$ and $(2;\ 3)$. Between those points the parabola is **above** the line.

![The parabola y = -x squared plus 2x plus 3 and the line y = x + 1 meeting at (-1;0) and (2;3), with the region where the parabola is above the line shaded](/content-images/line-parabola-intersections.svg)

## Rules

```rule
title: Intersections and the discriminant
f(x) = g(x) \;\Rightarrow\; ax^{2} + bx + c = 0 \quad \Delta > 0: \text{two points} \quad \Delta = 0: \text{one point (tangent)} \quad \Delta < 0: \text{none}
```

## Worked example 1 (line and parabola)

```steps
title: Find where $f(x) = -x^{2} + 2x + 3$ meets $g(x) = x + 1$
Set the functions equal :: -x^{2} + 2x + 3 = x + 1
Move everything to one side :: 0 = x^{2} - x - 2
Factorise :: (x-2)(x+1) = 0
$x$-coordinates :: x = 2 \quad\text{or}\quad x = -1
Find $y$ from $g(x) = x + 1$ :: y = 3 \quad\text{or}\quad y = 0
Points of intersection :: (2;\ 3) \quad\text{and}\quad (-1;\ 0)
```

## Worked example 2 (line and hyperbola)

```steps
title: Find where $y = \frac{6}{x}$ meets $y = x + 1$
Set equal :: \frac{6}{x} = x + 1
Restriction :: x \neq 0
Multiply by $x$ :: 6 = x^{2} + x
Standard form :: x^{2} + x - 6 = 0
Factorise :: (x+3)(x-2) = 0
$x$-values :: x = -3 \quad\text{or}\quad x = 2
Find $y = x + 1$ :: (-3;\ -2) \quad\text{and}\quad (2;\ 3)
```

## Worked example 3 (exam level)

```steps
title: For which $k$ is the line $y = x + k$ a tangent to $y = x^{2} - 3x + 1$? Find the point of contact.
Set equal :: x^{2} - 3x + 1 = x + k
Standard form :: x^{2} - 4x + (1 - k) = 0
A tangent touches once, so $\Delta = 0$ :: (-4)^{2} - 4(1)(1-k) = 0
Simplify :: 16 - 4 + 4k = 0
Solve for $k$ :: k = -3
Substitute $k$ and solve :: x^{2} - 4x + 4 = 0 \Rightarrow x = 2
Find $y = x - 3$ at $x = 2$ :: \text{point of contact } (2;\ -1)
```

> **Common mistakes**
>
> - Stopping at the $x$-values. Intersection **points** need both coordinates.
> - Finding $y$ by substituting into the curve and getting a wrong value. Use the simpler (linear) equation.
> - Forgetting the restriction $x \neq 0$ with hyperbolas.
> - Confusing "$f$ above $g$" with the sign of $f(x) - g(x)$: above means $f(x) - g(x) > 0$.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Find the points where $y = x^{2} - 1$ meets $y = 3$.
A: $x^2 - 1 = 3$, so $x^2 = 4$ and $x = \pm 2$. Points: $(-2;\ 3)$ and $(2;\ 3)$.
---
Q: Find where $y = x^{2} - x - 2$ meets $y = x + 1$.
A: $x^2 - x - 2 = x + 1$, so $x^2 - 2x - 3 = 0$ and $(x-3)(x+1) = 0$. Points: $(3;\ 4)$ and $(-1;\ 0)$.
---
Q: Find where $y = \frac{4}{x}$ meets $y = x + 3$.
A: $4 = x^2 + 3x$, so $x^2 + 3x - 4 = 0$ and $(x+4)(x-1) = 0$. Points: $(-4;\ -1)$ and $(1;\ 4)$.
---
Q: How many times does $y = 2x$ meet $y = x^{2} + 1$?
A: $x^2 + 1 = 2x$, so $x^2 - 2x + 1 = 0$ and $\Delta = 4 - 4 = 0$. The line is a tangent: it touches once, at $(1;\ 2)$.
---
Q: For which $k$ does the line $y = x + k$ not meet $y = x^{2}$?
A: $x^2 = x + k$, so $x^2 - x - k = 0$. No intersection means $\Delta < 0$: $1 + 4k < 0$, so $k < -\frac{1}{4}$.
---
Q: For which values of $x$ is $x^{2} - 4x + 3$ above the line $y = x - 1$?
A: $x^2 - 4x + 3 > x - 1$, so $x^2 - 5x + 4 > 0$ and $(x-1)(x-4) > 0$. The parabola is above the line for $x < 1$ or $x > 4$.
```

## Further help

- Siyavula Mathematics Grade 11, [2.8 Simultaneous equations](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-08).
