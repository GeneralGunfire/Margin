---
title: Trigonometry revision workshop
youtube_query: Grade 11 trigonometry revision South Africa
subject: pure-mathematics
topic: Revision: Trigonometry
part: Geometry
term: 4
subtopic: Trigonometry revision
order: 1411
---

> **What you'll learn:** how the two halves of Grade 11 Trigonometry—**identities, CAST diagrams, reduction formulae & general solutions** (Term 1) plus **sine, cosine & area rules in 2D triangles** (Term 3)—combine in Paper 2 exam questions.
>
> **Prerequisites:** All lessons in [Trigonometry: identities, reduction formulae and equations](/library/pure-mathematics/trigonometry-identities-reduction-formulae-and-equations/cast-and-the-pythagorean-theorem) and [Trigonometry: sine, cosine and area rules](/library/pure-mathematics/trigonometry-sine-cosine-and-area-rules/mixed-2d-problems).

## 1. Your Paper 2 trigonometry toolkit on one page

Every Grade 11 trigonometry paper tests five connected skills. Spot which skill a question triggers before touching your calculator:

| Question cue | Tool to use | Watch out for... |
| :--- | :--- | :--- |
| "Without a calculator, given $5\sin\theta + 3 = 0$ and $\theta \in (90^\circ;\ 270^\circ)$..." | **CAST + Pythagoras sketch** | Pick the *one* quadrant where both sign and interval match; watch negative $x$ or $y$! |
| "Simplify $\dfrac{\sin(180^\circ + x)\tan(360^\circ - x)}{\cos(90^\circ + x)}$..." | **Reduction formulae** | Only $90^\circ \pm x$ co-functions swap $\sin \leftrightarrow \cos$; check the sign of the **original** function! |
| "Prove that $\text{LHS} = \text{RHS}$" | **Fundamental identities** ($\tan\theta = \frac{\sin\theta}{\cos\theta}$, $\sin^2\theta + \cos^2\theta = 1$) | Never cross-multiply across $=$; rewrite one side until it matches the other |
| "Determine the general solution / solve for $x \in [-180^\circ;\ 180^\circ]$" | **General solution** ($+ k\cdot 360^\circ$ or $+ k\cdot 180^\circ$) | Find the reference angle from the **positive** ratio *before* putting $+ k\cdot 360^\circ$ on all branches! |
| Non-right triangle / two-triangle diagram | **Sine, cosine & area rules** | SAS $\to$ Cosine/Area; SSS $\to$ Cosine; AAS/SSA $\to$ Sine (check obtuse branch in SSA!) |

Check your quadrant signs and wave solutions with both interactive tools below:

```diagram
name: cast-explorer
```

```diagram
name: trig-equation-wave
```

## 2. The top 4 Paper 2 exam traps

```compare
title: Habits that cost marks vs full-mark habits
left_title: Exam traps to avoid
left:
- Writing $\sqrt{x^2 + y^2}$ with a minus sign ($r$ is **always positive**!).
- Changing $\cos(180^\circ - x)$ to $\sin x$ ($180^\circ$ keeps the function as $\cos$).
- Dividing an equation by $\sin x$ and losing the $\sin x = 0$ solutions (always **factorise** instead!).
- Rounding intermediate lengths inside a two-triangle 2D problem.
right_title: Full-mark exam habits
right:
- Mark signs on $(x;\ y)$ in the sketch; keep $r > 0$.
- Only $90^\circ \pm \theta$ swaps $\sin \leftrightarrow \cos$; always check quadrant sign *before* swapping.
- Move all terms to one side and factor out common trig ratios.
- Store exact intermediate values in calculator memory (`ANS` or `A`, `B`, `C`).
```

```tryit
title: Quick check (Reduction + identity)
prompt: Simplify $\dfrac{\sin(180^\circ - x)\cdot\cos(90^\circ + x)}{\tan(360^\circ - x)\cdot\cos^2(180^\circ + x)}$ to a single trig ratio.
hint: Convert each piece step by step: $\cos(90^\circ + x) = -\sin x$, $\tan(360^\circ - x) = -\tan x$, and $\cos^2(180^\circ + x) = (-\cos x)^2 = +\cos^2 x$.
answer: Numerator $= (\sin x)(-\sin x) = -\sin^2 x$. Denominator $= (-\tan x)(\cos^2 x) = -\left(\frac{\sin x}{\cos x}\right)\cos^2 x = -\sin x\cos x$. Dividing gives $\dfrac{-\sin^2 x}{-\sin x\cos x} = \dfrac{\sin x}{\cos x} = \tan x$.
```

## 3. Integrated exam-style walkthroughs

```steps
title: Workshop 1 (General solution by factorising): Determine the general solution of $2\sin^2 x - \sin x = 0$, and hence find all solutions in $[-180^\circ;\ 180^\circ]$.
Move everything to one side and factorise (do NOT divide by $\sin x$!) :: \sin x(2\sin x - 1) = 0
Split into two equations :: \sin x = 0 \quad\text{or}\quad \sin x = \frac{1}{2}
Solve $\sin x = 0$ :: x = 0^\circ + k\cdot 180^\circ \qquad (k \in \mathbb{Z})
Solve $\sin x = \frac{1}{2}$ in Quadrants I and II :: x = 30^\circ + k\cdot 360^\circ \quad\text{or}\quad x = 150^\circ + k\cdot 360^\circ \qquad (k \in \mathbb{Z})
Filter for $x \in [-180^\circ;\ 180^\circ]$ :: x \in \{-180^\circ,\; 0^\circ,\; 30^\circ,\; 150^\circ,\; 180^\circ\}
```

```steps
title: Workshop 2 (Identity proof + restriction): Prove that $\dfrac{1 - \cos^2 x}{\sin x\cos x} + \dfrac{\cos x}{\sin x} = \dfrac{1}{\sin x\cos x}$, and state two values of $x \in [0^\circ;\ 180^\circ]$ for which the identity is undefined.
Rewrite $1 - \cos^2 x = \sin^2 x$ on the LHS :: \text{LHS} = \frac{\sin^2 x}{\sin x\cos x} + \frac{\cos x}{\sin x}
Simplify the first fraction (or put over common denominator $\sin x\cos x$) :: \text{LHS} = \frac{\sin^2 x}{\sin x\cos x} + \frac{\cos^2 x}{\sin x\cos x}
Add numerators and apply $\sin^2 x + \cos^2 x = 1$ :: \text{LHS} = \frac{\sin^2 x + \cos^2 x}{\sin x\cos x} = \frac{1}{\sin x\cos x} = \text{RHS}
Find undefined values where denominators equal $0$ in $[0^\circ;\ 180^\circ]$ :: \sin x = 0 \;\Longrightarrow\; x = 0^\circ, 180^\circ; \quad \cos x = 0 \;\Longrightarrow\; x = 90^\circ
```

## 4. Mixed Paper 2 practice

Try each question on paper before opening the worked answer.

```questions
Q: Given $13\cos\alpha + 5 = 0$ and $\sin\alpha < 0$, determine the value of $12\tan\alpha + 13\sin\alpha$ **without a calculator**.
A: $\cos\alpha = -\frac{5}{13}$ ($x = -5$, $r = 13$) with $\sin\alpha < 0$ places $\alpha$ in **Quadrant III**, so $y = -\sqrt{13^2 - (-5)^2} = -12$. Thus $\tan\alpha = \frac{-12}{-5} = \frac{12}{5}$ and $\sin\alpha = -\frac{12}{13}$. Expression $= 12\left(\frac{12}{5}\right) + 13\left(-\frac{12}{13}\right) = \frac{144}{5} - 12 = \frac{84}{5} = 16{,}8$.
---
Q: Simplify without a calculator: $\dfrac{\sin 150^\circ \cdot \tan 225^\circ}{\cos(-60^\circ) \cdot \cos 180^\circ}$.
A: $\sin 150^\circ = \sin 30^\circ = \frac{1}{2}$; $\tan 225^\circ = \tan 45^\circ = 1$; $\cos(-60^\circ) = \cos 60^\circ = \frac{1}{2}$; $\cos 180^\circ = -1$. Result $= \dfrac{\frac{1}{2} \cdot 1}{\frac{1}{2} \cdot (-1)} = -1$.
---
Q: Find the general solution of $\cos(2x - 10^\circ) = -\frac{\sqrt{3}}{2}$.
A: Reference angle $= \cos^{-1}\!\left(\frac{\sqrt{3}}{2}\right) = 30^\circ$. Since cosine is negative in Quadrants II and III: $2x - 10^\circ = 150^\circ + k\cdot 360^\circ \implies 2x = 160^\circ + k\cdot 360^\circ \implies x = 80^\circ + k\cdot 180^\circ$, OR $2x - 10^\circ = 210^\circ + k\cdot 360^\circ \implies 2x = 220^\circ + k\cdot 360^\circ \implies x = 110^\circ + k\cdot 180^\circ$ ($k \in \mathbb{Z}$).
---
Q: **(Exam level)** In cyclic quadrilateral $ABCD$, $AB = 6$, $BC = 9$, $AD = 7$, $\hat{B} = 110^\circ$, and $A\hat{C}D = 42^\circ$. Calculate **(a)** diagonal $AC$ and **(b)** side $CD$, each to one decimal place.
A: **(a)** In $\triangle ABC$ (SAS), $AC^2 = 6^2 + 9^2 - 2(6)(9)\cos 110^\circ \approx 36 + 81 + 36{,}94 = 153{,}94 \implies AC \approx 12{,}41 \to 12{,}4$. **(b)** Since $ABCD$ is cyclic, $\hat{D} = 180^\circ - 110^\circ = 70^\circ$ ($\text{opp }\angle\text{s of cyclic quad}$). Now look in $\triangle ACD$: $C\hat{A}D = 180^\circ - 70^\circ - 42^\circ = 68^\circ$ ($\angle\text{s of }\triangle$). By the sine rule in $\triangle ACD$: $\dfrac{CD}{\sin 68^\circ} = \dfrac{12{,}407}{\sin 70^\circ} \implies CD \approx 12{,}2$.
```

## Further help

- Siyavula Mathematics Grade 11, [6.6 Summary of trigonometry](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/06-trigonometry-06).
