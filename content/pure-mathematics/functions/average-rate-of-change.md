---
title: Average rate of change
youtube_query: Grade 11 average gradient of a function
subject: pure-mathematics
topic: Functions
part: Algebra
term: 2
subtopic: Average gradient
order: 641
---

> **What you'll learn:** how to calculate and interpret the average gradient between two points on any curve, and how shrinking the gap between those points builds the idea of the gradient *at a single point*.
>
> **Prerequisites:** linear gradient $m = \frac{y_{2} - y_{1}}{x_{2} - x_{1}}$ and function notation $f(x)$.

## 1. Straight-line gradient applied to any curve

A straight line has the same gradient everywhere, while a curve bends continuously. To measure how steeply a curve rises or falls **on average** between $x = x_{1}$ and $x = x_{2}$, join the two points $(x_{1};\ f(x_{1}))$ and $(x_{2};\ f(x_{2}))$ with a straight **secant line** and find its gradient.

Click the $x_{2}$ values below to slide the second point toward $(1;\ 1)$ on $f(x) = x^{2}$ and watch the secant line steepness settle toward the tangent gradient:

```diagram
name: average-gradient-visual
```

```rule
title: Average gradient between x = a and x = b
\text{Average gradient} = \frac{f(b) - f(a)}{b - a} \qquad (b \neq a)
```

## 2. Reading the sign of average gradient

```compare
title: Positive vs negative vs zero average gradient
left_title: m_avg > 0 or m_avg < 0
left:
- **$m_{\text{avg}} > 0$:** $f(b) > f(a)$ (net rise from $a$ to $b$).
- **$m_{\text{avg}} < 0$:** $f(b) < f(a)$ (net drop from $a$ to $b$).
right_title: m_avg = 0 does NOT mean flat everywhere!
right:
If $f(a) = f(b)$, the secant line is horizontal so $m_{\text{avg}} = 0$—for instance across symmetric points on a parabola like $x = -2$ and $x = 2$ on $y = x^{2}$—even though the curve dipped and rose in between!
```

```tryit
title: Quick check
prompt: Calculate the average gradient of $f(x) = x^{2} - 3x$ between $x = 1$ and $x = 4$.
hint: Evaluate $f(1)$ and $f(4)$ first, then divide $f(4) - f(1)$ by $4 - 1$.
answer: $f(1) = 1 - 3 = -2$ and $f(4) = 16 - 12 = 4$. So $m_{\text{avg}} = \dfrac{4 - (-2)}{4 - 1} = \dfrac{6}{3} = 2$.
```

## 3. Worked examples

```steps
title: Example 1 (Parabola): Find the average gradient of $f(x) = x^{2} - 2x$ between $x = 1$ and $x = 4$
Evaluate $f(1)$ :: f(1) = 1^{2} - 2(1) = -1
Evaluate $f(4)$ :: f(4) = 4^{2} - 2(4) = 8
Apply $\dfrac{f(4) - f(1)}{4 - 1}$ :: \frac{8 - (-1)}{4 - 1} = \frac{9}{3} = 3
```

```steps
title: Example 2 (Hyperbola): Find the average gradient of $g(x) = \frac{6}{x}$ from $x = 1$ to $x = 3$
Evaluate $g(1)$ and $g(3)$ :: g(1) = \frac{6}{1} = 6,\qquad g(3) = \frac{6}{3} = 2
Compute rise over run :: \frac{g(3) - g(1)}{3 - 1} = \frac{2 - 6}{2} = -2
```

```steps
title: Example 3 (Exam level — algebraic interval approaching a point): Find the average gradient of $f(x) = x^{2}$ between $x = 2$ and $x = 2 + h$ ($h \neq 0$), and deduce the gradient at $x = 2$
Evaluate $f(2)$ and $f(2 + h)$ :: f(2) = 4,\qquad f(2 + h) = (2 + h)^{2} = 4 + 4h + h^{2}
Substitute into average gradient :: \frac{(4 + 4h + h^{2}) - 4}{(2 + h) - 2} = \frac{4h + h^{2}}{h}
Factor out $h$ and cancel ($h \neq 0$) :: \frac{h(4 + h)}{h} = 4 + h
Let $h \to 0$ (point approaches $x = 2$) :: \text{gradient at } x = 2 \text{ is } 4
```

> **Common mistakes**
>
> - **Reversing the subtraction order between top and bottom:** $\frac{f(b) - f(a)}{a - b}$ gives the opposite sign—keep $b$ first in **both** numerator and denominator.
> - **Forgetting brackets around a negative $f(a)$:** when $f(1) = -2$, $f(4) - f(1) = 4 - (-2) = 6$, not $4 - 2$.
> - **Cancelling $h$ before factoring** in $\frac{4h + h^{2}}{h}$ (which produces $4 + h^{2}$ instead of $4 + h$).

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Find the average gradient of $f(x) = 2x^{2} - 1$ between $x = -1$ and $x = 2$.
A: $f(-1) = 2(1) - 1 = 1$ and $f(2) = 2(4) - 1 = 7$. $m_{\text{avg}} = \dfrac{7 - 1}{2 - (-1)} = \dfrac{6}{3} = 2$.
---
Q: Find the average gradient of $g(x) = 2^{x}$ between $x = 0$ and $x = 3$.
A: $g(0) = 1$ and $g(3) = 8$. $m_{\text{avg}} = \dfrac{8 - 1}{3 - 0} = \dfrac{7}{3}$.
---
Q: Find the average gradient of $h(x) = -x^{2} + 4x$ on the interval $[1;\ 3]$.
A: $h(1) = 3$ and $h(3) = 3$. $m_{\text{avg}} = \dfrac{3 - 3}{3 - 1} = 0$.
---
Q: **(Exam level)** Determine the average gradient of $f(x) = 3x^{2} - 1$ between $x = 1$ and $x = 1 + h$ ($h \neq 0$), and hence state the gradient at $x = 1$.
A: $f(1) = 2$ and $f(1 + h) = 3(1 + 2h + h^{2}) - 1 = 2 + 6h + 3h^{2}$. So $\dfrac{(2 + 6h + 3h^{2}) - 2}{h} = \dfrac{h(6 + 3h)}{h} = 6 + 3h$. As $h \to 0$, the gradient at $x = 1$ is $6$.
```

## Further help

- Siyavula Mathematics Grade 11, [5.2 Average gradient](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-02).
