import type { VideoClip as VideoClipType } from "@/lib/tutorials";

interface VideoClipProps {
  clip: VideoClipType;
}

const TOPIC_LABELS: Record<VideoClipType["topic"], string> = {
  wiring: "Wiring walkthrough",
  code_upload: "Uploading code",
  troubleshooting: "Troubleshooting",
  demo: "See it in action",
};

export default function VideoClip({ clip }: VideoClipProps) {
  const durationMin = Math.floor(clip.durationSec / 60);
  const durationSec = clip.durationSec % 60;
  const durationLabel =
    durationMin > 0
      ? `${durationMin}m ${durationSec}s`
      : `${durationSec}s`;

  return (
    <div className="rounded-xl border border-mist bg-white overflow-hidden">
      {/* Video placeholder */}
      <div
        className="relative bg-midnight flex items-center justify-center aspect-video"
        role="img"
        aria-label={clip.thumbnailAlt}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-circuit-blue/30 to-spark-green/20" />
        <button
          className="relative z-10 w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-midnight"
          aria-label={`Play: ${clip.title}`}
          type="button"
        >
          <svg
            className="w-6 h-6 text-circuit-blue ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>

      <div className="px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold text-circuit-blue uppercase tracking-wide">
            {TOPIC_LABELS[clip.topic]}
          </span>
          <span className="text-xs text-slate">{durationLabel}</span>
        </div>
        <p className="text-sm font-medium text-ink mt-0.5">{clip.title}</p>
      </div>
    </div>
  );
}
