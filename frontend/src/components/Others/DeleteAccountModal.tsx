import React from "react";
import "../../styles/components/Others/DeleteAccountModal.scss";
import Modal from "react-modal";
import Input from "./Input";
import * as z from "zod";
import useFormValidationError from "../../customHooks/useFormValidationError";

interface IDeleteAccountModalProps {
  open: boolean;
  onClose: () => void;
  onDelete: (currentpassword: string) => void;
}

const passwordSchema = z.object({
  currentPassword: z.string().min(1, {
    message: "Le champs est requis",
  }),
});

function DeleteAccountModal({
  open,
  onClose,
  onDelete,
}: IDeleteAccountModalProps) {
  const { formRef, handleSubmit, handleChange, errors } =
    useFormValidationError(passwordSchema);

  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      overlayClassName="modal-overlay"
      className="delete-account-modal"
    >
      <h2>Supprimer mon compte</h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit(({ currentPassword }) => {
          onDelete(currentPassword);
        })}
      >
        <Input
          label="Mot de passe"
          id="currentPassword"
          type="password"
          placeholder="Mot de passe"
          name="currentPassword"
          onChange={handleChange}
          errors={errors.currentPassword}
        />

        <button type="submit">Supprimer le compte</button>
      </form>
    </Modal>
  );
}

export default DeleteAccountModal;
