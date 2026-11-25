---
title: Algebra revision workshop
youtube_query: Grade 11 algebra revision South Africa
subject: pure-mathematics
topic: Revision: Algebra
part: Algebra
term: 4
subtopic: Algebra revision
order: 1311
---

> **What you'll learn:** how Paper 1 ($150$ marks) distributes marks across all five Algebra-side topics, which **clue words** point straight to the right method under exam pressure, and how to solve complete mixed Paper 1 questions cleanly.
>
> **Prerequisites:** Terms 1–4 Algebra lessons across Exponents and surds, Equations and inequalities, Functions, Finance, Probability, and Number patterns.

## 1. The Paper 1 map ($150$ marks)

Paper 1 brings together every Algebra-side topic from Terms 1 to 4. Knowing the typical mark weights stops you from spending $25$ minutes on a $4$-mark equation while rushing $45$ marks of Functions at the end:

| Paper 1 section | Typical marks | Core skills tested every year |
|---|---|---|
| Equations, inequalities & simultaneous | $\approx 25$ | Quadratic formula (2 d.p.), surd check, inequalities, linear + quadratic simultaneous |
| Exponents and surds | $\approx 18$ | Factoring out common powers ($3^{n+1} - 3^n$), rationalising, $k = 2^x$ equations |
| Number patterns | $\approx 25$ | Linear recap ($9$–$13$ marks) + quadratic $T_{n} = an^2 + bn + c$ ($14$–$15$ marks) |
| Functions and graphs | $\approx 45$ | Parabola, hyperbola, exponential, average gradient, transformations, reading $f(x) \cdot g(x) \leq 0$ |
| Finance, growth and decay | $\approx 15$ | Depreciation (SL vs RB), nominal/effective comparison, multi-stage timelines |
| Probability | $\approx 20$ | $2$- and $3$-event Venn diagrams, independence test, contingency tables, trees without replacement |

## 2. Spot the trigger: match the clue to the method

```compare
title: Quick diagnostic triggers under exam pressure
left_title: Algebraic clues
left:
- **"Correct to $2$ decimal places"** $\implies$ quadratic formula (do not try to factorise).
- **"No calculator / simplest surd form"** $\implies$ prime bases, split surds, or factor out $a^{n}$.
- **"$f(x) \cdot g(x) \leq 0$"** $\implies$ one graph above $x$-axis and one below (opposite signs).
right_title: Finance, patterns & probability clues
right:
- **"Which investment is better?"** $\implies$ convert both to **effective annual rates** $i_{\text{eff}}$.
- **"Without replacement"** $\implies$ shrink both denominator and chosen numerator on the 2nd branch.
- **"Show the sequence is quadratic"** $\implies$ display $\Delta_{1}$ and prove $\Delta_{2}$ is **constant and non-zero**.
```

```tryit
title: Quick warm-up
prompt: Solve for $x$: $3^{x+1} - 3^{x-1} = 72$.
hint: Factor out the smallest power $3^{x-1}$ (or $3^{x}$) before dividing.
answer: $3^{x-1}(3^{2} - 1) = 72 \implies 3^{x-1}(8) = 72 \implies 3^{x-1} = 9 = 3^{2} \implies x - 1 = 2 \implies x = 3$.
```

## 3. Mixed Paper 1 worked walkthroughs

```steps
title: Example 1 (Exponents + Nature of roots): Given $k = \sqrt{2x + 3}$ and the equation $\sqrt{2x + 3} = x$, solve for $x$.
Square both sides (surd is already isolated) :: 2x + 3 = x^{2}
Rearrange to standard quadratic form :: x^{2} - 2x - 3 = 0
Factorise :: (x - 3)(x + 1) = 0 \implies x = 3 \text{ or } x = -1
Substitute back to reject extraneous roots :: x = -1 \implies \sqrt{1} \neq -1\text{ (reject)};\quad x = 3 \implies \sqrt{9} = 3\text{ (valid)}
```

```steps
title: Example 2 (Functions + Simultaneous equations): Find the points of intersection of $f(x) = x^{2} - 2$ and $g(x) = 2x + 1$, then state where $f(x) < g(x)$.
Equate $f(x) = g(x)$ :: x^{2} - 2 = 2x + 1 \implies x^{2} - 2x - 3 = 0
Factorise and find $x$-coordinates :: (x - 3)(x + 1) = 0 \implies x = 3 \text{ or } x = -1
Find matching $y$-coordinates from $g(x) = 2x + 1$ :: (-1;\ -1) \quad\text{and}\quad (3;\ 7)
Read where the upward parabola sits BELOW the line :: -1 < x < 3
```

```steps
title: Example 3 (Finance + Probability double-check): (a) Office gear bought for $\text{R}24\,000$ depreciates at $10\%$ p.a. on the reducing-balance method for $3$ years. Find its book value. (b) Two independent events satisfy $P(A) = 0{,}4$ and $P(B) = 0{,}5$. Find $P(A \text{ or } B)$.
(a) Apply $A = P(1 - i)^{n}$ :: A = 24\,000(1 - 0{,}10)^{3} = 24\,000(0{,}729) = \text{R}17\,496{,}00
(b) Find $P(A \text{ and } B)$ using independence :: P(A \cap B) = P(A)\cdot P(B) = 0{,}4 \times 0{,}5 = 0{,}20
(b) Apply the addition rule :: P(A \cup B) = 0{,}4 + 0{,}5 - 0{,}2 = 0{,}70
```

> **Common mistakes**
>
> - **Losing easy method marks on Paper 1:** always show the quadratic equation in standard form $= 0$, the substitution into the formula or timeline expression, and explicit rejection of invalid roots ($n \leq 0$, $2^x < 0$, or extraneous surd roots).
> - **Mixing up "mutually exclusive" ($P(A \cap B) = 0$) and "independent" ($P(A \cap B) = P(A) \cdot P(B)$).**
> - **Forgetting asymptotes when sketching hyperbolas or exponentials:** label intercepts, asymptotes, and domain/range restrictions clearly.

## 4. Paper 1 practice ladder

Try all six questions timed ($25$ minutes total) before opening the worked solutions.

```questions
Q: **(Exponents, $3$ marks)** Simplify without a calculator: $\dfrac{2^{n+2} - 2^{n}}{3 \cdot 2^{n-1}}$.
A: Factor out $2^{n}$ in the numerator: $\dfrac{2^{n}(2^{2} - 1)}{3 \cdot 2^{n} \cdot 2^{-1}} = \dfrac{3}{3 \cdot \frac{1}{2}} = 2$.
---
Q: **(Inequalities, $4$ marks)** Solve for $x$: $2x^{2} - 5x - 3 \leq 0$.
A: Factorise $(2x + 1)(x - 3) \leq 0$. Critical values are $x = -\frac{1}{2}$ and $x = 3$. Since $a = 2 > 0$, the parabola is $\leq 0$ between the roots: $-\frac{1}{2} \leq x \leq 3$.
---
Q: **(Nature of roots, $4$ marks)** For which value(s) of $k$ does $x^{2} - 4x + k = 0$ have **non-real roots**?
A: Set $\Delta < 0$: $(-4)^{2} - 4(1)(k) < 0 \implies 16 - 4k < 0 \implies 4k > 16 \implies k > 4$.
---
Q: **(Number patterns, $5$ marks)** Find the general term $T_{n}$ of the quadratic sequence $3,\ 8,\ 17,\ 30,\ \dots$
A: $\Delta_{1}: 5,\ 9,\ 13$; $\Delta_{2} = 4$. Thus $2a = 4 \implies a = 2$; $3(2) + b = 5 \implies b = -1$; $2 - 1 + c = 3 \implies c = 2$. Hence $T_{n} = 2n^{2} - n + 2$.
---
Q: **(Functions & transformations, $4$ marks)** The parabola $f(x) = 2(x - 1)^{2} - 8$ is shifted $3$ units left and $5$ units up to form $g(x)$. State the new equation and turning point of $g$.
A: Shifting $3$ units left replaces $x$ with $x + 3$, and $5$ units up adds $5$: $g(x) = 2(x + 2)^{2} - 3$, with turning point $(-2;\ -3)$.
---
Q: **(Finance & Probability, $6$ marks)** **(a)** Convert $8\%$ p.a. compounded quarterly to an effective annual rate (to $2$ d.p.). **(b)** A bag has $4$ blue and $6$ red counters. Two are drawn without replacement. Find the probability of drawing at least one blue counter.
A: **(a)** $i_{\text{eff}} = \left(1 + \frac{0{,}08}{4}\right)^{4} - 1 = (1{,}02)^{4} - 1 \approx 0{,}0824 \implies 8{,}24\%$ p.a. **(b)** Using complement: $P(\text{both red}) = \frac{6}{10} \times \frac{5}{9} = \frac{1}{3}$, so $P(\text{at least one blue}) = 1 - \frac{1}{3} = \frac{2}{3}$.
```

## Further help

- Siyavula Mathematics Grade 11: [1.4 Applications of exponentials](https://www.siyavula.com/read/za/mathematics/grade-11/exponents-and-surds/01-exponents-and-surds-04), [2.6 Nature of roots](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-06), [3.2 Quadratic sequences](https://www.siyavula.com/read/za/mathematics/grade-11/number-patterns/03-number-patterns-02), [5.1 Quadratic functions](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-01), [9.3 Timelines](https://www.siyavula.com/read/za/mathematics/grade-11/finance-growth-and-decay/09-finance-growth-and-decay-03), and [10.3 More Venn diagrams](https://www.siyavula.com/read/za/mathematics/grade-11/probability/10-probability-03).
