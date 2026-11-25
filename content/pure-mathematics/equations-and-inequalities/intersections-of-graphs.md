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

> **What you'll learn:** how solving simultaneous equations locates where two graphs intersect, how $\Delta$ counts the intersection points, and how to find where one graph lies above another.
>
> **Prerequisites:** [Substitution method](/library/pure-mathematics/equations-and-inequalities/substitution-method) and [What the discriminant tells us](/library/pure-mathematics/equations-and-inequalities/what-the-discriminant-tells-us).

## 1. Intersection means equal outputs for the same input

Wherever two graphs $y = f(x)$ and $y = g(x)$ cross, they share the same point $(x;\ y)$—so $f(x) = g(x)$. Solving $f(x) = g(x)$ gives the $x$-coordinates of the intersection points; substituting back gives the $y$-coordinates.

Look at $f(x) = -x^{2} + 2x + 3$ and $g(x) = x + 1$. They meet at $(-1;\ 0)$ and $(2;\ 3)$, and between those two points the parabola sits **above** the line ($f(x) > g(x)$):

```diagram
name: line-parabola-visual
```

```rule
title: Intersections and the discriminant
f(x) = g(x) \;\Longrightarrow\; ax^{2} + bx + c = 0
\Delta > 0:\ \text{two points} \qquad \Delta = 0:\ \text{tangent (1 point)} \qquad \Delta < 0:\ \text{no intersection}
```

## 2. Intersection points vs "above / below" questions

```compare
title: Two common exam questions on the same two graphs
left_title: "Find where f meets g" → Equation
left:
Solve $f(x) = g(x)$ and find **both coordinates** $(x;\ y)$ for each meeting point.
right_title: "Where is f above g?" → Inequality
right:
Solve $f(x) > g(x)$, which is $f(x) - g(x) > 0$.
The answer is an **interval of $x$-values** between or outside the intersection $x$-coordinates.
```

```tryit
title: Quick check
prompt: What equation would you set up to test whether the line $y = 2x + k$ is a **tangent** to the parabola $y = x^{2}$?
hint: A tangent touches the curve at exactly one point, so the combined quadratic must have $\Delta = 0$.
answer: Equate $x^{2} = 2x + k \implies x^{2} - 2x - k = 0$, then set $\Delta = (-2)^{2} - 4(1)(-k) = 4 + 4k = 0 \implies k = -1$.
```

## 3. Worked examples

```steps
title: Example 1 (Line and parabola): Find where $f(x) = -x^{2} + 2x + 3$ meets $g(x) = x + 1$
Set $f(x) = g(x)$ :: -x^{2} + 2x + 3 = x + 1
Write in standard form :: x^{2} - x - 2 = 0
Factorise :: (x - 2)(x + 1) = 0 \;\Longrightarrow\; x = 2 \text{ or } x = -1
Find $y$ from $g(x) = x + 1$ :: (2;\ 3) \quad\text{and}\quad (-1;\ 0)
```

```steps
title: Example 2 (Line and hyperbola): Find where $y = \frac{6}{x}$ meets $y = x + 1$
Set equal and note restriction ($x \neq 0$) :: \frac{6}{x} = x + 1 \quad (x \neq 0)
Multiply both sides by $x$ :: 6 = x^{2} + x
Standard form and factorise :: x^{2} + x - 6 = 0 \;\Longrightarrow\; (x + 3)(x - 2) = 0
Find $y = x + 1$ for $x = -3$ and $x = 2$ :: (-3;\ -2) \quad\text{and}\quad (2;\ 3)
```

```steps
title: Example 3 (Exam level — tangent): Find $k$ if $y = x + k$ is a tangent to $y = x^{2} - 3x + 1$, and find the point of contact
Equate the two equations :: x^{2} - 3x + 1 = x + k
Standard form :: x^{2} - 4x + (1 - k) = 0
Tangent means one meeting point ($\Delta = 0$) :: (-4)^{2} - 4(1)(1 - k) = 0
Solve for $k$ :: 16 - 4 + 4k = 0 \;\Longrightarrow\; k = -3
Substitute $k = -3$ and solve for $x$ :: x^{2} - 4x + 4 = 0 \;\Longrightarrow\; x = 2
Find $y = x - 3$ at $x = 2$ :: \text{point of contact is } (2;\ -1)
```

> **Common mistakes**
>
> - **Giving only $x$-values when asked for points of intersection:** always compute the matching $y$-coordinate from the linear graph.
> - **Forgetting $x \neq 0$** when clearing a denominator like $\frac{6}{x}$.
> - **Reversing "$f$ above $g$":** $f$ is above $g$ means $f(x) > g(x)$, not $g(x) > f(x)$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Find the points where $y = x^{2} - 1$ meets $y = 3$.
A: $x^{2} - 1 = 3 \implies x^{2} = 4 \implies x = \pm 2$. Points: $(-2;\ 3)$ and $(2;\ 3)$.
---
Q: Find where $y = x^{2} - x - 2$ meets $y = x + 1$.
A: $x^{2} - x - 2 = x + 1 \implies x^{2} - 2x - 3 = 0 \implies (x - 3)(x + 1) = 0$. Points: $(3;\ 4)$ and $(-1;\ 0)$.
---
Q: Find where $y = \frac{4}{x}$ meets $y = x + 3$.
A: $\frac{4}{x} = x + 3$ ($x \neq 0$) $\implies x^{2} + 3x - 4 = 0 \implies (x + 4)(x - 1) = 0$. Points: $(-4;\ -1)$ and $(1;\ 4)$.
---
Q: How many times does $y = 2x$ meet $y = x^{2} + 1$?
A: $x^{2} + 1 = 2x \implies x^{2} - 2x + 1 = 0$, with $\Delta = (-2)^{2} - 4(1)(1) = 0$. It is a tangent meeting once at $(1;\ 2)$.
---
Q: **(Exam level)** For which values of $k$ does $y = x + k$ not meet $y = x^{2}$?
A: $x^{2} = x + k \implies x^{2} - x - k = 0$. No intersection means $\Delta < 0$: $(-1)^{2} - 4(1)(-k) = 1 + 4k < 0 \implies k < -\frac{1}{4}$.
---
Q: For which values of $x$ does $f(x) = x^{2} - 4x + 3$ lie above $g(x) = x - 1$?
A: $x^{2} - 4x + 3 > x - 1 \implies x^{2} - 5x + 4 > 0 \implies (x - 1)(x - 4) > 0$. So $x < 1$ or $x > 4$.
```

## Further help

- Siyavula Mathematics Grade 11, [2.8 Simultaneous equations](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-08).
