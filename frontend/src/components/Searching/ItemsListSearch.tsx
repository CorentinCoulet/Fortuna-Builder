import React, { useState, useEffect } from "react";
import { rarityEquipment, searchEquipment } from "../../asset.ts";
import "../../styles/components/Searching/ItemsListSearch.scss";
import Logo from "../../assets/logo-fortuna-V2.webp";
import { useDispatch, useSelector } from "react-redux";
import {
  equipItem,
  setTempRingItem,
  clearTempRingItem,
} from "../../features/components/Builder/equipedItemsSlice.ts";
import {
  applyEquipmentBonus,
} from "../../features/components/Builder/classInformationsSlice.ts";
import RingModal from "./RingModal.tsx";
import { RootState } from "../../store.ts";

const fakeItemsData = [
  {
    id: 1,
    name: "Épée des Flammes",
    level: 50,
    rarity: "rare",
    image: Logo,
    rarityIcon: rarityEquipment[2].src,
    typeIcon: searchEquipment[12].src,
    tag: "two-handed",
    bonus: {
      fireMastery: 20,
      meleeMastery: 15,
      ap: 1,
    },
    labels: [
      "+20 Maîtrise Feu",
      "+15 Maîtrise Mêlée",
      "+1 PA",
      "Dommage : 12",
      "Dommage Crit : 18",
    ],
  },
  {
    id: 2,
    name: "Bouclier du Titan",
    level: 40,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[10].src,
    tag: "shield",
    bonus: {
      earthResist: 25,
      waterResist: 15,
      block: 10,
    },
    labels: ["+25 Résistance Terre", "+15 Résistance Eau", "+10 Blocage"],
  },
  {
    id: 3,
    name: "Cape de l'Ombre",
    level: 30,
    rarity: "mythic",
    image: Logo,
    rarityIcon: rarityEquipment[3].src,
    typeIcon: searchEquipment[6].src,
    tag: "cape",
    bonus: {
      airResist: 10,
      dodge: 15,
      rearMastery: 20,
    },
    labels: ["+10 Résistance Air", "+15 Esquive", "+20 Maîtrise Dos"],
  },
  {
    id: 4,
    name: "Casque du Guerrier",
    level: 45,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[1].src,
    tag: "headgear",
    bonus: {
      baseHp: 80,
      fireMastery: 15,
    },
    labels: ["+80 PV", "+15 Maîtrise Feu"],
  },
  {
    id: 5,
    name: "Anneau de Sagesse",
    level: 20,
    rarity: "common",
    image: Logo,
    rarityIcon: rarityEquipment[1].src,
    typeIcon: searchEquipment[4].src,
    tag: "ring",
    bonus: {
      wisdom: 10,
    },
    labels: ["+10 Sagesse"],
  },
  {
    id: 6,
    name: "Bottes de Vitesse",
    level: 25,
    rarity: "rare",
    image: Logo,
    rarityIcon: rarityEquipment[2].src,
    typeIcon: searchEquipment[5].src,
    tag: "boots",
    bonus: {
      mp: 1,
      dodge: 10,
      fireMastery: -5,
    },
    labels: ["+1 PM", "+10 Esquive", "-5 Maîtrise Feu"],
  },
  {
    id: 7,
    name: "Plastron de l'Immortel",
    level: 60,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[3].src,
    tag: "breastplate",
    bonus: {
      baseArmor: 100,
      critResist: 15,
    },
    labels: ["+100 Armure", "+15 Résistance Critique"],
  },
  {
    id: 8,
    name: "Amulette de la Lune",
    level: 35,
    rarity: "relic",
    image: Logo,
    rarityIcon: rarityEquipment[7].src,
    typeIcon: searchEquipment[2].src,
    tag: "amulet",
    bonus: {
      earthMastery: 30,
      control: 1,
    },
    labels: ["+30 Maîtrise Terre", "+1 Contrôle"],
  },
  {
    id: 9,
    name: "Dague de l'Ombre",
    level: 25,
    rarity: "rare",
    image: Logo,
    rarityIcon: rarityEquipment[2].src,
    typeIcon: searchEquipment[9].src,
    tag: "dagger",
    bonus: {
      critMastery: 10,
      rearResist: 5,
    },
    labels: [
      "+10 Maîtrise Critique",
      "+5 Résistance Dos",
      "Dommage : 8",
      "Dommage Crit : 12",
    ],
  },
  {
    id: 10,
    name: "Épaulettes de l'Aigle",
    level: 40,
    rarity: "mythic",
    image: Logo,
    rarityIcon: rarityEquipment[3].src,
    typeIcon: searchEquipment[7].src,
    tag: "epaulettes",
    bonus: {
      airMastery: 15,
      range: 1,
    },
    labels: ["+15 Maîtrise Air", "+1 Portée"],
  },
  {
    id: 11,
    name: "Ceinture de Puissance",
    level: 30,
    rarity: "memory",
    image: Logo,
    rarityIcon: rarityEquipment[5].src,
    typeIcon: searchEquipment[8].src,
    tag: "belt",
    bonus: {
      distanceMastery: 20,
      waterResist: 10,
    },
    labels: ["+20 Maîtrise Distance", "+10 Résistance Eau"],
  },
  {
    id: 12,
    name: "Monture de Bataille",
    level: 55,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[14].src,
    tag: "mount",
    bonus: {
      mp: 1,
      baseHp: 50,
    },
    labels: ["+1 PM", "+50 PV"],
  },
  {
    id: 13,
    name: "Familier des Ténèbres",
    level: 25,
    rarity: "rare",
    image: Logo,
    rarityIcon: rarityEquipment[2].src,
    typeIcon: searchEquipment[15].src,
    tag: "pet",
    bonus: {
      dodge: 20,
      initiative: 5,
    },
    labels: ["+20 Esquive", "+5 Initiative"],
  },
  {
    id: 14,
    name: "Emblème des Anciens",
    level: 50,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[13].src,
    tag: "emblem",
    bonus: {
      critMastery: 15,
      rearMastery: 10,
    },
    labels: ["+15 Maîtrise Critique", "+10 Maîtrise Dos"],
  },
  {
    id: 15,
    name: "Outils du Forgeron",
    level: 20,
    rarity: "common",
    image: Logo,
    rarityIcon: rarityEquipment[1].src,
    typeIcon: searchEquipment[16].src,
    tag: "tools",
    bonus: {
      craftingSpeed: 10,
      lock: 5,
    },
    labels: ["+10 Vitesse de Fabrication", "+5 Tacle"],
  },
];

interface Item {
  id: number;
  name: string;
  level: number;
  rarity: string;
  image: string;
  rarityIcon: string;
  typeIcon: string;
  tag: string;
  bonus: {
    [key: string]: number;
  };
  labels: string[];
}

interface Filters {
  itemName: string;
  levelRange: [number, number];
  selectedRarities: string[];
  selectedEquipmentTags: string[];
}

interface ItemsListSearchProps {
  filters: Filters;
  searchTriggered: boolean;
}

const ItemsListSearch: React.FC<ItemsListSearchProps> = ({
  filters,
  searchTriggered,
}) => {
  const dispatch = useDispatch();
  const equippedItems = useSelector((state: RootState) => state.equippedItem);
  const [filteredItems, setFilteredItems] = useState(fakeItemsData);
  const [showModal, setShowModal] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<Item | null>(null);

  useEffect(() => {
    if (searchTriggered) {
      let filteredResults = fakeItemsData.filter((item) => {
        // Filtrer par nom de l'item
        const matchesName =
          filters.itemName === "" ||
          item.name.toLowerCase().includes(filters.itemName.toLowerCase());

        // Filtrer par plage de niveaux
        const matchesLevel =
          item.level >= filters.levelRange[0] &&
          item.level <= filters.levelRange[1];

        // Filtrer par rareté
        const matchesRarity =
          filters.selectedRarities.length === 0 ||
          filters.selectedRarities.includes(item.rarity);

        // Filtrer par tag d'équipement
        const matchesTag =
          filters.selectedEquipmentTags.length === 0 ||
          filters.selectedEquipmentTags.includes(item.tag);

        return matchesName && matchesLevel && matchesRarity && matchesTag;
      });

      filteredResults = filteredResults.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      setFilteredItems(filteredResults);
    }
  }, [filters, searchTriggered]);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleEquipClick = (item) => {
    if (item.tag === "ring") {
      dispatch(setTempRingItem({ src: item.image, alt: item.name }));
      setShowModal(true);
    } else {
      dispatch(
        equipItem({ tag: item.tag, item: { src: item.image, alt: item.name } })
      );
      dispatch(applyEquipmentBonus(item.bonus));
    }
  };

  const handleModalSelect = (choice: "left-ring" | "right-ring") => {
    const tempRingItem = equippedItems.tempRingItem;
    if (tempRingItem) {
      dispatch(equipItem({ tag: choice, item: tempRingItem }));
      dispatch(clearTempRingItem());
      setShowModal(false);

      const ringItem = filteredItems.find(
        (item) => item.name === tempRingItem.alt
      );
      if (ringItem) {
        dispatch(applyEquipmentBonus(ringItem.bonus));
      }
    }
  };

  const getRarityColor = (rarityTag) => {
    const rarity = Object.values(rarityEquipment).find(
      (r) => r.tag === rarityTag
    );
    return rarity ? rarity.color : "#000";
  };

  const getBackgroundColor = (rarityTag) => {
    const color = getRarityColor(rarityTag);
    return `${color}30`;
  };

  return (
    <div className="items-list-container">
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <div
            key={item.id}
            className="item-row"
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleEquipClick(item)}
            style={{
              backgroundColor: getBackgroundColor(item.rarity),
            }}
          >
            <div className="item-top">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-level">Niveau: {item.level}</div>
            </div>
            <div className="item-details">
              <div
                className="item-name"
                style={{
                  color: getRarityColor(item.rarity),
                }}
              >
                {item.name}
              </div>
              <div className="item-info">
                <img
                  src={item.rarityIcon}
                  alt={item.rarity}
                  className="item-icon"
                />
                <img src={item.typeIcon} alt={item.tag} className="item-icon" />
              </div>
            </div>
            {hoveredItem?.id === item.id && (
              <div className="item-hover-box">
                <h3>{item.name}</h3>
                <p>Niveau: {item.level}</p>
                <ul>
                  {item.labels.map((label, index) => (
                    <li key={index}>{label}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="no-results">
          <p>Aucun objet ne correspond aux critères de recherche.</p>
        </div>
      )}
      {showModal && (
        <RingModal
          onSelect={handleModalSelect}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ItemsListSearch;
