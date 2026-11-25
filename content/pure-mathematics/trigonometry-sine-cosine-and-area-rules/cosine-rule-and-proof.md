---
title: Cosine rule and proof
youtube_query: Grade 11 cosine rule proof and use
subject: pure-mathematics
topic: Trigonometry: sine, cosine and area rules
part: Geometry
term: 3
subtopic: The cosine rule
order: 721
---

> **What you'll learn:** *how* the cosine rule upgrades Pythagoras' theorem to handle non-right triangles, the examinable CAPS formal proof, and how to use it for **SAS** (two sides and the included angle) and **SSS** (three sides).
>
> **Prerequisites:** Pythagoras' theorem, $\sin^2 A + \cos^2 A = 1$, and [Sine rule and proof](/library/pure-mathematics/trigonometry-sine-cosine-and-area-rules/sine-rule-and-proof).

## 1. Generalised Pythagoras

Look at the classic formula $a^2 = b^2 + c^2$. It works **only** when the included angle $\hat{A} = 90^\circ$. What happens when $\hat{A}$ opens wider (making $a$ longer) or closes tighter (making $a$ shorter)?

The **cosine rule** adds the exact correction term $-2bc\cos A$:
- When $\hat{A} = 90^\circ$, $\cos 90^\circ = 0$ and the correction vanishes back into $a^2 = b^2 + c^2$.
- When $\hat{A} < 90^\circ$, $\cos A > 0$, so subtracting $2bc\cos A$ makes $a$ **shorter**.
- When $\hat{A} > 90^\circ$, $\cos A < 0$, so subtracting a negative **adds** length to $a$!

Switch to the **Cosine rule** tab below to watch how altitude $CD$ turns right-angled $\triangle CDB$ into the proof:

```diagram
name: trig-rules-triangle
```

```rule
title: The cosine rule (side form & angle form)
\text{Finding a side (SAS): } a^2 = b^2 + c^2 - 2bc\cos A
\text{Finding an angle (SSS): } \cos A = \frac{b^2 + c^2 - a^2}{2bc}
```

## 2. Examinable CAPS formal proof

```steps
title: Formal proof (Exam proof): Prove that a^2 = b^2 + c^2 - 2bc cos A in triangle ABC
Drop perpendicular altitude $CD \perp AB$ of length $h$ :: \text{Construct } CD \perp AB \text{ with } CD = h
Express $h$ and $AD$ in right-angled $\triangle ACD$ :: h = b\sin A \quad\text{and}\quad AD = b\cos A
Write $DB$ on base $AB = c$ (note: for obtuse $\hat{A}$, $\cos A < 0$ so $c - b\cos A$ still gives $DB$) :: DB = c - b\cos A
Apply Pythagoras to right-angled $\triangle CDB$ :: a^2 = h^2 + (c - b\cos A)^2
Substitute $h = b\sin A$ and expand the square :: a^2 = b^2\sin^2 A + c^2 - 2bc\cos A + b^2\cos^2 A
Factor out $b^2$ and apply $\sin^2 A + \cos^2 A = 1$ :: a^2 = b^2(\sin^2 A + \cos^2 A) + c^2 - 2bc\cos A = b^2 + c^2 - 2bc\cos A
```

## 3. Why the cosine rule has NO ambiguous angle case

Unlike $\sin\theta$, which is positive in both Quadrant I and Quadrant II, **$\cos\theta$ has a unique sign on $(0^\circ;\ 180^\circ)$**:
- If $\cos A > 0$, $\hat{A}$ is **acute** ($0^\circ < \hat{A} < 90^\circ$).
- If $\cos A < 0$, $\hat{A}$ is **obtuse** ($90^\circ < \hat{A} < 180^\circ$)—and your calculator's $\cos^{-1}$ automatically outputs that exact obtuse angle!

```tryit
title: Quick check
prompt: In $\triangle ABC$, $a = 7$, $b = 10$, and $\hat{C} = 60^\circ$. Calculate $c$ to two decimal places.
hint: You have two sides ($a, b$) and the included angle between them ($\hat{C}$), so use $c^2 = a^2 + b^2 - 2ab\cos C$.
answer: $c^2 = 7^2 + 10^2 - 2(7)(10)\cos 60^\circ = 49 + 100 - 70 = 79$, so $c = \sqrt{79} \approx 8{,}89$.
```

## 4. Worked examples

```steps
title: Example 1 (SSS — finding an obtuse angle): In $\triangle PQR$, $p = 11$, $q = 5$, and $r = 8$. Find the largest angle $\hat{P}$ to one decimal place.
The largest angle sits opposite the longest side ($p = 11$) :: \cos P = \frac{q^2 + r^2 - p^2}{2qr}
Substitute $q = 5$, $r = 8$, $p = 11$ :: \cos P = \frac{5^2 + 8^2 - 11^2}{2(5)(8)} = \frac{25 + 64 - 121}{80} = -\frac{32}{80} = -0{,}4
Take $\cos^{-1}$ (negative cosine gives obtuse directly) :: \hat{P} = \cos^{-1}(-0{,}4) \approx 113{,}6^\circ
```

```steps
title: Example 2 (Exam level — algebraic cosine rule): In $\triangle KLM$, $KL = 2x$, $KM = x$, $LM = \sqrt{7}x$ ($x > 0$). Prove that $\hat{K} = 120^\circ$.
Write the cosine rule for angle $\hat{K}$ (opposite side $LM$) :: \cos K = \frac{KL^2 + KM^2 - LM^2}{2\cdot KL\cdot KM}
Substitute the algebraic side lengths :: \cos K = \frac{(2x)^2 + x^2 - (\sqrt{7}x)^2}{2(2x)(x)}
Simplify numerator and denominator :: \cos K = \frac{4x^2 + x^2 - 7x^2}{4x^2} = \frac{-2x^2}{4x^2} = -\frac{1}{2}
Solve for $\hat{K} \in (0^\circ;\ 180^\circ)$ :: \hat{K} = \cos^{-1}\!\left(-\frac{1}{2}\right) = 120^\circ
```

> **Common mistakes**
>
> - **Forgetting the final square root:** $a^2 = b^2 + c^2 - 2bc\cos A$ solves for $a^2$, not $a$! Always take $\sqrt{\phantom{x}}$ at the end.
> - **Breaking order of operations (BODMAS):** in $7^2 + 10^2 - 2(7)(10)\cos 60^\circ$, you **cannot** subtract $2(7)(10)$ from $149$ before multiplying by $\cos 60^\circ$.
> - **Putting the wrong side first in $\cos A = \frac{b^2 + c^2 - a^2}{2bc}$:** the side subtracted ($-a^2$) is *always* the side opposite the angle you want.

## 5. Practice

Try each question on paper before opening the worked answer.

```questions
Q: In $\triangle ABC$, $b = 9\text{ cm}$, $c = 13\text{ cm}$, and $\hat{A} = 47^\circ$. Calculate $a$ correct to two decimal places.
A: $a^2 = 9^2 + 13^2 - 2(9)(13)\cos 47^\circ \approx 81 + 169 - 159{,}59 = 90{,}41 \implies a \approx 9{,}51\text{ cm}$.
---
Q: A triangle has sides $6\text{ cm}$, $9\text{ cm}$, and $12\text{ cm}$. Calculate the smallest and largest angles to one decimal place.
A: Smallest angle $\theta_{\min}$ opposes side $6$: $\cos\theta_{\min} = \dfrac{9^2 + 12^2 - 6^2}{2(9)(12)} = \dfrac{189}{216} = 0{,}875 \implies \theta_{\min} \approx 29{,}0^\circ$. Largest angle $\theta_{\max}$ opposes side $12$: $\cos\theta_{\max} = \dfrac{6^2 + 9^2 - 12^2}{2(6)(9)} = \dfrac{-27}{108} = -0{,}25 \implies \theta_{\max} \approx 104{,}5^\circ$.
---
Q: In $\triangle DEF$, $\hat{D} = 135^\circ$, $e = 4\sqrt{2}$, and $f = 5$. Find the exact length of $d$ without a calculator.
A: $d^2 = (4\sqrt{2})^2 + 5^2 - 2(4\sqrt{2})(5)\cos 135^\circ = 32 + 25 - 40\sqrt{2}\left(-\dfrac{1}{\sqrt{2}}\right) = 57 + 40 = 97$, so $d = \sqrt{97}$.
---
Q: **(Exam level)** In cyclic quadrilateral $PQRS$, $PQ = 5$, $QR = 7$, $RS = 6$, and $PS = 4$. Show that $\cos Q = \dfrac{11}{59}$ and hence calculate diagonal $PR$ to two decimal places.
A: Apply the cosine rule to $PR$ in $\triangle PQR$ and $\triangle PSR$: $PR^2 = 5^2 + 7^2 - 2(5)(7)\cos Q = 74 - 70\cos Q$, and $PR^2 = 4^2 + 6^2 - 2(4)(6)\cos S = 52 - 48\cos S$. Since $PQRS$ is cyclic, $\hat{S} = 180^\circ - \hat{Q}$ ($\text{opp }\angle\text{s of cyclic quad}$), so $\cos S = -\cos Q$. Thus $74 - 70\cos Q = 52 + 48\cos Q \implies 22 = 118\cos Q \implies \cos Q = \dfrac{22}{118} = \dfrac{11}{59}$. Substituting back gives $PR^2 = 74 - 70\left(\dfrac{11}{59}\right) \approx 60{,}95 \implies PR \approx 7{,}81$.
```

## Further help

- Siyavula Mathematics Grade 11, [7.3 The cosine rule](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/07-trigonometry-03).
