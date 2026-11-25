---
title: General solution
youtube_query: Grade 11 trigonometry general solution
subject: pure-mathematics
topic: Trigonometry: identities, reduction formulae and equations
part: Geometry
term: 1
subtopic: Trigonometric equations
order: 322
---

> **What you'll learn:** how to capture *every* solution of a trigonometric equation using $k \in \mathbb{Z}$, and how to solve compound-angle equations like $\sin 2\theta = \frac{1}{2}$ without missing solutions.
>
> **Prerequisites:** [Basic equations](/library/pure-mathematics/trigonometry-identities-reduction-formulae-and-equations/basic-equations).

## 1. Waves repeat forever—so add $k\cdot 360^\circ$ (or $k\cdot 180^\circ$)

On $[0^\circ;\ 360^\circ]$, $\sin\theta = \frac{1}{2}$ hits height $\frac{1}{2}$ twice ($30^\circ$ and $150^\circ$). Now keep spinning past $360^\circ$—at $30^\circ + 360^\circ = 390^\circ$ and $150^\circ + 360^\circ = 510^\circ$, the terminal arm lands in the **exact same positions**, or spin backwards to $-330^\circ$ and $-210^\circ$. Adding $k\cdot 360^\circ$ for any whole number $k \in \mathbb{Z}$ ($k = \dots, -2, -1, 0, 1, 2, \dots$) captures all infinitely many co-terminal angles in one compact formula.

```rule
title: General solution templates (k ∈ Z)
\sin\theta = \sin\alpha \;\Longrightarrow\; \theta = \alpha + k\cdot 360^\circ \;\;\text{or}\;\; \theta = 180^\circ - \alpha + k\cdot 360^\circ
\cos\theta = \cos\alpha \;\Longrightarrow\; \theta = \pm\alpha + k\cdot 360^\circ
\tan\theta = \tan\alpha \;\Longrightarrow\; \theta = \alpha + k\cdot 180^\circ
```

Notice why **tangent** uses $+ k\cdot 180^\circ$: the two quadrants where tangent has the same sign (Q I & III, or Q II & IV) sit exactly $180^\circ$ apart, so one single family catches both!

## 2. Compound angles like $2\theta$: write the general solution *before* dividing

```compare
title: Solving sin 2θ = 1/2 for θ in [0°; 360°]
left_title: Correct: general solution FIRST, then ÷ 2
left:
Write $2\theta = 30^\circ + k\cdot 360^\circ$ or $2\theta = 150^\circ + k\cdot 360^\circ$, **then** divide every term by $2$:
$$\theta = 15^\circ + k\cdot 180^\circ \quad\text{or}\quad \theta = 75^\circ + k\cdot 180^\circ$$
Substituting $k = 0$ and $k = 1$ catches all **four** solutions: $15^\circ, 75^\circ, 195^\circ, 255^\circ$.
right_title: Wrong: finding θ in [0°; 360°] first
right:
If you only solve $2\theta = 30^\circ, 150^\circ$ and divide by $2$, you get $15^\circ$ and $75^\circ$—and **lose half the answers** ($195^\circ$ and $255^\circ$)!
```

```tryit
title: Quick check
prompt: Write the general solution for $\cos 3\theta = \frac{1}{2}$, then list all solutions for $\theta \in [0^\circ;\ 120^\circ]$.
hint: First solve $3\theta = \pm 60^\circ + k\cdot 360^\circ$, then divide **both** the angle and $360^\circ$ by $3$.
answer: $3\theta = \pm 60^\circ + k\cdot 360^\circ \implies \theta = \pm 20^\circ + k\cdot 120^\circ,\ k \in \mathbb{Z}$. For $\theta \in [0^\circ;\ 120^\circ]$: $k = 0$ gives $20^\circ$; $k = 1$ gives $-20^\circ + 120^\circ = 100^\circ$. So $\theta \in \{20^\circ,\ 100^\circ\}$.
```

## 3. Worked examples

```steps
title: Example 1 (Sine general solution & interval): Solve $\sin\theta = \frac{1}{2}$, then find $\theta \in [-360^\circ;\ 360^\circ]$
Reference angle $\alpha = 30^\circ$ :: \theta = 30^\circ + k\cdot 360^\circ \quad\text{or}\quad \theta = 150^\circ + k\cdot 360^\circ,\quad k \in \mathbb{Z}
Test $k = 0$ :: 30^\circ,\ 150^\circ
Test $k = -1$ :: -330^\circ,\ -210^\circ
Values for $k = 1$ or $k = -2$ fall outside $[-360^\circ;\ 360^\circ]$ :: \theta \in \{-330^\circ,\ -210^\circ,\ 30^\circ,\ 150^\circ\}
```

```steps
title: Example 2 (Cosine and tangent): Find the general solutions of $\cos\theta = -\frac{1}{2}$ and $\tan\theta = 1$
Cosine negative (Q II gives $120^\circ$); write $\pm$ form :: \theta = \pm 120^\circ + k\cdot 360^\circ,\quad k \in \mathbb{Z}
Tangent positive (Q I gives $45^\circ$); add $k\cdot 180^\circ$ :: \theta = 45^\circ + k\cdot 180^\circ,\quad k \in \mathbb{Z}
```

```steps
title: Example 3 (Exam level — compound angle): Solve $\sin 2\theta = \frac{1}{2}$ for $\theta \in [0^\circ;\ 360^\circ]$
Write general solution for $2\theta$ first :: 2\theta = 30^\circ + k\cdot 360^\circ \quad\text{or}\quad 2\theta = 150^\circ + k\cdot 360^\circ
Divide every term by $2$ (including the period!) :: \theta = 15^\circ + k\cdot 180^\circ \quad\text{or}\quad \theta = 75^\circ + k\cdot 180^\circ,\quad k \in \mathbb{Z}
Substitute $k = 0$ and $k = 1$ :: \theta \in \{15^\circ,\ 75^\circ,\ 195^\circ,\ 255^\circ\}
```

> **Common mistakes**
>
> - **Using $k\cdot 360^\circ$ for tangent:** tangent repeats every **$180^\circ$**, not $360^\circ$.
> - **Dividing the angle by $2$ without dividing $360^\circ$ by $2$:** $2\theta = 30^\circ + k\cdot 360^\circ$ becomes $\theta = 15^\circ + k\cdot 180^\circ$.
> - **Forgetting $k \in \mathbb{Z}$:** stating that $k$ is an integer is required for full marks in CAPS exams.
> - **Forgetting negative values of $k$:** always test $k = -1, 0, 1, \ldots$ until both sides go past the given interval.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Write the general solution of $\sin\theta = \frac{\sqrt{3}}{2}$.
A: Reference angle $60^\circ$: $\theta = 60^\circ + k\cdot 360^\circ$ or $\theta = 120^\circ + k\cdot 360^\circ$, $k \in \mathbb{Z}$.
---
Q: Write the general solution of $\cos\theta = 0{,}5$ and list the solutions in $[0^\circ;\ 720^\circ]$.
A: $\theta = \pm 60^\circ + k\cdot 360^\circ$, $k \in \mathbb{Z}$. Testing $k = 0, 1, 2$ gives $\theta \in \{60^\circ,\ 300^\circ,\ 420^\circ,\ 660^\circ\}$.
---
Q: Write the general solution of $\tan\theta = -1$ and list the solutions in $[-180^\circ;\ 180^\circ]$.
A: $\theta = 135^\circ + k\cdot 180^\circ$, $k \in \mathbb{Z}$ (or $-45^\circ + k\cdot 180^\circ$). In $[-180^\circ;\ 180^\circ]$: $\theta \in \{-45^\circ,\ 135^\circ\}$.
---
Q: **(Exam level)** Solve $\cos 2\theta = \frac{\sqrt{3}}{2}$ for $\theta \in [0^\circ;\ 180^\circ]$.
A: $2\theta = \pm 30^\circ + k\cdot 360^\circ \implies \theta = \pm 15^\circ + k\cdot 180^\circ$, $k \in \mathbb{Z}$. For $k = 0$: $15^\circ$; for $k = 1$: $-15^\circ + 180^\circ = 165^\circ$. So $\theta \in \{15^\circ,\ 165^\circ\}$.
---
Q: Solve $\tan(\theta - 20^\circ) = 1$ for $\theta \in [0^\circ;\ 360^\circ]$.
A: $\theta - 20^\circ = 45^\circ + k\cdot 180^\circ \implies \theta = 65^\circ + k\cdot 180^\circ$, $k \in \mathbb{Z}$. For $k = 0, 1$: $\theta \in \{65^\circ,\ 245^\circ\}$.
---
Q: Solve $\sin(\theta + 30^\circ) = \frac{1}{2}$ for $\theta \in [0^\circ;\ 360^\circ]$.
A: $\theta + 30^\circ = 30^\circ + k\cdot 360^\circ \implies \theta = k\cdot 360^\circ$ ($0^\circ, 360^\circ$); and $\theta + 30^\circ = 150^\circ + k\cdot 360^\circ \implies \theta = 120^\circ + k\cdot 360^\circ$ ($120^\circ$). So $\theta \in \{0^\circ,\ 120^\circ,\ 360^\circ\}$.
```

## Further help

- Siyavula Mathematics Grade 11, [6.4 Trigonometric equations](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/06-trigonometry-04).
