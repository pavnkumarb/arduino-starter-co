import { HTMLAttributes } from "react";

type CardVariant = "standard" | "feature" | "step";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  stepNumber?: number;
  interactive?: boolean;
}

/**
 * Card — design system component.
 * Spec: docs/DESIGN-SYSTEM.md §6.3
 */
export default function Card({
  variant = "standard",
  stepNumber,
  interactive = false,
  className = "",
  children,
  ...props
}: CardProps) {
  if (variant === "step") {
    return (
      <div
        className={[
          "bg-white border-l-4 border-circuit-blue rounded-r-md p-5 pl-6",
          className,
        ].join(" ")}
        {...props}
      >
        {stepNumber !== undefined && (
          <span className="block font-heading text-h3 text-circuit-blue font-semibold mb-2">
            Step {stepNumber}
          </span>
        )}
        {children}
      </div>
    );
  }

  if (variant === "feature") {
    return (
      <div
        className={["bg-cloud border-none rounded-xl p-8", className].join(" ")}
        {...props}
      >
        {children}
      </div>
    );
  }

  // standard
  return (
    <div
      className={[
        "bg-white border border-mist rounded-lg shadow-sm p-6",
        interactive
          ? "transition-shadow duration-md ease-brand hover:shadow-md hover:border-circuit-blue cursor-pointer"
          : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
