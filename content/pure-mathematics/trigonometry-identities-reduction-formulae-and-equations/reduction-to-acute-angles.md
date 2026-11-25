---
title: Reduction to acute angles
youtube_query: Grade 11 trigonometry reduction formulae
subject: pure-mathematics
topic: Trigonometry: identities, reduction formulae and equations
part: Geometry
term: 1
subtopic: Identities and reduction formulae
order: 312
---

> **What you'll learn:** how to write the trig ratio of any angle in terms of an acute angle, using the reduction formulae, and how to evaluate special angles without a calculator.
>
> **Prerequisites:** [Unit circle and CAST](/library/pure-mathematics/trigonometry-identities-reduction-formulae-and-equations/unit-circle-and-cast), and the special-angle values for $30^\circ$, $45^\circ$ and $60^\circ$.

## The idea in plain language

Every angle in the second, third or fourth quadrant has an acute **reference angle** that makes the same triangle with the $x$-axis. The ratios of the two angles are equal in size and differ at most in sign. The sign comes from CAST.

For a reference angle of $30^\circ$, four angles share the same triangle: $30^\circ$, $180^\circ - 30^\circ = 150^\circ$, $180^\circ + 30^\circ = 210^\circ$ and $360^\circ - 30^\circ = 330^\circ$.

![The four angles 30, 150, 210 and 330 degrees on the unit circle, all with reference angle 30 degrees](/content-images/reduction-angles.svg)

## The reduction formulae

The reduction formulae ($\theta$ acute):

| Angle | $\sin$ | $\cos$ | $\tan$ |
| --- | --- | --- | --- |
| $180^\circ - \theta$ | $\sin\theta$ | $-\cos\theta$ | $-\tan\theta$ |
| $180^\circ + \theta$ | $-\sin\theta$ | $-\cos\theta$ | $\tan\theta$ |
| $360^\circ - \theta$ | $-\sin\theta$ | $\cos\theta$ | $-\tan\theta$ |
| $-\theta$ | $-\sin\theta$ | $\cos\theta$ | $-\tan\theta$ |
| $90^\circ - \theta$ | $\cos\theta$ | $\sin\theta$ | |
| $90^\circ + \theta$ | $\cos\theta$ | $-\sin\theta$ | |


You do not need to memorise them. Find the quadrant, use CAST for the sign, and keep the reference angle.

**Special angles**

| $\theta$ | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
| --- | --- | --- | --- |
| $30^\circ$ | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{\sqrt{3}}$ |
| $45^\circ$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ | $1$ |
| $60^\circ$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ |

## Worked example 1 (basic)

```steps
title: Evaluate without a calculator: $\sin 150^\circ$, $\cos 240^\circ$, $\tan 315^\circ$
$150^\circ = 180^\circ - 30^\circ$, quadrant II, sine positive :: \sin 150^\circ = \sin 30^\circ = \frac{1}{2}
$240^\circ = 180^\circ + 60^\circ$, quadrant III, cosine negative :: \cos 240^\circ = -\cos 60^\circ = -\frac{1}{2}
$315^\circ = 360^\circ - 45^\circ$, quadrant IV, tangent negative :: \tan 315^\circ = -\tan 45^\circ = -1
```

## Worked example 2 (negative and large angles)

```steps
title: Evaluate: $\sin(-30^\circ)$, $\cos 405^\circ$, $\sin 600^\circ$
Negative angle: $\sin(-\theta) = -\sin\theta$ :: \sin(-30^\circ) = -\sin 30^\circ = -\frac{1}{2}
Remove a full turn: $405^\circ = 360^\circ + 45^\circ$ :: \cos 405^\circ = \cos 45^\circ = \frac{\sqrt{2}}{2}
$600^\circ - 360^\circ = 240^\circ = 180^\circ + 60^\circ$ :: \sin 600^\circ = \sin 240^\circ
Quadrant III, sine negative :: \sin 240^\circ = -\sin 60^\circ = -\frac{\sqrt{3}}{2}
```

## Worked example 3 (exam level)

```steps
title: Evaluate $\sin 120^\circ \cdot \cos 330^\circ - \tan 225^\circ$ without a calculator
$120^\circ = 180^\circ - 60^\circ$, sine positive :: \sin 120^\circ = \sin 60^\circ = \frac{\sqrt{3}}{2}
$330^\circ = 360^\circ - 30^\circ$, cosine positive :: \cos 330^\circ = \cos 30^\circ = \frac{\sqrt{3}}{2}
$225^\circ = 180^\circ + 45^\circ$, tangent positive :: \tan 225^\circ = \tan 45^\circ = 1
Substitute :: \frac{\sqrt{3}}{2} \cdot \frac{\sqrt{3}}{2} - 1
Multiply and subtract :: \frac{3}{4} - 1 = -\frac{1}{4}
```

> **Common mistakes**
>
> - Choosing the wrong reference angle. For $150^\circ$ it is $30^\circ$ (from $180^\circ$), not $60^\circ$.
> - Forgetting the sign from CAST, so $\cos 240^\circ$ comes out positive.
> - Changing the ratio ($\sin$ to $\cos$) when the angle is measured from $180^\circ$ or $360^\circ$. Only $90^\circ$ and $270^\circ$ reductions swap them.
> - Not removing full turns first for angles above $360^\circ$.
> - Mixing up special-angle values for $30^\circ$ and $60^\circ$.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Evaluate $\sin 210^\circ$ without a calculator.
A: $210^\circ = 180^\circ + 30^\circ$, quadrant III, sine negative: $-\sin 30^\circ = -\frac{1}{2}$.
---
Q: Evaluate $\cos 120^\circ$ without a calculator.
A: $120^\circ = 180^\circ - 60^\circ$, quadrant II, cosine negative: $-\cos 60^\circ = -\frac{1}{2}$.
---
Q: Evaluate $\tan 135^\circ$ without a calculator.
A: $135^\circ = 180^\circ - 45^\circ$, quadrant II, tangent negative: $-\tan 45^\circ = -1$.
---
Q: Evaluate $\cos(-60^\circ)$ and $\sin 495^\circ$.
A: $\cos(-60^\circ) = \cos 60^\circ = \frac{1}{2}$. $495^\circ - 360^\circ = 135^\circ = 180^\circ - 45^\circ$, sine positive: $\sin 495^\circ = \sin 45^\circ = \frac{\sqrt{2}}{2}$.
---
Q: Evaluate $\sin 300^\circ \cdot \cos 150^\circ$ without a calculator.
A: $\sin 300^\circ = -\sin 60^\circ = -\frac{\sqrt{3}}{2}$ and $\cos 150^\circ = -\cos 30^\circ = -\frac{\sqrt{3}}{2}$. Their product is $\frac{3}{4}$.
---
Q: Evaluate $\frac{\tan 225^\circ \cdot \sin 330^\circ}{\cos 240^\circ}$ without a calculator.
A: $\tan 225^\circ = 1$, $\sin 330^\circ = -\frac{1}{2}$, $\cos 240^\circ = -\frac{1}{2}$. So the value is $\frac{1 \times \left(-\frac{1}{2}\right)}{-\frac{1}{2}} = 1$.
```

## Further help

- Siyavula Mathematics Grade 11, [6.3 Reduction formula](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/06-trigonometry-03).
