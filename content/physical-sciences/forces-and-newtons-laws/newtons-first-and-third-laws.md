---
title: Newton's first and third laws
subject: physical-sciences
topic: Forces, friction and Newton's laws
part: Physics
term: 1
subtopic: Newton's laws of motion
order: 221
pages: []
---

> **What you'll learn:** what inertia really means, how Newton's First Law links zero net force to constant velocity (not just rest), and how to identify true Newton's Third Law action-reaction pairs without falling for the "equal and opposite on the same object" trap.
>
> **Prerequisites:** resultant force and free-body diagrams.
>
> **Why this matters:** CAPS Paper 1 almost always asks for exact definitions of Newton's First and Third Laws *and* a conceptual explanation (such as why passengers lunge forward when a taxi brakes, or why action-reaction forces never cancel).

## The idea in plain language

### Newton's First Law: motion wants to keep doing what it is already doing

Everyday life tricks us into thinking *"moving things naturally slow down unless you keep pushing them."* That is only because friction and air resistance are secretly pushing backwards! On smooth ice or in deep space, a gliding puck keeps moving in a straight line at constant speed **with zero push**.

Forces do not *cause* velocity — forces cause **changes in velocity** (acceleration). When $\vec{F}_{\text{net}} = 0$, the object's velocity simply does not change:
- If it was at rest ($v = 0$), it stays at rest.
- If it was moving at $15\ \text{m·s}^{-1}$ north, it keeps moving at $15\ \text{m·s}^{-1}$ north forever.

This natural resistance to any change in motion is called **inertia**, and **mass** is the measure of how much inertia an object has (a loaded truck has far more inertia than a bicycle).

### Newton's Third Law: forces always come in matched two-object twins

You cannot push the wall without the wall pushing you back just as hard. Every force is an interaction between **two different objects**, $A$ and $B$:

- Force 1 acts **on $B$ by $A$**.
- Force 2 acts **on $A$ by $B$**.

They are **identical in magnitude**, **opposite in direction**, act along the same line, and exist for the exact same time — whether the objects are moving, accelerating, or at rest!

### Definitions to memorise

```definition
title: Newton's First Law of Motion
A body will remain in its state of rest or motion at constant velocity unless a non-zero resultant / net force acts on it.
```

```definition
title: Inertia
Inertia is the resistance of a body to a change in its state of motion (or rest). Mass is a measure of inertia.
```

```definition
title: Newton's Third Law of Motion
When object A exerts a force on object B, object B simultaneously exerts an oppositely directed force of equal magnitude on object A.
```

## Spotting true Third Law pairs vs balanced forces

Why don't Newton's Third Law pairs cancel each other out to zero? Because **they act on two DIFFERENT objects**! You only ever add forces that act on the *same* object in a free-body diagram.

Here is the foolproof test: swap the two nouns!
- **"Earth pulls down on book"** $\longleftrightarrow$ **"Book pulls up on Earth"** (SAME type: gravity, DIFFERENT objects: Earth & book $\implies$ **Third Law pair!**).
- **"Table pushes up on book ($N$)"** vs **"Earth pulls down on book ($w$)"** $\implies$ **NOT a Third Law pair!** Both act on the **same object** (the book), and one is a contact force while the other is gravity. If the table breaks, $N$ vanishes while $w$ stays!

```compare
title: Balanced forces (First Law) vs Action-Reaction pair (Third Law)
left: Balanced forces on one object (1st Law)
- Both forces act on the **SAME object** (e.g. $N$ up on the book and $w$ down on the book).
- Therefore they CAN cancel out to give $F_{\text{net}} = 0$.
- Can be different types of forces (e.g. contact normal force and gravity) and do not have to be equal if the surface accelerates (like inside an accelerating lift!).
right: Action-Reaction pair (3rd Law)
- Act on **TWO DIFFERENT objects** ($A$ on $B$, and $B$ on $A$).
- Therefore they **NEVER** cancel each other out!
- Always the **exact same type** of force (both gravitational, or both normal contact, or both tension) and **ALWAYS** equal in magnitude, even during collisions or accelerations.
```

## Worked examples

### Example 1 (conceptual exam staple): seatbelt physics

A passenger sits in a minibus travelling at $80\ \text{km·h}^{-1}$ without wearing a seatbelt. The driver slams on the brakes. Use Newton's laws to explain why the passenger appears to be thrown forward against the windscreen.

```steps
title: Structuring a 3-mark CAPS explanation
step: Before braking, both the minibus and the passenger are moving forward at $80\ \text{km·h}^{-1}$.
step: When the brakes are applied, a large backwards friction force acts on the **minibus** to slow it down, while no large backwards force acts immediately on the unrestrained passenger.
step: By **Newton's First Law (inertia)**, the passenger's body continues moving forward at $80\ \text{km·h}^{-1}$ (constant velocity) until the dashboard or windscreen exerts a net backwards force on the passenger. (A seatbelt would provide that net backwards force safely!)
```

### Example 2 (Third Law myth-buster): truck vs mosquito

A $10\,000\ \text{kg}$ truck collides head-on with a tiny $2\ \text{g}$ ($0{,}002\ \text{kg}$) mosquito at $100\ \text{km·h}^{-1}$.
(a) Compare the magnitude of the force the truck exerts on the mosquito with the force the mosquito exerts on the truck.
(b) Why does the mosquito suffer catastrophic acceleration while the truck barely slows down?

**Answer:**
- (a) By **Newton's Third Law**, the forces have the **exact same magnitude** (and opposite directions): $F_{\text{truck on mosquito}} = F_{\text{mosquito on truck}}$.
- (b) Acceleration depends on mass ($a = F_{\text{net}} / m$). The same force divided by a tiny $0{,}002\ \text{kg}$ mass gives the mosquito an enormous acceleration, while the same force divided by $10\,000\ \text{kg}$ produces a tiny acceleration for the truck!

### Example 3 (identifying all Third Law pairs for a block on a table)

A block sits on a table, which sits on the Earth. List two distinct Newton's Third Law pairs involving the block:
1. **Gravitational pair:** Earth pulls downward on the block $\longleftrightarrow$ Block pulls upward on the Earth (same magnitude $w$).
2. **Contact (normal) pair:** Table pushes upward on the block $\longleftrightarrow$ Block pushes downward on the table (same magnitude $N$).

```tryit
title: Which force is the Third Law partner to friction?
prompt: A car accelerates forward because its tyres push backwards on the road with $3\,200\ \text{N}$ of static friction. State the magnitude and direction of the Third Law reaction force, and name the object it acts on.
hint: Swap the two nouns: "tyres on road" $\to$ "road on tyres".
answer: The **road** exerts a forward static frictional force of **$3\,200\ \text{N}$** on the **car's tyres**. That forward push from the road is what actually accelerates the car forward!
```

> **Common mistakes**
>
> - Writing in Newton's First Law that an object continues moving at "constant speed" instead of **"constant velocity"** (straight line!).
> - Claiming the normal force $N$ and weight $w$ on a stationary crate are a Newton's Third Law pair.
> - Saying the heavier object in a collision exerts a larger force on the lighter object. The forces are always **equal**; only the *accelerations* differ.

## Practice

```questions
Q: A spacecraft in deep space shuts off its engines while travelling at $12\,000\ \text{m·s}^{-1}$ far from all stars and planets. Describe its subsequent motion and name the law involved.
A: It continues moving in a straight line at a constant velocity of $12\,000\ \text{m·s}^{-1}$ because $F_{\text{net}} = 0$ (**Newton's First Law**).
---
Q: A book of weight $18\ \text{N}$ rests on a table inside a stationary lift.
(a) What is the Newton's Third Law reaction to Earth's gravitational pull on the book?
(b) Suppose the lift now accelerates **upwards** so that the normal force becomes $22\ \text{N}$. What force does the book now exert downward on the table?
A: (a) The book exerts an upward gravitational pull of $18\ \text{N}$ on the Earth.
(b) By Newton's Third Law (swapping "table on book" and "book on table"), the book pushes downward on the table with **$22\ \text{N}$**!
---
Q: A horse pulls a cart forward. A student argues: "By Newton's Third Law, the cart pulls back on the horse with an equal force, so the horse can never accelerate the cart!" Explain the flaw in the student's argument.
A: The force of the horse on the cart and the force of the cart on the horse act on **different objects**, so they never cancel. The cart accelerates forward as long as the horse's pull on the cart is greater than friction on the cart. Meanwhile, the horse accelerates forward because the ground pushes forward on the horse's hooves more strongly than the cart pulls backward on the horse!
```

## Further help

- Siyavula Physical Sciences Grade 11, [2.3 Newton's laws](https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-03).
