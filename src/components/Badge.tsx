import { HTMLAttributes } from "react";

type BadgeVariant = "completion" | "category" | "alert";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

/**
 * Badge — design system component.
 * Spec: docs/DESIGN-SYSTEM.md §6.4
 */
export default function Badge({
  variant = "category",
  className = "",
  children,
  ...props
}: BadgeProps) {
  const variantClasses: Record<BadgeVariant, string> = {
    completion:
      "bg-[#E6FFF8] border border-spark-green text-[#00A077]",
    category:
      "bg-neutral-100 text-neutral-700",
    alert:
      "bg-builder-orange-aa text-white",
  };

  return (
    <span
      className={[
        "inline-flex items-center gap-1 px-[10px] py-1 rounded-pill font-body font-semibold text-label",
        variantClasses[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {variant === "completion" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )}
      {children}
    </span>
  );
}
