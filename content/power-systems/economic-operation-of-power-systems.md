# Economic Operation of Power Systems

## Learning Objectives

After studying this topic, you should be able to:

- Define economic operation of power systems.
- Explain the need for economic operation.
- State the objectives of economic load dispatch.
- Understand input-output characteristics of generating units.
- Explain heat rate and incremental fuel cost curves.
- Derive the coordination equation for economic dispatch.
- Understand the effect of transmission losses on economic operation.
- Explain the concept of penalty factor and loss coefficients.

---

# Introduction

Electrical energy cannot be stored economically in large quantities. Therefore, the generated power must always be equal to the load demand plus the transmission losses.

Modern power systems consist of several generating stations operating simultaneously. These generating units may differ in their fuel type, efficiency, operating characteristics, and generation cost.

If all generating units share the load equally without considering their operating costs, the total fuel cost of the system may become unnecessarily high.

The **Economic Operation of Power Systems** is the process of allocating the total load demand among the available generating units in such a way that the total operating cost is minimum while satisfying all operating constraints.

The objective is not only to supply reliable electrical power but also to do so at the lowest possible cost.

Economic operation is one of the most important functions of modern power system operation and control.

---

# Need for Economic Operation

The demand for electrical energy is continuously increasing. At the same time, the cost of fuel such as coal, natural gas, and oil is also rising.

Operating generating stations economically helps power utilities reduce fuel consumption and improve overall efficiency.

Economic operation is required because it helps to:

- Minimize the total fuel cost of generation.
- Improve the efficiency of generating stations.
- Reduce wastage of fuel.
- Meet consumer demand economically.
- Increase the profitability of power utilities.
- Ensure optimum utilization of available generating units.
- Reduce operating expenses.
- Improve overall power system performance.

---

# Objectives of Economic Operation

The main objectives are:

- Supply the required load continuously.
- Minimize the total operating cost.
- Share the load optimally among generators.
- Operate each generating unit within its operating limits.
- Maintain system frequency within permissible limits.
- Ensure reliable and secure operation.
- Reduce transmission losses as much as possible.
- Achieve maximum overall efficiency.

---

# Economic Dispatch

Economic Dispatch (ED) is the process of determining the output power of each generating unit so that the total generation cost is minimum while meeting the total load demand.

Suppose a power system has several generating units connected in parallel.

Instead of sharing the load equally, each generator is assigned a load according to its operating cost.

Generators having lower fuel cost generate more power, while generators having higher operating cost generate less power.

Economic dispatch ensures that the total demand is supplied at the minimum possible cost.

---

# Conditions for Economic Dispatch

For economic operation, the following conditions should be satisfied:

- Total generated power must be equal to the total load demand.
- Each generating unit must operate within its minimum and maximum limits.
- System frequency should remain constant.
- Generator operating constraints should not be violated.
- Transmission losses should be considered whenever necessary.

Mathematically,

\[
\sum P_G=P_D
\]

where

- \(P_G\) = Total generated power
- \(P_D\) = Total load demand

If transmission losses are considered,

\[
\sum P_G=P_D+P_L
\]

where

- \(P_L\) = Transmission loss

---

# Constraints in Economic Operation

The optimization process is subject to certain constraints.

## 1. Equality Constraint

The generated power must satisfy the system demand.

Without transmission losses,

\[
\sum P_G=P_D
\]

With transmission losses,

\[
\sum P_G=P_D+P_L
\]

---

## 2. Generator Operating Limits

Each generating unit has minimum and maximum operating limits.

\[
P_{min}\le P_G\le P_{max}
\]

A generator cannot operate below its minimum stable generation or above its rated capacity.

---

# Advantages of Economic Operation

- Reduces fuel consumption.
- Minimizes generation cost.
- Improves plant efficiency.
- Increases overall system economy.
- Ensures optimum utilization of generating units.
- Reduces operating expenses.
- Improves reliability of power supply.

---

# Limitations

- Requires accurate fuel cost data.
- Generator characteristics change with time.
- Load demand varies continuously.
- Practical systems have several operating constraints.
- Computer-based optimization is generally required for large interconnected systems.

---

# Flowchart

```text
Load Demand

↓

Determine Available Generators

↓

Collect Generator Cost Data

↓

Economic Dispatch Calculation

↓

Allocate Load to Generators

↓

Minimum Operating Cost Achieved

↓

Supply Consumer Load
```

# Input-Output Characteristics

The input-output characteristic of a generating unit shows the relationship between the **fuel input** supplied to the generating unit and the **electrical power output** produced.

Since thermal power plants consume fuel to generate electricity, the fuel consumption increases as the generator output increases.

However, the increase is **not linear** because of various losses and changes in operating efficiency.

The input-output characteristic is used to determine the fuel required for different power outputs and forms the basis for economic dispatch calculations.

---

# Input-Output Curve

The input-output curve is a graph between:

- Fuel input (kcal/hr, MJ/hr or BTU/hr)
- Electrical power output (MW)

```text
Fuel Input

^

|

|                          •

|                      •

|                  •

|              •

|          •

|      •

|  •

+-----------------------------------------> Power Output (MW)
```

The curve is generally nonlinear because the efficiency of the generating unit changes with loading.

---

# Characteristics of Input-Output Curve

- Fuel input increases with generator output.
- The relationship is nonlinear.
- Every generating unit has a different input-output curve.
- It is used for determining the operating cost of generating units.
- It forms the basis for economic load dispatch.

---

# Fuel Cost Curve

The fuel cost curve represents the relationship between the **fuel cost** and the **power generated**.

If the fuel price is constant,

\[
\text{Fuel Cost}
=
\text{Fuel Input}
\times
\text{Fuel Price}
\]

The fuel cost is usually expressed in:

- ₹/hour
- $/hour

The fuel cost curve is generally represented by a quadratic equation.

\[
F(P)=a+bP+cP^2
\]

where

- \(F(P)\) = Fuel cost (₹/hr)
- \(P\) = Generator output (MW)
- \(a,b,c\) = Cost coefficients

---

# Characteristics of Fuel Cost Curve

- It is continuous.
- It is generally quadratic.
- Cost increases with increase in generator output.
- Different generators have different cost curves.

---

# Heat Rate

The heat rate indicates the amount of heat energy required to generate one unit of electrical energy.

It is an important measure of the efficiency of a thermal power plant.

Mathematically,

\[
\text{Heat Rate}
=
\frac{\text{Heat Input}}
{\text{Electrical Energy Generated}}
\]

Typical unit:

\[
\text{kcal/kWh}
\]

or

\[
\text{kJ/kWh}
\]

A lower heat rate indicates better plant efficiency.

---

# Heat Rate Curve

The heat rate curve shows the variation of heat rate with generator output.

```text
Heat Rate

^

|  •

|    •

|      •

|        •

|          •

+---------------------------------------> Power Output
```

A generating unit normally operates near the region where the heat rate is minimum.

---

# Importance of Heat Rate

Heat rate is used to

- Evaluate plant efficiency.
- Compare generating units.
- Estimate fuel consumption.
- Improve plant operation.
- Reduce operating cost.

---

# Incremental Fuel Cost

Incremental Fuel Cost (IFC) is defined as the additional fuel cost required to produce one additional megawatt of electrical power.

It is one of the most important concepts in economic dispatch.

Mathematically,

\[
\lambda
=
\frac{dF}{dP}
\]

where

- \(\lambda\) = Incremental fuel cost
- \(F\) = Fuel cost
- \(P\) = Generator output

Unit:

\[
₹/MWh
\]

or

\[
₹/MWhr
\]

---

# Incremental Fuel Cost Curve

The incremental fuel cost curve is obtained by differentiating the fuel cost curve.

If

\[
F(P)=a+bP+cP^2
\]

then

\[
\lambda
=
b+2cP
\]

The incremental fuel cost increases with increase in generator output.

---

# Significance of Incremental Fuel Cost

Incremental fuel cost is used to

- Allocate load among generators.
- Determine optimum operating point.
- Minimize total operating cost.
- Derive the coordination equation.
- Perform economic load dispatch.

---

# Relationship Between Curves

```text
Fuel Input

↓

Input-Output Curve

↓

Fuel Cost Curve

↓

Incremental Fuel Cost Curve

↓

Economic Load Dispatch
```

---

# Key Points

- The input-output characteristic relates fuel input to generator output.
- The fuel cost curve represents the operating cost of a generating unit.
- Heat rate indicates the efficiency of a power plant.
- Lower heat rate means higher efficiency.
- Incremental fuel cost is the additional cost of producing one extra megawatt.
- Incremental fuel cost forms the basis of economic load dispatch calculations.

# Economic Load Dispatch (Without Transmission Loss)

Economic Load Dispatch (ELD) is the process of distributing the total system load among the available generating units such that the total operating cost is minimum while satisfying the load demand.

In this method, transmission losses are assumed to be negligible.

The total generated power is therefore equal to the total load demand.

\[
\sum P_G=P_D
\]

where

- \(P_G\) = Total generated power
- \(P_D\) = Total load demand

---

# Principle of Economic Load Dispatch

Consider a power system having two or more generating units operating in parallel.

Each generator has a different fuel cost characteristic.

To obtain minimum operating cost,

- Low-cost generators should supply more power.
- High-cost generators should supply less power.
- The load should be shared optimally among all generators.

The condition for minimum operating cost is that the incremental fuel costs of all generators must be equal.

---

# Coordination Equation

The most important condition for economic dispatch is known as the **coordination equation**.

For minimum operating cost,

\[
\frac{dF_1}{dP_1}
=
\frac{dF_2}{dP_2}
=
\frac{dF_3}{dP_3}
=
\cdots
=
\lambda
\]

where

- \(F_1,F_2,F_3\) = Fuel cost functions
- \(P_1,P_2,P_3\) = Generator outputs
- \(\lambda\) = Incremental fuel cost (Lagrange multiplier)

This condition ensures that the total operating cost is minimum.

---

# Why Should Incremental Fuel Costs be Equal?

Suppose one generator has a lower incremental fuel cost than another.

In that case,

- Reducing the output of the expensive generator.
- Increasing the output of the cheaper generator.

will reduce the total fuel cost.

This adjustment continues until the incremental fuel costs of all generators become equal.

Therefore, equal incremental fuel costs represent the optimum operating condition.

---

# Derivation of Coordination Equation

Consider two generating units.

Total fuel cost,

\[
F=F_1+F_2
\]

The power balance equation is

\[
P_D=P_1+P_2
\]

Differentiating,

\[
dP_1+dP_2=0
\]

or

\[
dP_2=-dP_1
\]

For minimum cost,

\[
dF=0
\]

Since

\[
dF=
\frac{dF_1}{dP_1}dP_1+
\frac{dF_2}{dP_2}dP_2
\]

Substituting

\[
dP_2=-dP_1
\]

gives

\[
\left(
\frac{dF_1}{dP_1}
-
\frac{dF_2}{dP_2}
\right)dP_1=0
\]

Hence,

\[
\boxed{
\frac{dF_1}{dP_1}
=
\frac{dF_2}{dP_2}
}
\]

For multiple generators,

\[
\boxed{
\frac{dF_1}{dP_1}
=
\frac{dF_2}{dP_2}
=
\cdots
=
\lambda
}
\]

This is called the **coordination equation**.

---

# Lagrange Multiplier

The symbol

\[
\lambda
\]

is called the **Lagrange multiplier**.

It represents the common incremental fuel cost of all generators operating economically.

Unit:

\[
₹/MWh
\]

or

\[
₹/\text{MWhr}
\]

---

# Conditions for Economic Load Dispatch

Economic dispatch is achieved when:

- Total generation equals the load demand.
- Incremental fuel costs of all generators are equal.
- Generator operating limits are satisfied.
- No generator exceeds its rated capacity.

---

# Generator Operating Limits

Every generator operates within specified limits.

\[
P_{min}\le P_i\le P_{max}
\]

where

- \(P_{min}\) = Minimum generation limit
- \(P_{max}\) = Maximum generation limit

If a generator reaches either limit, it cannot participate further in load sharing.

The remaining generators must supply the additional load.

---

# Base Point Loading

The initial operating output assigned to a generator before any change in load is called the **base point loading**.

When the system load changes, the generator outputs are adjusted from these base values to achieve a new economic operating point.

---

# Participation Factor

The participation factor indicates how much each generator contributes to a change in system load.

Generators with lower operating costs generally have higher participation in supplying additional load.

Participation factors are useful in automatic generation control and economic dispatch calculations.

---

# Flowchart

```text
Load Demand

↓

Collect Generator Cost Curves

↓

Determine Incremental Fuel Costs

↓

Equalize Incremental Fuel Costs

↓

Check Generator Limits

↓

Allocate Load Optimally

↓

Minimum Operating Cost
```

---

# Key Points

- Economic Load Dispatch allocates load among generators at minimum operating cost.
- Without transmission losses,

\[
\sum P_G=P_D
\]

- Minimum operating cost is obtained when the incremental fuel costs of all generators are equal.
- The coordination equation is the fundamental equation of economic dispatch.
- Generator operating limits must always be satisfied during economic operation.

# Economic Load Dispatch (With Transmission Loss)

In practical power systems, a portion of the generated power is lost as heat in the transmission lines due to their resistance.

Therefore, the total generated power must supply both the consumer load and the transmission losses.

The power balance equation becomes

\[
\sum P_G=P_D+P_L
\]

where

- \(P_G\) = Total generated power
- \(P_D\) = Load demand
- \(P_L\) = Transmission loss

Transmission losses increase with increase in power transfer and cannot be neglected in large interconnected power systems.

---

# Transmission Losses

Transmission losses are mainly caused by

- Resistance of transmission lines.
- Current flowing through conductors.
- Reactive power flow.
- Long transmission distances.

Since transmission losses depend upon generator outputs, they make the economic dispatch problem more complex.

---

# Coordination Equation with Transmission Loss

When transmission losses are considered, the simple coordination equation is modified.

The economic dispatch condition becomes

\[
\frac{dF_i}{dP_i}
\times
\frac{1}{1-\frac{\partial P_L}{\partial P_i}}
=
\lambda
\]

where

- \(\frac{dF_i}{dP_i}\) = Incremental fuel cost of generator \(i\)
- \(P_L\) = Transmission loss
- \(\lambda\) = Incremental operating cost

The term

\[
\frac{1}{1-\frac{\partial P_L}{\partial P_i}}
\]

is known as the **penalty factor**.

---

# Penalty Factor

The penalty factor accounts for the effect of transmission losses during economic dispatch.

It modifies the incremental fuel cost so that generators supplying power through longer or higher-loss transmission paths are allocated load appropriately.

Mathematically,

\[
\boxed{
\text{Penalty Factor}
=
\frac{1}
{1-\frac{\partial P_L}{\partial P_i}}
}
\]

where

\[
\frac{\partial P_L}{\partial P_i}
\]

is called the **incremental transmission loss**.

---

# Significance of Penalty Factor

The penalty factor

- Compensates for transmission losses.
- Modifies generator operating cost.
- Helps achieve true economic dispatch.
- Ensures minimum total operating cost.

A generator with a larger transmission loss will have a higher penalty factor.

---

# Incremental Transmission Loss

Incremental transmission loss is the increase in transmission loss due to a small increase in the output of a generating unit.

It is expressed as

\[
\frac{\partial P_L}{\partial P_i}
\]

A lower value indicates that the generator supplies power more efficiently to the load.

---

# Loss Coefficients (B-Coefficients)

Transmission losses are commonly represented using **B-coefficients**, also known as **loss coefficients**.

The transmission loss equation is

\[
P_L=
\sum_{i=1}^{n}
\sum_{j=1}^{n}
P_iB_{ij}P_j
\]

where

- \(P_i,P_j\) = Generator outputs
- \(B_{ij}\) = Loss coefficients
- \(P_L\) = Total transmission loss

The B-coefficients depend on the network configuration and transmission line parameters.

---

# Advantages of Using B-Coefficients

- Simplifies transmission loss calculation.
- Suitable for computer-based economic dispatch.
- Widely used in practical power systems.
- Provides reasonably accurate loss estimation.

---

# Economic Dispatch Procedure with Transmission Loss

The following steps are followed:

1. Determine the load demand.
2. Calculate transmission losses.
3. Obtain the fuel cost characteristics of all generators.
4. Calculate incremental fuel costs.
5. Determine the penalty factor for each generator.
6. Modify the incremental fuel costs.
7. Allocate generation until the modified incremental costs become equal.
8. Verify generator operating limits.
9. Repeat the calculations until convergence is achieved.

---

# Comparison Between Economic Dispatch With and Without Transmission Loss

| Feature | Without Transmission Loss | With Transmission Loss |
|----------|---------------------------|------------------------|
| Power Balance | \(\sum P_G=P_D\) | \(\sum P_G=P_D+P_L\) |
| Transmission Loss | Neglected | Considered |
| Penalty Factor | Not Required | Required |
| Coordination Equation | Simple | Modified |
| Accuracy | Lower | Higher |
| Practical Application | Small Systems | Large Interconnected Systems |

---

# Applications

Economic load dispatch with transmission losses is used in

- Thermal power stations.
- Regional power grids.
- National load dispatch centres.
- Energy management systems (EMS).
- Automatic generation control (AGC).
- Smart grid operation.

---

# Key Points

- Practical economic dispatch always considers transmission losses.
- Total generation must satisfy both the load demand and transmission losses.
- The penalty factor modifies the incremental fuel cost of each generator.
- B-coefficients are used to estimate transmission losses.
- Economic dispatch with transmission losses provides more accurate and economical operation of interconnected power systems.

# Numerical Example

A power system has two generating units supplying a total load of **300 MW**.

The incremental fuel cost equations are

\[
\frac{dF_1}{dP_1}=8+0.02P_1
\]

\[
\frac{dF_2}{dP_2}=6+0.04P_2
\]

Neglect transmission losses and determine the economic generation schedule.

---

## Solution

For economic operation,

\[
\frac{dF_1}{dP_1}
=
\frac{dF_2}{dP_2}
=
\lambda
\]

Therefore,

\[
8+0.02P_1
=
6+0.04P_2
\]

The power balance equation is

\[
P_1+P_2=300
\]

Substituting

\[
P_2=300-P_1
\]

gives

\[
8+0.02P_1
=
6+0.04(300-P_1)
\]

\[
8+0.02P_1
=
18-0.04P_1
\]

\[
0.06P_1=10
\]

\[
P_1=166.67\;MW
\]

Hence,

\[
P_2=300-166.67
\]

\[
P_2=133.33\;MW
\]

Therefore,

**Economic Generation Schedule**

- Generator 1 = **166.67 MW**
- Generator 2 = **133.33 MW**

---

# Practical Applications

Economic operation is widely used in modern power systems for:

- Thermal power station scheduling.
- Hydro-thermal coordination.
- Energy management systems (EMS).
- Automatic Generation Control (AGC).
- National and regional load dispatch centres.
- Smart grid operation.
- Unit commitment studies.
- Power market operation.

---

# Advantages

- Minimizes fuel cost.
- Improves generating station efficiency.
- Optimizes generator loading.
- Reduces fuel consumption.
- Ensures economical operation of interconnected power systems.
- Improves overall system reliability.
- Reduces operating expenses.
- Supports efficient energy management.

---

# Limitations

- Accurate generator cost curves are required.
- Transmission losses complicate calculations.
- Generator operating constraints must be satisfied.
- Load demand changes continuously.
- Practical systems require computer-based optimization techniques.

---

# Viva Questions

### 1. What is economic operation of power systems?

Economic operation is the process of supplying the required load at the minimum operating cost while satisfying system constraints.

---

### 2. What is economic load dispatch?

Economic load dispatch is the optimal sharing of load among generating units to minimize total fuel cost.

---

### 3. What is the input-output characteristic?

It is the relationship between fuel input and electrical power output of a generating unit.

---

### 4. What is the heat rate?

Heat rate is the amount of heat energy required to generate one unit of electrical energy.

---

### 5. What is incremental fuel cost?

It is the additional fuel cost required to produce one additional megawatt of electrical power.

---

### 6. State the coordination equation.

\[
\frac{dF_1}{dP_1}
=
\frac{dF_2}{dP_2}
=
\cdots
=
\lambda
\]

---

### 7. What is the penalty factor?

Penalty factor is a correction factor used in economic dispatch to account for transmission losses.

---

### 8. What are B-coefficients?

B-coefficients are transmission loss coefficients used to estimate power losses in economic dispatch calculations.

---

### 9. Why are transmission losses considered in economic dispatch?

Because a portion of the generated power is lost during transmission, and these losses affect the optimum generation schedule.

---

### 10. What is the objective of economic operation?

To minimize the total operating cost while supplying the required load safely and reliably.

---

# Summary

- Economic operation aims to minimize the total cost of power generation while meeting the system load demand.
- Economic Load Dispatch (ELD) allocates the load among generators based on their operating costs.
- The input-output characteristic, fuel cost curve, heat rate, and incremental fuel cost are fundamental concepts in economic operation.
- The coordination equation ensures that all generators operate at equal incremental fuel cost for minimum operating cost.
- When transmission losses are considered, the coordination equation is modified using the penalty factor.
- B-coefficients are widely used to estimate transmission losses in interconnected power systems.
- Economic operation improves efficiency, reduces fuel consumption, and supports reliable and economical power system operation.

---

# Quick Revision

## Important Formulae

### Power Balance (Without Transmission Loss)

\[
\sum P_G=P_D
\]

---

### Power Balance (With Transmission Loss)

\[
\sum P_G=P_D+P_L
\]

---

### Fuel Cost Function

\[
F(P)=a+bP+cP^2
\]

---

### Incremental Fuel Cost

\[
\lambda=\frac{dF}{dP}
\]

---

### Coordination Equation

\[
\frac{dF_1}{dP_1}
=
\frac{dF_2}{dP_2}
=
\cdots
=
\lambda
\]

---

### Penalty Factor

\[
\text{Penalty Factor}
=
\frac{1}
{1-\frac{\partial P_L}{\partial P_i}}
\]

---

### Transmission Loss Equation

\[
P_L=
\sum_{i=1}^{n}
\sum_{j=1}^{n}
P_iB_{ij}P_j
\]

---

# Frequently Asked University Questions

### Short Answer Questions

- Define economic operation of power systems.
- What is economic load dispatch?
- Define incremental fuel cost.
- What is heat rate?
- What is the coordination equation?
- Define penalty factor.
- What are B-coefficients?

---

### Long Answer Questions

- Explain the economic operation of power systems.
- Derive the coordination equation for economic load dispatch.
- Explain economic load dispatch with and without transmission losses.
- Explain the concepts of incremental fuel cost and penalty factor.
- Discuss the role of B-coefficients in economic dispatch.

