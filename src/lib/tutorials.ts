export interface TroubleshootingItem {
  symptom: string;
  fix: string;
}

export interface TutorialStep {
  slug: string;
  title: string;
  duration: string;
  description: string;
  wiringDiagram?: WiringDiagram;
  videoClip?: VideoClip;
  codeSnippet?: CodeSnippet;
  tips?: string[];
  checkpoints?: string[];
  troubleshooting?: TroubleshootingItem[];
}

export interface ComponentLabel {
  component: string;
  note: string;
}

export interface WiringDiagram {
  altText: string;
  connections: WiringConnection[];
  imagePlaceholder: string;
  componentLabels?: ComponentLabel[];
}

export interface WiringConnection {
  from: string;
  to: string;
  color: string;
  note?: string;
}

export interface VideoClip {
  title: string;
  durationSec: number;
  thumbnailAlt: string;
  topic: "wiring" | "code_upload" | "troubleshooting" | "demo";
}

export interface CodeSnippet {
  language: string;
  filename: string;
  code: string;
}

export interface Tutorial {
  slug: string;
  title: string;
  tagline: string;
  totalDuration: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  components: string[];
  steps: TutorialStep[];
  supportUrl?: string;
}

export const TUTORIALS: Tutorial[] = [
  {
    slug: "project-1",
    title: "Project 1: LED Blink + Sensor Read",
    tagline: "Your first working circuit — blink an LED, then read a sensor.",
    totalDuration: "30 min",
    difficulty: "beginner",
    supportUrl: "mailto:support@arduinostarterco.com",
    components: [
      "Arduino-compatible USB-C board",
      "1× LED (any color)",
      "1× 220Ω resistor",
      "1× potentiometer (10kΩ)",
      "Breadboard",
      "Jumper wires",
      "USB-C cable",
    ],
    steps: [
      {
        slug: "1-whats-in-the-box",
        title: "Step 1 — What's in the box",
        duration: "3 min",
        description:
          "Before you wire anything, take a moment to identify each component. Lay them out on your desk. You should see the Arduino board, a breadboard, a small LED, a resistor, a knob (potentiometer), and a bag of jumper wires.",
        tips: [
          "The LED has two legs — the longer one is positive (anode), the shorter one is negative (cathode).",
          "The resistor protects the LED from too much current. Always use one!",
          "The potentiometer is the rotating knob — turning it changes a voltage the Arduino can read.",
        ],
        checkpoints: [
          "I can identify the Arduino board",
          "I can see the LED and resistor",
          "I have the breadboard and jumper wires",
        ],
        troubleshooting: [
          {
            symptom: "I can't find a part — something seems missing",
            fix: "Check the packing list card inside your kit. Small parts like resistors are often in a tiny clear bag tucked under the foam layer.",
          },
          {
            symptom: "Both LED legs look the same length",
            fix: "Hold the LED up to a light — one leg casts a wider shadow at the base of the bulb. The wider base = anode (+). If you still can't tell, it's fine to guess and flip it later.",
          },
          {
            symptom: "I don't have enough jumper wires",
            fix: "Your kit includes at least 10 wires in multiple colors. Count them — they may be bundled together. For this project you only need 3.",
          },
        ],
      },
      {
        slug: "2-wire-the-led",
        title: "Step 2 — Wire the LED",
        duration: "7 min",
        description:
          "Connect the LED to digital pin 13 on the Arduino. Use the breadboard to make connections without soldering. Follow the wiring diagram below exactly.",
        wiringDiagram: {
          altText:
            "Wiring diagram: LED connected to Arduino pin 13 through a 220Ω resistor, cathode to GND",
          imagePlaceholder: "/images/wiring-led-blink.svg",
          connections: [
            {
              from: "Arduino Pin 13",
              to: "Resistor leg A",
              color: "yellow",
              note: "Use a yellow jumper wire",
            },
            {
              from: "Resistor leg B",
              to: "LED anode (long leg)",
              color: "yellow",
              note: "Resistor and LED share a breadboard column",
            },
            {
              from: "LED cathode (short leg)",
              to: "Arduino GND",
              color: "black",
              note: "Black = ground, always",
            },
          ],
          componentLabels: [
            { component: "LED", note: "long leg (anode) → resistor; short leg (cathode) → GND" },
            { component: "220Ω resistor", note: "between pin 13 and the LED anode — color bands: red-red-brown" },
            { component: "Arduino Pin 13", note: "digital output — drives the LED HIGH/LOW to blink" },
          ],
        },
        videoClip: {
          title: "How to wire the LED blink circuit",
          durationSec: 60,
          thumbnailAlt: "Hands placing jumper wires on a breadboard",
          topic: "wiring",
        },
        tips: [
          "Double-check that the long LED leg connects toward pin 13 (through the resistor).",
          "Rows on a breadboard are connected horizontally — columns are NOT connected.",
          "Don't plug in the USB cable yet.",
        ],
        checkpoints: [
          "LED long leg connects to resistor",
          "Resistor connects to pin 13 via yellow wire",
          "LED short leg connects to GND via black wire",
        ],
        troubleshooting: [
          {
            symptom: "Wires keep falling out of the breadboard",
            fix: "Push the wire straight down — angled insertions don't make contact. The tip should click into the hole. If a hole feels loose, try the one next to it.",
          },
          {
            symptom: "I can't tell which row the resistor is in",
            fix: "Breadboard rows run left-right (horizontal). Count 5 holes from the top of the breadboard to find row 1. Each row is labeled A–J on the side — use those as your guide.",
          },
          {
            symptom: "LED legs are too short to span the breadboard gap",
            fix: "That's normal — the LED's legs go into the same side of the breadboard, not across the center gap. Keep both legs on the same half (e.g., the left section).",
          },
        ],
      },
      {
        slug: "3-upload-blink",
        title: "Step 3 — Upload the Blink sketch",
        duration: "7 min",
        description:
          "Connect your Arduino to your computer via USB-C and upload the Blink sketch. The code tells pin 13 to turn on and off once per second.",
        codeSnippet: {
          language: "cpp",
          filename: "Blink.ino",
          code: `// Blink — turn the LED on pin 13 on and off once per second.

void setup() {
  pinMode(13, OUTPUT);  // Pin 13 is an output
}

void loop() {
  digitalWrite(13, HIGH);  // LED on
  delay(1000);             // Wait 1 second
  digitalWrite(13, LOW);   // LED off
  delay(1000);             // Wait 1 second
}`,
        },
        videoClip: {
          title: "Upload code to Arduino step by step",
          durationSec: 60,
          thumbnailAlt: "Arduino IDE open with Blink sketch, upload button highlighted",
          topic: "code_upload",
        },
        tips: [
          "In the Arduino IDE, go to Tools → Board and select your board model.",
          'Go to Tools → Port and select the COM port or /dev/cu.* that appeared when you plugged in the USB.',
          'Click the → (Upload) button. Wait for "Done uploading."',
        ],
        checkpoints: [
          "USB-C cable connected to Arduino and computer",
          "Correct board and port selected in Arduino IDE",
          'Code uploaded — "Done uploading" shown',
          "LED is blinking once per second",
        ],
        troubleshooting: [
          {
            symptom: "No port shows up in Tools → Port",
            fix: "Install the CH340 USB driver — it's the chip that makes your Arduino talk to your computer. The download link is on the kit card. After installing, unplug and re-plug the USB cable.",
          },
          {
            symptom: "Upload fails with 'avrdude: stk500_recv()' error",
            fix: "Try a different USB cable or port. Many USB cables are charge-only and can't carry data. A cable that came with a phone is usually a safe bet.",
          },
          {
            symptom: "Arduino IDE says 'Board not found' or upload times out",
            fix: "Go to Tools → Board and make sure 'Arduino Uno' (or the exact board name on your kit card) is selected. Then re-check Tools → Port — the correct port usually disappears when you unplug the board.",
          },
        ],
      },
      {
        slug: "4-troubleshoot",
        title: "Step 4 — Not working? Fix it here",
        duration: "3 min",
        description:
          "If the LED is not blinking, work through this checklist. Most issues come down to three things: wiring, wrong port, or a missing driver.",
        videoClip: {
          title: "Top 3 beginner Arduino mistakes and how to fix them",
          durationSec: 60,
          thumbnailAlt: "Close-up of breadboard with incorrect wiring being corrected",
          topic: "troubleshooting",
        },
        tips: [
          "LED backwards? Flip it around — polarity matters.",
          "No COM port shown? Install the CH340 USB driver (link below).",
          "Upload error? Make sure you selected the right board in Tools → Board.",
          'Red error in Arduino IDE? Copy the first line of the error into Google — it\'s almost always a quick fix.',
        ],
        checkpoints: [
          "LED is blinking",
          "If not, I checked the wiring against the diagram",
          "If still not, I tried a different USB port",
        ],
        troubleshooting: [
          {
            symptom: "LED is on but not blinking — it's just solid",
            fix: "The LED is connected and powered, but the code may not have uploaded. Re-open the Arduino IDE, paste the Blink sketch from Step 3, and upload again. Make sure you see 'Done uploading'.",
          },
          {
            symptom: "CH340 driver won't install on my computer",
            fix: "On Windows: right-click the installer and choose 'Run as Administrator'. On Mac (Ventura or later): go to System Settings → Privacy & Security and scroll down to allow the driver. Restart after installing.",
          },
          {
            symptom: "Everything looks right but the LED still won't light at all",
            fix: "The LED may be backwards — flip it around (swap which leg is in which row). If that doesn't help, try a different LED from the spare bag in your kit. LEDs can occasionally arrive with a factory defect.",
          },
        ],
      },
      {
        slug: "5-add-the-sensor",
        title: "Step 5 — Add the potentiometer",
        duration: "5 min",
        description:
          "Now add the potentiometer to your circuit. It connects to the Arduino's analog input A0. Turning the knob changes a number the Arduino reads — from 0 to 1023.",
        wiringDiagram: {
          altText:
            "Wiring diagram: potentiometer middle pin to A0, outer pins to 5V and GND",
          imagePlaceholder: "/images/wiring-potentiometer.svg",
          connections: [
            {
              from: "Arduino 5V",
              to: "Potentiometer left pin",
              color: "red",
              note: "Red = power",
            },
            {
              from: "Arduino GND",
              to: "Potentiometer right pin",
              color: "black",
              note: "Black = ground",
            },
            {
              from: "Potentiometer middle pin (wiper)",
              to: "Arduino A0",
              color: "orange",
              note: "This is the signal wire — it carries the reading",
            },
          ],
          componentLabels: [
            { component: "Potentiometer (10kΩ)", note: "middle pin (wiper) → A0; outer pins → 5V and GND" },
            { component: "Arduino A0", note: "analog input — reads 0–1023 as you turn the knob" },
          ],
        },
        tips: [
          "The middle pin of the potentiometer is the output — connect that to A0.",
          "The two outer pins connect to 5V and GND (either order works for a standard pot).",
        ],
        checkpoints: [
          "Potentiometer left pin to 5V (red wire)",
          "Potentiometer right pin to GND (black wire)",
          "Potentiometer middle pin to A0 (orange wire)",
        ],
        troubleshooting: [
          {
            symptom: "Potentiometer pins don't fit into the breadboard",
            fix: "The three pins need to go into three separate columns. Gently spread them apart slightly if needed — they're sturdy enough. Make sure the pot is sitting horizontally across the breadboard.",
          },
          {
            symptom: "LED stopped blinking after I added the potentiometer",
            fix: "One of your existing wires was probably bumped. Re-check that the yellow wire still connects Pin 13 to the resistor, and the black wire still connects the LED to GND.",
          },
          {
            symptom: "Not sure which pin is 'middle' on the potentiometer",
            fix: "Hold the potentiometer with the knob facing you. The three pins point downward. The middle pin is the wiper — connect that one to A0. The two outer pins go to 5V and GND in either order.",
          },
        ],
      },
      {
        slug: "6-upload-sensor-sketch",
        title: "Step 6 — Upload the sensor sketch",
        duration: "5 min",
        description:
          "Upload the second sketch. This one reads the potentiometer value on A0 and uses it to control how fast the LED blinks. Turn the knob to change the blink speed.",
        codeSnippet: {
          language: "cpp",
          filename: "BlinkWithSensor.ino",
          code: `// Blink speed controlled by potentiometer on A0.

void setup() {
  pinMode(13, OUTPUT);
  Serial.begin(9600);  // Open Serial Monitor to see readings
}

void loop() {
  int sensorValue = analogRead(A0);  // 0–1023
  int delayTime = map(sensorValue, 0, 1023, 50, 2000);  // 50ms–2s

  Serial.print("Sensor: ");
  Serial.print(sensorValue);
  Serial.print("  Delay: ");
  Serial.println(delayTime);

  digitalWrite(13, HIGH);
  delay(delayTime);
  digitalWrite(13, LOW);
  delay(delayTime);
}`,
        },
        videoClip: {
          title: "See the potentiometer control the LED in real time",
          durationSec: 60,
          thumbnailAlt: "Hand turning potentiometer knob, LED blink speed changes",
          topic: "demo",
        },
        tips: [
          'Open the Serial Monitor (Tools → Serial Monitor, set to 9600 baud) to see the raw readings.',
          "Turn the knob all the way left — the LED blinks fast. Turn right — it slows down.",
        ],
        checkpoints: [
          "Sketch uploaded successfully",
          "LED blink speed changes when I turn the knob",
          "Serial Monitor shows sensor readings",
        ],
        troubleshooting: [
          {
            symptom: "Turning the knob does nothing — blink speed stays the same",
            fix: "Open Serial Monitor (Tools → Serial Monitor, set baud to 9600). Turn the knob and watch the 'Sensor:' number. If it changes, the pot works — re-check your LED wiring. If the number doesn't change, the middle pin isn't in A0.",
          },
          {
            symptom: "Serial Monitor shows garbled characters (????? or random symbols)",
            fix: "The baud rate doesn't match. In the Serial Monitor window, find the dropdown in the bottom-right corner and change it to 9600 baud to match the Serial.begin(9600) in the code.",
          },
          {
            symptom: "Sensor values jump around wildly even when I'm not touching the knob",
            fix: "A wire is making intermittent contact. Gently press each wire into the breadboard to seat it fully. The orange wire from the pot's middle pin to A0 is the most likely culprit.",
          },
        ],
      },
      {
        slug: "7-done",
        title: "You did it! 🎉",
        duration: "2 min",
        description:
          "You just built and programmed a real circuit. LED controlled by code. Sensor reading feeding back into your program. That's the core loop of electronics — sense, decide, act. Project 2 builds on exactly this.",
        tips: [
          "Share your blink with someone! Hold your Arduino up and show them the sensor control.",
          "Ready for more? Project 2 is waiting — scan the second QR code on your kit card.",
        ],
        checkpoints: [
          "Project 1 complete",
          "LED blinks and responds to the potentiometer",
        ],
        troubleshooting: [
          {
            symptom: "Something stopped working right before the end",
            fix: "Go back to Step 6 and re-upload the BlinkWithSensor sketch. If the LED circuit was working in Step 3, it'll work again — just re-check any wires that may have shifted.",
          },
          {
            symptom: "I want to keep building but I'm not sure what's next",
            fix: "Scan the QR code labeled 'Project 2' on your kit card. It takes you directly to the RGB LED tutorial — you'll use the same breadboard setup and add a button.",
          },
          {
            symptom: "The circuit feels fragile — wires keep coming loose",
            fix: "That's normal for a breadboard prototype! For a more permanent build, you can use small zip ties to bundle wires together, or press each wire in firmly and fold it flat along the board.",
          },
        ],
      },
    ],
  },
  {
    slug: "project-2",
    title: "Project 2: Button + LED",
    tagline: "Control an LED with a push button — your first digital input.",
    totalDuration: "30 min",
    difficulty: "beginner",
    supportUrl: "mailto:support@arduinostarterco.com",
    components: [
      "Arduino-compatible USB-C board",
      "1× LED (any color)",
      "1× 220Ω resistor",
      "1× tactile push button",
      "1× 10kΩ resistor (pull-down)",
      "Breadboard",
      "Jumper wires",
      "USB-C cable",
    ],
    steps: [
      {
        slug: "1-whats-in-the-box",
        title: "Step 1 — What's in the box",
        duration: "3 min",
        description:
          "Identify the two new parts for this project: a tactile push button and a 10kΩ resistor. You'll also reuse the LED and 220Ω resistor from Project 1. Lay everything out before you start wiring.",
        tips: [
          "The tactile button has four legs arranged in two pairs. Each pair is internally connected — you only need to use two legs (one from each pair).",
          "The 10kΩ resistor has brown-black-orange color bands. It acts as a pull-down to prevent the input pin from floating.",
          "A floating pin reads random noise — the pull-down resistor keeps it solidly at 0V when the button isn't pressed.",
        ],
        checkpoints: [
          "I can identify the tactile push button",
          "I have a 10kΩ resistor (brown-black-orange bands)",
          "LED, 220Ω resistor, and jumper wires are ready",
        ],
        troubleshooting: [
          {
            symptom: "I can't tell the two resistors apart",
            fix: "Hold each resistor up to the light and read the color bands left to right: 220Ω = red-red-brown, 10kΩ = brown-black-orange. If you're unsure, use a multimeter on resistance mode — 220Ω reads ~220 and 10kΩ reads ~10,000.",
          },
          {
            symptom: "The button looks different from the diagram",
            fix: "Tactile buttons come in a few shapes but all work the same way. What matters is that you use one leg from each short side of the button body (the sides that are further apart). The long sides are internally shorted.",
          },
          {
            symptom: "I'm missing a part",
            fix: "Check the small resealable bag inside your kit — the 10kΩ resistor and extra buttons are often there. The kit card lists every component. Contact support@arduinostarterco.com if something is genuinely missing.",
          },
        ],
      },
      {
        slug: "2-wire-the-circuit",
        title: "Step 2 — Wire the button circuit",
        duration: "8 min",
        description:
          "Wire the LED to pin 13 (same as Project 1), then add the button. The button connects between 5V and pin 7. A 10kΩ pull-down resistor connects pin 7 to GND. This ensures the pin reads LOW when the button is open and HIGH when pressed.",
        wiringDiagram: {
          altText:
            "Wiring diagram: LED on pin 13 with 220Ω resistor; button between 5V and pin 7 with 10kΩ pull-down to GND",
          imagePlaceholder: "/images/wiring-button-led.svg",
          connections: [
            {
              from: "Arduino Pin 13",
              to: "220Ω resistor leg A",
              color: "yellow",
              note: "Same LED circuit as Project 1",
            },
            {
              from: "220Ω resistor leg B",
              to: "LED anode (long leg)",
              color: "yellow",
            },
            {
              from: "LED cathode (short leg)",
              to: "Arduino GND",
              color: "black",
              note: "Black = ground",
            },
            {
              from: "Arduino 5V",
              to: "Button leg A",
              color: "red",
              note: "One leg of the button to power",
            },
            {
              from: "Button leg B",
              to: "Arduino Pin 7",
              color: "green",
              note: "Other leg to the input pin",
            },
            {
              from: "Arduino Pin 7",
              to: "10kΩ resistor leg A",
              color: "green",
              note: "Pull-down — share the same row as pin 7's wire",
            },
            {
              from: "10kΩ resistor leg B",
              to: "Arduino GND",
              color: "black",
              note: "Pull-down to ground",
            },
          ],
          componentLabels: [
            { component: "LED", note: "long leg (anode) → 220Ω resistor → pin 13; short leg → GND" },
            { component: "220Ω resistor", note: "current limiter between pin 13 and LED anode" },
            { component: "Push button", note: "one leg → 5V; other leg → pin 7 and 10kΩ pull-down" },
            { component: "10kΩ pull-down resistor", note: "from pin 7 row to GND — keeps pin 7 LOW when button is released" },
          ],
        },
        videoClip: {
          title: "How to wire a push button with pull-down resistor",
          durationSec: 75,
          thumbnailAlt: "Hands wiring a push button to an Arduino breadboard",
          topic: "wiring",
        },
        tips: [
          "Use the breadboard's power rail (+ column) for 5V and the ground rail (- column) for GND to keep wiring tidy.",
          "The pull-down resistor connects from the same breadboard row as pin 7 to the GND rail.",
          "Button orientation matters: legs on the same short side are NOT connected. Span the center gap of the button body.",
        ],
        checkpoints: [
          "LED circuit wired to pin 13 with 220Ω resistor",
          "Button leg A connected to 5V (red wire)",
          "Button leg B connected to pin 7 (green wire)",
          "10kΩ pull-down between pin 7 row and GND",
        ],
        troubleshooting: [
          {
            symptom: "I'm not sure which button legs to use",
            fix: "Orient the button so it spans the center gap of the breadboard (legs on both sides). The two legs on the left go into the left side; the two on the right go into the right side. Connect top-left leg to 5V and top-right leg to pin 7.",
          },
          {
            symptom: "The pull-down resistor won't fit next to the button wire",
            fix: "Move the resistor to a different row that still connects to pin 7. Any row connected to the same column as pin 7's wire on the breadboard will work — just trace the row back to the pin 7 wire.",
          },
          {
            symptom: "LED came on as soon as I plugged in USB (without pressing the button)",
            fix: "The button or pull-down wiring is wrong and pin 7 is reading HIGH. Double-check that the 10kΩ resistor runs from the pin 7 row to GND — not to 5V. Also verify the LED wiring is only connected to pin 13, not inadvertently shorted.",
          },
        ],
      },
      {
        slug: "3-upload-button-sketch",
        title: "Step 3 — Upload the button sketch",
        duration: "7 min",
        description:
          "Upload the sketch below. It reads pin 7 each loop — if the button is pressed (HIGH), pin 13 turns the LED on. Release the button and the LED turns off.",
        codeSnippet: {
          language: "cpp",
          filename: "ButtonLED.ino",
          code: `// Button controls LED — press to light, release to extinguish.

const int LED_PIN    = 13;
const int BUTTON_PIN = 7;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT);  // Pull-down wired externally
  Serial.begin(9600);
}

void loop() {
  int buttonState = digitalRead(BUTTON_PIN);  // HIGH when pressed

  if (buttonState == HIGH) {
    digitalWrite(LED_PIN, HIGH);  // LED on
    Serial.println("Button pressed — LED ON");
  } else {
    digitalWrite(LED_PIN, LOW);   // LED off
  }
}`,
        },
        videoClip: {
          title: "Upload the button sketch and test it",
          durationSec: 60,
          thumbnailAlt: "Arduino IDE with ButtonLED sketch, upload button highlighted",
          topic: "code_upload",
        },
        tips: [
          "Open Serial Monitor (Tools → Serial Monitor, 9600 baud) to see a message every time you press the button.",
          "The LED should turn on the instant you press the button and go off the instant you release.",
          "If pin 7 is already configured as INPUT_PULLUP in a later sketch, you'd invert the logic — but for now the external pull-down means HIGH = pressed.",
        ],
        checkpoints: [
          "Sketch uploaded — 'Done uploading' confirmed",
          "Pressing the button lights the LED",
          "Releasing the button turns the LED off",
          "Serial Monitor shows 'Button pressed' messages",
        ],
        troubleshooting: [
          {
            symptom: "LED stays on or off regardless of button presses",
            fix: "Re-check that BUTTON_PIN is 7 in the code and that your green wire is in the pin 7 socket on the Arduino board. Pins on the board are labeled — find '7' and make sure the wire is there, not in pin 6 or 8.",
          },
          {
            symptom: "LED flickers rapidly when I hold the button",
            fix: "This is called 'bouncing' — the button makes and breaks contact multiple times per press. It's normal for tactile buttons. Project 2's bonus step covers software debouncing. For now it's harmless.",
          },
          {
            symptom: "Serial Monitor shows nothing when I press the button",
            fix: "Check the baud rate in Serial Monitor — it must match Serial.begin(9600). Also verify the correct COM port is selected in Tools → Port. If the IDE is open but upload was recent, try closing and reopening the Serial Monitor.",
          },
        ],
      },
      {
        slug: "4-toggle-with-debounce",
        title: "Step 4 — Toggle the LED (with debounce)",
        duration: "5 min",
        description:
          "Upgrade the sketch so each button press toggles the LED on or off. A short debounce delay filters out the rapid bouncing that happens when a button is physically pressed.",
        codeSnippet: {
          language: "cpp",
          filename: "ButtonToggle.ino",
          code: `// Each button press toggles the LED on or off (debounced).

const int LED_PIN    = 13;
const int BUTTON_PIN = 7;
const int DEBOUNCE_MS = 50;  // milliseconds to wait after first press

bool ledState       = false;
bool lastButton     = false;
unsigned long lastDebounceTime = 0;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT);
  Serial.begin(9600);
}

void loop() {
  bool currentButton = (digitalRead(BUTTON_PIN) == HIGH);

  // Only react on the rising edge (button just became pressed)
  if (currentButton && !lastButton) {
    unsigned long now = millis();
    if (now - lastDebounceTime > DEBOUNCE_MS) {
      ledState = !ledState;               // Flip the LED state
      digitalWrite(LED_PIN, ledState ? HIGH : LOW);
      Serial.print("LED toggled — now ");
      Serial.println(ledState ? "ON" : "OFF");
      lastDebounceTime = now;
    }
  }

  lastButton = currentButton;
}`,
        },
        tips: [
          "millis() returns the number of milliseconds since the Arduino powered on — it's great for non-blocking timing.",
          "The 50 ms debounce window ignores extra edges during the mechanical bounce period.",
          "Try changing DEBOUNCE_MS to 0 and see the flickering return — then put it back.",
        ],
        checkpoints: [
          "Sketch uploaded successfully",
          "First press turns LED on, second press turns LED off",
          "LED state is stable (no flickering on hold)",
        ],
        troubleshooting: [
          {
            symptom: "Each press turns the LED on and it never turns off",
            fix: "Make sure you uploaded ButtonToggle.ino and not the previous ButtonLED.ino. Verify 'Done uploading' appeared after the new upload. The toggle logic depends on detecting only the rising edge — if lastButton is stuck, check BUTTON_PIN value.",
          },
          {
            symptom: "LED still flickers even with debounce",
            fix: "Increase DEBOUNCE_MS from 50 to 100 or 150. Some buttons have worse bounce than others. Values up to 200 ms are safe — beyond that, quick double-presses might get filtered out.",
          },
          {
            symptom: "millis() overflow — will this break after a long time?",
            fix: "millis() overflows to 0 after about 50 days of continuous power. The subtraction `now - lastDebounceTime` handles the overflow correctly because of unsigned arithmetic — no fix needed.",
          },
        ],
      },
      {
        slug: "5-done",
        title: "You did it! 🎉",
        duration: "2 min",
        description:
          "You just wired your first digital input. Your Arduino now listens to the physical world — and you wrote the code to decide what to do about it. In Project 3 you'll go deeper into analog signals and control LED brightness with a knob.",
        tips: [
          "Try wiring a second LED to pin 12 and have it turn on when the first one turns off — a classic toggle pair.",
          "Ready for more? Project 3 is about analog output — scan the QR code on your kit card.",
        ],
        checkpoints: [
          "Project 2 complete",
          "Button toggles LED reliably with debounce",
        ],
        troubleshooting: [
          {
            symptom: "The button works but the LED is very dim",
            fix: "The 220Ω resistor limits current to keep the LED safe, and pin 13 is a digital output — it's either full on or full off. A dim LED usually means a loose wire. Reseat the resistor legs firmly in the breadboard.",
          },
          {
            symptom: "I accidentally disconnected everything",
            fix: "Go back to Step 2's wiring diagram and rebuild from scratch. It's faster the second time — and re-wiring cements the connections in your memory.",
          },
          {
            symptom: "I want to keep the LED state after power-off",
            fix: "That requires writing to EEPROM — a built-in storage chip on the Arduino. It's a great Project 5+ experiment. For now, the LED starts off every time power is applied (because ledState initializes to false).",
          },
        ],
      },
    ],
  },
  {
    slug: "project-3",
    title: "Project 3: Analog Brightness Control",
    tagline: "Dim and brighten an LED using PWM — your first analog output.",
    totalDuration: "30 min",
    difficulty: "beginner",
    supportUrl: "mailto:support@arduinostarterco.com",
    components: [
      "Arduino-compatible USB-C board",
      "1× LED (any color)",
      "1× 220Ω resistor",
      "1× potentiometer (10kΩ)",
      "Breadboard",
      "Jumper wires",
      "USB-C cable",
    ],
    steps: [
      {
        slug: "1-what-is-pwm",
        title: "Step 1 — What is PWM?",
        duration: "3 min",
        description:
          "In Projects 1 and 2 you used digital outputs — fully on or fully off. This project introduces PWM (Pulse Width Modulation): a way to simulate analog voltages by switching the pin on and off very fast. The Arduino uses this on pins marked with a ~ symbol (3, 5, 6, 9, 10, 11). You'll wire your LED to pin 9 this time.",
        tips: [
          "PWM values run from 0 (fully off) to 255 (fully on). 128 is approximately 50% brightness.",
          "The Arduino flips the pin thousands of times per second — fast enough that your eye sees it as a continuous glow.",
          "Only pins marked ~ on your Arduino board support analogWrite(). Pin 13 does NOT — that's why we move to pin 9.",
        ],
        checkpoints: [
          "I understand that PWM pins are marked with ~ on the board",
          "I know analogWrite() accepts 0–255",
          "My LED and 220Ω resistor are ready",
        ],
        troubleshooting: [
          {
            symptom: "I can't find the ~ symbols on my board",
            fix: "Look at the row of digital pins (0–13). On most Arduino Uno-style boards, pins 3, 5, 6, 9, 10, and 11 have a small tilde (~) next to their number. If your board has no tildes at all, check the kit card — some boards use all pins for PWM.",
          },
          {
            symptom: "What's the difference between analogWrite() and analogRead()?",
            fix: "analogRead() reads a voltage coming IN from a sensor (0–1023). analogWrite() sends a PWM signal OUT to a component (0–255). They work on different pins: analogRead on A0–A5, analogWrite on ~ pins.",
          },
          {
            symptom: "Can I use pin 3 instead of pin 9?",
            fix: "Yes — any ~ pin works for this project. Pin 9 is used in the instructions to avoid conflict with the built-in LED on pin 13. If you use pin 3, change LED_PIN to 3 in the code.",
          },
        ],
      },
      {
        slug: "2-wire-led-pwm",
        title: "Step 2 — Wire the LED to pin 9",
        duration: "5 min",
        description:
          "Wire the LED circuit to pin 9 instead of pin 13. Everything else is the same as Project 1 — resistor in series, cathode to GND. Pin 9's ~ capability is what enables brightness control.",
        wiringDiagram: {
          altText:
            "Wiring diagram: LED anode through 220Ω resistor to Arduino pin 9; LED cathode to GND",
          imagePlaceholder: "/images/wiring-led-pwm.svg",
          connections: [
            {
              from: "Arduino Pin 9 (~)",
              to: "220Ω resistor leg A",
              color: "yellow",
              note: "Pin 9 supports PWM (~ symbol on board)",
            },
            {
              from: "220Ω resistor leg B",
              to: "LED anode (long leg)",
              color: "yellow",
            },
            {
              from: "LED cathode (short leg)",
              to: "Arduino GND",
              color: "black",
              note: "Black = ground",
            },
          ],
          componentLabels: [
            { component: "LED", note: "long leg (anode) → 220Ω resistor; short leg (cathode) → GND" },
            { component: "220Ω resistor", note: "current limiter between pin 9 (~) and LED anode" },
            { component: "Arduino Pin 9 (~)", note: "PWM-capable pin — analogWrite() controls brightness 0–255" },
          ],
        },
        videoClip: {
          title: "Wire the LED brightness circuit to pin 9",
          durationSec: 45,
          thumbnailAlt: "Hands wiring LED to pin 9 on Arduino breadboard",
          topic: "wiring",
        },
        tips: [
          "This circuit is identical to Project 1's LED circuit — just move the yellow wire from pin 13 to pin 9.",
          "Double-check you're using pin 9 on the digital side, not A0–A5 on the analog side.",
        ],
        checkpoints: [
          "Yellow wire from pin 9 (~) to resistor",
          "Resistor connects to LED anode (long leg)",
          "LED cathode (short leg) to GND via black wire",
        ],
        troubleshooting: [
          {
            symptom: "LED doesn't light at all when I plug in USB",
            fix: "That's expected at this point — no sketch is uploaded yet. The LED will light up after you complete Step 3. Verify the wiring matches the diagram above first.",
          },
          {
            symptom: "I accidentally plugged the resistor into the analog pins (A0–A5)",
            fix: "The analog pins are on the opposite side of the board from the digital pins. Pull the wire and insert it into the pin labeled '9' on the digital side. The 'DIGITAL (PWM~)' label near those pins is a helpful marker.",
          },
          {
            symptom: "I put the LED in backwards",
            fix: "No harm done — just flip it around. Long leg (anode) toward pin 9 through the resistor, short leg (cathode) to GND.",
          },
        ],
      },
      {
        slug: "3-upload-brightness-sketch",
        title: "Step 3 — Upload the brightness sketch",
        duration: "7 min",
        description:
          "Upload this sketch. It fades the LED from off to full brightness and back in a continuous loop using analogWrite(). Watch the smooth glow — this is PWM in action.",
        codeSnippet: {
          language: "cpp",
          filename: "LEDFade.ino",
          code: `// Fade LED in and out using PWM on pin 9.

const int LED_PIN = 9;  // Must be a PWM pin (~)

void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // Fade in: 0 → 255
  for (int brightness = 0; brightness <= 255; brightness++) {
    analogWrite(LED_PIN, brightness);
    Serial.println(brightness);
    delay(8);  // ~2 seconds total for full fade-in
  }

  // Fade out: 255 → 0
  for (int brightness = 255; brightness >= 0; brightness--) {
    analogWrite(LED_PIN, brightness);
    delay(8);
  }
}`,
        },
        videoClip: {
          title: "Watch the LED fade smoothly with PWM",
          durationSec: 60,
          thumbnailAlt: "Arduino with LED glowing and dimming smoothly",
          topic: "demo",
        },
        tips: [
          "Open Serial Monitor to watch the brightness value count up and down in real time.",
          "Change the delay(8) to delay(2) for a faster fade or delay(20) for a slower, more dramatic pulse.",
          "analogWrite() works independently of the loop — calling it once sets the duty cycle and the pin holds that level.",
        ],
        checkpoints: [
          "Sketch uploaded — 'Done uploading' confirmed",
          "LED fades in and out smoothly (not blinking)",
          "Serial Monitor shows values 0–255",
        ],
        troubleshooting: [
          {
            symptom: "LED blinks on and off instead of fading smoothly",
            fix: "The LED is probably still in pin 13 (from Project 1), not pin 9. Check the yellow wire's destination on the Arduino board. Pin 13 doesn't support analogWrite() — it will jump between HIGH and LOW unpredictably.",
          },
          {
            symptom: "LED fades but never fully turns off",
            fix: "A very faint glow at analogWrite(0) is normal on some LEDs — the PWM duty cycle at 0 can leak a tiny amount of current. If it bothers you, add digitalWrite(LED_PIN, LOW) right after the fade-out loop.",
          },
          {
            symptom: "Serial Monitor shows the values but they go by too fast to read",
            fix: "The fade happens quickly. Pause Serial Monitor output by clicking 'Autoscroll' to uncheck it, or add a longer delay. The values are correct — the speed just makes them hard to watch.",
          },
        ],
      },
      {
        slug: "4-add-potentiometer",
        title: "Step 4 — Add the potentiometer",
        duration: "5 min",
        description:
          "Add the potentiometer from Project 1. Wire it the same way: left pin to 5V, right pin to GND, middle pin to A0. Now you'll use the knob to set the LED brightness manually instead of looping through values automatically.",
        wiringDiagram: {
          altText:
            "Wiring diagram: potentiometer middle pin to A0; outer pins to 5V and GND; LED circuit on pin 9 unchanged",
          imagePlaceholder: "/images/wiring-brightness-pot.svg",
          connections: [
            {
              from: "Arduino 5V",
              to: "Potentiometer left pin",
              color: "red",
              note: "Same as Project 1",
            },
            {
              from: "Arduino GND",
              to: "Potentiometer right pin",
              color: "black",
            },
            {
              from: "Potentiometer middle pin (wiper)",
              to: "Arduino A0",
              color: "orange",
              note: "Signal wire",
            },
          ],
          componentLabels: [
            { component: "Potentiometer (10kΩ)", note: "middle pin → A0; outer pins → 5V and GND" },
            { component: "LED + 220Ω resistor", note: "unchanged from Step 2 — still wired to pin 9 (~)" },
            { component: "Arduino A0", note: "analog read 0–1023; mapped to 0–255 for analogWrite on pin 9" },
          ],
        },
        tips: [
          "The LED circuit on pin 9 stays exactly as wired in Step 2 — just add the potentiometer alongside it.",
          "analogRead(A0) returns 0–1023. You'll use map() to convert that to 0–255 for analogWrite().",
        ],
        checkpoints: [
          "Potentiometer left pin to 5V (red wire)",
          "Potentiometer right pin to GND (black wire)",
          "Potentiometer middle pin to A0 (orange wire)",
          "LED circuit on pin 9 unchanged",
        ],
        troubleshooting: [
          {
            symptom: "LED stopped fading after I added the potentiometer",
            fix: "The fade sketch is still running — the knob doesn't control brightness yet (that's the next step). If the LED stopped entirely, a wire was bumped. Reseat the LED circuit wires in pin 9 and GND.",
          },
          {
            symptom: "I accidentally wired the pot to pin 9 instead of A0",
            fix: "Move the orange wire from pin 9 to A0. A0 is in the row of analog pins labeled A0–A5 on the opposite side of the board from the digital pins.",
          },
          {
            symptom: "Not sure which potentiometer pin is 'left' or 'right'",
            fix: "Orientation doesn't matter for brightness control — the two outer pins just determine which way turning the knob increases or decreases the reading. If you turn the knob right and brightness goes up but you expected it to go down, simply swap the red and black wires on the pot's outer pins.",
          },
        ],
      },
      {
        slug: "5-upload-knob-sketch",
        title: "Step 5 — Control brightness with the knob",
        duration: "5 min",
        description:
          "Upload this sketch. It reads the potentiometer and maps the value to a PWM brightness level. Turn the knob to dim or brighten the LED in real time.",
        codeSnippet: {
          language: "cpp",
          filename: "KnobBrightness.ino",
          code: `// Potentiometer on A0 controls LED brightness via PWM on pin 9.

const int LED_PIN    = 9;   // PWM pin
const int SENSOR_PIN = A0;  // Potentiometer wiper

void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(SENSOR_PIN);           // 0–1023
  int brightness  = map(sensorValue, 0, 1023, 0, 255); // 0–255

  analogWrite(LED_PIN, brightness);

  Serial.print("Sensor: ");
  Serial.print(sensorValue);
  Serial.print("  Brightness: ");
  Serial.println(brightness);

  delay(20);  // Small delay for stable Serial output
}`,
        },
        videoClip: {
          title: "Control LED brightness live with the potentiometer knob",
          durationSec: 60,
          thumbnailAlt: "Hand turning knob, LED visibly dimming and brightening",
          topic: "demo",
        },
        tips: [
          "map(value, 0, 1023, 0, 255) rescales the 10-bit sensor range to the 8-bit PWM range.",
          "Open Serial Monitor to confirm the brightness value changes as you turn the knob.",
          "Turn the knob all the way left for off, all the way right for full brightness.",
        ],
        checkpoints: [
          "Sketch uploaded successfully",
          "LED brightness changes as I turn the knob",
          "Serial Monitor shows both sensor and brightness values",
          "Fully left = off, fully right = full brightness",
        ],
        troubleshooting: [
          {
            symptom: "Turning the knob only changes brightness in one direction — the other end doesn't reach 0 or 255",
            fix: "Check that the pot's outer pins are connected to 5V and GND (not both to GND or both to 5V). If the range is just narrow but symmetric, your potentiometer may have a different resistance taper — it's still working correctly.",
          },
          {
            symptom: "Brightness jumps around even when I hold the knob still",
            fix: "Analog readings always have a little noise. You can smooth it by averaging several readings. Or just ignore readings within ±5 of the last value. For this tutorial, small jitter is normal and harmless.",
          },
          {
            symptom: "map() returns slightly negative values",
            fix: "This can happen if analogRead goes slightly above 1023 due to noise. Add a constrain(): `brightness = constrain(map(sensorValue, 0, 1023, 0, 255), 0, 255);` — this clamps the output to the valid range.",
          },
        ],
      },
      {
        slug: "6-done",
        title: "You did it! 🎉",
        duration: "2 min",
        description:
          "You just learned analog output. By combining analogRead() and analogWrite() with map(), you translated a physical knob position into a smooth light level. This read-transform-write pattern is the foundation of all sensor-actuator projects. Project 4 puts a motor in the actuator slot.",
        tips: [
          "Try wiring a second LED to pin 10 and running it at `255 - brightness` — the two LEDs will be mirror opposites of each other.",
          "Ready for Project 4? You'll use this same map() pattern to control a servo motor angle.",
        ],
        checkpoints: [
          "Project 3 complete",
          "LED brightness controlled by potentiometer via PWM",
        ],
        troubleshooting: [
          {
            symptom: "The LED seems to bottom out at a faint glow even at full counter-clockwise",
            fix: "Some LEDs have a forward voltage threshold — below a certain duty cycle they just turn off cleanly. Other LEDs show a faint glow. Either behavior is fine for learning purposes.",
          },
          {
            symptom: "I want the LED to pulse automatically AND respond to the knob",
            fix: "That's a great experiment: store the knob value as the maximum brightness, then run the fade loop up to that maximum. You'll need to remove the delay() and use millis() for timing — a great way to practice non-blocking code.",
          },
          {
            symptom: "My USB power can't supply enough current and the board resets",
            fix: "The LED + Arduino together draw well under 100 mA — USB can handle that easily. If your board is resetting, the USB cable or port may be faulty. Try a different cable or plug into a USB hub with its own power supply.",
          },
        ],
      },
    ],
  },
  {
    slug: "project-4",
    title: "Project 4: Servo Motor Control",
    tagline: "Sweep a servo to any angle — your first moving machine.",
    totalDuration: "35 min",
    difficulty: "beginner",
    supportUrl: "mailto:support@arduinostarterco.com",
    components: [
      "Arduino-compatible USB-C board",
      "1× SG90 servo motor (with connector)",
      "1× potentiometer (10kΩ)",
      "Breadboard",
      "Jumper wires",
      "USB-C cable",
    ],
    steps: [
      {
        slug: "1-meet-the-servo",
        title: "Step 1 — Meet the servo",
        duration: "3 min",
        description:
          "A servo motor is different from a regular motor: instead of spinning continuously, it rotates to a specific angle and holds there. The SG90 in your kit can move from 0° to 180°. It has three wires: brown (GND), red (5V), and orange (signal). The Arduino tells it exactly where to go.",
        tips: [
          "The signal wire carries a PWM pulse — but you won't use analogWrite() directly. The Servo library handles it for you.",
          "Don't force the servo horn past its limits — if it buzzes and vibrates at 0° or 180°, it's hitting a mechanical stop. Send it to 10° and 170° instead.",
          "The plastic horn (arm) on top of the servo can be swapped for other shapes — your kit includes spares.",
        ],
        checkpoints: [
          "I can identify the three servo wires: brown=GND, red=5V, orange=signal",
          "I understand the servo moves to an angle, not a speed",
          "Potentiometer and jumper wires are ready",
        ],
        troubleshooting: [
          {
            symptom: "My servo wires are different colors",
            fix: "Some servo brands use black (GND), red (5V), white or yellow (signal). The color convention isn't standardized. Check the label or markings on your servo — the middle wire is almost always 5V and the thinner gauge wire is usually signal.",
          },
          {
            symptom: "The servo horn fell off",
            fix: "Press it back on straight — it's designed to be removed and swapped. The center gear has a single-tooth offset so it can only go on one way cleanly. If it feels loose, the small screw in your kit bag tightens it.",
          },
          {
            symptom: "I can hear the servo making a faint buzzing sound",
            fix: "That's normal when it's idle with power applied. The servo constantly makes small corrections to hold its position. It should stop buzzing when it reaches its target angle and the signal is clean.",
          },
        ],
      },
      {
        slug: "2-wire-the-servo",
        title: "Step 2 — Wire the servo",
        duration: "7 min",
        description:
          "Connect the servo directly to the Arduino using jumper wires and the breadboard as a connection hub. Brown wire to GND, red wire to 5V, orange signal wire to pin 9. Use the breadboard's power rails to distribute 5V and GND cleanly.",
        wiringDiagram: {
          altText:
            "Wiring diagram: servo brown to GND rail, red to 5V rail, orange signal to pin 9",
          imagePlaceholder: "/images/wiring-servo.svg",
          connections: [
            {
              from: "Arduino 5V",
              to: "Breadboard + rail",
              color: "red",
              note: "Power the breadboard rail for clean distribution",
            },
            {
              from: "Arduino GND",
              to: "Breadboard − rail",
              color: "black",
            },
            {
              from: "Servo red wire",
              to: "Breadboard + rail",
              color: "red",
              note: "Servo power from 5V rail",
            },
            {
              from: "Servo brown wire",
              to: "Breadboard − rail",
              color: "black",
              note: "Servo ground",
            },
            {
              from: "Servo orange wire",
              to: "Arduino Pin 9",
              color: "orange",
              note: "Signal wire — controls the angle",
            },
          ],
          componentLabels: [
            { component: "Servo motor (SG90)", note: "red → 5V rail; brown → GND rail; orange (signal) → pin 9" },
            { component: "Arduino Pin 9 (~)", note: "PWM signal — Servo.write() angle 0°–180°" },
            { component: "Breadboard power rails", note: "+ rail to 5V, − rail to GND — distributes power cleanly" },
          ],
        },
        videoClip: {
          title: "Wire a servo motor to an Arduino step by step",
          durationSec: 75,
          thumbnailAlt: "Hands connecting servo wires to Arduino breadboard",
          topic: "wiring",
        },
        tips: [
          "Use a short jumper wire to plug into the servo's 3-pin connector, then run longer wires to the breadboard.",
          "The servo connector is keyed — it only plugs in one way. If it won't go in, flip it 180°.",
          "Servos draw more current than LEDs. Powering through the Arduino's 5V pin is fine for a single SG90, but avoid running more than two servos this way.",
        ],
        checkpoints: [
          "Arduino 5V connected to breadboard + rail",
          "Arduino GND connected to breadboard − rail",
          "Servo red wire to + rail",
          "Servo brown wire to − rail",
          "Servo orange signal wire to pin 9",
        ],
        troubleshooting: [
          {
            symptom: "The servo connector doesn't fit into my jumper wires",
            fix: "Use female-to-male jumper wires (the ones with a small pin on one end and socket on the other). Insert the pin end into the servo connector socket and plug the socket end of another wire into the breadboard.",
          },
          {
            symptom: "Servo twitches when I plug in USB even before uploading",
            fix: "That's normal — the servo gets power but no signal. It picks up noise on the signal line and makes small random movements. It'll settle once the sketch sends a clean signal.",
          },
          {
            symptom: "Arduino board resets when I connect the servo",
            fix: "The servo's startup current spike can momentarily overdraw the USB supply. Try a different USB port (computer ports provide more current than hub ports). Adding a 100μF capacitor across the servo's power wires helps — but for a single SG90 this is rarely needed.",
          },
        ],
      },
      {
        slug: "3-upload-servo-sketch",
        title: "Step 3 — Upload the servo sweep sketch",
        duration: "7 min",
        description:
          "Upload the sweep sketch. It uses the built-in Servo library to sweep the motor from 0° to 180° and back continuously. No extra library installation is needed — Servo ships with the Arduino IDE.",
        codeSnippet: {
          language: "cpp",
          filename: "ServoSweep.ino",
          code: `// Sweep a servo from 0° to 180° and back continuously.
#include <Servo.h>

Servo myServo;

const int SERVO_PIN = 9;

void setup() {
  myServo.attach(SERVO_PIN);
  Serial.begin(9600);
  Serial.println("Servo sweep started");
}

void loop() {
  // Sweep from 0 to 180 degrees
  for (int angle = 0; angle <= 180; angle++) {
    myServo.write(angle);
    Serial.print("Angle: ");
    Serial.println(angle);
    delay(15);  // ~2.7 seconds for full sweep
  }

  // Sweep back from 180 to 0
  for (int angle = 180; angle >= 0; angle--) {
    myServo.write(angle);
    delay(15);
  }
}`,
        },
        videoClip: {
          title: "Watch the servo sweep back and forth",
          durationSec: 60,
          thumbnailAlt: "Servo horn rotating back and forth in a slow sweep",
          topic: "demo",
        },
        tips: [
          "myServo.write(angle) takes an integer 0–180 representing degrees.",
          "myServo.attach(pin) tells the library which pin the signal wire is on.",
          "Open Serial Monitor to watch the angle count up and down.",
        ],
        checkpoints: [
          "Sketch compiled and uploaded without errors",
          "Servo horn sweeps left and right smoothly",
          "Servo stays within 0°–180° without buzzing at the limits",
        ],
        troubleshooting: [
          {
            symptom: "Sketch won't compile — 'Servo.h: No such file or directory'",
            fix: "The Servo library comes with the Arduino IDE but can sometimes be missing. Go to Sketch → Include Library → Manage Libraries, search for 'Servo', and install the one by Michael Margolis / Arduino. Then re-upload.",
          },
          {
            symptom: "Servo hums loudly at 0° and 180°",
            fix: "The servo is hitting its mechanical endpoints and fighting against the signal. Change the loop range from `0 to 180` to `10 to 170` to stay safely within the mechanical travel range.",
          },
          {
            symptom: "Servo only twitches slightly instead of doing a full sweep",
            fix: "Some servos need a calibration write before sweeping. Add `myServo.write(90); delay(500);` in setup() to center the servo first, then start the loop.",
          },
        ],
      },
      {
        slug: "4-knob-controls-servo",
        title: "Step 4 — Control the servo with the potentiometer",
        duration: "7 min",
        description:
          "Add the potentiometer (same wiring as Projects 1 and 3: left=5V, middle=A0, right=GND). Upload the new sketch to use the knob to position the servo at any angle from 0° to 180° in real time.",
        wiringDiagram: {
          altText:
            "Wiring diagram: potentiometer added — middle pin to A0, outer pins to 5V and GND rails; servo circuit unchanged",
          imagePlaceholder: "/images/wiring-servo-knob.svg",
          connections: [
            {
              from: "Arduino 5V (via + rail)",
              to: "Potentiometer left pin",
              color: "red",
            },
            {
              from: "Arduino GND (via − rail)",
              to: "Potentiometer right pin",
              color: "black",
            },
            {
              from: "Potentiometer middle pin (wiper)",
              to: "Arduino A0",
              color: "orange",
              note: "Analog signal — 0 to 1023",
            },
          ],
          componentLabels: [
            { component: "Potentiometer (10kΩ)", note: "middle pin → A0; outer pins → 5V and GND rails" },
            { component: "Servo motor (SG90)", note: "unchanged from Step 2 — red/brown/orange to rails and pin 9" },
            { component: "Arduino A0", note: "reads 0–1023; mapped to 0°–180° for servo angle" },
          ],
        },
        codeSnippet: {
          language: "cpp",
          filename: "ServoKnob.ino",
          code: `// Potentiometer on A0 controls servo angle.
#include <Servo.h>

Servo myServo;

const int SERVO_PIN  = 9;
const int SENSOR_PIN = A0;

void setup() {
  myServo.attach(SERVO_PIN);
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(SENSOR_PIN);           // 0–1023
  int angle       = map(sensorValue, 0, 1023, 0, 180); // 0°–180°

  myServo.write(angle);

  Serial.print("Sensor: ");
  Serial.print(sensorValue);
  Serial.print("  Angle: ");
  Serial.println(angle);

  delay(15);  // Give servo time to reach position before next read
}`,
        },
        videoClip: {
          title: "Turn the knob to control the servo angle live",
          durationSec: 60,
          thumbnailAlt: "Hand on potentiometer knob, servo horn moving in sync",
          topic: "demo",
        },
        tips: [
          "The delay(15) is important — it gives the servo time to physically reach the target before being commanded again.",
          "Turn the knob slowly for smooth motion. Rapid back-and-forth can overdraw current and reset the board.",
          "Serial Monitor shows the live angle — open it to verify the mapping is working.",
        ],
        checkpoints: [
          "Potentiometer added to 5V, GND, and A0",
          "ServoKnob.ino uploaded successfully",
          "Servo angle tracks knob position in real time",
          "Full-left knob → ~0°, full-right knob → ~180°",
        ],
        troubleshooting: [
          {
            symptom: "Servo jumps to random positions when I barely touch the knob",
            fix: "Analog noise from the potentiometer is amplified when it's new or the contact is loose. Smooth the reading: store the last angle and only call myServo.write() if the new angle differs by more than 2°. This filters noise without lag.",
          },
          {
            symptom: "Servo only moves to a small range (e.g., 40°–80°) no matter what I do",
            fix: "Your potentiometer may not reach the full 0V–5V range. Check with Serial Monitor: does the raw sensor value reach near 0 and near 1023? If not, swap the red and black wires on the outer pot pins or press the knob against each stop to verify the mechanical range.",
          },
          {
            symptom: "Arduino resets mid-sketch when the servo moves fast",
            fix: "Rapid servo movements spike current. Try slowing the reads by increasing delay(15) to delay(30). Alternatively, power the servo from an external 5V supply (e.g., 4× AA batteries) instead of the Arduino's 5V pin.",
          },
        ],
      },
      {
        slug: "5-done",
        title: "You did it! 🎉",
        duration: "2 min",
        description:
          "You've built your first electromechanical project — a physical system that reads the world and moves in response. The Servo library, the map() function, and analog input are a toolkit you'll use in dozens of future projects. Project 5 brings in output of a different kind: text on a display.",
        tips: [
          "Attach a small piece of cardboard to the servo horn to make a pointer — you just built an analog gauge.",
          "Try writing `myServo.write(90);` in setup() before the loop to always center the servo on power-on.",
        ],
        checkpoints: [
          "Project 4 complete",
          "Knob smoothly controls servo angle 0°–180°",
        ],
        troubleshooting: [
          {
            symptom: "Servo makes a high-pitched whine even when still",
            fix: "A steady high-frequency whine (different from the buzzing at limits) usually means the PWM signal has noise. Make sure no other code is running on pin 9. Try restarting the Arduino by pressing its reset button.",
          },
          {
            symptom: "Knob is working but I want the servo to move slower",
            fix: "Add a smoothing step: on each loop iteration, move the servo only a fraction of the way toward the target. For example: `currentAngle += (targetAngle - currentAngle) * 0.1;` — this creates an exponential ease effect.",
          },
          {
            symptom: "I want the servo to remember its last position after power-off",
            fix: "Write the angle to EEPROM: `EEPROM.write(0, angle);` in the loop, and read it in setup() with `int savedAngle = EEPROM.read(0); myServo.write(savedAngle);`. The EEPROM library is built into the Arduino IDE.",
          },
        ],
      },
    ],
  },
  {
    slug: "project-5",
    title: "Project 5: LCD Display Output",
    tagline: "Print text and sensor data to a 16×2 LCD screen.",
    totalDuration: "40 min",
    difficulty: "beginner",
    supportUrl: "mailto:support@arduinostarterco.com",
    components: [
      "Arduino-compatible USB-C board",
      "1× 16×2 LCD display (HD44780 compatible)",
      "1× PCF8574 I2C backpack (soldered to LCD)",
      "1× potentiometer (10kΩ) — optional for contrast if no I2C backpack",
      "Breadboard",
      "Jumper wires",
      "USB-C cable",
    ],
    steps: [
      {
        slug: "1-meet-the-lcd",
        title: "Step 1 — Meet the LCD",
        duration: "3 min",
        description:
          "Your kit includes a 16×2 LCD: two rows of 16 characters each. It comes with an I2C backpack soldered to the back, which lets you control all 16 LCD pins using just 2 wires (SDA and SCL) from the Arduino. This is the I2C protocol — a standard way for chips to talk to each other.",
        tips: [
          "I2C uses only two signal wires — SDA (data) and SCL (clock) — plus power and ground. It's much simpler to wire than the 6-wire parallel interface.",
          "The I2C address of your LCD backpack is usually 0x27 or 0x3F. You'll run a scan sketch to find yours in Step 2.",
          "The contrast knob on the I2C backpack is a small blue potentiometer — turn it with a screwdriver to adjust how dark the characters appear.",
        ],
        checkpoints: [
          "I can see the I2C backpack (small blue board) soldered to the back of the LCD",
          "I know the LCD will connect with 4 wires: VCC, GND, SDA, SCL",
          "Breadboard and jumper wires are ready",
        ],
        troubleshooting: [
          {
            symptom: "My LCD doesn't have an I2C backpack — it has 16 pins in a row",
            fix: "Your kit may include a parallel-interface LCD. The wiring is more complex but the library is the same (LiquidCrystal). Refer to the 'LCD parallel wiring' supplement on the kit card QR code. The rest of this tutorial assumes I2C.",
          },
          {
            symptom: "I can see the I2C backpack but I can't read any chips or labels on it",
            fix: "That's fine — I2C backpacks come in multiple variants but all behave the same way. Run the I2C scanner sketch in Step 2 to find the address automatically.",
          },
          {
            symptom: "The contrast screw on the backpack is already turned all the way",
            fix: "Turn it slowly in the other direction. Contrast adjusts the visibility of the character blocks — if all characters appear black or invisible, the contrast is at the wrong extreme.",
          },
        ],
      },
      {
        slug: "2-wire-the-lcd",
        title: "Step 2 — Wire the LCD",
        duration: "7 min",
        description:
          "Connect the I2C backpack's four pins to the Arduino. VCC to 5V, GND to GND, SDA to Arduino A4, SCL to Arduino A5. Then run the I2C scanner sketch to confirm the address.",
        wiringDiagram: {
          altText:
            "Wiring diagram: LCD I2C backpack VCC to 5V, GND to GND, SDA to A4, SCL to A5",
          imagePlaceholder: "/images/wiring-lcd-i2c.svg",
          connections: [
            {
              from: "I2C backpack VCC",
              to: "Arduino 5V",
              color: "red",
              note: "LCD needs 5V — do not use 3.3V",
            },
            {
              from: "I2C backpack GND",
              to: "Arduino GND",
              color: "black",
            },
            {
              from: "I2C backpack SDA",
              to: "Arduino A4",
              color: "blue",
              note: "SDA is the data line",
            },
            {
              from: "I2C backpack SCL",
              to: "Arduino A5",
              color: "green",
              note: "SCL is the clock line",
            },
          ],
          componentLabels: [
            { component: "LCD 16×2 + I2C backpack", note: "VCC → 5V; GND → GND; SDA → A4; SCL → A5" },
            { component: "I2C SDA (A4)", note: "data line — carries display content to the LCD" },
            { component: "I2C SCL (A5)", note: "clock line — synchronises data transfer timing" },
          ],
        },
        codeSnippet: {
          language: "cpp",
          filename: "I2CScanner.ino",
          code: `// Scan for I2C devices and print their addresses to Serial Monitor.
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

void loop() {}`,
        },
        videoClip: {
          title: "Wire the LCD and find its I2C address",
          durationSec: 75,
          thumbnailAlt: "Hands wiring four-wire I2C LCD to Arduino",
          topic: "wiring",
        },
        tips: [
          "A4 and A5 are the hardware I2C pins on the Arduino Uno. They work as analog inputs too but I2C takes priority when Wire.begin() is called.",
          "Upload I2CScanner.ino and open Serial Monitor at 9600 baud. You'll see either 0x27 or 0x3F. Write that address down — you need it in the next step.",
          "If the scanner finds nothing, check your SDA and SCL wires aren't swapped.",
        ],
        checkpoints: [
          "LCD VCC to Arduino 5V (red wire)",
          "LCD GND to Arduino GND (black wire)",
          "LCD SDA to Arduino A4 (blue wire)",
          "LCD SCL to Arduino A5 (green wire)",
          "I2C scanner found a device at 0x27 or 0x3F",
        ],
        troubleshooting: [
          {
            symptom: "I2C scanner shows 'Scan complete' but no device address found",
            fix: "Re-check SDA and SCL connections — they're easy to swap. Also confirm VCC and GND are connected. If the LCD backboard has a power LED, it should be on. Lastly, try a different wire for SDA or SCL in case one is broken.",
          },
          {
            symptom: "Scanner found address 0x00 or many addresses at once",
            fix: "Address 0x00 is a general call — ignore it. Multiple addresses usually means SDA or SCL is shorted to another pin. Unplug everything and rewire carefully.",
          },
          {
            symptom: "Serial Monitor shows nothing at all",
            fix: "Verify the Serial Monitor baud rate is set to 9600. Also check that the sketch uploaded successfully and the correct COM port is selected in Tools → Port.",
          },
        ],
      },
      {
        slug: "3-install-lcd-library",
        title: "Step 3 — Install the LCD library",
        duration: "5 min",
        description:
          "You need the LiquidCrystal_I2C library to drive the I2C backpack. Install it through the Arduino IDE Library Manager in about a minute.",
        tips: [
          "In the Arduino IDE: Sketch → Include Library → Manage Libraries. Search for 'LiquidCrystal I2C' and install the one by Frank de Brabander (most common) or by johnrickman.",
          "Once installed, the library stays installed — you won't need to do this again for future LCD projects.",
          "If you're on Arduino IDE 2.x, the Library Manager is in the left sidebar (book icon).",
        ],
        checkpoints: [
          "Library Manager opened in Arduino IDE",
          "LiquidCrystal I2C library installed",
          "No red error in the IDE console",
        ],
        troubleshooting: [
          {
            symptom: "I can't find 'LiquidCrystal I2C' in the Library Manager",
            fix: "Make sure you're searching 'LiquidCrystal I2C' (with a space). Try scrolling down — there are multiple versions. The one by Frank de Brabander has tens of thousands of downloads. Click Install on that one.",
          },
          {
            symptom: "Library Manager shows an error when I try to install",
            fix: "You may be offline. The Library Manager requires an internet connection to download. Connect to Wi-Fi and try again. Alternatively, download the ZIP from the Arduino Library Reference page and install via Sketch → Include Library → Add .ZIP Library.",
          },
          {
            symptom: "IDE says the library is already installed",
            fix: "That's fine — proceed to Step 4. If you see a different version in use that's causing issues later, you can downgrade from the Library Manager by clicking the version dropdown.",
          },
        ],
      },
      {
        slug: "4-hello-world",
        title: "Step 4 — Print 'Hello, World!'",
        duration: "7 min",
        description:
          "Upload the Hello World sketch. Replace 0x27 with your LCD's address from Step 2 if it was different. The LCD should show 'Hello, World!' on the first row and 'Arduino Kit!' on the second.",
        codeSnippet: {
          language: "cpp",
          filename: "LCDHello.ino",
          code: `// Print text on a 16x2 LCD over I2C.
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Replace 0x27 with your address from the I2C scanner (0x3F is the other common option)
LiquidCrystal_I2C lcd(0x27, 16, 2);  // Address, columns, rows

void setup() {
  lcd.init();        // Initialize the LCD
  lcd.backlight();   // Turn on the backlight

  lcd.setCursor(0, 0);       // Column 0, Row 0 (top-left)
  lcd.print("Hello, World!");

  lcd.setCursor(0, 1);       // Column 0, Row 1 (bottom)
  lcd.print("Arduino Kit!");
}

void loop() {
  // Nothing needed — the LCD holds text until cleared or overwritten
}`,
        },
        videoClip: {
          title: "See Hello World appear on the LCD screen",
          durationSec: 60,
          thumbnailAlt: "LCD screen showing Hello World and Arduino Kit text",
          topic: "demo",
        },
        tips: [
          "lcd.setCursor(col, row) counts from 0. Top-left is (0, 0), bottom-left is (0, 1).",
          "The LCD holds text even without the loop() running — it has its own memory.",
          "If you see a row of black rectangles, the contrast is too high — turn the blue trimmer on the backpack slightly.",
        ],
        checkpoints: [
          "Sketch compiled without errors",
          "LCD backlight is on",
          "Row 0 shows 'Hello, World!'",
          "Row 1 shows 'Arduino Kit!'",
        ],
        troubleshooting: [
          {
            symptom: "LCD backlight is on but no text appears (blank rows or row of blocks)",
            fix: "First, adjust the contrast trimmer on the I2C backpack — turn it slowly until characters appear. If still blank, double-check the I2C address in the sketch. Change `0x27` to `0x3F` (or vice versa) and re-upload.",
          },
          {
            symptom: "Sketch compiles but I get 'fatal error: LiquidCrystal_I2C.h not found'",
            fix: "The library wasn't installed correctly. Go back to Step 3 and reinstall LiquidCrystal I2C from the Library Manager. Make sure the search matches the exact library used in the code.",
          },
          {
            symptom: "Only one row shows text — the second row is blank",
            fix: "The setCursor row number must be 1 for the second row, not 2. Check that `lcd.setCursor(0, 1)` appears before the second `lcd.print()`. If it says `lcd.setCursor(0, 2)`, change it to `1`.",
          },
        ],
      },
      {
        slug: "5-display-sensor-data",
        title: "Step 5 — Display sensor readings",
        duration: "8 min",
        description:
          "Wire the potentiometer to A0 (same as Projects 1 and 3) and upload this sketch. The top row shows 'Sensor:' with the live reading, and the bottom row shows the mapped percentage. Turn the knob and watch the display update.",
        wiringDiagram: {
          altText:
            "Wiring diagram: potentiometer middle pin to A0, outer pins to 5V and GND; LCD I2C circuit unchanged",
          imagePlaceholder: "/images/wiring-lcd-sensor.svg",
          connections: [
            {
              from: "Arduino 5V",
              to: "Potentiometer left pin",
              color: "red",
            },
            {
              from: "Arduino GND",
              to: "Potentiometer right pin",
              color: "black",
            },
            {
              from: "Potentiometer middle pin (wiper)",
              to: "Arduino A0",
              color: "orange",
              note: "Analog signal",
            },
          ],
          componentLabels: [
            { component: "Potentiometer (10kΩ)", note: "middle pin → A0; outer pins → 5V and GND" },
            { component: "LCD 16×2 + I2C backpack", note: "unchanged from Step 2 — VCC/GND/SDA/SCL still connected" },
            { component: "Arduino A0", note: "reads 0–1023; displayed as raw value and percentage on LCD" },
          ],
        },
        codeSnippet: {
          language: "cpp",
          filename: "LCDSensor.ino",
          code: `// Display live potentiometer readings on the LCD.
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

const int SENSOR_PIN = A0;

void setup() {
  lcd.init();
  lcd.backlight();
}

void loop() {
  int raw     = analogRead(SENSOR_PIN);                // 0–1023
  int percent = map(raw, 0, 1023, 0, 100);             // 0–100%

  // Row 0: raw value
  lcd.setCursor(0, 0);
  lcd.print("Sensor: ");
  lcd.print(raw);
  lcd.print("   ");  // Trailing spaces erase leftover digits

  // Row 1: percentage
  lcd.setCursor(0, 1);
  lcd.print("Level:  ");
  lcd.print(percent);
  lcd.print("%   ");

  delay(100);  // Update ~10 times per second
}`,
        },
        videoClip: {
          title: "Watch live sensor values update on the LCD",
          durationSec: 60,
          thumbnailAlt: "Hand turning potentiometer knob, LCD numbers updating",
          topic: "demo",
        },
        tips: [
          "The trailing spaces after lcd.print(raw) and lcd.print(percent) overwrite old digits when the number shrinks. Without them, '1023' would leave ghost digits when the value drops to '5'.",
          "lcd.clear() also erases old content but causes a visible flicker. Overwriting with spaces is smoother.",
          "Change 'Sensor:' and 'Level:' labels to anything you want — the LCD fits 16 characters per row.",
        ],
        checkpoints: [
          "Potentiometer wired to A0, 5V, GND",
          "LCDSensor.ino uploaded",
          "LCD shows live sensor value and percentage",
          "Values update when I turn the knob",
        ],
        troubleshooting: [
          {
            symptom: "Old digits remain on screen — the display looks garbled",
            fix: "Make sure the trailing spaces are in your lcd.print() calls: `lcd.print(raw); lcd.print(\"   \");`. Three spaces are enough to cover the maximum 4-digit overhang (1023 → 5 leaves '023' behind). If unsure, add `lcd.clear();` before each setCursor, but expect flicker.",
          },
          {
            symptom: "LCD updates are very slow or laggy",
            fix: "I2C communication is slower than direct wiring. The delay(100) in the loop already gives 10 updates per second — that's plenty. If it feels slow, reduce to delay(50). Going below delay(20) can cause the LCD to miss writes.",
          },
          {
            symptom: "Percentage shows 101% at the maximum knob position",
            fix: "analogRead() can occasionally return 1024 due to noise. Change `map(raw, 0, 1023, 0, 100)` to `constrain(map(raw, 0, 1023, 0, 100), 0, 100)` to clamp the output to the valid range.",
          },
        ],
      },
      {
        slug: "6-done",
        title: "You did it! 🎉",
        duration: "2 min",
        description:
          "You've completed the full five-project curriculum. You can now wire circuits, write and upload code, read sensors, control outputs, and display data — the complete sense-decide-act loop. From here, mix and match: add a button to Project 5, put the servo angle on the LCD, or start a project of your own.",
        tips: [
          "The LCD, servo, button, and LED can all work together in one sketch. Try combining Projects 2 and 5: press a button to freeze the sensor reading on the display.",
          "Your kit card has a QR code to the community gallery — see what others have built and share your own projects.",
        ],
        checkpoints: [
          "Project 5 complete",
          "LCD displays live sensor data",
          "Full curriculum (Projects 1–5) finished",
        ],
        troubleshooting: [
          {
            symptom: "I want to display temperature instead of a potentiometer value",
            fix: "Add a DHT11 or DS18B20 sensor (available in the kit expansion pack). The wiring is similar to the potentiometer — one data pin to a digital or analog pin. The DHT library is available in the Library Manager and provides temperature and humidity in two function calls.",
          },
          {
            symptom: "LCD backlight turns off after a while",
            fix: "Some I2C backpacks have a backlight timeout if the SDA/SCL lines go idle. Add `lcd.backlight();` inside loop() if this happens. Alternatively, send a dummy write to keep the I2C bus active.",
          },
          {
            symptom: "I broke something and want to start the kit over from Project 1",
            fix: "Everything is breadboard-based — just pull all the wires out and start fresh. Nothing is permanently connected. Components that survive breadboard use will work indefinitely. If an LED or resistor is dead, spares are in the kit bag.",
          },
        ],
      },
    ],
  },
];

export function getTutorial(slug: string): Tutorial | undefined {
  return TUTORIALS.find((t) => t.slug === slug);
}

export function getTutorialStep(
  tutorialSlug: string,
  stepSlug: string
): { tutorial: Tutorial; step: TutorialStep; index: number } | undefined {
  const tutorial = getTutorial(tutorialSlug);
  if (!tutorial) return undefined;
  const index = tutorial.steps.findIndex((s) => s.slug === stepSlug);
  if (index === -1) return undefined;
  return { tutorial, step: tutorial.steps[index], index };
}

export function getAdjacentSteps(
  tutorial: Tutorial,
  currentIndex: number
): { prev: TutorialStep | null; next: TutorialStep | null } {
  return {
    prev: currentIndex > 0 ? tutorial.steps[currentIndex - 1] : null,
    next:
      currentIndex < tutorial.steps.length - 1
        ? tutorial.steps[currentIndex + 1]
        : null,
  };
}
