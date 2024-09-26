import React from "react";
import * as z from "zod";
import "../../styles/components/Others/LoginForm.scss";
import useFormValidationError from "../../customHooks/useFormValidationError";
import Input from "./Input.tsx";

function LoginForm() {
  const loginSchema = z.object({
    email: z.string().email({ message: "L'email est invalide" }),
    password: z.string().min(8, {
      message: "Le mot de passe doit être supérieur à 8 charactères",
    }),
  });

  const { formRef, handleChange, handleSubmit, errors } =
    useFormValidationError(loginSchema);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="loginForm"
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
      <button type="submit">Se connecter</button>
    </form>
  );
}

export default LoginForm;
