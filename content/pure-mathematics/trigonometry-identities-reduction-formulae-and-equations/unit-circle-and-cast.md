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

> **What you'll learn:** how placing an angle on the Cartesian plane defines $\sin\theta$, $\cos\theta$, and $\tan\theta$ for any angle—not just acute ones—and why the CAST rule predicts every sign.
>
> **Prerequisites:** Grade 10 right-angled triangle ratios (SOH CAH TOA) and Pythagoras' theorem.

## 1. Beyond $90^\circ$: ratios from coordinates $(x;\ y)$ and radius $r$

A right-angled triangle can only hold acute angles between $0^\circ$ and $90^\circ$. To define trig ratios for **any** angle $\theta$, start the angle on the positive $x$-axis and rotate counter-clockwise to a terminal arm passing through a point $P(x;\ y)$ at distance $r = \sqrt{x^{2} + y^{2}} > 0$ from the origin:

$$\sin\theta = \frac{y}{r}, \qquad \cos\theta = \frac{x}{r}, \qquad \tan\theta = \frac{y}{x} \quad (x \neq 0)$$

Because $r$ is a distance, **$r$ is always positive**. The signs of $\sin\theta$, $\cos\theta$, and $\tan\theta$ come purely from the signs of $x$ and $y$ in each quadrant. Explore all four quadrants below:

```diagram
name: cast-explorer
```

```rule
title: CAST rule — which ratios are positive
\text{I (}0^\circ\text{–}90^\circ\text{): All} \qquad \text{II (}90^\circ\text{–}180^\circ\text{): Sin} \qquad \text{III (}180^\circ\text{–}270^\circ\text{): Tan} \qquad \text{IV (}270^\circ\text{–}360^\circ\text{): Cos}
```

## 2. Finding the exact quadrant from two clues

When a question gives one ratio (such as $\tan\theta = -\frac{2}{3}$) and one extra clue (such as $\sin\theta > 0$ or an interval), combine both clues before drawing your triangle:

```compare
title: Two clues pin down a single quadrant
left_title: Clue 1: Sign of the given ratio
left:
$\tan\theta = -\frac{2}{3} < 0$ narrows the angle to **Quadrant II or IV** (the two quadrants where $\tan$ is negative).
right_title: Clue 2: Extra sign or interval
right:
Adding $\sin\theta > 0$ eliminates Quadrant IV and leaves **Quadrant II**, where $x < 0$ and $y > 0$, so $x = -3$ and $y = 2$.
```

```tryit
title: Quick check
prompt: If $\cos\theta = -\frac{5}{13}$ and $180^\circ < \theta < 360^\circ$, which quadrant is $\theta$ in, and what are $x$, $y$, and $r$?
hint: $\cos\theta < 0$ in Quadrants II and III; $180^\circ < \theta < 360^\circ$ covers Quadrants III and IV.
answer: The overlap is **Quadrant III**. Here $x = -5$, $r = 13$, and $y = -\sqrt{13^{2} - (-5)^{2}} = -12$ (negative because $y < 0$ in Q III).
```

## 3. Worked examples

```steps
title: Example 1 (Quadrant signs): Determine the sign of $\sin 210^\circ$, $\cos 120^\circ$, and $\tan 300^\circ$
$210^\circ$ lies in Quadrant III (only $\tan$ is positive) :: \sin 210^\circ < 0
$120^\circ$ lies in Quadrant II (only $\sin$ is positive) :: \cos 120^\circ < 0
$300^\circ$ lies in Quadrant IV (only $\cos$ is positive) :: \tan 300^\circ < 0
```

```steps
title: Example 2 (From one ratio): If $\cos\theta = -\frac{4}{5}$ and $90^\circ < \theta < 180^\circ$, find $\sin\theta$ and $\tan\theta$
Quadrant II has $x < 0$, $y > 0$, and $r > 0$ :: x = -4,\quad r = 5
Solve for $y$ using Pythagoras :: y^{2} = r^{2} - x^{2} = 25 - 16 = 9 \;\Longrightarrow\; y = +3
Read off $\sin\theta = \frac{y}{r}$ and $\tan\theta = \frac{y}{x}$ :: \sin\theta = \frac{3}{5},\qquad \tan\theta = -\frac{3}{4}
```

```steps
title: Example 3 (Exam level): If $\tan\theta = -\frac{2}{3}$ and $\sin\theta > 0$, find $\cos\theta$ and $13\sin^{2}\theta$
$\tan\theta < 0$ (Q II or IV) and $\sin\theta > 0$ (Q I or II) :: \theta \text{ is in Quadrant II}
In Q II, $x < 0$ and $y > 0$ :: x = -3,\quad y = 2
Compute $r = \sqrt{x^{2} + y^{2}}$ :: r = \sqrt{(-3)^{2} + 2^{2}} = \sqrt{13}
Write $\cos\theta = \frac{x}{r}$ and $\sin\theta = \frac{y}{r}$ :: \cos\theta = -\frac{3}{\sqrt{13}},\qquad \sin\theta = \frac{2}{\sqrt{13}}
Evaluate $13\sin^{2}\theta$ :: 13\left(\frac{2}{\sqrt{13}}\right)^{2} = 13 \cdot \frac{4}{13} = 4
```

> **Common mistakes**
>
> - **Making $r$ negative:** $r$ is always positive; put any negative sign on $x$ or $y$ according to the quadrant.
> - **Keeping the wrong sign after taking a square root:** $y^{2} = 9$ has two roots ($\pm 3$); always check the quadrant to decide between $+3$ and $-3$.
> - **Forgetting both negatives cancel in $\tan$:** in Quadrant III, $x < 0$ and $y < 0$, so $\tan\theta = \frac{y}{x} > 0$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: State whether $\sin 300^\circ$, $\cos 300^\circ$, and $\tan 300^\circ$ are positive or negative.
A: $300^\circ$ is in Quadrant IV, where only cosine is positive. So $\sin 300^\circ < 0$, $\cos 300^\circ > 0$, and $\tan 300^\circ < 0$.
---
Q: The point $P(-5;\ 12)$ lies on the terminal arm of angle $\theta$. Find $\sin\theta$, $\cos\theta$, and $\tan\theta$.
A: $r = \sqrt{(-5)^{2} + 12^{2}} = 13$. So $\sin\theta = \frac{12}{13}$, $\cos\theta = -\frac{5}{13}$, and $\tan\theta = -\frac{12}{5}$.
---
Q: Given $\sin\theta = -\frac{3}{5}$ and $\theta$ is in Quadrant III, find $\cos\theta$ and $\tan\theta$.
A: $y = -3$, $r = 5 \implies x^{2} = 25 - 9 = 16$. In Quadrant III $x < 0$, so $x = -4$. Then $\cos\theta = -\frac{4}{5}$ and $\tan\theta = \frac{-3}{-4} = \frac{3}{4}$.
---
Q: Given $\cos\theta = \frac{8}{17}$ and $\sin\theta < 0$, find $\tan\theta$.
A: $\cos\theta > 0$ and $\sin\theta < 0$ places $\theta$ in Quadrant IV. With $x = 8$ and $r = 17$, $y = -\sqrt{289 - 64} = -15$, so $\tan\theta = -\frac{15}{8}$.
---
Q: **(Exam level)** If $5\sin\theta + 4 = 0$ and $\theta \in (180^\circ;\ 270^\circ)$, find $\cos\theta$.
A: $\sin\theta = -\frac{4}{5}$, so $y = -4$, $r = 5$, and $x = -3$ (Quadrant III). Therefore $\cos\theta = -\frac{3}{5}$.
---
Q: If $\tan\theta = \frac{5}{12}$ and $\cos\theta < 0$, find $\sin\theta$ and $\cos\theta$.
A: $\tan\theta > 0$ and $\cos\theta < 0$ places $\theta$ in Quadrant III, so $x = -12$ and $y = -5$. Then $r = 13$, giving $\sin\theta = -\frac{5}{13}$ and $\cos\theta = -\frac{12}{13}$.
```

## Further help

- Siyavula Mathematics Grade 11, [6.2 Trigonometric identities](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/06-trigonometry-02).
- Siyavula Mathematics Grade 11, [6.3 Reduction formula](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/06-trigonometry-03).
