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

> **What you'll learn:** how to rewrite $ax^2 + bx + c$ in the form $a(x+p)^2 + q$, and why that form is useful.
>
> **Prerequisites:** expanding $(x+p)^2$, and factorising a common factor.

## The idea in plain language

Some quadratics will not factorise, but every quadratic can be rewritten so that $x$ appears **once**, inside a bracket that is squared. That form is called a **perfect square plus a number**, and it makes two things easy: solving the equation, and spotting the turning point of the parabola.

Start from what you know: $(x+3)^2 = x^2 + 6x + 9$. Reading that backwards, $x^2 + 6x$ is "a square, minus the $9$ that it overshoots by":

$$x^2 + 6x = (x+3)^2 - 9.$$

The $3$ is **half** of the $6$. That is the whole trick.

## The method

```rule
title: Completing the square
x^{2} + bx = \left(x + \frac{b}{2}\right)^{2} - \left(\frac{b}{2}\right)^{2}
```

1. If $a \neq 1$, factor $a$ out of the $x^2$ and $x$ terms first.
2. Halve the coefficient of $x$. Put it in the bracket.
3. **Subtract** its square, so the value stays the same.
4. Add the remaining constant.

The graph shows why this is worth doing. For $y = x^2 - 4x + 7 = (x-2)^2 + 3$ the lowest point is directly visible: the bracket is zero when $x = 2$, leaving $y = 3$.

![The parabola y = x squared minus 4x plus 7 with its turning point at (2;3) marked](/content-images/complete-square-vertex.svg)

## Worked example 1 (basic)

```steps
title: Write $x^{2} + 6x + 2$ in the form $(x+p)^{2} + q$
Half of 6 is 3. Put it in the bracket :: x^{2} + 6x + 2 = (x+3)^{2} - 3^{2} + 2
Subtract the square, then add the constant :: = (x+3)^{2} - 9 + 2
Simplify :: = (x+3)^{2} - 7
```

## Worked example 2 (a is not 1)

```steps
title: Write $2x^{2} - 8x + 3$ in the form $a(x+p)^{2} + q$
Factor 2 out of the first two terms only :: 2\left(x^{2} - 4x\right) + 3
Half of $-4$ is $-2$ :: 2\left[(x-2)^{2} - 4\right] + 3
Multiply the 2 into the square brackets :: 2(x-2)^{2} - 8 + 3
Simplify :: = 2(x-2)^{2} - 5
```

## Worked example 3 (exam level)

```steps
title: Show that $x^{2} - 4x + 7$ is never less than 3
Complete the square :: x^{2} - 4x + 7 = (x-2)^{2} + 3
A square is never negative :: (x-2)^{2} \geq 0
Add 3 to both sides :: (x-2)^{2} + 3 \geq 3
The smallest value is 3, when $x = 2$ :: \text{minimum value} = 3
```

> **Common mistakes**
>
> - Forgetting to subtract the square. $(x+3)^2$ has an extra $9$, so you must take it off.
> - Halving wrongly or forgetting the sign: for $x^2 - 10x$ the bracket is $(x-5)^2$, not $(x+5)^2$.
> - Not factoring out $a$ first, or factoring it out of the constant as well.
> - Forgetting to multiply the subtracted square by $a$ when $a \neq 1$.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Write $x^{2} + 8x + 3$ in the form $(x+p)^{2} + q$.
A: Half of 8 is 4: $(x+4)^2 - 16 + 3 = (x+4)^2 - 13$.
---
Q: Write $x^{2} - 10x + 7$ in the form $(x+p)^{2} + q$.
A: Half of $-10$ is $-5$: $(x-5)^2 - 25 + 7 = (x-5)^2 - 18$.
---
Q: Write $x^{2} + 3x$ in the form $(x+p)^{2} + q$.
A: Half of 3 is $\frac{3}{2}$: $\left(x + \frac{3}{2}\right)^2 - \frac{9}{4}$.
---
Q: Write $2x^{2} + 12x + 5$ in the form $a(x+p)^{2} + q$.
A: $2(x^2 + 6x) + 5 = 2\left[(x+3)^2 - 9\right] + 5 = 2(x+3)^2 - 18 + 5 = 2(x+3)^2 - 13$.
---
Q: Write $-x^{2} + 6x - 1$ in the form $a(x+p)^{2} + q$. State the maximum value.
A: $-(x^2 - 6x) - 1 = -\left[(x-3)^2 - 9\right] - 1 = -(x-3)^2 + 9 - 1 = -(x-3)^2 + 8$. The bracket term is at most 0, so the maximum value is 8, when $x = 3$.
---
Q: Write $3x^{2} - 12x + 14$ in the form $a(x+p)^{2} + q$ and state its minimum value.
A: $3(x^2 - 4x) + 14 = 3\left[(x-2)^2 - 4\right] + 14 = 3(x-2)^2 - 12 + 14 = 3(x-2)^2 + 2$. The minimum value is 2, when $x = 2$.
```

## Further help

- Siyavula Mathematics Grade 11, [2.2 Completing the square](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-02).
