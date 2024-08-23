import React, { useState } from 'react';
import '../styles/components/SublimationsRares.scss';
import { FaSearch } from 'react-icons/fa';
import { sublimationsEpic, sublimationsRelic } from "../asset.ts";
import { rarityEquipment } from "../asset.ts";

const fakeSublimations = {
    1: { label: "Abnégation", type: 'epic', number: 5 },
    2: { label: "Alternance", type: 'relic', number: 4 },
    3: { label: "Alternance II", type: 'relic', number: 7 },
    4: { label: "Anatomie", type: 'epic', number: 9 },
    5: { label: "Aplomb Naturel", type: 'relic', number: 6 },
    6: { label: "Arme de Lumière", type: 'relic', number: 1 },
    7: { label: "Arrogance", type: 'relic', number: 9 },
    8: { label: "Assimilation", type: 'relic', number: 6 },
    9: { label: "Aura de Flammes", type: 'relic', number: 1 },
    10: { label: "Brasero", type: 'relic', number: 6 },
    11: { label: "Brise", type: 'relic', number: 7 },
    12: { label: "Brutalité", type: 'epic', number: 10 },
};

const rarity = {
    epic: { src : rarityEquipment[6].src, alt: rarityEquipment[6].alt},
    relic: { src : rarityEquipment[7].src, alt: rarityEquipment[7].alt},
}

const SublimationsRares: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isActive, setIsActive] = useState<boolean>(false);
    const [selectedRarity, setSelectedRarity] = useState<string | null>(null);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleFocus = () => {
        setIsActive(true);
    };

    const handleBlur = () => {
        setIsActive(false);
    };

    const handleRarityFilter = (type: string) => {
        setSelectedRarity(type === selectedRarity ? null : type);
    };

    const filteredSublimations = Object.keys(fakeSublimations).filter(key => {
        const sublimation = fakeSublimations[key];
        const matchesRarity = selectedRarity ? sublimation.type === selectedRarity : true;
        const matchesSearch = sublimation.label.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesRarity && matchesSearch;
    });

    const getImageForSublimation = (type: string, number: number) => {
        if (type === 'epic') {
            return sublimationsEpic[number]?.src;
        } else if (type === 'relic') {
            return sublimationsRelic[number]?.src;
        }
        return null;
    };

    return (
        <div className="sublimations-rares-container">
            <div className="sublimations-rares-header">
                <div>
                <h2>SUBLIMATIONS</h2>
                    <div className={`filter-button ${selectedRarity === 'epic' ? 'selected' : ''}`}
                         onClick={() => handleRarityFilter('epic')}>
                        <img src={rarity.epic.src} alt="Epic Filter" className="filter-image"/>
                    </div>
                    <div
                        className={`filter-button sublimation-epic-search ${selectedRarity === 'relic' ? 'selected' : ''}`}
                        onClick={() => handleRarityFilter('relic')}>
                        <img src={rarity.relic.src} alt="Relic Filter" className="filter-image"/>
                    </div>
            </div>
                <div className="filters-container">
                    <div className="cntr-rares">
                        <div className="cntr-innr-rares">
                            <label className={`search ${isActive ? 'active' : ''}`} htmlFor="inpt_search">
                                <FaSearch className="search-icon"/>
                                <input
                                    id="inpt_search"
                                    type="text"
                                    placeholder="Rechercher..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sublimations-rares-list">
                {filteredSublimations.map((key) => {
                    const sublimation = fakeSublimations[key];
                    const imageSrc = getImageForSublimation(sublimation.type, sublimation.number);

                    return (
                        <div key={key} className="sublimation-rares-item">
                            {imageSrc && (
                                <div className="sublimation-image">
                                    <img
                                        src={imageSrc}
                                        alt={sublimation.label}
                                        className="sublimation-image"
                                    />
                                </div>
                            )}
                            <div className="label-sublimation-rares">
                                {sublimation.label}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SublimationsRares;
