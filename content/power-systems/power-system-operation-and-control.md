# Power System Operation and Control

---

# Learning Objectives

After studying this chapter, you should be able to:

- Understand the basic concept of power system operation.
- Explain the objectives of power system operation and control.
- Understand the importance of maintaining generation-load balance.
- Describe the hierarchical structure of power system control.
- Explain the role of control centers in modern power systems.
- Understand the basic operation of SCADA systems.

---

# 1. Introduction to Power System Operation

A power system is a complex network consisting of:

- Generating stations
- Transmission lines
- Substations
- Distribution networks
- Consumers

The primary function of a power system is to generate electrical energy and deliver it to consumers continuously with acceptable:

- Voltage level
- Frequency
- Reliability
- Power quality

Power system operation involves the continuous monitoring, control, and management of all components to ensure secure and economical electricity supply.

---

# Definition

**Power System Operation** is the process of monitoring, controlling, and managing the generation, transmission, and distribution of electrical energy to maintain a reliable and stable power supply.

---

# Need for Power System Operation

Electricity has unique characteristics:

- It must be generated and consumed almost simultaneously.
- Large-scale storage is difficult and expensive.
- Demand changes continuously.
- System disturbances occur frequently.

Therefore, continuous operation and control are necessary.

---

# Basic Power System Structure

```
        Generation
            │
            ▼
   High Voltage Transmission
            │
            ▼
        Substations
            │
            ▼
    Distribution Network
            │
            ▼
       Consumers
```

---

# 2. Objectives of Power System Operation

The main objectives of power system operation are:

---

# 2.1 Reliability

Reliability means the ability of the power system to supply electricity continuously without interruption.

It includes:

- Adequacy
- Security

### Adequacy

The ability of the system to provide sufficient generation capacity to meet demand.

### Security

The ability of the system to withstand disturbances without major failures.

---

# 2.2 Maintaining Frequency

System frequency depends on the balance between generation and load.

For a synchronous power system:

\[
f = 50 \text{ Hz}
\]

(or 60 Hz in some countries)

A mismatch between generation and load causes frequency deviation.

Example:

```
Generation > Load

Frequency increases


Generation < Load

Frequency decreases
```

---

# 2.3 Voltage Regulation

Voltage must be maintained within permissible limits.

Poor voltage control can cause:

- Equipment damage
- Reduced efficiency
- Voltage instability

Voltage control is achieved using:

- Generator excitation systems
- Transformers
- Reactive power compensation devices

---

# 2.4 Economic Operation

The power system should supply electricity at minimum operating cost.

Economic operation involves:

- Optimal generator scheduling
- Fuel cost minimization
- Efficient power flow management

---

# 2.5 Power Quality Maintenance

Power quality refers to maintaining the quality of supplied electricity.

Important parameters include:

- Voltage magnitude
- Frequency
- Harmonic distortion
- Voltage fluctuations

---

# 2.6 Security

Power system security ensures that the network remains stable during disturbances.

Possible disturbances:

- Generator failure
- Transmission line outage
- Short circuit faults
- Sudden load changes

---

# 3. Generation-Load Balance

The fundamental requirement of power system operation is maintaining balance between generated power and consumed power.

The basic relationship is:

\[
P_G = P_L + P_{Loss}
\]

where:

- \(P_G\) = Generated power
- \(P_L\) = Load demand
- \(P_{Loss}\) = Transmission and distribution losses

---

# Power Balance Concept

```
             Generation

                 PG
                  │
                  ▼

        -------------------

        Power System Network

        -------------------

                  │
                  ▼

             Load Demand

                 PL

```

At all times:

\[
\text{Generation} = \text{Load} + \text{Losses}
\]

---

# Effect of Power Imbalance

## Case 1: Generation Less Than Load

\[
P_G < P_L
\]

Effects:

- Frequency decreases
- Generators slow down
- System becomes unstable

---

## Case 2: Generation Greater Than Load

\[
P_G > P_L
\]

Effects:

- Frequency increases
- Excess generation occurs
- System stability is affected

---

# Frequency Response to Load Changes

```
Increase in Load

       │
       ▼

Generation Deficit

       │
       ▼

Rotor Speed Decreases

       │
       ▼

Frequency Falls

       │
       ▼

Control Action Initiated
```

---

# 4. Power System Control Hierarchy

Modern power systems use multiple levels of control.

The control hierarchy consists of:

1. Primary Control
2. Secondary Control
3. Tertiary Control

---

# Hierarchical Control Structure

```
              Tertiary Control
        (Economic Scheduling)
                    │
                    ▼

             Secondary Control
              (AGC Control)
                    │
                    ▼

              Primary Control
          (Governor Response)
                    │
                    ▼

             Power System
```

---

# 4.1 Primary Control

Primary control is the fastest control action.

It automatically responds to frequency changes.

It uses:

- Turbine governor
- Generator speed control

Characteristics:

- Response time: seconds
- Local control
- Automatically activated

---

# 4.2 Secondary Control

Secondary control restores frequency back to its nominal value.

It is performed using:

- Automatic Generation Control (AGC)

Characteristics:

- Response time: seconds to minutes
- Centralized control

---

# 4.3 Tertiary Control

Tertiary control manages long-term operation.

Functions:

- Economic dispatch
- Unit commitment
- Generation scheduling

Response time:

- Minutes to hours

---

# Comparison of Control Levels

| Control Level | Main Function | Response Time |
|--------------|---------------|---------------|
| Primary Control | Frequency stabilization | Seconds |
| Secondary Control | Frequency restoration | Seconds to minutes |
| Tertiary Control | Economic scheduling | Minutes to hours |

---

# 5. Power System Control Centers

A power system control center is the location from which operators monitor and control the electrical network.

Modern control centers use:

- SCADA
- Energy Management Systems (EMS)
- Communication networks
- Computer-based monitoring tools

---

# Functions of Control Centers

## Monitoring

Collect real-time information from:

- Generators
- Transmission lines
- Substations
- Loads

---

## Control

Operators can:

- Open/close circuit breakers
- Change generation output
- Adjust voltage control devices

---

## Protection Coordination

Control centers assist in:

- Fault identification
- System restoration
- Emergency management

---

## Data Analysis

Collected data is used for:

- Load forecasting
- Stability analysis
- System planning

---

# Control Center Structure

```
Field Equipment

Generators
Substations
Transmission Lines

        │

        ▼

Remote Terminal Units (RTUs)

        │

        ▼

Communication Network

        │

        ▼

Control Center

        │

        ▼

Operator Interface
```

---

# 6. Supervisory Control and Data Acquisition (SCADA)

SCADA is a computer-based system used for monitoring and controlling electrical power systems remotely.

It collects real-time data from field devices and transfers it to the control center.

---

# Components of SCADA

## 1. Remote Terminal Unit (RTU)

RTUs collect measurements from field equipment and send data to the control center.

Measurements include:

- Voltage
- Current
- Frequency
- Power flow
- Equipment status

---

## 2. Communication Network

Provides data transfer between:

- Field devices
- Control center

Communication media:

- Optical fiber
- Microwave links
- Cellular networks
- Satellite communication

---

## 3. Master Station

The master station processes collected data and provides control commands.

---

## 4. Human Machine Interface (HMI)

HMI displays system information to operators.

It shows:

- Network status
- Alarms
- Measurements
- Equipment conditions

---

# SCADA Architecture

```
Power System Equipment

        │

        ▼

       RTU

        │

        ▼

Communication Network

        │

        ▼

 SCADA Master Station

        │

        ▼

        HMI

        │

        ▼

     Operator
```

---

# Advantages of SCADA

- Real-time monitoring
- Remote control capability
- Faster fault detection
- Improved reliability
- Reduced manpower requirement
- Better system operation

---

# Key Points

- Power system operation ensures reliable and economical electricity supply.
- Generation must always match load demand plus losses.
- Frequency control is achieved through primary, secondary, and tertiary control.
- Voltage regulation is essential for stable operation.
- Control centers monitor and manage the entire power network.
- SCADA provides real-time monitoring and remote control of power systems.
- Modern power system operation depends on advanced communication and automation technologies.

---

# 7. Load Frequency Control (LFC)

Load Frequency Control (LFC) is one of the most important control functions in power system operation.

The main objective of LFC is to maintain:

- System frequency at its nominal value
- Scheduled power exchange between interconnected areas

Since electrical power demand changes continuously, the generation output must be adjusted continuously to maintain frequency.

---

# Need for Load Frequency Control

The electrical load is never constant.

Examples of load variations:

- Consumer usage changes
- Industrial processes start and stop
- Renewable generation fluctuates
- Large motors are switched ON/OFF

These variations create an imbalance between generation and demand.

Without control:

```
Load Increase

      │

      ▼

Generation < Demand

      │

      ▼

Rotor Speed Decreases

      │

      ▼

Frequency Drops
```

---

# Frequency Balance

The frequency of a power system depends on the balance between:

\[
P_G = P_L + P_{Loss}
\]

where:

- \(P_G\) = Generated power
- \(P_L\) = Load demand
- \(P_{Loss}\) = System losses

Any mismatch causes frequency deviation.

---

# Frequency Deviation

Frequency deviation is the difference between actual frequency and rated frequency.

\[
\Delta f = f_{actual} - f_{rated}
\]

where:

- \(\Delta f\) = Frequency deviation
- \(f_{actual}\) = Actual frequency
- \(f_{rated}\) = Rated frequency

---

# Example

For a 50 Hz system:

If actual frequency is 49.8 Hz:

\[
\Delta f = 49.8 - 50
\]

\[
\Delta f = -0.2 Hz
\]

The negative sign indicates frequency reduction.

---

# Effect of Load Change on Frequency

```
Increase in Load

       │

       ▼

Power Deficit

       │

       ▼

Generator Speed Decreases

       │

       ▼

Frequency Decreases

       │

       ▼

Governor Action

       │

       ▼

Generation Increased
```

---

# 8. Speed Governor Control

The speed governor is the first control mechanism that responds to frequency changes.

It automatically adjusts the turbine input to regulate generator speed.

---

# Function of Governor

The governor:

- Detects speed changes
- Compares actual speed with reference speed
- Adjusts turbine mechanical power

---

# Governor Operation

```
Frequency Decrease

        │

        ▼

Generator Speed Reduces

        │

        ▼

Governor Detects Change

        │

        ▼

Increase Turbine Input

        │

        ▼

Mechanical Power Increases

        │

        ▼

Frequency Improves
```

---

# Governor Characteristics

The relationship between frequency change and power output change is represented by governor droop.

---

# Speed Regulation (Droop)

The governor characteristic is:

\[
R = \frac{\Delta f}{\Delta P}
\]

where:

- \(R\) = Speed regulation
- \(\Delta f\) = Frequency change
- \(\Delta P\) = Change in power output

---

# Governor Droop

Droop control allows multiple generators to share load changes.

Example:

If system load increases, all generators automatically increase output according to their droop settings.

---

# Importance of Droop Control

- Prevents one generator from taking all load changes
- Enables parallel operation of generators
- Improves system stability

---

# 9. Turbine-Governor System

The turbine-governor system converts control signals into mechanical power changes.

It consists of:

- Governor
- Turbine
- Generator

---

# Block Diagram

```
Frequency Change

      │

      ▼

  Governor

      │

      ▼

   Turbine

      │

      ▼

 Mechanical Power

      │

      ▼

 Generator

      │

      ▼

 Electrical Power
```

---

# Turbine Function

The turbine converts energy from:

- Steam
- Water
- Gas

into mechanical energy.

Types:

- Steam turbine
- Hydraulic turbine
- Gas turbine

---

# Generator Function

The generator converts mechanical energy into electrical energy.

The output power depends on:

- Mechanical input
- Electrical load

---

# 10. Automatic Generation Control (AGC)

Automatic Generation Control is a centralized control system that automatically adjusts generator output to maintain:

- Frequency
- Scheduled interchange power

AGC is the secondary control level of power system operation.

---

# Need for AGC

Primary control only reduces frequency deviation.

It does not restore frequency exactly to the nominal value.

AGC performs this restoration.

---

# AGC Operation

```
Frequency Deviation

        │

        ▼

Control Center

        │

        ▼

AGC Calculates Error

        │

        ▼

Generation Adjustment

        │

        ▼

Frequency Restored
```

---

# Functions of AGC

- Maintains system frequency
- Controls tie-line power flow
- Coordinates multiple generators
- Improves system reliability
- Reduces frequency fluctuations

---

# 11. Area Control Error (ACE)

In interconnected power systems, each control area must maintain:

- Frequency
- Scheduled tie-line power exchange

The error used by AGC is called Area Control Error (ACE).

---

# ACE Equation

\[
ACE = \Delta P_{tie} + B\Delta f
\]

where:

- \(ACE\) = Area Control Error
- \(\Delta P_{tie}\) = Tie-line power deviation
- \(B\) = Frequency bias coefficient
- \(\Delta f\) = Frequency deviation

---

# Meaning of ACE

If ACE is:

### Positive

The area is generating excess power.

### Negative

The area requires additional generation.

### Zero

The area is operating according to schedule.

---

# 12. Interconnected Power System Control

Modern power systems are divided into control areas.

Each area has:

- Generating stations
- Loads
- Control center

Areas are connected through tie-lines.

---

# Interconnected System

```
       Area 1

Generation
     │
     │
  Tie Line
     │
     │

       Area 2

Generation
     │
    Load
```

---

# Advantages of Interconnection

- Improved reliability
- Sharing of generation reserves
- Reduced operating cost
- Better load balancing
- Emergency support between regions

---

# Tie-Line Control

Tie-lines exchange power between interconnected areas.

The objective is to maintain scheduled power exchange.

---

# Tie-Line Power Deviation

A change in load in one area causes:

- Frequency change
- Tie-line power change

AGC adjusts generation to restore:

- Frequency
- Scheduled interchange

---

# Load Frequency Control Stages

```
Load Change

     │

     ▼

Primary Control
(Governor Response)

     │

     ▼

Secondary Control
(AGC)

     │

     ▼

Tertiary Control
(Economic Scheduling)
```

---

# Comparison of Frequency Control Methods

| Control | Function | Response Time |
|---------|----------|---------------|
| Primary Control | Arrests frequency change | Seconds |
| Secondary Control | Restores frequency | Seconds to minutes |
| Tertiary Control | Economic optimization | Minutes to hours |

---

# Challenges in Load Frequency Control

Modern power systems face additional challenges due to:

- Renewable energy variability
- Electric vehicle charging
- Increasing demand fluctuations
- Distributed generation
- Reduced system inertia

---

# Key Points

- Load Frequency Control maintains system frequency by balancing generation and demand.
- Frequency deviation occurs when generation does not equal load.
- Governors provide the first response to frequency changes.
- Turbine-governor systems regulate mechanical input to generators.
- AGC restores frequency and maintains scheduled tie-line exchanges.
- ACE is the control signal used by AGC in interconnected systems.
- Primary, secondary, and tertiary controls work together for stable operation.

---

# 13. Voltage Control in Power Systems

Voltage control is an essential part of power system operation.

The objective of voltage control is to maintain bus voltages within acceptable limits under normal and abnormal operating conditions.

Voltage magnitude mainly depends on the balance between:

- Reactive power generation
- Reactive power consumption

Unlike frequency control, voltage control is generally a **local control problem** because reactive power does not travel efficiently over long distances.

---

# Importance of Voltage Control

Proper voltage control ensures:

- Reliable power supply
- Efficient operation of electrical equipment
- Improved system stability
- Reduced transmission losses
- Prevention of voltage collapse

---

# Effects of Poor Voltage Control

## Low Voltage Condition

Caused by:

- Insufficient reactive power supply
- Heavy loading
- Long transmission lines

Effects:

- Reduced motor performance
- Increased current flow
- Higher losses
- Voltage instability

---

## High Voltage Condition

Caused by:

- Excess reactive power generation
- Light system loading

Effects:

- Equipment insulation stress
- Increased losses
- Protection operation

---

# Relationship Between Voltage and Reactive Power

Voltage is strongly influenced by reactive power.

\[
V \propto Q
\]

where:

- \(V\) = Voltage magnitude
- \(Q\) = Reactive power

Increasing reactive power supply generally increases voltage.

---

# Voltage Control Principle

```
Voltage Drop

     │

     ▼

Reactive Power Deficiency

     │

     ▼

Reactive Power Injection

     │

     ▼

Voltage Restored
```

---

# 14. Reactive Power Management

Reactive power management involves controlling the generation, transmission, and consumption of reactive power in the electrical network.

---

# Need for Reactive Power

Reactive power is required for:

- Magnetic field production in motors
- Transformer operation
- Voltage support
- Power transfer capability

---

# Active and Reactive Power

The apparent power relationship is:

\[
S = P + jQ
\]

where:

- \(S\) = Apparent power
- \(P\) = Active power
- \(Q\) = Reactive power

---

# Power Triangle

```
          S
         /
        /
       /
      /|
     / |
    /  |
   /   |
  P----Q

```

where:

\[
S^2 = P^2 + Q^2
\]

---

# Sources of Reactive Power

Reactive power can be supplied by:

- Synchronous generators
- Synchronous condensers
- Capacitor banks
- Static VAR compensators
- STATCOM
- FACTS devices

---

# Reactive Power Compensation

Reactive power compensation improves voltage profile and reduces losses.

It can be:

## Shunt Compensation

Connected parallel to the system.

Examples:

- Capacitor banks
- SVC
- STATCOM

---

## Series Compensation

Connected in series with transmission lines.

Examples:

- Series capacitors
- Thyristor-controlled series capacitors

---

# Reactive Power Compensation Diagram

```
Transmission Line

───────────────┬───────────────

                │

          Capacitor Bank

                │

              Ground
```

---

# 15. Generator Excitation System

The excitation system controls the DC field current of a synchronous generator.

By controlling field current, the excitation system regulates:

- Generator terminal voltage
- Reactive power output
- Power factor

---

# Functions of Excitation System

- Maintain generator voltage
- Control reactive power flow
- Improve system stability
- Provide fast response during disturbances

---

# Excitation System Block Diagram

```
Reference Voltage

        │

        ▼

Voltage Regulator

        │

        ▼

Exciter

        │

        ▼

Generator Field

        │

        ▼

Terminal Voltage

        │

        └──────── Feedback
```

---

# Types of Excitation Systems

## 1. DC Excitation System

Uses DC generators to supply field current.

Advantages:

- Simple design

Limitations:

- Requires maintenance of rotating parts

---

## 2. AC Excitation System

Uses AC generators with rectifiers.

Advantages:

- Higher reliability
- Better performance

---

## 3. Static Excitation System

Uses power electronic converters.

Advantages:

- Very fast response
- Compact design
- Improved stability

---

# 16. Automatic Voltage Regulator (AVR)

An Automatic Voltage Regulator is a control device that automatically maintains generator terminal voltage at a desired value.

---

# Working of AVR

1. Measures generator terminal voltage.
2. Compares actual voltage with reference voltage.
3. Generates an error signal.
4. Adjusts excitation current.
5. Restores voltage.

---

# AVR Block Diagram

```
Reference Voltage

       │

       ▼

 Comparator

       │

       ▼

 Voltage Regulator

       │

       ▼

 Excitation System

       │

       ▼

 Generator

       │

       ▼

 Terminal Voltage

       │

       └──── Feedback
```

---

# Advantages of AVR

- Maintains constant voltage
- Improves voltage stability
- Controls reactive power
- Provides fast response during disturbances

---

# 17. Transformer Tap Changing

Transformers are widely used for voltage regulation in power systems.

Tap changing adjusts the transformer turns ratio to maintain desired voltage levels.

---

# Transformer Voltage Relationship

\[
\frac{V_1}{V_2}=\frac{N_1}{N_2}
\]

where:

- \(V_1,V_2\) = Primary and secondary voltages
- \(N_1,N_2\) = Number of turns

Changing the number of turns changes the output voltage.

---

# Types of Tap Changers

## 1. Off-Load Tap Changer

- Operated only when transformer is disconnected.
- Simple and economical.

---

## 2. On-Load Tap Changer (OLTC)

- Allows tap changing while transformer is energized.
- Used for continuous voltage regulation.

---

# OLTC Operation

```
Voltage Low

    │

    ▼

Control System Detects Error

    │

    ▼

Tap Position Changed

    │

    ▼

Transformer Ratio Adjusted

    │

    ▼

Voltage Restored
```

---

# 18. Voltage Stability

Voltage stability is the ability of a power system to maintain acceptable voltage levels after disturbances.

---

# Causes of Voltage Instability

- Heavy loading
- Long transmission lines
- Insufficient reactive power
- Generator limitations
- Sudden load increase

---

# Voltage Collapse

Voltage collapse occurs when the system cannot maintain voltage due to inadequate reactive power support.

---

# Voltage Stability Improvement Methods

## 1. Reactive Power Compensation

Using:

- Capacitor banks
- SVC
- STATCOM

---

## 2. Generator Voltage Control

Using:

- AVR
- Excitation systems

---

## 3. FACTS Controllers

Flexible AC Transmission System devices improve voltage control and power flow.

Examples:

- SVC
- STATCOM
- UPFC

---

## 4. Network Reinforcement

Includes:

- Adding transmission lines
- Increasing transformer capacity
- Improving system configuration

---

# Comparison of Frequency and Voltage Control

| Frequency Control | Voltage Control |
|------------------|----------------|
| Related to active power balance | Related to reactive power balance |
| Global system effect | Local effect |
| Controlled by generators and AGC | Controlled by AVR and reactive devices |
| Maintains system frequency | Maintains bus voltage |

---

# Key Points

- Voltage control maintains bus voltages within acceptable limits.
- Reactive power is essential for voltage regulation.
- Generator excitation systems control terminal voltage and reactive power.
- AVR automatically maintains generator voltage.
- Transformer tap changers regulate distribution voltage.
- Voltage stability prevents voltage collapse.
- Reactive compensation devices such as SVC and STATCOM improve voltage stability.

---

# 19. Economic Operation of Power Systems

The objective of economic operation is to supply electrical energy to consumers at the minimum possible operating cost while maintaining system reliability and security.

Since electricity demand varies continuously, generating units must be scheduled efficiently to reduce fuel consumption and operating expenses.

---

# Objectives of Economic Operation

The main objectives are:

- Minimize fuel cost
- Optimize generator loading
- Reduce transmission losses
- Improve efficiency
- Maintain system security
- Utilize available generation resources effectively

---

# Components of Generation Cost

The operating cost of a generating unit mainly consists of:

- Fuel cost
- Operation and maintenance cost
- Start-up cost
- Shut-down cost
- Environmental cost

---

# Fuel Cost Characteristics

The fuel cost of a generator is generally expressed as:

\[
F(P_G)=a+bP_G+cP_G^2
\]

where:

- \(F(P_G)\) = Fuel cost
- \(P_G\) = Generator output
- \(a,b,c\) = Cost coefficients

---

# Incremental Cost

Incremental cost is the additional cost required to generate one extra unit of power.

\[
IC=\frac{dF}{dP_G}
\]

where:

- \(IC\) = Incremental cost
- \(F\) = Fuel cost
- \(P_G\) = Generator output

---

# Importance of Incremental Cost

Generators with lower incremental cost are operated at higher output levels during economic dispatch.

---

# 20. Economic Dispatch

Economic Dispatch (ED) determines the optimal output of committed generators so that total generation cost is minimum while satisfying load demand.

---

# Economic Dispatch Objective

Minimize:

\[
F_T = F_1+F_2+F_3+...+F_n
\]

subject to:

\[
\sum P_G=P_D+P_{Loss}
\]

where:

- \(F_T\) = Total generation cost
- \(P_G\) = Generator outputs
- \(P_D\) = Load demand
- \(P_{Loss}\) = Transmission losses

---

# Economic Dispatch Without Losses

For minimum operating cost:

\[
\frac{dF_1}{dP_1}
=
\frac{dF_2}{dP_2}
=
\frac{dF_3}{dP_3}
\]

This means all operating generators should have equal incremental cost.

---

# Economic Dispatch Process

```
Load Demand

      │

      ▼

Available Generators

      │

      ▼

Calculate Incremental Cost

      │

      ▼

Allocate Generation

      │

      ▼

Minimum Cost Operation
```

---

# Factors Affecting Economic Dispatch

- Fuel cost
- Generator limits
- Transmission losses
- Generator efficiency
- Environmental constraints

---

# Generator Operating Limits

Each generator has operating constraints:

\[
P_{min} \leq P_G \leq P_{max}
\]

where:

- \(P_{min}\) = Minimum generation limit
- \(P_{max}\) = Maximum generation limit

---

# 21. Unit Commitment

Unit Commitment (UC) determines which generating units should be ON or OFF over a scheduling period.

It considers:

- Load demand
- Generator availability
- Operating cost
- Start-up cost
- Shut-down cost
- Reserve requirements

---

# Need for Unit Commitment

Not all generators operate continuously.

Large generators require:

- Long starting time
- High starting cost
- Minimum operating duration

Therefore, proper scheduling is required.

---

# Unit Commitment Problem

The objective is:

\[
\text{Minimize Total Cost}
\]

where:

\[
Total\ Cost =
Fuel\ Cost+
Start-up\ Cost+
Shut-down\ Cost
\]

---

# Unit Commitment Constraints

## 1. Power Balance Constraint

\[
\sum P_G=P_D+P_{Loss}
\]

---

## 2. Generator Capacity Constraint

\[
P_{min}\leq P_G\leq P_{max}
\]

---

## 3. Spinning Reserve Constraint

Available generation capacity must exceed demand.

\[
P_{Available}>P_D
\]

---

## 4. Minimum Up/Down Time

Generators cannot be switched ON and OFF frequently.

---

# Unit Commitment Process

```
Forecast Load

      │

      ▼

Select Generating Units

      │

      ▼

Check Constraints

      │

      ▼

Economic Dispatch

      │

      ▼

Generation Schedule
```

---

# 22. Security-Constrained Operation

Power system security refers to the ability of the system to continue operating safely after disturbances.

Security-constrained operation considers possible failures while scheduling generation.

---

# Types of System States

Power systems operate in different states:

---

## 1. Normal State

All constraints are satisfied.

Characteristics:

- Voltage within limits
- Frequency normal
- No overloads

---

## 2. Alert State

The system is still operating but has reduced security margin.

Examples:

- High loading
- Reduced reserve

---

## 3. Emergency State

A serious disturbance occurs.

Examples:

- Line overload
- Generator outage

Corrective action is required.

---

## 4. Restorative State

System restoration is performed after disturbance.

---

# Power System State Diagram

```
             Normal

                │

                ▼

             Alert

                │

                ▼

          Emergency

                │

                ▼

          Restorative

                │

                ▼

             Normal
```

---

# Contingency Analysis

Contingency analysis studies the effect of possible system failures.

Examples:

- Transmission line outage
- Generator outage
- Transformer failure

---

# N-1 Security Criterion

A power system should continue operating safely after the failure of any single major component.

Example:

If one transmission line fails, the remaining system should still operate securely.

---

# 23. State Estimation

Power system state estimation determines the actual operating condition of the power network using measured data.

The state variables are mainly:

- Bus voltage magnitudes
- Bus voltage angles

---

# Need for State Estimation

Measurements from the power system may contain:

- Errors
- Missing data
- Noise

State estimation provides accurate system information.

---

# State Estimation Process

```
Measurements

      │

      ▼

Data Acquisition

      │

      ▼

State Estimator

      │

      ▼

Estimated System State

      │

      ▼

Control Decisions
```

---

# State Variables

For an \(n\)-bus system:

Number of state variables:

\[
2n-1
\]

because:

- \(n\) voltage magnitudes
- \(n-1\) voltage angles

(one reference angle is considered zero)

---

# Applications of State Estimation

- Energy Management Systems
- Security analysis
- Load flow calculation
- Fault analysis
- Real-time monitoring

---

# 24. Energy Management System (EMS)

An Energy Management System is a computer-based system used by utilities to monitor, analyze, and control power system operation.

EMS is the brain of modern control centers.

---

# Functions of EMS

## 1. State Estimation

Determines real-time system condition.

---

## 2. Load Forecasting

Predicts future electricity demand.

---

## 3. Economic Dispatch

Determines economical generator scheduling.

---

## 4. Contingency Analysis

Studies system behavior during failures.

---

## 5. Automatic Generation Control

Maintains frequency and scheduled interchange.

---

# EMS Structure

```
Power System Data

        │

        ▼

SCADA System

        │

        ▼

Energy Management System

        │

 ┌──────┼─────────┐
 │      │         │
State  AGC   Economic
Est.        Dispatch

        │

        ▼

Control Actions
```

---

# Benefits of EMS

- Improved reliability
- Better economic operation
- Faster decision making
- Reduced operating cost
- Enhanced system security

---

# Key Points

- Economic operation minimizes generation cost while maintaining reliability.
- Economic Dispatch determines optimal generator loading.
- Unit Commitment decides which generators should operate.
- Security-constrained operation considers system disturbances.
- N-1 criterion ensures reliability after a single component failure.
- State estimation provides accurate real-time system conditions.
- EMS integrates monitoring, analysis, and control functions in modern power systems.

---

# 25. SCADA-Based Power System Operation

Supervisory Control and Data Acquisition (SCADA) is a fundamental technology used in modern power system monitoring and control.

SCADA collects real-time information from different parts of the power system and allows operators to monitor and control equipment remotely.

---

# Role of SCADA in Power System Operation

SCADA performs:

- Data acquisition
- Equipment monitoring
- Remote control
- Alarm generation
- Event recording
- System visualization

---

# SCADA Data Flow

```
Power System Equipment

        │

        ▼

Sensors and Measurement Devices

        │

        ▼

Remote Terminal Units (RTUs)

        │

        ▼

Communication Network

        │

        ▼

SCADA Master Station

        │

        ▼

Operator Interface
```

---

# SCADA Measurements

SCADA collects:

## Electrical Measurements

- Voltage
- Current
- Active power
- Reactive power
- Frequency
- Power factor

---

## Equipment Status

- Circuit breaker position
- Transformer status
- Relay condition
- Switch status

---

# SCADA Control Functions

Operators can remotely:

- Open and close circuit breakers
- Change transformer taps
- Adjust generator output
- Control reactive power devices

---

# Advantages of SCADA

| Advantage | Description |
|-----------|-------------|
| Real-time monitoring | Provides continuous system information |
| Remote operation | Reduces manual intervention |
| Faster fault detection | Improves restoration time |
| Better reliability | Enables quick decision-making |
| Data recording | Helps system analysis |

---

# 26. Wide Area Monitoring System (WAMS)

A Wide Area Monitoring System provides real-time monitoring of large interconnected power networks.

It uses synchronized measurements from Phasor Measurement Units (PMUs).

---

# Need for WAMS

Traditional SCADA measurements are not synchronized.

WAMS provides:

- High-speed measurements
- Time synchronization
- Dynamic system monitoring
- Improved stability analysis

---

# WAMS Architecture

```
Power System

     │

     ▼

  PMU Units

     │

     ▼

Communication Network

     │

     ▼

Phasor Data Concentrator

     │

     ▼

Control Center
```

---

# 27. Phasor Measurement Unit (PMU)

A Phasor Measurement Unit is a device that measures electrical quantities with precise time synchronization.

PMUs use GPS signals for accurate time stamping.

---

# Measurements by PMU

PMU measures:

- Voltage phasors
- Current phasors
- Frequency
- Rate of frequency change

---

# PMU Working Principle

```
Voltage / Current Signals

          │

          ▼

Signal Processing

          │

          ▼

GPS Time Synchronization

          │

          ▼

Phasor Data

          │

          ▼

Control Center
```

---

# Advantages of PMU

- High-speed measurements
- Improved stability monitoring
- Early detection of disturbances
- Better fault analysis
- Enhanced system security

---

# Applications of PMU

## 1. Voltage Stability Monitoring

PMUs monitor voltage variations across wide areas.

---

## 2. Oscillation Detection

They identify low-frequency oscillations between generators.

---

## 3. Fault Location

PMU data helps locate faults accurately.

---

## 4. Wide Area Protection

Provides faster response during major disturbances.

---

# Comparison Between SCADA and PMU

| SCADA | PMU |
|-------|-----|
| Conventional monitoring | Advanced synchronized monitoring |
| Measurements not time synchronized | GPS synchronized measurements |
| Lower sampling rate | High sampling rate |
| Used for steady-state operation | Used for dynamic monitoring |

---

# 28. Smart Grid Operation

A Smart Grid is an advanced electrical grid that uses digital communication, automation, and intelligent control technologies.

It improves:

- Reliability
- Efficiency
- Flexibility
- Renewable integration

---

# Features of Smart Grid Operation

- Two-way communication
- Automated control
- Smart meters
- Distributed generation management
- Demand response
- Energy storage integration

---

# Smart Grid Architecture

```
Power Generation

        │

        ▼

Transmission Network

        │

        ▼

Distribution Network

        │

        ▼

Smart Consumers

        │

        ▼

Communication Network

        │

        ▼

Control Center
```

---

# Demand Response

Demand response is a technique where consumers modify electricity usage according to grid conditions.

Examples:

- Reducing load during peak hours
- Shifting consumption to off-peak periods

---

# Benefits of Demand Response

- Reduces peak demand
- Improves grid reliability
- Reduces generation cost
- Supports renewable integration

---

# 29. Modern Power System Control Technologies

Modern power systems use advanced technologies for improved operation.

---

# 29.1 FACTS Controllers

Flexible AC Transmission System (FACTS) devices improve power flow control and voltage stability.

Examples:

- SVC
- STATCOM
- UPFC

Applications:

- Voltage regulation
- Power flow control
- Stability improvement

---

# 29.2 Artificial Intelligence in Power System Operation

AI techniques are increasingly used for:

- Load forecasting
- Fault detection
- Renewable prediction
- Optimal operation
- Predictive maintenance

---

# 29.3 Digital Substations

Digital substations use:

- Intelligent Electronic Devices (IEDs)
- Fiber optic communication
- Automated protection and control

Advantages:

- Faster operation
- Reduced wiring
- Improved reliability

---

# 30. Challenges in Modern Power System Operation

Power system operation faces several challenges:

---

# 30.1 Renewable Energy Integration

Problems:

- Intermittent generation
- Reduced inertia
- Frequency fluctuations

Solutions:

- Energy storage
- Advanced forecasting
- Smart control systems

---

# 30.2 Cybersecurity

Modern power systems depend heavily on communication networks.

Possible threats:

- Unauthorized access
- Data manipulation
- Control system attacks

Protection methods:

- Encryption
- Authentication
- Network monitoring

---

# 30.3 Increasing Complexity

Modern grids contain:

- Distributed generation
- Electric vehicles
- Storage systems
- Smart appliances

Advanced control is required for coordination.

---

# 31. Future Trends in Power System Operation

Future power systems will move toward:

---

## 1. Autonomous Grid Operation

Artificial intelligence will enable automatic decision-making and self-healing capabilities.

---

## 2. Increased Renewable Integration

More renewable sources will be connected using:

- Smart inverters
- Storage systems
- Advanced control

---

## 3. Digitalization

Digital technologies will improve:

- Monitoring
- Prediction
- Maintenance
- Optimization

---

## 4. Self-Healing Networks

Future grids will automatically:

- Detect faults
- Isolate damaged sections
- Restore power supply

---

# Summary

- Power system operation ensures continuous, reliable, and economical electricity supply.
- Generation must always match load demand to maintain frequency.
- Load Frequency Control maintains frequency through primary, secondary, and tertiary control.
- Automatic Generation Control restores frequency and scheduled power exchange.
- Voltage control is achieved through excitation systems, AVR, and reactive power compensation.
- Economic Dispatch minimizes generation cost.
- Unit Commitment determines optimal generator scheduling.
- SCADA provides real-time monitoring and control.
- WAMS and PMUs improve dynamic system monitoring.
- Smart Grid technologies enable intelligent and flexible power system operation.
- Future power systems will rely on automation, artificial intelligence, and digital communication.

---

# Quick Revision

- **Power System Operation** → Continuous monitoring and control of electrical networks.
- **LFC** → Maintains system frequency.
- **Governor** → Provides primary frequency control.
- **AGC** → Restores frequency and tie-line schedule.
- **ACE** → Control signal used in interconnected systems.
- **AVR** → Maintains generator voltage.
- **Reactive Power Control** → Supports voltage stability.
- **Economic Dispatch** → Minimum cost generation scheduling.
- **Unit Commitment** → Determines ON/OFF status of generators.
- **SCADA** → Real-time monitoring and control.
- **PMU** → Provides synchronized phasor measurements.
- **WAMS** → Wide-area dynamic monitoring.
- **EMS** → Integrated energy management system.

---

# Viva Questions

1. What are the objectives of power system operation?
2. Why is generation-load balance important?
3. Explain Load Frequency Control.
4. What is governor droop?
5. Explain Automatic Generation Control.
6. Define Area Control Error.
7. What is voltage regulation?
8. Explain the function of AVR.
9. What is reactive power compensation?
10. Explain economic dispatch.
11. What is unit commitment?
12. Explain N-1 security criterion.
13. What is state estimation?
14. Explain SCADA operation.
15. What is the role of PMU in power systems?
16. Explain Smart Grid operation.
17. What are the challenges in modern power system operation?

---

# University Questions

## Short Answer Questions

1. Define power system operation.
2. State the objectives of LFC.
3. What is governor control?
4. Define AGC.
5. What is ACE?
6. Explain AVR.
7. Define economic dispatch.
8. What is unit commitment?
9. Define SCADA.
10. What is PMU?

---

## Long Answer Questions

1. Explain the hierarchical control structure of power systems.
2. Describe Load Frequency Control with block diagrams.
3. Explain Automatic Generation Control and ACE.
4. Discuss voltage control methods in power systems.
5. Explain economic dispatch and unit commitment problems.
6. Describe SCADA architecture and applications.
7. Explain WAMS and PMU-based monitoring.
8. Discuss Smart Grid operation and future challenges of power system control.

---