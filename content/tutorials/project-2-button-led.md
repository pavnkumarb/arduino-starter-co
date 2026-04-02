# Project 2: Button + LED

**Difficulty:** Beginner | **Time:** ~30 minutes | **Skills:** `digitalRead`, `INPUT`, debouncing, rising-edge detection

---

## Overview

In Project 1, the Arduino controlled an LED on its own. In this project, **you** control it — by pressing a button. You'll learn how to read a digital input and use it to drive a digital output. By the end, you'll have:

- An LED that lights up while you hold a button
- An upgraded sketch where each press *toggles* the LED on or off (with debounce)

This is your introduction to **digital input** — the skill that unlocks buttons, switches, and contact sensors in all future projects.

---

## Components Needed

| Component | Quantity | Notes |
|---|---|---|
| Arduino-compatible USB-C board | 1 | |
| LED (any color) | 1 | From Project 1 |
| 220Ω resistor | 1 | Red-Red-Brown — protects the LED |
| Tactile push button | 1 | Square button with 4 legs |
| 10kΩ resistor | 1 | Brown-Black-Orange — pull-down resistor |
| Breadboard | 1 | |
| Jumper wires | ~6 | Colors: yellow, black, red, green |
| USB-C cable | 1 | |

> **Visual callout — tactile button:** The button has 4 legs arranged in two pairs. The legs on the **short** sides of the button body are internally connected — those are the two you need. Place the button straddling the center gap of the breadboard so each side's legs land in different electrical sections.

> **Visual callout — 10kΩ resistor:** Read the color bands left to right: Brown – Black – Orange (+ tolerance band). This is your *pull-down* resistor. It prevents the input pin from floating (reading random noise) when the button isn't pressed.

---

## Circuit Diagram

### LED Circuit (same as Project 1)

```
Arduino          Breadboard / Components
--------         ---------------------------
Pin 13  ──[yellow]──  220Ω resistor ──── LED anode (+)
                                         LED cathode (−) ──[black]── GND
```

### Button Circuit

```
Arduino          Breadboard / Components
--------         ----------------------------------
5V      ──[red]──    Button leg A (one short side)
                     Button leg B (other short side) ──[green]──  Pin 7
                                                                   Pin 7 ──[orange]── 10kΩ resistor ──[black]── GND
```

**Text description:**
1. Place the button straddling the center gap of the breadboard.
2. Run a **red** wire from Arduino **5V** to one leg on the button's left short side.
3. Run a **green** wire from the button's right short side to Arduino **Pin 7**.
4. Add the **10kΩ resistor** between Pin 7 and GND (pull-down). One leg of the resistor shares a column with Pin 7's green wire; the other leg runs to GND via a black wire.

**How this works:** When the button is open, Pin 7 is held at 0V by the pull-down resistor — it reads `LOW`. When you press the button, 5V connects directly to Pin 7 — it reads `HIGH`.

---

## Step-by-Step Build Instructions

### Step 1 — Identify the new components (3 min)

You already know the LED and 220Ω resistor from Project 1. The two new parts are:

- **Tactile push button:** 4-legged square switch. Two pairs of legs — legs on the same *short* side are connected. Place it across the center gap so the short sides face the outer rails.
- **10kΩ resistor:** Brown–Black–Orange bands. Physically identical to the 220Ω but reads 10,000Ω on a multimeter.

**Checkpoints:**
- [ ] I can identify the tactile push button
- [ ] I have a 10kΩ resistor (brown-black-orange bands)
- [ ] LED, 220Ω resistor, and jumper wires are ready

**Troubleshooting:**
- *Can't tell the two resistors apart?* Hold each one up to light and read the bands: 220Ω = Red–Red–Brown, 10kΩ = Brown–Black–Orange. When in doubt, use a multimeter in resistance mode.
- *Button looks different from the picture?* Different button shapes work the same way. What matters is using one leg from each short side.
- *Missing a part?* Check the small resealable bag — the 10kΩ resistor and spare buttons are often there.

---

### Step 2 — Wire the circuit (8 min)

Build the LED circuit first (same as Project 1), then add the button circuit.

**LED circuit:**
1. Yellow wire: Pin 13 → 220Ω resistor leg A
2. Resistor leg B → LED anode (long leg) in the same breadboard row
3. Black wire: LED cathode (short leg) → GND

**Button circuit:**
4. Place the button straddling the breadboard's center gap.
5. Red wire: **5V** → button left leg (either leg on the left short side)
6. Green wire: button right leg (either leg on the right short side) → **Pin 7**
7. Place the 10kΩ resistor so one leg shares a row with Pin 7. Run the other leg to a GND row. Add a black wire from that GND row to the Arduino GND pin.

**Checkpoints:**
- [ ] LED and 220Ω resistor connected to Pin 13 and GND
- [ ] Button bridges the center gap of the breadboard
- [ ] Red wire: 5V → button
- [ ] Green wire: button → Pin 7
- [ ] 10kΩ resistor connects Pin 7 to GND

**Troubleshooting:**
- *Not sure the button is in the right orientation?* The button legs form a rectangle. Place it so the two short sides face the top and bottom of the breadboard. The legs on each short side are shorted together — you want to use one leg per short side, connected by pressing the button.

---

### Step 3 — Upload the button sketch (7 min)

> **Reminder:** A *sketch* is Arduino's word for a program. Open the Arduino IDE, create a new sketch, and replace any existing code with the code below.

```cpp
// Button controls LED — press to light, release to extinguish.

const int LED_PIN    = 13;
const int BUTTON_PIN = 7;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT);  // Pull-down resistor is wired externally
  Serial.begin(9600);
}

void loop() {
  int buttonState = digitalRead(BUTTON_PIN);  // HIGH when pressed, LOW when not

  if (buttonState == HIGH) {
    digitalWrite(LED_PIN, HIGH);  // LED on
    Serial.println("Button pressed — LED ON");
  } else {
    digitalWrite(LED_PIN, LOW);   // LED off
  }
}
```

**Code explanation:**
- `pinMode(BUTTON_PIN, INPUT)` — configures Pin 7 to read a voltage coming in. The `INPUT` mode means the pin has no internal resistor; our external 10kΩ pull-down handles that.
- `digitalRead(BUTTON_PIN)` — returns `HIGH` (1) if voltage is present, `LOW` (0) if not.
- `if (buttonState == HIGH)` — only lights the LED when the button is actually pressed.
- `Serial.println(...)` — sends a message to Serial Monitor so you can see the button state on your computer.

**Upload steps:**
1. Go to **Tools → Board** and select your board.
2. Go to **Tools → Port** and select the correct port.
3. Click **→ Upload**. Wait for "Done uploading."
4. Open **Tools → Serial Monitor**, set baud rate to **9600**.

**Checkpoints:**
- [ ] Upload succeeded — "Done uploading" confirmed
- [ ] Pressing the button lights the LED
- [ ] Releasing the button turns the LED off
- [ ] Serial Monitor shows "Button pressed" messages

**Troubleshooting:**
- *LED stays on regardless of button presses?* The pull-down resistor may be wired incorrectly. Confirm the 10kΩ resistor connects Pin 7 to GND, not Pin 7 to 5V.
- *LED stays off regardless of button presses?* Confirm the green wire is in Pin 7 (not Pin 6 or 8). The pins are labeled on the board.
- *LED flickers rapidly when holding the button?* That's button bounce — normal for mechanical switches. The next step adds a fix.
- *Serial Monitor shows nothing?* Check the baud rate is 9600 in the Serial Monitor window.

---

### Step 4 — Upgrade to toggle with debounce (5 min)

Now each button press *toggles* the LED — press once to turn on, press again to turn off. A debounce timer prevents the mechanical bounce from registering as multiple presses.

```cpp
// Each button press toggles the LED on or off (debounced).

const int LED_PIN    = 13;
const int BUTTON_PIN = 7;
const int DEBOUNCE_MS = 50;  // Ignore bounce for 50 milliseconds

bool ledState           = false;
bool lastButton         = false;
unsigned long lastDebounceTime = 0;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT);
  Serial.begin(9600);
}

void loop() {
  bool currentButton = (digitalRead(BUTTON_PIN) == HIGH);

  // Only react on the rising edge — the moment the button first becomes pressed
  if (currentButton && !lastButton) {
    unsigned long now = millis();
    if (now - lastDebounceTime > DEBOUNCE_MS) {
      ledState = !ledState;                          // Flip the LED state
      digitalWrite(LED_PIN, ledState ? HIGH : LOW);
      Serial.print("LED toggled — now ");
      Serial.println(ledState ? "ON" : "OFF");
      lastDebounceTime = now;
    }
  }

  lastButton = currentButton;
}
```

**Code explanation:**
- `millis()` — returns the number of milliseconds since the Arduino powered on. This is how we measure time without `delay()`.
- `currentButton && !lastButton` — detects the *rising edge*: the moment the button goes from not-pressed to pressed. It won't fire again until you release and press again.
- `DEBOUNCE_MS` — after a press is detected, ignore any further edges for 50ms. This filters the mechanical bounce.
- `ledState = !ledState` — flips `true` to `false` and vice versa, creating a toggle.

**Checkpoints:**
- [ ] First press turns LED on, second press turns LED off
- [ ] LED state is stable — no flickering while holding the button

**Troubleshooting:**
- *LED still flickers even with debounce?* Increase `DEBOUNCE_MS` from 50 to 100 or 150. Some buttons have worse bounce.
- *LED turns on but never turns off?* Make sure the new sketch was uploaded (not the old one). Look for "Done uploading" after the upload.
- *Worried about `millis()` overflow after 50 days?* The subtraction `now - lastDebounceTime` handles wrap-around correctly due to unsigned arithmetic — no action needed.

---

## What You Learned

- **`digitalRead()`** — read the state of a digital input pin (`HIGH` or `LOW`)
- **`INPUT` mode** — configure a pin to receive an incoming signal
- **Pull-down resistor** — keeps an input pin at a known LOW state when no signal is applied
- **Rising-edge detection** — respond only to the moment a button becomes pressed, not continuously while it's held
- **Debouncing** — filtering out mechanical noise from a button press
- **`millis()`** — non-blocking timing using the Arduino's internal clock

### Challenge Extension

**Wire a second LED to Pin 12.** When the button is pressed, turn LED on Pin 13 **on** and LED on Pin 12 **off**. When the button is released (or pressed again in toggle mode), reverse them. This creates a classic two-state indicator — great for showing system status.

Hint: You need two `digitalWrite()` calls in your `if` block, one setting Pin 13 and one setting Pin 12 to opposite states.
