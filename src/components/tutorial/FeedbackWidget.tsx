"use client";

import { useState, useEffect } from "react";

type Rating = "up" | "down";
type Phase = "idle" | "comment" | "done" | "error";

interface FeedbackWidgetProps {
  /** Identifies this tutorial step — used as pageUrl in the payload. */
  stepPath: string;
}

export default function FeedbackWidget({ stepPath }: FeedbackWidgetProps) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [submitting, setSubmitting] = useState(false);
  const [rating, setRating] = useState<Rating | null>(null);
  const [comment, setComment] = useState("");

  // Reset if the route changes (user navigates to another step)
  useEffect(() => {
    setPhase("idle");
    setSubmitting(false);
    setRating(null);
    setComment("");
  }, [stepPath]);

  function handleRating(chosen: Rating) {
    setRating(chosen);
    setPhase("comment");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!rating) return;

    setSubmitting(true);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pageUrl: stepPath,
          rating,
          comment: comment.trim() || null,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSubmitting(false);
      setPhase("done");
    } catch {
      setSubmitting(false);
      setPhase("error");
    }
  }

  function handleSkip() {
    if (!rating) return;
    // Submit without a comment
    setComment("");
    fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pageUrl: stepPath,
        rating,
        comment: null,
        timestamp: new Date().toISOString(),
      }),
    }).catch(() => {
      // Best-effort; don't surface skip errors
    });
    setPhase("done");
  }

  if (phase === "done") {
    return (
      <div className="rounded-xl border border-spark-green/30 bg-green-50 px-5 py-4 flex items-center gap-3">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00C896"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="shrink-0"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <p className="text-sm text-green-800 font-medium">
          Thanks for the feedback — it helps us improve the tutorials!
        </p>
      </div>
    );
  }

  if (phase === "error") {
    return (
      <div className="rounded-xl border border-caution-amber/30 bg-amber-50 px-5 py-4 flex items-center justify-between gap-3">
        <p className="text-sm text-amber-800">
          Something went wrong saving your feedback.
        </p>
        <button
          type="button"
          onClick={() => {
            setPhase("idle");
            setRating(null);
            setComment("");
          }}
          className="text-xs font-semibold text-amber-700 underline hover:text-amber-900 focus:outline-none focus:ring-2 focus:ring-caution-amber rounded"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-mist bg-white px-5 py-4">
      {phase === "idle" && (
        <div className="flex items-center gap-4">
          <p className="text-sm text-slate font-medium">
            Was this step helpful?
          </p>
          <div className="flex items-center gap-2">
            <ThumbButton
              direction="up"
              selected={false}
              onClick={() => handleRating("up")}
              label="Yes, helpful"
            />
            <ThumbButton
              direction="down"
              selected={false}
              onClick={() => handleRating("down")}
              label="No, not helpful"
            />
          </div>
        </div>
      )}

      {phase === "comment" && (
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex items-center gap-3 mb-4">
            <p className="text-sm text-slate font-medium">
              {rating === "up"
                ? "Great! Anything you'd like to add?"
                : "Sorry to hear that. What could be better?"}
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <ThumbButton
                direction="up"
                selected={rating === "up"}
                onClick={() => setRating("up")}
                label="Yes, helpful"
              />
              <ThumbButton
                direction="down"
                selected={rating === "down"}
                onClick={() => setRating("down")}
                label="No, not helpful"
              />
            </div>
          </div>

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Optional — describe what helped or what was confusing…"
            maxLength={1000}
            rows={3}
            className="w-full rounded-lg border border-mist px-3 py-2 text-sm text-ink placeholder-slate/60 resize-none focus:outline-none focus:ring-2 focus:ring-circuit-blue focus:border-circuit-blue transition-colors"
            aria-label="Optional feedback comment"
          />

          <div className="flex items-center gap-3 mt-3">
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 bg-circuit-blue text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-circuit-blue focus:ring-offset-2 disabled:opacity-60"
              disabled={submitting}
            >
                      {submitting ? "Sending…" : "Send feedback"}
            </button>
            <button
              type="button"
              onClick={handleSkip}
              disabled={submitting}
              className="text-sm text-slate hover:text-ink transition-colors focus:outline-none focus:ring-2 focus:ring-circuit-blue rounded disabled:opacity-50"
            >
              Skip
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

// ── Internal sub-component ────────────────────────────────────────────────────

interface ThumbButtonProps {
  direction: "up" | "down";
  selected: boolean;
  onClick: () => void;
  label: string;
}

function ThumbButton({ direction, selected, onClick, label }: ThumbButtonProps) {
  const isUp = direction === "up";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={selected}
      className={`
        inline-flex items-center justify-center w-9 h-9 rounded-lg border transition-colors
        focus:outline-none focus:ring-2 focus:ring-circuit-blue focus:ring-offset-1
        ${
          selected && isUp
            ? "bg-green-50 border-spark-green text-spark-green"
            : selected && !isUp
            ? "bg-red-50 border-red-400 text-red-500"
            : "border-mist text-slate hover:border-circuit-blue hover:text-circuit-blue"
        }
      `}
    >
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
        className={isUp ? "" : "rotate-180"}
      >
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      </svg>
    </button>
  );
}
