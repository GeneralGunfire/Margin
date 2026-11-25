---
title: Basic graphs and symmetry
youtube_query: Grade 11 basic function graphs and symmetry
subject: pure-mathematics
topic: Functions
part: Algebra
term: 2
subtopic: Trigonometric functions
order: 661
---

> **What you'll learn:** the shapes, key points, domain, range, amplitude, period, asymptotes, and symmetry of the three parent trig graphs $y = \sin x$, $y = \cos x$, and $y = \tan x$ on $[-360^\circ;\ 360^\circ]$.
>
> **Prerequisites:** [Unit circle and CAST](/library/pure-mathematics/trigonometry-identities-reduction-formulae-and-equations/unit-circle-and-cast).

## 1. Unwrapping the unit circle onto a wave

As an angle $x$ spins around the unit circle from $0^\circ$ to $360^\circ$, its height ($\sin x$) and horizontal coordinate ($\cos x$) trace smooth repeating waves, while $\tan x = \frac{\sin x}{\cos x}$ shoots to vertical asymptotes whenever $\cos x = 0$.

Use the interactive explorer with $a = 1$, $k = 1$, $p = 0^\circ$ to compare **sin**, **cos**, and **tan** across $[-360^\circ;\ 360^\circ]$:

```diagram
name: trig-graph-explorer
```

## 2. Comparing the three parent graphs

| Property | $y = \sin x$ | $y = \cos x$ | $y = \tan x$ |
| --- | --- | --- | --- |
| Starts at $x = 0^\circ$ | $(0^\circ;\ 0)$ | $(0^\circ;\ 1)$ (peak) | $(0^\circ;\ 0)$ |
| Period | $360^\circ$ | $360^\circ$ | $180^\circ$ |
| Amplitude | $1$ | $1$ | Undefined (no max/min) |
| Range | $[-1;\ 1]$ | $[-1;\ 1]$ | $y \in \mathbb{R}$ |
| Asymptotes | None | None | $x = 90^\circ + k\cdot 180^\circ,\ k \in \mathbb{Z}$ |
| Symmetry | $\sin(-x) = -\sin x$ (origin) | $\cos(-x) = \cos x$ ($y$-axis) | $\tan(-x) = -\tan x$ (origin) |

```rule
title: Key anchor points in [0°; 360°]
\sin x:\ (0^\circ;\ 0),\ (90^\circ;\ 1),\ (180^\circ;\ 0),\ (270^\circ;\ -1),\ (360^\circ;\ 0)
\cos x:\ (0^\circ;\ 1),\ (90^\circ;\ 0),\ (180^\circ;\ -1),\ (270^\circ;\ 0),\ (360^\circ;\ 1)
\tan x:\ (0^\circ;\ 0),\ (45^\circ;\ 1),\ \text{asym } x = 90^\circ,\ (135^\circ;\ -1),\ (180^\circ;\ 0),\ (225^\circ;\ 1),\ \text{asym } x = 270^\circ
```

```tryit
title: Quick check
prompt: On $[-180^\circ;\ 180^\circ]$, state **(a)** the $x$-intercepts of $y = \cos x$, and **(b)** the asymptotes of $y = \tan x$.
hint: Both happen at the exact same angles—where $\cos x = 0$!
answer: **(a)** $(-90^\circ;\ 0)$ and $(90^\circ;\ 0)$. **(b)** $x = -90^\circ$ and $x = 90^\circ$.
```

## 3. Worked examples

```steps
title: Example 1 (Five-point sketch of $y = \sin x$ on $[-180^\circ;\ 180^\circ]$): Find all intercepts and turning points
Divide $360^\circ$ period by $4$ for step size :: \text{step} = 90^\circ
List points from $-180^\circ$ to $180^\circ$ :: (-180^\circ;\ 0),\ (-90^\circ;\ -1),\ (0^\circ;\ 0),\ (90^\circ;\ 1),\ (180^\circ;\ 0)
State domain, range, amplitude, period :: \text{Dom: } [-180^\circ;\ 180^\circ],\quad \text{Range: } [-1;\ 1],\quad \text{Amp: } 1,\quad \text{Period: } 360^\circ
```

```steps
title: Example 2 (Symmetry of $\cos x$ vs $\sin x$): If $(60^\circ;\ \frac{1}{2})$ lies on $y = \cos x$, find three other points on $y = \cos x$ in $[-360^\circ;\ 360^\circ]$
Symmetry across the $y$-axis ($\cos(-x) = \cos x$) :: (-60^\circ;\ \tfrac{1}{2})
Add one full period ($360^\circ$) to $-60^\circ$ :: (300^\circ;\ \tfrac{1}{2})
Subtract one full period ($360^\circ$) from $60^\circ$ :: (-300^\circ;\ \tfrac{1}{2})
```

```steps
title: Example 3 (Exam level — reading a parent tan graph): On $[-180^\circ;\ 180^\circ]$, where is $\tan x \geq 1$?
Locate where $\tan x = 1$ :: x = 45^\circ \quad\text{and}\quad x = -135^\circ
Curve rises steeply up to each vertical asymptote :: \text{asym at } -90^\circ \text{ and } 90^\circ
Read intervals where $\tan x \geq 1$ (exclude asymptotes!) :: -135^\circ \leq x < -90^\circ \quad\text{or}\quad 45^\circ \leq x < 90^\circ
```

> **Common mistakes**
>
> - **Giving $y = \tan x$ an amplitude:** tangent grows to $\pm\infty$, so it has **no** amplitude and **no** maximum or minimum value.
> - **Saying the period of $\tan x$ is $360^\circ$:** one full tangent branch repeats every **$180^\circ$**.
> - **Drawing straight V-shaped zigzags for $\sin x$ and $\cos x$:** make sure peaks and troughs are rounded smooth curves.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: State the period, amplitude, and range of $y = \cos x$ on $[-360^\circ;\ 360^\circ]$.
A: Period: $360^\circ$. Amplitude: $1$. Range: $y \in [-1;\ 1]$.
---
Q: List all $x$-intercepts of $y = \sin x$ for $x \in [-360^\circ;\ 360^\circ]$.
A: $-360^\circ,\ -180^\circ,\ 0^\circ,\ 180^\circ,\ 360^\circ$.
---
Q: Write down the equations of all asymptotes of $y = \tan x$ on $[-270^\circ;\ 270^\circ]$.
A: $x = -270^\circ$, $x = -90^\circ$, $x = 90^\circ$, and $x = 270^\circ$.
---
Q: **(Exam level)** Use symmetry of $y = \sin x$ to find all $x \in [-360^\circ;\ 360^\circ]$ where $\sin x = -\frac{\sqrt{3}}{2}$, given $\sin 60^\circ = \frac{\sqrt{3}}{2}$.
A: Sine is negative in Q III ($240^\circ$) and Q IV ($300^\circ$), and by odd/period symmetry also at $-60^\circ$ and $-120^\circ$: $x \in \{-120^\circ,\ -60^\circ,\ 240^\circ,\ 300^\circ\}$.
```

## Further help

- Siyavula Mathematics Grade 11, [5.5 The sine function](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-05).
- Siyavula Mathematics Grade 11, [5.6 The cosine function](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-06).
- Siyavula Mathematics Grade 11, [5.7 The tangent function](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-07).
