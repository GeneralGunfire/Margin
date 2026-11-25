---
title: Sketching and reading combined graphs
youtube_query: Grade 11 reading and sketching combined graphs
subject: pure-mathematics
topic: Functions
part: Algebra
term: 2
subtopic: Trigonometric functions
order: 664
---

> **What you'll learn:** how to sketch two trigonometric functions cleanly on the same set of axes, solve $f(x) = g(x)$ algebraically and mark those points on the sketch, and read inequalities such as $f(x) > g(x)$ or $f(x)\cdot g(x) \leq 0$.
>
> **Prerequisites:** [Effect of p](/library/pure-mathematics/functions/effect-of-p) and [Equations needing identities or factorising](/library/pure-mathematics/trigonometry-identities-reduction-formulae-and-equations/equations-needing-identities-or-factorising).

## 1. The quarter-period grid method for clean sketches

When sketching two trig curves on the same axes—say $f(x) = \sin 2x$ and $g(x) = \cos(x - 30^\circ)$ on $[-180^\circ;\ 180^\circ]$—pick a shared horizontal grid step that hits every turning point and intercept of **both** graphs (for example, $30^\circ$ or $45^\circ$).

1. Find each graph's **period**, **amplitude**, **shift**, and **endpoints**.
2. Mark all **turning points**, **intercepts**, **asymptotes** (if $\tan$), and **intersection points** clearly.
3. Read inequality questions visually off your finished sketch.

```rule
title: Reading two trig graphs f(x) and g(x) on the same axes
f(x) = g(x) \;\Longleftrightarrow\; \text{points where the two curves cross}
f(x) > g(x) \;\Longleftrightarrow\; \text{intervals of } x \text{ where } f \text{ lies ABOVE } g
f(x) \cdot g(x) < 0 \;\Longleftrightarrow\; \text{one curve is above the } x\text{-axis and the other is below}
```

## 2. Counting solutions vs finding exact angles

```compare
title: Two classic exam questions on a trig sketch
left_title: "How many solutions?" → Count crossings
left:
Look at the sketch of $f(x)$ and $g(x)$ inside the given domain and count how many times the curves intersect—no algebra needed!
right_title: "Solve f(x) = g(x)" → Use general solution
right:
Solve the trig equation algebraically first, list the angles in the domain, then use those exact $(x;\ y)$ values to verify your graph!
```

```tryit
title: Quick check
prompt: On $[0^\circ;\ 180^\circ]$, $f(x) = \sin 2x$ and $g(x) = \cos x$ intersect at $(30^\circ;\ \frac{\sqrt{3}}{2})$, $(90^\circ;\ 0)$, and $(150^\circ;\ -\frac{\sqrt{3}}{2})$. Between $30^\circ$ and $90^\circ$, which graph lies above the other?
hint: Test an easy angle inside $(30^\circ;\ 90^\circ)$, such as $x = 45^\circ$ or $60^\circ$.
answer: At $x = 45^\circ$, $f(45^\circ) = \sin 90^\circ = 1$ while $g(45^\circ) = \cos 45^\circ \approx 0{,}71$. So **$f(x) > g(x)$** on $(30^\circ;\ 90^\circ)$.
```

## 3. Worked examples

```steps
title: Example 1 (Find intersections then read inequality): $f(x) = \sin x$ and $g(x) = \cos x$ on $[0^\circ;\ 360^\circ]$
Equate $\sin x = \cos x$ and divide by $\cos x$ ($\cos x \neq 0$) :: \tan x = 1
Solve on $[0^\circ;\ 360^\circ]$ :: x = 45^\circ \quad\text{or}\quad x = 225^\circ
Intersection coordinates :: \left(45^\circ;\ \frac{\sqrt{2}}{2}\right) \quad\text{and}\quad \left(225^\circ;\ -\frac{\sqrt{2}}{2}\right)
Read where $\sin x > \cos x$ ($f$ above $g$) :: 45^\circ < x < 225^\circ
```

```steps
title: Example 2 (Vertical shift + number of solutions): How many solutions does $\sin 2x = \frac{1}{2}$ have on $[-180^\circ;\ 180^\circ]$?
Period of $f(x) = \sin 2x$ :: \frac{360^\circ}{2} = 180^\circ
Interval $[-180^\circ;\ 180^\circ]$ covers two full cycles :: 2\text{ waves}
Horizontal line $y = \frac{1}{2}$ crosses each positive crest twice :: 2 \times 2 = 4\text{ solutions}
Check exact angles ($2x = 30^\circ, 150^\circ + k\cdot 360^\circ$) :: x \in \{-165^\circ,\ -105^\circ,\ 15^\circ,\ 75^\circ\}
```

```steps
title: Example 3 (Exam level — product inequality $f(x)\cdot g(x) \leq 0$): Using $f(x) = \cos x$ and $g(x) = \sin 2x$ on $[0^\circ;\ 180^\circ]$, find where $f(x)\cdot g(x) \leq 0$
Find zeros on $[0^\circ;\ 180^\circ]$ :: f(90^\circ) = 0;\qquad g(0^\circ) = g(90^\circ) = g(180^\circ) = 0
Check signs on $(0^\circ;\ 90^\circ)$: $\cos x > 0$ and $\sin 2x > 0$ :: \text{product } > 0\ (\text{reject})
Check signs on $(90^\circ;\ 180^\circ)$: $\cos x < 0$ and $\sin 2x < 0$ :: \text{product } > 0\ (\text{reject!})
Both are negative on $(90^\circ;\ 180^\circ)$, so only the zeros satisfy $\leq 0$ :: x \in \{0^\circ,\ 90^\circ,\ 180^\circ\}
```

> **Common mistakes**
>
> - **Assuming $f(x)\cdot g(x) \leq 0$ is always an interval:** as Example 3 shows, if both functions change sign together at $90^\circ$, their product is $\geq 0$ everywhere and equals $0$ only at the shared zeros!
> - **Missing endpoints** in a restricted domain like $[0^\circ;\ 180^\circ]$ when an inequality includes equality ($\leq$ or $\geq$).
> - **Reading $x$ vs $y$ on trig graphs:** horizontal axis answers are **angles** in degrees; vertical axis answers (like amplitude or range) are pure numbers.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Solve $\sin 2x = \cos x$ for $x \in [0^\circ;\ 180^\circ]$ using the co-ratio $\cos x = \sin(90^\circ - x)$.
A: $\sin 2x = \sin(90^\circ - x)$ gives two families: $2x = 90^\circ - x + k\cdot 360^\circ \implies 3x = 90^\circ + k\cdot 360^\circ \implies x = 30^\circ + k\cdot 120^\circ$ ($30^\circ,\ 150^\circ$); and $2x = 180^\circ - (90^\circ - x) + k\cdot 360^\circ \implies x = 90^\circ + k\cdot 360^\circ$ ($90^\circ$). So $x \in \{30^\circ,\ 90^\circ,\ 150^\circ\}$.
---
Q: Using $f(x) = 2\cos x$ and $g(x) = -1$ on $[0^\circ;\ 360^\circ]$, for which values of $x$ is $f(x) \geq g(x)$?
A: $2\cos x = -1 \implies \cos x = -\frac{1}{2} \implies x = 120^\circ$ or $240^\circ$. Since $2\cos x$ dips below $-1$ between $120^\circ$ and $240^\circ$, $f(x) \geq -1$ for $0^\circ \leq x \leq 120^\circ$ or $240^\circ \leq x \leq 360^\circ$.
---
Q: How many solutions does $\tan x = \sin x$ have in $[-180^\circ;\ 180^\circ]$?
A: $\tan x = \sin x$ at every zero of $\sin x$ inside $[-180^\circ;\ 180^\circ]$: $-180^\circ, 0^\circ, 180^\circ$ (and nowhere else since $\cos x = 1$ gives $0^\circ$ again). So $3$ solutions.
---
Q: **(Exam level)** Given $f(x) = \sin(x + 30^\circ)$ and $g(x) = -2\cos x$ on $[-90^\circ;\ 90^\circ]$, find the $x$-values where $f(x) = 0$ and where $f(x)\cdot g(x) < 0$.
A: On $[-90^\circ;\ 90^\circ]$, $f(x) = \sin(x + 30^\circ) = 0$ at $x = -30^\circ$. Notice $g(x) = -2\cos x$ is strictly negative ($< 0$) on $(-90^\circ;\ 90^\circ)$ and $0$ at $\pm 90^\circ$. So $f\cdot g < 0$ where $f(x) > 0$ and $g(x) < 0$, which is $-30^\circ < x < 90^\circ$.
```

## Further help

- Siyavula Mathematics Grade 11, [5.5 The sine function](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-05).
- Siyavula Mathematics Grade 11, [5.6 The cosine function](https://www.siyavula.com/read/za/mathematics/grade-11/functions/05-functions-06).
