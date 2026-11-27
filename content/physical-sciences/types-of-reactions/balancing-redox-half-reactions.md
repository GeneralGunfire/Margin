---
title: Balancing redox reactions using half-reactions
subject: physical-sciences
topic: Types of reactions
part: Chemistry
term: 4
subtopic: Redox reactions
order: 1222
pages: []
---

> **What you'll learn:** how to split any redox process into an **oxidation half-reaction** and a **reduction half-reaction**, balance tricky oxygen-containing polyatomic ions ($\text{MnO}_4^-$, $\text{Cr}_2\text{O}_7^{2-}$, $\text{NO}_3^-$) in acidic solution using $\text{H}_2\text{O}$ and $\text{H}^+$, and recombine them into one balanced net ionic equation.
>
> **Prerequisites:** oxidation numbers, ionic formulas, and conservation of mass and charge.
>
> **Why this matters:** balancing equations like $\text{MnO}_4^- + \text{Fe}^{2+} \to \text{Mn}^{2+} + \text{Fe}^{3+}$ by trial and error is nearly impossible — the **half-reaction method** solves every redox equation systematically in 6 clean steps, and you will use it throughout Grade 12 Electrochemistry!

## The idea in plain language

In every redox reaction, **not a single electron can appear out of thin air or vanish into thin air**. Every electron given away by the reducing agent (**oxidation half-reaction**, electrons on the **RIGHT / product side**) must be picked up by the oxidising agent (**reduction half-reaction**, electrons on the **LEFT / reactant side**)!

If one iron atom gives away $1\,e^-$ ($\text{Fe}^{2+} \to \text{Fe}^{3+} + e^-$), and one permanganate ion ($\text{MnO}_4^-$) swallows **$5\,e^-$** to turn into $\text{Mn}^{2+}$, then **five** $\text{Fe}^{2+}$ ions must react for every **one** $\text{MnO}_4^-$ ion so the electrons match ($5\,e^-$ lost $= 5\,e^-$ gained)!

Even better: in Grade 11 and 12 exams, your **Table of Standard Reduction Potentials** prints many common half-reactions (like $\text{MnO}_4^- + 8\text{H}^+ + 5e^- \to \text{Mn}^{2+} + 4\text{H}_2\text{O}$) right at the back of the exam paper! Knowing how to derive them from scratch means you can balance *any* equation — whether it's on the sheet or not!

### The golden rule of arrow direction

> **DBE Exam Formatting Rule:** Always write balanced half-reactions with a **single forward arrow (`→`)**, NEVER a double equilibrium arrow (`⇌`), once you know which way the reaction goes! Using `⇌` in a specific half-reaction can lose a mark in DBE memos!

## The 6-step recipe (for acidic aqueous medium)

```steps
title: Balancing ANY redox equation via half-reactions
step: **Split into two skeletal half-reactions** (using oxidation numbers to see which species is oxidised and which is reduced).
step: For EACH half-reaction separately:
1. Balance all atoms **other than H and O** first (e.g. put a `2` in front of $\text{Cr}^{3+}$ if starting from $\text{Cr}_2\text{O}_7^{2-}$!).
2. Balance **O atoms** by adding **$\text{H}_2\text{O}$** to the oxygen-deficient side.
3. Balance **H atoms** by adding **$\text{H}^+$** to the hydrogen-deficient side.
4. Balance total electrical **charge** by adding **electrons ($e^-$)** to the more positive side!
step: **Check electron placement:** oxidation MUST have $e^-$ on the **right**; reduction MUST have $e^-$ on the **left**.
step: **Equalise electrons:** multiply one or both half-reactions by whole numbers so the number of $e^-$ lost equals the number of $e^-$ gained.
step: **Add the two half-reactions together**, cancelling the electrons and any matching $\text{H}_2\text{O}$ or $\text{H}^+$ appearing on both sides.
step: **Final double-check:** verify BOTH total atoms of each element AND **total net charge** on the left equal total atoms and total net charge on the right!
```

```diagram
name: acid-base-redox-visual
```

## Worked examples

### Example 1 (simple displacement — no $\text{H}^+$/$\text{O}$ needed): aluminium + copper(II) ions

Balance the net ionic equation for aluminium metal reacting with aqueous copper(II) ions:
$$\text{Al}(s) + \text{Cu}^{2+}(aq) \longrightarrow \text{Al}^{3+}(aq) + \text{Cu}(s)$$

Notice why just writing $1\,\text{Al} + 1\,\text{Cu}^{2+}$ is **WRONG** even though the atoms match ($1\ \text{Al}$, $1\ \text{Cu}$): the left side has total charge **$+2$** while the right side has total charge **$+3$**! Charge isn't balanced!

```worked
title: Example 1 (Balancing charge by matching electrons)
Given: $\text{Al}(s) + \text{Cu}^{2+}(aq) \longrightarrow \text{Al}^{3+}(aq) + \text{Cu}(s)$
Unknown: Balanced oxidation half-reaction, reduction half-reaction, and net ionic equation
Substitution: Oxidation: $\text{Al}(s) \longrightarrow \text{Al}^{3+}(aq) + 3\,e^-$ (loses 3e⁻; multiply by **2**)
Substitution: Reduction: $\text{Cu}^{2+}(aq) + 2\,e^- \longrightarrow \text{Cu}(s)$ (gains 2e⁻; multiply by **3**)
Substitution: LCM of $3$ and $2$ is $6\,e^-$:
$2\,\text{Al}(s) \longrightarrow 2\,\text{Al}^{3+}(aq) + 6\,e^-$
$3\,\text{Cu}^{2+}(aq) + 6\,e^- \longrightarrow 3\,\text{Cu}(s)$
Answer: Net ionic equation: $2\,\text{Al}(s) + 3\,\text{Cu}^{2+}(aq) \longrightarrow 2\,\text{Al}^{3+}(aq) + 3\,\text{Cu}(s)$ (Total charge: $+6$ on left $= +6$ on right!).
```

### Example 2 (full acidic-medium exam classic): dichromate + iron(II) ions

Balance the following redox reaction in acidic solution:
$$\text{Cr}_2\text{O}_7^{2-}(aq) + \text{Fe}^{2+}(aq) \longrightarrow \text{Cr}^{3+}(aq) + \text{Fe}^{3+}(aq)$$

```steps
title: Full 6-step acidic half-reaction solution
step: **Oxidation half-reaction ($\text{Fe}^{2+} \to \text{Fe}^{3+}$):**
Atoms already balanced; balance charge by adding $1\,e^-$ on the right:
$\text{Fe}^{2+}(aq) \longrightarrow \text{Fe}^{3+}(aq) + e^-$
step: **Reduction half-reaction ($\text{Cr}_2\text{O}_7^{2-} \to \text{Cr}^{3+}$):**
- Balance $\text{Cr}$ atoms first: $\text{Cr}_2\text{O}_7^{2-} \to \mathbf{2}\,\text{Cr}^{3+}$
- Balance $7\ \text{O}$ atoms by adding $7\,\text{H}_2\text{O}$ on the right: $\text{Cr}_2\text{O}_7^{2-} \to 2\,\text{Cr}^{3+} + 7\,\text{H}_2\text{O}$
- Balance $14\ \text{H}$ atoms by adding $14\,\text{H}^+$ on the left: $\text{Cr}_2\text{O}_7^{2-} + 14\,\text{H}^+ \to 2\,\text{Cr}^{3+} + 7\,\text{H}_2\text{O}$
- Balance charge: left has $(-2) + (+14) = +12$; right has $2(+3) + 0 = +6$. Add **$6\,e^-$** to the more positive (left) side to drop $+12$ down to $+6$:
$\text{Cr}_2\text{O}_7^{2-}(aq) + 14\,\text{H}^+(aq) + 6\,e^- \longrightarrow 2\,\text{Cr}^{3+}(aq) + 7\,\text{H}_2\text{O}(\ell)$
step: **Equalise electrons:** multiply the $\text{Fe}^{2+}$ oxidation half-reaction by **$6$** so $6\,e^-$ cancels $6\,e^-$:
$6\,\text{Fe}^{2+}(aq) \longrightarrow 6\,\text{Fe}^{3+}(aq) + 6\,e^-$
step: **Add and cancel $6\,e^-$:**
$\text{Cr}_2\text{O}_7^{2-}(aq) + 6\,\text{Fe}^{2+}(aq) + 14\,\text{H}^+(aq) \longrightarrow 2\,\text{Cr}^{3+}(aq) + 6\,\text{Fe}^{3+}(aq) + 7\,\text{H}_2\text{O}(\ell)$
step: **Charge check!** Left: $(-2) + 6(+2) + 14(+1) = +24$. Right: $2(+3) + 6(+3) + 0 = +24$. Balanced!
```

```tryit
title: Quick charge-balance check
prompt: A learner writes the reduction half-reaction of permanganate in acid as: $\text{MnO}_4^- + 8\text{H}^+ + 3\,e^- \longrightarrow \text{Mn}^{2+} + 4\text{H}_2\text{O}$. Without memorising anything, check the charges and fix the number of electrons!
hint: Add the total charge on the left (without $e^-$) and compare it to the total charge on the right ($+2$).
answer: Left side before electrons: $(-1) + (+8) = \mathbf{+7}$. Right side: $\mathbf{+2}$. To drop $+7$ down to $+2$, you must add **$5\,e^-$** (NOT $3\,e^-$)! Correct: $\text{MnO}_4^- + 8\text{H}^+ + 5\,e^- \longrightarrow \text{Mn}^{2+} + 4\text{H}_2\text{O}$.
```

> **Common mistakes**
>
> - Adding $e^-$ to the **right** side of BOTH half-reactions! One half-reaction MUST lose $e^-$ (right) and the other MUST gain $e^-$ (left) — if both put $e^-$ on the same side, recheck your charges!
> - Forgetting to put a `2` in front of $\text{Cr}^{3+}$ in $\text{Cr}_2\text{O}_7^{2-} \to 2\,\text{Cr}^{3+}$ *before* counting electrons!
> - Leaving leftover electrons inside the final net ionic equation — all $e^-$ MUST cancel completely!
> - Using double arrows (`⇌`) instead of single arrows (`→`) when writing a specific half-reaction or net redox equation.

## Practice

```questions
Q: Balance the reaction between zinc and silver ions: $\text{Zn}(s) + \text{Ag}^+(aq) \longrightarrow \text{Zn}^{2+}(aq) + \text{Ag}(s)$, showing both half-reactions clearly.
A: Oxidation: $\text{Zn}(s) \longrightarrow \text{Zn}^{2+}(aq) + 2\,e^-$.
Reduction: $\text{Ag}^+(aq) + e^- \longrightarrow \text{Ag}(s)$ ($\times 2$).
Net ionic equation: $\text{Zn}(s) + 2\,\text{Ag}^+(aq) \longrightarrow \text{Zn}^{2+}(aq) + 2\,\text{Ag}(s)$.
---
Q: Balance the reduction half-reaction of nitrate ions to nitrogen monoxide gas in acidic solution: $\text{NO}_3^-(aq) \longrightarrow \text{NO}(g)$.
A: Balance O with $\text{H}_2\text{O}$: $\text{NO}_3^- \to \text{NO} + 2\,\text{H}_2\text{O}$.
Balance H with $\text{H}^+$: $\text{NO}_3^- + 4\,\text{H}^+ \to \text{NO} + 2\,\text{H}_2\text{O}$.
Left charge $= -1 + 4 = +3$; right charge $= 0$. Add $3\,e^-$ to the left:
$\text{NO}_3^-(aq) + 4\,\text{H}^+(aq) + 3\,e^- \longrightarrow \text{NO}(g) + 2\,\text{H}_2\text{O}(\ell)$.
---
Q: Combine $\text{Cu}(s) \longrightarrow \text{Cu}^{2+}(aq) + 2\,e^-$ with your $\text{NO}_3^-$ half-reaction from Question 2 to write the balanced net ionic equation for copper dissolving in nitric acid.
A: Multiply $\text{Cu}$ oxidation by $3$ ($6\,e^-$) and $\text{NO}_3^-$ reduction by $2$ ($6\,e^-$), then add:
$3\,\text{Cu}(s) + 2\,\text{NO}_3^-(aq) + 8\,\text{H}^+(aq) \longrightarrow 3\,\text{Cu}^{2+}(aq) + 2\,\text{NO}(g) + 4\,\text{H}_2\text{O}(\ell)$.
Check charge: left $= 2(-1) + 8(+1) = +6$; right $= 3(+2) = +6$!
```

## Further help

- Siyavula Physical Sciences Grade 11, [13.2 Redox reactions](https://www.siyavula.com/read/za/physical-sciences/grade-11/types-of-reactions/13-types-of-reactions-02) and [13.3 Balancing redox reactions](https://www.siyavula.com/read/za/physical-sciences/grade-11/types-of-reactions/13-types-of-reactions-03).
