import React, { useEffect, useState } from "react";
import * as z from "zod";
import useFormValidationError from "../../customHooks/useFormValidationError";
import Input from "./Input";
import "../../styles/components/Others/SigninForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../features/components/Others/authSlice";
import { AppDispatch, RootState } from "../../store";

function SignInForm() {
  const dispatch = useDispatch<AppDispatch>();
  const authError = useSelector((state: RootState) => state.auth.error); // Récupérer les erreurs du slice
  const [showErrorBubble, setShowErrorBubble] = useState(false);

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

  const onSubmit = (formData: Record<string, any>) => {
    setShowErrorBubble(false);
    dispatch(register({ email: formData.email, password: formData.password }))
      .unwrap()
      .then(() => {
        setShowErrorBubble(false);
      })
      .catch(() => {
        setShowErrorBubble(true);
      });
  };

  useEffect(() => {
    if (authError) {
      setShowErrorBubble(true);
      const timer = setTimeout(() => {
        setShowErrorBubble(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [authError]);

  return (
    <div className="signin-container">
      {showErrorBubble && (
        <div className="error-bubble">
          <p>{authError}</p>
          <button
            onClick={() => setShowErrorBubble(false)}
            className="close-button"
          >
            x
          </button>
        </div>
      )}
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
    </div>
  );
}
export default SignInForm;
