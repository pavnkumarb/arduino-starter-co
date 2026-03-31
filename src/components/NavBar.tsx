"use client";

import { useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

interface NavBarProps {
  links?: NavLink[];
}

const defaultLinks: NavLink[] = [
  { label: "Kit", href: "#kit" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Projects", href: "#projects" },
  { label: "Support", href: "#support" },
];

/**
 * NavBar — design system component.
 * Spec: docs/DESIGN-SYSTEM.md §6.6
 */
export default function NavBar({ links = defaultLinks }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-white border-b border-mist shadow-sm sticky top-0 z-50"
      aria-label="Main navigation"
    >
      <div className="max-w-content mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0" aria-label="Arduino Starter Co — Home">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Stylized circuit-path "A" symbol */}
            <circle cx="6" cy="26" r="3" fill="#0D7ECD" />
            <circle cx="16" cy="6" r="3" fill="#0D7ECD" />
            <circle cx="26" cy="26" r="3" fill="#0D7ECD" />
            <circle cx="11" cy="16" r="3" fill="#00C896" />
            <circle cx="21" cy="16" r="3" fill="#00C896" />
            <line x1="6" y1="26" x2="16" y2="6" stroke="#0D7ECD" strokeWidth="2" strokeLinecap="round" />
            <line x1="16" y1="6" x2="26" y2="26" stroke="#0D7ECD" strokeWidth="2" strokeLinecap="round" />
            <line x1="11" y1="16" x2="21" y2="16" stroke="#00C896" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="font-heading font-bold text-midnight text-base leading-tight hidden sm:block">
            Arduino Starter Co
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body font-semibold text-label text-ink hover:text-circuit-blue transition-colors duration-sm ease-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#get-kit"
            className="inline-flex items-center justify-center gap-2 font-body font-semibold rounded-md min-h-[44px] transition-colors duration-sm ease-brand focus-visible:outline-none focus-visible:shadow-focus bg-circuit-blue text-white hover:bg-[#0A6DB0] active:bg-[#085E99] px-4 py-2 text-label text-xs"
          >
            Get the Kit
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-ink hover:bg-neutral-100 transition-colors duration-sm"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-mist">
          <ul className="flex flex-col" role="list">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center px-4 font-body font-semibold text-body-lg text-ink min-h-[56px] hover:bg-cloud transition-colors duration-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="p-4 border-t border-mist">
            <a
              href="#get-kit"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 font-body font-semibold rounded-md min-h-[44px] transition-colors duration-sm ease-brand focus-visible:outline-none focus-visible:shadow-focus bg-circuit-blue text-white hover:bg-[#0A6DB0] active:bg-[#085E99] px-6 py-3 text-label w-full"
            >
              Get the Kit
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
