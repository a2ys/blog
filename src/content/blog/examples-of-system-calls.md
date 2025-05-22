---
title: "System Calls in C: Practical Examples"
date: 2025-05-22
description: Learn system calls through hands-on C examples, with an in-depth exploration of fork() and process creation patterns.
author: a2ys
thumbnail: /thumbnails/system-calls-c-examples.png
series: os
seriesOrder: 6
---

## Introduction

> Go through the examples step by step, and don't hesitate to run them on your machine to see the results for yourself. This is a hands-on learning experience. Put on your headphones and get a cup of coffee.

In our previous post, we explored the theory behind system calls and their role as the bridge between user space and kernel space. Now it's time to get our hands dirty with actual code. We'll write C programs that make system calls, understand how they work in practice, and dive deep into the fascinating world of process creation with `fork()`.

By the end of this post, you'll be able to predict the output of complex fork programs, create specific process hierarchies, and understand the subtle tricks that make system call programming both powerful and tricky.

## Table of Contents

- [Setting Up Your Environment](#setting-up-your-environment)
  - [Linux (Native)](#linux-native)
  - [Windows (WSL - Windows Subsystem for Linux)](#windows-wsl---windows-subsystem-for-linux)
  - [Windows (Virtual Machine)](#windows-virtual-machine)
  - [macOS](#macos)
- [Essential Headers and Concepts](#essential-headers-and-concepts)
  - [Important Headers](#important-headers)
  - [Key Data Types](#key-data-types)
  - [Core System Calls We'll Use](#core-system-calls-well-use)
- [Basic I/O System Calls: read() and write()](#basic-io-system-calls-read-and-write)
  - [Example 1: Writing to Screen](#example-1-writing-to-screen)
  - [Example 2: Reading from Keyboard](#example-2-reading-from-keyboard)
- [The fork() System Call](#the-fork-system-call)
  - [Understanding fork(): The Basics](#understanding-fork-the-basics)
  - [Example 3: Basic fork() Usage](#example-3-basic-fork-usage)
  - [Example 4: Process Identification Deep Dive](#example-4-process-identification-deep-dive)
- [The wait() System Call: Process Synchronization](#the-wait-system-call-process-synchronization)
  - [Example 5: Parent Waiting for Child](#example-5-parent-waiting-for-child)
- [Advanced fork() Patterns and Tricks](#advanced-fork-patterns-and-tricks)
  - [Example 6: Creating Multiple Children](#example-6-creating-multiple-children)
  - [Example 7: Creating N Processes from Same Parent](#example-7-creating-n-processes-from-same-parent)
- [The Fork Bomb and Process Count Prediction](#the-fork-bomb-and-process-count-prediction)
  - [Example 8: Predicting Process Count](#example-8-predicting-process-count)
  - [Example 9: Conditional Fork Patterns](#example-9-conditional-fork-patterns)
  - [Example 10: The Tricky && and || Operators](#example-10-the-tricky--and--operators)
    - [Part A: The && Operator](#part-a-the--operator)
    - [Part B: The || Operator](#part-b-the--operator)
    - [Comparison: && vs || with Fork](#comparison--vs--with-fork)
- [Zombie and Orphan Processes](#zombie-and-orphan-processes)
  - [Zombie Processes: The Walking Dead](#zombie-processes-the-walking-dead)
    - [Example 13: Creating a Zombie Process](#example-13-creating-a-zombie-process)
    - [Example 14: Preventing Zombies with Signal Handling (complex example)](#example-14-preventing-zombies-with-signal-handling-complex-example)
  - [Orphan Processes: Lost Children](#orphan-processes-lost-children)
    - [Example 15: Creating an Orphan Process](#example-15-creating-an-orphan-process)
    - [Example 16: Demonstrating the Difference](#example-16-demonstrating-the-difference)
  - [Process States Summary](#process-states-summary)
  - [Best Practices to Avoid Issues](#best-practices-to-avoid-issues)
    - [1. Always Wait for Children](#1-always-wait-for-children)
    - [2. Use Signal Handlers for Multiple Children](#2-use-signal-handlers-for-multiple-children)
    - [3. Check for Errors](#3-check-for-errors)
    - [4. Use Non-blocking Wait for Flexibility](#4-use-non-blocking-wait-for-flexibility)
  - [Example 11: Creating a Specific Process Tree](#example-11-creating-a-specific-process-tree)
- [Process Count Calculation Tricks](#process-count-calculation-tricks)
  - [The Conditional Fork Rule](#the-conditional-fork-rule)
  - [The Short-Circuit Rule](#the-short-circuit-rule)
  - [Practice Problems](#practice-problems)
- [Advanced Topics: Error Handling and Best Practices](#advanced-topics-error-handling-and-best-practices)
  - [Example 12: Robust Fork with Error Handling](#example-12-robust-fork-with-error-handling)
- [Summary: fork() Mastery Checklist](#summary-fork-mastery-checklist)

## Setting Up Your Environment

Before we start coding, let's set up environments where you can run these programs:

#### Linux (Native)

If you're already on Linux, you're all set! Open a terminal and you can compile and run C programs directly:

```bash
gcc program.c -o program
./program
```

#### Windows (WSL - Windows Subsystem for Linux)

WSL provides a complete Linux environment on Windows:

1. Install WSL2 from Microsoft Store or PowerShell:

   ```powershell
   wsl --install
   ```

2. Install a Linux distribution (Ubuntu recommended)

3. Open the Linux terminal and install build tools:

   ```bash
   sudo apt update
   sudo apt install build-essential
   ```

4. Now you can compile and run C programs normally

#### Windows (Virtual Machine)

If you prefer a full Linux VM:

1. Download VirtualBox or VMware
2. Download Ubuntu ISO
3. Create a new VM and install Ubuntu
4. Install build tools as shown above

#### macOS

macOS is Unix-based, so most examples will work with minor modifications:

```bash
# Install Xcode command line tools
xcode-select --install

# Compile and run
gcc program.c -o program
./program
```

> Some Linux-specific features might not be available or behave differently on macOS.

## Essential Headers and Concepts

Before diving into examples, let's understand the key header files and concepts we'll be using:

#### Important Headers

```c
#include <stdio.h>      // Standard I/O functions (printf, scanf)
#include <stdlib.h>     // Standard library (exit, malloc)
#include <unistd.h>     // Unix standard definitions (fork, exec, getpid)
#include <sys/wait.h>   // Wait functions for process synchronization
#include <sys/types.h>  // System data types (pid_t)
#include <string.h>     // String manipulation functions
```

#### Key Data Types

```c
pid_t    // Process ID type (usually int)
ssize_t  // Signed size type for read/write return values
```

#### Core System Calls We'll Use

- `fork()` - Create a new process
- `getpid()` - Get current process ID
- `getppid()` - Get parent process ID
- `wait()` - Wait for child process to terminate
- `read()` - Read data from file descriptor
- `write()` - Write data to file descriptor
- `exit()` - Terminate process

## Basic I/O System Calls: read() and write()

Let's start with simple examples of reading from keyboard and writing to screen:

#### Example 1: Writing to Screen

```c
#include <unistd.h>
#include <string.h>

int main() {
    char message[] = "Hello from write() system call!\n";

    // write(file_descriptor, buffer, count)
    // STDOUT_FILENO is file descriptor 1 (standard output)
    write(STDOUT_FILENO, message, strlen(message));

    return 0;
}
```

**Key Points:**

- `STDOUT_FILENO` (value 1) represents standard output (your terminal)
- `write()` returns the number of bytes written or -1 on error
- Unlike `printf()`, `write()` doesn't format text - it writes raw bytes

#### Example 2: Reading from Keyboard

```c
#include <unistd.h>
#include <stdio.h>

int main() {
    char buffer[100];
    ssize_t bytes_read;

    write(STDOUT_FILENO, "Enter some text: ", 17);

    // read(file_descriptor, buffer, count)
    // STDIN_FILENO is file descriptor 0 (standard input)
    bytes_read = read(STDIN_FILENO, buffer, sizeof(buffer) - 1);

    if (bytes_read > 0) {
        buffer[bytes_read] = '\0';  // Null-terminate the string
        write(STDOUT_FILENO, "You entered: ", 13);
        write(STDOUT_FILENO, buffer, bytes_read);
    }

    return 0;
}
```

**Key Points:**

- `STDIN_FILENO` (value 0) represents standard input (keyboard)
- `read()` returns the number of bytes read, 0 for EOF, or -1 for error
- Always null-terminate strings when using raw `read()`

## The fork() System Call

Now let's explore the most fascinating system call: `fork()`. This is where things get really interesting!

#### Understanding fork(): The Basics

The `fork()` system call creates an exact copy of the current process. After `fork()`:

- **Parent process**: `fork()` returns the child's process ID (PID)
- **Child process**: `fork()` returns 0
- **Error case**: `fork()` returns -1

#### Example 3: Basic fork() Usage

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>

int main() {
    pid_t pid;

    printf("Before fork: PID = %d\n", getpid());

    pid = fork();  // This is where the magic happens!

    if (pid == 0) {
        // This code runs in the CHILD process
        printf("Child: My PID = %d, Parent PID = %d\n",
               getpid(), getppid());
    } else if (pid > 0) {
        // This code runs in the PARENT process
        printf("Parent: My PID = %d, Child PID = %d\n",
               getpid(), pid);
    } else {
        // fork() failed
        printf("Fork failed!\n");
        return 1;
    }

    printf("This line executes in BOTH processes!\n");

    return 0;
}
```

**Tricky Parts Explained:**

- After `fork()`, you have TWO processes running the same code
- The `if-else` structure helps differentiate between parent and child
- Both processes execute the final `printf()` - you'll see it twice!

#### Example 4: Process Identification Deep Dive

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>

int main() {
    pid_t pid;
    int x = 100;  // Watch how this variable behaves

    printf("Initial: PID = %d, x = %d\n", getpid(), x);

    pid = fork();

    if (pid == 0) {
        // Child process
        x = 200;  // Child modifies x
        printf("Child: PID = %d, PPID = %d, x = %d\n",
               getpid(), getppid(), x);
    } else if (pid > 0) {
        // Parent process
        x = 300;  // Parent modifies x
        printf("Parent: PID = %d, Child PID = %d, x = %d\n",
               getpid(), pid, x);
    }

    printf("Final: PID = %d, x = %d\n", getpid(), x);

    return 0;
}
```

**Key Insight:**

- Each process has its own memory space
- Modifying `x` in child doesn't affect parent's `x` and vice versa
- This demonstrates process isolation in action

## The wait() System Call: Process Synchronization

The `wait()` system call allows a parent to wait for its child processes to complete.

#### Example 5: Parent Waiting for Child

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>
#include <stdlib.h>

int main() {
    pid_t pid;
    int status;

    pid = fork();

    if (pid == 0) {
        // Child process
        printf("Child: Starting work...\n");
        sleep(3);  // Simulate some work
        printf("Child: Work completed!\n");
        exit(42);  // Exit with status code 42
    } else if (pid > 0) {
        // Parent process
        printf("Parent: Waiting for child to complete...\n");

        wait(&status);  // Wait for ANY child to terminate

        printf("Parent: Child completed with status %d\n",
               WEXITSTATUS(status));
    } else {
        printf("Fork failed!\n");
        return 1;
    }

    return 0;
}
```

**Key Points:**

- `wait()` blocks the parent until a child terminates
- `WEXITSTATUS(status)` extracts the exit code from the status
- Without `wait()`, child might become a "zombie" process

## Advanced fork() Patterns and Tricks

Now let's explore complex scenarios that often appear in interviews and exams:

#### Example 6: Creating Multiple Children

**Problem:** Create 1 parent and 3 child processes.

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    pid_t pid;
    int i;

    printf("Parent PID: %d\n", getpid());

    // Create 3 child processes
    for (i = 0; i < 3; i++) {
        pid = fork();

        if (pid == 0) {
            // Child process
            printf("Child %d: PID = %d, PPID = %d\n",
                   i + 1, getpid(), getppid());
            return 0;  // CRITICAL: Child must exit here!
        } else if (pid < 0) {
            printf("Fork failed for child %d\n", i + 1);
            return 1;
        }
        // Parent continues the loop to create next child
    }

    // Parent waits for all children
    for (i = 0; i < 3; i++) {
        wait(NULL);
    }

    printf("Parent: All children completed\n");

    return 0;
}
```

**Tricky Part:** The `return 0` in the child is crucial! Without it, children would also continue the loop and create their own children.

#### Example 7: Creating N Processes from Same Parent

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

#define N 4

int main() {
    pid_t pid;
    int i;

    printf("Master Parent PID: %d creating %d children\n", getpid(), N);

    for (i = 0; i < N; i++) {
        pid = fork();

        if (pid == 0) {
            // Child process
            printf("Child %d: PID = %d, PPID = %d\n",
                   i + 1, getpid(), getppid());
            sleep(1);  // Different sleep times to see ordering
            printf("Child %d: Exiting\n", i + 1);
            return 0;
        }
    }

    // Parent waits for all N children
    for (i = 0; i < N; i++) {
        int status;
        pid_t child_pid = wait(&status);
        printf("Parent: Child with PID %d finished\n", child_pid);
    }

    return 0;
}
```

## The Fork Bomb and Process Count Prediction

#### Example 8: Predicting Process Count

**Challenge:** How many processes will this create?

```c
#include <stdio.h>
#include <unistd.h>

int main() {
    fork();
    fork();
    fork();

    printf("Hello from PID: %d\n", getpid());

    return 0;
}
```

**Answer:** 8 processes total!

**Explanation:**

```txt
Initial:      1 process
After fork(): 2 processes  (1 parent + 1 child)
After fork(): 4 processes  (each of the 2 processes forks)
After fork(): 8 processes  (each of the 4 processes forks)
```

**Formula:** $n$ `fork()` calls create $2^n$ processes.

#### Example 9: Conditional Fork Patterns

```c
#include <stdio.h>
#include <unistd.h>

int main() {
    pid_t pid1, pid2;

    pid1 = fork();

    if (pid1 > 0) {  // Only parent creates second child
        pid2 = fork();
    }

    printf("PID: %d, PPID: %d\n", getpid(), getppid());

    return 0;
}
```

**How many processes?** 3 processes.

- Original parent
- First child (doesn't fork again)
- Second child (created only by parent)

#### Example 10: The Tricky && and || Operators

###### Part A: The && Operator

```c
#include <stdio.h>
#include <unistd.h>

int main() {
    printf("Before fork() && fork()\n");

    if (fork() && fork()) {
        printf("Inside if: PID = %d, PPID = %d\n", getpid(), getppid());
    }

    printf("After if: PID = %d, PPID = %d\n", getpid(), getppid());

    return 0;
}
```

**Detailed Analysis:**

1. **Original Process:** Calls first `fork()`
2. **Parent Process:** First `fork()` returns child PID (> 0, true), so evaluates second `fork()`
3. **Child Process:** First `fork()` returns 0 (false), short-circuits - doesn't call second `fork()`
4. **Parent's Second Fork:** Creates another child

**Execution Flow:**

```txt
Original Process
    |
    fork()
    |     \
Parent    Child (gets 0, stops here)
    |
    fork() (second)
    |     \
Parent    Child2
```

**Result:** 4 processes total, but only 2 enter the if block (Parent and Child2).

###### Part B: The || Operator

```c
#include <stdio.h>
#include <unistd.h>

int main() {
    printf("Before fork() || fork()\n");

    if (fork() || fork()) {
        printf("Inside if: PID = %d, PPID = %d\n", getpid(), getppid());
    }

    printf("After if: PID = %d, PPID = %d\n", getpid(), getppid());

    return 0;
}
```

**Detailed Analysis:**

1. **Original Process:** Calls first `fork()`
2. **Parent Process:** First `fork()` returns child PID (> 0, true), short-circuits - doesn't call second `fork()`
3. **Child Process:** First `fork()` returns 0 (false), so evaluates second `fork()`

**Execution Flow:**

```txt
Original Process
    |
    fork()
    |     \
Parent    Child
(stops)     |
         fork() (second)
         |     \
     Child    Child2
```

**Result:** 4 processes total, but only 3 enter the if block (Parent, Child, Child2).

###### Comparison: && vs || with Fork

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    pid_t pid;
    int choice;

    printf("Choose: 1 for &&, 2 for ||\n");
    scanf("%d", &choice);

    printf("Process count before: 1\n");

    if (choice == 1) {
        // && version
        if (fork() && fork()) {
            printf("&& Inside if: PID = %d\n", getpid());
        }
    } else {
        // || version
        if (fork() || fork()) {
            printf("|| Inside if: PID = %d\n", getpid());
        }
    }

    printf("Final: PID = %d\n", getpid());

    // Wait to see all output clearly
    sleep(1);

    return 0;
}
```

## Zombie and Orphan Processes

Understanding zombie and orphan processes is crucial for system programming. These are common issues that can affect system performance and resource management.

#### Zombie Processes: The Walking Dead

A **zombie process** is a process that has completed execution but still has an entry in the process table. This happens when:

- Child process terminates
- Parent process hasn't called `wait()` to read the child's exit status
- The child becomes a "zombie" - dead but not fully cleaned up

###### Example 13: Creating a Zombie Process

```c
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

int main() {
    pid_t pid;

    pid = fork();

    if (pid == 0) {
        // Child process
        printf("Child: PID = %d, PPID = %d\n", getpid(), getppid());
        printf("Child: Exiting now...\n");
        exit(0);  // Child terminates
    } else if (pid > 0) {
        // Parent process
        printf("Parent: Child PID = %d\n", pid);
        printf("Parent: Sleeping for 30 seconds (child becomes zombie)...\n");

        sleep(30);  // Parent doesn't call wait() immediately

        printf("Parent: Now calling wait()...\n");
        wait(NULL);  // Finally clean up the zombie
        printf("Parent: Zombie cleaned up!\n");
    } else {
        printf("Fork failed!\n");
        return 1;
    }

    return 0;
}
```

**What happens:**

1. Child terminates immediately
2. Parent sleeps without calling `wait()`
3. Child becomes zombie for 30 seconds
4. During sleep, check with: `ps aux | grep defunct` or `ps aux | grep Z`
5. Parent finally calls `wait()` and cleans up zombie

**To observe zombie:**

```bash
# Compile and run the program
gcc zombie_example.c -o zombie_example
./zombie_example &

# In another terminal, check for zombies
ps aux | grep defunct
# or
ps aux | grep Z
```

###### Example 14: Preventing Zombies with Signal Handling (complex example)

```c
#include <stdio.h>
#include <unistd.h>
#include <signal.h>
#include <sys/wait.h>
#include <stdlib.h>

// Signal handler for SIGCHLD
void handle_sigchld(int sig) {
    pid_t pid;
    int status;

    // Wait for all available children (non-blocking)
    while ((pid = waitpid(-1, &status, WNOHANG)) > 0) {
        printf("Signal handler: Child %d terminated\n", pid);
    }
}

int main() {
    pid_t pid;

    // Install signal handler for SIGCHLD
    signal(SIGCHLD, handle_sigchld);

    printf("Parent: Creating multiple children...\n");

    // Create multiple children
    for (int i = 0; i < 3; i++) {
        pid = fork();

        if (pid == 0) {
            // Child process
            printf("Child %d: PID = %d, sleeping for %d seconds\n",
                   i + 1, getpid(), i + 2);
            sleep(i + 2);
            printf("Child %d: Exiting\n", i + 1);
            exit(i + 1);
        }
    }

    // Parent does other work while children run
    printf("Parent: Doing other work...\n");
    for (int i = 0; i < 10; i++) {
        printf("Parent: Working... %d\n", i);
        sleep(1);
    }

    printf("Parent: Finished work, exiting\n");

    return 0;
}
```

**Key Points:**

- `SIGCHLD` signal is sent when child terminates
- Signal handler automatically cleans up zombies
- `WNOHANG` flag makes `waitpid()` non-blocking
- This prevents zombie accumulation

#### Orphan Processes: Lost Children

An **orphan process** is a child process whose parent has terminated before the child completes. When this happens:

- The orphan child is "adopted" by the init process (PID 1)
- Init process automatically cleans up orphans when they terminate
- Orphans are generally less problematic than zombies

###### Example 15: Creating an Orphan Process

```c
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

int main() {
    pid_t pid;

    pid = fork();

    if (pid == 0) {
        // Child process
        printf("Child: PID = %d, PPID = %d\n", getpid(), getppid());
        printf("Child: Parent will exit soon, I'll become orphan...\n");

        sleep(5);  // Child continues running

        printf("Child: After parent exit - PID = %d, PPID = %d\n",
               getpid(), getppid());
        printf("Child: Notice PPID changed to 1 (init process)!\n");

        sleep(5);
        printf("Child: Exiting now\n");

    } else if (pid > 0) {
        // Parent process
        printf("Parent: PID = %d, Child PID = %d\n", getpid(), pid);
        printf("Parent: Exiting immediately (making child orphan)...\n");

        // Parent exits without waiting for child
        exit(0);
    } else {
        printf("Fork failed!\n");
        return 1;
    }

    return 0;
}
```

**What happens:**

1. Parent creates child and exits immediately
2. Child becomes orphan
3. Init process (PID 1) adopts the orphan
4. Child's PPID changes from parent's PID to 1
5. When child exits, init automatically cleans it up

###### Example 16: Demonstrating the Difference

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>
#include <stdlib.h>

void create_zombie() {
    pid_t pid = fork();

    if (pid == 0) {
        printf("Zombie child: PID = %d, exiting...\n", getpid());
        exit(0);  // Child exits immediately
    } else {
        printf("Zombie parent: Child %d will become zombie\n", pid);
        sleep(10);  // Don't wait for child
        printf("Zombie parent: Finally cleaning up...\n");
        wait(NULL);
    }
}

void create_orphan() {
    pid_t pid = fork();

    if (pid == 0) {
        printf("Orphan child: PID = %d, PPID = %d\n", getpid(), getppid());
        sleep(10);  // Child continues after parent exits
        printf("Orphan child: PID = %d, PPID = %d (adopted by init)\n",
               getpid(), getppid());
    } else {
        printf("Orphan parent: PID = %d, exiting immediately\n", getpid());
        exit(0);  // Parent exits without waiting
    }
}

int main() {
    int choice;

    printf("Choose: 1 for Zombie, 2 for Orphan\n");
    scanf("%d", &choice);

    if (choice == 1) {
        create_zombie();
    } else {
        create_orphan();
    }

    return 0;
}
```

#### Process States Summary

| Process Type | Parent Status | Child Status | Problem              | Solution                        |
| ------------ | ------------- | ------------ | -------------------- | ------------------------------- |
| **Normal**   | Running       | Running      | None                 | Normal execution                |
| **Zombie**   | Running       | Terminated   | Child not cleaned up | Parent calls `wait()`           |
| **Orphan**   | Terminated    | Running      | Child has no parent  | Init adopts (automatic cleanup) |

#### Best Practices to Avoid Issues

###### 1. Always Wait for Children

```c
// Good practice
pid_t pid = fork();
if (pid > 0) {
    wait(NULL);  // or waitpid()
}
```

###### 2. Use Signal Handlers for Multiple Children

```c
signal(SIGCHLD, handle_sigchld);
```

###### 3. Check for Errors

```c
pid_t pid = fork();
if (pid == -1) {
    perror("Fork failed");
    exit(1);
}
```

###### 4. Use Non-blocking Wait for Flexibility

```c
pid_t result = waitpid(-1, &status, WNOHANG);
if (result > 0) {
    // Child terminated
} else if (result == 0) {
    // No child ready yet
}
```

#### Example 11: Creating a Specific Process Tree

**Problem:** Create this hierarchy:

```txt
Parent
├── Child A
│   ├── Grandchild A1
│   └── Grandchild A2
└── Child B
```

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    pid_t pid1, pid2;

    printf("Root Parent PID: %d\n", getpid());

    // Create Child A
    pid1 = fork();
    if (pid1 == 0) {
        printf("Child A PID: %d, PPID: %d\n", getpid(), getppid());

        // Child A creates Grandchild A1
        pid2 = fork();
        if (pid2 == 0) {
            printf("Grandchild A1 PID: %d, PPID: %d\n", getpid(), getppid());
            return 0;
        }

        // Child A creates Grandchild A2
        pid2 = fork();
        if (pid2 == 0) {
            printf("Grandchild A2 PID: %d, PPID: %d\n", getpid(), getppid());
            return 0;
        }

        // Child A waits for its children
        wait(NULL);
        wait(NULL);
        return 0;
    }

    // Parent creates Child B
    pid1 = fork();
    if (pid1 == 0) {
        printf("Child B PID: %d, PPID: %d\n", getpid(), getppid());
        return 0;
    }

    // Parent waits for Child A and Child B
    wait(NULL);
    wait(NULL);

    printf("All processes completed\n");

    return 0;
}
```

## Process Count Calculation Tricks

#### Process Count Calculation Tricks

For $n$ consecutive `fork()` calls: **$2^n$` processes**

#### The Conditional Fork Rule

```c
if (fork() == 0) {
    fork();  // Only child executes this
}
```

**Result:** 3 processes (1 parent + 1 child + 1 grandchild)

#### The Short-Circuit Rule

```c
fork() && fork();  // If first fork() returns 0 (child), second fork() doesn't execute
fork() || fork();  // If first fork() returns > 0 (parent), second fork() doesn't execute
```

#### Practice Problems

**Problem 1:** How many "Hello" messages will print?

```c
fork();
if (fork() == 0) {
    fork();
}
printf("Hello\n");
```

**Answer:** 5 messages

- Original parent forks → 2 processes
- Both processes check `if (fork() == 0)`
- Parent's fork creates child, parent continues
- Child executes inner fork
- Total: 5 processes, each prints "Hello"

**Problem 2:** Process count for:

```c
for (int i = 0; i < 3; i++) {
    fork();
}
```

**Answer:** $8$ processes ($2^3$)

## Advanced Topics: Error Handling and Best Practices

#### Example 12: Robust Fork with Error Handling

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>
#include <errno.h>
#include <string.h>

int main() {
    pid_t pid;
    int status;

    pid = fork();

    if (pid == -1) {
        // Fork failed
        fprintf(stderr, "Fork failed: %s\n", strerror(errno));
        return 1;
    } else if (pid == 0) {
        // Child process
        printf("Child: Doing some work...\n");
        sleep(2);
        return 42;  // Exit with specific code
    } else {
        // Parent process
        printf("Parent: Child PID is %d\n", pid);

        if (waitpid(pid, &status, 0) == -1) {
            fprintf(stderr, "Wait failed: %s\n", strerror(errno));
            return 1;
        }

        if (WIFEXITED(status)) {
            printf("Child exited with status: %d\n", WEXITSTATUS(status));
        } else if (WIFSIGNALED(status)) {
            printf("Child killed by signal: %d\n", WTERMSIG(status));
        }
    }

    return 0;
}
```

**Key Improvements:**

- `waitpid()` waits for specific child instead of any child
- Proper error checking with `errno`
- Status analysis with `WIFEXITED()` and `WIFSIGNALED()`

## Summary: fork() Mastery Checklist

To master `fork()`, remember these key points:

1. **Return Values:**

   - Parent: gets child PID (> 0)
   - Child: gets 0
   - Error: gets -1

2. **Process Count Formula:**

   - $n$ consecutive forks: $2^n$ processes
   - Conditional forks: analyze execution paths

3. **Common Patterns:**

   - Always check `fork()` return value
   - Child processes should exit early in loops
   - Parent should `wait()` for children
   - Use `getpid()` and `getppid()` for identification

4. **Tricky Scenarios:**

   - Short-circuit operators (`&&` and `||`)
   - Conditional forks
   - Nested forks

5. **Best Practices:**

   - Handle `fork()` failures
   - Use `waitpid()` for specific children
   - Check child exit status
   - Avoid fork bombs in production code
