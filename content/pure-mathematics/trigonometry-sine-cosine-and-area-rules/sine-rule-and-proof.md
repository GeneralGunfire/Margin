---
title: Sine rule and proof
youtube_query: Grade 11 sine rule proof and use
subject: pure-mathematics
topic: Trigonometry: sine, cosine and area rules
part: Geometry
term: 3
subtopic: The sine rule
order: 711
---

> **What you'll learn:** *why* the ratio between $\sin(\text{angle})$ and the opposite side is identical for all three corners of any triangle, the examinable CAPS formal proof for acute and obtuse triangles, and how to handle the ambiguous (two-triangle) case.
>
> **Prerequisites:** Right-angled trigonometry ($\sin\theta = \frac{\text{opp}}{\text{hyp}}$), angle sum of a triangle, and reduction formula $\sin(180^\circ - \theta) = \sin\theta$.

## 1. Matching opposite pairs

In right-angled triangles we use SOHCAHTOA, which relies on a $90^\circ$ corner. In any general triangle $\triangle ABC$ (with side $a$ opposite $\hat{A}$, side $b$ opposite $\hat{B}$, and side $c$ opposite $\hat{C}$), we drop a perpendicular height $h$ from $C$ onto $AB$ (or $AB$ produced) to split the triangle into two right-angled triangles.

Writing that **same shared height $h$** in two different ways links $\hat{A}$ and side $a$ directly to $\hat{B}$ and side $b$:

```diagram
name: trig-rules-triangle
```

```rule
title: The sine rule (both forms)
\frac{\sin A}{a} = \frac{\sin B}{b} = \frac{\sin C}{c} \qquad \Longleftrightarrow \qquad \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}
```

Put whichever quantity you are **solving for** in the **numerator**:
- Finding a **side**: use $\dfrac{a}{\sin A} = \dfrac{b}{\sin B}$.
- Finding an **angle**: use $\dfrac{\sin A}{a} = \dfrac{\sin B}{b}$.

## 2. Examinable CAPS formal proof (acute and obtuse cases)

```steps
title: Formal proof (Exam proof): Prove that (sin A)/a = (sin B)/b in triangle ABC
Draw altitude $CD \perp AB$ (or $AB$ produced) of length $h$ :: \text{Construct } CD \perp AB \text{ with } CD = h
Case 1 — Acute triangle ($D$ lies on $AB$): write $h$ from $\triangle ACD$ :: \sin A = \frac{h}{b} \;\Longrightarrow\; h = b\sin A
Write the same $h$ from $\triangle BCD$ :: \sin B = \frac{h}{a} \;\Longrightarrow\; h = a\sin B
Case 2 — Obtuse $\hat{A}$ ($D$ lies on $BA$ produced): use exterior angle $C\hat{A}D = 180^\circ - \hat{A}$ :: \sin(180^\circ - A) = \frac{h}{b} \;\Longrightarrow\; \sin A = \frac{h}{b} \;\Longrightarrow\; h = b\sin A
Equate both expressions for $h$ and divide by $ab$ :: b\sin A = a\sin B \;\Longrightarrow\; \frac{\sin A}{a} = \frac{\sin B}{b}
```

## 3. When to use the sine rule (and the ambiguous case)

```compare
title: Two situations where the sine rule works
left_title: AAS / ASA (two angles and one side)
left:
You know a complete opposite pair $(\text{angle}, \text{side})$ plus one extra angle. Subtracting from $180^\circ$ unlocks the third angle immediately, giving a **unique** triangle.
right_title: SSA (two sides and a non-included angle)
right:
Because $\sin(180^\circ - \theta) = \sin\theta$, solving $\sin B = k$ can produce **two valid angles** (one acute $\theta$, one obtuse $180^\circ - \theta$) if the obtuse angle still leaves $\hat{A} + \hat{B} < 180^\circ$!
```

```tryit
title: Quick check
prompt: In $\triangle PQR$, $\hat{P} = 42^\circ$, $\hat{Q} = 75^\circ$, and $p = 12\text{ cm}$. Calculate $q$ to two decimal places.
hint: Both $\hat{P}$ and $p$ are known, and you want side $q$ opposite $\hat{Q}$ — put $q$ in the numerator!
answer: $\dfrac{q}{\sin 75^\circ} = \dfrac{12}{\sin 42^\circ} \implies q = \dfrac{12\sin 75^\circ}{\sin 42^\circ} \approx 17{,}32\text{ cm}$.
```

## 4. Worked examples

```steps
title: Example 1 (Finding a side via third angle): In $\triangle ABC$, $\hat{A} = 38^\circ$, $\hat{C} = 82^\circ$, and $b = 15\text{ m}$. Find $a$ correct to two decimal places.
Find $\hat{B}$ (opposite known side $b$) first :: \hat{B} = 180^\circ - 38^\circ - 82^\circ = 60^\circ \quad (\angle\text{s of }\triangle)
Set up the sine rule with $a$ on top :: \frac{a}{\sin 38^\circ} = \frac{15}{\sin 60^\circ}
Solve for $a$ :: a = \frac{15\sin 38^\circ}{\sin 60^\circ} \approx 10{,}66\text{ m}
```

```steps
title: Example 2 (Ambiguous SSA case): In $\triangle DEF$, $d = 10$, $e = 13$, and $\hat{D} = 40^\circ$. Find all possible sizes of $\hat{E}$ to one decimal place.
Put $\sin E$ in the numerator :: \frac{\sin E}{13} = \frac{\sin 40^\circ}{10}
Calculate the acute reference angle :: \sin E = \frac{13\sin 40^\circ}{10} \approx 0{,}8356 \;\Longrightarrow\; E_{1} \approx 56{,}7^\circ
Test the obtuse quadrant-II supplement :: E_{2} = 180^\circ - 56{,}7^\circ = 123{,}3^\circ
Check triangle angle sum ($D + E < 180^\circ$) :: 40^\circ + 123{,}3^\circ = 163{,}3^\circ < 180^\circ \;\Longrightarrow\; \hat{E} = 56{,}7^\circ \text{ or } 123{,}3^\circ
```

> **Common mistakes**
>
> - **Cross-multiplying with the wrong opposite side:** side $a$ *always* sits directly across from $\hat{A}$—never use an adjacent side with $\hat{A}$ in the sine rule.
> - **Rounding intermediate values too early:** keep full calculator precision until the final answer.
> - **Forgetting the obtuse angle when solving $\sin\theta = k$:** always check whether $180^\circ - \theta$ also satisfies $\text{known angle} + \theta < 180^\circ$ (unless the diagram or question states the triangle is acute or obtuse).

## 5. Practice

Try each question on paper before opening the worked answer.

```questions
Q: In $\triangle KLM$, $\hat{K} = 54^\circ$, $\hat{L} = 68^\circ$, and $k = 14\text{ cm}$. Calculate $l$ correct to two decimal places.
A: $\dfrac{l}{\sin 68^\circ} = \dfrac{14}{\sin 54^\circ} \implies l = \dfrac{14\sin 68^\circ}{\sin 54^\circ} \approx 16{,}04\text{ cm}$.
---
Q: In acute-angled $\triangle ABC$, $a = 18$, $b = 21$, and $\hat{A} = 48^\circ$. Calculate $\hat{B}$ to one decimal place.
A: $\dfrac{\sin B}{21} = \dfrac{\sin 48^\circ}{18} \implies \sin B = \dfrac{21\sin 48^\circ}{18} \approx 0{,}8670 \implies \hat{B} \approx 60{,}1^\circ$ (acute only, as stated).
---
Q: In $\triangle PQR$, $\hat{P} = 112^\circ$, $p = 25\text{ m}$, and $q = 16\text{ m}$. Calculate $\hat{Q}$ and $\hat{R}$ to one decimal place.
A: $\sin Q = \dfrac{16\sin 112^\circ}{25} \approx 0{,}5934 \implies \hat{Q} \approx 36{,}4^\circ$ (cannot be obtuse because $\hat{P} = 112^\circ$). Thus $\hat{R} = 180^\circ - 112^\circ - 36{,}4^\circ = 31{,}6^\circ$.
---
Q: **(Exam level)** In $\triangle XYZ$, $x = 9\text{ cm}$, $y = 12\text{ cm}$, and $\hat{X} = 35^\circ$. Show that two different triangles satisfy these measurements, and find the two possible values of side $z$ to one decimal place.
A: $\sin Y = \dfrac{12\sin 35^\circ}{9} \approx 0{,}7648 \implies \hat{Y}_{1} \approx 49{,}9^\circ$ or $\hat{Y}_{2} = 180^\circ - 49{,}9^\circ = 130{,}1^\circ$ (both keep $\hat{X} + \hat{Y} < 180^\circ$). Case 1: $\hat{Z}_{1} = 180^\circ - 35^\circ - 49{,}9^\circ = 95{,}1^\circ \implies z_{1} = \dfrac{9\sin 95{,}1^\circ}{\sin 35^\circ} \approx 15{,}6\text{ cm}$. Case 2: $\hat{Z}_{2} = 180^\circ - 35^\circ - 130{,}1^\circ = 14{,}9^\circ \implies z_{2} = \dfrac{9\sin 14{,}9^\circ}{\sin 35^\circ} \approx 4{,}0\text{ cm}$.
```

## Further help

- Siyavula Mathematics Grade 11, [7.2 The sine rule](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/07-trigonometry-02).
