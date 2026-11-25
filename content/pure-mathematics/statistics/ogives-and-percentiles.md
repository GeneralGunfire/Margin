---
title: Ogives and percentiles
youtube_query: Grade 11 ogives cumulative frequency and percentiles
subject: pure-mathematics
topic: Statistics
part: Geometry
term: 3
subtopic: Ogives and percentiles
order: 821
---

> **What you'll learn:** *how* cumulative frequency accumulates a running total, why an **ogive** must always be grounded at `(lower bound of 1st class; 0)` and plotted at **upper class boundaries**, and how to read off quartiles ($Q_1, Q_2, Q_3$), interquartile range ($\text{IQR}$), and any percentile.
>
> **Prerequisites:** [Histograms and polygons](/library/pure-mathematics/statistics/histograms-and-polygons) and five-number summaries ($Q_1, Q_2, Q_3$).

## 1. Running totals create an S-curve

If a histogram asks *"How many learners scored between 40% and 60%?"*, a **cumulative frequency graph (ogive)** asks *"How many learners scored **at most** 60%?"*

As you move right across the intervals, you keep adding the next frequency onto your running total until you reach $n$ at the very last upper boundary:
- **Grounding point:** at the start of the first interval (here $x = 0$), *zero* people have finished yet, so anchor the curve at **$(0;\ 0)$**.
- **Plotting rule:** plot **(upper class boundary ; cumulative frequency)** for every interval—never midpoints!
- **Shape:** because cumulative frequency never shrinks, an ogive always climbs from bottom-left to top-right in a smooth S-curve.

Click $Q_1$, Median $Q_2$, and $Q_3$ below to watch the horizontal read-off guides drop from the cumulative-frequency axis onto the mark axis:

```diagram
name: ogive-quartiles-visual
```

```rule
title: Reading quartiles and percentiles from an ogive of size n
\text{Lower quartile } (Q_1 / 25\text{th percentile}): \quad \text{read } x \text{ at } y = 0{,}25\,n
\text{Median } (Q_2 / 50\text{th percentile}): \quad \text{read } x \text{ at } y = 0{,}50\,n
\text{Upper quartile } (Q_3 / 75\text{th percentile}): \quad \text{read } x \text{ at } y = 0{,}75\,n
\text{Interquartile range: } \text{IQR} = Q_3 - Q_1 \qquad p\text{-th percentile: read } x \text{ at } y = \frac{p}{100}\,n
```

## 2. Two common exam questions from an ogive

```compare
title: Forward vs backward reading on an ogive
left_title: Given a percentage/quartile → find the mark
left:
Start on the vertical **cumulative frequency** axis at $\frac{p}{100}n$, go horizontally across to hit the curve, then drop straight down to read the mark $x$.
right_title: Given a mark → find how many scored above/below it
right:
Start on the horizontal **mark** axis at $x$, go straight up to hit the curve, then read across to get $cf$ (**number $\le x$**). To find **how many scored MORE than $x$**, compute $n - cf$!
```

```tryit
title: Quick check
prompt: An ogive represents the monthly electricity bills of $n = 80$ households. At what vertical cumulative frequency value do you read off **(a)** the upper quartile $Q_3$ and **(b)** the $90\text{th}$ percentile? If $62$ households pay at most R1 500, how many pay **more** than R1 500?
hint: Multiply $0{,}75$ and $0{,}90$ by $n = 80$; for "more than", subtract from $80$.
answer: **(a)** $Q_3$ is read at $0{,}75 \times 80 = 60$. **(b)** The $90\text{th}$ percentile is read at $0{,}90 \times 80 = 72$. Households paying *more* than R1 500 $= 80 - 62 = 18$.
```

## 3. Worked examples

```steps
title: Example 1 (Building a cumulative frequency table & reading backwards): The daily distances (in km) run by 50 athletes are: [0; 5): 6, [5; 10): 12, [10; 15): 18, [15; 20): 10, [20; 25]: 4. List the exact points to plot the ogive, and find the frequencies if given only the ogive.
Anchor at the lower boundary of the first class :: (0;\ 0)
Add running totals and pair with each upper boundary :: (5;\ 6),\; (10;\ 18),\; (15;\ 36),\; (20;\ 46),\; (25;\ 50)
Check total matches $n = 50$ :: \text{Last point } y = 50 = n
Reverse check (finding an interval frequency from an ogive) :: f_{[10;\ 15)} = 36 - 18 = 18
```

```steps
title: Example 2 (Reading IQR and modal class from an ogive): On an ogive of $n = 60$ test scores, $(30;\ 15)$, $(50;\ 38)$, and $(65;\ 45)$ lie on the curve. Find $Q_1$, $Q_3$, and the $\text{IQR}$.
Locate the cumulative position of $Q_1$ :: 0{,}25 \times 60 = 15 \;\Longrightarrow\; Q_1 = 30
Locate the cumulative position of $Q_3$ :: 0{,}75 \times 60 = 45 \;\Longrightarrow\; Q_3 = 65
Subtract to get the middle 50% spread ($\text{IQR}$) :: \text{IQR} = Q_3 - Q_1 = 65 - 30 = 35
```

> **Common mistakes**
>
> - **Plotting at midpoints instead of upper boundaries:** an ogive *always* uses upper boundaries (e.g. $20, 40, 60$).
> - **Forgetting the grounding point `(first lower boundary; 0)`:** starting directly at $(20;\ 4)$ cuts off the bottom of the first interval and breaks $Q_1$ read-offs.
> - **Reading "at most $x$" when the question asks for "at least / more than $x$":** an ogive always shows cumulative frequency $\le x$, so "more than $x$" is $n - cf(x)$.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: A grouped table records the masses (kg) of 40 parcels: $[0;\ 2): 5$, $[2;\ 4): 11$, $[4;\ 6): 14$, $[6;\ 8): 7$, $[8;\ 10]: 3$. Write down all 6 points $(x;\ cf)$ needed to draw the ogive.
A: $(0;\ 0)$, $(2;\ 5)$, $(4;\ 16)$, $(6;\ 30)$, $(8;\ 37)$, $(10;\ 40)$.
---
Q: An ogive of 120 learners' test marks passes through $(42;\ 30)$, $(58;\ 60)$, $(74;\ 90)$, and $(85;\ 108)$. State the median, the interquartile range, and the percentage of learners who scored **more** than 85%.
A: $Q_1$ (at $30$) $= 42$, $Q_2$ (median, at $60$) $= 58$, and $Q_3$ (at $90$) $= 74$. Thus $\text{IQR} = 74 - 42 = 32$. Learners scoring *more* than $85 = 120 - 108 = 12$, which is $\frac{12}{120}\times 100\% = 10\%$.
---
Q: An ogive has plotted points $(10;\ 0)$, $(20;\ 8)$, $(30;\ 22)$, $(40;\ 35)$, and $(50;\ 40)$. Which class interval is the **modal class**?
A: Reconstruct individual frequencies by subtracting adjacent cumulative totals: $[10;\ 20): 8$, $[20;\ 30): 22 - 8 = 14$, $[30;\ 40): 35 - 22 = 13$, $[40;\ 50]: 40 - 35 = 5$. The steepest segment (largest jump, $14$) is **$20 \le x < 30$**, so that is the modal class.
---
Q: **(Exam level)** On an ogive for $n = 60$ delivery times (in minutes), the $40\text{th}$ percentile is $22\text{ min}$, while $48$ deliveries took $35\text{ min}$ or less. **(a)** How many deliveries took $22\text{ min}$ or less? **(b)** What percentage of deliveries took **longer** than $35\text{ min}$?
A: **(a)** $0{,}40 \times 60 = 24$ deliveries. **(b)** Deliveries taking longer than $35\text{ min} = 60 - 48 = 12$, which is $\frac{12}{60} \times 100\% = 20\%$.
```

## Further help

- Siyavula Mathematics Grade 11, [10.2 Ogives](https://www.siyavula.com/read/za/mathematics/grade-11/statistics/10-statistics-02).
