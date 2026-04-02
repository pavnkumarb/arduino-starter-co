# Project 5: LCD Display Output

**Difficulty:** Beginner | **Time:** ~40 minutes | **Skills:** I2C protocol, `LiquidCrystal_I2C` library, `lcd.print()`, `map()`

---

## Overview

Every project so far communicated through blinking lights or a Serial Monitor on your computer. In this project, your circuit gets its own screen.

You'll connect a **16×2 LCD display** (two rows of 16 characters each) to the Arduino using the **I2C protocol** — a two-wire communication standard that lets dozens of devices share the same two signal lines. The I2C backpack soldered to the back of your LCD handles all the complexity for you.

By the end, you'll have:

- A display showing static text: "Hello, World!"
- An upgraded sketch showing **live sensor readings** from the potentiometer, updating in real time

This is the foundation for dashboards, status screens, and any project that needs to show data without a computer nearby.

---

## Components Needed

| Component | Quantity | Notes |
|---|---|---|
| Arduino-compatible USB-C board | 1 | |
| 16×2 LCD display with I2C backpack | 1 | The small blue board soldered to the back is the I2C interface |
| Potentiometer (10kΩ) | 1 | Same knob as previous projects — added in Step 5 |
| Breadboard | 1 | |
| Jumper wires | ~6 | Colors: red, black, blue, green, orange |
| USB-C cable | 1 | |

> **Visual callout — I2C backpack:** Flip the LCD over. The small blue circuit board soldered to the back is the PCF8574 I2C backpack. It has four pins on one edge: **VCC**, **GND**, **SDA**, **SCL**. These are the only four connections you need. It also has a small blue trimmer potentiometer — that's the contrast adjustment screw.

> **Visual callout — I2C address:** Every I2C device has an address so the Arduino knows which device to talk to. Your LCD's backpack is either at address **0x27** or **0x3F**. You'll run a scan sketch in Step 2 to find out which one yours uses.

---

## Circuit Diagram

### LCD I2C Connection

```
Arduino         LCD I2C Backpack
--------         ----------------
5V    ──[red]──    VCC
GND   ──[black]──  GND
A4    ──[blue]──   SDA  (data line)
A5    ──[green]──  SCL  (clock line)
```

> **Critical note:** A4 and A5 are the hardware I2C pins on the Arduino Uno-style board. SDA = A4, SCL = A5. These are printed on the board.

### Add Potentiometer (Step 5)

```
Arduino          Potentiometer
--------         ------------------
5V      ──[red]──    Left outer pin
GND     ──[black]──  Right outer pin
A0      ──[orange]── Middle pin (wiper)
```

---

## Step-by-Step Build Instructions

### Step 1 — Meet the LCD (3 min)

Examine your LCD before wiring:

- **Screen surface:** 16 columns × 2 rows. Each cell shows one character.
- **I2C backpack:** Soldered to the back. Four labeled pins: VCC, GND, SDA, SCL.
- **Contrast trimmer:** Small blue box with a cross-slot screw on the backpack. Turning it adjusts how dark the characters appear.
- **Backlight:** When powered, the screen background glows blue (or green on some models).

**I2C protocol in plain English:**
- I2C uses two signal wires: **SDA** (data) and **SCL** (clock).
- The Arduino sends a device **address** first, then data. Only the device with that address responds.
- This means you could connect multiple I2C devices (sensors, displays) to the same two wires.

**Checkpoints:**
- [ ] I can see the I2C backpack soldered to the back of the LCD
- [ ] I know I'll connect 4 wires: VCC, GND, SDA, SCL
- [ ] Breadboard and jumper wires are ready

**Troubleshooting:**
- *LCD doesn't have an I2C backpack — it has 16 pins in a row?* Your kit may include a parallel-interface LCD. Refer to the "LCD parallel wiring" supplement via the QR code on your kit card. The library commands are the same; only the wiring differs.
- *Can't read any labels on the I2C backpack?* That's fine — all backpacks work the same way. Run the I2C scanner in Step 2 to find the address automatically.
- *Contrast screw already turned fully?* Turn it the other direction. Contrast must be set correctly for characters to be visible — if blocks appear but are solid black or invisible, the trimmer is at the wrong extreme.

---

### Step 2 — Wire the LCD and find its I2C address (7 min)

Connect four wires from the LCD's I2C backpack to the Arduino:

1. **Red** wire: backpack **VCC** → Arduino **5V**
2. **Black** wire: backpack **GND** → Arduino **GND**
3. **Blue** wire: backpack **SDA** → Arduino **A4**
4. **Green** wire: backpack **SCL** → Arduino **A5**

Then upload this I2C scanner sketch to find your LCD's address:

```cpp
// Scan for I2C devices and print their addresses to Serial Monitor.
#include <Wire.h>

void setup() {
  Wire.begin();
  Serial.begin(9600);
  Serial.println("Scanning I2C bus...");

  for (byte addr = 1; addr < 127; addr++) {
    Wire.beginTransmission(addr);
    byte error = Wire.endTransmission();
    if (error == 0) {
      Serial.print("Device found at address 0x");
      if (addr < 16) Serial.print("0");
      Serial.println(addr, HEX);
    }
  }
  Serial.println("Scan complete.");
}

void loop() {}
```

Open **Serial Monitor** at **9600 baud**. You should see either:
- `Device found at address 0x27`
- `Device found at address 0x3F`

**Write this address down** — you'll use it in Step 4.

**Checkpoints:**
- [ ] VCC → 5V (red), GND → GND (black), SDA → A4 (blue), SCL → A5 (green)
- [ ] I2C scanner sketch uploaded
- [ ] Serial Monitor shows a device address (0x27 or 0x3F)

**Troubleshooting:**
- *Scanner shows "Scan complete" but no address found?* Re-check that SDA is in A4 (not A5) and SCL is in A5 (not A4) — they're easy to swap. Also confirm VCC is powered (backpack power LED should glow).
- *Scanner found multiple addresses or 0x00?* SDA or SCL may be touching another pin. Unplug and rewire carefully. Address 0x00 is a bus broadcast — ignore it.
- *Serial Monitor shows nothing?* Verify baud rate is 9600. Re-check the correct COM port is selected in Tools → Port.

---

### Step 3 — Install the LCD library (5 min)

The `LiquidCrystal_I2C` library drives the I2C backpack. A *library* is a package of pre-written code you install once and reuse — it handles all the low-level I2C communication so your code stays short and readable. Install it once and it's available for all future projects.

**In Arduino IDE 1.x:**
- Go to **Sketch → Include Library → Manage Libraries**
- Search for: `LiquidCrystal I2C`
- Install the one by **Frank de Brabander** (it shows tens of thousands of downloads)
- Click **Install**

**In Arduino IDE 2.x:**
- Click the book icon in the left sidebar (Library Manager)
- Search `LiquidCrystal I2C`
- Install Frank de Brabander's version

**Checkpoints:**
- [ ] Library Manager opened
- [ ] LiquidCrystal I2C library installed
- [ ] No red error in IDE console

**Troubleshooting:**
- *Can't find "LiquidCrystal I2C" in the Library Manager?* Search with a space: `LiquidCrystal I2C`. Scroll down — there are multiple. Frank de Brabander's version is the most widely used.
- *Library Manager shows an error?* You may be offline. The Library Manager requires internet. Connect to Wi-Fi and retry. Alternatively, download the ZIP file and install via Sketch → Include Library → Add .ZIP Library.
- *IDE says the library is already installed?* Proceed to Step 4 — nothing to fix.

---

### Step 4 — Print "Hello, World!" (7 min)

Replace `0x27` with your LCD's address from Step 2 if it was different.

```cpp
// Print text on a 16×2 LCD over I2C.
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Replace 0x27 with your address from the I2C scanner (0x3F is the other common option)
LiquidCrystal_I2C lcd(0x27, 16, 2);  // Address, columns, rows

void setup() {
  lcd.init();        // Initialize the LCD
  lcd.backlight();   // Turn on the backlight

  lcd.setCursor(0, 0);       // Column 0, Row 0 (top-left corner)
  lcd.print("Hello, World!");

  lcd.setCursor(0, 1);       // Column 0, Row 1 (bottom-left corner)
  lcd.print("Arduino Kit!");
}

void loop() {
  // Nothing needed — the LCD holds text until cleared or overwritten
}
```

**Code explanation:**
- `LiquidCrystal_I2C lcd(0x27, 16, 2)` — creates an LCD object at address 0x27 with 16 columns and 2 rows.
- `lcd.init()` — initializes the display.
- `lcd.backlight()` — turns on the backlight (without this, the screen appears off).
- `lcd.setCursor(col, row)` — positions the text cursor. Counting starts at 0. Top-left = `(0, 0)`. Bottom-left = `(0, 1)`.
- `lcd.print("text")` — prints text starting at the current cursor position.
- The LCD has its own memory — it holds the displayed text until you change it or remove power.

**Checkpoints:**
- [ ] Sketch compiled without errors
- [ ] LCD backlight is on
- [ ] Row 0 shows: `Hello, World!`
- [ ] Row 1 shows: `Arduino Kit!`

**Troubleshooting:**
- *Backlight is on but no text appears — just a row of solid black blocks?* Adjust the contrast trimmer on the I2C backpack. Turn it slowly with a small screwdriver until characters appear. Black blocks mean contrast is too high.
- *Backlight is on and the screen is blank (no blocks)?* Contrast may be too low. Also verify the I2C address — try changing `0x27` to `0x3F` (or vice versa) and re-upload.
- *Compile error: `fatal error: LiquidCrystal_I2C.h not found`?* The library wasn't installed. Return to Step 3 and install it from the Library Manager.
- *Only one row shows text?* `lcd.setCursor(0, 1)` must appear before the second `lcd.print()`. Check that the row parameter is `1`, not `2` — rows are 0-indexed.

---

### Step 5 — Display live sensor readings (8 min)

Wire the potentiometer alongside the LCD (same as Projects 1 and 3):

- Red wire: **5V** → potentiometer left outer pin
- Black wire: **GND** → potentiometer right outer pin
- Orange wire: potentiometer middle pin → **A0**

Then upload this sketch:

```cpp
// Display live potentiometer readings on the LCD.
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);  // Update address if yours is 0x3F

const int SENSOR_PIN = A0;

void setup() {
  lcd.init();
  lcd.backlight();
}

void loop() {
  int raw     = analogRead(SENSOR_PIN);          // 0–1023
  int percent = map(raw, 0, 1023, 0, 100);       // 0–100%

  // Row 0: raw sensor value
  lcd.setCursor(0, 0);
  lcd.print("Sensor: ");
  lcd.print(raw);
  lcd.print("   ");  // Trailing spaces overwrite old digits when the number shrinks

  // Row 1: percentage
  lcd.setCursor(0, 1);
  lcd.print("Level:  ");
  lcd.print(percent);
  lcd.print("%   ");

  delay(100);  // Update ~10 times per second
}
```

**Code explanation:**
- `map(raw, 0, 1023, 0, 100)` — converts the potentiometer range (0–1023) to a percentage (0–100).
- `lcd.print("   ")` after each numeric value — the trailing spaces overwrite leftover characters when a 4-digit number shrinks to 1 digit. Without them, `1023` would leave ghost digits when the value drops to `5`.
- `delay(100)` — updates 10 times per second. Faster updates cause the display to flicker; slower ones feel sluggish.

**Checkpoints:**
- [ ] Potentiometer wired to A0, 5V, GND
- [ ] Sketch uploaded
- [ ] LCD shows live sensor value and percentage
- [ ] Values update visibly when you turn the knob

**Troubleshooting:**
- *Old digits remain — the display looks garbled?* Add more trailing spaces to `lcd.print()`. Three spaces clears a 4-digit value (1023 → 5 leaves `023` behind). For safety, use 4 spaces: `lcd.print("    ")`.
- *Display updates feel laggy?* Reduce `delay(100)` to `delay(50)`. Avoid going below `delay(20)` — I2C writes take time and the LCD can miss commands if sent too fast.
- *Percentage shows 101% at max?* `analogRead()` occasionally returns 1024 due to noise. Wrap the `map()` call with `constrain()`: `constrain(map(raw, 0, 1023, 0, 100), 0, 100)` to clamp the output to 0–100.

---

## What You Learned

- **I2C protocol** — two-wire (SDA + SCL) communication for connecting multiple devices
- **I2C address scanning** — how to discover the address of an unknown I2C device
- **`LiquidCrystal_I2C` library** — how to initialize and write text to an I2C LCD
- **`lcd.setCursor(col, row)`** — position text at any cell on the display
- **Display refresh strategy** — using trailing spaces to cleanly overwrite stale values
- **`constrain()`** — clamp a value to a valid range

---

## Congratulations — You've Completed All 5 Projects!

Here's a summary of what you can now do:

| Skill | Learned In |
|---|---|
| Wire a breadboard circuit without soldering | Project 1 |
| Control an LED (on/off, blink) | Project 1 |
| Read a potentiometer and use its value | Project 1 |
| Read a digital input (button) | Project 2 |
| Debounce a button and detect edges | Project 2 |
| Fade an LED using PWM | Project 3 |
| Rescale sensor values with `map()` | Project 3 |
| Control a servo motor to a specific angle | Project 4 |
| Use libraries to simplify hardware control | Projects 4 & 5 |
| Communicate via I2C | Project 5 |
| Print sensor data to an LCD display | Project 5 |

### Challenge Extension

**Combine Projects 2 and 5.** Wire the button from Project 2 (Pin 7, 10kΩ pull-down). Press it once to **freeze** the sensor reading on the LCD — the display holds the last value. Press it again to **resume** live updates.

This is the same logic used in a digital thermometer's "hold" button.

```cpp
// Hint: track a `frozen` boolean and a `frozenValue` integer.
// On rising edge: toggle `frozen`. In loop(), only update LCD if `!frozen`.
```

From here, the sky is the limit. Mix any combination of sensors, outputs, and displays. Every project in the maker world is a variation of the **sense → decide → act** loop you've now practiced five times.
