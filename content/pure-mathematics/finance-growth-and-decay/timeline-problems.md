---
title: Timeline problems
youtube_query: Grade 11 finance timeline problems compound interest
subject: pure-mathematics
topic: Finance, growth and decay
part: Algebra
term: 3
subtopic: Timeline problems
order: 1041
---

> **What you'll learn:** how to draw a clean **financial timeline** whenever interest rates change or extra deposits and withdrawals occur partway through an account, and two equivalent ways to compute the final balance in a single unrounded calculator expression.
>
> **Prerequisites:** [Nominal versus effective](/library/pure-mathematics/finance-growth-and-decay/nominal-versus-effective).

## 1. Breaking a changing story into stages

Real accounts rarely stay untouched at a fixed interest rate. A saver might top up an account at $T_{2}$, withdraw cash for fees at $T_{3}$, or see the bank change its interest rate halfway through. A **timeline** marks $T_{0}, T_{1}, T_{2}, \dots$ along a line, placing every cash flow below the line and every interest rate interval above it.

Toggle between the two calculation methods below for an account starting with $\text{R}10\,000$ at $8\%$ p.a. for $2$ years, followed by a $\text{R}4\,000$ deposit at $T_{2}$ and a new rate of $10\%$ p.a. for $3$ more years:

```diagram
name: finance-timeline
```

```rule
title: Golden rule for timelines
\text{Only add or subtract amounts at the SAME point in time } (T_k),
\text{or move every separate cash flow forward to the final date } (T_{\text{end}}).
```

## 2. Two equivalent methods

```compare
title: Step-by-step compounding vs separate cash flows
left_title: Method 1: Compound step-by-step
left:
Grow the balance to the event date, **add deposits** (or **subtract withdrawals**), then grow the new balance across the next interval:
$$A = \bigl(P(1 + i_{1})^{n_{1}} + D\bigr)(1 + i_{2})^{n_{2}}$$
Works best when rates change mid-way.
right_title: Method 2: Track each cash flow to the end
right:
Grow each deposit or withdrawal from the date it occurs all the way to $T_{\text{end}}$:
$$A = P(1 + i_{1})^{n_{1}}(1 + i_{2})^{n_{2}} + D(1 + i_{2})^{n_{2}}$$
Notice both expressions expand to the exact same value! Keep brackets intact so you never round midway.
```

```tryit
title: Quick check
prompt: $\text{R}5\,000$ is deposited at $T_{0}$ and a further $\text{R}3\,000$ is deposited at $T_{1}$. The account earns $6\%$ p.a. compounded annually throughout. Find the balance at $T_{3}$.
hint: Grow $\text{R}5\,000$ for $3$ years and $\text{R}3\,000$ for $3 - 1 = 2$ years, then add them.
answer: $A = 5\,000(1{,}06)^{3} + 3\,000(1{,}06)^{2} = \text{R}9\,325{,}88$.
```

## 3. Worked examples

```steps
title: Example 1 (Rate change and deposit): $\text{R}10\,000$ is invested at $8\%$ p.a. compounded annually. After $2$ years, $\text{R}4\,000$ is deposited and the rate rises to $10\%$ p.a. Find the total after $5$ years ($T_{5}$).
Draw the intervals :: T_{0} \xrightarrow{2\text{ yrs @ }8\%} T_{2} \text{ (add R}4\,000\text{)} \xrightarrow{3\text{ yrs @ }10\%} T_{5}
Grow $T_{0}$ deposit to $T_{2}$ and add $\text{R}4\,000$ :: B_{2} = 10\,000(1{,}08)^{2} + 4\,000
Grow $B_{2}$ from $T_{2}$ to $T_{5}$ ($3$ years at $10\%$) :: A = \bigl(10\,000(1{,}08)^{2} + 4\,000\bigr)(1{,}10)^{3}
Compute in one line on the calculator :: A = \text{R}20\,848{,}78
```

```steps
title: Example 2 (Mixed compounding periods + withdrawal): $\text{R}50\,000$ is invested at $8\%$ p.a. compounded monthly. After $2$ years ($24$ months), $\text{R}12\,000$ is withdrawn, and for the next $3$ years the interest rate changes to $9\%$ p.a. compounded quarterly. Find the balance at $T_{5}$.
Convert both nominal rates :: \text{Stage 1: } \frac{0{,}08}{12}\text{ for } 24\text{ months};\qquad \text{Stage 2: } \frac{0{,}09}{4} = 0{,}0225\text{ for } 12\text{ quarters}
Write one single expression (subtracting $\text{R}12\,000$ at $T_{2}$) :: A = \left(50\,000\left(1 + \frac{0{,}08}{12}\right)^{24} - 12\,000\right)\left(1 + \frac{0{,}09}{4}\right)^{12}
Compute without rounding intermediate steps :: A = \text{R}60\,919{,}91
```

```steps
title: Example 3 (Exam level — solving for an unknown deposit $X$): An investor deposits $\text{R}30\,000$ at $T_{0}$ and a further amount $X$ at $T_{2}$ into an account earning $8\%$ p.a. compounded annually. At $T_{5}$, the account holds $\text{R}80\,000$. Calculate $X$.
Move both deposits to $T_{5}$ ($5$ yrs for $T_{0}$, $3$ yrs for $T_{2}$) :: 30\,000(1{,}08)^{5} + X(1{,}08)^{3} = 80\,000
Isolate the $X(1{,}08)^{3}$ term :: X(1{,}08)^{3} = 80\,000 - 30\,000(1{,}08)^{5}
Divide both sides by $(1{,}08)^{3}$ :: X = \frac{80\,000 - 30\,000(1{,}08)^{5}}{(1{,}08)^{3}}
Evaluate in one line :: X = \text{R}28\,514{,}58
```

> **Common mistakes**
>
> - **Counting from $T_{0}$ for a later deposit:** a deposit made at $T_{2}$ in a $5$-year plan only earns interest for $5 - 2 = 3$ years, not $5$.
> - **Rounding the balance at $T_{2}$ before compounding Stage 2:** rounding midway introduces cent errors in exam answers; type the entire bracketed expression into your calculator at once.
> - **Applying $t$ instead of $m \cdot t$ when compounding switches from monthly to quarterly.**

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: $\text{R}18\,000$ is invested at $7\%$ p.a. compounded annually. At the end of $2$ years, another $\text{R}6\,000$ is deposited and the interest rate rises to $9\%$ p.a. compounded annually. Calculate the final value at the end of $5$ years.
A: $A = \bigl(18\,000(1{,}07)^{2} + 6\,000\bigr)(1{,}09)^{3} = \text{R}34\,458{,}39$.
---
Q: $\text{R}30\,000$ is deposited at $T_{0}$ at $10\%$ p.a. compounded semi-annually. Exactly $2$ years later, $\text{R}8\,000$ is withdrawn. If the interest rate remains unchanged, find the value of the investment at $T_{4}$.
A: Semi-annual rate $= \frac{0{,}10}{2} = 0{,}05$. Stage 1 has $4$ half-years and Stage 2 has $4$ half-years: $A = \bigl(30\,000(1{,}05)^{4} - 8\,000\bigr)(1{,}05)^{4} = \text{R}34\,599{,}61$.
---
Q: $\text{R}40\,000$ is invested at $9\%$ p.a. compounded monthly. After $2$ years, an amount $X$ is withdrawn, leaving $\text{R}25\,000$ in the account at the end of year $3$ ($T_{3}$). Calculate $X$.
A: Move everything to $T_{3}$ ($36$ months total; withdrawal misses the last $12$ months): $40\,000\left(1 + \frac{0{,}09}{12}\right)^{36} - X\left(1 + \frac{0{,}09}{12}\right)^{12} = 25\,000 \implies X = \dfrac{40\,000(1{,}0075)^{36} - 25\,000}{(1{,}0075)^{12}} = \text{R}25\,000{,}59$.
---
Q: **(Exam level)** A parent deposits $X$ rand today ($T_{0}$) and $2X$ rand two years later ($T_{2}$) into an education fund earning $10\%$ p.a. compounded annually, aiming for $\text{R}50\,000$ at $T_{4}$. Find $X$.
A: $X(1{,}10)^{4} + 2X(1{,}10)^{2} = 50\,000 \implies X\bigl((1{,}10)^{4} + 2(1{,}10)^{2}\bigr) = 50\,000 \implies X = \dfrac{50\,000}{3{,}8841} = \text{R}12\,873{,}00$.
```

## Further help

- Siyavula Mathematics Grade 11, [9.3 Timelines](https://www.siyavula.com/read/za/mathematics/grade-11/finance-growth-and-decay/09-finance-growth-and-decay-03).
