import { useRef, useState, SyntheticEvent } from "react";
import { z } from "zod";

export default function useFormValidationError(schema: z.ZodTypeAny) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [errors, setErrors] = useState<
    z.typeToFlattenedError<any, string>["fieldErrors"]
  >({});
  const [values, setValues] = useState<Record<string, any>>({});

  const handleSubmit = (callback: (values: Record<string, any>) => void) => (e: SyntheticEvent) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const parsedData = Object.fromEntries(formData.entries());
      const safeParse = schema.safeParse(parsedData);      
      setIsSubmit(true);

      if (!safeParse.success) {
        setErrors(safeParse.error.flatten().fieldErrors);
      } else {
        setErrors({});
        setValues(parsedData);
        callback(parsedData);
      }
    }
  };

  const handleChange = () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const safeParse = schema.safeParse(Object.fromEntries(formData.entries()));
      if (!safeParse.success && isSubmit) {
        setErrors(safeParse.error.flatten().fieldErrors);
      } else {
        setErrors({});
      }
    }
  };

  return {
    formRef,
    handleSubmit,
    handleChange,
    values,
    errors,
  };
}
