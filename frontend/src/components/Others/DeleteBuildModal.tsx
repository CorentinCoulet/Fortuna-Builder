import React from "react";
import Modal from "react-modal";
import "../../styles/components/Others/DeleteBuildModal.scss";
interface IDeleteBuildModalProps {
  build?: {
    id: number;
    name: string;
    url: string;
  };
  onClose: () => void;
  onDelete: () => void;
}

function DeleteBuildModal({
  build,
  onClose,
  onDelete,
}: IDeleteBuildModalProps) {
  return (
    <Modal
      isOpen={build != undefined}
      onRequestClose={onClose}
      overlayClassName="modal-overlay"
      className="delete-build-modal"
    >
      {build && (
        <>
          <img className="build-image" src={build?.url} />
          <div>
            <h3>{build?.name}</h3>
            <p>Êtes-vous sûr de vouloir supprimer ce build ?</p>
            <button onClick={onDelete}>Supprimer</button>
          </div>
        </>
      )}
    </Modal>
  );
}

export default DeleteBuildModal;
