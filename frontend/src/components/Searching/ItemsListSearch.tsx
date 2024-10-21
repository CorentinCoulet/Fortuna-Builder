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
import { applyEquipmentBonus } from "../../features/components/Builder/classInformationsSlice.ts";
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
    labels: ["+25 Résistance Terre", "+15 Résistance Eau", "+10 Parade"],
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
  {
    id: 16,
    name: "Cuirasse de la Terre",
    level: 65,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[11].src,
    tag: "breastplate",
    bonus: {
      earthMastery: 40,
      baseArmor: 200,
    },
    labels: ["+40 Maîtrise Terre", "+200 Armure"],
  },
  {
    id: 17,
    name: "Bottes de Sable",
    level: 15,
    rarity: "uncommon",
    image: Logo,
    rarityIcon: rarityEquipment[1].src,
    typeIcon: searchEquipment[5].src,
    tag: "boots",
    bonus: {
      mp: 1,
      dodge: 8,
    },
    labels: ["+1 PM", "+8 Esquive"],
  },
  {
    id: 18,
    name: "Anneau du Feu",
    level: 10,
    rarity: "common",
    image: Logo,
    rarityIcon: rarityEquipment[1].src,
    typeIcon: searchEquipment[4].src,
    tag: "ring",
    bonus: {
      fireMastery: 5,
    },
    labels: ["+5 Maîtrise Feu"],
  },
  {
    id: 19,
    name: "Gantelets d'Argent",
    level: 55,
    rarity: "rare",
    image: Logo,
    rarityIcon: rarityEquipment[2].src,
    typeIcon: searchEquipment[6].src,
    tag: "gloves",
    bonus: {
      waterMastery: 15,
      meleeMastery: 10,
    },
    labels: ["+15 Maîtrise Eau", "+10 Maîtrise Mêlée"],
  },
  {
    id: 20,
    name: "Amulette de Pierre",
    level: 30,
    rarity: "mythic",
    image: Logo,
    rarityIcon: rarityEquipment[3].src,
    typeIcon: searchEquipment[2].src,
    tag: "amulet",
    bonus: {
      earthResist: 20,
      block: 5,
    },
    labels: ["+20 Résistance Terre", "+5 Parade"],
  },
  {
    id: 21,
    name: "Couteau de Chasseur",
    level: 25,
    rarity: "common",
    image: Logo,
    rarityIcon: rarityEquipment[1].src,
    typeIcon: searchEquipment[9].src,
    tag: "dagger",
    bonus: {
      rearMastery: 5,
    },
    labels: ["+5 Maîtrise Dos"],
  },
  {
    id: 22,
    name: "Jambières d'Acier",
    level: 50,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[12].src,
    tag: "legs",
    bonus: {
      baseHp: 60,
      fireResist: 20,
    },
    labels: ["+60 PV", "+20 Résistance Feu"],
  },
  {
    id: 23,
    name: "Casque de Vent",
    level: 35,
    rarity: "rare",
    image: Logo,
    rarityIcon: rarityEquipment[2].src,
    typeIcon: searchEquipment[1].src,
    tag: "headgear",
    bonus: {
      airMastery: 12,
      dodge: 5,
    },
    labels: ["+12 Maîtrise Air", "+5 Esquive"],
  },
  {
    id: 24,
    name: "Plastron du Gardien",
    level: 45,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[3].src,
    tag: "breastplate",
    bonus: {
      baseArmor: 120,
      block: 10,
    },
    labels: ["+120 Armure", "+10 Parade"],
  },
  {
    id: 25,
    name: "Épée du Givre",
    level: 40,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[12].src,
    tag: "one-handed",
    bonus: {
      waterMastery: 25,
      critMastery: 10,
    },
    labels: ["+25 Maîtrise Eau", "+10 Maîtrise Critique"],
  },
  {
    id: 26,
    name: "Cape de l'Invisibilité",
    level: 30,
    rarity: "rare",
    image: Logo,
    rarityIcon: rarityEquipment[2].src,
    typeIcon: searchEquipment[6].src,
    tag: "cape",
    bonus: {
      dodge: 20,
      rearResist: 10,
    },
    labels: ["+20 Esquive", "+10 Résistance Dos"],
  },
  {
    id: 27,
    name: "Ceinture de Fer",
    level: 40,
    rarity: "common",
    image: Logo,
    rarityIcon: rarityEquipment[1].src,
    typeIcon: searchEquipment[8].src,
    tag: "belt",
    bonus: {
      baseArmor: 15,
      waterResist: 5,
    },
    labels: ["+15 Armure", "+5 Résistance Eau"],
  },
  {
    id: 28,
    name: "Bouclier de Lumière",
    level: 60,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[10].src,
    tag: "shield",
    bonus: {
      block: 20,
      airResist: 10,
    },
    labels: ["+20 Parade", "+10 Résistance Air"],
  },
  {
    id: 29,
    name: "Gantelets d'Or",
    level: 55,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[6].src,
    tag: "gloves",
    bonus: {
      earthMastery: 25,
      baseHp: 40,
    },
    labels: ["+25 Maîtrise Terre", "+40 PV"],
  },
  {
    id: 30,
    name: "Cape de la Tempête",
    level: 50,
    rarity: "mythic",
    image: Logo,
    rarityIcon: rarityEquipment[3].src,
    typeIcon: searchEquipment[6].src,
    tag: "cape",
    bonus: {
      airMastery: 30,
      range: 2,
    },
    labels: ["+30 Maîtrise Air", "+2 Portée"],
  },
  {
    id: 31,
    name: "Amulette des Sables",
    level: 20,
    rarity: "common",
    image: Logo,
    rarityIcon: rarityEquipment[1].src,
    typeIcon: searchEquipment[2].src,
    tag: "amulet",
    bonus: {
      dodge: 5,
      critResist: 3,
    },
    labels: ["+5 Esquive", "+3 Résistance Critique"],
  },
  {
    id: 32,
    name: "Gantelets de Pierre",
    level: 45,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[6].src,
    tag: "gloves",
    bonus: {
      baseHp: 70,
      earthMastery: 20,
    },
    labels: ["+70 PV", "+20 Maîtrise Terre"],
  },
  {
    id: 33,
    name: "Couteau de l'Ombre",
    level: 25,
    rarity: "rare",
    image: Logo,
    rarityIcon: rarityEquipment[2].src,
    typeIcon: searchEquipment[9].src,
    tag: "dagger",
    bonus: {
      critMastery: 12,
      rearMastery: 8,
    },
    labels: ["+12 Maîtrise Critique", "+8 Maîtrise Dos"],
  },
  {
    id: 34,
    name: "Plastron de Bronze",
    level: 40,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[3].src,
    tag: "breastplate",
    bonus: {
      baseArmor: 100,
      critResist: 20,
    },
    labels: ["+100 Armure", "+20 Résistance Critique"],
  },
  {
    id: 35,
    name: "Anneau du Phoenix",
    level: 35,
    rarity: "relic",
    image: Logo,
    rarityIcon: rarityEquipment[7].src,
    typeIcon: searchEquipment[4].src,
    tag: "ring",
    bonus: {
      fireMastery: 35,
      ap: 1,
    },
    labels: ["+35 Maîtrise Feu", "+1 PA"],
  },
  {
    id: 36,
    name: "Bottes du Vent",
    level: 25,
    rarity: "uncommon",
    image: Logo,
    rarityIcon: rarityEquipment[1].src,
    typeIcon: searchEquipment[5].src,
    tag: "boots",
    bonus: {
      mp: 1,
      airResist: 10,
    },
    labels: ["+1 PM", "+10 Résistance Air"],
  },
  {
    id: 37,
    name: "Bouclier de Glace",
    level: 50,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[10].src,
    tag: "shield",
    bonus: {
      waterResist: 25,
      block: 15,
    },
    labels: ["+25 Résistance Eau", "+15 Parade"],
  },
  {
    id: 38,
    name: "Anneau d'Orage",
    level: 35,
    rarity: "mythic",
    image: Logo,
    rarityIcon: rarityEquipment[3].src,
    typeIcon: searchEquipment[4].src,
    tag: "ring",
    bonus: {
      airMastery: 20,
      critMastery: 15,
    },
    labels: ["+20 Maîtrise Air", "+15 Maîtrise Critique"],
  },
  {
    id: 39,
    name: "Casque du Minotaure",
    level: 60,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[1].src,
    tag: "headgear",
    bonus: {
      baseArmor: 80,
      fireMastery: 25,
    },
    labels: ["+80 Armure", "+25 Maîtrise Feu"],
  },
  {
    id: 40,
    name: "Gantelets du Dragon",
    level: 45,
    rarity: "mythic",
    image: Logo,
    rarityIcon: rarityEquipment[3].src,
    typeIcon: searchEquipment[6].src,
    tag: "gloves",
    bonus: {
      fireMastery: 30,
      meleeMastery: 15,
    },
    labels: ["+30 Maîtrise Feu", "+15 Maîtrise Mêlée"],
  },
  {
    id: 41,
    name: "Plastron de l'Inquisiteur",
    level: 70,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[3].src,
    tag: "breastplate",
    bonus: {
      baseArmor: 150,
      fireResist: 25,
    },
    labels: ["+150 Armure", "+25 Résistance Feu"],
  },
  {
    id: 42,
    name: "Ceinture d'Acier",
    level: 50,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[8].src,
    tag: "belt",
    bonus: {
      baseArmor: 30,
      waterMastery: 20,
    },
    labels: ["+30 Armure", "+20 Maîtrise Eau"],
  },
  {
    id: 43,
    name: "Bouclier de Fer",
    level: 35,
    rarity: "common",
    image: Logo,
    rarityIcon: rarityEquipment[1].src,
    typeIcon: searchEquipment[10].src,
    tag: "shield",
    bonus: {
      block: 8,
      airResist: 5,
    },
    labels: ["+8 Parade", "+5 Résistance Air"],
  },
  {
    id: 44,
    name: "Cape du Sorcier",
    level: 30,
    rarity: "rare",
    image: Logo,
    rarityIcon: rarityEquipment[2].src,
    typeIcon: searchEquipment[6].src,
    tag: "cape",
    bonus: {
      fireMastery: 15,
      ap: 1,
    },
    labels: ["+15 Maîtrise Feu", "+1 PA"],
  },
  {
    id: 45,
    name: "Gantelets du Guerrier",
    level: 25,
    rarity: "common",
    image: Logo,
    rarityIcon: rarityEquipment[1].src,
    typeIcon: searchEquipment[6].src,
    tag: "gloves",
    bonus: {
      meleeMastery: 10,
    },
    labels: ["+10 Maîtrise Mêlée"],
  },
  {
    id: 46,
    name: "Anneau de l'Aigle",
    level: 40,
    rarity: "rare",
    image: Logo,
    rarityIcon: rarityEquipment[2].src,
    typeIcon: searchEquipment[4].src,
    tag: "ring",
    bonus: {
      airMastery: 20,
      critMastery: 10,
    },
    labels: ["+20 Maîtrise Air", "+10 Maîtrise Critique"],
  },
  {
    id: 47,
    name: "Casque du Démon",
    level: 65,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[1].src,
    tag: "headgear",
    bonus: {
      fireMastery: 35,
      block: 15,
    },
    labels: ["+35 Maîtrise Feu", "+15 Parade"],
  },
  {
    id: 48,
    name: "Bouclier de l'Aube",
    level: 55,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[10].src,
    tag: "shield",
    bonus: {
      block: 18,
      fireResist: 10,
    },
    labels: ["+18 Parade", "+10 Résistance Feu"],
  },
  {
    id: 49,
    name: "Plastron du Phénix",
    level: 70,
    rarity: "mythic",
    image: Logo,
    rarityIcon: rarityEquipment[3].src,
    typeIcon: searchEquipment[3].src,
    tag: "breastplate",
    bonus: {
      baseArmor: 170,
      fireMastery: 40,
    },
    labels: ["+170 Armure", "+40 Maîtrise Feu"],
  },
  {
    id: 50,
    name: "Gantelets de l'Ombre",
    level: 60,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[6].src,
    tag: "gloves",
    bonus: {
      critMastery: 25,
      rearMastery: 20,
    },
    labels: ["+25 Maîtrise Critique", "+20 Maîtrise Dos"],
  },
  {
    id: 51,
    name: "Bottes du Voyageur",
    level: 55,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[5].src,
    tag: "boots",
    bonus: {
      mp: 2,
      dodge: 15,
      airMastery: 10,
    },
    labels: ["+2 PM", "+15 Esquive", "+10 Maîtrise Air"],
  },
  {
    id: 52,
    name: "Amulette des Tempêtes",
    level: 40,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[2].src,
    tag: "amulet",
    bonus: {
      fireMastery: 20,
      waterMastery: 20,
      earthMastery: 15,
      airMastery: 15,
      critResist: 10,
    },
    labels: [
      "+20 Maîtrise Feu",
      "+20 Maîtrise Eau",
      "+15 Maîtrise Terre",
      "+15 Maîtrise Air",
      "+10 Résistance Critique",
    ],
  },
  {
    id: 53,
    name: "Ceinture du Dragon",
    level: 65,
    rarity: "mythic",
    image: Logo,
    rarityIcon: rarityEquipment[3].src,
    typeIcon: searchEquipment[8].src,
    tag: "belt",
    bonus: {
      fireMastery: 30,
      meleeMastery: 25,
      baseArmor: 50,
    },
    labels: ["+30 Maîtrise Feu", "+25 Maîtrise Mêlée", "+50 Armure"],
  },
  {
    id: 54,
    name: "Cape de l'Éclipse",
    level: 70,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[6].src,
    tag: "cape",
    bonus: {
      dodge: 25,
      rearMastery: 20,
      rearResist: 15,
      critMastery: 10,
    },
    labels: [
      "+25 Esquive",
      "+20 Maîtrise Dos",
      "+15 Résistance Dos",
      "+10 Maîtrise Critique",
    ],
  },
  {
    id: 55,
    name: "Dague de la Nuit",
    level: 60,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[9].src,
    tag: "dagger",
    bonus: {
      critMastery: 35,
      ap: 1,
    },
    labels: ["+35 Maîtrise Critique", "+1 PA", "Dommage : 14", "Dommage Crit : 22"],
  },
  {
    id: 56,
    name: "Casque du Colosse",
    level: 75,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[1].src,
    tag: "headgear",
    bonus: {
      baseHp: 150,
      block: 20,
      earthResist: 25,
      meleeMastery: 30,
    },
    labels: [
      "+150 PV",
      "+20 Parade",
      "+25 Résistance Terre",
      "+30 Maîtrise Mêlée",
    ],
  },
  {
    id: 57,
    name: "Plastron de l'Éternité",
    level: 80,
    rarity: "relic",
    image: Logo,
    rarityIcon: rarityEquipment[7].src,
    typeIcon: searchEquipment[3].src,
    tag: "breastplate",
    bonus: {
      baseArmor: 250,
      critResist: 20,
      waterMastery: 30,
      fireMastery: 30,
    },
    labels: [
      "+250 Armure",
      "+20 Résistance Critique",
      "+30 Maîtrise Eau",
      "+30 Maîtrise Feu",
    ],
  },
  {
    id: 58,
    name: "Épée de l'Aube",
    level: 85,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[12].src,
    tag: "one-handed",
    bonus: {
      fireMastery: 40,
      critMastery: 20,
      ap: 1,
    },
    labels: [
      "+40 Maîtrise Feu",
      "+20 Maîtrise Critique",
      "+1 PA",
      "Dommage : 20",
      "Dommage Crit : 30",
    ],
  },
  {
    id: 59,
    name: "Bouclier du Gardien",
    level: 70,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[10].src,
    tag: "shield",
    bonus: {
      block: 30,
      earthResist: 20,
      baseArmor: 100,
    },
    labels: ["+30 Parade", "+20 Résistance Terre", "+100 Armure"],
  },
  {
    id: 60,
    name: "Anneau de l'Oracle",
    level: 65,
    rarity: "mythic",
    image: Logo,
    rarityIcon: rarityEquipment[3].src,
    typeIcon: searchEquipment[4].src,
    tag: "ring",
    bonus: {
      wisdom: 25,
      ap: 1,
      critResist: 10,
    },
    labels: ["+25 Sagesse", "+1 PA", "+10 Résistance Critique"],
  },
  {
    id: 61,
    name: "Cape de l'Éternel",
    level: 70,
    rarity: "relic",
    image: Logo,
    rarityIcon: rarityEquipment[7].src,
    typeIcon: searchEquipment[6].src,
    tag: "cape",
    bonus: {
      fireMastery: 30,
      waterMastery: 30,
      rearMastery: 25,
    },
    labels: [
      "+30 Maîtrise Feu",
      "+30 Maîtrise Eau",
      "+25 Maîtrise Dos",
    ],
  },
  {
    id: 62,
    name: "Amulette des Éléments",
    level: 55,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[2].src,
    tag: "amulet",
    bonus: {
      fireMastery: 20,
      airMastery: 20,
      earthMastery: 20,
      waterMastery: 20,
      control: 1,
    },
    labels: [
      "+20 Maîtrise Feu",
      "+20 Maîtrise Air",
      "+20 Maîtrise Terre",
      "+20 Maîtrise Eau",
      "+1 Contrôle",
    ],
  },
  {
    id: 63,
    name: "Ceinture de l'Ours",
    level: 65,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[8].src,
    tag: "belt",
    bonus: {
      baseArmor: 60,
      earthMastery: 25,
      waterResist: 15,
    },
    labels: ["+60 Armure", "+25 Maîtrise Terre", "+15 Résistance Eau"],
  },
  {
    id: 64,
    name: "Gantelets de la Fureur",
    level: 50,
    rarity: "mythic",
    image: Logo,
    rarityIcon: rarityEquipment[3].src,
    typeIcon: searchEquipment[6].src,
    tag: "gloves",
    bonus: {
      meleeMastery: 35,
      critMastery: 20,
    },
    labels: ["+35 Maîtrise Mêlée", "+20 Maîtrise Critique"],
  },
  {
    id: 65,
    name: "Bottes de Vélocité",
    level: 45,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[5].src,
    tag: "boots",
    bonus: {
      mp: 2,
      dodge: 25,
      critResist: 10,
    },
    labels: ["+2 PM", "+25 Esquive", "+10 Résistance Critique"],
  },
  {
    id: 66,
    name: "Épée du Guerrier",
    level: 70,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[12].src,
    tag: "two-handed",
    bonus: {
      meleeMastery: 40,
      critMastery: 25,
      fireMastery: 20,
    },
    labels: [
      "+40 Maîtrise Mêlée",
      "+25 Maîtrise Critique",
      "+20 Maîtrise Feu",
      "Dommage : 25",
      "Dommage Crit : 35",
    ],
  },
  {
    id: 67,
    name: "Amulette du Géant",
    level: 75,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[2].src,
    tag: "amulet",
    bonus: {
      baseHp: 100,
      block: 15,
      control: 1,
    },
    labels: ["+100 PV", "+15 Parade", "+1 Contrôle"],
  },
  {
    id: 68,
    name: "Plastron du Dévoreur",
    level: 80,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[3].src,
    tag: "breastplate",
    bonus: {
      baseArmor: 200,
      waterMastery: 35,
      critResist: 15,
      fireResist: 20,
    },
    labels: [
      "+200 Armure",
      "+35 Maîtrise Eau",
      "+15 Résistance Critique",
      "+20 Résistance Feu",
    ],
  },
  {
    id: 69,
    name: "Casque du Roi",
    level: 85,
    rarity: "relic",
    image: Logo,
    rarityIcon: rarityEquipment[7].src,
    typeIcon: searchEquipment[1].src,
    tag: "headgear",
    bonus: {
      baseHp: 200,
      ap: 1,
      critMastery: 25,
    },
    labels: ["+200 PV", "+1 PA", "+25 Maîtrise Critique"],
  },
  {
    id: 70,
    name: "Anneau du Tigre",
    level: 55,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[4].src,
    tag: "ring",
    bonus: {
      meleeMastery: 25,
      fireMastery: 20,
      critResist: 10,
    },
    labels: ["+25 Maîtrise Mêlée", "+20 Maîtrise Feu", "+10 Résistance Critique"],
  },
  {
    id: 71,
    name: "Bouclier des Tempêtes",
    level: 75,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[10].src,
    tag: "shield",
    bonus: {
      block: 35,
      airMastery: 20,
      baseArmor: 150,
    },
    labels: ["+35 Parade", "+20 Maîtrise Air", "+150 Armure"],
  },
  {
    id: 72,
    name: "Cape de la Brume",
    level: 60,
    rarity: "mythic",
    image: Logo,
    rarityIcon: rarityEquipment[3].src,
    typeIcon: searchEquipment[6].src,
    tag: "cape",
    bonus: {
      dodge: 30,
      rearMastery: 20,
      airResist: 15,
    },
    labels: ["+30 Esquive", "+20 Maîtrise Dos", "+15 Résistance Air"],
  },
  {
    id: 73,
    name: "Plastron du Béhémoth",
    level: 80,
    rarity: "relic",
    image: Logo,
    rarityIcon: rarityEquipment[7].src,
    typeIcon: searchEquipment[3].src,
    tag: "breastplate",
    bonus: {
      baseArmor: 300,
      block: 20,
      waterMastery: 40,
      earthResist: 25,
    },
    labels: [
      "+300 Armure",
      "+20 Parade",
      "+40 Maîtrise Eau",
      "+25 Résistance Terre",
    ],
  },
  {
    id: 74,
    name: "Casque de l'Aigle",
    level: 65,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[1].src,
    tag: "headgear",
    bonus: {
      airMastery: 30,
      critMastery: 15,
    },
    labels: ["+30 Maîtrise Air", "+15 Maîtrise Critique"],
  },
  {
    id: 75,
    name: "Anneau des Cieux",
    level: 70,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[4].src,
    tag: "ring",
    bonus: {
      fireMastery: 20,
      waterMastery: 20,
      critMastery: 25,
    },
    labels: ["+20 Maîtrise Feu", "+20 Maîtrise Eau", "+25 Maîtrise Critique"],
  },
  {
    id: 76,
    name: "Gantelets du Maître",
    level: 60,
    rarity: "relic",
    image: Logo,
    rarityIcon: rarityEquipment[7].src,
    typeIcon: searchEquipment[6].src,
    tag: "gloves",
    bonus: {
      meleeMastery: 40,
      critMastery: 30,
    },
    labels: ["+40 Maîtrise Mêlée", "+30 Maîtrise Critique"],
  },
  {
    id: 77,
    name: "Bouclier des Profondeurs",
    level: 55,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[10].src,
    tag: "shield",
    bonus: {
      waterResist: 35,
      baseArmor: 100,
    },
    labels: ["+35 Résistance Eau", "+100 Armure"],
  },
  {
    id: 78,
    name: "Cape du Chasseur",
    level: 50,
    rarity: "mythic",
    image: Logo,
    rarityIcon: rarityEquipment[3].src,
    typeIcon: searchEquipment[6].src,
    tag: "cape",
    bonus: {
      dodge: 20,
      airMastery: 15,
      critResist: 10,
    },
    labels: ["+20 Esquive", "+15 Maîtrise Air", "+10 Résistance Critique"],
  },
  {
    id: 79,
    name: "Casque du Faucon",
    level: 70,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[1].src,
    tag: "headgear",
    bonus: {
      airMastery: 40,
      rearMastery: 25,
    },
    labels: ["+40 Maîtrise Air", "+25 Maîtrise Dos"],
  },
  {
    id: 80,
    name: "Plastron du Chaos",
    level: 85,
    rarity: "relic",
    image: Logo,
    rarityIcon: rarityEquipment[7].src,
    typeIcon: searchEquipment[3].src,
    tag: "breastplate",
    bonus: {
      baseArmor: 350,
      critResist: 30,
      airMastery: 40,
      earthMastery: 35,
    },
    labels: [
      "+350 Armure",
      "+30 Résistance Critique",
      "+40 Maîtrise Air",
      "+35 Maîtrise Terre",
    ],
  },
  {
    id: 81,
    name: "Anneau de l'Esprit",
    level: 55,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[4].src,
    tag: "ring",
    bonus: {
      wisdom: 30,
      ap: 1,
    },
    labels: ["+30 Sagesse", "+1 PA"],
  },
  {
    id: 82,
    name: "Bottes du Renard",
    level: 60,
    rarity: "mythic",
    image: Logo,
    rarityIcon: rarityEquipment[3].src,
    typeIcon: searchEquipment[5].src,
    tag: "boots",
    bonus: {
      mp: 2,
      dodge: 25,
      fireResist: 15,
    },
    labels: ["+2 PM", "+25 Esquive", "+15 Résistance Feu"],
  },
  {
    id: 83,
    name: "Gantelets du Jugement",
    level: 65,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[6].src,
    tag: "gloves",
    bonus: {
      meleeMastery: 35,
      earthMastery: 20,
    },
    labels: ["+35 Maîtrise Mêlée", "+20 Maîtrise Terre"],
  },
  {
    id: 84,
    name: "Amulette de l'Ordre",
    level: 70,
    rarity: "relic",
    image: Logo,
    rarityIcon: rarityEquipment[7].src,
    typeIcon: searchEquipment[2].src,
    tag: "amulet",
    bonus: {
      fireMastery: 30,
      waterMastery: 30,
      ap: 1,
    },
    labels: ["+30 Maîtrise Feu", "+30 Maîtrise Eau", "+1 PA"],
  },
  {
    id: 85,
    name: "Plastron du Juge",
    level: 80,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[3].src,
    tag: "breastplate",
    bonus: {
      baseArmor: 200,
      critMastery: 25,
      block: 20,
    },
    labels: ["+200 Armure", "+25 Maîtrise Critique", "+20 Parade"],
  },
  {
    id: 86,
    name: "Bouclier de l'Aurore",
    level: 60,
    rarity: "mythic",
    image: Logo,
    rarityIcon: rarityEquipment[3].src,
    typeIcon: searchEquipment[10].src,
    tag: "shield",
    bonus: {
      block: 25,
      waterMastery: 20,
    },
    labels: ["+25 Parade", "+20 Maîtrise Eau"],
  },
  {
    id: 87,
    name: "Casque du Gladiateur",
    level: 75,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[1].src,
    tag: "headgear",
    bonus: {
      meleeMastery: 30,
      baseHp: 150,
    },
    labels: ["+30 Maîtrise Mêlée", "+150 PV"],
  },
  {
    id: 88,
    name: "Anneau du Soleil",
    level: 65,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[4].src,
    tag: "ring",
    bonus: {
      fireMastery: 25,
      critMastery: 20,
    },
    labels: ["+25 Maîtrise Feu", "+20 Maîtrise Critique"],
  },
  {
    id: 89,
    name: "Cape de l'Élémentaire",
    level: 70,
    rarity: "relic",
    image: Logo,
    rarityIcon: rarityEquipment[7].src,
    typeIcon: searchEquipment[6].src,
    tag: "cape",
    bonus: {
      fireMastery: 25,
      waterMastery: 25,
      rearMastery: 20,
    },
    labels: [
      "+25 Maîtrise Feu",
      "+25 Maîtrise Eau",
      "+20 Maîtrise Dos",
    ],
  },
  {
    id: 90,
    name: "Gantelets du Loup",
    level: 60,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[6].src,
    tag: "gloves",
    bonus: {
      critMastery: 20,
      earthMastery: 15,
      rearMastery: 10,
    },
    labels: ["+20 Maîtrise Critique", "+15 Maîtrise Terre", "+10 Maîtrise Dos"],
  },
  {
    id: 91,
    name: "Bouclier de la Justice",
    level: 65,
    rarity: "mythic",
    image: Logo,
    rarityIcon: rarityEquipment[3].src,
    typeIcon: searchEquipment[10].src,
    tag: "shield",
    bonus: {
      block: 30,
      fireResist: 25,
    },
    labels: ["+30 Parade", "+25 Résistance Feu"],
  },
  {
    id: 92,
    name: "Plastron de l'Implacable",
    level: 85,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[3].src,
    tag: "breastplate",
    bonus: {
      baseArmor: 300,
      earthMastery: 35,
      block: 25,
    },
    labels: ["+300 Armure", "+35 Maîtrise Terre", "+25 Parade"],
  },
  {
    id: 93,
    name: "Casque de l'Inquisiteur",
    level: 90,
    rarity: "relic",
    image: Logo,
    rarityIcon: rarityEquipment[7].src,
    typeIcon: searchEquipment[1].src,
    tag: "headgear",
    bonus: {
      baseHp: 250,
      critMastery: 40,
      ap: 1,
    },
    labels: ["+250 PV", "+40 Maîtrise Critique", "+1 PA"],
  },
  {
    id: 94,
    name: "Anneau du Destructeur",
    level: 70,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[4].src,
    tag: "ring",
    bonus: {
      fireMastery: 35,
      meleeMastery: 30,
    },
    labels: ["+35 Maîtrise Feu", "+30 Maîtrise Mêlée"],
  },
  {
    id: 95,
    name: "Cape de l'Assassin",
    level: 75,
    rarity: "mythic",
    image: Logo,
    rarityIcon: rarityEquipment[3].src,
    typeIcon: searchEquipment[6].src,
    tag: "cape",
    bonus: {
      dodge: 35,
      rearMastery: 25,
    },
    labels: ["+35 Esquive", "+25 Maîtrise Dos"],
  },
  {
    id: 96,
    name: "Gantelets de l'Imposteur",
    level: 80,
    rarity: "relic",
    image: Logo,
    rarityIcon: rarityEquipment[7].src,
    typeIcon: searchEquipment[6].src,
    tag: "gloves",
    bonus: {
      critMastery: 30,
      ap: 1,
    },
    labels: ["+30 Maîtrise Critique", "+1 PA"],
  },
  {
    id: 97,
    name: "Bouclier du Chevalier",
    level: 65,
    rarity: "epic",
    image: Logo,
    rarityIcon: rarityEquipment[6].src,
    typeIcon: searchEquipment[10].src,
    tag: "shield",
    bonus: {
      block: 25,
      earthResist: 20,
    },
    labels: ["+25 Parade", "+20 Résistance Terre"],
  },
  {
    id: 98,
    name: "Plastron du Maelström",
    level: 90,
    rarity: "relic",
    image: Logo,
    rarityIcon: rarityEquipment[7].src,
    typeIcon: searchEquipment[3].src,
    tag: "breastplate",
    bonus: {
      baseArmor: 400,
      airMastery: 50,
      critMastery: 35,
    },
    labels: ["+400 Armure", "+50 Maîtrise Air", "+35 Maîtrise Critique"],
  },
  {
    id: 99,
    name: "Anneau du Roi-Sorcier",
    level: 80,
    rarity: "legendary",
    image: Logo,
    rarityIcon: rarityEquipment[4].src,
    typeIcon: searchEquipment[4].src,
    tag: "ring",
    bonus: {
      fireMastery: 40,
      ap: 1,
    },
    labels: ["+40 Maîtrise Feu", "+1 PA"],
  },
  {
    id: 100,
    name: "Casque du Dragon Éternel",
    level: 90,
    rarity: "relic",
    image: Logo,
    rarityIcon: rarityEquipment[7].src,
    typeIcon: searchEquipment[1].src,
    tag: "headgear",
    bonus: {
      baseHp: 300,
      critMastery: 50,
      fireMastery: 40,
    },
    labels: ["+300 PV", "+50 Maîtrise Critique", "+40 Maîtrise Feu"],
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
      dispatch(
        setTempRingItem({
          src: item.image,
          alt: item.name,
          equipmentValues: item.bonus,
        })
      );
      setShowModal(true);
    } else {
      dispatch(
        equipItem({
          tag: item.tag,
          item: {
            src: item.image,
            alt: item.name,
            equipmentValues: item.bonus,
          },
        })
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