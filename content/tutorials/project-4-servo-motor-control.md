# Project 4: Servo Motor Control

**Difficulty:** Beginner | **Time:** ~35 minutes | **Skills:** `Servo` library, `myServo.write()`, `map()`, electromechanics

---

## Overview

This project introduces your first moving machine. A **servo motor** is different from a regular motor: instead of spinning continuously, it rotates to a specific angle and holds there. Give it the number 90 and it points straight up. Give it 0 and it points left. Give it 180 and it points right.

By the end of this project, you'll have:

- A servo that sweeps back and forth from 0° to 180° automatically
- An upgraded sketch where a potentiometer knob controls the servo's exact angle in real time

Servos are used in robots, RC cars, camera gimbals, and anything that needs precise, controlled movement.

---

## Components Needed

| Component | Quantity | Notes |
|---|---|---|
| Arduino-compatible USB-C board | 1 | |
| SG90 servo motor | 1 | Includes a small connector, plastic horns, and a screw |
| Potentiometer (10kΩ) | 1 | Same knob as Projects 1 and 3 |
| Breadboard | 1 | |
| Jumper wires | ~6 | Colors: red, black, orange, plus wires for breadboard rails |
| USB-C cable | 1 | |

> **Visual callout — servo wires:** The SG90 has three colored wires coming out of a small plastic connector:
> - **Brown** = GND (ground)
> - **Red** = 5V (power)
> - **Orange** = Signal (the wire that carries the position command)
>
> Some servo brands use black/red/white or black/red/yellow. If yours differs, red is almost always power, and the thinner-gauge wire is signal.

> **Visual callout — servo horn:** The white plastic arm on top of the servo can be swapped for different shapes (included in the small bag with your kit). It attaches to a splined shaft — it can only seat cleanly one way. The small screw in the bag locks it in place.

---

## Circuit Diagram

### Servo Motor Connection

```
Arduino / Breadboard rails     Servo
----------------------------   ------
5V (+ rail)  ──[red]──         Red wire (power)
GND (− rail) ──[black]──       Brown wire (GND)
Pin 9        ──[orange]──      Orange wire (signal)
```

Use the breadboard's power rails to distribute 5V and GND cleanly.

**Full wiring:**
1. Red wire: Arduino **5V** → breadboard **+ rail**
2. Black wire: Arduino **GND** → breadboard **− rail**
3. Servo **red wire** → breadboard **+ rail**
4. Servo **brown wire** → breadboard **− rail**
5. Servo **orange wire** → Arduino **Pin 9**

### Add Potentiometer (Step 4)

```
Arduino / rails    Potentiometer
-------------------  -----------------
+ rail  ──[red]──    Left outer pin
− rail  ──[black]──  Right outer pin
A0      ──[orange]── Middle pin (wiper)
```

---

## Step-by-Step Build Instructions

### Step 1 — Meet the servo (3 min)

Examine the SG90 servo before wiring anything.

- The **body** is the main motor housing. Don't force the shaft by hand.
- The **horn** (white plastic arm) is on top. It can be removed and reattached.
- The **three-wire connector** plugs into the breadboard via individual jumper wires.
- The shaft can rotate from **0° to 180°** — approximately a half-circle. Forcing it past those limits will cause buzzing and potential damage.

**Checkpoints:**
- [ ] I can identify the three servo wires: brown = GND, red = 5V, orange = signal
- [ ] I understand the servo moves to a specific angle, not a continuous speed
- [ ] Potentiometer and jumper wires are ready

**Troubleshooting:**
- *Servo wire colors are different?* The middle wire of the three is almost always 5V (red), and the wire with the thinnest gauge is usually signal. When in doubt, the connector housing sometimes has GND–5V–Signal printed or embossed.
- *Servo horn fell off?* Press it back on straight — it's designed to be removable. If loose, use the small screw from the kit bag.
- *Servo buzzes when idle?* That's normal — the servo constantly makes tiny corrections to hold its position. It stops when the signal is stable.

---

### Step 2 — Wire the servo (7 min)

Use the breadboard's power rails to provide clean, distributed power.

1. Red wire: Arduino **5V** → breadboard **+ rail** (the row marked with +)
2. Black wire: Arduino **GND** → breadboard **− rail** (the row marked with −)
3. Servo **red wire** → breadboard **+ rail** (same row as step 1)
4. Servo **brown wire** → breadboard **− rail** (same row as step 2)
5. Servo **orange signal wire** → Arduino **Pin 9**

> Use individual jumper wires to bridge from the servo's connector to the breadboard rows and Arduino pins.

**Checkpoints:**
- [ ] Breadboard + rail connected to Arduino 5V
- [ ] Breadboard − rail connected to Arduino GND
- [ ] Servo red wire on + rail
- [ ] Servo brown wire on − rail
- [ ] Servo orange wire in Pin 9

**Troubleshooting:**
- *Servo twitches as soon as I plug in USB?* That's expected — on power-up before any code runs, the servo may twitch to a default position. This stops once the sketch starts running.
- *Not sure which rail is + and which is −?* The breadboard's outer long rows have markings: **+** (red line) and **−** (blue line) printed on the side.

---

### Step 3 — Upload the sweep sketch (8 min)

Before uploading, check that the **Servo library** is installed. A *library* is a package of pre-written code that handles a complex task for you — in this case, generating the precise PWM signal a servo needs. In the Arduino IDE: **Sketch → Include Library → Manage Libraries**, search "Servo", and install **Servo** by Michael Margolis / Arduino.

```cpp
// Sweep a servo from 0° to 180° and back continuously.
#include <Servo.h>

Servo myServo;

const int SERVO_PIN = 9;

void setup() {
  myServo.attach(SERVO_PIN);  // Tell the library which pin the signal wire is on
  Serial.begin(9600);
  Serial.println("Servo sweep started");
}

void loop() {
  // Sweep from 0 to 180 degrees
  for (int angle = 0; angle <= 180; angle++) {
    myServo.write(angle);      // Move servo to this angle
    Serial.print("Angle: ");
    Serial.println(angle);
    delay(15);  // Give the servo 15ms to reach each step — ~2.7 seconds total
  }

  // Sweep back from 180 to 0
  for (int angle = 180; angle >= 0; angle--) {
    myServo.write(angle);
    delay(15);
  }
}
```

**Code explanation:**
- `#include <Servo.h>` — loads the Servo library, which handles the PWM timing for you.
- `Servo myServo` — creates a servo object named `myServo`.
- `myServo.attach(SERVO_PIN)` — connects the library to Pin 9.
- `myServo.write(angle)` — commands the servo to move to a specific angle (0–180).
- `delay(15)` — gives the servo physical time to reach each step. Too fast and it can't keep up.

**Upload and test:**
1. Connect USB. Select board and port.
2. Click **→ Upload**. Wait for "Done uploading."
3. Watch the servo horn sweep slowly from one side to the other and back.

**Checkpoints:**
- [ ] Sketch compiled and uploaded without errors
- [ ] Servo horn sweeps left and right smoothly
- [ ] Servo stays within 0°–180° without buzzing loudly at the limits

**Troubleshooting:**
- *`Servo.h: No such file or directory` compile error?* The library isn't installed. Go to Sketch → Include Library → Manage Libraries, search "Servo", and install it.
- *Servo hums loudly at 0° and 180°?* It's hitting its mechanical endpoints. Change the loop range from `0 to 180` to `10 to 170` to stay inside the safe travel range.
- *Servo only twitches slightly?* Add `myServo.write(90); delay(500);` in `setup()` to center it first, then let the sweep loop run.

---

### Step 4 — Add the potentiometer (7 min)

Wire the potentiometer the same way as Projects 1 and 3:

- Red wire: breadboard **+ rail** → potentiometer left outer pin
- Black wire: breadboard **− rail** → potentiometer right outer pin
- Orange wire: potentiometer middle pin → **A0**

The servo circuit on Pin 9 does not change.

Then upload this sketch:

```cpp
// Potentiometer on A0 controls servo angle.
#include <Servo.h>

Servo myServo;

const int SERVO_PIN  = 9;
const int SENSOR_PIN = A0;

void setup() {
  myServo.attach(SERVO_PIN);
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(SENSOR_PIN);              // 0–1023
  int angle       = map(sensorValue, 0, 1023, 0, 180);  // Rescale to 0°–180°

  myServo.write(angle);

  Serial.print("Sensor: ");
  Serial.print(sensorValue);
  Serial.print("  Angle: ");
  Serial.println(angle);

  delay(15);  // Give servo time to reach position before next read
}
```

**Code explanation:**
- `map(sensorValue, 0, 1023, 0, 180)` — converts the 0–1023 potentiometer range to the 0–180 degree servo range.
- `delay(15)` — critical: give the servo time to physically reach the target angle before the next command arrives. Without this, rapid updates can make the servo stutter.

**Checkpoints:**
- [ ] Potentiometer wired to + rail, − rail, and A0
- [ ] Sketch uploaded successfully
- [ ] Servo angle tracks the knob — full left → ~0°, full right → ~180°

**Troubleshooting:**
- *Servo jumps to random positions when barely touching the knob?* Add a deadband: only call `myServo.write()` when the new angle differs from the previous by more than 2°. Store the last angle in a variable and compare.
- *Servo only moves to a narrow range (e.g., 40°–80°)?* Your potentiometer may not reach the full 0V–5V range. Open Serial Monitor and check: does `sensorValue` reach near 0 and near 1023? If not, swap the red and black wires on the outer pot pins.
- *Arduino resets when the servo moves fast?* Rapid servo movements draw extra current. Increase `delay(15)` to `delay(30)`, or power the servo from an external 5V supply (4× AA batteries) instead of the Arduino's 5V pin.

---

## What You Learned

- **Servo motor** — rotates to a specific angle (0°–180°) and holds position
- **`#include <Servo.h>`** — how to use an external library to simplify hardware control
- **`myServo.attach(pin)`** — connect a library object to a physical pin
- **`myServo.write(angle)`** — command a servo to move to a specific angle
- **Electromechanical systems** — combining electronics (Arduino, sensor) with mechanics (motor, horn) into one working system
- **Timing considerations** — why `delay()` matters when controlling physical actuators

### Challenge Extension

**Build an analog gauge.** Attach a small piece of cardboard or folded paper to the servo horn to make a pointer. Draw a scale (0–100%) on a piece of paper and mount it behind the servo. Use the potentiometer to set the gauge reading.

Want more? Wire the potentiometer across the breadboard power rails and display the live reading on the servo (angle = percentage × 1.8). You've just built a physical dial — the same principle as a classic speedometer.
