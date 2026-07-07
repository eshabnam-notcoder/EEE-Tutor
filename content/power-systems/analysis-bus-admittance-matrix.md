# Bus Admittance Matrix (Y-Bus)

The **Bus Admittance Matrix (Y-Bus)** is one of the most important tools used in power system analysis. It represents the electrical connections between different buses in a power system using admittance values.

The Y-Bus matrix is widely used in **load flow studies**, **fault analysis**, and **power system stability analysis**.

<img src="assets/animations/ybus-matrix.svg" alt="Bus Admittance Matrix">

---

# What is a Bus?

A **bus** is a common connection point in a power system where generators, transformers, transmission lines, and loads are connected.

Each bus has:

- A voltage magnitude
- A voltage angle

Power flows from one bus to another through transmission lines.

---

# What is Admittance?

**Admittance (Y)** is the ability of a circuit to allow electric current to flow.

It is the reciprocal of impedance.

```
Y = 1 / Z
```

Where:

- **Y** = Admittance (Siemens, S)
- **Z** = Impedance (Ohms, Ω)

Higher admittance means current flows more easily.

---

# What is the Bus Admittance Matrix?

The **Bus Admittance Matrix (Y-Bus)** is a square matrix that shows the admittance relationships between all buses in a power system.

For a system with **n buses**, the Y-Bus matrix has:

```
n × n elements
```

---

# Purpose of the Y-Bus Matrix

The Y-Bus matrix is used to:

- Represent the network mathematically
- Calculate bus voltages
- Analyze power flow
- Perform fault analysis
- Study system stability
- Simplify computer calculations

---

# Formation of the Y-Bus Matrix

The Y-Bus matrix contains two types of elements.

---

## Diagonal Elements

The diagonal element represents the **total admittance connected to that bus**.

It is obtained by adding all admittances connected directly to the bus.

```
Yii = Sum of all admittances connected to Bus i
```

---

## Off-Diagonal Elements

The off-diagonal element represents the admittance between two buses.

It is equal to the **negative** of the admittance connecting those buses.

```
Yij = − (Admittance between Bus i and Bus j)
```

---

# Example

Consider a simple system with three buses.

```
Bus 1 -------- Bus 2
   \             |
    \            |
      \          |
        Bus 3
```

The corresponding Y-Bus matrix is:

```
| Y11  Y12  Y13 |
| Y21  Y22  Y23 |
| Y31  Y32  Y33 |
```

Each diagonal element is the sum of connected admittances, while each off-diagonal element is the negative of the line admittance between two buses.

---

# Properties of the Y-Bus Matrix

The Y-Bus matrix has several important properties.

### Square Matrix

The number of rows is equal to the number of columns.

---

### Symmetrical Matrix

For a balanced power system,

```
Yij = Yji
```

---

### Sparse Matrix

Most elements are zero because each bus is connected to only a few other buses.

---

### Diagonal Dominance

Diagonal elements are generally larger than the off-diagonal elements because they represent the sum of all connected admittances.

---

# Advantages of the Y-Bus Matrix

- Simple representation of large power systems
- Easy computer implementation
- Reduces calculation time
- Useful in load flow analysis
- Useful in fault studies
- Suitable for large interconnected networks

---

# Disadvantages

- Requires accurate network data
- Matrix size increases with the number of buses
- Manual formation becomes difficult for large systems

---

# Applications

The Y-Bus matrix is used in:

- Load flow studies
- Fault analysis
- Stability analysis
- Economic operation
- Power system planning
- Computer-based power system simulations

---

# Difference Between Impedance and Admittance

| Impedance (Z) | Admittance (Y) |
|--------------|----------------|
| Opposes current flow | Allows current flow |
| Unit: Ohm (Ω) | Unit: Siemens (S) |
| Z = R + jX | Y = G + jB |
| Reciprocal of admittance | Reciprocal of impedance |

---

# Importance of the Y-Bus Matrix

The Y-Bus matrix is one of the most widely used mathematical models in power system engineering because it:

- Represents the complete network in matrix form.
- Simplifies complex calculations.
- Forms the basis of load flow and fault analysis.
- Is used by modern power system analysis software.

---

# Summary

- A **bus** is a connection point in a power system.
- **Admittance** is the reciprocal of impedance.
- The **Y-Bus Matrix** represents the admittance relationships between buses.
- Diagonal elements are the sum of admittances connected to a bus.
- Off-diagonal elements are the negative of the admittance between two buses.
- The Y-Bus matrix is widely used for **load flow**, **fault**, and **stability studies** in modern power systems.