---
title: Variance and standard deviation
youtube_query: Grade 11 variance and standard deviation
subject: pure-mathematics
topic: Statistics
part: Geometry
term: 3
subtopic: Variance and standard deviation
order: 831
---

> **What you'll learn:** *why* we measure spread around the mean by squaring deviations instead of simply adding them, how to compute **variance** and **standard deviation** ($\sigma$) by hand and with a calculator, how to interpret $\bar{x} \pm \sigma$ intervals, and how shifting or scaling a dataset changes $\bar{x}$ and $\sigma$.
>
> **Prerequisites:** Arithmetic mean $\bar{x}$ and square roots.

## 1. Why squaring deviations fixes cancellation

Compare two learner mark lists that both have a mean of $\bar{x} = 70$:
- Learner A: $69, 70, 71$ (tightly clustered around $70$)
- Learner B: $40, 70, 100$ (wildly spread out)

If you try to measure spread by adding every deviation $(x_i - \bar{x})$, both lists sum to **zero** because positives and negatives cancel: $(40 - 70) + (70 - 70) + (100 - 70) = -30 + 0 + 30 = 0$.

Squaring every deviation $(x_i - \bar{x})^2$ makes every distance positive and penalises big gaps heavily. Averaging those squares gives the **variance** ($\sigma^2$); taking the square root brings the units back from "marks squared" to plain marks—that is the **standard deviation** ($\sigma$).

```rule
title: Variance and standard deviation (population formulas used in CAPS)
\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n} \qquad \text{Variance: } \sigma^2 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n} \qquad \text{Standard deviation: } \sigma = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n}}
```

## 2. Interpreting $\bar{x} \pm \sigma$ and data transformations

Exams frequently test two conceptual questions about standard deviation:
1. **Counting values within one standard deviation:** find the interval $(\bar{x} - \sigma;\ \bar{x} + \sigma)$ and count how many raw data values lie strictly inside (or between) those two boundaries.
2. **Adding vs multiplying every value by a constant:**

| Change to every data value $x_i$ | New mean | New standard deviation | Why? |
| :--- | :--- | :--- | :--- |
| Add a constant ($x_i + c$) | $\bar{x} + c$ | **Unchanged ($\sigma$)** | Sliding every dot right by $c$ moves the centre, not the spacing between dots |
| Multiply by a positive constant ($k \cdot x_i$) | $k \cdot \bar{x}$ | **$k \cdot \sigma$** | Doubling every mark doubles both the mean and the gaps between marks |

```compare
title: Small σ vs Large σ
left_title: Small standard deviation (σ small)
left:
Data points huddle tightly near the mean $\bar{x}$—consistent performance with very little variation.
right_title: Large standard deviation (σ large)
right:
Data points scatter widely above and below $\bar{x}$—inconsistent results with high spread.
```

```tryit
title: Quick check
prompt: A class of 25 learners writes a test with mean $\bar{x} = 62\%$ and standard deviation $\sigma = 8\%$. If the teacher adds a **bonus of 5%** to every learner's mark, state the new mean and the new standard deviation.
hint: Adding $5$ shifts the entire dataset up together without stretching the distances between marks!
answer: The new mean becomes $62\% + 5\% = 67\%$, while the standard deviation **stays unchanged at $\sigma = 8\%$**!
```

## 3. Worked examples

```steps
title: Example 1 (Step-by-step table by hand): Calculate the mean, variance, and standard deviation of the dataset $4,\ 7,\ 8,\ 9,\ 12$.
Compute the mean $\bar{x}$ :: \bar{x} = \frac{4 + 7 + 8 + 9 + 12}{5} = \frac{40}{5} = 8
Find each deviation $(x_i - 8)$ :: -4,\; -1,\; 0,\; 1,\; 4
Square each deviation $(x_i - 8)^2$ :: 16,\; 1,\; 0,\; 1,\; 16
Sum the squares and divide by $n = 5$ for variance :: \sigma^2 = \frac{16 + 1 + 0 + 1 + 16}{5} = \frac{34}{5} = 6{,}8
Take the square root for standard deviation :: \sigma = \sqrt{6{,}8} \approx 2{,}61
```

```steps
title: Example 2 (Using the mean ± σ interval): The heights (in cm) of 8 plants are $12, 15, 16, 18, 19, 20, 22, 26$, with $\bar{x} = 18{,}5\text{ cm}$ and $\sigma \approx 4{,}09\text{ cm}$. How many plants lie within one standard deviation of the mean?
Compute the lower and upper bounds $\bar{x} \pm \sigma$ :: 18{,}5 - 4{,}09 = 14{,}41\text{ cm} \quad\text{and}\quad 18{,}5 + 4{,}09 = 22{,}59\text{ cm}
Test each plant height against $(14{,}41;\ 22{,}59)$ :: 15,\; 16,\; 18,\; 19,\; 20,\; 22 \quad (\text{12 and 26 fall outside})
Count how many fall inside :: 6 \text{ plants } (75\% \text{ of the sample})
```

> **Common mistakes**
>
> - **Forgetting to divide by $n$ before taking the square root** (or mixing up $\sigma x$ with sample $sx$ on a scientific calculator—CAPS Grade 11 uses population standard deviation $\sigma x$ divided by $n$, not $s x$ divided by $n - 1$).
> - **Confusing variance ($\sigma^2$) with standard deviation ($\sigma$):** check carefully which one the question asks for, and remember $\sigma = \sqrt{\text{variance}}$.
> - **Thinking $\sigma$ increases when you add $5$ to every score:** shifting all scores equally leaves $\sigma$ completely unchanged.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: Calculate the mean, variance, and standard deviation of $10, 12, 15, 17, 21$ correct to two decimal places.
A: $\bar{x} = \frac{75}{5} = 15$. Deviations: $-5, -3, 0, 2, 6$. Squared deviations: $25, 9, 0, 4, 36$, summing to $74$. Variance $\sigma^2 = \frac{74}{5} = 14{,}8$, and standard deviation $\sigma = \sqrt{14{,}8} \approx 3{,}85$.
---
Q: The variance of a dataset is $12{,}25$. What is its standard deviation? If every number in the dataset is multiplied by $3$, what is the new standard deviation and new variance?
A: $\sigma = \sqrt{12{,}25} = 3{,}5$. Multiplying every value by $3$ multiplies the standard deviation by $3$: new $\sigma = 3 \times 3{,}5 = 10{,}5$, and new variance $= (10{,}5)^2 = 110{,}25$ (which is $3^2 = 9$ times the original variance).
---
Q: Five numbers $6, 9, k, 12, 15$ have a mean of $10$. Find $k$ and then calculate the standard deviation to two decimal places.
A: $\frac{6 + 9 + k + 12 + 15}{5} = 10 \implies 42 + k = 50 \implies k = 8$. Deviations from $10$: $-4, -1, -2, 2, 5$. Squared: $16, 1, 4, 4, 25$, sum $= 50$. Variance $= \frac{50}{5} = 10$, so $\sigma = \sqrt{10} \approx 3{,}16$.
---
Q: **(Exam level)** A dataset of 6 numbers has $\sum (x_i - \bar{x})^2 = 96$ and mean $\bar{x} = 24$. **(a)** Find the standard deviation $\sigma$. **(b)** If an extra value equal to $24$ is added to the dataset, explain without recalculating why the mean stays $24$ and find the new standard deviation to two decimal places.
A: **(a)** $\sigma = \sqrt{\frac{96}{6}} = \sqrt{16} = 4$. **(b)** Adding a value equal to the mean ($24$) adds $0$ to both the average gap and $\sum(x_i - \bar{x})^2$ (since $(24 - 24)^2 = 0$), so $\bar{x} = 24$ stays unchanged while $n$ increases to $7$. New $\sigma = \sqrt{\frac{96}{7}} \approx 3{,}70$ (smaller because the extra central point tightens the spread).
```

## Further help

- Siyavula Mathematics Grade 11, [10.3 Variance and standard deviation](https://www.siyavula.com/read/za/mathematics/grade-11/statistics/10-statistics-03).
