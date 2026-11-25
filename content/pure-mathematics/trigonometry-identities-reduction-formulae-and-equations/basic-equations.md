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

> **What you'll learn:** how to solve basic trig equations such as $\sin\theta = \frac{1}{2}$ or $2\tan\theta + 2 = 0$ inside any given interval using a positive reference angle and CAST.
>
> **Prerequisites:** [Reduction to acute angles](/library/pure-mathematics/trigonometry-identities-reduction-formulae-and-equations/reduction-to-acute-angles).

## 1. Why a trig equation usually has two answers per turn

A trig equation asks: *which angles produce this ratio?* Because sine, cosine, and tangent rise and fall symmetrically around the circle, each ratio hits the same value in **two** quadrants within one $360^\circ$ turn. Look at $\sin x = \frac{1}{2}$ on the sine wave:

```diagram
name: trig-equation-wave
```

Your calculator only gives one angle (and if the ratio is negative, it can even hand back a negative angle!). To find **all** solutions reliably, always ignore the minus sign when finding the acute **reference angle**, then use **CAST** to place it in the right quadrants.

```rule
title: Four-step basic trig equation recipe
\text{1. Isolate the ratio} \quad \text{2. Positive reference angle} \quad \text{3. Pick 2 quadrants via CAST} \quad \text{4. Adjust to the interval}
```

## 2. Positive vs negative intervals: $[0^\circ;\ 360^\circ]$ vs $[-180^\circ;\ 180^\circ]$

```compare
title: Writing the same two quadrants in two different intervals
left_title: Interval [0°; 360°]
left:
Use the standard positive reduction angles:
- Q I: $\theta_{\text{ref}}$
- Q II: $180^\circ - \theta_{\text{ref}}$
- Q III: $180^\circ + \theta_{\text{ref}}$
- Q IV: $360^\circ - \theta_{\text{ref}}$
right_title: Interval [-180°; 180°]
right:
Quadrants III and IV sit between $-180^\circ$ and $0^\circ$, so subtract $360^\circ$:
- Q I: $+\theta_{\text{ref}}$
- Q II: $180^\circ - \theta_{\text{ref}}$
- Q III: $-(180^\circ - \theta_{\text{ref}})$
- Q IV: $-\theta_{\text{ref}}$
```

```tryit
title: Quick check
prompt: Solve $\sin\theta = -\frac{1}{2}$ for $\theta \in [0^\circ;\ 360^\circ]$.
hint: Ignore the minus sign to get $\theta_{\text{ref}} = \sin^{-1}\left(\frac{1}{2}\right) = 30^\circ$, then check where $\sin\theta$ is negative.
answer: Reference angle $= 30^\circ$. Sine is negative in Q III ($180^\circ + 30^\circ = 210^\circ$) and Q IV ($360^\circ - 30^\circ = 330^\circ$). So $\theta = 210^\circ$ or $\theta = 330^\circ$.
```

## 3. Worked examples

```steps
title: Example 1 (Special angle): Solve $\cos\theta = -\frac{1}{2}$ for $\theta \in [0^\circ;\ 360^\circ]$
Ignore the minus sign for the reference angle :: \theta_{\text{ref}} = \cos^{-1}\!\left(\frac{1}{2}\right) = 60^\circ
Cosine is negative in Quadrants II and III :: \text{Q II and Q III}
Quadrant II: $180^\circ - 60^\circ$ :: \theta = 120^\circ
Quadrant III: $180^\circ + 60^\circ$ :: \theta = 240^\circ
```

```steps
title: Example 2 (Calculator rounding): Solve $5\sin\theta = 1{,}5$ for $\theta \in [0^\circ;\ 360^\circ]$ (1 decimal place)
Isolate $\sin\theta$ :: \sin\theta = 0{,}3
Reference angle :: \theta_{\text{ref}} = \sin^{-1}(0{,}3) = 17{,}457\ldots^\circ \approx 17{,}5^\circ
Sine is positive in Quadrants I and II :: \theta = 17{,}5^\circ \quad\text{or}\quad \theta = 180^\circ - 17{,}5^\circ = 162{,}5^\circ
```

```steps
title: Example 3 (Exam level — negative interval): Solve $2\tan\theta + 2 = 0$ for $\theta \in [-180^\circ;\ 180^\circ]$
Isolate $\tan\theta$ :: \tan\theta = -1
Positive reference angle :: \theta_{\text{ref}} = \tan^{-1}(1) = 45^\circ
Tangent is negative in Q II and Q IV :: \text{Q II: } 180^\circ - 45^\circ = 135^\circ,\quad \text{Q IV: } -45^\circ
Both angles lie inside $[-180^\circ;\ 180^\circ]$ :: \theta = -45^\circ \quad\text{or}\quad \theta = 135^\circ
```

> **Common mistakes**
>
> - **Typing the minus sign into $\sin^{-1}$, $\cos^{-1}$, or $\tan^{-1}$:** always use the positive number to find the acute reference angle, then let CAST assign quadrants.
> - **Stopping after the calculator's single output:** almost every equation in a full $360^\circ$ interval has at least two answers.
> - **Ignoring the required interval:** if the domain is $[-180^\circ;\ 180^\circ]$, $315^\circ$ is outside the interval—write $-45^\circ$ instead.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Solve $\sin\theta = \frac{\sqrt{3}}{2}$ for $\theta \in [0^\circ;\ 360^\circ]$.
A: Reference angle $60^\circ$. Sine is positive in Q I and Q II: $\theta = 60^\circ$ or $\theta = 120^\circ$.
---
Q: Solve $\cos\theta = 0{,}8$ for $\theta \in [0^\circ;\ 360^\circ]$, correct to 1 decimal place.
A: Reference angle $\cos^{-1}(0{,}8) = 36{,}9^\circ$. Cosine is positive in Q I and Q IV: $\theta = 36{,}9^\circ$ or $\theta = 323{,}1^\circ$.
---
Q: Solve $\tan\theta = -\sqrt{3}$ for $\theta \in [0^\circ;\ 360^\circ]$.
A: Reference angle $60^\circ$. Tangent is negative in Q II and Q IV: $\theta = 120^\circ$ or $\theta = 300^\circ$.
---
Q: Solve $3\sin\theta + 2 = 0$ for $\theta \in [0^\circ;\ 360^\circ]$, correct to 1 decimal place.
A: $\sin\theta = -\frac{2}{3} \implies \theta_{\text{ref}} = 41{,}8^\circ$. Sine is negative in Q III and Q IV: $\theta = 221{,}8^\circ$ or $\theta = 318{,}2^\circ$.
---
Q: **(Exam level)** Solve $2\cos\theta = -1{,}2$ for $\theta \in [-180^\circ;\ 180^\circ]$, correct to 1 decimal place.
A: $\cos\theta = -0{,}6 \implies \theta_{\text{ref}} = 53{,}1^\circ$. Cosine is negative in Q II ($180^\circ - 53{,}1^\circ = 126{,}9^\circ$) and Q III ($-126{,}9^\circ$). So $\theta = -126{,}9^\circ$ or $\theta = 126{,}9^\circ$.
---
Q: Solve $\sqrt{2}\sin\theta - 1 = 0$ for $\theta \in [-180^\circ;\ 180^\circ]$.
A: $\sin\theta = \frac{1}{\sqrt{2}} \implies \theta_{\text{ref}} = 45^\circ$. Sine is positive in Q I ($45^\circ$) and Q II ($135^\circ$), both inside $[-180^\circ;\ 180^\circ]$.
```

## Further help

- Siyavula Mathematics Grade 11, [6.4 Trigonometric equations](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/06-trigonometry-04).
