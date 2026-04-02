"use client";

import { useState } from "react";
import type { WiringDiagram as WiringDiagramType } from "@/lib/tutorials";

interface WiringDiagramProps {
  diagram: WiringDiagramType;
}

const WIRE_COLOR_CLASSES: Record<string, string> = {
  red: "bg-red-500",
  black: "bg-gray-800",
  yellow: "bg-yellow-400",
  orange: "bg-orange-400",
  green: "bg-green-500",
  blue: "bg-blue-500",
};

export default function WiringDiagram({ diagram }: WiringDiagramProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="rounded-xl border border-mist bg-white overflow-hidden">
      <div className="bg-midnight text-white px-4 py-2 text-sm font-semibold">
        Wiring Diagram
      </div>

      {/* Image area — full-width, tap-to-expand on mobile */}
      <div className="relative w-full aspect-[4/3] bg-gray-100 border-b border-mist overflow-hidden">
        <div
          className="w-full h-full flex items-center justify-center text-slate text-sm"
          role="img"
          aria-label={diagram.altText}
        >
          <span className="text-center px-4">{diagram.altText}</span>
        </div>

        {/* Mobile tap-to-expand affordance */}
        <button
          type="button"
          className="md:hidden absolute inset-0 w-full h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-circuit-blue"
          aria-label="Tap to expand diagram"
          onClick={() => setLightboxOpen(true)}
        >
          <span className="absolute bottom-2 right-2 flex items-center gap-1 bg-midnight/60 text-white text-xs font-semibold px-2 py-1 rounded-pill pointer-events-none">
            <span aria-hidden="true">⊕</span> Tap to expand
          </span>
        </button>
      </div>

      {/* Lightbox modal (mobile only) */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-midnight/90 flex items-center justify-center md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={diagram.altText}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            className="absolute top-3 right-3 p-3 text-white text-2xl leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close diagram"
            onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
          >
            ×
          </button>
          <div
            className="max-h-[85vh] w-full flex items-center justify-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full max-h-[85vh] bg-gray-100 flex items-center justify-center rounded-xl text-slate text-sm object-contain"
              role="img"
              aria-label={diagram.altText}
            >
              <span className="text-center px-4">{diagram.altText}</span>
            </div>
          </div>
        </div>
      )}

      <div className="p-4 space-y-5">
        {/* Component Notes */}
        {diagram.componentLabels && diagram.componentLabels.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-slate uppercase tracking-wide mb-3">
              Component Notes
            </p>
            <ul className="space-y-1">
              {diagram.componentLabels.map((label, i) => (
                <li key={i} className="text-sm text-ink">
                  • <span className="font-medium">{label.component}</span> — {label.note}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Connection table */}
        <div>
          <p className="text-xs font-semibold text-slate uppercase tracking-wide mb-3">
            Connections
          </p>
          <ol className="space-y-2">
            {diagram.connections.map((conn, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span
                  className={`mt-1.5 w-3 h-3 rounded-full shrink-0 ${
                    WIRE_COLOR_CLASSES[conn.color] ?? "bg-gray-400"
                  }`}
                  aria-label={`${conn.color} wire`}
                />
                <span>
                  <span className="font-medium text-ink">{conn.from}</span>
                  <span className="text-slate mx-1">→</span>
                  <span className="font-medium text-ink">{conn.to}</span>
                  {conn.note && (
                    <span className="block text-slate text-xs mt-0.5">
                      {conn.note}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
