---
title: Why complete the square
youtube_query: Grade 11 completing the square quadratic equations
subject: pure-mathematics
topic: Equations and inequalities
part: Algebra
term: 1
subtopic: Completing the square
order: 211
---

> **What you'll learn:** *visually* why $x^2 + bx$ is a square missing its corner, how to rewrite $ax^2 + bx + c$ in the form $a(x+p)^2 + q$, and why that single form unlocks maximums, minimums, and solving any quadratic.
>
> **Prerequisites:** expanding $(x+p)^2$, and factorising a common factor.

## 1. The geometry behind the formula

In standard form $x^2 + bx + c$, $x$ sits in two places at once. Completing the square packs $x$ into **one** squared bracket.

Picture $x^2 + bx$ as a square of side $x$ plus a rectangle of area $bx$. Slice that rectangle in half into two strips of width $\frac{b}{2}$ and lay them along two sides of the square:

```diagram
name: completing-square-area
```

The big square of side $\left(x + \frac{b}{2}\right)$ is almost complete—it is only missing the small corner square of area $\left(\frac{b}{2}\right)^2$. Add that corner to complete the square, then subtract it right back so the value stays unchanged.

```rule
title: Completing the square
x^{2} + bx = \left(x + \frac{b}{2}\right)^{2} - \left(\frac{b}{2}\right)^{2}
```

```tryit
title: Quick check
prompt: Rewrite **(a)** $x^2 + 8x + 3$ and **(b)** $x^2 - 10x + 7$ in the form $(x+p)^2 + q$.
hint: Halve the coefficient of $x$ inside the bracket, then subtract that half-number squared before adding the constant.
answer: **(a)** $(x+4)^2 - 16 + 3 = (x+4)^2 - 13$. **(b)** $(x-5)^2 - 25 + 7 = (x-5)^2 - 18$.
```

## 2. When $a \neq 1$, and why it reveals turning points

If $a \neq 1$, factor $a$ out of **only the $x^2$ and $x$ terms** first (leave the constant $c$ outside). Multiply $a$ back through the outer brackets when you simplify:

```compare
title: Watch the coefficient a when completing the square
left_title: Right: factor a out of x² and x only
left:
$$2x^2 - 8x + 3 = 2\left(x^2 - 4x\right) + 3$$
$$= 2\left[(x-2)^2 - 4\right] + 3$$
$$= 2(x-2)^2 - 8 + 3 = 2(x-2)^2 - 5$$
The subtracted $4$ gets multiplied by $2$.
right_title: Wrong: forgetting to multiply the subtracted square by a
right:
$$2(x^2 - 4x) + 3 \neq 2(x-2)^2 - 4 + 3$$
$-4$ lives inside the bracket multiplied by $2$, so pulling it out must give $-8$.
```

Once written as $y = (x - 3)^{2} - 1$, the squared bracket $(x - 3)^{2}$ can never be less than $0$. So $y$ hits its minimum value $-1$ right when $(x - 3) = 0$, at vertex $(3;\ -1)$:

```diagram
name: parabola-vertex-visual
```

```tryit
title: Try it first
prompt: Write $2x^2 + 12x + 5$ in the form $a(x+p)^2 + q$.
hint: Start with $2(x^2 + 6x) + 5$, complete the square inside, and distribute the $2$ carefully.
answer: $2\left[(x+3)^2 - 9\right] + 5 = 2(x+3)^2 - 18 + 5 = 2(x+3)^2 - 13$.
```

## 3. Worked examples

```steps
title: Example 1: Write $x^{2} + 6x + 2$ in the form $(x+p)^{2} + q$
Half of $+6$ is $+3$; add and subtract $3^2 = 9$ :: x^{2} + 6x + 2 = (x + 3)^{2} - 9 + 2
Combine the constants :: = (x + 3)^{2} - 7
```

```steps
title: Example 2: Write $-x^{2} + 6x - 1$ in the form $a(x+p)^{2} + q$ and find its maximum
Factor $-1$ out of the first two terms :: -\left(x^{2} - 6x\right) - 1
Complete the square inside :: = -\left[(x - 3)^{2} - 9\right] - 1
Distribute $-1$ :: = -(x - 3)^{2} + 9 - 1 = -(x - 3)^{2} + 8
Since $-(x-3)^2 \leq 0$ everywhere, the maximum is :: 8 \quad(\text{at } x = 3)
```

```steps
title: Example 3 (Exam level): Show that $x^{2} - 4x + 7 \geq 3$ for all real $x$
Complete the square :: x^{2} - 4x + 7 = (x - 2)^{2} - 4 + 7 = (x - 2)^{2} + 3
Any real square is $\geq 0$ :: (x - 2)^{2} \geq 0
Add $3$ to both sides :: (x - 2)^{2} + 3 \geq 3
```

> **Common mistakes**
>
> - **Sign flip inside the bracket:** $x^2 - 10x$ uses $(x - 5)^2$, never $(x + 5)^2$.
> - **Adding instead of subtracting the square:** $(x+3)^2 = x^2 + 6x + 9$, so you must *subtract* $9$ to stay equal to $x^2 + 6x$.
> - **Forgetting $a$ on the constant inside:** always keep square brackets `[...]` around the completed square until $a$ is distributed.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Write $x^{2} + 10x + 11$ in the form $(x+p)^{2} + q$.
A: $(x+5)^2 - 25 + 11 = (x+5)^2 - 14$.
---
Q: Write $x^{2} + 3x$ in the form $(x+p)^{2} + q$.
A: Half of $3$ is $\frac{3}{2}$: $\left(x + \frac{3}{2}\right)^2 - \frac{9}{4}$.
---
Q: Write $3x^{2} - 12x + 14$ in the form $a(x+p)^{2} + q$ and state its minimum value.
A: $3(x^2 - 4x) + 14 = 3\left[(x-2)^2 - 4\right] + 14 = 3(x-2)^2 + 2$. Minimum value is $2$ (at $x = 2$).
---
Q: Write $-2x^{2} - 8x + 1$ in the form $a(x+p)^{2} + q$ and state its maximum value.
A: $-2(x^2 + 4x) + 1 = -2\left[(x+2)^2 - 4\right] + 1 = -2(x+2)^2 + 9$. Maximum value is $9$ (at $x = -2$).
---
Q: **(Exam level)** Determine the minimum value of $x^{2} - 6x + 15$, and the value of $x$ where it occurs.
A: $(x-3)^2 - 9 + 15 = (x-3)^2 + 6$. Minimum value is $6$, occurring at $x = 3$.
```

## Further help

- Siyavula Mathematics Grade 11, [2.2 Completing the square](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-02).
