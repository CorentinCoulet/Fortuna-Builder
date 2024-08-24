import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import "../styles/components/RecapApt.scss";
import { aptLogos } from "../asset";

const Recap: React.FC = () => {
  const intelPoints = useSelector((state: RootState) => state.intel.points);
  const strengthPoints = useSelector((state: RootState) => state.strength.points);
  const agilityPoints = useSelector((state: RootState) => state.agility.points);
  const chancePoints = useSelector((state: RootState) => state.chance.points);
  const majorPoints = useSelector((state: RootState) => state.major.points);

  const aptitudes = [
    { name: "Intelligence", points: intelPoints, logos: aptLogos[1] },
    { name: "Force", points: strengthPoints, logos: aptLogos[2] },
    { name: "Agilité", points: agilityPoints, logos: aptLogos[3] },
    { name: "Chance", points: chancePoints, logos: aptLogos[4] },
    { name: "Majeur", points: majorPoints, logos: aptLogos[5] },
  ];

  return (
    <div className="recap-apt">
      <h2>Récapitulatif</h2>
      <div className="recap-apt-list">
        {aptitudes.map((aptitude, aptIndex) => (
          <div key={aptIndex} className="recap-apt-aptitude">
            {aptitude.points.map((point, index) => 
              point > 0 && (
                <div key={index} className="recap-apt-item">
                  <div>
                    <img src={aptitude.logos[index + 1].src} alt={aptitude.logos[index + 1].alt} />
                  <p>{aptitude.logos[index + 1].alt}</p>
                  </div>
                  <span>{point}</span>
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recap;
