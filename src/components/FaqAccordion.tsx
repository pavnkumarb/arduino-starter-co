"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <dl className="divide-y divide-mist">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="py-5">
            <dt>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 text-left font-heading font-semibold text-h3 text-midnight hover:text-circuit-blue transition-colors duration-sm ease-brand focus-visible:outline-none focus-visible:shadow-focus rounded-sm"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span>{item.question}</span>
                {/* Chevron icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className={`shrink-0 transition-transform duration-md ease-brand ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </dt>
            {isOpen && (
              <dd className="mt-3 font-body text-body-lg text-ink leading-relaxed">
                {item.answer}
              </dd>
            )}
          </div>
        );
      })}
    </dl>
  );
}
