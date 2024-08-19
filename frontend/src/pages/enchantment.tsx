import React from 'react';
import EnchantmentPerEquipment from '../components/EnchantmentPerEquipment';
import Runes from '../components/Runes';
import Sublimations from '../components/Sublimations';

const Enchantment: React.FC = () => {
  return (
    <div>
      <EnchantmentPerEquipment />
      <Runes />
      <Sublimations />
    </div>
  );
};

export default Enchantment;
