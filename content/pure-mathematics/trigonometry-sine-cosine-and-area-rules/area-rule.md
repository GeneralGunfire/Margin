---
title: Area rule
youtube_query: Grade 11 trigonometry area rule
subject: pure-mathematics
topic: Trigonometry: sine, cosine and area rules
part: Geometry
term: 3
subtopic: The area rule
order: 731
---

> **What you'll learn:** how to calculate the area of any triangle without knowing its perpendicular height, the examinable CAPS formal proof, and how to find the area of quadrilaterals or polygons by splitting them into triangles.
>
> **Prerequisites:** $\text{Area} = \frac{1}{2}\text{base} \times \text{height}$ and right-angled $\sin A = \frac{\text{opp}}{\text{hyp}}$.

## 1. Replacing the hidden height $h$

You already know $\text{Area} = \frac{1}{2}\text{base} \times \text{height}$. The trouble in general triangles is that the perpendicular height $h$ is rarely given directly.

Instead of measuring $h$ with a ruler, stand at corner $A$: the tilted side $b$ and angle $\hat{A}$ lock the height to **$h = b\sin A$**. Substituting $h = b\sin A$ and $\text{base} = c$ turns the primary-school formula into the **area rule**:

```diagram
name: trig-rules-triangle
```

```rule
title: The area rule (SAS — two sides and the INCLUDED angle)
\text{Area}(\triangle ABC) = \frac{1}{2}bc\sin A = \frac{1}{2}ac\sin B = \frac{1}{2}ab\sin C
```

## 2. Examinable CAPS formal proof

```steps
title: Formal proof (Exam proof): Prove that Area(triangle ABC) = 1/2 bc sin A
Draw perpendicular altitude $CD \perp AB$ (or $AB$ produced) of length $h$ :: \text{Construct } CD \perp AB \text{ with } CD = h
Write the standard triangle area formula with base $c = AB$ :: \text{Area}(\triangle ABC) = \frac{1}{2} c \cdot h
Express $h$ in right-angled $\triangle ACD$ (acute $\hat{A}$: $\sin A = \frac{h}{b}$; obtuse $\hat{A}$: $\sin(180^\circ - A) = \sin A = \frac{h}{b}$) :: h = b\sin A
Substitute $h = b\sin A$ into the area formula :: \text{Area}(\triangle ABC) = \frac{1}{2}bc\sin A
```

## 3. What if the question gives you the AREA and asks for an angle?

Because $\sin(180^\circ - \theta) = \sin\theta$, solving backwards for an unknown angle $\hat{A}$ from $\text{Area} = \frac{1}{2}bc\sin A$ can also yield an **acute or obtuse** answer unless the question specifies which one!

```tryit
title: Quick check
prompt: In $\triangle PQR$, $p = 10\text{ cm}$, $q = 14\text{ cm}$, and $\hat{R} = 135^\circ$. Calculate $\text{Area}(\triangle PQR)$ in simplest surd form.
hint: Notice $p$ and $q$ meet at vertex $R$, so $\hat{R}$ is the included angle between sides $p$ and $q$!
answer: $\text{Area} = \frac{1}{2}(10)(14)\sin 135^\circ = 70 \cdot \frac{\sqrt{2}}{2} = 35\sqrt{2}\text{ cm}^2$.
```

## 4. Worked examples

```steps
title: Example 1 (Working backwards for an angle): $\triangle ABC$ has area $24\text{ cm}^2$, $a = 8\text{ cm}$, and $c = 12\text{ cm}$, with $\hat{B}$ obtuse. Find $\hat{B}$.
Set up the area rule with sides $a, c$ and included angle $\hat{B}$ :: 24 = \frac{1}{2}(8)(12)\sin B
Simplify and isolate $\sin B$ :: 24 = 48\sin B \;\Longrightarrow\; \sin B = \frac{1}{2}
Find acute reference angle and select the obtuse quadrant :: \text{ref } = 30^\circ \;\Longrightarrow\; \hat{B} = 180^\circ - 30^\circ = 150^\circ
```

```steps
title: Example 2 (Splitting a quadrilateral): In quadrilateral $ABCD$, $AB = 9\text{ m}$, $BC = 11\text{ m}$, $CD = 8\text{ m}$, $AD = 7\text{ m}$, $\hat{B} = 72^\circ$, and $\hat{D} = 105^\circ$. Calculate the total area of $ABCD$ to one decimal place.
Draw diagonal $AC$ to split $ABCD$ into $\triangle ABC$ and $\triangle ADC$ :: \text{Area}(ABCD) = \text{Area}(\triangle ABC) + \text{Area}(\triangle ADC)
Calculate $\text{Area}(\triangle ABC)$ :: \frac{1}{2}(9)(11)\sin 72^\circ \approx 47{,}08\text{ m}^2
Calculate $\text{Area}(\triangle ADC)$ :: \frac{1}{2}(7)(8)\sin 105^\circ \approx 27{,}05\text{ m}^2
Add both areas :: \text{Total area} \approx 47{,}08 + 27{,}05 = 74{,}1\text{ m}^2
```

> **Common mistakes**
>
> - **Using a non-included angle:** in $\frac{1}{2}bc\sin A$, $\hat{A}$ *must* be the angle pinched directly between sides $b$ and $c$. If you are given a different angle, use the sine or cosine rule first to find the included angle.
> - **Dropping the $\frac{1}{2}$** when computing the area of a triangle (keep $\frac{1}{2}$ for triangles; only parallelograms have area $ab\sin\theta$ because two identical triangles double up).

## 5. Practice

Try each question on paper before opening the worked answer.

```questions
Q: In $\triangle KLM$, $k = 16\text{ cm}$, $m = 9\text{ cm}$, and $\hat{L} = 52^\circ$. Calculate the area of $\triangle KLM$ to two decimal places.
A: $\text{Area} = \frac{1}{2}(16)(9)\sin 52^\circ \approx 56{,}74\text{ cm}^2$.
---
Q: A parallelogram $PQRS$ has adjacent sides $PQ = 12\text{ cm}$ and $PS = 8\text{ cm}$, with $\hat{P} = 115^\circ$. Calculate its area to two decimal places.
A: Splitting along diagonal $QS$ gives two congruent triangles, so $\text{Area}(PQRS) = 2\cdot\frac{1}{2}(12)(8)\sin 115^\circ = 96\sin 115^\circ \approx 87{,}01\text{ cm}^2$.
---
Q: An equilateral triangle has side length $x$. Using the area rule, prove that its area is $\dfrac{\sqrt{3}}{4}x^2$.
A: Every angle is $60^\circ$, so $\text{Area} = \frac{1}{2}(x)(x)\sin 60^\circ = \frac{1}{2}x^2\left(\frac{\sqrt{3}}{2}\right) = \dfrac{\sqrt{3}}{4}x^2$.
---
Q: **(Exam level)** In $\triangle ABC$, $\hat{A} = 40^\circ$, $\hat{B} = 65^\circ$, and side $c = 15\text{ m}$. Calculate the area of $\triangle ABC$ to one decimal place.
A: First find $\hat{C} = 180^\circ - 40^\circ - 65^\circ = 75^\circ$. Use the sine rule to find a second side: $b = \dfrac{15\sin 65^\circ}{\sin 75^\circ} \approx 14{,}074\text{ m}$. Now apply the area rule with sides $b, c$ and included angle $\hat{A} = 40^\circ$: $\text{Area} = \frac{1}{2}(14{,}074)(15)\sin 40^\circ \approx 67{,}9\text{ m}^2$.
```

## Further help

- Siyavula Mathematics Grade 11, [7.1 Area rule](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/07-trigonometry-01).
