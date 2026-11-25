---
title: Simplifying expressions
youtube_query: Grade 11 simplifying trigonometric expressions
subject: pure-mathematics
topic: Trigonometry: identities, reduction formulae and equations
part: Geometry
term: 1
subtopic: Identities and reduction formulae
order: 313
---

> **What you'll learn:** how to simplify long trigonometric expressions cleanly using reduction formulae, the quotient identity $\tan x = \frac{\sin x}{\cos x}$, and the Pythagorean identity $\sin^{2}x + \cos^{2}x = 1$.
>
> **Prerequisites:** [Reduction to acute angles](/library/pure-mathematics/trigonometry-identities-reduction-formulae-and-equations/reduction-to-acute-angles).

## 1. Reduce first, convert $\tan x$ second, cancel last

Long trig fractions look intimidating only until all the angles match. Put every expression through the same three-stage pipeline:

1. **Reduce every angle** to acute $x$ (using $180^\circ \pm x$, $360^\circ - x$, $-x$, or $90^\circ \pm x$).
2. **Rewrite** $\tan x = \frac{\sin x}{\cos x}$ and watch for $\sin^{2}x + \cos^{2}x = 1$.
3. **Factorise and cancel** common factors—never terms across $+$ or $-$.

```rule
title: Core identities for simplifying
\tan x = \frac{\sin x}{\cos x} \qquad \sin^{2}x + \cos^{2}x = 1
\sin^{2}x = 1 - \cos^{2}x \qquad \cos^{2}x = 1 - \sin^{2}x
```

## 2. Handling reversed angles like $(x - 180^\circ)$ and $(x - 360^\circ)$

Exams frequently write the angle backwards—for instance $\sin(x - 180^\circ)$ instead of $\sin(180^\circ - x)$. You can handle any reversed angle in one reliable move: **add $360^\circ$ inside the angle** (because adding a full turn never changes the ratio):

```compare
title: Two ways to handle (x - 180°)
left_title: Add 360° inside the angle (safest!)
left:
Adding $360^\circ$ changes $(x - 180^\circ)$ into $(180^\circ + x)$:
- $\sin(x - 180^\circ) = \sin(180^\circ + x) = -\sin x$
- $\cos(x - 180^\circ) = \cos(180^\circ + x) = -\cos x$
Works identically for $\sin$, $\cos$, and $\tan$.
right_title: Factor out a minus sign
right:
Remember $\sin(-\alpha) = -\sin\alpha$ whereas $\cos(-\alpha) = +\cos\alpha$:
- $\sin(x - 180^\circ) = -\sin(180^\circ - x) = -\sin x$
- $\cos(x - 180^\circ) = +\cos(180^\circ - x) = -\cos x$
Easy to drop the sign on cosine if you rush!
```

```tryit
title: Quick check
prompt: Simplify $\cos(x - 360^\circ) \cdot \tan(180^\circ - x)$ in terms of $\sin x$ and $\cos x$ only.
hint: Add $360^\circ$ to $(x - 360^\circ)$, reduce $\tan(180^\circ - x)$, then replace $\tan x$.
answer: $\cos(x - 360^\circ) = \cos x$ and $\tan(180^\circ - x) = -\tan x = -\frac{\sin x}{\cos x}$. Multiplying gives $\cos x \cdot \left(-\frac{\sin x}{\cos x}\right) = -\sin x$.
```

## 3. Worked examples

```steps
title: Example 1 (Basic product): Simplify $\sin(180^\circ - x)\cdot\cos(-x)$
$\sin(180^\circ - x)$ is in Q II (positive) :: \sin(180^\circ - x) = \sin x
$\cos(-x)$ is in Q IV (positive) :: \cos(-x) = \cos x
Multiply the reduced factors :: \sin x \cos x
```

```steps
title: Example 2 (Fraction with tangent): Simplify $\dfrac{\sin(180^\circ + x)\cos(90^\circ - x)}{\tan(360^\circ - x)}$
Reduce each piece :: \sin(180^\circ + x) = -\sin x,\quad \cos(90^\circ - x) = \sin x,\quad \tan(360^\circ - x) = -\tan x
Substitute and cancel the minus signs :: \frac{(-\sin x)(\sin x)}{-\tan x} = \frac{\sin^{2}x}{\tan x}
Replace $\tan x = \frac{\sin x}{\cos x}$ :: \sin^{2}x \cdot \frac{\cos x}{\sin x} = \sin x\cos x
```

```steps
title: Example 3 (Exam level — reversed angle and squared reduction): Simplify $\dfrac{\sin(x - 180^\circ)\cos(90^\circ + x)}{\cos(-x)\tan(180^\circ + x)}$
Add $360^\circ$ to $x - 180^\circ$ :: \sin(x - 180^\circ) = \sin(180^\circ + x) = -\sin x
Reduce $\cos(90^\circ + x)$ (Q II, cosine negative, co-ratio) :: \cos(90^\circ + x) = -\sin x
Reduce denominator :: \cos(-x) = \cos x,\quad \tan(180^\circ + x) = \tan x
Substitute into the fraction :: \frac{(-\sin x)(-\sin x)}{\cos x \cdot \frac{\sin x}{\cos x}}
Cancel $\cos x$ in the denominator, then one $\sin x$ :: \frac{\sin^{2}x}{\sin x} = \sin x
```

> **Common mistakes**
>
> - **Neglecting signs on squared ratios vs unsquared ratios:** $\cos^{2}(180^\circ - x) = (-\cos x)^{2} = +\cos^{2}x$, so a square always turns a negative sign positive.
> - **Cancelling across $+$ or $-$:** in $\frac{1 - \cos^{2}x}{\cos x}$, you cannot cancel $\cos x$; first replace $1 - \cos^{2}x$ with $\sin^{2}x$.
> - **Forgetting to write $\cos(-x) = +\cos x$:** unlike sine and tangent, cosine absorbs the negative sign.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Simplify $\sin(180^\circ + x)\cdot\cos(360^\circ - x)$.
A: $(-\sin x)(\cos x) = -\sin x\cos x$.
---
Q: Simplify $\dfrac{\cos(180^\circ - x)}{\sin(90^\circ - x)}$.
A: $\dfrac{-\cos x}{\cos x} = -1$.
---
Q: Simplify $\tan(180^\circ - x)\cdot\cos(90^\circ - x)\cdot\sin(-x)$ in terms of $\sin x$ and $\cos x$ only.
A: $(-\tan x)(\sin x)(-\sin x) = \dfrac{\sin x}{\cos x}\cdot\sin^{2}x = \dfrac{\sin^{3}x}{\cos x}$.
---
Q: Simplify $\dfrac{\sin(180^\circ + x)\cdot\tan(360^\circ - x)}{\cos(90^\circ + x)}$.
A: $\dfrac{(-\sin x)(-\tan x)}{-\sin x} = -\tan x$.
---
Q: **(Exam level)** Simplify $\dfrac{\cos(-x)\sin(90^\circ + x)}{\sin(180^\circ - x)\tan(180^\circ + x)}$ in terms of $\sin x$ and $\cos x$ only.
A: $\dfrac{(\cos x)(\cos x)}{(\sin x)\left(\frac{\sin x}{\cos x}\right)} = \dfrac{\cos^{2}x}{\frac{\sin^{2}x}{\cos x}} = \dfrac{\cos^{3}x}{\sin^{2}x}$.
---
Q: Simplify $\dfrac{1 - \cos^{2}(180^\circ - x)}{\tan x \cos x}$.
A: $\cos^{2}(180^\circ - x) = (-\cos x)^{2} = \cos^{2}x$. Top becomes $1 - \cos^{2}x = \sin^{2}x$. Bottom becomes $\frac{\sin x}{\cos x}\cdot\cos x = \sin x$. Result: $\dfrac{\sin^{2}x}{\sin x} = \sin x$.
```

## Further help

- Siyavula Mathematics Grade 11, [6.2 Trigonometric identities](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/06-trigonometry-02).
- Siyavula Mathematics Grade 11, [6.3 Reduction formula](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/06-trigonometry-03).
