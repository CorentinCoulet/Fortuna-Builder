import React from "react";
import Runes from "../components/Sublimations/Runes";
import Deck from "../components/Spells/Deck";
import RecapApt from "../components/Aptitudes/RecapApt";

const Recap: React.FC = () => {
  return (
    <div className="recapPage">
      <Runes isReadOnly={true} />
      <div>
        <Deck isReadOnly={true} />
        <RecapApt />
      </div>
    </div>
  );
};

export default Recap;
