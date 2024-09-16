import React from 'react';
import "../../styles/components/Searching/RingModal.scss";

interface RingModalProps {
  onSelect: (choice: 'left-ring' | 'right-ring') => void;
  onClose: () => void;
}

const RingModal: React.FC<RingModalProps> = ({ onSelect, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Choisissez l'emplacement de l'anneau</h3>
        <button onClick={() => onSelect('right-ring')}>Main gauche</button>
        <button onClick={() => onSelect('left-ring')}>Main droite</button>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default RingModal;
