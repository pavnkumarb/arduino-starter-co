# How to Get Started with Arduino — A Complete Beginner's Guide (2026)

**Primary keyword:** how to get started with arduino
**Secondary keywords:** how to start with arduino, arduino for beginners, arduino beginner guide, arduino tutorial for beginners
**Meta description:** Never touched an Arduino? This step-by-step guide walks you through everything — what you need, your first circuit, and your first line of code.
**URL slug:** /blog/how-to-get-started-with-arduino
**Pillar:** First Builds
**CTA:** Get the kit with everything included

---

Getting started with Arduino feels overwhelming before you begin. There's a board, wires, components, code — and if you've never built a circuit before, it's hard to know where to even look first.

This guide removes the guesswork. By the end, you'll understand what Arduino is, what you need to start, and how to build your first working project — even if you've never touched electronics before.

---

## What Is Arduino, Exactly?

Arduino is a platform for building electronics projects. It has two parts:

1. **A physical board** — a small computer (called a microcontroller) that you can program to control components like LEDs, motors, sensors, and displays.
2. **A programming environment** — the Arduino IDE (software you install on your computer) that lets you write code and send it to the board.

The Arduino UNO is the most popular board for beginners. It has a set of **pins** — small metal contacts — that you connect components to using wires. You write a program that tells the board what to do: "Turn on pin 13 for one second. Turn it off. Repeat."

That's it. That's the foundation of everything.

---

## What You Need to Get Started

### Hardware

- **An Arduino UNO board** (or a UNO-compatible board — functionally identical for beginners)
- **A USB cable** (USB-A to USB-B — the kind that looks like a printer cable)
- **A breadboard** — a reusable board for connecting components without soldering
- **Jumper wires** — short wires for connecting components to the board
- **At least one LED** and a **220Ω resistor** (for your first project)

The fastest way to get all of this in one place is a starter kit. The [Arduino Starter Co kit](/buy) includes everything above plus a full tutorial series so you're not assembling parts from different suppliers or hunting for the right resistor value.

### Software

**Arduino IDE** — free download from [arduino.cc/en/software](https://www.arduino.cc/en/software).

Available for Windows, macOS, and Linux. The installation takes about 5 minutes.

---

## Step 1 — Install the Arduino IDE

1. Go to arduino.cc/en/software
2. Download the version for your operating system
3. Run the installer and follow the prompts
4. Open the Arduino IDE when installation finishes

You'll see a blank sketch (Arduino's word for a program) with two sections:

```cpp
void setup() {
  // Runs once when the board powers on
}

void loop() {
  // Runs repeatedly after setup
}
```

Everything you build will follow this structure. `setup()` runs once. `loop()` runs forever.

---

## Step 2 — Connect Your Board

1. Plug the USB cable into your Arduino UNO
2. Plug the other end into your computer
3. In the Arduino IDE, go to **Tools → Board** and select **Arduino UNO**
4. Go to **Tools → Port** and select the port that shows your Arduino (on Mac it looks like `/dev/cu.usbmodem...`, on Windows it looks like `COM3` or similar)

If your board shows up under Port, you're connected.

---

## Step 3 — Your First Project: LED Blink

This is the Arduino equivalent of "Hello, World." You're going to make an LED blink on and off using code you write.

### What you need
- 1× LED (any color)
- 1× 220Ω resistor (red-red-brown color bands)
- 2× jumper wires
- 1× breadboard

### Wiring it up

1. Push the **LED** into the breadboard. The long leg is positive (+), the short leg is negative (−).
2. Connect a **220Ω resistor** between the long leg of the LED and a free row on the breadboard. The resistor limits current so the LED doesn't burn out.
3. Connect a **jumper wire** from the row with the resistor to **pin 13** on the Arduino.
4. Connect another **jumper wire** from the short leg of the LED to any **GND** pin on the Arduino.

Your circuit is complete.

### The code

In the Arduino IDE, type this exactly:

```cpp
void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);  // LED on
  delay(1000);              // Wait 1 second
  digitalWrite(13, LOW);   // LED off
  delay(1000);              // Wait 1 second
}
```

Click the **Upload** button (the right-pointing arrow at the top of the IDE). The IDE will compile your code and send it to the board.

Watch the LED. It should blink on for one second, off for one second, on, off — repeating until you unplug the board.

**You just ran your first Arduino program.**

---

## What's Happening in That Code

- `pinMode(13, OUTPUT)` tells the board that pin 13 will be used as an output (sending power out, rather than reading input in).
- `digitalWrite(13, HIGH)` sends 5 volts to pin 13 — enough to light the LED.
- `delay(1000)` pauses the program for 1000 milliseconds (1 second).
- `digitalWrite(13, LOW)` cuts the voltage — LED off.

Change `1000` to `200` and upload again. The LED blinks faster. Change it to `2000` and it blinks slower. You're in control.

---

## Where to Go from Here

Once the LED blinks, you've broken through the hardest part: getting something working from scratch. From here, the learning curve gets much more manageable.

**Next builds to try:**

1. **Wire a button** — add a pushbutton and write code that only turns the LED on when you press it
2. **Change the blink speed with a potentiometer** — connect a dial and read its value to set the delay time
3. **Add a buzzer** — make sounds instead of (or alongside) light
4. **Read a motion sensor** — trigger the LED when someone walks by
5. **Display a message on an LCD screen** — "Hello from Arduino"

All five of these are included in the Arduino Starter Co tutorial series, with step-by-step guides and wiring diagrams for each.

---

## The Fastest Way to Get Started

If you want to skip the parts-sourcing step and go straight to building, the [Arduino Starter Co kit](/buy) includes the board, all the components for Projects 1–5, the USB cable, and full written + video tutorials. Everything you need is in one box, tested and ready.

**[Get the kit for $59 →](/buy)**

Or [join the waitlist](/waitlist) to be first in line at launch and receive a free beginner's guide in the meantime.

---

*Related: [7 Arduino Projects for Beginners You Can Build This Weekend](/blog/arduino-projects-for-beginners) | [What's in an Arduino Starter Kit? Every Component Explained](/blog/what-is-in-an-arduino-kit)*
