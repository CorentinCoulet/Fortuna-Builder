import React, { useState, useEffect } from "react";
import { shards, enchantmentEquipment } from "../asset";
import "../styles/components/EnchantmentPerEquipment.scss";

const masteryEnchantmentLabels = {
  1: { label: "Maîtrise Mêlée", double: [] },
  2: { label: "Maîtrise Distance", double: [] },
  3: { label: "Maîtrise Berserk", double: [] },
  4: { label: "Résistance Terre", double: [] },
  5: { label: "Maîtrise Critique", double: [] },
  6: { label: "Maîtrise Dos", double: [] },
  7: { label: "Esquive", double: [] },
  8: { label: "Initiative", double: [] },
  9: { label: "Résistance Feu", double: [] },
  10: { label: "Maîtrise Elémentaire", double: [] },
  11: { label: "Tacle", double: [] },
  12: { label: "Résistance Eau", double: [] },
  13: { label: "Résistance Air", double: [] },
  14: { label: "Vie", double: [] },
  15: { label: "Maîtrise Soin", double: [] },
};

// On ne garde que les images Bleues, Vertes et Rouges
const shardsElements = Object.keys(shards)
  .filter((key) => ["1", "2", "3"].includes(key))
  .reduce((obj, key) => {
    obj[key] = shards[key];
    return obj;
  }, {});

const enchantmentLvlRequired = {
  1: 0,
  2: 36,
  3: 51,
  4: 66,
  5: 81,
  6: 96,
  7: 126,
  8: 141,
  9: 171,
  10: 186,
  11: 216,
};

const statsEmplacement = {
  masteries: [1, 2, 3, 5, 6, 15],
  hp: [14],
  resistances: [4, 9, 12, 13],
  lockAndDodge: [7, 11],
  initiative: [8],
  elementary: [10],
};

function calculateMasteries(index) {
  switch (index) {
    case 1:
      return 1;
    case 2:
      return 3;
    case 3:
      return 4;
    case 4:
      return 6;
    case 5:
      return 7;
    case 6:
      return 10;
    case 7:
      return 15;
    case 8:
      return 19;
    case 9:
      return 24;
    case 10:
      return 30;
    case 11:
      return 33;
    default:
      return 0;
  }
}

function calculateHP(index) {
  switch (index) {
    case 1:
      return 4;
    case 2:
      return 8;
    case 3:
      return 12;
    case 4:
      return 16;
    case 5:
      return 20;
    case 6:
      return 28;
    case 7:
      return 40;
    case 8:
      return 52;
    case 9:
      return 64;
    case 10:
      return 80;
    case 11:
      return 88;
    default:
      return 0;
  }
}

function calculateResistances(index) {
  switch (index) {
    case 1:
      return 2;
    case 2:
      return 5;
    case 3:
      return 7;
    case 4:
      return 10;
    case 5:
      return 12;
    case 6:
      return 15;
    case 7:
      return 17;
    case 8:
      return 20;
    case 9:
      return 22;
    case 10:
      return 25;
    case 11:
      return 27;
    default:
      return 0;
  }
}

function calculateLockAndDodge(index) {
  switch (index) {
    case 1:
      return 3;
    case 2:
      return 6;
    case 3:
      return 9;
    case 4:
      return 12;
    case 5:
      return 15;
    case 6:
      return 21;
    case 7:
      return 30;
    case 8:
      return 39;
    case 9:
      return 48;
    case 10:
      return 60;
    case 11:
      return 66;
    default:
      return 0;
  }
}

function calculateInitiative(index) {
  switch (index) {
    case 1:
      return 2;
    case 2:
      return 4;
    case 3:
      return 6;
    case 4:
      return 8;
    case 5:
      return 10;
    case 6:
      return 14;
    case 7:
      return 20;
    case 8:
      return 26;
    case 9:
      return 32;
    case 10:
      return 40;
    case 11:
      return 44;
    default:
      return 0;
  }
}

function calculateElementary(index) {
  switch (index) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    case 5:
      return 5;
    case 6:
      return 7;
    case 7:
      return 10;
    case 8:
      return 13;
    case 9:
      return 16;
    case 10:
      return 20;
    case 11:
      return 22;
    default:
      return 0;
  }
}

const EnchantmentPerEquipment: React.FC = () => {
  const [lvl, setLvl] = useState(200);
  const [sliderValue, setSliderValue] = useState(1);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // Récupère le niveau du personnage
  useEffect(() => {
    const lvlInput = document.getElementById("lvl") as HTMLInputElement;

    const updateLvl = () => {
      if (lvlInput) {
        setLvl(parseInt(lvlInput.value));
      }
    };

    updateLvl();

    lvlInput?.addEventListener("input", updateLvl);

    return () => {
      lvlInput?.removeEventListener("input", updateLvl);
    };
  }, []);

  // Calcule le niveau d'enchantement autorisé par rapport au niveau du personnage
  const maxSliderValue = Object.keys(enchantmentLvlRequired).reduce(
    (max, key) => {
      if (lvl >= enchantmentLvlRequired[key]) {
        return parseInt(key);
      }
      return max;
    },
    1
  );

  const handleSliderChange = (e: { target: { value: string } }) => {
    const newValue = parseInt(e.target.value);
    if (newValue <= maxSliderValue) {
      setSliderValue(newValue);
    }
  };

  // Calcule les valeurs en fonction de la formule donnée
  const calculateStat = (element: number) => {
    let value = sliderValue;

    if (statsEmplacement.masteries.includes(element)) {
      return calculateMasteries(value);
    }
    if (statsEmplacement.hp.includes(element)) {
      return calculateHP(value);
    }
    if (statsEmplacement.resistances.includes(element)) {
      return calculateResistances(value);
    }
    if (statsEmplacement.lockAndDodge.includes(element)) {
      return calculateLockAndDodge(value);
    }
    if (statsEmplacement.initiative.includes(element)) {
      return calculateInitiative(value);
    }
    if (statsEmplacement.elementary.includes(element)) {
      return calculateElementary(value);
    }
  };

  const renderList = () => {
    return Object.keys(masteryEnchantmentLabels).map((index) => {
      const idx = parseInt(index);
      let shardImage;

      // Détermination de l'image de shard à utiliser
      if (idx <= 4) {
        shardImage = shardsElements[1];
      } else if (idx <= 9) {
        shardImage = shardsElements[2];
      } else {
        shardImage = shardsElements[3];
      }

      const statValue = calculateStat(idx);

      return (
        <div
          key={index}
          className="enchantment-item"
          onMouseEnter={() => setHoveredItem(idx)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div>
            <img
              src={shardImage.src}
              alt={shardImage.alt}
              className="shard-image"
            />
            <h2>{masteryEnchantmentLabels[index].label}</h2>
          </div>
          <div className="equipment-list">
            {Object.keys(enchantmentEquipment[index]).map((subIndex) => {
              const equipment = enchantmentEquipment[index][subIndex];
              return (
                <div key={subIndex} className="equipment-item">
                  <img
                    src={equipment.src}
                    alt={equipment.alt}
                    className="equipment-image"
                  />
                  {hoveredItem === idx && (
                    <div className="popup">
                      <img
                        src={shardImage.src}
                        alt={shardImage.alt}
                        className="popup-shard-image"
                      />
                      <div>
                        <p>{statValue}</p>
                        <p>{masteryEnchantmentLabels[index].label}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="enchantment-container">
      <h2>ENCHANTEMENTS</h2>
      <div className="slider-container">
        <input
          type="range"
          id="global-slider"
          min="1"
          max={Object.keys(enchantmentLvlRequired).length}
          value={sliderValue}
          onChange={handleSliderChange}
          className="global-slider"
        />
        <div className="slider-labels">
          {Object.keys(enchantmentLvlRequired).map((key) => (
            <span
              key={key}
              className={`slider-label ${
                lvl < enchantmentLvlRequired[key] ? "disabled" : ""
              }`}
            >
              {key}
            </span>
          ))}
        </div>
      </div>
      {renderList()}
    </div>
  );
};

export default EnchantmentPerEquipment;