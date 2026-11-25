---
title: Shape and asymptote
youtube_query: Grade 11 shape and asymptote of function graphs
subject: pure-mathematics
topic: Functions
part: Algebra
term: 2
subtopic: The exponential function
order: 631
---

> **What you'll learn:** why an exponential function $y = a\cdot b^{x + p} + q$ has a single horizontal asymptote $y = q$, why $b$ must satisfy $b > 0$ and $b \neq 1$, and how $b$ and $a$ control growth, decay, and range.
>
> **Prerequisites:** Grade 10 exponential graphs $y = a\cdot b^{x} + q$ and [Exponent laws with fractions](/library/pure-mathematics/exponents-and-surds/exponent-laws-with-fractions).

## 1. Why the curve flattens out at $y = q$

In $y = a\cdot b^{x + p} + q$, we require $b > 0$ and $b \neq 1$ (if $b \leq 0$, fractional exponents like $b^{1/2}$ are undefined or non-real; if $b = 1$, $y = a + q$ is just a flat horizontal line).

Because any positive base raised to any real power is **strictly positive** ($b^{x + p} > 0$ forever), the term $a\cdot b^{x + p}$ can approach $0$ as closely as you like, **but can never reach $0$**. That creates one horizontal asymptote at **$y = q$**—and **no** vertical asymptote.

Explore $a$, $b$, $p$, and $q$ interactively below:

```diagram
name: exponential-explorer
```

```rule
title: Standard exponential function (b > 0, b ≠ 1)
y = a\cdot b^{x + p} + q
\text{Horizontal asymptote: } y = q \qquad \text{Domain: } x \in \mathbb{R}
\text{Range: } y > q \text{ if } a > 0 \quad\text{or}\quad y < q \text{ if } a < 0
```

## 2. Growth vs decay: check both $b$ and $a$

```compare
title: Four possible shapes depending on a and b
left_title: When a > 0 (lies ABOVE y = q)
left:
- **$b > 1$:** strictly **increasing** (rises sharply to the right, approaches $y = q$ on the left).
- **$0 < b < 1$:** strictly **decreasing** (falls from left to right, approaches $y = q$ on the right).
right_title: When a < 0 (lies BELOW y = q)
right:
Multiplying by negative $a$ reflects the curve upside down across $y = q$:
- **$b > 1$:** strictly **decreasing** (drops steeply to the right).
- **$0 < b < 1$:** strictly **increasing** (rises toward $y = q$ on the right).
```

```tryit
title: Quick check
prompt: For $f(x) = -\left(\frac{1}{2}\right)^{x} + 4$, state **(a)** the horizontal asymptote, **(b)** the domain and range, and **(c)** whether $f$ is increasing or decreasing.
hint: Here $a = -1 < 0$, $b = \frac{1}{2} \in (0;\ 1)$, and $q = 4$.
answer: **(a)** $y = 4$. **(b)** Domain: $x \in \mathbb{R}$; Range: $y < 4$. **(c)** Reflecting a decreasing curve across the $x$-axis makes it **increasing** (approaching $y = 4$ from below as $x \to \infty$).
```

## 3. Worked examples

```steps
title: Example 1 (Standard growth): Describe $f(x) = 3^{x - 1} - 9$
Identify $a$, $b$, $p$, $q$ :: a = 1 > 0,\quad b = 3 > 1,\quad q = -9
Horizontal asymptote :: y = -9
Domain and range (since $a > 0$, strictly above $-9$) :: \text{Domain: } x \in \mathbb{R},\quad \text{Range: } y > -9
Trend :: \text{increasing everywhere}
```

```steps
title: Example 2 (Fractional base and negative $a$): Describe $g(x) = -2\cdot \left(\frac{1}{3}\right)^{x} + 2$
Identify parameters :: a = -2 < 0,\quad b = \frac{1}{3},\quad q = 2
Horizontal asymptote :: y = 2
Range (since $a < 0$, curve stays below $y = 2$) :: y < 2 \quad (\text{never } y \leq 2!)
Find $y$-intercept ($x = 0$) :: g(0) = -2(1) + 2 = 0 \;\Longrightarrow\; (0;\ 0)
```

```steps
title: Example 3 (Exam level — negative exponent trick): Write $h(x) = 2^{3 - x} + 1$ in standard form and find its asymptote and trend
Rewrite $2^{3 - x}$ using exponent laws :: 2^{3}\cdot 2^{-x} = 8\cdot \left(\frac{1}{2}\right)^{x}
Full standard form :: h(x) = 8\cdot \left(\frac{1}{2}\right)^{x} + 1
Read asymptote, range, and trend ($a = 8 > 0,\ 0 < b < 1$) :: \text{Asymptote } y = 1,\quad \text{Range } y > 1,\quad \text{decreasing}
```

> **Common mistakes**
>
> - **Writing $y \geq q$ in the range:** an exponential curve never touches its asymptote $y = q$, so the range is always strict ($y > q$ or $y < q$).
> - **Claiming an exponential graph has a vertical asymptote:** its domain is $x \in \mathbb{R}$—the curve keeps going left and right forever.
> - **Treating $2^{-x}$ as growth because the base $2 > 1$:** $2^{-x} = \left(\frac{1}{2}\right)^{x}$, which has effective base $\frac{1}{2} \in (0;\ 1)$ and **decreases**.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: State the horizontal asymptote, domain, and range of $f(x) = 2\cdot 4^{x} - 5$.
A: Asymptote: $y = -5$. Domain: $x \in \mathbb{R}$. Range: $y > -5$.
---
Q: State the horizontal asymptote and range of $g(x) = -3^{x + 2} + 1$.
A: Asymptote: $y = 1$. Since $a = -1 < 0$, the range is $y < 1$.
---
Q: Is $h(x) = 5\cdot (0{,}4)^{x - 1} + 2$ increasing or decreasing? Explain briefly.
A: Decreasing, because $a = 5 > 0$ and $0 < 0{,}4 < 1$.
---
Q: **(Exam level)** Rewrite $k(x) = 3^{-x + 2} - 4$ in the form $a\cdot b^{x} + q$ and state its $y$-intercept and range.
A: $k(x) = 3^{2}\cdot 3^{-x} - 4 = 9\cdot \left(\frac{1}{3}\right)^{x} - 4$. $y$-intercept: $9(1) - 4 = 5$, so $(0;\ 5)$. Range: $y > -4$.
```

## Further help

- Siyavula Mathematics Grade 11, [5.4 Exponential functions](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-04).
