---
title: Compound growth and decay recap
youtube_query: Grade 11 compound growth and decay finance
subject: pure-mathematics
topic: Finance, growth and decay
part: Algebra
term: 3
subtopic: Compound growth and decay recap
order: 1011
---

> **What you'll learn:** the difference between **simple** and **compound** interest (growth on the starting amount versus growth on the growing balance), how to rearrange $A = P(1 + i)^{n}$ to solve for $P$ or $i$, and why converting percentages to decimals cleanly prevents early rounding errors.
>
> **Prerequisites:** Grade 10 simple and compound interest, percentage-to-decimal conversion, and $n$-th roots from [Rational exponents](/library/pure-mathematics/exponents-and-surds/from-roots-to-fractional-exponents).

## 1. Simple vs compound growth

When money earns **simple interest**, each year adds the same flat rand amount calculated only on the original principal $P$. When money earns **compound interest**, each year's interest joins the balance, so the next year earns interest on top of previous interest too—producing exponential growth.

```rule
title: Grade 10 growth formulas (always convert i = r ÷ 100)
\text{Simple interest:} \qquad A = P(1 + i \cdot n)
\text{Compound interest:} \qquad A = P(1 + i)^{n}
```

- $P$: **principal** (starting amount at $T_{0}$)
- $A$: **accumulated amount** (final value after $n$ periods)
- $i$: **interest rate per period** written as a decimal (e.g. $8\% = 0{,}08$)
- $n$: **number of compounding periods** (years for annual compounding)

## 2. Picking the right unknown

```compare
title: Which variable are you solving for?
left_title: Finding P (working backwards)
left:
Divide both sides of $A = P(1 + i)^{n}$ by $(1 + i)^{n}$:
$$P = \frac{A}{(1 + i)^{n}} = A(1 + i)^{-n}$$
Common in questions asking how much must be invested **today** to reach a future target.
right_title: Finding i (finding the rate)
right:
Isolate $(1 + i)^{n}$ first, then take the $n$-th root:
$$1 + i = \sqrt[n]{\frac{A}{P}} \implies i = \sqrt[n]{\frac{A}{P}} - 1$$
Multiply $i$ by $100$ at the very end to express the rate as a percentage!
```

```tryit
title: Quick check
prompt: $\text{R}10\,000$ is invested at $7{,}5\%$ p.a. compounded annually for $4$ years. Calculate the final amount to the nearest cent.
hint: Convert $7{,}5\% = 0{,}075$ and substitute into $A = P(1 + i)^{n}$.
answer: $A = 10\,000(1 + 0{,}075)^{4} = 10\,000(1{,}075)^{4} = \text{R}13\,354{,}69$.
```

## 3. Worked examples

```steps
title: Example 1 (Compound growth): $\text{R}12\,000$ is invested for $5$ years at $8\%$ p.a. compounded annually. Find the value after $5$ years and the total interest earned.
Identify $P$, $i$, and $n$ :: P = 12\,000,\qquad i = \frac{8}{100} = 0{,}08,\qquad n = 5
Substitute into $A = P(1 + i)^{n}$ :: A = 12\,000(1 + 0{,}08)^{5} = 12\,000(1{,}08)^{5}
Evaluate without rounding early :: A = \text{R}17\,631{,}94
Subtract $P$ for interest earned :: \text{Interest} = 17\,631{,}94 - 12\,000 = \text{R}5\,631{,}94
```

```steps
title: Example 2 (Finding the starting principal $P$): A learner needs $\text{R}25\,000$ in $4$ years' time. How much must be deposited now at $9\%$ p.a. compounded annually?
Write the compound formula :: 25\,000 = P(1 + 0{,}09)^{4}
Divide both sides by $(1{,}09)^{4}$ :: P = \frac{25\,000}{(1{,}09)^{4}}
Evaluate :: P = \text{R}17\,710{,}63
```

```steps
title: Example 3 (Solving for $i$): $\text{R}15\,000$ grows to $\text{R}19\,965$ in $3$ years at an annual compound rate. Find the annual interest rate.
Set up $A = P(1 + i)^{n}$ :: 19\,965 = 15\,000(1 + i)^{3}
Divide by $15\,000$ :: (1 + i)^{3} = \frac{19\,965}{15\,000} = 1{,}331
Take the cube root :: 1 + i = \sqrt[3]{1{,}331} = 1{,}10
Subtract $1$ and convert to $\%$ :: i = 0{,}10 \implies r = 10\% \text{ p.a.}
```

> **Common mistakes**
>
> - **Substituting $8$ instead of $0{,}08$ for $i$:** always divide the percentage rate by $100$ before placing it into $(1 + i)^{n}$.
> - **Using simple interest when the question says "compounded":** check the wording carefully—only use $A = P(1 + in)$ for simple interest or straight-line depreciation.
> - **Rounding intermediate powers:** keep full calculator precision until the final step, then round currency to **two decimal places**.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: $\text{R}8\,500$ is invested for $6$ years at $7{,}5\%$ p.a. **simple interest**. Calculate the final amount.
A: $A = 8\,500\bigl(1 + 0{,}075 \times 6\bigr) = 8\,500(1{,}45) = \text{R}12\,325{,}00$.
---
Q: Using the same $\text{R}8\,500$ for $6$ years at $7{,}5\%$ p.a., calculate the final amount if interest is **compounded annually** instead, and state the extra interest earned.
A: $A = 8\,500(1{,}075)^{6} = \text{R}13\,118{,}06$. Compounding earns $13\,118{,}06 - 12\,325{,}00 = \text{R}793{,}06$ more.
---
Q: How much must be invested today at $6\%$ p.a. compounded annually to grow to $\text{R}45\,000$ after $5$ years?
A: $P = \dfrac{45\,000}{(1{,}06)^{5}} = \text{R}33\,626{,}62$.
---
Q: **(Exam level)** An investment of $\text{R}12\,000$ grows to $\text{R}18\,000$ over $4$ years with interest compounded annually. Calculate the annual interest rate correct to two decimal places.
A: $18\,000 = 12\,000(1 + i)^{4} \implies (1 + i)^{4} = 1{,}5 \implies 1 + i = \sqrt[4]{1{,}5} \approx 1{,}10668 \implies i \approx 0{,}10668 \implies r = 10{,}67\%\text{ p.a.}$
```

## Further help

- Siyavula Mathematics Grade 11, [9.2 Simple and compound depreciation](https://www.siyavula.com/read/za/mathematics/grade-11/finance-growth-and-decay/09-finance-growth-and-decay-02).
