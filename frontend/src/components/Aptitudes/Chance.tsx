import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import {
  setLevelPoints,
  incrementPoint,
  decrementPoint,
  resetPoint,
  setPointsFromStorage,
} from "../../features/components/Aptitudes/aptitudeChanceSlice";
import {
  nameCategories,
  nameCategoriesHover,
  aptLogos,
  aptLogosHover,
  selectors,
} from "../../asset";
import "../../styles/components/Aptitudes/Chance.scss";

// Définition des paliers de niveaux
const chance: number[] = [];
for (let i = 5; i < 231; i += 4) {
  chance.push(i);
}

// Définition des messages de survol
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

// Limites de points pour chaque élément
const maxPoints = [20, 20, Infinity, Infinity, Infinity, Infinity, 20, 20];

const Chance: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const points = useSelector((state: RootState) => state.chance.points);
  const valueCount = useSelector((state: RootState) => state.chance.valueCount);
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
      const index = chance.findIndex((value) => value > lvlValue);
      const closestIndex =
        index === -1 ? chance.length - 1 : index === 0 ? 0 : index - 1;
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

export default Chance;
