"use client";

import { useState, FormEvent, useEffect, useRef } from "react";

const STORAGE_KEY = "sticky_bar_dismissed";

export default function StickyEmailBar() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const utmRef = useRef<{ source?: string }>({});

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    setVisible(true);
    const params = new URLSearchParams(window.location.search);
    utmRef.current = { source: params.get("utm_source") ?? "tutorial_sticky" };
  }, []);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email.");
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
        setError(data.error ?? "Something went wrong.");
        return;
      }
      setSubmitted(true);
      setTimeout(dismiss, 2500);
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!visible) return null;

  return (
    // sm:hidden — only visible on mobile (below sm breakpoint)
    <div
      className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-midnight text-white px-4 py-3 shadow-lg"
      role="complementary"
      aria-label="Join the waitlist"
    >
      {submitted ? (
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00C896"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            <span className="font-body text-body-sm font-semibold">
              You&apos;re on the list!
            </span>
          </div>
          <button
            onClick={dismiss}
            aria-label="Dismiss"
            className="text-white/60 hover:text-white p-1"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="flex gap-2 items-center">
          <div className="flex-1 min-w-0">
            <label htmlFor="sticky-bar-email" className="sr-only">
              Email address
            </label>
            <input
              id="sticky-bar-email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              autoComplete="email"
              disabled={loading}
              aria-required="true"
              aria-invalid={!!error}
              className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-spark-green"
            />
            {error && (
              <p className="text-xs text-alert-red mt-1">{error}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="shrink-0 bg-spark-green text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-green-500 transition-colors disabled:opacity-60 whitespace-nowrap"
          >
            {loading ? "…" : "Join Waitlist"}
          </button>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss"
            className="shrink-0 text-white/50 hover:text-white p-1"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </form>
      )}
      {!submitted && (
        <p className="text-[11px] text-white/40 mt-1 text-center">
          Get the starter kit — join the waitlist
        </p>
      )}
    </div>
  );
}
