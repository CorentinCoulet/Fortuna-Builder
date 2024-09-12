import React, {useEffect, useRef, useState} from 'react';
import {PrimaryStats} from "../../asset.ts";
import '../../styles/components/SearchByStats.scss';

interface StatOption {
    id: string;
    icon: string;
    name: string;
    prefix: string;
}

const sections = {
    primary: {
        1: {src: PrimaryStats[1].src, alt: PrimaryStats[1].alt},
        2: {src: PrimaryStats[3].src, alt: PrimaryStats[3].alt},
        3: {src: PrimaryStats[4].src, alt: PrimaryStats[4].alt},
        5: {src: PrimaryStats[5].src, alt: PrimaryStats[5].alt},
    },
    elementary: {
        1: {src: PrimaryStats[6].src, alt: PrimaryStats[6].alt},
        2: {src: PrimaryStats[7].src, alt: PrimaryStats[7].alt},
        3: {src: PrimaryStats[8].src, alt: PrimaryStats[8].alt},
        4: {src: PrimaryStats[9].src, alt: PrimaryStats[9].alt},
        5: {src: PrimaryStats[10].src, alt: PrimaryStats[10].alt},
        6: {src: PrimaryStats[11].src, alt: PrimaryStats[11].alt},
        7: {src: PrimaryStats[12].src, alt: PrimaryStats[12].alt},
        8: {src: PrimaryStats[13].src, alt: PrimaryStats[13].alt},
    },
    armor: {
        1: {src: PrimaryStats[14].src, alt: PrimaryStats[14].alt},
        2: {src: PrimaryStats[15].src, alt: PrimaryStats[15].alt},
    },
    secondary: {
        1: {src: PrimaryStats[16].src, alt: PrimaryStats[16].alt},
        2: {src: PrimaryStats[17].src, alt: PrimaryStats[17].alt},
        3: {src: PrimaryStats[18].src, alt: PrimaryStats[18].alt},
        4: {src: PrimaryStats[19].src, alt: PrimaryStats[19].alt},
        5: {src: PrimaryStats[20].src, alt: PrimaryStats[20].alt},
        6: {src: PrimaryStats[21].src, alt: PrimaryStats[21].alt},
        7: {src: PrimaryStats[22].src, alt: PrimaryStats[22].alt},
        8: {src: PrimaryStats[23].src, alt: PrimaryStats[23].alt},
        9: {src: PrimaryStats[24].src, alt: PrimaryStats[24].alt},
        10: {src: PrimaryStats[25].src, alt: PrimaryStats[25].alt},
        11: {src: PrimaryStats[26].src, alt: PrimaryStats[26].alt},
        12: {src: PrimaryStats[27].src, alt: PrimaryStats[27].alt},
    },
    specifically: {
        1: {src: PrimaryStats[28].src, alt: PrimaryStats[28].alt},
        2: {src: PrimaryStats[29].src, alt: PrimaryStats[29].alt},
        3: {src: PrimaryStats[30].src, alt: PrimaryStats[30].alt},
        4: {src: PrimaryStats[31].src, alt: PrimaryStats[31].alt},
        5: {src: PrimaryStats[32].src, alt: PrimaryStats[32].alt},
        6: {src: PrimaryStats[33].src, alt: PrimaryStats[33].alt},
        7: {src: PrimaryStats[34].src, alt: PrimaryStats[34].alt},
        8: {src: PrimaryStats[35].src, alt: PrimaryStats[35].alt},
    },
};

const statsOptions: StatOption[] = [
    // Bonus
    ...Object.entries(sections.primary).map(([id, stat]) => ({
        id: `primary-${id}`,
        icon: stat.src,
        name: stat.alt,
        prefix: '+',
    })),
    ...Object.entries(sections.elementary).map(([id, stat]) => ({
        id: `elementary-${id}`,
        icon: stat.src,
        name: stat.alt,
        prefix: '+',
    })),
    ...Object.entries(sections.armor).map(([id, stat]) => ({
        id: `armor-${id}`,
        icon: stat.src,
        name: stat.alt,
        prefix: '+',
    })),
    ...Object.entries(sections.secondary).map(([id, stat]) => ({
        id: `secondary-${id}`,
        icon: stat.src,
        name: stat.alt,
        prefix: '+',
    })),
    ...Object.entries(sections.specifically).map(([id, stat]) => ({
        id: `specifically-${id}`,
        icon: stat.src,
        name: stat.alt,
        prefix: '+',
    })),

    // Malus
    ...Object.entries(sections.primary).map(([id, stat]) => ({
        id: `malus-primary-${id}`,
        icon: stat.src,
        name: stat.alt,
        prefix: '-',
    })),
    ...Object.entries(sections.elementary).map(([id, stat]) => ({
        id: `malus-elementary-${id}`,
        icon: stat.src,
        name: stat.alt,
        prefix: '-',
    })),
    ...Object.entries(sections.armor).map(([id, stat]) => ({
        id: `malus-armor-${id}`,
        icon: stat.src,
        name: stat.alt,
        prefix: '-',
    })),
    ...Object.entries(sections.secondary).map(([id, stat]) => ({
        id: `malus-secondary-${id}`,
        icon: stat.src,
        name: stat.alt,
        prefix: '-',
    })),
    ...Object.entries(sections.specifically).map(([id, stat]) => ({
        id: `malus-specifically-${id}`,
        icon: stat.src,
        name: stat.alt,
        prefix: '-',
    })),
];

const SearchByStats: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStats, setSelectedStats] = useState<StatOption[]>([]);
    const [isFocused, setIsFocused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const availableOptions = statsOptions.filter(
        (option) => !selectedStats.some((selected) => selected.id === option.id)
    );

    const filteredOptions = availableOptions.filter(option =>
        option.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelectStat = (option: StatOption) => {
        if (!selectedStats.some(stat => stat.id === option.id)) {
            setSelectedStats([...selectedStats, option]);
            setSearchTerm('');
        }
    };

    const handleRemoveStat = (optionId: string) => {
        setSelectedStats(selectedStats.filter(stat => stat.id !== optionId));
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsFocused(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="search-stats-container" ref={containerRef}>
            <div className="search-bar">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    placeholder="Rechercher une statistique..."
                />
                {(searchTerm || isFocused) && (
                    <div className="search-results">
                        {filteredOptions.map(option => (
                            <div
                                key={option.id}
                                className="search-result-item"
                                onClick={() => handleSelectStat(option)}
                            >
                                <img src={option.icon} alt={option.name} />
                                <span>{option.prefix} {option.name}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="selected-stats">
                {selectedStats.map(stat => (
                    <div key={stat.id} className="selected-stat-item">
                        <img src={stat.icon} alt={stat.name} />
                        <span>{stat.prefix} {stat.name}</span>
                        <button onClick={() => handleRemoveStat(stat.id)}>x</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchByStats;