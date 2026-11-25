---
title: Mixed 2D problems
youtube_query: Grade 11 sine cosine and area rule problems
subject: pure-mathematics
topic: Trigonometry: sine, cosine and area rules
part: Geometry
term: 3
subtopic: Mixed 2D problems
order: 741
---

> **What you'll learn:** how to look at any 2D triangle problem and choose the fastest rule (SOHCAHTOA, sine rule, cosine rule, or area rule) in five seconds, how to chain two triangles across a shared link side, and how to read angles of elevation, depression, and bearings.
>
> **Prerequisites:** [Sine rule and proof](/library/pure-mathematics/trigonometry-sine-cosine-and-area-rules/sine-rule-and-proof), [Cosine rule and proof](/library/pure-mathematics/trigonometry-sine-cosine-and-area-rules/cosine-rule-and-proof), and [Area rule](/library/pure-mathematics/trigonometry-sine-cosine-and-area-rules/area-rule).

## 1. Which rule should I use?

Never guess a formula blindly. Look at **which information sits inside your current triangle**:

| Given in the triangle | Rule to pick | Why |
| :--- | :--- | :--- |
| Right-angled ($90^\circ$) | **SOHCAHTOA / Pythagoras** | Fastest possible—no sine or cosine rule needed |
| **SAS** (2 sides + included angle) | **Cosine rule** (side) or **Area rule** (area) | No complete opposite $(\text{angle}, \text{side})$ pair yet |
| **SSS** (all 3 sides) | **Cosine rule** (rearranged for angle) | Only rule that handles zero angles |
| **AAS / ASA / SSA** (an opposite angle-side pair) | **Sine rule** | One complete pair $(\hat{A}, a)$ unlocks the rest |

## 2. The two-triangle bridge strategy

Exam Paper 2 almost always joins **two triangles along a shared side** (like $BD$): one triangle has enough measurements to solve, while the target sits in the neighbouring triangle that does *not* have enough data yet.

1. **Mark the bridge:** highlight the side shared by both triangles (e.g. $BD$).
2. **Start in the "rich" triangle** (the one with at least 3 known facts including a side) and solve for the **shared bridge side** $BD$.
3. **Carry $BD$ across** into the second triangle—now it has 3 known facts too!
4. **Watch for angles of elevation/depression:** both are *always* measured from a **horizontal line** (never from a vertical pole!). Because two horizontal lines are parallel, the angle of depression from the top equals the angle of elevation from the bottom (`alt ∠s =`).

```compare
title: Measuring bearings and elevation/depression accurately
left_title: Bearings (clockwise from North)
left:
Start facing straight **North ($000^\circ$)** and turn **clockwise**. "The bearing of $B$ from $A$" means stand at **$A$**, draw a North arrow at **$A$**, and turn clockwise until facing $B$.
right_title: Elevation and depression
right:
Always draw a dashed **horizontal eye-level line** first. Elevation bends **up** from horizontal; depression bends **down** from horizontal.
```

```tryit
title: Quick check (Picking the starting triangle)
prompt: Quadrilateral $ABCD$ is split by diagonal $BD$. In $\triangle ABD$, $AB = 12$, $AD = 9$, and $B\hat{A}D = 64^\circ$. In $\triangle BCD$, $B\hat{D}C = 50^\circ$ and $B\hat{C}D = 70^\circ$. Which side do you calculate first, and which rule finds $BC$ afterward?
hint: Start in $\triangle ABD$ (which has SAS!) to find the shared bridge $BD$.
answer: First use the **cosine rule** in $\triangle ABD$ to find the shared diagonal $BD$ ($BD^2 = 12^2 + 9^2 - 2(12)(9)\cos 64^\circ$). Then carry $BD$ into $\triangle BCD$ and use the **sine rule** ($\dfrac{BC}{\sin 50^\circ} = \dfrac{BD}{\sin 70^\circ}$) to find $BC$.
```

## 3. Worked examples

```steps
title: Example 1 (Two triangles with a shared bridge): From two points $A$ and $B$ on horizontal ground $40\text{ m}$ apart in line with the base $C$ of a vertical mast $CD$, the angles of elevation of top $D$ are $24^\circ$ (from $A$) and $39^\circ$ (from $B$). Calculate the height $CD$ to one decimal place.
Find angles inside the tilted triangle $\triangle ABD$ :: B\hat{D}A = 39^\circ - 24^\circ = 15^\circ \quad (\text{ext }\angle\text{ of }\triangle ABD)
Use the sine rule in $\triangle ABD$ to find the shared hypotenuse $BD$ :: \frac{BD}{\sin 24^\circ} = \frac{40}{\sin 15^\circ} \;\Longrightarrow\; BD = \frac{40\sin 24^\circ}{\sin 15^\circ} \approx 62{,}86\text{ m}
Switch to right-angled $\triangle BCD$ to find vertical height $CD$ :: \sin 39^\circ = \frac{CD}{BD} \;\Longrightarrow\; CD = 62{,}86\sin 39^\circ \approx 39{,}6\text{ m}
```

```steps
title: Example 2 (Bearings + cosine rule): A boat sails $18\text{ km}$ from port $P$ on a bearing of $040^\circ$ to $Q$, then sails $25\text{ km}$ on a bearing of $140^\circ$ to $R$. Calculate the straight-line distance $PR$ to one decimal place.
Draw parallel North lines at $P$ and $Q$ to find the interior angle $P\hat{Q}R$ :: \text{South-of-}Q \text{ makes } 40^\circ \text{ with } QP \text{ (alt }\angle\text{s =)}, \text{ and } 180^\circ - 140^\circ = 40^\circ \text{ with } QR
Add both parts at $Q$ :: P\hat{Q}R = 40^\circ + 40^\circ = 80^\circ
Apply the cosine rule in $\triangle PQR$ (SAS) :: PR^2 = 18^2 + 25^2 - 2(18)(25)\cos 80^\circ \approx 792{,}72
Take the square root :: PR \approx 28{,}2\text{ km}
```

> **Common mistakes**
>
> - **Measuring elevation/depression against the vertical tower:** always measure against the **horizontal** line; the angle against the vertical tower is $90^\circ - \text{elevation}$.
> - **Treating a non-right triangle as right-angled** just because it looks close to $90^\circ$ on the sketch.
> - **Drawing the bearing arrow at the destination instead of the "from" point:** "bearing of $B$ **from** $A$" always starts at **$A$**.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: From the top $T$ of a vertical cliff $TB$ of height $60\text{ m}$, a sailor spots two buoys $C$ and $D$ on the water in the same vertical plane on one side of $B$, at angles of depression of $42^\circ$ and $21^\circ$ respectively. Calculate the distance $CD$ between the buoys to one decimal place.
A: Using horizontal depression = ground elevation ($\text{alt }\angle\text{s =}$): in $\triangle TBC$, $\tan 42^\circ = \frac{60}{BC} \implies BC = \frac{60}{\tan 42^\circ} \approx 66{,}64\text{ m}$. In $\triangle TBD$, $\tan 21^\circ = \frac{60}{BD} \implies BD = \frac{60}{\tan 21^\circ} \approx 156{,}31\text{ m}$. Thus $CD = 156{,}31 - 66{,}64 \approx 89{,}7\text{ m}$.
---
Q: In quadrilateral $KLMN$, $KL = 10$, $LM = 13$, $MN = 11$, $K\hat{L}M = 70^\circ$, and $K\hat{M}N = 55^\circ$. Calculate the area of quadrilateral $KLMN$ to one decimal place.
A: First find $KM$ in $\triangle KLM$: $KM^2 = 10^2 + 13^2 - 2(10)(13)\cos 70^\circ \approx 180{,}07 \implies KM \approx 13{,}42$. Now sum both areas: $\text{Area}(\triangle KLM) = \frac{1}{2}(10)(13)\sin 70^\circ \approx 61{,}08$, and $\text{Area}(\triangle KMN) = \frac{1}{2}(13{,}42)(11)\sin 55^\circ \approx 60{,}46$. Total area $\approx 121{,}5$.
---
Q: A hiker walks $8\text{ km}$ due East from camp $C$ to $A$, then turns and walks $11\text{ km}$ on a bearing of $035^\circ$ to $B$. Calculate the straight-line distance $CB$ to two decimal places.
A: At $A$, the angle between $AC$ (West) and North is $90^\circ$, and the bearing to $B$ adds $35^\circ$ clockwise from North, so $C\hat{A}B = 90^\circ + 35^\circ = 125^\circ$. By the cosine rule: $CB^2 = 8^2 + 11^2 - 2(8)(11)\cos 125^\circ \approx 64 + 121 + 100{,}95 = 285{,}95 \implies CB \approx 16{,}91\text{ km}$.
---
Q: **(Exam level)** In the diagram, $B, C, D$ lie on a straight horizontal line with $CD = x$. Tower $AB$ stands vertically at $B$. From $D$, the angle of elevation of $A$ is $\alpha$, and from $C$, the angle of elevation $A\hat{C}B = \theta$. Prove that $AB = \dfrac{x\sin\alpha\sin\theta}{\sin(\theta - \alpha)}$.
A: In $\triangle ACD$, $C\hat{A}D = \theta - \alpha$ ($\text{ext }\angle\text{ of }\triangle ACD$). By the sine rule in $\triangle ACD$: $\dfrac{AC}{\sin\alpha} = \dfrac{x}{\sin(\theta - \alpha)} \implies AC = \dfrac{x\sin\alpha}{\sin(\theta - \alpha)}$. In right-angled $\triangle ABC$: $\sin\theta = \dfrac{AB}{AC} \implies AB = AC\sin\theta = \dfrac{x\sin\alpha\sin\theta}{\sin(\theta - \alpha)}$.
```

## Further help

- Siyavula Mathematics Grade 11, [7.4 Area, sine, and cosine rules](https://www.siyavula.com/read/za/mathematics/grade-11/trigonometry/07-trigonometry-04).
