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

> **What you'll learn:** how to solve any quadratic equation by isolating the squared bracket, why turning points flip the sign of $p$ in $a(x+p)^2 + q$, and how to read the range straight off that form.
>
> **Prerequisites:** [Why complete the square](/library/pure-mathematics/equations-and-inequalities/why-complete-the-square), and simplifying surds.

## 1. Solving equations from a completed square

Once a quadratic is packed into $(x+p)^2 = k$, $x$ appears only once, so you can undo the square directly by taking square roots—with **both** $+$ and $-$ signs:

```rule
title: Solving by completing the square
(x + p)^{2} = k \;\Longrightarrow\; x = -p \pm \sqrt{k} \qquad (k \geq 0)
```

If $k < 0$, there is **no real solution**, because no real number squared can be negative.

```tryit
title: Quick check
prompt: Solve **(a)** $(x - 3)^2 = 5$ and **(b)** $x^2 + 4x - 1 = 0$ by completing the square (leave answers in surd form).
hint: In (b), move $-1$ to the right side first, then add $(\frac{4}{2})^2 = 4$ to both sides.
answer: **(a)** $x - 3 = \pm\sqrt{5} \implies x = 3 \pm \sqrt{5}$. **(b)** $x^2 + 4x + 4 = 1 + 4 \implies (x+2)^2 = 5 \implies x = -2 \pm \sqrt{5}$.
```

## 2. Reading turning points and range without guessing

In $y = a(x+p)^2 + q$, the squared bracket $(x+p)^2$ hits its smallest possible value ($0$) when $x + p = 0$, i.e., **$x = -p$**. At that moment $y = q$, giving the turning point **$(-p;\ q)$**.

```compare
title: Turning point sign and direction
left_title: Why x flips sign
left:
For $y = (x - 4)^2 + 3$, the bracket equals $0$ when $x - 4 = 0$, so $x = +4$.
Turning point: $(4;\ 3)$.
Since $a = +1 > 0$, it opens **up**, so $y \geq 3$.
right_title: Up vs down (range)
right:
For $y = -(x - 2)^2 + 5$, the turning point is $(2;\ 5)$.
Since $a = -1 < 0$, it opens **down**, so $y = 5 - (\text{square}) \leq 5$.
```

```tryit
title: Try it first
prompt: Find the turning point and range of $y = x^2 - 8x + 19$.
hint: Rewrite as $(x + p)^2 + q$, check the sign of $a$, and set the bracket to $0$.
answer: $y = (x-4)^2 - 16 + 19 = (x-4)^2 + 3$. Turning point $(4;\ 3)$, minimum, range $y \geq 3$.
```

## 3. Worked examples

```steps
title: Example 1: Solve $x^{2} + 6x + 2 = 0$ by completing the square
Move the constant to the right :: x^{2} + 6x = -2
Add $\left(\frac{6}{2}\right)^2 = 9$ to both sides :: x^{2} + 6x + 9 = -2 + 9
Factorise the left side as a square :: (x + 3)^{2} = 7
Take both square roots :: x + 3 = \pm\sqrt{7}
Solve for $x$ :: x = -3 \pm \sqrt{7}
```

```steps
title: Example 2: Solve $2x^{2} - 4x - 3 = 0$ correct to two decimal places
Divide every term by $2$ :: x^{2} - 2x - \frac{3}{2} = 0
Move the constant across :: x^{2} - 2x = \frac{3}{2}
Add $(-1)^2 = 1$ to both sides :: x^{2} - 2x + 1 = \frac{3}{2} + 1 = \frac{5}{2}
Write as a square and take roots :: (x - 1)^{2} = \frac{5}{2} \;\Longrightarrow\; x = 1 \pm \sqrt{\frac{5}{2}}
Round only at the end :: x \approx 2{,}58 \quad\text{or}\quad x \approx -0{,}58
```

```steps
title: Example 3 (Exam level): Find the turning point and range of $y = -x^{2} + 4x + 1$
Factor $-1$ from the $x^2$ and $x$ terms :: y = -\left(x^{2} - 4x\right) + 1
Complete the square inside :: y = -\left[(x - 2)^{2} - 4\right] + 1
Distribute $-1$ and simplify :: y = -(x - 2)^{2} + 5
Read turning point and range ($a < 0 \implies$ maximum) :: \text{TP: } (2;\ 5), \qquad \text{Range: } y \leq 5
```

> **Common mistakes**
>
> - **Dropping $\pm$:** taking $\sqrt{k}$ alone loses the second root.
> - **Adding the square to only one side:** when solving an equation, anything added to the left must also be added to the right.
> - **Not flipping the sign of $p$:** $(x + 5)^2 - 1$ has turning point $(-5;\ -1)$, not $(5;\ -1)$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Solve $x^{2} - 6x + 4 = 0$ by completing the square (leave in surd form).
A: $x^2 - 6x + 9 = -4 + 9 \implies (x-3)^2 = 5 \implies x = 3 \pm \sqrt{5}$.
---
Q: Solve $x^{2} + 3x - 1 = 0$ by completing the square.
A: $x^2 + 3x + \frac{9}{4} = 1 + \frac{9}{4} = \frac{13}{4} \implies \left(x + \frac{3}{2}\right)^2 = \frac{13}{4} \implies x = \dfrac{-3 \pm \sqrt{13}}{2}$.
---
Q: Solve $2x^{2} + 8x + 1 = 0$ by completing the square.
A: Divide by $2$: $x^2 + 4x = -\frac{1}{2}$. Add $4$: $(x+2)^2 = \frac{7}{2} \implies x = -2 \pm \dfrac{\sqrt{14}}{2}$.
---
Q: Solve $x^{2} - 2x + 5 = 0$ by completing the square.
A: $x^2 - 2x + 1 = -5 + 1 \implies (x-1)^2 = -4$. No real solution, since a real square cannot be negative.
---
Q: Find the turning point and range of $y = 2x^{2} - 12x + 11$.
A: $y = 2(x^2 - 6x) + 11 = 2\left[(x-3)^2 - 9\right] + 11 = 2(x-3)^2 - 7$. Turning point $(3;\ -7)$; since $a = 2 > 0$, range is $y \geq -7$.
```

## Further help

- Siyavula Mathematics Grade 11, [2.2 Completing the square](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-02).
