import React from "react";
import Runes from "../components/Sublimations/Runes";
import Deck from "../components/Deck";
import RecapApt from "../components/Aptitudes/RecapApt";

const Recap: React.FC = () => {
  return (
    <div>
      <Runes isReadOnly={true} />
      <Deck isReadOnly={true} />
      <RecapApt />
    </div>
  );
};

export default Recap;
