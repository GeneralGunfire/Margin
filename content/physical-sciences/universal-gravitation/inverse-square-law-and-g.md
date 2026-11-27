---
title: Newton's law of universal gravitation
subject: physical-sciences
topic: Newton's law of universal gravitation
part: Physics
term: 1
subtopic: Universal gravitation
order: 311
pages: []
---

> **What you'll learn:** why every two masses in the universe attract each other, how to calculate gravitational force and gravitational acceleration ($g = \dfrac{GM}{r^2}$) on any planet or orbit, and how to solve "what happens if $r$ doubles?" ratio questions without a calculator.
>
> **Prerequisites:** Newton's Second and Third Laws, scientific notation ($6{,}67 \times 10^{-11}$), and converting km to m.
>
> **Why this matters:** universal gravitation explains both why apples fall and why planets stay in orbit — and DBE Paper 1 always tests **inverse-square ratios** plus planet-surface $g$ calculations (and compares them directly to Coulomb's law later in Term 1).

## The idea in plain language

Why does an apple fall towards the Earth instead of floating sideways? Newton realised the exact same invisible pull that drops an apple also bends the Moon's straight-line motion into an orbit around Earth!

Every object with mass pulls on **every other object with mass** across empty space:
- **More mass $\implies$ stronger pull:** double either mass ($m_1$ or $m_2$), and the force doubles ($F \propto m_1 m_2$).
- **Greater distance $\implies$ rapidly weaker pull (inverse-square law):** imagine light spreading out from a lamp onto spheres of radius $r$. At distance $2r$, the same influence spreads over $2^2 = 4$ times the area, so the force drops to **$\frac{1}{4}$**! At distance $3r$, the force drops to **$\frac{1}{9}$**.

Crucial distance trap: **$r$ is ALWAYS measured from CENTRE to CENTRE** of the two bodies — never from surface to surface! If a satellite orbits at altitude $h$ above Earth's surface, the distance from Earth's centre is $r = R_{\text{Earth}} + h$.

### Definition to memorise

```definition
title: Newton's Law of Universal Gravitation
Each body in the universe attracts every other body with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centres.
```

## Formulas

```formula
title: Universal gravitational force and gravitational field acceleration (g)
formula: F = \frac{G m_1 m_2}{r^2}
formula: g = \frac{G M}{r^2}
F | magnitude of the mutual gravitational attraction | N | vector (attractive along line joining centres)
G | universal gravitational constant ($6{,}67 \times 10^{-11}\ \text{N·m}^2\text{·kg}^{-2}$) | N·m²·kg⁻² | scalar constant
m_1,\ m_2 | masses of the two bodies | kg | scalar
r | distance between the **centres** of the two bodies ($R_{\text{planet}} + h$) | m | scalar
M | mass of the planet / central body | kg | scalar
g | gravitational acceleration at distance r from centre of M | m·s⁻² | vector (towards planet centre)
use: F = Gm₁m₂/r² for the force between any two masses; g = GM/r² for gravitational acceleration on a planet or at altitude h.
```

Notice how $g = \dfrac{GM}{r^2}$ comes straight from setting weight equal to universal gravitation:
$$mg = \frac{GMm}{r^2} \implies g = \frac{GM}{r^2}$$
The falling object's mass $m$ cancels out! That is why **all objects fall at the same acceleration $g$** at a given altitude, regardless of whether they are heavy or light!

```diagram
name: inverse-square-explorer
```

Use the explorer above to compare $F \propto \dfrac{1}{r^2}$: double $r$ from $1\times$ to $2\times$ and watch the force plummet to $25\%$ ($\frac{1}{4}$)!

## Worked examples

### Example 1 (standard substitution + altitude trap): satellite in orbit

Calculate the gravitational force exerted by the Earth ($M_E = 5{,}98 \times 10^{24}\ \text{kg}$, radius $R_E = 6{,}38 \times 10^6\ \text{m}$) on a $500\ \text{kg}$ weather satellite orbiting at an altitude of $400\ \text{km}$ above the Earth's surface.

First convert altitude to metres and add Earth's radius!
$$r = R_E + h = 6{,}38 \times 10^6\ \text{m} + 0{,}40 \times 10^6\ \text{m} = 6{,}78 \times 10^6\ \text{m}$$

```worked
title: Example 1
Given: $M_E = 5{,}98 \times 10^{24}\ \text{kg}$, $m = 500\ \text{kg}$, $r = 6{,}78 \times 10^6\ \text{m}$, $G = 6{,}67 \times 10^{-11}\ \text{N·m}^2\text{·kg}^{-2}$
Unknown: $F$
Equation: $F = \dfrac{G M_E m}{r^2}$
Substitution: $F = \dfrac{(6{,}67 \times 10^{-11})(5{,}98 \times 10^{24})(500)}{(6{,}78 \times 10^6)^2}$
Substitution: $F = \dfrac{1{,}994 \times 10^{17}}{4{,}597 \times 10^{13}} = 4\,338\ \text{N}$
Answer: $F = 4{,}34 \times 10^3\ \text{N}$ towards the centre of the Earth.
```

Check: why isn't an astronaut in orbit "zero gravity"? At $400\ \text{km}$ up, gravity is still $\dfrac{4338}{4900} \approx 88{,}5\%$ as strong as on Earth's surface! Astronauts float because both they and the space station are in continuous **free fall** around Earth!

### Example 2 (planetary comparison / ratio method): planet X

Planet X has **twice** the mass of Earth ($M_X = 2M_E$) and **half** the radius of Earth ($R_X = \frac{1}{2}R_E$). If an astronaut weighs $700\ \text{N}$ on Earth, what is her weight on the surface of Planet X?

Do **not** plug in $6{,}67 \times 10^{-11}$ — use the algebraic ratio method!

```steps
title: Solving inverse-square ratio questions cleanly
step: Write the reference formula on Earth: $w_E = \dfrac{G M_E m}{R_E^2} = 700\ \text{N}$.
step: Write the new formula on Planet X in terms of Earth's values:
$w_X = \dfrac{G (2M_E) m}{(\frac{1}{2}R_E)^2}$.
step: Pull all numbers out to the front! Careful: $(\frac{1}{2})^2 = \frac{1}{4}$ in the **denominator**:
$w_X = \dfrac{2}{\frac{1}{4}} \cdot \left(\dfrac{G M_E m}{R_E^2}\right) = 8 \cdot w_E$.
step: Multiply: $w_X = 8 \times 700\ \text{N} = 5\,600\ \text{N}$.
```

### Example 3 (gravitational acceleration on Mars)

Mars has mass $6{,}42 \times 10^{23}\ \text{kg}$ and radius $3{,}39 \times 10^6\ \text{m}$. Calculate the gravitational acceleration $g_{\text{Mars}}$ on the surface of Mars.

$$g_{\text{Mars}} = \frac{GM}{r^2} = \frac{(6{,}67 \times 10^{-11})(6{,}42 \times 10^{23})}{(3{,}39 \times 10^6)^2} = \frac{4{,}282 \times 10^{13}}{1{,}149 \times 10^{13}} = 3{,}73\ \text{m·s}^{-2}.$$

```compare
title: Mass vs Weight (favourite Paper 1 conceptual question)
left: Mass ($m$)
- Amount of matter in a body (measure of inertia).
- Scalar quantity, measured in **kg**.
- **Stays identical everywhere** in the universe (Moon, Mars, deep space).
right: Weight ($w = F_g = mg$)
- Gravitational force exerted on the mass by a planet/body.
- Vector quantity, measured in **N** (always towards planet centre).
- **Changes** with location because $g = \dfrac{GM}{r^2}$ changes!
```

```tryit
title: Quick ratio check: how far for quarter weight?
prompt: How far **above Earth's surface** (in multiples of Earth's radius $R_E$) must a probe travel for Earth's gravitational pull on it to drop to $\frac{1}{9}$ of its surface weight?
hint: $F \propto \dfrac{1}{r^2}$, where $r$ is measured from Earth's **centre**! Careful: the question asks for height **above the surface**!
answer: To drop to $\frac{1}{9}$, centre-to-centre distance $r$ must triple to $3R_E$. Since Earth's radius $R_E$ is already from centre to surface, height above the surface is $h = 3R_E - R_E = \mathbf{2R_E}$.
```

> **Common mistakes**
>
> - Forgetting to square $r$ in $F = \dfrac{Gm_1m_2}{r^2}$ or $g = \dfrac{GM}{r^2}$.
> - Using altitude $h$ instead of **$R_{\text{planet}} + h$** for centre-to-centre distance $r$.
> - Confusing $G$ ($6{,}67 \times 10^{-11}\ \text{N·m}^2\text{·kg}^{-2}$, universal constant everywhere) with $g$ ($9{,}8\ \text{m·s}^{-2}$ on Earth's surface, varies with planet and height).
> - In Newton's Third Law with gravity: Earth ($6 \times 10^{24}\ \text{kg}$) and a falling $1\ \text{kg}$ apple pull on **each other** with the **exact same force** ($9{,}8\ \text{N}$)! You just don't see Earth move because $a_E = 9{,}8 / (6 \times 10^{24}) \approx 0$.

## Practice

```questions
Q: Two spheres of mass $50\ \text{kg}$ and $80\ \text{kg}$ have their centres $2{,}0\ \text{m}$ apart. Calculate the magnitude of the gravitational force between them.
A: $F = \dfrac{Gm_1m_2}{r^2} = \dfrac{(6{,}67 \times 10^{-11})(50)(80)}{(2{,}0)^2} = \dfrac{2{,}668 \times 10^{-7}}{4{,}0} = 6{,}67 \times 10^{-8}\ \text{N}$ (attractive).
Notice how tiny gravity is between everyday objects — you need planet-sized masses to feel it!
---
Q: The gravitational force between two asteroids is $F$. How does the force change if the mass of one asteroid is tripled and the distance between their centres is halved?
A: $F_{\text{new}} = \dfrac{G(3m_1)m_2}{(\frac{1}{2}r)^2} = \dfrac{3}{\frac{1}{4}} F = 12F$ (12 times greater).
---
Q: A rover has a mass of $120\ \text{kg}$ on Earth. On the Moon, $g_{\text{Moon}} = 1{,}62\ \text{m·s}^{-2}$. State the rover's (a) mass and (b) weight on the Moon.
A: (a) Mass is unchanged: $m = 120\ \text{kg}$.
(b) Weight on the Moon: $w_{\text{Moon}} = mg_{\text{Moon}} = 120 \times 1{,}62 = 194{,}4\ \text{N}$ towards the centre of the Moon.
---
Q: Planet Z has three times the mass of Earth and twice the radius of Earth. Calculate the gravitational acceleration $g_Z$ on the surface of Planet Z (take $g_{\text{Earth}} = 9{,}8\ \text{m·s}^{-2}$).
A: $g_Z = \dfrac{G(3M_E)}{(2R_E)^2} = \dfrac{3}{4} g_{\text{Earth}} = \dfrac{3}{4}(9{,}8) = 7{,}35\ \text{m·s}^{-2}$.
```

## Further help

- Siyavula Physical Sciences Grade 11, [2.4 Newton's law of universal gravitation](https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-04).
