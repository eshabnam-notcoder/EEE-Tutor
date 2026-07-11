# High Voltage Direct Current (HVDC) Transmission

## Learning Objectives

After studying this topic, you should be able to:

- Define HVDC transmission.
- Explain the need for HVDC transmission.
- Compare HVAC and HVDC transmission.
- State the advantages and disadvantages of HVDC transmission.
- Describe different types of HVDC links.
- Understand the basic components of an HVDC system.
- Identify the applications of HVDC transmission.

---

# Introduction

Electrical power is generally generated, transmitted, and distributed using **Alternating Current (AC)** systems. However, for very long transmission distances, submarine cable transmission, and interconnection of asynchronous power systems, **High Voltage Direct Current (HVDC)** transmission offers significant technical and economic advantages.

In an HVDC system, the generated AC power is converted into DC at the sending end using a **rectifier**. The DC power is transmitted over high-voltage transmission lines or cables. At the receiving end, the DC power is converted back into AC using an **inverter** before being supplied to the consumers.

Modern HVDC transmission systems employ advanced power electronic converters, control systems, filters, and smoothing reactors to ensure efficient and reliable operation.

HVDC technology is widely used for bulk power transmission, long-distance interconnections, renewable energy integration, and submarine cable links.

---

# What is HVDC Transmission?

High Voltage Direct Current (HVDC) transmission is the transmission of electrical power using direct current (DC) at high voltage levels.

Unlike conventional AC transmission, HVDC transmission requires converter stations at both ends of the transmission line.

The basic stages of HVDC transmission are:

- AC generation.
- AC to DC conversion (Rectification).
- DC power transmission.
- DC to AC conversion (Inversion).
- AC power distribution.

---

# Need for HVDC Transmission

HVDC transmission has become increasingly important due to the growing demand for efficient long-distance power transmission.

The major reasons for using HVDC transmission are:

- Long-distance bulk power transmission.
- Lower transmission losses.
- Submarine and underground cable transmission.
- Interconnection of asynchronous AC systems.
- Improved system stability.
- Better control of power flow.
- Integration of renewable energy sources.
- Reduced right-of-way requirements.

---

# Advantages of HVDC Transmission

HVDC transmission offers several technical and economic advantages over AC transmission.

## Technical Advantages

- Lower transmission losses over long distances.
- No reactive power flow.
- Improved voltage regulation.
- Better stability of the power system.
- Precise control of power flow.
- Elimination of skin effect.
- No charging current in transmission lines.
- Suitable for interconnecting asynchronous power systems.

---

## Economic Advantages

- Lower conductor cost for long-distance transmission.
- Reduced transmission corridor width.
- Lower operating cost.
- Economical for submarine cable transmission.
- Efficient bulk power transfer.

---

# Disadvantages of HVDC Transmission

Despite its advantages, HVDC transmission has certain limitations.

- High cost of converter stations.
- Complex control and protection systems.
- Harmonic generation.
- Requirement of filters.
- Converter stations require skilled maintenance.
- Less economical for short transmission distances.

---

# Comparison Between HVAC and HVDC Transmission

| Feature | HVAC Transmission | HVDC Transmission |
|----------|------------------|-------------------|
| Current Type | Alternating Current | Direct Current |
| Reactive Power | Present | Absent |
| Skin Effect | Present | Absent |
| Charging Current | Present | Absent |
| Long Distance Transmission | Less Economical | More Economical |
| Submarine Cable Transmission | Limited | Highly Suitable |
| Converter Stations | Not Required | Required |
| Power Flow Control | Limited | Excellent |

---

# Economic Distance

The transmission distance beyond which HVDC transmission becomes more economical than HVAC transmission is called the **break-even distance** or **economic distance**.

Typical values are:

- Overhead transmission lines: **500–800 km**
- Underground or submarine cables: **50–100 km**

Beyond these distances, the lower transmission losses and reduced conductor costs of HVDC generally outweigh the higher cost of converter stations.

---

# Applications of HVDC Transmission

HVDC transmission is widely used in:

- Long-distance bulk power transmission.
- Submarine cable transmission.
- Underground cable transmission.
- Interconnection of national power grids.
- Renewable energy integration.
- Offshore wind farms.
- Cross-border power exchange.
- Remote hydroelectric power plants.

---

# Flowchart

```text
AC Power Generation

↓

Rectifier Station

↓

High Voltage DC Transmission

↓

Inverter Station

↓

AC Distribution System
```

# Types of HVDC Links

HVDC transmission systems are classified according to the method of interconnection between the sending and receiving stations.

The major types of HVDC links are:

- Monopolar Link
- Bipolar Link
- Homopolar Link
- Back-to-Back HVDC Link

Each type is selected based on system requirements, reliability, transmission distance, and cost.

---

# Monopolar HVDC Link

A monopolar HVDC link uses a single high-voltage conductor for transmitting power.

The return path is provided through:

- Earth (ground return), or
- Metallic return conductor.

The conductor generally operates with **negative polarity** to reduce corona losses.

---

## Advantages

- Simple construction.
- Lower installation cost.
- Suitable for low power transmission.
- Easy protection and maintenance.

---

## Limitations

- Lower reliability.
- Earth return may cause corrosion and interference.
- Limited power transfer capability.

---

# Bipolar HVDC Link

A bipolar HVDC link consists of **two conductors**:

- Positive pole (+)
- Negative pole (−)

Each conductor carries equal current in opposite directions.

Under normal conditions, earth current is nearly zero.

If one pole fails, the remaining pole can continue operating using earth return, ensuring continuity of service.

---

## Advantages

- High reliability.
- Greater power transfer capability.
- Better voltage regulation.
- Reduced earth current during normal operation.
- Continued operation during single-pole faults.

---

## Limitations

- Higher installation cost.
- More complex control system.
- Requires two converter poles.

---

# Homopolar HVDC Link

A homopolar HVDC link uses **two or more conductors of the same polarity**, usually negative.

The return current flows through the earth.

Although technically feasible, homopolar links are rarely used because continuous earth return current may cause:

- Electrochemical corrosion.
- Communication interference.
- Environmental concerns.

---

## Advantages

- Lower insulation requirements.
- Lower conductor voltage to ground.
- Suitable for certain special applications.

---

## Limitations

- Continuous earth current.
- Corrosion problems.
- Radio and communication interference.
- Limited practical use.

---

# Back-to-Back HVDC Link

A back-to-back HVDC system consists of a rectifier and an inverter installed at the **same location** without a long DC transmission line.

The AC power is converted into DC and immediately converted back into AC.

These systems are mainly used to interconnect two AC systems operating at different frequencies or without synchronous operation.

---

## Applications

- Interconnection of asynchronous grids.
- Frequency conversion.
- Power flow control.
- Cross-border power exchange.

---

## Advantages

- Enables connection of unsynchronized power systems.
- Fast and accurate power flow control.
- Improves overall system stability.
- Prevents disturbance propagation between interconnected systems.

---

# Comparison of HVDC Links

| Feature | Monopolar | Bipolar | Homopolar | Back-to-Back |
|----------|-----------|----------|------------|--------------|
| Number of Conductors | One | Two | Two or More | No Long DC Line |
| Earth Return | Yes | Only During Fault | Yes | Not Required |
| Reliability | Moderate | High | Moderate | Very High |
| Power Transfer | Low | High | Moderate | Depends on Converter Rating |
| Main Application | Long Distance | Bulk Power Transmission | Limited Use | Grid Interconnection |

---

# Components of an HVDC Transmission System

A typical HVDC transmission system consists of the following major components:

- Converter station.
- Converter transformer.
- Rectifier.
- Inverter.
- HVDC transmission line or cable.
- Smoothing reactor.
- Harmonic filters.
- Reactive power compensation equipment.
- Control and protection system.

Each component performs a specific function to ensure efficient and reliable transmission of electrical power.

---

# Basic Layout of an HVDC System

```text
AC System

↓

Converter Transformer

↓

Rectifier

↓

Smoothing Reactor

↓

HVDC Transmission Line

↓

Smoothing Reactor

↓

Inverter

↓

Converter Transformer

↓

AC System
```

---

# Function of Major Components

| Component | Function |
|-----------|----------|
| Converter Transformer | Matches voltage level and provides isolation |
| Rectifier | Converts AC into DC |
| HVDC Line | Transmits DC power over long distances |
| Smoothing Reactor | Reduces ripple current in DC output |
| Harmonic Filters | Eliminate harmonics generated by converters |
| Inverter | Converts DC back into AC |
| Control System | Controls voltage, current, and power flow |
| Protection System | Detects and isolates faults |

---

# Key Points

- HVDC links are classified as monopolar, bipolar, homopolar, and back-to-back.
- Bipolar links are the most commonly used because of their high reliability and operational flexibility.
- Back-to-back HVDC links are mainly used for connecting asynchronous AC systems.
- Converter stations, smoothing reactors, filters, and control systems are the essential components of an HVDC transmission system.

# Converter Stations

A **converter station** is the most important part of an HVDC transmission system.

It converts electrical power:

- From AC to DC at the sending end (Rectifier Station).
- From DC to AC at the receiving end (Inverter Station).

Converter stations consist of power electronic converters, converter transformers, filters, smoothing reactors, control systems, and protection equipment.

Although converter stations are expensive, they enable efficient long-distance DC power transmission.

---

# Rectifier

A **rectifier** is a converter that changes alternating current (AC) into direct current (DC).

It is installed at the **sending end** of the HVDC transmission system.

Modern HVDC systems generally use thyristor-based or Voltage Source Converter (VSC) technology for rectification.

---

## Working Principle

The AC supply from the transmission network is fed to the converter transformer.

The rectifier allows current to flow in only one direction, producing DC output suitable for long-distance transmission.

---

## Functions of a Rectifier

- Converts AC into DC.
- Controls DC voltage.
- Regulates transmitted power.
- Maintains stable HVDC operation.

---

# Inverter

An **inverter** converts direct current (DC) back into alternating current (AC).

It is installed at the **receiving end** of the HVDC system.

The inverter supplies AC power to the receiving transmission or distribution network.

---

## Working Principle

The inverter uses controlled switching devices to convert DC into a sinusoidal AC output.

The generated AC voltage is synchronized with the receiving AC system before power is delivered to the load.

---

## Functions of an Inverter

- Converts DC into AC.
- Controls receiving-end voltage.
- Synchronizes with the AC system.
- Supplies electrical power to consumers.

---

# Converter Transformer

A converter transformer connects the AC system with the converter valves.

It performs two important functions:

- Provides electrical isolation between the AC and DC systems.
- Adjusts the voltage level required by the converter.

Converter transformers are specially designed to withstand harmonic currents and DC voltage stresses.

---

# Converter Valves

Converter valves are the switching devices used for AC–DC and DC–AC conversion.

Modern HVDC systems commonly use:

- Thyristors (Line-Commutated Converters – LCC).
- IGBTs (Voltage Source Converters – VSC).

These devices are operated electronically to control the magnitude and direction of power flow.

---

# Smoothing Reactor

A **smoothing reactor** is a high-inductance coil connected in series with the DC transmission line.

Its primary function is to smooth the DC current by reducing current ripple.

---

## Functions of Smoothing Reactor

- Reduces ripple current.
- Limits fault current.
- Improves converter performance.
- Protects converter valves.
- Improves system stability.

---

# Harmonic Filters

Converters generate harmonic voltages and currents because of switching operations.

Harmonic filters are installed to reduce these harmonics and improve the quality of the AC and DC waveforms.

---

## Types of Harmonic Filters

### AC Filters

Installed on the AC side of the converter station.

Functions:

- Reduce AC harmonics.
- Supply reactive power.
- Improve power quality.

---

### DC Filters

Installed on the DC side.

Functions:

- Reduce DC harmonics.
- Minimize communication interference.
- Improve DC waveform quality.

---

# Reactive Power Compensation

HVDC converters consume a significant amount of reactive power during operation.

Reactive power compensation devices are therefore installed at converter stations.

Common devices include:

- Capacitor banks.
- Static VAR Compensators (SVC).
- STATCOM.

These devices improve voltage regulation and maintain system stability.

---

# Control System

The control system continuously monitors and regulates the operation of the HVDC link.

Its functions include:

- Power flow control.
- Voltage control.
- Current control.
- Converter firing angle control.
- Fault detection.
- Stable system operation.

---

# Protection System

The protection system safeguards the HVDC installation against abnormal operating conditions.

It protects against:

- Short circuits.
- Overcurrent.
- Overvoltage.
- Converter failures.
- Transmission line faults.
- Equipment overheating.

Fast protection improves the reliability and safety of the HVDC system.

---

# Flowchart

```text
AC Power

↓

Converter Transformer

↓

Rectifier

↓

Smoothing Reactor

↓

HVDC Transmission Line

↓

Smoothing Reactor

↓

Inverter

↓

Converter Transformer

↓

AC Load
```

---

# Key Points

- Converter stations perform AC-to-DC and DC-to-AC conversion.
- Rectifiers convert AC into DC, while inverters convert DC back into AC.
- Converter transformers provide voltage matching and electrical isolation.
- Smoothing reactors reduce DC current ripple.
- Harmonic filters improve waveform quality.
- Control and protection systems ensure safe, reliable, and efficient HVDC operation.

# HVDC Control System

The control system is the brain of an HVDC transmission system.

Its primary objective is to ensure stable, reliable, and efficient transmission of electrical power under normal and abnormal operating conditions.

Modern HVDC systems use digital control systems that continuously monitor system parameters and automatically regulate converter operation.

---

# Objectives of HVDC Control

The major objectives are:

- Maintain constant power transmission.
- Control DC voltage.
- Control DC current.
- Regulate converter firing angle.
- Maintain system stability.
- Protect equipment during faults.
- Coordinate operation of rectifier and inverter stations.

---

# Functions of HVDC Control

The control system performs the following functions:

- Power control.
- Current control.
- Voltage control.
- Firing angle control.
- Extinction angle control.
- Converter coordination.
- Fault detection.
- Automatic recovery after disturbances.

---

# Current Control

Current control maintains the DC current within safe operating limits.

It protects converter valves and transmission equipment from excessive current.

If the current exceeds the permissible limit, the controller automatically adjusts the converter firing angle to reduce the current.

---

# Voltage Control

Voltage control maintains the desired DC voltage throughout the transmission system.

Stable DC voltage ensures efficient power transfer and improves overall system performance.

Voltage control also helps maintain proper converter operation during load variations.

---

# Power Control

The transmitted power in an HVDC system is given by

\[
P=V_{dc}I_{dc}
\]

where

- \(P\) = DC power
- \(V_{dc}\) = DC voltage
- \(I_{dc}\) = DC current

The control system regulates either the DC voltage or the DC current to achieve the required power transfer.

---

# Firing Angle Control

The firing angle is the delay angle at which the thyristors are triggered.

It is represented by

\[
\alpha
\]

Changing the firing angle controls the output DC voltage of the converter.

- Smaller firing angle → Higher DC voltage.
- Larger firing angle → Lower DC voltage.

Thus, the transmitted power can be controlled by adjusting the firing angle.

---

# Extinction Angle Control

The extinction angle is mainly associated with inverter operation.

It is represented by

\[
\gamma
\]

Maintaining a proper extinction angle ensures:

- Reliable commutation.
- Stable inverter operation.
- Prevention of commutation failure.

---

# Converter Control Modes

The converter may operate under different control modes depending on system requirements.

### Constant Current Control (CCC)

- Maintains constant DC current.
- Protects converters from overload.
- Commonly used in rectifier stations.

---

### Constant Voltage Control (CVC)

- Maintains constant DC voltage.
- Ensures stable power transmission.
- Frequently used during normal operation.

---

### Constant Power Control (CPC)

- Maintains constant transmitted power.
- Automatically adjusts voltage and current.
- Used in interconnected power systems.

---

# Comparison of Control Modes

| Control Mode | Controlled Quantity | Main Purpose |
|--------------|--------------------|--------------|
| Constant Current | DC Current | Protect equipment and regulate current |
| Constant Voltage | DC Voltage | Maintain stable DC voltage |
| Constant Power | DC Power | Maintain desired power transfer |

---

# Applications of HVDC Transmission

HVDC transmission is widely used for:

- Long-distance bulk power transmission.
- Interconnection of asynchronous power systems.
- Offshore wind farms.
- Submarine cable transmission.
- Underground cable transmission.
- Renewable energy integration.
- Cross-border power exchange.
- Remote hydroelectric generating stations.

---

# Comparison Between HVAC and HVDC

| Feature | HVAC | HVDC |
|----------|------|------|
| Current | Alternating | Direct |
| Reactive Power | Present | Absent |
| Charging Current | Present | Absent |
| Skin Effect | Present | Absent |
| Long-Distance Efficiency | Lower | Higher |
| Converter Stations | Not Required | Required |
| Power Flow Control | Limited | Excellent |
| Submarine Cable | Limited | Highly Suitable |

---

# Key Points

- HVDC control systems regulate voltage, current, and transmitted power.
- Firing angle control determines the output voltage of the converter.
- Extinction angle control ensures reliable inverter operation.
- Constant current, constant voltage, and constant power are the main HVDC control modes.
- HVDC transmission is highly suitable for long-distance and submarine power transmission.

# Advantages of HVDC Transmission

HVDC transmission offers several technical, operational, and economic benefits over conventional AC transmission, especially for long-distance and bulk power transfer.

---

## Technical Advantages

- Lower transmission losses over long distances.
- No reactive power flow in the transmission line.
- Better voltage regulation.
- Higher transmission efficiency.
- Improved transient and steady-state stability.
- Better control of power flow.
- No skin effect.
- No charging current in DC transmission lines.
- Suitable for interconnecting asynchronous AC systems.

---

## Economic Advantages

- Requires fewer conductors for the same power transfer.
- Narrower transmission corridor.
- Lower line construction cost for long-distance transmission.
- Reduced operating and maintenance costs.
- Economical for submarine and underground cable transmission.

---

## Operational Advantages

- Fast control of transmitted power.
- Improved system reliability.
- Reduced short-circuit current contribution.
- Easier interconnection of different power grids.
- Better integration of renewable energy sources.

---

# Disadvantages of HVDC Transmission

Despite its advantages, HVDC transmission has certain limitations.

- High cost of converter stations.
- Complex converter control systems.
- Harmonic generation by converters.
- Requirement of AC and DC harmonic filters.
- Reactive power compensation is necessary.
- Skilled personnel are required for operation and maintenance.
- Less economical for short transmission distances.

---

# Applications of HVDC Transmission

HVDC transmission is extensively used in modern power systems.

Major applications include:

- Long-distance bulk power transmission.
- Interconnection of regional and national grids.
- Interconnection of asynchronous AC systems.
- Submarine cable transmission.
- Underground cable transmission.
- Offshore wind farms.
- Hydroelectric power transmission.
- Solar and wind power integration.
- Cross-border power exchange.
- Remote power generation projects.

---

# Practical Examples

Some practical uses of HVDC transmission are:

- Connecting offshore wind farms to the main grid.
- Transmitting hydroelectric power from remote locations.
- Power exchange between neighboring countries.
- Supplying power to islands through submarine cables.
- Long-distance transmission from renewable energy plants.

---

# Viva Questions

### 1. What is HVDC transmission?

HVDC transmission is the transmission of electrical power using high-voltage direct current.

---

### 2. Why is HVDC preferred for long-distance transmission?

Because it has lower transmission losses, better voltage regulation, and lower overall transmission cost for long distances.

---

### 3. What is the function of a rectifier?

A rectifier converts AC power into DC power.

---

### 4. What is the function of an inverter?

An inverter converts DC power back into AC power.

---

### 5. What is a smoothing reactor?

A smoothing reactor reduces ripple current in the DC transmission line.

---

### 6. What are harmonic filters used for?

They reduce harmonic distortion produced by converter stations.

---

### 7. Name the different types of HVDC links.

- Monopolar
- Bipolar
- Homopolar
- Back-to-Back

---

### 8. Which HVDC link is most commonly used?

The bipolar HVDC link is the most commonly used because of its high reliability and operational flexibility.

---

### 9. Why is reactive power compensation required in HVDC systems?

Converter stations consume reactive power during operation; compensation helps maintain voltage and improve system stability.

---

### 10. Mention two applications of HVDC transmission.

- Long-distance bulk power transmission.
- Submarine cable transmission.

---

# Summary

- HVDC transmission uses direct current for efficient long-distance power transfer.
- AC power is converted into DC at the sending end and reconverted into AC at the receiving end.
- HVDC links are classified as monopolar, bipolar, homopolar, and back-to-back.
- Converter stations include rectifiers, inverters, converter transformers, smoothing reactors, filters, and control systems.
- HVDC systems provide lower losses, better power flow control, improved stability, and efficient integration of renewable energy.
- Although converter stations are expensive, HVDC becomes economical for long transmission distances and submarine cable applications.

---

# Quick Revision

## Important Formula

### DC Power

\[
P=V_{dc}I_{dc}
\]

---

## Major Components of an HVDC System

- Converter Transformer
- Rectifier
- Inverter
- Converter Valves
- Smoothing Reactor
- Harmonic Filters
- Reactive Power Compensation Equipment
- Control System
- Protection System
- HVDC Transmission Line

---

## Frequently Asked University Questions

### Short Answer Questions

- Define HVDC transmission.
- What is a rectifier?
- What is an inverter?
- What is a smoothing reactor?
- What is the purpose of harmonic filters?
- Name the types of HVDC links.
- Why is reactive power compensation required in HVDC systems?

---

### Long Answer Questions

- Explain the construction and working of an HVDC transmission system.
- Discuss the different types of HVDC links.
- Explain the functions of converter stations and their components.
- Compare HVAC and HVDC transmission.
- Discuss the advantages, disadvantages, and applications of HVDC transmission.