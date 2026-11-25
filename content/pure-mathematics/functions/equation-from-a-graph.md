---
title: Equation from a graph
youtube_query: Grade 11 finding the equation from a graph
subject: pure-mathematics
topic: Functions
part: Algebra
term: 2
subtopic: The hyperbola
order: 623
---

> **What you'll learn:** how to determine the equation of a hyperbola $y = \frac{a}{x + p} + q$ from dashed asymptotes, from its axes of symmetry, or from two points when one asymptote is unknown.
>
> **Prerequisites:** [Intercepts and sketching](/library/pure-mathematics/functions/intercepts-and-sketching).

## 1. Asymptotes give $p$ and $q$ immediately

A hyperbola $y = \frac{a}{x + p} + q$ has three unknowns: $a$, $p$, and $q$. Most graph questions hand you both asymptotes straight on the sketch—leaving only **$a$** to solve for using any point on the curve.

```rule
title: Reading p and q from a sketch
\text{Vertical asymptote } x = h \;\Longrightarrow\; p = -h \quad (\text{bracket } x - h)
\text{Horizontal asymptote } y = q \;\Longrightarrow\; q \text{ is read directly}
```

Watch the sign of $p$: if the vertical asymptote is at $x = +3$, the denominator must become zero at $x = 3$, so it is $(x - 3)$.

## 2. What if the asymptotes are hidden inside axes of symmetry?

```compare
title: Two ways exams give the asymptotes
left_title: Directly on the sketch
left:
Dashed lines labelled $x = -1$ and $y = 2$ give:
$$y = \frac{a}{x + 1} + 2$$
Plug in 1 point on the curve to find $a$.
right_title: Via the two axes of symmetry
right:
The two axes of symmetry **always cross at $(-p;\ q)$**!
Equate $x + c_{1} = -x + c_{2}$ to find the asymptote intersection $(-p;\ q)$ first.
```

```tryit
title: Quick check
prompt: A hyperbola has asymptotes $x = -4$ and $y = 2$, and passes through $(-2;\ 5)$. Find its equation.
hint: Write $y = \frac{a}{x + 4} + 2$ first, then substitute $x = -2$ and $y = 5$.
answer: $5 = \frac{a}{-2 + 4} + 2 \implies 3 = \frac{a}{2} \implies a = 6$. Equation: $y = \frac{6}{x + 4} + 2$.
```

## 3. Worked examples

```steps
title: Example 1 (Both asymptotes given): Asymptotes $x = 3$ and $y = -1$, passes through $(5;\ 2)$
Insert asymptotes into $y = \frac{a}{x + p} + q$ :: y = \frac{a}{x - 3} - 1
Substitute $(5;\ 2)$ :: 2 = \frac{a}{5 - 3} - 1
Solve for $a$ :: 3 = \frac{a}{2} \;\Longrightarrow\; a = 6
Write the equation :: f(x) = \frac{6}{x - 3} - 1
```

```steps
title: Example 2 (From axes of symmetry): Axes of symmetry are $y = x + 3$ and $y = -x + 1$, and $y$-intercept is $(0;\ -1)$
Asymptotes meet where the symmetry axes intersect :: x + 3 = -x + 1 \;\Longrightarrow\; 2x = -2 \;\Longrightarrow\; x = -1
Find $y$ at $x = -1$ :: y = -1 + 3 = 2 \;\Longrightarrow\; \text{asymptotes } x = -1,\ y = 2
Write template and substitute $(0;\ -1)$ :: -1 = \frac{a}{0 + 1} + 2 \;\Longrightarrow\; a = -3
Final equation :: g(x) = \frac{-3}{x + 1} + 2
```

```steps
title: Example 3 (Exam level — one asymptote unknown): Vertical asymptote $x = -2$, passes through $(0;\ 5)$ and $(2;\ 3)$
Use $x = -2$ to write the template :: y = \frac{a}{x + 2} + q
Substitute $(0;\ 5)$ :: 5 = \frac{a}{2} + q \quad (1)
Substitute $(2;\ 3)$ :: 3 = \frac{a}{4} + q \quad (2)
Subtract (2) from (1) to eliminate $q$ :: 2 = \frac{a}{2} - \frac{a}{4} = \frac{a}{4} \;\Longrightarrow\; a = 8
Find $q$ from (1) :: q = 5 - \frac{8}{2} = 1
Write final equation :: y = \frac{8}{x + 2} + 1
```

> **Common mistakes**
>
> - **Wrong denominator sign:** a vertical asymptote at $x = 3$ produces $(x - 3)$ in the denominator, NOT $(x + 3)$.
> - **Stopping at $a$:** always write out the complete final equation $f(x) = \ldots$
> - **Substituting an asymptote coordinate as a point on the curve:** points on the dashed asymptotes do NOT satisfy $y = \frac{a}{x + p} + q$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Find the equation of the hyperbola with asymptotes $x = 1$ and $y = 4$ that passes through $(3;\ 2)$.
A: $y = \frac{a}{x - 1} + 4$. Plug in $(3;\ 2)$: $2 = \frac{a}{2} + 4 \implies \frac{a}{2} = -2 \implies a = -4$. So $y = \frac{-4}{x - 1} + 4$.
---
Q: A hyperbola $f(x) = \frac{a}{x + p} + q$ has asymptotes $x = -3$ and $y = -2$, and $x$-intercept $(1;\ 0)$. Find $f(x)$.
A: $f(x) = \frac{a}{x + 3} - 2$. Plug in $(1;\ 0)$: $0 = \frac{a}{4} - 2 \implies a = 8$. So $f(x) = \frac{8}{x + 3} - 2$.
---
Q: The axes of symmetry of $g(x) = \frac{a}{x + p} + q$ are $y = x - 2$ and $y = -x + 4$, and $g(2) = 3$. Find $g(x)$.
A: Symmetry intersection: $x - 2 = -x + 4 \implies 2x = 6 \implies x = 3$, $y = 1$. So $g(x) = \frac{a}{x - 3} + 1$. Using $(2;\ 3)$: $3 = \frac{a}{-1} + 1 \implies a = -2$. Thus $g(x) = \frac{-2}{x - 3} + 1$.
---
Q: **(Exam level)** A hyperbola has horizontal asymptote $y = 3$ and passes through $(3;\ 5)$ and $(-1;\ 1)$. Find its equation.
A: $y = \frac{a}{x + p} + 3 \implies \frac{a}{3 + p} = 2$ and $\frac{a}{-1 + p} = -2$. Thus $a = 2(3 + p) = -2(p - 1) \implies 3 + p = -p + 1 \implies 2p = -2 \implies p = -1$, and $a = 2(3 - 1) = 4$. So $y = \frac{4}{x - 1} + 3$.
---
Q: Find the values of $a$ and $q$ if $y = \frac{a}{x - 1} + q$ passes through $(2;\ 7)$ and $(4;\ 3)$.
A: At $(2;\ 7)$: $a + q = 7$. At $(4;\ 3)$: $\frac{a}{3} + q = 3$. Subtracting: $\frac{2a}{3} = 4 \implies a = 6$, so $q = 1$. Equation: $y = \frac{6}{x - 1} + 1$.
```

## Further help

- Siyavula Mathematics Grade 11, [5.3 Hyperbolic functions](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-03).
