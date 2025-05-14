---
title: "Finite Automata: The Language of Simplicity - When Machines Recognize Patterns"
tags: [theory, automata, finite-automata]
date: 2025-03-23
description: A post on analyzing the efficiency of algorithms.
author: a2ys
thumbnail: /thumbnails/algorithmic-analysis.webp
featured: false
---

## Introduction: The Beauty of Simple Machines

Ever noticed how a traffic light works? It simply cycles through green, yellow, and red. It doesn't need to remember yesterday's traffic or what time it is – it just needs to know its current color and when to change. This simple behavior is what computer scientists call a **finite automaton** – probably the most elegant basic computational model ever created.

In our last article, we met the brilliant minds behind the Theory of Computation. Now, let's look at one of their most useful inventions: finite automata – simple computational models that show up everywhere from your keyboard to search engines to the software that makes programming languages work.

## Formal Definition: The Mathematical Foundation

Before we explore examples, let's establish the formal mathematical definition of finite automata, which will help us understand their capabilities and limitations.

#### Definition 1: Deterministic Finite Automaton (DFA)

A deterministic finite automaton is formally defined as a 5-tuple $(Q, \Sigma, \delta, q_0, F)$ where:

- $Q$ is a finite set of states
- $\Sigma$ is a finite set of input symbols called the alphabet
- $\delta: Q \times \Sigma \rightarrow Q$ is the transition function
- $q_0 \in Q$ is the initial state
- $F \subseteq Q$ is the set of accepting (or final) states

The transition function $\delta$ maps a state and an input symbol to a next state. The deterministic nature means that for each state and input symbol, there is exactly one next state.

#### Definition 2: Non-deterministic Finite Automaton (NFA)

A non-deterministic finite automaton is also defined as a 5-tuple $(Q, \Sigma, \delta, q_0, F)$, but with one crucial difference:

- $\delta: Q \times (\Sigma \cup \{\epsilon\}) \rightarrow \mathcal{P}(Q)$ is the transition function

Here, $\mathcal{P}(Q)$ represents the power set of $Q$ (the set of all subsets of $Q$). This means the transition function maps a state and an input symbol (or the empty string $\epsilon$) to a set of possible next states.

#### The Language of a Finite Automaton

The language $L(A)$ accepted by a finite automaton $A$ is the set of all strings that when processed by $A$, lead to an accepting state:

$L(A) = \{w \in \Sigma^* : \delta^*(q_0, w) \cap F \neq \emptyset\}$

Where $\delta^*$ is the extended transition function that works on strings rather than individual symbols.

Now that we have the formal foundation, let's explore what makes finite automata so elegant and useful.

## What Exactly Is a Finite Automaton?

A finite automaton is a computational model that reads input one symbol at a time and changes its state based on those symbols. Think of it as a machine with a limited number of internal configurations (states), moving from one state to another as it processes input.

What makes finite automata so elegant:

- They have a **fixed, limited number of states** (that's why we call them "finite")
- They have **no memory** beyond their current state
- They can only **read input in one direction** (left to right) without going backward
- For each input symbol, they **make one state transition**
- They either **accept or reject** the entire input string

Let's visualize this with a simple example:

Imagine you're standing in a room with three doors labeled 'a', 'b', and 'c'. Your job is to follow directions like "a, b, a, c" by walking through those doors. Each door leads to another room (maybe even the same room) with its own set of doors. Some rooms are marked as "accepting" rooms. If you end up in an accepting room after following all the directions, you've accepted the sequence.

That's it! **You've just acted like a finite automaton** with your body. The rooms are states, the doors are transitions, and the sequence of letters is the input string.

**Theoretical Perspective:** This room-door visualization directly maps to our formal definition. The rooms represent the set $Q$ of states, the door labels represent the alphabet $\Sigma$, the connections between rooms represent the transition function $\delta$, your starting room is the initial state $q_0$, and the "accepting" rooms represent the set $F$ of final states.

## Real-World Examples

Before we get into the formal stuff, let's look at some everyday examples to get a feel for finite automata:

#### The Coffee Vending Machine

Think about a simple coffee machine with states: READY, COINS_INSERTED, and DISPENSING.

- It starts in READY state
- When you put in coins, it moves to COINS_INSERTED
- When you press the coffee button (if in COINS_INSERTED), it moves to DISPENSING
- After pouring your coffee, it goes back to READY

This machine doesn't need to "remember" how many coffees it has made today or what time it is. It only needs to know its current state and what input it gets (coins or button press).

**Theoretical Formulation:** We can represent this coffee machine as a DFA where:

- $Q = \{\text{READY}, \text{COINS\_INSERTED}, \text{DISPENSING}\}$
- $\Sigma = \{\text{insert\_coins}, \text{press\_button}, \text{dispense\_complete}\}$
- $q_0 = \text{READY}$
- $F = \{\text{READY}\}$ (assuming we consider the machine as "accepting" when it's ready for a new customer)
- The transition function $\delta$ is defined as:
  - $\delta(\text{READY}, \text{insert\_coins}) = \text{COINS\_INSERTED}$
  - $\delta(\text{COINS\_INSERTED}, \text{press\_button}) = \text{DISPENSING}$
  - $\delta(\text{DISPENSING}, \text{dispense\_complete}) = \text{READY}$
  - All other transitions lead to an implicit error state

#### The Elevator

Picture a basic elevator in a three-floor building:

- It can be on Floor 1, Floor 2, or Floor 3 (these are the states)
- It gets commands: "go up" or "go down"
- From Floor 1, it can only go up; from Floor 3, it can only go down; from Floor 2, it can go either way

The elevator doesn't need to remember where it's been - it only needs to know its current floor and which way it's told to move.

**Theoretical Formulation:** This elevator can be modeled as a DFA where:

- $Q = \{\text{Floor1}, \text{Floor2}, \text{Floor3}\}$
- $\Sigma = \{\text{up}, \text{down}\}$
- $q_0 = \text{Floor1}$ (assuming the elevator starts on the first floor)
- $F = \{Floor1, Floor2, Floor3\}$ (all states are accepting since being on any floor is a valid final position)
- The transition function $\delta$ is defined as:
  - $\delta(\text{Floor1}, \text{up}) = \text{Floor2}$
  - $\delta(\text{Floor2}, \text{up}) = \text{Floor3}$
  - $\delta(\text{Floor2}, \text{down}) = \text{Floor1}$
  - $\delta(\text{Floor3}, \text{down}) = \text{Floor2}$
  - $\delta(\text{Floor1}, \text{down})$ and $\delta(\text{Floor3}, \text{up})$ are undefined (or lead to an error state)

#### The Password Checker

Imagine a simple password system that accepts the password "abba":

- It starts in state S0 (beginning state)
- If it reads 'a', it moves to state S1
- From S1, if it reads 'b', it moves to state S2
- From S2, if it reads 'b', it moves to state S3
- From S3, if it reads 'a', it moves to state S4 (accepting state)
- Any other sequence leads to rejection

The system doesn't need to store the characters you've already typed - it only needs to track which state it's in, which implicitly shows how much of the pattern you've correctly entered so far.

**Theoretical Formulation:** This password checker is a perfect example of a DFA where:

- $Q = \{S0, S1, S2, S3, S4, S_{reject}\}$
- $\Sigma = \{a, b\}$
- $q_0 = S0$
- $F = \{S4\}$
- The transition function $\delta$ is defined as:
  - $\delta(S0, a) = S1$
  - $\delta(S1, b) = S2$
  - $\delta(S2, b) = S3$
  - $\delta(S3, a) = S4$
  - All other transitions lead to $S_{reject}$

The language accepted by this DFA is the singleton set $L = \{abba\}$.

Each of these examples shows a key feature of finite automata: they make decisions based only on their current state and the current input symbol, with no extra memory needed.

## Deterministic Finite Automata (DFA): Precision and Predictability

Now let's get more formal with our first automaton type: the Deterministic Finite Automaton (DFA).

Imagine you're playing a game with very strict rules. At any moment, given your current position and the next instruction, there's exactly one place you can move to. No choices, no ambiguity, complete predictability. That's a DFA.

Let's design a simple DFA that accepts all strings with an even number of 'a's (including zero 'a's):

This DFA has two states:

- $q_0$: We've seen an even number of 'a's so far (accepting state)
- $q_1$: We've seen an odd number of 'a's so far (non-accepting state)

The transitions:

- From $q_0$, if we read 'a', go to $q_1$ (even + 1 = odd)
- From $q_1$, if we read 'a', go to $q_0$ (odd + 1 = even)
- From either state, if we read 'b', stay in the same state (since 'b' doesn't affect our count of 'a's)

**Formal Definition:** This DFA can be represented as $(Q, \Sigma, \delta, q_0, F)$ where:

- $Q = \{q_0, q_1\}$
- $\Sigma = \{a, b\}$
- $q_0$ is the initial state
- $F = \{q_0\}$
- The transition function $\delta$ is defined as:
  - $\delta(q_0, a) = q_1$
  - $\delta(q_0, b) = q_0$
  - $\delta(q_1, a) = q_0$
  - $\delta(q_1, b) = q_1$

Let's walk through a simple example: the string "abbaba"

1. Start in state $q_0$ (even count of 'a's: 0)
2. Read 'a': move to $q_1$ (odd count: 1)
3. Read 'b': stay in $q_1$ (odd count: still 1)
4. Read 'b': stay in $q_1$ (odd count: still 1)
5. Read 'a': move to $q_0$ (even count: 2)
6. Read 'b': stay in $q_0$ (even count: still 2)
7. Read 'a': move to $q_1$ (odd count: 3)

We end in state $q_1$, which isn't an accepting state, so the string is rejected. This makes sense - "abbaba" has 3 'a's, which isn't an even number.

**Extended Transition Function:** In formal theory, we define an extended transition function $\delta^*: Q \times \Sigma^* \rightarrow Q$ that works on strings rather than individual symbols:

- $\delta^*(q, \varepsilon) = q$ for all $q \in Q$ (where $\varepsilon$ is the empty string)
- $\delta^*(q, wa) = \delta(\delta^*(q, w), a)$ for all $q \in Q$, $w \in \Sigma^*$, and $a \in \Sigma$

Using this extended transition function, we can say a string $w$ is accepted by the DFA if and only if $\delta^*(q_0, w) \in F$.

#### The Beauty of DFAs

DFAs have several nice properties:

- They always give a definite yes/no answer
- They process input in linear time (O(n) where n is the input length)
- They can be implemented very efficiently in hardware and software
- They are closed under operations like union, intersection, and complement (meaning if we can build DFAs for languages A and B, we can build DFAs for A∪B, A∩B, and the complement of A)

**Closure Properties:** Formally, if $L_1$ and $L_2$ are regular languages (languages recognized by DFAs), then the following are also regular:

- $L_1 \cup L_2$ (union)
- $L_1 \cap L_2$ (intersection)
- $\overline{L_1}$ (complement)
- $L_1 \cdot L_2$ (concatenation)
- $L_1^*$ (Kleene star)

## Non-deterministic Finite Automata (NFA): The Power of Choice

Now, let's shift gears with a new thought experiment:

Imagine playing a game where at certain points, you can clone yourself and explore multiple paths at the same time. If any version of you reaches the goal, you win! That's how an NFA works.

Non-deterministic Finite Automata (NFAs) introduce a fascinating concept: choice. An NFA can have multiple possible transitions for the same state and input symbol. It's like the machine can "guess" which path will lead to acceptance.

Let's design an NFA that accepts strings ending with "ab":

This NFA has three states:

- $q_0$: Initial state
- $q_1$: We've just seen an 'a'
- $q_2$: We've just seen "ab" (accepting state)

The transitions:

- From $q_0$, on input 'a', go to $q_1$
- From $q_0$, on any input, we can also stay in $q_0$ (this is the non-deterministic part!)
- From $q_1$, on input 'b', go to $q_2$
- From $q_2$, on any input, go to a dead state (not shown, for simplicity)

**Formal Definition:** This NFA can be represented as $(Q, \Sigma, \delta, q_0, F)$ where:

- $Q = \{q_0, q_1, q_2\}$
- $\Sigma = \{a, b\}$
- $q_0$ is the initial state
- $F = \{q_2\}$
- The transition function $\delta$ is defined as:
  - $\delta(q_0, a) = \{q_0, q_1\}$ (we can either stay in $q_0$ or move to $q_1$)
  - $\delta(q_0, b) = \{q_0\}$ (we stay in $q_0$)
  - $\delta(q_1, b) = \{q_2\}$ (we move to $q_2$)
  - $\delta(q_1, a) = \emptyset$ (no valid transition)
  - $\delta(q_2, a) = \delta(q_2, b) = \emptyset$ (no valid transition)

There's something magical about this: the NFA can "decide" to stay in $q_0$ for most of the string, then suddenly transition to $q_1$ when it sees an 'a' that might be part of the final "ab" sequence.

**Formal Language Description:** The language recognized by this NFA is $L = \{w \in \{a,b\}^* | w \text{ ends with } "ab"\}$, which can also be written as $L = \{a,b\}^* \cdot \{ab\}$.

#### The Intuition of Non-determinism

People often ask: "How does the machine know which choice to make?"

The answer is beautiful: it doesn't need to! We can think of an NFA as exploring all possible paths at the same time. If ANY path leads to acceptance, the string is accepted.

**Formal Definition of Acceptance:** A string $w$ is accepted by an NFA if and only if there exists at least one sequence of transitions from the initial state to an accepting state while reading $w$. Mathematically, $w$ is accepted if and only if $\delta^*(q_0, w) \cap F \neq \emptyset$.

Another way to picture it: imagine the NFA creating multiple copies of itself at each choice point, each following a different path. If any copy reaches an accepting state, the input is accepted.

## Epsilon Transitions: The Art of Silent Moves

NFAs have another cool feature: $\varepsilon$-transitions (epsilon transitions). These are transitions that the machine can take without reading any input symbol – essentially "free moves."

Imagine playing a board game where sometimes you can teleport to certain spaces without rolling the dice or taking a turn. These "free moves" dramatically change your strategy!

Let's see how $\varepsilon$-transitions work with a simple example: an NFA that accepts strings containing either "ab" or "ba":

In this NFA:

- We start at state $q_0$
- From $q_0$, we can take $\varepsilon$-transitions to either $q_1$ or $q_4$ (without reading any input)
- From $q_1$, if we read 'a', we go to $q_2$
- From $q_2$, if we read 'b', we go to $q_3$ (accepting state)
- From $q_4$, if we read 'b', we go to $q_5$
- From $q_5$, if we read 'a', we go to $q_6$ (accepting state)

**Formal Definition:** This NFA with $\varepsilon$-transitions can be represented as $(Q, \Sigma, \delta, q_0, F)$ where:

- $Q = \{q_0, q_1, q_2, q_3, q_4, q_5, q_6\}$
- $\Sigma = \{a, b\}$
- $q_0$ is the initial state
- $F = \{q_3, q_6\}$
- The transition function $\delta$ includes:
  - $\delta(q_0, \varepsilon) = \{q_1, q_4\}$ (epsilon transitions)
  - $\delta(q_1, a) = \{q_2\}$
  - $\delta(q_2, b) = \{q_3\}$
  - $\delta(q_4, b) = \{q_5\}$
  - $\delta(q_5, a) = \{q_6\}$

**Epsilon Closure:** In formal theory, we define the $\varepsilon$-closure of a state $q$ as the set of all states reachable from $q$ by following zero or more $\varepsilon$-transitions:
$\varepsilon\text{-closure}(q) = \{p \in Q | q \xrightarrow{\varepsilon^*} p\}$

The $\varepsilon$-transitions allow us to "guess" whether we should look for "ab" or "ba" without committing to either path until we see the actual input.

## The Surprising Truth: NFA = DFA

Here's where things get fascinating: despite their differences, NFAs and DFAs are equivalent in power! Any language that can be recognized by an NFA can also be recognized by a DFA, and vice versa.

**Theorem:** A language is accepted by some DFA if and only if it is accepted by some NFA.

How is this possible? Through a process called the "subset construction," we can convert any NFA to an equivalent DFA. The key insight: a state in the new DFA corresponds to a set of possible states in the original NFA.

Let's convert a simple NFA to a DFA:

Consider an NFA that accepts strings containing "ab":

**Subset Construction Algorithm:**

1. Define the start state of the DFA as $\{q_0\}$ (or $\varepsilon\text{-closure}(q_0)$ if the NFA has $\varepsilon$-transitions)
2. For each state $S$ in the DFA and each input symbol $a$, define the transition:
   $\delta_{DFA}(S, a) = \bigcup_{q \in S} \delta_{NFA}(q, a)$
   (or $\bigcup_{q \in S} \varepsilon\text{-closure}(\delta_{NFA}(q, a))$ if the NFA has $\varepsilon$-transitions)
3. A state $S$ in the DFA is accepting if and only if $S \cap F_{NFA} \neq \emptyset$

The resulting DFA might have more states than the original NFA (potentially up to $2^n$ states, where $n$ is the number of states in the NFA), but it will recognize exactly the same language.

**Formal Proof Sketch:** The key insight is that a state in the DFA represents the set of all possible states the NFA could be in after reading a particular prefix of the input. By tracking all possible states simultaneously, the DFA can simulate the NFA's non-deterministic behavior in a deterministic way.

This equivalence leads to an important practical insight: NFAs often let us design simpler, more intuitive solutions, which we can then mechanically convert to DFAs for efficient implementation.

## Minimizing DFAs: The Beauty of Efficiency

Once we have a DFA, we can often make it even more elegant through minimization – reducing the number of states while preserving its behavior.

Imagine you're designing a subway map. If two stations connect to exactly the same set of other stations, you could potentially combine them into a single station without changing where passengers can travel.

**Theorem (Myhill-Nerode):** For any regular language $L$, there is a unique minimal DFA (up to isomorphism) that recognizes $L$.

The key insight: two states can be combined if they behave identically for all possible input sequences. The formal algorithm for DFA minimization:

1. Start by dividing states into accepting and non-accepting groups
2. Repeatedly refine these groups: two states stay in the same group only if, for each input symbol, they transition to states in the same group
3. Continue until no further refinement is possible
4. Each final group becomes a single state in the minimized DFA

**Formal Algorithm (Hopcroft's Algorithm):**

1. Partition the states into two sets: accepting states and non-accepting states
2. For each set in the partition, check if all states in the set transition to the same set for each input symbol
3. If not, split the set into smaller sets based on their transitions
4. Repeat until no more splits are possible
5. Each set in the final partition becomes a single state in the minimized DFA

This process gives us the smallest DFA that recognizes the same language – a model of mathematical elegance and practical efficiency.

## Real-World Applications: Where Theory Meets Practice

Finite automata aren't just elegant theoretical concepts – they're powerful practical tools used throughout computing:

#### 1. Lexical Analysis in Compilers

When you compile code, the first phase (lexical analysis) uses finite automata to break your code into tokens like "variable," "keyword," or "operator." The scanner reads your source code character by character, using a DFA to recognize valid tokens.

**Theoretical Connection:** For each token type in the programming language (identifier, keyword, number, etc.), we define a regular expression describing its pattern. We then convert these regular expressions to NFAs, combine them into a single NFA, convert to a DFA, and minimize it for efficiency.

#### 2. Regular Expression Matching

Every time you use search with patterns like `.*\.jpg` to find image files, you're using finite automata behind the scenes. Regular expressions are converted to NFAs, which are then converted to DFAs for efficient matching.

**Theoretical Connection:** The theory of regular expressions and finite automata are deeply connected – they represent exactly the same class of languages (regular languages). Any pattern describable by a regular expression can be recognized by a finite automaton, and vice versa.

#### 3. Protocol Implementation

Network protocols, from TCP/IP to Bluetooth, use finite state machines to track connection states and ensure reliable communication. States like "LISTENING," "ESTABLISHED," and "CLOSED" with transitions based on packets received or sent.

**Theoretical Connection:** The formal modeling of protocols as finite state machines allows for rigorous verification of their properties, such as ensuring that no deadlock states exist.

#### 4. Digital Circuit Design

Hardware engineers use finite state machines to design sequential circuits. Each flip-flop represents a bit of the current state, with combinational logic implementing the transition function.

**Theoretical Connection:** The Moore and Mealy machine models in digital design are direct applications of finite automata theory, with the main difference being that they produce output signals on transitions or states.

#### 5. Natural Language Processing

In text processing, finite automata help with tasks like tokenization, stemming, and simple pattern matching – foundational steps in understanding human language.

**Theoretical Connection:** While full natural language processing requires more powerful computational models (context-free or even context-sensitive), finite automata are valuable for handling the lexical aspects of language processing.

#### 6. Game Development

Character behaviors in games are often modeled as finite state machines with states like "PATROLLING," "ATTACKING," or "FLEEING," with transitions based on game events.

**Theoretical Connection:** The deterministic nature of DFAs ensures predictable behavior for game entities, while the ability to model complex state transitions allows for sophisticated AI behaviors.

#### 7. User Interface Design

UI components often follow finite state machine models with states like "INACTIVE," "FOCUSED," "PRESSED," etc., with transitions based on user interactions.

**Theoretical Connection:** The formal modeling of UI components as finite state machines helps ensure that all possible user interactions are handled appropriately, leading to more robust interfaces.

## Thinking Like a Finite Automaton (Interactive Exercise)

Let's put theory into practice with a thought experiment:

Imagine you're a DFA designed to recognize valid email addresses (simplified for this exercise). You have the following states:

- START: Initial state
- GOT_USERNAME: We've seen a valid username
- GOT_AT: We've seen '@' after the username
- GOT_DOMAIN: We've seen a valid domain name
- GOT_DOT: We've seen '.' after the domain
- GOT_TLD: We've seen a valid top-level domain (accepting state)
- ERROR: Invalid input (reject state)

Try to trace through these inputs in your mind, tracking your state changes:

1. `alice@example.com`
2. `bob@.com`
3. `charlie@domain`
4. `@domain.com`

For each character, ask yourself: "What state am I in, and where do I go after reading this character?"

**Formal Exercise:** For the email DFA described above, try to write out the formal transition function $\delta$ that captures all the valid transitions. Think about what characters are allowed in usernames, domains, and TLDs, and how to handle invalid inputs.

This mental exercise helps develop a feel for how finite automata process input step by step.

## Challenging Problems: Test Your Understanding

Now let's test your understanding with some more challenging problems about finite automata:

1. **DFA Construction:** Construct a DFA that accepts all binary strings that, when interpreted as a binary number, are divisible by 3. For example, the strings "0", "11", "110" should be accepted, while "1", "10", "100" should be rejected.

2. **NFA to DFA Conversion:** Convert the following NFA to an equivalent DFA using the subset construction algorithm:

   - States: $\{q_0, q_1, q_2\}$
   - Alphabet: $\{0, 1\}$
   - Transitions:
     - $\delta(q_0, 0) = \{q_0, q_1\}$
     - $\delta(q_0, 1) = \{q_0\}$
     - $\delta(q_1, 0) = \emptyset$
     - $\delta(q_1, 1) = \{q_2\}$
     - $\delta(q_2, 0) = \{q_2\}$
     - $\delta(q_2, 1) = \{q_2\}$
   - Initial state: $q_0$
   - Accepting states: $\{q_2\}$

3. **Proof Challenge:** Prove that the language $L = \{a^n b^n | n \geq 1\}$ (i.e., strings with an equal number of a's followed by an equal number of b's) is not regular. Hint: Use the Pumping Lemma for regular languages.

4. **Minimization Exercise:** Consider a DFA with states $\{q_0, q_1, q_2, q_3, q_4\}$, alphabet $\{0, 1\}$, initial state $q_0$, and accepting states $\{q_0, q_3\}$. The transition function is:

   - $\delta(q_0, 0) = q_1$, $\delta(q_0, 1) = q_2$
   - $\delta(q_1, 0) = q_3$, $\delta(q_1, 1) = q_4$
   - $\delta(q_2, 0) = q_4$, $\delta(q_2, 1) = q_3$
   - $\delta(q_3, 0) = q_3$, $\delta(q_3, 1) = q_3$
   - $\delta(q_4, 0) = q_4$, $\delta(q_4, 1) = q_4$

   Apply the DFA minimization algorithm to find the minimal equivalent DFA.

5. **Closure Properties:** Let $L_1$ and $L_2$ be regular languages. Prove that the language $L = \{xy | x \in L_1, y \in L_2, |x| = |y|\}$ (strings formed by concatenating equal-length strings from $L_1$ and $L_2$) is not necessarily regular.

These problems will help deepen your understanding of finite automata theory and its applications. Try to solve them on your own before looking for solutions!

## Coming Next: Regular Expressions - The Language of Patterns

Now that you understand finite automata, we're ready to explore Regular Expressions – a powerful pattern language that's equivalent in power to finite automata but offers a more concise way to describe patterns.

In our next article, we'll explore how regular expressions work, their connection to finite automata, and how they're used in everything from text editors to search engines to data validation.

Until then, try to spot finite automata in the world around you – they're in your toaster, your traffic lights, your keyboard, and countless other devices and systems!
