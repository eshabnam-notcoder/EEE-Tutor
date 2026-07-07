# Current Transformers (CT) and Potential Transformers (PT)

Instrument transformers are special transformers used in power systems to measure high currents and voltages safely. They reduce the current or voltage to standardized values suitable for measuring instruments and protective relays.

<img src="assets/animations/ct-pt.svg" alt="Current Transformer and Potential Transformer">

---

# Instrument Transformers

Instrument transformers are classified into:

- Current Transformer (CT)
- Potential Transformer (PT)

They provide electrical isolation between high-voltage power systems and measuring instruments, ensuring safety and accuracy.

---

# Current Transformer (CT)

A **Current Transformer (CT)** is an instrument transformer that reduces high current to a small standardized current (usually **5 A or 1 A**) for measurement and protection.

---

## Why is a CT Needed?

In power systems, current can be hundreds or even thousands of amperes. Directly connecting measuring instruments to such high currents is unsafe.

A CT safely reduces the current to a measurable value.

---

## Working Principle

A Current Transformer works on the principle of **electromagnetic induction**.

- The primary winding carries the line current.
- The alternating magnetic field induces current in the secondary winding.
- The secondary current is proportional to the primary current.

---

## Construction

A CT mainly consists of:

- Primary winding
- Magnetic core
- Secondary winding
- Insulated enclosure

In many power systems, the conductor itself acts as the primary winding.

---

## Working

```
High Current Line
        │
        ▼
   ┌───────────┐
   │    CT     │
   └───────────┘
        │
        ▼
 Ammeter / Relay
```

The CT reduces the high line current to a safe value for measuring devices.

---

## Standard Secondary Current

Common standard values are:

- 5 A
- 1 A

---

## Advantages

- Safe measurement of large currents
- Electrical isolation
- High accuracy
- Protects measuring instruments
- Used with protective relays

---

## Applications

- Ammeters
- Energy meters
- Protective relays
- Power system monitoring
- Substations

---

## Important Precaution

**The secondary of a Current Transformer should never be left open while the primary is energized.**

An open secondary can produce dangerously high voltage and damage the CT.

---

# Potential Transformer (PT)

A **Potential Transformer (PT)** is an instrument transformer used to reduce high voltage to a standardized low voltage (usually **110 V**) for measurement and protection.

It is also called a **Voltage Transformer (VT).**

---

## Why is a PT Needed?

Transmission systems operate at very high voltages.

Direct measurement is unsafe and may damage instruments.

A PT safely reduces the voltage for meters and relays.

---

## Working Principle

A Potential Transformer works on the principle of **mutual induction**.

- High voltage is applied to the primary winding.
- A proportional lower voltage appears at the secondary winding.

---

## Construction

A PT consists of:

- Primary winding
- Secondary winding
- Laminated magnetic core
- Insulated enclosure

---

## Working

```
High Voltage Line
        │
        ▼
   ┌───────────┐
   │    PT     │
   └───────────┘
        │
        ▼
 Voltmeter / Relay
```

The secondary provides a reduced voltage suitable for measuring instruments.

---

## Standard Secondary Voltage

The standard secondary voltage is generally:

- **110 V**

---

## Advantages

- Safe voltage measurement
- Electrical isolation
- Accurate readings
- Protects instruments
- Reliable operation

---

## Applications

- Voltmeters
- Energy meters
- Protective relays
- Synchronizing circuits
- Substations

---

## Important Precaution

A PT secondary should **not be short-circuited**, as excessive current may flow and damage the transformer.

---

# Difference Between CT and PT

| Current Transformer (CT) | Potential Transformer (PT) |
|---------------------------|----------------------------|
| Measures current | Measures voltage |
| Connected in series | Connected in parallel |
| Reduces current | Reduces voltage |
| Standard output: 5 A or 1 A | Standard output: 110 V |
| Used with ammeters and current relays | Used with voltmeters and voltage relays |
| Secondary should never be open | Secondary should never be short-circuited |

---

# CT and PT in a Substation

```
Transmission Line
        │
   ┌─────────┐
   │   CT    │────► Ammeter / Relay
   └─────────┘
        │
        │
   ┌─────────┐
   │   PT    │────► Voltmeter / Relay
   └─────────┘
        │
      Equipment
```

Both CT and PT provide safe inputs to measuring instruments and protection systems.

---

# Summary

- **Current Transformer (CT)** reduces high current to a standard value (1 A or 5 A).
- **Potential Transformer (PT)** reduces high voltage to a standard value (typically 110 V).
- Both are instrument transformers used for measurement, metering, and protection.
- CT is connected in **series**, while PT is connected in **parallel**.
- CT secondary must **never be left open**, whereas PT secondary must **never be short-circuited**.