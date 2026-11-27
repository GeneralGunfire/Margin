---
title: Kinetic molecular theory and Boyle's law
subject: physical-sciences
topic: Ideal gases and thermal properties
part: Chemistry
term: 3
subtopic: Kinetic theory and gas laws
order: 911
pages: []
---

> **What you'll learn:** the five assumptions of the **kinetic molecular theory of an ideal gas**, what pressure and temperature mean at the particle level, how **Boyle's Law ($p_1 V_1 = p_2 V_2$)** works, and when real gases break the ideal-gas rules.
>
> **Prerequisites:** inverse proportion ($p \propto \dfrac{1}{V}$) and basic unit conversions ($\text{cm}^3$, $\text{dm}^3$, $\text{kPa}$, $\text{Pa}$).
>
> **Why this matters:** gas laws explain everything from diving lungs and syringes to car tyres and weather balloons — and Paper 2 loves asking you to explain Boyle's Law **microscopically** (collisions per unit area) as well as sketch $p$ vs $V$ and $p$ vs $\dfrac{1}{V}$ graphs!

## The idea in plain language

Picture billions of tiny gas molecules zipping around wildly inside a sealed syringe:
- **What is gas pressure ($p$)?** Every time molecules slam into the inner walls of the syringe and bounce off, they exert tiny pushes. The total force of all those collisions divided by the wall area is **pressure**.
- **What is temperature ($T$)?** Temperature in **kelvin (K)** is a direct measure of the **average kinetic energy** ($E_k = \frac{1}{2}mv^2$) of the gas particles — hotter means faster!

Now keep the **temperature constant** (same particle speed!) and **amount of gas constant** (sealed syringe, fixed $n$), and push the plunger in to **halve the volume ($V \to \frac{1}{2}V$)**:
- The particles are squeezed into half the space, yet still move at the same average speed.
- They hit the container walls **twice as often** per square centimetre!
- Therefore, **pressure doubles ($p \to 2p$)**! That inverse relationship is **Boyle's Law**.

### Definitions to memorise

```definition
title: Ideal gas (Kinetic Molecular Theory)
An ideal gas is a hypothetical gas whose particles are point masses with **zero volume** themselves, exert **zero intermolecular forces** on each other (except during perfectly elastic collisions), and whose average kinetic energy is directly proportional to absolute temperature in kelvin.
```

```definition
title: Boyle's Law
The pressure of an enclosed gas is inversely proportional to the volume it occupies at constant temperature ($p_1 V_1 = p_2 V_2$).
```

## Formula and graphs

```formula
title: Boyle's Law (constant T and constant moles n)
formula: p_1 V_1 = p_2 V_2
p_1,\ p_2 | initial and final gas pressure (any matching unit: Pa, kPa, or atm) | Pa or kPa | scalar
V_1,\ V_2 | initial and final gas volume (any matching unit: cm³, dm³, or m³) | m³ or dm³ | scalar
use: ONLY valid when temperature (T) and number of moles (n) remain constant! Unlike the Ideal Gas Equation, p₁V₁ = p₂V₂ works in kPa and dm³ directly as long as BOTH sides use the SAME units.
```

```diagram
name: gas-laws-explorer
```

Look closely at the **Boyle's Law** mode in the explorer above:
- **$p$ vs $V$ graph:** a downward-curving **hyperbola** (never touches either axis!).
- **$p$ vs $\dfrac{1}{V}$ graph:** a **straight line passing through the origin $(0; 0)$**, proving $p \propto \dfrac{1}{V}$! Its gradient is $pV = nRT$ (so a hotter temperature gives a *steeper* straight line!).

## Real gases vs Ideal gases (when does Boyle's Law fail?)

No real gas is 100% ideal. Real gases behave most closely like an ideal gas at **low pressure** and **high temperature** (and small non-polar molecules like $\text{He}$ and $\text{H}_2$ are the most ideal!). They deviate sharply in two extreme conditions:

```compare
title: Two conditions where real gases deviate from ideal behaviour
left: Very HIGH pressure (particles crammed close)
- The **actual volume of the gas molecules** is no longer negligible compared to the container volume!
- Measured volume is slightly **larger** than ideal $V$ (since particles themselves take up space, making $pV$ higher than expected).
right: Very LOW temperature (particles moving slowly)
- Slow particles cannot easily escape **intermolecular forces** of attraction!
- Neighbours tug slightly backward on molecules about to hit the wall, reducing collision force $\implies$ measured **pressure is lower** than ideal $p$ (and eventually the gas liquefies!).
```

## Worked examples

### Example 1 (Boyle's Law calculation + microscopic explanation)

A sample of oxygen gas occupies $4{,}0\ \text{dm}^3$ at a pressure of $120\ \text{kPa}$. Assuming temperature remains constant, calculate the new volume if the pressure is increased to $300\ \text{kPa}$.

```worked
title: Example 1
Given: $p_1 = 120\ \text{kPa}$, $V_1 = 4{,}0\ \text{dm}^3$, $p_2 = 300\ \text{kPa}$, $T$ and $n$ constant
Unknown: $V_2$
Equation: $p_1 V_1 = p_2 V_2$
Substitution: $(120\ \text{kPa})(4{,}0\ \text{dm}^3) = (300\ \text{kPa}) V_2$
Substitution: $V_2 = \dfrac{480}{300} = 1{,}6\ \text{dm}^3$
Answer: $V_2 = 1{,}6\ \text{dm}^3$.
```

Notice the sanity check: pressure increased by a factor of $2{,}5$ ($120 \to 300$), so volume dropped by a factor of $2{,}5$ ($4{,}0 \div 2{,}5 = 1{,}6\ \text{dm}^3$).

### Example 2 (testing Boyle's Law table data)

A learner records three readings of pressure and volume for trapped air at $25^\circ\text{C}$:
- Reading 1: $p = 100\ \text{kPa}$, $V = 24{,}0\ \text{cm}^3 \implies pV = 2\,400$
- Reading 2: $p = 150\ \text{kPa}$, $V = 16{,}0\ \text{cm}^3 \implies pV = 2\,400$
- Reading 3: $p = 200\ \text{kPa}$, $V = 11{,}0\ \text{cm}^3 \implies pV = 2\,200$

Why is Reading 3 lower ($2\,200 \neq 2\,400$)? Either some trapped air **leaked out** ($n$ decreased), or the **temperature dropped** slightly, or at extreme high pressure real-gas intermolecular attractions reduced $p$!

```tryit
title: Explain Boyle's Law using particle collisions
prompt: Without using an equation, explain in 2 sentences why pushing a sealed bicycle pump plunger inward (halving the volume at constant temperature) **doubles** the air pressure inside.
hint: Talk about particle **speed** (constant $T$), **distance between walls**, and **collision frequency per unit area**.
answer: Because temperature is constant, the average kinetic energy and speed of the air molecules stay unchanged. Halving the volume packs the molecules into half the space so they collide with the inner walls **twice as frequently per unit surface area**, doubling the pressure.
```

> **Common mistakes**
>
> - Using Boyle's Law when temperature changed! Always check that $T$ is stated as constant; if $T$ changed too, you must use the Combined Gas Law ($\dfrac{p_1 V_1}{T_1} = \dfrac{p_2 V_2}{T_2}$).
> - Thinking that compressing a gas slowly at constant temperature makes the molecules move *faster*. **Average speed depends ONLY on temperature**, not on volume — only **collision frequency** increases!
> - Saying real gases deviate from ideal gases at "low pressure and high temperature" — that's backwards! Low pressure & high temperature is where real gases act **MOST ideal**; they deviate at **HIGH pressure and LOW temperature**.

## Practice

```questions
Q: A scuba tank holds $12\ \text{dm}^3$ of air at $20\,000\ \text{kPa}$. What volume would that air occupy at atmospheric pressure ($100\ \text{kPa}$) at the same temperature?
A: $p_1 V_1 = p_2 V_2 \implies (20\,000)(12) = (100)V_2 \implies V_2 = 2\,400\ \text{dm}^3$.
---
Q: What must remain **constant** for a graph of $p$ vs $\dfrac{1}{V}$ to be a straight line through the origin?
A: **Temperature ($T$)** and **amount/mass of enclosed gas ($n$)**.
---
Q: Why does helium ($\text{He}$) behave much more like an ideal gas at $-100^\circ\text{C}$ than ammonia ($\text{NH}_3$) does?
A: Helium consists of tiny single atoms with very weak **London dispersion forces**, whereas $\text{NH}_3$ is a larger polar molecule with strong **hydrogen bonding** (so $\text{NH}_3$ deviates strongly from ideal-gas assumptions and condenses easily).
```

## Further help

- Siyavula Physical Sciences Grade 11, [7.1 Ideal gases and kinetic molecular theory](https://www.siyavula.com/read/za/physical-sciences/grade-11/ideal-gases/07-ideal-gases-01).
