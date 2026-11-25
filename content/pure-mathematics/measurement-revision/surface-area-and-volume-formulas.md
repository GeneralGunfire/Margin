---
title: Surface area and volume formulas
youtube_query: Grade 11 surface area and volume formulas
subject: pure-mathematics
topic: Measurement (revision)
part: Geometry
term: 4
subtopic: Surface area and volume formulas
order: 1211
---

> **What you'll learn:** *why* cones and pyramids carry the $\frac{1}{3}$ factor compared to cylinders and prisms, how to find slant height $l$ via Pythagoras before calculating cone or pyramid surface area, and the **$k^2$ vs $k^3$ scaling law** when dimensions multiply by $k$.
>
> **Prerequisites:** Area of circles ($\pi r^2$), circumference ($2\pi r$), and Pythagoras' theorem.

## 1. Prisms, pyramids, cones, and spheres

Every standard solid in Grade 11 falls into one of three geometric families:
1. **Uniform cross-section (cylinder / prism):** $\text{Volume} = (\text{base area}) \times h$.
2. **Pointed apex (cone / right pyramid):** takes **one-third** the volume of its matching prism/cylinder: $\text{Volume} = \frac{1}{3}(\text{base area}) \times h$.
3. **Sphere:** completely determined by radius $r$ alone.

Switch between the four solids and toggle **$k = 2$** below to watch how every dimension scales:

```diagram
name: measurement-solids-visual
```

```rule
title: CAPS Grade 11 measurement formula sheet
\begin{aligned}
\text{Right cylinder: } & SA = 2\pi r^2 + 2\pi r h, && V = \pi r^2 h \\
\text{Right cone: } & SA = \pi r^2 + \pi r l \;\; \bigl(l = \sqrt{r^2 + h^2}\bigr), && V = \frac{1}{3}\pi r^2 h \\
\text{Right square pyramid: } & SA = b^2 + 4\!\left(\frac{1}{2}b\,h_s\right), && V = \frac{1}{3}b^2 h \\
\text{Sphere: } & SA = 4\pi r^2, && V = \frac{4}{3}\pi r^3
\end{aligned}
```

## 2. Vertical height $h$ vs slant height $l$ (or $h_s$)

Students lose easy marks by plugging the wrong height into a cone or pyramid formula:
- **Volume** *always* uses the **perpendicular (vertical) height $h$** straight down to the centre of the base.
- **Curved / triangular surface area** *always* uses the **slant height**:
  - In a **cone**: $l = \sqrt{r^2 + h^2}$.
  - In a **square pyramid** (base side $b$): the horizontal leg from the centre of the square to the midpoint of a side is $\frac{b}{2}$, so the slant height of each triangular face is $h_s = \sqrt{\left(\frac{b}{2}\right)^2 + h^2}$.

## 3. How scaling by $k$ affects surface area and volume

Whenever *all* dimensions of a 3D solid are multiplied by a scale factor $k$:
- **Lengths** (radius, height, perimeter) multiply by **$k$**.
- **Surface area** (multiplying 2 lengths) multiplies by **$k^2$**.
- **Volume** (multiplying 3 lengths) multiplies by **$k^3$**.

```tryit
title: Quick check
prompt: A solid cone has radius $r = 6\text{ cm}$ and vertical height $h = 8\text{ cm}$. **(a)** Find its slant height $l$ and total surface area in terms of $\pi$. **(b)** If a similar cone has every dimension multiplied by $k = 3$, by what factor does its volume increase?
hint: Use $l = \sqrt{r^2 + h^2}$ first; for scaling, remember volume scales by $k^3$.
answer: **(a)** $l = \sqrt{6^2 + 8^2} = 10\text{ cm}$. $SA = \pi(6)^2 + \pi(6)(10) = 36\pi + 60\pi = 96\pi\text{ cm}^2$. **(b)** Volume multiplies by $3^3 = 27$.
```

## 4. Worked examples

```steps
title: Example 1 (Square pyramid): A right pyramid has a square base of side $b = 12\text{ cm}$ and perpendicular height $h = 8\text{ cm}$. Calculate its volume and total surface area.
Compute the volume using vertical height $h = 8$ :: V = \frac{1}{3}(12)^2(8) = \frac{1}{3}(144)(8) = 384\text{ cm}^3
Find the slant height $h_s$ of one triangular face using half-base $\frac{12}{2} = 6$ :: h_s = \sqrt{6^2 + 8^2} = \sqrt{100} = 10\text{ cm}
Sum the square base and 4 identical triangular faces :: SA = 12^2 + 4\!\left(\frac{1}{2}\cdot 12 \cdot 10\right) = 144 + 240 = 384\text{ cm}^2
```

```steps
title: Example 2 (Working backwards & scaling): A cylindrical tin holds $500\text{ cm}^3$ of paint when its radius is $4\text{ cm}$. **(a)** Calculate its height $h$ to two decimal places. **(b)** If a mega-tin has **double** the radius and **double** the height ($k = 2$), how much paint does it hold?
Substitute $V = 500$ and $r = 4$ into cylinder volume :: 500 = \pi (4)^2 h = 16\pi h
Solve for $h$ :: h = \frac{500}{16\pi} \approx 9{,}95\text{ cm}
Apply volume scaling $k^3$ with $k = 2$ :: V_{\text{new}} = 2^3 \times 500 = 8 \times 500 = 4\,000\text{ cm}^3
```

> **Common mistakes**
>
> - **Using vertical height $h$ instead of slant height $l$ in $\pi r l$** (or vice versa in $\frac{1}{3}\pi r^2 h$).
> - **Using diameter instead of radius** when a problem gives "diameter $= 10\text{ cm}$" (halve to $r = 5\text{ cm}$ immediately!).
> - **Adding $\pi r^2$ twice on an open container:** if a cylinder or cone has an open top/base, include **only one** circular base (or none if open at both ends).

## 5. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Calculate the total surface area and volume of a closed cylinder with diameter $14\text{ cm}$ and height $10\text{ cm}$, correct to two decimal places.
A: Radius $r = 7\text{ cm}$. $SA = 2\pi(7)^2 + 2\pi(7)(10) = 98\pi + 140\pi = 238\pi \approx 747{,}70\text{ cm}^2$. $V = \pi(7)^2(10) = 490\pi \approx 1\,539{,}38\text{ cm}^3$.
---
Q: A solid hemisphere (half-sphere) has radius $r = 6\text{ cm}$. Calculate its **total** surface area in terms of $\pi$.
A: Curved dome $= \frac{1}{2}(4\pi r^2) = 2\pi r^2$, plus the flat circular base $= \pi r^2$, giving $SA_{\text{hemisphere}} = 3\pi r^2 = 3\pi(36) = 108\pi\text{ cm}^2$.
---
Q: A sphere has surface area $144\pi\text{ m}^2$. Calculate its radius and its volume in terms of $\pi$.
A: $4\pi r^2 = 144\pi \implies r^2 = 36 \implies r = 6\text{ m}$. Then $V = \frac{4}{3}\pi(6)^3 = \frac{4}{3}\pi(216) = 288\pi\text{ m}^3$.
---
Q: **(Exam level)** A right cone has slant height $l = 13\text{ cm}$ and base diameter $10\text{ cm}$. **(a)** Calculate its volume to one decimal place. **(b)** If only the radius is doubled while the vertical height stays the same, by what factor does the volume change?
A: **(a)** $r = 5\text{ cm}$, so $h = \sqrt{13^2 - 5^2} = 12\text{ cm}$. Volume $= \frac{1}{3}\pi(5)^2(12) = 100\pi \approx 314{,}2\text{ cm}^3$. **(b)** Since $V = \frac{1}{3}\pi r^2 h$, replacing $r$ with $2r$ multiplies $r^2$ by $4$, so volume multiplies by **$4$** (not $8$, because $h$ did not double!).
```

## Further help

- Siyavula Mathematics Grade 11, [12.1 Area of a polygon and solids](https://www.siyavula.com/read/za/mathematics/grade-11/measurement/12-measurement-01).
