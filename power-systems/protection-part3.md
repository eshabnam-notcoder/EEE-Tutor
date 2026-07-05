# Circuit Breakers, Overcurrent Protection, Differential Protection and Distance Protection

Protection systems use circuit breakers and protective relays together to detect faults and isolate the faulty section of a power system. Different protection schemes are used depending on the type of equipment and fault.

<img src="assets/animations/protection-schemes.svg" alt="Protection Schemes">

---

# Circuit Breakers in Protection

A **circuit breaker** is a protective switching device that interrupts current during abnormal conditions such as overloads and short circuits.

A circuit breaker receives a trip signal from a protective relay and disconnects the faulty section.

---

## Functions of a Circuit Breaker

- Interrupt fault current
- Isolate faulty equipment
- Protect generators and transformers
- Protect transmission lines
- Improve system reliability

---

## Working Principle

1. Fault occurs.
2. Current transformers (CTs) detect abnormal current.
3. Protective relay analyzes the current.
4. Relay sends a trip signal.
5. Circuit breaker opens.
6. Faulty section is isolated.

```
Fault
   │
   ▼
CT / PT
   │
   ▼
Relay
   │
Trip Signal
   │
   ▼
Circuit Breaker Opens
```

---

## Characteristics of a Good Circuit Breaker

- High breaking capacity
- Fast operation
- Reliable performance
- Low maintenance
- Safe operation
- Long service life

---

# Overcurrent Protection

**Overcurrent protection** protects electrical equipment when current exceeds the safe operating limit.

It is one of the simplest and most widely used protection methods.

---

## Causes of Overcurrent

- Short circuits
- Overloading
- Equipment failure
- Ground faults

---

## Working Principle

Current transformers continuously measure line current.

If the current exceeds the preset value:

- The relay operates.
- The circuit breaker trips.
- The faulty circuit is disconnected.

---

## Advantages

- Simple protection scheme
- Low cost
- Reliable
- Easy maintenance

---

## Limitations

- Cannot accurately locate faults.
- Less suitable for long transmission lines.
- Coordination is required between relays.

---

## Applications

- Feeders
- Distribution systems
- Industrial power systems
- Backup protection

---

# Differential Protection

**Differential protection** compares the current entering and leaving a protected equipment.

Under normal conditions, the two currents are equal.

If a fault occurs within the protected zone, the difference in current causes the relay to operate.

---

## Working Principle

```
Current In = Current Out

↓

Normal Operation

Current In ≠ Current Out

↓

Internal Fault

↓

Relay Trips
```

---

## Protected Equipment

Differential protection is commonly used for:

- Power transformers
- Generators
- Large motors
- Bus bars

---

## Advantages

- Very fast operation
- High sensitivity
- Excellent selectivity
- Detects internal faults accurately

---

## Limitations

- Higher installation cost
- Requires CTs on both sides
- More complex than overcurrent protection

---

# Distance Protection

**Distance protection** protects transmission lines by measuring the impedance between the relay location and the fault.

Since impedance is proportional to the distance of the fault, the relay can estimate how far away the fault has occurred.

---

## Working Principle

The relay continuously measures:

- Voltage
- Current

Using these values, it calculates the impedance.

```
Impedance = Voltage / Current
```

If the measured impedance falls below the preset value, the relay assumes that a fault has occurred within its protected zone and trips the circuit breaker.

---

## Protection Zones

Distance relays usually have multiple protection zones.

### Zone 1

- Protects most of the transmission line.
- Instantaneous operation.

---

### Zone 2

- Backup protection.
- Covers the remaining portion of the line and part of the next line.
- Operates with a short time delay.

---

### Zone 3

- Remote backup protection.
- Covers adjacent transmission lines.
- Operates with a longer time delay.

---

## Advantages

- Fast fault detection
- Suitable for long transmission lines
- Provides backup protection
- Less affected by changes in fault current

---

## Limitations

- More expensive
- Complex relay settings
- Requires accurate measurements

---

## Applications

- High-voltage transmission lines
- Extra-high-voltage networks
- Grid interconnections

---

# Comparison of Protection Methods

| Protection Method | Main Purpose | Common Application |
|-------------------|--------------|--------------------|
| Overcurrent Protection | Detects excessive current | Feeders and distribution systems |
| Differential Protection | Detects internal faults | Transformers, generators, bus bars |
| Distance Protection | Detects transmission line faults | High-voltage transmission lines |

---

# Difference Between Overcurrent and Differential Protection

| Overcurrent Protection | Differential Protection |
|-------------------------|--------------------------|
| Measures current magnitude | Compares incoming and outgoing current |
| Simpler protection | More accurate protection |
| Lower cost | Higher cost |
| Used for feeders | Used for transformers and generators |
| Slower for some faults | Very fast for internal faults |

---

# Difference Between Differential and Distance Protection

| Differential Protection | Distance Protection |
|--------------------------|---------------------|
| Protects equipment | Protects transmission lines |
| Uses current comparison | Uses impedance measurement |
| Detects internal faults | Detects faults based on distance |
| CTs required on both sides | Uses CTs and PTs at one end |

---

# Summary

- **Circuit breakers** interrupt fault current after receiving a trip signal from protective relays.
- **Overcurrent protection** operates when current exceeds a preset value.
- **Differential protection** compares incoming and outgoing currents to detect internal faults.
- **Distance protection** measures impedance to locate faults on transmission lines.
- These protection schemes improve the safety, reliability, and stability of modern power systems.