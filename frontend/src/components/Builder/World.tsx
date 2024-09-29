import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { applyWorldBonus, removeWorldBonus } from "../../features/components/Builder/classInformationsSlice";
import '../../styles/components/Builder/World.scss';
import { guildBonus } from "../../asset";

const World: React.FC = () => {
    const dispatch = useDispatch();
    const [isSelected, setIsSelected] = useState(false);
  
    const handleButtonClick = () => {
      if (isSelected) {
        dispatch(removeWorldBonus());
      } else {
        dispatch(applyWorldBonus());
      }
      setIsSelected(!isSelected);
    };

    return (
        <div className="world">
          <button className={`world-button ${isSelected ? 'selected' : ''}`} onClick={handleButtonClick}>
            <img 
                loading="lazy" 
                src={guildBonus[2].src} 
                alt={guildBonus[2].alt} 
            />
          </button>
        </div>
      );
};

export default World;
