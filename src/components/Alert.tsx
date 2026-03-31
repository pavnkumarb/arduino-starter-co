import { HTMLAttributes } from "react";

type AlertType = "success" | "error" | "warning" | "info";

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  type?: AlertType;
  title?: string;
}

const alertConfig: Record<
  AlertType,
  { bg: string; border: string; text: string; iconPath: string; ariaLabel: string }
> = {
  success: {
    bg: "bg-[#E6FFF8]",
    border: "border-l-4 border-spark-green",
    text: "text-[#276749]",
    iconPath:
      "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-2.99",
    ariaLabel: "Success",
  },
  error: {
    bg: "bg-[#FFF5F5]",
    border: "border-l-4 border-alert-red",
    text: "text-[#9B2C2C]",
    iconPath:
      "M18 6 6 18M6 6l12 12",
    ariaLabel: "Error",
  },
  warning: {
    bg: "bg-[#FFFFF0]",
    border: "border-l-4 border-caution-amber",
    text: "text-[#744210]",
    iconPath:
      "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01",
    ariaLabel: "Warning",
  },
  info: {
    bg: "bg-[#EBF5FF]",
    border: "border-l-4 border-circuit-blue",
    text: "text-[#1A365D]",
    iconPath:
      "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 8v4M12 16h.01",
    ariaLabel: "Info",
  },
};

/**
 * Alert — design system component.
 * Spec: docs/DESIGN-SYSTEM.md §6.7
 */
export default function Alert({
  type = "info",
  title,
  className = "",
  children,
  ...props
}: AlertProps) {
  const cfg = alertConfig[type];

  return (
    <div
      role="alert"
      className={[
        "flex gap-3 p-4 rounded-md font-body text-body",
        cfg.bg,
        cfg.border,
        cfg.text,
        className,
      ].join(" ")}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-label={cfg.ariaLabel}
        className="mt-0.5 shrink-0"
      >
        <path d={cfg.iconPath} />
      </svg>
      <div>
        {title && <p className="font-semibold mb-1">{title}</p>}
        {children}
      </div>
    </div>
  );
}
