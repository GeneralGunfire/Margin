---
title: Angles at the centre and circumference
youtube_query: Grade 11 circle geometry angle at the centre theorem
subject: pure-mathematics
topic: Euclidean geometry
part: Geometry
term: 2
subtopic: Chords and angles in a circle
order: 412
---

> **What you'll learn:** *why* an angle at the centre of a circle is always double any angle subtended on the circumference by the same arc, its two fast corollaries (semicircle $90^\circ$ and equal angles in the same segment), and the examinable CAPS formal proof.
>
> **Prerequisites:** [Chords and the centre](/library/pure-mathematics/euclidean-geometry/chords-and-the-centre), isosceles triangles, and exterior angles of triangles.

## 1. One arc controls three theorems

Take an arc $AB$ on a circle with centre $O$. Draw two lines to $O$ to form the **central angle** $A\hat{O}B$, and draw two lines to a point $C$ on the remaining circumference to form the **inscribed angle** $A\hat{C}B$.

No matter where $C$ slides along the major arc, $A\hat{O}B$ is **always exactly $2 \times A\hat{C}B$**. Why? Draw diameter $COD$: both $\triangle OCA$ and $\triangle OCB$ have two radii as legs (isosceles!). By the exterior-angle theorem, each half of $A\hat{O}B$ doubles each half of $A\hat{C}B$.

Click through all three theorems below to watch how they connect:

```diagram
name: circle-angle-centre
```

```rule
title: Centre, semicircle, and same-segment theorems (CAPS reasons)
\text{1. Centre angle: } A\hat{O}B = 2\cdot A\hat{C}B \qquad (\mathbf{\angle\ at\ centre = 2 \times \angle\ at\ circum})
\text{2. Semicircle: } AB \text{ is a diameter} \;\Longrightarrow\; A\hat{C}B = 90^\circ \qquad (\mathbf{\angle\ in\ semi\text{-}circle})
\text{3. Same segment: } A\hat{C}B = A\hat{D}B \qquad (\mathbf{\angle\text{s}\ in\ same\ seg})
```

## 2. Examinable CAPS formal proof

```steps
title: Formal proof (Exam proof): Prove that $A\hat{O}B = 2\,A\hat{C}B$ for circle centre $O$
Construct diameter $CO$ extended to $D$ :: \text{Draw } CO \text{ and produce to } D
$\triangle OAC$ is isosceles ($OA = OC$, radii) :: \hat{A} = \hat{C}_{1} \quad (\angle\text{s opp }=\text{ radii})
Exterior angle of $\triangle OAC$ :: A\hat{O}D = \hat{A} + \hat{C}_{1} = 2\hat{C}_{1} \quad (\text{ext }\angle\text{ of }\triangle)
Similarly in isosceles $\triangle OBC$ ($OB = OC$) :: B\hat{O}D = 2\hat{C}_{2}
Add both equations :: A\hat{O}B = A\hat{O}D + B\hat{O}D = 2(\hat{C}_{1} + \hat{C}_{2}) = 2\,A\hat{C}B
```

## 3. Spot the reflex angle trap

```compare
title: Matching the central angle to the RIGHT arc
left_title: Right: both angles face the SAME arc AB
left:
Look at the legs leaving $O$ and $C$: they both walk to $A$ and $B$ on the **same side**.
If $A\hat{C}B = 110^\circ$ (an obtuse angle in the minor segment), the matching angle at $O$ is the **reflex angle** $A\hat{O}B_{\text{reflex}} = 220^\circ$!
right_title: Wrong: halving the acute side of O
right:
Never blindly write $A\hat{O}B_{\text{acute}} = 2 \times 110^\circ$. Always trace from $O$ to the same arc $AB$ that $C$ opens toward.
```

```tryit
title: Quick check
prompt: In a circle with centre $O$, chord $AB$ subtends $A\hat{C}B = 38^\circ$ at $C$ on the major arc. Another point $D$ lies on the major arc on the same side as $C$. State **(a)** $A\hat{O}B$ and **(b)** $A\hat{D}B$, with reasons.
hint: Both $A\hat{O}B$ and $A\hat{D}B$ stand on the same minor arc $AB$.
answer: **(a)** $A\hat{O}B = 2(38^\circ) = 76^\circ$ ($\angle$ at centre $= 2 \times \angle$ at circum). **(b)** $A\hat{D}B = 38^\circ$ ($\angle$s in same seg).
```

## 4. Worked examples

```steps
title: Example 1 (Semicircle and isosceles radii): $AB$ is a diameter of circle centre $O$. Point $C$ lies on the circle with $C\hat{A}B = 28^\circ$. Find $A\hat{B}C$ and $B\hat{O}C$.
Recognise diameter $AB$ :: A\hat{C}B = 90^\circ \quad (\angle\text{ in semi-circle})
Sum of angles in $\triangle ABC$ :: A\hat{B}C = 180^\circ - 90^\circ - 28^\circ = 62^\circ \quad (\angle\text{s of }\triangle)
$B\hat{O}C$ and $C\hat{A}B$ stand on arc $BC$ :: B\hat{O}C = 2(28^\circ) = 56^\circ \quad (\angle\text{ at centre } = 2\times \angle\text{ at circum})
```

```steps
title: Example 2 (Reflex angle at centre): $P, Q, R$ lie on a circle with centre $O$ such that obtuse $P\hat{Q}R = 115^\circ$. Find obtuse $P\hat{O}R$.
$P\hat{Q}R$ faces the major arc $PR$, so reflex $P\hat{O}R$ doubles it :: \text{reflex } P\hat{O}R = 2(115^\circ) = 230^\circ \quad (\angle\text{ at centre } = 2\times \angle\text{ at circum})
Angles around point $O$ sum to $360^\circ$ :: \text{obtuse } P\hat{O}R = 360^\circ - 230^\circ = 130^\circ \quad (\angle\text{s round a pt})
```

```steps
title: Example 3 (Exam level — bowtie chords): Chords $AC$ and $BD$ intersect at $E$, with $A\hat{B}D = 34^\circ$ and $B\hat{A}C = 41^\circ$. Find $B\hat{E}C$ and $A\hat{C}D$.
$A\hat{C}D$ and $A\hat{B}D$ both stand on arc $AD$ :: A\hat{C}D = 34^\circ \quad (\angle\text{s in same seg})
$B\hat{E}C$ is an exterior angle of $\triangle ABE$ :: B\hat{E}C = 34^\circ + 41^\circ = 75^\circ \quad (\text{ext }\angle\text{ of }\triangle)
```

> **Common mistakes**
>
> - **Applying "angles in the same segment" when a vertex sits at the centre $O$:** all vertices being equated *must* sit on the **circumference**.
> - **Assuming a random chord is a diameter:** you may only use `∠ in semi-circle` ($90^\circ$) if the diagram marks the **centre $O$** on that chord (or states it is a diameter).
> - **Halving the wrong side of $O$** when the angle at the circumference is obtuse ($> 90^\circ$).

## 5. Practice

Try each question on paper before opening the worked answer.

```questions
Q: In a circle with centre $O$, $P\hat{O}Q = 104^\circ$. Point $R$ lies on the major arc $PQ$. Calculate $P\hat{R}Q$ and $O\hat{P}Q$.
A: $P\hat{R}Q = \frac{1}{2}(104^\circ) = 52^\circ$ ($\angle$ at centre $= 2 \times \angle$ at circum). Since $OP = OQ$ (radii), $O\hat{P}Q = \frac{180^\circ - 104^\circ}{2} = 38^\circ$ ($\angle$s opp $=$ radii).
---
Q: $KL$ is a diameter of a circle with centre $O$, and $M$ lies on the circle with $K\hat{L}M = 37^\circ$. Calculate $L\hat{K}M$.
A: $K\hat{M}L = 90^\circ$ ($\angle$ in semi-circle). $L\hat{K}M = 180^\circ - 90^\circ - 37^\circ = 53^\circ$ ($\angle$s of $\triangle$).
---
Q: $A, B, C, D$ lie on a circle in that order. $A\hat{C}B = 29^\circ$ and $C\hat{A}D = 51^\circ$. Find $A\hat{D}B$ and $C\hat{B}D$.
A: $A\hat{D}B = A\hat{C}B = 29^\circ$ ($\angle$s in same seg, arc $AB$). $C\hat{B}D = C\hat{A}D = 51^\circ$ ($\angle$s in same seg, arc $CD$).
---
Q: **(Exam level)** Circle centre $O$ passes through $A, B, C$. If $O\hat{A}B = 25^\circ$ and $O\hat{C}B = 35^\circ$ (with $O$ inside $\triangle ABC$), calculate $A\hat{B}C$ and $A\hat{O}C$.
A: Join $OB$. Since $OA = OB = OC$ (radii), $O\hat{B}A = 25^\circ$ and $O\hat{B}C = 35^\circ$ ($\angle$s opp $=$ radii). Thus $A\hat{B}C = 25^\circ + 35^\circ = 60^\circ$, and $A\hat{O}C = 2(60^\circ) = 120^\circ$ ($\angle$ at centre $= 2 \times \angle$ at circum).
```

## Further help

- Siyavula Mathematics Grade 11, [8.1 Circle geometry](https://www.siyavula.com/read/za/mathematics/grade-11/euclidean-geometry/08-euclidean-geometry-01).
