"use client";

import { useState, FormEvent, useEffect, useRef } from "react";

const SESSION_KEY = "exit_intent_shown";

export default function ExitIntentCapture() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const utmRef = useRef<{ source?: string }>({});
  const firedRef = useRef(false);

  useEffect(() => {
    // Desktop only — skip on touch devices
    if (window.matchMedia("(hover: none)").matches) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const params = new URLSearchParams(window.location.search);
    utmRef.current = { source: params.get("utm_source") ?? "tutorial_exit_intent" };

    function onMouseLeave(e: MouseEvent) {
      if (firedRef.current) return;
      if (e.clientY <= 0) {
        firedRef.current = true;
        sessionStorage.setItem(SESSION_KEY, "1");
        setOpen(true);
      }
    }

    document.addEventListener("mouseleave", onMouseLeave);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, []);

  function close() {
    setOpen(false);
  }

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
        body: JSON.stringify({ email, source: utmRef.current.source }),
      });
      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    // Hidden on mobile (sm:flex) — desktop only
    <div
      className="hidden sm:flex fixed inset-0 z-50 items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-heading"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="relative bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4">
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 text-slate hover:text-ink transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <svg
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00C896"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-4"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            <p className="font-heading font-bold text-h2 text-midnight mb-2">
              You&apos;re on the list!
            </p>
            <p className="font-body text-body text-slate mb-6">
              We&apos;ll email you the moment pre-orders open.
            </p>
            <button
              onClick={close}
              className="font-body text-body-sm text-slate hover:text-ink underline"
            >
              Continue reading
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="font-body text-body-sm font-semibold text-circuit-blue uppercase tracking-wide mb-2">
                Before you go
              </p>
              <h2
                id="exit-intent-heading"
                className="font-heading font-bold text-h2 text-midnight mb-3"
              >
                Get the full kit + 4 more projects
              </h2>
              <p className="font-body text-body text-slate">
                Join the waitlist and be first to know when pre-orders open.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="exit-intent-email"
                  className="font-body font-semibold text-label text-ink block mb-2"
                >
                  Email address
                </label>
                <input
                  id="exit-intent-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  autoComplete="email"
                  disabled={loading}
                  aria-required="true"
                  aria-invalid={!!error}
                  className={[
                    "w-full bg-white border rounded-md px-[14px] py-[10px]",
                    "font-body text-body text-ink placeholder:text-slate",
                    "focus:outline-none focus:border-circuit-blue focus:shadow-focus transition-shadow",
                    error ? "border-alert-red" : "border-mist",
                  ].join(" ")}
                />
                {error && (
                  <p className="font-body text-body-sm text-alert-red mt-1">{error}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-circuit-blue text-white font-body font-semibold rounded-md min-h-[44px] py-3 hover:bg-[#0A6DB0] transition-colors disabled:opacity-60"
              >
                {loading ? "Joining…" : "Join the Waitlist"}
              </button>
            </form>

            <p className="font-body text-body-sm text-slate text-center mt-3">
              No spam. Launch news only. Unsubscribe anytime.
            </p>
            <button
              onClick={close}
              className="w-full text-center font-body text-body-sm text-slate hover:text-ink underline mt-2"
            >
              No thanks, continue reading
            </button>
          </>
        )}
      </div>
    </div>
  );
}
