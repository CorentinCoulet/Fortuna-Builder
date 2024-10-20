import React, { useEffect } from 'react';

interface ClearNotificationProps {
  message: string;
  onClose: () => void;
  className?: string;
}

const ClearNotification: React.FC<ClearNotificationProps> = ({ message, onClose, className }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer); 
  }, [onClose]);

  return (
    <div className={`${className}`}>
      <p>{message}</p>
      <button className="close-button" onClick={onClose}>✕</button>
    </div>
  );
};

export default ClearNotification;
