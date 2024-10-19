import React from "react";
import "../../styles/components/Others/BuildCard.scss";
interface IBuildCardProps {
  name: string;
  imagePath: string;
  onDelete?: () => void;
  onClick?: () => void;
}

function BuildCard({ name, imagePath, onDelete, onClick }: IBuildCardProps) {
  return (
    <div className="build-card">
      <div className="build-card-action">
        <img
          className="trash"
          src="/src/assets/icons/trash.svg"
          onClick={onDelete}
        />
      </div>
      <img src={imagePath} onClick={onClick} />
      <p>{name}</p>
    </div>
  );
}

export default BuildCard;
