import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "About — Arduino Starter Co",
  description:
    "We built Arduino Starter Co because most beginner kits assume knowledge beginners don't have. Ours doesn't.",
  alternates: {
    canonical: "https://arduinostarterco.com/about",
  },
  openGraph: {
    title: "About — Arduino Starter Co",
    description:
      "We built Arduino Starter Co because most beginner kits assume knowledge beginners don't have. Ours doesn't.",
    url: "https://arduinostarterco.com/about",
    type: "website",
  },
};

const navLinks = [
  { label: "Kit", href: "/#kit" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Projects", href: "/#projects" },
  { label: "Tutorials", href: "/learn" },
  { label: "About", href: "/about" },
];

// ─── Differentiators ──────────────────────────────────────────────────────────

const differentiators = [
  {
    number: "01",
    title: "Instructions written for beginners, not by beginners.",
    body: "Our guide assumes zero background. We explain what each component does before you wire it up. We tell you why, not just what.",
    color: "text-circuit-blue",
  },
  {
    number: "02",
    title: "Every component tested before it ships.",
    body: "We've seen kits ship with dead LEDs, marginal resistors, and breadboards that barely hold a connection. Our components are tested at the production line. If something's wrong, we replace it — no forms, no hassle.",
    color: "text-builder-orange",
  },
  {
    number: "03",
    title: "Stuck? We're actually here.",
    body: "Our support isn't a ticket queue. Hit reply on any email, and a human who knows the kit will respond. We've helped hundreds of beginners get their first circuit working. We'd like to help you too.",
    color: "text-spark-green",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <NavBar links={navLinks} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        id="about-hero"
        className="bg-brand-gradient text-white px-6 py-20 md:py-32 text-center"
        aria-labelledby="about-hero-heading"
      >
        <div className="max-w-content mx-auto">
          <h1
            id="about-hero-heading"
            className="font-heading font-bold text-white mb-6 max-w-3xl mx-auto"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
          >
            The Arduino kit built for your first time — not your tenth.
          </h1>
          <p className="font-body text-body-lg text-white/90 max-w-xl mx-auto">
            Everything in the box. Step-by-step guide. Real help when you need
            it. You'll have a working circuit in under 30 minutes.
          </p>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────────────── */}
      <section
        id="our-story"
        className="py-16 md:py-24 px-6 bg-white"
        aria-labelledby="our-story-heading"
      >
        <div className="max-w-content mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2
              id="our-story-heading"
              className="font-heading font-bold text-h1 text-midnight mb-8"
            >
              Our Story
            </h2>
            <div className="flex flex-col gap-6 font-body text-body-lg text-ink leading-relaxed">
              <p>
                Arduino Starter Co started with a bad kit and a lot of wire.
              </p>
              <p>
                We bought a beginner Arduino set, followed the instructions as
                written, and ended up with a breadboard full of confusion and an
                LED that wouldn't blink. The kit wasn't broken — the
                instructions assumed we already knew things we didn't.
              </p>
              <p>
                Page one had a resistor color code chart. No explanation of what
                a resistor does. Page two started mid-circuit, referencing
                components from a diagram on page six. By page four, we had a
                breadboard full of wires going everywhere and a strong suspicion
                the LED was broken.
              </p>
              <p>
                It wasn't the LED.
              </p>
              <p>
                We've seen this pattern so many times — curious people who
                genuinely want to build something get let down by kits designed
                to look impressive in a product photo rather than actually teach.
                The components are fine. The packaging is fine. The instructions
                treat you like you already know what you're doing.
              </p>
              <p className="font-semibold text-midnight">
                That's the gap Arduino Starter Co was built to close.
              </p>
              <p>
                We didn't set out to make the cheapest kit, or the kit with the
                most components. We set out to make the kit where every beginner
                succeeds on their first project. That meant rethinking
                everything: which components to include and why, what order to
                introduce concepts, how to write instructions that assume zero
                background, and what to do when something goes wrong — because
                something always goes wrong, and that is normal.
              </p>
              <p>
                We built Arduino Starter Co because we believe curious people
                deserve a kit that meets them where they are. You've never done
                this before. That's exactly the point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Makes Us Different ──────────────────────────────────── */}
      <section
        id="differentiators"
        className="py-16 md:py-24 px-6 bg-cloud"
        aria-labelledby="differentiators-heading"
      >
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <h2
              id="differentiators-heading"
              className="font-heading font-bold text-h1 text-midnight mb-4"
            >
              What Makes Us Different
            </h2>
            <p className="font-body text-body-lg text-slate max-w-2xl mx-auto">
              Three things we obsess over that most kit makers skip.
            </p>
          </div>

          <ol
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            aria-label="What makes us different"
          >
            {differentiators.map((item) => (
              <li
                key={item.number}
                className="bg-white rounded-lg p-8 shadow-sm flex flex-col gap-4"
              >
                <span
                  className={`font-heading font-bold ${item.color}`}
                  style={{ fontSize: "3rem", lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {item.number}
                </span>
                <h3 className="font-heading font-semibold text-h3 text-midnight">
                  {item.title}
                </h3>
                <p className="font-body text-body text-ink">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── The Team ─────────────────────────────────────────────────── */}
      <section
        id="team"
        className="py-16 md:py-24 px-6 bg-white"
        aria-labelledby="team-heading"
      >
        <div className="max-w-content mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              id="team-heading"
              className="font-heading font-bold text-h1 text-midnight mb-6"
            >
              The Team
            </h2>
            <p className="font-body text-body-lg text-ink mb-4">
              Arduino Starter Co was built by a team of engineers, educators,
              and one very determined CMO who kept insisting the instructions
              needed to be clearer.
            </p>
            <p className="font-body text-body-lg text-ink mb-4">
              (They did.)
            </p>
            <p className="font-body text-body-lg text-slate">
              We're remote-first, maker-obsessed, and genuinely proud of every
              kit that ships. We run on coffee, curiosity, and the occasional
              very satisfying LED blink.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Promise ──────────────────────────────────────────────── */}
      <section
        id="our-promise"
        className="py-16 md:py-24 px-6 bg-midnight text-white"
        aria-labelledby="our-promise-heading"
      >
        <div className="max-w-content mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              id="our-promise-heading"
              className="font-heading font-bold text-h1 text-white mb-6"
            >
              Our Promise
            </h2>
            <p className="font-body text-body-lg text-white/80 mb-6">
              If you get stuck, we help you get unstuck.
            </p>
            <p className="font-body text-body-lg text-white/80 mb-6">
              No chatbot. No FAQ labyrinth. Just reply to any of our emails and
              a real person will walk you through it. We've debugged hundreds of
              circuits over email. We're good at it.
            </p>
            <p className="font-body text-body-lg text-white/80 mb-10">
              We want your first project to work. That means we're not done
              until it does.
            </p>
            <a
              href="/#waitlist"
              className="inline-flex items-center justify-center gap-2 font-body font-semibold text-label bg-builder-orange-aa text-white px-8 py-3 rounded-md min-h-[44px] hover:bg-[#B04516] active:bg-[#993C13] transition-colors duration-sm ease-brand focus-visible:outline-none focus-visible:shadow-focus"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer
        className="py-10 px-6 bg-midnight border-t border-white/10"
        aria-label="Site footer"
      >
        <div className="max-w-content mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-white/50 font-body text-body-sm">
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
                { label: "Kit", href: "/#kit" },
                { label: "Projects", href: "/#projects" },
                { label: "Tutorials", href: "/learn" },
                { label: "About", href: "/about" },
                { label: "Waitlist", href: "/#waitlist" },
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
