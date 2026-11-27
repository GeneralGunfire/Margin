---
title: Voegwoorde (Groep 1, Groep 2 en Groep 3)
subject: afrikaans-fal
topic: Sinsbou, woordorde en voegwoorde
part: Vraestel 1 · Taal in konteks
term: 1
subtopic: STOMPI en woordorde
order: 112
pages: []
---

> **What you'll learn:** how ALL Afrikaans conjunctions split cleanly into **Groep 1** (no change), **Groep 2** (`v1` immediately after the conjunction), and **Groep 3** (`v1` kicked to the very end of the second clause), plus tricky double rules when connecting past-tense clauses or starting a sentence with *Omdat / Terwyl / As*!
>
> **Prerequisites:** STOMPI word order and recognizing `v1` vs `v2`.
>
> **Why this matters:** Combining two sentences with a given conjunction (*"Verbind die sinne met..."*) appears in **every Grade 11 Paper 1 exam** and is one of the fastest ways to boost your Vraestel 3 essay sentence variety!

## The idea in plain language

When you join **Sin 1 + voegwoord + Sin 2**, the **first sentence NEVER changes** (unless the conjunction starts right at the beginning of the whole sentence!). Only **Sin 2's verb** reacts — and its behaviour tells you which of the **three groups** the conjunction belongs to:

| Groep | What happens to `v1` in Sin 2? | Key Conjunctions |
| :--- | :--- | :--- |
| **Groep 1** | **GEEN verandering** (STOMPI stays normal!) | **want, maar, en, of, dog** |
| **Groep 2** | **`v1` staan DIREK ná die voegwoord** (`Voegwoord + v1 + S...`) | **dus, daarom, dan, daarna, gevolglik, anders, egter, alhoewel? NO — toe? Careful: `toe` is Gr 3!** (`al` is Gr 2 only in concessive *al + v1 + S*; common Gr 2: **daarom, dus, gevolglik, dan, daarna, buitendien, anders, nogtans**) |
| **Groep 3** | **`v1` skuif heeltemal na die EINDE van Sin 2** | **omdat, dat, want? NO! — omdat, dat, sodat, nadat, voordat, terwyl, hoewel / alhoewel, toe, as, indien, sedert, tensy** |

```diagram
name: afrikaans-grammar-transformer
```

Click the **Voegwoorde (Gr 1 / 2 / 3)** tab inside the Transformer above to watch the exact verb movement step by step!

## Deep Dive into Each Group (with traps!)

### Groep 1: *en, maar, want, of, dog* — Zero movement

Put a comma before *maar* and *want*, keep **Sin 2 completely unchanged**:
- Sin 1: *Sipho studeer hard.* + Sin 2: *Hy wil slaag.*
- **Result (*want*):** *Sipho studeer hard, **want** hy wil slaag.* (`S = hy`, `v1 = wil` stays put!)
- **Shortcut when subjects match with *en / maar*:** You may omit the repeated subject if it sounds natural (*Sy maak die deur oop en stap uit*), OR keep it (*...en sy stap uit*). Wait: when combining for **Vraestel 1 exam questions**, keep the full second clause unless told otherwise so you never lose a mark!

### Groep 2: *daarom, dus, dan, daarna, gevolglik, anders, nogtans* — Verb-2 Inversion

Because Groep 2 words act like **adverbs sitting in Position 1** of the second clause, **`v1` jumps straight after the conjunction**, pushing the Subject behind `v1`!
- Sin 1: *Dit reën swaar.* + Sin 2: *Ons bly binne.*
- **Result (*daarom*):** *Dit reën swaar; **daarom bly ons** binne.* (`daarom` + **`bly`** (`v1`) + **`ons`** (`S`))
- **With two verbs (`het gebly`):** *Dit het swaar gereën; **daarom het ons** binne **gebly**.* (ONLY `v1 = het` jumps next to `daarom`; `v2 = gebly` stays at the end!)

### Groep 3: *omdat, dat, terwyl, as, toe, nadat, voordat, hoewel, sodat* — `v1` goes to the END!

In Groep 3, **`v1` leaves Position 2 and moves all the way to the very end of Sin 2!**

**Watch carefully when Sin 2 has TWO verbs (`v1` + `v2`)!**
- Sin 1: *Ek is moeg.* + Sin 2: *Ek **het** laat **gestudeer**.*
- **Where does `v1` (`het`) land relative to `v2` (`gestudeer`)?**
  - With **`het` / `is` / `sal` / `kan` / `moet` / `wil` / `mag`**, **`v1` goes AFTER `v2`** (at the absolute end!):
    > *Ek is moeg, **omdat** ek laat **gestudeer het**.* (NOT `omdat ek laat het gestudeer`!)
  - Exception note with **`te + infinitief` (`om ... te`)**: *om ... te* stays right at the very end (*...omdat hy hard probeer **het om te slaag***).

### Special Traps Tested in Grade 11

```compare
title: Two classic Grade 11 conjunction traps
left: Trap 1 — `want` vs `omdat` (both mean "because"!)
- **Groep 1 (`want`):** *Sy bly tuis, **want sy is** siek.* (`S` before `v1`)
- **Groep 3 (`omdat`):** *Sy bly tuis, **omdat sy** siek **is**.* (`v1` kicked to end!)
- Never confuse them — exams love testing whether you switch word order when replacing *want* with *omdat*!
right: Trap 2 — Starting the sentence with Groep 3 (*Omdat / Hoewel / As / Toe*)
- Sin 1: *Ek kon nie gaan nie.* + Sin 2: *Ek was siek.* -> Begin met **Omdat**:
- **Clause 1 (under *Omdat*):** `v1` goes to the end of Clause 1 -> *Omdat ek siek **was**,*
- **Clause 2 (comma + `v1` IMMEDIATELY!):** Treat the entire *Omdat*-clause as Position 1, so **Clause 2 starts with `v1` directly after the comma!**
- **Full answer:** *Omdat ek siek **was**, **kon ek** nie gaan nie.*
```

## Worked example: Combining with *nadat* (tense shift!)

**Prompt:** *Verbind met **nadat**:* `Die klok het gelui. Die leerders het uitgegaan.`

1. **`nadat` means "after"**, so which action happened **FIRST**? The bell rang first -> **`nadat` goes with `Die klok het gelui`!**
2. `nadat` is **Groep 3**, so `het` moves after `gelui`: *Nadat die klok **gelui het**,*
3. Because we started with the `nadat`-clause, the main clause starts with **`v1` (`het`)** directly after the comma!
4. **Answer:** *Nadat die klok **gelui het**, **het** die leerders **uitgegaan**.* *(Of: Die leerders het uitgegaan **nadat die klok gelui het**.)*

```tryit
title: Combine with Groep 2 AND Groep 3
prompt: Verbind die twee sinne twee keer — een keer met **daarom** (Groep 2) en een keer met **omdat** (Groep 3):
> *Thabo het hard geoefen. Hy het die goudmedalje gewen.*
hint: Check WHICH sentence is the **cause** (used after *omdat*) and WHICH is the **result** (used after *daarom*)!
answer: - **Daarom (Groep 2):** *Thabo het hard geoefen; **daarom het hy** die goudmedalje gewen.*
- **Omdat (Groep 3):** *Thabo het die goudmedalje gewen, **omdat hy** hard **geoefen het**.* (Of: *Omdat Thabo hard geoefen het, **het hy** die goudmedalje gewen.*)
```

> **Common mistakes**
>
> - Putting **`het` BEFORE `gestudeer`** at the end of a Groep 3 clause (*"...omdat ek het gestudeer"* or *"...omdat ek gestudeer"* dropping `het`). Remember: **`gestudeer het`**!
> - Forgetting **comma-inversion** when starting with **As / Toe / Omdat / Hoewel / Nadat** (*"Toe die reën begin het, **die seuns het**..."* -> WRONG! Must be *"Toe die reën begin het, **het die seuns**..."*).
> - Reversing cause and effect when joining with *want / omdat / daarom*! Always read your combined sentence for logical sense.

## Practice

```questions
Q: Verbind met **sodat** (Groep 3): *Sy staan vroeg op. Sy kan die eerste bus haal.* (2)
A: **Sy staan vroeg op sodat sy die eerste bus kan haal.** (`kan` skuif na die einde, ná `haal`? Let op: `kan haal` vs `haal kan` — in modale werkwoorde bly die modale werkwoord + hoofwerkwoord as **kan haal** of **haal**; in Afrikaans sê ons **sodat sy die eerste bus kan haal**!)
---
Q: Verbind met **gevolglik** (Groep 2): *Die brug het weggespoel. Die verkeer is vertraag.* (2)
A: **Die brug het weggespoel; gevolglik is die verkeer vertraag.** (`is` skuif direk ná `gevolglik`!)
---
Q: Begin die saamgestelde sin met **Hoewel**: *Hy is baie moeg. Hy maak sy huiswerk klaar.* (2)
A: **Hoewel hy baie moeg is, maak hy sy huiswerk klaar.** (`is` skuif na die einde van die bysin; `maak` staan direk ná die komma!)
```

## Further help

- Departement van Basiese Onderwys, [Afrikaans EAT / FAL Vraestel 1 Riglyne](https://www.education.gov.za/Curriculum/NationalCurriculumStatementsGradesR-12/2023ATPsFET.aspx).
