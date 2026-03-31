"use client";

import { useState } from "react";
import type { CodeSnippet } from "@/lib/tutorials";

interface CodeBlockProps {
  snippet: CodeSnippet;
}

// Minimal syntax highlighting for C++ / Arduino (.ino) — Design System §6.5
// Palette: keywords=#9DECF9, strings=#68D391, numbers=#FBD38D, comments=#718096
type TokenKind = "keyword" | "string" | "number" | "comment" | "plain";
interface Token {
  kind: TokenKind;
  text: string;
}

const CPP_KEYWORDS = new Set([
  "void", "int", "long", "float", "double", "bool", "char", "byte",
  "unsigned", "const", "return", "if", "else", "for", "while", "do",
  "switch", "case", "break", "continue", "true", "false", "NULL",
  "setup", "loop", "pinMode", "digitalWrite", "digitalRead", "analogRead",
  "analogWrite", "delay", "delayMicroseconds", "Serial", "print", "println",
  "begin", "map", "HIGH", "LOW", "INPUT", "OUTPUT", "INPUT_PULLUP",
  "A0", "A1", "A2", "A3", "A4", "A5",
]);

function tokenizeCpp(code: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;

  while (i < code.length) {
    // Single-line comment
    if (code[i] === "/" && code[i + 1] === "/") {
      const end = code.indexOf("\n", i);
      const text = end === -1 ? code.slice(i) : code.slice(i, end);
      tokens.push({ kind: "comment", text });
      i += text.length;
      continue;
    }

    // String literal
    if (code[i] === '"') {
      let j = i + 1;
      while (j < code.length && !(code[j] === '"' && code[j - 1] !== "\\")) {
        j++;
      }
      tokens.push({ kind: "string", text: code.slice(i, j + 1) });
      i = j + 1;
      continue;
    }

    // Number literal
    if (/[0-9]/.test(code[i])) {
      let j = i;
      while (j < code.length && /[0-9.]/.test(code[j])) j++;
      tokens.push({ kind: "number", text: code.slice(i, j) });
      i = j;
      continue;
    }

    // Identifier or keyword
    if (/[a-zA-Z_]/.test(code[i])) {
      let j = i;
      while (j < code.length && /[a-zA-Z0-9_]/.test(code[j])) j++;
      const word = code.slice(i, j);
      tokens.push({ kind: CPP_KEYWORDS.has(word) ? "keyword" : "plain", text: word });
      i = j;
      continue;
    }

    // Any other character — plain
    tokens.push({ kind: "plain", text: code[i] });
    i++;
  }

  return tokens;
}

const TOKEN_STYLES: Record<TokenKind, string> = {
  keyword: "color:#9DECF9",
  string: "color:#68D391",
  number: "color:#FBD38D",
  comment: "color:#718096;font-style:italic",
  plain: "",
};

function highlightCpp(code: string) {
  const tokens = tokenizeCpp(code);
  return tokens.map((t, i) =>
    t.kind === "plain" ? (
      <span key={i}>{t.text}</span>
    ) : (
      <span key={i} style={{ ...parseStyle(TOKEN_STYLES[t.kind]) }}>
        {t.text}
      </span>
    )
  );
}

function parseStyle(s: string): React.CSSProperties {
  const result: Record<string, string> = {};
  for (const part of s.split(";")) {
    const [k, v] = part.split(":");
    if (k && v) result[k.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = v.trim();
  }
  return result;
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

  const isCpp = snippet.language === "cpp" || snippet.filename.endsWith(".ino");

  return (
    <div
      className="overflow-hidden"
      style={{
        borderLeft: "4px solid #0D7ECD",
        borderRadius: "0 8px 8px 0",
        border: "1px solid #E2E8F0",
        borderLeftWidth: 4,
        borderLeftColor: "#0D7ECD",
        borderLeftStyle: "solid",
      }}
    >
      {/* Header — Design System §6.5 */}
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
      <pre
        className="overflow-x-auto p-4 text-sm leading-relaxed"
        style={{ background: "#1A202C", color: "#E2E8F0" }}
      >
        <code className="font-code">
          {isCpp ? highlightCpp(snippet.code) : snippet.code}
        </code>
      </pre>
    </div>
  );
}
