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

export interface WiringDiagram {
  altText: string;
  connections: WiringConnection[];
  imagePlaceholder: string;
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
