import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import {
  setLevelPoints,
  incrementPoint,
  decrementPoint,
  resetPoint,
  setPointsFromStorage,
} from "../features/components/aptitudeAgilitySlice";
import {
  nameCategories,
  nameCategoriesHover,
  aptLogos,
  aptLogosHover,
  selectors,
} from "../asset";
import "../styles/components/Agility.scss";

// Définition des paliers de niveaux
const agility: number[] = [];
for (let i = 4; i < 231; i += 4) {
  agility.push(i);
}

// Définition des messages de survol
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

// Limites de points pour chaque élément
const maxPoints = [Infinity, Infinity, 20, Infinity, 20];

const Agility: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const points = useSelector((state: RootState) => state.agility.points);
  const valueCount = useSelector((state: RootState) => state.agility.valueCount);
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
      const index = agility.findIndex((value) => value > lvlValue);
      const closestIndex =
        index === -1 ? agility.length - 1 : index === 0 ? 0 : index - 1;
      const newValueCount = closestIndex + 1;
      dispatch(setLevelPoints(newValueCount))
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

export default Agility;
