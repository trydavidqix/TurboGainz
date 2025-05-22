import { useState } from "react";

interface ValidationRules {
  required?: boolean;
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
  custom?: (value: string) => boolean;
  message?: string;
}

interface ValidationSchema {
  [key: string]: ValidationRules;
}

interface FormErrors {
  [key: string]: string;
}

export const useFormValidation = (schema: ValidationSchema) => {
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (name: string, value: string): string | null => {
    const rules = schema[name];
    if (!rules) return null;

    if (rules.required && !value) {
      return rules.message || "Este campo é obrigatório";
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return rules.message || "Formato inválido";
    }

    if (rules.minLength && value.length < rules.minLength) {
      return rules.message || `Mínimo de ${rules.minLength} caracteres`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return rules.message || `Máximo de ${rules.maxLength} caracteres`;
    }

    if (rules.custom && !rules.custom(value)) {
      return rules.message || "Valor inválido";
    }

    return null;
  };

  const validateForm = (values: { [key: string]: string }): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(schema).forEach((field) => {
      const error = validateField(field, values[field] || "");
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  return {
    errors,
    validateForm,
    validateField,
  };
}; 