---
title: Exothermic and endothermic reactions, enthalpy and catalysts
subject: physical-sciences
topic: Energy and chemical change
part: Chemistry
term: 3
subtopic: Enthalpy and energy profiles
order: 1111
pages: []
---

> **What you'll learn:** how to distinguish **exothermic** ($\Delta H < 0$) and **endothermic** ($\Delta H > 0$) reactions on potential-energy profile graphs, how to read and calculate **activation energy ($E_A$)**, **heat of reaction ($\Delta H$)**, and **reverse reaction values**, and exactly what a **catalyst** changes (and does NOT change!).
>
> **Prerequisites:** bond breaking (absorbs energy) vs bond forming (releases energy).
>
> **Why this matters:** Paper 2 always includes a potential-energy vs reaction-coordinate graph with numbers on the $y$-axis asking you to read $\Delta H$, $E_A(\text{forward})$, $E_A(\text{reverse})$, and sketch/calculate the dashed curve for a catalyst!

## The idea in plain language

Imagine pushing a heavy boulder over a hill into the next valley:
- Even if the next valley is **lower** than where you started (so the boulder ends up releasing energy overall!), you **still have to push it UP to the top of the hill first** before it can roll down the other side!

Chemical reactions work the exact same way:
- **Starting height ($H_{\text{reactants}}$):** chemical potential energy stored in reactant bonds.
- **Peak of the hill (Activated complex / Transition state):** the unstable, high-energy arrangement where old bonds are stretched/breaking and new bonds are starting to form.
- **Energy climb from reactants up to the peak = Activation energy ($E_A$):** the minimum energy colliding molecules must bring to get over the hill!
- **Net height difference ($H_{\text{products}} - H_{\text{reactants}}$) = Heat of reaction ($\Delta H$):**
  - If products sit **LOWER** than reactants ($\Delta H < 0$): **net energy is released** to the surroundings (test tube gets **hot**!) $\implies$ **Exothermic**.
  - If products sit **HIGHER** than reactants ($\Delta H > 0$): **net energy is absorbed** from the surroundings (test tube gets **cold**!) $\implies$ **Endothermic**.

### Definitions to memorise

```definition
title: Heat of reaction ($\Delta H$)
The energy absorbed or released per mole in a chemical reaction: $\Delta H = H_{\text{products}} - H_{\text{reactants}}$.
```

```definition
title: Exothermic vs Endothermic reactions
An **exothermic reaction** is a reaction that releases energy ($\Delta H < 0$). An **endothermic reaction** is a reaction that absorbs energy ($\Delta H > 0$).
```

```definition
title: Activation energy ($E_A$) and Activated complex
**Activation energy** is the minimum energy needed for a reaction to take place. The **activated complex** is the unstable transition state at the peak of the energy barrier between reactants and products.
```

```definition
title: Catalyst
A catalyst is a substance that increases the rate of a chemical reaction without itself undergoing a permanent change, by providing an alternative reaction pathway of **lower activation energy**.
```

## Reading every quantity off an energy profile graph

```diagram
name: enthalpy-profile-explorer
```

Switch between **Exothermic** and **Endothermic**, and toggle **Add catalyst** on and off in the explorer above! Watch three golden equations directly on the $y$-axis:

```formula
title: Potential energy graph relationships
formula: \Delta H = H_{\text{products}} - H_{\text{reactants}}
formula: E_A(\text{forward}) = E_{\text{peak}} - H_{\text{reactants}}
formula: E_A(\text{reverse}) = E_{\text{peak}} - H_{\text{products}} = E_A(\text{forward}) - \Delta H
\Delta H | enthalpy change ($\text{negative}$ = exothermic; $\text{positive}$ = endothermic) | kJ·mol⁻¹ | signed scalar
E_A(\text{fwd}) | forward activation energy (ALWAYS positive!) | kJ·mol⁻¹ | scalar
E_A(\text{rev}) | reverse activation energy (climb from products back to peak — ALWAYS positive!) | kJ·mol⁻¹ | scalar
E_{\text{peak}} | potential energy of the activated complex | kJ·mol⁻¹ | scalar
use: ALWAYS measure E_A(forward) starting from REACTANTS, and E_A(reverse) starting from PRODUCTS! A catalyst lowers E_peak, lowering BOTH E_A(fwd) and E_A(rev) by the EXACT SAME amount, while leaving ΔH completely unchanged!
```

## Comparing Exothermic vs Endothermic

| Feature | Exothermic reaction | Endothermic reaction |
| --- | --- | --- |
| Sign of $\Delta H$ | **Negative ($\Delta H < 0$)** | **Positive ($\Delta H > 0$)** |
| Energy levels | $H_{\text{products}} < H_{\text{reactants}}$ | $H_{\text{products}} > H_{\text{reactants}}$ |
| Bond energies | Energy released forming new bonds $>$ energy needed to break old bonds | Energy needed to break old bonds $>$ energy released forming new bonds |
| Thermochemical equation | $\text{A} + \text{B} \to \text{C},\ \Delta H = -120\ \text{kJ}$ (or $+120\ \text{kJ}$ on product side) | $\text{X} + \text{Y} \to \text{Z},\ \Delta H = +90\ \text{kJ}$ |
| Temperature of surroundings (e.g. beaker water) | **Increases** (feels warm/hot) | **Decreases** (feels cool/cold) |
| Classic examples | Combustion, respiration, neutralisation | Photosynthesis, thermal decomposition, cold packs ($\text{NH}_4\text{NO}_3$ dissolving) |

## Worked examples

### Example 1 (reading an energy profile + adding a catalyst)

For a certain reversible reaction, the reactants have potential energy $120\ \text{kJ·mol}^{-1}$, the activated complex has potential energy $300\ \text{kJ·mol}^{-1}$, and the products have potential energy $50\ \text{kJ·mol}^{-1}$.
(a) Calculate $\Delta H$ and state whether the forward reaction is exothermic or endothermic.
(b) Calculate the activation energy for the forward reaction and for the reverse reaction.
(c) A catalyst lowers the activated complex energy to $220\ \text{kJ·mol}^{-1}$. State the new $\Delta H$, $E_A(\text{forward})$, and $E_A(\text{reverse})$.

```worked
title: Example 1 (Potential energy profile)
Given: $H_R = 120\ \text{kJ·mol}^{-1}$, $E_{\text{peak}} = 300\ \text{kJ·mol}^{-1}$, $H_P = 50\ \text{kJ·mol}^{-1}$
Unknown: $\Delta H$, $E_A(\text{fwd})$, $E_A(\text{rev})$, and catalysed values
Equation: $\Delta H = H_P - H_R$; $E_A(\text{fwd}) = E_{\text{peak}} - H_R$; $E_A(\text{rev}) = E_{\text{peak}} - H_P$
Substitution: (a) $\Delta H = 50 - 120 = -70\ \text{kJ·mol}^{-1}$ (**exothermic**, since $\Delta H < 0$)
Substitution: (b) $E_A(\text{fwd}) = 300 - 120 = 180\ \text{kJ·mol}^{-1}$; $E_A(\text{rev}) = 300 - 50 = 250\ \text{kJ·mol}^{-1}$
Substitution: (c) With catalyst ($E_{\text{peak}}' = 220$): $\Delta H$ **stays $-70\ \text{kJ·mol}^{-1}$**!
$E_A'(\text{fwd}) = 220 - 120 = 100\ \text{kJ·mol}^{-1}$; $E_A'(\text{rev}) = 220 - 50 = 170\ \text{kJ·mol}^{-1}$ (both dropped by $80\ \text{kJ·mol}^{-1}$!).
Answer: (a) $-70\ \text{kJ·mol}^{-1}$ (exothermic); (b) $180$ & $250\ \text{kJ·mol}^{-1}$; (c) $\Delta H = -70$, $E_A' = 100$ & $170\ \text{kJ·mol}^{-1}$.
```

```tryit
title: Spot the endothermic temperature trap!
prompt: When solid ammonium nitrate ($\text{NH}_4\text{NO}_3$) dissolves in a beaker of water, the reaction is **endothermic ($\Delta H > 0$)**. If you stick a thermometer into the water, does the thermometer reading go **UP** or **DOWN**, and why?
hint: Where does the reaction get the energy it absorbs?
answer: The thermometer reading goes **DOWN (feels cold)**! An endothermic process **absorbs** thermal energy *from* the surrounding water to pull the ions apart, converting kinetic energy of water molecules into chemical potential energy — cooling the solution down!
```

> **Common mistakes**
>
> - Thinking a **catalyst changes $\Delta H$** (or lowers product energy). A catalyst ONLY lowers the **hill peak ($E_A$)** — starting and ending energy levels ($H_R$, $H_P$, and $\Delta H$) stay 100% identical!
> - Subtracting the wrong way for $\Delta H$: always **$H_{\text{products}} - H_{\text{reactants}}$** (NOT reactants $-$ products — that reverses the sign!).
> - Reading $E_{\text{peak}}$ off the $y$-axis ($300\ \text{kJ}$) and writing $E_A = 300\ \text{kJ}$ instead of subtracting the starting level ($300 - 120 = 180\ \text{kJ}$)!
> - Forgetting that even an exothermic reaction ($\Delta H < 0$) still needs **activation energy** to get started (e.g. a spark to light petrol).

## Practice

```questions
Q: For the reaction $2\,\text{SO}_2(g) + \text{O}_2(g) \rightleftharpoons 2\,\text{SO}_3(g)$, $\Delta H = -196\ \text{kJ}$ and the forward activation energy is $150\ \text{kJ}$. Calculate the activation energy of the **reverse** reaction ($2\,\text{SO}_3 \to 2\,\text{SO}_2 + \text{O}_2$).
A: Sketch the downhill exothermic profile: reactants start $196\ \text{kJ}$ above products, and peak sits $150\ \text{kJ}$ above reactants.
Climbing from products all the way back to the peak: $E_A(\text{rev}) = 150 + 196 = 346\ \text{kJ}$ (or $E_A(\text{fwd}) - \Delta H = 150 - (-196) = 346\ \text{kJ}$).
---
Q: Classify each statement as **exothermic** or **endothermic**:
(a) $H_{\text{reactants}} = 40\ \text{kJ}$ and $H_{\text{products}} = 110\ \text{kJ}$.
(b) $\text{C}(s) + \text{O}_2(g) \longrightarrow \text{CO}_2(g) + 394\ \text{kJ}$.
(c) Energy required to break reactant bonds is $800\ \text{kJ}$ and energy released forming product bonds is $950\ \text{kJ}$.
A: (a) **Endothermic** ($\Delta H = 110 - 40 = +70\ \text{kJ} > 0$).
(b) **Exothermic** ($+394\ \text{kJ}$ on the product side means $394\ \text{kJ}$ is released, $\Delta H = -394\ \text{kJ}$).
(c) **Exothermic** ($\Delta H = 800 - 950 = -150\ \text{kJ} < 0$).
---
Q: How does adding a catalyst change the **activated complex** and the **rate of the reverse reaction**?
A: A catalyst provides an alternative pathway with a lower-energy activated complex, lowering $E_A$ for **both** the forward and reverse reactions by the exact same amount — so **both** forward and reverse reaction rates increase!
```

## Further help

- Siyavula Physical Sciences Grade 11, [12.1 Energy changes in chemical reactions](https://www.siyavula.com/read/za/physical-sciences/grade-11/energy-and-chemical-change/12-energy-and-chemical-change-01) and [12.3 Activation energy and the activated complex](https://www.siyavula.com/read/za/physical-sciences/grade-11/energy-and-chemical-change/12-energy-and-chemical-change-03).
