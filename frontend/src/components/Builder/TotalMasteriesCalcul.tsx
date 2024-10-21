import React, { useState, useRef, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import "../../styles/components/Builder/TotalMasteriesCalcul.scss";
import { PrimaryStats } from "../../asset";
import { RootState } from "../../store";

interface CalculatedStats {
  elems: {
    waterMastery: number;
    earthMastery: number;
    airMastery: number;
    fireMastery: number;
  };
  meleeMastery: number;
  distanceMastery: number;
  critMastery: number;
  rearMastery: number;
  berserkMastery: number;
  healMastery: number;
}

interface TotalMasteriesCalculProps {
  selectedMasteries: string[];
  onChange: (selectedMasteries: string[]) => void;
}

const masteryLabels: { [key in keyof CalculatedStats | 'elems']: string } = {
  elems: "Maîtrise Élémentaire",
  meleeMastery: "Maîtrise Mêlée",
  distanceMastery: "Maîtrise Distance",
  critMastery: "Maîtrise Critique",
  rearMastery: "Maîtrise Dos",
  berserkMastery: "Maîtrise Berserk",
  healMastery: "Maîtrise Soin",
};

const selectCalculatedStats = createSelector(
  (state: RootState) => state.classInformations,
  (classInformations) => {
    const highestElementalMastery = Math.max(
      classInformations.waterMastery,
      classInformations.earthMastery,
      classInformations.airMastery,
      classInformations.fireMastery,
    );

    return {
      elems: {
        waterMastery: classInformations.waterMastery,
        earthMastery: classInformations.earthMastery,
        airMastery: classInformations.airMastery,
        fireMastery: classInformations.fireMastery,
      },
      highestElementalMastery,
      meleeMastery: classInformations.meleeMastery,
      distanceMastery: classInformations.distanceMastery,
      critMastery: classInformations.critMastery,
      rearMastery: classInformations.rearMastery,
      berserkMastery: classInformations.berserkMastery,
      healMastery: classInformations.healMastery,
    };
  }
);

const TotalMasteriesCalcul: React.FC<TotalMasteriesCalculProps> = ({
  selectedMasteries,
  onChange,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const calculatedStats = useSelector((state: RootState) => selectCalculatedStats(state)) as CalculatedStats & {
    highestElementalMastery: number;
  };

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

  const masteryOptions = useMemo(() => {
    return [
      { id: "elementalMastery", label: masteryLabels.elems, value: calculatedStats.highestElementalMastery },
      { id: "meleeMastery", label: masteryLabels.meleeMastery, value: calculatedStats.meleeMastery },
      { id: "distanceMastery", label: masteryLabels.distanceMastery, value: calculatedStats.distanceMastery },
      { id: "critMastery", label: masteryLabels.critMastery, value: calculatedStats.critMastery },
      { id: "rearMastery", label: masteryLabels.rearMastery, value: calculatedStats.rearMastery },
      { id: "berserkMastery", label: masteryLabels.berserkMastery, value: calculatedStats.berserkMastery },
      { id: "healMastery", label: masteryLabels.healMastery, value: calculatedStats.healMastery },
    ];
  }, [
    calculatedStats.highestElementalMastery, 
    calculatedStats.berserkMastery, 
    calculatedStats.critMastery, 
    calculatedStats.distanceMastery, 
    calculatedStats.healMastery, 
    calculatedStats.meleeMastery, 
    calculatedStats.rearMastery,
  ]);

  const totalValue = useMemo(() => {
    return selectedMasteries.reduce((total, masteryId) => {
      const mastery = masteryOptions.find((m) => m.id === masteryId);
      return mastery ? total + mastery.value : total;
    }, 0);
  }, [selectedMasteries, masteryOptions]);

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
                {mastery.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TotalMasteriesCalcul;