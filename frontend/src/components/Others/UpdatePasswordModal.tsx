import React from "react";
import Modal from "react-modal";
import Input from "./Input";
import * as z from "zod";
import useFormValidationError from "../../customHooks/useFormValidationError";
import "../../styles/components/Others/UpdatePasswordModal.scss";

interface IUpdatePasswordModal {
  open: boolean;
  onClose: () => void;
  onUpdate: (currentPassword: string, newPassword: string) => void;
}

const updatePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, {
      message: "Le champs est requis",
    }),
    newPassword: z.string().min(1, {
      message: "Le champs est requis",
    }),
    confirmPassword: z.string().min(1, {
      message: "Le champs est requis",
    }),
  })
  .refine(
    (data) => {
      return data.newPassword === data.confirmPassword;
    },
    {
      message: "Les mot de passe ne correspondent pas",
      path: ["confirmPassword"],
    }
  );

function UpdatePasswordModal({
  open,
  onClose,
  onUpdate,
}: IUpdatePasswordModal) {
  const { formRef, handleSubmit, handleChange, errors } =
    useFormValidationError(updatePasswordSchema);

  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      overlayClassName="modal-overlay"
      className="update-password-modal"
    >
      <h2>Modification du mot de passe</h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit(({ currentPassword, newPassword }) => {
          onUpdate(currentPassword, newPassword);
        })}
      >
        <Input
          label="Mot de passe actuel"
          id="currentPassword"
          type="password"
          placeholder="Mot de passe actuel"
          name="currentPassword"
          onChange={handleChange}
          errors={errors.currentPassword}
        />

        <Input
          label="Nouveau mot de passe"
          id="newPassword"
          type="password"
          placeholder="Nouveau mot de passe"
          name="newPassword"
          onChange={handleChange}
          errors={errors.newPassword}
        />

        <Input
          label="Confirmation du mot de passe"
          id="confirmPassword"
          type="password"
          placeholder="Confirmation du mot de passe"
          name="confirmPassword"
          onChange={handleChange}
          errors={errors.confirmPassword}
        />

        <button type="submit">Mettre à jour</button>
      </form>
    </Modal>
  );
}

export default UpdatePasswordModal;
