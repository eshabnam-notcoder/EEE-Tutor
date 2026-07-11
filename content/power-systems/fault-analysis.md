# Fault Analysis

## Learning Objectives

After studying this topic, you should be able to:

- Understand the concept of faults in power systems.
- Explain the need for fault analysis.
- Identify different types of faults.
- Describe the causes and effects of faults.
- Compare symmetrical and unsymmetrical faults.
- State the assumptions made in fault analysis.
- Understand the importance of fault analysis in power system protection.

---

# Introduction

A power system is designed to operate under normal balanced conditions. However, due to various external and internal factors, abnormal conditions may occur that disturb the normal operation of the system. These abnormal conditions are known as **faults**.

A fault causes a sudden increase in current and a corresponding drop in voltage. If the fault is not cleared quickly, it may damage generators, transformers, transmission lines, and other electrical equipment.

Fault analysis is the process of determining the fault current and voltages at different points in the power system during a fault. The information obtained from fault analysis is essential for selecting protective devices such as relays and circuit breakers.

Fault analysis is one of the most important studies carried out during the planning, design, operation, and maintenance of electrical power systems.

---

# Need for Fault Analysis

Fault analysis is performed for the following reasons:

- To determine the magnitude of fault current.
- To calculate bus voltages during faults.
- To select suitable circuit breakers.
- To coordinate protective relays.
- To determine the interrupting capacity of switching devices.
- To protect generators, transformers, transmission lines, and cables.
- To improve the reliability and stability of the power system.
- To minimize equipment damage and power interruption.

---

# What is a Fault?

A **fault** is an abnormal condition in a power system in which one or more conductors come into contact with each other or with the ground due to insulation failure, equipment malfunction, or external causes.

During a fault, the impedance of the fault path becomes very low, causing a large current to flow.

The fault current is given by

\[
I_f=\frac{V}{Z_f}
\]

where

- \(I_f\) = Fault current
- \(V\) = System voltage
- \(Z_f\) = Fault impedance

Since the fault impedance is generally very small, the resulting fault current becomes very high.

---

# Characteristics of Faults

A fault generally exhibits the following characteristics:

- Sudden occurrence.
- Large increase in current.
- Significant reduction in voltage.
- High thermal stress on equipment.
- Large mechanical forces on conductors.
- Disturbance in power system operation.
- Operation of protective relays and circuit breakers.

---

# Causes of Faults

Faults may occur due to natural causes, equipment failure, or human activities.

## 1. Lightning

Lightning strikes may produce very high transient voltages that puncture insulation and create flashovers.

---

## 2. Insulation Failure

Insulation may fail due to

- Ageing
- Moisture
- Dust
- Overheating
- Manufacturing defects

This results in short circuits between conductors or between conductor and ground.

---

## 3. Tree Branches

Tree branches touching overhead conductors during storms may cause line-to-line or line-to-ground faults.

---

## 4. High Wind

Strong winds may cause conductors to swing and come into contact with each other.

---

## 5. Birds and Animals

Birds, squirrels, monkeys, snakes, and other animals may bridge energized conductors and grounded structures, causing faults.

---

## 6. Equipment Failure

Failure of transformers, generators, circuit breakers, insulators, or cables may lead to abnormal current flow.

---

## 7. Human Errors

Faults may occur due to

- Incorrect switching operations.
- Improper maintenance.
- Construction activities near transmission lines.
- Accidental damage during excavation.

---

## 8. Pollution

Industrial pollution, dust, salt deposits, and chemical contamination reduce insulation strength and increase the possibility of flashover.

---

# Effects of Faults

Faults produce several undesirable effects on the power system.

## Electrical Effects

- Excessive fault current.
- Severe voltage drop.
- Disturbance of power flow.
- Power interruption.

---

## Thermal Effects

The heat generated during a fault is proportional to

\[
P=I^2R
\]

Large fault currents produce excessive heat, which may

- Melt conductors.
- Damage insulation.
- Burn electrical equipment.

---

## Mechanical Effects

Heavy fault currents produce strong electromagnetic forces that may

- Bend busbars.
- Damage transformer windings.
- Distort generator windings.
- Loosen electrical connections.

---

## Economic Effects

Faults may result in

- Equipment replacement costs.
- Maintenance expenses.
- Production losses.
- Reduced reliability.
- Customer dissatisfaction.

---

# Classification of Faults

Power system faults are broadly classified into two categories.

## 1. Symmetrical Faults

A symmetrical fault affects all three phases equally and keeps the system balanced.

Characteristics:

- Equal fault currents in all phases.
- Phase displacement remains 120°.
- Produces the highest fault current.
- Easier to analyze.

Examples:

- Three-phase fault (LLL)
- Three-phase-to-ground fault (LLLG)

Although symmetrical faults occur rarely, they are used for equipment rating because they produce the maximum short-circuit current.

---

## 2. Unsymmetrical Faults

An unsymmetrical fault affects one or two phases, causing the system to become unbalanced.

Characteristics:

- Unequal phase currents.
- Unequal phase voltages.
- Requires symmetrical components for analysis.
- Occurs more frequently in practice.

Examples:

- Single Line-to-Ground (LG)
- Line-to-Line (LL)
- Double Line-to-Ground (LLG)

Approximately 70–80% of transmission line faults are single line-to-ground faults.

---

# Comparison Between Symmetrical and Unsymmetrical Faults

| Feature | Symmetrical Fault | Unsymmetrical Fault |
|----------|-------------------|---------------------|
| System Condition | Balanced | Unbalanced |
| Phases Affected | Three | One or Two |
| Frequency of Occurrence | Rare | Common |
| Fault Current | Highest | Lower |
| Analysis | Simple | More Complex |
| Sequence Components | Not Required | Required |

---

# Assumptions in Fault Analysis

The following assumptions are generally made to simplify fault calculations:

- The power system is balanced before the fault occurs.
- Prefault voltage is equal to the rated voltage.
- System frequency remains constant.
- Loads are neglected unless specified.
- Transmission line resistance is neglected compared to reactance.
- Magnetic saturation is ignored.
- The fault occurs suddenly.
- The fault impedance is assumed to be zero unless otherwise specified.

---

# Flowchart

```text
Normal Power System

↓

Fault Occurs

↓

Large Fault Current

↓

Voltage Drops

↓

Protective Relay Detects Fault

↓

Circuit Breaker Operates

↓

Fault Isolated

↓

Healthy Portion Continues Operation
```
# Prefault Conditions

Before a fault occurs, the power system is assumed to operate under normal steady-state conditions.

The following assumptions are generally made:

- The system is balanced.
- All bus voltages are equal to their rated values.
- Phase voltages are displaced by 120°.
- Load currents are neglected unless specified.
- Only positive sequence components are present.

For fault calculations, the prefault voltage is usually taken as

\[
V = 1.0 \text{ p.u.}
\]

---

# Three-Phase (Balanced) Fault

A three-phase fault occurs when all three conductors come into contact with each other simultaneously.

It is the most severe fault because it produces the highest fault current.

Although it occurs infrequently, it is used for designing and selecting circuit breakers due to the maximum current involved.

---

## Characteristics of Three-Phase Fault

- Balanced fault.
- Equal currents flow in all three phases.
- Phase displacement remains 120°.
- Only positive sequence network is involved.
- Produces the maximum short-circuit current.
- Simplest fault to analyze.

---

# Representation of Three-Phase Fault

```text
        R
         \
          \
           X
          /
         /
        Y
         \
          \
           |
           |
           Z
```

All three phases are short-circuited at the fault point.

---

# Equivalent Circuit

For a balanced fault, only the positive sequence network is considered.

```text
      E

      │

     jX

      │

     Fault
      │

    Ground
```

where

- \(E\) = Internal generated voltage
- \(X\) = Equivalent reactance up to the fault point

---

# Fault Current Calculation

The fault current for a three-phase fault is

\[
I_f=\frac{E}{Z_1+Z_f}
\]

where

- \(E\) = Prefault voltage
- \(Z_1\) = Positive sequence impedance
- \(Z_f\) = Fault impedance

For a solid fault,

\[
Z_f=0
\]

Therefore,

\[
I_f=\frac{E}{Z_1}
\]

If

\[
E=1\text{ p.u.}
\]

then

\[
I_f=\frac{1}{Z_1}
\]

---

# Fault Level (Short-Circuit Capacity)

The fault level indicates the maximum power that can flow into the fault.

It is also known as the **Short-Circuit MVA**.

The fault level is given by

\[
\text{Fault MVA}
=
\sqrt3V_LI_f
\]

where

- \(V_L\) = Line voltage
- \(I_f\) = Fault current

Using per-unit quantities,

\[
\text{Fault MVA}
=
\frac{\text{Base MVA}}
{X_{pu}}
\]

where

- Base MVA = Selected base power
- \(X_{pu}\) = Per-unit reactance up to the fault point

A smaller reactance results in a higher fault level.

---

# Importance of Fault Level

Fault level calculations are required for

- Selecting circuit breakers.
- Designing busbars.
- Choosing protective relays.
- Determining equipment withstand ratings.
- Planning future system expansion.

---

# Bus Fault Analysis

Fault analysis is generally carried out at different buses of the power system.

The procedure is:

1. Draw the reactance diagram.
2. Convert all quantities into per-unit values.
3. Find the equivalent reactance seen from the faulted bus.
4. Assume prefault voltage as 1.0 p.u.
5. Calculate fault current.
6. Determine bus voltages and branch currents.

---

# Current Limiting Reactors

A current limiting reactor is an inductive coil connected in series with generators, feeders, or busbars to reduce the magnitude of fault current.

During normal operation, the voltage drop across the reactor is very small.

During a fault, its reactance limits the short-circuit current.

---

## Advantages of Current Limiting Reactors

- Reduces fault current.
- Protects electrical equipment.
- Allows the use of lower-rated circuit breakers.
- Improves system stability.
- Reduces mechanical stress on conductors.

---

## Disadvantages

- Causes voltage drop during normal operation.
- Increases reactive power consumption.
- Adds cost to the power system.
- Reduces system efficiency slightly.

---

# Simple Solved Example

A generator has a positive sequence reactance of

\[
0.2\;pu
\]

Determine the three-phase fault current if the prefault voltage is

\[
1.0\;pu
\]

### Solution

Given

\[
E=1.0\;pu
\]

\[
X_1=0.2\;pu
\]

For a solid fault,

\[
Z_f=0
\]

Therefore,

\[
I_f=\frac{E}{X_1}
\]

\[
=\frac{1}{0.2}
\]

\[
=5\;pu
\]

Hence,

**Fault Current = 5 p.u.**

---

# Key Points

- Three-phase fault is a balanced fault.
- Only the positive sequence network is used.
- It produces the highest fault current.
- Circuit breakers are selected based on the maximum fault level.
- Current limiting reactors reduce short-circuit current and protect equipment.

# Unsymmetrical Faults

Unsymmetrical faults disturb the balanced operation of a three-phase power system by affecting one or two phases.

Unlike symmetrical faults, the phase currents and voltages become unequal, making direct analysis difficult.

The method of **symmetrical components** is used to simplify the analysis of unsymmetrical faults.

Unsymmetrical faults account for nearly **95%** of all power system faults.

---

# Types of Unsymmetrical Faults

The three major unsymmetrical faults are:

1. Single Line-to-Ground (LG) Fault
2. Line-to-Line (LL) Fault
3. Double Line-to-Ground (LLG) Fault

---

# Single Line-to-Ground (LG) Fault

A single line-to-ground fault occurs when one phase conductor comes into contact with the ground.

It is the most common fault in transmission and distribution systems.

---

## Causes

- Lightning
- Insulation failure
- Tree branches touching conductors
- Flashover of insulators
- Bird or animal contact

---

## Characteristics

- Affects only one phase.
- Most frequently occurring fault.
- Involves positive, negative, and zero sequence networks.
- Produces large ground current.

---

## Sequence Network Connection

For an LG fault, the sequence networks are connected in **series**.

```text
Positive Sequence

↓

Negative Sequence

↓

Zero Sequence

↓

Fault
```

---

## Fault Current

For a solid LG fault,

\[
I_f=\frac{3E}{Z_1+Z_2+Z_0}
\]

where

- \(E\) = Prefault voltage
- \(Z_1\) = Positive sequence impedance
- \(Z_2\) = Negative sequence impedance
- \(Z_0\) = Zero sequence impedance

---

# Line-to-Line (LL) Fault

A line-to-line fault occurs when two phase conductors come into contact with each other.

Ground is not involved.

---

## Causes

- High wind
- Conductor clashing
- Insulation breakdown
- Mechanical damage

---

## Characteristics

- Affects two phases.
- No ground current flows.
- Positive and negative sequence networks are involved.
- Zero sequence network is absent.

---

## Sequence Network Connection

For an LL fault,

```text
Positive Sequence

↓

Negative Sequence

Ground not involved
```

---

## Fault Current

For a solid LL fault,

\[
I_f=\frac{\sqrt3E}{Z_1+Z_2}
\]

---

# Double Line-to-Ground (LLG) Fault

A double line-to-ground fault occurs when two phase conductors simultaneously come into contact with the ground.

---

## Characteristics

- Two phases are involved.
- Ground is involved.
- All three sequence networks participate.
- More severe than an LL fault.

---

## Sequence Network Connection

For an LLG fault,

```text
Positive Sequence

↓

Negative Sequence

↓

Zero Sequence

↓

Ground
```

The three sequence networks are interconnected according to the fault conditions.

---

# Comparison of Different Faults

| Fault Type | Phases Involved | Ground Involved | Sequence Networks Used | Frequency |
|-------------|-----------------|-----------------|------------------------|-----------|
| Three-Phase (LLL) | Three | No | Positive only | Very Rare |
| Single Line-to-Ground (LG) | One | Yes | Positive + Negative + Zero | Most Common |
| Line-to-Line (LL) | Two | No | Positive + Negative | Common |
| Double Line-to-Ground (LLG) | Two | Yes | Positive + Negative + Zero | Less Common |

---

# Sequence Networks Used in Fault Analysis

The sequence network required depends on the type of fault.

| Fault Type | Positive Sequence | Negative Sequence | Zero Sequence |
|-------------|-------------------|-------------------|---------------|
| Three-Phase | ✓ | ✗ | ✗ |
| LG | ✓ | ✓ | ✓ |
| LL | ✓ | ✓ | ✗ |
| LLG | ✓ | ✓ | ✓ |

---

# Applications of Fault Analysis

Fault analysis is widely used in power system engineering for:

- Selection of circuit breakers.
- Protective relay coordination.
- Generator protection.
- Transformer protection.
- Transmission line protection.
- Determination of fault level.
- Power system planning.
- Stability studies.

---

# Advantages

- Determines fault current accurately.
- Helps in selecting protective equipment.
- Improves system reliability.
- Reduces equipment damage.
- Assists in relay coordination.
- Ensures safe operation of the power system.

---

# Limitations

- Based on simplifying assumptions.
- Load current is usually neglected.
- Resistance is often ignored.
- Results are approximate for complex practical systems.
- Accurate sequence impedance data is required.

---

# Viva Questions

### 1. What is fault analysis?

Fault analysis is the study of abnormal conditions in a power system to determine fault currents and voltages.

---

### 2. Which fault produces the highest fault current?

Three-phase fault.

---

### 3. Which is the most common fault in a power system?

Single line-to-ground (LG) fault.

---

### 4. Which sequence networks are used for an LG fault?

Positive, negative, and zero sequence networks.

---

### 5. Which sequence network is not used for an LL fault?

Zero sequence network.

---

### 6. Why is fault analysis performed?

To determine fault currents and select suitable protective devices.

---

### 7. Why are symmetrical components used in fault analysis?

They convert an unbalanced three-phase system into three balanced sequence networks, making analysis simpler.

---

# Summary

- Fault analysis determines the current and voltage during abnormal operating conditions.
- Faults are classified as symmetrical and unsymmetrical.
- A three-phase fault is balanced and uses only the positive sequence network.
- LG and LLG faults use positive, negative, and zero sequence networks.
- LL faults use only positive and negative sequence networks.
- Fault analysis is essential for selecting circuit breakers, designing protective relays, and ensuring reliable operation of power systems.