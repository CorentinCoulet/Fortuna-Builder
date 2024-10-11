import React from "react";
import * as z from "zod";
import useFormValidationError from "../../customHooks/useFormValidationError";
import Input from "./Input";
import "../../styles/components/Others/SigninForm.scss";
import { useDispatch } from "react-redux";
import { register } from "../../features/components/Others/authSlice";
import { AppDispatch } from "../../store";

function SignInForm() {
  const dispatch = useDispatch<AppDispatch>();

  const signInSchema = z
    .object({
      email: z.string().email({ message: "L'email n'est pas valide" }),
      password: z.string().min(8, {
        message: "Le mot de passe doit contenir au moins 8 caractères",
      }),

      confirmPassword: z.string().min(8, {
        message:
          "La confirmation du mot de passe doit contenir au moins 8 caractères",
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Les mots de passe ne correspondent pas",
      path: ["confirmPassword"],
    });

  const { formRef, handleChange, handleSubmit, values, errors } =
    useFormValidationError(signInSchema);

  const onSubmit = () => {
    dispatch(register({ email: values.email, password: values.password }));
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
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
