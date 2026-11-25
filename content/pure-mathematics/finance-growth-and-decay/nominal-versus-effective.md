---
title: Nominal versus effective
youtube_query: Grade 11 nominal and effective interest rates
subject: pure-mathematics
topic: Finance, growth and decay
part: Algebra
term: 3
subtopic: Nominal and effective rates
order: 1031
---

> **What you'll learn:** what **compounding frequency** ($m$) does to an annual rate, how to apply $A = P\left(1 + \frac{i^{(m)}}{m}\right)^{m \cdot t}$, and how to convert between **nominal** and **effective annual** rates to compare two accounts fairly.
>
> **Prerequisites:** [Compound growth and decay recap](/library/pure-mathematics/finance-growth-and-decay/compound-growth-and-decay-recap).

## 1. Why compounding more often pays more

Banks usually quote an annual **nominal rate** $i^{(m)}$ such as "$12\%$ p.a. compounded monthly". That does **not** mean you wait all year for $12\%$ once—it means the bank divides $12\%$ by $12$ and adds $\frac{12\%}{12} = 1\%$ at the end of **every single month**.

See the difference on $\text{R}1\,000$ at $10\%$ p.a. for $1$ year:
- **Compounded annually ($m = 1$):** $\text{R}1\,000 \times 1{,}10 = \text{R}1\,100{,}00$ ($10{,}00\%$ effective).
- **Compounded semi-annually ($m = 2$, $5\%$ every 6 months):** after 6 months you have $\text{R}1\,050$; in the next 6 months, you earn $5\%$ on **$\text{R}1\,050$** (not $\text{R}1\,000$), giving $\text{R}1\,050 \times 1{,}05 = \text{R}1\,102{,}50$ (**$10{,}25\%$ effective**).

Because each period's interest immediately starts earning interest, the true annual growth—the **effective rate** $i_{\text{eff}}$—is always higher than $i^{(m)}$ when $m > 1$.

```rule
title: Compounding periods (m) and effective rate conversion
\text{Accumulation over } t \text{ years:} \qquad A = P\left(1 + \frac{i^{(m)}}{m}\right)^{m \cdot t}
\text{Effective annual rate:} \qquad 1 + i_{\text{eff}} = \left(1 + \frac{i^{(m)}}{m}\right)^{m}
```

Standard compounding frequencies per year ($m$):
- **Annually:** $m = 1$
- **Semi-annually (half-yearly):** $m = 2$
- **Quarterly:** $m = 4$
- **Monthly:** $m = 12$
- **Daily:** $m = 365$

## 2. Nominal vs effective rate

```compare
title: Which rate are you converting?
left_title: Nominal to effective
left:
Start with the quoted nominal rate $i^{(m)}$ and compounding frequency $m$:
$$i_{\text{eff}} = \left(1 + \frac{i^{(m)}}{m}\right)^{m} - 1$$
Notice $i_{\text{eff}} > i^{(m)}$ whenever $m > 1$.
right_title: Effective to nominal
right:
Reverse the power with an $m$-th root:
$$1 + \frac{i^{(m)}}{m} = \sqrt[m]{1 + i_{\text{eff}}}$$
$$i^{(m)} = m\left(\sqrt[m]{1 + i_{\text{eff}}} - 1\right)$$
```

```tryit
title: Quick check
prompt: Calculate the effective annual interest rate (to two decimal places) equivalent to $10\%$ p.a. compounded quarterly.
hint: Quarterly means $m = 4$. Substitute $i^{(4)} = 0{,}10$ into $i_{\text{eff}} = \left(1 + \frac{0{,}10}{4}\right)^{4} - 1$.
answer: $1 + i_{\text{eff}} = (1{,}025)^{4} \approx 1{,}103813 \implies i_{\text{eff}} \approx 0{,}103813$, which is $10{,}38\%$ p.a.
```

## 3. Worked examples

```steps
title: Example 1 (Monthly compounding): $\text{R}20\,000$ is invested for $3$ years at $9\%$ p.a. compounded monthly. Calculate the final value.
Identify $P$, $i^{(12)}$, $m$, and $t$ :: P = 20\,000,\quad i^{(12)} = 0{,}09,\quad m = 12,\quad t = 3
Find the monthly rate and total months :: \frac{0{,}09}{12} = 0{,}0075,\qquad n = 12 \times 3 = 36
Substitute into $A = P\left(1 + \frac{i}{m}\right)^{mt}$ :: A = 20\,000(1 + 0{,}0075)^{36} = 20\,000(1{,}0075)^{36}
Evaluate :: A = \text{R}26\,172{,}91
```

```steps
title: Example 2 (Nominal to effective): Convert a nominal rate of $12\%$ p.a. compounded monthly into its effective annual rate (to $2$ decimal places).
Substitute $i^{(12)} = 0{,}12$ and $m = 12$ :: 1 + i_{\text{eff}} = \left(1 + \frac{0{,}12}{12}\right)^{12} = (1{,}01)^{12}
Evaluate $(1{,}01)^{12}$ :: 1 + i_{\text{eff}} \approx 1{,}126825
Subtract $1$ and write as $\%$ :: i_{\text{eff}} \approx 0{,}126825 \implies 12{,}68\% \text{ p.a.}
```

```steps
title: Example 3 (Exam level — comparing two banks): Bank A offers $9{,}4\%$ p.a. compounded quarterly. Bank B offers $9{,}2\%$ p.a. compounded monthly. Which bank gives the better return?
Convert Bank A ($m = 4$) to effective annual rate :: i_{\text{eff},A} = \left(1 + \frac{0{,}094}{4}\right)^{4} - 1 \approx 0{,}097366 \implies 9{,}74\%
Convert Bank B ($m = 12$) to effective annual rate :: i_{\text{eff},B} = \left(1 + \frac{0{,}092}{12}\right)^{12} - 1 \approx 0{,}095978 \implies 9{,}60\%
Compare effective rates :: 9{,}74\% > 9{,}60\% \implies \text{Bank A gives the better return}
```

> **Common mistakes**
>
> - **Dividing $i$ by $m$ without multiplying the exponent $t$ by $m$:** $3$ years compounded monthly is $3 \times 12 = 36$ periods, never $3$.
> - **Comparing nominal rates directly when compounding periods differ:** always convert both options to **effective annual rates** before choosing!
> - **Rounding $i_{\text{eff}}$ too early in reverse conversions:** keep full decimal digits inside your calculator until the very end.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: $\text{R}15\,000$ is invested for $3$ years at $8\%$ p.a. compounded quarterly. Determine the accumulated amount.
A: $m = 4$, total quarters $= 4 \times 3 = 12$, quarterly rate $= \frac{0{,}08}{4} = 0{,}02$. Thus $A = 15\,000(1{,}02)^{12} = \text{R}19\,023{,}63$.
---
Q: Find the effective annual interest rate equivalent to $10\%$ p.a. compounded semi-annually.
A: $i_{\text{eff}} = \left(1 + \frac{0{,}10}{2}\right)^{2} - 1 = (1{,}05)^{2} - 1 = 1{,}1025 - 1 = 0{,}1025 = 10{,}25\%$ p.a.
---
Q: An investment earns an effective rate of $9{,}38069\%$ p.a. Calculate the equivalent nominal rate compounded **monthly**, rounded to two decimal places.
A: $\left(1 + \frac{i^{(12)}}{12}\right)^{12} = 1{,}0938069 \implies 1 + \frac{i^{(12)}}{12} = \sqrt[12]{1{,}0938069} = 1{,}0075 \implies i^{(12)} = 12(0{,}0075) = 0{,}0900$, so $9{,}00\%$ p.a. compounded monthly.
---
Q: **(Exam level)** Determine the nominal interest rate compounded quarterly that corresponds to an effective annual rate of $8{,}243216\%$ p.a.
A: $\left(1 + \frac{i^{(4)}}{4}\right)^{4} = 1{,}08243216 \implies 1 + \frac{i^{(4)}}{4} = \sqrt[4]{1{,}08243216} = 1{,}02 \implies \frac{i^{(4)}}{4} = 0{,}02 \implies i^{(4)} = 0{,}0800 = 8{,}00\%$ p.a. compounded quarterly.
```

## Further help

- Siyavula Mathematics Grade 11, [9.4 Nominal and effective interest rates](https://www.siyavula.com/read/za/mathematics/grade-11/finance-growth-and-decay/09-finance-growth-and-decay-04).
