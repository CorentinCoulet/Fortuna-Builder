import React, { useState } from 'react';
import '../../styles/components/Sublimations/SublimationsRares.scss';
import { FaSearch } from 'react-icons/fa';
import { sublimationsEpic, sublimationsRelic, rarityEquipment } from "../../asset.ts";
import { useDispatch } from 'react-redux';
import { setSelectedEpicSublimation, setSelectedRelicSublimation } from '../../features/components/Sublimations/sublimationsSlice.ts';
const fakeSublimations = {
    1: { 
        label: "Abnégation", 
        type: 'epic', 
        number: 5,
        descriptif: "Augmente les résistances quand les PV sont bas.",
        bonus: { 
            waterResist: 10,
            earthResist: 10,
            airResist: 10,
            fireResist: 10
        }
    },
    2: { 
        label: "Alternance", 
        type: 'relic', 
        number: 4,
        descriptif: "Intervertit les dégâts infligés et les soins prodigués une fois par tour.",
        bonus: null // Non pris en compte dans le builder
    },
    3: { 
        label: "Alternance II", 
        type: 'relic', 
        number: 7,
        descriptif: "Améliore l'Alternance avec un bonus supplémentaire aux soins.",
        bonus: {
            heals: 15
        }
    },
    4: { 
        label: "Anatomie", 
        type: 'epic', 
        number: 9,
        descriptif: "Augmente les chances de coup critique.",
        bonus: {
            critical: 5
        }
    },
    5: { 
        label: "Aplomb Naturel", 
        type: 'relic', 
        number: 6,
        descriptif: "Augmente les résistances durant le premier tour du combat.",
        bonus: null // Non pris en compte dans le builder
    },
    6: { 
        label: "Arme de Lumière", 
        type: 'relic', 
        number: 1,
        descriptif: "Augmente les dégâts de lumière pendant une durée limitée.",
        bonus: null // Non pris en compte dans le builder
    },
    7: { 
        label: "Arrogance", 
        type: 'relic', 
        number: 9,
        descriptif: "Augmente les dégâts pour chaque ennemi vaincu.",
        bonus: {
            damageDealt: 10
        }
    },
    8: { 
        label: "Assimilation", 
        type: 'relic', 
        number: 6,
        descriptif: "Réduit les dégâts subis lorsque les PV sont élevés.",
        bonus: {
            damageReduction: 8 // Si vous avez une propriété damageReduction
        }
    },
    9: { 
        label: "Aura de Flammes", 
        type: 'relic', 
        number: 1,
        descriptif: "Inflige des dégâts de feu aux ennemis proches à chaque coup reçu.",
        bonus: null // Non pris en compte dans le builder
    },
    10: { 
        label: "Brasero", 
        type: 'relic', 
        number: 6,
        descriptif: "Augmente la maîtrise feu pendant une courte durée.",
        bonus: {
            fireMastery: 12
        }
    },
    11: { 
        label: "Brise", 
        type: 'relic', 
        number: 7,
        descriptif: "Augmente la vitesse de déplacement pendant un tour.",
        bonus: null // Non pris en compte dans le builder
    },
    12: { 
        label: "Brutalité", 
        type: 'epic', 
        number: 10,
        descriptif: "Augmente les dégâts infligés aux ennemis étourdis.",
        bonus: {
            meleeMastery: 20
        }
    },
};

const bonusLabels: { [key: string]: string } = {
    waterResist: "Résistance Eau",
    earthResist: "Résistance Terre",
    airResist: "Résistance Air",
    fireResist: "Résistance Feu",

    waterMastery: "Maîtrise Eau",
    earthMastery: "Maîtrise Terre",
    airMastery: "Maîtrise Air",
    fireMastery: "Maîtrise Feu",

    hp: "Points de Vie",
    armor: "Armure",
    
    ap: "Points d'Action",
    wp: "Points de Wakfu",
    mp: "Points de Mouvement",
    
    critMastery: "Maîtrise Critique",
    rearMastery: "Maîtrise Dos",
    meleeMastery: "Maîtrise Mêlée",
    distanceMastery: "Maîtrise Distance",
    healMastery: "Maîtrise Soin",
    berserkMastery: "Maîtrise Berserk",
    
    critResist: "Résistance Critique",
    rearResist: "Résistance Dos",
    damageReduction: "Réduction de Dégâts",
    
    critical: "Coup Critique",
    block: "Blocage",
    
    initiative: "Initiative",
    dodge: "Esquive",
    lock: "Tacle",
    wisdom: "Sagesse",
    control: "Contrôle",
    range: "Portée",
    prospecting: "Prospection",
    will: "Volonté",
    
    damageDealt: "Dégâts Infligés",
    heals: "Soins",
};

const rarity = {
    epic: { src : rarityEquipment[6].src, alt: rarityEquipment[6].alt},
    relic: { src : rarityEquipment[7].src, alt: rarityEquipment[7].alt},
}

const SublimationsRares: React.FC = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isActive, setIsActive] = useState<boolean>(false);
    const [selectedRarity, setSelectedRarity] = useState<string | null>(null);
    const [hoveredSublimation, setHoveredSublimation] = useState<string | null>(null);
    const [selectedSublimation, setSelectedSublimation] = useState<string | null>(null);

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

    const handleSublimationClick = (key: string) => {
        const sublimation = fakeSublimations[key];
        if (selectedSublimation === key) {
            setSelectedSublimation(null);
            dispatch(sublimation.type === 'epic' ? setSelectedEpicSublimation(null) : setSelectedRelicSublimation(null));
        } else {
            if (selectedSublimation) {
                const previousSublimation = fakeSublimations[selectedSublimation];
                dispatch(previousSublimation.type === 'epic' ? setSelectedEpicSublimation(null) : setSelectedRelicSublimation(null));
            }
            setSelectedSublimation(key);
            const selectedData = {
                src: sublimation.type === 'epic' ? sublimationsEpic[sublimation.number]?.src : sublimationsRelic[sublimation.number]?.src,
                alt: sublimation.label,
                label: sublimation.label,
                type: sublimation.type,
                descriptif: sublimation.descriptif,
                bonus: sublimation.bonus,
            };
            dispatch(sublimation.type === 'epic' ? setSelectedEpicSublimation(selectedData) : setSelectedRelicSublimation(selectedData));
        }
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

    const handleMouseEnter = (key: string) => {
        setHoveredSublimation(key);
    };

    const handleMouseLeave = () => {
        setHoveredSublimation(null);
    };

    return (
        <div className="sublimations-rares-container">
            <div className="sublimations-rares-header">
                <div>
                    <h2>SUBLIMATIONS</h2>
                    <div className={`filter-button ${selectedRarity === 'epic' ? 'selected' : ''}`}
                        onClick={() => handleRarityFilter('epic')}>
                        <img src={rarity.epic.src} alt="Epic Filter" className="filter-image" />
                    </div>
                    <div
                        className={`filter-button sublimation-epic-search ${selectedRarity === 'relic' ? 'selected' : ''}`}
                        onClick={() => handleRarityFilter('relic')}>
                        <img src={rarity.relic.src} alt="Relic Filter" className="filter-image" />
                    </div>
                </div>
                <div className="filters-container">
                    <div className="cntr-rares">
                        <div className="cntr-innr-rares">
                            <label className={`search ${isActive ? 'active' : ''}`} htmlFor="inpt_search">
                                <FaSearch className="search-icon" />
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
                        <div
                            key={key}
                            className={`sublimation-rares-item ${selectedSublimation === key ? "selected" : ""}`}
                            onMouseEnter={() => handleMouseEnter(key)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleSublimationClick(key)}
                        >
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
                            {hoveredSublimation === key && (
                                <div className="sublimation-popup">
                                    <div>
                                        <div className="sublimation-popup-image">
                                            <img
                                                src={imageSrc}
                                                alt={sublimation.label}
                                                className="sublimation-popup-image"
                                            />
                                        </div>
                                        <div className="sublimation-popup-label">
                                            {sublimation.label}
                                        </div>
                                    </div>
                                    <div className="sublimation-popup-descriptif">
                                        {sublimation.descriptif}
                                        {sublimation.bonus && (
                                            <div className="sublimation-popup-bonus">
                                                {Object.entries(sublimation.bonus).map(([key, value]) => (
                                                    <div key={key}>
                                                        {bonusLabels[key]}: {String(value)}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SublimationsRares;