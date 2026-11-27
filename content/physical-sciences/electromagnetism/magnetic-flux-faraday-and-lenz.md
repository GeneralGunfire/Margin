---
title: Magnetic flux, Faraday's law and Lenz's law
subject: physical-sciences
topic: Electromagnetism
part: Physics
term: 2
subtopic: Magnetic fields and induction
order: 512
pages: []
---

> **What you'll learn:** what magnetic flux ($\Phi = BA\cos\theta$) measures, why only a **changing** magnetic flux induces an emf (Faraday's Law), how to use **Lenz's Law** to predict induced current direction effortlessly, and why $\theta$ in $\Phi = BA\cos\theta$ is a classic angle trap.
>
> **Prerequisites:** magnetic fields around loops/solenoids and the Right-Hand Solenoid Rule.
>
> **Why this matters:** Faraday's Law is how power stations, wind turbines, and bicycle dynamos generate almost all of the world's electricity — and Grade 11/12 exams test both the calculation $\varepsilon = -N\dfrac{\Delta\Phi}{\Delta t}$ and Lenz's Law explanations.

## The idea in plain language

Oersted showed that a current creates a magnetic field. Michael Faraday asked the opposite question: *"Can a magnetic field create a current?"*

When he held a strong magnet stationary inside a coil, **nothing happened** — the meter sat at zero! Only while he **pushed the magnet in, pulled it out, rotated the coil, or switched the magnetic field on/off** did current surge!

Why? Electricity is induced only when the amount of magnetic field threading through the loop — called **magnetic flux ($\Phi$)** — **CHANGES over time ($\Delta\Phi \neq 0$)**.

Think of magnetic flux $\Phi$ like **rain falling through a hoop**:
- Bigger hoop area ($A$) $\implies$ catches more rain ($\Phi$ larger).
- Stronger downpour ($B$) $\implies$ catches more rain ($\Phi$ larger).
- **Tilt of the hoop ($\theta$):** hold the hoop flat horizontally ($\theta = 0^\circ$ between the rain and the normal line sticking perpendicular out of the hoop) and maximum rain passes through ($\cos 0^\circ = 1$). Turn the hoop edge-on ($\theta = 90^\circ$ between field and normal) and **zero** rain passes through ($\cos 90^\circ = 0$)!

### Definitions to memorise

```definition
title: Magnetic flux ($\Phi$)
Magnetic flux is a measure of the number of magnetic field lines passing perpendicularly through a surface area: $\Phi = B A \cos\theta$ (unit: weber, Wb).
```

```definition
title: Faraday's Law of Electromagnetic Induction
The magnitude of the induced emf across the ends of a conductor is directly proportional to the rate of change in the magnetic flux linkage with the conductor.
```

```definition
title: Lenz's Law
The direction of the induced current is such that it opposes the change in magnetic flux that produced it.
```

## Formulas

```formula
title: Magnetic flux and Faraday's Law
formula: \Phi = B A \cos\theta
formula: \varepsilon = -N \frac{\Delta\Phi}{\Delta t} = -N \frac{\Phi_f - \Phi_i}{\Delta t}
\Phi | magnetic flux through one loop | Wb (weber, $1\ \text{Wb} = 1\ \text{T·m}^2$) | scalar
B | magnetic field strength (flux density) | T (tesla) | vector
A | area of the loop ($l \times b$ or $\pi r^2$, convert $\text{cm}^2 \to \text{m}^2$ by $\times 10^{-4}$!) | m² | scalar
\theta | angle between magnetic field $\vec{B}$ and the **NORMAL** (perpendicular) to the coil! | degrees (°) | scalar
N | number of turns (loops) in the coil | dimensionless | scalar
\varepsilon | induced electromotive force (emf / voltage) | V (volt) | scalar
\Delta t | time interval over which the flux changes | s | scalar
use: check whether the given angle is from the coil's PLANE or from the NORMAL! If a question says "coil plane makes 30° with B", then θ = 90° − 30° = 60°.
```

### Understanding Lenz's Law ("nature hates change!")

```diagram
name: faraday-lenz-explorer
```

Look closely at the explorer above as you click **"Push North IN"** vs **"Pull North OUT"**:
- **Push North pole IN:** magnetic flux rightward through the coil is **increasing**. The coil tries to **oppose** the approaching North pole by creating its own **North pole on the right face** to push back against you! (Right-hand solenoid rule tells you the induced current direction immediately.)
- **Pull North pole OUT:** magnetic flux is **decreasing**. The coil hates losing flux, so it creates a **South pole on the right face** to try to pull the departing North pole back!

In short: **induced currents always fight whatever change you are making** (which is why you must do mechanical work to push a magnet into a closed coil — conserving energy!).

## Worked examples

### Example 1 (area + angle trap): tilting a circular coil

A circular coil of **80 turns** and **radius $5{,}0\ \text{cm}$** sits inside a uniform magnetic field of $0{,}40\ \text{T}$. Initially the **plane of the coil is perpendicular** to the field. Over $0{,}25\ \text{s}$, the coil is rotated until its **plane makes an angle of $30^\circ$** with the magnetic field. Calculate the magnitude of the induced emf.

```worked
title: Example 1
Given: $N = 80$, $r = 5{,}0\ \text{cm} = 0{,}050\ \text{m}$, $B = 0{,}40\ \text{T}$, $\Delta t = 0{,}25\ \text{s}$.
Initial: plane $\perp B \implies$ normal is **parallel** to $B$, so $\theta_i = 0^\circ$.
Final: plane makes $30^\circ$ with $B \implies$ normal makes $\theta_f = 90^\circ - 30^\circ = 60^\circ$ with $B$!
Unknown: $|\varepsilon|$
Equation: $A = \pi r^2$, $\Phi = BA\cos\theta$, and $\varepsilon = -N\dfrac{\Phi_f - \Phi_i}{\Delta t}$
Substitution: $A = \pi (0{,}050)^2 = 7{,}854 \times 10^{-3}\ \text{m}^2$
Substitution: $\Phi_i = (0{,}40)(7{,}854 \times 10^{-3})\cos 0^\circ = 3{,}142 \times 10^{-3}\ \text{Wb}$
Substitution: $\Phi_f = (0{,}40)(7{,}854 \times 10^{-3})\cos 60^\circ = 1{,}571 \times 10^{-3}\ \text{Wb}$
Substitution: $\varepsilon = -80\left(\dfrac{1{,}571 \times 10^{-3} - 3{,}142 \times 10^{-3}}{0{,}25}\right) = -80\left(\dfrac{-1{,}571 \times 10^{-3}}{0{,}25}\right) = +0{,}503\ \text{V}$
Answer: $|\varepsilon| = 0{,}50\ \text{V}$.
```

### Example 2 (changing B field + Ohm's law): coil connected to a resistor

A flat square coil of $200$ turns and area $0{,}020\ \text{m}^2$ sits perpendicular to a magnetic field ($\theta = 0^\circ$). The field increases uniformly from $0{,}15\ \text{T}$ to $0{,}65\ \text{T}$ in $0{,}40\ \text{s}$. If the total circuit resistance is $5{,}0\ \Omega$, calculate the induced current.

```steps
title: From Faraday's Law to induced current
step: Calculate change in flux: $\Delta\Phi = (B_f - B_i)A\cos 0^\circ = (0{,}65 - 0{,}15)(0{,}020)(1) = 0{,}010\ \text{Wb}$.
step: Calculate magnitude of induced emf: $|\varepsilon| = N\dfrac{|\Delta\Phi|}{\Delta t} = 200 \times \dfrac{0{,}010}{0{,}40} = 5{,}0\ \text{V}$.
step: Apply Ohm's Law: $I = \dfrac{|\varepsilon|}{R} = \dfrac{5{,}0}{5{,}0} = 1{,}0\ \text{A}$.
```

```tryit
title: Spot the angle trap and unit trap!
prompt: A rectangular coil of $4{,}0\ \text{cm} \times 5{,}0\ \text{cm}$ lies flat in a $0{,}50\ \text{T}$ magnetic field such that the magnetic field is **parallel to the plane of the coil**. What is the magnetic flux through the coil?
hint: Convert $\text{cm}^2$ only if needed — first check what angle $\theta$ the **normal** makes with $\vec{B}$!
answer: **Zero ($\Phi = 0\ \text{Wb}$)!** If the field runs parallel to the coil's flat surface, zero field lines poke *through* the opening ($\theta = 90^\circ$ between $\vec{B}$ and the normal, so $\cos 90^\circ = 0$). Even converting $A = 20 \times 10^{-4}\ \text{m}^2$, $\Phi = 0$.
```

> **Common mistakes**
>
> - Using $\theta = 30^\circ$ when a question says *"the plane of the coil makes $30^\circ$ with the magnetic field"*. Always draw the normal ($90^\circ$ to the coil) and use $\theta = 90^\circ - 30^\circ = 60^\circ$.
> - Converting $\text{cm}^2$ to $\text{m}^2$ by dividing by $100$ instead of **$10\,000$ ($10^4$)**! Always convert lengths to metres *before* multiplying ($0{,}04\ \text{m} \times 0{,}05\ \text{m} = 0{,}0020\ \text{m}^2$).
> - Thinking a *large* stationary magnetic field induces a large emf. **Only $\Delta\Phi / \Delta t$ (change!) induces emf.** A constant $10\ \text{T}$ field gives $\varepsilon = 0\ \text{V}$!

## Practice

```questions
Q: A $150$-turn circular coil of area $0{,}012\ \text{m}^2$ sits with its normal parallel to a $0{,}30\ \text{T}$ magnetic field. The field is switched off completely in $0{,}050\ \text{s}$. Calculate the magnitude of the induced emf.
A: $\Phi_i = (0{,}30)(0{,}012)\cos 0^\circ = 3{,}6 \times 10^{-3}\ \text{Wb}$, $\Phi_f = 0$.
$|\varepsilon| = N\dfrac{|\Delta\Phi|}{\Delta t} = 150 \times \dfrac{3{,}6 \times 10^{-3}}{0{,}050} = 10{,}8\ \text{V}$.
---
Q: A bar magnet's **South pole** is pulled rapidly **away** from the right end of a solenoid. Which magnetic pole is induced at the right end of the solenoid, and why?
A: **North pole.** Pulling the South pole away decreases the flux; by Lenz's Law, the coil opposes this decrease by pulling back on the departing South pole — which requires attracting it with an induced **North pole** on the right end.
---
Q: A $50$-turn square loop of side $10\ \text{cm}$ is pulled completely out of a $0{,}80\ \text{T}$ field (perpendicular to the loop) in $0{,}20\ \text{s}$. Calculate the induced emf.
A: $A = (0{,}10\ \text{m})^2 = 0{,}010\ \text{m}^2$.
$\Delta\Phi = 0 - (0{,}80)(0{,}010)(1) = -0{,}0080\ \text{Wb}$.
$|\varepsilon| = 50 \times \dfrac{0{,}0080}{0{,}20} = 2{,}0\ \text{V}$.
```

## Further help

- Siyavula Physical Sciences Grade 11, [10.3 Faraday's law of electromagnetic induction](https://www.siyavula.com/read/za/physical-sciences/grade-11/electromagnetism/10-electromagnetism-03).
