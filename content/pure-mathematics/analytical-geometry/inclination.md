---
title: Inclination
youtube_query: Grade 11 inclination of a straight line
subject: pure-mathematics
topic: Analytical geometry
part: Geometry
term: 2
subtopic: Inclination and angle between lines
order: 521
---

> **What you'll learn:** what the **angle of inclination** $\theta$ measures, why $\tan\theta = m$ connects trigonometry to straight-line gradients, and how to handle negative gradients ($m < 0$) correctly.
>
> **Prerequisites:** [Line through two points and point-gradient form](/library/pure-mathematics/analytical-geometry/line-through-two-points-and-point-gradient-form) and basic trigonometry ($\tan$).

## 1. Inclination connects steepness ($m$) to an angle ($\theta$)

Place any non-horizontal line on the Cartesian plane and trace the angle $\theta$ counter-clockwise from the **positive $x$-axis** up to the line (so $0^\circ \leq \theta < 180^\circ$).

Look at the slope triangle along the $x$-axis:
- The adjacent side along the $x$-axis is the **run** ($\Delta x$).
- The opposite side going up is the **rise** ($\Delta y$).

So by right-angled trigonometry, $\tan\theta = \frac{\text{opp}}{\text{adj}} = \frac{\Delta y}{\Delta x} = m$!

Compare positive ($m > 0$) and negative ($m < 0$) inclinations below:

```diagram
name: inclination-explorer
```

```rule
title: Angle of inclination (0° ≤ θ < 180°)
\tan\theta = m
m > 0 \;\Longrightarrow\; 0^\circ < \theta < 90^\circ \quad (\text{acute})
m < 0 \;\Longrightarrow\; 90^\circ < \theta < 180^\circ \quad (\text{obtuse: add } 180^\circ \text{ to negative calculator angle})
\text{Horizontal } (m = 0): \ \theta = 0^\circ \qquad \text{Vertical } (m\text{ undefined}): \ \theta = 90^\circ
```

## 2. What to do when $m$ is negative

```compare
title: Two ways to get an obtuse inclination when m < 0 (say m = -2)
left_title: Method A: Use positive reference angle
left:
1. Ignore minus sign: $\theta_{\text{ref}} = \tan^{-1}(2) = 63{,}4^\circ$.
2. Subtract from $180^\circ$ (Q II):
   $$\theta = 180^\circ - 63{,}4^\circ = 116{,}6^\circ$$
right_title: Method B: Direct calculator + 180°
right:
1. Type $\tan^{-1}(-2) \approx -63{,}4^\circ$ (clockwise below $+x$-axis).
2. Add $180^\circ$ to swing onto the upper half-plane:
   $$\theta = -63{,}4^\circ + 180^\circ = 116{,}6^\circ$$
```

```tryit
title: Quick check
prompt: Calculate (correct to $1$ decimal place) the angle of inclination of a line with **(a)** $m = 2{,}5$ and **(b)** $m = -1$.
hint: For $m < 0$, take the positive reference angle $\tan^{-1}(1)$ and subtract from $180^\circ$.
answer: **(a)** $\theta = \tan^{-1}(2{,}5) \approx 68{,}2^\circ$. **(b)** $\theta_{\text{ref}} = \tan^{-1}(1) = 45^\circ$, so $\theta = 180^\circ - 45^\circ = 135^\circ$.
```

## 3. Worked examples

```steps
title: Example 1 (From two points): Find the inclination of the line passing through $A(-1;\ 3)$ and $B(3;\ 7)$
Calculate the gradient $m_{AB}$ :: m_{AB} = \frac{7 - 3}{3 - (-1)} = \frac{4}{4} = 1
Set $\tan\theta = 1$ :: \tan\theta = 1
Since $m > 0$, read acute angle directly :: \theta = 45^\circ
```

```steps
title: Example 2 (Negative gradient from standard form): Find the inclination of $3x + 2y = 6$ to $1$ decimal place
Rewrite as $y = mx + c$ :: 2y = -3x + 6 \;\Longrightarrow\; y = -\frac{3}{2}x + 3
Identify $m = -1{,}5 < 0$ :: \tan\theta = -1{,}5
Positive reference angle :: \theta_{\text{ref}} = \tan^{-1}(1{,}5) \approx 56{,}3^\circ
Subtract from $180^\circ$ :: \theta = 180^\circ - 56{,}3^\circ = 123{,}7^\circ
```

```steps
title: Example 3 (Exam level — work backward from angle to line equation): A line through $P(2;\ -1)$ has inclination $135^\circ$. Find its equation.
Compute the gradient from $\theta = 135^\circ$ :: m = \tan 135^\circ = -\tan 45^\circ = -1
Substitute $m = -1$ and $P(2;\ -1)$ into point-gradient form :: y - (-1) = -1(x - 2)
Simplify :: y + 1 = -x + 2 \;\Longrightarrow\; y = -x + 1
```

> **Common mistakes**
>
> - **Leaving a negative angle as your answer:** an inclination is always defined in $[0^\circ;\ 180^\circ)$, so $-56{,}3^\circ$ must become $123{,}7^\circ$.
> - **Measuring from the $y$-axis or $-x$-axis:** $\theta$ is always measured **counter-clockwise from the positive $x$-axis**.
> - **Using $\cos^{-1}$ or $\sin^{-1}$ instead of $\tan^{-1}$:** gradient is $\frac{\Delta y}{\Delta x} = \frac{\text{opp}}{\text{adj}}$, which is strictly **tangent**.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Find the angle of inclination of $y = \sqrt{3}x - 4$.
A: $\tan\theta = \sqrt{3} \implies \theta = 60^\circ$.
---
Q: Calculate (to 1 decimal place) the inclination of the line through $P(1;\ 4)$ and $Q(4;\ -2)$.
A: $m = \frac{-2 - 4}{4 - 1} = -2$. $\theta = 180^\circ - \tan^{-1}(2) = 180^\circ - 63{,}4^\circ = 116{,}6^\circ$.
---
Q: Find the gradient (exact surd) of a line with angle of inclination $150^\circ$.
A: $m = \tan 150^\circ = -\tan 30^\circ = -\frac{1}{\sqrt{3}}$ (or $-\frac{\sqrt{3}}{3}$).
---
Q: **(Exam level)** A line passes through $(-3;\ 2)$ and makes an angle of $60^\circ$ with the positive $x$-axis. Write its equation in the form $y = mx + c$ (keep exact surds).
A: $m = \tan 60^\circ = \sqrt{3}$. Point-gradient form: $y - 2 = \sqrt{3}(x + 3) \implies y = \sqrt{3}x + 3\sqrt{3} + 2$.
```

## Further help

- Siyavula Mathematics Grade 11, [4.3 Inclination of a line](https://www.siyavula.com/read/za/mathematics/grade-11/analytical-geometry/04-analytical-geometry-03).
