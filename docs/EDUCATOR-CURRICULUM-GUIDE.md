# Arduino Starter Co — Educator Curriculum Guide
### *Teach Electronics & Coding with Confidence — No Experience Required*

> **Version 1.0** | Created 2026-04-02 | Owned by UX Researcher
> Related issues: [ARD-107](/ARD/issues/ARD-107) · [ARD-81](/ARD/issues/ARD-81) · [ARD-26](/ARD/issues/ARD-26)

---

## Welcome, Educator

This guide gives you everything you need to run a structured 5-week Arduino electronics course using the **Arduino Starter Co Kit** — even if you have never touched an Arduino before.

Each week builds on the last. Students progress from blinking a single LED to building a full display-driven project. By Week 5, every student will have created five working circuits and will have the vocabulary, habits, and confidence to keep building on their own.

**No prior electronics or coding experience is required to teach this course.**

---

## How to Use This Guide

| Section | What It Contains |
|---|---|
| **Weekly Units (Weeks 1–5)** | Learning objectives, pre-class reading, step-by-step project, discussion questions, assessment, extension challenge |
| **Component Reference Sheet** | Plain-language descriptions of every component in the kit |
| **Classroom Troubleshooting Guide** | The 10 most common issues and how to fix them |
| **PDF Layout Brief** | Formatting notes for the UI Designer |

**Time per week:** ~90 minutes (one double period or two 45-min classes)
- 10 min — warm-up / pre-class reading review
- 15 min — concept introduction
- 45 min — hands-on project build
- 15 min — debrief, discussion questions, assessment
- 5 min — extension challenge introduction

---

## STEM Standards Alignment

This curriculum is designed to align with:

- **NGSS (Next Generation Science Standards)** — Engineering Design (ETS1), Physical Science (PS)
- **CSTA K–12 CS Standards** — Computing Systems (CS), Algorithms & Programming (AP)
- **Common Core Math** — Measurement & Data, ratios and proportional relationships
- **ISTE Standards** — Innovative Designer (4), Computational Thinker (5)

Specific standard callouts appear in each week's learning objectives.

---

---

# WEEK 1 — Introduction to Electronics
## Project: Blink an LED

---

### Learning Objectives

By the end of Week 1, students will be able to:

1. Identify the main components in the Arduino Starter Co kit (board, breadboard, LEDs, resistors, jumper wires) and describe the purpose of each. *(NGSS: ETS1.A; CSTA CS.2)*
2. Define the following vocabulary: **circuit**, **current**, **voltage**, **resistance**, **pin**, **digital signal**, **HIGH/LOW**. *(NGSS: PS3.A)*
3. Assemble a simple LED circuit on a breadboard following a wiring diagram. *(NGSS: ETS1.B)*
4. Upload a pre-written Arduino sketch to a board and observe the result. *(CSTA AP.10)*
5. Modify a single variable in code (the blink interval) and predict the effect before running it. *(CSTA AP.11)*

> **STEM Connection:** Circuits power everything from pacemakers to smartphones. Understanding how current flows is the foundation of all electronics.

---

### Pre-Class Reading (1 Page) — Distribute Before Class

**What Is Electricity? A Crash Course for Makers**

Electricity is the flow of tiny charged particles called **electrons** through a material. When electrons flow through a wire, we call that flow **current**. Current is pushed around a circuit by **voltage** — think of voltage as water pressure in a hose. If the hose is narrow (high **resistance**), less water gets through. Electricity works the same way.

A **circuit** is a complete loop that electricity can travel around. Open the loop anywhere — snap a wire out — and everything stops. That's why switches work: they break the loop.

Your **Arduino board** is a small computer with pins that can send electricity out (OUTPUT) or read electricity in (INPUT). When a pin is set HIGH, it sends 5 volts out. When it's set LOW, it sends 0 volts. That's it. Everything you build in this course is built on that simple idea.

An **LED** (Light Emitting Diode) lights up when current flows through it in the right direction. It has two legs: the longer leg (**anode**, +) connects to power; the shorter leg (**cathode**, −) connects to ground. A **resistor** sits between the Arduino pin and the LED to limit current — without it, too much electricity flows and the LED burns out.

*Key terms to remember: circuit, current, voltage, resistance, pin, HIGH, LOW, LED, anode, cathode, resistor.*

---

### Step-by-Step Project Instructions

**What You'll Build:** An LED that blinks on and off every second.

**Materials (per student or pair):**
- Arduino board + USB cable
- Breadboard
- 1× red LED
- 1× 220Ω resistor (red-red-brown-gold)
- 2× jumper wires (1 red, 1 black)

---

**Step 1 — Orient the breadboard**

Look at your breadboard. You'll see two long columns on each side marked **+** and **−** (these are the power rails) and many short rows of 5 holes in the middle. Components plugged into the same row are electrically connected.

> **Teacher tip:** Hold up a breadboard and trace the connections with your finger. Students often assume everything in the same column is connected — correct this early.

---

**Step 2 — Place the LED**

Push the LED into the breadboard so its two legs are in different rows. The **longer leg (anode)** goes in row 10, and the **shorter leg (cathode)** goes in row 9. (Exact rows don't matter — just keep the legs in separate rows.)

> **Common mistake:** Students sometimes bend both legs into the same row. If the LED doesn't light up, check this first.

---

**Step 3 — Place the resistor**

Push the resistor into the breadboard so one leg is in the same row as the LED's anode (row 10) and the other leg is in row 12. Resistors have no polarity — either leg can go in either hole.

---

**Step 4 — Connect jumper wires**

- **Red wire:** From Arduino pin **13** to the row where the resistor's free leg sits (row 12).
- **Black wire:** From Arduino **GND** to the row where the LED's cathode sits (row 9).

> **Teacher tip:** Encourage students to use red wires for power and black wires for ground — always. This color discipline saves enormous debugging time later.

---

**Step 5 — Connect the USB cable**

Plug the USB cable from the Arduino board to your computer. A green or orange LED on the Arduino board should light up — that means it's powered.

---

**Step 6 — Open the Arduino IDE and upload the sketch**

Open the Arduino IDE on your computer. Under **File → Examples → 01.Basics**, open **Blink**. You'll see this code:

```cpp
void setup() {
  pinMode(13, OUTPUT);  // Set pin 13 as an output
}

void loop() {
  digitalWrite(13, HIGH);  // Turn LED on
  delay(1000);             // Wait 1 second
  digitalWrite(13, LOW);   // Turn LED off
  delay(1000);             // Wait 1 second
}
```

Click the **Upload** button (the right-arrow icon). Wait for "Done uploading" in the status bar. Your LED should now blink once per second.

> **If nothing happens:** Check the board selection under **Tools → Board** (should be "Arduino Uno") and **Tools → Port** (should show a COM or /dev/cu port).

---

**Step 7 — Experiment**

Change both `delay(1000)` values to `delay(250)`. Upload again. Ask students: *What happened? Why?* Then change to `delay(2000)` and repeat.

---

### Discussion Questions

1. What do you think happens if you remove the resistor and connect the LED directly to pin 13 and GND? Why would that be a problem? *(Expected: the LED would receive too much current and could burn out — the resistor protects it)*
2. The code has a `setup()` function and a `loop()` function. Based on what you observed, what do you think the difference is between them?
3. Where else in your daily life do you think microcontrollers (small computers like Arduino) are used? Name three examples.

---

### Assessment (3 Questions)

1. **Fill in the blank:** A __________ is a complete loop through which electricity can flow. (Answer: *circuit*)
2. **Short answer:** Your LED is not lighting up. You check the code and it looks correct. What are two physical things you could check on the breadboard? (Sample answers: *Are the LED legs in separate rows? Is the LED in the right direction — long leg to power? Is the resistor connected? Are the jumper wires seated fully?*)
3. **Prediction:** You change `delay(1000)` to `delay(500)` in both places. Describe what you expect to happen before you upload. (Answer: *The LED will blink twice as fast — on for 0.5 seconds, off for 0.5 seconds*)

---

### Extension Challenge

Modify the code so the LED blinks three fast times, pauses for 2 seconds, then repeats. This is Morse code "S" (three short). Hint: you'll need more `digitalWrite` and `delay` lines.

*Advanced extension:* Can you make it blink "SOS" in Morse code? (S = 3 short, O = 3 long)

---

---

# WEEK 2 — Digital Inputs
## Project: Button + LED (Push to Light)

---

### Learning Objectives

By the end of Week 2, students will be able to:

1. Distinguish between **digital input** and **digital output** and give an example of each. *(CSTA CS.2, AP.10)*
2. Wire a pushbutton to an Arduino using a **pull-down resistor** and explain why the resistor is needed. *(NGSS: ETS1.B)*
3. Read a digital input value in code using `digitalRead()` and use an `if/else` statement to respond to it. *(CSTA AP.12)*
4. Debug a circuit by systematically checking wiring, power, and code. *(NGSS: ETS1.C)*

> **STEM Connection:** Every button, switch, and touchscreen is a digital input. When you tap your phone, a microcontroller reads that input and decides what to do — exactly what you'll build today.

---

### Pre-Class Reading (1 Page) — Distribute Before Class

**How Does a Button Work?**

A button is simply a switch — it either connects two points in a circuit or it doesn't. When you press it, electricity can flow. When you release it, the circuit opens.

But there's a problem: when the button is open (not pressed), the Arduino pin isn't connected to anything. A pin that's "floating" will pick up random electrical noise from the air and give you garbage readings — sometimes HIGH, sometimes LOW, even when you're not touching the button.

The fix is a **pull-down resistor**. This connects the input pin to **GND** through a large resistor (10kΩ). When the button isn't pressed, the pin is gently "pulled" to 0V (LOW). When you press the button, 5V overpowers the resistor and the pin reads HIGH. Now the Arduino always gets a clean, reliable signal.

In code, we use `digitalRead(pin)` to check the button state. It returns either `HIGH` (button pressed) or `LOW` (button not pressed). We then use an `if` statement to decide what to do:

```cpp
if (digitalRead(buttonPin) == HIGH) {
  // do something when pressed
} else {
  // do something when not pressed
}
```

*Key terms to remember: digital input, pull-down resistor, digitalRead, if/else, floating pin.*

---

### Step-by-Step Project Instructions

**What You'll Build:** An LED that lights up only when you hold down a button.

**Materials (per student or pair):**
- Arduino board + USB cable
- Breadboard
- 1× red LED
- 1× pushbutton (tactile switch)
- 1× 220Ω resistor (for LED)
- 1× 10kΩ resistor (brown-black-orange-gold, for pull-down)
- 4× jumper wires

---

**Step 1 — Place the button**

Push the button across the center gap of the breadboard (the gap separates the two sides). Each pair of legs on the same side is connected when the button is pressed. Position so legs span rows 5–7.

---

**Step 2 — Wire the button**

- **Red wire:** From Arduino **5V** pin to one leg of the button (row 5, left side).
- **Wire:** From the other leg of the button (row 5, right side) to Arduino **pin 2**.
- **10kΩ resistor:** From row 5 (right side, same row as pin 2 wire) to the **GND** rail.

---

**Step 3 — Wire the LED (same as Week 1)**

Place the LED in rows 12–13. Red wire from Arduino **pin 13** → 220Ω resistor → LED anode (row 13). Black wire from LED cathode (row 12) to **GND**.

---

**Step 4 — Upload the code**

```cpp
const int buttonPin = 2;  // Button is on pin 2
const int ledPin = 13;    // LED is on pin 13

void setup() {
  pinMode(buttonPin, INPUT);   // Pin 2 reads input
  pinMode(ledPin, OUTPUT);     // Pin 13 sends output
}

void loop() {
  int buttonState = digitalRead(buttonPin);  // Read button

  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);  // Button pressed: LED on
  } else {
    digitalWrite(ledPin, LOW);   // Button released: LED off
  }
}
```

Hold the button — the LED should light up. Release — it should turn off.

---

**Step 5 — Toggle mode (modification)**

Introduce the concept of **state**. Ask students to modify the code so pressing the button *toggles* the LED (press once to turn on, press again to turn off). This requires tracking whether the LED is currently on or off — a variable that persists between loops.

Provide the toggle scaffold to advanced students:

```cpp
bool ledState = false;
bool lastButtonState = LOW;
```

---

### Discussion Questions

1. Why can't we just connect the button pin directly to GND when the button isn't pressed? Why use a resistor instead of a wire?
2. In the toggle version, why do we need to track `lastButtonState` as well as `buttonState`? What problem does it solve?
3. Think of a real product (anything from a microwave to a car door lock). Can you describe its inputs and outputs in the same way we described the button and LED?

---

### Assessment (3 Questions)

1. **Multiple choice:** Which function reads the state of a digital input pin in Arduino? (a) `analogWrite()` (b) `digitalRead()` (c) `pinMode()` (d) `delay()` — Answer: *b*
2. **Short answer:** Explain in one sentence why a pull-down resistor is needed when wiring a button. (Answer: *Without it, the input pin "floats" and picks up random noise, giving unreliable readings when the button is not pressed.*)
3. **Debugging scenario:** A student wired the button circuit correctly but the LED stays on even when the button isn't pressed. What is the most likely cause? (Answer: *The pull-down resistor is missing or not connected correctly — the pin is floating HIGH.*)

---

### Extension Challenge

Wire a second LED (green) so that:
- The red LED is ON when the button is pressed.
- The green LED is ON when the button is NOT pressed.

Only one LED should be on at any time.

*Advanced extension:* Wire two buttons. Red LED on with button 1, green LED on with button 2, both off when neither is pressed, both on when both are pressed.

---

---

# WEEK 3 — Analog Signals
## Project: Potentiometer + LED (Brightness Control)

---

### Learning Objectives

By the end of Week 3, students will be able to:

1. Explain the difference between **digital signals** (on/off) and **analog signals** (a range of values). *(NGSS: PS3.A; CSTA CS.2)*
2. Read an analog input value using `analogRead()` and interpret the 0–1023 value range. *(CSTA AP.10)*
3. Use `analogWrite()` and **PWM (Pulse Width Modulation)** to output a variable voltage to an LED. *(NGSS: ETS1.B)*
4. Use the `map()` function to convert values between ranges. *(Common Core Math: ratios and proportional relationships)*
5. Open the **Serial Monitor** to observe data in real time and use it as a debugging tool. *(CSTA AP.17)*

> **STEM Connection:** Analog signals are everywhere — sound, light, temperature, and movement are all analog. Sensors that measure these things output a range of values, and microcontrollers use analog-to-digital conversion to make sense of them.

---

### Pre-Class Reading (1 Page) — Distribute Before Class

**Analog vs. Digital: What's the Difference?**

Last week, everything was binary: HIGH or LOW, on or off. But the real world isn't binary. A dimmer switch doesn't just have "bright" and "dark" — it has every level in between. A thermometer doesn't just read "hot" or "cold." This is **analog**: a continuous range of values.

A **potentiometer** (often called a "pot" or "knob") is a variable resistor. As you turn it, its resistance changes from 0Ω to 10,000Ω. The Arduino reads this as a voltage between 0V and 5V on an **analog input** pin, converting it to a number from **0 to 1023** (because the Arduino uses a 10-bit analog-to-digital converter: 2¹⁰ = 1024 steps).

To control LED brightness, we use **PWM — Pulse Width Modulation**. The Arduino can't truly output a variable voltage from a digital pin. Instead, it very rapidly switches the pin on and off. If it's on 50% of the time, the LED appears half as bright. The percentage of time it's on is the **duty cycle**. PWM pins on Arduino are marked with a `~` symbol (pins 3, 5, 6, 9, 10, 11). `analogWrite()` sets the duty cycle using values from **0 to 255**.

The `map()` function rescales values: `map(value, 0, 1023, 0, 255)` converts the potentiometer range to the PWM range.

*Key terms to remember: analog, digital, potentiometer, analogRead, analogWrite, PWM, duty cycle, Serial Monitor, map().*

---

### Step-by-Step Project Instructions

**What You'll Build:** A knob that controls LED brightness in real time.

**Materials (per student or pair):**
- Arduino board + USB cable
- Breadboard
- 1× potentiometer (10kΩ)
- 1× yellow LED
- 1× 220Ω resistor
- 5× jumper wires

---

**Step 1 — Place the potentiometer**

The potentiometer has three legs. Place it across the breadboard center so all three legs are in separate rows (rows 6, 7, 8). The middle leg is the **wiper** (output); the outer two legs are the ends of the resistor.

---

**Step 2 — Wire the potentiometer**

- **Red wire:** From Arduino **5V** to one outer leg of the pot (row 6).
- **Black wire:** From the other outer leg (row 8) to **GND**.
- **Wire:** From the middle leg (row 7) to Arduino **analog pin A0**.

---

**Step 3 — Wire the LED**

Place LED in rows 12–13. Wire: Arduino **pin 9** (PWM, marked ~) → 220Ω resistor → LED anode. LED cathode → GND.

> **Important:** The LED must be on a PWM pin. If it's on pin 13 (not PWM), brightness control won't work — it will only be fully on or off.

---

**Step 4 — Upload the code**

```cpp
const int potPin = A0;   // Potentiometer on analog pin A0
const int ledPin = 9;    // LED on PWM pin 9

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);    // Start Serial Monitor at 9600 baud
}

void loop() {
  int potValue = analogRead(potPin);        // Read 0–1023
  int brightness = map(potValue, 0, 1023, 0, 255);  // Remap to 0–255
  analogWrite(ledPin, brightness);          // Set LED brightness

  Serial.print("Pot: ");
  Serial.print(potValue);
  Serial.print("  Brightness: ");
  Serial.println(brightness);

  delay(50);  // Small delay to stabilize readings
}
```

Upload and open **Serial Monitor** (Tools → Serial Monitor, 9600 baud). Slowly turn the knob and watch the numbers change. The LED should smoothly dim and brighten.

---

### Discussion Questions

1. The potentiometer reading goes from 0 to 1023, but `analogWrite()` only accepts 0 to 255. Why do you think these two ranges are different?
2. Look at the Serial Monitor output. Is the mapping perfectly linear (does the brightness number always go up at the same rate as the pot number)? Should it be?
3. Think of a consumer product that uses a knob or slider to control something continuously (not just on/off). Describe how it might use the same potentiometer + microcontroller concept.

---

### Assessment (3 Questions)

1. **Fill in the blank:** PWM stands for __________ __________ __________. Pins that support PWM on the Arduino Uno are marked with a __________ symbol. (Answer: *Pulse Width Modulation; ~*)
2. **Short answer:** What range of values does `analogRead()` return, and why that specific range? (Answer: *0–1023, because the Arduino uses a 10-bit analog-to-digital converter, and 2¹⁰ = 1024 possible values.*)
3. **Code reading:** The `map()` function is called as `map(potValue, 0, 1023, 0, 255)`. If `potValue` is 512, what will the function return? Show your reasoning. (Answer: *Approximately 127, because 512/1023 ≈ 0.5, and 0.5 × 255 ≈ 127*)

---

### Extension Challenge

Use the Serial Monitor values to answer: What is the minimum `potValue` reading before the LED visibly turns on? (This is the LED's **forward voltage threshold**.)

*Advanced extension:* Wire a second LED on pin 10 (PWM). When the knob is turned to the left, the red LED brightens; when turned to the right, the green LED brightens. The two LEDs should be inversely proportional in brightness. Hint: use `map()` twice with reversed ranges.

---

---

# WEEK 4 — Actuators
## Project: Servo Motor Control

---

### Learning Objectives

By the end of Week 4, students will be able to:

1. Distinguish between **sensors** (inputs) and **actuators** (outputs) and give three examples of each. *(NGSS: ETS1.A; CSTA CS.2)*
2. Explain how a **servo motor** differs from a regular DC motor and describe its use in robotics and mechanical systems. *(NGSS: PS2.B)*
3. Import and use an **Arduino library** (`Servo.h`) to control motor position. *(CSTA AP.13)*
4. Map potentiometer input to servo position using `map()` and create a closed-loop control system. *(NGSS: ETS1.B; Common Core Math)*
5. Identify and avoid common wiring errors specific to motors (power draw, shared GND). *(NGSS: ETS1.C)*

> **STEM Connection:** Servo motors are in robot arms, drone stabilizers, camera gimbals, and car steering systems. The concept of reading a sensor and commanding an actuator is the heart of all robotics.

---

### Pre-Class Reading (1 Page) — Distribute Before Class

**Motors: Making Things Move**

So far, you've controlled electricity (LED brightness, button inputs). This week, you're controlling **movement**.

A **servo motor** is a special kind of motor that moves to a specific angle and holds it. Unlike a regular motor that spins continuously, a servo rotates to a position — say, 90° — and stays there until told to move. That precision makes servos ideal for robotics, automated mechanisms, and anything that needs to move to a specific location.

Servos have three wires: **power (red)**, **ground (brown or black)**, and **signal (orange or yellow)**. The signal wire receives pulses of electricity — the width of each pulse tells the servo which angle to move to. This is similar to PWM, but the pulse frequency is lower and the timing is more precise.

In Arduino, we use the `Servo.h` library (a set of pre-written code functions) so we don't have to manage the pulse timing ourselves. We just write `myServo.write(90)` to move to 90°.

This week, you'll combine the potentiometer from Week 3 with a servo: turn the knob, and the servo arm follows. This is a simple version of the same principle used in robot arm remote controls.

*Key terms to remember: actuator, sensor, servo motor, library, Servo.h, servo.write(), closed-loop control.*

---

### Step-by-Step Project Instructions

**What You'll Build:** A servo motor that mirrors the position of a potentiometer knob in real time.

**Materials (per student or pair):**
- Arduino board + USB cable
- Breadboard
- 1× servo motor (SG90 or equivalent)
- 1× potentiometer (10kΩ)
- Jumper wires

> **Teacher note:** Servos draw more current than LEDs. Power the servo from the Arduino 5V pin for the SG90 (low-torque). Do not connect larger servos to the Arduino 5V pin — they need external power.

---

**Step 1 — Connect the servo**

The servo has a 3-pin connector. Use jumper wires to connect:
- **Brown/Black wire** → Arduino **GND**
- **Red wire** → Arduino **5V**
- **Orange/Yellow wire** → Arduino **pin 9** (PWM)

> **Important:** Always connect the servo's GND before the power wire. Always share the GND with the Arduino — a floating ground causes erratic behavior.

---

**Step 2 — Wire the potentiometer (same as Week 3)**

- Outer legs → 5V and GND
- Middle leg (wiper) → Analog pin **A0**

---

**Step 3 — Upload the code**

```cpp
#include <Servo.h>       // Import the Servo library

Servo myServo;           // Create a Servo object
const int potPin = A0;   // Potentiometer on A0
const int servoPin = 9;  // Servo signal on pin 9

void setup() {
  myServo.attach(servoPin);  // Tell library which pin controls the servo
  Serial.begin(9600);
}

void loop() {
  int potValue = analogRead(potPin);             // Read 0–1023
  int angle = map(potValue, 0, 1023, 0, 180);   // Map to 0–180°
  myServo.write(angle);                          // Move servo to angle

  Serial.print("Angle: ");
  Serial.println(angle);

  delay(15);  // Give servo time to reach position
}
```

Upload and slowly turn the knob. The servo arm should sweep from 0° to 180° as you turn the knob.

---

**Step 4 — Observe and refine**

Ask students to turn the knob quickly. What happens? (The servo may struggle or buzz if moved too fast.) What does `delay(15)` do, and what happens if you remove it or increase it?

---

### Discussion Questions

1. The servo moves to angles between 0° and 180°. Why is 180° the limit — why can't it rotate a full 360°?
2. When you turn the potentiometer very quickly, the servo might buzz or twitch. What do you think is happening, and how might you fix it in code?
3. Name a real product where a human control (like a joystick or wheel) directly controls a motor position. How is the product similar to what you built today?

---

### Assessment (3 Questions)

1. **Vocabulary:** What is the difference between a *sensor* and an *actuator*? Give one example of each from today's project. (Answer: *A sensor reads input from the physical world (potentiometer measures knob position). An actuator produces a physical effect in response to a signal (servo motor moves to an angle).*)
2. **Code reading:** In the line `int angle = map(potValue, 0, 1023, 0, 180)`, what angle would be produced if `potValue` is 0? If it is 1023? (Answer: *0° when potValue is 0; 180° when potValue is 1023*)
3. **Short answer:** Why do we use `#include <Servo.h>` at the top of the sketch? What would happen if we left it out? (Answer: *`Servo.h` is a library — a collection of pre-written functions for controlling servo motors. Without it, `Servo`, `myServo.attach()`, and `myServo.write()` are not defined, and the code won't compile.*)

---

### Extension Challenge

Add a second position mode: when the potentiometer knob is in the center (reading approximately 512), the servo returns to exactly 90°. Use an `if` statement with a tolerance range (e.g., 490–535) to "snap" to center.

*Advanced extension:* Wire a pushbutton. When the button is held, the servo sweeps automatically from 0° to 180° and back in a loop. When the button is released, it stops and holds its current position.

---

---

# WEEK 5 — Displays + Final Showcase
## Project: LCD Output + Final Showcase

---

### Learning Objectives

By the end of Week 5, students will be able to:

1. Wire an **I2C LCD display** to an Arduino and display custom text and numbers. *(NGSS: ETS1.B; CSTA AP.13)*
2. Use a second Arduino library (`LiquidCrystal_I2C.h`) and understand how to find and install libraries. *(CSTA AP.13)*
3. Combine concepts from prior weeks — input, output, analog reading — into a single integrated project. *(NGSS: ETS1.C)*
4. Present a working project to an audience, explaining what it does, how it works, and one thing they would change. *(CSTA AP.17; ISTE 4c)*

> **STEM Connection:** Displays are the output layer of nearly every consumer device. From ATM screens to fitness trackers, an LCD or OLED display communicates sensor data to humans — exactly what you're building today.

---

### Pre-Class Reading (1 Page) — Distribute Before Class

**Talking to the Screen: I2C Communication**

Until now, your Arduino communicated using single wires — one pin, one signal. This week you'll use **I2C (Inter-Integrated Circuit)**, a protocol that allows multiple devices to share just two wires and still send complex data.

The LCD display in your kit includes an **I2C adapter board** on the back. This board handles the complex timing required to drive the LCD — you only need to connect four wires: **VCC (power)**, **GND**, **SDA (data)**, and **SCL (clock)**. On the Arduino Uno, SDA is pin **A4** and SCL is pin **A5**.

Every I2C device has a unique **address** — a number that tells the Arduino which device it's talking to when multiple devices share the same two wires. The LCD's address is usually `0x27` or `0x3F` (you can use the I2C Scanner sketch to find it).

The `LiquidCrystal_I2C` library gives you simple commands:
- `lcd.begin()` — initialize the display
- `lcd.setCursor(col, row)` — move to a position (columns 0–15, rows 0–1)
- `lcd.print("Hello")` — display text at that position
- `lcd.clear()` — clear the display

*Key terms to remember: I2C, SDA, SCL, I2C address, LiquidCrystal_I2C, lcd.print, lcd.setCursor.*

---

### Step-by-Step Project Instructions

**What You'll Build:** A "sensor dashboard" that displays live potentiometer readings and a status message on the LCD.

**Materials (per student or pair):**
- Arduino board + USB cable
- Breadboard
- 1× I2C LCD display (16×2)
- 1× potentiometer (10kΩ)
- Jumper wires

---

**Step 1 — Install the library**

In the Arduino IDE: **Tools → Manage Libraries**. Search for `LiquidCrystal I2C` by Frank de Brabander. Click **Install**.

---

**Step 2 — Wire the LCD**

Connect the LCD's 4-pin I2C header to Arduino:
| LCD Pin | Arduino Pin |
|---|---|
| VCC | 5V |
| GND | GND |
| SDA | A4 |
| SCL | A5 |

---

**Step 3 — Wire the potentiometer**

Same as Weeks 3–4: outer legs to 5V and GND, middle leg (wiper) to **A0**.

---

**Step 4 — Upload the code**

```cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);  // Address 0x27, 16 cols, 2 rows
const int potPin = A0;

void setup() {
  lcd.init();           // Initialize the LCD
  lcd.backlight();      // Turn on backlight
  lcd.setCursor(0, 0);
  lcd.print("Sensor Dashboard");
  delay(1500);
  lcd.clear();
}

void loop() {
  int potValue = analogRead(potPin);   // Read 0–1023
  int percent = map(potValue, 0, 1023, 0, 100);  // Convert to %

  lcd.setCursor(0, 0);
  lcd.print("Knob: ");
  lcd.print(percent);
  lcd.print("%   ");  // Extra spaces clear old digits

  lcd.setCursor(0, 1);
  if (percent < 25) {
    lcd.print("Status: LOW     ");
  } else if (percent < 75) {
    lcd.print("Status: MEDIUM  ");
  } else {
    lcd.print("Status: HIGH    ");
  }

  delay(100);
}
```

Upload and turn the knob. The display should show the percentage and a status message that updates in real time.

> **If the display is blank:** Try address `0x3F` instead of `0x27` in the constructor. Run the I2C Scanner sketch from the tutorial site to find the correct address.

---

**Step 5 — Personalize (15 minutes)**

Give students time to customize their dashboard:
- Change the startup message
- Add their name to row 0
- Display the raw 0–1023 value instead of percentage
- Combine with the button from Week 2 to show "BUTTON ON" when pressed

---

### Final Showcase

**Format:** 3-minute stand-and-demonstrate. Each student (or pair) shows their working project and answers two questions:

1. Explain what your project does in one sentence, as if you were explaining it to a younger student.
2. Name one thing you would add or change if you had another week.

**Evaluation criteria (teacher rubric):**
- Circuit is wired correctly and functioning *(40%)*
- Code is uploaded and runs without errors *(30%)*
- Student can explain at least one line of code in their own words *(20%)*
- Student identifies one potential improvement *(10%)*

---

### Discussion Questions

1. This week you combined components from every previous week. Which week's concept did you find most useful as a foundation? Why?
2. The LCD displays information for humans. How is that different from the Serial Monitor we used in Weeks 3 and 4? When would you use each?
3. In 5 weeks, you went from blinking an LED to displaying live sensor data. What do you think you could build in 5 more weeks?

---

### Assessment (3 Questions)

1. **Short answer:** What does I2C stand for, and what is its main advantage over using individual signal wires for each component? (Answer: *Inter-Integrated Circuit. Its main advantage is that multiple devices can share just two wires (SDA and SCL), reducing the number of pins needed.*)
2. **Code reading:** In `LiquidCrystal_I2C lcd(0x27, 16, 2)`, what do `16` and `2` represent? (Answer: *16 columns and 2 rows — the dimensions of the LCD display.*)
3. **Reflection:** Name all five projects you built over 5 weeks. For each, identify the primary input and the primary output. (Expected: *Week 1: code → LED; Week 2: button → LED; Week 3: potentiometer → LED brightness; Week 4: potentiometer → servo; Week 5: potentiometer → LCD display*)

---

### Extension Challenge

Build a "smart thermostat display" using the potentiometer as a simulated temperature sensor. Display "HEAT ON" when the reading is below 30%, "COOL ON" when above 70%, and "IDEAL" in between.

*Advanced extension:* Add a servo that moves to 0° when heating, 90° when ideal, and 180° when cooling — a physical indicator in addition to the LCD display.

---

---

# COMPONENT REFERENCE SHEET

*Print and distribute one copy per student. Laminate for reuse.*

---

| Component | What It Looks Like | What It Does | Key Rule |
|---|---|---|---|
| **Arduino Uno** | Green board, USB port, rows of pins | The brain — runs your code and controls pins | Always use the correct board in the IDE (Tools → Board) |
| **Breadboard** | Rectangular plastic with rows of holes | Lets you connect components without soldering | Same row = same connection. The center gap separates the two sides. |
| **LED** | Small colored dome with two legs | Lights up when current flows through it | Long leg = + (anode). Short leg = − (cathode). Always needs a resistor. |
| **Resistor** | Small cylinder with colored bands | Limits current flow | Color bands tell you the value. 220Ω: red-red-brown. 10kΩ: brown-black-orange. |
| **Pushbutton** | Small square switch, 4 legs | Connects or breaks a circuit when pressed | Spans the center gap. Use a 10kΩ pull-down resistor. |
| **Potentiometer** | Knob with 3 legs | Variable resistor — adjusts from 0Ω to 10kΩ | Outer legs = power & GND. Middle leg = signal output. |
| **Servo Motor** | Small motor with 3-wire connector | Rotates to a specific angle (0°–180°) | Brown = GND, Red = 5V, Orange = signal. Use Servo.h library. |
| **I2C LCD Display** | Rectangular screen with 4-pin adapter | Shows text and numbers | Connect SDA → A4, SCL → A5. Default address 0x27. Use LiquidCrystal_I2C library. |
| **Jumper Wire** | Flexible wire with pin connectors | Carries signals between components | Use red for power (+), black for ground (−). |
| **USB Cable** | Standard USB-B to USB-A | Powers the Arduino and uploads code | The Arduino board's power LED should light up when plugged in. |

---

### Reading Resistor Color Codes

Resistors have 4 colored bands. The first three bands give the value; the fourth (gold or silver) is the tolerance.

| Color | Digit | Multiplier |
|---|---|---|
| Black | 0 | ×1 |
| Brown | 1 | ×10 |
| Red | 2 | ×100 |
| Orange | 3 | ×1,000 |
| Yellow | 4 | ×10,000 |
| Green | 5 | ×100,000 |

**220Ω:** Red (2) · Red (2) · Brown (×10) = 220
**10kΩ:** Brown (1) · Black (0) · Orange (×1,000) = 10,000

---

---

# CLASSROOM TROUBLESHOOTING GUIDE

*For the teacher. Keep this at your desk during every class.*

---

| Symptom | Most Likely Cause | Fix |
|---|---|---|
| **LED doesn't light up** | LED legs reversed | Check: long leg (anode) should be closer to power. Flip if needed. |
| **LED doesn't light up** | Resistor missing or wrong row | Trace the circuit: power → resistor → LED anode → LED cathode → GND. |
| **LED is very dim** | Wrong resistor value (too high) | Check color bands. 220Ω (red-red-brown) is correct for 5V. |
| **LED burned out** | No resistor, or resistor too low | Replace LED. Always use 220Ω or higher with a 5V Arduino. |
| **Upload fails ("port not found")** | Wrong COM port selected | Tools → Port. Unplug and replug USB. Try a different USB cable. |
| **Upload fails ("board not found")** | Wrong board type | Tools → Board → Arduino Uno. |
| **Button reads HIGH when not pressed** | Missing pull-down resistor | Add 10kΩ from the button's output row to GND. |
| **Servo twitches but doesn't move** | Insufficient power | Ensure servo is connected to 5V (not 3.3V). Try a powered USB hub. |
| **LCD shows blocks, no text** | Wrong I2C address | Run I2C Scanner sketch. Try `0x3F` if `0x27` doesn't work. |
| **LCD is blank (no blocks)** | Backlight not on or contrast too low | Call `lcd.backlight()` in setup. Adjust the trim pot on the I2C adapter with a screwdriver. |

---

### General Debugging Protocol

Teach students this sequence before any debugging session:

1. **Check the power.** Is the Arduino plugged in? Is the power LED on?
2. **Check the wiring.** Trace from pin to component to GND. Any wire in the wrong row?
3. **Check the component.** Is the LED or sensor oriented correctly? Is the button spanning the center gap?
4. **Check the code.** Is the right pin number used in `pinMode()`? Are there any red underlines in the IDE?
5. **Use Serial Monitor.** Add `Serial.println(value)` lines to print what the Arduino is actually reading.

---

---

# PDF LAYOUT BRIEF
### For: UI Designer | From: UX Researcher | Task: [ARD-107](/ARD/issues/ARD-107)

---

## Document Specifications

| Attribute | Value |
|---|---|
| Format | PDF, A4 or US Letter (dual export) |
| Pages | 22–26 pages |
| Orientation | Portrait |
| Margins | 20mm top/bottom, 25mm left, 15mm right |
| Binding assumption | Saddle-stitch or 3-hole punch |

---

## Brand Application

- **Primary color (Circuit Blue #0D7ECD):** Section headers, week number labels, key term callouts, table header rows
- **Accent color (Builder Orange #FF6B2B):** Teacher tips, warning callouts, "Common mistake" flags
- **Spark Green (#00C896):** Success/completion indicators, extension challenge labels, "What you'll build" banners
- **Body text:** Ink (#2D3748), Inter Regular 11pt, 1.5× line height
- **Headings:** Space Grotesk, Bold/SemiBold, Circuit Blue
- **Code blocks:** JetBrains Mono 10pt, light gray background (#F5F7FA), rounded corners 4px
- **Logo:** Primary color variant, top-left of cover page and footer of every page

---

## Page Structure

**Cover Page:**
- Brand gradient hero (135deg, Circuit Blue → Spark Green)
- Logo centered
- Title: "Educator Curriculum Guide" (Space Grotesk 700, white, 42pt)
- Subtitle: "5-Week Arduino Course for the Classroom" (Inter, white, 18pt)
- Tagline: "No prior experience required" (Builder Orange badge)

**Table of Contents (page 2):**
- Single column, clickable links in PDF version
- Week numbers in Circuit Blue circles

**Weekly Unit Layout:**
- Week banner: Full-width bar, Circuit Blue, "WEEK X — [TITLE]" in white Space Grotesk
- Project name as subheader in Builder Orange
- Learning objectives in a left-bordered callout (Circuit Blue left border, Cloud #F5F7FA background)
- STEM Connection: small green badge icon + italic text
- Pre-Class Reading: printed in a tan/warm-gray framed box to visually distinguish as handout
- Step-by-step: numbered list, each step in a card with a thin Circuit Blue left rule; teacher tips in orange sidebar callout
- Discussion questions: numbered, slight indent
- Assessment: bordered table or card grouping the 3 questions
- Extension challenge: Spark Green header bar, "⚡ Extension" label

**Component Reference Sheet:**
- Full-page table, alternating row shading (Cloud / white)
- Component name in bold Circuit Blue
- Resistor color chart as a small visual table

**Troubleshooting Guide:**
- 3-column table (Symptom / Cause / Fix)
- Symptom in bold; alternating row shading

**PDF Layout Brief:** (This section — internal use only, not included in the printed teacher guide)

---

## Accessibility

- Minimum 4.5:1 contrast ratio for all body text (WCAG AA)
- Code blocks: ensure JetBrains Mono renders at minimum 10pt for print legibility
- All images and diagrams must include alt text in the PDF metadata

---

*End of document.*
