import React, { useEffect, useState } from "react";
import {
  nameCategories,
  nameCategoriesHover,
  aptLogos,
  aptLogosHover,
  selectors,
} from "../asset";
import "../styles/components/Intel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const intel: number[] = [];
for (let i = 2; i < 231; i += 4) {
  intel.push(i);
}

const Intel: React.FC = () => {
  /*
        2 6 10 14 18 22 26 30 34 38 42 46 INTEL
        3 7 11 15 19 23 27 31 35 39 43 47 FORCE
        4 8 12 16 20 24 28 32 36 40 44 48 AGILITE
        5 9 13 17 21 25
        25 75 125 175 MAJEUR

        173 -> 
    */

  const maxPoints = [Infinity, 10, 10, 5, 10];

  const [valueCount, setValueCount] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);
  const [hoveredElement, setHoveredElement] = useState<number | null>(null);
  const [points, setPoints] = useState<number[]>([0, 0, 0, 0, 0]);

  useEffect(() => {
    const lvlClass = document.querySelector("#lvl") as HTMLInputElement | null;

    if (!lvlClass) return;

    const handleInputChange = () => {
      const lvlValue = parseInt(lvlClass.value, 10);
      const index = intel.findIndex((value) => value >= lvlValue);
      const closestIndex =
        index === -1 ? intel.length - 1 : index === 0 ? 0 : index - 1;
      const newValueCount = closestIndex + 1;
      setValueCount(newValueCount);
      setPoints([0, 0, 0, 0, 0]);
    };

    handleInputChange();

    const observer = new MutationObserver(() => {

      handleInputChange();
    });

    observer.observe(lvlClass, { attributes: true, attributeFilter: ['value'] });
    
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

  const intelHover = {
    1: "+4 PdV",
    2: "+10 Rés. Elem",
    3: "50% niveau / coup",
    4: "+6% Soins reçus",
    5: "+4% PdV en armure",
  };

  return (
    <div
      className="intel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div>
          <p>INTELLIGENCE</p>
          <span>{valueCount}</span>
        </div>
        <div>
          <img
            src={hovered ? nameCategoriesHover[1].src : nameCategories[1].src}
            alt={hovered ? nameCategoriesHover[1].alt : nameCategories[1].alt}
          />
        </div>
      </div>
      <div>
        {Object.values(aptLogos[1]).map((logo, index) => (
          <div
            key={index}
            onMouseEnter={() => handleElementMouseEnter(index)}
            onMouseLeave={handleElementMouseLeave}
            className="element-container"
          >
            <div className="element-content">
              <img src={logo.src} alt={logo.alt} />
              <p>{logo.alt}</p>
            </div>
            <div
              className="popup"
              style={{ display: hoveredElement === index ? "block" : "none" }}
            >
              <div className="popup-content">
                {index === 2 ? (
                  <FontAwesomeIcon icon={faShieldHalved} />
                ) : (
                  <img
                    src={aptLogosHover[1][index + 1]?.src}
                    alt={aptLogosHover[1][index + 1]?.alt}
                  />
                )}
                <p>{intelHover[index + 1]}</p>
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

export default Intel;
