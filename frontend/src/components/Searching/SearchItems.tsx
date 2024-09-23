import React, { useEffect } from "react";
import ReactSlider from "react-slider";
import { rarityEquipment, searchEquipment } from "../../asset.ts";
import "../../styles/components/Searching/SearchItems.scss";
import SearchByStats from "./SearchByStats.tsx";
import {
  setItemName,
  setLevelRange,
  setSelectedRarities,
  setSelectedEquipmentTags,
  setInstantSearch,
  clearFilters,
  setSearchTriggered,
} from '../../features/components/Searching/searchFilterSlice.ts';
import { RootState } from "../../store.ts";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.searchFilters);
  const instantSearch = useSelector((state: RootState) => state.searchFilters.instantSearch); 

  const handleItemNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setItemName(e.target.value));
  };

  const handleLevelChange = (values: [number, number]) => {
    dispatch(setLevelRange(values));
  };

  useEffect(() => {
    if (instantSearch) {
      dispatch(setSearchTriggered(true)); 
      onSearch(filters);
      dispatch(setInstantSearch(false)); 
    }
  }, [instantSearch, dispatch, filters, onSearch]);

  const handleRaritySelect = (rarityTag: string) => {
    const updatedRarities = filters.selectedRarities.includes(rarityTag)
      ? filters.selectedRarities.filter((tag) => tag !== rarityTag)
      : [...filters.selectedRarities, rarityTag];
    dispatch(setSelectedRarities(updatedRarities));
  };

  const handleEquipmentTagSelect = (tag: string) => {
    const updatedTags = filters.selectedEquipmentTags.includes(tag)
      ? filters.selectedEquipmentTags.filter((existingTag) => existingTag !== tag)
      : [...filters.selectedEquipmentTags, tag];
    dispatch(setSelectedEquipmentTags(updatedTags)); 
  };

  const handleClassicSearch = () => {
    dispatch(setSearchTriggered(true));
    onSearch(filters);
  };

  const handleClear = () => {
    dispatch(clearFilters()); 
  };

  return (
    <div className="search-items-container">
      <div className="input-group">
        <label>NOM DE L'ITEM</label>
        <input type="text" value={filters.itemName} onChange={handleItemNameChange} />
      </div>
      <div className="input-group">
        <label>
          NIVEAU ({filters.levelRange[0]} - {filters.levelRange[1]})
        </label>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="thumb"
          trackClassName="track"
          min={1}
          max={230}
          value={filters.levelRange}
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
            const isSelected = filters.selectedRarities.includes(rarity.tag);
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
            const isSelected = filters.selectedEquipmentTags.includes(equipment.tag);
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
        <button className="search-button" onClick={handleClassicSearch}>
          RECHERCHER
        </button>
      </div>
    </div>
  );
};

export default SearchItems;