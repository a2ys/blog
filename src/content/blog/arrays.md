---
title: "Arrays: The Building Blocks of Data Structures"
tags: ["DSA", "Data Structures", "Algorithms", "Arrays"]
date: 2024-12-10
description: An in-depth look at arrays, a fundamental data structure in computer science.
author: a2ys
thumbnail: /thumbnails/arrays.png
series: dsa
draft: true
---

Arrays are one of the most essential components in computer science. They form the foundation for many advanced data structures and algorithms due to their simplicity and efficiency. In this article, we will explore the basics of arrays, their properties, and their applications in computer science. We will also discuss some common operations on arrays and their time complexity, along with the essential operations like searching and sorting. We will also look at some advanced topics like multidimensional arrays and dynamic arrays. Let's get started!

> The programming language used in this article, and the future articles will be C, but the concepts discussed here are applicable to all of the major programming languages.

## What are Arrays?

An array is a collection of elements, typically of the same type, stored in contiguous memory locations. Arrays provide the following benefits:

- **Indexed Access**: Retrieve elements directly using their index.
- **Fixed Size**: The size of an array is predefined and cannot dynamically change in most programming languages.

#### Representation of an Array

Arrays can be visualized as a sequence of boxes, each containing an element. For example:

| Index | 0   | 1   | 2   | 3   | 4   |
| ----- | --- | --- | --- | --- | --- |
| Value | 10  | 20  | 30  | 40  | 50  |

## Properties of Arrays

Arrays have the following properties:

1. **Random Access**: Elements can be accessed directly using their index in $O(1)$ time.
2. **Fixed Size**: The size of an array is fixed and cannot be changed dynamically.
3. **Homogeneous Elements**: All elements in an array are of the same data type. This allows for efficient memory allocation and access.

## Memory Dynamics of Arrays

One of the key features of arrays is that they store elements in **contiguous memory locations**. This property allows for efficient memory access and manipulation. That is why it deserves its own section!

> You'll study these in depth in an Operating Systems course, or a Computer Architecture course. But, it's good to have a basic understanding of how memory works in the context of arrays.

#### Contiguous Memory Allocation

When an array is declared, the system allocates a block of continuous memory in the RAM. This ensures that every element is located at a predictable offset from the base address. For example:

In a 32-bit system, if an integer array starts at memory address `0x1000` and each integer requires 4 bytes, the array elements will occupy:

- Element at index 0: Address `0x1000`
- Element at index 1: Address `0x1004`
- Element at index 2: Address `0x1008`, and so on.

This contiguous allocation allows direct indexing, where the address of an element at index i is computed as:

$$
\text{Address} = \text{Base Address} + i × \text{Size of Element}
$$

In C:

```c
int array[5] = {10, 20, 30, 40, 50};
printf("Address of array[2]: %p\n", &array[2]);
```

**Advantage**: This enables $O(1)$ time complexity for accessing any element since the system does not need to traverse the array.

#### Cache friendliness

Arrays are **cache-friendly** because their elements are stored sequentially. This allows modern processors to load multiple elements into the CPU cache in one operation (cache line loading), reducing the time required to access elements, and also improving traversal performance.

For example, in a simple loop:

```c
for (int i = 0; i < 5; i++) {
    sum += array[i];
}
```

The CPU benefits from spatial locality, as it fetches adjacent elements into the cache, reducing memory latency.

**Performance Implication**: Arrays are often faster than non-contiguous data structures like linked lists for traversal operations.

#### Limitations of Contiguous Allocation

While contiguous memory allocation offers benefits, it also introduces constraints:

1. **Fragmentation**: If the array size is large, it may not find a contiguous block of memory, leading to fragmentation. For example, if the system has 10KB of free memory, but no contiguous block of 10KB is available, the array cannot be allocated.

   ```c
   int *largeArray = malloc(1000000 * sizeof(int));
   if (largeArray == NULL) {
       printf("Memory allocation failed due to fragmentation.\n");
   }
   ```

   **Scenario**: Imagine a system with free blocks of memory scattered across RAM, but no single block is large enough to hold the requested array.

2. **Fixed Size**: The size of an array must be declared upfront and cannot be adjusted dynamically (in static arrays). Resizing requires creating a new array and copying elements.

   ```c
   int *array = malloc(5 * sizeof(int));
   array = realloc(array, 10 * sizeof(int)); // Resizing
   ```

This operation is $O(n)$, making arrays less suitable for scenarios with frequent resizing.

#### Buffer Overflow

In languages like C, improper memory management can lead to buffer overflows, where writing beyond the allocated size corrupts memory.

```c
int array[5] = {10, 20, 30, 40, 50};
array[6] = 60; // Undefined behavior: accessing memory outside allocated bounds
```

Such errors are a common source of security vulnerabilities, particularly in systems programming.

#### Comparison with Linked Lists

While arrays require contiguous memory, linked lists only need memory for individual nodes, which can be scattered across the heap. This makes linked lists more flexible but less cache-efficient.

- **Arrays**: Fast access ($O(1)$), cache-friendly, fixed size, resizing requires copying.
- **Linked Lists**: Slower access ($O(n)$), scattered memory, dynamic size, no buffer overflow.

#### Practical Example: Choosing Arrays

1. **When to use Arrays**:
   - Frequent element access is required.
   - Minimal resizing is expected.
   - Predictable memory layout is needed for performance (e.g., matrix operations).
2. **When to avoid Arrays**:
   - Memory size is unknown or fluctuates.
   - Elements are of varying sizes.
   - Memory fragmentation is a concern.
   - Frequent insertions or deletions occur, as shifting elements is costly.

These are a few considerations when choosing arrays over other data structures. You have to make informed decisions based on the requirements of your application.

## Common Operations on Arrays

#### Traversal

Traversing an array involves visiting each element sequentially. This is typically done using a loop, such as a `for` loop.

```c
for (int i = 0; i < 5; i++) {
    printf("Element at index %d: %d\n", i, array[i]);
}
```

**Time Complexity**: $O(n)$, where $n$ is the number of elements in the array.

#### Insertion

Inserting an element into an array involves shifting elements to accommodate the new value. This can be done at the beginning, middle, or end of the array.

The following piece of code inserts a value at the second index in the array:

```c
int position = 2, value = 25;
for (int i = size; i > position; i--) {
    array[i] = array[i - 1];
}
array[position] = value;
size++;
```

Adding an element at the end of the array is simpler and faster, as it does not require shifting elements. It can be done in $O(1)$ time.

```c
array[size] = value;
size++;
```

**Time Complexity**: $O(n)$ for inserting at the beginning or middle, $O(1)$ for inserting at the end.

#### Deletion

Deleting an element from an array involves shifting elements to fill the gap left by the removed value. Similar to insertion, deletion can occur at any position in the array.

The following code snippet deletes the element at the third index:

```c
int position = 3;
for (int i = position; i < size - 1; i++) {
    array[i] = array[i + 1];
}
size--;
```

Deleting the last element is straightforward and can be done in $O(1)$ time.

```c
size--;
```

**Time Complexity**: $O(n)$ for deleting from the beginning or middle, $O(1)$ for deleting from the end.

#### Searching

Searching an array involves finding the index of a specific element. This can be done using linear search or binary search, depending on the array's properties. Linear search is used for unsorted arrays, while binary search is used for sorted arrays.

###### Linear Search

Linear search involves traversing the array sequentially until the desired element is found.

The following code snippet searches for the value `30` in the array:

```c
int target = 30, found = 0;
for (int i = 0; i < size; i++) {
    if (array[i] == target) {
        printf("Found at index %d\n", i);
        found = 1;
        break;
    }
}
if (!found) printf("Not found\n");
```

**Time Complexity**: $O(n)$ for linear search.

###### Binary Search

Binary search is a more efficient search algorithm that requires the array to be sorted. It works by repeatedly dividing the search interval in half.

For an explanation, imagine this scenario.

Suppose you want to search an element in a dictionary. You already know that the words are alphabetically sorted in the array.

So you first go in the middle of the dictionary to look for the word you want to search for. Subconciously, you match the first letter then decide to go to the left or right side of the dictionary.

Most of the times, you unconsciously divide the dictionary into two halves and search in the half where the word might be present. This is the essence of binary search.

For a sorted array in C, it looks like this:

```c
int target = 30, low = 0, high = size - 1, mid; // low and high are the search interval, the lowest and highest index in the array
while (low <= high) {
    mid = low + (high - low) / 2; // Calculate the middle index
    if (array[mid] == target) { // Element found
        printf("Found at index %d\n", mid);
        return;
    } else if (array[mid] < target) { // Search in the right half, the target is greater than the middle element
        low = mid + 1;
    } else { // Search in the left half, the target is smaller than the middle element
        high = mid - 1;
    }
}
```

**Time Complexity**: $O(\log n)$ for binary search. This is because we are dividing the search interval in half at each step.

#### Sorting

Sorting an array involves arranging its elements in a specific order, such as ascending or descending. Sorting is a fundamental operation in computer science and is used in various algorithms and applications. There are several sorting algorithms, each with its advantages and disadvantages. I will list down the most common ones:

1. **Bubble Sort**: Simple and inefficient, with a time complexity of $O(n^2)$.
2. **Selection Sort**: Simple and inefficient, with a time complexity of $O(n^2)$.
3. **Insertion Sort**: Simple and efficient for small datasets, with a time complexity of $O(n^2)$.
4. **Merge Sort**: Efficient and stable, with a time complexity of $O(n \log n)$.
5. **Quick Sort**: Efficient and widely used, with a time complexity of $O(n \log n)$.
6. **Counting Sort**: Efficient for small integer arrays, with a time complexity of $O(n + k)$. (where k is the range of the input)

Lets cover all these sorting algorithms one by one!

###### Bubble Sort

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.

```c
void bubbleSort(int array[], int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                int temp = array[j]; // Store the current element in a temporary variable
                array[j] = array[j + 1]; // Swap the current element with the next element
                array[j + 1] = temp; // Swap the next element with the current element, completing the swap
            }
        }
    }
}
```

**Time Complexity**: $O(n^2)$ in the worst case.

###### Selection Sort

Selection Sort is another simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the array and swapping it with the first unsorted element. So, first you find the smallest element and swap it with the first element, then you find the second smallest element and swap it with the second element, and so on.

```c
void selectionSort(int array[], int size) {
    for (int i = 0; i < size - 1; i++) {
        int minIndex = i; // Assume the current element is the minimum
        for (int j = i + 1; j < size; j++) {
            if (array[j] < array[minIndex]) { // Find the minimum element in the unsorted part of the array
                minIndex = j; // Update the index of the minimum element
            }
        }

        // Swap the current element with the minimum element
        int temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
}
```

**Time Complexity**: $O(n^2)$ in the worst case.

###### Insertion Sort

Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time. It works by taking one element from the unsorted part of the array and inserting it into its correct position in the sorted part of the array.

```c
void insertionSort(int array[], int size) {
    for (int i = 1; i < size; i++) {
        int key = array[i]; // Store the current element
        int j = i - 1; // Index of the last element in the sorted part of the array
        while (j >= 0 && array[j] > key) { // Move elements greater than the key to the right
            array[j + 1] = array[j]; // Shift the element to the right
            j--; // Move to the previous element
        }
        array[j + 1] = key; // Insert the key into its correct position
    }
}
```

**Time Complexity**: $O(n^2)$ in the worst case.

###### Merge Sort

Merge Sort is a divide-and-conquer algorithm that divides the array into two halves, sorts each half separately, and then merges them back together. It is an efficient and stable sorting algorithm with a time complexity of $O(n \log n)$. The main part of this algorithm is the `merge` function, which merges two sorted arrays into a single sorted array.

The way the merge function works is:

1. Create two temporary arrays `L` and `R` to store the left and right halves of the array.
2. Copy the elements from the original array into the temporary arrays.
3. Merge the two arrays back into the original array in sorted order.

```c
void merge(int array[], int left, int mid, int right) {
    int n1 = mid - left + 1; // Size of the left array
    int n2 = right - mid; // Size of the right array
    int L[n1], R[n2]; // Temporary arrays to store the left and right halves
    for (int i = 0; i < n1; i++) L[i] = array[left + i]; // Copy elements to the left array
    for (int j = 0; j < n2; j++) R[j] = array[mid + 1 + j]; // Copy elements to the right array
    int i = 0, j = 0, k = left; // Initialize indices for the left, right, and original arrays
    while (i < n1 && j < n2) { // Merge the two arrays
        if (L[i] <= R[j]) array[k++] = L[i++]; // If the left element is smaller, copy it to the original array
        else array[k++] = R[j++]; // If the right element is smaller, copy it to the original array
    }
    while (i < n1) array[k++] = L[i++]; // Copy the remaining elements from the left array
    while (j < n2) array[k++] = R[j++]; // Copy the remaining elements from the right array
}

void mergeSort(int array[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2; // Calculate the middle index
        mergeSort(array, left, mid); // Sort the left half
        mergeSort(array, mid + 1, right); // Sort the right half
        merge(array, left, mid, right); // Merge the two halves
    }
}
```

**Time Complexity**: $O(n \log n)$ in the worst case.

###### Quick Sort

Quick Sort is another efficient divide-and-conquer sorting algorithm that works by selecting a pivot element and partitioning the array around the pivot. It then recursively sorts the two partitions. Quick Sort is widely used due to its efficiency and is often faster than other sorting algorithms. The main part of this algorithm is the `partition` function, which rearranges the elements in the array such that all elements less than the pivot are on the left, and all elements greater than the pivot are on the right. The pivot is then placed in its correct position. Choosing the pivot is crucial for the performance of Quick Sort.

```c
int partition(int array[], int low, int high) {
    int pivot = array[high]; // Choose the last element as the pivot
    int i = low - 1; // Index of the smaller element
    for (int j = low; j < high; j++) {
        if (array[j] < pivot) { // If the current element is smaller than the pivot
            i++; // Increment the index of the smaller element
            int temp = array[i]; // Swap the current element with the smaller element
            array[i] = array[j];
            array[j] = temp;
        }
    }
    int temp = array[i + 1]; // Swap the pivot with the element at the correct position
    array[i + 1] = array[high];
    array[high] = temp;
    return i + 1; // Return the index of the pivot
}

void quickSort(int array[], int low, int high) {
    if (low < high) {
        int pi = partition(array, low, high); // Partition the array
        quickSort(array, low, pi - 1); // Sort the left partition
        quickSort(array, pi + 1, high); // Sort the right partition
    }
}
```

**Time Complexity**: $O(n \log n)$ in the worst case.

###### Counting Sort

Counting Sort is a non-comparison-based sorting algorithm that works by counting the number of occurrences of each element in the array and using this information to place the elements in sorted order. It is efficient for small integer arrays with a limited range of values. Counting Sort has a time complexity of $O(n + k)$, where $n$ is the number of elements in the array and $k$ is the range of the input.

So, we first count the occurrences of each element in the array, then calculate the prefix sum of the counts, and finally place the elements in their correct positions.

```c
void countingSort(int array[], int size) {
    int max = array[0]; // Find the maximum element in the array
    for (int i = 1; i < size; i++) {
        if (array[i] > max) max = array[i];
    }
    int count[max + 1]; // Create a count array to store the occurrences of each element
    for (int i = 0; i <= max; i++) count[i] = 0; // Initialize the count array
    for (int i = 0; i < size; i++) count[array[i]]++; // Count the occurrences of each element
    for (int i = 1; i <= max; i++) count[i] += count[i - 1]; // Calculate the prefix sum of the counts
    int output[size]; // Create an output array to store the sorted elements
    for (int i = size - 1; i >= 0; i--) {
        output[count[array[i]] - 1] = array[i]; // Place the element in its correct position
        count[array[i]]--; // Decrement the count of the element
    }
    for (int i = 0; i < size; i++) array[i] = output[i]; // Copy the sorted elements back to the original array
}
```

**Time Complexity**: $O(n + k)$ in the worst case.

These are some of the common sorting algorithms used in practice. Each algorithm has its advantages and disadvantages, and the choice of algorithm depends on the size of the dataset, the range of values, and the desired performance characteristics.

## Multidimensional Arrays

Multidimensional arrays are arrays that store elements in multiple dimensions, such as rows and columns. They are used to represent matrices, tables, and other complex data structures. Multidimensional arrays can be two-dimensional, three-dimensional, or even higher-dimensional.

#### Two-Dimensional Arrays

Two-dimensional arrays are the most common type of multidimensional arrays. They are used to represent matrices, tables, and grids. In C, a two-dimensional array is declared as an array of arrays, where each row is an array of elements.

```c
int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

The elements in a two-dimensional array are accessed using two indices: the row index and the column index.

```c
int element = matrix[1][2]; // Access the element at row 1, column 2
```

**Memory Representation**: Two-dimensional arrays are stored in contiguous memory locations, with each row stored sequentially. The memory layout is row-major order, where the elements of each row are stored together.
