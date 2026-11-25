---
title: Composite solids and contexts
youtube_query: Grade 11 surface area and volume of composite solids
subject: pure-mathematics
topic: Measurement (revision)
part: Geometry
term: 4
subtopic: Composite solids and contexts
order: 1221
---

> **What you'll learn:** how to compute the **volume** and **exposed surface area** of composite solids without double-counting hidden glued faces, how to handle hollowed-out solids, and how to convert between $\text{mm}^3$, $\text{cm}^3$, $\text{m}^3$, and litres cleanly.
>
> **Prerequisites:** [Surface area and volume formulas](/library/pure-mathematics/measurement-revision/surface-area-and-volume-formulas).

## 1. The golden rule of composite solids: Volume adds, Hidden faces vanish

When two 3D shapes are glued together (like an ice-cream cone topped by a hemisphere, or a cylindrical silo with a conical roof):
- **Total Volume** is simple: **add** the volumes of every piece (or **subtract** if a hole/cavity was drilled out).
- **Total Surface Area** is where students lose marks: surface area means **only the outside skin you can paint**! Any flat circular or square faces **glued together on the inside** disappear and must **never** be counted!

```diagram
name: measurement-solids-visual
```

```compare
title: Two pieces glued vs paintable outside skin
left_title: Cylinder + Hemisphere (capsule/silo)
left:
**Volume:** $\pi r^2 h_{\text{cyl}} + \frac{2}{3}\pi r^3$ (just add!).
**Surface Area:** $1$ bottom base ($\pi r^2$) + curved wall ($2\pi r h_{\text{cyl}}$) + curved dome ($2\pi r^2$). The glued circle between them is **hidden inside**!
right_title: Hollowed-out solid (cylinder with conical hole)
right:
**Volume:** $\text{Volume}_{\text{outer}} - \text{Volume}_{\text{hole}}$.
**Surface Area:** drilling a hole *removes* the top flat lid, but **creates a new paintable inside wall** ($+\pi r l$)!
```

## 2. Volume and capacity unit conversions

Remember that **length** conversion factors square for **area** and cube for **volume**:

| Conversion | Multiply / divide by | Why |
| :--- | :--- | :--- |
| $\text{m}^3 \longleftrightarrow \text{cm}^3$ | $\times 100^3 = 1\,000\,000$ | $1\text{ m} = 100\text{ cm}$ in all 3 directions |
| $\text{cm}^3 \longleftrightarrow \text{mm}^3$ | $\times 10^3 = 1\,000$ | $1\text{ cm} = 10\text{ mm}$ in all 3 directions |
| $\text{cm}^3 \longleftrightarrow \text{m}\ell$ | $1\text{ cm}^3 = 1\text{ m}\ell$ | Exact 1-to-1 match |
| $\text{m}^3 \longleftrightarrow \text{litres } (\ell)$ | $1\text{ m}^3 = 1\,000\ \ell$ | $1\,000\,000\text{ m}\ell \div 1\,000 = 1\,000\ \ell$ |

```tryit
title: Quick check
prompt: A solid rocket model consists of a cylinder of radius $5\text{ cm}$ and height $20\text{ cm}$, topped by a cone of the same radius $5\text{ cm}$ and slant height $13\text{ cm}$. Which circular faces are visible on the outside, and what is the **total external surface area** in terms of $\pi$?
hint: Only the bottom base of the cylinder is exposed; the top of the cylinder and bottom of the cone are glued together!
answer: Exposed area $= \text{bottom base } (\pi r^2) + \text{cylinder wall } (2\pi r h) + \text{cone wall } (\pi r l) = \pi(5)^2 + 2\pi(5)(20) + \pi(5)(13) = 25\pi + 200\pi + 65\pi = 290\pi\text{ cm}^2$.
```

## 3. Worked examples

```steps
title: Example 1 (Silo capacity in litres): A cylindrical grain tank has diameter $4\text{ m}$ and cylinder wall height $5\text{ m}$, topped by a conical roof of vertical height $1{,}5\text{ m}$. Calculate its total volume in $\text{m}^3$ and capacity in litres (to the nearest litre).
Find radius $r$ :: r = \frac{4}{2} = 2\text{ m}
Compute volume of cylinder :: V_{\text{cyl}} = \pi(2)^2(5) = 20\pi\text{ m}^3
Compute volume of conical roof :: V_{\text{cone}} = \frac{1}{3}\pi(2)^2(1{,}5) = 2\pi\text{ m}^3
Add volumes and convert $1\text{ m}^3 = 1\,000\ \ell$ :: V_{\text{total}} = 22\pi \approx 69{,}115\text{ m}^3 \;\Longrightarrow\; 69\,115\text{ litres}
```

```steps
title: Example 2 (Exam level — melting & recasting): A solid metal sphere of radius $6\text{ cm}$ is melted down and recast into solid right cones each of radius $3\text{ cm}$ and height $4\text{ cm}$. How many complete cones can be made?
Compute volume of the sphere :: V_{\text{sphere}} = \frac{4}{3}\pi(6)^3 = 288\pi\text{ cm}^3
Compute volume of one small cone :: V_{\text{cone}} = \frac{1}{3}\pi(3)^2(4) = 12\pi\text{ cm}^3
Divide total metal volume by one cone (notice $\pi$ cancels cleanly!) :: N = \frac{288\pi}{12\pi} = 24 \text{ cones}
```

> **Common mistakes**
>
> - **Adding the individual $SA$ formulas of two shapes directly:** that counts the hidden glued seam **twice**! Always build composite surface area piece-by-piece from the outside skin.
> - **Multiplying $\text{m}^3$ by $100$ instead of $100^3 = 1\,000\,000$** when converting to $\text{cm}^3$.
> - **Confusing total height of a composite solid with the height of one piece:** if a hemisphere of radius $r$ sits on a cylinder and the *total height* is $H$, then the cylinder height alone is $H - r$!

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: A cylindrical mug of internal radius $4\text{ cm}$ and internal height $10\text{ cm}$ is filled to the brim with coffee. How many millilitres ($\text{m}\ell$) of coffee does it hold, to the nearest millilitre?
A: $V = \pi(4)^2(10) = 160\pi \approx 502{,}65\text{ cm}^3$. Since $1\text{ cm}^3 = 1\text{ m}\ell$, it holds **$503\text{ m}\ell$**.
---
Q: A pharmaceutical capsule is shaped like a cylinder of length $12\text{ mm}$ and diameter $6\text{ mm}$ with a hemisphere attached at **both** ends. Calculate its total external surface area and total volume in terms of $\pi$.
A: $r = 3\text{ mm}$. Two hemispheres equal one full sphere ($SA = 4\pi r^2$, $V = \frac{4}{3}\pi r^3$), plus the cylinder wall ($2\pi r h$): $SA = 4\pi(3)^2 + 2\pi(3)(12) = 36\pi + 72\pi = 108\pi\text{ mm}^2$. Volume $= \frac{4}{3}\pi(3)^3 + \pi(3)^2(12) = 36\pi + 108\pi = 144\pi\text{ mm}^3$.
---
Q: A solid wooden cube of side $10\text{ cm}$ has a cylindrical hole of radius $2\text{ cm}$ drilled straight through from the top face to the bottom face. Calculate the remaining wood volume to one decimal place.
A: $V_{\text{cube}} - V_{\text{cylinder}} = 10^3 - \pi(2)^2(10) = 1\,000 - 40\pi \approx 1\,000 - 125{,}66 = 874{,}3\text{ cm}^3$.
---
Q: **(Exam level)** A solid metal object consists of a cylinder of radius $r$ and height $h$, surmounted by a hemisphere of the same radius $r$. If the **total height** of the object is $14\text{ cm}$ and $r = 3\text{ cm}$, calculate **(a)** the total volume and **(b)** the external surface area, both to one decimal place.
A: Since the hemisphere adds vertical height $r = 3\text{ cm}$, the cylinder height alone is $h = 14 - 3 = 11\text{ cm}$. **(a)** $V = \pi(3)^2(11) + \frac{2}{3}\pi(3)^3 = 99\pi + 18\pi = 117\pi \approx 367{,}6\text{ cm}^3$. **(b)** $SA = \pi(3)^2 + 2\pi(3)(11) + 2\pi(3)^2 = 9\pi + 66\pi + 18\pi = 93\pi \approx 292{,}2\text{ cm}^2$.
```

## Further help

- Siyavula Mathematics Grade 11, [12.2 Right pyramids, cones and spheres](https://www.siyavula.com/read/za/mathematics/grade-11/measurement/12-measurement-02).
