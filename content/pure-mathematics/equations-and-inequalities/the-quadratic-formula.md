---
title: The quadratic formula
youtube_query: Grade 11 quadratic formula solving equations
subject: pure-mathematics
topic: Equations and inequalities
part: Algebra
term: 1
subtopic: Quadratic equations: factorising and the formula
order: 222
---

> **What you'll learn:** where the quadratic formula comes from, how to substitute $a$, $b$, and $c$ safely without sign errors, and when to give surd vs rounded decimal answers.
>
> **Prerequisites:** [Solving and turning points](/library/pure-mathematics/equations-and-inequalities/solving-and-turning-points), and simplifying surds.

## 1. Completing the square, packaged once and for all

If you complete the square on the general equation $ax^2 + bx + c = 0$ just once, you get a single formula that solves **every** quadratic equation—especially ones that don't factorise cleanly or ask for "correct to two decimal places":

```rule
title: The quadratic formula
ax^{2} + bx + c = 0 \;\Longrightarrow\; x = \frac{-b \pm \sqrt{b^{2} - 4ac}}{2a} \qquad (a \neq 0)
```

Before touching the formula, always rewrite the equation in standard form **$ax^2 + bx + c = 0$** so the signs of $a$, $b$, and $c$ are right.

```tryit
title: Quick check
prompt: Rewrite $3x^2 = 7x + 2$ in standard form and identify $a$, $b$, and $c$.
hint: Move $7x$ and $2$ to the left-hand side so the right-hand side is $0$.
answer: $3x^2 - 7x - 2 = 0$, so $a = 3$, $b = -7$, and $c = -2$.
```

## 2. Brackets stop the two biggest formula errors

Most marks lost on the quadratic formula come from dropping brackets around negative numbers or dividing only part of the numerator by $2a$:

```compare
title: Two classic formula slips
left_title: Brackets around b when b < 0
left:
For $b = -3$:
$$b^2 = (-3)^2 = +9 \qquad \text{and} \qquad -b = -(-3) = +3$$
Never type `-3^2` into a calculator without brackets—it computes $-(3^2) = -9$.
right_title: Dividing the ENTIRE top by 2a
right:
$$\frac{6 \pm 2\sqrt{6}}{2} = \frac{2(3 \pm \sqrt{6})}{2} = 3 \pm \sqrt{6}$$
Do **not** cancel $2$ with $6$ alone while leaving $2\sqrt{6}$ untouched (or vice versa).
```

```tryit
title: Try it first
prompt: Solve $x^2 - 6x + 3 = 0$ and leave your answer in simplest **surd** form.
hint: Compute $b^2 - 4ac = 24$, simplify $\sqrt{24} = 2\sqrt{6}$, then divide both terms in the numerator by $2$.
answer: $x = \dfrac{6 \pm \sqrt{36 - 12}}{2} = \dfrac{6 \pm 2\sqrt{6}}{2} = 3 \pm \sqrt{6}$.
```

## 3. Worked examples

```steps
title: Example 1: Solve $x^{2} - 3x - 5 = 0$ (surd form, then 2 decimals)
Read $a, b, c$ :: a = 1,\quad b = -3,\quad c = -5
Substitute with brackets :: x = \frac{-(-3) \pm \sqrt{(-3)^{2} - 4(1)(-5)}}{2(1)}
Simplify inside the root :: x = \frac{3 \pm \sqrt{9 + 20}}{2} = \frac{3 \pm \sqrt{29}}{2}
Evaluate decimals at the end :: x \approx 4{,}19 \quad\text{or}\quad x \approx -1{,}19
```

```steps
title: Example 2: Solve $2x^{2} + 5x - 1 = 0$ correct to 2 decimal places
Read $a, b, c$ :: a = 2,\quad b = 5,\quad c = -1
Substitute :: x = \frac{-5 \pm \sqrt{5^{2} - 4(2)(-1)}}{2(2)}
Simplify under the root :: x = \frac{-5 \pm \sqrt{33}}{4}
Calculate decimals :: x \approx 0{,}19 \quad\text{or}\quad x \approx -2{,}69
```

```steps
title: Example 3 (Exam level): Solve $3x^{2} = 7x + 2$ correct to 2 decimal places
Write in standard form first :: 3x^{2} - 7x - 2 = 0 \implies a = 3,\ b = -7,\ c = -2
Substitute :: x = \frac{-(-7) \pm \sqrt{(-7)^{2} - 4(3)(-2)}}{2(3)}
Simplify under the root :: x = \frac{7 \pm \sqrt{49 + 24}}{6} = \frac{7 \pm \sqrt{73}}{6}
Calculate decimals :: x \approx 2{,}59 \quad\text{or}\quad x \approx -0{,}26
```

> **Common mistakes**
>
> - **Wrong signs from non-standard form:** always move every term to one side before reading $a, b, c$.
> - **Rounding intermediate steps:** keep the exact surd $\frac{7 \pm \sqrt{73}}{6}$ until the final calculator step.
> - **Negative sign inside $-4ac$:** when $a > 0$ and $c < 0$, $-4ac$ is **positive** (e.g., $-4(3)(-2) = +24$).

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Solve $x^{2} + 4x - 2 = 0$, correct to 2 decimal places.
A: $x = \dfrac{-4 \pm \sqrt{16 + 8}}{2} = -2 \pm \sqrt{6} \implies x \approx 0{,}45$ or $x \approx -4{,}45$.
---
Q: Solve $2x^{2} - 3x - 4 = 0$, correct to 2 decimal places.
A: $x = \dfrac{3 \pm \sqrt{9 + 32}}{4} = \dfrac{3 \pm \sqrt{41}}{4} \implies x \approx 2{,}35$ or $x \approx -0{,}85$.
---
Q: Solve $3x^{2} + x - 5 = 0$, correct to 2 decimal places.
A: $x = \dfrac{-1 \pm \sqrt{1 + 60}}{6} = \dfrac{-1 \pm \sqrt{61}}{6} \implies x \approx 1{,}14$ or $x \approx -1{,}47$.
---
Q: Solve $5x^{2} - 2x - 1 = 0$, leaving your answer in simplest surd form.
A: $x = \dfrac{2 \pm \sqrt{4 + 20}}{10} = \dfrac{2 \pm 2\sqrt{6}}{10} = \dfrac{1 \pm \sqrt{6}}{5}$.
---
Q: Solve $4x^{2} + 7x + 1 = 0$, correct to 2 decimal places.
A: $x = \dfrac{-7 \pm \sqrt{49 - 16}}{8} = \dfrac{-7 \pm \sqrt{33}}{8} \implies x \approx -0{,}16$ or $x \approx -1{,}59$.
```

## Further help

- Siyavula Mathematics Grade 11, [2.3 Quadratic formula](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-03).
