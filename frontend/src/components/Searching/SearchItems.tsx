import React, { useState } from "react";
import ReactSlider from "react-slider";
import { rarityEquipment, searchEquipment } from "../../asset.ts";
import "../../styles/components/Searching/SearchItems.scss";
import SearchByStats from "./SearchByStats.tsx";

interface Filters {
  itemName: string;
  levelRange: [number, number];
  selectedRarities: string[];
  selectedEquipmentTags: string[];
}

interface SearchItemsProps {
  onSearch: (filters: Filters) => void;
}

const SearchItems: React.FC<SearchItemsProps> = ({ onSearch }) => {
  const [itemName, setItemName] = useState<string>("");
  const [levelRange, setLevelRange] = useState<[number, number]>([1, 230]);
  const [selectedRarities, setSelectedRarities] = useState<string[]>([]);
  const [selectedEquipmentTags, setSelectedEquipmentTags] = useState<string[]>(
    []
  );

  const handleItemNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  const handleLevelChange = (values: [number, number]) => {
    setLevelRange(values);
  };

  const handleRaritySelect = (rarityTag: string) => {
    setSelectedRarities((prevSelectedRarities) => {
      const newRarities = prevSelectedRarities.includes(rarityTag)
        ? prevSelectedRarities.filter((tag) => tag !== rarityTag)
        : [...prevSelectedRarities, rarityTag];
      return newRarities;
    });
  };

  const handleEquipmentTagSelect = (tag: string) => {
    setSelectedEquipmentTags((prevSelectedEquipmentTags) => {
      const newTags = prevSelectedEquipmentTags.includes(tag)
        ? prevSelectedEquipmentTags.filter((existingTag) => existingTag !== tag)
        : [...prevSelectedEquipmentTags, tag];
      return newTags;
    });
  };

  const handleSearch = () => {
    const filters: Filters = {
      itemName,
      levelRange,
      selectedRarities,
      selectedEquipmentTags,
    };
    console.log(filters);
    onSearch(filters);
  };

  const handleClear = () => {
    setItemName("");
    setLevelRange([1, 230]);
    setSelectedRarities([]);
    setSelectedEquipmentTags([]);
  };

  return (
    <div className="search-items-container">
      <div className="input-group">
        <label>NOM DE L'ITEM</label>
        <input type="text" value={itemName} onChange={handleItemNameChange} />
      </div>
      <div className="input-group">
        <label>
          NIVEAU ({levelRange[0]} - {levelRange[1]})
        </label>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="thumb"
          trackClassName="track"
          min={1}
          max={230}
          value={levelRange}
          onChange={handleLevelChange}
          minDistance={1}
          ariaLabel={["Lower thumb", "Upper thumb"]}
        />
      </div>
      <div className="rarity-section">
        <label>RARETÉ</label>
        <div className="rarity-options">
          {Object.keys(rarityEquipment).map((key) => {
            const rarity = rarityEquipment[Number(key)];
            const isSelected = selectedRarities.includes(rarity.tag);
            return (
              <img
                key={key}
                src={rarity.src}
                alt={rarity.alt}
                className={`rarity-image ${isSelected ? "selected" : ""}`}
                onClick={() => handleRaritySelect(rarity.tag)} 
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
            const isSelected = selectedEquipmentTags.includes(equipment.tag);
            return (
              <img
                key={key}
                src={equipment.src}
                alt={equipment.alt}
                className={`equipment-image ${isSelected ? "selected" : ""}`}
                onClick={() => handleEquipmentTagSelect(equipment.tag)}
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
