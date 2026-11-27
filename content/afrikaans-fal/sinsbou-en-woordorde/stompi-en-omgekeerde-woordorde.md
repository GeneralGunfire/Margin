---
title: STOMPI en omgekeerde woordorde (Word order)
subject: afrikaans-fal
topic: Sinsbou, woordorde en voegwoorde
part: Vraestel 1 · Taal in konteks
term: 1
subtopic: STOMPI en woordorde
order: 111
pages: []
---

> **What you'll learn:** the exact **STOMPI** word-order engine in Afrikaans, how **verb-2 inversion (*omgekeerde woordorde*)** works when you start a sentence with Time or Place, and where **pronoun objects** and **`te + infinitief`** sit.
>
> **Prerequisites:** basic Afrikaans subjects, finite verbs, and time/place phrases.
>
> **Why this matters:** STOMPI controls **almost every grammar question in Vraestel 1** (tye, ontkenning, lydende vorm, direkte/indirekte rede, voegwoorde) AND prevents the #1 Vraestel 3 essay error — writing English word order with Afrikaans vocabulary!

## The idea in plain language

English lets adverbs float flexibly (*"Yesterday I quickly read a book in the library"* or *"I read a book yesterday in the library"*). Afrikaans is **strictly architectural**: almost every main sentence follows a numbered track called **STOMPI**.

### What each letter in STOMPI stands for

| Slot | Afrikaans | English Meaning | Example |
| :--- | :--- | :--- | :--- |
| **S** | *Subjek (Onderwerp)* | Who/what performs the action | *Die leerder* |
| **v1** | *Werkwoord 1* | **Finite/auxiliary verb** (ALWAYS Position 2!) | *het / kan / skryf* |
| **T** | *Tyd* | When? | *gister / elke middag* |
| **O** | *Objek (Voorwerp)* | What/who receives the action | *'n brief / die boek* |
| **M** | *Manier* | How? | *netjies / vinnig* |
| **P** | *Plek* | Where? | *in die klas / by die huis* |
| **v2** | *Werkwoord 2* | **Main verb / `ge-` / infinitive** (end of clause!) | *geskryf / lees* |
| **I** | *Infinitief* | **`om ... te + werkwoord`** | *om te slaag* |

```diagram
name: afrikaans-stompi-builder
```

Use the interactive **STOMPI Builder** above! Switch between **Normal STOMPI**, **Time-first Inversion**, and **Place-first Inversion** to watch **`v1` stay glued to Position 2** while the Subject jumps immediately behind `v1`!

## Golden Rule #1: `v1` ALWAYS sits in Position 2

In a normal Afrikaans main statement, **Verb 1 (`v1`) is NEVER bumped to Position 3**:
- **Normal (`S - v1 - T - O - M - P - v2 - I`):**
  > *Thabo (**S**) het (**v1**) vanoggend (**T**) sy projek (**O**) netjies (**M**) op sy lessenaar (**P**) neergesit (**v2**).*
- **Time first (`T - v1 - S - O - M - P - v2 - I`):**
  If you start with *Vanoggend* (**T**) for emphasis, **`v1` stays second** and **`S` hops directly after `v1`**:
  > *Vanoggend (**T**) het (**v1**) Thabo (**S**) sy projek (**O**) netjies (**M**) op sy lessenaar (**P**) neergesit (**v2**).*

### Warning: What happens if there is ONLY ONE verb?
- Present tense single-verb sentence: *Die trein (**S**) vertrek (**v1**) stiptelik (**M**) om sewe-uur (**T**).* -> Notice there is NO `v2`, so `v1` still sits in slot 2!
- **Wait — why did *stiptelik* come before *om sewe-uur* above?** If **Time** is absent or short pronoun objects appear, note this important Grade 11 exception: **personal pronoun objects (`hom`, `haar`, `dit`, `my`, `jou`) jump IN FRONT OF Time!**
  - Noun object: *Ek sien **gister die meisie**.* -> **Incorrect!** Say: *Ek het **gister die meisie** gesien.* (`T` before noun `O`)
  - Pronoun object: *Ek het **haar** gister gesien.* (**Pronoun `O` before `T`!**)

## Golden Rule #2: Infinitief (`om ... te + werkwoord`) at the very end

If a sentence explains *why* or *in order to* do something:
- Place **`om`** AFTER `v2`, followed by any extra detail, then **`te + werkwoord`**:
  > *Sy (**S**) oefen (**v1**) elke oggend (**T**) hard (**M**) op die baan (**P**) **om die wedloop te wen** (**I**).*
- If the sentence is in past tense (*het geoefen*):
  > *Sy (**S**) het (**v1**) gister (**T**) hard (**M**) geoefen (**v2**) **om die wedloop te wen** (**I**).* (`v2` BEFORE `om ... te`!)

```compare
title: Common English trap vs Correct Afrikaans STOMPI
left: English word-order mistake
- *"Gister **ek het** die boek **op my bed vinnig gelees**."*
- Puts **S** before **v1** after *Gister* (Verb 1 fell to Position 3!).
- Puts **Plek** before **Manier**.
right: Correct Afrikaans STOMPI
- *"Gister **het ek** die boek **vinnig op my bed** gelees."*
- Keeps **v1 (`het`)** in **Position 2**, pulls **S (`ek`)** to Position 3.
- Follows **T -> O -> M -> P -> v2** cleanly.
```

## Worked example: Rebuilding scrambled phrases into STOMPI

**Instruction:** *Skryf die volgende woorde in die korrekte volgorde (STOMPI), en begin met "Elke Vrydagmiddag":*
`(lees / in die biblioteek / die leerders / stil / hulle notas)`

1. Identify each slot:
   - **T:** *Elke Vrydagmiddag* (forced to the front!)
   - **v1:** *lees* (ONLY ONE verb -> must take Position 2!)
   - **S:** *die leerders* (jumps straight after `v1`!)
   - **O:** *hulle notas*
   - **M:** *stil*
   - **P:** *in die biblioteek*
2. **Answer:** *Elke Vrydagmiddag **lees** die leerders hulle notas stil in die biblioteek.*

```tryit
title: Invert a sentence without dropping v1 from Position 2
prompt: Rewrite the sentence below **starting with the underlined Time phrase**:
> *Ons het **verlede week** 'n interessante film in die saal gekyk.*
hint: Move *Verlede week* to Position 1 -> keep `het` in Position 2 -> move `ons` straight after `het`!
answer: **Verlede week het ons** 'n interessante film in die saal gekyk.
```

> **Common mistakes**
>
> - Putting a comma after a front-loaded time/place phrase (*"Gister, het ek..."*) — Afrikaans does **NOT** put a comma between **T** and **v1**! Write *"Gister het ek..."*.
> - Splitting **M** and **P** backwards (*"in die klas hard gewerk"* instead of **`hard in die klas gewerk`** — Manier ALWAYS comes before Plek!).
> - Forgetting that **`om ... te`** sits **after** `v2` (`ge-` verb), NOT before `v2`.

## Practice

```questions
Q: Herskryf die sin en begin met **Elke oggend**: *Die atleet hardloop elke oggend vinnig om die veld.* (2)
A: **Elke oggend hardloop die atleet vinnig om die veld.** (`v1 = hardloop` bly in posisie 2; `S = die atleet` skuif na posisie 3.)
---
Q: Rangskik in korrekte STOMPI-volgorde: *(gesels / gister / opgewonde / die vriende / het / in die kafee)* (2)
A: **Die vriende het gister opgewonde in die kafee gesels.** (Of met tyd eerste: *Gister het die vriende opgewonde in die kafee gesels.*)
---
Q: Waar staan 'n kort voornaamwoord-objek soos **hom** of **dit** in verhouding tot **Tyd** (*gister / nou*)? Gee 'n voorbeeld. (2)
A: 'n Voornaamwoord-objek skuif **voor Tyd**: *Ek het **dit gister** gedoen* (nie *gister dit* nie).
```

## Further help

- Departement van Basiese Onderwys, [KABV Graad 11 Afrikaans EAT / FAL Kurrikulum](https://www.education.gov.za/Curriculum/NationalCurriculumStatementsGradesR-12/2023ATPsFET.aspx).
