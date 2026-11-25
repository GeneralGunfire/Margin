---
title: Combined graphs workshop
youtube_query: Grade 11 sketching combined function graphs
subject: pure-mathematics
topic: Functions
part: Algebra
term: 2
subtopic: Combined graph questions
order: 651
---

> **What you'll learn:** how to tackle multi-part Paper 1 graph questions combining a parabola, straight line, hyperbola, or exponential—finding vertical distances, maximum lengths, intersections, and product/quotient inequalities.
>
> **Prerequisites:** [Equations from graphs](/library/pure-mathematics/functions/equations-from-graphs), [Equation from a graph](/library/pure-mathematics/functions/equation-from-a-graph), and [Intersections of graphs](/library/pure-mathematics/equations-and-inequalities/intersections-of-graphs).

## 1. Vertical distance, horizontal distance, and inequalities

Paper 1 exam questions almost always put two functions on the same axes and test four core moves:

1. **Intersections ($f(x) = g(x)$):** equate the formulas to find shared $(x;\ y)$ coordinates.
2. **Vertical distance between curves:** always subtract **bottom $y$ from top $y$** at the same $x$-value:
   $$\text{Length} = y_{\text{top}} - y_{\text{bottom}} = f(x) - g(x)$$
3. **Maximum vertical length:** if $f(x) - g(x)$ is a downward quadratic $ax^{2} + bx + c$ ($a < 0$), its maximum occurs at $x = -\frac{b}{2a}$ (or by completing the square).
4. **Graph inequalities:** read signs directly off the sketch instead of solving from scratch.

```rule
title: Reading product and quotient inequalities from a sketch
f(x) \cdot g(x) \geq 0 \;\Longleftrightarrow\; f(x) \text{ and } g(x) \text{ have the SAME sign (both } \geq 0 \text{ or both } \leq 0\text{)}
f(x) \cdot g(x) < 0 \;\Longleftrightarrow\; f(x) \text{ and } g(x) \text{ have OPPOSITE signs (one above, one below } x\text{-axis)}
\frac{f(x)}{g(x)} \geq 0 \;\Longleftrightarrow\; \text{same sign as } f\cdot g \geq 0,\ \text{EXCEPT } g(x) \neq 0
```

## 2. Vertical length vs horizontal length

```compare
title: Which subtraction gives length?
left_title: Vertical segment (same x)
left:
Points $M(x;\ f(x))$ and $N(x;\ g(x))$ share the same $x$-value:
$$MN = y_{\text{top}} - y_{\text{bottom}}$$
If $f$ is above $g$, $MN = f(x) - g(x)$.
right_title: Horizontal segment (same y)
right:
Points $P(x_{1};\ y)$ and $Q(x_{2};\ y)$ share the same $y$-value:
$$PQ = x_{\text{right}} - x_{\text{left}}$$
Set both functions equal to that $y$-value to solve for $x_{1}$ and $x_{2}$.
```

```tryit
title: Quick check
prompt: If $f(x) = -x^{2} + 4x + 5$ lies above $g(x) = x + 1$ for $-1 < x < 4$, write an expression for the vertical distance $MN = f(x) - g(x)$ and find the $x$-value where $MN$ is longest.
hint: Subtract $(x + 1)$ using brackets, then find the vertex of the resulting downward quadratic with $x = -\frac{b}{2a}$.
answer: $MN = (-x^{2} + 4x + 5) - (x + 1) = -x^{2} + 3x + 4$. The maximum occurs at $x = -\frac{3}{2(-1)} = \frac{3}{2}$.
```

## 3. Worked examples

```steps
title: Example 1 (Maximum vertical distance): Given $f(x) = -x^{2} + 4x + 5$ and $g(x) = x + 1$, find their intersections and the maximum vertical length between them
Equate $f(x) = g(x)$ :: -x^{2} + 4x + 5 = x + 1 \;\Longrightarrow\; x^{2} - 3x - 4 = 0
Factorise :: (x - 4)(x + 1) = 0 \;\Longrightarrow\; (-1;\ 0) \text{ and } (4;\ 5)
On $(-1;\ 4)$, $f$ is above $g$, so $L(x) = f(x) - g(x)$ :: L(x) = -x^{2} + 3x + 4
Complete the square (or use $x = -\frac{b}{2a} = \frac{3}{2}$) :: L(x) = -\left(x - \frac{3}{2}\right)^{2} + \frac{25}{4}
Read maximum length :: L_{\max} = \frac{25}{4} = 6{,}25\text{ units at } x = \frac{3}{2}
```

```steps
title: Example 2 (Reading $f(x)\cdot g(x) \leq 0$): $f(x) = x^{2} - 3$ ($x$-intercepts $\pm\sqrt{3}$) and $g(x) = \frac{2}{x}$ (vertical asymptote $x = 0$)
List sign boundaries ($x$-intercepts and asymptotes) :: x = -\sqrt{3},\quad x = 0,\quad x = \sqrt{3}
For $x < -\sqrt{3}$: $f > 0$ and $g < 0$ (opposite signs) :: x < -\sqrt{3} \text{ works}
For $-\sqrt{3} < x < 0$: $f < 0$ and $g < 0$ (same sign) :: \text{reject } (-\sqrt{3};\ 0)
For $0 < x < \sqrt{3}$: $f < 0$ and $g > 0$ (opposite signs) :: 0 < x < \sqrt{3} \text{ works}
Include $x$-intercepts ($f = 0$), exclude asymptote ($x = 0$) :: x \leq -\sqrt{3} \quad\text{or}\quad 0 < x \leq \sqrt{3}
```

```steps
title: Example 3 (Exam level — tangent line via $\Delta = 0$): Find $k$ so that $y = 2x + k$ is a tangent to $f(x) = x^{2} - 4x + 5$
Equate the line and parabola :: x^{2} - 4x + 5 = 2x + k
Standard form :: x^{2} - 6x + (5 - k) = 0
Tangent touches once, so $\Delta = 0$ :: (-6)^{2} - 4(1)(5 - k) = 0
Solve for $k$ :: 36 - 20 + 4k = 0 \;\Longrightarrow\; 4k = -16 \;\Longrightarrow\; k = -4
```

> **Common mistakes**
>
> - **Forgetting brackets when subtracting $g(x)$:** $f(x) - g(x)$ for $g(x) = x + 1$ must subtract **both** terms: $-(x + 1) = -x - 1$.
> - **Including a vertical asymptote or zero denominator** in $\frac{f(x)}{g(x)} \geq 0$ or $f(x)\cdot g(x) \leq 0$ when one function is a hyperbola.
> - **Confusing $x$ where $MN$ is maximum with the maximum length $MN$ itself:** always plug $x = -\frac{b}{2a}$ back into $L(x)$ if asked for the *maximum length*.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Given $f(x) = -x^{2} + 6x - 5$ and $g(x) = x - 1$, find the coordinates where $f$ and $g$ intersect.
A: $-x^{2} + 6x - 5 = x - 1 \implies x^{2} - 5x + 4 = 0 \implies (x - 1)(x - 4) = 0$. Substituting into $g(x)$ gives $(1;\ 0)$ and $(4;\ 3)$.
---
Q: Using $f(x) = -x^{2} + 6x - 5$ and $g(x) = x - 1$ for $1 < x < 4$, find the maximum vertical distance between the two graphs.
A: $L(x) = (-x^{2} + 6x - 5) - (x - 1) = -x^{2} + 5x - 4$. Maximum at $x = -\frac{5}{2(-1)} = 2{,}5$: $L(2{,}5) = -6{,}25 + 12{,}5 - 4 = 2{,}25$ units.
---
Q: A parabola $f$ has $x$-intercepts $(-2;\ 0)$ and $(4;\ 0)$ and opens upward ($a > 0$). A line $g(x) = x + 2$ cuts the $x$-axis at $(-2;\ 0)$. For which $x$-values is $f(x)\cdot g(x) \leq 0$?
A: For $x < -2$: $f > 0, g < 0$ (opposite: works). For $-2 < x < 4$: $f < 0, g > 0$ (opposite: works). For $x > 4$: both positive. Include $-2$ and $4$, so $x \leq 4$.
---
Q: **(Exam level)** Given $f(x) = \frac{4}{x - 1} + 2$ and $g(x) = 2x$, find their points of intersection and determine where $\frac{f(x)}{g(x)} \geq 0$ if $f$ cuts the $x$-axis at $(-1;\ 0)$.
A: $\frac{4}{x - 1} + 2 = 2x \implies \frac{4}{x - 1} = 2(x - 1) \implies (x - 1)^{2} = 2 \implies x = 1 \pm \sqrt{2}$, giving $(1 + \sqrt{2};\ 2 + 2\sqrt{2})$ and $(1 - \sqrt{2};\ 2 - 2\sqrt{2})$. For $\frac{f}{g} \geq 0$, mark the boundaries $x = -1$ ($f = 0$), $x = 0$ ($g = 0$, excluded), and $x = 1$ (asymptote of $f$, excluded). From the sketch, $f > 0$ when $x < -1$ or $x > 1$, and $f < 0$ on $(-1;\ 1)$; meanwhile $g > 0$ for $x > 0$ and $g < 0$ for $x < 0$. Both have the same sign on $(-1;\ 0)$ (both negative) and $(1;\ \infty)$ (both positive). Including $x = -1$ where $f(-1) = 0$ gives $-1 \leq x < 0$ or $x > 1$.
```

## Further help

- Siyavula Mathematics Grade 11, [5.1 Quadratic functions](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-01).
- Siyavula Mathematics Grade 11, [5.3 Hyperbolic functions](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-03).
