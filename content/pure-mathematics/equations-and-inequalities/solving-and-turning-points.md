---
title: Solving and turning points
youtube_query: Grade 11 turning point of a parabola
subject: pure-mathematics
topic: Equations and inequalities
part: Algebra
term: 1
subtopic: Completing the square
order: 212
---

> **What you'll learn:** how to solve a quadratic equation by completing the square, and how to read the turning point and range from the completed form.
>
> **Prerequisites:** [Why complete the square](/library/pure-mathematics/equations-and-inequalities/why-complete-the-square), and simplifying surds.

## The idea in plain language

Once the equation is written as a square equal to a number, you can undo the square with a square root. Remember to take **both** the positive and the negative root.

The same completed form $y = a(x+p)^2 + q$ also tells you the **turning point** $(-p;\ q)$. If $a > 0$ the parabola opens up and $q$ is the minimum. If $a < 0$ it opens down and $q$ is the maximum.

## The method

```rule
title: Solving by completing the square
(x+p)^{2} = k \;\Longrightarrow\; x = -p \pm \sqrt{k} \qquad (k \geq 0)
```

If $k < 0$ there is **no real solution**, because a real number squared is never negative.

## Worked example 1 (basic)

```steps
title: Solve $x^{2} + 6x + 2 = 0$ by completing the square
Move the constant across :: x^{2} + 6x = -2
Add $3^2$ to both sides :: x^{2} + 6x + 9 = -2 + 9
Write the left side as a square :: (x+3)^{2} = 7
Take both square roots :: x + 3 = \pm\sqrt{7}
Solve for $x$ :: x = -3 \pm \sqrt{7}
```

## Worked example 2 (a is not 1)

```steps
title: Solve $2x^{2} - 4x - 3 = 0$, correct to two decimal places
Divide every term by 2 :: x^{2} - 2x - \frac{3}{2} = 0
Move the constant across :: x^{2} - 2x = \frac{3}{2}
Add $1^2$ to both sides :: x^{2} - 2x + 1 = \frac{3}{2} + 1
Write as a square :: (x-1)^{2} = \frac{5}{2}
Take both square roots :: x - 1 = \pm\sqrt{\frac{5}{2}}
Calculate with full accuracy :: x = 1 \pm 1{,}5811
The two answers :: x \approx 2{,}58 \quad\text{or}\quad x \approx -0{,}58
```

## Worked example 3 (turning point)

```steps
title: Find the turning point and range of $y = -x^{2} + 4x + 1$
Factor $-1$ out of the first two terms :: y = -\left(x^{2} - 4x\right) + 1
Complete the square inside :: y = -\left[(x-2)^{2} - 4\right] + 1
Multiply out :: y = -(x-2)^{2} + 4 + 1
Simplify :: y = -(x-2)^{2} + 5
Turning point: bracket is zero at $x = 2$ :: (2;\ 5)
Since $a < 0$ it is a maximum, so the range is :: y \leq 5
```

> **Common mistakes**
>
> - Writing only the positive root. Always $\pm$.
> - Forgetting to add the square to **both** sides when solving.
> - Dividing by $a$ on one side only. Divide every term first.
> - Reading the turning point's $x$-coordinate as $+p$. For $(x-2)^2$ the $x$-coordinate is $+2$; the sign flips.
> - Giving a real answer when the square equals a negative number. There is none.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Solve $x^{2} + 4x - 1 = 0$ by completing the square. Leave in surd form.
A: $x^2 + 4x + 4 = 1 + 4$, so $(x+2)^2 = 5$ and $x = -2 \pm \sqrt{5}$.
---
Q: Solve $x^{2} - 6x + 4 = 0$ by completing the square. Leave in surd form.
A: $x^2 - 6x + 9 = -4 + 9$, so $(x-3)^2 = 5$ and $x = 3 \pm \sqrt{5}$.
---
Q: Solve $x^{2} + 3x - 1 = 0$ by completing the square.
A: $x^2 + 3x + \frac{9}{4} = 1 + \frac{9}{4} = \frac{13}{4}$, so $\left(x + \frac{3}{2}\right)^2 = \frac{13}{4}$. Then $x = \frac{-3 \pm \sqrt{13}}{2}$.
---
Q: Solve $2x^{2} + 8x + 1 = 0$ by completing the square.
A: Divide by 2: $x^2 + 4x = -\frac{1}{2}$. Add 4: $(x+2)^2 = \frac{7}{2}$. So $x = -2 \pm \sqrt{\frac{7}{2}} = -2 \pm \frac{\sqrt{14}}{2}$.
---
Q: Solve $x^{2} - 2x + 5 = 0$ by completing the square.
A: $x^2 - 2x + 1 = -5 + 1$, so $(x-1)^2 = -4$. A square cannot be negative, so there is no real solution.
---
Q: Find the turning point of $y = x^{2} - 8x + 19$ and state whether it is a maximum or minimum.
A: $y = (x-4)^2 - 16 + 19 = (x-4)^2 + 3$. The turning point is $(4;\ 3)$. Since $a = 1 > 0$ it is a minimum.
```

## Further help

- Siyavula Mathematics Grade 11, [2.2 Completing the square](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-02).
