---
title: Understanding Algorithm Analysis
tags: ["DSA", "Data Structures", "Algorithms"]
date: 2024-12-07
description: A post on analyzing the efficiency of algorithms.
author: a2ys
thumbnail: /thumbnails/algorithmic-analysis.webp
series: dsa
featured: true
---

## Introduction

For designing better algorithms, one must know how to analyze their efficiency. Even though you may not be able to predict the exact runtime of an algorithm, you can estimate its performance using algorithm analysis tools.

We will explore the mathematics behind algorithm analysis, common time complexities, and practical strategies for optimizing performance. After reading this post, you will be better equipped to evaluate and improve the efficiency of your algorithms, and will be able to predict the performance of an algorithm!

## Table of Contents

- [Why Analyze Algorithms?](#why-analyze-algorithms)
- [Time Complexity: The Basics](#time-complexity-the-basics)
  - [Time Complexity Notations](#time-complexity-notations)
  - [Calculating Time Complexity](#calculating-time-complexity)
- [Time Complexity: a step forward](#time-complexity-a-step-forward)
  - [Counting Operations/Iterations Method](#counting-operationsiterations-method)
  - [Recurrence Relations Method](#recurrence-relations-method)
- [Time Complexity: Counting Operations/Iterations Method](#time-complexity-counting-operationsiterations-method)
- [Building Up: Recursive Functions and Recurrence Relations](#building-up-recursive-functions-and-recurrence-relations)
  - [What is a Recurrence Relation?](#what-is-a-recurrence-relation)
- [Time Complexity: Solving Recurrence Relations](#time-complexity-solving-recurrence-relations)
  - [Substitution Method](#substitution-method)
  - [Recurrence Tree Method](#recurrence-tree-method)
  - [Master Theorem](#master-theorem)
  - [Additional: Master Theorem for reducing recurrences](#additional-master-theorem-for-reducing-recurrences)
    - [A challenge for you ♨️](#a-challenge-for-you-️)
- [Mathematics and Computer Science: Generating Functions](#mathematics-and-computer-science-generating-functions)
- [A Pit Stop: Time Complexity of the Fibonacci Sequence](#a-pit-stop-time-complexity-of-the-fibonacci-sequence)
  - [Iterative Fibonacci](#iterative-fibonacci)
  - [Recursive Fibonacci: The Golden Ratio](#recursive-fibonacci-the-golden-ratio)
- [Common Time Complexities](#common-time-complexities)
- [Steps to Analyze Time Complexity](#steps-to-analyze-time-complexity)
  - [Best, Average, and Worst Cases](#best-average-and-worst-cases)
- [Space Complexity](#space-complexity)
  - [Why Space Complexity Matters?](#why-space-complexity-matters)
  - [Components of Space Complexity](#components-of-space-complexity)
  - [Key Scenarios](#key-scenarios)
  - [Steps to Analyze Space Complexity](#steps-to-analyze-space-complexity)
- [Balancing Time and Space](#balancing-time-and-space)
  - [Best Practices for Space Optimization](#best-practices-for-space-optimization)
- [Practice Problems](#practice-problems)
- [Looking Ahead](#looking-ahead)

## Why Analyze Algorithms?

Algorithm analysis serves several critical purposes:

- **Evaluate Efficiency:** Understand how an algorithm's performance scales with increasing input size.
- **Optimize Resource Usage:** Balance time and memory requirements for practical implementations.
- **Enhance Scalability:** Design algorithms capable of managing large datasets and computational demands.

By thoroughly analyzing an algorithm's behavior, you can identify inefficiencies and improve the overall performance of your code.

## Time Complexity: The Basics

Time complexity measures the relationship between an algorithm's runtime and the size of its input, typically denoted as Order of a function of $n$.

#### Time Complexity Notations

We analyze time complexity using three primary notations:

1. **Big O Notation ($O$):** Describes the upper bound of an algorithm's runtime.
2. **Omega Notation ($\Omega$):** Represents the lower bound of an algorithm's runtime.
3. **Theta Notation ($\Theta$):** Denotes the tight bound of an algorithm's runtime.

The Big O notation is the most commonly used, providing a worst-case performance guarantee. Analysis of an algorithm is generally done using the method of [Asymptotic Analysis](https://en.wikipedia.org/wiki/Asymptotic_analysis).

Asymptotic analysis is a method of describing limiting behavior, focusing on the performance of algorithms as input sizes grow towards infinity. Asymptotic analysis is not a part I will cover in this post, but it is a crucial concept to understand when analyzing algorithms.

#### Calculating Time Complexity

To determine the time complexity of an algorithm, we evaluate the number of basic operations executed as a function of the input size. We then express this relationship using Big O notation.

Mathematically, we write the time complexity of an algorithm as $O(f(n))$, where $f(n)$ represents the number of operations performed for an input of size $n$.

The time complexity of an algorithm can be linear, logarithmic, quadratic, exponential, or factorial, depending on the growth rate of the function $f(n)$.

Order of a function of $n$ is a mathematical concept that describes the behavior of a function as the input size $n$ approaches infinity. The order of a function is denoted using Big O notation.

Examples of finding order of a function of $n$:

- $f(n) = 5n + 3$ is $O(n)$.
- $f(n) = 3n^2 + 2n + 1$ is $O(n^2)$.
- $f(n) = 2^n + 3n$ is $O(2^n)$.
- $f(n) = n! + 2n$ is $O(n!)$.
- $f(n) = \log n + 3$ is $O(\log n)$.
- $f(n) = 1$ is $O(1)$.
- $f(n) = n^2 + n\log n$ is $O(n^2)$.
- $f(n) = 2n^3 + 3n^2 + 4n + 5$ is $O(n^3)$.

When finding the order of a function of $n$, we ignore constants and lower-order terms. This simplification helps us focus on the dominant factor that determines the algorithm's performance. Thus we are left with the most significant term that influences the algorithm's runtime.

There are several methods to analyze time complexity, including:

- **Counting Operations:** Enumerate the number of basic operations executed.
- **Recurrence Relations:** Formulate recursive equations to model the algorithm's behavior.
- **Amortized Analysis:** Analyze the average time taken per operation over a sequence of operations.

## Time Complexity: a step forward

In this section, we will look at the methods of time complexity analysis. We will discuss the counting operations/iterations method and the recurrence relations method. These methods are essential for understanding the performance of algorithms and predicting their behavior as the input size grows.

#### Counting Operations/Iterations Method

The simplest approach to analyzing time complexity involves counting the number of operations or iterations executed by an algorithm. We express this count as a function of the input size $n$. This method is particularly useful for iterative algorithms with a fixed number of operations per iteration.

Consider the following example:

```python
def sum_of_n(n):
    total = 0
    for i in range(1, n + 1):
        total += i
    return total
```

In this code snippet, the `sum_of_n` function calculates the sum of the first $n$ natural numbers. The loop iterates $n$ times, performing a constant number of operations in each iteration. Therefore, the time complexity of this algorithm is $O(n)$.

#### Recurrence Relations Method

Recurrence relations are equations that describe the runtime of recursive algorithms. By formulating a recurrence relation, we can model the algorithm's behavior and derive its time complexity.

Consider the following example:

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)
```

The `fibonacci` function calculates the $n^{\text{th}}$ Fibonacci number using a recursive approach. To analyze its time complexity, we can formulate a recurrence relation:

$$
T(n) = T(n - 1) + T(n - 2) + O(1)
$$

Here, $T(n)$ represents the runtime of the `fibonacci` function for an input of size $n$. The recurrence relation captures the recursive nature of the algorithm, allowing us to derive its time complexity. You will learn more about solving recurrence relations to get the time complexity in the upcoming sections.

## Time Complexity: Counting Operations/Iterations Method

Let's get back to the basics of analyzing time complexity using the counting operations/iterations method. This method is intuitive and straightforward, making it a popular choice for evaluating algorithm performance.

Most of the times, you would not encounter recursive algorithms in real-world applications, and the counting operations method is sufficient for analyzing time complexity. That does not mean you should ignore the other methods; they are essential for understanding the mathematical foundations of algorithm analysis.

By systematically counting the number of operations or iterations performed as a function of the input size
$𝑛$, we can determine the algorithm's time complexity.

**Steps to follow**:

1. Identify the parts of the code contributing to the computational cost (loops, conditionals, etc.).
2. Count the number of operations executed within each block as a function of $n$.
3. Sum these contributions to derive the overall time complexity.

This method is particularly suited for **iterative algorithms**, where the number of iterations is clearly defined.

I'll teach you this part only with examples. Let's begin!

###### Example 1: Linear Iteration

```python
def sum_of_n(n):
    total = 0
    for i in range(1, n + 1):
        total += i
    return total
```

**Analysis**: The loop iterates $n$ times, performing a constant number of operations (increment and addition) during each iteration. Thus, the time complexity is:

$$
O(n)
$$

###### Example 2: Nested Loops (Quadratic Time)

```python
def print_pairs(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n):
            print(arr[i], arr[j])
```

**Analysis**: The outer loop runs $n$ times, and for each iteration of the outer loop, the inner loop also runs $n$ times. This results in $n \times n = n^2$ iterations in total. Therefore, the time complexity is:

$$
O(n^2)
$$

###### Example 3: Logarithmic Time (Binary Search)

```python
def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

**Analysis**: In each iteration of the `while` loop, the search space is halved. Starting with `n` elements, the number of iterations required is approximately $\log_2 n$. Therefore, the time complexity is:

$$
O(\log n)
$$

###### Example 4: Constant Time (Accessing an Array Element)

```python
def get_element(arr, index):
    return arr[index]
```

**Analysis**: Accessing an element in an array by index is a constant-time operation, as it does not depend on the size of the array. Therefore, the time complexity is:

$$
O(1)
$$

#### Let's get tricky!

Now, let's analyze the time complexity of some tricky algorithms, where the counting operations method might not be straightforward.

###### Example 5: Division by 2

```python
def halve_until_one(n):
    while n > 1:
        print(n)
        n //= 2
```

- The value of $n$ is halved in each iteration of the `while` loop.
- This process continues until $n$ becomes $1$, resulting in approximately $\log_2 n$ iterations.
- Time Complexity:

  $$
  O(\log n)
  $$

###### Example 6: Multiplication by 3

```python
def triple_until_n(n):
    i = 1
    while i < n:
        print(i)
        i *= 3
```

- The value of $i$ is multiplied by 3 in each iteration of the `while` loop.
- This process continues until $i \geq n$, resulting in approximately $\log_3 n$ iterations.
- Time Complexity:

  $$
  O(\log_3 n) = O(\frac{\log n}{\log 3}) \approx O(\log n)
  $$

###### Example 7: Exponential Growth

```python
def exponential_growth(n):
    i = 1
    while i < n:
        print(i)
        i *= i
```

- The value of $i$ is squared in each iteration of the `while` loop.
- This process continues until $i \geq n$, resulting in approximately $\log_2 \log_2 n$ iterations.
- Time Complexity:

  $$
  O(\log_2 \log_2 n)
  $$

###### Example 8: Decrement by a Constant Value

```python
def countdown_by_5(n):
    while n > 0:
        print(n)
        n -= 5
```

- The value of $n$ is decremented by 5 in each iteration of the `while` loop.
- This process continues until $n$ becomes $0$, resulting in approximately $n/5$ iterations.
- Time Complexity:

  $$
  O(n)
  $$

###### Example 9: Triangular Nested Loops

```python
def triangular_pattern(n):
    for i in range(1, n + 1):
        for j in range(1, i + 1):
            print(f"({i}, {j})")
```

- The outer loop runs $n$ times, and for each iteration of the outer loop, the inner loop runs $i$ times, where $i$ is the current value of the outer loop variable.
- Total iterations:

  $$
  1 + 2 + 3 + \ldots + n = \sum_{i=1}^{n} i = \frac{n(n + 1)}{2}
  $$

- Time Complexity:

  $$
  O(n^2)
  $$

###### Example 10: Logarithmic Inner Loop

```python
def logarithmic_inner_loop(n):
    for i in range(1, n + 1):
        j = 1
        while j <= i:
            print(f"({i}, {j})")
            j *= 2
```

- The outer loop runs $n$ times.
- For each iteration of the outer loop, the inner loop runs $\log_2 i$ times, since $j$ is doubled in each iteration.
- Total iterations:

  $$
  \log_2 1 + \log_2 2 + \log_2 3 + \ldots + \log_2 n = \sum_{i=1}^{n} \log_2 i
  $$

- Using the approximation for the harmonic series, this evaluates to:

  $$
  O(n \log n)
  $$

###### Example 11: Nested Loops with Dependent Ranges

```python
def dependent_nested_loops(n):
    for i in range(1, n + 1):
        for j in range(1, n - i + 1):
            print(f"({i}, {j})")
```

- The outer loop runs $n$ times.
- For each iteration of the outer loop, the inner loop runs $n - i$ times.
- Total iterations:

  $$
  (n - 1) + (n - 2) + (n - 3) + \ldots + 1 = \sum_{i=1}^{n-1} i = \frac{(n - 1)n}{2}
  $$

- Time Complexity:

  $$
  O(n^2)
  $$

###### Example 12: Nested Loops with Different Ranges

```python
def different_ranges(n, m):
    for i in range(1, n + 1):
        for j in range(1, m + 1):
            print(f"({i}, {j})")
```

- The outer loop runs $n$ times.
- For each iteration of the outer loop, the inner loop runs $m$ times.
- Total iterations:

  $$
  n \times m
  $$

- Time Complexity:

  $$
  O(n \times m)
  $$

###### Example 13: Combination of Multiplicative and Dependent Loops

```python
def mixed_loops(n):
    for i in range(1, n + 1):
        j = i
        while j < n:
            print(f"({i}, {j})")
            j *= 2
```

- The outer loop runs $n$ times.
- For each iteration of the outer loop, the inner loop runs approximately $\log_2 (n/i)$ times.
- Total iterations:

  $$
  \sum_{i=1}^{n} \log_2 \left(\frac{n}{i}\right)
  $$

- This sum approximates to:

  $$
  O(n \log n)
  $$

#### Key Takeaways

Counting operations/iterations is a practical method for analyzing the time complexity of algorithms, especially for iterative algorithms with a fixed number of operations per iteration. With this method, you can evaluate the performance of algorithms intuitively. Thus, you can identify bottlenecks in your code, and improve your code.

## Building Up: Recursive Functions and Recurrence Relations

Recursive algorithms solve problems by breaking them into smaller subproblems, typically calling themselves with smaller inputs. This structure often leads to a recurrence relation—an equation that expresses the runtime $T(n)$ of the algorithm in terms of smaller inputs.

#### What is a Recurrence Relation?

As you've already read in the previous section, a recurrence relation is an equation that describes the runtime of a recursive algorithm. It consists of:

- **Recursive calls**: How many smaller problems are being solved.
- **Work done per call**: The operations performed outside the recursive calls.

For example, consider the recursive function:

```python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)
```

Recurrence relation for the `factorial` function:

$$
T(n) = T(n - 1) + O(1)
$$

- $T(n)$ represents the runtime of the `factorial` function for an input of size $n$.
- $T(n - 1)$ is the recursive call to solve the subproblem of size $n - 1$.
- $O(1)$ is the time taken for the multiplication operation.

In the next few sections, we will explore methods to solve recurrence relations and derive the time complexity of recursive algorithms. This will make it easier for you to analyze the performance of recursive functions and understand the mathematical foundations of algorithm analysis.

## Time Complexity: Solving Recurrence Relations

There are a variety of methods to solve recurrence relations, including:

- Substitution Method
- Recurrence Tree Method
- Master Theorem
- Generating Functions (this is a more advanced technique)

#### Substitution Method

The substitution method involves iterative substitution of the recurrence relation into itself and proving the guessed solution by induction.

Steps:

1. **Expand the recurrence**: Substitute the recurrence relation repeatedly until a pattern emerges.
2. **Formulate a general form**: Use the observed pattern to propose a solution.
3. **Prove by induction**: Validate the solution using mathematical induction.
4. **Refine the solution if needed.**

For example, take the following recurrence relation:

$$
T(n) = 2T\left(\frac{n}{2}\right) + n; \quad T(1) = 1
$$

1. **Expand the recurrence**:

   $$
   \begin{align*}
   T(n) & = 2T\left(\frac{n}{2}\right) + n \\
   & = 2\left(2T\left(\frac{n}{4}\right) + \frac{n}{2}\right) + n \\
   & = 4T\left(\frac{n}{4}\right) + 2n \\
   & = 4\left(2T\left(\frac{n}{8}\right) + \frac{n}{4}\right) + 2n \\
   & = 8T\left(\frac{n}{8}\right) + 3n
   \end{align*}
   $$

   Continue this process until a pattern emerges.

2. **Formulate a general form**:

   From the above expansion, we observe that the pattern is:

   $$
   T(n) = 2^kT\left(\frac{n}{2^k}\right) + kn
   $$

3. **Prove by induction**:

   If we assume $n = 2^k$, $k = \log_2 n$. Substituting this into the general form, we get:

   $$
   T(n) = nT(1) + n\log_2 n = n + n\log_2 n = O(n\log n)
   $$

   Therefore, the time complexity of the algorithm is of the order $O(n\log n)$.

#### Recurrence Tree Method

The recurrence tree method visualizes the recursive calls of an algorithm as a tree structure. By analyzing the tree's depth and branching factor, we can determine the algorithm's time complexity.

Steps:

- **Expand the recurrence into a tree**: Each node represents a recursive call, and its children represent the subproblems.
- **Compute the work at each level**: Add up the work for all nodes at the same level.
- **Sum over all levels**: Combine the work across all levels to compute the total.

For example, consider the recurrence relation:

$$
T(n) = 2T\left(\frac{n}{2}\right) + n
$$

1. **Expand the recurrence into a tree**:

   The tree for $T(n)$ will have a root node representing the original problem of size $n$, with two children representing subproblems of size $\frac{n}{2}$ each. This process continues until we reach subproblems of size $1$. The tree will have $\log n$ levels.

   - Root: $n$
   - Level 1: $\frac{n}{2}$, $\frac{n}{2}$, total work $= 2 \times \frac{n}{2} = n$
   - Level 2: $\frac{n}{4}$, $\frac{n}{4}$, $\frac{n}{4}$, $\frac{n}{4}$, total work $= 4 \times \frac{n}{4} = n$
   - ... and so on, each level has $n$ work.

2. **Count the number of levels**:

   The tree has $\log n + 1$ levels, as the problem size is halved at each level.

3. **Compute the total work**:

   The total work is the sum of the work at each level, which is $n$ at each level.

   $$
   n + n + n + \ldots (\log_2 n + 1 \space times) = O(n \log n)
   $$

   Therefore, the total work is of the order $O(n \log n)$, and thus the time complexity of the algorithm is $O(n \log n)$. This matches the result obtained using the substitution method.

#### Master Theorem

Master Theorem is a direct and powerful tool for solving divide-and-conquer recurrences. It applies when the recurrence is of the form:

$$
T(n) = aT\left(\frac{n}{b}\right) + f(n)
$$

Where:

- $a \geq 1$ is the number of recursive calls.
- $b > 1$ is the factor by which the input size is divided.
- $f(n)$ is an asymptotically positive function.

**Case Analysis**:

1. Case 1: If $f(n) < n^{\log_b a}$, then $T(n) = O(n^{\log_b a})$.

   This is when the work done at the root dominates the work done at the leaves. The solution is the same as the work done at the root.

2. Case 2: If $f(n) = n^{\log_b a}$, then $T(n) = O(n^{\log_b a} \log n)$.

   This is when the work done at the root and leaves are balanced. The solution involves an additional logarithmic factor.

3. Case 3: If $f(n) > n^{\log_b a}$, then $T(n) = O(f(n))$.

   This is when the work done at the leaves dominates the work done at the root. The solution is the same as the work done at the leaves.

A few examples of applying the Master Theorem:

1. $T(n) = 3T\left(\frac{n}{2}\right) + n^2$:

   - Here, $a = 3$, $b = 2$, and $f(n) = n^2$. We have $n^{\log_b a} = n^{\log_2 3} \approx n^{1.58}$.
   - $f(n) = O(n^2) > n^{\log_2 3}$.
   - Therefore, by the Master Theorem's Case 3, $T(n) = O(n^2)$.

   This is not surprising, as the quadratic term $n^2$ dominates the runtime.

2. $T(n) = 2T\left(\frac{n}{2}\right) + n$:

   - Here, $a = 2$, $b = 2$, and $f(n) = n$. We have $n^{\log_b a} = n^{\log_2 2} = n$.
   - $f(n) = n = n^{\log_2 2}$.
   - Therefore, by the Master Theorem's Case 2, $T(n) = O(n \log n)$.

   The logarithmic term $\log n$ accounts for the additional work in each recursive call.

The Master Theorem is a simple and easy to learn method to find out the time complexity of divide-and-conquer algorithms. It provides a direct solution without the need for complex expansions or derivations.

#### Additional: Master Theorem for reducing recurrences

When the recurrence relation is of the form:

$$
T(n) = aT(n - b) + f(n)
$$

Where:

- $a > 0$ is the number of recursive calls.
- $b > 0$ is the reduction factor.
- $f(n)$ is an asymptotically positive function.

This corresponds to a divide-and-conquer algorithm that reduces the problem size by a constant amount (e.g., $n - 1$, $n - k$, etc.) in each recursive call.

**Case Analysis**:

1. Case 1: If $a < 1$, then $T(n) = O(f(n))$.

   This is when the recursion reduces rapidly, and the non-recursive work dominates.

2. Case 2: If $a = 1$, then $T(n) = O(nf(n))$.

   This is when each level contributes evenly, and the total cost depends linearly on the number of levels.

3. Case 3: If $a > 1$, then $T(n) = O(f(n) \cdot a^{n/b})$.

   This is when the recursion grows exponentially, dominating the overall cost.

For example, consider the recurrence relation:

$$
T(n) = 2T(n - 1) + n
$$

Here, $a = 2$, $b = 1$, and $f(n) = n$. We have $a > 1$, so we apply Case 3:

- $T(n) = O(n \cdot 2^{n/1}) = O(n \cdot 2^n)$.
- Therefore, the time complexity of the algorithm is $O(n \cdot 2^n)$.

Another example is the recurrence relation:

$$
T(n) = T(n - 1) + \log n
$$

Here, $a = 1$, $b = 1$, and $f(n) = \log n$. We have $a = 1$, so we apply Case 2:

- $T(n) = O(n \log n)$.
- Therefore, the time complexity of the algorithm is $O(n \log n)$.

###### A challenge for you ♨️

Try solving the recurrence relation above, i.e., $T(n) = T(n - 1) + \log n$, using the substitution method or the recurrence tree method.

You will encounter a weird equation,

$$
T(n) = 1 + \log(n!)
$$

Can you simplify this equation to get the time complexity?

## Mathematics and Computer Science: Generating Functions

> This part is purely mathematical, and can be termed as extra knowledge. If you are not interested in Generating Functions, you can skip this section.

Generating functions are purely mathematical tools that help in solving recurrences. Generating functions transform a recurrence into an algebraic expression that can be solved systematically. Generating functions are a powerful tool for solving complex recurrences and deriving closed-form solutions. They are particularly useful for linear recurrences with constant coefficients.

The steps to solve a recurrence relation using generating functions are:

1. **Define the generating function**: Represent the sequence $T(n)$ as a formal power series:

   $$
   G(x) = \sum_{n=0}^{\infty} T(n)x^n
   $$

2. **Translate the recurrence**: Express the recurrence relation in terms of the generating function.
3. **Solve for $G(x)$**: Manipulate the generating function to derive a closed-form expression.
4. **Extract the solution**: Extract the coefficients of the generating function to obtain the solution for $T(n)$, often using partial fractions or other techniques. The $n^{\text{th}}$ term of the solution represents the time complexity of the algorithm.

For example, consider the recurrence relation:

$$
T(n) = T(n - 1) + n; \quad T(0) = 0; \quad n \geq 1
$$

1. **Define the generating function**:

   $$
   G(x) = \sum_{n=0}^{\infty} T(n)x^n
   $$

2. **Translate the recurrence**:

   From the recurrence relation, we have:

   $$
   T(n) = T(n - 1) + n
   $$

   Multiplying both sides by $x^n$ and summing over all $n \geq 1$, we get:

   $$
   \sum_{n=1}^{\infty} T(n)x^n = \sum_{n=1}^{\infty} T(n - 1)x^n + \sum_{n=1}^{\infty} nx^n
   $$

   The first sum on the right hand side is the generating function shifted by one:

   $$
   \sum_{n=1}^{\infty} T(n - 1)x^n = x\sum_{n=0}^{\infty} T(n)x^n = xG(x)
   $$

   The second sum can be computed as:

   $$
   \sum_{n=1}^{\infty} nx^n = x\sum_{n=1}^{\infty} nx^{n-1} = x\frac{d}{dx}\left(\sum_{n=0}^{\infty} x^n\right) = x\frac{d}{dx}\left(\frac{1}{1 - x}\right) = \frac{x}{(1 - x)^2}
   $$

   The left hand side is the generating function without the $n = 0$ term:

   $$
   \sum_{n=1}^{\infty} T(n)x^n = G(x) - T(0)
   $$

   Substituting these results back into the equation, we get:

   $$
   G(x) - T(0) = xG(x) + \frac{x}{(1 - x)^2}
   $$

   Since $T(0) = 0$, the equation simplifies to:

   $$
   G(x) = \frac{x}{(1 - x)^2} + xG(x)
   $$

3. **Solve for $G(x)$**:

   Rearranging the equation to solve for $G(x)$, we get:

   $$
   G(x) - xG(x) = \frac{x}{(1 - x)^2}
   $$

   $$
   G(x)(1 - x) = \frac{x}{(1 - x)^2}
   $$

   $$
   G(x) = \frac{x}{(1 - x)^3}
   $$

4. **Extract the solution**:

   Now, to find $T(n)$, we need to extract the coefficients of $x^n$ from the generating function. We have:

   $$
   G(x) = \frac{x}{(1 - x)^3}
   $$

   We can do this by expanding the generating function using the binomial theorem:

   $$
   \begin{align*}
   G(x) & = \frac{x}{(1 - x)^3} = x(1 - x)^{-3} \\
   & = x\sum_{k=0}^{\infty} \binom{k + 2}{2}x^k \\
   & = \sum_{k=0}^{\infty} \binom{k + 2}{2}x^{k + 1} \\
   \end{align*}
   $$

   Therefore, the coefficient of $x^n$ (for $n \geq 1$) is:

   $$
   T(n) = \binom{n - 1 + 2}{2} = \binom{n + 1}{2}
   $$

5. **Final expression for $T(n)$**:

   Recall that $\binom{n + 1}{2} = \frac{n(n + 1)}{2}$. Therefore, the solution to the recurrence relation is:

   $$
   T(n) = \frac{n(n + 1)}{2}
   $$

   This holds true for $T(0) = 0$.

6. **Time complexity**:

   The time complexity of the algorithm is $O(n^2)$. This is because the solution $T(n) = \frac{n(n + 1)}{2}$ is of the order $O(n^2)$.

You can solve more complex recurrences using generating functions by following similar steps. Generating functions provide a systematic approach to solving recurrences and deriving closed-form solutions.

While it may seem complex, it is a powerful tool for analyzing the time complexity of algorithms. The generating function method is particularly useful for linear recurrences with constant coefficients.

It is a valuable technique to have in your algorithm analysis toolkit. However, it is not essential for understanding the basics of algorithm analysis. If you are interested in exploring more about generating functions, there are several resources available online that delve deeper into this topic.

## A Pit Stop: Time Complexity of the Fibonacci Sequence

> This part is purely mathematical, and can be termed as extra knowledge. If you are not interested in the mathematical analysis of the Fibonacci sequence, you can skip this section.

The Fibonacci sequence is a classic example used to illustrate recursion and dynamic programming. Let's analyze the time complexity of two common implementations of the Fibonacci sequence: using recursion and dynamic programming.

#### Iterative Fibonacci

The iterative approach to calculating the Fibonacci sequence involves storing the previous two numbers and updating them to compute the next number. This method is efficient and avoids the overhead of recursive calls.

```python
def fibonacci_iterative(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b
```

**Time Complexity**: The iterative Fibonacci algorithm has a time complexity of $O(n)$, as it performs a constant number of operations for each number in the sequence.

#### Recursive Fibonacci: The Golden Ratio

The recursive approach to calculating the Fibonacci sequence involves calling the function recursively for the previous two numbers. While elegant, this method is inefficient due to repeated calculations.

```python
def fibonacci_recursive(n):
    if n <= 1:
        return n
    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)
```

The recurrence relation for the recursive Fibonacci algorithm is:

$$
T(n) = T(n - 1) + T(n - 2) + O(1); \quad T(0) = T(1) = 1, \quad n \geq 2
$$

We can take $O(1) = 1$ for simplicity, as it does not affect the asymptotic growth rate of $T(n)$. Thus the recurrence relation becomes:

$$
T(n) = T(n - 1) + T(n - 2) + 1; \quad T(0) = T(1) = 1, \quad n \geq 2
$$

###### Step 1: Define the generating function

Let:

$$
G(x) = \sum_{n=0}^{\infty} T(n)x^n
$$

be the generating function for $T(n)$.

###### Step 2: Translate the recurrence

From the recurrence relation, we have:

$$
T(n) = T(n - 1) + T(n - 2) + 1
$$

Multiplying both sides by $x^n$ and summing over all $n \geq 2$, we get:

$$
\sum_{n=2}^{\infty} T(n)x^n = \sum_{n=2}^{\infty} T(n - 1)x^n + \sum_{n=2}^{\infty} T(n - 2)x^n + \sum_{n=2}^{\infty} x^n
$$

Reindexing terms:

- The first sum on the right hand side gets simplified to:

  $$
  \sum_{n=2}^{\infty} T(n - 1)x^n = x\sum_{n=2}^{\infty} T(n - 1)x^{n-1} = x(G(x) - T(0))
  $$

- The second sum on the right hand side gets simplified to:

  $$
  \sum_{n=2}^{\infty} T(n - 2)x^n = x^2\sum_{m=0}^{\infty} T(m)x^m = x^2G(x)
  $$

- For the constant term, we have:

  $$
  \sum_{n=2}^{\infty} x^n = x^2\sum_{m=0}^{\infty} x^m = \frac{x^2}{1 - x}
  $$

- The left hand side is the generating function without the $n = 0, 1$ terms:

  $$
  \sum_{n=2}^{\infty} T(n)x^n = G(x) - T(0) - T(1)x
  $$

Substituting these results back into the original equation, we get:

$$
G(x) - T(0) - T(1)x = x(G(x) - T(0)) + x^2G(x) + \frac{x^2}{1 - x}
$$

###### Step 3: Rearranging the equation to solve for $G(x)$

Rearranging the equation to solve for $G(x)$, we get:

$$
G(x) - xG(x) - x^2G(x) = T(0) - xT(0) + xT(1) + \frac{x^2}{1 - x}
$$

Substituting $T(0) = T(1) = 1$:

$$
G(x) - xG(x) - x^2G(x) = 1 - x + x + \frac{x^2}{1 - x}
$$

$$
G(x)(1 - x - x^2) = 1 + \frac{x^2}{1 - x}
$$

###### Step 4: Solving for $G(x)$

On factorizing the characteristic polynomial $1 - x - x^2 = 0$, we get its roots as:

$$
x = \frac{1 \pm \sqrt{5}}{2}
$$

Thus the generating function $G(x)$ can be written in terms of these roots. The coefficients of $x^n$ in G(x) are asympotically dominated by the root:

$$
x = \frac{1 + \sqrt{5}}{2}
$$

This is nothing but the **Golden Ratio** $\phi \approx 1.618$.

Therefore, the time complexity of the recursive Fibonacci algorithm is:

$$
T(n) \in O(\phi^n), \space \text{where} \space \phi = \frac{1 + \sqrt{5}}{2} \approx 1.618
$$

## Common Time Complexities

There are several common time complexities that you will encounter when analyzing algorithms. Below is a list of some common time complexities. These will help you guess the time complexity of an algorithm without going through the detailed analysis every time.

1. **$O(1)$ - Constant Time**

   - The runtime is independent of input size.
   - Example: Accessing an element in an array by index.

2. **$O(log n)$ - Logarithmic Time**

   - Runtime grows logarithmically as input size increases.
   - Example: Binary search in a sorted array.

3. **$O(n)$ - Linear Time**

   - Runtime increases proportionally with input size.
   - Example: Iterating through an array.

4. **$O(n \log n)$ - Quasilinear Time**

   - Typical of efficient sorting algorithms like merge sort and quicksort.

5. **$O(n^2)$ - Quadratic Time**

   - Runtime scales quadratically, often due to nested loops.
   - Example: Bubble sort or insertion sort.

6. **$O(2^n) or O(n!)$ - Exponential/Factorial Time**
   - Extremely inefficient for large inputs, often associated with brute-force solutions.

## Steps to Analyze Time Complexity

You have learned various methods to analyze the time complexity of algorithms. But as a short trick, you can vaguely guess the time complexity of an algorithm by following these steps:

1. **Identify Dominant Operations:** Focus on the operations that dominate the runtime.
2. **Consider the Worst-Case Scenario:** Provide a comprehensive performance guarantee.
3. **Simplify Expressions:** Ignore constants and lower-order terms for clarity.

#### Best, Average, and Worst Cases

You have already encountered the concept of best, average, and worst cases in algorithm analysis. Here is a brief summary of these cases:

- **Best Case:** The minimal runtime under optimal conditions. Often not representative of real-world performance. It is denoted by $\Omega$.
- **Average Case:** The expected runtime for typical input distributions. Requires statistical analysis. It is denoted by $\Theta$.
- **Worst Case:** The upper limit of runtime across all possible inputs. Provides a performance guarantee. It is denoted by $O$.

## Space Complexity

Space complexity measures the total memory required by an algorithm to execute, including memory for input data, auxiliary data structures, and intermediate computations. It helps us understand the memory efficiency of algorithms, mainly when working with large data sets or in memory-constrained environments.

#### Why Space Complexity Matters?

When dealing with embedded systems, mobile devices, or cloud computing, memory can be a critical resource. Understanding the space complexity of algorithms is essential for optimizing memory usage and ensuring efficient performance. Optimizing space complexity can lead to better performance, reduced costs, and improved user experience.

#### Components of Space Complexity

1. **Fixed Space:**
   - Memory for constants, variables, and program code.
   - Independent of input size.
   - Example: Storing a fixed size array or a few variables.
2. **Dynamic Space:**
   - Memory for data structures, recursion, and temporary storage.
   - Includes memory that depends on the input size.
   - Can arise from:
     - Data Structures: Stacks, Queues, Hash Tables, etc.
     - Recursive Calls: Space allocated on the call stack.
     - Temporary Storage: Arrays or matrices for intermediate results in algorithms like sorting or dynamic programming.

#### Key Scenarios

- Recursive algorithms often consume extra memory for the call stack.
- Data-intensive algorithms may require substantial temporary storage.

#### Steps to Analyze Space Complexity

1. **Assess Input Size:**
   - Consider how the algorithm scales with increasing input.
   - Example: An algorithm processing a list of size $n$ might allocate an additional array of size $n$.
2. **Assess Additional Data Structures:**
   - Evaluate the size and scope of auxiliary memory requirements.
   - Example: Merge Sort requires $O(n)$ space for a temporary array.
3. **Consider Recursion Depth:**
   - Each recursive call consumes stack space proportional to the depth of recursion.
   - A depth-first search (DFS) algorithm on a tree with depth $d$ uses $O(d)$ stack space.
4. **Include Temporary Storage:**
   - Consider memory for intermediate results or temporary arrays used during computations.
   - Example: Dynamic programming algorithms store intermediate results in a table, consuming $O(n^2)$ space for a 2D table.

#### Examples of Space Complexity

###### 1. Iterative Algorithm (Low Space Usage)

```python
def sum_array(arr):
    total = 0
    for num in arr:
        total += num
    return total
```

- The algorithm uses $O(1)$ space for the `total` variable, regardless of the size of the input array.
- Space Complexity: $O(1)$

###### 2. Recursive Algorithm (High Space Usage)

```python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)
```

- The recursive algorithm consumes space on the call stack for each recursive call.
- Each recursive call requires memory for the function call, local variables, and return address.
- It adds a new frame to the call stack for each recursive call, requiring $O(n)$ space for $n$ recursive calls.
- Space Complexity: $O(n)$

###### 3. Dynamic Programming (Intermediate Space Usage)

```python
def fibonacci(n):
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]
```

- The dynamic programming algorithm uses an array `dp` of size $n + 1$ to store intermediate results.
- The space required for the array is $O(n)$.
- Space Complexity: $O(n)$

###### 4. Optimized space in Dynamic Programming

```python
def fibonacci_optimized(n):
    prev, curr = 0, 1
    for _ in range(2, n + 1):
        prev, curr = curr, prev + curr
    return curr
```

- The algorithm uses only $O(1)$ space by storing only the last two results instead of the entire array.
- Space Complexity: $O(1)$

###### 5. Recursive with Memoization (Reduced Space Usage)

```python
def fibonacci_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo)
    return memo[n]
```

- The recursive algorithm with memoization reduces redundant calculations by storing intermediate results in a dictionary `memo`.
- The space required for the dictionary is proportional to the number of unique function calls.
- The space complexity is reduced from $O(n)$ to $O(k)$, where $k$ is the number of unique function calls.
- Space Complexity: $O(k)$

## Balancing Time and Space

Optimizing algorithms often involves trade-offs between time and space. You can either prioritize space efficiency or time efficiency based on the requirements of your application. Here are some considerations to help you balance time and space complexity:

- **Memory-Constrained Scenarios**: Choose iterative methods or space-optimized dynamic programming.
- **Time-Critical Scenarios**: Opt for algorithms like dynamic programming, which may use more memory to store intermediate results.

Examples include:

1. **Dynamic Programming vs Recursive Methods vs Iterative Methods**

   - Dynamic Programming: Reduces runtime by storing intermediate results but increases memory usage.
   - Recursive Methods: Uses less memory compared to dynamic programming techniques but have higher time complexity due to repeated calculations.
   - Iterative Methods: Uses less memory compared to recursion but may take longer to execute.

2. **In-Place Sorting vs. Non-In-Place Sorting**

   - In-place sorting algorithms like Quick Sort uses $O(1)$ additional space but may have higher runtime in the worst case.
   - Non-in-place algorithms like Merge Sort use $O(n)$ additional memory for temporary arrays but have more predictable runtimes.

#### Best Practices for Space Optimization

- **Use Iterative Solutions**: Avoid recursion when possible to save stack space.
- **Optimize Data Structures**: Use lightweight data structures like arrays instead of hash tables if memory is a constraint.
- **Reuse Memory**: Free up temporary variables or use in-place algorithms where applicable.
- **Trade Time for Space**: Accept slightly slower runtimes for reduced memory usage when memory is the bottleneck.

## Practice Problems

1. Compare the time complexity of the following two implementations of finding the factorial of a number:

   Iterative Approach:

   ```python
   def factorial_iterative(n):
      result = 1
      for i in range(1, n + 1):
         result *= i
      return result
   ```

   Recursive Approach:

   ```python
   def factorial_recursive(n):
      if n == 0:
         return 1
      return n * factorial_recursive(n - 1)
   ```

2. Consider the following recursive function for computing the sum of an array:

   ```python
   def recursive_sum(arr):
      if len(arr) == 1:
         return arr[0]
      mid = len(arr) // 2
      return recursive_sum(arr[:mid]) + recursive_sum(arr[mid:])
   ```

   What is the time complexity of this algorithm? Express it in terms of $n$, the length of the array.

3. Consider the following divide and conquer algorithm for calculating the power of a number:

   ```python
   def power(x, n):
      if n == 0:
         return 1
      half = power(x, n // 2)
      if n % 2 == 0:
         return half * half
      return half * half * x
   ```

   Write the recurrence relation for the time complexity of this function and solve it.

4. For binary search, the recurrence relation can be expressed as:

   $$
   T(n) = T\left(\frac{n}{2}\right) + O(1)
   $$

   Solve this recurrence relation using the Master Theorem or by expanding it to find the time complexity of binary search.

5. Consider the following recursive algorithm that divides the problem into three subproblems of size $n/3$, performing constant work:

   ```python
   def divide_conquer(n):
      if n <= 1:
         return 1
      result = divide_conquer(n // 3) + divide_conquer(n // 3) + divide_conquer(n // 3)
      return result
   ```

   Write the recurrence relation for this function and solve it to find the time complexity.

6. Consider the following recursive function, which splits the input into four subproblems and performs $O(n)$ work at each level:

   ```python
   def advanced_algorithm(n):
      if n <= 1:
         return 1
      left = advanced_algorithm(n // 2)
      right = advanced_algorithm(n // 2)
      return left + right + n
   ```

   Write the recurrence relation for this algorithm and solve it to find the time complexity.

7. Consider the following recursive function, which calls itself multiple times in a nested manner:

   ```python
   def nested_algorithm(n):
      if n <= 1:
         return 1
      return nested_algorithm(n - 1) + nested_algorithm(n - 2) + nested_algorithm(n - 3)
   ```

   Write the recurrence relation for this function and solve it.

8. Consider the following recursive function:

   ```python
   def recursive_sum(arr):
      if not arr:
         return 0
      return arr[0] + recursive_sum(arr[1:])
   ```

   What is the space complexity of this function?

9. Consider the following function for calculating factorial recursively:

   ```python
   def factorial(n):
      if n == 0:
         return 1
      return n * factorial(n - 1)
   ```

   What is the space complexity in terms of stack space used by the recursion? How can you reduce this to an iterative solution?

10. Consider the following recursive function that divides the problem into three subproblems, each of size $n/2$ and performs $O(n^2)$ work at each level:

    ```python
    def complex_algorithm(n):
       if n <= 1:
          return 1

    # Perform O(n^2) work at each level

    left = complex_algorithm(n // 2)
    right = complex_algorithm(n // 2)
    return left + right + n\*\*2
    ```

    - Write the recurrence relation for the time complexity of the algorithm.
    - Solve the recurrence relation using the recurrence tree method or the Master Theorem (if applicable).
    - Determine the time complexity of this function in terms of $n$.

## Looking Ahead

This was a very, very big post, but even then, it laid the foundation for your understanding of time and space complexity.

In the next post, we will explore foundational data structures like arrays and strings, talking about their properties, operations, and practical applications.
