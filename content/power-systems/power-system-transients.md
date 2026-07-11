# Power System Transients

---

# Learning Objectives

After studying this chapter, you should be able to:

- Understand the concept of transients in power systems.
- Explain the causes and effects of transient disturbances.
- Classify different types of power system transients.
- Understand the difference between temporary and transient conditions.
- Explain the importance of transient analysis.
- Identify the major sources of transient overvoltages.

---

# 1. Introduction to Power System Transients

A power system normally operates under steady-state conditions where voltage, current, and frequency remain almost constant.

However, sudden changes in the system can disturb this normal condition and produce temporary high-frequency variations called **transients**.

---

# Definition

**A power system transient is a sudden change in voltage or current caused by a disturbance in the electrical network, lasting for a short duration before the system returns to steady-state operation.**

---

# Normal Operation vs Transient Condition
---

# 7. Travelling Waves in Power Systems

When a sudden disturbance occurs in a transmission line, the resulting voltage and current changes do not appear throughout the system instantly.

They travel along the transmission line in the form of waves.

These waves are called **travelling waves**.

---

# Definition

A travelling wave is a transient voltage or current wave that propagates along a transmission line due to a sudden disturbance.

---

# Causes of Travelling Waves

Travelling waves are produced by:

- Lightning strokes
- Switching operations
- Faults
- Circuit breaker operations

---

# Travelling Wave Propagation
---

# 14. Lightning Surges

Lightning is one of the most severe sources of transient overvoltages in power systems.

A lightning stroke produces extremely high current that travels through power system components and creates a steep voltage surge.

---

# Lightning Stroke Characteristics

Typical lightning parameters:

- Current magnitude: \(10kA - 200kA\)
- Rise time: few microseconds
- Duration: tens to hundreds of microseconds

---

# Lightning Surge Formation
---

# 25. Insulation Coordination

Insulation coordination is an important aspect of power system design that ensures electrical equipment insulation can withstand expected overvoltages.

The objective is to achieve a balance between:

- Equipment insulation strength
- Protection level provided by protective devices
- System reliability
- Economic cost

---

# Definition

**Insulation coordination is the selection of insulation strength of electrical equipment with respect to the expected overvoltages and the characteristics of protective devices.**

---

# Need for Insulation Coordination

It helps to:

- Prevent insulation failure
- Reduce equipment damage
- Improve system reliability
- Reduce unnecessary insulation cost

---

# Basic Principle

The insulation level of equipment should always be higher than the protection level.

\[
Equipment\ Insulation\ Level > Protection\ Level
\]

---

# Insulation Coordination Concept
---

# 33. Transient Analysis Methods

Transient analysis is used to study the behavior of a power system during sudden disturbances.

It helps engineers:

- Predict overvoltages
- Design insulation levels
- Select protection devices
- Improve system reliability

---

# Need for Transient Analysis

Transient studies are required for:

- Lightning protection design
- Switching operation studies
- Circuit breaker selection
- Insulation coordination

---

# Types of Transient Analysis

The main methods are:

1. Analytical methods
2. Numerical simulation methods
3. Experimental methods

---

# 33.1 Analytical Methods

Analytical methods use mathematical equations to solve transient problems.

They are based on:

- Circuit theory
- Transmission line equations
- Differential equations

---

# Transmission Line Equation

For a travelling wave:

\[
v=\frac{1}{\sqrt{LC}}
\]

where:

- \(v\) = Wave velocity
- \(L\) = Inductance
- \(C\) = Capacitance

---

# Advantages

- Simple for basic systems
- Provides theoretical understanding

---

# Limitations

- Difficult for complex networks
- Requires assumptions

---

# 33.2 Numerical Simulation Methods

Modern power systems use computer-based simulation for transient analysis.

Advantages:

- Handles complex networks
- Provides accurate results
- Models practical systems

---

# 34. Electromagnetic Transients Program (EMTP)

EMTP is a computer simulation tool used for analyzing electromagnetic transients in power systems.

---

# Definition

**Electromagnetic Transients Program (EMTP) is a simulation program used to study transient behavior caused by switching operations, lightning, and faults.**

---

# Applications of EMTP

Used for:

- Lightning surge studies
- Switching surge analysis
- Transformer energization studies
- Circuit breaker studies
- Insulation coordination

---

# EMTP Model

Power System Model
    │

    ▼
Transient Simulation
    │

    ▼
Voltage / Current Response
    │

    ▼
Protection Design

---

# 35. Digital Simulation of Transients

Digital simulation uses mathematical models and computers to analyze transient events.

---

# Steps in Digital Simulation
System Modelling
   │

   ▼
Parameter Selection
   │

   ▼
Transient Calculation
   │

   ▼
Result Analysis
   │

   ▼
Design Improvement

---

# Advantages of Digital Simulation

- Accurate analysis
- Reduced testing cost
- Safe evaluation of extreme conditions
- Easy modification of system parameters

---

# 36. Transient Stability and Transients

Transient disturbances can affect the stability of power systems.

Large disturbances may cause:

- Rotor angle changes
- Generator oscillations
- Loss of synchronism

---

# Examples of Large Disturbances

- Three-phase faults
- Generator tripping
- Major transmission line outage

---

# Transient Stability Improvement Methods

Methods include:

- Faster protection systems
- Improved excitation control
- FACTS devices
- HVDC links

---

# 37. Protection Against Transient Overvoltages

Complete protection requires coordination between:

- Insulation
- Surge protection
- Grounding
- Protective relays

---

# Protection Strategy
Transient Source
    │

    ▼
Shielding
    │

    ▼
Grounding
    │

    ▼
Surge Arrester
    │

    ▼
Protected Equipment

---

# 38. Future Trends in Transient Protection

Modern power systems are moving towards intelligent transient protection.

---

# 1. Smart Monitoring Systems

Use:

- Sensors
- Digital relays
- Communication networks

to detect transient events.

---

# 2. Advanced Surge Protection

Future systems use:

- Improved ZnO arresters
- Hybrid protection devices

---

# 3. AI-Based Transient Analysis

Artificial intelligence can help in:

- Fault identification
- Surge prediction
- Preventive maintenance

---

# 4. Renewable Energy System Protection

Renewable integration introduces new transient challenges.

Examples:

- Converter switching transients
- DC side surges
- Power electronic disturbances

---

# Summary

- Power system transients are short-duration disturbances caused by sudden changes.
- Lightning and switching operations are major sources of transient overvoltages.
- Travelling waves propagate along transmission lines during transient conditions.
- Reflection and refraction determine wave behavior at discontinuities.
- Surge impedance controls travelling wave characteristics.
- Lightning protection uses shield wires, grounding, and surge arresters.
- Switching surges occur due to circuit breaker and equipment operations.
- Transformer energization creates inrush currents.
- Insulation coordination ensures equipment safety.
- BIL represents insulation withstand capability.
- ZnO surge arresters provide modern overvoltage protection.
- EMTP is widely used for transient simulation.
- Digital simulation improves transient analysis and system design.

---

# Quick Revision

- **Transient** → Short-duration change in voltage or current.
- **Lightning Surge** → External transient caused by lightning.
- **Switching Surge** → Internal transient caused by switching operations.
- **Travelling Wave** → Voltage/current wave moving along a transmission line.
- **Surge Impedance** → Ratio of voltage wave to current wave.
- **Reflection** → Return of wave from discontinuity.
- **Refraction** → Transmission of wave into another medium.
- **Bewley Diagram** → Graphical analysis of travelling waves.
- **BIL** → Maximum impulse voltage insulation can withstand.
- **Surge Arrester** → Device limiting transient overvoltage.
- **ZnO Arrester** → Modern metal oxide surge protection device.
- **EMTP** → Software for electromagnetic transient analysis.
- **Insulation Coordination** → Matching insulation strength with protection level.

---

# Viva Questions

1. Define power system transient.
2. What are the causes of transients?
3. Differentiate lightning and switching surges.
4. Explain travelling waves.
5. Define surge impedance.
6. What happens when a wave reaches an open circuit?
7. What is the reflection coefficient?
8. Explain Bewley lattice diagram.
9. What is insulation coordination?
10. Define Basic Insulation Level.
11. Explain the operation of surge arrester.
12. Why is ZnO used in surge arresters?
13. What is transient recovery voltage?
14. Explain transformer inrush current.
15. What is EMTP?
16. Explain digital transient simulation.

---

# University Questions

## Short Answer Questions

1. Define power system transient.
2. List the causes of transients.
3. What are travelling waves?
4. Define surge impedance.
5. State the reflection coefficient equation.
6. What happens during open circuit reflection?
7. Define BIL.
8. What is a surge arrester?
9. Explain ZnO arrester.
10. What is EMTP?

---

## Long Answer Questions

1. Explain the causes and classification of power system transients.
2. Describe travelling waves and their reflection and refraction.
3. Explain lightning surges and protection methods.
4. Discuss switching surges and their effects.
5. Explain insulation coordination in power systems.
6. Describe the construction and operation of metal oxide surge arresters.
7. Explain transient analysis using EMTP.
8. Discuss modern techniques for transient protection.

---