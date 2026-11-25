---
title: Equations needing identities or factorising
youtube_query: Grade 11 trig equations using identities and factorising
subject: pure-mathematics
topic: Trigonometry: identities, reduction formulae and equations
part: Geometry
term: 1
subtopic: Trigonometric equations
order: 323
---

> **What you'll learn:** how to turn mixed trigonometric equations into basic equations you can solve—by taking out a common factor, replacing $\tan\theta$, or using $\sin^{2}\theta + \cos^{2}\theta = 1$ to build a quadratic.
>
> **Prerequisites:** [General solution](/library/pure-mathematics/trigonometry-identities-reduction-formulae-and-equations/general-solution) and [Factorise and solve](/library/pure-mathematics/equations-and-inequalities/factorise-and-solve).

## 1. Reduce a mixed equation down to factors of one ratio

You cannot take $\sin^{-1}$ or $\cos^{-1}$ while different trig ratios are mixed together. Your goal is always to reshape the equation into **zero on one side and factors on the other** ($A \cdot B = 0$), where each factor contains a single trig ratio:

- **Common factor:** move everything to one side and factor out the shared trig ratio.
- **$\tan\theta$ mixed with $\sin\theta$ or $\cos\theta$:** replace $\tan\theta = \frac{\sin\theta}{\cos\theta}$ (noting $\cos\theta \neq 0$) and clear the denominator.
- **Squared ratio + linear ratio:** replace the **squared** ratio using $\sin^{2}\theta = 1 - \cos^{2}\theta$ (or vice versa) to match the linear ratio and form a quadratic.

```rule
title: Identities and zero-product law
\tan\theta = \frac{\sin\theta}{\cos\theta} \quad (\cos\theta \neq 0) \qquad \sin^{2}\theta + \cos^{2}\theta = 1 \qquad AB = 0 \;\Longrightarrow\; A = 0 \text{ or } B = 0
```

## 2. Never divide by $\sin\theta$ or $\cos\theta$

```compare
title: Solving sin θ cos θ = sin θ
left_title: Right: move across and factorise
left:
$$\sin\theta\cos\theta - \sin\theta = 0$$
$$\sin\theta(\cos\theta - 1) = 0$$
You get **both** $\sin\theta = 0$ ($0^\circ, 180^\circ, 360^\circ$) and $\cos\theta = 1$ ($0^\circ, 360^\circ$).
right_title: Wrong: dividing both sides by sin θ
right:
Dividing by $\sin\theta$ leaves only $\cos\theta = 1$—and silently **deletes $180^\circ$**, because you divided by zero!
```

```tryit
title: Quick check
prompt: Which ratio should you replace in $2\sin^{2}\theta + 5\cos\theta - 4 = 0$, and what quadratic in one ratio do you get?
hint: You cannot turn linear $\cos\theta$ into $\sin\theta$ cleanly, so replace $\sin^{2}\theta$.
answer: Replace $\sin^{2}\theta$ with $1 - \cos^{2}\theta$: $2(1 - \cos^{2}\theta) + 5\cos\theta - 4 = 0 \implies 2\cos^{2}\theta - 5\cos\theta + 2 = 0$, which factorises as $(2\cos\theta - 1)(\cos\theta - 2) = 0$.
```

## 3. Worked examples

```steps
title: Example 1 (Common factor): Solve $2\sin^{2}\theta - \sin\theta = 0$ for $\theta \in [0^\circ;\ 360^\circ]$
Factor out $\sin\theta$ :: \sin\theta\,(2\sin\theta - 1) = 0
Split into two basic equations :: \sin\theta = 0 \quad\text{or}\quad \sin\theta = \frac{1}{2}
Solve $\sin\theta = 0$ :: \theta = 0^\circ,\ 180^\circ,\ 360^\circ
Solve $\sin\theta = \frac{1}{2}$ (Q I and Q II) :: \theta = 30^\circ,\ 150^\circ
Combine all solutions :: \theta \in \{0^\circ,\ 30^\circ,\ 150^\circ,\ 180^\circ,\ 360^\circ\}
```

```steps
title: Example 2 (Pythagorean identity): Solve $2\sin^{2}\theta + \cos\theta - 1 = 0$ for $\theta \in [0^\circ;\ 360^\circ]$
Replace $\sin^{2}\theta$ with $1 - \cos^{2}\theta$ :: 2(1 - \cos^{2}\theta) + \cos\theta - 1 = 0
Simplify and multiply by $-1$ :: 2\cos^{2}\theta - \cos\theta - 1 = 0
Factorise the quadratic in $\cos\theta$ :: (2\cos\theta + 1)(\cos\theta - 1) = 0
Split into two cases :: \cos\theta = -\frac{1}{2} \quad\text{or}\quad \cos\theta = 1
Solve each case in $[0^\circ;\ 360^\circ]$ :: \theta \in \{0^\circ,\ 120^\circ,\ 240^\circ,\ 360^\circ\}
```

```steps
title: Example 3 (Exam level — tangent equation): Solve $\tan\theta = 2\sin\theta$ for $\theta \in [0^\circ;\ 360^\circ]$
Rewrite $\tan\theta$ and state restriction :: \frac{\sin\theta}{\cos\theta} = 2\sin\theta \quad (\cos\theta \neq 0)
Multiply by $\cos\theta$ and move terms to one side :: \sin\theta - 2\sin\theta\cos\theta = 0
Factor out $\sin\theta$ :: \sin\theta\,(1 - 2\cos\theta) = 0
Solve $\sin\theta = 0$ and $\cos\theta = \frac{1}{2}$ :: \theta = 0^\circ, 180^\circ, 360^\circ \quad\text{or}\quad \theta = 60^\circ, 300^\circ
Verify $\cos\theta \neq 0$ for all five solutions :: \theta \in \{0^\circ,\ 60^\circ,\ 180^\circ,\ 300^\circ,\ 360^\circ\}
```

> **Common mistakes**
>
> - **Dividing by $\sin\theta$ or $\cos\theta$:** always transpose to zero and factorise so you do not lose solutions.
> - **Forgetting impossible trig values:** in a quadratic factor like $(\cos\theta + 2)(2\cos\theta - 1) = 0$, note that $\cos\theta = -2$ has **no solution** (since $-1 \leq \cos\theta \leq 1$).
> - **Dropping brackets during substitution:** $2\sin^{2}\theta = 2(1 - \cos^{2}\theta) = 2 - 2\cos^{2}\theta$, not $2 - \cos^{2}\theta$.
> - **Keeping invalid solutions that violate $\cos\theta \neq 0$** when the original equation contains $\tan\theta$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Solve $\sin\theta\cos\theta = \sin\theta$ for $\theta \in [0^\circ;\ 360^\circ]$.
A: $\sin\theta(\cos\theta - 1) = 0 \implies \sin\theta = 0$ ($0^\circ, 180^\circ, 360^\circ$) or $\cos\theta = 1$ ($0^\circ, 360^\circ$). So $\theta \in \{0^\circ,\ 180^\circ,\ 360^\circ\}$.
---
Q: Solve $2\cos^{2}\theta = \cos\theta$ for $\theta \in [0^\circ;\ 360^\circ]$.
A: $\cos\theta(2\cos\theta - 1) = 0 \implies \cos\theta = 0$ ($90^\circ, 270^\circ$) or $\cos\theta = \frac{1}{2}$ ($60^\circ, 300^\circ$). So $\theta \in \{60^\circ,\ 90^\circ,\ 270^\circ,\ 300^\circ\}$.
---
Q: Solve $2\sin^{2}\theta = 3\cos\theta$ for $\theta \in [0^\circ;\ 360^\circ]$.
A: $2(1 - \cos^{2}\theta) = 3\cos\theta \implies 2\cos^{2}\theta + 3\cos\theta - 2 = 0 \implies (2\cos\theta - 1)(\cos\theta + 2) = 0$. Since $\cos\theta = -2$ has no solution, $\cos\theta = \frac{1}{2} \implies \theta = 60^\circ$ or $\theta = 300^\circ$.
---
Q: **(Exam level)** Solve $\tan\theta = 3\sin\theta$ for $\theta \in [0^\circ;\ 360^\circ]$, correct to 1 decimal place.
A: $\frac{\sin\theta}{\cos\theta} = 3\sin\theta$ ($\cos\theta \neq 0$) $\implies \sin\theta(1 - 3\cos\theta) = 0$. $\sin\theta = 0$ gives $0^\circ, 180^\circ, 360^\circ$; $\cos\theta = \frac{1}{3}$ gives $70{,}5^\circ$ and $289{,}5^\circ$. So $\theta \in \{0^\circ,\ 70{,}5^\circ,\ 180^\circ,\ 289{,}5^\circ,\ 360^\circ\}$.
---
Q: Solve $2\sin^{2}\theta + 5\cos\theta - 4 = 0$ for $\theta \in [0^\circ;\ 360^\circ]$.
A: $2(1 - \cos^{2}\theta) + 5\cos\theta - 4 = 0 \implies 2\cos^{2}\theta - 5\cos\theta + 2 = 0 \implies (2\cos\theta - 1)(\cos\theta - 2) = 0$. $\cos\theta = 2$ has no solution, so $\cos\theta = \frac{1}{2} \implies \theta = 60^\circ$ or $\theta = 300^\circ$.
---
Q: Solve $\sin\theta\tan\theta = \sin\theta$ for $\theta \in [0^\circ;\ 360^\circ]$.
A: $\sin\theta(\tan\theta - 1) = 0$ with $\cos\theta \neq 0$. $\sin\theta = 0$ gives $0^\circ, 180^\circ, 360^\circ$; $\tan\theta = 1$ gives $45^\circ, 225^\circ$. So $\theta \in \{0^\circ,\ 45^\circ,\ 180^\circ,\ 225^\circ,\ 360^\circ\}$.
```

## Further help

- Siyavula Mathematics Grade 11, [6.4 Trigonometric equations](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/06-trigonometry-04).
