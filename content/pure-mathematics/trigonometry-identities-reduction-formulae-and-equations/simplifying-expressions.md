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

> **What you'll learn:** how to simplify long trig expressions by applying the reduction formulae, then the identities $\tan\theta = \frac{\sin\theta}{\cos\theta}$ and $\sin^2\theta + \cos^2\theta = 1$.
>
> **Prerequisites:** [Reduction to acute angles](/library/pure-mathematics/trigonometry-identities-reduction-formulae-and-equations/reduction-to-acute-angles).

## The idea in plain language

Simplifying a trig expression has three steps, in this order:

1. **Reduce** every ratio to a function of $x$ alone, using the reduction formulae. Write down each reduction as you go.
2. Replace $\tan x$ by $\frac{\sin x}{\cos x}$ if that helps.
3. **Cancel** common factors, or use $\sin^2 x + \cos^2 x = 1$.

Treat $x$ as an acute angle when you reduce. This always gives the correct signs.

## The tools

```rule
title: Identities
\tan x = \frac{\sin x}{\cos x}
\sin^{2}x + \cos^{2}x = 1 \qquad \sin^{2}x = 1 - \cos^{2}x \qquad \cos^{2}x = 1 - \sin^{2}x
```

## Worked example 1 (basic)

```steps
title: Simplify $\sin(180^\circ - x)\cdot\cos(-x)$
$\sin(180^\circ - x)$ keeps its sign in quadrant II :: \sin(180^\circ - x) = \sin x
Cosine ignores a negative angle :: \cos(-x) = \cos x
Multiply :: \sin x \cos x
```

## Worked example 2 (with a fraction)

```steps
title: Simplify $\frac{\sin(180^\circ + x)\cos(90^\circ - x)}{\tan(360^\circ - x)}$
Reduce each ratio :: \sin(180^\circ + x) = -\sin x
Next :: \cos(90^\circ - x) = \sin x
Next :: \tan(360^\circ - x) = -\tan x
Substitute :: \frac{(-\sin x)(\sin x)}{-\tan x}
The two negatives cancel :: \frac{\sin^{2}x}{\tan x}
Replace $\tan x$ :: \frac{\sin^{2}x}{\frac{\sin x}{\cos x}}
Multiply by the reciprocal :: \sin^{2}x \cdot \frac{\cos x}{\sin x}
Cancel one $\sin x$ :: \sin x \cos x
```

## Worked example 3 (exam level)

```steps
title: Simplify $\frac{\sin(x - 180^\circ)\cos(90^\circ + x)}{\cos(-x)\tan(180^\circ + x)}$
Rewrite $x - 180^\circ$ as $-(180^\circ - x)$ :: \sin(x - 180^\circ) = -\sin(180^\circ - x) = -\sin x
Reduce the next one :: \cos(90^\circ + x) = -\sin x
Reduce the bottom :: \cos(-x) = \cos x \quad\text{and}\quad \tan(180^\circ + x) = \tan x
Substitute :: \frac{(-\sin x)(-\sin x)}{\cos x \cdot \tan x}
Multiply the top; replace $\tan x$ in the bottom :: \frac{\sin^{2}x}{\cos x \cdot \frac{\sin x}{\cos x}}
The $\cos x$ cancels in the bottom :: \frac{\sin^{2}x}{\sin x}
Cancel :: \sin x
```

> **Common mistakes**
>
> - Skipping the reduction step and trying to simplify with the angles still in place.
> - Sign errors: write the sign of each reduced ratio immediately.
> - Cancelling terms across a plus or minus sign instead of factors.
> - Forgetting that $\sin(x - 180^\circ)$ needs rewriting as $-\sin(180^\circ - x)$ first.
> - Leaving the answer in terms of $\tan x$ when the question asks for sine and cosine only.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Simplify $\sin(180^\circ + x)\cdot\cos(360^\circ - x)$.
A: $\sin(180^\circ + x) = -\sin x$ and $\cos(360^\circ - x) = \cos x$. The product is $-\sin x\cos x$.
---
Q: Simplify $\frac{\cos(180^\circ - x)}{\sin(90^\circ - x)}$.
A: $\cos(180^\circ - x) = -\cos x$ and $\sin(90^\circ - x) = \cos x$. The quotient is $-1$.
---
Q: Simplify $\tan(180^\circ - x)\cdot\cos(90^\circ - x)\cdot\sin(-x)$ in terms of $\sin x$ and $\cos x$ only.
A: $\tan(180^\circ - x) = -\tan x$, $\cos(90^\circ - x) = \sin x$, $\sin(-x) = -\sin x$. The product is $\tan x \sin^2 x = \frac{\sin^3 x}{\cos x}$.
---
Q: Simplify $\frac{\sin(180^\circ + x)\cdot\tan(360^\circ - x)}{\cos(90^\circ + x)}$.
A: $\sin(180^\circ + x) = -\sin x$, $\tan(360^\circ - x) = -\tan x$, $\cos(90^\circ + x) = -\sin x$. So the expression is $\frac{(-\sin x)(-\tan x)}{-\sin x} = -\tan x$.
---
Q: Simplify $\frac{\cos(-x)\sin(90^\circ + x)}{\sin(180^\circ - x)\tan(180^\circ + x)}$ using only $\sin x$ and $\cos x$.
A: $\cos(-x) = \cos x$, $\sin(90^\circ + x) = \cos x$, $\sin(180^\circ - x) = \sin x$, $\tan(180^\circ + x) = \tan x$. So $\frac{\cos^2 x}{\sin x \cdot \frac{\sin x}{\cos x}} = \frac{\cos^3 x}{\sin^2 x}$.
---
Q: Simplify $\frac{1 - \cos^{2}(180^\circ - x)}{\tan x \cos x}$.
A: $\cos(180^\circ - x) = -\cos x$, so $\cos^2(180^\circ - x) = \cos^2 x$. The top is $1 - \cos^2 x = \sin^2 x$. The bottom is $\frac{\sin x}{\cos x}\cdot\cos x = \sin x$. The result is $\sin x$.
```

## Further help

- Siyavula Mathematics Grade 11, [6.2 Trigonometric identities](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/06-trigonometry-02).
- Siyavula Mathematics Grade 11, [6.3 Reduction formula](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/06-trigonometry-03).
