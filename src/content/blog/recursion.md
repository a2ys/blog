---
title: Recursion in Computer Science
tags: ["test", "markdown"]
date: 2021-01-01
description: Post on recursion.
author: aayush-shukla
featured: true
---

In the world of computational mathematics, there exists a fascinating technique that dances on the edge of complexity and elegance — recursion. In this comprehensive guide, we'll unravel the mysteries of recursion, exploring its fundamentals, advantages, challenges, types, real-world applications, and best practices.

## The Basics of Recursion

Recursion is a problem-solving approach that can be used to generate simple solutions to certain kinds of problems that are difficult to solve by other means. Recursion reduces a problem into one or more simpler versions of itself.

For recursion, I'll take the examples in Python for a better understanding, but you can implement this recursion in any language of your choice; it is not limited to a single programming language.

```python
def countdown(n):
    if n <= 0:
        print("Blastoff!")
    else:
        print(n)
        countdown(n - 1)
```

The job this function does is it first checks if the value of `n` is less than or equal to 0. If it is, then it prints `Blastoff`, otherwise it goes into the `else` block. The magic lies in the `else` block. The `else` block first prints the value of n, and then calls the function inside of itself.

```python
countdown(n - 1)
```

This block of code calls the function, but this time `n - 1` is given in as the parameters. So, if, say, 3 is given in as the parameter in the function call in the main block, the function will first print the value 3, and then execute the block `countdown(2)`. Then, this will then print 2, and then call `countdown(1)`. Then, this will print 1 and call `countdown(0)`. The magic happens here.

The value of n has now reached 0, so this block of code will be executed,

```python
if n <= 0:
    print("Blastoff!")
```

This is where the function stops calling itself, and reaches a final point. So, the output will look something like this.

```python
3           # print 3 and call countdown(2)
2           # print 2 and call countdown(1)
1           # print 1 and call countdown(0)
Blastoff!   # print Blastoff, as n <= 0 becomes True
```

So, when the program called `countdown(0)` in its print and decrement sequence, it printed `Blastoff`, and exited out of the function.

The problem can solved with an iterative approach as well. You might devise yourself a correlation between the two!

```python
n = 3

while n > 0:
    # Resembles the function for a general case when n > 0
    print(n)
    n = n - 1
else:
    # Resembles the function for the case when n <= 0
    print("Blastoff")
```

This program gives the same output.

Now, if, say, the `countdown()` function was defined like this,

```python
def countdown(n):
    print(n)
    countdown(n - 1)
```

then this print and decrement sequence would have continued on forever, and the recursion stack (you'll get to know about this in a moment) would have grown indefinitely, and you would have encountered this error,

```python
RecursionError: maximum recursion depth exceeded
```

This is what happens if the recursion does not stop at any point. To avoid this, you put a condition which stops the recursive call at your desired point of time. That desired point of time depends upon the problem you're trying to solve.

## The beauty of the Factorial

I know recursion is a hard concept to grasp, but you can understand it with slight help from mathematics.

You know the factorial of an integer n is the product of the integer times the factorial of the integer just behind it, so the factorial can be defined as `n! = n * (n - 1)!`. This is what is called recursion. Now you might wonder, what will happen if the value of n is, say, 2. According to our equation, the mathematical expression for 2! would look something like this.

```python
2!  = 2 * 1!
    = 2 * 1 * 0!
    = 2 * 1 * 0 * -1!
    = 2 * 1 * 0 * -1! * -2!
    ...
```

This would happen indefinitely and the function would never stop and we will never get a value. To stop this and make the factorial useful, we define the factorials of 0 and 1 ourselves as 1. So by definition,

```python
0! = 1
1! = 1
```

So when 2! is needed, this is what happens,

```python
2!  = 2 * 1!
    = 2 * 1
    = 1
```

And for 3!,

```python
3!  = 3 * 2!
    = 3 * 2 * 1!
    = 3 * 2 * 1
    = 3 * 2
    = 6
```

This is recursion in its very roots.

## Creating the logic for a Recursive Function

Whenever you want to declare a recursive function, you should remember this line,

> Do what you know; of what you don't know, do the part of it which you know.

I know this might seem complex at first, but I'll explain this while implementing a recursive solution to the Factorial.

For the factorial,

### Do what you know

For the factorial, we know that if n is 0 or 1, the factorial equals 1. So on implementing this part, the factorial function looks like this.

```python
def factorial(n):
    if (n == 0) or (n == 1):
        return 1
```

### Of what you don't know, do the part of it which you know

In the case of factorials, actually you don't know the value for the factorial of any number, you just go by the definition and calculate the values. The definition of the factorial, my friends, is the part of the unknown you know. So, when `n` is something other than 0 or 1, the factorial calls itself in the manner, `n! = n * (n - 1)!`. So, for any general case, the function call `factorial(n)` should give,

```python
n * factorial(n - 1)
```

So, upon incorporating this part into our original factorial definition, it will finally look something like this,

```python
def factorial(n):
  if (n == 0) or (n == 1):
      return 1
  else:
      return n * factorial(n - 1)
```

This is how we solve the Factorial in programming.

## Steps to solve a problem recursively

For a problem to have a recursive solution, it should satisfy the below two conditions

- There must be at least one case for a small value of n, that can be solved directly. This is called the base case.
- A problem of a given size n can be reduced to one or more smaller versions of the same problem. These are the recursive cases.

Then to solve the problem recursively, you should follow the following steps.

- Identify the base case(s) and solve it/them directly.
- Devise a strategy to reduce the problem to smaller versions of itself while making progress towards the base case.
- Combine the solutions to the smaller problems to solve the larger problem.

We can understand this approach by solving yet another problem with recursion: Finding the length of the string.

We can directly tell the length of the string when we get an empty string. Voila! We found the base case! Keep a note of this.

Now, for a general case, in real life as well, we count the letters one by one. So to implement this, we have to find a way to have the computer do it one by one. We can use slicing here! What we can do is we can ask the computer to count one character from the beginning and call the function again to find the rest of the characters. Now the computer will again count one character from the beginning of the remaining charaters and call the function again with the other remaining characters. Voila! We found the recursive case!

Now you might wonder what will happen if the string goes empty in this count one and send the remaining sequence. We already got that covered in the base case!

So the recursive algorithm for this program will look something like this,

```python
if the string is empty (has no characters)
    the length is 0
else
    the length is 1 plus the length of the string
    that excludes the first character
```

So, the program for this in Python will look something like this,

```python
def length(string):
    # If the string is empty, we return 0
    # Note that we cannot use the len() function
    # as that is the problem we are trying to solve XD
    if string == "":
        return 0
    # For the other cases, we return the sum of 1 and the
    # length of the remaining characters
    else:
      return 1 + length(string[1:])
```

For the sequence "ace", we can trace the recursive calls.

```python
length("ace")           ->  3               # The first call returns 3 at the end
1 + length("ce")        ->  1 + 2           # Unwinding the first call
    1 + length("e")     ->      1 + 1       # Unwinding the second call
        1 + length("")  ->          1 + 0   # Unwinding the third call
            0           # The base case returned 0
```

This is a simplified Call Stack or the Recursion Stack of the recursive program we tried to solve. The function, on being called, calls another function in place of itself, and the program remembers where to return the value that you got!

```python
>>  l = length("ace")

    '''
    When you do the above, you can now illustrate what happens inside!

    l = length("ace")
      = 1 + length("ce")
      = 1 + 1 + length("e")
      = 1 + 1 + 1 + length("")
      = 1 + 1 + 1 + 0
      = 3

    '''

>>  print(l)
3
```

## Advantages and Challenges of Recursion

### Advantages

Recursion, when used cleverly, is like a magic trick in coding. It helps us solve problems in a way that's short, sweet, and mirrors how problems naturally work.

- Beautiful Code: Recursive solutions look cool and are easy to read. They match the problem's structure in a nice and neat way.
- Easy Logic: Recursive functions show the logic of a problem in a simple way, making the code easy to understand.
- Can Handle Many Things: Recursion is versatile. It can solve lots of different problems, from math puzzles to tricky data structures.
- Less Code: Recursive code can make your program shorter and more organized.

### Challenges

As with any magic, there are some challenges.

- Uses Memory: Each time we use recursion, it takes up a bit of memory. If we use it a lot, that memory usage can add up.
- Can cause Stack Overflow: If not careful with recursion, the call stack can grow deep, risking a stack overflow.

### Best Practices and Tips

Mastering the art of recursion needs you to adhere to some established best practices. A few are given below.

- Definition of Base Cases: The explicit definition of base cases is imperative to ensure a termination condition for the recursion.
- Optimization Techniques: Techniques such as tail recursion and memoization are really useful in optimizing the performance of recursive algorithms.
- Thorough Testing: Rigorous testing is essential to validate the functionality of recursive functions across a wide variety of inputs.
- Consideration of Iterative Alternatives: A critical evaluation of whether recursion is the most apt solution or if an iterative approach might offer superior efficiency.

These practices, when followed, allows you to harness the maximum strength of recursion whilst helping you avoid potential challenges.

## Conclusion

You must have got some idea about the concept of recursion by now. I recommend you to create programs to (1) print string characters in reverse, and (2) get the n-th number in the Fibonacci Sequence with the help of recursion. After that, as a challenge, implement both the linear search and the binary search with recursion. I'll try to upload the solutions of the programs I mentioned here on my GitHub as soon as ass possible; for the time being, if you can't solve any of the problems mentioned, you can explore and understand the solutions present on the internet or simply ask ChatGPT!
