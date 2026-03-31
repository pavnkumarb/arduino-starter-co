import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "destructive" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-circuit-blue text-white hover:bg-[#0A6DB0] active:bg-[#085E99] disabled:bg-mist disabled:text-slate",
  secondary:
    "bg-transparent border-2 border-circuit-blue text-circuit-blue hover:bg-[#EBF5FF] active:bg-[#D6EEFF] disabled:border-mist disabled:text-slate",
  destructive:
    "bg-alert-red text-white hover:bg-[#C53030] active:bg-[#9B2C2C] disabled:bg-mist disabled:text-slate",
  ghost:
    "bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-mist disabled:text-slate",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-label text-xs",
  md: "px-6 py-3 text-label",
  lg: "px-8 py-4 text-label text-sm",
};

/**
 * Button — design system component.
 * Spec: docs/DESIGN-SYSTEM.md §6.1
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={[
          "inline-flex items-center justify-center gap-2 font-body font-semibold rounded-md",
          "min-h-[44px] transition-colors duration-sm ease-brand",
          "focus-visible:outline-none focus-visible:shadow-focus",
          "disabled:cursor-not-allowed",
          variantClasses[variant],
          sizeClasses[size],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
