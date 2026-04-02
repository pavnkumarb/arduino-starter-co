import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import ReviewsSection from "@/components/ReviewsSection";
import FaqAccordion from "@/components/FaqAccordion";
import TutorialHero from "@/components/tutorial/TutorialHero";
import TutorialGrid from "@/components/tutorial/TutorialGrid";
import TutorialFooterCta from "@/components/tutorial/TutorialFooterCta";
import LearnFooter from "@/components/tutorial/LearnFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arduino Tutorial for Beginners — 5 Free Projects | Arduino Starter Co",
  description:
    "Learn Arduino from scratch with 5 free step-by-step tutorials. No coding experience needed. Build your first circuit in 30 minutes with our beginner kit.",
  alternates: {
    canonical: "https://arduinostarterco.com/learn",
  },
  openGraph: {
    title: "Arduino Tutorial for Beginners — 5 Free Projects",
    description:
      "Learn Arduino from scratch with 5 free step-by-step tutorials. No coding experience needed. Build your first circuit in 30 minutes.",
    url: "https://arduinostarterco.com/learn",
    type: "website",
    images: [
      {
        url: "https://arduinostarterco.com/og/learn.jpg",
        width: 1200,
        height: 630,
        alt: "Arduino Tutorial for Beginners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arduino Tutorial for Beginners — 5 Free Projects",
    description: "No coding experience needed. Build your first circuit in 30 minutes.",
  },
};

const HOW_TO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Learn Arduino for Beginners",
  description: "Start learning Arduino with no prior experience in three steps.",
  totalTime: "PT30M",
  supply: [{ "@type": "HowToSupply", name: "Arduino Starter Kit" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Get the Kit",
      text: "Order the Arduino Starter Co kit. Everything you need — board, components, and guide — arrives in one box.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Follow the Tutorials",
      text: "Open any of the 5 free step-by-step tutorials on this site. Each one is self-contained with wiring diagrams, code, and video walkthroughs.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Build Real Things",
      text: "Complete all 5 projects and you'll know how to wire circuits, read sensors, control motors, and write Arduino code from scratch.",
    },
  ],
};

const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Arduino Starter Co Beginner Kit",
  description:
    "Everything you need to complete 5 beginner Arduino projects — board, sensors, motors, breadboard, and a printed quick-start guide.",
  brand: { "@type": "Brand", name: "Arduino Starter Co" },
  offers: {
    "@type": "Offer",
    price: "59.00",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
    url: "https://arduinostarterco.com/#waitlist",
  },
};

const FAQ_ITEMS = [
  {
    question: "Do I need any coding experience?",
    answer:
      "None at all. Every tutorial starts from a blank file and explains each line of code as you write it. If you can read and copy carefully, you'll finish Project 1 in under 30 minutes.",
  },
  {
    question: "Do I need the Arduino Starter Co kit to follow these tutorials?",
    answer:
      "The tutorials are written for our kit, so all component references match exactly what's in the box. You can follow along with any Arduino Uno-compatible board and the listed parts, but you'll need to source each component separately.",
  },
  {
    question: "What if I get stuck?",
    answer:
      "Every tutorial includes a Troubleshooting section with the most common wiring mistakes and error messages. If you're still stuck, email support@arduinostarterco.com and we'll help you through it.",
  },
  {
    question: "Can I do these tutorials on a Mac?",
    answer:
      "Yes. The tutorials cover setup on Mac, Windows, and Linux. All software used is free.",
  },
  {
    question: "How long does each tutorial take?",
    answer:
      "Project 1 takes about 30 minutes. Projects 2–3 are 45–60 minutes. Projects 4–5 are 60–75 minutes each. Most beginners complete all five over a weekend.",
  },
  {
    question: "What do I learn by the end?",
    answer:
      "You'll know how to wire a breadboard circuit, write and upload Arduino code, read sensor data, control outputs like LEDs and motors, and debug common beginner mistakes. That foundation applies to any hardware project.",
  },
  {
    question: "Are the tutorials free?",
    answer:
      "Yes, completely free — no sign-up, no paywall. The tutorials will always be free. We make money when you buy the kit, which includes all the components you need to follow along.",
  },
];

const TUTORIAL_NAV_LINKS = [
  { label: "Kit", href: "/#kit" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Tutorials", href: "/learn" },
  { label: "Support", href: "/#support" },
];

export default function LearnLandingPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOW_TO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_SCHEMA) }}
      />

      <NavBar links={TUTORIAL_NAV_LINKS} />

      {/* Section 1 — Hero */}
      <TutorialHero />

      {/* Section 2 — Trust Bar */}
      <div className="py-6 border-b border-mist bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0D7ECD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="shrink-0"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="font-body text-body text-ink">
                <strong className="font-semibold">2,400+ builders</strong> on the waitlist
              </span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#D69E2E"
                aria-hidden="true"
                className="shrink-0"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="font-body text-body text-ink">
                <strong className="font-semibold">4.9 / 5</strong> from early testers
              </span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0D7ECD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="shrink-0"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="font-body text-body text-ink">
                &ldquo;First circuit in 30 min — or your money back&rdquo;
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 — Project Grid */}
      <TutorialGrid />

      {/* Section 4 — How It Works */}
      <section
        className="py-16 px-6 bg-cloud"
        id="how-it-works"
        aria-labelledby="how-it-works-heading"
      >
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <h2
              id="how-it-works-heading"
              className="font-heading font-bold text-h1 text-midnight mb-3"
            >
              How it works
            </h2>
            <p className="font-body text-body-lg text-slate">
              Three steps from zero to working project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-circuit-blue/10">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0D7ECD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <div>
                <p className="font-body font-semibold text-label text-circuit-blue mb-1">
                  Step 1
                </p>
                <h3 className="font-heading font-semibold text-h3 text-midnight mb-2">
                  Get the Kit
                </h3>
                <p className="font-body text-body text-ink mb-3">
                  Order the Arduino Starter Co kit. Everything arrives in one
                  box — board, sensors, motors, breadboard, jumper wires, and a
                  printed quick-start guide. No hunting for parts.
                </p>
                <Link
                  href="/#kit-contents"
                  className="font-body font-semibold text-body-sm text-circuit-blue hover:underline focus-visible:outline-none focus-visible:shadow-focus"
                >
                  See what&apos;s in the kit →
                </Link>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-circuit-blue/10">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0D7ECD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <div>
                <p className="font-body font-semibold text-label text-circuit-blue mb-1">
                  Step 2
                </p>
                <h3 className="font-heading font-semibold text-h3 text-midnight mb-2">
                  Follow the Tutorials
                </h3>
                <p className="font-body text-body text-ink">
                  Open any tutorial on this page. Each one walks you through the
                  wiring diagram, explains the code line by line, and includes a
                  video clip for the trickiest parts. No prior experience needed.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-circuit-blue/10">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0D7ECD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div>
                <p className="font-body font-semibold text-label text-circuit-blue mb-1">
                  Step 3
                </p>
                <h3 className="font-heading font-semibold text-h3 text-midnight mb-2">
                  Build Real Things
                </h3>
                <p className="font-body text-body text-ink mb-3">
                  Finish all five projects and you&apos;ll know how to wire circuits,
                  read sensors, control motors, and write Arduino code. Skills
                  you can apply to any maker project after this.
                </p>
                <Link
                  href="/learn/project-1/1-whats-in-the-box"
                  className="font-body font-semibold text-body-sm text-circuit-blue hover:underline focus-visible:outline-none focus-visible:shadow-focus"
                >
                  Start with Project 1 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Social Proof */}
      <section className="bg-white" aria-labelledby="reviews-section-heading">
        <div className="max-w-content mx-auto pt-16 px-6">
          <div className="text-center mb-10">
            <h2
              id="reviews-section-heading"
              className="font-heading font-bold text-h1 text-midnight mb-3"
            >
              What early builders are saying
            </h2>
            <p className="font-body text-body-lg text-slate">
              From our waitlist community and early tester program.
            </p>
          </div>
        </div>
        <ReviewsSection />

        {/* Show your build CTA */}
        <div className="max-w-content mx-auto px-6 pb-16">
          <div className="bg-cloud rounded-xl p-6 text-center mt-10">
            <h3 className="font-heading font-semibold text-h3 text-midnight mb-2">
              Built something cool?
            </h3>
            <p className="font-body text-body text-slate mb-4">
              Tag us @ArduinoStarterCo on Instagram or X and we&apos;ll feature
              your project right here.
            </p>
            <a
              href="https://instagram.com/ArduinoStarterCo"
              className="font-body font-semibold text-body-sm text-circuit-blue hover:underline focus-visible:outline-none focus-visible:shadow-focus"
              rel="noopener noreferrer"
              target="_blank"
            >
              Share your build →
            </a>
          </div>
        </div>
      </section>

      {/* Section 6 — FAQ */}
      <section
        className="py-16 px-6 bg-cloud"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-content mx-auto">
          <div className="text-center mb-10">
            <h2
              id="faq-heading"
              className="font-heading font-bold text-h1 text-midnight mb-3"
            >
              Frequently asked questions
            </h2>
            <p className="font-body text-body-lg text-slate">
              The most common questions from beginners, answered honestly.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* Section 7 — Footer CTA */}
      <TutorialFooterCta />

      {/* Section 8 — Footer */}
      <LearnFooter />
    </>
  );
}
