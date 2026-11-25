---
title: Basic equations
youtube_query: Grade 11 solving basic trigonometric equations
subject: pure-mathematics
topic: Trigonometry: identities, reduction formulae and equations
part: Geometry
term: 1
subtopic: Trigonometric equations
order: 321
---

> **What you'll learn:** how to solve simple trig equations such as $\sin\theta = \frac{1}{2}$ for angles in a given interval, using a reference angle and CAST.
>
> **Prerequisites:** [Reduction to acute angles](/library/pure-mathematics/trigonometry-identities-reduction-formulae-and-equations/reduction-to-acute-angles).

## The idea in plain language

A trig equation asks: **which angles** give a certain ratio? Within one full turn there are usually two answers, because each ratio takes every value twice (once in each of two quadrants).

The graph of $y = \sin\theta$ shows this. The line $y = \frac{1}{2}$ meets the curve at $30^\circ$ and $150^\circ$ in the first turn.

![The sine graph from 0 to 360 degrees with the line y = 0.5 crossing it at 30 and 150 degrees](/content-images/sine-equals-half.svg)

## The method

```rule
title: Solving a basic trig equation
\text{1. isolate the ratio} \quad \text{2. find the reference angle (ignore the sign)} \quad \text{3. use CAST to place it} \quad \text{4. list all angles in the interval}
```

For the reference angle use $\sin^{-1}$, $\cos^{-1}$ or $\tan^{-1}$ of the **positive** value. Then use CAST to decide the two quadrants and the reduction formulae to find the angles.

## Worked example 1 (special angles)

```steps
title: Solve $\cos\theta = -\frac{1}{2}$ for $\theta \in [0^\circ;\ 360^\circ]$
Reference angle: $\cos^{-1}\left(\frac{1}{2}\right)$ :: 60^\circ
Cosine is negative in quadrants II and III :: \text{II and III}
Quadrant II: $180^\circ - 60^\circ$ :: \theta = 120^\circ
Quadrant III: $180^\circ + 60^\circ$ :: \theta = 240^\circ
```

## Worked example 2 (using a calculator)

```steps
title: Solve $5\sin\theta = 1{,}5$ for $\theta \in [0^\circ;\ 360^\circ]$, correct to 1 decimal place
Isolate the ratio :: \sin\theta = 0{,}3
Reference angle (positive value) :: \theta_{ref} = \sin^{-1}(0{,}3) = 17{,}5^\circ
Sine is positive in quadrants I and II :: \text{I and II}
Quadrant I :: \theta = 17{,}5^\circ
Quadrant II: $180^\circ - 17{,}5^\circ$ :: \theta = 162{,}5^\circ
```

## Worked example 3 (exam level)

```steps
title: Solve $2\tan\theta + 2 = 0$ for $\theta \in [-180^\circ;\ 180^\circ]$
Isolate the ratio :: \tan\theta = -1
Reference angle :: \tan^{-1}(1) = 45^\circ
Tangent is negative in quadrants II and IV :: \text{II and IV}
Quadrant II (positive angle) :: \theta = 180^\circ - 45^\circ = 135^\circ
Quadrant IV (negative angle in this interval) :: \theta = -45^\circ
Both lie in $[-180^\circ;\ 180^\circ]$ :: \theta = -45^\circ \quad\text{or}\quad \theta = 135^\circ
```

> **Common mistakes**
>
> - Giving only the calculator's value and missing the second solution.
> - Using the negative number in the inverse function to get the reference angle. Use the positive value, then apply CAST.
> - Forgetting the interval: solutions in $[-180^\circ;\ 180^\circ]$ can be negative angles.
> - Rounding the reference angle too early.
> - Mixing up which quadrants have a positive or negative ratio.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Solve $\sin\theta = \frac{\sqrt{3}}{2}$ for $\theta \in [0^\circ;\ 360^\circ]$.
A: Reference angle $60^\circ$. Sine is positive in quadrants I and II: $\theta = 60^\circ$ or $\theta = 120^\circ$.
---
Q: Solve $\cos\theta = 0{,}8$ for $\theta \in [0^\circ;\ 360^\circ]$, correct to 1 decimal place.
A: Reference angle $\cos^{-1}(0{,}8) = 36{,}9^\circ$. Cosine is positive in quadrants I and IV: $\theta = 36{,}9^\circ$ or $\theta = 360^\circ - 36{,}9^\circ = 323{,}1^\circ$.
---
Q: Solve $\tan\theta = -\sqrt{3}$ for $\theta \in [0^\circ;\ 360^\circ]$.
A: Reference angle $60^\circ$. Tangent is negative in quadrants II and IV: $\theta = 120^\circ$ or $\theta = 300^\circ$.
---
Q: Solve $3\sin\theta + 2 = 0$ for $\theta \in [0^\circ;\ 360^\circ]$, correct to 1 decimal place.
A: $\sin\theta = -\frac{2}{3}$. Reference angle $\sin^{-1}\left(\frac{2}{3}\right) = 41{,}8^\circ$. Sine is negative in quadrants III and IV: $\theta = 180^\circ + 41{,}8^\circ = 221{,}8^\circ$ or $\theta = 360^\circ - 41{,}8^\circ = 318{,}2^\circ$.
---
Q: Solve $2\cos\theta = -1{,}2$ for $\theta \in [-180^\circ;\ 180^\circ]$, correct to 1 decimal place.
A: $\cos\theta = -0{,}6$. Reference angle $\cos^{-1}(0{,}6) = 53{,}1^\circ$. Cosine is negative in quadrants II and III: $\theta = 180^\circ - 53{,}1^\circ = 126{,}9^\circ$ or $\theta = -126{,}9^\circ$.
---
Q: Solve $\sqrt{2}\sin\theta - 1 = 0$ for $\theta \in [-180^\circ;\ 180^\circ]$.
A: $\sin\theta = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$. Reference angle $45^\circ$. Sine is positive in quadrants I and II: $\theta = 45^\circ$ or $\theta = 135^\circ$.
```

## Further help

- Siyavula Mathematics Grade 11, [6.4 Trigonometric equations](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/06-trigonometry-04).
