"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const CONSENT_KEY = "cookie_consent";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-XXXXXXXXXX";

type ConsentValue = "accepted" | "essential";

export default function CookieConsentBanner() {
  const [consent, setConsent] = useState<ConsentValue | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted" || stored === "essential") {
      setConsent(stored as ConsentValue);
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
  };

  const handleEssential = () => {
    localStorage.setItem(CONSENT_KEY, "essential");
    setConsent("essential");
    setVisible(false);
  };

  return (
    <>
      {/* Load Google Analytics only after explicit consent */}
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}</Script>
        </>
      )}

      {/* Cookie consent banner */}
      {visible && (
        <div
          role="dialog"
          aria-labelledby="cookie-banner-heading"
          aria-describedby="cookie-banner-desc"
          className="fixed bottom-0 left-0 right-0 z-50 bg-midnight border-t border-white/10 px-6 py-5"
        >
          <div className="max-w-content mx-auto flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div className="flex-1">
              <p
                id="cookie-banner-heading"
                className="font-body font-semibold text-body text-white mb-1"
              >
                We use cookies
              </p>
              <p
                id="cookie-banner-desc"
                className="font-body text-body-sm text-white/60"
              >
                We use Google Analytics to understand how visitors use this site.
                You can accept all cookies or choose essential-only (no
                analytics).{" "}
                <a
                  href="/privacy"
                  className="underline underline-offset-2 hover:text-white transition-colors duration-sm"
                >
                  Privacy policy
                </a>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={handleEssential}
                className="inline-flex items-center justify-center font-body font-semibold text-label text-white/70 border border-white/30 px-5 py-2.5 rounded-md min-h-[44px] hover:border-white/60 hover:text-white transition-colors duration-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-circuit-blue"
              >
                Essential only
              </button>
              <button
                onClick={handleAccept}
                className="inline-flex items-center justify-center font-body font-semibold text-label bg-circuit-blue text-white px-5 py-2.5 rounded-md min-h-[44px] hover:bg-[#0A6DB0] transition-colors duration-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-circuit-blue focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
