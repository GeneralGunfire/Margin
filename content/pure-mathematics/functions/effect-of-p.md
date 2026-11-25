---
title: Effect of p
youtube_query: Grade 11 effect of p on function graphs
subject: pure-mathematics
topic: Functions
part: Algebra
term: 2
subtopic: Trigonometric functions
order: 663
---

> **What you'll learn:** how the phase shift $p$ moves $\sin(x + p)$, $\cos(x + p)$, and $\tan(x + p)$ left or right, why you must factor out $k$ before reading a shift, and how sine and cosine are shifted copies of each other.
>
> **Prerequisites:** [Effect of k and a](/library/pure-mathematics/functions/effect-of-k-and-a).

## 1. Phase shifts work just like parabolas: $+p$ shifts left

Inside $y = a\sin(x + p) + q$, ask the same question as for a parabola: *which $x$ resets the input inside the brackets to $0^\circ$?*

$$x + p = 0^\circ \;\Longrightarrow\; x = -p$$

- **$p > 0$ (e.g. $\sin(x + 30^\circ)$):** every feature moves **$30^\circ$ left**.
- **$p < 0$ (e.g. $\cos(x - 60^\circ)$):** every feature moves **$60^\circ$ right**.

Use the $p$ buttons in the explorer below (keep $k = 1$) to watch the curve slide horizontally without changing its amplitude or period:

```diagram
name: trig-graph-explorer
```

```rule
title: Phase shift (with k = 1)
y = a\sin(x + p) + q:\quad p > 0 \text{ shifts left by } p,\qquad p < 0 \text{ shifts right by } |p|
\text{General form } \sin(kx + c):\ \text{factor out } k \text{ first} \;\Longrightarrow\; \sin\!\left(k\left(x + \frac{c}{k}\right)\right)
```

## 2. Factor out $k$ before reading the horizontal shift!

```compare
title: Reading the horizontal shift of y = cos(2x - 60°)
left_title: Right: factor out 2 first → 30° RIGHT
left:
$$\cos(2x - 60^\circ) = \cos\bigl(2(x - 30^\circ)\bigr)$$
Setting $2x - 60^\circ = 0^\circ$ gives $x = +30^\circ$, so the graph shifts **$30^\circ$ right**.
right_title: Wrong: reading -60° directly
right:
Saying the graph shifts $60^\circ$ right forgets that $k = 2$ compresses every $x$-coordinate by a factor of $2$!
```

```tryit
title: Quick check
prompt: State the horizontal shift and new vertical asymptotes on $[-90^\circ;\ 180^\circ]$ for $f(x) = \tan(x - 30^\circ)$.
hint: $x - 30^\circ = 0$ gives $x = +30^\circ$ (right). Add $30^\circ$ to the parent asymptotes $-90^\circ$ and $90^\circ$.
answer: Shifted **$30^\circ$ right**. Parent asymptotes $-90^\circ, 90^\circ$ shift to $x = -60^\circ$ and $x = 120^\circ$.
```

## 3. Worked examples

```steps
title: Example 1 (Five key points shifted): Find the key points of $f(x) = \cos(x - 45^\circ)$ for one cycle starting at $x = 45^\circ$
Parent $\cos x$ starts its cycle at $0^\circ, 90^\circ, 180^\circ, 270^\circ, 360^\circ$ :: \text{shift every } x\text{-value } +45^\circ
Add $45^\circ$ to each $x$-coordinate :: (45^\circ;\ 1),\ (135^\circ;\ 0),\ (225^\circ;\ -1),\ (315^\circ;\ 0),\ (405^\circ;\ 1)
Check endpoints if restricted to $[0^\circ;\ 360^\circ]$ :: f(0^\circ) = \cos(-45^\circ) = \frac{\sqrt{2}}{2} \approx 0{,}71
```

```steps
title: Example 2 (Why sine and cosine are identical waves): Show that $f(x) = \cos(x - 90^\circ)$ equals $g(x) = \sin x$
Shift $\cos x$ by $90^\circ$ right: its peak at $0^\circ$ lands at $90^\circ$ :: \cos(90^\circ - 90^\circ) = 1 = \sin 90^\circ
Check algebraically using co-ratios :: \cos(x - 90^\circ) = \cos(-(90^\circ - x)) = \cos(90^\circ - x) = \sin x
```

```steps
title: Example 3 (Exam level — $y$-intercept and asymptotes): For $h(x) = 2\sin(x + 30^\circ) - 1$ on $[-180^\circ;\ 180^\circ]$, find its $y$-intercept, range, and maximum point
$y$-intercept ($x = 0^\circ$) :: h(0^\circ) = 2\sin(30^\circ) - 1 = 2\!\left(\frac{1}{2}\right) - 1 = 0 \;\Longrightarrow\; (0^\circ;\ 0)
Range ($a = 2,\ q = -1$) :: [-2 - 1;\ 2 - 1] = [-3;\ 1]
Parent peak of $\sin$ is at $90^\circ$; shift $30^\circ$ left :: x = 90^\circ - 30^\circ = 60^\circ \;\Longrightarrow\; (60^\circ;\ 1)
```

> **Common mistakes**
>
> - **Forgetting to calculate the new endpoints** (such as $x = 0^\circ$, $-180^\circ$, $360^\circ$) after a shift—a shifted curve rarely ends on $0$ or $\pm 1$.
> - **Shifting in the wrong direction:** $\sin(x + 30^\circ)$ shifts **left**, not right.
> - **Not factoring out $k$** in $\sin(2x + 60^\circ)$ before stating the shift ($30^\circ$ left, not $60^\circ$ left).

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Describe the shift from $y = \sin x$ to $y = \sin(x + 60^\circ)$ and find its $y$-intercept.
A: Shifted $60^\circ$ left. $y$-intercept: $\sin(60^\circ) = \frac{\sqrt{3}}{2} \approx 0{,}87$.
---
Q: Find the asymptotes and $x$-intercepts of $f(x) = \tan(x + 45^\circ)$ for $x \in [-180^\circ;\ 180^\circ]$.
A: Parent asymptotes $\pm 90^\circ, \pm 270^\circ$ shift $45^\circ$ left: $x = -135^\circ$ and $x = 45^\circ$. Parent $x$-intercepts shift $45^\circ$ left: $x = -45^\circ$ and $x = 135^\circ$ (and $-225^\circ$ is outside).
---
Q: Determine two different ways to write $g(x) = \sin x$ as a shifted cosine graph.
A: $g(x) = \cos(x - 90^\circ)$ (shift $\cos$ right by $90^\circ$) or $g(x) = -\cos(x + 90^\circ)$.
---
Q: **(Exam level)** For $f(x) = \cos(2x - 60^\circ)$ on $[0^\circ;\ 180^\circ]$, state the period, phase shift, and the $x$-coordinate of the minimum turning point.
A: Rewrite as $\cos\bigl(2(x - 30^\circ)\bigr)$: period $= 180^\circ$, shift $= 30^\circ$ right. Parent $\cos(2x)$ has its minimum when $2x - 60^\circ = 180^\circ \implies 2x = 240^\circ \implies x = 120^\circ$.
```

## Further help

- Siyavula Mathematics Grade 11, [5.5 The sine function](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-05).
- Siyavula Mathematics Grade 11, [5.7 The tangent function](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-07).
