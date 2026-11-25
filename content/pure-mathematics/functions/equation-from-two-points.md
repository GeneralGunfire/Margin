---
title: Equation from two points
youtube_query: Grade 11 finding a function from two points
subject: pure-mathematics
topic: Functions
part: Algebra
term: 2
subtopic: The exponential function
order: 633
---

> **What you'll learn:** how to determine the equation of an exponential graph $y = a\cdot b^{x} + q$ or $y = b^{x + p} + q$ from its asymptote and given points, and why $b > 0$ rejects negative bases.
>
> **Prerequisites:** [Effect of the parameters](/library/pure-mathematics/functions/effect-of-the-parameters) and [Same-base method](/library/pure-mathematics/exponents-and-surds/same-base-method).

## 1. Lock in the asymptote $q$ first

Just like the hyperbola, the dashed horizontal asymptote on an exponential sketch hands you **$q$** immediately. Once $q$ is substituted, any remaining unknowns ($a$, $b$, or $p$) come from substituting the labelled points on the curve.

```rule
title: Solving exponential parameters (b > 0, b ≠ 1)
\text{1. Read asymptote } y = q \quad \text{2. Plug in } (0;\ y_{0}) \text{ if given } (b^{0} = 1) \quad \text{3. Plug in the second point to find } b \text{ or } p
```

## 2. Two common exam formats

```compare
title: Two ways exams give the unknown exponential equation
left_title: Template 1: y = a·bˣ + q
left:
Read $q$ from the asymptote.
Plug in the $y$-intercept $(0;\ y_0)$ first: since $b^{0} = 1$, $a = y_{0} - q$ drops out immediately!
Then plug in the second point to solve for $b$.
right_title: Template 2: y = b^(x + p) + q
right:
Read $q$ from the asymptote.
If $b$ is given, plug 1 point in and match bases to find $p$.
If both $b$ and $p$ are unknown, substitute 2 points and **divide** the two equations so $b^p$ cancels!
```

```tryit
title: Quick check
prompt: The graph of $f(x) = a\cdot b^{x} + 1$ passes through $(0;\ 4)$ and $(2;\ 28)$. Find $a$ and $b$.
hint: First substitute $(0;\ 4)$ using $b^{0} = 1$ to get $a$, then substitute $(2;\ 28)$.
answer: At $(0;\ 4)$: $4 = a\cdot b^{0} + 1 \implies a = 3$. At $(2;\ 28)$: $28 = 3b^{2} + 1 \implies 3b^{2} = 27 \implies b^{2} = 9 \implies b = 3$ (since $b > 0$). So $f(x) = 3\cdot 3^{x} + 1 = 3^{x + 1} + 1$.
```

## 3. Worked examples

```steps
title: Example 1 ($p = 0$, asymptote + 2 points): Asymptote $y = -2$, passes through $(0;\ 1)$ and $(2;\ 25)$ for $y = a\cdot b^{x} + q$
Read $q$ from the horizontal asymptote :: q = -2 \;\Longrightarrow\; y = a\cdot b^{x} - 2
Substitute $(0;\ 1)$ using $b^{0} = 1$ :: 1 = a(1) - 2 \;\Longrightarrow\; a = 3
Substitute $(2;\ 25)$ :: 25 = 3b^{2} - 2 \;\Longrightarrow\; 3b^{2} = 27 \;\Longrightarrow\; b^{2} = 9
Reject $b = -3$ because $b > 0$ :: b = 3 \;\Longrightarrow\; y = 3\cdot 3^{x} - 2
```

```steps
title: Example 2 (Finding $b$ when $a = 1$ and $p$ is given): $f(x) = b^{x + 1} - 3$ passes through $(1;\ 13)$
Substitute $(1;\ 13)$ :: 13 = b^{1 + 1} - 3
Isolate $b^{2}$ :: b^{2} = 16
Take positive root ($b > 0$) :: b = 4 \;\Longrightarrow\; f(x) = 4^{x + 1} - 3
```

```steps
title: Example 3 (Exam level — dividing two equations): $g(x) = b^{x + p} - 1$ passes through $(1;\ 3)$ and $(3;\ 63)$
Substitute $(1;\ 3)$ and isolate the power :: 3 = b^{1 + p} - 1 \;\Longrightarrow\; b^{1 + p} = 4 \quad (1)
Substitute $(3;\ 63)$ and isolate the power :: 63 = b^{3 + p} - 1 \;\Longrightarrow\; b^{3 + p} = 64 \quad (2)
Divide (2) by (1) so $b^{p}$ cancels :: \frac{b^{3 + p}}{b^{1 + p}} = \frac{64}{4} \;\Longrightarrow\; b^{2} = 16
Since $b > 0$ :: b = 4
Substitute $b = 4$ into (1) :: 4^{1 + p} = 4^{1} \;\Longrightarrow\; 1 + p = 1 \;\Longrightarrow\; p = 0
Write final equation :: g(x) = 4^{x} - 1
```

> **Common mistakes**
>
> - **Accepting $b = -3$ when solving $b^{2} = 9$:** for an exponential function, the base $b$ must always be **strictly positive** ($b > 0, b \neq 1$).
> - **Thinking $a\cdot b^{0}$ equals $0$:** any non-zero base to the power $0$ equals $1$, so $a\cdot b^{0} + q = a + q$.
> - **Dividing equations before moving $q$ across:** always isolate $b^{x + p}$ on one side before dividing equation (2) by equation (1).

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Determine the equation of $f(x) = a\cdot b^{x}$ passing through $(0;\ 2)$ and $(3;\ 54)$.
A: At $(0;\ 2)$: $2 = a\cdot b^{0} \implies a = 2$. At $(3;\ 54)$: $54 = 2b^{3} \implies b^{3} = 27 \implies b = 3$. So $f(x) = 2\cdot 3^{x}$.
---
Q: The graph of $g(x) = a\cdot b^{x} + q$ has horizontal asymptote $y = 4$, $y$-intercept $(0;\ 3)$, and passes through $(1;\ \frac{7}{2})$. Find $g(x)$.
A: $q = 4$. At $(0;\ 3)$: $3 = a + 4 \implies a = -1$. At $(1;\ \frac{7}{2})$: $\frac{7}{2} = -1\cdot b + 4 \implies b = \frac{1}{2}$. So $g(x) = -\left(\frac{1}{2}\right)^{x} + 4$.
---
Q: Given $h(x) = 2^{x + p} + q$ with horizontal asymptote $y = -8$ and $x$-intercept $(2;\ 0)$, find $p$ and $q$.
A: $q = -8$. At $(2;\ 0)$: $0 = 2^{2 + p} - 8 \implies 2^{2 + p} = 8 = 2^{3} \implies 2 + p = 3 \implies p = 1$. So $h(x) = 2^{x + 1} - 8$.
---
Q: **(Exam level)** An exponential curve $y = a\cdot b^{x} + 1$ passes through $(1;\ 7)$ and $(2;\ 19)$. Find $a$ and $b$.
A: $a\cdot b = 6$ (1) and $a\cdot b^{2} = 18$ (2). Dividing (2) by (1): $b = 3$. Substituting back into (1): $3a = 6 \implies a = 2$. So $y = 2\cdot 3^{x} + 1$.
```

## Further help

- Siyavula Mathematics Grade 11, [5.4 Exponential functions](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-04).
