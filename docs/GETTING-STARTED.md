# Getting Started with the Arduino Starter Kit

Welcome! This guide walks you through unboxing, setup, and your first working circuit — in about 15 minutes.

---

## 1. What's in the Box

| Item | Qty |
|------|-----|
| Arduino Uno R3 | ×1 |
| Half-size Breadboard | ×1 |
| Assorted LEDs | ×10 |
| Resistor Pack (220Ω, 1kΩ, 10kΩ) | ×30 |
| Jumper Wires | ×30 |
| DHT11 Temperature/Humidity Sensor | ×1 |
| HC-SR04 Ultrasonic Sensor | ×1 |
| DC Motor + L298N Driver | ×1 |
| Servo Motor | ×1 |
| Piezo Buzzer | ×1 |
| USB-B Cable | ×1 |

---

## 2. Install Arduino IDE

1. Go to [arduino.cc/en/software](https://www.arduino.cc/en/software) and download the free IDE (v2 recommended).
2. Install and open it.
3. Plug in your Arduino Uno using the USB-B cable.
4. In the IDE: **Tools → Board → Arduino AVR Boards → Arduino Uno**
5. **Tools → Port** — select the port that shows your Arduino (e.g. `COM3` on Windows, `/dev/cu.usbmodem...` on Mac).

> **Tip:** If no port appears, install the [CH340 driver](https://sparks.gogo.co.nz/ch340.html) (common on clone boards).

---

## 3. Upload Your First Program

The built-in **Blink** example confirms your board is working:

1. **File → Examples → 01.Basics → Blink**
2. Click the **Upload** button (→ arrow).
3. The onboard LED on pin 13 should start blinking once per second.

```cpp
// Blink — the "Hello World" of hardware
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // LED on
  delay(1000);                       // wait 1 second
  digitalWrite(LED_BUILTIN, LOW);   // LED off
  delay(1000);
}
```

---

## 4. Wire Your First External LED

**Components needed:** 1× LED, 1× 220Ω resistor, 2× jumper wires

| LED leg | Connects to |
|---------|-------------|
| Long leg (+) | Arduino pin 13 (via 220Ω resistor) |
| Short leg (−) | Arduino GND |

```
Arduino Pin 13 ──[220Ω]──► LED (+) ──── LED (−) ──── GND
```

Upload the same Blink sketch — your external LED will blink in sync with the onboard one.

---

## 5. Core User Journey

```
Unbox & setup (15 min)
       ↓
Project 1: LED Blink          ← you are here
       ↓
Project 2: Traffic Light
       ↓
Project 3: Temperature Monitor
       ↓
Project 4: Distance Alarm
       ↓
Project 5: Motor Controller
```

Each project builds on the last. Estimated time per project: 20–45 minutes.

---

## 6. Guided Tutorials (Online)

Step-by-step tutorials with wiring diagrams, code, and video clips are available at:

**`/learn`** on the kit website

Each tutorial includes:
- A wiring diagram for your breadboard
- Copy-paste ready code
- Short video clips for tricky steps
- Checkpoints to verify your circuit is working

---

## 7. Troubleshooting Quick Reference

| Problem | Fix |
|---------|-----|
| Upload fails | Check the correct Port is selected in Tools menu |
| LED doesn't light | Flip the LED (polarity matters) or check the resistor |
| Board not detected | Try a different USB cable (some are charge-only) |
| Code won't compile | Verify the correct Board is selected |
| Sensor reads garbage | Check wiring — VCC to 5V, GND to GND |

---

## 8. Getting Help

- **In-app tutorials:** `/learn` — guided, step-by-step with video
- **Arduino Reference:** [arduino.cc/reference](https://www.arduino.cc/reference/en/)
- **Arduino Forum:** [forum.arduino.cc](https://forum.arduino.cc/) — active community for questions
- **Kit support:** Use the feedback widget on any tutorial page

---

*Happy building!*
