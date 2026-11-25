---
title: Three events
youtube_query: Grade 11 probability of three events
subject: pure-mathematics
topic: Probability
part: Algebra
term: 3
subtopic: Three events
order: 931
---

> **What you'll learn:** how to build a three-circle Venn diagram cleanly from the innermost triple overlap outward, why three-set inclusion–exclusion adds the centre back, and how to read exact regions like "only one" vs "at least two".
>
> **Prerequisites:** [Venn diagrams and the addition rule](/library/pure-mathematics/probability/venn-diagrams-and-the-addition-rule).

## 1. Work strictly from the innermost circle outward

Three circles ($S$, $R$, $C$) carve a Venn diagram into **8 completely separate regions**: $1$ triple centre, $3$ two-way petals, $3$ outer single-sport crescents, and $1$ outside region.

Why can't you just add the three big circle totals? Because a learner in the **triple centre** gets added $3$ times ($S$, $R$, and $C$), then subtracted $3$ times when you subtract the three pairwise intersections—leaving them counted $3 - 3 = 0$ times unless you fill from the **centre outward** (or add the centre back once)!

Step through the 4 stages below to watch how each outer number comes from subtracting the inner pieces already placed:

```diagram
name: three-event-venn
```

```rule
title: Four-step filling order & three-set addition rule
\text{1. Centre } (A \cap B \cap C) \;\to\; \text{2. Pair-only petals} \;\to\; \text{3. Single-only outer parts} \;\to\; \text{4. Outside}
n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(A \cap C) - n(B \cap C) + n(A \cap B \cap C)
```

## 2. Careful with wording: "A and B" vs "A and B only"

```compare
title: Two phrases that change which numbers you write
left_title: "Both A and B" → INCLUDES the triple centre
left:
"18 learners play Soccer and Rugby" gives the **whole lens** $S \cap R$:
$$\text{Soccer \& Rugby ONLY} = 18 - n(S \cap R \cap C)$$
Always subtract the centre $5$ first before writing $13$ in the petal!
right_title: "A and B only (not C)" → ALREADY excludes C
right:
"13 learners play Soccer and Rugby only" gives the **outer petal** directly—do NOT subtract $n(S \cap R \cap C)$ a second time!
```

```tryit
title: Quick check
prompt: Suppose $n(A) = 30$, $n(A \cap B) = 12$, $n(A \cap C) = 9$, and $n(A \cap B \cap C) = 4$. How many elements are in **A only**?
hint: First subtract $4$ from $12$ and from $9$ to get the two pair-only petals, then subtract all three inner parts ($4$, $8$, $5$) from $30$.
answer: Pair-only petals inside $A$ are $12 - 4 = 8$ and $9 - 4 = 5$. So $A \text{ only} = 30 - (8 + 4 + 5) = 13$.
```

## 3. Worked examples

```steps
title: Example 1 (Filling a 3-set Venn diagram): Out of $100$ learners, $50$ play Soccer ($S$), $40$ Rugby ($R$), $35$ Cricket ($C$). Given $n(S \cap R) = 18$, $n(S \cap C) = 15$, $n(R \cap C) = 12$, and $n(S \cap R \cap C) = 5$: find "neither"
Start with the centre ($S \cap R \cap C$) :: 5
Subtract $5$ from each pair intersection :: S\cap R\text{ only} = 13,\quad S\cap C\text{ only} = 10,\quad R\cap C\text{ only} = 7
Subtract all $3$ inner pieces inside each circle :: S\text{ only} = 50 - (13 + 5 + 10) = 22,\quad R\text{ only} = 15,\quad C\text{ only} = 13
Add all $7$ inner regions and subtract from $100$ :: \text{Neither} = 100 - (22 + 15 + 13 + 13 + 10 + 7 + 5) = 15
```

```steps
title: Example 2 (Reading probabilities from Example 1): Find $P(\text{exactly two sports})$ and $P(\text{at least two sports})$
"Exactly two" adds the three pair-only petals :: \frac{13 + 10 + 7}{100} = \frac{30}{100} = 0{,}30
"At least two" includes $2$ or $3$ sports (adds the centre) :: \frac{30 + 5}{100} = \frac{35}{100} = 0{,}35
```

```steps
title: Example 3 (Exam level — solve for unknown triple overlap $x$): Of $80$ learners, $42$ take Maths ($M$), $38$ Physics ($P$), $32$ Chemistry ($C$), $16$ take $M \cap P$, $14$ take $M \cap C$, $10$ take $P \cap C$, and $5$ take none. Find $x = n(M \cap P \cap C)$.
Find total inside at least one circle :: n(M \cup P \cup C) = 80 - 5 = 75
Apply 3-set inclusion–exclusion :: 75 = 42 + 38 + 32 - 16 - 14 - 10 + x
Simplify :: 75 = 112 - 40 + x = 72 + x
Solve for $x$ :: x = 3
Verify single-only regions ($M=15,\ P=15,\ C=11$) :: 15 + 15 + 11 + 13 + 11 + 7 + 3 + 5 = 80
```

> **Common mistakes**
>
> - **Forgetting to subtract $x$ from the pair intersections** before computing the single-only crescents.
> - **Confusing "exactly one"** ($A\text{ only} + B\text{ only} + C\text{ only}$) with **"at least one"** (all $7$ inner regions).
> - **Skipping the final sum check:** confirming that all $8$ regions are $\geq 0$ and sum to $n(S)$ takes 10 seconds and catches arithmetic errors immediately.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: In a survey of $50$ learners, $3$ play all three games ($A, B, C$), $7$ play $A \cap B$, $8$ play $A \cap C$, $6$ play $B \cap C$, and $n(A) = 20$, $n(B) = 18$, $n(C) = 22$. How many play **none** of the three games?
A: Pair-only: $4$, $5$, $3$. Single-only: $A = 20 - (4+3+5) = 8$; $B = 18 - (4+3+3) = 8$; $C = 22 - (5+3+3) = 11$. Total inside $= 8 + 8 + 11 + 4 + 5 + 3 + 3 = 42$. None $= 50 - 42 = 8$.
---
Q: Using the completed diagram in Question 1, what is the probability that a randomly chosen learner plays **only one** of the three games?
A: Only one $= 8 + 8 + 11 = 27$. So $P(\text{only one}) = \frac{27}{50} = 0{,}54$.
---
Q: Given $n(A) = 25$, $n(B) = 20$, $n(C) = 18$, $n(A \cap B) = 8$, $n(A \cap C) = 7$, $n(B \cap C) = 5$, $n(A \cap B \cap C) = 2$, calculate $n(A \cup B \cup C)$.
A: $n(A \cup B \cup C) = 25 + 20 + 18 - 8 - 7 - 5 + 2 = 63 - 20 + 2 = 45$.
---
Q: **(Exam level)** In a class of $60$, $34$ passed English ($E$), $30$ passed Maths ($M$), $26$ passed Science ($S$), $14$ passed $E \cap M$, $12$ passed $E \cap S$, $10$ passed $M \cap S$, and $2$ passed none. Find how many passed all three subjects.
A: $n(E \cup M \cup S) = 60 - 2 = 58$. Then $58 = 34 + 30 + 26 - 14 - 12 - 10 + x = 54 + x \implies x = 4$ learners.
```

## Further help

- Siyavula Mathematics Grade 11, [10.3 More Venn diagrams](https://www.siyavula.com/read/za/mathematics/grade-11/probability/10-probability-03).
