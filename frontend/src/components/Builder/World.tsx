import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { applyWorldBonus, removeWorldBonus } from "../../features/components/Builder/classInformationsSlice";
import '../../styles/components/Builder/World.scss';
import { guildBonus } from "../../asset";

const labelsWorld = {
  1: '10 PdV',
  2: '10 Prospection',
  3: '10 Sagesse',
};

const World: React.FC = () => {
    const dispatch = useDispatch();
    const [isSelected, setIsSelected] = useState(false);
    const [hoveredWorld, setHoveredWorld] = useState(false);
  
    const handleButtonClick = () => {
      if (isSelected) {
        dispatch(removeWorldBonus());
      } else {
        dispatch(applyWorldBonus());
      }
      setIsSelected(!isSelected);
    };

    return (
        <div 
          className="world"
          onMouseEnter={() => setHoveredWorld(true)}
          onMouseLeave={() => setHoveredWorld(false)}  
        >
          <button className={`world-button ${isSelected ? 'selected' : ''}`} onClick={handleButtonClick}>
            <img 
                loading="lazy" 
                src={guildBonus[2].src} 
                alt={guildBonus[2].alt} 
            />
          </button>
          {hoveredWorld && (
            <span className="world-labels">
              {Object.values(labelsWorld).map((label, index) => (
                <div key={index}>{label}</div>
              ))}
            </span>
          )}
        </div>
      );
};

export default World;
