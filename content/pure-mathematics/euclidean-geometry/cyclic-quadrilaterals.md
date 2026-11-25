---
title: Cyclic quadrilaterals
youtube_query: Grade 11 cyclic quadrilateral theorems
subject: pure-mathematics
topic: Euclidean geometry
part: Geometry
term: 2
subtopic: Cyclic quadrilaterals
order: 421
---

> **What you'll learn:** what makes a quadrilateral *cyclic*, why its opposite angles must sum to $180^\circ$, why its exterior angle equals the interior opposite angle, the examinable CAPS formal proof, and the three converse tests to prove four points lie on a circle.
>
> **Prerequisites:** [Angles at the centre and circumference](/library/pure-mathematics/euclidean-geometry/angles-at-the-centre-and-circumference) and angles on a straight line.

## 1. What is a cyclic quadrilateral?

A **cyclic quadrilateral** is any four-sided figure whose **all four vertices lie on the circumference of the same circle**. Watch out for the classic exam trap: if one corner sits at the *centre* $O$, the quadrilateral is **not** cyclic!

Why must opposite angles sum to $180^\circ$? Draw radii from the centre $O$ to two opposite corners $Q$ and $S$: the two angles at the centre around $O$ add up to $360^\circ$. Since the opposite angles on the circumference are halves of those two central angles, they add up to $\frac{1}{2}(360^\circ) = 180^\circ$.

Toggle between the opposite-angle theorem and the exterior-angle theorem below:

```diagram
name: cyclic-quad-explorer
```

```rule
title: Cyclic quadrilateral theorems (CAPS reasons)
\text{1. Opposite angles: } \hat{P} + \hat{R} = 180^\circ \;\text{ and }\; \hat{Q} + \hat{S} = 180^\circ \qquad (\mathbf{opp\ \angle s\ of\ cyclic\ quad})
\text{2. Exterior angle: } \text{If } SR \text{ extends to } T,\; Q\hat{R}T = \hat{P} \qquad (\mathbf{ext\ \angle\ of\ cyclic\ quad})
```

## 2. Examinable CAPS formal proof

```steps
title: Formal proof (Exam proof): Prove that opposite angles of cyclic quadrilateral PQRS sum to 180°
Join radii $OQ$ and $OS$ to circle centre $O$ :: \text{Draw radii } OQ \text{ and } OS
Relate $\hat{P}$ to the reflex/obtuse central angle on arc $QS$ :: Q\hat{O}S_{1} = 2\hat{P} \quad (\angle\text{ at centre } = 2\times \angle\text{ at circum})
Relate $\hat{R}$ to the other side of $O$ :: Q\hat{O}S_{2} = 2\hat{R} \quad (\angle\text{ at centre } = 2\times \angle\text{ at circum})
Sum angles around centre $O$ :: 2\hat{P} + 2\hat{R} = Q\hat{O}S_{1} + Q\hat{O}S_{2} = 360^\circ \quad (\angle\text{s round a pt})
Divide through by $2$ :: \hat{P} + \hat{R} = 180^\circ
```

## 3. Three ways to prove a quadrilateral IS cyclic (converses)

When an exam question says *"Prove that $ABCD$ is a cyclic quadrilateral"*, you cannot assume the circle is already there—you must prove one of the three converse conditions below:

| Test | What you show on the diagram | Official CAPS reason |
| :--- | :--- | :--- |
| Opposite angles | $\hat{A} + \hat{C} = 180^\circ$ (or $\hat{B} + \hat{D} = 180^\circ$) | $\text{opp }\angle\text{s of quad supp}$ |
| Exterior angle | Exterior angle at $C$ equals interior opposite $\hat{A}$ | $\text{ext }\angle = \text{int opp }\angle$ |
| Bowtie / same segment | Line segment $AB$ subtends equal angles at $C$ and $D$ on the same side ($A\hat{C}B = A\hat{D}B$) | $\text{line subtends }=\angle\text{s}$ |

```tryit
title: Quick check
prompt: $ABCD$ is a cyclic quadrilateral. $DA$ is produced to $E$ such that $E\hat{A}B = 112^\circ$. Meanwhile, $B\hat{C}D = 2x + 16^\circ$. Find $x$ and state $\hat{A}$ inside the quad.
hint: $E\hat{A}B$ is an exterior angle at $A$, so it equals the interior opposite angle $B\hat{C}D$.
answer: $B\hat{C}D = E\hat{A}B = 112^\circ$ ($\text{ext }\angle\text{ of cyclic quad}$), so $2x + 16^\circ = 112^\circ \implies 2x = 96^\circ \implies x = 48^\circ$. Inside the quad, $D\hat{A}B = 180^\circ - 112^\circ = 68^\circ$ ($\angle\text{s on str line}$).
```

## 4. Worked examples

```steps
title: Example 1 (Parallel lines + cyclic quad): $PQRS$ is a cyclic quadrilateral with $PQ \parallel SR$. If $\hat{P} = 108^\circ$, calculate $\hat{Q}$, $\hat{R}$, and $\hat{S}$.
Find $\hat{R}$ using cyclic opposite angles :: \hat{R} = 180^\circ - 108^\circ = 72^\circ \quad (\text{opp }\angle\text{s of cyclic quad})
Use co-interior angles because $PQ \parallel SR$ :: \hat{S} = 180^\circ - 108^\circ = 72^\circ \quad (\text{co-int }\angle\text{s};\ PQ\parallel SR)
Find $\hat{Q}$ using cyclic opposite angles :: \hat{Q} = 180^\circ - 72^\circ = 108^\circ \quad (\text{opp }\angle\text{s of cyclic quad})
```

```steps
title: Example 2 (Two linked cyclic quads): Two circles intersect at $B$ and $E$. Straight lines $ABC$ and $DEF$ meet the circles at $A, C, D, F$ so that $ABED$ and $BCFE$ are cyclic quads. If $D\hat{A}B = 78^\circ$, find $B\hat{C}F$.
Find opposite angle $B\hat{E}D$ in cyclic quad $ABED$ :: B\hat{E}D = 180^\circ - 78^\circ = 102^\circ \quad (\text{opp }\angle\text{s of cyclic quad})
Use straight line $DEF$ to cross into the second circle :: B\hat{E}F = 180^\circ - 102^\circ = 78^\circ \quad (\angle\text{s on str line})
Find opposite angle $B\hat{C}F$ in cyclic quad $BCFE$ :: B\hat{C}F = 180^\circ - 78^\circ = 102^\circ \quad (\text{opp }\angle\text{s of cyclic quad})
```

```steps
title: Example 3 (Exam level — proving a quad is cyclic): In $\triangle PQR$, $S$ lies on $PQ$ and $T$ lies on $PR$. If $P\hat{T}S = P\hat{Q}R$, prove that $STRQ$ is a cyclic quadrilateral.
Recognise straight line $P$-$T$-$R$ makes $P\hat{T}S$ an exterior angle of $STRQ$ :: P\hat{T}S \text{ is the exterior angle at } T \text{ of quad } STRQ
Match it with the interior opposite angle in $STRQ$ :: P\hat{T}S = P\hat{Q}R \quad (\text{given, and } P\hat{Q}R = S\hat{Q}R \text{ is int opp to } S\hat{T}R)
Conclude using the exterior-angle converse :: \therefore STRQ \text{ is cyclic} \quad (\text{ext }\angle = \text{int opp }\angle)
```

> **Common mistakes**
>
> - **Calling an angle at the centre part of a cyclic quad:** if $O$ is the centre of the circle, $OAOB$ is *never* a cyclic quad because $O$ is not on the circumference.
> - **Using `opp ∠s of cyclic quad` before proving the quad is cyclic:** you may only use `opp ∠s of cyclic quad` when you are *told* all four vertices lie on a circle; to *prove* it is cyclic, you must quote the converse (`opp ∠s of quad supp`, `ext ∠ = int opp ∠`, or `line subtends = ∠s`).
> - **Picking the wrong angle as the exterior angle:** an exterior angle is formed by extending **one** side straight past a vertex, not by drawing a random chord through that vertex.

## 5. Practice

Try each question on paper before opening the worked answer.

```questions
Q: $KLMN$ is a cyclic quadrilateral. $MN$ is produced to $P$ such that $K\hat{N}P = 84^\circ$. Calculate $\hat{L}$ and $K\hat{N}M$.
A: $\hat{L} = K\hat{N}P = 84^\circ$ ($\text{ext }\angle\text{ of cyclic quad}$). $K\hat{N}M = 180^\circ - 84^\circ = 96^\circ$ ($\angle\text{s on str line}$).
---
Q: $ABCD$ is a cyclic quadrilateral with $O$ the centre of the circle. If $A\hat{O}C = 136^\circ$ (facing minor arc $AC$), calculate $\hat{B}$ (on the major arc) and $\hat{D}$ (on the minor arc).
A: $\hat{B} = \frac{1}{2}(136^\circ) = 68^\circ$ ($\angle\text{ at centre } = 2\times \angle\text{ at circum}$). Then $\hat{D} = 180^\circ - 68^\circ = 112^\circ$ ($\text{opp }\angle\text{s of cyclic quad}$).
---
Q: In cyclic quadrilateral $PQRS$, $PQ = QR$ and $P\hat{R}Q = 35^\circ$. Calculate $P\hat{S}R$.
A: In $\triangle PQR$, $Q\hat{P}R = P\hat{R}Q = 35^\circ$ ($\angle\text{s opp }=\text{ sides}$), so $\hat{Q} = 180^\circ - 70^\circ = 110^\circ$ ($\angle\text{s of }\triangle$). Therefore $P\hat{S}R = 180^\circ - 110^\circ = 70^\circ$ ($\text{opp }\angle\text{s of cyclic quad}$).
---
Q: **(Exam level)** In quadrilateral $ABCD$, diagonals $AC$ and $BD$ intersect at $E$. Given $A\hat{B}E = 58^\circ$, $A\hat{E}B = 90^\circ$, and $B\hat{D}C = 32^\circ$, prove that $ABCD$ is a cyclic quadrilateral.
A: In $\triangle ABE$, $B\hat{A}E = 180^\circ - 90^\circ - 58^\circ = 32^\circ$ ($\angle\text{s of }\triangle$). Since $B\hat{A}C = B\hat{A}E = 32^\circ$ and $B\hat{D}C = 32^\circ$ (given), segment $BC$ subtends equal angles at $A$ and $D$ on the same side. Thus $ABCD$ is a cyclic quadrilateral ($\text{line subtends }=\angle\text{s}$).
```

## Further help

- Siyavula Mathematics Grade 11, [8.2 Cyclic quadrilaterals](https://www.siyavula.com/read/za/mathematics/grade-11/euclidean-geometry/08-euclidean-geometry-02).
