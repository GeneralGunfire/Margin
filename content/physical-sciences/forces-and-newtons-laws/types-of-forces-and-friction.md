---
title: Types of forces and friction
subject: physical-sciences
topic: Forces, friction and Newton's laws
part: Physics
term: 1
subtopic: Forces and free-body diagrams
order: 211
pages: []
---

> **What you'll learn:** the everyday forces acting in mechanics problems (weight, normal force, tension, applied force, static friction and kinetic friction), why the normal force is *not* always equal to weight, and how to calculate friction accurately.
>
> **Prerequisites:** resolving a force into horizontal/vertical or slope components.
>
> **Why this matters:** almost every error in Newton's Second Law questions happens *before* writing $F_{\text{net}} = ma$ — either by assuming $N = mg$ blindly or by confusing static friction with maximum static friction.

## The idea in plain language

A force is simply a push or a pull acting between two objects. In Grade 11 mechanics, you meet five forces again and again:

1. **Gravitational force / weight ($\vec{w}$ or $\vec{F}_g$):** Earth's downward pull on an object's mass, always pointing **straight vertically downwards** towards the centre of the Earth ($w = mg$, with $g = 9{,}8\ \text{m·s}^{-2}$).
2. **Normal force ($\vec{N}$ or $\vec{F}_N$):** the contact push from a surface on an object, always pointing **perpendicular ($90^\circ$) out of the surface**. Notice: "normal" in maths means perpendicular! The surface only pushes back as hard as it gets squashed against the object.
3. **Tension ($\vec{T}$ or $\vec{F}_T$):** the pulling force transmitted along a taut rope, string, or cable. A rope can only **pull**, never push.
4. **Applied force ($\vec{F}_A$):** an external push or pull from a person, engine, or spring.
5. **Frictional force ($\vec{f}_s$ or $\vec{f}_k$):** the surface drag force **parallel to the surface** that opposes sliding (or the *tendency* to slide).

### Why static friction is smart (and kinetic friction is constant)

Imagine pushing gently on a heavy fridge on a kitchen floor.
- Push with $20\ \text{N}$: the fridge stays still, so static friction pushes back with **exactly $20\ \text{N}$** (not $f_s^{\max}$!).
- Push with $80\ \text{N}$: static friction rises to **$80\ \text{N}$**.
- At $150\ \text{N}$, the fridge is *just about to budge* — static friction has hit its ceiling, **$f_s^{\max} = \mu_s N$**.
- Once it starts sliding, microscopic surface bumps skim over each other more easily, so **kinetic friction $f_k = \mu_k N$** is usually slightly *less* than $f_s^{\max}$ and stays constant regardless of how hard you keep pushing.

### Definitions to memorise

```definition
title: Normal force (N)
The normal force is the force or the component of a force which a surface exerts on an object in contact with it, and which is perpendicular to the surface.
```

```definition
title: Frictional force (f)
The frictional force is the force that opposes the motion of an object and which acts parallel to the surface.
```

```definition
title: Static frictional force (f_s)
The static frictional force is the force that opposes the tendency of motion of a stationary object relative to a surface.
```

```definition
title: Kinetic frictional force (f_k)
The kinetic frictional force is the force that opposes the motion of a moving object relative to a surface.
```

## Formulas

```formula
title: Weight and frictional forces
formula: w = F_g = mg
formula: f_s^{\max} = \mu_s N \qquad\text{and}\qquad f_k = \mu_k N
w | gravitational force (weight) | N | vector (always straight down)
m | mass of the object | kg | scalar
g | gravitational acceleration ($9{,}8\ \text{m·s}^{-2}$ near Earth) | m·s⁻² | vector
N | normal force perpendicular to surface | N | vector
\mu_s,\ \mu_k | coefficients of static and kinetic friction | dimensionless (no unit) | scalar
f_s^{\max} | maximum static friction (just before sliding starts) | N | vector
f_k | kinetic friction (while sliding) | N | vector
use: always find N FIRST from perpendicular equilibrium before calculating friction!
```

### How normal force $N$ changes in four classic setups

Never assume $N = mg$ without checking the vertical (or perpendicular) forces!

| Situation | Perpendicular force balance | Normal force $N$ |
| --- | --- | --- |
| Flat floor, horizontal push | $N = w$ | $mg$ |
| Flat floor, rope pulls **up** at angle $\theta$ | $N + F\sin\theta = mg$ | $mg - F\sin\theta$ (lighter contact, less friction) |
| Flat floor, push **down** at angle $\theta$ | $N = mg + F\sin\theta$ | $mg + F\sin\theta$ (squashed harder, more friction) |
| Ramp inclined at angle $\theta$ | $N = w_\perp$ | $mg\cos\theta$ |

```diagram
name: incline-forces-explorer
```

## Worked examples

### Example 1 (basic): pulling at an angle reduces friction

A $20\ \text{kg}$ crate slides horizontally to the right across a rough floor ($\mu_k = 0{,}25$) while pulled by a rope at $100\ \text{N}$ angled $30^\circ$ **above** the horizontal. Calculate (a) the normal force $N$ and (b) the kinetic frictional force $f_k$.

```worked
title: Example 1
Given: $m = 20\ \text{kg}$, $g = 9{,}8\ \text{m·s}^{-2}$, $F = 100\ \text{N}$ at $30^\circ$ above horizontal, $\mu_k = 0{,}25$
Unknown: $N$ and $f_k$
Equation: Vertical equilibrium: $N + F\sin 30^\circ = mg \implies N = mg - F\sin 30^\circ$, then $f_k = \mu_k N$
Substitution: $w = (20)(9{,}8) = 196\ \text{N}$, and $F_y = 100\sin 30^\circ = 50\ \text{N}$ upwards
Substitution: $N = 196\ \text{N} - 50\ \text{N} = 146\ \text{N}$ upwards
Substitution: $f_k = (0{,}25)(146\ \text{N}) = 36{,}5\ \text{N}$
Answer: $N = 146\ \text{N}$ upwards; $f_k = 36{,}5\ \text{N}$ to the left (opposing motion).
```

### Example 2 (medium): pushed downwards at an angle on a horizontal floor

A gardener pushes a $15\ \text{kg}$ lawnmower forward with a force of $90\ \text{N}$ angled $35^\circ$ **below** the horizontal ($\mu_k = 0{,}30$). Find the normal force and kinetic friction.

```steps
title: Solving for N and f_k with a downward push
step: Resolve the $90\ \text{N}$ push: its vertical piece $F_y = 90\sin 35^\circ = 51{,}62\ \text{N}$ pushes **downwards** into the ground.
step: Vertical forces balance ($a_y = 0$): $N = w + F_y = (15)(9{,}8) + 51{,}62 = 147{,}0 + 51{,}62 = 198{,}62\ \text{N}$ upwards.
step: Friction: $f_k = \mu_k N = 0{,}30 \times 198{,}62 = 59{,}59\ \text{N}$ backwards (opposing motion).
```

### Example 3 (exam level): static vs maximum static friction on a slope

A $10\ \text{kg}$ wooden block rests stationary on a ramp inclined at $20^\circ$ to the horizontal. The coefficient of static friction is $\mu_s = 0{,}45$. Calculate (a) the actual static friction holding the block in place, and (b) the maximum static friction available before slipping.

```steps
title: Actual static friction vs maximum ceiling
step: Weight components along and perpendicular to the $20^\circ$ ramp:
$w_\parallel = mg\sin 20^\circ = (10)(9{,}8)\sin 20^\circ = 33{,}52\ \text{N}$ down the slope.
$N = w_\perp = mg\cos 20^\circ = (10)(9{,}8)\cos 20^\circ = 92{,}09\ \text{N}$ perpendicular out of the slope.
step: Since the block is **at rest**, forces parallel to the slope balance: actual static friction $f_s = w_\parallel = 33{,}5\ \text{N}$ up the slope.
step: Maximum possible static friction: $f_s^{\max} = \mu_s N = 0{,}45 \times 92{,}09 = 41{,}4\ \text{N}$. Because $33{,}5\ \text{N} < 41{,}4\ \text{N}$, the block stays put!
```

```tryit
title: Spot the trap: what is the static friction right now?
prompt: A $12\ \text{kg}$ box sits at rest on a flat floor where $\mu_s = 0{,}50$. A learner pulls horizontally with $40\ \text{N}$ and claims $f_s = \mu_s N = 0{,}50 \times 117{,}6 = 58{,}8\ \text{N}$. Why is that physically impossible?
hint: If the box is pulled right with $40\ \text{N}$ and friction pushed left with $58{,}8\ \text{N}$, which way would the box accelerate?!
answer: The box would fly backwards on its own! $58{,}8\ \text{N}$ is only $f_s^{\max}$ (the threshold to start moving). While pulled with $40\ \text{N}$ ($< 58{,}8\ \text{N}$), the box does not move, so actual $f_s = 40\ \text{N}$ opposite the pull.
```

> **Common mistakes**
>
> - Always writing $f = \mu mg$ instead of $f = \mu N$. Whenever there is a tilted force or a ramp, $N \neq mg$.
> - Using $f_s = \mu_s N$ even when the object is stationary under a smaller pull. Static friction equals the pull until the object is *on the verge of slipping*.
> - Thinking kinetic friction depends on surface contact area or speed. On dry surfaces in Grade 11, $f_k = \mu_k N$ depends **only** on surface roughness ($\mu_k$) and the normal force ($N$).

## Practice

```questions
Q: A $40\ \text{kg}$ crate sits on a level floor ($\mu_s = 0{,}40$, $\mu_k = 0{,}25$). (a) Calculate the minimum horizontal force needed to start the crate moving. (b) Once moving, what horizontal force keeps it moving at constant velocity?
A: $N = mg = 40 \times 9{,}8 = 392\ \text{N}$.
(a) Minimum force to overcome $f_s^{\max}$: $f_s^{\max} = \mu_s N = 0{,}40 \times 392 = 156{,}8\ \text{N}$.
(b) At constant velocity $F_{\text{net}} = 0$, so applied force equals kinetic friction: $f_k = \mu_k N = 0{,}25 \times 392 = 98{,}0\ \text{N}$.
---
Q: A $8{,}0\ \text{kg}$ block slides up a $30^\circ$ ramp where $\mu_k = 0{,}20$. Calculate the kinetic frictional force acting on the block and state its direction.
A: $N = mg\cos 30^\circ = (8{,}0)(9{,}8)\cos 30^\circ = 67{,}90\ \text{N}$.
$f_k = \mu_k N = 0{,}20 \times 67{,}90 = 13{,}58\ \text{N}$.
Because the block is sliding **up** the ramp, kinetic friction opposes motion and acts **down the ramp** (parallel to the surface).
---
Q: A $25\ \text{kg}$ sled is pulled across snow ($\mu_k = 0{,}10$) by a rope applying $120\ \text{N}$ at $25^\circ$ above the horizontal. Find the normal force and kinetic friction.
A: $w = 25 \times 9{,}8 = 245\ \text{N}$. Upward pull component: $F_y = 120\sin 25^\circ = 50{,}71\ \text{N}$.
$N = 245 - 50{,}71 = 194{,}29\ \text{N}$ upwards.
$f_k = 0{,}10 \times 194{,}29 = 19{,}43\ \text{N}$ opposite the direction of motion.
```

## Further help

- Siyavula Physical Sciences Grade 11, [2.2 Forces](https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-02).
