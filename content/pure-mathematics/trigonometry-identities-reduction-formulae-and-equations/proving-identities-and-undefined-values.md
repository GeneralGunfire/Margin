---
title: Proving identities and undefined values
youtube_query: Grade 11 proving trigonometric identities
subject: pure-mathematics
topic: Trigonometry: identities, reduction formulae and equations
part: Geometry
term: 1
subtopic: Identities and reduction formulae
order: 314
---

> **What you'll learn:** how to prove a trigonometric identity, and how to find the angles for which an identity is undefined.
>
> **Prerequisites:** [Simplifying expressions](/library/pure-mathematics/trigonometry-identities-reduction-formulae-and-equations/simplifying-expressions), and algebraic fractions.

## The idea in plain language

To **prove** an identity you show that the left-hand side (LHS) and right-hand side (RHS) are equal for every allowed angle. The rule that keeps the proof honest: **work on one side only**, usually the more complicated one, until it matches the other side. Do not move terms across the equals sign, because that assumes what you are trying to prove.

Useful moves:

- Replace $\tan x$ by $\frac{\sin x}{\cos x}$.
- Replace $\sin^2 x$ by $1 - \cos^2 x$ (or the reverse).
- Combine fractions with a common denominator, or multiply by a conjugate.
- Factorise, then cancel.

An identity holds for all angles **except** those that make a denominator zero. Those are the angles for which it is **undefined**.

## The identities

```rule
title: Fundamental identities
\tan x = \frac{\sin x}{\cos x} \qquad \sin^{2}x + \cos^{2}x = 1
\tan x \text{ is undefined where } \cos x = 0: \ x = 90^\circ + k\cdot 180^\circ
```

## Worked example 1 (basic)

```steps
title: Prove that $\tan x + \frac{1}{\tan x} = \frac{1}{\sin x\cos x}$
Start with the LHS and replace $\tan x$ :: \frac{\sin x}{\cos x} + \frac{\cos x}{\sin x}
Common denominator $\sin x\cos x$ :: \frac{\sin^{2}x + \cos^{2}x}{\sin x\cos x}
Use $\sin^2 x + \cos^2 x = 1$ :: \frac{1}{\sin x\cos x}
This equals the RHS :: \text{LHS} = \text{RHS}
```

## Worked example 2 (difference of squares)

```steps
title: Prove that $(1 - \sin x)(1 + \sin x) = \cos^{2}x$
Expand the LHS :: 1 - \sin^{2}x
Use $\sin^2 x + \cos^2 x = 1$ :: \cos^{2}x
This equals the RHS :: \text{LHS} = \text{RHS}
```

## Worked example 3 (exam level)

```steps
title: Prove that $\frac{\cos x}{1 - \sin x} = \frac{1 + \sin x}{\cos x}$ and state when it is undefined
Multiply top and bottom of the LHS by $(1 + \sin x)$ :: \frac{\cos x(1 + \sin x)}{(1 - \sin x)(1 + \sin x)}
Expand the bottom :: \frac{\cos x(1 + \sin x)}{1 - \sin^{2}x}
Use $1 - \sin^2 x = \cos^2 x$ :: \frac{\cos x(1 + \sin x)}{\cos^{2}x}
Cancel one $\cos x$ :: \frac{1 + \sin x}{\cos x}
This equals the RHS :: \text{LHS} = \text{RHS}
LHS undefined when $1 - \sin x = 0$, so $\sin x = 1$ :: x = 90^\circ + k\cdot 360^\circ
RHS undefined when $\cos x = 0$ :: x = 90^\circ + k\cdot 180^\circ
The identity is undefined for all of these :: x = 90^\circ + k\cdot 180^\circ,\ k \in \mathbb{Z}
```

> **Common mistakes**
>
> - Working on both sides at once, or moving terms across the equals sign.
> - Dividing by an expression that could be zero without noting the restriction.
> - Writing $\sin^2 x$ as $\sin x^2$ or $(\sin x)^2$ inconsistently.
> - Cancelling terms across addition instead of factors.
> - Forgetting that the final statement ("LHS = RHS") is part of the proof.
> - Stating "undefined" values from only one side. Check both sides' denominators.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Prove that $\frac{\sin x}{\tan x} = \cos x$.
A: LHS $= \sin x \div \frac{\sin x}{\cos x} = \sin x \cdot \frac{\cos x}{\sin x} = \cos x$ = RHS.
---
Q: Prove that $\tan x\cos x = \sin x$.
A: LHS $= \frac{\sin x}{\cos x}\cdot\cos x = \sin x$ = RHS.
---
Q: Prove that $(\sin x + \cos x)^{2} = 1 + 2\sin x\cos x$.
A: LHS $= \sin^2 x + 2\sin x\cos x + \cos^2 x = 1 + 2\sin x\cos x$ = RHS.
---
Q: Prove that $\frac{1 - \cos^{2}x}{\sin x} = \sin x$.
A: LHS $= \frac{\sin^2 x}{\sin x} = \sin x$ = RHS.
---
Q: Prove that $\frac{\sin x}{1 + \cos x} + \frac{1 + \cos x}{\sin x} = \frac{2}{\sin x}$.
A: LHS $= \frac{\sin^2 x + (1 + \cos x)^2}{\sin x(1 + \cos x)} = \frac{\sin^2 x + 1 + 2\cos x + \cos^2 x}{\sin x(1 + \cos x)} = \frac{2 + 2\cos x}{\sin x(1 + \cos x)} = \frac{2(1 + \cos x)}{\sin x(1 + \cos x)} = \frac{2}{\sin x}$ = RHS.
---
Q: For which values of $x \in [0^\circ;\ 360^\circ]$ is $\frac{\sin x}{\tan x}$ undefined?
A: It is undefined when $\tan x$ is undefined or when $\tan x = 0$. $\tan x$ is undefined at $90^\circ$ and $270^\circ$. $\tan x = 0$ at $0^\circ$, $180^\circ$ and $360^\circ$. So the expression is undefined at $0^\circ$, $90^\circ$, $180^\circ$, $270^\circ$ and $360^\circ$.
```

## Further help

- Siyavula Mathematics Grade 11, [6.2 Trigonometric identities](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/06-trigonometry-02).
