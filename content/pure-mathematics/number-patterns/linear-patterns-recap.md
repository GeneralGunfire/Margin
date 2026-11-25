---
title: Linear patterns recap
youtube_query: Grade 11 linear number patterns general term
subject: pure-mathematics
topic: Number patterns
part: Algebra
term: 4
subtopic: Linear patterns recap
order: 1101
---

> **What you'll learn:** how to recognise a **linear** (constant first-difference) sequence, find its general term $T_{n} = dn + c$, solve for unknown algebraic terms using equal differences, and why Paper 1 examines linear patterns both on their own and hidden inside the **first differences** of a quadratic sequence.
>
> **Prerequisites:** Grade 10 linear patterns and solving linear equations.

## 1. Why linear patterns still matter in Grade 11

Even though Grade 11 introduces quadratic patterns, every quadratic sequence hides a **linear sequence inside its first differences** ($\Delta_{1}$), and Paper 1 routinely starts the Number Patterns section with $9$–$13$ marks on linear sequences before moving to quadratic ones.

A sequence is **linear** when adding the same constant difference $d$ takes you from any term to the next:

```rule
title: General term of a linear sequence
d = T_{2} - T_{1} = T_{3} - T_{2} \quad (\text{constant first difference})
T_{n} = d n + c \qquad \text{where } c = T_{1} - d \text{ (the } 0\text{-th term } T_{0}\text{)}
```

Notice the quick shortcut: if you step **backwards once** from $T_{1}$ by subtracting $d$, you land on $c = T_{1} - d$—matching $y = mx + c$ with gradient $d$ and $y$-intercept $c$.

## 2. Linear vs quadratic at a glance

```compare
title: Checking the first differences
left_title: Constant first differences (Linear)
left:
Sequence: $7,\ 11,\ 15,\ 19,\ \dots$
First differences: $+4,\ +4,\ +4$.
Since $d = 4$ never changes, $T_{n} = 4n + (7 - 4) = 4n + 3$.
right_title: Linear first differences (Quadratic)
right:
Sequence: $4,\ 10,\ 18,\ 28,\ \dots$
First differences: $6,\ 8,\ 10,\ \dots$
Those first differences *themselves* form a linear sequence with constant step $+2$, general term $\Delta_{1,n} = 2n + 4$!
```

```tryit
title: Quick check
prompt: Find the general term $T_{n}$ and the $30$th term of the linear sequence $5,\ 12,\ 19,\ 26,\ \dots$
hint: Find $d = T_{2} - T_{1}$, then $c = T_{1} - d$, then substitute $n = 30$.
answer: $d = 12 - 5 = 7$ and $c = 5 - 7 = -2$, so $T_{n} = 7n - 2$. Therefore $T_{30} = 7(30) - 2 = 208$.
```

## 3. Worked examples

```steps
title: Example 1 (Find $T_{n}$, a specific term, and a position $n$): Given $7,\ 11,\ 15,\ 19,\ \dots$, determine (a) $T_{n}$, (b) $T_{25}$, and (c) which term equals $123$.
Find common difference $d$ and $c = T_{1} - d$ :: d = 11 - 7 = 4,\qquad c = 7 - 4 = 3
Write $T_{n} = dn + c$ :: T_{n} = 4n + 3
Substitute $n = 25$ :: T_{25} = 4(25) + 3 = 103
Set $T_{n} = 123$ and solve for $n$ :: 4n + 3 = 123 \implies 4n = 120 \implies n = 30 \quad (T_{30} = 123)
```

```steps
title: Example 2 (Unknown variable $x$): The first three terms of a linear sequence are $x - 1$, $2x + 1$, and $4x - 3$. Find $x$ and the numerical value of the first three terms.
Use constant first difference ($T_{2} - T_{1} = T_{3} - T_{2}$) :: (2x + 1) - (x - 1) = (4x - 3) - (2x + 1)
Simplify both sides carefully :: x + 2 = 2x - 4
Solve for $x$ :: x = 6
Substitute $x = 6$ to check constant difference :: T_{1} = 5,\quad T_{2} = 13,\quad T_{3} = 21 \qquad (d = 8)
```

```steps
title: Example 3 (Exam level — link to quadratic first differences): The first differences of a quadratic sequence form the linear pattern $4,\ 7,\ 10,\ 13,\ \dots$ Which two consecutive terms of the quadratic sequence differ by $91$?
Find the general term of the first-difference sequence :: d = 3,\qquad c = 4 - 3 = 1 \implies \Delta_{n} = 3n + 1
Notice $\Delta_{n} = T_{n+1} - T_{n}$, so set $\Delta_{n} = 91$ :: 3n + 1 = 91
Solve for $n$ :: 3n = 90 \implies n = 30
Identify the pair $T_{n}$ and $T_{n+1}$ :: T_{30}\text{ and } T_{31}\text{ differ by } 91
```

> **Common mistakes**
>
> - **Setting $c = T_{1}$ instead of $c = T_{1} - d$:** $T_{1}$ sits at $n = 1$, not $n = 0$—always test your formula with $n = 1$ and $n = 2$!
> - **Dropping brackets when subtracting $T_{1}$ in $T_{2} - T_{1}$:** write $(2x + 1) - (x - 1) = x + 2$, not $2x + 1 - x - 1 = x$.
> - **Forgetting which two terms correspond to $\Delta_{n}$:** the $n$-th first difference sits between $T_{n}$ and $T_{n+1}$ (so $\Delta_{1} = T_{2} - T_{1}$, and $\Delta_{30} = T_{31} - T_{30}$).

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: For the linear sequence $23,\ 19,\ 15,\ 11,\ \dots$, find **(a)** $T_{n}$, **(b)** $T_{20}$, and **(c)** the **first negative term** of the sequence.
A: **(a)** $d = -4$ and $c = 23 - (-4) = 27$, so $T_{n} = -4n + 27$. **(b)** $T_{20} = -4(20) + 27 = -53$. **(c)** Solve $-4n + 27 < 0 \implies n > 6{,}75$, so $n = 7$ gives the first negative term: $T_{7} = -4(7) + 27 = -1$.
---
Q: The first three terms of a linear sequence are $2k + 1$, $3k + 4$, and $5k - 2$. Calculate $k$ and state the common difference.
A: $(3k + 4) - (2k + 1) = (5k - 2) - (3k + 4) \implies k + 3 = 2k - 6 \implies k = 9$. The terms are $19,\ 31,\ 43$, so $d = 12$.
---
Q: Which term position $n$ has the **same value** in both linear sequences $5,\ 9,\ 13,\ \dots$ and $96,\ 93,\ 90,\ \dots$?
A: First sequence: $T_{n} = 4n + 1$. Second sequence: $T'_{n} = -3n + 99$. Set equal: $4n + 1 = -3n + 99 \implies 7n = 98 \implies n = 14$ (both give $57$).
---
Q: **(Exam level)** The first differences of a quadratic sequence are $6,\ 10,\ 14,\ \dots$ If the first term of the quadratic sequence is $T_{1} = 3$, find the difference between $T_{20}$ and $T_{21}$ (without finding the quadratic formula).
A: The $n$-th first difference is $d_{n} = T_{n+1} - T_{n}$ with $d = 4$ and $c = 6 - 4 = 2$, so $d_{n} = 4n + 2$. Between $T_{20}$ and $T_{21}$ sits $d_{20} = 4(20) + 2 = 82$.
```

## Further help

- Siyavula Mathematics Grade 11, [3.2 Quadratic sequences](https://www.siyavula.com/read/za/mathematics/grade-11/number-patterns/03-number-patterns-02).
