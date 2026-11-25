---
title: Contingency tables
youtube_query: Grade 11 contingency tables probability independence
subject: pure-mathematics
topic: Probability
part: Algebra
term: 3
subtopic: Contingency tables
order: 951
---

> **What you'll learn:** how to deduce missing numbers in a two-way contingency table, read joint and union probabilities cleanly, and test whether two categories in the table are statistically **independent**.
>
> **Prerequisites:** [Mutually exclusive versus independent](/library/pure-mathematics/probability/mutually-exclusive-versus-independent).

## 1. Two-way tables keep categories completely separate

Unlike a Venn diagram where circles overlap, a **contingency table** places every learner into **one** row (say, Male or Female) and **one** column (say, Sport or Art). Nothing overlaps inside the body cells:

- Each **row total** equals the sum of the cells across that row.
- Each **column total** equals the sum of the cells down that column.
- Every probability divides by the **grand total $N$** in the bottom-right corner—never by a single row or column total unless the question explicitly restricts the group!

Step through all three tasks on the interactive $200$-learner table below:

```diagram
name: contingency-table-visual
```

```rule
title: Reading a contingency table (grand total N)
P(A \text{ and } B) = \frac{n(\text{cell } A \cap B)}{N} \qquad P(A) = \frac{n(\text{row or column total of } A)}{N}
\text{Independent?} \quad \text{Compare } P(A \cap B) \text{ with } P(A) \cdot P(B)
```

## 2. Finding missing values vs testing independence

```compare
title: Two standard Paper 1 questions on contingency tables
left_title: Task 1: Complete missing entries
left:
Look for any row or column that already has **two out of three** numbers given, and subtract from its total to unlock the next missing cell!
right_title: Task 2: Prove or disprove independence
right:
Pick one intersection cell for $A$ and $B$:
1. Compute $P(A \cap B) = \frac{\text{cell}}{N}$.
2. Compute $P(A) \cdot P(B) = \frac{\text{row total}}{N} \cdot \frac{\text{col total}}{N}$.
3. Compare exact decimals (if equal $\to$ independent; if different $\to$ dependent).
```

```tryit
title: Quick check
prompt: In a survey of $100$ learners, $60$ are girls, $50$ play sport, and $30$ are girls who play sport. How many **boys do not play sport**?
hint: Fill the $2 \times 2$ totals: Boys $= 100 - 60 = 40$; Boys playing sport $= 50 - 30 = 20$.
answer: Boys $= 40$, and Boys who play sport $= 50 - 30 = 20$. Therefore Boys who do **not** play sport $= 40 - 20 = 20$.
```

## 3. Worked examples

Consider this completed survey of $200$ learners:

| | Sport ($S$) | Art ($A$) | Total |
| --- | :---: | :---: | :---: |
| **Male ($M$)** | $60$ | $40$ | $100$ |
| **Female ($F$)** | $45$ | $55$ | $100$ |
| **Total** | $105$ | $95$ | $200$ |

```steps
title: Example 1 (Test independence): From the table above, are "Male" and "Sport" independent?
Read the joint cell over the grand total $200$ :: P(M \cap S) = \frac{60}{200} = 0{,}30
Read row and column marginal probabilities :: P(M) = \frac{100}{200} = 0{,}50,\qquad P(S) = \frac{105}{200} = 0{,}525
Multiply $P(M)\cdot P(S)$ :: 0{,}50 \times 0{,}525 = 0{,}2625
Compare $0{,}30 \neq 0{,}2625$ :: \text{NOT independent}
```

```steps
title: Example 2 (Union probability from the table): Using the same table, find $P(\text{Female or Art})$
Apply the addition rule using totals over $200$ :: P(F \cup A) = P(F) + P(A) - P(F \cap A) = \frac{100}{200} + \frac{95}{200} - \frac{55}{200} = \frac{140}{200} = 0{,}70
Check by adding the three matching cells directly ($45 + 55 + 40$) :: \frac{140}{200} = 0{,}70
```

```steps
title: Example 3 (Exam level — enforce independence to fill a table): Out of $100$ students, $60$ Passed ($40$ Failed), and $70$ Studied ($30$ Did not study). If Passing and Studying are **independent**, find how many Studied and Passed ($a$).
Since Passing and Studying are independent :: P(\text{Pass} \cap \text{Studied}) = P(\text{Pass}) \cdot P(\text{Studied})
Substitute totals over $100$ :: \frac{a}{100} = \frac{60}{100} \cdot \frac{70}{100} = \frac{42}{100}
Solve for $a$ and subtract from totals for the rest :: a = 42,\quad b = 18\ (\text{Pass, No Study}),\quad c = 28\ (\text{Fail, Study}),\quad d = 12\ (\text{Fail, No Study})
```

> **Common mistakes**
>
> - **Dividing by a row total instead of the grand total $N$** when calculating $P(A \cap B)$ (unless the question specifically says "given that a learner is male...").
> - **Rounding $P(A)\cdot P(B)$ too early** before comparing it to $P(A \cap B)$—always compare exact fractions or at least $4$ decimal places.
> - **Assuming two categories are independent just because two cells look roughly similar.**

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Complete the missing entries in this survey of $120$ commuters:

| | Early ($E$) | Late ($L$) | Total |
| --- | :---: | :---: | :---: |
| **Bus ($B$)** | $30$ | $b$ | $50$ |
| **Train ($T$)** | $c$ | $28$ | $70$ |
| **Total** | $d$ | $e$ | $120$ |

A: $b = 50 - 30 = 20$; $c = 70 - 28 = 42$; $d = 30 + 42 = 72$; $e = 20 + 28 = 48$ (check: $72 + 48 = 120$).
---
Q: Using Question 1, test mathematically whether using the Bus and arriving Early are independent.
A: $P(B \cap E) = \frac{30}{120} = 0{,}25$. Meanwhile $P(B)\cdot P(E) = \frac{50}{120}\cdot\frac{72}{120} = \frac{5}{12}\cdot\frac{3}{5} = \frac{1}{4} = 0{,}25$. Since they are equal, the events are **independent**.
---
Q: In Question 1, find the probability that a randomly chosen commuter uses the Train **or** arrives Late.
A: $P(T \cup L) = \frac{70}{120} + \frac{48}{120} - \frac{28}{120} = \frac{90}{120} = 0{,}75$ (or add the matching cells $\frac{42 + 28 + 20}{120} = 0{,}75$).
---
Q: **(Exam level)** A survey of $80$ shoppers records $50$ Adults ($30$ paid by Card, $20$ Cash) and $30$ Teens ($12$ Card, $18$ Cash). Are "Adult" and "Card" independent?
A: $P(\text{Adult} \cap \text{Card}) = \frac{30}{80} = 0{,}375$. $P(\text{Adult})\cdot P(\text{Card}) = \frac{50}{80}\cdot\frac{42}{80} = \frac{2100}{6400} = 0{,}328125$. Since $0{,}375 \neq 0{,}328125$, they are **not** independent.
```

## Further help

- Siyavula Mathematics Grade 11, [10.5 Contingency tables](https://www.siyavula.com/read/za/mathematics/grade-11/probability/10-probability-05).
