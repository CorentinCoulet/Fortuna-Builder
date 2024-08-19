import React, { useState } from 'react';
import { shards, parchments } from '../asset';
import '../styles/components/Sublimations.scss';
import { FaSearch } from 'react-icons/fa';

const comboShards = {
    red: {src : shards[1].src, alt: shards[1].alt}, // Rouge
    green: {src : shards[2].src, alt: shards[2].alt}, // Vert
    blue: {src : shards[3].src, alt: shards[3].alt}, // Bleu
}

const fakeSublimations = {
    1: {
        label: "Abandon", 
        quantity: 3, 
        order: [comboShards.green, comboShards.red, comboShards.blue],
        max: 6,
    },
    2: {
        label: "Accumulation", 
        quantity: 3, 
        order: [comboShards.green, comboShards.green, comboShards.blue],
        max: 4,
    },
    3: {
        label: "Acribie", 
        quantity: 3, 
        order: [comboShards.red, comboShards.green, comboShards.red],
        max: 6,
    },
    4: {
        label: "Agilité Vitale", 
        quantity: 1, 
        number: [2], 
        order: [comboShards.green, comboShards.blue, comboShards.red],
        max: 2,
    },
    5: {
        label: "Aisance", 
        quantity: 2, 
        number: [1, 2], 
        order: [comboShards.blue, comboShards.red, comboShards.blue],
        max: 2,
    },
    6: {
        label: "Allocentrisme", 
        quantity: 3, 
        order: [comboShards.green, comboShards.green, comboShards.green],
        max: 4,
    },
    7: {
        label: "Altruisme", 
        quantity: 3, 
        order: [comboShards.blue, comboShards.green, comboShards.red],
        max: 6,
    },
    8: {
        label: "Ambition", 
        quantity: 3, 
        order: [comboShards.green, comboShards.blue, comboShards.red],
        max: 6,
    },
    9: {
        label: "Apprêt", 
        quantity: 3, 
        order: [comboShards.red, comboShards.blue, comboShards.red],
        max: 6,
    },
    10: {
        label: "Arcanes", 
        quantity: 3, 
        order: [comboShards.blue, comboShards.red, comboShards.blue],
        max: 6,
    },
    11: {
        label: "Arme Empoisonnée", 
        quantity: 3, 
        order: [comboShards.blue, comboShards.blue, comboShards.green],
        max: 4,
    },
    12: {
        label: "Arme Solide", 
        quantity: 2, 
        number: [1, 2], 
        order: [comboShards.blue, comboShards.blue, comboShards.blue],
        max: 2,
    },
}

const Sublimations: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isActive, setIsActive] = useState(false);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredSublimations = Object.keys(fakeSublimations).filter((key) => {
        const sublimation = fakeSublimations[key];
        return sublimation.label.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleFocus = () => {
        setIsActive(true);
    };

    const handleBlur = () => {
        if (searchTerm.length === 0) {
            setIsActive(false);
        }
    };

    return (
        <div className="sublimations-container">
            <div className="sublimations-header">
                <h2>SUBLIMATIONS</h2>
                <div className="cntr">
                    <div className="cntr-innr">
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
            {filteredSublimations.map((key) => {
                const sublimation = fakeSublimations[key];
                const parchmentIndexes = sublimation.number || Array.from({ length: sublimation.quantity }, (_, i) => i + 1);

                return (
                    <div key={key} className="sublimation-item">
                        <div className="sublimation-item-info">
                            <div className="label-sublimation">
                                <span>{`[MAX: ${sublimation.max}]`}</span>
                                <p>{sublimation.label}</p>
                            </div>
                            <div className="shards">
                                {sublimation.order.map((shard, index) => (
                                    <img
                                        key={index}
                                        src={shard.src}
                                        alt={shard.alt}
                                        className="rune-image"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="sublimation-item-parchments">
                            {parchmentIndexes.map((index) => (
                                <div key={index} className="parchment-item">
                                    <img
                                        src={parchments[index].src}
                                        alt={parchments[index].alt}
                                        className="parchment-image"
                                    />
                                    <span className="parchment-index">{index}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Sublimations;