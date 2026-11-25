---
title: Angle between lines and in a triangle
youtube_query: Grade 11 analytical geometry angle between two lines
subject: pure-mathematics
topic: Analytical geometry
part: Geometry
term: 2
subtopic: Inclination and angle between lines
order: 522
---

> **What you'll learn:** how to find the angle between *any* two intersecting lines—and any interior angle of a triangle on the coordinate plane—using inclinations and triangle geometry.
>
> **Prerequisites:** [Inclination](/library/pure-mathematics/analytical-geometry/inclination).

## 1. Subtracting two inclinations via the exterior-angle theorem

Suppose two lines cross the $x$-axis at inclinations $\alpha$ and $\beta$ (with $\alpha > \beta$) and meet above the $x$-axis at angle $\varphi$. Notice the triangle formed between both lines and the $x$-axis: $\alpha$ is the **exterior angle** of that triangle, and $\beta$ and $\varphi$ are the two interior opposite angles!

Therefore:

$$\alpha = \beta + \varphi \;\Longrightarrow\; \varphi = \alpha - \beta$$

Select **Angle between lines** below to see this triangle geometry directly:

```diagram
name: inclination-explorer
```

```rule
title: Angle between two lines
\text{1. Find both inclinations } \alpha \text{ and } \beta \text{ in } [0^\circ;\ 180^\circ) \text{ from } \tan\alpha = m_{1},\ \tan\beta = m_{2}
\text{2. Subtract: } \varphi = |\alpha - \beta|
\text{3. Acute angle asked? If } \varphi > 90^\circ,\ \text{use } 180^\circ - \varphi
```

## 2. Sketch quickly before picking $\varphi$ or $180^\circ - \varphi$ for a triangle angle

```compare
title: Finding an interior angle of △ABC cleanly
left_title: When both rays tilt the same direction from A
left:
Look at $\hat{A}$ between $AB$ and $AC$: find $\theta_{AB}$ and $\theta_{AC}$ from the $+x$-axis. If both go upward-right or one goes steeper upward-left, **subtracting** $\theta_{AC} - \theta_{AB}$ gives $\hat{A}$ directly!
right_title: Watch out when the vertex sits at the TOP
right:
Sometimes $\theta_{AB} = 40^\circ$ and $\theta_{AC} = 130^\circ$ meet at an interior corner where the supplementary side $180^\circ - |\alpha - \beta|$ sits inside the triangle. **Always check a quick 5-second sketch!**
```

```tryit
title: Quick check
prompt: Line $L_{1}$ has gradient $2$ and line $L_{2}$ has gradient $\frac{1}{3}$. Calculate the acute angle between $L_{1}$ and $L_{2}$ to $1$ decimal place.
hint: Find $\alpha = \tan^{-1}(2)$ and $\beta = \tan^{-1}\left(\frac{1}{3}\right)$, then subtract.
answer: $\alpha = 63{,}43^\circ$ and $\beta = 18{,}43^\circ$. Angle $= 63{,}43^\circ - 18{,}43^\circ = 45{,}0^\circ$!
```

## 3. Worked examples

```steps
title: Example 1 (One positive slope, one negative slope): Find the acute angle between $y = 2x + 1$ and $y = -x + 5$
Find inclination of $y = 2x + 1$ :: \tan\alpha = 2 \;\Longrightarrow\; \alpha = 63{,}4^\circ
Find inclination of $y = -x + 5$ ($m < 0$) :: \tan\beta = -1 \;\Longrightarrow\; \beta = 180^\circ - 45^\circ = 135^\circ
Subtract the two inclinations :: |\beta - \alpha| = 135^\circ - 63{,}4^\circ = 71{,}6^\circ
Check: $71{,}6^\circ < 90^\circ$ :: \text{Acute angle is } 71{,}6^\circ
```

```steps
title: Example 2 (Obtuse difference converted to acute): Find the acute angle between lines with gradients $m_{1} = 3$ and $m_{2} = -\frac{1}{4}$
Find both inclinations :: \alpha = \tan^{-1}(3) = 71{,}57^\circ,\qquad \beta = 180^\circ - \tan^{-1}(0{,}25) = 165{,}96^\circ
Subtract :: \beta - \alpha = 165{,}96^\circ - 71{,}57^\circ = 94{,}39^\circ
Convert obtuse $94{,}4^\circ$ to the supplementary acute angle :: 180^\circ - 94{,}39^\circ = 85{,}6^\circ
```

```steps
title: Example 3 (Exam level — interior angle of a triangle): Given $A(0;\ 0)$, $B(5;\ 1)$, and $C(2;\ 4)$, calculate $B\hat{A}C$ to $1$ decimal place
Find gradient and inclination of ray $AB$ :: m_{AB} = \frac{1}{5} = 0{,}2 \;\Longrightarrow\; \theta_{AB} = \tan^{-1}(0{,}2) = 11{,}31^\circ
Find gradient and inclination of ray $AC$ :: m_{AC} = \frac{4}{2} = 2 \;\Longrightarrow\; \theta_{AC} = \tan^{-1}(2) = 63{,}43^\circ
Both rays start from $A(0;\ 0)$ in Q I, so subtract directly :: B\hat{A}C = 63{,}43^\circ - 11{,}31^\circ = 52{,}1^\circ
```

> **Common mistakes**
>
> - **Computing $\tan^{-1}(m_{1} - m_{2})$:** angles do NOT come from subtracting gradients first (`tan` is non-linear)—you **must** convert each gradient to an angle first, then subtract the angles!
> - **Rounding intermediate angles to whole degrees:** keep at least $2$ decimal places during calculations and round only the final answer to $1$ decimal place.
> - **Reporting an obtuse angle ($> 90^\circ$) when the question asks for the acute angle.**

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Find the acute angle between $y = x + 3$ and $y = \sqrt{3}x - 1$.
A: $\alpha = \tan^{-1}(\sqrt{3}) = 60^\circ$, $\beta = \tan^{-1}(1) = 45^\circ$. Angle $= 60^\circ - 45^\circ = 15^\circ$.
---
Q: Calculate the acute angle between $2x + y = 7$ and $x - 3y = 6$, rounded to $1$ decimal place.
A: $m_{1} = -2 \implies \alpha = 180^\circ - 63{,}43^\circ = 116{,}57^\circ$; $m_{2} = \frac{1}{3} \implies \beta = 18{,}43^\circ$. Difference $= 116{,}57^\circ - 18{,}43^\circ = 98{,}14^\circ > 90^\circ$. Acute angle $= 180^\circ - 98{,}14^\circ = 81{,}9^\circ$.
---
Q: In $\triangle PQR$, $P(1;\ 1)$, $Q(5;\ 2)$, and $R(3;\ 5)$. Find $Q\hat{P}R$ to $1$ decimal place.
A: $m_{PQ} = \frac{1}{4} \implies \theta_{PQ} = 14{,}04^\circ$; $m_{PR} = \frac{4}{2} = 2 \implies \theta_{PR} = 63{,}43^\circ$. $Q\hat{P}R = 63{,}43^\circ - 14{,}04^\circ = 49{,}4^\circ$.
---
Q: **(Exam level)** Line $L_{1}$ has gradient $1$ and passes through $O(0;\ 0)$. Line $L_{2}$ makes an angle of $30^\circ$ above $L_{1}$. Find the exact gradient of $L_{2}$.
A: $\theta_{1} = 45^\circ \implies \theta_{2} = 45^\circ + 30^\circ = 75^\circ$, so $m_{2} = \tan 75^\circ \approx 3{,}73$ (or $2 + \sqrt{3}$).
```

## Further help

- Siyavula Mathematics Grade 11, [4.3 Inclination of a line](https://www.siyavula.com/read/za/mathematics/grade-11/analytical-geometry/04-analytical-geometry-03).
