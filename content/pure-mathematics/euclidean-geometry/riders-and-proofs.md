---
title: Riders and proofs
youtube_query: Grade 11 circle geometry riders and proofs
subject: pure-mathematics
topic: Euclidean geometry
part: Geometry
term: 2
subtopic: Riders and proofs
order: 441
---

> **What you'll learn:** a systematic five-step strategy for attacking unfamiliar multi-theorem circle geometry riders, how to translate common "Prove that ..." goals into angle equations, and how to lay out full CAPS-mark proofs cleanly.
>
> **Prerequisites:** [Chords and the centre](/library/pure-mathematics/euclidean-geometry/chords-and-the-centre), [Angles at the centre and circumference](/library/pure-mathematics/euclidean-geometry/angles-at-the-centre-and-circumference), [Cyclic quadrilaterals](/library/pure-mathematics/euclidean-geometry/cyclic-quadrilaterals), and [Tangents](/library/pure-mathematics/euclidean-geometry/tangents).

## 1. The 5-step rider decoding system

In Paper 2, you are rarely asked for one theorem on its own—you are given a busy diagram combining a tangent, a cyclic quadrilateral, a diameter, and parallel lines. Instead of staring helplessly at the diagram, run through this checklist **before** writing a word:

1. **Read the text first, mark the diagram in colour:** highlight parallel lines with arrows, mark equal lengths/radii with tick marks, and circle the **centre $O$** (if there is one!).
2. **If a tangent is given, circle the point of contact:** immediately check for `tan ⊥ radius` (if $O$ is shown), `tangents from same pt` (if two tangents meet), and `tan-chord theorem` (look for triangles touching the point of contact).
3. **If a diameter is given, scan for a $90^\circ$ angle** (`∠ in semi-circle`).
4. **If four points lie on one circle, outline the cyclic quad:** look for opposite angles ($180^\circ$), exterior angles, or bowties (`∠s in same seg`).
5. **Chase the target variable $x$:** let one key angle equal $x$, then write every equal angle you find in terms of $x$ right on the sketch until two expressions meet!

## 2. Translate every "Prove that ..." goal into a target

Whenever an exam rider asks you to prove a geometric property, convert the English sentence into an exact equation to aim for:

| If the question asks you to prove... | What you actually need to show | Official CAPS converse reason |
| :--- | :--- | :--- |
| $AB \parallel CD$ | Alternate $\angle$s $=$, or Corresponding $\angle$s $=$, or Co-interior $\angle$s $= 180^\circ$ | $\text{alt }\angle\text{s } =$, $\text{corresp }\angle\text{s } =$, $\text{co-int }\angle\text{s supp}$ |
| $PQRS$ is cyclic | $\hat{P} + \hat{R} = 180^\circ$, or ext $\angle = \text{int opp }\angle$, or $P\hat{Q}R = P\hat{S}R$ | $\text{opp }\angle\text{s supp}$, $\text{ext }\angle = \text{int opp }\angle$, $\text{line subtends }=\angle\text{s}$ |
| $PT$ is a tangent to circle $ABC$ | Angle between $PT$ and chord $PA$ equals $\hat{B}$ in alt segment, or $PT \perp OP$ | $\angle\text{ between line and chord } = \angle\text{ in alt seg}$, or $\text{line }\perp\text{ radius}$ |
| $AB$ is a diameter | An angle subtended by $AB$ on the circumference is $90^\circ$ | $\text{chord subtends } 90^\circ$ |
| $PA$ bisects $B\hat{P}C$ | $B\hat{P}A = A\hat{P}C$ (often equal to the same third angle $x$) | $\text{both equal to } x$ |
| $AB = AC$ (isosceles) | Base angles $\hat{B} = \hat{C}$ are equal | $\text{sides opp }=\angle\text{s}$ |

```compare
title: Two-column proof vs messy paragraph
left_title: Clean exam layout (Statement | Reason)
left:
Write **one** clear relationship per line, name angles with three letters whenever two angles share a vertex (e.g. $C\hat{A}D$, not $\hat{A}$), and put the CAPS reason in parentheses on the right.
right_title: Costly marks lost
right:
Calling an ambiguous angle $\hat{A}$, skipping an intermediate step like `∠s of △`, or writing a theorem name (`cyclic quad`) instead of the property (`opp ∠s of cyclic quad`).
```

```tryit
title: Quick check (Picking the right target)
prompt: You want to prove that tangent line $EAD$ (ordered $E$-$A$-$D$) is parallel to chord $BC$ in circle $ABC$, and you have already shown $D\hat{A}B = A\hat{B}C = x$ across transversal $AB$. Which CAPS reason proves $ED \parallel BC$?
hint: $D\hat{A}B$ and $A\hat{B}C$ lie on opposite sides of transversal $AB$ between lines $DE$ and $BC$.
answer: If $D\hat{A}B = A\hat{B}C$ (a Z-shape across $AB$), then $DE \parallel BC$ ($\text{alt }\angle\text{s } =$)! Always name which angle pair is equal (`alt ∠s =`, not just `parallel lines`).
```

## 3. Worked multi-theorem riders

```steps
title: Example 1 (Chasing x across 4 theorems): Tangent PT touches circle ABC at B, with A, B, C on the circle and diameter AC passing through centre O. Given CÂB = x, express CḂT, AĈB, and PḂA in terms of x (where P-B-T is ordered with A on the P-side and C on the T-side).
Use diameter $AC$ for $90^\circ$ :: A\hat{B}C = 90^\circ \quad (\angle\text{ in semi-circle})
Find $A\hat{C}B$ in $\triangle ABC$ :: A\hat{C}B = 90^\circ - x \quad (\angle\text{s of }\triangle)
Apply tan-chord across chord $BC$ :: C\hat{B}T = C\hat{A}B = x \quad (\text{tan-chord theorem})
Apply tan-chord across chord $AB$ :: P\hat{B}A = A\hat{C}B = 90^\circ - x \quad (\text{tan-chord theorem})
```

```steps
title: Example 2 (Two circles + proving cyclic): Circle 1 and Circle 2 intersect at P and Q. Straight lines APB and CQD pass through P and Q so that A, C lie on Circle 1 and B, D lie on Circle 2. Prove that AC ∥ BD.
Join common chord $PQ$ :: \text{Draw } PQ
Look at cyclic quad $ACQP$ in Circle 1 (where $A-P-B$ extends side $AP$ to $B$) :: B\hat{P}Q = \hat{C} \quad (\text{ext }\angle\text{ of cyclic quad } ACQP)
Look at cyclic quad $PQDB$ in Circle 2 :: B\hat{P}Q + \hat{D} = 180^\circ \quad (\text{opp }\angle\text{s of cyclic quad } PQDB)
Substitute $B\hat{P}Q = \hat{C}$ :: \hat{C} + \hat{D} = 180^\circ
Conclude parallel lines :: \therefore AC \parallel BD \quad (\text{co-int }\angle\text{s supp})
```

```steps
title: Example 3 (Exam level — proving a diameter & tangent): In $\triangle ABC$, $AD \perp BC$ at $D$ and $BE \perp AC$ at $E$. $AD$ and $BE$ meet at $H$. Prove that **(a)** $CDHE$ is cyclic and **(b)** $ABDE$ is cyclic with $AB$ as a diameter of that circle.
Check opposite angles of $CDHE$ :: H\hat{D}C + H\hat{E}C = 90^\circ + 90^\circ = 180^\circ \quad (\text{given})
Conclude $CDHE$ is cyclic :: \therefore CDHE \text{ is cyclic} \quad (\text{opp }\angle\text{s of quad supp})
Check angles standing on segment $AB$ for $ABDE$ :: A\hat{D}B = A\hat{E}B = 90^\circ \quad (\text{given})
Conclude $ABDE$ is cyclic :: \therefore ABDE \text{ is cyclic} \quad (\text{line subtends }=\angle\text{s})
Identify $AB$ as diameter :: AB \text{ is a diameter of circle } ABDE \quad (\text{chord subtends } 90^\circ)
```

> **Common mistakes**
>
> - **Forgetting to construct a helper line when a rider stalls:** joining a **common chord** between two overlapping circles or drawing a **radius to a point of contact** unlocks almost every stuck two-circle proof.
> - **Circular reasoning:** never use the property you are trying to prove (such as assuming $AB \parallel CD$ midway through proving $AB \parallel CD$).

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Tangent $RS$ touches cyclic quadrilateral $ABCD$ at $A$ (ordered $R$-$A$-$S$ with $B$ on the $R$-side and $D$ on the $S$-side). If $B\hat{A}R = 42^\circ$, $A\hat{D}C = 104^\circ$, and $AD = CD$, calculate $A\hat{C}B$ and $B\hat{C}D$.
A: $A\hat{C}B = B\hat{A}R = 42^\circ$ ($\text{tan-chord theorem}$). In isosceles $\triangle ACD$, $A\hat{C}D = \frac{180^\circ - 104^\circ}{2} = 38^\circ$ ($\angle\text{s opp }=\text{ sides};\ \angle\text{s of }\triangle$). Thus $B\hat{C}D = 42^\circ + 38^\circ = 80^\circ$.
---
Q: $AB$ is a diameter of a circle with centre $O$. Chord $CD \perp AB$ at $M$, and $C\hat{A}B = 28^\circ$. Prove that $AB$ bisects $C\hat{A}D$ and find $C\hat{B}D$.
A: $CM = MD$ ($\text{line from centre }\perp\text{ to chord}$). In $\triangle ACM$ and $\triangle ADM$: $CM = MD$, $AM = AM$ (common), and $A\hat{M}C = A\hat{M}D = 90^\circ$, so $\triangle ACM \equiv \triangle ADM$ (SAS). Thus $C\hat{A}M = D\hat{A}M = 28^\circ$, meaning $AB$ bisects $C\hat{A}D$ and $C\hat{A}D = 56^\circ$. Since $ACBD$ is cyclic, $C\hat{B}D = 180^\circ - 56^\circ = 124^\circ$ ($\text{opp }\angle\text{s of cyclic quad}$).
---
Q: Tangent $PT$ touches circle $ABC$ at $A$ (ordered $P$-$A$-$T$ with $B$ on the $P$-side and $C$ on the $T$-side). If $AB = AC$, prove that $PT \parallel BC$.
A: $C\hat{A}T = A\hat{B}C$ ($\text{tan-chord theorem}$). Since $AB = AC$, $A\hat{B}C = A\hat{C}B$ ($\angle\text{s opp }=\text{ sides}$). Hence $C\hat{A}T = A\hat{C}B$, which forces $PT \parallel BC$ ($\text{alt }\angle\text{s }=$).
---
Q: **(Exam level)** In acute $\triangle ABC$, altitudes $BD \perp AC$ at $D$ and $CE \perp AB$ at $E$. Prove that $BCDE$ is a cyclic quadrilateral, and if $B\hat{A}C = 54^\circ$, calculate $E\hat{C}D$.
A: Since $B\hat{E}C = B\hat{D}C = 90^\circ$ (given), segment $BC$ subtends equal angles at $E$ and $D$ on the same side, so $BCDE$ is cyclic ($\text{line subtends }=\angle\text{s}$). In right-angled $\triangle ABD$, $A\hat{B}D = 180^\circ - 90^\circ - 54^\circ = 36^\circ$ ($\angle\text{s of }\triangle$). Since $BCDE$ is cyclic, $E\hat{C}D = E\hat{B}D = 36^\circ$ ($\angle\text{s in same seg}$, chord $ED$).
```

## Further help

- Siyavula Mathematics Grade 11, [8.4 Summary and mixed exercises](https://www.siyavula.com/read/za/mathematics/grade-11/euclidean-geometry/08-euclidean-geometry-04).
