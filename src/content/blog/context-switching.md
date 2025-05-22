---
title: "Context Switching: The Hidden Cost of Multitasking"
date: 2025-05-22
description: Exploring the concept of context switching in operating systems and its impact on performance.
author: a2ys
thumbnail: /thumbnails/os-context-switching.png
series: os
seriesOrder: 8
---

## Introduction

> Context switching is a fundamental concept in operating systems that allows multiple processes to share the CPU. This process is also a low-level operation which is more relevant to the architecture of computer systems than the operating system itself.

In our previous posts, we've explored how operating systems juggle multiple processes using CPU scheduling and respond to external events through interrupts. But we haven't yet examined what happens during the critical moment when your computer transitions from running one process to another — an operation known as context switching.

This seemingly simple act of swapping processes is one of the most fundamental yet complex operations in your operating system. It enables the illusion of multitasking, but comes with surprising performance implications that affect your computing experience every day.

## Table of Contents

- [What Exactly Is a Context Switch?](#what-exactly-is-a-context-switch)
- [When Do Context Switches Happen?](#when-do-context-switches-happen)
- [The Anatomy of a Context Switch](#the-anatomy-of-a-context-switch)
- [The Hidden Costs of Context Switching](#the-hidden-costs-of-context-switching)
  - [Direct CPU Time Cost](#direct-cpu-time-cost)
  - [Cache and TLB Pollution](#cache-and-tlb-pollution)
  - [Pipeline Flushes](#pipeline-flushes)
  - [Shared Resource Contention](#shared-resource-contention)
- [Coming Up Next](#coming-up-next)

## What Exactly Is a Context Switch?

A context switch is the procedure of saving the state of a currently executing process so that it can be restored and resumed later, and then loading the saved state of a different process so the CPU can execute it.

The "context" being switched includes everything the CPU needs to resume execution exactly where it left off:

- Values in CPU registers
- Program counter (the address of the next instruction)
- Stack pointer
- Memory management information (page tables)
- Various CPU flags and status bits

Think of it like a chef preparing multiple dishes at once, carefully noting the exact state of each recipe before switching to another, ensuring nothing burns or gets forgotten.

## When Do Context Switches Happen?

Context switches occur in several scenarios:

1. **Timer interrupts**: When a process's time slice expires
2. **Blocking system calls**: When a process waits for I/O or other resources
3. **Priority-based preemption**: When a higher-priority process becomes ready
4. **Yielding**: When a process voluntarily gives up the CPU
5. **Interrupts**: When hardware events require immediate attention

Every switch is a complex dance between hardware and software, requiring careful coordination to maintain system stability.

## The Anatomy of a Context Switch

Let's break down what happens during a typical context switch triggered by a timer interrupt:

1. **CPU Receives Interrupt**: The timer interrupt signals that the current process's time slice has ended.
2. **Save Process State**: The CPU saves the current process's register values and other state information onto the kernel stack.
3. **Switch to Kernel Mode**: The CPU transitions from user mode to kernel mode to safely handle the interrupt.
4. **Execute Interrupt Handler**: The operating system's interrupt handler for the timer runs.
5. **Invoke Scheduler**: The scheduler determines which process should run next.
6. **Update Memory Management**: The memory management unit updates its settings, such as switching page tables, for the new process.
7. **Restore New Process State**: The CPU loads the saved state (registers, program counter, etc.) of the next process.
8. **Return to User Mode**: The CPU switches back to user mode and resumes execution of the new process.

This entire sequence can take anywhere from under a microsecond to several microseconds, depending on your hardware and OS implementation.

## The Hidden Costs of Context Switching

While context switching is essential for multitasking, it comes with a hidden cost. Each switch requires time and resources, which can lead to performance degradation if not managed properly.

#### Direct CPU Time Cost

The CPU spends time saving and restoring registers instead of executing application code. This direct cost is typically a few microseconds per switch.

#### Cache and TLB Pollution

Modern CPUs rely heavily on caches to speed up memory access:

- **CPU Caches**: Store recently accessed memory locations
- **Translation Lookaside Buffer (TLB)**: Caches virtual-to-physical address translations

When a context switch occurs, these caches suddenly contain data for the wrong process. This "cache pollution" forces the new process to rebuild the cache contents, causing a performance hit that can be much larger than the direct context switch cost.

#### Pipeline Flushes

Modern CPUs use instruction pipelining, where multiple instructions are processed simultaneously at different stages. A context switch forces the pipeline to be flushed and refilled, causing additional delays.

#### Shared Resource Contention

As processes switch rapidly, they compete for shared hardware resources like CPU caches, memory buses, and prefetch predictors. This contention can degrade performance beyond what you'd expect from the individual costs.

## Coming Up Next

Now that we understand the mechanics and costs of switching between processes, our next post will explore the difference between **Threads vs. Processes** and explain when you'd want to use each approach. We'll dive into different threading models and examine the performance implications of various concurrency strategies.
