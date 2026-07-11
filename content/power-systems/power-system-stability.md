# Power System Stability

## Learning Objectives

After studying this topic, you should be able to:

- Define power system stability.
- Explain the need for stability studies.
- Classify different types of power system stability.
- Understand rotor angle, voltage, and frequency stability.
- Identify factors affecting system stability.
- Explain the importance of maintaining stability in interconnected power systems.

---

# Introduction

A modern power system consists of generating stations, transmission lines, substations, distribution systems, and various electrical loads operating together as an interconnected network.

Under normal operating conditions, all synchronous generators rotate at the same synchronous speed and maintain a constant phase relationship with each other. The generated power continuously matches the system load demand, ensuring a stable supply of electrical energy.

However, disturbances such as short circuits, sudden load changes, loss of generation, transmission line outages, or switching operations may upset this equilibrium. If the system is unable to regain its normal operating condition after the disturbance, instability occurs.

Power system stability is the ability of the electrical power system to return to a stable operating condition after being subjected to a disturbance.

Stability is one of the most important requirements of a reliable power system. A stable system continues to supply electrical power without losing synchronism or causing unacceptable voltage or frequency variations.

---

# What is Power System Stability?

Power system stability is defined as the ability of a power system to regain its normal operating condition after a disturbance while maintaining synchronism among all synchronous machines.

A stable power system satisfies the following conditions:

- All generators remain synchronized.
- System frequency remains close to its rated value.
- Bus voltages remain within permissible limits.
- Power transfer continues without interruption.
- Oscillations gradually decrease with time.

If any of these conditions cannot be maintained, the system becomes unstable.

---

# Need for Stability Studies

Power system stability studies are essential because electrical power systems are continuously subjected to various disturbances.

Stability studies help engineers to:

- Ensure continuous and reliable power supply.
- Prevent loss of synchronism among generators.
- Avoid widespread power outages.
- Design suitable protection schemes.
- Improve transmission capability.
- Determine the maximum transferable power.
- Plan system expansion.
- Enhance overall system reliability.

Without proper stability analysis, even a small disturbance may develop into a major blackout.

---

# Importance of Power System Stability

Power system stability is important because it:

- Maintains uninterrupted power supply.
- Protects generators and other equipment.
- Prevents cascading failures.
- Improves system reliability.
- Increases transmission efficiency.
- Ensures safe operation of interconnected power systems.
- Reduces economic losses due to outages.

---

# Stable and Unstable Systems

A power system may be either stable or unstable depending on its response to a disturbance.

## Stable System

A stable system returns to its original or a new acceptable operating condition after the disturbance is removed.

Characteristics:

- Generator rotor angles remain synchronized.
- Frequency returns to its normal value.
- Voltage remains within acceptable limits.
- Oscillations gradually die out.

---

## Unstable System

An unstable system fails to regain equilibrium after a disturbance.

Characteristics:

- Generator rotor angles continue to increase.
- Frequency deviates significantly.
- Voltage may collapse.
- Protective devices disconnect parts of the system.
- Complete system blackout may occur.

---

# Conditions Required for Stable Operation

For satisfactory operation, a power system should satisfy the following conditions:

- Mechanical input power should be equal to electrical output power.
- All synchronous generators should rotate at synchronous speed.
- Rotor angle differences should remain within permissible limits.
- Bus voltages should remain within specified limits.
- System frequency should remain nearly constant.
- The generated power should match the load demand.

---

# Disturbances Affecting Stability

Power system stability may be affected by several disturbances, including:

- Three-phase faults.
- Single line-to-ground faults.
- Sudden increase in load.
- Sudden loss of load.
- Generator outage.
- Transmission line tripping.
- Transformer failure.
- Switching operations.
- Lightning strikes.

The severity of the disturbance determines whether the system remains stable or becomes unstable.

---

# Flowchart

```text
Normal Operating Condition

↓

Disturbance Occurs

↓

Rotor Angle, Voltage or Frequency Deviates

↓

System Response

↓

Stable?
      │
 ┌────┴────┐
 │         │
Yes        No
 │         │
Returns    Loss of Synchronism
to Normal  Voltage Collapse
Operation  Frequency Instability

```
# Classification of Power System Stability

Power system stability is classified based on the nature of the disturbance and the system response.

The major types of stability are:

- Steady-State Stability
- Transient Stability
- Dynamic Stability
- Rotor Angle Stability
- Voltage Stability
- Frequency Stability

---

# Classification Chart

```text
Power System Stability

│

├── Rotor Angle Stability
│      ├── Steady-State Stability
│      ├── Transient Stability
│      └── Dynamic Stability
│
├── Voltage Stability
│
└── Frequency Stability
```

---

# 1. Steady-State Stability

Steady-state stability is the ability of a power system to maintain synchronism when subjected to small and gradual changes in load.

These changes occur continuously during normal operation.

Examples include:

- Gradual increase in consumer load.
- Small variations in generator output.
- Minor switching operations.

The system should adjust itself without losing synchronism.

---

## Characteristics of Steady-State Stability

- Small disturbances only.
- Changes occur gradually.
- Rotor angle changes slowly.
- System remains synchronized.
- Studied under normal operating conditions.

---

## Importance

Steady-state stability determines:

- Maximum power that can be transmitted continuously.
- Safe operating limit of transmission lines.
- Normal operating margin of the system.

---

# 2. Transient Stability

Transient stability is the ability of a power system to remain in synchronism after a large and sudden disturbance.

These disturbances produce rapid changes in generator rotor angle.

Examples include:

- Three-phase short circuit.
- Sudden loss of generation.
- Transmission line tripping.
- Sudden removal of a large load.
- Bus faults.

Transient stability is one of the most important considerations in modern interconnected power systems.

---

## Characteristics of Transient Stability

- Large disturbances.
- Rapid change in rotor angle.
- Large oscillations occur.
- Stability depends on fault clearing time.
- Studied for the first few seconds after the disturbance.

---

## Importance

Transient stability studies help in:

- Selecting relay operating time.
- Determining circuit breaker clearing time.
- Maintaining synchronism after faults.
- Improving system reliability.

---

# Critical Clearing Time (CCT)

Critical Clearing Time is the maximum time allowed to clear a fault without causing the system to lose synchronism.

If the fault is cleared before the critical clearing time,

- The system remains stable.

If the fault persists beyond the critical clearing time,

- The generators lose synchronism.
- The system becomes unstable.

Therefore, protective relays and circuit breakers should operate within the critical clearing time.

---

# 3. Dynamic Stability

Dynamic stability is the ability of a power system to maintain synchronism under continuous small disturbances while considering the action of automatic control systems.

Dynamic stability considers:

- Automatic Voltage Regulators (AVR)
- Governors
- Excitation systems
- Power System Stabilizers (PSS)

It analyzes the long-term oscillatory response of the system.

---

## Characteristics of Dynamic Stability

- Small but continuous disturbances.
- Includes machine control systems.
- Oscillations are analyzed over a longer period.
- More detailed than steady-state stability.

---

# Comparison of Steady-State, Transient and Dynamic Stability

| Feature | Steady-State | Transient | Dynamic |
|---------|--------------|-----------|----------|
| Disturbance | Small | Large | Small Continuous |
| Nature of Change | Gradual | Sudden | Continuous |
| Time Duration | Long | First Few Seconds | Several Seconds to Minutes |
| Rotor Angle Change | Small | Large | Oscillatory |
| Control System Considered | No | No | Yes |
| Complexity | Simple | Moderate | High |

---

# 4. Rotor Angle Stability

Rotor angle stability is the ability of synchronous machines to remain in synchronism after a disturbance.

During normal operation,

- Mechanical input power equals electrical output power.
- Rotor angle remains nearly constant.

After a disturbance,

- Rotor angle begins to change.
- The machine accelerates or decelerates.

If the rotor angle settles to a stable value, synchronism is maintained.

If it continues to increase, synchronism is lost.

Rotor angle stability is the most fundamental aspect of power system stability.

---

# 5. Voltage Stability

Voltage stability is the ability of the power system to maintain acceptable voltages at all buses during normal operation and after a disturbance.

Voltage instability occurs when the system cannot supply sufficient reactive power.

Common causes include:

- Heavy loading.
- Long transmission lines.
- Insufficient reactive power compensation.
- Generator reactive power limits.

Voltage instability may eventually lead to voltage collapse.

---

## Characteristics

- Concerned with bus voltages.
- Depends mainly on reactive power balance.
- Usually occurs under heavily loaded conditions.

---

# 6. Frequency Stability

Frequency stability is the ability of the power system to maintain system frequency within acceptable limits following a disturbance.

Frequency deviations occur when there is an imbalance between generation and load.

If

Generation > Load

Frequency increases.

If

Generation < Load

Frequency decreases.

Large frequency deviations may result in:

- Generator tripping.
- Load shedding.
- System blackout.

---

## Methods of Frequency Control

Frequency is maintained by:

- Speed governors.
- Automatic Generation Control (AGC).
- Load shedding schemes.
- Reserve generating units.

---

# Key Points

- Steady-state stability deals with gradual load changes.
- Transient stability deals with sudden large disturbances.
- Dynamic stability considers automatic control systems.
- Rotor angle stability ensures generators remain synchronized.
- Voltage stability depends mainly on reactive power support.
- Frequency stability depends on maintaining a balance between generation and load.

# Swing Equation

The swing equation is the fundamental equation used in power system stability studies. It describes the dynamic behavior of the rotor of a synchronous machine when there is an imbalance between the mechanical input power and the electrical output power.

When the mechanical input power is equal to the electrical output power, the rotor rotates at synchronous speed.

If the mechanical input power becomes greater than the electrical output power, the rotor accelerates.

If the electrical output power becomes greater than the mechanical input power, the rotor decelerates.

The swing equation helps determine whether the generator remains stable after a disturbance.

---

# Swing Equation

The mathematical form of the swing equation is

\[
M\frac{d^2\delta}{dt^2}=P_m-P_e
\]

where

- \(M\) = Angular momentum constant
- \(\delta\) = Rotor angle (electrical degrees or radians)
- \(P_m\) = Mechanical input power
- \(P_e\) = Electrical output power

The difference

\[
P_a=P_m-P_e
\]

is called the **accelerating power**.

---

# Interpretation of the Swing Equation

There are three possible operating conditions.

### Case 1

If

\[
P_m=P_e
\]

then

\[
P_a=0
\]

The rotor speed remains constant and the machine operates in steady state.

---

### Case 2

If

\[
P_m>P_e
\]

then

\[
P_a>0
\]

The rotor accelerates and the rotor angle increases.

---

### Case 3

If

\[
P_m<P_e
\]

then

\[
P_a<0
\]

The rotor decelerates and the rotor angle decreases.

---

# Power-Angle Equation

The electrical power transferred by a transmission line depends on the rotor angle.

The power-angle equation is

\[
P_e=\frac{EV}{X}\sin\delta
\]

where

- \(E\) = Internal generated voltage
- \(V\) = Infinite bus voltage
- \(X\) = Transfer reactance
- \(\delta\) = Power angle (load angle)

This equation shows that the transmitted power varies as the sine of the rotor angle.

---

# Power-Angle Curve

The relationship between transmitted power and rotor angle is called the **power-angle curve**.

Characteristics:

- At \(\delta=0^\circ\), transmitted power is zero.
- Power increases as the rotor angle increases.
- Maximum power occurs at

\[
\delta=90^\circ
\]

- Beyond \(90^\circ\), transmitted power decreases.
- Operation beyond the maximum power point is unstable.

---

# Maximum Power Transfer

The maximum transferable power is

\[
P_{max}=\frac{EV}{X}
\]

This occurs when

\[
\delta=90^\circ
\]

In practice, power systems operate well below this limit to maintain a safety margin.

---

# Equal Area Criterion

The Equal Area Criterion is a graphical method used to determine the transient stability of a **single machine connected to an infinite bus (SMIB)** system.

It compares the energy gained by the rotor during acceleration with the energy lost during deceleration.

---

# Principle of Equal Area Criterion

During a fault,

- Electrical output power decreases.
- Mechanical input power remains almost constant.
- The rotor accelerates.
- Rotor angle increases.

After the fault is cleared,

- Electrical output power increases.
- The rotor begins to decelerate.

For the system to remain stable,

**Accelerating Area = Decelerating Area**

That is,

\[
A_1=A_2
\]

where

- \(A_1\) = Accelerating area
- \(A_2\) = Decelerating area

If

\[
A_1>A_2
\]

the machine loses synchronism and becomes unstable.

---

# Advantages of Equal Area Criterion

- Simple graphical method.
- No need to solve the swing equation directly.
- Useful for transient stability analysis.
- Widely used for single-machine infinite bus systems.

---

# Limitations of Equal Area Criterion

- Applicable mainly to SMIB systems.
- Not suitable for multi-machine systems.
- Assumes constant mechanical input power.
- Does not include detailed control system effects.

---

# Factors Affecting Power System Stability

Several factors influence the stability of a power system.

- Generator inertia.
- Transmission line reactance.
- Fault location.
- Fault clearing time.
- Generator excitation.
- System loading.
- Reactive power support.
- Network configuration.
- Speed governor response.
- Automatic Voltage Regulator (AVR).

---

# Methods to Improve Stability

The stability of a power system can be improved by:

- Fast fault clearing using high-speed circuit breakers.
- Using Automatic Voltage Regulators (AVR).
- Installing Power System Stabilizers (PSS).
- Reducing transmission line reactance.
- Series compensation of transmission lines.
- Shunt compensation using capacitors or FACTS devices.
- Increasing generator inertia.
- Proper load shedding.
- Improving governor response.
- Maintaining adequate reactive power support.

---

# Flowchart

```text
Disturbance

↓

Rotor Angle Changes

↓

Swing Equation

↓

Acceleration or Deceleration

↓

Equal Area Criterion Applied

↓

Stable?
      │
 ┌────┴────┐
 │         │
Yes        No
 │         │
Synchronism  Loss of
Maintained   Synchronism
```

# Practical Applications of Power System Stability

Power system stability studies play an important role in the planning, design, operation, and protection of modern electrical power systems.

Some important applications are given below.

---

## 1. Power System Planning

Stability analysis helps engineers determine whether a proposed power system can operate safely under different loading conditions.

It is used for

- Planning new generating stations.
- Expansion of transmission networks.
- Interconnection of power systems.
- Determining transmission capability.

---

## 2. Protection System Design

Stability studies assist in selecting and coordinating protective devices such as

- Circuit breakers.
- Protective relays.
- Current transformers.
- Potential transformers.

The protection system should isolate only the faulty section while keeping the healthy part of the system in operation.

---

## 3. Transmission Line Design

Stability analysis helps determine

- Maximum transferable power.
- Suitable transmission voltage.
- Required line compensation.
- Safe operating limits.

---

## 4. Generator Operation

Power system stability ensures that synchronous generators remain in synchronism after disturbances.

It helps in

- Selecting generator ratings.
- Designing excitation systems.
- Setting governor parameters.
- Improving generator performance.

---

## 5. Renewable Energy Integration

Modern power systems include renewable energy sources such as

- Solar power plants.
- Wind farms.
- Small hydro stations.

Stability studies help analyze the effect of renewable generation on

- System frequency.
- Voltage profile.
- Power flow.
- Grid reliability.

---

## 6. Smart Grid Applications

Smart grids continuously monitor the power system using intelligent sensors and communication networks.

Stability analysis supports

- Real-time monitoring.
- Automatic fault detection.
- Load management.
- Self-healing power systems.

---

# Advantages of Power System Stability Studies

- Improves system reliability.
- Prevents loss of synchronism.
- Minimizes blackout risk.
- Ensures uninterrupted power supply.
- Helps in protection coordination.
- Increases transmission capability.
- Improves voltage regulation.
- Enhances frequency control.
- Assists in planning future expansion.
- Improves overall power quality.

---

# Limitations

Power system stability studies also have certain limitations.

- Mathematical analysis becomes complex for large interconnected systems.
- Accurate machine and network data are required.
- System parameters continuously change with operating conditions.
- Simplifying assumptions may reduce accuracy.
- Computer simulation is often required for practical systems.

---

# Comparison of Stability Types

| Feature | Steady-State Stability | Transient Stability | Dynamic Stability |
|----------|------------------------|---------------------|-------------------|
| Disturbance | Small | Large | Small Continuous |
| Nature of Disturbance | Gradual | Sudden | Repeated |
| Duration | Long-term | First Few Seconds | Long-term |
| Rotor Angle Change | Small | Large | Oscillatory |
| Control Systems Considered | No | No | Yes |
| Complexity | Low | Moderate | High |

---

# Key Formulae

### Swing Equation

\[
M\frac{d^2\delta}{dt^2}=P_m-P_e
\]

---

### Accelerating Power

\[
P_a=P_m-P_e
\]

---

### Power-Angle Equation

\[
P_e=\frac{EV}{X}\sin\delta
\]

---

### Maximum Power Transfer

\[
P_{max}=\frac{EV}{X}
\]

---

### Equal Area Criterion

For stable operation,

\[
A_1=A_2
\]

where

- \(A_1\) = Accelerating area
- \(A_2\) = Decelerating area

---

# Viva Questions

### 1. What is power system stability?

Power system stability is the ability of a power system to regain its normal operating condition after a disturbance while maintaining synchronism.

---

### 2. What is steady-state stability?

It is the ability of the system to maintain synchronism during small and gradual changes in load.

---

### 3. What is transient stability?

It is the ability of the system to remain stable after a large and sudden disturbance such as a short circuit.

---

### 4. What is dynamic stability?

Dynamic stability is the ability of the system to maintain synchronism under continuous small disturbances while considering automatic control systems.

---

### 5. What is the swing equation used for?

The swing equation describes the rotor dynamics of a synchronous machine during disturbances.

---

### 6. At what rotor angle is maximum power transmitted?

Maximum power is transmitted when

\[
\delta=90^\circ
\]

---

### 7. What is the Equal Area Criterion?

It is a graphical method used to determine the transient stability of a single-machine infinite bus system.

---

### 8. What is Critical Clearing Time?

Critical Clearing Time is the maximum allowable time to clear a fault without causing the system to lose synchronism.

---

### 9. Name two methods of improving power system stability.

- Fast fault clearing.
- Automatic Voltage Regulators (AVR).

---

### 10. Why is power system stability important?

It ensures reliable operation, prevents blackouts, and maintains synchronism, voltage, and frequency within acceptable limits.

---

# Summary

- Power system stability is the ability of a power system to maintain synchronism after a disturbance.
- Stability is classified into steady-state, transient, dynamic, rotor angle, voltage, and frequency stability.
- The swing equation describes the rotor motion of a synchronous machine.
- The power-angle equation relates transmitted power to the rotor angle.
- The Equal Area Criterion is a graphical method for analyzing transient stability in single-machine infinite bus systems.
- Fast fault clearing, proper excitation control, reactive power compensation, and effective protection systems improve system stability.
- Stability studies are essential for planning, operation, protection, and expansion of modern interconnected power systems.

# Quick Revision

## Important Definitions

**Power System Stability**

The ability of a power system to regain its normal operating condition after a disturbance while maintaining synchronism.

---

**Steady-State Stability**

Ability of the system to remain stable under small and gradual load changes.

---

**Transient Stability**

Ability of the system to remain stable after large and sudden disturbances such as short circuits.

---

**Dynamic Stability**

Ability of the system to maintain synchronism under continuous small disturbances while considering automatic control systems.

---

**Rotor Angle Stability**

Ability of synchronous machines to maintain synchronism after a disturbance.

---

**Voltage Stability**

Ability of the system to maintain acceptable voltages at all buses under normal and disturbed conditions.

---

**Frequency Stability**

Ability of the system to maintain system frequency within acceptable limits following a disturbance.

---

# Important Formulae

### Swing Equation

\[
M\frac{d^2\delta}{dt^2}=P_m-P_e
\]

---

### Accelerating Power

\[
P_a=P_m-P_e
\]

---

### Power-Angle Equation

\[
P_e=\frac{EV}{X}\sin\delta
\]

---

### Maximum Power Transfer

\[
P_{max}=\frac{EV}{X}
\]

Occurs when

\[
\delta=90^\circ
\]

---

### Equal Area Criterion

For stable operation,

\[
A_1=A_2
\]

---

# One-Mark Questions

1. Define power system stability.
2. What is rotor angle stability?
3. Define transient stability.
4. What is steady-state stability?
5. What is dynamic stability?
6. What is voltage stability?
7. What is frequency stability?
8. State the swing equation.
9. What is the power-angle equation?
10. Define Critical Clearing Time (CCT).
11. What is Equal Area Criterion?
12. At what rotor angle is maximum power transferred?

---

# Frequently Asked University Questions

### Short Answer Questions

- Define power system stability.
- Explain steady-state stability.
- Explain transient stability.
- Differentiate between transient and dynamic stability.
- What are the factors affecting power system stability?

---

### Long Answer Questions

- Explain the classification of power system stability.
- Derive the swing equation.
- Explain the power-angle equation with a neat graph.
- Explain the Equal Area Criterion.
- Discuss methods of improving power system stability.
- Compare steady-state, transient, and dynamic stability.

---

# Chapter Summary

- Power system stability ensures continuous and reliable operation after disturbances.
- The major types are steady-state, transient, dynamic, rotor angle, voltage, and frequency stability.
- The swing equation governs the rotor dynamics of synchronous machines.
- The power-angle equation relates transmitted power to the rotor angle.
- The Equal Area Criterion is used to assess transient stability in a single-machine infinite-bus system.
- Fast fault clearing, effective excitation control, reactive power compensation, and proper protection improve overall system stability.