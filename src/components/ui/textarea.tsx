import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      error,
      helperText,
      id,
      "aria-describedby": ariaDescribedby,
      ...props
    },
    ref
  ) => {
    const textareaId = id || React.useId();
    const helperTextId = `${textareaId}-helper-text`;
    const describedBy = [ariaDescribedby, helperText && helperTextId]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="relative">
        <textarea
          id={textareaId}
          className={cn(
            "flex min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-destructive focus-visible:ring-destructive"
              : "border-input focus-visible:ring-input",
            className
          )}
          ref={ref}
          aria-invalid={error}
          aria-describedby={describedBy || undefined}
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
Textarea.displayName = "Textarea";

export { Textarea };
