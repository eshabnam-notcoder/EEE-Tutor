# Reactive Power Compensation

## Learning Objectives

After studying this topic, you should be able to:

- Define reactive power.
- Differentiate between active, reactive, and apparent power.
- Explain the concept of the power triangle.
- State the need for reactive power compensation.
- Identify various sources of reactive power.
- Explain different methods of reactive power compensation.
- Understand the role of FACTS devices in reactive power control.

---

# Introduction

In an AC power system, electrical power consists of two components: **active power** and **reactive power**.

Active power performs useful work such as operating motors, lighting lamps, and heating equipment. Reactive power, on the other hand, is required to establish the magnetic and electric fields necessary for the operation of inductive and capacitive devices.

Although reactive power does not perform any useful mechanical work, it is essential for the proper operation of AC power systems. Without adequate reactive power, system voltage decreases, transmission losses increase, and the stability of the power system is affected.

Reactive Power Compensation is the process of supplying or absorbing reactive power in order to maintain acceptable voltage levels, improve power factor, reduce transmission losses, and enhance the overall performance of the power system.

Modern power systems employ capacitor banks, synchronous condensers, Static VAR Compensators (SVC), STATCOM, and other FACTS devices to achieve effective reactive power compensation.

---

# Active Power

Active power is the actual power that performs useful work in an electrical circuit.

It is also known as:

- Real Power
- True Power
- Useful Power

Examples include:

- Rotating electric motors.
- Producing heat.
- Lighting lamps.
- Operating household appliances.

The symbol for active power is

\[
P
\]

and its unit is

\[
\text{Watt (W)}
\]

or

\[
\text{kW},\ \text{MW}
\]

The active power equation is

\[
P=VI\cos\phi
\]

where

- \(V\) = Voltage
- \(I\) = Current
- \(\phi\) = Phase angle between voltage and current

---

# Reactive Power

Reactive power is the power that continuously flows back and forth between the source and reactive elements such as inductors and capacitors.

It is required for creating magnetic and electric fields but does not perform any useful work.

The symbol for reactive power is

\[
Q
\]

and its unit is

\[
\text{Volt-Ampere Reactive (VAR)}
\]

or

\[
\text{kVAR},\ \text{MVAR}
\]

Reactive power is given by

\[
Q=VI\sin\phi
\]

Reactive power is essential for the operation of:

- Induction motors.
- Transformers.
- Reactors.
- Transmission lines.

---

# Apparent Power

Apparent power is the total power supplied by the source.

It is the vector sum of active power and reactive power.

The symbol for apparent power is

\[
S
\]

and its unit is

\[
\text{Volt-Ampere (VA)}
\]

or

\[
\text{kVA},\ \text{MVA}
\]

The apparent power equation is

\[
S=VI
\]

It represents the total capacity required from the electrical system.

---

# Relationship Between Active, Reactive and Apparent Power

The relationship between the three types of power is

\[
S^2=P^2+Q^2
\]

This relationship is represented using the **power triangle**.

---

# Power Triangle

The power triangle is a right-angled triangle that shows the relationship between active power, reactive power, and apparent power.

```text
           Q (Reactive Power)
           |
           |
           |
           |\
           | \
           |  \
           |   \
           |    \  S (Apparent Power)
           |     \
           |      \
           |_______\
          P (Active Power)
```

From the power triangle,

\[
\cos\phi=\frac{P}{S}
\]

\[
\sin\phi=\frac{Q}{S}
\]

\[
\tan\phi=\frac{Q}{P}
\]

where

- \(P\) = Active power
- \(Q\) = Reactive power
- \(S\) = Apparent power

---

# Need for Reactive Power Compensation

Reactive power compensation is necessary because inductive loads consume large amounts of reactive power.

If sufficient reactive power is not available,

- System voltage decreases.
- Current increases.
- Transmission losses increase.
- Power factor becomes poor.
- Voltage regulation deteriorates.
- Transmission capacity reduces.
- Overall system efficiency decreases.

Reactive power compensation improves the performance and reliability of the power system.

---

# Objectives of Reactive Power Compensation

The main objectives are:

- Maintain acceptable voltage levels.
- Improve power factor.
- Reduce transmission losses.
- Increase transmission capacity.
- Improve voltage regulation.
- Enhance system stability.
- Reduce equipment loading.
- Improve overall efficiency.

---

# Flowchart

```text
Inductive Loads

↓

Reactive Power Demand Increases

↓

Voltage Drops

↓

Reactive Power Compensation

↓

Voltage Improves

↓

Efficient and Stable Power System
```

# Sources of Reactive Power

Reactive power is supplied by various components of the power system to maintain voltage levels and ensure efficient operation.

The major sources of reactive power are:

- Synchronous generators.
- Capacitor banks.
- Synchronous condensers.
- Transmission lines.
- Static VAR Compensators (SVC).
- STATCOM.
- Other FACTS devices.

Each source has different operating characteristics and applications.

---

# Synchronous Generators

Synchronous generators are the primary source of reactive power in a power system.

By controlling the field excitation, a synchronous generator can either:

- Supply reactive power to the system.
- Absorb reactive power from the system.

An over-excited generator supplies reactive power, whereas an under-excited generator absorbs reactive power.

---

## Advantages

- Fast response.
- Continuous reactive power control.
- Improves voltage regulation.
- Enhances system stability.

---

## Limitations

- Limited reactive power capability.
- Excessive reactive power reduces active power generation.
- Requires excitation control.

---

# Capacitor Banks

Capacitor banks are widely used for reactive power compensation in transmission and distribution systems.

A capacitor supplies leading reactive power, which compensates for the lagging reactive power consumed by inductive loads.

Capacitor banks are commonly installed:

- At substations.
- On distribution feeders.
- Near industrial loads.
- At consumer premises.

---

## Advantages

- Low cost.
- Simple construction.
- Easy installation.
- Improves power factor.
- Reduces transmission losses.
- Improves voltage profile.

---

## Limitations

- Fixed reactive power output.
- May produce switching transients.
- Possibility of resonance with harmonics.

---

# Synchronous Condenser

A synchronous condenser is a synchronous motor operating without any mechanical load.

It is used solely for supplying or absorbing reactive power.

By adjusting the field excitation, the synchronous condenser can operate in either an over-excited or under-excited condition.

---

## Working Principle

- Over-excited operation supplies reactive power.
- Under-excited operation absorbs reactive power.

Thus, it provides flexible reactive power control.

---

## Advantages

- Smooth voltage regulation.
- Continuous reactive power control.
- Improves system stability.
- Helps maintain constant voltage.

---

## Limitations

- High installation cost.
- Requires regular maintenance.
- Mechanical losses are present.
- Occupies more space than capacitor banks.

---

# Shunt Compensation

Shunt compensation involves connecting reactive power devices in **parallel (shunt)** with the transmission line.

The purpose is to inject or absorb reactive power to regulate system voltage.

Common shunt compensating devices include:

- Shunt capacitor banks.
- Shunt reactors.
- Synchronous condensers.
- Static VAR Compensators (SVC).
- STATCOM.

---

# Advantages of Shunt Compensation

- Improves voltage profile.
- Enhances power factor.
- Reduces transmission losses.
- Increases transmission efficiency.
- Improves voltage stability.

---

# Applications of Shunt Compensation

Shunt compensation is widely used in:

- Distribution substations.
- Transmission substations.
- Industrial power systems.
- Long transmission lines.
- Renewable energy integration.

---

# Series Compensation

Series compensation involves connecting capacitors or other compensating devices **in series** with the transmission line.

Its primary objective is to reduce the effective reactance of the transmission line.

Reducing line reactance increases the power transfer capability of the system.

---

# Advantages of Series Compensation

- Increases power transfer capability.
- Reduces transmission line reactance.
- Improves voltage regulation.
- Enhances transient stability.
- Improves system efficiency.

---

# Limitations of Series Compensation

- Higher installation cost.
- Protection becomes more complex.
- Risk of sub-synchronous resonance.
- Requires careful system design.

---

# Comparison Between Shunt and Series Compensation

| Feature | Shunt Compensation | Series Compensation |
|----------|-------------------|---------------------|
| Connection | Parallel to Line | Series with Line |
| Main Purpose | Voltage Control | Increase Power Transfer |
| Reactive Power | Injects/Absorbs Reactive Power | Reduces Line Reactance |
| Voltage Regulation | Excellent | Moderate |
| Transmission Capacity | Moderate Improvement | Significant Improvement |
| Common Devices | Capacitors, SVC, STATCOM | Series Capacitors, TCSC |

---

# Key Points

- Synchronous generators are the primary source of reactive power.
- Capacitor banks are the most economical compensation devices.
- Synchronous condensers provide adjustable reactive power.
- Shunt compensation primarily improves voltage regulation.
- Series compensation increases the power transfer capability of transmission lines.

# Static VAR Compensator (SVC)

A **Static VAR Compensator (SVC)** is a shunt-connected FACTS (Flexible AC Transmission Systems) device used to provide fast reactive power compensation in AC power systems.

An SVC regulates system voltage by automatically supplying or absorbing reactive power according to the system requirements.

Unlike conventional capacitor banks, an SVC provides **continuous and automatic control** of reactive power.

---

# Construction of SVC

A typical Static VAR Compensator consists of:

- Thyristor Controlled Reactor (TCR)
- Thyristor Switched Capacitor (TSC)
- Harmonic Filters
- Step-down Transformer
- Control System

The thyristors control the amount of reactive power supplied or absorbed by the SVC.

---

# Working Principle of SVC

The operating principle of an SVC is based on automatic reactive power control.

### When System Voltage Decreases

- Reactive power demand increases.
- SVC supplies capacitive reactive power.
- System voltage rises to the desired value.

### When System Voltage Increases

- Excess reactive power is present.
- SVC absorbs reactive power through reactors.
- System voltage decreases to the desired value.

Thus, the SVC continuously maintains the voltage within acceptable limits.

---

# Advantages of SVC

- Fast voltage regulation.
- Continuous reactive power control.
- Improves power factor.
- Reduces transmission losses.
- Improves voltage stability.
- Enhances transient stability.
- Increases transmission capacity.
- Improves overall system reliability.

---

# Limitations of SVC

- High installation cost.
- Harmonic filters are required.
- More complex than capacitor banks.
- Requires power electronic controllers.

---

# Applications of SVC

Static VAR Compensators are widely used in:

- Long transmission lines.
- Grid substations.
- Heavy industrial plants.
- Steel industries.
- Renewable energy systems.
- Railway electrification.

---

# STATCOM (Static Synchronous Compensator)

A **Static Synchronous Compensator (STATCOM)** is a modern FACTS device used for reactive power compensation and voltage regulation.

It is based on a **Voltage Source Converter (VSC)** and provides rapid reactive power support.

Compared to an SVC, a STATCOM offers:

- Faster response.
- Better voltage regulation.
- Improved performance during low-voltage conditions.
- Smaller physical size.

---

# Working Principle of STATCOM

A STATCOM generates a controllable AC voltage using a Voltage Source Converter.

The reactive power exchange depends on the voltage difference between the STATCOM output and the power system voltage.

- If the STATCOM voltage is higher than the system voltage, it supplies reactive power.
- If the STATCOM voltage is lower than the system voltage, it absorbs reactive power.
- If both voltages are equal, there is no reactive power exchange.

---

# Advantages of STATCOM

- Very fast response.
- Continuous reactive power control.
- Excellent voltage regulation.
- Compact size.
- Better low-voltage performance.
- Improves transient stability.
- Reduces voltage fluctuations.
- Suitable for renewable energy integration.

---

# Limitations of STATCOM

- High initial cost.
- Complex control system.
- Requires sophisticated power electronic converters.
- Higher maintenance than capacitor banks.

---

# Comparison Between SVC and STATCOM

| Feature | SVC | STATCOM |
|----------|-----|----------|
| Technology | Thyristor-Based | Voltage Source Converter (VSC) |
| Response Speed | Fast | Very Fast |
| Reactive Power Control | Continuous | Continuous |
| Low Voltage Performance | Moderate | Excellent |
| Harmonic Generation | Higher | Lower |
| Size | Larger | More Compact |
| Cost | Lower | Higher |

---

# FACTS Devices Used for Reactive Power Compensation

FACTS devices improve voltage regulation, increase power transfer capability, and enhance system stability.

Common FACTS devices include:

- Static VAR Compensator (SVC)
- Static Synchronous Compensator (STATCOM)
- Thyristor Controlled Series Capacitor (TCSC)
- Unified Power Flow Controller (UPFC)
- Static Synchronous Series Compensator (SSSC)

Among these, **SVC** and **STATCOM** are the most commonly used for reactive power compensation.

---

# Benefits of FACTS Devices

- Improve voltage profile.
- Increase transmission capacity.
- Reduce transmission losses.
- Improve power factor.
- Enhance transient stability.
- Improve dynamic performance.
- Support renewable energy integration.

---

# Key Points

- SVC is a shunt-connected FACTS device used for voltage regulation.
- STATCOM uses a Voltage Source Converter for reactive power control.
- STATCOM provides faster response and better performance than SVC during low-voltage conditions.
- FACTS devices significantly improve the efficiency, reliability, and stability of modern power systems.

# Applications of Reactive Power Compensation

Reactive power compensation plays an important role in the planning, operation, and control of modern power systems.

It is widely used in:

- Transmission systems.
- Distribution networks.
- Industrial power systems.
- Renewable energy plants.
- Railway electrification.
- Smart grids.
- Data centres.
- Large commercial buildings.

Proper reactive power compensation improves voltage stability, reduces losses, and increases the efficiency of electrical power systems.

---

# Advantages of Reactive Power Compensation

Reactive power compensation offers several technical and economic benefits.

## Technical Advantages

- Improves voltage regulation.
- Maintains system voltage within permissible limits.
- Enhances transient and steady-state stability.
- Improves power factor.
- Increases transmission line capacity.
- Reduces voltage drop.
- Improves system reliability.
- Reduces equipment loading.

---

## Economic Advantages

- Reduces transmission and distribution losses.
- Lowers electricity charges due to improved power factor.
- Reduces operating costs.
- Improves overall system efficiency.
- Delays the need for new transmission infrastructure.
- Increases the life of electrical equipment.

---

# Limitations of Reactive Power Compensation

Although reactive power compensation has many advantages, it also has certain limitations.

- High installation cost for advanced compensation devices.
- Regular maintenance is required.
- Power electronic equipment increases system complexity.
- Improper compensation may cause overvoltage.
- Capacitor banks may create resonance with harmonics.
- Skilled personnel are required for operation and maintenance.

---

# Design Considerations

The following factors should be considered while selecting a reactive power compensation method:

- Magnitude of reactive power required.
- Nature of the electrical load.
- System voltage level.
- Cost of installation.
- Operating and maintenance requirements.
- Space available for installation.
- Future expansion of the power system.
- Required response speed.

---

# Practical Applications

Reactive power compensation is commonly applied in:

### Transmission Networks

- Improve voltage profile.
- Increase power transfer capability.
- Reduce transmission losses.

### Industrial Plants

- Improve power factor.
- Reduce electricity bills.
- Enhance motor performance.

### Distribution Systems

- Maintain feeder voltage.
- Improve voltage regulation.
- Reduce feeder losses.

### Renewable Energy Systems

- Stabilize voltage.
- Support grid integration.
- Improve system reliability.

### Smart Grids

- Dynamic voltage control.
- Efficient power flow management.
- Improved grid stability.

---

# Viva Questions

### 1. What is reactive power?

Reactive power is the power required to establish electric and magnetic fields in AC systems without performing useful work.

---

### 2. What is reactive power compensation?

Reactive power compensation is the process of supplying or absorbing reactive power to improve voltage regulation, power factor, and overall system performance.

---

### 3. State the equation for active power.

\[
P=VI\cos\phi
\]

---

### 4. State the equation for reactive power.

\[
Q=VI\sin\phi
\]

---

### 5. State the equation for apparent power.

\[
S=VI
\]

---

### 6. What is the relationship between active, reactive, and apparent power?

\[
S^2=P^2+Q^2
\]

---

### 7. What is the purpose of a capacitor bank?

A capacitor bank supplies leading reactive power to improve the power factor and support system voltage.

---

### 8. What is a synchronous condenser?

A synchronous condenser is an unloaded synchronous motor used for supplying or absorbing reactive power.

---

### 9. What is the difference between SVC and STATCOM?

SVC is based on thyristor-controlled reactors and capacitors, whereas STATCOM uses a Voltage Source Converter (VSC) and provides faster, more effective reactive power control.

---

### 10. Why is reactive power compensation important?

It improves voltage regulation, reduces losses, enhances power factor, increases transmission capacity, and improves the stability and efficiency of the power system.

---

# Summary

- Reactive power is essential for the operation of AC power systems but does not perform useful work.
- Active power, reactive power, and apparent power are related through the power triangle.
- Reactive power compensation improves voltage regulation, power factor, and transmission efficiency.
- Common compensation methods include capacitor banks, synchronous condensers, shunt compensation, and series compensation.
- Modern FACTS devices such as SVC and STATCOM provide fast and continuous reactive power control.
- Proper reactive power compensation enhances system stability, reduces losses, and improves the overall reliability of electrical power systems.

---

# Quick Revision

## Important Formulae

### Active Power

\[
P=VI\cos\phi
\]

---

### Reactive Power

\[
Q=VI\sin\phi
\]

---

### Apparent Power

\[
S=VI
\]

---

### Power Triangle Relationship

\[
S^2=P^2+Q^2
\]

---

### Power Factor

\[
\cos\phi=\frac{P}{S}
\]

---

### Reactive Power Ratio

\[
\tan\phi=\frac{Q}{P}
\]

---

# Frequently Asked University Questions

### Short Answer Questions

- Define reactive power.
- What is reactive power compensation?
- What is a capacitor bank?
- What is a synchronous condenser?
- What is SVC?
- What is STATCOM?
- State the power triangle relationship.

### Long Answer Questions

- Explain reactive power compensation and its need.
- Discuss various methods of reactive power compensation.
- Explain the working of SVC and STATCOM.
- Compare shunt and series compensation.
- Discuss the applications and advantages of reactive power compensation.

