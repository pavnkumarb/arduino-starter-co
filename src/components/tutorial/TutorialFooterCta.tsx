import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";

export default function TutorialFooterCta() {
  return (
    <section
      className="bg-brand-gradient text-white py-16 px-6 text-center"
      aria-labelledby="footer-cta-heading"
    >
      <div className="max-w-content mx-auto">
        <h2
          id="footer-cta-heading"
          className="font-heading font-bold text-h1 text-white mb-4"
        >
          Ready to build your first circuit?
        </h2>
        <p className="font-body text-body-lg text-white/90 max-w-xl mx-auto mb-10">
          Get the kit with every component pre-selected. Or start Tutorial 1
          right now — it&apos;s completely free.
        </p>

        {/* Button row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/#waitlist"
            className="inline-flex items-center justify-center gap-2 font-body font-semibold rounded-md min-h-[52px] px-8 py-3 bg-builder-orange text-white hover:bg-builder-orange-aa transition-colors duration-sm ease-brand focus-visible:outline-none focus-visible:shadow-focus text-body"
          >
            Get the Kit — $59
          </Link>
          <Link
            href="/learn/project-1/1-whats-in-the-box"
            className="inline-flex items-center justify-center gap-2 font-body font-semibold rounded-md min-h-[52px] px-8 py-3 bg-white/15 border border-white/40 text-white hover:bg-white/25 transition-colors duration-sm ease-brand focus-visible:outline-none focus-visible:shadow-focus text-body"
          >
            Start Tutorial 1 — Free
          </Link>
        </div>

        {/* Newsletter signup */}
        <div className="mt-10">
          <p className="font-body text-body-sm text-white/80 mb-4">
            Get a new project idea each week:
          </p>
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
