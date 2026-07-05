# Symmetrical Components

## Learning Objectives

After studying this topic, you should be able to:

- Understand the need for symmetrical components.
- Explain balanced and unbalanced three-phase systems.
- Define positive, negative, and zero sequence components.
- Perform symmetrical component transformation.
- Understand the importance of symmetrical components in fault analysis.
- State the advantages, limitations, and applications of symmetrical components.

---

# Introduction

In a perfectly balanced three-phase system,

- All phase voltages have equal magnitude.
- The phase displacement between voltages is 120°.
- Currents are also balanced.

However, in practical power systems, faults such as line-to-ground, line-to-line, and double line-to-ground faults cause the system to become **unbalanced**.

Analysis of such unbalanced systems becomes difficult using ordinary three-phase circuit analysis.

To simplify the analysis, the method of **Symmetrical Components** is used.

This method was introduced by **Charles LeGeyt Fortescue** in 1918.

---

# What are Symmetrical Components?

The method of symmetrical components states that **any unbalanced set of three-phase voltages or currents can be resolved into three balanced sets**, namely:

- Positive Sequence Components
- Negative Sequence Components
- Zero Sequence Components

Each set is perfectly balanced, making analysis much easier.

---

# Need for Symmetrical Components

Symmetrical components are used because:

- Unbalanced faults are common in power systems.
- Direct analysis of unbalanced systems is complicated.
- Balanced sequence networks are easier to solve.
- Fault calculations become systematic and accurate.

---

# Types of Symmetrical Components

There are three sequence components.

---

## 1. Positive Sequence Components

Positive sequence components have:

- Equal magnitude
- 120° phase displacement
- Normal phase sequence

\[
R \rightarrow Y \rightarrow B
\]

Mathematically,

\[
V_{a1},\;V_{b1},\;V_{c1}
\]

represent the positive sequence voltages.

These components represent the normal operating condition of the power system.

---

## 2. Negative Sequence Components

Negative sequence components have:

- Equal magnitude
- 120° phase displacement
- Reverse phase sequence

\[
R \rightarrow B \rightarrow Y
\]

Mathematically,

\[
V_{a2},\;V_{b2},\;V_{c2}
\]

Negative sequence components appear only when the system becomes unbalanced.

They produce undesirable heating in rotating machines.

---

## 3. Zero Sequence Components

Zero sequence components have:

- Equal magnitude
- Zero phase displacement
- All three phasors are in phase

\[
V_{a0}=V_{b0}=V_{c0}
\]

These components require a return path through the neutral or ground.

---

# Operator 'a'

The symmetrical component transformation uses the operator

\[
a=1\angle120^\circ
\]

Important properties are

\[
a^2=1\angle240^\circ
\]

\[
a^3=1
\]

and

\[
1+a+a^2=0
\]

These properties greatly simplify calculations.

---

# Transformation Equations

The phase quantities can be expressed in terms of sequence components as

\[
\begin{aligned}
V_a &= V_{a0}+V_{a1}+V_{a2} \\
V_b &= V_{a0}+a^2V_{a1}+aV_{a2} \\
V_c &= V_{a0}+aV_{a1}+a^2V_{a2}
\end{aligned}
\]

In matrix form,

\[
\begin{bmatrix}
V_a\\
V_b\\
V_c
\end{bmatrix}
=
\begin{bmatrix}
1&1&1\\
1&a^2&a\\
1&a&a^2
\end{bmatrix}
\begin{bmatrix}
V_0\\
V_1\\
V_2
\end{bmatrix}
\]

---

# Inverse Transformation

The sequence components are obtained from the phase quantities as

\[
\begin{bmatrix}
V_0\\
V_1\\
V_2
\end{bmatrix}
=
\frac13
\begin{bmatrix}
1&1&1\\
1&a&a^2\\
1&a^2&a
\end{bmatrix}
\begin{bmatrix}
V_a\\
V_b\\
V_c
\end{bmatrix}
\]

---

# Flowchart

```text
Three-Phase System

↓

Balanced?

↓

Yes
│
└── Normal Power System Analysis

↓

No

↓

Resolve into

Positive Sequence

+

Negative Sequence

+

Zero Sequence

↓

Analyze Each Sequence Separately

↓

Combine Results

↓

Obtain Original Unbalanced Quantities
```

---

# Simple Solved Example

A balanced three-phase system has

- Equal voltage magnitude
- Phase sequence R–Y–B

Determine the sequence components.

### Solution

Since the system is perfectly balanced,

- Positive sequence = Present
- Negative sequence = Zero
- Zero sequence = Zero

Hence,

\[
V_1 \neq 0
\]

\[
V_2 = 0
\]

\[
V_0 = 0
\]

Therefore, only positive sequence components exist.

---

# Practical Example

Consider a single line-to-ground fault on a transmission line.

During the fault,

- Phase currents become unequal.
- Voltage magnitudes differ.
- The three-phase system becomes unbalanced.

Instead of solving three complicated phase equations, engineers convert the system into positive, negative, and zero sequence networks.

These sequence networks are then interconnected according to the fault type to obtain the fault current quickly and accurately.

---

# Advantages

- Simplifies analysis of unbalanced systems.
- Makes fault calculations easier.
- Converts complex three-phase problems into balanced sequence networks.
- Widely used in protective relay design.
- Essential for modern power system studies.

---

# Limitations

- Mainly applicable to balanced three-phase systems under unbalanced conditions.
- Requires sequence impedance data.
- Not generally used for ordinary balanced load-flow analysis.

---

# Applications

- Fault analysis.
- Protective relaying.
- Power system stability studies.
- Generator protection.
- Transformer analysis.
- Transmission line studies.

---

# Exam Tips

Remember the following:

- Positive sequence → Normal phase sequence.
- Negative sequence → Reverse phase sequence.
- Zero sequence → All phasors in phase.
- \(1+a+a^2=0\) is one of the most important identities.
- Symmetrical components simplify unbalanced fault analysis.

---

# Viva Questions

### 1. Who introduced the method of symmetrical components?

Charles LeGeyt Fortescue.

---

### 2. Why are symmetrical components used?

To simplify the analysis of unbalanced three-phase systems.

---

### 3. How many sequence components are there?

Three.

---

### 4. Which sequence represents normal operating conditions?

Positive sequence.

---

### 5. Which sequence requires a neutral or ground return path?

Zero sequence.

---

### 6. What is the value of \(1+a+a^2\)?

Zero.

---

# Summary

- Symmetrical components transform an unbalanced three-phase system into three balanced sets.
- The three sequence components are positive, negative, and zero sequence.
- Positive sequence represents normal operation.
- Negative and zero sequence components appear during unbalanced conditions.
- The transformation uses the operator \(a = 1\angle120^\circ\).
- Symmetrical components form the foundation of fault analysis and protective relaying in power systems.