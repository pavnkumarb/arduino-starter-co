# Project 3: Analog Brightness Control

**Difficulty:** Beginner | **Time:** ~30 minutes | **Skills:** `analogWrite`, PWM, `map()`, `analogRead`

---

## Overview

In Projects 1 and 2 you worked entirely in the digital world — outputs were either fully **on** or fully **off**, and inputs were either **HIGH** or **LOW**. This project steps into the analog world.

You'll learn **PWM** (Pulse Width Modulation) — the technique Arduino uses to simulate voltages between 0V and 5V by switching a pin on and off very rapidly. By the end, you'll have:

- An LED that fades smoothly in and out on its own
- An upgraded sketch where turning a potentiometer knob controls the LED's brightness in real time

This is the foundation for controlling motors, dimmers, and any component that needs more than an on/off signal.

---

## Components Needed

| Component | Quantity | Notes |
|---|---|---|
| Arduino-compatible USB-C board | 1 | |
| LED (any color) | 1 | |
| 220Ω resistor | 1 | Red-Red-Brown — protects the LED |
| Potentiometer (10kΩ) | 1 | The rotating knob from Project 1 |
| Breadboard | 1 | |
| Jumper wires | ~5 | Colors: yellow, black, red, orange |
| USB-C cable | 1 | |

> **Visual callout — PWM pins:** Look at the digital pin row on your Arduino board (pins 0–13). Some pins have a **~** symbol printed next to their number — typically pins 3, 5, 6, 9, 10, and 11. Only these pins support `analogWrite()`. **Pin 13 does NOT have ~ and does NOT support PWM.** This project moves the LED to **pin 9**.

---

## Circuit Diagram

### LED on PWM Pin 9

```
Arduino          Breadboard / Components
--------         ---------------------------
Pin 9 (~) ──[yellow]──  220Ω resistor ──── LED anode (+)
                                            LED cathode (−) ──[black]── GND
```

### Add Potentiometer (Step 4)

```
Arduino          Potentiometer
--------         ------------------
5V      ──[red]──    Left outer pin
GND     ──[black]──  Right outer pin
A0      ──[orange]── Middle pin (wiper)
```

The LED circuit on pin 9 stays unchanged when you add the potentiometer.

---

## Step-by-Step Build Instructions

### Step 1 — Understand PWM (3 min)

Before wiring, take a moment to understand what PWM actually is.

A digital pin can only be `HIGH` (5V) or `LOW` (0V). To simulate voltages in between, the Arduino switches the pin on and off thousands of times per second. If it's on 50% of the time and off 50%, the average voltage is 2.5V — your eye sees it as half-brightness. This ratio is called the **duty cycle**.

`analogWrite(pin, value)` sets the duty cycle:
- `analogWrite(pin, 0)` = 0% duty cycle = LED fully off
- `analogWrite(pin, 128)` = 50% duty cycle = LED at half brightness
- `analogWrite(pin, 255)` = 100% duty cycle = LED fully on

**Checkpoints:**
- [ ] I understand that PWM pins are marked with `~` on the board
- [ ] I know `analogWrite()` accepts values from 0 to 255
- [ ] I know pin 13 does NOT support PWM — I'm using pin 9 this project

**Troubleshooting:**
- *Can't find the `~` symbols?* Look carefully at the number labels on the digital pin row. On most boards, pins 3, 5, 6, 9, 10, and 11 have a tiny tilde. If yours has no tildes, check the kit card — some boards support PWM on all digital pins.
- *Difference between `analogRead()` and `analogWrite()`?* `analogRead()` reads a voltage coming **in** (0–1023 range, used on A0–A5 pins). `analogWrite()` sends a PWM signal **out** (0–255 range, used on ~ pins). Different pins, different directions.

---

### Step 2 — Wire the LED to pin 9 (5 min)

This is nearly identical to Project 1, but the yellow wire goes to **Pin 9** instead of Pin 13.

1. Yellow wire: **Pin 9 (~)** → 220Ω resistor leg A
2. Resistor leg B → LED anode (long leg) in the same breadboard row
3. Black wire: LED cathode (short leg) → GND

> **Important:** Pin 9 must be the destination for the yellow wire, not Pin 13. Pin 13 doesn't support `analogWrite()`.

**Checkpoints:**
- [ ] Yellow wire is in Pin 9 — double-check the label on the board
- [ ] Resistor and LED connected in series after Pin 9
- [ ] Black wire from LED cathode to GND
- [ ] USB cable not connected yet

**Troubleshooting:**
- *Wire accidentally in pin 8 or 10?* Both are neighbors. Check the pin number printed on the board right next to the socket.

---

### Step 3 — Upload the fade sketch (7 min)

```cpp
// Fade LED in and out using PWM on pin 9.

const int LED_PIN = 9;  // Must be a PWM pin (~)

void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // Fade in: brightness 0 → 255
  for (int brightness = 0; brightness <= 255; brightness++) {
    analogWrite(LED_PIN, brightness);
    Serial.println(brightness);
    delay(8);  // ~2 seconds for full fade-in
  }

  // Fade out: brightness 255 → 0
  for (int brightness = 255; brightness >= 0; brightness--) {
    analogWrite(LED_PIN, brightness);
    delay(8);
  }
}
```

**Code explanation:**
- `for (int brightness = 0; brightness <= 255; brightness++)` — a loop that counts from 0 to 255, incrementing by 1 each cycle.
- `analogWrite(LED_PIN, brightness)` — sets the PWM duty cycle to the current brightness value.
- `delay(8)` — waits 8ms between steps. 256 steps × 8ms = ~2 seconds per fade direction.
- `Serial.println(brightness)` — sends the current brightness value to Serial Monitor so you can watch the count.

**Upload and test:**
1. Connect USB. Select board and port in the IDE.
2. Click **→ Upload**. Wait for "Done uploading."
3. Open **Tools → Serial Monitor** at 9600 baud.

**Checkpoints:**
- [ ] Upload succeeded
- [ ] LED fades in and out smoothly — not blinking, not jumping
- [ ] Serial Monitor shows values counting 0–255 and back

**Troubleshooting:**
- *LED blinks instead of fading?* The LED is probably wired to Pin 13 (the old position). Check that the yellow wire is in Pin 9. Pin 13 doesn't support `analogWrite()` and will behave unpredictably.
- *LED fades but never fully turns off?* A faint glow at `analogWrite(0)` is normal on some LEDs — the PWM leaks a tiny current. Add `digitalWrite(LED_PIN, LOW)` after the fade-out loop to force it fully off.
- *Serial Monitor values go too fast to read?* That's expected — the fade is quick. Click "Autoscroll" to uncheck it and pause the display.

---

### Step 4 — Add the potentiometer (5 min)

Add the potentiometer to the breadboard alongside the LED circuit. The LED wiring on Pin 9 does not change.

- Red wire: **5V** → potentiometer left outer pin
- Black wire: **GND** → potentiometer right outer pin
- Orange wire: **A0** → potentiometer middle pin (wiper)

**Checkpoints:**
- [ ] Potentiometer left pin to 5V (red wire)
- [ ] Potentiometer right pin to GND (black wire)
- [ ] Potentiometer middle pin to A0 (orange wire)
- [ ] LED circuit on Pin 9 unchanged

**Troubleshooting:**
- *LED stopped fading after adding the pot?* The fade sketch is still running — the knob doesn't affect it yet (that's the next step). If LED stopped entirely, a wire was bumped. Reseat the LED circuit wires on Pin 9 and GND.
- *Orange wire accidentally in Pin 9?* Move it to A0. The analog pins (A0–A5) are in their own labeled row on the side of the board opposite the digital pins.

---

### Step 5 — Control brightness with the knob (5 min)

```cpp
// Potentiometer on A0 controls LED brightness via PWM on pin 9.

const int LED_PIN    = 9;
const int SENSOR_PIN = A0;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(SENSOR_PIN);             // 0–1023
  int brightness  = map(sensorValue, 0, 1023, 0, 255); // Rescale to 0–255

  analogWrite(LED_PIN, brightness);

  Serial.print("Sensor: ");
  Serial.print(sensorValue);
  Serial.print("  Brightness: ");
  Serial.println(brightness);

  delay(10);
}
```

**Code explanation:**
- `analogRead(SENSOR_PIN)` — reads the potentiometer, returns 0 (full left) to 1023 (full right).
- `map(sensorValue, 0, 1023, 0, 255)` — rescales the 0–1023 range to 0–255. `map(input, fromLow, fromHigh, toLow, toHigh)` is a built-in Arduino function for range conversion.
- `analogWrite(LED_PIN, brightness)` — sets the LED brightness to the mapped value.
- The LED now tracks the knob in real time.

**Checkpoints:**
- [ ] Upload succeeded
- [ ] Turning knob right increases brightness
- [ ] Turning knob left decreases brightness, down to off
- [ ] Serial Monitor shows sensor and brightness values changing together

**Troubleshooting:**
- *Brightness only changes in one direction?* Turn the knob the other way, or swap the red and black wires on the potentiometer's outer pins to reverse the direction.
- *LED doesn't fully turn off at the minimum?* `map()` with `sensorValue = 0` gives exactly 0. If the LED still glows faintly, add `if (brightness == 0) digitalWrite(LED_PIN, LOW);` after `analogWrite()`.
- *Brightness jumps around erratically?* Add a small smoothing: take 3 readings and average them before mapping, or increase the `delay(10)` to `delay(30)`.

---

## What You Learned

- **PWM (Pulse Width Modulation)** — how to simulate analog output on a digital pin
- **`analogWrite(pin, 0–255)`** — set a PWM duty cycle to control brightness, motor speed, etc.
- **`map(value, fromLow, fromHigh, toLow, toHigh)`** — rescale a number from one range to another
- **PWM-capable pins** — only pins marked `~` support `analogWrite()`
- **Combining inputs and outputs** — using a sensor reading to drive an output in real time

### Challenge Extension

**Make the LED pulse like a heartbeat instead of a smooth fade.**

A heartbeat pattern does two quick pulses, then a pause. Try this in `loop()`:

```cpp
// Two quick pulses
analogWrite(LED_PIN, 255); delay(100);
analogWrite(LED_PIN, 0);   delay(100);
analogWrite(LED_PIN, 255); delay(100);
analogWrite(LED_PIN, 0);   delay(100);

// Pause
delay(700);
```

Then combine it with the potentiometer: use the knob to control the pulse **rate** (how long the pause is) instead of the brightness.
