import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      error,
      helperText,
      "aria-describedby": ariaDescribedby,
      ...props
    },
    ref
  ) => {
    const inputId = React.useId();
    const helperTextId = `${inputId}-helper-text`;
    const describedBy = [ariaDescribedby, helperText && helperTextId]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="relative">
        <input
          type={type}
          id={inputId}
          className={cn(
            "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            error
              ? "border-destructive focus-visible:ring-destructive"
              : "border-input focus-visible:ring-input",
            className
          )}
          ref={ref}
          aria-invalid={error}
          aria-describedby={describedBy}
          {...props}
        />
        {helperText && (
          <p
            id={helperTextId}
            className={cn(
              "mt-1 text-sm",
              error ? "text-destructive" : "text-muted-foreground"
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
