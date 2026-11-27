---
title: Connected objects, tensions and pulleys
subject: physical-sciences
topic: Forces, friction and Newton's laws
part: Physics
term: 1
subtopic: Newton's laws of motion
order: 223
pages: []
---

> **What you'll learn:** how to apply Newton's Second Law separately to **each object** in a two-body system (train trucks, hanging pulley blocks, or ramp-plus-hanging-mass), why tension stays the same throughout a light rope, and how to eliminate $T$ simultaneously without sign errors.
>
> **Prerequisites:** free-body diagrams and Newton's Second Law ($\vec{F}_{\text{net}} = m\vec{a}$).
>
> **Why this matters:** connected-object two-equation problems appear in almost **every** Grade 11 Paper 1 and Grade 12 NSC exam. Learning the two-step "separate FBD $\to$ add the two equations" method makes them completely predictable.

## The idea in plain language

Suppose block $A$ ($4\ \text{kg}$) rests on a rough table and is tied by a light inextensible rope over a smooth pulley to a hanging block $B$ ($6\ \text{kg}$). When block $B$ drops by $1\ \text{m}$, block $A$ slides right by $1\ \text{m}$ in the exact same time.

That tight, light, inextensible string enforces **two rigid rules**:
1. **Same acceleration magnitude $a$:** as long as the rope stays taut and doesn't stretch, both blocks speed up together at the exact same rate $a$.
2. **Same tension $T$:** a light rope over a frictionless pulley pulls **towards the middle of the rope** on both objects with the exact same magnitude $T$ (on $A$, $T$ pulls *right*; on $B$, $T$ pulls *up*).

### Crucial exam convention: pick positive ALONG the path of motion!

Never use "east = positive" for $A$ and "up = positive" for $B$ if $B$ is moving **down**! That gives $a$ one sign for $A$ and the opposite sign for $B$, causing sign disasters.
Instead, **follow the rope around the pulley** and define the **direction of motion** as positive for *both* objects:
- For block $A$ on the table: **right** (towards the pulley) is positive $\implies a_A = +a$.
- For hanging block $B$: **downwards** (along the rope's motion) is positive $\implies a_B = +a$.

Look what happens when you write $F_{\text{net}} = ma$ **separately for each block** and then add the two equations: $+T$ in one equation and $-T$ in the other **cancel out cleanly every single time**!

```steps
title: The foolproof two-body method (learns every connected problem)
step: Draw **two separate free-body diagrams** — one for object A and one for object B. (Exam papers explicitly award marks for keeping each object's FBD separate!)
step: Choose **one consistent positive direction along the motion** of the rope (e.g. right for A, down for B).
step: Write $\vec{F}_{\text{net}} = m\vec{a}$ for **object A** (keeping $T$ symbolic).
step: Write $\vec{F}_{\text{net}} = m\vec{a}$ for **object B** (keeping $T$ and $a$ symbolic — exact same $T$ and $a$!).
step: **Add Equation (1) + Equation (2)** so $+T$ and $-T$ vanish, solve for $a$, then substitute $a$ back into either equation to find $T$.
```

> **Exam warning:** In DBE marking guidelines, you must **apply $F_{\text{net}} = ma$ to each object separately** if asked to solve for acceleration *and* tension. Never lump them into $(m_A + m_B)a$ as your primary method unless asked only for system acceleration — writing separate equations gets full marks and avoids subtle friction errors on ramps!

## Worked examples

### Example 1 (table + hanging mass): classic pulley system

Block $A$ ($4{,}0\ \text{kg}$) rests on a rough horizontal table ($\mu_k = 0{,}25$) and is connected by a light inextensible string over a frictionless pulley to block $B$ ($6{,}0\ \text{kg}$), which hangs vertically. The system is released from rest. Calculate (a) the acceleration of the blocks and (b) the tension $T$ in the string.

```diagram
name: incline-forces-explorer
```

Let's solve step-by-step following the motion (**right is positive for $A$; down is positive for $B$**):

1. **Friction on $A$:** $N_A = m_A g = 4{,}0 \times 9{,}8 = 39{,}2\ \text{N}$, so $f_k = \mu_k N_A = 0{,}25 \times 39{,}2 = 9{,}80\ \text{N}$ to the left.
2. **Equation for $A$ (right positive):**
   $$T - f_k = m_A a \implies T - 9{,}80 = 4{,}0\,a \qquad (1)$$
3. **Equation for $B$ (down positive):**
   Weight $w_B = m_B g = 6{,}0 \times 9{,}8 = 58{,}8\ \text{N}$ down; tension $T$ pulls up:
   $$w_B - T = m_B a \implies 58{,}8 - T = 6{,}0\,a \qquad (2)$$
4. **Add $(1) + (2)$:**
   $$(T - 9{,}80) + (58{,}8 - T) = 4{,}0\,a + 6{,}0\,a$$
   $$49{,}0 = 10{,}0\,a \implies a = 4{,}90\ \text{m·s}^{-2}$$
   ($A$ accelerates at $4{,}90\ \text{m·s}^{-2}$ right; $B$ accelerates at $4{,}90\ \text{m·s}^{-2}$ down.)
5. **Find $T$ from Equation (1):**
   $$T = 4{,}0(4{,}90) + 9{,}80 = 19{,}60 + 9{,}80 = 29{,}4\ \text{N}.$$

Sanity check on $T$: for $B$ to accelerate *downwards*, $T$ must be **less** than $w_B$ ($29{,}4\ \text{N} < 58{,}8\ \text{N}$), and for $A$ to accelerate *right*, $T$ must be **greater** than $f_k$ ($29{,}4\ \text{N} > 9{,}8\ \text{N}$). Both checks pass!

### Example 2 (two train trucks / towed blocks): external pull + link rope

Two crates connected by a light horizontal rope are pulled to the right across a rough floor ($\mu_k = 0{,}20$) by a horizontal applied force of $150\ \text{N}$ attached to the front crate ($m_2 = 10\ \text{kg}$). The rear crate has mass $m_1 = 5{,}0\ \text{kg}$. Calculate the acceleration and the tension $T$ in the rope between the two crates.

```worked
title: Example 2 (Towed crates)
Given: $m_1 = 5{,}0\ \text{kg}$, $m_2 = 10\ \text{kg}$, $F_A = 150\ \text{N}$ right, $\mu_k = 0{,}20$. Take right as positive.
Unknown: $a$ and $T$
Equation: Crate 1: $T - f_{k1} = m_1 a$; Crate 2: $F_A - T - f_{k2} = m_2 a$
Substitution: $f_{k1} = (0{,}20)(5{,}0)(9{,}8) = 9{,}80\ \text{N}$; $f_{k2} = (0{,}20)(10)(9{,}8) = 19{,}60\ \text{N}$
Substitution: Eq (1): $T - 9{,}80 = 5{,}0\,a$; Eq (2): $150 - T - 19{,}60 = 10\,a \implies 130{,}40 - T = 10\,a$
Substitution: Add (1) + (2): $120{,}60 = 15{,}0\,a \implies a = 8{,}04\ \text{m·s}^{-2}$
Substitution: Sub into (1): $T = 5{,}0(8{,}04) + 9{,}80 = 50{,}0\ \text{N}$
Answer: $a = 8{,}04\ \text{m·s}^{-2}$ to the right, and $T = 50{,}0\ \text{N}$.
```

Notice something neat: the connecting rope tension $T = 50{,}0\ \text{N}$ is exactly $\dfrac{m_1}{m_1 + m_2} = \dfrac{5}{15} = \dfrac{1}{3}$ of the total pull $150\ \text{N}$ because the rear crate carries one-third of the total mass (and one-third of the friction)!

### Example 3 (incline + hanging mass — DBE classic): which way does it move?

Block $P$ ($8{,}0\ \text{kg}$) rests on a rough ramp inclined at $30^\circ$ ($\mu_k = 0{,}20$) and is connected by a light rope over a pulley at the top of the ramp to a hanging block $Q$ ($6{,}0\ \text{kg}$). The system moves so that $P$ accelerates **up** the ramp and $Q$ accelerates **down**. Calculate $a$ and $T$.

```steps
title: Solving the ramp + hanging mass system
step: Take **up the ramp** as positive for $P$, and **downwards** as positive for $Q$.
step: Forces on $P$ along ramp: $T$ (up), $w_{\parallel P} = (8{,}0)(9{,}8)\sin 30^\circ = 39{,}20\ \text{N}$ (down ramp), $N_P = (8{,}0)(9{,}8)\cos 30^\circ = 67{,}90\ \text{N}$, so $f_k = 0{,}20 \times 67{,}90 = 13{,}58\ \text{N}$ (**down** ramp, opposing upward slide).
Equation for $P$: $T - 39{,}20 - 13{,}58 = 8{,}0\,a \implies T - 52{,}78 = 8{,}0\,a$.
step: Forces on $Q$: $w_Q = (6{,}0)(9{,}8) = 58{,}80\ \text{N}$ (down), $T$ (up).
Equation for $Q$: $58{,}80 - T = 6{,}0\,a$.
step: Add the two equations: $58{,}80 - 52{,}78 = 14{,}0\,a \implies 6{,}02 = 14{,}0\,a \implies a = 0{,}43\ \text{m·s}^{-2}$.
step: Tension: $T = 58{,}80 - 6{,}0(0{,}430) = 56{,}2\ \text{N}$.
```

```tryit
title: What happens if the string suddenly snaps?
prompt: In Example 3 ($P$ moving UP the $30^\circ$ ramp), suppose the string suddenly snaps while $P$ is moving up the ramp. Describe what happens to the acceleration of $Q$ and $P$ immediately after the snap.
hint: Once the string snaps, $T = 0$ immediately! Does $P$ instantly reverse direction, or does it keep moving up while slowing down?
answer: Block $Q$ immediately falls freely with $a = 9{,}8\ \text{m·s}^{-2}$ downwards. Block $P$ still has upward velocity momentarily, so friction stays down the ramp while $T$ disappears: $F_{\text{net}} = -52{,}78\ \text{N}$, so $P$ decelerates rapidly at $6{,}60\ \text{m·s}^{-2}$ **down** the ramp until it stops (and then either stays put or slides back down).
```

> **Common mistakes**
>
> - Assuming $T = m_B g$ for a hanging block while it is accelerating! $T = m_B g$ is ONLY true when $a = 0$. If $B$ accelerates down, $T < m_B g$; if $B$ accelerates up, $T > m_B g$.
> - Using opposite positive conventions for the two blocks (e.g. up positive for $B$ while $B$ moves down), resulting in $+m_A a$ on one equation and $+m_B a$ with the wrong sign when adding.
> - Drawing $T$ pointing the same way on both blocks, or forgetting normal force and friction only act on objects touching a surface (not on the hanging block!).

## Practice

```questions
Q: Two blocks, $m_1 = 3{,}0\ \text{kg}$ and $m_2 = 5{,}0\ \text{kg}$, hang on opposite sides of a light frictionless pulley (an Atwood machine) and are released from rest. Calculate (a) the acceleration and (b) the tension in the string.
A: Since $m_2 > m_1$, $m_2$ accelerates down and $m_1$ accelerates up. Take **up** positive for $m_1$ and **down** positive for $m_2$:
$m_1$: $T - (3{,}0)(9{,}8) = 3{,}0\,a \implies T - 29{,}4 = 3{,}0\,a$
$m_2$: $(5{,}0)(9{,}8) - T = 5{,}0\,a \implies 49{,}0 - T = 5{,}0\,a$
Add: $19{,}6 = 8{,}0\,a \implies a = 2{,}45\ \text{m·s}^{-2}$ ($m_2$ down, $m_1$ up).
$T = 29{,}4 + 3{,}0(2{,}45) = 36{,}75\ \text{N}$.
---
Q: A $20\ \text{kg}$ crate and a $30\ \text{kg}$ crate touch each other on a **smooth** (frictionless) horizontal floor. You push the $20\ \text{kg}$ crate from behind with $100\ \text{N}$ to the right. Find the acceleration and the contact force $F_C$ between the two crates.
A: Take right as positive.
$20\ \text{kg}$ crate: $100 - F_C = 20\,a$; $30\ \text{kg}$ crate: $F_C = 30\,a$.
Add: $100 = 50\,a \implies a = 2{,}0\ \text{m·s}^{-2}$ right.
Contact force: $F_C = 30(2{,}0) = 60\ \text{N}$ (by Newton III, $20\ \text{kg}$ pushes $30\ \text{kg}$ right with $60\ \text{N}$, and $30\ \text{kg}$ pushes $20\ \text{kg}$ left with $60\ \text{N}$).
---
Q: A $4{,}0\ \text{kg}$ block on a frictionless horizontal table is pulled by a light string over a pulley attached to a $1{,}0\ \text{kg}$ hanging block. Calculate $a$ and $T$.
A: $4{,}0\ \text{kg}$ block: $T = 4{,}0\,a$. Hanging $1{,}0\ \text{kg}$ block: $9{,}8 - T = 1{,}0\,a$.
Add: $9{,}8 = 5{,}0\,a \implies a = 1{,}96\ \text{m·s}^{-2}$.
Tension: $T = 4{,}0(1{,}96) = 7{,}84\ \text{N}$.
```

## Further help

- Siyavula Physical Sciences Grade 11, [2.3 Newton's laws](https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-03).
