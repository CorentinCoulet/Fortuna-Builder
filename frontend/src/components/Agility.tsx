import React, { useEffect, useState } from "react";
import {
  nameCategories,
  nameCategoriesHover,
  aptLogos,
  aptLogosHover,
  selectors,
} from "../asset";
import "../styles/components/Agility.scss";

const agility: number[] = [];
for (let i = 4; i < 231; i += 4) {
  agility.push(i);
}

const agilityHover = {
  1: "+6 Tacle",
  2: "+6 Esquive",
  3: "+4 Initiative",
  4: {
    1: "+4 Tacle",
    2: "+4 Esquive",
  },
  5: "+1 Volonté",
};

const maxPoints = [Infinity, Infinity, 20, Infinity, 20];

const Agility: React.FC = () => {
  const [valueCount, setValueCount] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);
  const [hoveredElement, setHoveredElement] = useState<number | null>(null);
  const [points, setPoints] = useState<number[]>([0, 0, 0, 0, 0]);

  useEffect(() => {
    const lvlClass = document.querySelector("#lvl") as HTMLInputElement | null;

    if (!lvlClass) return;

    const handleInputChange = () => {
      const lvlValue = parseInt(lvlClass.value, 10);
      const index = agility.findIndex((value) => value > lvlValue);
      const closestIndex =
        index === -1 ? agility.length - 1 : index === 0 ? 0 : index - 1;
      const newValueCount = closestIndex + 1;
      setValueCount(newValueCount);
      setPoints([0, 0, 0, 0, 0]);
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

  const getHoverText = (index: number, subIndex: number | null = null) => {
    const hoverInfo = agilityHover[index + 1];
    
    if (typeof hoverInfo === "string") {
      return hoverInfo;
    } else if (typeof hoverInfo === "object" && subIndex !== null) {
      return hoverInfo[subIndex + 1];
    }
  
    return "";
  };

  const getHoverImages = (index: number) => {
    const hoverInfo = agilityHover[index + 1];
  
    if (typeof hoverInfo === "object") {
      return Object.keys(hoverInfo).map((key) => (
        <div key={key} className="multiple-informations">
          <img
            loading="lazy"
            src={aptLogosHover[3][parseInt(key)].src}
            alt={aptLogosHover[3][parseInt(key)].alt}
          />
          <p>{getHoverText(index, parseInt(key) - 1)}</p>
        </div>
      ));
    } else {
      return (
        <div>
          <img
            loading="lazy"
            src={aptLogosHover[3][index + 1]?.src}
            alt={aptLogosHover[3][index + 1]?.alt}
          />
          <p>{getHoverText(index)}</p>
        </div>
      );
    }
  };  

  return (
    <div
      className="agility"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div>
          <p>AGILITÉ</p>
          <span>{valueCount}</span>
        </div>
        <div>
          <img
            loading="lazy"
            src={hovered ? nameCategoriesHover[3].src : nameCategories[3].src}
            alt={hovered ? nameCategoriesHover[3].alt : nameCategories[3].alt}
          />
        </div>
      </div>
      <div>
        {Object.keys(aptLogos[3]).map((key, index) => (
          <div
            key={index}
            onMouseEnter={() => handleElementMouseEnter(index)}
            onMouseLeave={handleElementMouseLeave}
            className="element-container"
          >
            <div className="element-content">
              <img
                loading="lazy"
                src={aptLogos[3][key].src}
                alt={aptLogos[3][key].alt}
              />
              <p>{aptLogos[3][key].alt}</p>
            </div>
            <div
              className="popup"
              style={{ display: hoveredElement === index ? "block" : "none" }}
            >
              <div className="popup-content">
                {getHoverImages(index)}
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

export default Agility;
