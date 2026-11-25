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

> **What you'll learn:** how to write the general solution of a trig equation, and use it to list the solutions in any interval, including equations with a compound angle like $2\theta$.
>
> **Prerequisites:** [Basic equations](/library/pure-mathematics/trigonometry-identities-reduction-formulae-and-equations/basic-equations).

## The idea in plain language

Sine and cosine repeat every $360^\circ$, and tangent repeats every $180^\circ$. So once you have one solution, adding whole turns gives more. The **general solution** collects them all in one statement, using $k \in \mathbb{Z}$ (any whole number, positive, negative or zero).

To get the solutions in a particular interval, put in different whole values of $k$ and keep the answers that fall inside it.

## The rules

```rule
title: General solutions
\sin\theta = \sin\alpha \;\Rightarrow\; \theta = \alpha + k\cdot 360^\circ \ \text{ or } \ \theta = 180^\circ - \alpha + k\cdot 360^\circ
\cos\theta = \cos\alpha \;\Rightarrow\; \theta = \pm\alpha + k\cdot 360^\circ
\tan\theta = \tan\alpha \;\Rightarrow\; \theta = \alpha + k\cdot 180^\circ
```

## Worked example 1 (basic)

```steps
title: Find the general solution of $\sin\theta = \frac{1}{2}$ and the solutions in $[-360^\circ;\ 360^\circ]$
Reference angle :: \alpha = 30^\circ
General solution, first family :: \theta = 30^\circ + k\cdot 360^\circ
General solution, second family :: \theta = 150^\circ + k\cdot 360^\circ
Put in $k = 0$ :: 30^\circ \quad\text{and}\quad 150^\circ
Put in $k = -1$ :: -330^\circ \quad\text{and}\quad -210^\circ
$k = 1$ or $k = -2$ falls outside the interval :: \theta \in \{-330^\circ,\ -210^\circ,\ 30^\circ,\ 150^\circ\}
```

## Worked example 2 (cosine and tangent)

```steps
title: Solve $\cos\theta = -\frac{1}{2}$ and $\tan\theta = 1$, giving the general solutions
For cosine, reference angle $60^\circ$ in quadrants II and III :: \cos\theta = \cos 120^\circ
Use $\pm\alpha$ with $\alpha = 120^\circ$ :: \theta = \pm 120^\circ + k\cdot 360^\circ
Tangent: $\tan\theta = \tan 45^\circ$ :: \theta = 45^\circ + k\cdot 180^\circ
```

## Worked example 3 (exam level: compound angle)

```steps
title: Solve $\sin 2\theta = \frac{1}{2}$ for $\theta \in [0^\circ;\ 360^\circ]$
Treat $2\theta$ as the angle: two families :: 2\theta = 30^\circ + k\cdot 360^\circ \quad\text{or}\quad 2\theta = 150^\circ + k\cdot 360^\circ
Divide everything by 2, including the period :: \theta = 15^\circ + k\cdot 180^\circ \quad\text{or}\quad \theta = 75^\circ + k\cdot 180^\circ
$k = 0$ :: \theta = 15^\circ,\ 75^\circ
$k = 1$ :: \theta = 195^\circ,\ 255^\circ
$k = 2$ is too large :: \theta \in \{15^\circ,\ 75^\circ,\ 195^\circ,\ 255^\circ\}
```

> **Common mistakes**
>
> - Writing $k \cdot 360^\circ$ for tangent. Its period is $180^\circ$.
> - Dividing by 2 but forgetting to divide the $360^\circ$ period as well.
> - Forgetting that $k$ can be negative.
> - Listing only the solutions from the first family when the equation has two.
> - Leaving out $k \in \mathbb{Z}$ in a general solution.

## Practice

Try each question first, then open it to see the full working.

```questions
Q: Write the general solution of $\sin\theta = \frac{\sqrt{3}}{2}$.
A: Reference angle $60^\circ$: $\theta = 60^\circ + k\cdot 360^\circ$ or $\theta = 120^\circ + k\cdot 360^\circ$, $k \in \mathbb{Z}$.
---
Q: Write the general solution of $\cos\theta = 0{,}5$ and list the solutions in $[0^\circ;\ 720^\circ]$.
A: $\theta = \pm 60^\circ + k\cdot 360^\circ$. With $k = 0$: $60^\circ$. With $k = 1$: $300^\circ$ and $420^\circ$. With $k = 2$: $660^\circ$. So $\theta \in \{60^\circ,\ 300^\circ,\ 420^\circ,\ 660^\circ\}$.
---
Q: Write the general solution of $\tan\theta = -1$ and list the solutions in $[-180^\circ;\ 180^\circ]$.
A: $\tan\theta = \tan 135^\circ$, so $\theta = 135^\circ + k\cdot 180^\circ$. With $k = 0$: $135^\circ$. With $k = -1$: $-45^\circ$. So $\theta \in \{-45^\circ,\ 135^\circ\}$.
---
Q: Solve $\cos 2\theta = \frac{\sqrt{3}}{2}$ for $\theta \in [0^\circ;\ 180^\circ]$.
A: $2\theta = \pm 30^\circ + k\cdot 360^\circ$, so $\theta = \pm 15^\circ + k\cdot 180^\circ$. With $k = 0$: $15^\circ$. With $k = 1$: $165^\circ$ (and $195^\circ$, outside). So $\theta \in \{15^\circ,\ 165^\circ\}$.
---
Q: Solve $\tan(\theta - 20^\circ) = 1$ and list the solutions in $[0^\circ;\ 360^\circ]$.
A: $\theta - 20^\circ = 45^\circ + k\cdot 180^\circ$, so $\theta = 65^\circ + k\cdot 180^\circ$. With $k = 0$: $65^\circ$. With $k = 1$: $245^\circ$. So $\theta \in \{65^\circ,\ 245^\circ\}$.
---
Q: Solve $\sin(\theta + 30^\circ) = \frac{1}{2}$ for $\theta \in [0^\circ;\ 360^\circ]$.
A: $\theta + 30^\circ = 30^\circ + k\cdot 360^\circ$ gives $\theta = k\cdot 360^\circ$, so $\theta = 0^\circ$ or $360^\circ$. $\theta + 30^\circ = 150^\circ + k\cdot 360^\circ$ gives $\theta = 120^\circ$. So $\theta \in \{0^\circ,\ 120^\circ,\ 360^\circ\}$.
```

## Further help

- Siyavula Mathematics Grade 11, [6.4 Trigonometric equations](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/06-trigonometry-04).
