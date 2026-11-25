---
title: Second differences
youtube_query: Grade 11 quadratic number patterns second difference
subject: pure-mathematics
topic: Number patterns
part: Algebra
term: 4
subtopic: Quadratic sequences
order: 1111
status: live
pages: ["Textbook p. 180-195"]
---

> **What you'll learn:** *why* a constant second difference means a pattern is quadratic, how $2a$, $3a+b$, and $a+b+c$ fall straight out of plugging $n = 1, 2, 3$ into $T_n = an^2 + bn + c$, and how to find any term or term position.
>
> **Prerequisites:** linear sequences ($T_n = dn + c$) from Grade 10, and solving simple quadratic equations.

## 1. Linear vs quadratic sequences

In a Grade 10 **linear** sequence, you add the same number at every step—the **first difference** ($\Delta_1$) is constant.

In a **quadratic** sequence, the steps themselves grow (or shrink) by a constant amount each time—so the **second difference** ($\Delta_2$) is constant and non-zero:

```diagram
name: difference-pyramid
```

```compare
title: Spot the difference between linear and quadratic
left_title: Linear sequence
left:
Sequence: $3,\ 7,\ 11,\ 15,\ \dots$
First differences: $4,\ 4,\ 4$ (constant)
General term: $T_n = 4n - 1$ (degree $1$).
right_title: Quadratic sequence
right:
Sequence: $4,\ 10,\ 18,\ 28,\ \dots$
First differences: $6,\ 8,\ 10$ (arithmetic!)
Second differences: $2,\ 2$ (constant)
General term: $T_n = n^2 + 3n$ (degree $2$).
```

```tryit
title: Quick check
prompt: For the sequence $2,\ 7,\ 14,\ 23,\ \dots$, find **(a)** the constant second difference and **(b)** the next two terms.
hint: Subtract consecutive terms to get the first differences ($7-2, 14-7, 23-14$), then subtract those to get $\Delta_2$.
answer: **(a)** First differences are $5,\ 7,\ 9$, so the second difference is $2$. **(b)** Next first differences are $11$ and $13$, giving $23 + 11 = 34$ and $34 + 13 = 47$.
```

## 2. Why $2a$, $3a+b$, and $a+b+c$ work

Instead of memorising three random formulas, plug $n = 1, 2, 3$ into $T_n = an^2 + bn + c$:

- $T_1 = a(1)^2 + b(1) + c = a + b + c$
- $T_2 = a(2)^2 + b(2) + c = 4a + 2b + c$
- $T_3 = a(3)^2 + b(3) + c = 9a + 3b + c$

Now subtract downwards:
- First difference $T_2 - T_1 = (4a+2b+c) - (a+b+c) = \mathbf{3a + b}$
- Next first difference $T_3 - T_2 = (9a+3b+c) - (4a+2b+c) = \mathbf{5a + b}$
- Second difference $= (5a + b) - (3a + b) = \mathbf{2a}$

```rule
title: Finding Tn = an^2 + bn + c (work top-down from 2a)
2a = \text{constant second difference } (\Delta_2)
3a + b = T_2 - T_1 \text{ (first term of } \Delta_1\text{)}
a + b + c = T_1 \text{ (first term of the sequence)}
```

Always solve for **$a$ first**, substitute $a$ to get **$b$**, then substitute $a$ and $b$ to get **$c$**.

```tryit
title: Try it first
prompt: Find $T_n$ for the sequence $2,\ 7,\ 14,\ 23,\ \dots$ (whose first difference starts at $5$ and second difference is $2$).
hint: Use $2a = 2$, then $3a + b = 5$, then $a + b + c = 2$.
answer: $2a = 2 \implies a = 1$. Then $3(1) + b = 5 \implies b = 2$. Finally $1 + 2 + c = 2 \implies c = -1$. So $T_n = n^2 + 2n - 1$.
```

## 3. Worked examples

```steps
title: Example 1: Find $T_n$ and the $20$th term for $5,\ 12,\ 21,\ 32,\ \dots$
Find first differences $\Delta_1$ :: 12-5=7,\quad 21-12=9,\quad 32-21=11
Find second difference $\Delta_2$ :: 9-7=2,\quad 11-9=2 \implies \Delta_2 = 2
Solve $2a = \Delta_2$ :: 2a = 2 \implies a = 1
Solve $3a + b = T_2 - T_1$ :: 3(1) + b = 7 \implies b = 4
Solve $a + b + c = T_1$ :: 1 + 4 + c = 5 \implies c = 0 \implies T_n = n^2 + 4n
Substitute $n = 20$ :: T_{20} = 20^2 + 4(20) = 480
```

```steps
title: Example 2 (Exam level): Which term in $T_n = n^2 + 4n$ equals $300$?
Set $T_n = 300$ and rearrange to zero :: n^2 + 4n = 300 \;\Longrightarrow\; n^2 + 4n - 300 = 0
Factorise :: (n + 20)(n - 15) = 0
State both roots :: n = -20 \quad\text{or}\quad n = 15
Term position $n$ must be a positive integer ($n \in \mathbb{N}$) :: \text{Reject } n = -20 \;\Longrightarrow\; T_{15} = 300
```

> **Common mistakes**
>
> - **Setting $a = \Delta_2$ instead of $2a = \Delta_2$:** always divide the second difference by $2$.
> - **Using the wrong first difference in $3a + b$:** use $T_2 - T_1$ (the *very first* jump), not a later one.
> - **Accepting negative or fractional $n$:** $n$ counts position in the sequence ($1, 2, 3, \dots$), so reject $n \leq 0$ or non-integers.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Given $T_n = 2n^2 - 3n + 1$, write down the first four terms and state the constant second difference.
A: $T_1 = 0$, $T_2 = 3$, $T_3 = 10$, $T_4 = 21$. First differences are $3, 7, 11$, so $\Delta_2 = 4$ (matching $2a = 2(2) = 4$).
---
Q: Find the general term $T_n$ of the quadratic sequence $3,\ 9,\ 19,\ 33,\ \dots$
A: $\Delta_1$: $6, 10, 14$. $\Delta_2 = 4 \implies 2a = 4 \implies a = 2$. Then $3(2) + b = 6 \implies b = 0$, and $2 + 0 + c = 3 \implies c = 1$. Thus $T_n = 2n^2 + 1$.
---
Q: Find $T_n$ and $T_{50}$ for $2,\ 7,\ 14,\ 23,\ \dots$
A: $T_n = n^2 + 2n - 1$. For $n = 50$: $T_{50} = 50^2 + 2(50) - 1 = 2599$.
---
Q: The first four terms of a quadratic sequence are $2,\ 7,\ 15,\ x$. Find $x$.
A: First differences are $5,\ 8,\ x - 15$. Constant second difference: $8 - 5 = 3$, so $(x - 15) - 8 = 3 \implies x = 26$.
---
Q: **(Exam level)** Given the quadratic sequence $1,\ 6,\ 15,\ 28,\ \dots$, find which term equals $190$.
A: $\Delta_1 = 5, 9, 13$ and $\Delta_2 = 4 \implies a = 2$. Then $3(2)+b=5 \implies b=-1$, and $2-1+c=1 \implies c=0$, so $T_n = 2n^2 - n$. Set $2n^2 - n = 190 \implies 2n^2 - n - 190 = 0 \implies (2n + 19)(n - 10) = 0$. Since $n \in \mathbb{N}$, $n = 10$ ($T_{10} = 190$).
```

## Further help

- Siyavula Mathematics Grade 11, [3.2 Quadratic sequences](https://www.siyavula.com/read/za/mathematics/grade-11/number-patterns/03-number-patterns-02).
