---
title: Problems and contexts
youtube_query: Grade 11 number patterns word problems
subject: pure-mathematics
topic: Number patterns
part: Algebra
term: 4
subtopic: Quadratic sequences
order: 1113
---

> **What you'll learn:** how to translate visual dot grids, tile patterns, matchstick figures, and league-fixture problems into a quadratic sequence, verify your formula visually, and answer combined first-difference threshold questions.
>
> **Prerequisites:** [The general-term formula](/library/pure-mathematics/number-patterns/the-general-term-formula).

## 1. Why real-world grids grow quadratically

When a shape grows in **one direction** (like adding one bead to a chain), the count grows linearly. When a figure grows in **two dimensions** at once—both width and height, or every person greeting every other person—the count grows **quadratically**!

Click $n = 1, 2, 3, 4$ below to see how adding an extra row and column at each stage creates an $n \times (n + 1)$ rectangle of dots:

```diagram
name: quadratic-dot-pattern
```

```rule
title: Modelling strategy for pattern contexts
1.\ \text{Count } T_{1}, T_{2}, T_{3}, T_{4} \text{ directly from the diagrams (or first few small cases).}
2.\ \text{Check } \Delta_{1} \text{ and } \Delta_{2} \text{ to confirm whether the pattern is linear or quadratic.}
3.\ \text{Solve } 2a = \Delta_{2},\quad 3a + b = T_{2} - T_{1},\quad a + b + c = T_{1}\text{—and verify on } T_{4}!
```

## 2. Two classic contexts to recognise immediately

```compare
title: Rectangle dots vs round-robin fixtures
left_title: Rectangular / border patterns
left:
An $n \times (n + 1)$ grid has:
$$T_{n} = n(n + 1) = n^{2} + n$$
Terms: $2,\ 6,\ 12,\ 20,\ \dots$ ($\Delta_{2} = 2$).
Easy check: Stage $n$ literally multiplies height $n$ by width $n + 1$.
right_title: Handshakes & league matches
right:
If $n$ teams each play every other team **once**:
each of the $n$ teams plays $n - 1$ opponents, dividing by $2$ so each match isn't counted twice:
$$T_{n} = \frac{n(n - 1)}{2} = \frac{1}{2}n^{2} - \frac{1}{2}n$$
Terms ($n \geq 1$): $0,\ 1,\ 3,\ 6,\ 10,\ \dots$ ($\Delta_{2} = 1$).
```

```tryit
title: Quick check
prompt: Using the rectangle dot pattern $T_{n} = n^{2} + n$ from the interactive diagram above, which stage $n$ contains exactly $132$ dots?
hint: Solve $n^{2} + n = 132$, rearrange to zero, and factorise.
answer: $n^{2} + n - 132 = 0 \implies (n + 12)(n - 11) = 0$. Since $n \in \mathbb{N}$, Stage $11$ has $11 \times 12 = 132$ dots.
```

## 3. Worked examples

```steps
title: Example 1 (Sports tournament): In a school netball league, every team plays every other team once. For $2$ teams there is $1$ match; for $3$ teams, $3$ matches; for $4$ teams, $6$ matches; for $5$ teams, $10$ matches. If $105$ matches are played in total, how many teams entered?
Let $n$ be the number of teams and count matches $M(n)$ :: M(2) = 1,\quad M(3) = 3,\quad M(4) = 6,\quad M(5) = 10
Shift or note $M(1) = 0$ so $n$ matches team count :: 0,\ 1,\ 3,\ 6,\ 10 \implies \Delta_{1}: 1, 2, 3, 4,\quad \Delta_{2} = 1
Find $a$, $b$, $c$ with $2a = 1$, $3a + b = 1$, $a + b + c = 0$ :: a = \frac{1}{2},\quad b = -\frac{1}{2},\quad c = 0 \implies M(n) = \frac{1}{2}n^{2} - \frac{1}{2}n
Set $M(n) = 105$ and clear fractions :: \frac{n(n - 1)}{2} = 105 \implies n^{2} - n - 210 = 0
Factorise and keep $n > 0$ :: (n - 15)(n + 14) = 0 \implies n = 15\text{ teams}
```

```steps
title: Example 2 (Matchstick staircase): An $n$-row staircase of unit squares is built with matchsticks: Stage $1$ uses $4$, Stage $2$ uses $10$, Stage $3$ uses $18$, and Stage $4$ uses $28$. Which stage uses exactly $180$ matchsticks?
Find first and second differences :: \Delta_{1}: 6, 8, 10,\qquad \Delta_{2} = 2
Solve for $a$, $b$, $c$ :: 2a = 2 \implies a = 1,\quad 3(1) + b = 6 \implies b = 3,\quad 1 + 3 + c = 4 \implies c = 0
State $T_{n}$ and set equal to $180$ :: n^{2} + 3n = 180 \implies n^{2} + 3n - 180 = 0
Factorise :: (n + 15)(n - 12) = 0 \implies n = 12\text{ (Stage }12\text{)}
```

```steps
title: Example 3 (Exam level — consecutive terms differing by a target): Consider $T_{n} = n^{2} + 3n + 1$. Find the two **consecutive terms** whose difference is $42$.
Write $T_{n+1} - T_{n}$ algebraically :: \bigl[(n + 1)^{2} + 3(n + 1) + 1\bigr] - (n^{2} + 3n + 1)
Expand and simplify carefully :: (n^{2} + 2n + 1 + 3n + 3 + 1) - n^{2} - 3n - 1 = 2n + 4
Set equal to $42$ and solve for $n$ :: 2n + 4 = 42 \implies 2n = 38 \implies n = 19
State both consecutive terms :: T_{19}\text{ and } T_{20} \quad (\text{Check: } 461 - 419 = 42)
```

> **Common mistakes**
>
> - **Only checking $T_{1}, T_{2}, T_{3}$ when counting a visual diagram:** always draw and count **Stage 4** too—if your sequence gives the exact Stage 4 count, your counting is safe!
> - **Misaligning $n$ in league/handshake problems:** if your table starts at $2$ teams ($1$ match), remember to either define $n = 2$ as two teams (by including $M(1) = 0$) or write "number of teams $= n + 1$" clearly.
> - **Saying the answer to $T_{n+1} - T_{n} = 42$ is just "$19$":** the question asks for **two consecutive terms**, namely $T_{19}$ and $T_{20}$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: A tile designer surrounds an $n \times n$ white square with a single border of grey tiles. At $n = 1$ there are $8$ grey tiles, at $n = 2$ there are $12$, and at $n = 3$ there are $16$. Is this pattern **linear** or **quadratic**, and how many grey tiles surround a $10 \times 10$ square?
A: $\Delta_{1}: 4, 4$ (constant!), so it is **linear**, not quadratic! $T_{n} = 4n + 4$, giving $T_{10} = 4(10) + 4 = 44$ grey tiles.
---
Q: At a meeting, $20$ people each shake hands with every other person exactly once. Calculate the total number of handshakes.
A: Using $H(n) = \dfrac{n(n - 1)}{2}$ with $n = 20$: $H(20) = \dfrac{20 \times 19}{2} = 190$ handshakes.
---
Q: Triangular numbers are formed by stacking dots: $1,\ 3,\ 6,\ 10,\ \dots$ Find the general term $T_{n}$ and calculate the number of dots in the $15$th triangle.
A: $\Delta_{1}: 2, 3, 4$ and $\Delta_{2} = 1$. So $2a = 1 \implies a = \frac{1}{2}$, $3\left(\frac{1}{2}\right) + b = 2 \implies b = \frac{1}{2}$, and $\frac{1}{2} + \frac{1}{2} + c = 1 \implies c = 0$. Thus $T_{n} = \frac{1}{2}n^{2} + \frac{1}{2}n = \frac{n(n + 1)}{2}$, and $T_{15} = \frac{15 \times 16}{2} = 120$.
---
Q: **(Exam level)** Given the quadratic sequence $5,\ 11,\ 19,\ 29,\ \dots$, find which two consecutive terms differ by $60$.
A: $\Delta_{1}: 6,\ 8,\ 10,\ \dots$ is a linear sequence with $d = 2$ and $c = 6 - 2 = 4$, so $d_{n} = 2n + 4$. Set $2n + 4 = 60 \implies 2n = 56 \implies n = 28$. Thus $T_{28}$ and $T_{29}$ differ by $60$.
```

## Further help

- Siyavula Mathematics Grade 11, [3.2 Quadratic sequences](https://www.siyavula.com/read/za/mathematics/grade-11/number-patterns/03-number-patterns-02).
