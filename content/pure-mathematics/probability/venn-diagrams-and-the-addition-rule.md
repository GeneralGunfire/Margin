---
title: Venn diagrams and the addition rule
youtube_query: Grade 11 Venn diagrams and the addition rule probability
subject: pure-mathematics
topic: Probability
part: Algebra
term: 3
subtopic: Venn diagrams and the addition rule
order: 911
---

> **What you'll learn:** *why* the addition rule subtracts $P(A \cap B)$ (and why mutually exclusive events don't), how to split any Venn diagram into non-overlapping regions from the inside out, and how to solve unknown overlaps inside a sample space.
>
> **Prerequisites:** Grade 10 basic probability, sample spaces, and complements.

## 1. Why adding two sets counts the middle twice

Suppose $20$ learners stand in a room. Twelve raise their hand for Soccer, and ten raise their hand for Netball. $12 + 10 = 22$ hands went up—two **more** than the $20$ people in the room!

Those extra $2$ hands belong to the learners who play **both** sports: they raised their hand for Soccer *and* again for Netball, so they were counted twice. Subtracting that overlap once fixes the double-count:

$$12 + 10 - 2 = 20$$

In probability, dividing every count by the total sample size gives the **addition rule**. Toggle between **counts out of 100** and **decimals ($P$)** below, and switch between overlapping and mutually exclusive circles to watch the overlap disappear:

```diagram
name: venn-explorer
```

```rule
title: Fundamental probability rules
P(A \cup B) = P(A) + P(B) - P(A \cap B)
P(A') = 1 - P(A) \qquad P(A\text{ only}) = P(A) - P(A \cap B)
\text{Sum of all separate regions inside } S = 1 \quad (\text{or } n(S)\text{ for counts})
```

## 2. Fill Venn diagrams from the centre outward

Because each region inside a Venn diagram must represent **separate** outcomes (no learner sitting in two places at once), never write the whole circle total $n(A)$ directly into the outer part of $A$.

```compare
title: Two ways to fill a two-circle Venn diagram
left_title: Right: fill the overlap (A ∩ B) FIRST
left:
Place $n(A \cap B)$ in the middle lens first, then subtract it from $n(A)$ and $n(B)$ to get **"A only"** and **"B only"**.
Every region inside the rectangle is now completely separate, so the four regions sum cleanly to $n(S)$ (or $1$).
right_title: Wrong: writing total n(A) in the crescent
right:
Putting the entire $n(A)$ into "A only" counts the middle overlap twice—causing all four regions inside $S$ to add up to *more* than $n(S)$!
```

```tryit
title: Quick check
prompt: Given $P(A) = 0{,}6$, $P(B) = 0{,}5$, and $P(A \cap B) = 0{,}2$, find **(a)** $P(A \cup B)$, **(b)** $P(\text{neither } A \text{ nor } B)$, and **(c)** $P(A \text{ only})$.
hint: Use $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ first, then subtract from $1$ for neither.
answer: **(a)** $0{,}6 + 0{,}5 - 0{,}2 = 0{,}9$. **(b)** $1 - 0{,}9 = 0{,}1$. **(c)** $0{,}6 - 0{,}2 = 0{,}4$.
```

## 3. Worked examples

```steps
title: Example 1 (Using the addition rule): If $P(A) = 0{,}5$, $P(B) = 0{,}4$, and $P(A \text{ and } B) = 0{,}15$, find $P(A \text{ or } B)$ and $P(\text{neither } A \text{ nor } B)$
Apply the addition rule :: P(A \cup B) = 0{,}5 + 0{,}4 - 0{,}15 = 0{,}75
Use the complement rule for outside both circles :: P\bigl((A \cup B)'\bigr) = 1 - 0{,}75 = 0{,}25
```

```steps
title: Example 2 (Counts in a class survey): Of $60$ learners, $35$ take Maths ($M$), $28$ take Accounting ($A$), and $10$ take neither. Find how many take both.
Find how many take at least one of the two subjects :: n(M \cup A) = 60 - 10 = 50
Notice $35 + 28 = 63$, which is $13$ higher than $50$ :: n(M \cap A) = 35 + 28 - 50 = 13
Fill the separate crescents to verify :: 22\ (M\text{ only}) + 13\ (\text{both}) + 15\ (A\text{ only}) + 10\ (\text{neither}) = 60
```

```steps
title: Example 3 (Exam level — unknown overlap $x$): Given $P(A) = 0{,}45$, $P(B) = 0{,}35$, and $P(\text{neither } A \text{ nor } B) = 0{,}32$, find $P(A \cap B)$
Let the unknown overlap be $x$ :: P(A \cap B) = x
Write the separate regions :: P(A\text{ only}) = 0{,}45 - x,\qquad P(B\text{ only}) = 0{,}35 - x
All four separate regions inside $S$ sum to $1$ :: (0{,}45 - x) + x + (0{,}35 - x) + 0{,}32 = 1
Simplify and solve :: 1{,}12 - x = 1 \;\Longrightarrow\; x = 0{,}12
```

> **Common mistakes**
>
> - **Forgetting to subtract $P(A \cap B)$:** whenever $A$ and $B$ can overlap, $P(A \cup B) \neq P(A) + P(B)$.
> - **Confusing "$A$ only" with "$A$":** "$A$ only" means inside $A$ and outside $B$, which equals $P(A) - P(A \cap B)$.
> - **Forgetting the outside complement** when adding the regions to $1$ or $n(S)$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Given $P(A) = 0{,}4$, $P(B) = 0{,}35$, and $P(A \cup B) = 0{,}6$, calculate $P(A \cap B)$.
A: $0{,}6 = 0{,}4 + 0{,}35 - P(A \cap B) \implies P(A \cap B) = 0{,}75 - 0{,}6 = 0{,}15$.
---
Q: In a group of $40$ learners, $24$ play soccer, $18$ play netball, and $6$ play both. How many play neither sport?
A: $n(S \cup N) = 24 + 18 - 6 = 36$. Neither $= 40 - 36 = 4$.
---
Q: If $P(A) = 0{,}7$, $P(B) = 0{,}5$, and $P((A \cup B)') = 0{,}1$, find $P(A \text{ and not } B)$.
A: $P(A \cup B) = 1 - 0{,}1 = 0{,}9$. Then $P(A \cap B) = 0{,}7 + 0{,}5 - 0{,}9 = 0{,}3$. So $P(A \text{ only}) = 0{,}7 - 0{,}3 = 0{,}4$.
---
Q: **(Exam level)** In a Venn diagram, $P(A \text{ only}) = 2x$, $P(A \cap B) = x$, $P(B \text{ only}) = 3x$, and $P((A \cup B)') = 0{,}28$. Find $x$ and $P(A')$.
A: $2x + x + 3x + 0{,}28 = 1 \implies 6x = 0{,}72 \implies x = 0{,}12$. Then $P(A) = 2x + x = 3(0{,}12) = 0{,}36$, so $P(A') = 1 - 0{,}36 = 0{,}64$.
```

## Further help

- Siyavula Mathematics Grade 11, [10.3 More Venn diagrams](https://www.siyavula.com/read/za/mathematics/grade-11/probability/10-probability-03).
