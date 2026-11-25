---
title: The general-term formula
youtube_query: Grade 11 quadratic sequence general term
subject: pure-mathematics
topic: Number patterns
part: Algebra
term: 4
subtopic: Quadratic sequences
order: 1112
---

> **What you'll learn:** how to handle reverse and exam-style problems on $T_{n} = an^{2} + bn + c$—solving for unknown terms inside a sequence, rebuilding $T_{n}$ when given only $T_{1}$ and the first-difference formula, and finding the **minimum** or **maximum** term of a quadratic sequence.
>
> **Prerequisites:** [Linear patterns recap](/library/pure-mathematics/number-patterns/linear-patterns-recap) and [Second differences](/library/pure-mathematics/number-patterns/second-differences).

## 1. Beyond "find $T_{n}$ from four numbers"

Once you know the top-down method ($2a = \Delta_{2}$, $3a + b = T_{2} - T_{1}$, $a + b + c = T_{1}$), Paper 1 examiners test whether you truly understand how the rows fit together—by hiding numbers inside the sequence, giving you the **first-difference formula** instead of the terms, or asking for the **smallest/largest** term.

```rule
title: Three key tools for exam problems on Tn = an^2 + bn + c
\text{Equal second differences:} \qquad (T_{3} - T_{2}) - (T_{2} - T_{1}) = (T_{4} - T_{3}) - (T_{3} - T_{2})
\text{Consecutive-term jump:} \qquad T_{n+1} - T_{n} = \Delta_{1,n} \text{ (the } n\text{-th first difference)}
\text{Turning point (min or max):} \qquad n_{\text{tp}} = -\frac{b}{2a} \text{ (round to nearest } n \in \mathbb{N}\text{)}
```

## 2. Finding the minimum or maximum term

Because $T_{n} = an^{2} + bn + c$ is simply a parabola evaluated only at whole numbers $n \in \{1, 2, 3, \dots\}$, its smallest ($a > 0$) or largest ($a < 0$) term sits at the integer $n$ closest to the parabola's axis of symmetry $n = -\frac{b}{2a}$.

```compare
title: When the turning point isn't a whole number
left_title: Exact integer n_tp
left:
Suppose $T_{n} = -n^{2} + 12n - 20$.
$$n_{\text{tp}} = -\frac{12}{2(-1)} = 6$$
Since $6 \in \mathbb{N}$ and $a < 0$, the **maximum term** is $T_{6} = 16$.
right_title: Fractional n_tp
right:
Suppose $T_{n} = 2n^{2} - 15n + 30$.
$$n_{\text{tp}} = -\frac{-15}{2(2)} = 3{,}75$$
Round to the nearest positive integer $n = 4$:
check $T_{3} = 3$ vs $T_{4} = 2$, so the **minimum term** is $T_{4} = 2$.
```

```tryit
title: Quick check
prompt: The first three terms of a quadratic sequence are $3,\ x,\ 13,\ \dots$ and its constant second difference is $4$. Find $x$.
hint: First differences are $x - 3$ and $13 - x$. Subtract them and set equal to $\Delta_{2} = 4$.
answer: $(13 - x) - (x - 3) = 4 \implies 16 - 2x = 4 \implies 2x = 12 \implies x = 6$. (Check: sequence $3, 6, 13$ has first differences $3, 7$, second difference $4$.)
```

## 3. Worked examples

```steps
title: Example 1 (Solve for two unknowns $x$ and $y$): The quadratic sequence $3,\ x,\ 13,\ y$ has a constant second difference of $4$. Find $x$, $y$, and $T_{n}$.
Write first differences in terms of $x$ and $y$ :: \Delta_{1}: \quad (x - 3),\quad (13 - x),\quad (y - 13)
Equate the first second-difference to $4$ :: (13 - x) - (x - 3) = 4 \implies 16 - 2x = 4 \implies x = 6
Now $\Delta_{1}$ starts with $6 - 3 = 3$ and $13 - 6 = 7$, so the third jump is $7 + 4 = 11$ :: y - 13 = 11 \implies y = 24
Find $T_{n}$ from $2a = 4$, $3a + b = 3$, $a + b + c = 3$ :: a = 2,\quad b = -3,\quad c = 4 \implies T_{n} = 2n^{2} - 3n + 4
```

```steps
title: Example 2 (Reconstruct $T_{n}$ from the first-difference formula): The $n$-th first difference of a quadratic sequence is $d_{n} = 2n + 3$, and $T_{1} = 4$. Determine $T_{n}$.
Generate the first three differences ($n = 1, 2, 3$) :: d_{1} = 5,\quad d_{2} = 7,\quad d_{3} = 9
Build the first terms starting from $T_{1} = 4$ :: T_{1} = 4,\quad T_{2} = 4 + 5 = 9,\quad T_{3} = 9 + 7 = 16
Solve $2a = 2$, $3a + b = 5$, $a + b + c = 4$ :: a = 1,\quad b = 2,\quad c = 1
Write the general term :: T_{n} = n^{2} + 2n + 1 = (n + 1)^{2}
```

```steps
title: Example 3 (Exam level — minimum term and negative-term inequality): Given $T_{n} = 2n^{2} - 15n + 30$, find (a) which term has the minimum value, and (b) the minimum value.
Find the parabola's axis of symmetry $n = -\frac{b}{2a}$ :: n_{\text{tp}} = -\frac{-15}{2(2)} = \frac{15}{4} = 3{,}75
Since $a = 2 > 0$, test the nearest whole numbers $n = 3$ and $n = 4$ :: T_{3} = 2(9) - 45 + 30 = 3,\qquad T_{4} = 2(16) - 60 + 30 = 2
State both answers clearly :: \text{Minimum occurs at } T_{4}\text{, with minimum value } 2
```

> **Common mistakes**
>
> - **Substituting $n = 3{,}75$ directly into $T_{n}$ as the minimum term:** a sequence only exists at whole-number positions $n = 1, 2, 3, \dots$—always evaluate at the nearest positive integer $n$!
> - **Assuming $n_{\text{tp}} = -\frac{b}{2a}$ gives a minimum even when $a < 0$:** when $a < 0$, the parabola opens downwards, so the vertex gives a **maximum** term.
> - **Confusing the $n$-th first difference $d_{n}$ with $T_{n}$:** $d_{n} = T_{n+1} - T_{n}$ is the jump *added* to $T_{n}$ to reach $T_{n+1}$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: The $n$-th first difference of a quadratic sequence is given by $d_{n} = 4n - 1$. If $T_{1} = 5$, determine the general term $T_{n}$.
A: First differences are $d_{1} = 3$, $d_{2} = 7$, $d_{3} = 11$, so $\Delta_{2} = 4$. Thus $2a = 4 \implies a = 2$; $3(2) + b = 3 \implies b = -3$; $2 - 3 + c = 5 \implies c = 6$. Therefore $T_{n} = 2n^{2} - 3n + 6$.
---
Q: The first four terms of a quadratic sequence are $4,\ p,\ 18,\ 31$. Determine the value of $p$.
A: First differences are $p - 4$, $18 - p$, and $13$. Equal second differences give $(18 - p) - (p - 4) = 13 - (18 - p) \implies 22 - 2p = p - 5 \implies 27 = 3p \implies p = 9$.
---
Q: Consider the sequence $T_{n} = -n^{2} + 12n - 20$. **(a)** Which term is the maximum, and what is its value? **(b)** How many terms of this sequence are **strictly positive** ($T_{n} > 0$)?
A: **(a)** $n_{\text{tp}} = -\frac{12}{2(-1)} = 6$. Since $a = -1 < 0$, $T_{6} = -(6)^{2} + 12(6) - 20 = 16$ is the maximum term. **(b)** Solve $-n^{2} + 12n - 20 > 0 \implies (n - 2)(n - 10) < 0 \implies 2 < n < 10$. The integer positions are $n \in \{3, 4, 5, 6, 7, 8, 9\}$, which is $7$ terms.
---
Q: **(Exam level)** In a quadratic sequence, $T_{2} = 7$, $T_{3} = 14$, and the constant second difference is $3$. Determine $T_{1}$ and the general term $T_{n}$.
A: $T_{3} - T_{2} = 14 - 7 = 7$. Since $\Delta_{2} = 3$, the earlier first difference is $T_{2} - T_{1} = 7 - 3 = 4$, so $T_{1} = 7 - 4 = 3$. Then $2a = 3 \implies a = \frac{3}{2}$, $3\left(\frac{3}{2}\right) + b = 4 \implies b = -\frac{1}{2}$, and $\frac{3}{2} - \frac{1}{2} + c = 3 \implies c = 2$, giving $T_{n} = \frac{3}{2}n^{2} - \frac{1}{2}n + 2$.
```

## Further help

- Siyavula Mathematics Grade 11, [3.2 Quadratic sequences](https://www.siyavula.com/read/za/mathematics/grade-11/number-patterns/03-number-patterns-02).
