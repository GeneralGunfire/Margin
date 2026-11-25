---
title: Intercepts and sketching
youtube_query: Grade 11 intercepts and sketching function graphs
subject: pure-mathematics
topic: Functions
part: Algebra
term: 2
subtopic: The hyperbola
order: 622
---

> **What you'll learn:** how to sketch any hyperbola $y = \frac{a}{x + p} + q$ accurately—including disguised algebraic fractions like $\frac{2x + 1}{x - 1}$—and read intervals such as $f(x) \leq 0$ directly from the sketch.
>
> **Prerequisites:** [Asymptotes and shape](/library/pure-mathematics/functions/asymptotes-and-shape).

## 1. Sketching a hyperbola in four clean steps

A table of random $x$-values is slow and can miss the vertical asymptote completely. Always build your hyperbola sketch around its boundary lines:

1. **Draw both asymptotes** as dashed lines: $x = -p$ and $y = q$.
2. **Check the sign of $a$** to know which two opposite corners hold the curves.
3. **Find the $y$-intercept** ($x = 0$, provided $p \neq 0$) and the **$x$-intercept** ($y = 0$, provided $q \neq 0$).
4. **Sketch smooth curves** through the intercepts, approaching—never touching or bending away from—the dashed asymptotes.

```rule
title: Intercepts of y = a/(x + p) + q
y\text{-intercept } (x = 0):\quad y = \frac{a}{p} + q \qquad (p \neq 0)
x\text{-intercept } (y = 0):\quad \frac{a}{x + p} = -q \;\Longrightarrow\; x = -\frac{a}{q} - p \qquad (q \neq 0)
```

## 2. Disguised hyperbolas like $y = \frac{2x + 1}{x - 1}$

Exams frequently write a hyperbola as a single fraction with $x$ in both numerator and denominator. Rewrite the numerator in terms of the denominator $(x - 1)$ before sketching:

```compare
title: Standard form vs single-fraction form
left_title: Already standard: a/(x + p) + q
left:
Read asymptotes straight away:
$$f(x) = \frac{3}{x - 1} + 2 \implies x = 1,\ y = 2$$
right_title: Single fraction: (mx + c)/(x + p)
right:
Split the numerator using multiples of $(x - 1)$:
$$\frac{2x + 1}{x - 1} = \frac{2(x - 1) + 3}{x - 1} = \frac{3}{x - 1} + 2$$
Now $a = 3$, $p = -1$, and $q = 2$!
```

```tryit
title: Quick check
prompt: Find the $x$- and $y$-intercepts of $f(x) = \frac{6}{x + 2} - 3$.
hint: Set $x = 0$ for the $y$-intercept, and solve $\frac{6}{x + 2} - 3 = 0$ for the $x$-intercept.
answer: $y$-intercept: $f(0) = \frac{6}{2} - 3 = 0$, so $(0;\ 0)$. $x$-intercept: $\frac{6}{x + 2} = 3 \implies x + 2 = 2 \implies x = 0$, so $(0;\ 0)$ is both intercepts!
```

## 3. Worked examples

```steps
title: Example 1 (Full sketch details): Find asymptotes and intercepts of $f(x) = \frac{6}{x + 1} - 2$
Asymptotes and quadrant check ($a = 6 > 0$) :: x = -1,\quad y = -2 \quad (\text{Q I and Q III relative to } (-1;\ -2))
$y$-intercept (set $x = 0$) :: y = \frac{6}{0 + 1} - 2 = 4 \;\Longrightarrow\; (0;\ 4)
$x$-intercept (set $y = 0$) :: \frac{6}{x + 1} = 2 \;\Longrightarrow\; 2(x + 1) = 6 \;\Longrightarrow\; x = 2 \;\Longrightarrow\; (2;\ 0)
Check the lower-left branch ($x = -4$ gives $y = -4$) :: \text{curve passes through } (-4;\ -4)
```

```steps
title: Example 2 (Negative $a$): Find all key features of $g(x) = \frac{-4}{x - 2} + 2$
Asymptotes ($a = -4 < 0 \implies$ Q II and Q IV) :: x = 2,\qquad y = 2
$y$-intercept ($x = 0$) :: y = \frac{-4}{-2} + 2 = 4 \;\Longrightarrow\; (0;\ 4)
$x$-intercept ($y = 0$) :: \frac{-4}{x - 2} = -2 \;\Longrightarrow\; x - 2 = 2 \;\Longrightarrow\; (4;\ 0)
```

```steps
title: Example 3 (Exam level — disguised fraction & inequality): Sketch $h(x) = \frac{2x + 1}{x - 1}$ and solve $h(x) \leq 0$
Rewrite numerator with $(x - 1)$ :: h(x) = \frac{2(x - 1) + 3}{x - 1} = \frac{3}{x - 1} + 2
Read asymptotes ($a = 3 > 0$) :: x = 1,\qquad y = 2
Find intercepts :: y\text{-int: } (0;\ -1),\qquad x\text{-int: } \left(-\frac{1}{2};\ 0\right)
Read where curve is on or below the $x$-axis ($h(x) \leq 0$) :: -\frac{1}{2} \leq x < 1
```

> **Common mistakes**
>
> - **Including the vertical asymptote in an inequality answer:** in $h(x) \leq 0$ above, $x = -\frac{1}{2}$ is included ($\leq$), but $x = 1$ is strictly excluded ($< 1$) because the graph is undefined there!
> - **Drawing the curve bending back away from an asymptote** or crossing the asymptote line.
> - **Only drawing one branch:** every hyperbola has **two** branches, one on each side of $x = -p$. Plot one guide point on the second branch if it has no intercepts.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Find the asymptotes and intercepts of $f(x) = \frac{8}{x - 2} - 4$.
A: Asymptotes: $x = 2$, $y = -4$. $y$-intercept: $\frac{8}{-2} - 4 = -8$, so $(0;\ -8)$. $x$-intercept: $\frac{8}{x - 2} = 4 \implies x - 2 = 2 \implies (4;\ 0)$.
---
Q: Find the asymptotes and intercepts of $g(x) = \frac{-3}{x + 3} + 1$.
A: Asymptotes: $x = -3$, $y = 1$. $y$-intercept: $(0;\ 0)$. $x$-intercept: $(0;\ 0)$. (Pick another point on the left branch, such as $(-6;\ 2)$, when sketching.)
---
Q: Rewrite $y = \frac{3x - 2}{x + 1}$ in the form $y = \frac{a}{x + p} + q$ and state its asymptotes.
A: $\frac{3(x + 1) - 5}{x + 1} = \frac{-5}{x + 1} + 3$. Asymptotes: $x = -1$ and $y = 3$.
---
Q: Given $f(x) = \frac{4}{x + 1} - 2$, determine the values of $x$ for which $f(x) > 0$.
A: $x$-intercept is at $\frac{4}{x + 1} = 2 \implies x = 1$. Since $a = 4 > 0$ and the asymptotes are $x = -1$ and $y = -2$, the branch lies above the $x$-axis strictly between $-1$ and $1$: $-1 < x < 1$.
---
Q: **(Exam level)** For $h(x) = \frac{-2}{x - 3} - 1$, find the intercepts and solve $h(x) \geq 0$.
A: Asymptotes: $x = 3$, $y = -1$. $y$-intercept: $\frac{-2}{-3} - 1 = -\frac{1}{3}$, so $(0;\ -\frac{1}{3})$. $x$-intercept: $\frac{-2}{x - 3} = 1 \implies x = 1$, so $(1;\ 0)$. The upper-left branch sits on or above the $x$-axis from $x = 1$ up to the asymptote: $1 \leq x < 3$.
```

## Further help

- Siyavula Mathematics Grade 11, [5.3 Hyperbolic functions](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-03).
