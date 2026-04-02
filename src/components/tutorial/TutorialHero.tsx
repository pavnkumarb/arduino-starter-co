import Link from "next/link";

export default function TutorialHero() {
  return (
    <section
      className="relative bg-brand-gradient text-white py-24 px-6 text-center min-h-[80vh] flex flex-col items-center justify-center"
      aria-labelledby="hero-heading"
    >
      {/* Badge */}
      <span className="inline-block mb-6 px-4 py-1.5 rounded-pill text-label font-semibold bg-white/20 text-white">
        Free · No sign-up required
      </span>

      {/* H1 */}
      <h1
        id="hero-heading"
        className="font-heading font-bold text-display text-white max-w-3xl mx-auto mb-6 leading-tight"
      >
        Learn Arduino in a weekend.
        <br />
        No experience needed.
      </h1>

      {/* Body copy */}
      <p className="font-body text-body-lg text-white/90 max-w-xl mx-auto mb-10">
        Five free step-by-step tutorials take you from &ldquo;what is this board?&rdquo;
        to controlling motors and reading sensors — with wiring diagrams,
        code, and video walkthroughs included.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <Link
          href="/learn/project-1/1-whats-in-the-box"
          className="inline-flex items-center justify-center gap-2 font-body font-semibold rounded-md min-h-[52px] px-8 py-3 bg-builder-orange text-white hover:bg-builder-orange-aa transition-colors duration-sm ease-brand focus-visible:outline-none focus-visible:shadow-focus text-body"
        >
          Start Tutorial 1 — It&apos;s Free
        </Link>
        <Link
          href="/#waitlist"
          className="inline-flex items-center justify-center gap-2 font-body font-semibold rounded-md min-h-[52px] px-8 py-3 bg-white/15 border border-white/40 text-white hover:bg-white/25 transition-colors duration-sm ease-brand focus-visible:outline-none focus-visible:shadow-focus text-body"
        >
          Get the Kit ($59)
        </Link>
      </div>

      {/* Micro-stat */}
      <p className="font-body text-body-sm text-white/70">
        5 projects · ~3 hours total · Works on Mac, Windows &amp; Linux
      </p>
    </section>
  );
}
