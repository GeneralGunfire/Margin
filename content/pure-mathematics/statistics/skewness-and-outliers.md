---
title: Skewness and outliers
youtube_query: Grade 11 skewness outliers and box and whisker plots
subject: pure-mathematics
topic: Statistics
part: Geometry
term: 3
subtopic: Skewness and outliers
order: 841
---

> **What you'll learn:** how to classify any distribution as **symmetric**, **positively skewed (skewed right)**, or **negatively skewed (skewed left)** using box-and-whisker diagrams or **Mean vs Median**, and how to flag statistical **outliers** mathematically using the $1{,}5\times \text{IQR}$ fence rule.
>
> **Prerequisites:** Five-number summary ($\text{Min}, Q_1, Q_2, Q_3, \text{Max}$), $\text{IQR} = Q_3 - Q_1$, and [Variance and standard deviation](/library/pure-mathematics/statistics/variance-and-standard-deviation).

## 1. Skewness follows the stretched tail

Every box-and-whisker diagram splits ordered data into four quarters of $25\%$ each: $[\text{Min}; Q_1]$, $[Q_1; Q_2]$, $[Q_2; Q_3]$, and $[Q_3; \text{Max}]$. A wider whisker or wider half-box means that quarter of the data is **stretched further out**, forming a tail.

Compare how the **Mean** gets pulled toward that long tail while the **Median ($Q_2$)** stays anchored in the middle:

```diagram
name: skewness-box-visual
```

| Distribution shape | Box-and-whisker visual | Mean vs Median | Interpretation |
| :--- | :--- | :--- | :--- |
| **Symmetric** | Left and right whiskers/box halves are nearly equal | $\text{Mean} \approx \text{Median}$ | Values balance evenly around the centre |
| **Positively skewed (skewed right)** | Long tail stretches to the **right** ($Q_3 - Q_2 > Q_2 - Q_1$) | $\text{Mean} > \text{Median}$ | Most values sit low; a few very large values pull the mean up |
| **Negatively skewed (skewed left)** | Long tail stretches to the **left** ($Q_2 - Q_1 > Q_3 - Q_2$) | $\text{Mean} < \text{Median}$ | Most values sit high; a few very small values pull the mean down |

## 2. Testing mathematically for outliers

An **outlier** is an unusually high or low data point that sits far outside the typical middle $50\%$ spread ($\text{IQR}$). In CAPS Statistics, a value $x$ is an outlier if it falls outside the **lower fence** or **upper fence**:

```rule
title: Outlier fence formulas
\text{Lower fence} = Q_1 - 1{,}5 \times \text{IQR} \qquad \text{Upper fence} = Q_3 + 1{,}5 \times \text{IQR}
\text{Any observation } x < Q_1 - 1{,}5\,\text{IQR} \;\text{ or }\; x > Q_3 + 1{,}5\,\text{IQR} \;\text{ is an outlier.}
```

Why does this matter? Because the **mean** and **standard deviation** use every single number in their sums, **outliers pull $\bar{x}$ and inflate $\sigma$**. By contrast, the **median ($Q_2$)** and **$\text{IQR}$** depend only on middle positions, so they stay stable when an outlier appears.

```tryit
title: Quick check
prompt: A dataset has $Q_1 = 22$, $Q_2 = 28$, $Q_3 = 40$, and maximum value $70$. **(a)** Calculate the upper outlier fence and test whether $70$ is an outlier. **(b)** Describe the skewness of the data inside the box.
hint: Compute $\text{IQR} = 40 - 22 = 18$, then add $1{,}5 \times 18$ to $Q_3$. Compare $Q_3 - Q_2$ against $Q_2 - Q_1$.
answer: **(a)** $\text{IQR} = 18 \implies \text{Upper fence} = 40 + 1{,}5(18) = 40 + 27 = 67$. Since $70 > 67$, **$70$ is an outlier**. **(b)** $Q_3 - Q_2 = 12$ is twice as wide as $Q_2 - Q_1 = 6$, so the data is **positively skewed (skewed to the right)**.
```

## 3. Worked examples

```steps
title: Example 1 (Identifying skewness without a diagram): A sample of 35 learners wrote a quiz. The median score is $68\%$, the mean is $59\%$, $Q_1 = 46\%$, and $Q_3 = 76\%$. Describe the skewness and justify your answer in two ways.
Compare Mean and Median :: \text{Mean } (59\%) < \text{Median } (68\%) \;\Longrightarrow\; \text{mean is pulled left}
Compare the box half-widths around $Q_2$ :: Q_2 - Q_1 = 68 - 46 = 22 \quad\text{vs}\quad Q_3 - Q_2 = 76 - 68 = 8
Conclude skewness :: \text{Negatively skewed (skewed to the left) because } \text{Mean} < \text{Median} \text{ and } Q_2 - Q_1 > Q_3 - Q_2
```

```steps
title: Example 2 (Full outlier check on raw data): Check the ordered dataset $11, 14, 15, 16, 18, 20, 22, 23, 39$ for any outliers.
Find the median $Q_2$ (5th of 9 values) :: Q_2 = 18
Find $Q_1$ (median of lower 4 values $11, 14, 15, 16$) and $Q_3$ (median of upper 4 values $20, 22, 23, 39$) :: Q_1 = \frac{14 + 15}{2} = 14{,}5 \qquad Q_3 = \frac{22 + 23}{2} = 22{,}5
Compute $\text{IQR}$ :: \text{IQR} = 22{,}5 - 14{,}5 = 8
Calculate both outlier fences :: \text{Lower} = 14{,}5 - 1{,}5(8) = 2{,}5 \qquad \text{Upper} = 22{,}5 + 1{,}5(8) = 34{,}5
Compare $\text{Min} = 11$ and $\text{Max} = 39$ against the fences :: 11 \ge 2{,}5 \text{ (not an outlier)}, \quad 39 > 34{,}5 \text{ (39 IS an outlier)}
```

> **Common mistakes**
>
> - **Saying "skewed left" when the box sits on the left:** skewness is named after the **direction of the long tail**, not the side where the box crowds! A box pushed left with a long right whisker is **skewed right (positively skewed)**.
> - **Using `Mean ± 1.5 × IQR` for outlier fences:** always anchor fences at **$Q_1 - 1{,}5\,\text{IQR}$** and **$Q_3 + 1{,}5\,\text{IQR}$**.

## 4. Practice

Try each question on paper before opening the worked answer.

```questions
Q: In a monthly sales report, the median house price in a suburb is R1,4 million while the mean price is R2,1 million. What is the skewness of the house prices, and why does this happen?
A: **Positively skewed (skewed right)**, because $\text{Mean} > \text{Median}$. A few ultra-expensive mansions pull the arithmetic mean far above the typical median price.
---
Q: A box-and-whisker plot shows $\text{Min} = 12$, $Q_1 = 24$, $Q_2 = 30$, $Q_3 = 36$, and $\text{Max} = 48$. State the skewness of the distribution and verify if either extreme is an outlier.
A: $Q_2 - Q_1 = 6 = Q_3 - Q_2$ and both whiskers have length $12$, so the distribution is **symmetric**. $\text{IQR} = 12$; fences are $24 - 18 = 6$ and $36 + 18 = 54$. Since $12 > 6$ and $48 < 54$, there are **no outliers**.
---
Q: The five-number summary of 20 commute times (minutes) is $(8;\ 25;\ 31;\ 35;\ 49)$. Test mathematically whether $8$ or $49$ is an outlier.
A: $\text{IQR} = 35 - 25 = 10$. Lower fence $= 25 - 1{,}5(10) = 10$; upper fence $= 35 + 1{,}5(10) = 50$. Since $8 < 10$, **$8$ is a low outlier**; $49 < 50$, so $49$ is not an outlier.
---
Q: **(Exam level)** A dataset of 15 observations has mean $52$, median $54$, and standard deviation $6{,}4$. One misrecorded observation of $98$ is corrected down to $53$. State—without computing exact numbers—whether the **mean**, **median**, and **standard deviation** will increase, decrease, or remain the same.
A: Replacing $98$ with $53$ reduces the total sum, so the **mean decreases**. Because $98$ lay above the median $54$ and $53$ moves below $54$, the 8th ranked value shifts one position down toward $53$—so the **median either remains $54$ or decreases slightly** (depending on whether the old 7th value equalled $54$). Meanwhile, the **standard deviation definitely decreases** because pulling an extreme upper outlier ($98$) close to the mean ($53$) sharply shrinks the spread.
```

## Further help

- Siyavula Mathematics Grade 11, [10.4 Symmetric and skewed data](https://www.siyavula.com/read/za/mathematics/grade-11/statistics/10-statistics-04).
