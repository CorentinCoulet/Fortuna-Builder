import React, { useEffect, useState } from "react";
import {
  nameCategories,
  nameCategoriesHover,
  aptLogos,
  aptLogosHover,
  selectors,
} from "../asset";
import "../styles/components/Strength.scss";

const strength: number[] = [];
for (let i = 3; i < 231; i += 4) {
  strength.push(i);
}

const strengthHover = {
  1: "+5 Maitrise Elem",
  2: "+8 Maitrise Mêlée",
  3: "8 Maitrise Distance",
  4: "+20 PdV",
};

const maxPoints = [Infinity, 40, 40, Infinity];

const Strength: React.FC = () => {
  const [valueCount, setValueCount] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);
  const [hoveredElement, setHoveredElement] = useState<number | null>(null);
  const [points, setPoints] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const lvlClass = document.querySelector("#lvl") as HTMLInputElement | null;

    if (!lvlClass) return;

    const handleInputChange = () => {
      const lvlValue = parseInt(lvlClass.value, 10);
      const index = strength.findIndex((value) => value > lvlValue);
      const closestIndex =
        index === -1 ? strength.length - 1 : index === 0 ? 0 : index - 1;
      const newValueCount = closestIndex + 1;
      setValueCount(newValueCount);
      setPoints([0, 0, 0, 0]);
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

  return (
    <div
      className="strength"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div>
          <p>FORCE</p>
          <span>{valueCount}</span>
        </div>
        <div>
          <img
            loading="lazy"
            src={hovered ? nameCategoriesHover[2].src : nameCategories[2].src}
            alt={hovered ? nameCategoriesHover[2].alt : nameCategories[2].alt}
          />
        </div>
      </div>
      <div>
        {Object.values(aptLogos[2]).map((logo, index) => (
          <div
            key={index}
            onMouseEnter={() => handleElementMouseEnter(index)}
            onMouseLeave={handleElementMouseLeave}
            className="element-container"
          >
            <div className="element-content">
              <img loading="lazy" src={logo.src} alt={logo.alt} />
              <p>{logo.alt}</p>
            </div>
            <div
              className="popup"
              style={{ display: hoveredElement === index ? "block" : "none" }}
            >
              <div className="popup-content">
                <img
                  loading="lazy"
                  src={aptLogosHover[2][index + 1]?.src}
                  alt={aptLogosHover[2][index + 1]?.alt}
                />
                <p>{strengthHover[index + 1]}</p>
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

export default Strength;
