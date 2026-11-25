---
title: Unit circle and CAST
youtube_query: Grade 11 unit circle and CAST diagram
subject: pure-mathematics
topic: Trigonometry: identities, reduction formulae and equations
part: Geometry
term: 1
subtopic: Identities and reduction formulae
order: 311
---

> **What you'll learn:** how to use a point on the Cartesian plane to define sine, cosine and tangent for any angle, and how the CAST rule tells you the signs in each quadrant.
>
> **Prerequisites:** the right-angled triangle ratios (SOH CAH TOA) from Grade 10, and the Pythagorean theorem.

## The idea in plain language

In a right-angled triangle the angle is always acute. To handle angles bigger than $90^\circ$ (and negative angles), place the angle on the Cartesian plane with its starting arm along the positive $x$-axis. A point $P(x;\ y)$ on the other arm, at distance $r$ from the origin, gives the ratios:

$$\sin\theta = \frac{y}{r}, \qquad \cos\theta = \frac{x}{r}, \qquad \tan\theta = \frac{y}{x}, \qquad r = \sqrt{x^2 + y^2}.$$

Here $r$ is always positive. The signs of $x$ and $y$ change from quadrant to quadrant, so the signs of the ratios change too. On a **unit circle** ($r = 1$) the point is simply $(\cos\theta;\ \sin\theta)$.

![A unit circle with the four quadrants labelled with the CAST rule: All in the first, Sin in the second, Tan in the third, Cos in the fourth](/content-images/unit-circle-cast.svg)

## The CAST rule

```rule
title: CAST: which ratios are positive
\text{I: } All \quad \text{II: } Sin \quad \text{III: } Tan \quad \text{IV: } Cos
```

Starting in the fourth quadrant and going clockwise reads **C-A-S-T**. In each quadrant, only the named ratio (and its reciprocal) is positive. In the second quadrant $y > 0$ and $x < 0$, so $\sin\theta > 0$ but $\cos\theta < 0$ and $\tan\theta < 0$.

## Worked example 1 (signs)

```steps
title: State whether each ratio is positive or negative: $\sin 210^\circ$, $\cos 120^\circ$, $\tan 300^\circ$
$210^\circ$ is in the third quadrant, where only tan is positive :: \sin 210^\circ < 0
$120^\circ$ is in the second quadrant, where only sin is positive :: \cos 120^\circ < 0
$300^\circ$ is in the fourth quadrant, where only cos is positive :: \tan 300^\circ < 0
```

## Worked example 2 (from a ratio)

```steps
title: If $\cos\theta = -\frac{4}{5}$ and $90^\circ < \theta < 180^\circ$, find $\sin\theta$ and $\tan\theta$ without a calculator
Cosine is $\frac{x}{r}$. Cosine is negative, so $x = -4$ and $r = 5$ :: x = -4,\quad r = 5
Find $y$ with Pythagoras :: y^{2} = r^{2} - x^{2} = 25 - 16 = 9
Second quadrant: $y > 0$ :: y = 3
Sine is $\frac{y}{r}$ :: \sin\theta = \frac{3}{5}
Tangent is $\frac{y}{x}$ :: \tan\theta = \frac{3}{-4} = -\frac{3}{4}
```

## Worked example 3 (exam level)

```steps
title: If $\tan\theta = -\frac{2}{3}$ and $\sin\theta > 0$, find $\cos\theta$ and the value of $13\sin^2\theta$
Tangent is negative, so the angle is in quadrant II or IV :: \text{quadrants II or IV}
Sine is positive, so quadrant II: $y > 0$ and $x < 0$ :: y = 2,\quad x = -3
Find $r$ :: r = \sqrt{(-3)^{2} + 2^{2}} = \sqrt{13}
Cosine is $\frac{x}{r}$ :: \cos\theta = -\frac{3}{\sqrt{13}}
Sine is $\frac{y}{r}$ :: \sin\theta = \frac{2}{\sqrt{13}}
Square the sine and multiply by 13 :: 13\sin^{2}\theta = 13 \times \frac{4}{13} = 4
```

> **Common mistakes**
>
> - Using a negative $r$. The distance $r$ is always positive.
> - Forgetting that $\tan\theta = \frac{y}{x}$, so a negative $x$ makes the tangent negative when $y$ is positive.
> - Using the wrong quadrant because the angle is given in a different form. Always place the angle first.
> - Writing the sign from memory of CAST without checking: "S" in quadrant II means **sin** is positive there, not cos.
> - Dropping the sign of $x$ or $y$ when reading a point.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: State whether $\sin 300^\circ$, $\cos 300^\circ$ and $\tan 300^\circ$ are positive or negative.
A: $300^\circ$ is in the fourth quadrant, where only cosine is positive. So $\sin 300^\circ < 0$, $\cos 300^\circ > 0$ and $\tan 300^\circ < 0$.
---
Q: The point $P(-5;\ 12)$ lies on the terminal arm of angle $\theta$. Find $\sin\theta$, $\cos\theta$ and $\tan\theta$.
A: $r = \sqrt{25 + 144} = 13$. So $\sin\theta = \frac{12}{13}$, $\cos\theta = -\frac{5}{13}$ and $\tan\theta = -\frac{12}{5}$.
---
Q: $\sin\theta = -\frac{3}{5}$ and $\theta$ is in the third quadrant. Find $\cos\theta$ and $\tan\theta$.
A: $y = -3$, $r = 5$, so $x^2 = 25 - 9 = 16$. In quadrant III $x < 0$, so $x = -4$. Then $\cos\theta = -\frac{4}{5}$ and $\tan\theta = \frac{-3}{-4} = \frac{3}{4}$.
---
Q: $\cos\theta = \frac{8}{17}$ and $\sin\theta < 0$. Find $\tan\theta$.
A: $x = 8$, $r = 17$, so $y^2 = 289 - 64 = 225$. Sine is negative, so $y = -15$ and $\tan\theta = -\frac{15}{8}$.
---
Q: If $5\sin\theta + 4 = 0$ and $\theta \in (180^\circ;\ 270^\circ)$, find $\cos\theta$.
A: $\sin\theta = -\frac{4}{5}$, so $y = -4$ and $r = 5$. Then $x^2 = 25 - 16 = 9$. In quadrant III $x < 0$, so $x = -3$ and $\cos\theta = -\frac{3}{5}$.
---
Q: $\tan\theta = \frac{5}{12}$ and $\cos\theta < 0$. Find $\sin\theta$ and $\cos\theta$.
A: Tangent positive and cosine negative gives quadrant III, so $x = -12$ and $y = -5$. $r = \sqrt{144 + 25} = 13$. Then $\sin\theta = -\frac{5}{13}$ and $\cos\theta = -\frac{12}{13}$.
```

## Further help

- Siyavula Mathematics Grade 11, [6.2 Trigonometric identities](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/06-trigonometry-02).
- Siyavula Mathematics Grade 11, [6.3 Reduction formula](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/06-trigonometry-03).
