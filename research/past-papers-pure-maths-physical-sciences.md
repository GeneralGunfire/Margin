# Pass 4: Past paper coverage, Pure Mathematics and Physical Sciences (Grade 11)

## What I used (and the limits)
- **Source:** Eastern Cape Department of Education (ECDoE) Grade 11 November common exams, hosted at https://www.ecexams.co.za (index: https://www.ecexams.co.za/ExaminationPapers.htm ; per-year pages e.g. https://www.ecexams.co.za/2025_November_Gr_11_Exams.htm). I downloaded the MARKING GUIDELINES (memos) only: the site's 2024-2026 pages list memos, not question papers. Topic per question was inferred by me from the content of the guideline. Marks per question are the bracketed totals in the memos. Question content is NOT reproduced here.
- **Not national:** Grade 11 exams are provincial or school-set. The DBE "Grade 11 Common Examination Papers" page (https://www.education.gov.za/Curriculum/NationalSeniorCertificate%28NSC%29Examinations/Grade11Exams.aspx) listed no papers when I fetched it. The user's school may follow another province or its own paper. Treat these tables as one representative provincial sample (EC), not the school's exam.
- **Years covered:** Maths 2023, 2024, 2025, 2026; Physical Sciences 2024, 2025, 2026 (2023 and 2022 memos exist on the site, not analysed). 2026 papers were written in October/November 2026 (the site lists them).
- Memos (all fetched, HTTP 200 PDFs; watermark "downloaded from www.ecexams.co.za"):
  - Maths 2026: https://www.ecexams.co.za/2026_November_Gr_11_Exams/MATHS%20P1%20ENG-AFR%20MG_watermark.pdf and .../MATHS%20P2%20MEMO%20GR11%202026%20ENG%20%26%20AFR_watermark.pdf
  - Maths 2025: .../2025_November_Gr_11_Exams/MATHS%20P1%20MEMO%20GR11%20NOV%202025%20E%2BA_watermark.pdf and .../MATHS%20P2%20MEMO%20GR%2011%20%20NOVEMBER%202025%20%28ENG%20%26%20AFR%29_watermark.pdf
  - Maths 2024: .../2024_November_Gr_11_Exams/MATHS%20P1%20MEMO%20GR11%20NOV2024_ENG_AFR_watermark.pdf and .../MATHS%20P2%20GRADE%2011%20NOV%202024%20ENG_AFR%20MARKING%20GUIDELINE_watermark.pdf
  - Maths 2023: .../2023_November_Gr_11_Exams/MATHS%20P1%20GR11%20MEMO%20NOV%202023_English-Afrikaans.pdf and .../MATHS%20P2%20MEMO%20GR11%20NOV%202023_Afri%2BEnglish.pdf
  - Physical Sciences 2024-2026: .../2026_November_Gr_11_Exams/Grade%2011%20PHSC%20P1%20MG%20NOVEMBER%202026_watermark.pdf , .../PHYSICAL%20SC%20GRADE%2011%20P2%20MARKING%20GUIDELINES%20watermark.pdf , .../2025_November_Gr_11_Exams/PHYSICAL%20SC%20P1%20MEMO%20NOV%202025%20E%2BA_watermark.pdf , .../PHYSICAL%20SCIENCES%20P2%20GRADE%2011%20MEMO%20NOVEMBER%202025%20ENG%20%26%20AFR_watermark.pdf , .../2024_November_Gr_11_Exams/PHYS%20SCIENCES%20P1%20GR11%20MEMO%20NOV%202024%20ENG%20%2B%20AFR_watermark.pdf , .../PHYSICAL%20SCIENCES%20P2%20GR11%20MEMO%202024%20ENG_AFR_watermark.pdf (all under https://www.ecexams.co.za/)
- Method caveat: classification is from automated text extraction plus my reading of a few lines per question; small errors are possible, especially for questions whose total could not be read (marked ~).

## PURE MATHEMATICS: Paper 1 (150 marks), marks by topic (EC Gr 11 Nov)
| Topic | 2023 | 2024 | 2025 | 2026 | ATP weight |
|---|---|---|---|---|---|
| Equations, inequalities, simultaneous (Q1) | 25 | 26 | ~17 | 25 | } 45 with exponents/surds |
| Exponents and surds (Q2) | 18 | 17 | 19 | 19 | } |
| Number patterns: linear part (Q3) | 13 | 11 | 9 | 9 | 25 |
| Number patterns: quadratic (Q4) | 15 | 15 | 14 | 14 | (with above) |
| Functions and graphs (Q5-Q7) | 46 | 46 | 46 | 47 | 45 |
| Finance, growth and decay (Q8) | 15 | 16 | 17 | 16 | 15 |
| Probability (Q9, Q10) | 14+4 | 11+8 | 18 | 20 | 20 |
(2025 Q1 total could not be read; inferred as 150 minus the rest.)

## PURE MATHEMATICS: Paper 2 (150 marks)
| Topic | 2023 | 2024 | 2025 | 2026 | ATP weight |
|---|---|---|---|---|---|
| Statistics | 20 | 21 | 21 | 19 | 20 |
| Analytical geometry | 30 | 30 | 27 | 29 | 30 |
| Trigonometry (identities, reduction, graphs, rules/area) | 51 | 49 | 42 | 51 | 50 |
| Measurement (surface area, volume of composite solids) | 0 | 10 | 11 | 9 | not listed (ATP: revision only) |
| Euclidean geometry (circle theorems, riders) | 49 | 40 | ~49 | 42 | 50 |

## Findings and fixes (Maths)
1. **Measurement IS examined in Gr 11 (EC):** 9 to 11 marks as its own question in 2024-2026 (surface area and volume of solids and composites, including cones and prisms with algebraic dimensions). The 2023/24 ATP lists only "revision of measurement" and the CAPS row text was not recoverable. FIX: pure-maths.md and pure-maths-depth.md now treat Measurement as examinable revision content (Gr 10 formulas for prisms, cylinders, cones, pyramids, spheres, composites).
2. **Linear number patterns are examined every year (9-13 marks)** even though CAPS Gr 11 lists quadratic patterns. FIX: noted as Gr 10 prior knowledge that must be revised.
3. **Equations and inequalities Q1 is 25-26 marks** (heavier than the ATP split suggests): includes fractional equations, simultaneous equations (one linear, one quadratic), inequalities, and "solve in terms of" items. FIX: lesson counts for Topic 2 in pure-maths-depth.md should be generous.
4. **Functions ≈ 46 marks every year:** parabola, hyperbola, exponential, and mixed sketches with average gradient, reflections and transformations. Consistent with ATP (45).
5. **Probability and statistics:** consistent with ATP (20 each).
6. **No topic in my list was missing from the papers; no papers tested a Gr 12-only topic** in the questions I summarised.
7. Topics on my list never visible as separate questions: none (all appear). Topics tested more heavily than time allocation suggests: equations/inequalities (Q1) and Euclidean geometry/trig (about 100 marks combined in Paper 2).
8. Unverified: whether Gr 11 papers in the user's province/school have the same structure.

## PHYSICAL SCIENCES: Paper 1 Physics (150 marks), marks by topic (EC Gr 11 Nov)
| Topic | 2024 | 2025 | 2026 |
|---|---|---|---|
| Multiple choice (all topics) | 20 | 20 | 20 |
| Vectors in 2D (resultant, components) | within Q2 (14) | within Q2 (15) | Q2 9 |
| Forces, friction, Newton's laws, universal gravitation | ~Q2-Q6 (63 incl. vectors) | ~Q2-Q6 (72 incl. vectors) | Q3-Q6 ≈ 61 (plus Q2 9 vectors) |
| Electrostatics (Coulomb, electric field) | 23 | 15 | 22 |
| Electromagnetism (Faraday, flux) | 14 | 14 | 11 |
| Electric circuits (Ohm, power, emf, parallel/series) | 30 | 29 | 27 |

## PHYSICAL SCIENCES: Paper 2 Chemistry (150 marks)
| Topic | 2024 | 2025 | 2026 |
|---|---|---|---|
| Multiple choice | 20 | 20 | 20 |
| Atomic combinations (Lewis, bonds, VSEPR, polarity) | 25 | 16 | 18 |
| Intermolecular forces (boiling points, H-bonds) | 15 | 18 | 12 |
| Ideal gases (Boyle's law investigation, gas laws) | 12 | 17 | 18 |
| Energy and chemical change (activation energy, energy graphs) | 13 | 11 | 16 |
| Stoichiometry (empirical formula, concentration, limiting reagent, purity, yield) | 24 | 31 (16 + 15) | 28 |
| Acid-base reactions | 27 (incl. calculation) | 20 | 22 |
| Redox | 14 | 17 | 16 |

## Findings and fixes (Physical Sciences)
1. **Optics (refraction, Snell's law), wavefronts/diffraction, the chemistry of water and the lithosphere were NOT examined in the EC Gr 11 Nov papers of 2024-2026.** This supports the 2023/24 ATP version of Gr 11 over the older CAPS outline. FIX: physical-sciences.md now states that the ATP structure is the one examined in these papers (still UNCONFIRMED for the user's school and 2027). Topics 5, 6, 12 and 18 in physical-sciences-depth.md are marked "CAPS only; not examined in EC 2024-2026".
2. Paper 1 is ~48% mechanics/forces (including vectors), 15-23 marks electrostatics, 11-14 electromagnetism, 27-30 electric circuits; paper 2 is dominated by stoichiometry (24-31) and acid-base (20-27).
3. Circuits questions include "emf" language and parallel/series resistance changes. Internal resistance as such was not seen; emf as "maximum energy per coulomb" appears (2024). Treat as in scope for Gr 11 circuits.
4. Paper duration is not stated in the memos I read (the 2023/24 ATP says 2 h each; CAPS says 3 h). UNVERIFIED.
5. Multiple-choice section is 20 marks in both papers.

## What is still open for Pass 4
- Other subjects' past papers (English HL, History, Business Studies, Tourism, LO, Religion Studies, Afrikaans FAL) not yet analysed. EC site hosts Gr 11 Business Studies and Economics papers (2022-2023 pages list Business Studies Gr 11 QPs); other provinces (WCED eResource) host more.
- Gr 12 NSC papers (DBE) not yet used for Gr 11 foundation checks.
- AP Maths: no papers obtained.
