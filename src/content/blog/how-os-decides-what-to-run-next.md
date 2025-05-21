---
title: "How Your OS Decides Which Program Gets to Run Next"
tags:
  [
    "Operating System",
    "Multitasking",
    "Process Scheduling",
    "Concurrency",
    "Computer Science",
    "Programming",
  ]
date: 2025-05-21
description: A deep dive into how operating systems manage multitasking and decide which program gets to run next.
author: a2ys
thumbnail: /thumbnails/celeris.png
series: os
draft: false
featured: false
---

## Introduction

> This post is kind of like an introduction to CPU scheduling, which we will discuss in detail in a future post. You can read this for a basic understanding of how CPU scheduling works, and how it is done in the operating system.

In our previous posts, we explored how your computer creates the illusion of running multiple programs simultaneously and the critical difference between a static program and an active process. Now, let's peek behind the curtain at the decision-maker responsible for this juggling act: **the CPU scheduler**.

## Table of Contents

- [CPU Scheduler: The Traffic Controller of Your Computer](#cpu-scheduler-the-traffic-controller-of-your-computer)
- [What Makes a Good Scheduling Algorithm?](#what-makes-a-good-scheduling-algorithm)
- [Common Scheduling Algorithms](#common-scheduling-algorithms)
  - [1. First-Come, First-Served (FCFS)](#1-first-come-first-served-fcfs)
  - [2. Shortest Job Next (SJN)](#2-shortest-job-next-sjn)
  - [3. Round Robin (RR)](#3-round-robin-rr)
  - [4. Priority Scheduling](#4-priority-scheduling)
  - [5. Multilevel Queue Scheduling](#5-multilevel-queue-scheduling)
  - [6. Multilevel Feedback Queue Scheduling](#6-multilevel-feedback-queue-scheduling)
- [Modern Scheduling in Practice](#modern-scheduling-in-practice)
  - [Linux's Completely Fair Scheduler (CFS)](#linuxs-completely-fair-scheduler-cfs)
  - [Windows 10/11 Scheduler](#windows-1011-scheduler)
  - [macOS Scheduler](#macos-scheduler)
- [The Impact on Your Computing Experience](#the-impact-on-your-computing-experience)
- [Coming Up Next](#coming-up-next)

## CPU Scheduler: The Traffic Controller of Your Computer

Imagine your CPU as a single-lane bridge that can only let one car (process) cross at a time. With dozens or even hundreds of processes wanting to use the CPU, something needs to decide which process goes next and for how long. That's your CPU scheduler.

The scheduler has a challenging job: it must make decisions quickly (often in microseconds), balance competing objectives, and ensure all processes get their fair share of CPU time — all while keeping your computer responsive to your inputs.

## What Makes a Good Scheduling Algorithm?

Before diving into specific algorithms, let's understand what we're optimizing for:

- **CPU Utilization**: Keep the CPU as busy as possible
- **Throughput**: Complete as many processes as possible per time unit
- **Turnaround Time**: Minimize the time from process submission to completion
- **Waiting Time**: Minimize time processes spend waiting in the ready queue
- **Response Time**: Minimize delay between request and first response (crucial for interactive systems)
- **Fairness**: Ensure each process gets its fair share of CPU time

Unfortunately, these goals often conflict. Optimizing for one might hurt another, leading to different schedulers for different scenarios.

## Common Scheduling Algorithms

> We will discuss these along with the mathematical formulas used to calculate the performance of these algorithms in a future post. This is just an overview of the algorithms.

Let's look at some of the most common scheduling algorithms, their pros and cons, and when to use them.

#### 1. First-Come, First-Served (FCFS)

- **How It Works**: Processes are executed in the order they arrive in the ready queue.
- **Pros**: Simple and easy to implement.
- **Cons**: Can lead to the "convoy effect," where short processes wait for long ones, increasing average waiting time.
- **Use Case**: Suitable for batch systems where all processes are similar in length.

#### 2. Shortest Job Next (SJN)

- **How It Works**: The process with the smallest execution time is selected next.
- **Pros**: Minimizes average waiting time and turnaround time.
- **Cons**: Difficult to predict execution time; can lead to starvation for longer processes.
- **Use Case**: Ideal for batch systems where execution times are known in advance.

#### 3. Round Robin (RR)

- **How It Works**: Each process gets a fixed time slice (quantum) in a cyclic order.
- **Pros**: Fair and responsive; suitable for time-sharing systems.
- **Cons**: Can lead to high turnaround time if the quantum is too small; context switching overhead.
- **Use Case**: Ideal for interactive systems where responsiveness is crucial.

#### 4. Priority Scheduling

- **How It Works**: Each process is assigned a priority, and the highest-priority process is executed
- - **Pros**: Can be preemptive or non-preemptive; allows for prioritization of critical tasks.
- **Cons**: Can lead to starvation for low-priority processes; requires careful tuning of priorities.
- **Use Case**: Suitable for real-time systems where certain tasks must be prioritized.

#### 5. Multilevel Queue Scheduling

- **How It Works**: Processes are divided into multiple queues based on priority or type, each with its own scheduling algorithm.
- **Pros**: Flexible and allows for different scheduling strategies for different types of processes.
- **Cons**: Complex to implement and manage; can lead to starvation if not designed carefully.
- **Use Case**: Ideal for systems with a mix of interactive and batch processes.

#### 6. Multilevel Feedback Queue Scheduling

- **How It Works**: Similar to multilevel queue scheduling, but processes can move between queues based on their behavior and requirements.
- **Pros**: Highly flexible and adaptive; can optimize for both short and long processes.
- **Cons**: Complex to implement and manage; requires careful tuning of parameters.
- **Use Case**: Suitable for systems with a wide variety of process types and requirements.

## Modern Scheduling in Practice

Real-world schedulers are significantly more complex than these textbook algorithms. Let's look at some examples:

#### Linux's Completely Fair Scheduler (CFS)

Instead of fixed time slices, CFS aims to give each process a "fair" share of CPU time based on a weighted fair queueing approach:

1. Each process gets CPU time proportional to its weight (nice value)
2. CFS tracks "virtual runtime" for each process
3. The process with the lowest virtual runtime runs next
4. Red-black trees provide efficient process selection

This elegant approach automatically adapts to the number of processes and provides good interactive performance while being fair to all processes.

#### Windows 10/11 Scheduler

Windows uses a priority-based preemptive scheduler with these distinctive features:

1. 32 priority levels (0-31)
2. Dynamic boosting of foreground applications
3. Different queues for real-time and variable priority processes
4. Priority inheritance to address priority inversion

#### macOS Scheduler

Apple's macOS uses a sophisticated scheduler that:

1. Works on a priority system from 0-127
2. Uses thread aging to prevent starvation
3. Implements special handling for UI threads to keep interfaces responsive
4. Employs task coalescence to improve power efficiency

## The Impact on Your Computing Experience

The next time your computer feels sluggish when running too many applications, remember this: the scheduling algorithm is desperately trying to share CPU time fairly while keeping everything responsive. Some observations from everyday computing:

1. **Why your computer feels faster right after booting**: Fewer processes competing for CPU time
2. **Why browser tabs "sleep"**: Modern browsers deprioritize inactive tabs to save resources
3. **Why background file copying slows down when you start using the computer**: Interactive processes get priority boosts
4. **Why real-time applications like audio production software need special settings**: They need guaranteed CPU time, not just fair sharing

## Coming Up Next

Now that we understand how processes get their turn on the CPU, our next post will dive into the critical interface between user programs and the operating system: **System Calls**. We'll explore how your everyday applications request services from the kernel and why this boundary is essential for security and stability.
