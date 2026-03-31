import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

/**
 * Input — design system component.
 * Spec: docs/DESIGN-SYSTEM.md §6.2
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, id, className = "", ...props }, ref) => {
    const inputId = id ?? `input-${label?.toLowerCase().replace(/\s+/g, "-")}`;
    const helperId = helperText || error ? `${inputId}-helper` : undefined;

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="font-body font-semibold text-label text-ink"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-describedby={helperId}
          aria-invalid={!!error}
          className={[
            "bg-white border rounded-md px-[14px] py-[10px]",
            "font-body text-body text-ink placeholder:text-slate",
            "transition-shadow duration-sm ease-brand",
            "focus:outline-none focus:border-circuit-blue focus:shadow-focus",
            "disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed",
            error ? "border-alert-red" : "border-mist",
            className,
          ].join(" ")}
          {...props}
        />
        {(error || helperText) && (
          <p
            id={helperId}
            className={[
              "font-body text-body-sm",
              error ? "text-alert-red" : "text-slate",
            ].join(" ")}
          >
            {error ?? helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
