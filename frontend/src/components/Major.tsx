import React, { useEffect, useState } from "react";
import {
  nameCategories,
  nameCategoriesHover,
  aptLogos,
  aptLogosHover,
  selectors,
} from "../asset";
import "../styles/components/Major.scss";

const major: number[] = [25, 75, 125, 175];

const majorHover = {
  1: "+1 PA",
  2: {
    1: "+20 Maîtrise Elémentaire",
    2: "+1 PM",
  },
  3: {
    1: "+40 Maîtrise Elémentaire",
    2: "+1 PO",
  },
  4: "+2 PW (ou 150 BQ)",
  5: {
    1: "+40 Maîtrises Elémentaire",
    2: "+2 Contrôle",
  },
  6: "+10% Dommages Infligés",
  7: "+50 Résistance Elémentaire",
};

const maxPoints = [1, 1, 1, 1, 1, 1, 1];

const Major: React.FC = () => {
  const [valueCount, setValueCount] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);
  const [hoveredElement, setHoveredElement] = useState<number | null>(null);
  const [points, setPoints] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const lvlClass = document.querySelector("#lvl") as HTMLInputElement | null;

    if (!lvlClass) return;

    const handleInputChange = () => {
      const lvlValue = parseInt(lvlClass.value, 10);
      const index = major.findIndex((value) => value > lvlValue);
      const closestIndex =
        index === -1 ? major.length - 1 : index === 0 ? 0 : index - 1;
      const newValueCount = closestIndex + 1;
      setValueCount(newValueCount);
      setPoints([0, 0, 0, 0, 0, 0, 0]);
    };

    handleInputChange();

    const observer = new MutationObserver(() => {
      handleInputChange();
    });

    observer.observe(lvlClass, {
      attributes: true,
      attributeFilter: ["value"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const handleElementMouseEnter = (index: number) => setHoveredElement(index);
  const handleElementMouseLeave = () => setHoveredElement(null);

  const handleIncrement = (index: number, event: React.MouseEvent) => {
    const isCtrlClick = event.ctrlKey;
    const incrementValue = isCtrlClick ? Math.min(10, valueCount) : 1;

    if (points[index] < maxPoints[index] && valueCount > 0) {
      const newPoints = [...points];
      newPoints[index] = Math.min(
        points[index] + incrementValue,
        maxPoints[index]
      );
      setPoints(newPoints);
      setValueCount(valueCount - incrementValue);
    }
  };

  const handleDecrement = (index: number, event: React.MouseEvent) => {
    const isCtrlClick = event.ctrlKey;
    const decrementValue = isCtrlClick ? Math.min(10, points[index]) : 1;

    if (points[index] > 0) {
      const newPoints = [...points];
      newPoints[index] = Math.max(points[index] - decrementValue, 0);
      setPoints(newPoints);
      setValueCount(valueCount + decrementValue);
    }
  };

  const handleReset = (index: number) => {
    const newPoints = [...points];
    setValueCount(valueCount + newPoints[index]);
    newPoints[index] = 0;
    setPoints(newPoints);
  };

  const getHoverText = (index: number, subIndex: number | null = null) => {
    const hoverInfo = majorHover[index + 1];

    if (typeof hoverInfo === "string") {
      return hoverInfo;
    } else if (typeof hoverInfo === "object" && subIndex !== null) {
      return hoverInfo[subIndex + 1];
    }

    return "";
  };

  const getHoverImages = (index: number) => {
    const hoverInfo = majorHover[index + 1];
    if (typeof hoverInfo === "object") {
      return Object.keys(hoverInfo).map((key) => (
        <div key={key} className="multiple-informations">
          <img
            loading="lazy"
            src={aptLogosHover[5][index + 1][parseInt(key)].src}
            alt={aptLogosHover[5][index + 1][parseInt(key)].alt}
          />
          <p>{getHoverText(index, parseInt(key) - 1)}</p>
        </div>
      ));
    } else {
      return (
        <div>
          <img
            loading="lazy"
            src={aptLogosHover[5][index + 1]?.src}
            alt={aptLogosHover[5][index + 1]?.alt}
          />
          <p>{getHoverText(index)}</p>
        </div>
      );
    }
  };

  return (
    <div
      className="major"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div>
          <p>MAJEUR</p>
          <span>{valueCount}</span>
        </div>
        <div>
          <img
            loading="lazy"
            src={hovered ? nameCategoriesHover[5].src : nameCategories[5].src}
            alt={hovered ? nameCategoriesHover[5].alt : nameCategories[5].alt}
          />
        </div>
      </div>
      <div>
        {Object.keys(aptLogos[5]).map((key, index) => (
          <div
            key={index}
            onMouseEnter={() => handleElementMouseEnter(index)}
            onMouseLeave={handleElementMouseLeave}
            className="element-container"
          >
            <div className="element-content">
              <img
                loading="lazy"
                src={aptLogos[5][key].src}
                alt={aptLogos[5][key].alt}
              />
              <p>{aptLogos[5][key].alt}</p>
            </div>
            <div
              className="popup"
              style={{ display: hoveredElement === index ? "block" : "none" }}
            >
              <div className="popup-content">{getHoverImages(index)}</div>
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
                  onClick={(event) => handleDecrement(index, event)}
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
                  onClick={(event) => handleIncrement(index, event)}
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

export default Major;
