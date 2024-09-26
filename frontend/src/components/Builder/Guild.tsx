import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { applyGuildBonus, removeGuildBonus } from "../../features/components/Builder/classInformationsSlice";
import '../../styles/components/Builder/Guild.scss';
import { guildBonus } from "../../asset";

const Guild: React.FC = () => {
    const dispatch = useDispatch();
    const [isSelected, setIsSelected] = useState(false);
  
    const handleButtonClick = () => {
      if (isSelected) {
        dispatch(removeGuildBonus());
      } else {
        dispatch(applyGuildBonus());
      }
      setIsSelected(!isSelected);
    };

    return (
        <div className="guild">
          <button className={`guild-button ${isSelected ? 'selected' : ''}`} onClick={handleButtonClick}>
            <img 
                loading="lazy" 
                src={guildBonus[1].src} 
                alt={guildBonus[1].alt} 
            />
          </button>
        </div>
      );
};

export default Guild;
