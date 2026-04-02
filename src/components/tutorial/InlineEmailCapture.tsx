"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";

interface Props {
  stepIndex: number;
}

const CONFETTI_COLORS = [
  "#0D7ECD",
  "#00C896",
  "#F97316",
  "#D69E2E",
  "#8B5CF6",
  "#EF4444",
];

const CONFETTI_PIECES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  left: `${8 + i * 6}%`,
  delay: `${(i % 4) * 80}ms`,
  size: i % 3 === 0 ? 8 : 6,
  rotate: `${(i * 37) % 180}deg`,
}));

export default function InlineEmailCapture({ stepIndex }: Props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const utmRef = useRef<{ source?: string; medium?: string; campaign?: string }>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    utmRef.current = {
      source: params.get("utm_source") ?? undefined,
      medium: params.get("utm_medium") ?? undefined,
      campaign: params.get("utm_campaign") ?? undefined,
    };
  }, []);

  // Only show on step 3+ (0-indexed: index >= 2)
  if (stepIndex < 2) return null;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: utmRef.current.source ?? "tutorial_inline",
          utm_medium: utmRef.current.medium,
          utm_campaign: utmRef.current.campaign,
        }),
      });
      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1800);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="relative overflow-hidden my-8 rounded-xl border border-circuit-blue/20 bg-circuit-blue/5 px-6 py-5"
      aria-label="Waitlist sign-up"
    >
      {/* Confetti */}
      {showConfetti && (
        <>
          <style>{`
            @keyframes confetti-burst {
              0%   { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; }
              100% { transform: translateY(-70px) rotate(360deg) scale(0.5); opacity: 0; }
            }
          `}</style>
          {CONFETTI_PIECES.map((p) => (
            <span
              key={p.id}
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: "20px",
                left: p.left,
                width: p.size,
                height: p.size,
                borderRadius: "2px",
                backgroundColor: p.color,
                transform: `rotate(${p.rotate})`,
                animation: `confetti-burst 1.2s ${p.delay} ease-out forwards`,
                pointerEvents: "none",
              }}
            />
          ))}
        </>
      )}

      {submitted ? (
        <div role="status" aria-live="polite" className="flex items-center gap-3">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00C896"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="9 12 11 14 15 10" />
          </svg>
          <div>
            <p className="font-heading font-bold text-h3 text-midnight">
              You&apos;re on the list!
            </p>
            <p className="font-body text-body-sm text-slate">
              We&apos;ll email you the moment pre-orders open.
            </p>
          </div>
        </div>
      ) : (
        <>
          <p className="font-heading font-semibold text-h3 text-midnight mb-1">
            Enjoying this?
          </p>
          <p className="font-body text-body text-ink mb-4">
            Get the full kit and 4 more projects →
          </p>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="flex-1">
              <Input
                type="email"
                label="Email address"
                id="inline-capture-email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={error}
                autoComplete="email"
                className="w-full"
                aria-required="true"
                disabled={loading}
              />
            </div>
            <div className="sm:pt-[28px]">
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full sm:w-auto whitespace-nowrap"
                disabled={loading}
              >
                {loading ? "Joining…" : "Get Early Access"}
              </Button>
            </div>
          </form>
          <p className="font-body text-body-sm text-slate mt-2">
            No spam. Launch news only. Unsubscribe anytime.
          </p>
        </>
      )}
    </div>
  );
}
