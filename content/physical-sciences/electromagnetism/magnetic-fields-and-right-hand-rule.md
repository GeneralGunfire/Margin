---
title: Magnetic fields around currents and the right-hand rule
subject: physical-sciences
topic: Electromagnetism
part: Physics
term: 2
subtopic: Magnetic fields and induction
order: 511
pages: []
---

> **What you'll learn:** how a moving electric current creates a magnetic field around straight wires, flat loops, and solenoids, how to apply the **Right-Hand Rule** in both directions (wire $\to$ field, and solenoid $\to$ poles), and how to read $\otimes$ (into page) and $\odot$ (out of page) notation.
>
> **Prerequisites:** Grade 10 magnetism (north/south poles, magnetic field lines go from N to S outside a magnet) and conventional current direction ($+$ to $-$).
>
> **Why this matters:** motors, speakers, doorbells, and electromagnets all rely on shaping the magnetic field created by an electric current — and knowing which end of a solenoid is North is guaranteed marks in Paper 1.

## The idea in plain language

For centuries, people thought electricity and magnetism were two completely separate forces. Then in 1820, Hans Christian Oersted noticed a compass needle snapping sideways the moment electric current flowed through a wire nearby!

The big insight: **stationary charges create an electric field; MOVING charges (an electric current) create a magnetic field wrapped around the wire.**

Because the magnetic field around a current forms **closed loops** with no magnetic ends inside the wire, we need a clean 3D rule to draw which way the arrows point — and since paper is flat 2D, physicists use two arrow-tip symbols:
- **$\odot$ (dot):** vector pointing **OUT of the page** towards your eyes (think of the sharp tip of an arrow coming straight at you!).
- **$\otimes$ (cross):** vector pointing **INTO the page** away from you (think of the crossed feathers on the tail of an arrow flying away from you!).

### Right-Hand Rules (NEVER use your left hand!)

Every rule below uses **conventional current** (from $+$ to $-$ terminal) and your **RIGHT hand**:

```compare
title: Right-Hand Wire Rule vs Right-Hand Solenoid Rule
left: Straight conductor (Wire Rule)
- **Thumb** points along **conventional current ($I$)**.
- **Curled fingers** show the circular direction of the **magnetic field ($B$)** around the wire.
- Field circles are close together near the wire (stronger field) and space out further away (weaker field).
right: Solenoid / coil (Solenoid Rule)
- **Curled fingers** wrap around the coil in the direction of **conventional current ($I$)**.
- **Extended thumb** points straight towards the **North pole** inside the solenoid (which behaves just like a bar magnet!).
- Outside the solenoid, field lines travel from **North to South**.
```

### How to make an electromagnet stronger

A **solenoid** is simply a long coil of wire wound into a cylinder. Bending straight wire into many loops concentrates the circular magnetic field lines straight down the middle tunnel. You can boost its magnetic strength in three ways:
1. Increase the **current ($I$)**.
2. Increase the **number of turns ($N$)** per unit length.
3. Insert a **soft iron core** inside the coil (soft iron magnetises strongly while current flows, and demagnetises as soon as current turns off!).

## Worked examples

### Example 1: Reading $\odot$ and $\otimes$ on a vertical wire

A straight vertical wire carries conventional current **straight UPWARDS** in the plane of the page. Determine the direction of the magnetic field (a) to the **right** of the wire and (b) to the **left** of the wire.

```steps
title: Applying the Right-Hand Wire Rule on paper
step: Point your **right thumb straight UP** along the wire (matching the upward current).
step: Curl the four fingers of your right hand around the wire.
step: Notice where your fingertips poke **on the right side** of the wire: they point **INTO the page ($\otimes$)**.
step: As your fingers swing behind the wire and come around **on the left side**, they point **OUT of the page ($\odot$)**.
```

### Example 2: Finding the poles of a solenoid

A cylindrical solenoid lies horizontally. Looking from the front, conventional current enters at the **left** end and travels **upwards** across the front windings (and downwards behind the coil). Which end of the solenoid is the North pole?

- Wrap your **right-hand fingers** over the front of the coil pointing **upwards** (over the top and down the back).
- Look at your right **thumb**: it points straight to the **LEFT**!
- Therefore, the **left end is the North pole (N)** and the **right end is the South pole (S)**.

### Example 3: Field around a flat circular loop

A flat circular loop lies flat on your desk carrying clockwise current as viewed from above. Using the wire rule on the top/bottom edges (or curling your right fingers clockwise): your thumb points **straight down into the desk**, so the side facing *up* towards you acts like a **South pole** and the underside acts like a **North pole**.

```diagram
name: faraday-lenz-explorer
```

```tryit
title: Reverse check: find the current from the field!
prompt: A horizontal wire runs left-to-right across the page. Above the wire, the magnetic field points **OUT of the page ($\odot$)**, and below the wire it points **INTO the page ($\otimes$)**. Which way is conventional current flowing?
hint: Curl your right-hand fingers so they come out of the page above the wire and go into the page below it. Which way does your right thumb point?
answer: **To the LEFT!** Try it physically: right thumb left $\implies$ fingers come out ($\odot$) above the wire and poke in ($\otimes$) below the wire.
```

> **Common mistakes**
>
> - Using your **left hand** by accident (especially if you are left-handed and holding a pen in your left hand — put the pen down if needed!).
> - Swapping $\odot$ and $\otimes$: **dot = arrow tip coming OUT toward you; cross = arrow tail feathers going IN away from you**.
> - Thinking magnetic field lines around a straight wire travel *along* the wire instead of forming **concentric circles perpendicular to the wire**.
> - Using steel instead of **soft iron** for an electromagnet core: hard steel stays permanently magnetised after you switch off the current; soft iron turns cleanly off and on.

## Practice

```questions
Q: A straight wire goes vertically into your desk, carrying current **INTO the page ($\otimes$)**. Describe the direction of the magnetic field around it (clockwise or anticlockwise).
A: Point your right thumb straight down into the page ($\otimes$). Your curled right fingers wrap **clockwise** around the wire.
---
Q: A bar magnet's North pole faces the right end of a solenoid. Inside the solenoid, current flows downwards across the front of the coils. Do the magnet and solenoid attract or repel?
A: Curl your right fingers **downwards** across the front of the coils (up the back). Your right thumb points to the **RIGHT**. Therefore the right end of the solenoid is a **North pole**. Since North faces North, they **repel**!
---
Q: A student wraps 200 turns of insulated copper wire around a hollow cardboard tube connected to a $6\ \text{V}$ battery. Give three distinct ways the student can make the magnetic field stronger without changing the wire.
A: 1. Insert a **soft iron core** inside the cardboard tube.
2. Increase the **current** (e.g. increase the battery emf / lower circuit resistance).
3. Wind the turns **closer together** (more turns per unit length).
```

## Further help

- Siyavula Physical Sciences Grade 11, [10.2 Magnetic field associated with a current](https://www.siyavula.com/read/za/physical-sciences/grade-11/electromagnetism/10-electromagnetism-02).
