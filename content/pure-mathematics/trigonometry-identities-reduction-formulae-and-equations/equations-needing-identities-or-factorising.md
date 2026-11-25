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

> **What you'll learn:** how to solve trig equations by factorising, by replacing $\tan\theta$ with $\frac{\sin\theta}{\cos\theta}$, and by using $\sin^2\theta + \cos^2\theta = 1$ to turn a mixed equation into a quadratic.
>
> **Prerequisites:** [General solution](/library/pure-mathematics/trigonometry-identities-reduction-formulae-and-equations/general-solution), and [Factorise and solve](/library/pure-mathematics/equations-and-inequalities/factorise-and-solve).

## The idea in plain language

Many exam equations do not give you a single ratio. The routine is: get the equation into a form where you can **factorise**, so you get a product equal to zero. Then each factor gives a basic equation.

Three situations:

1. **Common factor:** take it out. Never divide by a ratio that could be zero, because you lose solutions.
2. **Tangent with sine or cosine:** replace $\tan\theta$ by $\frac{\sin\theta}{\cos\theta}$.
3. **Squares of two different ratios:** replace one using $\sin^2\theta = 1 - \cos^2\theta$ (or the other way) to get a quadratic in one ratio.

## The tools

```rule
title: Tools
\tan\theta = \frac{\sin\theta}{\cos\theta} \qquad \sin^{2}\theta + \cos^{2}\theta = 1 \qquad AB = 0 \Rightarrow A = 0 \text{ or } B = 0
```

## Worked example 1 (common factor)

```steps
title: Solve $2\sin^{2}\theta - \sin\theta = 0$ for $\theta \in [0^\circ;\ 360^\circ]$
Take out the common factor :: \sin\theta\,(2\sin\theta - 1) = 0
Two cases :: \sin\theta = 0 \quad\text{or}\quad \sin\theta = \frac{1}{2}
First case :: \theta = 0^\circ,\ 180^\circ,\ 360^\circ
Second case: reference angle $30^\circ$, quadrants I and II :: \theta = 30^\circ,\ 150^\circ
All solutions :: \theta \in \{0^\circ,\ 30^\circ,\ 150^\circ,\ 180^\circ,\ 360^\circ\}
```

## Worked example 2 (using an identity)

```steps
title: Solve $2\sin^{2}\theta + \cos\theta - 1 = 0$ for $\theta \in [0^\circ;\ 360^\circ]$
Replace $\sin^2\theta$ with $1 - \cos^2\theta$ :: 2(1 - \cos^{2}\theta) + \cos\theta - 1 = 0
Expand and simplify :: -2\cos^{2}\theta + \cos\theta + 1 = 0
Multiply by $-1$ :: 2\cos^{2}\theta - \cos\theta - 1 = 0
Factorise :: (2\cos\theta + 1)(\cos\theta - 1) = 0
Two cases :: \cos\theta = -\frac{1}{2} \quad\text{or}\quad \cos\theta = 1
First case: quadrants II and III, reference angle $60^\circ$ :: \theta = 120^\circ,\ 240^\circ
Second case :: \theta = 0^\circ,\ 360^\circ
All solutions :: \theta \in \{0^\circ,\ 120^\circ,\ 240^\circ,\ 360^\circ\}
```

## Worked example 3 (exam level: tangent)

```steps
title: Solve $\tan\theta = 2\sin\theta$ for $\theta \in [0^\circ;\ 360^\circ]$
Replace $\tan\theta$ :: \frac{\sin\theta}{\cos\theta} = 2\sin\theta
Restriction: the denominator cannot be zero :: \cos\theta \neq 0
Multiply by $\cos\theta$ :: \sin\theta = 2\sin\theta\cos\theta
Move everything to one side (do not divide by $\sin\theta$) :: \sin\theta - 2\sin\theta\cos\theta = 0
Factorise :: \sin\theta\,(1 - 2\cos\theta) = 0
Two cases :: \sin\theta = 0 \quad\text{or}\quad \cos\theta = \frac{1}{2}
First case :: \theta = 0^\circ,\ 180^\circ,\ 360^\circ
Second case: quadrants I and IV :: \theta = 60^\circ,\ 300^\circ
None of these has $\cos\theta = 0$ :: \theta \in \{0^\circ,\ 60^\circ,\ 180^\circ,\ 300^\circ,\ 360^\circ\}
```

> **Common mistakes**
>
> - Dividing both sides by $\sin\theta$ and losing the solutions where $\sin\theta = 0$.
> - Not moving everything to one side before factorising.
> - Replacing $\sin^2\theta$ and forgetting the bracket: $2\sin^2\theta = 2(1 - \cos^2\theta)$.
> - Missing the solutions at the ends of the interval.
> - Accepting a solution that makes a denominator zero.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Solve $\sin\theta\cos\theta = \sin\theta$ for $\theta \in [0^\circ;\ 360^\circ]$.
A: $\sin\theta\cos\theta - \sin\theta = 0$, so $\sin\theta(\cos\theta - 1) = 0$. Then $\sin\theta = 0$ gives $0^\circ, 180^\circ, 360^\circ$ and $\cos\theta = 1$ gives $0^\circ$ and $360^\circ$. So $\theta \in \{0^\circ,\ 180^\circ,\ 360^\circ\}$.
---
Q: Solve $2\cos^{2}\theta = \cos\theta$ for $\theta \in [0^\circ;\ 360^\circ]$.
A: $\cos\theta(2\cos\theta - 1) = 0$. Then $\cos\theta = 0$ gives $90^\circ$ and $270^\circ$, and $\cos\theta = \frac{1}{2}$ gives $60^\circ$ and $300^\circ$. So $\theta \in \{60^\circ,\ 90^\circ,\ 270^\circ,\ 300^\circ\}$.
---
Q: Solve $2\sin^{2}\theta = 3\cos\theta$ for $\theta \in [0^\circ;\ 360^\circ]$.
A: $2(1 - \cos^2\theta) = 3\cos\theta$, so $2\cos^2\theta + 3\cos\theta - 2 = 0$. Factorise: $(2\cos\theta - 1)(\cos\theta + 2) = 0$. $\cos\theta = -2$ is impossible. $\cos\theta = \frac{1}{2}$ gives $\theta = 60^\circ$ or $300^\circ$.
---
Q: Solve $\tan\theta = 3\sin\theta$ for $\theta \in [0^\circ;\ 360^\circ]$, correct to 1 decimal place.
A: $\frac{\sin\theta}{\cos\theta} = 3\sin\theta$, so $\sin\theta(1 - 3\cos\theta) = 0$. $\sin\theta = 0$ gives $0^\circ, 180^\circ, 360^\circ$. $\cos\theta = \frac{1}{3}$ gives reference angle $70{,}5^\circ$ in quadrants I and IV: $70{,}5^\circ$ and $289{,}5^\circ$.
---
Q: Solve $2\sin^{2}\theta + 5\cos\theta - 4 = 0$ for $\theta \in [0^\circ;\ 360^\circ]$.
A: $2(1 - \cos^2\theta) + 5\cos\theta - 4 = 0$, so $-2\cos^2\theta + 5\cos\theta - 2 = 0$ and $2\cos^2\theta - 5\cos\theta + 2 = 0$. Factorise: $(2\cos\theta - 1)(\cos\theta - 2) = 0$. $\cos\theta = 2$ is impossible, so $\cos\theta = \frac{1}{2}$: $\theta = 60^\circ$ or $300^\circ$.
---
Q: Solve $\sin\theta\,\tan\theta = \sin\theta$ for $\theta \in [0^\circ;\ 360^\circ]$.
A: $\sin\theta\tan\theta - \sin\theta = 0$, so $\sin\theta(\tan\theta - 1) = 0$ with $\cos\theta \neq 0$. $\sin\theta = 0$ gives $0^\circ, 180^\circ, 360^\circ$. $\tan\theta = 1$ gives $45^\circ$ and $225^\circ$. So $\theta \in \{0^\circ,\ 45^\circ,\ 180^\circ,\ 225^\circ,\ 360^\circ\}$.
```

## Further help

- Siyavula Mathematics Grade 11, [6.4 Trigonometric equations](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/06-trigonometry-04).
