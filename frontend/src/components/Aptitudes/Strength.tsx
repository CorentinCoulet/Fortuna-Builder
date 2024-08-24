import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import {
  setLevelPoints,
  incrementPoint,
  decrementPoint,
  resetPoint,
  setPointsFromStorage,
} from "../../features/components/Aptitudes/aptitudeStrengthSlice";
import {
  nameCategories,
  nameCategoriesHover,
  aptLogos,
  aptLogosHover,
  selectors,
} from "../../asset";
import "../../styles/components/Aptitudes/Strength.scss";

// Définition des paliers de niveaux
const strength: number[] = [];
for (let i = 3; i < 231; i += 4) {
  strength.push(i);
}

// Définition des messages de survol
const strengthHover = {
  1: "+5 Maitrise Elem",
  2: "+8 Maitrise Mêlée",
  3: "8 Maitrise Distance",
  4: "+20 PdV",
};

// Limites de points pour chaque élément
const maxPoints = [Infinity, 40, 40, Infinity];

const Strength: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const points = useSelector((state: RootState) => state.strength.points);
  const valueCount = useSelector((state: RootState) => state.strength.valueCount);
  const [hovered, setHovered] = useState<boolean>(false);
  const [hoveredElement, setHoveredElement] = useState<number | null>(null);

  useEffect(() => {
    const savedPoints = localStorage.getItem("intelPoints");
    if (savedPoints) {
      dispatch(setPointsFromStorage(JSON.parse(savedPoints)));
    }

    const lvlClass = document.querySelector("#lvl") as HTMLInputElement | null;

    if (!lvlClass) return;

    const handleInputChange = () => {
      const lvlValue = parseInt(lvlClass.value, 10);
      const index = strength.findIndex((value) => value > lvlValue);
      const closestIndex =
        index === -1 ? strength.length - 1 : index === 0 ? 0 : index - 1;
      const newValueCount = closestIndex + 1;
      dispatch(setLevelPoints(newValueCount));
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
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("intelPoints", JSON.stringify(points));
  }, [points]);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const handleElementMouseEnter = (index: number) => setHoveredElement(index);
  const handleElementMouseLeave = () => setHoveredElement(null);

  const handleIncrement = (index: number, event: React.MouseEvent) => {
    const isShiftClick = event.shiftKey;
    const incrementValue = isShiftClick ? Math.min(10, valueCount) : 1;
    dispatch(incrementPoint({ index, increment: incrementValue }));
  };

  const handleDecrement = (index: number, event: React.MouseEvent) => {
    const isShiftClick = event.shiftKey;
    const decrementValue = isShiftClick ? Math.min(10, points[index]) : 1;
    dispatch(decrementPoint({ index, decrement: decrementValue }));
  };

  const handleReset = (index: number) => {
    dispatch(resetPoint(index));
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
