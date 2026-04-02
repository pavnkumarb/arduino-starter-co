"use client";

import { useRef, useState, KeyboardEvent } from "react";

const TRUNCATE_LENGTH = 150;

interface Review {
  name: string;
  rating: number;
  text: string;
  badge: string;
  date: string;
  verified: boolean;
}

// Pre-launch fallback: gifting tester quotes with "Early Tester" label.
// Replace with Judge.me API data once the Shopify store is live:
//   GET https://{shop}.myshopify.com/apps/judge-me/reviews
//   Filter: rating=5, verified=true, limit=3
const FALLBACK_REVIEWS: Review[] = [
  {
    name: "Alex M.",
    rating: 5,
    text: "I'd tried Arduino kits before but always got stuck in the first 20 minutes. This guide actually got me to a working circuit in under 30 minutes. The wiring diagrams are incredibly clear.",
    badge: "Early Tester",
    date: "March 2026",
    verified: true,
  },
  {
    name: "Jordan T.",
    rating: 5,
    text: "The wiring diagrams make it impossible to put things in the wrong place. Finally a kit that doesn't assume you already know everything. My daughter and I finished three projects in one afternoon.",
    badge: "Early Tester",
    date: "March 2026",
    verified: true,
  },
  {
    name: "Sam P.",
    rating: 5,
    text: "Got through all five projects in a weekend. The motor controller project blew my mind — I had no idea I could build that from scratch. Quality components, excellent guide.",
    badge: "Early Tester",
    date: "March 2026",
    verified: true,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-caution-amber"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncation = review.text.length > TRUNCATE_LENGTH;
  const displayText =
    !expanded && needsTruncation
      ? review.text.slice(0, TRUNCATE_LENGTH).trimEnd() + "…"
      : review.text;

  return (
    <article className="bg-white border border-mist rounded-lg shadow-sm p-6 h-full flex flex-col gap-4">
      <StarRating rating={review.rating} />

      <blockquote className="flex-1 flex flex-col gap-2">
        <p className="font-body text-body text-ink">
          &ldquo;{displayText}&rdquo;
        </p>
        {needsTruncation && (
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            className="self-start font-body font-semibold text-body-sm text-circuit-blue hover:underline focus-visible:outline-none focus-visible:shadow-focus"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </blockquote>

      <footer className="flex flex-col gap-1">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-body font-semibold text-body-sm text-midnight">
            {review.name}
          </p>
          {review.verified && (
            <span className="flex items-center gap-1 font-body text-body-sm text-spark-green">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Verified Purchase
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block px-2 py-0.5 rounded-pill bg-circuit-blue/10 font-body font-semibold text-label text-circuit-blue">
            {review.badge}
          </span>
          <span className="font-body text-body-sm text-slate">{review.date}</span>
        </div>
      </footer>
    </article>
  );
}

export default function ReviewsSection({
  reviews = FALLBACK_REVIEWS,
}: {
  reviews?: Review[];
}) {
  const carouselRef = useRef<HTMLUListElement>(null);

  function handleKeyDown(e: KeyboardEvent<HTMLUListElement>) {
    const el = carouselRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard
      ? firstCard.offsetWidth + 24 // 24px = gap-6
      : el.offsetWidth;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      el.scrollBy({ left: cardWidth, behavior: "smooth" });
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      el.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  }

  return (
    <section
      id="reviews"
      className="py-16 md:py-24 px-6 bg-white"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-content mx-auto">
        <div className="text-center mb-12">
          <h2
            id="reviews-heading"
            className="font-heading font-bold text-h1 text-midnight mb-4"
          >
            What builders are saying
          </h2>
          <p className="font-body text-body-lg text-slate max-w-2xl mx-auto">
            Real feedback from our first cohort of beginner builders.
          </p>
        </div>

        {/* Mobile: horizontal scroll carousel (1.2 cards visible).
            Desktop: 3-column grid. Arrow keys scroll the carousel when focused. */}
        <div role="region" aria-label="Customer reviews carousel">
          <ul
            ref={carouselRef}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            aria-label="Customer reviews"
            className={[
              // Mobile carousel
              "flex gap-6 overflow-x-auto snap-x snap-mandatory",
              "pb-4 -mx-6 px-6",
              // Desktop grid
              "md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0 md:mx-0 md:px-0",
              // Scrollbar hidden
              "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
              // Focus ring
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-circuit-blue focus-visible:ring-offset-2 rounded-sm",
            ].join(" ")}
          >
            {reviews.map((review, i) => (
              <li
                key={i}
                className="snap-start shrink-0 w-[83.33%] md:w-auto md:shrink"
              >
                <ReviewCard review={review} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
