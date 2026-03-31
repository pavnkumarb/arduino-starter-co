"use client";

import { useState } from "react";
import type { TroubleshootingItem } from "@/lib/tutorials";

interface TroubleshootAccordionProps {
  items: TroubleshootingItem[];
  supportUrl?: string;
}

export default function TroubleshootAccordion({
  items,
  supportUrl,
}: TroubleshootAccordionProps) {
  const [open, setOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="rounded-xl border border-caution-amber/30 bg-amber-50 overflow-hidden">
      {/* Header toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left focus:outline-none focus:ring-2 focus:ring-caution-amber focus:ring-inset"
      >
        <div className="flex items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-caution-amber shrink-0"
            aria-hidden="true"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <span className="text-sm font-semibold text-amber-800">
            It's not working?
          </span>
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`shrink-0 text-amber-600 transition-transform duration-md ease-brand ${
            open ? "rotate-180" : ""
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Expanded content */}
      {open && (
        <div className="border-t border-caution-amber/20 px-5 pb-4">
          <p className="text-xs text-amber-700 pt-3 pb-3">
            These are the top 3 reasons this step trips people up. Find your
            symptom and follow the fix.
          </p>
          <ol className="space-y-1">
            {items.map((item, i) => {
              const isExpanded = expandedIndex === i;
              return (
                <li key={i} className="rounded-lg border border-amber-200 bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedIndex(isExpanded ? null : i)
                    }
                    aria-expanded={isExpanded}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium text-ink hover:bg-amber-50 transition-colors focus:outline-none focus:ring-2 focus:ring-caution-amber focus:ring-inset rounded-lg"
                  >
                    <span>{item.symptom}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className={`shrink-0 text-slate transition-transform duration-md ease-brand ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {isExpanded && (
                    <div className="px-4 pb-3 text-sm text-ink leading-relaxed border-t border-amber-100 pt-2">
                      {item.fix}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
          {supportUrl && (
            <p className="mt-3 text-xs text-amber-700">
              Still stuck?{" "}
              <a
                href={supportUrl}
                className="font-semibold underline hover:text-amber-900 focus:outline-none focus:ring-2 focus:ring-caution-amber rounded"
              >
                Contact support →
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
