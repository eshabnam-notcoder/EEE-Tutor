# Per Unit (PU) System

The **Per Unit (PU) System** is a method of expressing electrical quantities as a fraction of selected base values. It simplifies power system calculations by representing quantities as dimensionless values instead of their actual units.

The per unit system is widely used in power system analysis because equipment operating at different voltage levels can be easily compared.

<img src="assets/animations/per-unit-system.svg" alt="Per Unit System">

---

# What is the Per Unit System?

The **Per Unit (PU) System** expresses an actual electrical quantity as a ratio of its base value.

```
Per Unit Value = Actual Value / Base Value
```

The result has **no unit** because it is simply a ratio.

---

# Why is the Per Unit System Used?

In power systems, equipment such as generators, transformers, and transmission lines operate at different voltage and power ratings.

Using actual values makes calculations lengthy and complicated.

The per unit system:

- Simplifies calculations
- Reduces calculation errors
- Makes comparison of equipment easier
- Eliminates transformer turns ratio during calculations
- Provides a common reference for the entire power system

---

# Base Quantities

To use the per unit system, base values are selected.

The common base quantities are:

- Base Power (S₍base₎)
- Base Voltage (V₍base₎)

From these, other base quantities can be calculated.

---

## Base Current

```
I(base) = S(base) / (√3 × V(base))
```

Where:

- **I(base)** = Base current
- **S(base)** = Base apparent power
- **V(base)** = Base voltage

---

## Base Impedance

```
Z(base) = V(base)² / S(base)
```

---

# Per Unit Quantities

Once the base values are known, any electrical quantity can be expressed in per unit form.

---

## Per Unit Voltage

```
Voltage (PU) = Actual Voltage / Base Voltage
```

---

## Per Unit Current

```
Current (PU) = Actual Current / Base Current
```

---

## Per Unit Impedance

```
Impedance (PU) = Actual Impedance / Base Impedance
```

---

## Per Unit Power

```
Power (PU) = Actual Power / Base Power
```

---

# Example

Suppose:

- Base Voltage = **11 kV**
- Actual Voltage = **10.45 kV**

Then,

```
PU Voltage = 10.45 / 11

PU Voltage = 0.95
```

Therefore,

**Per Unit Voltage = 0.95 PU**

---

# Advantages of the Per Unit System

- Simplifies power system calculations
- Easy comparison of equipment ratings
- Eliminates transformer ratio calculations
- Reduces numerical complexity
- Widely accepted in industry
- Used in load flow and fault studies

---

# Disadvantages

- Requires proper selection of base values
- Can be confusing for beginners
- Base conversion is needed if different bases are used

---

# Applications

The per unit system is used in:

- Load flow analysis
- Fault analysis
- Power system stability studies
- Transmission system analysis
- Generator analysis
- Transformer calculations

---

# Common Base Values

Typical base values used in power system studies are:

| Quantity | Typical Base Value |
|----------|--------------------|
| Power | 100 MVA |
| Voltage | 11 kV, 33 kV, 132 kV, 220 kV, 400 kV |
| Frequency | 50 Hz or 60 Hz |

---

# Importance of the Per Unit System

The per unit system is important because:

- It standardizes calculations.
- It makes comparison between different voltage levels easier.
- It reduces calculation errors.
- It is used in almost all modern power system software.

---

# Summary

- The **Per Unit System** expresses electrical quantities as a ratio of selected base values.
- It simplifies power system calculations and makes equipment comparison easier.
- The most commonly selected base quantities are **power** and **voltage**.
- From these base values, base current and base impedance are calculated.
- The per unit system is widely used in **load flow studies**, **fault analysis**, and **power system stability analysis**.