---
title: Mutually exclusive versus independent
youtube_query: Grade 11 mutually exclusive and independent events
subject: pure-mathematics
topic: Probability
part: Algebra
term: 3
subtopic: Mutually exclusive and independent events
order: 921
---

> **What you'll learn:** the exact difference between **mutually exclusive** events (cannot occur together) and **independent** events (knowing one gives zero information about the other), why non-zero mutually exclusive events are actually **dependent**, and how to prove either property mathematically.
>
> **Prerequisites:** [Venn diagrams and the addition rule](/library/pure-mathematics/probability/venn-diagrams-and-the-addition-rule).

## 1. The question that separates the two ideas

Learners often think "mutually exclusive" and "independent" both mean "unrelated". In reality, they answer two completely different questions—and for two events with $P > 0$, **they contradict each other**:

- **Mutually exclusive** asks: *Can both happen on the same trial?* If the answer is **no**, $P(A \cap B) = 0$.
- **Independent** asks: *If I tell you $A$ happened, does that change your bet on $B$?*

Think about drawing one card from a $52$-card deck. Normally, $\frac{4}{52} = \frac{1}{13}$ of cards are Kings. Now suppose I peek and tell you: **"The card is a Heart."** Inside the $13$ Hearts, there is still $1$ King—so the chance of a King is still $\frac{1}{13}$! Knowing it is a Heart told you **nothing** about whether it is a King: they are **independent**.

By contrast, suppose I tell you **"The card is a Heart"** and ask about a **Spade** (mutually exclusive!). Immediately your bet on Spade drops from $\frac{1}{4}$ to **$0$**. Knowing Heart happened **completely decided** Spade!

Click all three card comparisons below to see why independent events *must* overlap proportionally:

```diagram
name: independence-explorer
```

```compare
title: Mutually exclusive vs Independent
left_title: Mutually exclusive → P(A ∩ B) = 0
left:
$A$ and $B$ **cannot happen together** (disjoint circles).
- Test: check if $P(A \cap B) = 0$.
- Addition rule simplifies to: $P(A \cup B) = P(A) + P(B)$.
- Knowing $A$ happened guarantees $B$ did **not** happen!
right_title: Independent → P(A ∩ B) = P(A)·P(B)
right:
Knowing $A$ happened leaves the fraction of $B$ unchanged:
$$\frac{P(A \cap B)}{P(A)} = P(B) \;\Longleftrightarrow\; P(A \cap B) = P(A)\cdot P(B)$$
- Because $P(A) > 0$ and $P(B) > 0$, their circles **must overlap**!
```

```rule
title: Mathematical tests for exam questions
\text{Mutually exclusive: } P(A \cap B) = 0 \quad\Longleftrightarrow\quad P(A \cup B) = P(A) + P(B)
\text{Independent: } P(A \cap B) = P(A) \cdot P(B)
```

```tryit
title: Quick check
prompt: Given $P(A) = 0{,}5$, $P(B) = 0{,}3$, and $P(A \cap B) = 0{,}15$, are $A$ and $B$ **(a)** mutually exclusive, and **(b)** independent?
hint: Compare $P(A \cap B)$ against $0$ for mutual exclusivity, and against $P(A) \cdot P(B)$ for independence.
answer: **(a)** No, because $P(A \cap B) = 0{,}15 \neq 0$. **(b)** Yes! Because $P(A) \cdot P(B) = 0{,}5 \times 0{,}3 = 0{,}15 = P(A \cap B)$.
```

## 2. Worked examples

```steps
title: Example 1 (Test independence using $P(A \cup B)$): $P(A) = 0{,}4$, $P(B) = 0{,}5$, and $P(A \cup B) = 0{,}7$. Are $A$ and $B$ independent?
Find $P(A \cap B)$ from the addition rule :: P(A \cap B) = 0{,}4 + 0{,}5 - 0{,}7 = 0{,}20
Compute $P(A) \cdot P(B)$ :: 0{,}4 \times 0{,}5 = 0{,}20
Compare both values :: P(A \cap B) = P(A)\cdot P(B) \;\Longrightarrow\; A \text{ and } B \text{ are independent}
```

```steps
title: Example 2 (Not mutually exclusive and not independent): $P(A) = 0{,}6$, $P(B) = 0{,}3$, $P(A \cap B) = 0{,}1$
Check mutually exclusive :: P(A \cap B) = 0{,}1 \neq 0 \;\Longrightarrow\; \text{NOT mutually exclusive}
Compute $P(A)\cdot P(B)$ :: 0{,}6 \times 0{,}3 = 0{,}18
Compare with $P(A \cap B)$ :: 0{,}18 \neq 0{,}1 \;\Longrightarrow\; \text{NOT independent}
```

```steps
title: Example 3 (Exam level — solve for $P(B)$ given independence): $A$ and $B$ are independent, $P(A) = 0{,}4$, and $P(A \cup B) = 0{,}64$. Find $P(B)$.
Let $P(B) = p$. Independence gives $P(A \cap B)$ :: P(A \cap B) = 0{,}4p
Substitute into the addition rule :: 0{,}64 = 0{,}4 + p - 0{,}4p
Combine like terms :: 0{,}24 = 0{,}6p
Solve for $p$ :: P(B) = \frac{0{,}24}{0{,}6} = 0{,}4
```

> **Common mistakes**
>
> - **Assuming mutually exclusive events are independent:** if $A$ makes $B$ impossible, $A$ completely controls $B$—so mutually exclusive non-zero events are always **dependent**.
> - **Multiplying $P(A)\cdot P(B)$ automatically for $P(A \cap B)$:** you may ONLY set $P(A \cap B) = P(A)\cdot P(B)$ when the problem states the events are **independent** (or asks you to test independence).
> - **Giving a verbal guess instead of a calculation:** CAPS marks are awarded for explicitly comparing $P(A \cap B)$ to $P(A)\cdot P(B)$.

## 3. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Events $A$ and $B$ are mutually exclusive with $P(A) = 0{,}28$ and $P(B) = 0{,}45$. Find $P(A \cup B)$ and $P(A')$.
A: $P(A \cup B) = 0{,}28 + 0{,}45 = 0{,}73$. $P(A') = 1 - 0{,}28 = 0{,}72$.
---
Q: Given $P(M) = 0{,}5$, $P(N) = 0{,}4$, and $P(M \cap N) = 0{,}25$, determine mathematically whether $M$ and $N$ are independent.
A: $P(M)\cdot P(N) = 0{,}5 \times 0{,}4 = 0{,}20 \neq 0{,}25 = P(M \cap N)$. Therefore $M$ and $N$ are **not** independent.
---
Q: If $A$ and $B$ are independent with $P(A) = \frac{1}{3}$ and $P(B) = \frac{3}{4}$, calculate $P(A \cup B)$.
A: $P(A \cap B) = \frac{1}{3}\cdot\frac{3}{4} = \frac{1}{4}$. So $P(A \cup B) = \frac{1}{3} + \frac{3}{4} - \frac{1}{4} = \frac{1}{3} + \frac{1}{2} = \frac{5}{6}$.
---
Q: **(Exam level)** Two events $X$ and $Y$ are independent, with $P(X) = 0{,}5$ and $P(X \cup Y) = 0{,}8$. Find $P(Y)$ and $P(X \text{ and not } Y)$.
A: Let $P(Y) = y$. Then $0{,}8 = 0{,}5 + y - 0{,}5y \implies 0{,}3 = 0{,}5y \implies P(Y) = 0{,}6$. Then $P(X \cap Y) = 0{,}3$, so $P(X \text{ only}) = 0{,}5 - 0{,}3 = 0{,}2$.
```

## Further help

- Siyavula Mathematics Grade 11, [10.2 Dependent and independent events](https://www.siyavula.com/read/za/mathematics/grade-11/probability/10-probability-02).
