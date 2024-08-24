import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import { rarityEquipment, searchEquipment } from "../asset.ts";
import '../styles/components/SearchItems.scss';
import SearchByStats from "./SearchByStats.tsx";

interface Filters {
    itemName: string;
    levelRange: [number, number];
    selectedRarities: number[];
    selectedEquipmentTypes: number[];
}

interface SearchItemsProps {
    onSearch: (filters: Filters) => void;
}
const SearchItems: React.FC<SearchItemsProps> = ({ onSearch }) => {
    const [itemName, setItemName] = useState<string>('');
    const [levelRange, setLevelRange] = useState<[number, number]>([1, 230]);
    const [selectedRarities, setSelectedRarities] = useState<number[]>([]);
    const [selectedEquipmentTypes, setSelectedEquipmentTypes] = useState<number[]>([]);

    const handleItemNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItemName(e.target.value);
    };

    const handleLevelChange = (values: [number, number]) => {
        setLevelRange(values);
    };

    const handleRaritySelect = (rarityId: number) => {
        setSelectedRarities(prevSelectedRarities =>
            prevSelectedRarities.includes(rarityId)
                ? prevSelectedRarities.filter(id => id !== rarityId)
                : [...prevSelectedRarities, rarityId]
        );
    };

    const handleEquipmentTypeSelect = (typeId: number) => {
        setSelectedEquipmentTypes(prevSelectedEquipmentTypes =>
            prevSelectedEquipmentTypes.includes(typeId)
                ? prevSelectedEquipmentTypes.filter(id => id !== typeId)
                : [...prevSelectedEquipmentTypes, typeId]
        );
    };

    const handleSearch = () => {
        const filters: Filters = {
            itemName,
            levelRange,
            selectedRarities,
            selectedEquipmentTypes,
        };
        onSearch(filters);
    };

    const handleClear = () => {
        setItemName('');
        setLevelRange([1, 230]);
        setSelectedRarities([]);
        setSelectedEquipmentTypes([]);
    };

    return (
        <div className="search-items-container">
            <div className="input-group">
                <label>NOM DE L'ITEM</label>
                <input
                    type="text"
                    value={itemName}
                    onChange={handleItemNameChange}
                />
            </div>
            <div className="input-group">
                <label>NIVEAU ({levelRange[0]} - {levelRange[1]})</label>
                <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="thumb"
                    trackClassName="track"
                    min={1}
                    max={230}
                    value={levelRange}
                    onChange={handleLevelChange}
                    minDistance={1}
                    ariaLabel={['Lower thumb', 'Upper thumb']}
                />
            </div>
            <div className="rarity-section">
                <label>RARETÉ</label>
                <div className="rarity-options">
                    {Object.keys(rarityEquipment).map((key) => {
                        const rarity = rarityEquipment[Number(key)];
                        return (
                            <img
                                key={key}
                                src={rarity.src}
                                alt={rarity.alt}
                                className={`rarity-image ${selectedRarities.includes(Number(key)) ? 'selected' : ''}`}
                                onClick={() => handleRaritySelect(Number(key))}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="equipment-section">
                <label>TYPE D'ÉQUIPEMENT</label>
                <div className="equipment-options">
                    {Object.keys(searchEquipment).map((key) => {
                        const equipment = searchEquipment[Number(key)];
                        return (
                            <img
                                key={key}
                                src={equipment.src}
                                alt={equipment.alt}
                                className={`equipment-image ${selectedEquipmentTypes.includes(Number(key)) ? 'selected' : ''}`}
                                onClick={() => handleEquipmentTypeSelect(Number(key))}
                            />
                        );
                    })}
                </div>
            </div>
            <SearchByStats />
            <div className="action-buttons">
                <button className="clear-button" onClick={handleClear}>
                    VIDER LES CHAMPS
                </button>
                <button className="search-button" onClick={handleSearch}>
                    RECHERCHER
                </button>
            </div>
        </div>
    );
};

export default SearchItems;
