---
title: Tree diagrams
youtube_query: Grade 11 probability tree diagrams
subject: pure-mathematics
topic: Probability
part: Algebra
term: 3
subtopic: Tree diagrams
order: 941
---

> **What you'll learn:** *why* multiplying along branches gives the probability of a sequence, how **without replacement** changes the bag counts on the second stage, and how to use the complement shortcut for "at least one".
>
> **Prerequisites:** [Mutually exclusive versus independent](/library/pure-mathematics/probability/mutually-exclusive-versus-independent).

## 1. Multiply along a branch, add across winning paths

Imagine reaching into a bag holding $3$ Blue and $2$ Amber marbles ($5$ in total) twice. Why do we **multiply** fractions along a path? Because on the first draw, $\frac{3}{5}$ of trials land on Blue; then *of those trials*, a fraction of them land on Blue again on the second draw. Taking a fraction *of* a fraction is multiplication!

And when you keep the first marble in your pocket (**without replacement**), only $4$ marbles remain in the bag: whichever colour you drew first loses $1$ marble, while the other colour keeps all its marbles.

Switch between **Without replacement** and **With replacement** below, and highlight different target events to see which outcome paths get added:

```diagram
name: tree-diagram-visual
```

```rule
title: Tree diagram rules
\text{Probability of one path} = \text{product of fractions along its branches}
\text{Probability of an event} = \text{sum of all matching paths}
\text{Quick check: branches leaving any single node always add up to } 1
```

## 2. With replacement vs without replacement

```compare
title: What changes on the second draw?
left_title: With replacement (Independent)
left:
The first item goes back into the bag before the second draw:
- Denominator **stays the same** (still $5$).
- Branch fractions repeat identically on every node.
right_title: Without replacement (Dependent)
right:
The first item stays out of the bag:
- Denominator drops by $1$ on **every** second branch ($5 \to 4$).
- Only the colour already drawn drops by $1$ in the numerator; the other colour's numerator stays unchanged!
```

```tryit
title: Quick check
prompt: A bag holds $4$ red and $6$ green sweets. Two sweets are eaten one after the other (**without replacement**). Find the probability that **both are green**.
hint: First green is $\frac{6}{10}$. After eating one green, how many green sweets and total sweets remain?
answer: $P(GG) = \frac{6}{10} \times \frac{5}{9} = \frac{30}{90} = \frac{1}{3}$.
```

## 3. Worked examples

```steps
title: Example 1 (Without replacement — "same colour" vs "different colours"): A bag contains $5$ red and $3$ blue balls. Two balls are drawn without replacement.
$P(\text{both red})$ :: P(RR) = \frac{5}{8} \cdot \frac{4}{7} = \frac{20}{56}
$P(\text{both blue})$ :: P(BB) = \frac{3}{8} \cdot \frac{2}{7} = \frac{6}{56}
Add both matching paths for "same colour" :: P(\text{same}) = \frac{20}{56} + \frac{6}{56} = \frac{26}{56} = \frac{13}{28}
Use complement for "different colours" :: P(\text{different}) = 1 - \frac{13}{28} = \frac{15}{28}
```

```steps
title: Example 2 (Conditional probabilities): There is a $0{,}7$ chance of sun ($S$) and $0{,}3$ of rain ($R$). A team wins ($W$) with probability $0{,}6$ if sunny, or $0{,}3$ if rainy. Find $P(\text{team wins})$.
Path 1 (Sunny and Win) :: P(S \text{ and } W) = 0{,}7 \times 0{,}6 = 0{,}42
Path 2 (Rainy and Win) :: P(R \text{ and } W) = 0{,}3 \times 0{,}3 = 0{,}09
Add both winning paths :: P(W) = 0{,}42 + 0{,}09 = 0{,}51
```

```steps
title: Example 3 (Exam level — solve for an unknown count $x$): A box has $4$ green pens and $x$ yellow pens. Two pens are taken at random without replacement. If $P(\text{both green}) = \frac{2}{15}$, find $x$.
Write branch probabilities for green then green :: \frac{4}{4 + x} \cdot \frac{3}{3 + x} = \frac{2}{15}
Cross-multiply :: 12 \times 15 = 2(4 + x)(3 + x) \;\Longrightarrow\; (4 + x)(3 + x) = 90
Expand to standard quadratic form :: x^{2} + 7x + 12 - 90 = 0 \;\Longrightarrow\; x^{2} + 7x - 78 = 0
Factorise :: (x + 13)(x - 6) = 0
Reject $x = -13$ (count $> 0$) :: x = 6\text{ yellow pens}
```

> **Common mistakes**
>
> - **Adding along a branch instead of multiplying:** sequential events ($A$ **and then** $B$) always multiply because you take a fraction *of* a fraction.
> - **Forgetting to reduce the numerator on a repeat pick without replacement:** if $5$ red becomes $4$ red, write $\frac{4}{7}$, not $\frac{5}{7}$.
> - **Listing "at least one" paths the long way:** instead of adding $3$ or $7$ paths for "at least one red", compute $1 - P(\text{no red})$!

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: A fair coin is tossed and a fair six-sided die is rolled. What is the probability of getting Tails and a number greater than $4$?
A: Independent events: $P(T \text{ and } >4) = \frac{1}{2} \times \frac{2}{6} = \frac{1}{6}$.
---
Q: A jar holds $6$ mints and $4$ toffees. Two sweets are drawn without replacement. Find the probability of getting **one of each** (in any order).
A: $P(MT) + P(TM) = \left(\frac{6}{10}\cdot\frac{4}{9}\right) + \left(\frac{4}{10}\cdot\frac{6}{9}\right) = \frac{24}{90} + \frac{24}{90} = \frac{48}{90} = \frac{8}{15}$.
---
Q: A learner writes two tests. The probability of passing Test 1 is $0{,}8$, and passing Test 2 is $0{,}75$ (independent). Use a complement to find the probability of passing **at least one** test.
A: $P(\text{fail both}) = (1 - 0{,}8)(1 - 0{,}75) = 0{,}2 \times 0{,}25 = 0{,}05$. Therefore $P(\text{pass at least one}) = 1 - 0{,}05 = 0{,}95$.
---
Q: **(Exam level)** A bag contains $3$ white and $n$ black beads. Two beads are drawn without replacement. If $P(\text{both black}) = \frac{5}{14}$, calculate $n$.
A: $\frac{n}{n + 3}\cdot\frac{n - 1}{n + 2} = \frac{5}{14} \implies 14n(n - 1) = 5(n + 3)(n + 2) \implies 14n^{2} - 14n = 5n^{2} + 25n + 30 \implies 9n^{2} - 39n - 30 = 0 \implies 3n^{2} - 13n - 10 = 0 \implies (3n + 2)(n - 5) = 0$. Since $n$ is a positive whole number, $n = 5$.
```

## Further help

- Siyavula Mathematics Grade 11, [10.4 Tree diagrams](https://www.siyavula.com/read/za/mathematics/grade-11/probability/10-probability-04).
