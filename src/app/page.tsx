import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import Card from "@/components/Card";
import FaqAccordion from "@/components/FaqAccordion";
import WaitlistForm from "@/components/WaitlistForm";

// ─── Kit Contents ─────────────────────────────────────────────────────────────

const kitContents = [
  { name: "Arduino Uno R3", qty: "×1", icon: "chip" },
  { name: "Half-size Breadboard", qty: "×1", icon: "breadboard" },
  { name: "Assorted LEDs", qty: "×10", icon: "led" },
  { name: "Resistor Pack", qty: "×30", icon: "resistor" },
  { name: "Jumper Wires", qty: "×30", icon: "wire" },
  { name: "DHT11 Sensor", qty: "×1", icon: "sensor" },
  { name: "Ultrasonic Sensor", qty: "×1", icon: "sensor" },
  { name: "DC Motor + Driver", qty: "×1", icon: "motor" },
  { name: "Servo Motor", qty: "×1", icon: "motor" },
  { name: "Piezo Buzzer", qty: "×1", icon: "buzzer" },
  { name: "USB-B Cable", qty: "×1", icon: "usb" },
  { name: "Quick-Start Guide", qty: "×1", icon: "book" },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

const projects = [
  {
    number: 1,
    title: "Blink",
    tagline: "Your first LED, blinking in under 5 minutes.",
    description:
      "Connect a single LED, upload 10 lines of code, and watch it pulse. This is the \u201chello world\u201d of hardware.",
    skills: ["pinMode", "digitalWrite", "delay"],
    difficulty: "Starter",
    difficultyColor: "text-spark-green",
  },
  {
    number: 2,
    title: "Traffic Light",
    tagline: "Wire three LEDs and write your first loop.",
    description:
      "Build a working traffic-light sequence. You'll learn arrays, loops, and timing — core patterns used in every project.",
    skills: ["Arrays", "for loops", "State machines"],
    difficulty: "Beginner",
    difficultyColor: "text-circuit-blue",
  },
  {
    number: 3,
    title: "Temperature Monitor",
    tagline: "Read a sensor and print live data to the Serial Monitor.",
    description:
      "Wire up the DHT11 sensor to capture real-world temperature and humidity. Your code will read and display measurements every second.",
    skills: ["Libraries", "Serial.print", "DHT11"],
    difficulty: "Beginner",
    difficultyColor: "text-circuit-blue",
  },
  {
    number: 4,
    title: "Distance Alarm",
    tagline: "Build a proximity sensor that beeps when something gets close.",
    description:
      "Use the ultrasonic sensor to measure distance in centimetres. When an object crosses your threshold, the buzzer fires — like a parking sensor.",
    skills: ["pulseIn", "Conditionals", "HC-SR04"],
    difficulty: "Intermediate",
    difficultyColor: "text-builder-orange",
  },
  {
    number: 5,
    title: "Motor Controller",
    tagline: "Spin a motor forward, backward, and at speed.",
    description:
      "Drive a DC motor through the L298N module. Control direction and speed with PWM — the same technique used in robots and RC vehicles.",
    skills: ["PWM", "analogWrite", "L298N"],
    difficulty: "Intermediate",
    difficultyColor: "text-builder-orange",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: "Do I need any coding experience?",
    answer:
      "None at all. Every project starts from a blank sketch with line-by-line explanations. If you can copy-paste and read carefully, you can build all five projects.",
  },
  {
    question: "What age is this kit for?",
    answer:
      "We designed it for ages 14 and up. Younger builders (10–13) can absolutely use it with a parent or guardian alongside. There's nothing in the kit that requires special tools.",
  },
  {
    question: "Is everything I need included?",
    answer:
      "Yes. The only thing you supply is a computer with a free USB port and the free Arduino IDE (takes two minutes to download). All components, cables, and the printed quick-start guide are in the box.",
  },
  {
    question: "What if I break or lose a component?",
    answer:
      "It happens — we've all fried an LED or two. We sell individual component replacements, and common parts like LEDs and resistors are available at any electronics shop. We'll include a full parts list so you always know exactly what to reorder.",
  },
  {
    question: "What exactly is included for $59?",
    answer:
      "Every component you need to complete all five guided projects: an Arduino Uno R3-compatible board, half-size solderless breadboard, 30 jumper wires, 10 assorted LEDs, 30 resistors, DHT11 temperature/humidity sensor, HC-SR04 ultrasonic sensor, SG90 micro servo motor, DC motor + driver module, piezo buzzer, USB cable, and a printed quick-start guide with component reference card. Nothing sold separately.",
  },
  {
    question: "Why does this kit cost $59?",
    answer:
      "We've priced at $59 to cover quality components, a printed guide, and ongoing video walkthrough content — while staying well below the $90+ official Arduino kits. We don't cut corners on the board or sensors, because a dead component in your first session ends the journey. The price reflects real quality, not a brand markup.",
  },
  {
    question: "When does the kit ship?",
    answer:
      "We're finalising the first production run now. Join the waitlist below and you'll be the first to know when pre-orders open — early waitlist members get priority allocation.",
  },
  {
    question: "Does this work on Mac, Windows, and Linux?",
    answer:
      "Yes. The Arduino IDE runs on all three platforms. Our guide covers installation on each OS with screenshots.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <NavBar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="bg-brand-gradient text-white px-6 py-20 md:py-32 text-center"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-content mx-auto">
          {/* Pre-launch badge */}
          <span className="inline-block mb-6 px-3 py-1 rounded-pill bg-white/20 font-body font-semibold text-label text-white tracking-wide uppercase">
            Pre-order opening soon
          </span>

          <h1
            id="hero-heading"
            className="font-heading font-bold text-display text-white mb-6 max-w-3xl mx-auto"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Build your first circuit.
            <br className="hidden sm:block" /> In 30 minutes.
          </h1>

          <p className="font-body text-body-lg text-white/90 mb-10 max-w-xl mx-auto">
            Everything you need is in the box — tested and ready. Five guided
            projects take you from blinking an LED to controlling a motor, step
            by step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center gap-2 font-body font-semibold text-label bg-builder-orange-aa text-white px-6 py-3 rounded-md min-h-[44px] hover:bg-[#B04516] active:bg-[#993C13] transition-colors duration-sm ease-brand focus-visible:outline-none focus-visible:shadow-focus"
            >
              Join the Waitlist
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 font-body font-semibold text-label bg-white/15 text-white px-6 py-3 rounded-md min-h-[44px] border border-white/40 hover:bg-white/25 transition-colors duration-sm ease-brand focus-visible:outline-none focus-visible:shadow-focus"
            >
              See how it works
            </a>
          </div>

          {/* Social proof micro-stat */}
          <p className="mt-10 font-body text-body-sm text-white/70">
            Trusted by early testers — waitlist open now
          </p>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="py-16 md:py-24 px-6 bg-white"
        aria-labelledby="how-it-works-heading"
      >
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <h2
              id="how-it-works-heading"
              className="font-heading font-bold text-h1 text-midnight mb-4"
            >
              From unboxing to working project
            </h2>
            <p className="font-body text-body-lg text-slate max-w-2xl mx-auto">
              Three steps. No prior experience needed. No loose ends.
            </p>
          </div>

          <ol
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            aria-label="How it works steps"
          >
            {[
              {
                n: "01",
                title: "Unbox and set up",
                body: "Open the kit. Everything is labelled and organised. Download the free Arduino IDE — takes two minutes.",
                color: "text-circuit-blue",
              },
              {
                n: "02",
                title: "Follow the guide",
                body: "Each project has a wiring diagram and step-by-step code walkthrough. No guessing, no prerequisites.",
                color: "text-builder-orange",
              },
              {
                n: "03",
                title: "See it work",
                body: "Upload your sketch and watch it run. Your LED blinks. Your sensor reads. Your motor spins. Real results, every time.",
                color: "text-spark-green",
              },
            ].map((step) => (
              <li key={step.n}>
                <Card variant="feature" className="h-full">
                  <span
                    className={`block font-heading font-bold text-display mb-3 ${step.color}`}
                    style={{ fontSize: "3rem", lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    {step.n}
                  </span>
                  <h3 className="font-heading font-semibold text-h3 text-midnight mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-body text-ink">{step.body}</p>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Kit Contents ─────────────────────────────────────────────── */}
      <section
        id="kit"
        className="py-16 md:py-24 px-6 bg-cloud"
        aria-labelledby="kit-heading"
      >
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <h2
              id="kit-heading"
              className="font-heading font-bold text-h1 text-midnight mb-4"
            >
              Everything in the box
            </h2>
            <p className="font-body text-body-lg text-slate max-w-2xl mx-auto">
              Carefully curated for the five projects. Nothing missing, nothing
              extra you don&apos;t need yet.
            </p>
          </div>

          <ul
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            aria-label="Kit contents"
          >
            {kitContents.map((item) => (
              <li key={item.name}>
                <Card
                  variant="standard"
                  className="flex flex-col items-center text-center gap-3 py-6 px-4"
                >
                  <ComponentIcon name={item.icon} />
                  <div>
                    <p className="font-body font-semibold text-body text-midnight leading-tight">
                      {item.name}
                    </p>
                    <p className="font-body text-body-sm text-slate mt-1">
                      {item.qty}
                    </p>
                  </div>
                </Card>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center font-body text-body-sm text-slate">
            Plus a printed quick-start guide and component reference card.
          </p>
        </div>
      </section>

      {/* ── Get the Kit / Pricing ────────────────────────────────────── */}
      <section
        id="get-kit"
        className="py-16 md:py-24 px-6 bg-white"
        aria-labelledby="get-kit-heading"
      >
        <div className="max-w-content mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2
              id="get-kit-heading"
              className="font-heading font-bold text-h1 text-midnight mb-4"
            >
              Get the Arduino Starter Kit
            </h2>
            <p className="font-body text-body-lg text-slate">
              Everything in one box. No sourcing parts, no guesswork. Ready to
              build on day one.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card variant="feature" className="flex flex-col gap-6">
              {/* Price */}
              <div className="text-center">
                <span className="font-heading font-bold text-midnight" style={{ fontSize: "3rem", lineHeight: 1 }}>
                  $59
                </span>
                <p className="font-body text-body-sm text-slate mt-1">
                  Launch price — ships Q4 2026
                </p>
              </div>

              {/* What's included summary */}
              <ul className="flex flex-col gap-2" aria-label="What's included">
                {[
                  "Arduino Uno R3 + all components for 5 projects",
                  "Printed quick-start guide & component reference card",
                  "Lifetime access to online video walkthroughs",
                  "Email support from our engineering team",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-body text-ink">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-spark-green shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 font-body font-semibold text-label bg-builder-orange-aa text-white px-6 py-3 rounded-md min-h-[44px] w-full hover:bg-[#B04516] active:bg-[#993C13] transition-colors duration-sm ease-brand focus-visible:outline-none focus-visible:shadow-focus"
              >
                Join the Waitlist — Get Early Access
              </a>

              {/* Trust signals */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-center">
                <div className="flex items-center justify-center gap-2 font-body text-body-sm text-slate">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  30-day satisfaction guarantee
                </div>
                <div className="flex items-center justify-center gap-2 font-body text-body-sm text-slate">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="1" y="3" width="15" height="13" rx="2" />
                    <path d="M16 8h4l3 5v3h-7V8z" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                  Free shipping on pre-orders
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Curriculum Preview ───────────────────────────────────────── */}
      <section
        id="projects"
        className="py-16 md:py-24 px-6 bg-white"
        aria-labelledby="projects-heading"
      >
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <h2
              id="projects-heading"
              className="font-heading font-bold text-h1 text-midnight mb-4"
            >
              5 projects, zero fluff
            </h2>
            <p className="font-body text-body-lg text-slate max-w-2xl mx-auto">
              Each project builds on the last. By Project 5 you understand
              sensors, motors, loops, and libraries — the building blocks of
              almost every Arduino project.
            </p>
          </div>

          <ol className="flex flex-col gap-6" aria-label="Project list">
            {projects.map((project) => (
              <li key={project.number}>
                <Card variant="step" stepNumber={project.number}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-heading font-semibold text-h3 text-midnight">
                          {project.title}
                        </h3>
                        <span
                          className={`font-body font-semibold text-body-sm ${project.difficultyColor}`}
                        >
                          {project.difficulty}
                        </span>
                      </div>
                      <p className="font-body font-semibold text-body text-ink mb-2">
                        {project.tagline}
                      </p>
                      <p className="font-body text-body text-slate">
                        {project.description}
                      </p>
                    </div>
                    {/* Skills tags */}
                    <ul
                      className="flex flex-wrap sm:flex-col gap-2 shrink-0"
                      aria-label={`Skills for ${project.title}`}
                    >
                      {project.skills.map((skill) => (
                        <li
                          key={skill}
                          className="px-2 py-1 rounded-pill bg-neutral-100 font-code text-body-sm text-neutral-700"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Social Proof ─────────────────────────────────────────────── */}
      <section
        id="reviews"
        className="py-16 md:py-24 px-6 bg-brand-gradient"
        aria-labelledby="reviews-heading"
      >
        <div className="max-w-content mx-auto text-center">
          <h2
            id="reviews-heading"
            className="font-heading font-bold text-h1 text-white mb-4"
          >
            Early testers are building
          </h2>
          <p className="font-body text-body-lg text-white/80 mb-12 max-w-xl mx-auto">
            We&apos;re sharing kits with our first cohort of beginner builders.
            Reviews coming soon — join the waitlist to be part of the next
            round.
          </p>

          {/* Placeholder testimonial cards */}
          <ul
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
            aria-label="Testimonials"
          >
            {[
              {
                quote:
                  "I'd tried Arduino kits before but always got stuck in the first 20 minutes. This guide actually got me to a working circuit.",
                name: "Early tester",
                detail: "Age 17, no prior coding experience",
              },
              {
                quote:
                  "The wiring diagrams make it impossible to put things in the wrong place. Finally a kit that doesn't assume you already know everything.",
                name: "Early tester",
                detail: "Parent building alongside a 12-year-old",
              },
              {
                quote:
                  "Got through all five projects in a weekend. The motor controller project blew my mind — I had no idea I could build that.",
                name: "Early tester",
                detail: "University student, first hardware experience",
              },
            ].map((t, i) => (
              <li key={i}>
                <Card variant="standard" className="h-full flex flex-col gap-4">
                  {/* 5 stars */}
                  <div
                    className="flex gap-1 text-caution-amber"
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg
                        key={s}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="flex-1 font-body text-body text-ink italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <footer>
                    <p className="font-body font-semibold text-body-sm text-midnight">
                      {t.name}
                    </p>
                    <p className="font-body text-body-sm text-slate">{t.detail}</p>
                  </footer>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section
        id="support"
        className="py-16 md:py-24 px-6 bg-cloud"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-content mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2
              id="faq-heading"
              className="font-heading font-bold text-h1 text-midnight mb-2 text-center"
            >
              Frequently asked
            </h2>
            <p className="font-body text-body-lg text-slate text-center mb-10">
              Still have questions?{" "}
              <a
                href="mailto:hello@arduinostarterco.com"
                className="text-circuit-blue underline underline-offset-2 hover:text-[#0A6DB0] transition-colors duration-sm"
              >
                Email us
              </a>{" "}
              — we reply within 24 hours.
            </p>
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* ── Waitlist CTA ─────────────────────────────────────────────── */}
      <section
        id="waitlist"
        className="py-16 md:py-24 px-6 bg-midnight"
        aria-labelledby="waitlist-heading"
      >
        <div className="max-w-content mx-auto text-center">
          <h2
            id="waitlist-heading"
            className="font-heading font-bold text-h1 text-white mb-4"
          >
            Be the first to know
          </h2>
          <p className="font-body text-body-lg text-white/70 mb-10 max-w-xl mx-auto">
            Pre-orders open soon. Join the waitlist and get priority access,
            plus an exclusive early-bird offer.
          </p>
          <WaitlistForm />
          <p className="mt-4 font-body text-body-sm text-white/40">
            No spam. Unsubscribe any time. We&apos;ll only email you about the kit
            launch.
          </p>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer
        className="py-10 px-6 bg-midnight border-t border-white/10"
        aria-label="Site footer"
      >
        <div className="max-w-content mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-white/50 font-body text-body-sm">
          {/* Logo wordmark */}
          <a
            href="/"
            className="font-heading font-bold text-white text-base hover:text-circuit-blue transition-colors duration-sm"
            aria-label="Arduino Starter Co — Home"
          >
            Arduino Starter Co
          </a>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6">
              {[
                { label: "Kit", href: "#kit" },
                { label: "Projects", href: "#projects" },
                { label: "FAQ", href: "#support" },
                { label: "Waitlist", href: "#waitlist" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p>© {new Date().getFullYear()} Arduino Starter Co</p>
        </div>
      </footer>
    </>
  );
}

// ─── ComponentIcon ─────────────────────────────────────────────────────────────

function ComponentIcon({ name }: { name: string }) {
  const cls = "text-circuit-blue";
  switch (name) {
    case "chip":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cls} aria-hidden="true">
          <rect x="7" y="7" width="10" height="10" rx="1" />
          <line x1="9" y1="7" x2="9" y2="4" /><line x1="12" y1="7" x2="12" y2="4" /><line x1="15" y1="7" x2="15" y2="4" />
          <line x1="9" y1="17" x2="9" y2="20" /><line x1="12" y1="17" x2="12" y2="20" /><line x1="15" y1="17" x2="15" y2="20" />
          <line x1="7" y1="9" x2="4" y2="9" /><line x1="7" y1="12" x2="4" y2="12" /><line x1="7" y1="15" x2="4" y2="15" />
          <line x1="17" y1="9" x2="20" y2="9" /><line x1="17" y1="12" x2="20" y2="12" /><line x1="17" y1="15" x2="20" y2="15" />
        </svg>
      );
    case "breadboard":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cls} aria-hidden="true">
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <line x1="3" y1="12" x2="21" y2="12" strokeDasharray="2 2" />
          <circle cx="7" cy="9" r="1" fill="currentColor" />
          <circle cx="10" cy="9" r="1" fill="currentColor" />
          <circle cx="13" cy="9" r="1" fill="currentColor" />
          <circle cx="16" cy="9" r="1" fill="currentColor" />
          <circle cx="7" cy="15" r="1" fill="currentColor" />
          <circle cx="10" cy="15" r="1" fill="currentColor" />
          <circle cx="13" cy="15" r="1" fill="currentColor" />
          <circle cx="16" cy="15" r="1" fill="currentColor" />
        </svg>
      );
    case "led":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cls} aria-hidden="true">
          <polygon points="8 6 16 12 8 18" />
          <line x1="16" y1="6" x2="16" y2="18" />
          <line x1="4" y1="12" x2="8" y2="12" />
          <line x1="16" y1="12" x2="20" y2="12" />
          <line x1="18" y1="6" x2="20" y2="4" />
          <line x1="18" y1="9" x2="21" y2="7" />
        </svg>
      );
    case "resistor":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cls} aria-hidden="true">
          <line x1="3" y1="12" x2="6" y2="12" />
          <polyline points="6 12 7.5 8 9 16 10.5 8 12 16 13.5 8 15 16 16.5 12 18 12" />
          <line x1="18" y1="12" x2="21" y2="12" />
        </svg>
      );
    case "sensor":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cls} aria-hidden="true">
          <rect x="6" y="8" width="12" height="8" rx="1" />
          <circle cx="12" cy="12" r="2" />
          <line x1="8" y1="8" x2="8" y2="5" /><line x1="12" y1="8" x2="12" y2="5" /><line x1="16" y1="8" x2="16" y2="5" />
          <line x1="8" y1="16" x2="8" y2="19" /><line x1="12" y1="16" x2="12" y2="19" /><line x1="16" y1="16" x2="16" y2="19" />
        </svg>
      );
    case "motor":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cls} aria-hidden="true">
          <circle cx="12" cy="12" r="7" />
          <text x="12" y="16" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" stroke="none">M</text>
          <line x1="5" y1="12" x2="2" y2="12" /><line x1="19" y1="12" x2="22" y2="12" />
        </svg>
      );
    case "buzzer":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cls} aria-hidden="true">
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
      );
    case "wire":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cls} aria-hidden="true">
          <path d="M4 12 Q12 4 20 12" />
          <circle cx="4" cy="12" r="2" fill="currentColor" />
          <circle cx="20" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case "usb":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cls} aria-hidden="true">
          <rect x="6" y="9" width="12" height="8" rx="1" />
          <line x1="12" y1="9" x2="12" y2="6" />
          <circle cx="12" cy="5" r="1" />
          <line x1="9" y1="12" x2="9" y2="14" /><line x1="15" y1="12" x2="15" y2="14" />
        </svg>
      );
    case "book":
    default:
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cls} aria-hidden="true">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
  }
}
