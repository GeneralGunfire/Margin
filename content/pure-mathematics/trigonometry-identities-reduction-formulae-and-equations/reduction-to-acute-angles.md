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

> **What you'll learn:** how to rewrite any angle's trig ratio using an acute reference angle, why $90^\circ \pm \theta$ swaps sine and cosine while $180^\circ \pm \theta$ does not, and how to evaluate special angles without a calculator.
>
> **Prerequisites:** [Unit circle and CAST](/library/pure-mathematics/trigonometry-identities-reduction-formulae-and-equations/unit-circle-and-cast) and special angles ($30^\circ$, $45^\circ$, $60^\circ$).

## 1. Same reference triangle, different signs

Every angle in Quadrants II, III, or IV forms the exact same right-angled triangle against the $x$-axis as an acute **reference angle** $\theta$. For example, $30^\circ$, $150^\circ$, $210^\circ$, and $330^\circ$ all have reference angle $30^\circ$:

```diagram
name: reduction-circle
```

That means you never need to memorise a huge table of reduction formulas—just follow two steps:

1. **Quadrant $\rightarrow$ Sign:** check which quadrant the angle sits in (treating $\theta$ as acute) and get the sign from **CAST**.
2. **Axis $\rightarrow$ Ratio name:** angles measured from the horizontal $x$-axis ($180^\circ \pm \theta$, $360^\circ \pm \theta$, $-\theta$) **keep** the same ratio; angles measured from the vertical $y$-axis ($90^\circ \pm \theta$) **swap** $\sin \leftrightarrow \cos$ because the complementary angle switches opposite and adjacent sides.

```compare
title: 180° / 360° reductions vs 90° co-ratio reductions
left_title: From 180° or 360° → SAME ratio
left:
Measured from the $x$-axis, so $\sin$ stays $\sin$ and $\cos$ stays $\cos$:
- $\sin(180^\circ - \theta) = +\sin\theta$
- $\cos(180^\circ + \theta) = -\cos\theta$
- $\tan(360^\circ - \theta) = -\tan\theta$
right_title: From 90° → CO-RATIO (sin ↔ cos)
right:
Measured from the $y$-axis, so $\sin \leftrightarrow \cos$ (check the sign of the **original** function):
- $\sin(90^\circ - \theta) = +\cos\theta$
- $\cos(90^\circ + \theta) = -\sin\theta$ (since $\cos$ is negative in Q II)
```

## 2. Reduction table and special angles

| Angle | Quadrant (for acute $\theta$) | $\sin$ | $\cos$ | $\tan$ |
| --- | --- | --- | --- | --- |
| $180^\circ - \theta$ | II (S) | $+\sin\theta$ | $-\cos\theta$ | $-\tan\theta$ |
| $180^\circ + \theta$ | III (T) | $-\sin\theta$ | $-\cos\theta$ | $+\tan\theta$ |
| $360^\circ - \theta$ | IV (C) | $-\sin\theta$ | $+\cos\theta$ | $-\tan\theta$ |
| $-\theta$ | IV (C) | $-\sin\theta$ | $+\cos\theta$ | $-\tan\theta$ |
| $90^\circ - \theta$ | I (A) | $+\cos\theta$ | $+\sin\theta$ | — |
| $90^\circ + \theta$ | II (S) | $+\cos\theta$ | $-\sin\theta$ | — |

| $\theta$ | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
| --- | --- | --- | --- |
| $30^\circ$ | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{\sqrt{3}}$ |
| $45^\circ$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ | $1$ |
| $60^\circ$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ |

```tryit
title: Quick check
prompt: Reduce and evaluate without a calculator: **(a)** $\cos 150^\circ$ and **(b)** $\sin(90^\circ + \theta)$ vs $\cos(90^\circ + \theta)$.
hint: $150^\circ = 180^\circ - 30^\circ$ (Q II). For $90^\circ + \theta$, check the sign of the **starting** ratio in Q II before swapping $\sin \leftrightarrow \cos$.
answer: **(a)** $-\cos 30^\circ = -\frac{\sqrt{3}}{2}$. **(b)** $\sin(90^\circ + \theta) = +\cos\theta$ (sine is positive in Q II), whereas $\cos(90^\circ + \theta) = -\sin\theta$ (cosine is negative in Q II).
```

## 3. Worked examples

```steps
title: Example 1 (Basic numeric angles): Evaluate $\sin 150^\circ$, $\cos 240^\circ$, and $\tan 315^\circ$
$150^\circ = 180^\circ - 30^\circ$ in Q II (sine positive) :: \sin 150^\circ = \sin 30^\circ = \frac{1}{2}
$240^\circ = 180^\circ + 60^\circ$ in Q III (cosine negative) :: \cos 240^\circ = -\cos 60^\circ = -\frac{1}{2}
$315^\circ = 360^\circ - 45^\circ$ in Q IV (tangent negative) :: \tan 315^\circ = -\tan 45^\circ = -1
```

```steps
title: Example 2 (Negative and angles over $360^\circ$): Evaluate $\sin(-30^\circ)$, $\cos 405^\circ$, and $\sin 600^\circ$
Negative angle is in Q IV (sine negative) :: \sin(-30^\circ) = -\sin 30^\circ = -\frac{1}{2}
Subtract $360^\circ$: $405^\circ - 360^\circ = 45^\circ$ :: \cos 405^\circ = \cos 45^\circ = \frac{\sqrt{2}}{2}
Subtract $360^\circ$: $600^\circ - 360^\circ = 240^\circ = 180^\circ + 60^\circ$ :: \sin 600^\circ = \sin 240^\circ = -\sin 60^\circ = -\frac{\sqrt{3}}{2}
```

```steps
title: Example 3 (Exam level): Evaluate $\sin 120^\circ \cdot \cos 330^\circ - \tan 225^\circ$ without a calculator
Reduce each term :: \sin 120^\circ = \sin 60^\circ = \frac{\sqrt{3}}{2},\quad \cos 330^\circ = \cos 30^\circ = \frac{\sqrt{3}}{2},\quad \tan 225^\circ = \tan 45^\circ = 1
Substitute into the expression :: \frac{\sqrt{3}}{2} \cdot \frac{\sqrt{3}}{2} - 1
Multiply and subtract :: \frac{3}{4} - 1 = -\frac{1}{4}
```

> **Common mistakes**
>
> - **Measuring the reference angle from $90^\circ$ or $270^\circ$:** for $150^\circ$, always measure from $180^\circ$ ($180^\circ - 30^\circ$), giving reference angle $30^\circ$, not $60^\circ$.
> - **Checking the sign on the NEW ratio after a $90^\circ$ co-function swap:** for $\cos(90^\circ + \theta)$, check the sign of **$\cos$** in Quadrant II (negative), giving $-\sin\theta$.
> - **Forgetting to strip full $360^\circ$ rotations first** when the angle is greater than $360^\circ$ or negative.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Evaluate $\sin 210^\circ$ without a calculator.
A: $210^\circ = 180^\circ + 30^\circ$ (Q III, sine negative): $-\sin 30^\circ = -\frac{1}{2}$.
---
Q: Evaluate $\cos 120^\circ$ without a calculator.
A: $120^\circ = 180^\circ - 60^\circ$ (Q II, cosine negative): $-\cos 60^\circ = -\frac{1}{2}$.
---
Q: Evaluate $\tan 135^\circ$ without a calculator.
A: $135^\circ = 180^\circ - 45^\circ$ (Q II, tangent negative): $-\tan 45^\circ = -1$.
---
Q: Evaluate $\cos(-60^\circ)$ and $\sin 495^\circ$ without a calculator.
A: $\cos(-60^\circ) = \cos 60^\circ = \frac{1}{2}$. For $495^\circ$: $495^\circ - 360^\circ = 135^\circ = 180^\circ - 45^\circ$ (Q II, sine positive), so $\sin 495^\circ = \sin 45^\circ = \frac{\sqrt{2}}{2}$.
---
Q: Evaluate $\sin 300^\circ \cdot \cos 150^\circ$ without a calculator.
A: $\sin 300^\circ = -\sin 60^\circ = -\frac{\sqrt{3}}{2}$ and $\cos 150^\circ = -\cos 30^\circ = -\frac{\sqrt{3}}{2}$. Their product is $\frac{3}{4}$.
---
Q: **(Exam level)** Evaluate $\dfrac{\tan 225^\circ \cdot \sin 330^\circ}{\cos 240^\circ}$ without a calculator.
A: $\tan 225^\circ = 1$, $\sin 330^\circ = -\frac{1}{2}$, $\cos 240^\circ = -\frac{1}{2}$. So $\dfrac{1 \times \left(-\frac{1}{2}\right)}{-\frac{1}{2}} = 1$.
```

## Further help

- Siyavula Mathematics Grade 11, [6.3 Reduction formula](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/06-trigonometry-03).
