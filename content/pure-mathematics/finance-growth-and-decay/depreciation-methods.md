---
title: Depreciation methods
youtube_query: Grade 11 straight line and reducing balance depreciation
subject: pure-mathematics
topic: Finance, growth and decay
part: Algebra
term: 3
subtopic: Depreciation
order: 1021
---

> **What you'll learn:** how to calculate book value using **straight-line** and **reducing-balance** depreciation, why their curves behave so differently over time, and how to solve backwards for the original price $P$ or depreciation rate $i$.
>
> **Prerequisites:** [Compound growth and decay recap](/library/pure-mathematics/finance-growth-and-decay/compound-growth-and-decay-recap).

## 1. Two ways assets lose value

Laptops, delivery vans, and factory machines lose value over time (**depreciation**). Replacing the $+$ sign in the simple and compound growth formulas with a $-$ sign gives two models with very different long-term behaviour.

Toggle between the three annual rates below to compare how straight-line and reducing-balance depreciation fall over $8$ years:

```diagram
name: depreciation-curves
```

```rule
title: Depreciation formulas (always convert i = r ÷ 100)
\text{Straight-line (simple decay):} \qquad A = P(1 - i \cdot n)
\text{Reducing-balance (compound decay):} \qquad A = P(1 - i)^{n}
```

## 2. Straight-line vs reducing-balance

```compare
title: Comparing the two depreciation methods
left_title: Straight-line: A = P(1 - i·n)
left:
Subtracts the **same fixed rand amount** ($P \cdot i$) every year:
- Graph is a **straight line** sloping down.
- Can eventually hit **$\text{R}0$** (when $i \cdot n = 1$, i.e. $n = \frac{1}{i}$ years).
right_title: Reducing-balance: A = P(1 - i)^n
right:
Subtracts a fixed **percentage of the current book value** each year:
- Drops sharply at first, then flattens out as a **decay curve**.
- Approaches $\text{R}0$ asymptotically—**never reaches $\text{R}0$** while $i < 1$.
```

```tryit
title: Quick check
prompt: A delivery motorbike bought for $\text{R}120\,000$ depreciates at $20\%$ p.a. on the **reducing-balance** method. Find its book value after $3$ years.
hint: Use $A = P(1 - i)^{n}$ with $P = 120\,000$, $i = 0{,}20$, and $n = 3$.
answer: $A = 120\,000(1 - 0{,}20)^{3} = 120\,000(0{,}8)^{3} = 120\,000(0{,}512) = \text{R}61\,440{,}00$.
```

## 3. Worked examples

```steps
title: Example 1 (Compare both methods): A machine costs $\text{R}180\,000$ and depreciates at $15\%$ p.a. for $4$ years. Find its book value under (a) straight-line and (b) reducing-balance.
(a) Apply straight-line $A = P(1 - in)$ :: A = 180\,000\bigl(1 - 0{,}15 \times 4\bigr) = 180\,000(0{,}40) = \text{R}72\,000{,}00
(b) Apply reducing-balance $A = P(1 - i)^{n}$ :: A = 180\,000(1 - 0{,}15)^{4} = 180\,000(0{,}85)^{4}
Evaluate part (b) :: A = \text{R}93\,961{,}12
```

```steps
title: Example 2 (Finding straight-line rate $i$): Office furniture worth $\text{R}240\,000$ depreciates on a straight-line basis to half its value ($\text{R}120\,000$) in $5$ years. Find the annual rate of depreciation.
Substitute into $A = P(1 - in)$ :: 120\,000 = 240\,000(1 - 5i)
Divide both sides by $240\,000$ :: 0{,}5 = 1 - 5i
Solve for $i$ :: 5i = 0{,}5 \implies i = 0{,}10
Convert to percentage :: r = 10\% \text{ p.a.}
```

```steps
title: Example 3 (Exam level — reducing-balance rate $i$): A car bought for $\text{R}200\,000$ has a book value of $\text{R}81\,920$ after $4$ years on the reducing-balance method. Calculate the annual depreciation rate.
Set up $A = P(1 - i)^{n}$ :: 81\,920 = 200\,000(1 - i)^{4}
Divide by $200\,000$ :: (1 - i)^{4} = \frac{81\,920}{200\,000} = 0{,}4096
Take the $4$-th root :: 1 - i = \sqrt[4]{0{,}4096} = 0{,}80
Solve for $i$ and convert to $\%$ :: i = 1 - 0{,}80 = 0{,}20 \implies r = 20\% \text{ p.a.}
```

> **Common mistakes**
>
> - **Adding instead of subtracting $i$:** depreciation reduces value, so always write $(1 - i)$, not $(1 + i)$.
> - **Computing $i = \sqrt[n]{A/P} - 1$ for reducing-balance decay:** that formula works for growth! For depreciation, $1 - i = \sqrt[n]{\frac{A}{P}}$, so $i = 1 - \sqrt[n]{\frac{A}{P}}$.
> - **Using reducing-balance when the question specifies "straight-line" (or vice versa):** underline the method name before picking a formula.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: A computer costing $\text{R}16\,000$ depreciates at $20\%$ p.a. on the **straight-line** method. What is its value after $3$ years?
A: $A = 16\,000\bigl(1 - 0{,}20 \times 3\bigr) = 16\,000(0{,}40) = \text{R}6\,400{,}00$.
---
Q: A bakkie bought for $\text{R}250\,000$ depreciates at $12\%$ p.a. on the **reducing-balance** method. Calculate its book value after $5$ years.
A: $A = 250\,000(1 - 0{,}12)^{5} = 250\,000(0{,}88)^{5} = \text{R}131\,932{,}98$.
---
Q: After $4$ years of reducing-balance depreciation, a tractor originally worth $\text{R}160\,000$ is valued at $\text{R}65\,536$. Find the annual rate of depreciation.
A: $(1 - i)^{4} = \dfrac{65\,536}{160\,000} = 0{,}4096 \implies 1 - i = \sqrt[4]{0{,}4096} = 0{,}80 \implies i = 0{,}20$, so the rate is $20\%$ p.a.
---
Q: **(Exam level)** A sound system depreciates at $12{,}5\%$ p.a. on the straight-line method. After how many years will its book value reach $\text{R}0$?
A: Set $A = 0$: $0 = P(1 - 0{,}125n)$. Since $P \neq 0$, $1 - 0{,}125n = 0 \implies n = \dfrac{1}{0{,}125} = 8$ years.
```

## Further help

- Siyavula Mathematics Grade 11, [9.2 Simple and compound depreciation](https://www.siyavula.com/read/za/mathematics/grade-11/finance-growth-and-decay/09-finance-growth-and-decay-02).
