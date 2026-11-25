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

> **What you'll learn:** how to turn a word problem into a quadratic equation, solve it, and reject answers that do not make sense in the context.
>
> **Prerequisites:** [Factorise and solve](/library/pure-mathematics/equations-and-inequalities/factorise-and-solve), [The quadratic formula](/library/pure-mathematics/equations-and-inequalities/the-quadratic-formula) and [Equations that become quadratics](/library/pure-mathematics/equations-and-inequalities/equations-that-become-quadratics).

## The idea in plain language

Word problems are quadratics in disguise. The maths is the easy part. The skill is reading the story and writing it as an equation. A good routine:

1. **Define** what $x$ stands for, with units.
2. Write the other quantities **in terms of $x$**.
3. Build an equation from the fact the question gives (an area, a product, a time).
4. Solve it.
5. **Check each answer in the story.** A length cannot be negative. A number of people must be a whole number.
6. Answer the question in a sentence, with units.

## The rule

```rule
title: Common models
\text{area} = l \times w \qquad \text{time} = \frac{\text{distance}}{\text{speed}} \qquad \text{Pythagoras: } a^{2} + b^{2} = c^{2}
```

## Worked example 1 (area)

```steps
title: The length of a rectangle is 3 cm more than its width. Its area is 54 cm². Find its dimensions.
Let the width be $x$ cm. The length is then :: x + 3
Area is length times width :: x(x+3) = 54
Expand :: x^{2} + 3x = 54
Standard form :: x^{2} + 3x - 54 = 0
Factorise :: (x+9)(x-6) = 0
$x = -9$ is impossible for a width :: x = 6
Length is $x + 3$ :: \text{width } 6 \text{ cm, length } 9 \text{ cm}
```

## Worked example 2 (numbers)

```steps
title: Two positive numbers differ by 4 and their product is 96. Find them.
Let the smaller number be $x$. The other is :: x + 4
Their product is 96 :: x(x+4) = 96
Standard form :: x^{2} + 4x - 96 = 0
Factorise :: (x+12)(x-8) = 0
Positive numbers only, so reject $x = -12$ :: x = 8
The numbers :: 8 \text{ and } 12
```

## Worked example 3 (exam level: speed)

```steps
title: Thabo walks 12 km at $x$ km/h. If he walked 2 km/h faster, the walk would take 1 hour less. Find $x$.
Time at speed $x$ :: \frac{12}{x}
Time at speed $x + 2$ :: \frac{12}{x+2}
The difference is 1 hour :: \frac{12}{x} - \frac{12}{x+2} = 1
Multiply every term by $x(x+2)$ :: 12(x+2) - 12x = x(x+2)
Simplify the left side :: 24 = x^{2} + 2x
Standard form :: x^{2} + 2x - 24 = 0
Factorise :: (x+6)(x-4) = 0
A speed cannot be negative :: x = 4 \text{ km/h}
```

> **Common mistakes**
>
> - Not defining the letter. Write "Let $x$ be ..." every time.
> - Forgetting to reject impossible answers (negative lengths or speeds).
> - Mixing units: if the speed is in km/h, the time is in hours.
> - Answering with only $x$ when the question asks for something else (the length, the other number).
> - Setting up the wrong difference: decide which time is bigger before subtracting.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: A rectangle has perimeter 34 cm and area 60 cm². Find its length and width.
A: Length plus width is 17. Let the width be $x$: the length is $17 - x$. Then $x(17 - x) = 60$, so $x^2 - 17x + 60 = 0$ and $(x-5)(x-12) = 0$. The dimensions are 5 cm and 12 cm.
---
Q: The product of two consecutive positive integers is 156. Find them.
A: Let them be $n$ and $n + 1$. Then $n(n+1) = 156$, so $n^2 + n - 156 = 0$ and $(n+13)(n-12) = 0$. Reject $n = -13$. The integers are 12 and 13.
---
Q: A ball is thrown up. Its height is $h = 20t - 5t^{2}$ metres after $t$ seconds. When is it 15 m high?
A: $20t - 5t^2 = 15$, so $5t^2 - 20t + 15 = 0$. Divide by 5: $t^2 - 4t + 3 = 0$, so $(t-1)(t-3) = 0$. It is 15 m high after 1 second (going up) and after 3 seconds (coming down).
---
Q: The shorter side of a right-angled triangle is $x$ cm, the other short side is $(x + 7)$ cm and the hypotenuse is 13 cm. Find $x$.
A: Pythagoras: $x^2 + (x+7)^2 = 169$, so $2x^2 + 14x + 49 = 169$ and $x^2 + 7x - 60 = 0$. $(x+12)(x-5) = 0$. Reject $x = -12$. So $x = 5$ cm and the sides are 5, 12 and 13 cm.
---
Q: Sipho cycles 24 km at $x$ km/h. On the way back his speed is 4 km/h slower and the trip takes 1 hour longer. Find $x$.
A: $\frac{24}{x-4} - \frac{24}{x} = 1$. Multiply by $x(x-4)$: $24x - 24(x-4) = x(x-4)$, so $96 = x^2 - 4x$ and $x^2 - 4x - 96 = 0$. $(x-12)(x+8) = 0$. Reject $x = -8$. Sipho's speed is 12 km/h.
```

## Further help

- Siyavula Mathematics Grade 11, [2.9 Word problems](https://www.siyavula.com/read/za/mathematics/grade-11/equations-and-inequalities/02-equations-and-inequalities-09).
