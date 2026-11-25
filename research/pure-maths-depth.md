# Pure Mathematics Grade 11 — PASS 2: DEPTH (companion to pure-maths.md)

Written from the CAPS Gr 11 statements (cited in pure-maths.md) plus standard curriculum mathematics. No exam questions are reproduced; examples are original. Resources are NOT filled in yet (Pass 3). Question-type and mark remarks are typical patterns, UNVERIFIED until Pass 4 checks real papers. Section numbers follow Section 4 of pure-maths.md (CAPS pace-setter numbering; the 2023/24 ATP order differs, see that file). Lessons: L1 to L5. Tags: [ALG] Algebra side, [GEO] Geometry side.

## 1. Exponents and surds [ALG] (Paper 1, part of ~45 marks with equations/inequalities)
**1.1 Rational exponents and their laws**
- Covers: extending exponent laws from integers to fractions: x^(p/q) is the q-th root of x^p. Learners move between surd and exponent form and simplify.
- Key: x^m·x^n = x^(m+n); x^m/x^n = x^(m−n); (x^m)^n = x^(mn); (xy)^n = x^n·y^n; x^(−n) = 1/x^n; x^0 = 1 (x≠0); x^(p/q) = (q-th root of x)^p.
- Prereqs: Gr 10 integer exponent laws, factorising, simplifying fractions.
- Examined: simplify expressions (often with a common-factor trick such as 3^(n+1) + 3^n), evaluate without a calculator; about 3 to 6 marks; verbs "simplify", "determine without a calculator".
- Mistakes: adding bases (2^3·3^2 → 6^5); (x+y)^n = x^n + y^n; negative exponent giving a negative answer; not converting to a common base.
- Ideas: evaluate 8^(2/3); simplify (x^(3/2)·x^(1/2))/x. Practice ladder: numeric, algebraic, factor-out-common-power.
- Lessons: L1 "From roots to fractional exponents"; L2 "Exponent laws with fractions"; L3 "Simplifying with common bases and factoring powers".
- Visuals: law "cheat card"; slider for x^(1/2), x^(1/3). No 3D/animation.
**1.2 Solving exponential equations**
- Covers: same base then equate exponents; equations needing substitution k = a^x leading to a quadratic.
- Key: a^m = a^n ⇒ m = n (a>0, a≠1); reject k ≤ 0.
- Prereqs: 1.1, quadratic solving (2.2).
- Examined: 2 to 5 marks; harder ones have a quadratic in 2^x or 3^x; "solve for x".
- Mistakes: dividing by a base wrongly; not rejecting k ≤ 0; losing a solution when factoring.
- Ideas: 3^(2x) = 27^(x−1); 4^x − 5·2^x + 4 = 0 style.
- Lessons: L1 "Same-base method"; L2 "Substitution with k = a^x".
- Visuals: graph of y = 2^x to show it is never ≤ 0 (graph library).
**1.3 Surds: operations and simplification**
- Covers: simplify (√12 = 2√3), add/subtract like surds, multiply/divide, rationalise denominators incl. binomial conjugates.
- Key: √a·√b = √(ab); √a/√b = √(a/b); (√a)² = a; conjugate pairs.
- Prereqs: perfect squares, factorising, special products.
- Examined: 3 to 5 marks; "show that", "simplest form without a calculator".
- Mistakes: √(a+b) = √a+√b; adding unlike surds; not rationalising fully; conjugate sign slip.
- Ideas: simplify (√12 + √27)/√3; rationalise 5/(√7 − 2).
- Lessons: L1 "Simplifying surds"; L2 "Adding and multiplying"; L3 "Rationalising denominators".
**1.4 Equations involving surds**
- Covers: isolate the surd, square both sides, solve, check for extraneous roots.
- Key: squaring can introduce false roots; always substitute back.
- Prereqs: 1.3, quadratic equations.
- Examined: 3 to 5 marks; "solve for x" with verification.
- Mistakes: expanding (a+b)² wrongly; not checking; squaring before isolating.
- Lessons: L1 "Isolate, square, solve, check".
- Visuals: y = √x and a line to show valid vs rejected root.

## 2. Equations and inequalities [ALG]
**2.1 Completing the square**
- Covers: rewrite ax²+bx+c as a(x+p)²+q; solve and find turning points.
- Key: x² + bx = (x + b/2)² − (b/2)²; factor out a first.
- Prereqs: factorising, expanding squares.
- Examined: 3 to 4 marks, often linked to max/min; "solve by completing the square".
- Mistakes: not factoring a out; wrong sign when halving; forgetting the subtracted square.
- Lessons: L1 "Why complete the square"; L2 "Solving and turning points".
- Visuals: area-model of completing the square (animation nice-to-have).
**2.2 Quadratic equations: factorising and the formula**
- Key: x = (−b ± √(b²−4ac))/(2a); standard form first; zero-product law.
- Prereqs: Gr 10 factorising; surds.
- Examined: 3 to 6 marks; answers "correct to 2 decimals"; fractional equations reducing to quadratics.
- Mistakes: not in standard form; sign of −b; dividing by x and losing a root; rounding early.
- Lessons: L1 "Factorise and solve"; L2 "The formula"; L3 "Equations that become quadratics".
**2.3 Nature of roots (Δ = b² − 4ac)**
- Covers: deciding real/non-real, equal/unequal, rational/irrational without solving; finding k.
- Key: Δ>0 unequal real; Δ=0 equal real; Δ<0 non-real; Δ a perfect square (rational a,b,c) ⇒ rational roots.
- Examined: 3 to 6 marks; "for which values of k…", "prove that the roots are real".
- Mistakes: Δ = 0 read as "no roots"; inequality direction when solving for k.
- Lessons: L1 "What Δ tells us"; L2 "Parameter problems".
- Visuals: parabola vs x-axis with 2, 1, 0 intersections linked to Δ (graph library).
**2.4 Quadratic inequalities**
- Covers: solve ax²+bx+c (≥, ≤, >, <) 0 via critical values and sketch/number line; graphical interpretation.
- Prereqs: 2.2, parabola graph.
- Examined: 3 to 4 marks; interval or inequality notation; sometimes combined with a second condition.
- Mistakes: wrong sign direction; writing −2 > x > 3; including endpoints for strict signs.
- Lessons: L1 "Critical values and sign table"; L2 "Parabola sketch method".
**2.5 Simultaneous equations (one linear, one quadratic)**
- Covers: substitute linear into quadratic; interpret as intersection of line and curve (parabola, hyperbola).
- Examined: 5 to 6 marks; "solve simultaneously", then use the points in geometry or inequalities.
- Mistakes: substituting into the wrong equation; (x+y)² expansion errors; giving only x-values.
- Lessons: L1 "Substitution method"; L2 "Intersections of graphs".
- Visuals: line crossing a parabola, 0/1/2 solutions.
**2.6 Word problems leading to quadratics**
- Covers: areas, ages, speeds, work-rate modelled as quadratics; reject unrealistic roots.
- Examined: problem solving, 4 to 6 marks.
- Mistakes: poor variable definition; no units; accepting negative lengths.
- Lessons: L1 "Model and solve".

## 3. Number patterns [ALG]
**3.1 Quadratic sequences**
- Covers: sequences with constant second difference; Tn = an² + bn + c where 2a = second difference, 3a + b = first of the first differences, a + b + c = T1.
- Prereqs: linear patterns, simultaneous equations.
- Examined: 5 to 8 marks; "determine the general term", "which term equals…", "show the sequence is quadratic", contexts (matches, tiles).
- Mistakes: using first difference as a; wrong n for T1; not rejecting non-integer n.
- Ideas: tile patterns; matches in a league (n(n−1)/2).
- Lessons: L1 "Second differences"; L2 "General-term formula"; L3 "Problems and contexts".
- Visuals: dot/tile diagrams; difference table (interactive table helpful).

## 4. Analytical geometry [GEO] (Paper 2 ~30 marks)
**4.1 Distance, midpoint, gradient (revision) and 4.2 equation of a line**
- Key: d = √((x2−x1)² + (y2−y1)²); M = ((x1+x2)/2; (y1+y2)/2); m = (y2−y1)/(x2−x1); y − y1 = m(x − x1); parallel m1 = m2; perpendicular m1·m2 = −1.
- Examined: "determine the equation of…", "show that ABCD is a parallelogram/rectangle/kite", coordinate proofs.
- Mistakes: inconsistent subtraction order; perpendicular-gradient sign; vertical/horizontal lines x = k, y = k.
- Lessons: L1 "Distance, midpoint, gradient recap"; L2 "Line through two points / point-gradient"; L3 "Parallel and perpendicular"; L4 "Shape problems".
**4.3 Inclination and angle between lines**
- Key: tan θ = m, 0° ≤ θ < 180°; angle between lines = difference of inclinations; negative m ⇒ θ = 180° − reference angle.
- Mistakes: negative calculator angle not corrected; confusing interior/exterior angles.
- Lessons: L1 "Inclination"; L2 "Angle between lines / in a triangle".
- Visuals: draggable line showing θ and m (interactive graph).

## 5. Functions [ALG] (Paper 1, ~45 marks)
**5.1 Parabola y = a(x+p)² + q**
- Key: axis x = −p; turning point (−p; q); a>0 minimum, a<0 maximum; intercepts; domain/range.
- Examined: sketch, equation from graph, intervals f(x) > 0 or increasing, transformations; 8 to 15 marks combined.
- Mistakes: sign of p (+p shifts left); reading q as the x-coordinate; domain vs range.
- Lessons: L1 "Effect of a, p, q"; L2 "Sketching from turning form"; L3 "Equations from graphs".
- Visuals: parameter sliders (graph library).
**5.2 Hyperbola y = a/(x+p) + q**
- Key: vertical asymptote x = −p, horizontal y = q; branches in quadrants by sign of a; axes of symmetry y = x + (q+p) and y = −x + (q−p).
- Mistakes: asymptote sign errors; curve crossing an asymptote; symmetry-axis formulas.
- Lessons: L1 "Asymptotes and shape"; L2 "Intercepts and sketching"; L3 "Equation from graph".
**5.3 Exponential y = a·b^(x+p) + q**
- Key: horizontal asymptote y = q; b>1 growth, 0<b<1 decay; domain R; range y>q for a>0.
- Mistakes: p inside the exponent (horizontal shift) confused; wrong range; touching the asymptote.
- Lessons: L1 "Shape and asymptote"; L2 "Parameters"; L3 "Equation from two points".
**5.4 Average gradient and gradient at a point**
- Key: average gradient = (f(x2) − f(x1))/(x2 − x1); closer points give an intuition for the gradient at a point (leads to Gr 12 calculus).
- Examined: about 3 to 4 marks; "average gradient between x = a and x = b".
- Lessons: L1 "Average rate of change".
- Visuals: secant-to-tangent animation (graph library + animation).
**5.5 Combined graph questions**
- Covers: intersections of a line and a curve; intervals where one graph lies above another; reading sketches; parabola with hyperbola.
- Lessons: L1 "Combined graphs workshop".

## 6. Trigonometry [GEO] (Paper 2, ~50 marks in the final)
**6.1 Graphs of sin, cos, tan with a, k, p, q**
- Key: amplitude |a|; period 360°/k (sin, cos), 180°/k (tan); shift p; domain/range; tan asymptotes at odd multiples of 90°/k.
- Examined: sketch two graphs on the same axes for −360° ≤ x ≤ 360°, read intersections and intervals; 6 to 10 marks.
- Mistakes: period of tan; direction of shift (x + 30° moves left); missing key points; confusing k and p.
- Lessons: L1 "Basic graphs and symmetry"; L2 "Effect of k and a"; L3 "Effect of p"; L4 "Sketching and reading combined graphs".
- Visuals: sliders for a, k, p, q linked to the unit circle (interactive graph).
**6.2 Identities and reduction formulae**
- Key: tan θ = sin θ/cos θ; sin²θ + cos²θ = 1; sin(180°−θ) = sin θ; cos(180°−θ) = −cos θ; sin(180°+θ) = −sin θ; cos(180°+θ) = −cos θ; sin(360°−θ) = −sin θ; cos(−θ) = cos θ; sin(90°−θ) = cos θ; cos(90°−θ) = sin θ; tan(180°+θ) = tan θ.
- Examined: simplify long expressions, prove identities, evaluate with a diagram, values for which an identity is undefined; 6 to 12 marks.
- Mistakes: CAST sign errors; mixing co-functions; dividing by cos θ without noting it may be 0; manipulating both sides when proving.
- Lessons: L1 "Unit circle and CAST"; L2 "Reduction to acute angles"; L3 "Simplifying expressions"; L4 "Proving identities and undefined values".
- Visuals: unit circle with draggable angle (animation).
**6.3 Trigonometric equations**
- Key: sin θ = sin α ⇒ θ = α + k·360° or 180° − α + k·360°; cos θ = cos α ⇒ θ = ±α + k·360°; tan θ = tan α ⇒ θ = α + k·180°; k ∈ Z; specific intervals by substituting k.
- Mistakes: missing the second solution; wrong tan period; compound-angle intervals not adjusted.
- Lessons: L1 "Basic equations"; L2 "General solution"; L3 "Equations needing identities or factorising".
**6.4 Sine, cosine and area rules (2D)**
- Key: a/sin A = b/sin B = c/sin C; a² = b² + c² − 2bc cos A; Area = ½ ab sin C. Proofs are examinable (CAPS).
- Examined: non-right-angled triangles in contexts, combined with circle geometry; a proof ~4 to 6 marks; 10 to 15 marks for the question.
- Mistakes: ambiguous case; wrong side-angle pairing; calculator not in degrees; early rounding.
- Lessons: L1 "Sine rule and proof"; L2 "Cosine rule and proof"; L3 "Area rule"; L4 "Mixed 2D problems".
- Visuals: triangle with draggable vertex. 3D is Gr 12, not needed.

## 7. Euclidean geometry (circle geometry) [GEO] (Paper 2, ~50 marks with measurement)
- Theorems: line from the centre perpendicular to a chord bisects it (and converse); angle at the centre = 2 × angle at the circumference; angles in the same segment equal; opposite angles of a cyclic quadrilateral supplementary (exterior angle = interior opposite angle); tangents from an external point are equal; tangent-chord theorem; tangent ⟂ radius.
- Examined: calculations with reasons and "prove that" riders; proofs of theorems up to ~6 marks (CAPS: max 12 for proofs in Paper 2); converses used in riders but not asked as proofs. Typically 8 to 15 marks per question, several questions.
- Mistakes: missing or wrong reasons; assuming a quadrilateral is cyclic; confusing radius/tangent angles; mislabelling alternate segment.
- Ideas: angle chasing; proving cyclic quadrilaterals via converse; intersecting circles with a common chord.
- Lessons: L1 "Chords and the centre"; L2 "Angles at the centre and circumference"; L3 "Cyclic quadrilaterals"; L4 "Tangents"; L5 "Riders and proofs".
- Visuals: interactive circle with draggable points and live angle values (geometry library).
- Measurement: CAPS has a 1-week Gr 11 row; the 2023/24 ATP only lists "revision of measurement". Eastern Cape Gr 11 papers 2024-2026 examine it as a 9-11 mark question: surface area and volume of prisms, cylinders, cones, pyramids, spheres and composite solids (Gr 10 formulas, often with algebraic dimensions and a context such as paint coverage). Lessons: L1 "Surface area and volume formulas"; L2 "Composite solids and contexts".

## 8. Finance, growth and decay [ALG] (Paper 1, ~15 marks)
- Depreciation: straight line A = P(1 − in); reducing balance A = P(1 − i)^n; solve for i or n (logs).
- Nominal and effective: A = P(1 + i/m)^(mn); effective rate = (1 + i/m)^m − 1; compare investments by effective rate.
- Timeline problems: split into periods for rate changes, deposits, withdrawals; keep full calculator accuracy.
- Examined: 4 to 8 marks combined; "determine the rate of depreciation", "which investment is better".
- Mistakes: simple formula for decay; i as a percentage; dividing rate but not scaling n; comparing nominal rates; early rounding.
- Lessons: L1 "Compound growth and decay recap"; L2 "Depreciation methods"; L3 "Nominal vs effective"; L4 "Timeline problems".
- Visuals: timeline diagram; growth/decay curve comparison (graph library).
- Cross-link: Business Studies.

## 9. Probability [ALG] (Paper 1, ~20 marks)
- Key: P(A or B) = P(A) + P(B) − P(A and B); mutually exclusive: P(A and B) = 0; complement P(A′) = 1 − P(A); independent: P(A and B) = P(A)·P(B); three-event Venn diagrams (inclusion-exclusion); tree diagrams for consecutive events without replacement.
- Examined: Venn diagrams (2 and 3 sets), contingency tables, "are A and B independent / mutually exclusive?", tree diagrams; counting principles are Gr 12. 4 to 10 marks.
- Mistakes: mixing up mutually exclusive and independent; double counting overlaps; wrong totals in Venn regions; not adjusting denominators without replacement.
- Lessons: L1 "Venn diagrams and addition rule"; L2 "Mutually exclusive vs independent"; L3 "Three events"; L4 "Tree diagrams".
- Visuals: Venn builder (interactive), tree diagram.

## 10. Statistics [GEO] (Paper 2, ~20 marks)
- Covers: histograms, frequency polygons, ogives (median, quartiles, percentiles); variance and standard deviation of ungrouped data; symmetric/skewed data; outliers (box-and-whisker, scatter plots; whether CAPS gives an outlier rule is UNVERIFIED).
- Key: variance = Σ(x − x̄)²/n; standard deviation = √variance; interpret within one or two standard deviations of the mean.
- Examined: draw/interpret ogive, calculate mean and standard deviation (calculator statistics mode), "comment on spread"; 6 to 12 marks.
- Mistakes: ogive plotted at midpoints instead of upper class bounds; sample vs population formula mix-up; no context in comments; polygon not closed.
- Lessons: L1 "Histograms and polygons"; L2 "Ogives and percentiles"; L3 "Variance and standard deviation"; L4 "Skewness and outliers".
- Visuals: linked histogram/ogive/box-plot from a dataset (interactive chart).

## Cross-links (Pass 2 additions)
Functions and gradient intuition ↔ Gr 12 calculus and Physical Sciences motion graphs; trig rules ↔ vectors in Physical Sciences; finance ↔ Business Studies; statistics ↔ Life Orientation/data work; quadratics ↔ Physical Sciences (projectile motion in Gr 12).

## Pass 2 status for Pure Maths
Done: summaries, concepts, prereqs, typical exam style, mistakes, ideas, lessons, visuals. NOT done: verified resources (Pass 3), verified question types/marks from real papers (Pass 4), final consistency check (Pass 5).
