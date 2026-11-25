---
title: Effect of the parameters
youtube_query: Grade 11 function transformations parameters a p and q
subject: pure-mathematics
topic: Functions
part: Algebra
term: 2
subtopic: The exponential function
order: 632
---

> **What you'll learn:** how $a$, $p$, and $q$ shift, stretch, and reflect an exponential graph, how to sketch $y = a\cdot b^{x + p} + q$ with intercepts and anchor points, and why horizontal shifts also act like vertical stretches.
>
> **Prerequisites:** [Shape and asymptote](/library/pure-mathematics/functions/shape-and-asymptote).

## 1. Shifting vs stretching an exponential curve

In $y = a\cdot b^{x + p} + q$:

- **$p$** shifts the graph horizontally: $p > 0$ shifts **$p$ units left** (so the exponent equals $0$ at $x = -p$); $p < 0$ shifts **$|p|$ units right**.
- **$q$** shifts the graph and its horizontal asymptote $y = q$ vertically up or down.
- **$a$** scales the vertical distance from the asymptote and reflects the curve across $y = q$ if $a < 0$.

Notice a unique algebraic property of exponentials: $b^{x + p} = b^{p}\cdot b^{x}$. That means shifting an exponential horizontally by $p$ produces the exact same curve as multiplying $a$ by $b^{p}$!

```compare
title: Sketching intercepts vs no x-intercept
left_title: Crosses the x-axis (a and q opposite signs)
left:
Example: $f(x) = 2^{x + 1} - 4$ ($a = 1 > 0$, $q = -4 < 0$).
Setting $y = 0$ gives $2^{x + 1} = 4 = 2^{2} \implies x = 1$.
Has **both** a $y$-intercept and an $x$-intercept.
right_title: Never crosses the x-axis (same sign or q = 0)
right:
Example: $g(x) = 2^{x + 1} + 3$ ($a > 0$, $q > 0$).
Minimum region is $y > 3$, so $g(x) = 0$ has **no solution**.
Plot the $y$-intercept plus an **anchor point** where $x + p = 0$ or $1$.
```

## 2. Reflections across the $x$-axis and $y$-axis

```rule
title: Reflections of f(x) = a·b^(x + p) + q
\text{Reflect across } x\text{-axis: } y = -f(x) \quad (\text{negates both } a \text{ and } q)
\text{Reflect across } y\text{-axis: } y = f(-x) \quad (\text{replaces } x \text{ by } -x,\ \text{inverting base } b \to \tfrac{1}{b})
```

```tryit
title: Quick check
prompt: If $f(x) = 2^{x} - 3$ is **(a)** shifted $2$ units right and $5$ units up, and **(b)** reflected across the $y$-axis, write the two new equations.
hint: Right by $2$ replaces $x$ with $x - 2$; reflecting across the $y$-axis replaces $x$ with $-x$.
answer: **(a)** $g(x) = 2^{x - 2} - 3 + 5 = 2^{x - 2} + 2$. **(b)** $h(x) = f(-x) = 2^{-x} - 3 = \left(\frac{1}{2}\right)^{x} - 3$.
```

## 3. Worked examples

```steps
title: Example 1 (Full sketch details): Find asymptote, intercepts, and anchor point for $f(x) = 2^{x + 1} - 4$
Horizontal asymptote :: y = -4
$y$-intercept ($x = 0$) :: f(0) = 2^{1} - 4 = -2 \;\Longrightarrow\; (0;\ -2)
$x$-intercept ($y = 0$) :: 2^{x + 1} = 4 = 2^{2} \;\Longrightarrow\; x + 1 = 2 \;\Longrightarrow\; (1;\ 0)
Range ($a = 1 > 0$) and trend ($b = 2 > 1$) :: y > -4,\quad \text{increasing}
```

```steps
title: Example 2 (Negative $a$ and no $x$-intercept? Check!): Sketch features of $g(x) = -2\cdot 3^{x - 1} + 6$
Horizontal asymptote :: y = 6
$y$-intercept ($x = 0$) :: g(0) = -2\cdot 3^{-1} + 6 = -\frac{2}{3} + 6 = 5\frac{1}{3} \;\Longrightarrow\; \left(0;\ \frac{16}{3}\right)
$x$-intercept ($y = 0$) :: -2\cdot 3^{x - 1} + 6 = 0 \;\Longrightarrow\; 3^{x - 1} = 3^{1} \;\Longrightarrow\; (2;\ 0)
Anchor point where exponent is $0$ ($x = 1$) :: g(1) = -2(1) + 6 = 4 \;\Longrightarrow\; (1;\ 4)
```

```steps
title: Example 3 (Exam level — transformations): Describe the shift from $f(x) = \left(\frac{1}{2}\right)^{x}$ to $h(x) = 4\cdot \left(\frac{1}{2}\right)^{x} + 1$
Write $4$ as a power of $\frac{1}{2}$ :: 4 = \left(\frac{1}{2}\right)^{-2}
Combine into one power :: h(x) = \left(\frac{1}{2}\right)^{x - 2} + 1
Read off horizontal and vertical shifts :: \text{shifted } 2 \text{ units right and } 1 \text{ unit up}
```

> **Common mistakes**
>
> - **Forgetting to negate $q$ when reflecting across the $x$-axis:** reflecting $y = 2^{x} - 3$ across the $x$-axis gives $y = -2^{x} + 3$, NOT $y = -2^{x} - 3$.
> - **Adding $a$ and $b$ together:** $2\cdot 3^{x}$ is NOT $6^{x}$—exponents come before multiplication!
> - **Setting $y$-intercept equal to $a + q$ when $p \neq 0$:** always substitute $x = 0$ carefully, because $a\cdot b^{0 + p} + q = a\cdot b^{p} + q$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Find the asymptote and intercepts of $f(x) = 3^{x - 1} - 9$.
A: Asymptote: $y = -9$. $y$-intercept: $3^{-1} - 9 = \frac{1}{3} - 9 = -8\frac{2}{3}$. $x$-intercept: $3^{x - 1} = 9 = 3^{2} \implies x = 3$, so $(3;\ 0)$.
---
Q: Find the asymptote, $y$-intercept, and range of $g(x) = \left(\frac{1}{2}\right)^{x + 1} + 2$. Does it have an $x$-intercept?
A: Asymptote: $y = 2$. $y$-intercept: $\frac{1}{2} + 2 = 2{,}5$. Range: $y > 2$. Since $y > 2$ always, it has no $x$-intercept.
---
Q: Write the equation of $h(x)$ if $f(x) = 2^{x + 1} - 5$ is reflected across the $x$-axis.
A: $h(x) = -f(x) = -2^{x + 1} + 5$.
---
Q: Write the equation of $k(x)$ if $f(x) = 3\cdot 2^{x} - 1$ is reflected across the $y$-axis and then shifted $4$ units up.
A: Reflecting across $y$-axis: $3\cdot 2^{-x} - 1 = 3\cdot \left(\frac{1}{2}\right)^{x} - 1$. Shifting $4$ units up: $k(x) = 3\cdot \left(\frac{1}{2}\right)^{x} + 3$.
---
Q: **(Exam level)** Express $g(x) = 9\cdot 3^{x} - 4$ in the form $3^{x + p} + q$ and state the horizontal shift from $y = 3^{x}$.
A: $9\cdot 3^{x} - 4 = 3^{2}\cdot 3^{x} - 4 = 3^{x + 2} - 4$. It is shifted $2$ units left (and $4$ units down).
```

## Further help

- Siyavula Mathematics Grade 11, [5.4 Exponential functions](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-04).
