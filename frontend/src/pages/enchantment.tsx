import React, { useState } from "react";
import EnchantmentPerEquipment from "../components/Sublimations/EnchantmentPerEquipment";
import Runes from "../components/Sublimations/Runes";
import Sublimations from "../components/Sublimations/Sublimations";
import SublimationsRares from "../components/Sublimations/SublimationsRares.tsx";

const Enchantment: React.FC = () => {
  const [selectedShard, setSelectedShard] = useState<{
    src: string;
    alt: string;
    statValue: number;
    label: string;
    runeLevel: number;
  } | null>(null);

  return (
    <div>
      <EnchantmentPerEquipment
        selectedShard={selectedShard}
        setSelectedShard={setSelectedShard}
      />
      <Runes selectedShard={selectedShard} />
      <Sublimations />
      <SublimationsRares />
    </div>
  );
};

export default Enchantment;
