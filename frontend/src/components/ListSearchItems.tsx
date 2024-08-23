import React, { useState, useEffect } from 'react';
import '../styles/components/ListSearchItems.scss';
import { rarityEquipment, searchEquipment } from "../asset.ts";

const fakeItemsData = [
    {
        id: 1,
        name: "Épée des Flammes",
        level: 50,
        rarity: "Rare",
        type: "Épée",
        image: "path/to/sword-image.png",
        rarityIcon: rarityEquipment[2].src,
        typeIcon: searchEquipment[12].src
    },
    {
        id: 2,
        name: "Bouclier du Titan",
        level: 40,
        rarity: "Légendaire",
        type: "Bouclier",
        image: "path/to/shield-image.png",
        rarityIcon: rarityEquipment[4].src,
        typeIcon: searchEquipment[10].src
    },
];

interface ItemsListSearchProps {
    searchTriggered: boolean;
    filters: {
        itemName: string;
        levelRange: [number, number];
        selectedRarities: number[];
        selectedEquipmentTypes: number[];
    };
}

const ItemsListSearch: React.FC<ItemsListSearchProps> = ({ searchTriggered, filters }) => {
    const [items, setItems] = useState(fakeItemsData);

    useEffect(() => {
        if (searchTriggered) {
            const filteredItems = fakeItemsData.filter(item => {
                const matchesName = filters.itemName === '' || item.name.toLowerCase().includes(filters.itemName.toLowerCase());
                const matchesLevel = item.level >= filters.levelRange[0] && item.level <= filters.levelRange[1];
                const matchesRarity = filters.selectedRarities.length === 0 || filters.selectedRarities.includes(rarityEquipment.indexOf(rarityEquipment.find(r => r.name === item.rarity)));
                const matchesType = filters.selectedEquipmentTypes.length === 0 || filters.selectedEquipmentTypes.includes(searchEquipment.indexOf(searchEquipment.find(t => t.name === item.type)));

                return matchesName && matchesLevel && matchesRarity && matchesType;
            });

            setItems(filteredItems);
        }
    }, [searchTriggered, filters]);

    return (
        <div className="items-list-container">
            {searchTriggered && items.map(item => (
                <div key={item.id} className="item-row">
                    <img src={item.image} alt={item.name} className="item-image" />
                    <div className="item-details">
                        <div className="item-name">{item.name}</div>
                        <div className="item-level">Niveau: {item.level}</div>
                        <div className="item-info">
                            <img src={item.rarityIcon} alt={item.rarity} className="item-icon" />
                            <img src={item.typeIcon} alt={item.type} className="item-icon" />
                        </div>
                    </div>
                    <button className="equip-button">ÉQUIPER</button>
                </div>
            ))}
        </div>
    );
};

export default ItemsListSearch;
