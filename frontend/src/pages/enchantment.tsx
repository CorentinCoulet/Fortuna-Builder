import React from "react";
import EnchantmentPerEquipment from "../components/Sublimations/EnchantmentPerEquipment";
import Runes from "../components/Sublimations/Runes";
import Sublimations from "../components/Sublimations/Sublimations";
import SublimationsRares from "../components/Sublimations/SublimationsRares.tsx";

const Enchantment: React.FC = () => {
  return (
    <div className="enchantmentPage">
      <EnchantmentPerEquipment />
      <Runes />
      <div>
        <Sublimations />
        <SublimationsRares />
      </div>
    </div>
  );
};

export default Enchantment;