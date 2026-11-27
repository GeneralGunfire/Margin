---
title: Charles's law, Gay-Lussac's law and the ideal gas equation
subject: physical-sciences
topic: Ideal gases and thermal properties
part: Chemistry
term: 3
subtopic: Kinetic theory and gas laws
order: 912
pages: []
---

> **What you'll learn:** how temperature (in **kelvin!**) drives gas volume (**Charles's Law**) and gas pressure (**Gay-Lussac's Law**), how to combine all three gas laws into **$\dfrac{p_1 V_1}{T_1} = \dfrac{p_2 V_2}{T_2}$**, and how to use the **Ideal Gas Equation ($pV = nRT$)** with strict SI units!
>
> **Prerequisites:** Boyle's Law and basic mole concept ($n = m/M$).
>
> **Why this matters:** almost every calculation mistake in Term 3 gas questions comes from one of two traps: forgetting to convert **$^\circ\text{C} \to \text{K}$**, or plugging $\text{dm}^3$ and $\text{kPa}$ into $pV = nRT$ without converting to **$\text{m}^3$** and **$\text{Pa}$**!

## The idea in plain language

Why can a sealed aerosol can explode if thrown into a fire, while a party balloon shrinks in a freezer?

When you heat a gas, its molecules gain **kinetic energy** and move **faster**:
1. **If the container has rigid walls (constant volume $V$, like an aerosol can or car tyre):** faster molecules slam harder and more often into the walls $\implies$ **pressure increases linearly with kelvin temperature ($p \propto T$)** — **Gay-Lussac's Law**.
2. **If the container can expand freely at constant pressure (like a loose balloon or frictionless piston):** faster molecules push the walls outward until collision force drops back down to match outside air pressure $\implies$ **volume increases linearly with kelvin temperature ($V \propto T$)** — **Charles's Law**.

### Why MUST temperature ALWAYS be in Kelvin?

Suppose a balloon is at $10^\circ\text{C}$ and you warm it to $20^\circ\text{C}$. Did its volume double? **NO!** $0^\circ\text{C}$ is only the freezing point of water — molecules are still zooming at hundreds of metres per second!
At **$-273^\circ\text{C}$ ($0\ \text{K}$, absolute zero)**, particle motion stops and ideal-gas graphs extrapolate straight to zero! That is why proportionality ONLY works from absolute zero:

$$T(\text{K}) = t(^\circ\text{C}) + 273$$

- $10^\circ\text{C} = 283\ \text{K}$ and $20^\circ\text{C} = 293\ \text{K}$ (only a tiny $3{,}5\%$ rise!).

### Definitions to memorise

```definition
title: Charles's Law
The volume of an enclosed gas is directly proportional to its kelvin (absolute) temperature provided the pressure remains constant ($\dfrac{V_1}{T_1} = \dfrac{V_2}{T_2}$).
```

```definition
title: Pressure Law (Gay-Lussac's Law)
The pressure of an enclosed gas is directly proportional to its kelvin (absolute) temperature provided the volume remains constant ($\dfrac{p_1}{T_1} = \dfrac{p_2}{T_2}$).
```

## Formulas and unit rules

```formula
title: Combined Gas Law and Ideal Gas Equation
formula: \frac{p_1 V_1}{T_1} = \frac{p_2 V_2}{T_2} \qquad\text{(constant moles } n\text{)}
formula: pV = nRT \qquad\text{where } R = 8{,}31\ \text{J·K}^{-1}\text{·mol}^{-1}
p | pressure: any matching unit in Combined Law; MUST be **Pa** ($\times 10^3$ from kPa) in $pV = nRT$ | Pa | scalar
V | volume: any matching unit in Combined Law; MUST be **m³** in $pV = nRT$ | m³ | scalar
T | **absolute temperature in KELVIN** ($t_{^\circ\text{C}} + 273$) in ALL gas laws! | K | scalar
n | number of moles of gas ($n = m / M$) | mol | scalar
R | universal gas constant ($8{,}31\ \text{J·K}^{-1}\text{·mol}^{-1}$) | J·K⁻¹·mol⁻¹ | scalar constant
use: Combined Law when one state changes to another (fixed n); pV = nRT when solving for moles n, mass m, or molar mass M at a single state!
```

### Mandatory SI conversion cheatsheet for $pV = nRT$

Because $R = 8{,}31\ \text{J·K}^{-1}\text{·mol}^{-1}$ and $1\ \text{J} = 1\ \text{Pa·m}^3$, **$p \times V$ MUST equal $\text{Pa} \times \text{m}^3$**:

| Quantity | Given unit | Conversion to strict SI for $pV = nRT$ |
| --- | --- | --- |
| Pressure $p$ | $\text{kPa}$ | $\times 1\,000$ ($10^3$) $\to \text{Pa}$ |
| Volume $V$ | $\text{dm}^3$ (litres) | $\div 1\,000$ ($\times 10^{-3}$) $\to \text{m}^3$ |
| Volume $V$ | $\text{cm}^3$ ($\text{mL}$) | $\div 1\,000\,000$ ($\times 10^{-6}$) $\to \text{m}^3$ |
| Temperature $T$ | $^\circ\text{C}$ | $+ 273 \to \text{K}$ |

*(Neat shortcut: notice that if $p$ is in $\text{kPa}$ ($\times 10^3$) and $V$ is in $\text{dm}^3$ ($\times 10^{-3}$), the $10^3 \times 10^{-3}$ cancels — **still show the conversion explicitly** in your working so you earn full SI substitution marks!)*

```diagram
name: gas-laws-explorer
```

## Worked examples

### Example 1 (Combined Gas Law): weather balloon rising into cold upper air

A weather balloon is filled with helium to a volume of $2{,}5\ \text{m}^3$ at ground level ($27^\circ\text{C}$ and $101\ \text{kPa}$). It rises to a high altitude where the pressure is $40\ \text{kPa}$ and temperature is $-33^\circ\text{C}$. Calculate its new volume.

```worked
title: Example 1 (Combined Gas Law)
Given: $p_1 = 101\ \text{kPa}$, $V_1 = 2{,}5\ \text{m}^3$, $T_1 = 27 + 273 = 300\ \text{K}$;
$p_2 = 40\ \text{kPa}$, $T_2 = -33 + 273 = 240\ \text{K}$
Unknown: $V_2$
Equation: $\dfrac{p_1 V_1}{T_1} = \dfrac{p_2 V_2}{T_2}$
Substitution: $\dfrac{(101)(2{,}5)}{300} = \dfrac{(40) V_2}{240}$
Substitution: $V_2 = \dfrac{101 \times 2{,}5 \times 240}{300 \times 40} = \dfrac{60\,600}{12\,000} = 5{,}05\ \text{m}^3$
Answer: $V_2 = 5{,}05\ \text{m}^3$.
```

### Example 2 (Ideal Gas Equation $pV = nRT$): finding the mass of trapped $\text{CO}_2$

A $500\ \text{cm}^3$ steel cylinder contains carbon dioxide gas ($\text{CO}_2$, $M = 44\ \text{g·mol}^{-1}$) at $200\ \text{kPa}$ and $27^\circ\text{C}$. Calculate the mass of $\text{CO}_2$ inside the cylinder.

```steps
title: Solving mass via pV = nRT with strict SI units
step: **Convert every variable to strict SI:**
- $p = 200\ \text{kPa} = 200\,000\ \text{Pa}$ ($2{,}00 \times 10^5\ \text{Pa}$)
- $V = 500\ \text{cm}^3 = 500 \times 10^{-6}\ \text{m}^3 = 5{,}0 \times 10^{-4}\ \text{m}^3$
- $T = 27 + 273 = 300\ \text{K}$
step: **Solve for moles $n$:**
$pV = nRT \implies n = \dfrac{pV}{RT} = \dfrac{(2{,}00 \times 10^5)(5{,}0 \times 10^{-4})}{(8{,}31)(300)} = \dfrac{100}{2\,493} = 0{,}04011\ \text{mol}$.
step: **Convert moles to mass:**
$m = nM = (0{,}04011\ \text{mol})(44\ \text{g·mol}^{-1}) = 1{,}77\ \text{g}$.
```

```tryit
title: Spot the classic Celsius mistake!
prompt: Gas in a rigid cylinder at $20^\circ\text{C}$ has pressure $100\ \text{kPa}$. A student heats it to $40^\circ\text{C}$ and says: *"Temperature doubled, so pressure doubles to $200\ \text{kPa}$!"* Calculate the TRUE final pressure.
hint: Convert $20^\circ\text{C}$ and $40^\circ\text{C}$ to kelvin first!
answer: $T_1 = 293\ \text{K}$, $T_2 = 313\ \text{K}$.
$p_2 = p_1 \times \dfrac{T_2}{T_1} = 100 \times \dfrac{313}{293} = \mathbf{106{,}8\ \text{kPa}}$ — NOT $200\ \text{kPa}$! (To double the kelvin pressure from $293\ \text{K}$, you must heat it to $586\ \text{K} = 313^\circ\text{C}$!)
```

> **Common mistakes**
>
> - Substituting $^\circ\text{C}$ straight into Charles, Gay-Lussac, Combined Gas Law, or $pV = nRT$ (instant zero marks on substitution!).
> - Using $V$ in $\text{cm}^3$ or $\text{dm}^3$ inside $pV = nRT$ without converting to $\text{m}^3$, making $n$ off by $1\,000$ or $1\,000\,000$!
> - Thinking a $V$-vs-$t(^\circ\text{C})$ graph passes through $(0;\ 0)$: in **$^\circ\text{C}$**, the straight line crosses the temperature axis at **$-273^\circ\text{C}$** (only a $V$-vs-$T(\text{K})$ graph passes through $(0;\ 0)$!).

## Practice

```questions
Q: A fixed mass of gas occupies $3{,}0\ \text{dm}^3$ at $27^\circ\text{C}$ and constant pressure. Calculate its volume when heated to $127^\circ\text{C}$.
A: $T_1 = 300\ \text{K}$, $T_2 = 400\ \text{K}$.
$\dfrac{V_1}{T_1} = \dfrac{V_2}{T_2} \implies \dfrac{3{,}0}{300} = \dfrac{V_2}{400} \implies V_2 = 4{,}0\ \text{dm}^3$.
---
Q: A car tyre is inflated to $220\ \text{kPa}$ on a cold morning at $7^\circ\text{C}$. After highway driving, the air inside heats up to $42^\circ\text{C}$ while tyre volume stays constant. Calculate the new tyre pressure.
A: $T_1 = 7 + 273 = 280\ \text{K}$, $T_2 = 42 + 273 = 315\ \text{K}$.
$\dfrac{p_1}{T_1} = \dfrac{p_2}{T_2} \implies p_2 = 220 \times \dfrac{315}{280} = 247{,}5\ \text{kPa}$.
---
Q: Calculate the volume (in $\text{dm}^3$) occupied by $0{,}50\ \text{mol}$ of nitrogen gas at $25^\circ\text{C}$ and $100\ \text{kPa}$.
A: $T = 298\ \text{K}$, $p = 100 \times 10^3\ \text{Pa}$.
$V = \dfrac{nRT}{p} = \dfrac{(0{,}50)(8{,}31)(298)}{100\,000} = 0{,}01238\ \text{m}^3 = 12{,}38\ \text{dm}^3$.
```

## Further help

- Siyavula Physical Sciences Grade 11, [7.2 Ideal gas laws](https://www.siyavula.com/read/za/physical-sciences/grade-11/ideal-gases/07-ideal-gases-02).
