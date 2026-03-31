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
  return (
    <div className="rounded-xl border border-mist bg-white overflow-hidden">
      <div className="bg-midnight text-white px-4 py-2 text-sm font-semibold">
        Wiring Diagram
      </div>

      {/* Image placeholder — swap for a real SVG/image in production */}
      <div
        className="bg-gray-100 flex items-center justify-center text-slate text-sm py-12 border-b border-mist"
        role="img"
        aria-label={diagram.altText}
      >
        <span className="text-center px-4">{diagram.altText}</span>
      </div>

      {/* Connection table */}
      <div className="p-4">
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
  );
}
