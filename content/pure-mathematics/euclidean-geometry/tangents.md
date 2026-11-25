---
title: Tangents
youtube_query: Grade 11 circle geometry tangent theorems
subject: pure-mathematics
topic: Euclidean geometry
part: Geometry
term: 2
subtopic: Tangents
order: 431
---

> **What you'll learn:** the three core tangent theorems (`tan ⊥ radius`, `tangents from same pt`, and `tan-chord theorem`), why the tangent-chord theorem works, the examinable CAPS formal proof, and how to prove a line is a tangent to a circle.
>
> **Prerequisites:** [Angles at the centre and circumference](/library/pure-mathematics/euclidean-geometry/angles-at-the-centre-and-circumference) and [Cyclic quadrilaterals](/library/pure-mathematics/euclidean-geometry/cyclic-quadrilaterals).

## 1. Three tangent theorems in one diagram

A **tangent** is a straight line that kisses a circle at **exactly one point** (called the *point of contact*), without cutting across the circle.

That single kissing point locks three powerful relationships into place:
1. **Perpendicular to radius:** at the point of contact, the tangent is always $90^\circ$ to the radius.
2. **Equal tangents from an outside point:** if two tangents start at the same point $P$ outside the circle, they travel the exact same distance to touch the circle ($PA = PB$).
3. **Tangent-chord theorem:** the angle between a tangent and a chord drawn from the point of contact equals the angle subtended by that chord in the **alternate (opposite) segment**.

Click through all three tabs below to see each theorem in action:

```diagram
name: tangent-circle-explorer
```

```rule
title: Tangent theorems (CAPS reasons)
\text{1. Tangent } \perp \text{ radius: } OA \perp ET \text{ at point of contact } A \qquad (\mathbf{tan\ \perp\ radius})
\text{2. Equal tangents: } PA = PB \text{ from external point } P \qquad (\mathbf{tangents\ from\ same\ pt})
\text{3. Tan-chord: } C\hat{A}T = \hat{B} \text{ (angle between tangent } AT \text{ and chord } AC \text{)} \qquad (\mathbf{tan\text{-}chord\ theorem})
```

## 2. How to spot the right angle in the tan-chord theorem

Students rarely forget the formula—they pick the wrong angle inside the triangle! Use this three-step visual rule:
1. Place one finger on the **point of contact** $A$, and trace along the **tangent** $AT$ and the **chord** $AC$. That gives the tangent-chord angle $C\hat{A}T$.
2. Now hold the two endpoints of that **same chord $AC$** ($A$ and $C$) and look across the circle to the vertex **opposite the tangent side** ($B$).
3. Those two angles are equal: $C\hat{A}T = A\hat{B}C$. (Similarly, on the other side, $B\hat{A}E = A\hat{C}B$.)

## 3. Examinable CAPS formal proof (tan-chord theorem)

```steps
title: Formal proof (Exam proof): Given tangent EAT at A to circle centre O with triangle ABC on the circle, prove CÂT = B̂ (acute case)
Draw diameter $AOD$ from $A$ through centre $O$, and join $DC$ :: \text{Draw diameter } AD \text{ and chord } DC
Tangent is perpendicular to diameter $AD$ :: D\hat{A}T = 90^\circ \quad (\text{tan }\perp\text{ radius})
Angle in a semicircle is $90^\circ$ :: A\hat{C}D = 90^\circ \quad (\angle\text{ in semi-circle})
Use angle sum of $\triangle ACD$ :: \hat{D} + C\hat{A}D = 90^\circ \quad (\angle\text{s of }\triangle)
Split $D\hat{A}T$ :: C\hat{A}T + C\hat{A}D = 90^\circ
Equate the two sums for $90^\circ$ :: C\hat{A}T = \hat{D}
Match $\hat{D}$ and $\hat{B}$ on the same chord $AC$ :: \hat{D} = \hat{B} \quad (\angle\text{s in same seg})
Conclude by transitivity :: \therefore C\hat{A}T = \hat{B}
```

## 4. Proving a line IS a tangent (the converses)

If an exam asks *"Prove that line $PQ$ is a tangent to circle $ABC$"*:
- **If the centre $O$ is shown:** prove the radius $OA \perp PQ$ (`line ⊥ radius`).
- **If a triangle/chord $ABC$ is shown without $O$:** prove that the angle between $PQ$ and chord $AC$ equals the angle in the alternate segment (`∠ between line and chord = ∠ in alt seg`).

```tryit
title: Quick check
prompt: Tangent $PA$ touches a circle at $A$, and chord $AB$ makes $P\hat{A}B = 64^\circ$. Point $C$ lies on the major arc $AB$, and $PB$ is also a tangent to the circle from $P$. Calculate $A\hat{C}B$ and $A\hat{P}B$.
hint: First use the tan-chord theorem for $A\hat{C}B$; then remember $PA = PB$ makes $\triangle PAB$ isosceles!
answer: $A\hat{C}B = P\hat{A}B = 64^\circ$ ($\text{tan-chord theorem}$). Since $PA = PB$ ($\text{tangents from same pt}$), $P\hat{B}A = P\hat{A}B = 64^\circ$ ($\angle\text{s opp }=\text{ sides}$), so $A\hat{P}B = 180^\circ - 2(64^\circ) = 52^\circ$ ($\angle\text{s of }\triangle$).
```

## 5. Worked examples

```steps
title: Example 1 (Tangent + centre angle): $PT$ touches circle centre $O$ at $T$. $PO$ cuts the circle at $A$ and $T\hat{P}O = 28^\circ$. Find $P\hat{O}T$ and $T\hat{A}O$.
Angle between tangent and radius :: O\hat{T}P = 90^\circ \quad (\text{tan }\perp\text{ radius})
Angle sum of $\triangle OTP$ :: P\hat{O}T = 180^\circ - 90^\circ - 28^\circ = 62^\circ \quad (\angle\text{s of }\triangle)
$\triangle OAT$ is isosceles because $OA = OT$ (radii) :: T\hat{A}O = O\hat{T}A = \frac{180^\circ - 62^\circ}{2} = 59^\circ \quad (\angle\text{s opp }=\text{ radii})
```

```steps
title: Example 2 (Two tangents + cyclic quad): $TA$ and $TB$ are tangents from $T$ to a circle at $A$ and $B$. $C$ lies on the major arc $AB$. If $A\hat{T}B = 46^\circ$, calculate $A\hat{C}B$.
Equal tangents make $\triangle TAB$ isosceles :: TA = TB \quad (\text{tangents from same pt})
Find base angle $T\hat{A}B$ :: T\hat{A}B = \frac{180^\circ - 46^\circ}{2} = 67^\circ \quad (\angle\text{s opp }=\text{ sides};\ \angle\text{s of }\triangle)
Apply tan-chord theorem across chord $AB$ :: A\hat{C}B = T\hat{A}B = 67^\circ \quad (\text{tan-chord theorem})
```

```steps
title: Example 3 (Exam level — proving a tangent): $PQRS$ is a cyclic quadrilateral with $PQ = PS$. Tangent-candidate line $KT$ touches $P$ such that $KT \parallel QS$. Prove that $KT$ is a tangent to circle $PQRS$.
Show $P\hat{Q}S = P\hat{S}Q$ in isosceles $\triangle PQS$ :: P\hat{Q}S = P\hat{S}Q \quad (\angle\text{s opp }=\text{ sides})
Use alternate angles because $KT \parallel QS$ (with $T$ on the $S$-side of $P$) :: T\hat{P}S = P\hat{S}Q \quad (\text{alt }\angle\text{s};\ KT\parallel QS)
Combine both equalities :: T\hat{P}S = P\hat{Q}S
Conclude using converse tan-chord :: \therefore KT \text{ is a tangent to circle } PQRS \quad (\angle\text{ between line and chord } = \angle\text{ in alt seg})
```

> **Common mistakes**
>
> - **Forgetting which side of the chord the alternate angle sits on:** the tangent-chord angle on the *right* of chord $AC$ equals the inscribed angle on the *left* of chord $AC$, never on the same side.
> - **Assuming $OA \perp$ tangent when $A$ is NOT the point of contact:** `tan ⊥ radius` applies *only* to the radius drawn directly to the point where the tangent touches the circle.

## 6. Practice

Try each question on paper before opening the worked answer.

```questions
Q: $AB$ is a tangent at $B$ to a circle with centre $O$. $OA$ meets the circle at $C$. If $O\hat{A}B = 34^\circ$ and $OB = 6\text{ cm}$, calculate $B\hat{O}A$ and the length of $AB$ to two decimal places.
A: $O\hat{B}A = 90^\circ$ ($\text{tan }\perp\text{ radius}$), so $B\hat{O}A = 180^\circ - 90^\circ - 34^\circ = 56^\circ$ ($\angle\text{s of }\triangle$). Using $\tan 34^\circ = \frac{6}{AB}$, $AB = \frac{6}{\tan 34^\circ} \approx 8{,}90\text{ cm}$.
---
Q: Tangent $RS$ touches a circle at $P$ (with $R, P, S$ in order). Chords $PQ$ and $PT$ form $\triangle PQT$, with $T$ on the $R$-side and $Q$ on the $S$-side. If $Q\hat{P}S = 51^\circ$ and $P\hat{Q}T = 72^\circ$, calculate $P\hat{T}Q$ and $T\hat{P}R$.
A: $P\hat{T}Q = Q\hat{P}S = 51^\circ$ ($\text{tan-chord theorem}$), and $T\hat{P}R = P\hat{Q}T = 72^\circ$ ($\text{tan-chord theorem}$).
---
Q: Two tangents $PA$ and $PB$ are drawn from $P$ to a circle with centre $O$. Prove that $PO$ bisects $A\hat{O}B$ and $A\hat{P}B = 180^\circ - A\hat{O}B$.
A: In $\triangle OAP$ and $\triangle OBP$: $OA = OB$ (radii), $OP = OP$ (common), and $O\hat{A}P = O\hat{B}P = 90^\circ$ ($\text{tan }\perp\text{ radius}$). Thus $\triangle OAP \equiv \triangle OBP$ (RHS), so $A\hat{O}P = B\hat{O}P$. In quad $OAPB$, $O\hat{A}P + O\hat{B}P = 180^\circ$, so $A\hat{P}B + A\hat{O}B = 180^\circ$ ($\angle\text{s of quad}$), giving $A\hat{P}B = 180^\circ - A\hat{O}B$.
---
Q: **(Exam level)** Two circles touch internally at $P$. A chord $AB$ of the larger circle is a tangent to the smaller circle at $C$, and $PA$ cuts the smaller circle at $D$. Prove that $PC$ bisects $A\hat{P}B$.
A: Draw the common tangent $EPT$ at $P$ (with $E$ on the $A$-side). By the tan-chord theorem in the larger circle, $E\hat{P}A = P\hat{B}A$; in the smaller circle, $E\hat{P}D = P\hat{C}D$. Since $E\hat{P}A = E\hat{P}D$, we have $P\hat{C}D = P\hat{B}C$. Next, by the tan-chord theorem with tangent $AB$ on the smaller circle, $D\hat{C}A = D\hat{P}C = A\hat{P}C$. In $\triangle PCB$, the exterior angle $P\hat{C}A = C\hat{P}B + P\hat{B}C$ ($\text{ext }\angle\text{ of }\triangle$). Also $P\hat{C}A = P\hat{C}D + D\hat{C}A = P\hat{B}C + A\hat{P}C$. Equating both gives $A\hat{P}C = C\hat{P}B$, so $PC$ bisects $A\hat{P}B$.
```

## Further help

- Siyavula Mathematics Grade 11, [8.3 Tangent-chord theorem](https://www.siyavula.com/read/za/mathematics/grade-11/euclidean-geometry/08-euclidean-geometry-03).
