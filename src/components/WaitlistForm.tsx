"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import Button from "./Button";
import Input from "./Input";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const utmRef = useRef<{ source?: string; medium?: string; campaign?: string }>({});

  // Capture UTM params once on mount (client-only).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    utmRef.current = {
      source: params.get("utm_source") ?? undefined,
      medium: params.get("utm_medium") ?? undefined,
      campaign: params.get("utm_campaign") ?? undefined,
    };
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address to join the waitlist.");
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
          source: utmRef.current.source,
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
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center gap-3 py-4"
      >
        {/* Check circle icon */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00C896"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
        <p className="font-heading font-bold text-h3 text-midnight">
          You&apos;re on the list!
        </p>
        <p className="font-body text-body text-slate text-center max-w-sm">
          We&apos;ll email you the moment pre-orders open. Thanks for your interest in
          Arduino Starter Co.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col sm:flex-row gap-3 w-full max-w-lg mx-auto"
      aria-label="Waitlist sign-up"
    >
      <div className="flex-1">
        <Input
          type="email"
          label="Email address"
          id="waitlist-email"
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
          {loading ? "Joining…" : "Join the Waitlist"}
        </Button>
      </div>
    </form>
  );
}
