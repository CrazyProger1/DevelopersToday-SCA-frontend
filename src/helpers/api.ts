import { Path, UseFormReturn } from "react-hook-form";
import { ErrorResponse } from "@/types";

export const handleValidationAPIError = <T extends object>(
  form: UseFormReturn<T>,
  response: ErrorResponse,
): boolean => {
  if (response.type === "validation_error" && response.errors) {
    response.errors.forEach((error) => {
      const field = (error.attr in form.getValues() ? error.attr : "root") as Path<T> | "root";
      form.setError(field, {
        type: "server",
        message: error.detail,
      });
    });
    return true;
  }
  return false;
};
