---
title: Model and solve
youtube_query: Grade 11 quadratic equation word problems
subject: pure-mathematics
topic: Equations and inequalities
part: Algebra
term: 1
subtopic: Word problems leading to quadratics
order: 261
---

> **What you'll learn:** how to translate a word problem into a quadratic equation, solve it, and filter out roots that make no sense in the real context.
>
> **Prerequisites:** [Factorise and solve](/library/pure-mathematics/equations-and-inequalities/factorise-and-solve), [The quadratic formula](/library/pure-mathematics/equations-and-inequalities/the-quadratic-formula), and [Equations that become quadratics](/library/pure-mathematics/equations-and-inequalities/equations-that-become-quadratics).

## 1. Turning a story into a quadratic equation

The algebra in a word problem is rarely the hardest part—setting up the equation cleanly is. Follow a repeatable sequence:

1. **Define $x$** clearly (including units).
2. **Express all other quantities** in terms of $x$.
3. **Write one equation** connecting them using the condition in the problem.
4. **Solve** the quadratic, then **check every solution** against reality (lengths, ages, speeds, and counts cannot be negative).

```rule
title: Common relationships used in modelling
\text{Area} = l \times w \qquad \text{Time} = \frac{\text{distance}}{\text{speed}} \qquad a^{2} + b^{2} = c^{2}
```

## 2. Getting speed–distance–time subtraction the right way round

```compare
title: Which fraction is bigger?
left_title: Slower speed → LONGER time
left:
Walking $12\text{ km}$ at $x\text{ km/h}$ takes **more** time than at $(x + 2)\text{ km/h}$:
$$\text{time difference} = \frac{12}{x} - \frac{12}{x + 2} = 1$$
right_title: Swapped subtraction → NEGATIVE time
right:
Putting the smaller time first gives $-1$:
$$\frac{12}{x + 2} - \frac{12}{x} = 1 \quad \text{(wrong sign!)}$$
Always subtract **smaller time from larger time**.
```

```tryit
title: Quick check
prompt: A rectangle's length is $5\text{ cm}$ more than its width, and its area is $36\text{ cm}^{2}$. Set up the quadratic equation for the width $x$ and state why one root must be rejected.
hint: Width $= x$, length $= x + 5$, area $= x(x + 5) = 36$.
answer: $x(x + 5) = 36 \implies x^{2} + 5x - 36 = 0 \implies (x + 9)(x - 4) = 0$. Reject $x = -9$ because width cannot be negative, so width $= 4\text{ cm}$.
```

## 3. Worked examples

```steps
title: Example 1 (Geometry — area): Length is $3\text{ cm}$ more than width, area is $54\text{ cm}^{2}$
Let width be $x\text{ cm}$, so length is $x + 3$ :: \text{width} = x,\quad \text{length} = x + 3
Area equation :: x(x + 3) = 54
Standard form :: x^{2} + 3x - 54 = 0
Factorise :: (x + 9)(x - 6) = 0
Reject $x = -9$ (length $> 0$) :: x = 6
Answer both dimensions :: \text{width } 6\text{ cm},\ \text{length } 9\text{ cm}
```

```steps
title: Example 2 (Consecutive or related numbers): Two positive numbers differ by $4$ and have product $96$
Let the smaller number be $x$, so the larger is $x + 4$ :: x(x + 4) = 96
Standard form and factorise :: x^{2} + 4x - 96 = 0 \;\Longrightarrow\; (x + 12)(x - 8) = 0
Positive numbers only, so reject $x = -12$ :: x = 8
Write both numbers :: 8 \text{ and } 12
```

```steps
title: Example 3 (Exam level — speed and time): Thabo walks $12\text{ km}$ at $x\text{ km/h}$. At $(x + 2)\text{ km/h}$, the walk takes $1\text{ hour}$ less. Find $x$.
Time at speed $x$ is larger than time at speed $x + 2$ :: \frac{12}{x} - \frac{12}{x + 2} = 1
Multiply by LCD $x(x + 2)$ :: 12(x + 2) - 12x = x(x + 2)
Simplify :: 24 = x^{2} + 2x \;\Longrightarrow\; x^{2} + 2x - 24 = 0
Factorise :: (x + 6)(x - 4) = 0
Reject $x = -6$ (speed $> 0$) :: x = 4\text{ km/h}
```

> **Common mistakes**
>
> - **Not rejecting impossible roots:** always check whether a negative or non-integer root violates the problem.
> - **Mixing units:** if speed is in $\text{km/h}$ and distance in $\text{km}$, convert any time in minutes into hours first (e.g. $30\text{ min} = \frac{1}{2}\text{ h}$).
> - **Answering only $x$:** if the question asks for both dimensions or the faster speed, finish the last calculation and include units.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: A rectangle has perimeter $34\text{ cm}$ and area $60\text{ cm}^{2}$. Find its dimensions.
A: Half-perimeter is $17\text{ cm}$, so if width $= x$, length $= 17 - x$. Then $x(17 - x) = 60 \implies x^{2} - 17x + 60 = 0 \implies (x - 5)(x - 12) = 0$. The dimensions are $5\text{ cm}$ and $12\text{ cm}$.
---
Q: The product of two consecutive positive integers is $156$. Find them.
A: Let the integers be $n$ and $n + 1$. Then $n(n + 1) = 156 \implies n^{2} + n - 156 = 0 \implies (n + 13)(n - 12) = 0$. Reject $n = -13$. The integers are $12$ and $13$.
---
Q: A ball's height is $h = 20t - 5t^{2}$ metres after $t$ seconds. When is it $15\text{ m}$ high?
A: $20t - 5t^{2} = 15 \implies 5t^{2} - 20t + 15 = 0 \implies t^{2} - 4t + 3 = 0 \implies (t - 1)(t - 3) = 0$. Both are positive: at $t = 1\text{ s}$ (going up) and $t = 3\text{ s}$ (coming down).
---
Q: The legs of a right-angled triangle are $x\text{ cm}$ and $(x + 7)\text{ cm}$, and the hypotenuse is $13\text{ cm}$. Find $x$.
A: $x^{2} + (x + 7)^{2} = 13^{2} \implies 2x^{2} + 14x + 49 = 169 \implies x^{2} + 7x - 60 = 0 \implies (x + 12)(x - 5) = 0$. Reject $x = -12$, so $x = 5\text{ cm}$.
---
Q: **(Exam level)** Sipho cycles $24\text{ km}$ at $x\text{ km/h}$. Coming back at $(x - 4)\text{ km/h}$ takes $1\text{ hour}$ longer. Find $x$.
A: Slower speed takes longer: $\frac{24}{x - 4} - \frac{24}{x} = 1$. Multiply by $x(x - 4)$: $24x - 24(x - 4) = x(x - 4) \implies x^{2} - 4x - 96 = 0 \implies (x - 12)(x + 8) = 0$. Reject $x = -8$, so $x = 12\text{ km/h}$.
```

## Further help

- Siyavula Mathematics Grade 11, [2.9 Word problems](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-09).
