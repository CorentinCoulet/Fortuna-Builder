import React, { useEffect, useState } from "react";
import * as z from "zod";
import "../../styles/components/Others/LoginForm.scss";
import useFormValidationError from "../../customHooks/useFormValidationError";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/components/Others/authSlice";
import { AppDispatch, RootState } from "../../store";

function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const dispatch = useDispatch<AppDispatch>();
  const authError = useSelector((state: RootState) => state.auth.error);
  const [showErrorBubble, setShowErrorBubble] = useState(false);

  const loginSchema = z.object({
    email: z.string().email({ message: "L'email est invalide" }),
    password: z.string().min(8, {
      message: "Le mot de passe doit être supérieur à 8 charactères",
    }),
  });

  const { formRef, handleSubmit, handleChange, values, errors } =
    useFormValidationError(loginSchema);

  const onSubmit = (formData: Record<string, any>) => {
    setShowErrorBubble(false);
    dispatch(login({ email: formData.email, password: formData.password }))
      .unwrap()
      .then(() => {
        onSuccess();
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
    <div className="login-container">
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
    </div>
  );
}

export default LoginForm;
