import React, { useEffect, useState } from "react";
import {
  nameCategories,
  nameCategoriesHover,
  aptLogos,
  aptLogosHover,
  selectors,
} from "../asset";
import "../styles/components/Chance.scss";

const chance: number[] = [];
for (let i = 5; i < 231; i += 4) {
    chance.push(i);
}

const chanceHover = {
  1: "+1% Coup Critique",
  2: "+1% Parade",
  3: "+4 Maîtrise Critique",
  4: "+6 Maîtrise Dos",
  5: "+8 Maîtrise Berserk",
  6: "+6 Maîtrise Soin",
  7: "+4 Résistance Dos",
  8: "+4 Résistance Critique",
};

const maxPoints = [
    20, 
    20, 
    Infinity, 
    Infinity, 
    Infinity,
    Infinity,
    20,
    20
];

const Chance: React.FC = () => {
  const [valueCount, setValueCount] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);
  const [hoveredElement, setHoveredElement] = useState<number | null>(null);
  const [points, setPoints] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const lvlClass = document.querySelector("#lvl") as HTMLInputElement | null;

    if (!lvlClass) return;

    const handleInputChange = () => {
      const lvlValue = parseInt(lvlClass.value, 10);
      const index = chance.findIndex((value) => value > lvlValue);
      const closestIndex =
        index === -1 ? chance.length - 1 : index === 0 ? 0 : index - 1;
      const newValueCount = closestIndex + 1;
      setValueCount(newValueCount);
      setPoints([0, 0, 0, 0, 0, 0, 0, 0]);
    };

    handleInputChange();

    const observer = new MutationObserver(() => {
      handleInputChange();
    });

    observer.observe(lvlClass, { attributes: true, attributeFilter: ["value"] });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const handleElementMouseEnter = (index: number) => setHoveredElement(index);
  const handleElementMouseLeave = () => setHoveredElement(null);

  const handleIncrement = (index: number) => {
    if (points[index] < maxPoints[index] && valueCount > 0) {
      const newPoints = [...points];
      newPoints[index]++;
      setPoints(newPoints);
      setValueCount(valueCount - 1);
    }
  };

  const handleDecrement = (index: number) => {
    if (points[index] > 0) {
      const newPoints = [...points];
      newPoints[index]--;
      setPoints(newPoints);
      setValueCount(valueCount + 1);
    }
  };

  const handleReset = (index: number) => {
    const newPoints = [...points];
    setValueCount(valueCount + newPoints[index]);
    newPoints[index] = 0;
    setPoints(newPoints);
  };

  const getHoverText = (index: number) => {
    const hoverInfo = chanceHover[index + 1];
    let i = 1;
    if (typeof hoverInfo === "string") {
      return hoverInfo;
    } else if (typeof hoverInfo === "object") {
      return Object.values(hoverInfo[i]).join("");
      i++;
    }
    return "";
  };

  return (
    <div
      className="chance"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div>
          <p>CHANCE</p>
          <span>{valueCount}</span>
        </div>
        <div>
          <img
            loading="lazy"
            src={hovered ? nameCategoriesHover[4].src : nameCategories[4].src}
            alt={hovered ? nameCategoriesHover[4].alt : nameCategories[4].alt}
          />
        </div>
      </div>
      <div>
        {Object.keys(aptLogos[4]).map((key, index) => (
          <div
            key={index}
            onMouseEnter={() => handleElementMouseEnter(index)}
            onMouseLeave={handleElementMouseLeave}
            className="element-container"
          >
            <div className="element-content">
              <img
                loading="lazy"
                src={aptLogos[4][key].src}
                alt={aptLogos[4][key].alt}
              />
              <p>{aptLogos[4][key].alt}</p>
            </div>
            <div
              className="popup"
              style={{ display: hoveredElement === index ? "block" : "none" }}
            >
              <div className="popup-content">
                <img
                    loading="lazy"
                    src={aptLogosHover[4][index + 1]?.src}
                    alt={aptLogosHover[4][index + 1]?.alt}
                />
                <p>{getHoverText(index)}</p>
              </div>
            </div>
            <div>
              <div className="selector-apt">
                <span>
                  {points[index]}/
                  {maxPoints[index] === Infinity ? "∞" : maxPoints[index]}
                </span>
              </div>
              <div className="selector-item">
                <img
                  loading="lazy"
                  src={selectors[1].src}
                  alt={selectors[1].alt}
                  onClick={() => handleDecrement(index)}
                  style={{
                    opacity: points[index] === 0 ? 0.5 : 1,
                    cursor: points[index] === 0 ? "not-allowed" : "pointer",
                  }}
                />
              </div>
              <div className="selector-item">
                <img
                  loading="lazy"
                  src={selectors[2].src}
                  alt={selectors[2].alt}
                  onClick={() => handleIncrement(index)}
                  style={{
                    opacity:
                      points[index] === maxPoints[index] || valueCount === 0
                        ? 0.5
                        : 1,
                    cursor:
                      points[index] === maxPoints[index] || valueCount === 0
                        ? "not-allowed"
                        : "pointer",
                  }}
                />
              </div>
              <div className="selector-item">
                <img
                  loading="lazy"
                  src={selectors[3].src}
                  alt={selectors[3].alt}
                  onClick={() => handleReset(index)}
                  style={{
                    opacity: points[index] === 0 ? 0.5 : 1,
                    cursor: points[index] === 0 ? "not-allowed" : "pointer",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chance;
