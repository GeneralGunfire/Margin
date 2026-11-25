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

> **What you'll learn:** how to prove trigonometric identities rigorously by transforming one side at a time, and how to find every angle where an identity becomes undefined.
>
> **Prerequisites:** [Simplifying expressions](/library/pure-mathematics/trigonometry-identities-reduction-formulae-and-equations/simplifying-expressions) and algebraic fractions.

## 1. Keep the two sides strictly separate

An identity proof is not an equation to solve—you are **not** looking for $x$, you are proving that the left-hand side (LHS) and right-hand side (RHS) represent the exact same expression for all allowed angles.

Therefore, **never move terms across the equals sign**. Pick the messier side (usually the one with fractions or $\tan x$), rewrite it step by step using algebra and the two fundamental identities until it matches the other side, and finish with $\therefore \text{LHS} = \text{RHS}$.

```compare
title: Valid proof vs illegal manipulation
left_title: Valid: transform LHS alone
left:
Start with $\text{LHS} = \ldots$ and simplify using fractions, conjugates, $\tan x = \frac{\sin x}{\cos x}$, and $\sin^{2}x + \cos^{2}x = 1$ until you arrive at the RHS.
right_title: Illegal: cross-multiplying across "="
right:
Multiplying both sides or moving terms from LHS to RHS **assumes the two sides are already equal**—which is what you were asked to prove!
```

```rule
title: Fundamental identities and domain restrictions
\tan x = \frac{\sin x}{\cos x} \qquad \sin^{2}x + \cos^{2}x = 1
\text{An expression is undefined wherever a denominator} = 0 \text{ (including } \cos x = 0 \text{ inside } \tan x\text{)}
```

## 2. Finding undefined values

An identity breaks whenever **any denominator equals zero**—in the LHS, in the RHS, or hidden inside $\tan x = \frac{\sin x}{\cos x}$:

- $\tan x$ is undefined when $\cos x = 0 \implies x = 90^\circ + k\cdot 180^\circ,\ k \in \mathbb{Z}$.
- A fraction $\frac{A}{1 - \sin x}$ is undefined when $1 - \sin x = 0 \implies \sin x = 1 \implies x = 90^\circ + k\cdot 360^\circ$.

```tryit
title: Quick check
prompt: For which values of $x \in [0^\circ;\ 360^\circ]$ is $\dfrac{\cos x}{1 + \sin x} + \tan x$ undefined?
hint: Check both denominators: $1 + \sin x = 0$ and $\cos x = 0$ (from $\tan x$).
answer: $1 + \sin x = 0 \implies \sin x = -1 \implies x = 270^\circ$. And $\tan x$ is undefined when $\cos x = 0 \implies x = 90^\circ$ or $270^\circ$. Combined: $x = 90^\circ$ or $x = 270^\circ$.
```

## 3. Worked examples

```steps
title: Example 1 (Replace $\tan x$ and add fractions): Prove $\tan x + \frac{1}{\tan x} = \frac{1}{\sin x\cos x}$
Start with LHS and write $\tan x$ in terms of $\sin x, \cos x$ :: \text{LHS} = \frac{\sin x}{\cos x} + \frac{\cos x}{\sin x}
Combine over LCD $\sin x\cos x$ :: = \frac{\sin^{2}x + \cos^{2}x}{\sin x\cos x}
Apply $\sin^{2}x + \cos^{2}x = 1$ :: = \frac{1}{\sin x\cos x} = \text{RHS}
```

```steps
title: Example 2 (Difference of squares): Prove $(1 - \sin x)(1 + \sin x) = \cos^{2}x$
Expand the LHS :: \text{LHS} = 1 - \sin^{2}x
Use $\sin^{2}x + \cos^{2}x = 1$ :: = \cos^{2}x = \text{RHS}
```

```steps
title: Example 3 (Exam level — conjugate & undefined values): Prove $\frac{\cos x}{1 - \sin x} = \frac{1 + \sin x}{\cos x}$ and find where it is undefined
Multiply LHS numerator and denominator by $(1 + \sin x)$ :: \text{LHS} = \frac{\cos x(1 + \sin x)}{(1 - \sin x)(1 + \sin x)}
Expand denominator and apply $1 - \sin^{2}x = \cos^{2}x$ :: = \frac{\cos x(1 + \sin x)}{1 - \sin^{2}x} = \frac{\cos x(1 + \sin x)}{\cos^{2}x}
Cancel one $\cos x$ :: = \frac{1 + \sin x}{\cos x} = \text{RHS}
LHS denominator $= 0$ when $\sin x = 1$ :: x = 90^\circ + k\cdot 360^\circ
RHS denominator $= 0$ when $\cos x = 0$ (covers $90^\circ$ and $270^\circ$) :: x = 90^\circ + k\cdot 180^\circ,\quad k \in \mathbb{Z}
```

> **Common mistakes**
>
> - **Cross-multiplying in a proof:** always keep `LHS = ...` separate from `RHS`.
> - **Forgetting hidden denominators:** if $\tan x$ sits in the denominator ($\frac{1}{\tan x}$), check **both** $\cos x = 0$ (so $\tan x$ exists) and $\tan x = 0$ ($\sin x = 0$).
> - **Checking only one side for undefined values:** include zeros from denominators on **both** the LHS and the RHS.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Prove that $\dfrac{\sin x}{\tan x} = \cos x$.
A: $\text{LHS} = \sin x \div \dfrac{\sin x}{\cos x} = \sin x \cdot \dfrac{\cos x}{\sin x} = \cos x = \text{RHS}$.
---
Q: Prove that $\tan x\cos x = \sin x$.
A: $\text{LHS} = \dfrac{\sin x}{\cos x}\cdot\cos x = \sin x = \text{RHS}$.
---
Q: Prove that $(\sin x + \cos x)^{2} = 1 + 2\sin x\cos x$.
A: $\text{LHS} = \sin^{2}x + 2\sin x\cos x + \cos^{2}x = (\sin^{2}x + \cos^{2}x) + 2\sin x\cos x = 1 + 2\sin x\cos x = \text{RHS}$.
---
Q: Prove that $\dfrac{1 - \cos^{2}x}{\sin x} = \sin x$.
A: $\text{LHS} = \dfrac{\sin^{2}x}{\sin x} = \sin x = \text{RHS}$.
---
Q: **(Exam level)** Prove that $\dfrac{\sin x}{1 + \cos x} + \dfrac{1 + \cos x}{\sin x} = \dfrac{2}{\sin x}$.
A: $\text{LHS} = \dfrac{\sin^{2}x + (1 + \cos x)^{2}}{\sin x(1 + \cos x)} = \dfrac{\sin^{2}x + 1 + 2\cos x + \cos^{2}x}{\sin x(1 + \cos x)} = \dfrac{2 + 2\cos x}{\sin x(1 + \cos x)} = \dfrac{2(1 + \cos x)}{\sin x(1 + \cos x)} = \dfrac{2}{\sin x} = \text{RHS}$.
---
Q: For which values of $x \in [0^\circ;\ 360^\circ]$ is $\dfrac{\sin x}{\tan x}$ undefined?
A: It is undefined where $\tan x$ is undefined ($\cos x = 0 \implies 90^\circ, 270^\circ$) or where the denominator $\tan x = 0$ ($\sin x = 0 \implies 0^\circ, 180^\circ, 360^\circ$). So $x \in \{0^\circ,\ 90^\circ,\ 180^\circ,\ 270^\circ,\ 360^\circ\}$.
```

## Further help

- Siyavula Mathematics Grade 11, [6.2 Trigonometric identities](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/06-trigonometry-02).
