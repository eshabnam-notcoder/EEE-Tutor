# Protective Relays, Fuse, MCB, MCCB, RCCB and ELCB

Protective devices are essential components of a power system. They detect abnormal conditions such as overloads, short circuits, and leakage currents, and disconnect the faulty circuit to protect people and equipment.

<img src="assets/animations/protective-devices.svg" alt="Protective Devices">

---

# Protective Relays

A **protective relay** is an automatic device that detects abnormal operating conditions in a power system and sends a trip signal to the circuit breaker.

The relay itself does **not** interrupt the current. It only detects the fault and commands the circuit breaker to open.

---

## Functions of a Protective Relay

- Detect faults quickly
- Send trip signals to circuit breakers
- Protect electrical equipment
- Minimize damage
- Improve system reliability

---

## Working Principle

1. CTs and PTs continuously monitor current and voltage.
2. The relay compares these values with preset limits.
3. If an abnormal condition is detected, the relay sends a trip signal.
4. The circuit breaker disconnects the faulty section.

```
Fault
   │
   ▼
 CT / PT
   │
   ▼
Protective Relay
   │
Trip Signal
   │
   ▼
Circuit Breaker
```

---

## Characteristics of a Good Relay

- High reliability
- Fast operation
- High sensitivity
- Good selectivity
- Stability during normal conditions
- Easy maintenance

---

## Common Types of Protective Relays

- Overcurrent Relay
- Differential Relay
- Distance Relay
- Directional Relay
- Buchholz Relay
- Thermal Relay

These relays are discussed in later sections of this module.

---

# Fuse

A **fuse** is the simplest protective device used to protect electrical circuits from excessive current.

It contains a thin metallic wire that melts when the current exceeds its rated value.

---

## Working Principle

During normal operation, current flows through the fuse wire.

If excessive current flows:

- The fuse wire heats up.
- It melts.
- The circuit opens.
- Current flow stops.

---

## Advantages

- Simple construction
- Low cost
- Fast operation
- Reliable
- No maintenance

---

## Disadvantages

- Must be replaced after operation
- Cannot be reset
- Not suitable for repeated switching

---

## Applications

- Household wiring
- Electronic equipment
- Distribution boards
- Small electrical appliances

---

# Miniature Circuit Breaker (MCB)

An **MCB (Miniature Circuit Breaker)** is an automatic switch that protects low-voltage circuits against overload and short-circuit faults.

Unlike a fuse, an MCB can be reset after it trips.

---

## Working Principle

When excessive current flows:

- The thermal or magnetic mechanism operates.
- The contacts open.
- The faulty circuit is disconnected.

After the fault is removed, the MCB can be switched ON again.

---

## Advantages

- Reusable
- Quick fault isolation
- Safe operation
- Easy to operate
- No replacement required after tripping

---

## Applications

- Homes
- Offices
- Schools
- Commercial buildings
- Lighting circuits

---

# Moulded Case Circuit Breaker (MCCB)

An **MCCB (Moulded Case Circuit Breaker)** is a heavy-duty circuit breaker used for higher current ratings than an MCB.

It provides protection against:

- Overload
- Short circuit
- Earth fault (in some models)

---

## Features

- Higher current capacity
- Adjustable trip settings
- Better breaking capacity
- Suitable for industrial applications

---

## Advantages

- Handles high currents
- Reliable
- Adjustable protection
- Long service life

---

## Applications

- Industrial plants
- Factories
- Large commercial buildings
- Distribution panels

---

# Residual Current Circuit Breaker (RCCB)

An **RCCB (Residual Current Circuit Breaker)** protects people from electric shock caused by earth leakage current.

It does **not** protect against overload or short circuit.

---

## Working Principle

The RCCB continuously compares:

- Phase current
- Neutral current

Under normal conditions:

Phase current = Neutral current

If leakage occurs:

Phase current ≠ Neutral current

The RCCB trips immediately.

```
Phase Current = 10 A

Neutral Current = 9.97 A

Difference = Leakage Current

↓

RCCB Trips
```

---

## Advantages

- Protects against electric shock
- Detects leakage current
- Fast operation
- Improves electrical safety

---

## Applications

- Residential buildings
- Hospitals
- Schools
- Commercial buildings
- Wet locations

---

# Earth Leakage Circuit Breaker (ELCB)

An **ELCB (Earth Leakage Circuit Breaker)** is a protective device that disconnects the circuit when earth leakage is detected.

Older ELCBs operate based on earth voltage.

Modern installations generally use RCCBs because they are more reliable.

---

## Advantages

- Prevents electric shock
- Reduces fire hazards
- Improves safety

---

## Limitations

- Older voltage-operated ELCBs may fail if proper earthing is not available.
- Less sensitive than RCCBs.
- Mostly replaced by RCCBs in modern installations.

---

# Difference Between MCB and MCCB

| MCB | MCCB |
|-----|------|
| Low current rating | High current rating |
| Used in homes | Used in industries |
| Fixed trip setting | Adjustable trip setting |
| Lower breaking capacity | Higher breaking capacity |

---

# Difference Between RCCB and ELCB

| RCCB | ELCB |
|------|------|
| Detects current imbalance | Detects earth leakage voltage (older type) |
| More reliable | Less reliable |
| Widely used today | Mostly obsolete |
| Better protection against electric shock | Limited protection |

---

# Comparison of Protective Devices

| Device | Main Purpose |
|---------|--------------|
| Protective Relay | Detects faults and trips the circuit breaker |
| Fuse | Protects against excessive current by melting |
| MCB | Protects against overload and short circuit |
| MCCB | Protects high-current industrial circuits |
| RCCB | Protects against earth leakage and electric shock |
| ELCB | Detects earth leakage (older technology) |

---

# Summary

- **Protective relays** detect faults and send trip signals to circuit breakers.
- A **fuse** melts when excessive current flows and must be replaced after operation.
- An **MCB** protects low-voltage circuits and can be reset after tripping.
- An **MCCB** is designed for higher current ratings and industrial applications.
- An **RCCB** protects against electric shock by detecting leakage current.
- An **ELCB** is an older earth leakage protection device that has largely been replaced by RCCBs in modern electrical installations.