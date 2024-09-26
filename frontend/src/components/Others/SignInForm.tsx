import React from "react";
import * as z from "zod";
import useFormValidationError from "../../customHooks/useFormValidationError";
import Input from "./Input.tsx";
import "../../styles/components/Others/SigninForm.scss";

function SignInForm() {
  const signInSchema = z
    .object({
      email: z.string().email({ message: "L'email n'est pas valide" }),

      password: z.string().min(6, {
        message: "Le mot de passe doit contenir au moins 6 caractères",
      }),

      confirmPassword: z.string().min(6, {
        message:
          "La confirmation du mot de passe doit contenir au moins 6 caractères",
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Les mots de passe ne correspondent pas",
      path: ["confirmPassword"],
    });

  const { formRef, handleChange, handleSubmit, errors } =
    useFormValidationError(signInSchema);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="signin-form"
      noValidate
    >
      <Input
        label="Adresse email"
        id="email"
        type="email"
        placeholder="Adresse email"
        name="email"
        onChange={handleChange}
        errors={errors.email}
      />

      <Input
        label="Mot de passe"
        id="password"
        type="password"
        placeholder="Mot de passe"
        name="password"
        onChange={handleChange}
        errors={errors.password}
      />

      <Input
        label="Confirmation mot de passe"
        id="confirmPassword"
        type="password"
        placeholder="Confirmation mot de passe"
        name="confirmPassword"
        onChange={handleChange}
        errors={errors.confirmPassword}
      />
      <button type="submit">S'inscrire</button>
    </form>
  );
}
export default SignInForm;
