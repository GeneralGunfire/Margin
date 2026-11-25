---
title: Asymptotes and shape
youtube_query: Grade 11 hyperbola and exponential graph asymptotes
subject: pure-mathematics
topic: Functions
part: Algebra
term: 2
subtopic: The hyperbola
order: 621
---

> **What you'll learn:** why a hyperbola $y = \frac{a}{x + p} + q$ has two asymptotes that the curve can never cross, how $a$, $p$, and $q$ control the branches, and how to write its domain, range, and axes of symmetry.
>
> **Prerequisites:** Grade 10 hyperbolas $y = \frac{a}{x} + q$ and [Effect of a, p and q](/library/pure-mathematics/functions/effect-of-a-p-and-q).

## 1. Where the two asymptotes come from

Look at $y = \frac{a}{x + p} + q$ ($a \neq 0$). Plug in test values for $y = \frac{2}{x - 1} + 3$ to feel why the curve races away along two invisible boundary lines—called **asymptotes**:

- **Near $x = 1$ (vertical asymptote $x = -p$):** at $x = 1{,}01$, $y = \frac{2}{0{,}01} + 3 = 203$; at $x = 0{,}99$, $y = \frac{2}{-0{,}01} + 3 = -197$. Because dividing by $0$ is undefined, $x = 1$ can never be entered—the curve shoots toward $+\infty$ on one side and $-\infty$ on the other.
- **For huge $x$ (horizontal asymptote $y = q$):** at $x = 1\,001$, $y = \frac{2}{1\,000} + 3 = 3{,}002$. The fraction $\frac{2}{x - 1}$ shrinks toward $0$ without ever reaching $0$, so $y$ gets arbitrarily close to $3$ without ever equalling $3$.

Test $a$, $p$, and $q$ below and toggle the dashed **axes of symmetry** to see how they always cross at $(-p;\ q)$:

```diagram
name: hyperbola-explorer
```

```rule
title: Standard form of the hyperbola
y = \frac{a}{x + p} + q \qquad (a \neq 0)
\text{Asymptotes: } x = -p \quad\text{and}\quad y = q
\text{Domain: } x \in \mathbb{R},\ x \neq -p \qquad \text{Range: } y \in \mathbb{R},\ y \neq q
\text{Axes of symmetry: } y = (x + p) + q \quad\text{and}\quad y = -(x + p) + q
```

## 2. Sign of $a$: which quadrants hold the branches?

The asymptotes $x = -p$ and $y = q$ divide the plane into four new quadrants centred at $(-p;\ q)$:

```compare
title: How the sign of a places the two branches
left_title: a > 0 → Quadrants I and III (decreasing)
left:
Both branches curve **downward** from left to right:
- Top-right quadrant ($x > -p,\ y > q$)
- Bottom-left quadrant ($x < -p,\ y < q$)
right_title: a < 0 → Quadrants II and IV (increasing)
right:
Both branches curve **upward** from left to right:
- Top-left quadrant ($x < -p,\ y > q$)
- Bottom-right quadrant ($x > -p,\ y < q$)
```

```tryit
title: Quick check
prompt: For $f(x) = \frac{-4}{x + 2} + 3$, state **(a)** the equations of the two asymptotes, **(b)** the domain and range, and **(c)** the two axes of symmetry.
hint: Vertical asymptote sets $x + 2 = 0$; symmetry axes have gradients $+1$ and $-1$ and pass through $(-p;\ q)$.
answer: **(a)** $x = -2$ and $y = 3$. **(b)** Domain: $x \in \mathbb{R},\ x \neq -2$; Range: $y \in \mathbb{R},\ y \neq 3$. **(c)** $y = (x + 2) + 3 = x + 5$ and $y = -(x + 2) + 3 = -x + 1$.
```

## 3. Worked examples

```steps
title: Example 1 (Read all features): Describe $f(x) = \frac{4}{x - 2} + 1$
Vertical asymptote ($x - 2 = 0$) and horizontal asymptote :: x = 2,\qquad y = 1
Sign of $a = 4 > 0$ places branches relative to $(2;\ 1)$ :: \text{Quadrants I and III (top-right and bottom-left)}
Positive axis of symmetry through $(2;\ 1)$ :: y = (x - 2) + 1 = x - 1
Negative axis of symmetry through $(2;\ 1)$ :: y = -(x - 2) + 1 = -x + 3
```

```steps
title: Example 2 (Negative $a$ and increasing intervals): Describe $g(x) = \frac{-6}{x + 3} - 2$
Asymptotes :: x = -3,\qquad y = -2
Domain and range :: x \in \mathbb{R}\ (x \neq -3),\qquad y \in \mathbb{R}\ (y \neq -2)
Since $a = -6 < 0$, branches lie in Q II and Q IV :: \text{top-left and bottom-right of } (-3;\ -2)
Increasing or decreasing? :: g \text{ increases for all } x \neq -3
```

```steps
title: Example 3 (Exam level — shifts and reflections): $h(x) = \frac{2}{x}$ is shifted $3$ units left and $4$ units down to form $k(x)$. Find $k(x)$ and its axes of symmetry.
Shift $3$ units left ($x \to x + 3$) and $4$ units down ($-4$) :: k(x) = \frac{2}{x + 3} - 4
Intersection of asymptotes :: (-3;\ -4)
Positive axis of symmetry :: y = (x + 3) - 4 = x - 1
Negative axis of symmetry :: y = -(x + 3) - 4 = -x - 7
```

> **Common mistakes**
>
> - **Flipping the sign of $p$ on the vertical asymptote:** in $\frac{4}{x - 2}$, $x - 2 = 0$ gives $x = +2$, NOT $x = -2$.
> - **Memorising the symmetry axes blindly:** instead of memorising signs, just plug the asymptote centre $(-p;\ q)$ into $y = x + c$ and $y = -x + c$!
> - **Saying $y = \frac{4}{x - 2} + 1$ has domain $x \in \mathbb{R}$:** you must exclude the vertical asymptote ($x \neq 2$).

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: State the asymptotes, domain, and range of $f(x) = \frac{5}{x - 4} + 2$.
A: Asymptotes: $x = 4$ and $y = 2$. Domain: $x \in \mathbb{R},\ x \neq 4$. Range: $y \in \mathbb{R},\ y \neq 2$.
---
Q: Which quadrants (relative to the asymptotes) contain the branches of $g(x) = \frac{-3}{x + 1} - 5$?
A: Since $a = -3 < 0$, the branches lie in Quadrants II and IV relative to $(-1;\ -5)$ (top-left and bottom-right).
---
Q: Find the equations of the two axes of symmetry of $h(x) = \frac{8}{x + 4} - 1$.
A: Intersection of asymptotes is $(-4;\ -1)$. With gradient $1$: $y = (x + 4) - 1 = x + 3$. With gradient $-1$: $y = -(x + 4) - 1 = -x - 5$.
---
Q: Describe the horizontal and vertical shifts from $y = \frac{3}{x}$ to $y = \frac{3}{x - 5} + 4$.
A: Shifted $5$ units right and $4$ units up.
---
Q: **(Exam level)** If $f(x) = \frac{2}{x - 1} + 3$ is reflected across the $x$-axis to form $g(x)$, write down $g(x)$ and its new asymptotes.
A: Reflecting across the $x$-axis gives $g(x) = -f(x) = \frac{-2}{x - 1} - 3$. New asymptotes: $x = 1$ and $y = -3$.
```

## Further help

- Siyavula Mathematics Grade 11, [5.3 Hyperbolic functions](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-03).
