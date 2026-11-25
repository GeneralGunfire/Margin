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

> **What you'll learn:** how to use the quadratic formula to solve any quadratic equation, and how to give answers in surd or decimal form.
>
> **Prerequisites:** [Solving by completing the square](/library/pure-mathematics/equations-and-inequalities/solving-and-turning-points), and simplifying surds.

## The idea in plain language

Completing the square works for every quadratic, but it is slow. If you do it once on the general equation $ax^2 + bx + c = 0$, you get a formula that does the work for you. You never have to derive it in an exam, but knowing it comes from completing the square helps you trust it.

Use it when the quadratic will not factorise, or when the question asks for answers "correct to two decimal places".

## The formula

```rule
title: The quadratic formula
ax^{2} + bx + c = 0 \;\Longrightarrow\; x = \frac{-b \pm \sqrt{b^{2} - 4ac}}{2a}
```

**Steps**

1. Write the equation in standard form $ax^2 + bx + c = 0$ and identify $a$, $b$ and $c$ with their signs.
2. Substitute in brackets, so negatives are handled properly.
3. Work out $b^2 - 4ac$ first (the discriminant).
4. Give the answer in the form the question asks for.

## Worked example 1 (basic)

```steps
title: Solve $x^{2} - 3x - 5 = 0$ (leave in surd form, then 2 decimals)
Identify the values :: a = 1,\quad b = -3,\quad c = -5
Substitute into the formula :: x = \frac{-(-3) \pm \sqrt{(-3)^{2} - 4(1)(-5)}}{2(1)}
Simplify under the root :: x = \frac{3 \pm \sqrt{9 + 20}}{2}
Surd form :: x = \frac{3 \pm \sqrt{29}}{2}
Calculate :: x \approx 4{,}19 \quad\text{or}\quad x \approx -1{,}19
```

## Worked example 2 (a is not 1)

```steps
title: Solve $2x^{2} + 5x - 1 = 0$, correct to 2 decimal places
Identify the values :: a = 2,\quad b = 5,\quad c = -1
Substitute :: x = \frac{-5 \pm \sqrt{25 - 4(2)(-1)}}{2(2)}
Simplify under the root :: x = \frac{-5 \pm \sqrt{33}}{4}
Calculate :: x \approx 0{,}19 \quad\text{or}\quad x \approx -2{,}69
```

## Worked example 3 (exam level)

```steps
title: Solve $3x^{2} = 7x + 2$, correct to 2 decimal places
Rearrange into standard form first :: 3x^{2} - 7x - 2 = 0
Identify the values :: a = 3,\quad b = -7,\quad c = -2
Substitute :: x = \frac{7 \pm \sqrt{49 + 24}}{6}
Simplify under the root :: x = \frac{7 \pm \sqrt{73}}{6}
Calculate :: x \approx 2{,}59 \quad\text{or}\quad x \approx -0{,}26
```

> **Common mistakes**
>
> - Using the formula before the equation is in standard form. $3x^2 = 7x + 2$ has $b = -7$, not $7$.
> - Losing a sign: $-b$ when $b = -3$ is $+3$.
> - Writing $-b^2$ instead of $b^2$. For $b = -3$, $b^2 = 9$. Use brackets.
> - Dividing only part of the top by $2a$. The whole numerator is divided.
> - Rounding too early. Keep the full calculator value until the end.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Solve $x^{2} + 4x - 2 = 0$, correct to 2 decimal places.
A: $a = 1,\ b = 4,\ c = -2$. $x = \frac{-4 \pm \sqrt{16 + 8}}{2} = \frac{-4 \pm \sqrt{24}}{2} = -2 \pm \sqrt{6}$. So $x \approx 0{,}45$ or $x \approx -4{,}45$.
---
Q: Solve $2x^{2} - 3x - 4 = 0$, correct to 2 decimal places.
A: $x = \frac{3 \pm \sqrt{9 + 32}}{4} = \frac{3 \pm \sqrt{41}}{4}$. So $x \approx 2{,}35$ or $x \approx -0{,}85$.
---
Q: Solve $3x^{2} + x - 5 = 0$, correct to 2 decimal places.
A: $x = \frac{-1 \pm \sqrt{1 + 60}}{6} = \frac{-1 \pm \sqrt{61}}{6}$. So $x \approx 1{,}14$ or $x \approx -1{,}47$.
---
Q: Solve $5x^{2} - 2x - 1 = 0$, correct to 2 decimal places.
A: $x = \frac{2 \pm \sqrt{4 + 20}}{10} = \frac{2 \pm \sqrt{24}}{10} = \frac{1 \pm \sqrt{6}}{5}$. So $x \approx 0{,}69$ or $x \approx -0{,}29$.
---
Q: Solve $x^{2} - 6x + 3 = 0$. Leave in simplest surd form.
A: $x = \frac{6 \pm \sqrt{36 - 12}}{2} = \frac{6 \pm \sqrt{24}}{2} = \frac{6 \pm 2\sqrt{6}}{2} = 3 \pm \sqrt{6}$.
---
Q: Solve $4x^{2} + 7x + 1 = 0$, correct to 2 decimal places.
A: $x = \frac{-7 \pm \sqrt{49 - 16}}{8} = \frac{-7 \pm \sqrt{33}}{8}$. So $x \approx -0{,}16$ or $x \approx -1{,}59$.
```

## Further help

- Siyavula Mathematics Grade 11, [2.3 Quadratic formula](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-03).
