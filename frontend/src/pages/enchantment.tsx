import React from 'react';
import EnchantmentPerEquipment from '../components/EnchantmentPerEquipment';
import Runes from '../components/Runes';
import Sublimations from '../components/Sublimations';
import SublimationsRares from "../components/SublimationsRares.tsx";

const Enchantment: React.FC = () => {
    return (
        <div>
            <EnchantmentPerEquipment/>
            <Runes/>
            <Sublimations/>
            <SublimationsRares/>
        </div>
    );
};

export default Enchantment;
