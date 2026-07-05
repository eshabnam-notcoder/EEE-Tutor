# Economic Load Dispatch (ELD)

## Learning Objectives

After studying this topic, you should be able to:

- Understand the need for Economic Load Dispatch (ELD).
- Explain the objective of ELD in power system operation.
- Interpret generator fuel cost characteristics.
- Derive the condition for optimum generation.
- Solve simple Economic Load Dispatch problems.
- State the advantages, limitations, and applications of ELD.

---

# Introduction

A power system usually contains multiple generating units operating simultaneously.

When supplying electrical demand, an important question arises:

**How should the total load be shared among the available generators so that the overall operating cost is minimum?**

The process of distributing the system load among generators in the most economical manner is called **Economic Load Dispatch (ELD).**

---

# Why is Economic Load Dispatch Needed?

Different generating units have different:

- Fuel costs
- Efficiencies
- Heat rates
- Operating characteristics

If all generators share the load equally, the total fuel cost may be unnecessarily high.

Economic Load Dispatch determines the most economical loading of each generator while meeting the total system demand.

---

# Objective of Economic Load Dispatch

The objective of ELD is:

- To satisfy the total load demand.
- To minimize the total fuel cost.
- To operate generators within their permissible limits.
- To ensure reliable and efficient system operation.

---

# Fuel Cost Curve

The operating cost of a generating unit increases as its output increases.

The fuel cost curve is generally represented by a quadratic equation:

\[
F = a + bP + cP^2
\]

where

- \(F\) = Fuel cost (₹/hr)
- \(P\) = Generator output (MW)
- \(a, b, c\) = Cost coefficients

The curve is usually upward-opening because fuel consumption increases non-linearly with power output.

---

# Incremental Fuel Cost

The **incremental fuel cost** is the rate of change of fuel cost with respect to power output.

\[
\frac{dF}{dP}
\]

For

\[
F = a + bP + cP^2
\]

the incremental cost is

\[
\frac{dF}{dP}=b+2cP
\]

It represents the additional cost of generating one more megawatt.

---

# Condition for Economic Load Dispatch

For minimum operating cost,

the incremental fuel costs of all generators should be equal.

For two generators,

\[
\frac{dF_1}{dP_1}
=
\frac{dF_2}{dP_2}
=
\lambda
\]

where

\(\lambda\) is called the **incremental cost** or **coordination equation constant**.

This is known as the **equal incremental cost criterion**.

---

# Power Balance Equation

The generated power must equal the system demand.

Ignoring transmission losses,

\[
P_1+P_2+\cdots+P_n=P_D
\]

where

- \(P_D\) = Total load demand

---

# Flowchart

```text
Start

↓

Read Generator Cost Data

↓

Read System Load

↓

Assume Initial λ

↓

Calculate Generator Outputs

↓

Check Power Balance

↓

If Not Equal

↓

Adjust λ

↓

Repeat

↓

Economic Dispatch Obtained

↓

Stop
```

---

# Algorithm

### Step 1

Obtain the fuel cost equation of each generator.

---

### Step 2

Determine the incremental cost equation.

---

### Step 3

Apply the equal incremental cost criterion.

---

### Step 4

Use the power balance equation.

---

### Step 5

Solve for generator outputs.

---

### Step 6

Verify generator operating limits.

---

### Step 7

Calculate the total fuel cost.

---

# Simple Solved Example

A power station has two generators.

Total demand:

\[
P_D=300\text{ MW}
\]

The incremental cost equations are:

\[
\frac{dF_1}{dP_1}=8+0.02P_1
\]

\[
\frac{dF_2}{dP_2}=6+0.04P_2
\]

Using the equal incremental cost criterion,

\[
8+0.02P_1
=
6+0.04P_2
\]

and

\[
P_1+P_2=300
\]

Solving these equations gives the economical generation schedule.

*(Detailed numerical solution is usually covered separately in numerical problem sessions.)*

---

# Practical Example

Suppose three thermal power stations are supplying electricity to a city.

If each station produces equal power,

the fuel cost may be unnecessarily high because one plant may be much more efficient than the others.

Economic Load Dispatch assigns a larger share of the load to the more efficient generators and a smaller share to the less efficient ones, thereby reducing the total operating cost.

---

# Advantages

- Minimizes fuel cost.
- Improves overall generating efficiency.
- Reduces operating expenses.
- Ensures optimum utilization of generating units.
- Essential for modern power system operation.

---

# Limitations

- Basic ELD ignores transmission losses.
- Assumes accurate fuel cost characteristics.
- Does not consider start-up and shutdown costs.
- Generator limits must be handled separately.

---

# Applications

- Thermal power stations.
- Power generation scheduling.
- Energy Management Systems (EMS).
- Power system operation centres.
- Daily generation planning.
- Utility load scheduling.

---

# Exam Tips

Remember these important points:

- Objective → Minimum fuel cost.
- Equal incremental cost criterion is the basic condition.
- Total generated power must equal total demand.
- Fuel cost curve is generally quadratic.
- Incremental cost is the derivative of the fuel cost curve.

---

# Viva Questions

### 1. What is Economic Load Dispatch?

It is the economical distribution of load among generating units while satisfying system demand.

---

### 2. What is the objective of ELD?

To minimize the total operating cost.

---

### 3. What is incremental fuel cost?

The additional fuel cost required to generate one extra megawatt.

---

### 4. What is λ (lambda)?

The common incremental cost at optimum dispatch.

---

### 5. What is the basic criterion for Economic Load Dispatch?

Equal incremental fuel cost of all generators.

---

# Summary

- Economic Load Dispatch determines the most economical sharing of load among generating units.
- The objective is to minimize the total fuel cost while meeting system demand.
- Fuel cost curves are generally quadratic.
- Optimum operation is achieved when the incremental fuel costs of all generators are equal.
- Economic Load Dispatch plays a vital role in efficient power system operation and planning.