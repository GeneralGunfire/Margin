---
title: Histograms and polygons
youtube_query: Grade 11 histograms and frequency polygons
subject: pure-mathematics
topic: Statistics
part: Geometry
term: 3
subtopic: Histograms and frequency polygons
order: 811
---

> **What you'll learn:** the critical difference between a bar graph and a histogram, how to draw a **frequency polygon** from grouped data, why you must anchor the polygon to the horizontal axis using two extra zero-frequency midpoints, and how to estimate the **mean** and **modal class** from grouped tables.
>
> **Prerequisites:** Reading frequency tables, class intervals, and calculating an arithmetic mean.

## 1. Bars vs histograms: why the gaps disappear

A **bar graph** displays *discrete categories* (like favourite sports or car brands), so gaps sit between the bars. A **histogram** displays *continuous numerical intervals* (like test percentages $0 \le x < 20$, $20 \le x < 40$, ...): because $20$ flows straight into the next interval with no missing numbers, **adjacent rectangles touch with zero gaps**.

A **frequency polygon** turns that same shape into a crisp line graph:
1. Plot a dot at each interval's **class midpoint** $\left(\frac{\text{lower} + \text{upper}}{2};\ \text{frequency}\right)$.
2. Join adjacent dots with **straight line segments** (using a ruler, never a smooth curve).
3. Close the polygon cleanly onto the horizontal axis by adding two **imaginary empty intervals** before the first bin and after the last bin!

Toggle between the histogram, the frequency polygon, and both overlaid below:

```diagram
name: histogram-polygon-visual
```

```rule
title: Grouped-data essentials
\text{Class midpoint: } x_m = \frac{\text{lower bound} + \text{upper bound}}{2}
\text{Estimated mean: } \bar{x} \approx \frac{\sum (f \cdot x_m)}{n} \qquad \left(n = \sum f\right)
```

## 2. How to read a frequency polygon accurately

Because the frequency polygon connects the **midpoints** of every bar across the top, the total area under the polygon equals the total area of the histogram rectangles (provided all class widths are equal).

| Feature | How to find it from a grouped table or histogram |
| :--- | :--- |
| **Sample size ($n$)** | Sum all frequencies: $n = f_1 + f_2 + \dots + f_k$ |
| **Modal class** | The class interval with the **highest frequency** (tallest bar / highest dot) |
| **Estimated mean ($\bar{x}$)** | Multiply each class midpoint $x_m$ by its frequency $f$, sum, and divide by $n$ |
| **Polygon closing anchors** | One half-width below the first lower bound and one half-width above the last upper bound (both at $f = 0$) |

```compare
title: Histogram vs Frequency Polygon
left_title: Continuous boundaries (Histogram)
left:
Rectangle edges sit on the **class boundaries** ($0, 20, 40, \dots$), and bars touch side by side.
right_title: Midpoints + zero anchors (Polygon)
right:
Dots sit above the **midpoints** ($10, 30, 50, \dots$), plus anchor dots at $(-10;\ 0)$ and $(110;\ 0)$ so the shape forms a closed polygon.
```

```tryit
title: Quick check
prompt: A frequency table has equal class intervals $10 \le t < 20$, $20 \le t < 30$, and $30 \le t < 40$ with frequencies $3$, $7$, and $5$. State the coordinates of the **two closing anchor points** on the $t$-axis for its frequency polygon, and identify the **modal class**.
hint: Class width is $10$, and the real midpoints are $15, 25, 35$. Step one width ($10$) left of $15$ and right of $35$!
answer: Anchor points on the axis are **$(5;\ 0)$** and **$(45;\ 0)$** (with frequency $0$). The **modal class** is **$20 \le t < 30$** because it has the highest frequency ($7$).
```

## 3. Worked examples

```steps
title: Example 1 (Estimated mean from grouped data): Using the 40 learner test scores in the diagram above — [0; 20): 4, [20; 40): 9, [40; 60): 14, [60; 80): 8, [80; 100]: 5 — estimate the mean mark and state the modal class.
Find each midpoint $x_m$ and multiply by $f$ :: 10(4) + 30(9) + 50(14) + 70(8) + 90(5)
Compute the sum $\sum(f\cdot x_m)$ :: 40 + 270 + 700 + 560 + 450 = 2\,020
Divide by $n = 40$ :: \bar{x} \approx \frac{2\,020}{40} = 50{,}5
Identify the modal class (highest frequency $14$) :: \text{Modal class: } 40 \le x < 60
```

```steps
title: Example 2 (Finding an unknown frequency from a given mean): Thirty parcels have masses recorded as [0; 4): 6, [4; 8): k, [8; 12): 10, [12; 16]: 4. Find $k$ and estimate the mean mass.
Use the total sample size $n = 30$ :: 6 + k + 10 + 4 = 30 \;\Longrightarrow\; k = 10
List the class midpoints :: x_m = 2,\; 6,\; 10,\; 14
Calculate $\sum (f\cdot x_m)$ :: 6(2) + 10(6) + 10(10) + 4(14) = 12 + 60 + 100 + 56 = 228
Divide by $30$ :: \bar{x} \approx \frac{228}{30} = 7{,}6\text{ kg}
```

> **Common mistakes**
>
> - **Plotting polygon dots at the upper boundaries instead of the midpoints:** upper boundaries belong to *ogives*, never frequency polygons!
> - **Forgetting to close the frequency polygon onto the horizontal axis** (leaving both ends floating in mid-air).
> - **Dividing by the number of rows ($5$) instead of total frequency $n$ ($40$)** when computing the estimated mean.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Why is the mean calculated from a grouped frequency table only an *estimate* of the true mean?
A: The exact raw data values inside each interval are unknown, so we approximate every value in a class by its class midpoint.
---
Q: The heights (in cm) of 25 seedlings are grouped into $[0;\ 10): 4$, $[10;\ 20): 9$, $[20;\ 30): 8$, $[30;\ 40]: 4$. Calculate the estimated mean height and state the modal class.
A: Midpoints are $5, 15, 25, 35$. $\sum(f\cdot x_m) = 4(5) + 9(15) + 8(25) + 4(35) = 20 + 135 + 200 + 140 = 495$. Estimated mean $= \frac{495}{25} = 19{,}8\text{ cm}$. Modal class is $10 \le h < 20$.
---
Q: A frequency polygon is plotted using points $(5;\ 0)$, $(15;\ 6)$, $(25;\ 11)$, $(35;\ 8)$, $(45;\ 3)$, and $(55;\ 0)$. How many observations are in the dataset, and what is the class width?
A: Total observations $n = 6 + 11 + 8 + 3 = 28$. Consecutive midpoints differ by $25 - 15 = 10$, so the class width is $10$ (intervals $10\text{–}20$, $20\text{–}30$, $30\text{–}40$, $40\text{–}50$).
---
Q: **(Exam level)** A class of 20 learners has grouped marks $[0;\ 20): 2$, $[20;\ 40): a$, $[40;\ 60): b$, $[60;\ 80]: 3$. If the estimated mean mark is $43$, find $a$ and $b$.
A: Total frequency gives $2 + a + b + 3 = 20 \implies a + b = 15$ (1). Estimated mean $43$ gives $\dfrac{2(10) + 30a + 50b + 3(70)}{20} = 43 \implies 20 + 30a + 50b + 210 = 860 \implies 30a + 50b = 630 \implies 3a + 5b = 63$ (2). Substitute $a = 15 - b$ into (2): $3(15 - b) + 5b = 63 \implies 45 + 2b = 63 \implies 2b = 18 \implies b = 9$, so $a = 6$.
```

## Further help

- Siyavula Mathematics Grade 11, [10.1 Histograms and frequency polygons](https://www.siyavula.com/read/za/mathematics/grade-11/statistics/10-statistics-01).
