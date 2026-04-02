"use client";

import { useEffect, useState } from "react";
import type { WiringDiagram as WiringDiagramType } from "@/lib/tutorials";

interface WiringDiagramProps {
  diagram: WiringDiagramType;
}

export default function WiringDiagram({ diagram }: WiringDiagramProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen]);

  const captionText = diagram.connections
    .map((c) => `${c.from} → ${c.to}${c.note ? ` (${c.note})` : ""}`)
    .join(" | ");

  return (
    <div className="rounded-xl border border-mist bg-white overflow-hidden">
      <div className="bg-midnight text-white px-4 py-2 text-sm font-semibold">
        Wiring Diagram
      </div>

      {/* Image area — full-width, tap-to-expand on all screen sizes */}
      <figure className="m-0">
        <button
          type="button"
          className="relative w-full aspect-[4/3] bg-gray-100 border-b border-mist overflow-hidden block cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-circuit-blue"
          aria-label="Tap to expand diagram"
          onClick={() => setLightboxOpen(true)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={diagram.imagePlaceholder}
            alt={diagram.altText}
            className="w-full h-full object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
              const sibling = e.currentTarget.nextElementSibling as HTMLElement | null;
              if (sibling) sibling.style.display = "flex";
            }}
          />
          {/* Fallback shown when image fails to load */}
          <div
            className="hidden w-full h-full absolute inset-0 items-center justify-center text-slate text-sm"
            aria-hidden="true"
          >
            <span className="text-center px-4">{diagram.altText}</span>
          </div>
          <span className="absolute bottom-2 right-2 flex items-center gap-1 bg-midnight/60 text-white text-xs font-semibold px-2 py-1 rounded-pill pointer-events-none">
            <span aria-hidden="true">⊕</span> Tap to expand
          </span>
        </button>

        <figcaption className="px-4 py-2 text-xs text-slate border-b border-mist">
          {captionText}
        </figcaption>
      </figure>

      {/* Lightbox modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-midnight/90 flex items-center justify-center"
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
          <figure
            className="max-h-[85vh] w-full flex flex-col items-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={diagram.imagePlaceholder}
              alt={diagram.altText}
              className="max-h-[75vh] w-full object-contain rounded-xl"
            />
            <figcaption className="mt-2 text-white/70 text-xs text-center max-w-prose">
              {captionText}
            </figcaption>
          </figure>
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

        {/* Connection summary table */}
        <div>
          <p className="text-xs font-semibold text-slate uppercase tracking-wide mb-3">
            Connections
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-mist">
                  <th className="text-left py-1.5 pr-3 font-semibold text-ink">From</th>
                  <th className="text-left py-1.5 pr-3 font-semibold text-ink">To</th>
                  <th className="text-left py-1.5 font-semibold text-ink">Notes</th>
                </tr>
              </thead>
              <tbody>
                {diagram.connections.map((conn, i) => (
                  <tr key={i} className="border-b border-mist/50 last:border-0">
                    <td className="py-1.5 pr-3 font-medium text-ink">{conn.from}</td>
                    <td className="py-1.5 pr-3 font-medium text-ink">{conn.to}</td>
                    <td className="py-1.5 text-slate">{conn.note ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
