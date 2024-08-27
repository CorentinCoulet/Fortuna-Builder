import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import "../styles/components/TotalMasteriesCalcul.scss";
import { PrimaryStats } from "../asset";
import { RootState } from "../store";
import { selectCalculatedStats } from "../features/components/classInformationsSlice";

interface TotalMasteriesCalculProps {
  selectedMasteries: string[];
  onChange: (selectedMasteries: string[]) => void;
}

const TotalMasteriesCalcul: React.FC<TotalMasteriesCalculProps> = ({
  selectedMasteries,
  onChange,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const calculatedStats = useSelector((state: RootState) => selectCalculatedStats(state));

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(event.target as Node)
    ) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleCheckboxChange = (id: string) => {
    const newSelectedMasteries = selectedMasteries.includes(id)
      ? selectedMasteries.filter((masteryId) => masteryId !== id)
      : [...selectedMasteries, id];
    onChange(newSelectedMasteries);
  };

  const masteryOptions = [
    { id: "waterMastery", label: "Maîtrise Eau", value: calculatedStats.elems.waterMastery },
    { id: "earthMastery", label: "Maîtrise Terre", value: calculatedStats.elems.earthMastery },
    { id: "airMastery", label: "Maîtrise Air", value: calculatedStats.elems.airMastery },
    { id: "fireMastery", label: "Maîtrise Feu", value: calculatedStats.elems.fireMastery },
    { id: "meleeMastery", label: "Maîtrise Mêlée", value: calculatedStats.meleeMastery },
    { id: "distanceMastery", label: "Maîtrise Distance", value: calculatedStats.distanceMastery },
    { id: "critMastery", label: "Maîtrise Critique", value: calculatedStats.critMastery },
    { id: "rearMastery", label: "Maîtrise Dos", value: calculatedStats.rearMastery },
    { id: "berserkMastery", label: "Maîtrise Berserk", value: calculatedStats.berserkMastery },
    { id: "healMastery", label: "Maîtrise Soin", value: calculatedStats.healMastery },
  ];

  const totalValue = selectedMasteries.reduce((total, masteryId) => {
    const mastery = masteryOptions.find((m) => m.id === masteryId);
    return mastery ? total + mastery.value : total;
  }, 0);

  return (
    <div className="total-masteries-calcul">
      <img
        loading="lazy"
        src={PrimaryStats[16].src}
        alt={PrimaryStats[16].alt}
        className="stat-icon"
      />
      <label className="total-label">Total</label>
      <input
        ref={inputRef}
        type="text"
        className="mastery-input"
        value={totalValue}
        readOnly
        onClick={handleInputClick}
      />
      {isPopupOpen && (
        <div ref={popupRef} className="mastery-popup">
          {masteryOptions.map((mastery) => (
            <div key={mastery.id} className="mastery-item">
              <label>
                <input
                  type="checkbox"
                  checked={selectedMasteries.includes(mastery.id)}
                  onChange={() => handleCheckboxChange(mastery.id)}
                />
                {mastery.label} (+{mastery.value})
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TotalMasteriesCalcul;
