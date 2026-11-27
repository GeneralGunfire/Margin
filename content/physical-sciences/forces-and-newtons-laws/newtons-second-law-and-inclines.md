---
title: Newton's second law and inclined planes
subject: physical-sciences
topic: Forces, friction and Newton's laws
part: Physics
term: 1
subtopic: Newton's laws of motion
order: 222
pages: []
---

> **What you'll learn:** how acceleration depends on net force and mass ($\vec{F}_{\text{net}} = m\vec{a}$), how to set up positive axes on flat surfaces and inclined planes, and how to link forces with equations of motion (like $v_f = v_i + a\Delta t$ or $\Delta x$).
>
> **Prerequisites:** free-body diagrams, friction ($f_k = \mu_k N$), and resolving weight into $w_\parallel = mg\sin\theta$ and $w_\perp = mg\cos\theta$.
>
> **Why this matters:** $\vec{F}_{\text{net}} = m\vec{a}$ on a rough slope or horizontal floor is the single highest-mark core skill in Grade 11 Paper 1 mechanics.

## The idea in plain language

Newton's First Law tells us what happens when $\vec{F}_{\text{net}} = 0$ (constant velocity). **Newton's Second Law** tells us what happens when forces do **not** balance:

- The **net (resultant) force** decides how fast the object's velocity changes — its **acceleration $\vec{a}$**.
- Doubling the net force doubles the acceleration ($\vec{a} \propto \vec{F}_{\text{net}}$).
- Doubling the mass halves the acceleration ($a \propto \dfrac{1}{m}$): heavier objects are harder to speed up or slow down.
- Crucial direction rule: **acceleration $\vec{a}$ ALWAYS points in the exact same direction as $\vec{F}_{\text{net}}$**, NOT necessarily the direction the object is currently moving! (When braking, $\vec{v}$ points forward while $\vec{F}_{\text{net}}$ and $\vec{a}$ point backward.)

### Definition to memorise

```definition
title: Newton's Second Law of Motion
When a resultant / net force acts on an object, the object will accelerate in the direction of the force at an acceleration directly proportional to the force and inversely proportional to the mass of the object.
```

## Formula

```formula
title: Newton's Second Law
formula: \vec{F}_{\text{net}} = m\vec{a}
F_{\text{net}} | resultant (net) force along the axis of motion | N | vector
m | mass of the object | kg | scalar
a | acceleration in the direction of F_net | m·s⁻² | vector
use: pick a positive direction (usually the direction of motion), write ALL forces along that axis with + or − signs on the left, and set equal to ma on the right.
```

### Why we rotate our axes on an inclined plane

If a block slides along a $30^\circ$ ramp, it accelerates **parallel to the ramp** ($a_\parallel \neq 0$) and does **not** jump off or sink into the ramp ($a_\perp = 0$). So instead of using horizontal/vertical axes (which splits *two* forces — $N$ and $f_k$ — plus $\vec{a}$), rotate your axes to align with the ramp:
- **Perpendicular to slope ($a_\perp = 0$):** $N = w_\perp = mg\cos\theta \implies f_k = \mu_k mg\cos\theta$.
- **Parallel to slope:** only **$w_\parallel = mg\sin\theta$** needs resolving! Every other force ($N$, $f_k$, rope tension $T$) is already lined up!

```diagram
name: incline-forces-explorer
```

```steps
title: Your 5-step exam recipe for any single-object Newton II question
step: Draw a clean free-body diagram (or sketch of forces along the motion axis).
step: **Declare a positive direction** clearly in writing (e.g. "Take down the slope as positive" or "Take right as positive").
step: Find $N$ from perpendicular equilibrium ($a_\perp = 0$), and then find $f_k = \mu_k N$ if friction is present.
step: Write the statement $\vec{F}_{\text{net}} = m\vec{a}$, then expand $\vec{F}_{\text{net}}$ into every parallel force with $+$ (with chosen direction) or $-$ (against chosen direction).
step: Solve for $a$ (or the unknown force), and state both magnitude and direction if a vector is requested.
```

## Worked examples

### Example 1 (horizontal angled pull): sled accelerating on rough ground

A $12\ \text{kg}$ crate is pulled across a rough horizontal floor ($\mu_k = 0{,}20$) by a rope applying $70\ \text{N}$ at $25^\circ$ above the horizontal. Calculate the acceleration of the crate.

```worked
title: Example 1
Given: $m = 12\ \text{kg}$, $F_A = 70\ \text{N}$ at $25^\circ$ above horizontal, $\mu_k = 0{,}20$. Take right as positive.
Unknown: $a$ (magnitude and direction)
Equation: $N + F_A\sin 25^\circ = mg$, $f_k = \mu_k N$, and $F_{\text{net},x} = F_A\cos 25^\circ - f_k = ma$
Substitution: $w = 12 \times 9{,}8 = 117{,}6\ \text{N}$; $F_{Ay} = 70\sin 25^\circ = 29{,}58\ \text{N}$
Substitution: $N = 117{,}6 - 29{,}58 = 88{,}02\ \text{N} \implies f_k = (0{,}20)(88{,}02) = 17{,}60\ \text{N}$
Substitution: $F_{Ax} = 70\cos 25^\circ = 63{,}44\ \text{N}$
Substitution: $63{,}44 - 17{,}60 = 12\,a \implies 45{,}84 = 12\,a \implies a = 3{,}82\ \text{m·s}^{-2}$
Answer: $a = 3{,}82\ \text{m·s}^{-2}$ to the right.
```

### Example 2 (rough inclined plane — sliding down): finding $\mu_k$ from motion

A $5{,}0\ \text{kg}$ block starts from rest and slides $4{,}5\ \text{m}$ **down** a $30^\circ$ incline in $1{,}8\ \text{s}$. Calculate (a) its acceleration down the slope and (b) the coefficient of kinetic friction $\mu_k$ between block and slope.

```steps
title: Linking kinematics and Newton's Second Law
step: **Kinematics first (take down the slope as positive):** $v_i = 0$, $\Delta x = 4{,}5\ \text{m}$, $\Delta t = 1{,}8\ \text{s}$.
$\Delta x = v_i \Delta t + \frac{1}{2}a\Delta t^2 \implies 4{,}5 = 0 + \frac{1}{2}a(1{,}8)^2 \implies a = \dfrac{9{,}0}{3{,}24} = 2{,}778\ \text{m·s}^{-2}$ down the slope.
step: **Forces along the slope:** $w_\parallel = mg\sin 30^\circ = (5{,}0)(9{,}8)(0{,}5) = 24{,}50\ \text{N}$ down the slope. Since the block slides down, friction $f_k$ acts **up** the slope (negative!).
step: Write $F_{\text{net}} = ma$:
$w_\parallel - f_k = ma \implies 24{,}50 - f_k = (5{,}0)(2{,}778) = 13{,}89\ \text{N} \implies f_k = 10{,}61\ \text{N}$.
step: **Perpendicular balance:** $N = mg\cos 30^\circ = (5{,}0)(9{,}8)\cos 30^\circ = 42{,}44\ \text{N}$.
step: Calculate $\mu_k$: $\mu_k = \dfrac{f_k}{N} = \dfrac{10{,}61}{42{,}44} = 0{,}25$.
```

### Example 3 (pushing UP a rough slope): watch the sign of friction!

A worker pushes an $8{,}0\ \text{kg}$ parcel **up** a $25^\circ$ rough ramp ($\mu_k = 0{,}30$) with a force of $75\ \text{N}$ parallel to the ramp. Take **up the ramp as positive** and calculate the parcel's acceleration.

Here **both** $w_\parallel$ AND $f_k$ act **down the ramp** (both oppose the upward push!):
- $w_\parallel = mg\sin 25^\circ = (8{,}0)(9{,}8)\sin 25^\circ = 33{,}13\ \text{N}$ down the ramp.
- $N = mg\cos 25^\circ = (8{,}0)(9{,}8)\cos 25^\circ = 71{,}05\ \text{N}$.
- $f_k = \mu_k N = 0{,}30 \times 71{,}05 = 21{,}32\ \text{N}$ **down** the ramp (because motion is up!).
- $F_{\text{net}} = F_A - w_\parallel - f_k = 75 - 33{,}13 - 21{,}32 = +20{,}55\ \text{N}$.
- $a = \dfrac{20{,}55}{8{,}0} = 2{,}57\ \text{m·s}^{-2}$ up the ramp.

```tryit
title: Check your signs: vertical rocket/lift acceleration
prompt: A $600\ \text{kg}$ lift accelerates **downwards** at $2{,}0\ \text{m·s}^{-2}$. Calculate the tension $T$ in the lift cable.
hint: Take downwards as positive so $a = +2{,}0\ \text{m·s}^{-2}$, OR take upwards as positive so $a = -2{,}0\ \text{m·s}^{-2}$. Either way, $w$ must be larger than $T$!
answer: Take downwards as positive: $w - T = ma \implies (600)(9{,}8) - T = (600)(2{,}0) \implies 5880 - T = 1200 \implies T = 4\,680\ \text{N}$ upwards. (Notice $T < w$ whenever a lift accelerates downwards!)
```

> **Common mistakes**
>
> - Using $F_A = ma$ instead of **$F_{\text{net}} = ma$**. You must include friction and $w_\parallel$ on the left-hand side.
> - Swapping $\sin\theta$ and $\cos\theta$ on an incline: remember at $\theta = 0^\circ$ (flat floor), $w_\parallel$ must be $0$ ($\sin 0^\circ = 0$) and $N = w_\perp$ must be $mg$ ($\cos 0^\circ = 1$)! That instant check works every time.
> - Forgetting that when an object moves *up* a ramp, **both** $w_\parallel$ and $f_k$ pull *down* the ramp.
> - Mixing directions when an object is slowing down: if a block slides right and slows down, $\vec{a}$ points **left** ($a < 0$ if right is positive).

## Practice

```questions
Q: A net force of $24\ \text{N}$ east acts on a $6{,}0\ \text{kg}$ trolley initially moving at $2{,}0\ \text{m·s}^{-1}$ east. Calculate (a) its acceleration and (b) its velocity after $3{,}0\ \text{s}$.
A: Take east as positive.
(a) $a = \dfrac{F_{\text{net}}}{m} = \dfrac{24}{6{,}0} = 4{,}0\ \text{m·s}^{-2}$ east.
(b) $v_f = v_i + a\Delta t = 2{,}0 + (4{,}0)(3{,}0) = 14\ \text{m·s}^{-1}$ east.
---
Q: A $15\ \text{kg}$ crate slides across a rough horizontal floor at $6{,}0\ \text{m·s}^{-1}$ and coasts to a stop (no applied force) over $9{,}0\ \text{m}$. Calculate the coefficient of kinetic friction $\mu_k$.
A: Take direction of motion as positive: $v_i = 6{,}0\ \text{m·s}^{-1}$, $v_f = 0$, $\Delta x = 9{,}0\ \text{m}$.
$v_f^2 = v_i^2 + 2a\Delta x \implies 0 = 36 + 18a \implies a = -2{,}0\ \text{m·s}^{-2}$ (opposing motion).
Only horizontal force is friction: $-f_k = ma \implies f_k = 15 \times 2{,}0 = 30\ \text{N}$.
Since $N = mg = 15 \times 9{,}8 = 147\ \text{N}$, $\mu_k = \dfrac{30}{147} = 0{,}20$.
---
Q: A $10\ \text{kg}$ block slides down a **frictionless** $25^\circ$ ramp. Calculate its acceleration down the ramp. Notice whether the mass actually changes the answer!
A: Take down the ramp as positive: $w_\parallel = mg\sin 25^\circ = ma \implies a = g\sin 25^\circ = 9{,}8\sin 25^\circ = 4{,}14\ \text{m·s}^{-2}$ down the ramp.
Mass $m$ cancels out completely — on a frictionless ramp, a heavy rock and a light coin accelerate at the exact same rate!
---
Q: A $6{,}0\ \text{kg}$ parcel is released from rest on a $35^\circ$ rough incline ($\mu_k = 0{,}25$). Calculate its acceleration down the incline.
A: Take down the incline as positive.
$w_\parallel = (6{,}0)(9{,}8)\sin 35^\circ = 33{,}73\ \text{N}$ down; $N = (6{,}0)(9{,}8)\cos 35^\circ = 48{,}17\ \text{N}$.
$f_k = 0{,}25 \times 48{,}17 = 12{,}04\ \text{N}$ up the incline.
$w_\parallel - f_k = ma \implies 33{,}73 - 12{,}04 = 6{,}0\,a \implies a = \dfrac{21{,}69}{6{,}0} = 3{,}61\ \text{m·s}^{-2}$ down the incline.
```

## Further help

- Siyavula Physical Sciences Grade 11, [2.3 Newton's laws](https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-03).
