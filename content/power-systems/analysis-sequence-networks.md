# Sequence Networks

## Learning Objectives

After studying this topic, you should be able to:

- Understand what sequence networks are.
- Learn how positive, negative, and zero sequence networks are formed.
- Identify sequence impedances in power system elements.
- Draw sequence networks for generators, transformers, and transmission lines.
- Understand how sequence networks are connected during faults.
- Apply sequence networks in fault analysis.

---

# Introduction

After converting an unbalanced system into **symmetrical components**, the next step is to analyze each sequence separately.

For this purpose, we use **sequence networks**.

A sequence network is an equivalent circuit representing the behavior of a power system for a particular sequence (positive, negative, or zero).

Each network contains only its corresponding sequence impedances.

---

# Types of Sequence Networks

There are three sequence networks:

- Positive Sequence Network
- Negative Sequence Network
- Zero Sequence Network

---

# 1. Positive Sequence Network

The positive sequence network represents:

- Balanced operating conditions
- Normal system behavior
- Generated voltages in generators

### Characteristics:

- Contains positive sequence impedance \(Z_1\)
- Includes internal generated voltage \(E\)
- Same as normal power system model

### Example:

For a generator:

\[
E \rightarrow Z_1 \rightarrow Load
\]

---

# 2. Negative Sequence Network

The negative sequence network represents:

- Unbalanced conditions
- Reverse phase sequence currents

### Characteristics:

- Contains negative sequence impedance \(Z_2\)
- No generated voltage source in most cases
- Represents heating effects in machines

### Example:

\[
Z_2 \rightarrow Load
\]

---

# 3. Zero Sequence Network

The zero sequence network represents:

- Zero phase displacement currents
- Ground or neutral return paths

### Characteristics:

- Contains zero sequence impedance \(Z_0\)
- Depends heavily on grounding
- Transformer connections affect zero sequence flow

### Important:

Zero sequence currents flow only if a return path exists (neutral or earth).

---

# Sequence Impedances of Power System Elements

## 1. Transmission Line

- \(Z_1 = Z_2\)
- \(Z_0\) is different and usually higher

---

## 2. Synchronous Generator

- \(Z_1 = X_d'\) (subtransient reactance)
- \(Z_2\) is similar to \(Z_1\)
- \(Z_0\) depends on grounding of neutral

---

## 3. Transformer

Zero sequence behavior depends on connection:

- Star grounded → allows zero sequence current
- Delta → blocks zero sequence current

---

# Formation of Sequence Networks

Each sequence network is formed independently:

- Replace system with only \(Z_1\), \(Z_2\), or \(Z_0\)
- Remove sources except positive sequence
- Keep system structure identical

---

# Connection of Sequence Networks in Faults

Different faults connect sequence networks differently.

---

## 1. Single Line-to-Ground Fault (LG)

All three sequence networks are connected in series:

\[
Z_1 + Z_2 + Z_0
\]

---

## 2. Line-to-Line Fault (LL)

Only positive and negative sequence networks are involved:

\[
Z_1 + Z_2
\]

Zero sequence is absent.

---

## 3. Double Line-to-Ground Fault (LLG)

All three sequence networks are connected in a mixed configuration.

---

## 4. Three-Phase Fault

Only positive sequence network is used.

- System remains balanced during fault
- No negative or zero sequence components

---

# Flowchart

```text
Unbalanced System

↓

Convert to Symmetrical Components

↓

Separate into:

Positive Sequence Network
Negative Sequence Network
Zero Sequence Network

↓

Connect Networks Based on Fault Type

↓

Solve Equivalent Circuit

↓

Find Fault Currents and Voltages
```

---

# Simple Solved Example

For a line-to-line fault:

Given:

- Zero sequence is absent

Sequence network connection:

\[
Z_1 + Z_2
\]

If:

\[
Z_1 = j0.2,\quad Z_2 = j0.2
\]

Then equivalent impedance:

\[
Z_{eq} = j0.4
\]

Fault current:

\[
I_f = \frac{V}{Z_{eq}}
\]

---

# Practical Example

In a transmission system fault:

Instead of solving complex three-phase equations, engineers:

1. Convert system into sequence networks.
2. Connect networks based on fault type.
3. Solve simple single-phase equivalent circuit.

This drastically reduces computational effort in protection system design and real-time fault analysis.

---

# Advantages

- Simplifies fault analysis.
- Converts complex unbalanced systems into simple networks.
- Reduces computation effort.
- Essential for protection system design.
- Works well with symmetrical components theory.

---

# Limitations

- Requires sequence impedance data.
- Transformer connections complicate zero sequence analysis.
- Not useful for balanced load flow studies.

---

# Applications

- Fault analysis in power systems.
- Protective relay coordination.
- Power system stability analysis.
- Transmission system design.
- Generator and transformer protection.

---

# Exam Tips

- Positive sequence → normal operation.
- Negative sequence → unbalanced effects.
- Zero sequence → earth return path.
- Sequence networks are connected depending on fault type.
- Three-phase fault uses only positive sequence network.

---

# Viva Questions

### 1. What is a sequence network?

An equivalent circuit representing one sequence component of a power system.

---

### 2. Which sequence network is present in normal operation?

Positive sequence network.

---

### 3. Why is zero sequence important?

It represents ground return current paths.

---

### 4. Which fault uses all three sequence networks?

Single line-to-ground fault.

---

### 5. Which fault uses only positive sequence network?

Three-phase fault.

---

# Summary

- Sequence networks are equivalent circuits for each sequence component.
- There are three networks: positive, negative, and zero sequence.
- Each network has its own impedance.
- Fault analysis is performed by connecting sequence networks based on fault type.
- This method simplifies unbalanced system analysis significantly.