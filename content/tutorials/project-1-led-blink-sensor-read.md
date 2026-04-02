# Project 1: LED Blink + Sensor Read

**Difficulty:** Starter | **Time:** ~30 minutes | **Skills:** `pinMode`, `digitalWrite`, `analogRead`, `delay`

---

## Before you start

### Download and install the Arduino IDE

The **Arduino IDE** (Integrated Development Environment) is the free program you use to write code and send it to your Arduino board. Think of it as a text editor that also has a "send to board" button.

**3-step install:**

1. **Download** — go to [arduino.cc/en/software](https://arduino.cc/en/software) and click the green **Download** button for your operating system (Windows, Mac, or Linux). The file is about 200 MB.
2. **Run the installer** — open the downloaded file and follow the on-screen steps. Accept all defaults. On Mac, drag the app to your Applications folder. On Linux, run the provided install script.
3. **Launch the IDE** — open "Arduino IDE" from your Applications or Start menu. You'll see a code editor with a toolbar at the top. You're ready.

> **Tip:** If you're asked to install a USB driver during setup, click Yes. The driver is what lets your computer recognize the Arduino board when you plug it in.

---

## Overview

In this first project, you'll build two circuits and write your first Arduino programs. By the end, you'll have:

- An LED that blinks on and off automatically
- A potentiometer (knob) that controls how fast it blinks

This project teaches you the fundamental loop that runs inside every Arduino program, how to control an output (the LED), and how to read an input (the sensor). Every project in this kit builds on what you learn here.

---

## Components Needed

| Component | Quantity | Notes |
|---|---|---|
| Arduino-compatible USB-C board | 1 | The main brain of your project |
| LED (any color) | 1 | Long leg = positive (anode), short leg = negative (cathode) |
| 220Ω resistor | 1 | Red-Red-Brown color bands. Protects the LED from excess current |
| Potentiometer (10kΩ) | 1 | The rotating knob — turns a voltage into a number the Arduino can read |
| Breadboard | 1 | No-solder prototyping platform |
| Jumper wires | 3 | Colors: yellow, black, orange |
| USB-C cable | 1 | For power and code upload |

> **Visual callout — LED polarity:** Hold the LED up to a light source. One leg has a slightly wider base where it meets the plastic body — that's the anode (+), the positive leg. The shorter, narrower leg is the cathode (−).

---

## Circuit Diagram

### Part A — LED Blink

```
Arduino          Breadboard / Components
--------         ---------------------------
Pin 13  ──[yellow]──  220Ω resistor (Leg A)
                       220Ω resistor (Leg B) ──── LED anode (long leg +)
                                                   LED cathode (short leg −) ──[black]── GND
```

**Text description:**
1. Run a yellow jumper wire from Arduino **Pin 13** into a breadboard row.
2. Place the **220Ω resistor** in the same row — one leg touching the yellow wire's column, the other leg in a new column.
3. Place the **LED** so its long leg (anode) shares a column with the resistor's free leg.
4. Run a black jumper wire from the LED's short leg (cathode) to the Arduino's **GND** pin. (**GND** = Ground — the negative/return connection that completes the circuit.)

> **Breadboard tip:** Holes in the same horizontal row are connected. Holes in the same vertical column are NOT connected. Think of each row as a mini connection strip.

### Part B — Add the Potentiometer

```
Arduino          Potentiometer
--------         ------------------
5V      ──[red]──    Left outer pin
GND     ──[black]──  Right outer pin
A0      ──[orange]── Middle pin (wiper)
```

Add these three connections alongside the LED circuit. The LED circuit does not change.

---

## Step-by-Step Build Instructions

### Step 1 — Identify your components (3 min)

Before wiring anything, lay all components on your desk and identify each one.

- **LED:** Plastic lens with two metal legs. Long leg = positive (+).
- **220Ω resistor:** Small cylinder with colored bands: Red–Red–Brown (plus a tolerance band).
- **Potentiometer:** The rotating knob. Three pins underneath.
- **Breadboard:** Grid of holes. Power rails run along the long edges; tie strips run in short rows across the middle.

**Checkpoints before moving on:**
- [ ] I can find the LED and resistor
- [ ] I know which LED leg is longer
- [ ] I have the breadboard and jumper wires ready

**Troubleshooting:**
- *Can't find a part?* Check the packing list card inside your kit. Small parts like resistors are often in a tiny clear bag tucked under the foam layer.
- *Both LED legs look the same length?* Hold the LED near a light. The wider shadow at the base indicates the anode (+). If still unsure, try either way — you can always flip it later.

---

### Step 2 — Wire the LED (7 min)

Follow the "Part A" diagram above exactly.

1. Push the resistor into the breadboard so both legs are in separate rows.
2. Push the LED anode (long leg) into the same row as one resistor leg.
3. Run a **yellow** jumper from Arduino Pin 13 to the resistor's other leg.
4. Run a **black** jumper from the LED cathode (short leg) to an Arduino GND pin.

> **Don't plug in the USB cable yet.**

**Checkpoints:**
- [ ] LED long leg shares a row with one end of the resistor
- [ ] Yellow wire runs from Pin 13 to the other resistor end
- [ ] Black wire runs from LED short leg to GND

**Troubleshooting:**
- *LED won't stay in the breadboard?* The legs bend easily. Gently straighten them and push straight down with even pressure.
- *Resistor colors confusing?* Use a multimeter in resistance (Ω) mode and measure across the leads — it should read approximately 220.

---

### Step 3 — Upload the Blink sketch (8 min)

Open the **Arduino IDE** (if you haven't installed it yet, see "Before you start" above). Create a new **sketch** (Arduino's word for a program) and paste this code:

```cpp
// Blink — turn the LED on pin 13 on and off once per second.

void setup() {
  pinMode(13, OUTPUT);  // Pin 13 is an output
}

void loop() {
  digitalWrite(13, HIGH);  // LED on
  delay(1000);             // Wait 1 second
  digitalWrite(13, LOW);   // LED off
  delay(1000);             // Wait 1 second
}
```

**Code explanation:**
- `void setup()` — runs once when the Arduino powers on. Here we tell pin 13 to act as an output.
- `void loop()` — runs forever, in a continuous cycle.
- `digitalWrite(13, HIGH)` — sends 5V to pin 13, turning the LED on.
- `delay(1000)` — pauses execution for 1000 milliseconds (1 second).
- `digitalWrite(13, LOW)` — removes voltage from pin 13, turning the LED off.

**Upload steps:**
1. Plug in the USB-C cable.
2. In the Arduino IDE, go to **Tools → Board** and select your board.
3. Go to **Tools → Port** and select the port that appeared when you plugged in.
4. Click the **→ Upload** button. Wait for "Done uploading."

**Checkpoints:**
- [ ] "Done uploading" shown in the IDE
- [ ] LED blinks on and off once per second

**Troubleshooting:**
- *No port shows up in Tools → Port?* Install the CH340 USB driver (link on your kit card). After installing, unplug and re-plug the USB cable.
- *Upload fails with `avrdude: stk500_recv()` error?* Try a different USB cable — many cables are charge-only and can't carry data.
- *LED is on but not blinking?* Re-open the Arduino IDE, paste the Blink sketch, and upload again. Make sure you see "Done uploading."

---

### Step 4 — Troubleshoot if it's not working (3 min)

If the LED doesn't blink, work through this checklist:

1. **LED backwards?** Flip it — polarity matters. Long leg toward Pin 13, short leg toward GND.
2. **Resistor in the right place?** It should sit between Pin 13 and the LED anode.
3. **Wrong port selected?** Go to Tools → Port and try the other option.
4. **Red error in IDE?** Copy the first line of the error into Google — it's almost always a quick fix.

---

### Step 5 — Add the potentiometer (5 min)

Wire the potentiometer according to the "Part B" diagram above:

- Left pin → **5V** (red wire)
- Right pin → **GND** (black wire)
- Middle pin (wiper) → **A0** (orange wire)

The LED circuit from Part A does not change.

**Checkpoints:**
- [ ] Potentiometer left pin to 5V (red wire)
- [ ] Potentiometer right pin to GND (black wire)
- [ ] Potentiometer middle pin to A0 (orange wire)

**Troubleshooting:**
- *Potentiometer pins don't fit into the breadboard?* Gently spread the three pins apart. They go into three consecutive columns on the breadboard.
- *Which pin is "middle"?* Hold the pot with the knob facing you. The pins point down. The center pin is the wiper — that one goes to A0.
- *LED stopped blinking after adding the pot?* A wire was bumped. Re-check the yellow wire on Pin 13 and the black wire on GND.

---

### Step 6 — Upload the sensor sketch (5 min)

```cpp
// Blink speed controlled by potentiometer on A0.

const int LED_PIN    = 13;
const int SENSOR_PIN = A0;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);  // Start Serial communication at 9600 baud
}

void loop() {
  int sensorValue = analogRead(SENSOR_PIN);  // Read knob — returns 0 to 1023

  Serial.print("Sensor value: ");
  Serial.println(sensorValue);

  digitalWrite(LED_PIN, HIGH);
  delay(sensorValue);        // Blink ON time = knob value in ms
  digitalWrite(LED_PIN, LOW);
  delay(sensorValue);        // Blink OFF time = knob value in ms
}
```

**Code explanation:**
- `analogRead(SENSOR_PIN)` — reads the voltage on pin A0 and converts it to a number from 0 (0V) to 1023 (5V).
- `delay(sensorValue)` — uses the knob reading directly as the delay. Turn the knob right → longer delay → slower blink. Turn left → shorter delay → faster blink.
- `Serial.println(sensorValue)` — sends the value to your computer so you can watch it in Serial Monitor.

**To open Serial Monitor:** The Serial Monitor is a window that shows text sent from your Arduino — like a live log. Go to **Tools → Serial Monitor** (or press Ctrl+Shift+M). Set the **baud rate** (communication speed) to **9600** — this must match the `Serial.begin(9600)` in your code.

**Checkpoints:**
- [ ] Upload succeeded
- [ ] LED blinks faster when you turn the knob one direction
- [ ] Serial Monitor shows changing values as you turn the knob

**Troubleshooting:**
- *LED blinks but speed doesn't change?* Check that the orange wire is in A0, not A1 or another pin. The pins are labeled on the board.
- *Serial Monitor shows nothing?* Verify baud rate is set to 9600 in the Serial Monitor window.

---

## What You Learned

- **`setup()` and `loop()`** — the two required functions in every Arduino sketch
- **`pinMode()`** — configure a pin as INPUT or OUTPUT
- **`digitalWrite()`** — turn a digital pin on (HIGH) or off (LOW)
- **`delay()`** — pause the program for a set number of milliseconds
- **`analogRead()`** — read a sensor value from 0 to 1023
- **Breadboard wiring** — how to connect components without soldering
- **USB driver setup** — how to get your computer to recognize the Arduino

### Challenge Extension

**Make the LED fade in and out instead of blinking.**

Pins marked with `~` on the Arduino support `analogWrite()`, which lets you set brightness from 0 (off) to 255 (full). Move the LED wire to pin 9 (it has a `~`) and try:

```cpp
void loop() {
  analogWrite(9, 128);  // 50% brightness
  delay(1000);
  analogWrite(9, 0);    // off
  delay(1000);
}
```

Then combine it with the potentiometer — use `map(analogRead(A0), 0, 1023, 0, 255)` to control brightness with the knob.
