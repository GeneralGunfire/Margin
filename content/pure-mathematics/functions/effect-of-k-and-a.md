---
title: Effect of k and a
youtube_query: Grade 11 effect of k and a on graphs
subject: pure-mathematics
topic: Functions
part: Algebra
term: 2
subtopic: Trigonometric functions
order: 662
---

> **What you'll learn:** how $a$, $k$, and $q$ transform the height, reflection, vertical shift, and horizontal period of $y = a\sin(kx) + q$, $y = a\cos(kx) + q$, and $y = a\tan(kx) + q$.
>
> **Prerequisites:** [Basic graphs and symmetry](/library/pure-mathematics/functions/basic-graphs-and-symmetry).

## 1. Vertical scale ($a$, $q$) vs horizontal frequency ($k$)

In $y = a\sin(kx) + q$ (or $\cos$, $\tan$):

- **$a$ (vertical stretch & reflection):** stretches the wave vertically; if $a < 0$, it reflects upside down across the midline. Amplitude is always positive: $|a|$ (undefined for $\tan$).
- **$q$ (vertical shift):** shifts the entire wave and its midline up ($q > 0$) or down ($q < 0$).
- **$k$ (horizontal frequency):** $kx$ completes one full cycle **$k$ times faster**! So multiplying $x$ by $k > 1$ **compresses** the period, while $0 < k < 1$ **stretches** it.

Toggle $a$ and $k$ below (keep $p = 0^\circ$) to watch the period and amplitude update live:

```diagram
name: trig-graph-explorer
```

```rule
title: Amplitude, period, and range
\text{Amplitude (sin / cos): } |a| \qquad \text{Range: } [-|a| + q;\ |a| + q]
\text{Period (sin / cos): } \frac{360^\circ}{|k|} \qquad \text{Period (tan): } \frac{180^\circ}{|k|}
```

## 2. Why $y = \sin 2x$ has period $180^\circ$, not $720^\circ$

```compare
title: Two common period mistakes
left_title: y = sin(2x) → period 180° (faster!)
left:
When $x$ reaches $180^\circ$, $2x$ is already at $360^\circ$—one complete cycle finished!
Quarter-period grid spacing: $\frac{180^\circ}{4} = 45^\circ$.
right_title: y = sin(½x) → period 720° (slower!)
right:
When $x$ reaches $360^\circ$, $\frac{1}{2}x$ is only at $180^\circ$—half a cycle!
Quarter-period grid spacing: $\frac{720^\circ}{4} = 180^\circ$.
```

```tryit
title: Quick check
prompt: State the amplitude, period, and range of **(a)** $f(x) = -3\cos(2x) + 1$ and **(b)** $g(x) = 2\tan\left(\frac{1}{2}x\right)$.
hint: Amplitude is $|a|$ (positive!), and remember $\tan$ has base period $180^\circ$.
answer: **(a)** Amplitude $= |-3| = 3$; period $= \frac{360^\circ}{2} = 180^\circ$; range $= [-3 + 1;\ 3 + 1] = [-2;\ 4]$. **(b)** Amplitude undefined; period $= \frac{180^\circ}{1/2} = 360^\circ$; range $= y \in \mathbb{R}$.
```

## 3. Worked examples

```steps
title: Example 1 (Sketch key points): Find the five key points of $f(x) = 2\sin(2x)$ on $[0^\circ;\ 180^\circ]$
Period and quarter-period step :: \text{Period} = \frac{360^\circ}{2} = 180^\circ,\qquad \text{step} = \frac{180^\circ}{4} = 45^\circ
Evaluate $f(x)$ at $0^\circ, 45^\circ, 90^\circ, 135^\circ, 180^\circ$ :: (0^\circ;\ 0),\ (45^\circ;\ 2),\ (90^\circ;\ 0),\ (135^\circ;\ -2),\ (180^\circ;\ 0)
```

```steps
title: Example 2 (Tangent asymptotes with $k$): Find the period and asymptotes of $g(x) = \tan(2x)$ on $[-90^\circ;\ 180^\circ]$
Period of tangent :: \text{Period} = \frac{180^\circ}{2} = 90^\circ
Asymptotes occur where $2x$ hits $\pm 90^\circ, \pm 270^\circ, \ldots$ :: 2x = -90^\circ,\ 90^\circ,\ 270^\circ,\ 450^\circ \;\Longrightarrow\; x = -45^\circ,\ 45^\circ,\ 135^\circ
Zeroes occur halfway between asymptotes :: x = -90^\circ,\ 0^\circ,\ 90^\circ,\ 180^\circ
```

```steps
title: Example 3 (Exam level — equation from a sketch): A cosine curve $y = a\cos(kx) + q$ has minimum $-5$, maximum $1$, completes one full cycle every $120^\circ$, and starts at $(0^\circ;\ -5)$. Find $a$, $k$, and $q$.
Find midline $q$ (average of max and min) :: q = \frac{1 + (-5)}{2} = -2
Find amplitude $|a|$ (half the total height) :: |a| = \frac{1 - (-5)}{2} = 3
Starts at a minimum instead of a maximum, so $a$ is negative :: a = -3
Use period $= 120^\circ$ to find $k > 0$ :: \frac{360^\circ}{k} = 120^\circ \;\Longrightarrow\; k = 3
Write the final equation :: y = -3\cos(3x) - 2
```

> **Common mistakes**
>
> - **Giving a negative amplitude:** if $y = -3\cos x$, the amplitude is **$3$**, not $-3$. The minus sign tells you it starts at a trough instead of a peak.
> - **Using $360^\circ/k$ for tangent:** always use $180^\circ/k$ for $\tan(kx)$.
> - **Forgetting to scale asymptotes by $1/k$:** if $y = \tan 2x$, the first positive asymptote sits at $45^\circ$, not $90^\circ$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: State the amplitude, period, and range of $f(x) = \frac{1}{2}\sin(3x) - 2$.
A: Amplitude: $\frac{1}{2}$. Period: $\frac{360^\circ}{3} = 120^\circ$. Range: $\left[-\frac{5}{2};\ -\frac{3}{2}\right]$.
---
Q: Find the period and asymptotes of $y = 2\tan\left(\frac{1}{2}x\right)$ for $x \in [-180^\circ;\ 180^\circ]$.
A: Period: $\frac{180^\circ}{1/2} = 360^\circ$. Asymptotes where $\frac{1}{2}x = \pm 90^\circ \implies x = -180^\circ$ and $x = 180^\circ$.
---
Q: How many complete cycles of $y = \cos(2x)$ fit in the interval $[-180^\circ;\ 180^\circ]$?
A: The period is $180^\circ$ and the interval length is $360^\circ$, so $2$ complete cycles fit.
---
Q: **(Exam level)** A graph of $f(x) = a\sin(kx) + q$ has range $[-1;\ 7]$, $f(0^\circ) = 3$, rises first after $0^\circ$, and has period $180^\circ$. Find $a$, $k$, and $q$.
A: $q = \frac{7 + (-1)}{2} = 3$, $|a| = \frac{7 - (-1)}{2} = 4$. Since it rises after $0^\circ$, $a = +4$. Period $\frac{360^\circ}{k} = 180^\circ \implies k = 2$. So $f(x) = 4\sin(2x) + 3$.
```

## Further help

- Siyavula Mathematics Grade 11, [5.5 The sine function](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-05).
- Siyavula Mathematics Grade 11, [5.6 The cosine function](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-06).
