---
title: Chords and the centre
youtube_query: Grade 11 circle geometry chords and the centre
subject: pure-mathematics
topic: Euclidean geometry
part: Geometry
term: 2
subtopic: Chords and angles in a circle
order: 411
---

> **What you'll learn:** *why* a perpendicular line from a circle's centre always cuts a chord in half, the examinable CAPS proof using triangle congruence, and how to solve radius–depth chord problems using Pythagoras.
>
> **Prerequisites:** triangle congruence ($\text{RHS}$ and $\text{SSS}$) and Pythagoras' theorem.

## 1. Equal radii lock the chord in half

Draw any chord $AB$ inside a circle centred at $O$, and connect both endpoints back to $O$. Because $OA$ and $OB$ are both **radii** of the same circle, $OA = OB$, making $\triangle OAB$ **isosceles**!

Drop a perpendicular $OM \perp AB$ from the apex $O$ down to the base $AB$. Just like folding an isosceles triangle in half, $OM$ splits $\triangle OAB$ into two identical right-angled triangles—so **$AM = MB$**!

Switch between Theorem 1 and its converse below:

```diagram
name: circle-chord-centre
```

```rule
title: Theorem 1 & its converse (with CAPS exam reasons)
\text{Theorem: } OM \perp AB \;\Longrightarrow\; AM = MB \qquad (\text{Reason: } \mathbf{line\ from\ centre \perp to\ chord})
\text{Converse: } AM = MB \;\Longrightarrow\; OM \perp AB \qquad (\text{Reason: } \mathbf{line\ from\ centre\ to\ midpt\ of\ chord})
\text{Corollary: the perpendicular bisector of any chord passes through the centre } O.
```

## 2. Examinable CAPS formal proof

```steps
title: Formal proof (Exam proof): Given circle centre $O$ and $OM \perp AB$, prove $AM = MB$
Join radii $OA$ and $OB$ to form two right triangles :: \text{In } \triangle OAM \text{ and } \triangle OBM:
90^\circ \text{ angle given at } M :: O\hat{M}A = O\hat{M}B = 90^\circ \quad (\text{given})
Equal radii (hypotenuse) :: OA = OB \quad (\text{radii})
Shared side :: OM = OM \quad (\text{common})
Conclude congruence :: \triangle OAM \equiv \triangle OBM \quad (\text{RHS})
Concluding equal halves :: \therefore AM = MB
```

```compare
title: Two ways chord questions hide the radius
left_title: Right-angled triangle (r, d, half-chord)
left:
Every chord problem forms one right triangle with:
- Hypotenuse = radius $r$
- One leg = distance $d = OM$ from centre
- Other leg = **half** the chord ($\frac{1}{2}AB$)
So $r^{2} = d^{2} + \left(\frac{1}{2}AB\right)^{2}$.
right_title: "Depth of water" or "height of arc"
right:
If a pipe of radius $r$ has chord width $AB$ and maximum arc height $h$ below/above the chord, the centre distance is **$r - h$** (not $h$!).
Write $OM = r - h$ and solve $r^{2} = (r - h)^{2} + AM^{2}$.
```

```tryit
title: Quick check
prompt: A circle with centre $O$ has radius $13\text{ cm}$. Chord $PQ$ sits $5\text{ cm}$ from $O$. Calculate the full length of chord $PQ$.
hint: Draw $OM \perp PQ$ with $OM = 5$ and $OP = 13$. Find $PM$ by Pythagoras, then double it!
answer: $PM^{2} = 13^{2} - 5^{2} = 169 - 25 = 144 \implies PM = 12\text{ cm}$. By line from centre $\perp$ chord, $PQ = 2(12) = 24\text{ cm}$.
```

## 3. Worked examples

```steps
title: Example 1 (Find the radius): Chord $AB = 16\text{ cm}$ is $6\text{ cm}$ away from the centre $O$. Find the radius $r$.
Drop $OM \perp AB$, bisecting $AB$ :: AM = \frac{16}{2} = 8\text{ cm} \quad (\text{line from centre } \perp \text{ chord})
Apply Pythagoras in $\triangle OAM$ :: OA^{2} = OM^{2} + AM^{2} = 6^{2} + 8^{2} = 36 + 64 = 100
Take square root ($r > 0$) :: r = OA = 10\text{ cm}
```

```steps
title: Example 2 (Converse with angle chase): $M$ is the midpoint of chord $CD$ in circle centre $O$, and $O\hat{C}M = 32^\circ$. Find $C\hat{O}M$.
State why $OM \perp CD$ :: C\hat{M}O = 90^\circ \quad (\text{line from centre to midpt of chord})
Use sum of angles in $\triangle OCM$ :: C\hat{O}M = 180^\circ - 90^\circ - 32^\circ = 58^\circ \quad (\text{sum of }\angle\text{s in }\triangle)
```

```steps
title: Example 3 (Exam level — water level / depth problem): A circular tunnel has horizontal floor $AB = 8\text{ m}$ and height $MN = 8\text{ m}$ from the floor's midpoint $M$ straight up through the centre $O$ to the ceiling $N$. Find the radius $r$.
Let the radius be $r$ (so $ON = OA = r$) :: OM = MN - ON = 8 - r
$OM \perp AB$, so $M$ bisects $AB$ :: AM = \frac{8}{2} = 4\text{ m} \quad (\text{line from centre } \perp \text{ chord})
Apply Pythagoras in $\triangle OAM$ :: r^{2} = (8 - r)^{2} + 4^{2}
Expand and cancel $r^{2}$ :: r^{2} = 64 - 16r + r^{2} + 16 \;\Longrightarrow\; 16r = 80
Solve for $r$ :: r = 5\text{ m}
```

> **Common mistakes**
>
> - **Using the full chord $AB$ in Pythagoras instead of half-chord $AM$:** $\triangle OAM$ has side $AM = \frac{1}{2}AB$, never $AB$.
> - **Writing "chord bisector" instead of the accepted CAPS reason:** always state **`line from centre ⊥ to chord`** or **`line from centre to midpt of chord`**.
> - **Assuming $OM = h$ in height/sagitta problems:** the segment $r - h$ reaches from the centre $O$ to the chord, while $h$ runs from the chord to the arc.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Circle centre $O$ has radius $10\text{ cm}$ and chord $AB = 12\text{ cm}$. Find the perpendicular distance from $O$ to $AB$.
A: $AM = 6\text{ cm}$ (line from centre $\perp$ chord). $OM = \sqrt{10^{2} - 6^{2}} = \sqrt{64} = 8\text{ cm}$.
---
Q: $OM$ joins centre $O$ to the midpoint $M$ of chord $PQ$. If $P\hat{O}M = 48^\circ$, find $O\hat{P}M$, giving full reasons.
A: $O\hat{M}P = 90^\circ$ (line from centre to midpt of chord). $O\hat{P}M = 180^\circ - 90^\circ - 48^\circ = 42^\circ$ ($\angle$s of $\triangle$).
---
Q: Two parallel chords $AB = 10\text{ cm}$ and $CD = 24\text{ cm}$ lie on opposite sides of the centre $O$ of a circle with radius $13\text{ cm}$. Find the distance between the two chords.
A: Half-chords are $5$ and $12$. Distances from $O$: $d_{1} = \sqrt{13^{2} - 5^{2}} = 12\text{ cm}$ and $d_{2} = \sqrt{13^{2} - 12^{2}} = 5\text{ cm}$. Since they lie on opposite sides of $O$, total distance $= 12 + 5 = 17\text{ cm}$.
---
Q: **(Exam level)** Chord $XY = 12\text{ cm}$ lies at a height of $2\text{ cm}$ above the bottom $K$ of a circle, where $OK$ passes perpendicularly through the midpoint $M$ of $XY$. Calculate the radius $r$.
A: $XM = 6\text{ cm}$ (line from centre $\perp$ chord) and $OM = r - 2$. Pythagoras: $r^{2} = (r - 2)^{2} + 6^{2} = r^{2} - 4r + 4 + 36 \implies 4r = 40 \implies r = 10\text{ cm}$.
```

## Further help

- Siyavula Mathematics Grade 11, [8.1 Circle geometry](https://www.siyavula.com/read/za/mathematics/grade-11/euclidean-geometry/08-euclidean-geometry-01).
