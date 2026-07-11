# Power System Protection

---

# Learning Objectives

After studying this chapter, you should be able to:

- Understand the importance of power system protection.
- Explain the need for protective systems in electrical networks.
- Identify different types of power system faults.
- Understand protection zones.
- Explain primary and backup protection.
- Describe the basic protection scheme of a power system.

---

# 1. Introduction to Power System Protection

A power system consists of generation, transmission, and distribution networks operating continuously to supply electrical energy.

During operation, abnormal conditions such as faults, overloads, and equipment failures may occur.

Power system protection is the process of detecting abnormal conditions and isolating the faulty part of the system while maintaining normal operation of the remaining network.

---

# Definition

**Power system protection** is the technique of detecting faults and abnormal operating conditions in electrical systems and disconnecting the affected section using protective devices.

---

# Need for Power System Protection

Electrical faults can cause:

- Damage to equipment
- Interruption of power supply
- Instability of the power system
- Fire hazards
- Reduction in equipment life

Protection systems ensure:

- Safety of equipment
- Reliability of supply
- Fast fault clearance
- Stable operation of the power grid

---

# Objectives of Protection

The main objectives of a protection system are:

---

## 1. Fault Detection

The protection system should quickly identify abnormal conditions.

Examples:

- Short circuit
- Earth fault
- Overload

---

## 2. Fault Isolation

Only the faulty section should be disconnected.

Example:

```
Healthy Section ────────────── Supply ON

Faulty Section ─────X─────── Isolated
```

---

## 3. Fast Operation

Faults should be cleared quickly to minimize damage.

---

## 4. Selective Operation

The protection system should disconnect only the affected part.

Example:

A feeder fault should not trip the entire substation.

---

## 5. Reliability

Protection must operate correctly whenever required.

It should:

- Operate during faults
- Avoid unnecessary operation

---

# 2. Basic Protection System

A protection system consists of:

1. Instrument transformers
2. Protective relays
3. Circuit breakers
4. Trip circuit
5. Auxiliary power supply

---

# Protection System Block Diagram

```
Power System

     │

     ▼

 CT / PT Measurements

     │

     ▼

 Protective Relay

     │

     ▼

 Trip Signal

     │

     ▼

 Circuit Breaker

     │

     ▼

 Fault Isolated
```

---

# 3. Elements of Protection System

## 3.1 Current Transformer (CT)

A CT measures high currents and reduces them to safe values for relays.

Functions:

- Current measurement
- Relay input
- Protection operation

---

## 3.2 Potential Transformer (PT)

A PT reduces high voltages to measurable values.

Applications:

- Voltage measurement
- Protection schemes

---

## 3.3 Protective Relay

A relay detects abnormal conditions and sends a trip signal.

Examples:

- Overcurrent relay
- Differential relay
- Distance relay

---

## 3.4 Circuit Breaker

The circuit breaker interrupts fault current after receiving a trip signal from the relay.

---

# 4. Characteristics of a Good Protection System

A good protection system should have the following characteristics:

---

# 1. Reliability

The protection system must operate correctly when required.

Reliability includes:

## Dependability

Ability to operate during faults.

## Security

Ability to avoid unwanted operation.

---

# 2. Selectivity

The protection system should isolate only the faulty section.

Example:

```
Generator

   │

Transformer

   │

Fault

   │

Only Transformer Breaker Trips
```

---

# 3. Sensitivity

The relay should detect even small abnormal conditions.

---

# 4. Speed

Fault clearance time should be minimum.

Fast operation reduces:

- Equipment damage
- Arc energy
- System instability

---

# 5. Stability

The relay should remain inactive during normal operating conditions.

---

# 6. Economy

Protection should provide adequate protection at reasonable cost.

---

# 5. Power System Faults

A fault is an abnormal condition in which current flows through an unintended path.

Faults may occur due to:

- Insulation failure
- Lightning
- Equipment damage
- Human errors
- Environmental conditions

---

# Classification of Faults

Power system faults are classified into:

1. Symmetrical faults
2. Unsymmetrical faults

---

# 6. Symmetrical Faults

A symmetrical fault is a balanced fault in which all phases are affected equally.

It is also called a balanced fault.

---

# Types of Symmetrical Fault

## Three Phase Fault

\[
L_1-L_2-L_3
\]

All three phases are short-circuited.

---

# Three Phase Fault Diagram

```
R ─────┐
      │
Y ─────┼──── Fault
      │
B ─────┘
```

---

# Characteristics

- Balanced fault
- Equal current in all phases
- Highest fault current
- Less frequent occurrence

---

# Analysis

Symmetrical faults are analyzed using:

- Single phase equivalent circuits
- Positive sequence networks

---

# 7. Unsymmetrical Faults

Unsymmetrical faults are unbalanced faults where phase currents and voltages are unequal.

They are the most common type of faults.

---

# Types of Unsymmetrical Faults

1. Single line-to-ground fault
2. Line-to-line fault
3. Double line-to-ground fault

---

# 7.1 Single Line-to-Ground Fault (L-G)

Occurs when one phase conductor contacts earth.

Example:

\[
R-G
\]

---

# L-G Fault Diagram

```
R ───────── Fault

Y ─────────

B ─────────

        │

       Earth
```

---

# Characteristics

- Most common fault
- Caused by insulation failure
- Produces earth fault current

---

# 7.2 Line-to-Line Fault (L-L)

Occurs when two phases come into contact.

Example:

\[
R-Y
\]

---

# 7.3 Double Line-to-Ground Fault (L-L-G)

Two phases contact earth simultaneously.

Example:

\[
R-Y-G
\]

---

# Fault Frequency

Typical occurrence:

| Fault Type | Occurrence |
|------------|------------|
| Single line-to-ground | Most common |
| Line-to-line | Less common |
| Double line-to-ground | Rare |
| Three phase fault | Least common |

---

# 8. Protection Zones

A power system is divided into different protection zones.

Each zone has dedicated protection equipment.

---

# Main Protection Zones

1. Generator zone
2. Transformer zone
3. Busbar zone
4. Transmission line zone
5. Distribution feeder zone

---

# Protection Zone Arrangement

```
Generator Zone

      │

Transformer Zone

      │

Busbar Zone

      │

Transmission Line Zone

      │

Distribution Zone
```

---

# Importance of Protection Zones

- Limits fault area
- Improves reliability
- Provides selective tripping
- Simplifies protection design

---

# 9. Primary Protection

Primary protection is the main protection system designed for a particular equipment.

It operates first when a fault occurs.

---

# Example

For a transformer:

Primary protection:

- Differential relay

---

# Features

- Fast operation
- Highly selective
- Installed near protected equipment

---

# 10. Backup Protection

Backup protection operates when primary protection fails.

Reasons for failure:

- Relay failure
- Circuit breaker failure
- Control circuit failure

---

# Example

Transformer backup protection:

- Overcurrent relay

---

# Primary vs Backup Protection

| Primary Protection | Backup Protection |
|---|---|
| Main protection | Secondary protection |
| Faster operation | Slower operation |
| Protects specific equipment | Covers larger area |
| More selective | Less selective |

---

# Key Points

- Power system protection detects and isolates faults.
- The main aim is safety, reliability, and continuity of supply.
- A protection system consists of CT, PT, relay, and circuit breaker.
- Good protection requires reliability, selectivity, sensitivity, and speed.
- Faults are classified as symmetrical and unsymmetrical.
- Single line-to-ground faults are the most common faults.
- Protection zones divide the power system into manageable sections.
- Primary protection operates first, while backup protection provides additional security.

---

# 11. Protective Relays

A protective relay is an electrical device that detects abnormal conditions in a power system and initiates a trip command to the circuit breaker.

The relay acts as the decision-making unit of a protection system.

---

# Basic Relay Operation

```
Abnormal Condition

        │

        ▼

Measurement by CT/PT

        │

        ▼

Relay Compares Values

        │

        ▼

Relay Operates

        │

        ▼

Circuit Breaker Trips
```

---

# Functions of Protective Relays

Protective relays perform:

- Fault detection
- Fault classification
- Circuit breaker operation
- Alarm generation
- System monitoring

---

# Requirements of Protective Relays

A good relay should have:

## 1. Sensitivity

Ability to detect small abnormal conditions.

---

## 2. Selectivity

Ability to isolate only the faulty section.

---

## 3. Speed

Quick operation to reduce damage.

---

## 4. Reliability

Correct operation during faults.

---

## 5. Stability

Should not operate during normal conditions.

---

# 12. Relay Operating Principles

Protective relays operate based on different electrical quantities.

Common operating principles:

- Current magnitude
- Voltage magnitude
- Impedance
- Power direction
- Frequency difference

---

# Classification of Relays

Relays can be classified as:

1. Electromagnetic relays
2. Static relays
3. Numerical relays

---

# 13. Electromagnetic Relays

Electromagnetic relays are traditional relays that operate using electromagnetic forces.

They were widely used before the development of electronic relays.

---

# Working Principle

When current flows through a relay coil, a magnetic field is produced.

The magnetic force moves the relay mechanism and closes the trip contact.

---

# Electromagnetic Relay Structure

```
Input Current

      │

      ▼

Relay Coil

      │

      ▼

Magnetic Field

      │

      ▼

Moving Contact

      │

      ▼

Trip Signal
```

---

# Types of Electromagnetic Relays

## 1. Attracted Armature Relay

Operation is based on attraction of an iron armature.

Applications:

- Overcurrent protection
- Voltage protection

---

## 2. Induction Relay

Works on electromagnetic induction principle.

Used for:

- AC protection systems

---

# Advantages of Electromagnetic Relays

- Simple construction
- Reliable
- Easy maintenance
- Suitable for basic protection

---

# Disadvantages

- Large size
- Slow operation
- Mechanical wear
- Limited accuracy

---

# 14. Static Relays

Static relays use electronic components instead of mechanical moving parts.

Components used:

- Transistors
- Diodes
- Amplifiers
- Logic circuits

---

# Static Relay Block Diagram

```
Input Signal

     │

     ▼

Signal Conditioning

     │

     ▼

Electronic Comparator

     │

     ▼

Output Circuit

     │

     ▼

Trip Signal
```

---

# Advantages of Static Relays

- Faster operation
- Higher sensitivity
- Less maintenance
- Smaller size
- Better accuracy

---

# Disadvantages

- Sensitive to temperature
- Requires reliable power supply
- More complex circuits

---

# 15. Numerical Relays

Numerical relays are modern digital protective devices based on microprocessors.

They are widely used in modern power systems.

---

# Working Principle

The input signals from CTs and PTs are converted into digital signals and processed using algorithms.

---

# Numerical Relay Structure

```
CT / PT Input

      │

      ▼

Signal Converter

      │

      ▼

Microprocessor

      │

      ▼

Protection Algorithm

      │

      ▼

Trip Command
```

---

# Features of Numerical Relays

- Digital signal processing
- Multiple protection functions
- Self-monitoring
- Fault recording
- Communication capability

---

# Advantages of Numerical Relays

- High accuracy
- Fast operation
- Compact size
- Programmable characteristics
- Communication with SCADA systems

---

# Comparison of Relay Types

| Electromagnetic Relay | Static Relay | Numerical Relay |
|---|---|---|
| Mechanical operation | Electronic operation | Microprocessor based |
| Slow | Faster | Very fast |
| Large size | Smaller | Compact |
| Limited functions | Multiple functions | Multifunctional |
| High maintenance | Low maintenance | Very low maintenance |

---

# 16. Overcurrent Relay

An overcurrent relay operates when current exceeds a preset value.

It is one of the simplest and most commonly used protection relays.

---

# Operating Principle

When:

\[
I > I_{pickup}
\]

the relay operates.

where:

- \(I\) = Fault current
- \(I_{pickup}\) = Relay pickup current

---

# Overcurrent Relay Operation

```
Current Increases

        │

        ▼

Current > Setting Value

        │

        ▼

Relay Operates

        │

        ▼

Breaker Trips
```

---

# Types of Overcurrent Relays

## 1. Instantaneous Overcurrent Relay

Operates immediately when current exceeds the setting value.

---

## 2. Definite Time Overcurrent Relay

Operates after a fixed time delay.

---

## 3. Inverse Time Overcurrent Relay

Operating time decreases as fault current increases.

Relationship:

\[
Operating\ Time \propto \frac{1}{Fault\ Current}
\]

---

# Applications of Overcurrent Relay

Used in:

- Distribution feeders
- Transformers
- Motors
- Backup protection systems

---

# 17. Directional Relay

A directional relay determines the direction of fault current.

It is used when power can flow in multiple directions.

---

# Need for Directional Relay

In interconnected systems:

- Fault current may come from different sources.
- Direction identification is required.

---

# Working Principle

The relay compares:

- Current
- Voltage phase relationship

to determine fault direction.

---

# Applications

Used in:

- Parallel feeders
- Ring networks
- Transmission systems

---

# 18. Differential Relay

A differential relay works by comparing currents entering and leaving a protected zone.

---

# Principle

Under normal conditions:

\[
I_1 = I_2
\]

Therefore:

\[
I_{diff}=0
\]

During fault:

\[
I_1 \neq I_2
\]

and:

\[
I_{diff}\neq0
\]

The relay operates.

---

# Differential Protection Diagram

```
        CT              CT

        │               │

        │               │

        └──── Equipment ─┘


I1                    I2


Relay compares:

I1 - I2

```

---

# Applications

Used for:

- Transformers
- Generators
- Motors
- Busbars

---

# Advantages

- Very fast operation
- Highly selective
- Accurate protection

---

# 19. Distance Relay

Distance relay operates based on the impedance between relay location and fault point.

---

# Principle

The impedance is:

\[
Z=\frac{V}{I}
\]

where:

- \(V\) = Voltage at relay location
- \(I\) = Fault current

---

# Working

During fault:

- Voltage decreases
- Current increases
- Measured impedance reduces

If:

\[
Z < Z_{setting}
\]

the relay operates.

---

# Distance Relay Zones

```
Relay Location

     │

     │ Zone 1
     ├────────

     │ Zone 2
     ├────────────────

     │ Zone 3
     ├────────────────────────
```

---

# Advantages of Distance Relay

- Fast operation
- Suitable for long transmission lines
- Independent of fault current magnitude

---

# Applications

Used mainly for:

- High voltage transmission line protection

---

# Key Points

- Protective relays detect faults and initiate circuit breaker operation.
- Electromagnetic relays use mechanical movement.
- Static relays use electronic components.
- Numerical relays use microprocessors and digital processing.
- Overcurrent relays protect against excessive current.
- Directional relays identify fault direction.
- Differential relays compare currents entering and leaving a protected zone.
- Distance relays protect transmission lines based on impedance measurement.

---

# 20. Generator Protection

Generators are among the most important and expensive components in a power system.

A generator fault can cause:

- Severe equipment damage
- Loss of generation
- Power system instability

Therefore, generators require fast and reliable protection.

---

# Generator Protection Requirements

Generator protection should detect:

- Electrical faults
- Mechanical problems
- Abnormal operating conditions

---

# Types of Generator Faults

Generator faults include:

1. Stator faults
2. Rotor faults
3. Earth faults
4. Overheating
5. Loss of excitation
6. Over-speed conditions

---

# Generator Protection Scheme

```
Generator

    │

    ▼

CT / PT Measurements

    │

    ▼

Protective Relays

    │

    ▼

Circuit Breaker

    │

    ▼

Generator Isolated
```

---

# 20.1 Stator Protection

The stator winding is protected against:

- Phase-to-phase faults
- Phase-to-earth faults

---

# Differential Protection for Generator

Generator differential protection compares currents at both ends of stator winding.

---

# Principle

During normal operation:

\[
I_1=I_2
\]

Therefore:

\[
I_{diff}=0
\]

During internal fault:

\[
I_1 \neq I_2
\]

Relay operates.

---

# Generator Differential Protection

```
       CT                 CT

       │                  │

       │                  │

       └── Generator ─────┘


          Differential Relay

```

---

# 20.2 Generator Earth Fault Protection

Earth faults occur when insulation between winding and earth fails.

Protection methods:

- Neutral grounding protection
- Restricted earth fault protection

---

# 20.3 Loss of Excitation Protection

Loss of excitation causes:

- Reduced reactive power support
- Voltage instability
- Heating of rotor

A loss of excitation relay detects this condition.

---

# 20.4 Reverse Power Protection

When a generator receives power from the grid and acts like a motor, reverse power occurs.

Causes:

- Prime mover failure
- Turbine malfunction

Reverse power relay trips the generator.

---

# 20.5 Overcurrent Protection

Protects generators from excessive current caused by:

- Short circuits
- Overloads

---

# 21. Transformer Protection

Transformers are critical power system equipment.

Transformer faults may result in:

- Insulation damage
- Oil overheating
- Fire
- Complete failure

---

# Types of Transformer Faults

## Internal Faults

Occur inside the transformer.

Examples:

- Winding faults
- Core faults
- Insulation failure

---

## External Faults

Occur outside the transformer.

Examples:

- External short circuits
- Overloads

---

# Transformer Protection Methods

Main protection methods:

- Differential protection
- Buchholz relay
- Overcurrent protection
- Earth fault protection
- Temperature protection

---

# 21.1 Transformer Differential Protection

Differential protection is the main protection for large transformers.

---

# Working Principle

Currents from primary and secondary sides are compared.

Normal condition:

\[
I_1=I_2
\]

Fault condition:

\[
I_1 \neq I_2
\]

Relay operates.

---

# Transformer Differential Protection

```
       CT                 CT

       │                  │

Primary              Secondary

       │                  │

       └── Transformer ───┘


          Differential Relay

```

---

# Advantages

- Fast operation
- High sensitivity
- Selective protection

---

# 21.2 Buchholz Relay

Buchholz relay is used for oil-immersed transformers with conservators.

It detects internal faults by sensing gas formation.

---

# Working Principle

Internal faults produce:

- Heat
- Gas bubbles

The gas accumulates in the relay and activates the alarm or trip mechanism.

---

# Buchholz Relay Arrangement

```
Transformer Tank

        │

        │

  Buchholz Relay

        │

        │

Conservator Tank

```

---

# Buchholz Relay Protection

Provides protection against:

## Minor Faults

Produces small gas quantity.

Action:

- Alarm

---

## Major Faults

Produces large gas quantity.

Action:

- Circuit breaker trip

---

# Advantages of Buchholz Relay

- Simple operation
- Sensitive to internal faults
- Provides early warning

---

# Limitations

- Works only with oil-filled transformers
- Cannot detect external faults

---

# 21.3 Transformer Overcurrent Protection

Overcurrent relays protect transformers against:

- Short circuits
- Overloads

---

# 21.4 Transformer Earth Fault Protection

Earth fault relays detect current flowing from transformer winding to earth.

---

# 22. Restricted Earth Fault Protection (REF)

Restricted Earth Fault protection is a sensitive protection scheme used for detecting earth faults within a limited zone.

It is commonly used for:

- Transformers
- Generators

---

# Principle

REF compares:

- Current entering the protected zone
- Current leaving the protected zone

---

# REF Operation

Normal condition:

\[
I_{in}=I_{out}
\]

Therefore:

\[
I_{diff}=0
\]

---

Fault condition:

\[
I_{in}\neq I_{out}
\]

Relay operates.

---

# REF Protection Zone

```
        CT

        │

        │

 ┌─────────────┐
 │ Transformer │
 └─────────────┘

        │

        │

        CT


        │

 Differential Relay

```

---

# Advantages of REF Protection

- Highly sensitive
- Detects small earth faults
- Faster than overcurrent protection

---

# 23. Motor Protection

Motors are widely used in industrial systems and require protection against abnormal conditions.

---

# Motor Faults

Common motor faults:

- Overload
- Short circuit
- Earth fault
- Single phasing
- Bearing failure
- Overheating

---

# Motor Protection Devices

## 1. Overload Relay

Protects against excessive current over long periods.

---

## 2. Short Circuit Protection

Uses:

- Fuses
- Circuit breakers
- Overcurrent relays

---

## 3. Earth Fault Protection

Detects leakage current to earth.

---

## 4. Thermal Protection

Protects against excessive temperature rise.

---

# Motor Protection Scheme

```
Motor

  │

  ▼

CT Measurement

  │

  ▼

Protection Relay

  │

  ▼

Circuit Breaker

  │

  ▼

Motor Disconnected

```

---

# Comparison of Equipment Protection

| Equipment | Main Protection |
|---|---|
| Generator | Differential relay, Loss of excitation protection |
| Transformer | Differential relay, Buchholz relay |
| Motor | Overload and short circuit protection |
| Transmission line | Distance protection |

---

# Key Points

- Generators require protection against electrical and mechanical faults.
- Differential protection is widely used for generator and transformer protection.
- Transformer differential protection compares primary and secondary currents.
- Buchholz relay detects internal transformer faults using gas formation.
- REF protection provides sensitive earth fault detection.
- Motors are protected against overload, short circuit, and overheating.
- Equipment-specific protection improves reliability and prevents major failures.

---

# 24. Transmission Line Protection

Transmission lines are exposed to various environmental conditions and are one of the most frequently faulted components in a power system.

Faults in transmission lines must be cleared quickly because they can affect:

- Power system stability
- Grid reliability
- Power transfer capability

---

# Types of Transmission Line Faults

Common transmission line faults include:

1. Single line-to-ground fault
2. Line-to-line fault
3. Double line-to-ground fault
4. Three-phase fault

---

# Requirements of Transmission Line Protection

A transmission line protection system should have:

- High speed operation
- Selectivity
- Reliability
- Ability to detect faults over long distances
- Communication capability

---

# Transmission Line Protection Methods

The main protection methods are:

1. Overcurrent protection
2. Distance protection
3. Pilot protection
4. Carrier protection

---

# 25. Overcurrent Protection of Transmission Lines

Overcurrent protection operates when fault current exceeds a preset value.

It is commonly used for:

- Distribution lines
- Short transmission lines

---

# Working Principle

If:

\[
I_f > I_{setting}
\]

the relay operates.

where:

- \(I_f\) = Fault current
- \(I_{setting}\) = Relay current setting

---

# Limitations

Overcurrent protection has limitations:

- Fault current changes with system conditions
- Difficult coordination in interconnected systems
- Slower for long transmission lines

Therefore, distance protection is preferred for high voltage lines.

---

# 26. Distance Protection

Distance protection is the most common protection method for high voltage transmission lines.

A distance relay measures the impedance between the relay location and the fault.

---

# Principle

The impedance is:

\[
Z=\frac{V}{I}
\]

where:

- \(Z\) = Apparent impedance
- \(V\) = Voltage at relay location
- \(I\) = Fault current

---

# Distance Relay Operation

During normal operation:

\[
Z > Z_{setting}
\]

Relay does not operate.

During fault:

\[
Z < Z_{setting}
\]

Relay operates.

---

# Distance Protection Diagram

```
Substation A                         Substation B

Relay

 │

 │──────────── Transmission Line ────────────│

              Fault Point

                    X

Distance relay measures impedance
up to fault location

```

---

# Advantages of Distance Protection

- Fast operation
- Suitable for long transmission lines
- Independent of fault current magnitude
- Provides backup protection

---

# 27. Zones of Distance Protection

Distance protection divides the transmission line into protection zones.

---

# Zone 1

Covers approximately:

\[
80\%-90\%
\]

of the protected line.

Characteristics:

- Instantaneous operation
- No intentional time delay

---

# Zone 2

Covers:

\[
100\%-120\%
\]

of the line.

Characteristics:

- Time delayed operation
- Provides backup protection

---

# Zone 3

Provides remote backup protection.

Characteristics:

- Larger coverage area
- Longer time delay

---

# Distance Relay Zones

```
Relay Location

      │

      │ Zone 1
      ├────────────

      │ Zone 2
      ├──────────────────

      │ Zone 3
      ├────────────────────────────

```

---

# Types of Distance Relays

## 1. Impedance Relay

Operates based on impedance magnitude.

\[
Z=\frac{V}{I}
\]

---

## 2. Reactance Relay

Operates based on reactance.

Used mainly for earth fault protection.

---

## 3. Mho Relay

Operates based on impedance angle.

Advantages:

- Better directional characteristics
- Suitable for long transmission lines

---

# Comparison of Distance Relays

| Relay Type | Main Quantity | Application |
|---|---|---|
| Impedance Relay | Impedance | General transmission protection |
| Reactance Relay | Reactance | Earth fault protection |
| Mho Relay | Impedance angle | Long EHV lines |

---

# 28. Pilot Protection Schemes

Pilot protection uses communication channels between two ends of a transmission line.

The relays at both ends exchange information to identify faults.

---

# Need for Pilot Protection

Distance protection may have limitations in:

- Very long lines
- Parallel lines
- Highly interconnected systems

Pilot protection provides:

- Faster fault clearing
- Complete line protection

---

# Pilot Protection Arrangement

```
Substation A                         Substation B

 Relay A                              Relay B

   │                                    │

   └──────── Communication Link ────────┘

        Transmission Line

```

---

# Types of Pilot Protection

1. Differential pilot protection
2. Phase comparison protection
3. Permissive overreaching transfer trip
4. Direct transfer trip

---

# 29. Carrier Protection

Carrier protection uses high-frequency communication signals transmitted through power lines.

This method is called:

**Power Line Carrier Communication (PLCC)**

---

# PLCC Arrangement

```
Protection Relay

      │

      ▼

Carrier Equipment

      │

      ▼

Transmission Line

      │

      ▼

Carrier Equipment

      │

      ▼

Protection Relay

```

---

# Components of PLCC

- Transmitter
- Receiver
- Coupling capacitor
- Wave trap
- Communication channel

---

# Coupling Capacitor

Allows high-frequency carrier signals to pass while blocking power frequency voltage.

---

# Wave Trap

A wave trap prevents carrier signals from entering unwanted sections of the power system.

---

# Advantages of Carrier Protection

- Fast operation
- Uses existing transmission lines
- Suitable for long distance protection
- Reliable communication

---

# Limitations

- Higher installation cost
- Communication equipment required
- Signal interference possible

---

# 30. Busbar Protection

Busbars are important points in substations where multiple circuits are connected.

A busbar fault can disconnect several feeders and affect system stability.

---

# Need for Busbar Protection

Busbar faults require:

- Very fast clearing
- Highly reliable protection

---

# Differential Busbar Protection

The most common method is differential protection.

It compares:

- Total incoming current
- Total outgoing current

---

# Principle

Normal condition:

\[
\sum I_{in}=\sum I_{out}
\]

Therefore:

\[
I_{diff}=0
\]

---

During fault:

\[
\sum I_{in}\neq\sum I_{out}
\]

Relay operates.

---

# Busbar Differential Protection

```
       Incoming Lines

       │   │   │

      CT  CT  CT

       │   │   │

====================
      BUSBAR
====================

       │   │

      CT  CT

       │   │

    Outgoing Feeders


        Differential Relay

```

---

# Advantages

- Very fast operation
- Highly selective
- Protects critical substation sections

---

# 31. Circuit Breaker Failure Protection

A circuit breaker may fail to interrupt current after receiving a trip signal.

Circuit breaker failure protection provides backup during such situations.

---

# Causes of Breaker Failure

- Mechanical failure
- Trip circuit failure
- Insufficient interrupting capability

---

# Operation

```
Fault Occurs

      │

      ▼

Relay Sends Trip Signal

      │

      ▼

Breaker Fails

      │

      ▼

Backup Protection Operates

      │

      ▼

Adjacent Breakers Trip

```

---

# Key Points

- Transmission line protection is essential for maintaining grid stability.
- Distance protection operates based on impedance measurement.
- Distance relays use different protection zones.
- Pilot protection uses communication between line ends.
- PLCC uses transmission lines for communication.
- Busbar protection mainly uses differential protection.
- Circuit breaker failure protection provides backup when breakers fail.
- Modern transmission systems combine relays with communication networks for fast protection.

---

# 32. Numerical Protection Systems

Modern power systems use numerical relays based on microprocessors for advanced protection.

A numerical protection system converts electrical quantities into digital signals and processes them using software algorithms.

---

# Basic Structure of Numerical Relay

```
CT / PT Input

      │

      ▼

Signal Conditioning

      │

      ▼

Analog to Digital Converter

      │

      ▼

Microprocessor

      │

      ▼

Protection Algorithm

      │

      ▼

Output Relay

      │

      ▼

Circuit Breaker Trip
```

---

# Components of Numerical Relay

## 1. Input Module

Receives signals from:

- Current transformers
- Potential transformers

---

## 2. Signal Processing Unit

Converts analog signals into digital form.

---

## 3. Microprocessor

Performs:

- Fault calculations
- Protection logic
- Decision making

---

## 4. Communication Module

Provides communication with:

- SCADA systems
- Control centers
- Other relays

---

# Features of Numerical Relays

Numerical relays provide:

- Multiple protection functions
- Self-diagnostics
- Event recording
- Fault recording
- Communication capability
- Programmable settings

---

# Advantages of Numerical Protection

## 1. High Accuracy

Digital processing improves measurement accuracy.

---

## 2. Multifunction Capability

A single relay can perform:

- Overcurrent protection
- Distance protection
- Differential protection
- Earth fault protection

---

## 3. Self Monitoring

The relay continuously checks its own operation.

---

## 4. Data Recording

Stores:

- Fault current
- Fault duration
- Relay operation details

---

# 33. Digital Protection and Smart Grid

Modern power systems are moving towards intelligent protection systems.

Digital protection integrates:

- Numerical relays
- Communication networks
- Automated control systems

---

# Smart Grid Protection Requirements

Smart grids require protection systems with:

- Fast fault detection
- Bidirectional power flow handling
- Renewable energy integration
- Adaptive operation

---

# Traditional vs Smart Grid Protection

| Traditional Protection | Smart Grid Protection |
|---|---|
| Fixed settings | Adaptive settings |
| One-way power flow | Two-way power flow |
| Limited communication | High-speed communication |
| Manual operation | Automated operation |

---

# 34. IEC 61850 Based Protection

IEC 61850 is an international standard for communication in substations.

It enables communication between:

- Intelligent Electronic Devices (IEDs)
- Protection relays
- Control systems

---

# IEC 61850 Architecture

```
Primary Equipment

      │

      ▼

Merging Unit

      │

      ▼

Process Bus

      │

      ▼

IEDs / Protection Relays

      │

      ▼

Station Bus

      │

      ▼

Control Center
```

---

# Benefits of IEC 61850

- High-speed communication
- Reduced wiring
- Interoperability between devices
- Improved automation
- Better fault analysis

---

# GOOSE Messaging

GOOSE:

**Generic Object Oriented Substation Event**

is a high-speed communication method.

---

# Applications of GOOSE

Used for:

- Breaker trip signals
- Interlocking
- Protection coordination

---

# 35. Auto-Reclosing

Auto-reclosing is a protection technique used mainly for overhead transmission lines.

Many transmission line faults are temporary.

Examples:

- Lightning flashover
- Tree contact
- Insulator flashover

---

# Principle

After clearing the fault, the circuit breaker automatically closes again after a preset time.

---

# Auto-Reclosing Operation

```
Fault Occurs

      │

      ▼

Relay Operates

      │

      ▼

Circuit Breaker Opens

      │

      ▼

Waiting Time

      │

      ▼

Breaker Automatically Closes

      │

      ▼

Supply Restored
```

---

# Types of Auto-Reclosing

## 1. Single Shot Reclosing

One reclosing attempt is made.

---

## 2. Multiple Shot Reclosing

Multiple attempts are made.

---

# Advantages of Auto-Reclosing

- Improves continuity of supply
- Reduces outage duration
- Improves system stability

---

# Limitations

Not suitable for:

- Permanent faults
- Underground cables

---

# 36. Adaptive Protection

Adaptive protection is an intelligent protection method where relay settings automatically change according to system conditions.

---

# Need for Adaptive Protection

Modern systems have:

- Variable generation
- Renewable sources
- Changing network conditions

Fixed protection settings may not always be suitable.

---

# Working Principle

```
System Condition Monitoring

          │

          ▼

Protection Setting Calculation

          │

          ▼

Relay Setting Update

          │

          ▼

Adaptive Protection Operation
```

---

# Advantages

- Improved selectivity
- Better fault detection
- Suitable for smart grids
- Handles changing operating conditions

---

# Applications

Used in:

- Smart grids
- Microgrids
- Renewable energy systems

---

# 37. Protection Coordination

Protection coordination ensures that protective devices operate in the correct sequence.

The nearest protective device to the fault should operate first.

---

# Coordination Example

```
Fault

 │

 ▼

Feeder Relay  → First Operation

 │

 ▼

Transformer Relay → Backup

 │

 ▼

Generator Relay → Final Backup

```

---

# Objectives of Coordination

- Minimum outage area
- Fast fault clearing
- Reliable operation
- Backup protection availability

---

# 38. Future Trends in Power System Protection

Future protection systems will include:

---

# 1. Artificial Intelligence Based Protection

AI techniques can help in:

- Fault classification
- Pattern recognition
- Predictive maintenance

---

# 2. Wide Area Protection

Uses synchronized measurements from different locations.

Technologies:

- Phasor Measurement Units (PMU)
- Wide Area Measurement Systems (WAMS)

---

# 3. Self-Healing Power Systems

Future grids will automatically:

- Detect faults
- Isolate affected areas
- Restore power supply

---

# 4. Renewable Energy Protection

Protection systems must handle:

- Solar generation
- Wind generation
- Battery storage
- Distributed energy resources

---

# Summary

- Power system protection detects and clears abnormal conditions.
- Protective relays are the decision-making elements of protection systems.
- Good protection requires reliability, selectivity, sensitivity, and speed.
- Faults are classified into symmetrical and unsymmetrical faults.
- Differential protection is widely used for generators, transformers, and busbars.
- Distance protection is mainly used for transmission lines.
- Pilot protection uses communication links for fast line protection.
- Numerical relays provide intelligent and multifunctional protection.
- IEC 61850 enables communication in digital substations.
- Auto-reclosing improves reliability by restoring temporary faults.
- Adaptive protection supports modern smart grids.

---

# Quick Revision

- **Protection System** → Detects faults and isolates faulty sections.
- **Relay** → Detects abnormal conditions and sends trip signals.
- **Circuit Breaker** → Interrupts fault current.
- **CT/PT** → Provide measurement signals.
- **Overcurrent Relay** → Protects against excessive current.
- **Differential Relay** → Compares currents entering and leaving equipment.
- **Distance Relay** → Measures line impedance.
- **Buchholz Relay** → Protects oil-filled transformers.
- **REF Protection** → Sensitive earth fault protection.
- **Pilot Protection** → Uses communication between line ends.
- **PLCC** → Power line based communication protection.
- **Numerical Relay** → Microprocessor-based intelligent relay.
- **IEC 61850** → Digital substation communication standard.
- **Auto-Reclosing** → Automatically restores temporary faults.

---

# Viva Questions

1. Define power system protection.
2. What are the objectives of protection?
3. Explain the characteristics of a good protection system.
4. Differentiate between primary and backup protection.
5. What are symmetrical and unsymmetrical faults?
6. Explain the operation of an overcurrent relay.
7. What is differential protection?
8. Explain distance protection.
9. What are protection zones in distance relays?
10. Explain Buchholz relay operation.
11. What is restricted earth fault protection?
12. Explain pilot protection.
13. What is PLCC?
14. Explain numerical relays.
15. What is IEC 61850?
16. Explain auto-reclosing.
17. What is adaptive protection?

---

# University Questions

## Short Answer Questions

1. Define protective relay.
2. List the characteristics of protection.
3. What is a symmetrical fault?
4. Define differential protection.
5. State the principle of distance relay.
6. What is Buchholz relay?
7. Define numerical relay.
8. What is auto-reclosing?
9. Explain PLCC.
10. What is adaptive protection?

---

## Long Answer Questions

1. Explain the operating principles and types of protective relays.
2. Describe generator protection schemes.
3. Explain transformer protection methods.
4. Explain transmission line protection using distance relays.
5. Describe pilot protection schemes.
6. Explain busbar differential protection.
7. Discuss numerical protection systems and IEC 61850.
8. Explain modern trends in power system protection.

---