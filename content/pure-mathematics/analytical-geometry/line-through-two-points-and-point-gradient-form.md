---
title: Line through two points and point-gradient form
youtube_query: Grade 11 equation of a line through two points
subject: pure-mathematics
topic: Analytical geometry
part: Geometry
term: 2
subtopic: Distance, midpoint, gradient and the equation of a line
order: 512
---

> **What you'll learn:** how to find the equation of a straight line directly from a gradient and one point using $y - y_{1} = m(x - x_{1})$, why it works better than hunting for $c$ manually, and how to handle horizontal and vertical lines.
>
> **Prerequisites:** [Distance, midpoint and gradient recap](/library/pure-mathematics/analytical-geometry/distance-midpoint-and-gradient-recap).

## 1. Where point-gradient form comes from

Take any known point $(x_{1};\ y_{1})$ on a line with gradient $m$, and pick a second general point $(x;\ y)$ anywhere on that same line. The gradient formula between them must equal $m$:

$$\frac{y - y_{1}}{x - x_{1}} = m$$

Multiplying both sides by $(x - x_{1})$ produces the **point-gradient formula**:

```rule
title: Equations of a straight line
\text{Point-gradient form:} \qquad y - y_{1} = m(x - x_{1})
\text{Slope-intercept form:} \qquad y = mx + c
\text{Horizontal line (} m = 0 \text{): } y = k \qquad \text{Vertical line (} m \text{ undefined): } x = k
```

Point-gradient form drops straight into $y = mx + c$ in a single expansion—with far fewer sign mistakes than solving $y = mx + c$ for $c$ separately when fractions appear.

## 2. Two ways to find the equation from two points

```compare
title: Find the line through A(1; -2) and B(4; 7)
left_title: Method A: y - y₁ = m(x - x₁)
left:
1. Gradient: $m = \frac{7 - (-2)}{4 - 1} = \frac{9}{3} = 3$.
2. Substitute $m = 3$ and $A(1;\ -2)$:
   $$y - (-2) = 3(x - 1)$$
   $$y + 2 = 3x - 3 \;\Longrightarrow\; y = 3x - 5$$
right_title: Method B: y = mx + c
right:
1. Gradient: $m = 3$, so $y = 3x + c$.
2. Substitute $B(4;\ 7)$:
   $$7 = 3(4) + c \;\Longrightarrow\; c = -5$$
   $$y = 3x - 5$$
```

```tryit
title: Quick check
prompt: Find the equation of the line with gradient $-\frac{1}{2}$ passing through $(4;\ 3)$, in the form $y = mx + c$.
hint: Substitute $m = -\frac{1}{2}$, $x_{1} = 4$, and $y_{1} = 3$ into $y - y_{1} = m(x - x_{1})$.
answer: $y - 3 = -\frac{1}{2}(x - 4) \implies y - 3 = -\frac{1}{2}x + 2 \implies y = -\frac{1}{2}x + 5$.
```

## 3. Worked examples

```steps
title: Example 1 (Through two points): Find the equation of the line passing through $P(-2;\ 5)$ and $Q(4;\ -7)$
Find the gradient $m_{PQ}$ :: m = \frac{-7 - 5}{4 - (-2)} = \frac{-12}{6} = -2
Substitute $m = -2$ and $P(-2;\ 5)$ into point-gradient form :: y - 5 = -2(x - (-2)) = -2(x + 2)
Expand and simplify :: y - 5 = -2x - 4 \;\Longrightarrow\; y = -2x + 1
```

```steps
title: Example 2 (Find intercepts and check a third point): For the line $y = -2x + 1$, find the $x$- and $y$-intercepts and test whether $R(3;\ -5)$ lies on the line
$y$-intercept (set $x = 0$) :: y = 1 \;\Longrightarrow\; (0;\ 1)
$x$-intercept (set $y = 0$) :: 0 = -2x + 1 \;\Longrightarrow\; x = \frac{1}{2} \;\Longrightarrow\; \left(\frac{1}{2};\ 0\right)
Substitute $x = 3$ to test $R(3;\ -5)$ :: y = -2(3) + 1 = -5 \;\Longrightarrow\; \text{yes, } R \text{ lies on the line}
```

```steps
title: Example 3 (Exam level — median of a triangle): Triangle $ABC$ has $A(-1;\ 4)$, $B(2;\ -2)$, and $C(6;\ 4)$. Find the equation of the **median** from $A$ to $BC$.
A median joins $A$ to the midpoint $M$ of $BC$ :: M = \left(\frac{2 + 6}{2};\ \frac{-2 + 4}{2}\right) = (4;\ 1)
Find the gradient of $AM$ :: m_{AM} = \frac{1 - 4}{4 - (-1)} = -\frac{3}{5}
Use point-gradient form with $M(4;\ 1)$ :: y - 1 = -\frac{3}{5}(x - 4)
Simplify :: y = -\frac{3}{5}x + \frac{12}{5} + 1 = -\frac{3}{5}x + \frac{17}{5}
```

> **Common mistakes**
>
> - **Mixing up horizontal ($y = k$) and vertical ($x = k$) lines:** a line through $(3;\ 2)$ and $(3;\ 7)$ has $x = 3$ everywhere (gradient undefined), so its equation is **$x = 3$**, not $y = 3$.
> - **Sign errors inside $(x - x_{1})$ when $x_{1} < 0$:** always write $x - (-2) = x + 2$.
> - **Substituting a point into $y = mx + c$ to find $c$ and forgetting to write the final equation.**

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Find the equation of the line passing through $(3;\ -1)$ with gradient $4$.
A: $y - (-1) = 4(x - 3) \implies y + 1 = 4x - 12 \implies y = 4x - 13$.
---
Q: Find the equation of the line through $A(-3;\ -2)$ and $B(1;\ 6)$.
A: $m = \frac{6 - (-2)}{1 - (-3)} = \frac{8}{4} = 2$. Using $B(1;\ 6)$: $y - 6 = 2(x - 1) \implies y = 2x + 4$.
---
Q: Find the equations of **(a)** the horizontal line and **(b)** the vertical line passing through $(-5;\ 7)$.
A: **(a)** $y = 7$. **(b)** $x = -5$.
---
Q: **(Exam level)** A line passes through $P(2;\ k)$ and $Q(6;\ 11)$ and has $y$-intercept $(0;\ 3)$. Find $k$.
A: Using $Q(6;\ 11)$ and $(0;\ 3)$: $m = \frac{11 - 3}{6 - 0} = \frac{8}{6} = \frac{4}{3}$, so $y = \frac{4}{3}x + 3$. Substitute $x = 2$: $k = \frac{4}{3}(2) + 3 = \frac{17}{3}$.
```

## Further help

- Siyavula Mathematics Grade 11, [4.2 Equation of a line](https://www.siyavula.com/read/za/mathematics/grade-11/analytical-geometry/04-analytical-geometry-02).
