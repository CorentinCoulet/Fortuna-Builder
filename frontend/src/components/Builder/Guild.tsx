import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { applyGuildBonus, removeGuildBonus } from "../../features/components/Builder/classInformationsSlice";
import '../../styles/components/Builder/Guild.scss';
import { guildBonus } from "../../asset";

const labelsGuild = {
  1: '55 PdV',
  2: '20 Résistance Feu',
  3: '20 Résistance Eau',
  4: '20 Résistance Terre',
  5: '20 Résistance Air',
  6: '8 Dommages Infligés',
  7: '8 Soins Réalisés',
  8: '10 Prospection',
  9: '10 Sagesse',
  10: '10 Initiative',
  11: '20 Tacle',
  12: '20 Esquive',
};

const Guild: React.FC = () => {
    const dispatch = useDispatch();
    const [isSelected, setIsSelected] = useState(false);
    const [hoveredGuild, setHoveredGuild] = useState(false);
  
    const handleButtonClick = () => {
      if (isSelected) {
        dispatch(removeGuildBonus());
      } else {
        dispatch(applyGuildBonus());
      }
      setIsSelected(!isSelected);
    };

    return (
        <div 
          className="guild"
          onMouseEnter={() => setHoveredGuild(true)}
          onMouseLeave={() => setHoveredGuild(false)}
        >
          <button className={`guild-button ${isSelected ? 'selected' : ''}`} onClick={handleButtonClick}>
            <img 
                loading="lazy" 
                src={guildBonus[1].src} 
                alt={guildBonus[1].alt} 
            />
          </button>
          {hoveredGuild && (
            <span className="guild-labels">
              {Object.values(labelsGuild).map((label, index) => (
                <div key={index}>{label}</div>
              ))}
            </span>
          )}
        </div>
      );
};

export default Guild;
