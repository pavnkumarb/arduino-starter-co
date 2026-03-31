"use client";

import { useState } from "react";
import type { CodeSnippet } from "@/lib/tutorials";

interface CodeBlockProps {
  snippet: CodeSnippet;
}

export default function CodeBlock({ snippet }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — silently ignore
    }
  }

  return (
    <div className="rounded-xl border border-mist overflow-hidden">
      <div className="bg-midnight flex items-center justify-between px-4 py-2">
        <span className="text-xs font-code text-gray-400">{snippet.filename}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-circuit-blue"
          aria-label={copied ? "Copied!" : "Copy code"}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto text-sm leading-relaxed">
        <code className="font-code">{snippet.code}</code>
      </pre>
    </div>
  );
}
