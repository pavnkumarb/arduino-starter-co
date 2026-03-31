import { HTMLAttributes } from "react";

interface CodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  language?: string;
  code: string;
}

/**
 * CodeBlock — design system component.
 * Spec: docs/DESIGN-SYSTEM.md §6.5
 */
export default function CodeBlock({
  language,
  code,
  className = "",
  ...props
}: CodeBlockProps) {
  return (
    <div className="relative overflow-x-auto">
      {language && (
        <span className="absolute top-2 right-3 font-code text-xs text-slate select-none">
          {language}
        </span>
      )}
      <pre
        className={[
          "bg-midnight text-mist font-code text-code",
          "border-l-4 border-circuit-blue",
          "rounded-r-md p-4 pl-5 overflow-x-auto",
          className,
        ].join(" ")}
        {...props}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}
