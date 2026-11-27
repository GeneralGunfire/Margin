---
title: Force diagrams and free-body diagrams
subject: physical-sciences
topic: Forces, friction and Newton's laws
part: Physics
term: 1
subtopic: Forces and free-body diagrams
order: 212
pages: []
---

> **What you'll learn:** the exact difference between a **force diagram** and a **free-body diagram**, the strict DBE marking rules for arrows and labels, and which vectors must NEVER appear in a free-body diagram.
>
> **Prerequisites:** weight, normal force, tension, friction, and resolving weight on an inclined plane.
>
> **Why this matters:** almost every Paper 1 mechanics question starts with *"Draw a labelled free-body diagram showing all the forces acting on the block"* (worth 3–5 easy marks — or 3–5 lost marks if you draw velocity, components alongside the original force, or arrows pointing the wrong way).

## The idea in plain language

Before writing equations, physicists strip a complicated real-world drawing down to a clean sketch of **just the forces acting ON one chosen object**.

Think of two ways to draw this:
- A **force diagram** keeps a simple box/object shape and draws arrows starting where each force acts (at the surface, at the centre of mass, or at the rope attachment).
- A **free-body diagram (FBD)** replaces the entire object with **one single dot** (representing its centre of mass) and draws every force arrow **pointing AWAY from the dot** in the direction that force pushes or pulls.

Every force arrow must represent a real force exerted by an external agent on that object. If you cannot name *who* or *what* is pushing or pulling, that force does not exist!

```compare
title: Force diagram vs Free-body diagram (DBE marking rules)
left: Force diagram
- Shows a simple outline of the object (e.g. a rectangle or circle).
- Force arrows start at the point of application (e.g. normal force from the bottom surface, tension from the rope hook).
- Useful for visualising slopes and contact points.
right: Free-body diagram (most common in exams)
- Object is drawn as a **single dot**.
- Every arrow **starts on the dot and points away** from the dot (tail on dot, arrowhead pointing outwards).
- Labels must use clear physics words or accepted symbols ($w$ / $F_g$, $N$ / $F_N$, $T$ / $F_T$, $f_k$ / $f_s$, $F_A$).
```

### The golden rules for full FBD marks

1. **Draw one arrow per real force acting ON the chosen object.** Ignore forces that the object exerts on *other* objects (e.g. don't draw the block pushing down on the table — only draw the table pushing up on the block, $N$).
2. **All tails touch the dot** and point **away** from it — even if the force is a "push" (move the push arrow straight through so its tail sits on the dot and its head points forward!).
3. **Never draw components AND the original force together** unless asked for a *resolved* diagram. In a standard DBE FBD of a block on a ramp, draw **weight ($w$)** straight vertically down — do **not** draw $w_\parallel$ and $w_\perp$ instead of $w$, and definitely do not draw all three together (that double-counts weight!).
4. **Never draw $\vec{v}$, $\vec{a}$, or $\vec{F}_{\text{net}}$ on a free-body diagram.** Velocity and acceleration are *effects*, not forces.
5. **Arrow lengths matter approximately:** if vertical forces balance ($a_y = 0$), make upward and downward arrows roughly equal; if accelerating right, make the rightward pull noticeably longer than leftward friction.

```diagram
name: incline-forces-explorer
```

Look closely at the explorer above:
- Notice the solid vectors are the **three real forces** acting on a block sliding freely on an incline: **$w$** straight down, **$N$** perpendicular out of the ramp, and **$f$** parallel to the surface (opposing the motion — toggle between *"Sliding down"* and *"Pushed up"* to watch friction flip direction!).
- The dashed vectors ($w_\parallel = mg\sin\theta$ and $w_\perp = mg\cos\theta$) are **dashed calculation helpers** — keep them out of your final graded free-body diagram!

## Worked examples

### Example 1: Crate pulled horizontally at constant velocity across a rough floor

A rope pulls a crate to the right across a rough horizontal floor at constant velocity. Draw a labelled free-body diagram for the crate.

```steps
title: Building the free-body diagram step by step
step: Draw a single central dot for the crate.
step: Earth pulls straight down $\to$ draw arrow straight down, labelled **weight ($w$ / $F_g$)**.
step: Floor supports perpendicularly up $\to$ draw arrow straight up (same length as $w$, since $a_y = 0$), labelled **normal force ($N$ / $F_N$)**.
step: Rope pulls right $\to$ draw arrow to the right, labelled **applied force / tension ($F_A$ / $T$)**.
step: Rough floor opposes sliding $\to$ draw arrow to the left (**same length** as $F_A$ because velocity is constant, so $F_{\text{net}} = 0$!), labelled **kinetic friction ($f_k$)**.
```

### Example 2: Block accelerating UP a rough incline pulled by a rope

A motor pulls a block **up** a rough $30^\circ$ incline with a rope parallel to the slope. Draw a labelled free-body diagram for the block.

How many real forces touch or pull the block? Four:
1. **Weight ($w$ / $F_g$):** straight vertically downwards (NOT perpendicular to the ramp!).
2. **Normal force ($N$ / $F_N$):** perpendicular out of the ramp (tilted up-and-left).
3. **Tension ($T$ / $F_T$):** parallel up the ramp.
4. **Kinetic friction ($f_k$):** parallel **down** the ramp (opposing the upward sliding motion!).

Notice that $T$ and $f_k$ point along the slope, $N$ points perpendicular to the slope, and $w$ points straight down toward Earth's centre.

### Example 3: Projectile / ball in the air (no air resistance)

A cricket ball has just left a bowler's hand and is moving upwards and to the right through the air. Ignore air resistance. Draw a free-body diagram for the ball while in mid-air.

**Answer:** **One single arrow straight downwards: weight ($w$ / $F_g$).**

Once the ball leaves the hand, the hand no longer touches it — there is **no** "force of the throw" travelling with the ball! Its upward-right motion continues because of inertia, not because a forward force is pushing it.

```tryit
title: Spot the mistake in this student's FBD
prompt: A learner draws a free-body diagram for a box sliding **down** a frictionless ramp: she draws $w$ down, $N$ up-left, and an arrow pointing down the ramp labelled "$F_{\text{motion}}$". What is wrong?
hint: What physical object pulls the box down the ramp? Did she double-count something?
answer: There is NO separate "$F_{\text{motion}}$" arrow! Gravity (already drawn as $w$) pulls the box down the ramp via its component $w_\parallel = mg\sin\theta$. Only two forces act on a frictionless ramp: **$w$** straight down and **$N$** perpendicular out of the slope.
```

> **Common mistakes**
>
> - Drawing a phantom "force of motion" or velocity arrow on a moving object when nothing is pushing it.
> - Drawing weight $w$ perpendicular to an inclined plane instead of straight vertically downwards.
> - Pointing friction the wrong way when an object is pushed *up* a ramp (friction points *down* to oppose upward motion) vs *sliding down* a ramp (friction points *up* to oppose downward motion).
> - Drawing arrows pointing *into* the dot instead of *away* from the dot. (Markers subtract marks for arrowheads pointing onto the dot!)

## Practice

```questions
Q: List every force (name and exact direction) that must appear on a free-body diagram for a book resting at rest on a horizontal table.
A: Two forces only:
1. Weight ($w$ / $F_g$) straight vertically downwards.
2. Normal force ($N$ / $F_N$) straight vertically upwards (equal in length to $w$).
---
Q: A crate is pulled right across a rough horizontal floor by a rope angled $25^\circ$ above the horizontal. List all forces and directions in its FBD, and state which two arrows balance vertically.
A: Four forces from the dot:
1. Weight ($w$) straight down.
2. Normal force ($N$) straight up (shorter than $w$!).
3. Applied force / tension ($F_A$ / $T$) angled $25^\circ$ above the right horizontal.
4. Kinetic friction ($f_k$) straight left.
Vertically, $N + F_A\sin 25^\circ$ balances $w$.
---
Q: Two blocks $A$ (on a rough horizontal table) and $B$ (hanging vertically off the edge) are joined by a light string over a frictionless pulley. Compare the forces acting on $A$ vs $B$.
A: Block $A$ (4 forces): weight $w_A$ down, normal force $N$ up, tension $T$ towards the pulley, kinetic friction $f_k$ away from the pulley.
Block $B$ (2 forces): weight $w_B$ down, tension $T$ straight up (no normal force and no friction because it is not touching a surface!).
```

## Further help

- Siyavula Physical Sciences Grade 11, [2.2 Forces](https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-02).
