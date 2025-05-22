import { InputHTMLAttributes } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CircleAlert } from "lucide-react";
import * as React from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

const FormInput = ({
  label,
  error,
  required = false,
  className = "",
  id,
  "aria-describedby": ariaDescribedby,
  ...props
}: FormInputProps) => {
  const inputId = id || React.useId();
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [ariaDescribedby, errorId].filter(Boolean).join(" ");

  return (
    <div>
      <Label
        htmlFor={inputId}
        className={`${error ? "text-destructive" : "text-foreground"}`}
      >
        {label}
        {required && " *"}
      </Label>
      <div className="relative">
        <Input
          id={inputId}
          error={!!error}
          aria-describedby={describedBy || undefined}
          className={`bg-background border-input text-foreground placeholder:text-muted-foreground
            ${className}`}
          {...props}
        />
        {error && (
          <CircleAlert
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-destructive"
            aria-hidden="true"
          />
        )}
      </div>
      {error && (
        <p id={errorId} className="text-destructive text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;
