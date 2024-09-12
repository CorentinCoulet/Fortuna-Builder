// Importation des classes
import Cra from "./assets/class/cra.webp";
import Ecaflip from "./assets/class/ecaflip.webp";
import Eliotrope from "./assets/class/eliotrope.webp";
import Eniripsa from "./assets/class/eniripsa.webp";
import Enutrof from "./assets/class/enutrof.webp";
import Feca from "./assets/class/feca.webp";
import Huppermage from "./assets/class/huppermage.webp";
import Iop from "./assets/class/iop.webp";
import Osamodas from "./assets/class/osamodas.webp";
import Ouginak from "./assets/class/ouginak.webp";
import Pandawa from "./assets/class/pandawa.webp";
import Roublard from "./assets/class/roublard.webp";
import Sacrieur from "./assets/class/sacrieur.webp";
import Sadida from "./assets/class/sadida.webp";
import Sram from "./assets/class/sram.webp";
import Steameur from "./assets/class/steameur.webp";
import Xelor from "./assets/class/xelor.webp";
import Zobal from "./assets/class/zobal.webp";

export const Images = [
    Cra,
    Ecaflip,
    Eliotrope,
    Eniripsa,
    Enutrof,
    Feca,
    Huppermage,
    Iop,
    Osamodas,
    Ouginak,
    Pandawa,
    Roublard,
    Sacrieur,
    Sadida,
    Sram,
    Steameur,
    Xelor,
    Zobal
];

// Importation des emplacements d'équipements
import Headgear from './assets/equipements/headgear.webp';
import Amulet from './assets/equipements/amulet.webp';
import Cape from './assets/equipements/cape.webp';
import Epaulettes from './assets/equipements/epaulettes.webp';
import Breastplate from './assets/equipements/breastplate.webp';
import Belt from './assets/equipements/belt.webp';
import RightRing from './assets/equipements/right_ring.webp';
import LeftRing from './assets/equipements/left_ring.webp';
import Boots from './assets/equipements/boots.webp';
import RightHand from './assets/equipements/right_hand.webp';
import LeftHand from './assets/equipements/left_hand.webp';
import Emblem from './assets/equipements/emblem.webp';
import Pet from './assets/equipements/pet.webp';

export const Equipments = [
    { src: Headgear, alt: 'Headgear' },
    { src: Amulet, alt: 'Amulet' },
    { src: Cape, alt: 'Cape' },
    { src: Epaulettes, alt: 'Epaulettes' },
    { src: Breastplate, alt: 'Breastplate' },
    { src: Belt, alt: 'Belt' },
    { src: RightRing, alt: 'Right Ring' },
    { src: LeftRing, alt: 'Left Ring' },
    { src: Boots, alt: 'Boots' },
    { src: RightHand, alt: 'Right Hand' },
    { src: LeftHand, alt: 'Left Hand' },
    { src: Emblem, alt: 'Emblem' },
    { src: Pet, alt: 'Pet' },
    { src: Pet, alt: 'Mount' },
];

// Importation des stats globales
import Hp from './assets/capacites/hp.webp';
import Shield from './assets/capacites/armor.webp';
import Pa from './assets/capacites/pa.webp';
import Pm from './assets/capacites/pm.webp';
import Pw from './assets/capacites/pw.webp';

// Importation des maitrises/résistances élémentaires
import WaterResistance from './assets/elements/aqua_resistance.webp';
import WaterMastery from './assets/elements/water.webp';
import EarthResistance from './assets/elements/earth_resistance.webp';
import EarthMastery from './assets/elements/earth.webp';
import WindResistance from './assets/elements/wind_resistance.webp';
import WindMastery from './assets/elements/wind.webp';
import FireResistance from './assets/elements/fire_resistance.webp';
import FireMastery from './assets/elements/fire.webp';
import ArmorReceived from './assets/elements/received_armor.webp';
import ArmorGiven from './assets/elements/given_armor.webp';

// Importation des stats spécifiques
import PercentDamage from './assets/maitrises/damage_dealt.webp';
import PercentHeal from './assets/maitrises/heals.webp';
import PercentCrit from './assets/maitrises/ch.webp';
import Block from './assets/maitrises/block.webp';
import Initiative from './assets/maitrises/initiative.webp';
import Po from './assets/maitrises/range.webp';
import Dodge from './assets/maitrises/dodge.webp';
import Lock from './assets/maitrises/lock.webp';
import Wisdom from './assets/maitrises/wisdom.webp';
import Prospecting from './assets/maitrises/prospecting.webp';
import Control from './assets/maitrises/control.webp';
import Will from './assets/maitrises/will.webp';

// Importations des maitrises secondaires
import CritMastery from './assets/maitrises/crit_mastery.webp';
import CritResist from './assets/maitrises/rear_resist.webp';
import RearMastery from './assets/maitrises/rear_mastery.webp';
import RearResist from './assets/maitrises/rear_resist.webp';
import MeleeMastery from './assets/maitrises/melee_mastery.webp';
import DistanceMastery from './assets/maitrises/distance_mastery.webp';
import HealMastery from './assets/maitrises/heals.webp';
import BerserkMastery from './assets/maitrises/berserk_mastery.webp';

export const PrimaryStats: { [key: number]: { src: string; alt: string } } = {
    1: { src: Hp, alt: 'PdV' },
    2: { src: Shield, alt: 'Armure' },
    3: { src: Pa, alt: 'PA' },
    4: { src: Pm, alt: 'PM' },
    5: { src: Pw, alt: 'PW' },

    6: { src: WaterMastery, alt: 'Maîtrise Eau' },
    7: { src: WaterResistance, alt: 'Résistance Eau' },
    8: { src: EarthMastery, alt: 'Maîtrise Terre' },
    9: { src: EarthResistance, alt: 'Résistance Terre' },
    10: { src: WindMastery, alt: 'Maîtrise Air' },
    11: { src: WindResistance, alt: 'Résistance Air' },
    12: { src: FireMastery, alt: 'Maîtrise Feu' },
    13: { src: FireResistance, alt: 'Résistance Feu' },
    14: { src: ArmorReceived, alt: 'Armure reçue' },
    15: { src: ArmorGiven, alt: 'Armure donnée' },

    16: { src: PercentDamage, alt: 'Dégâts en %' },
    17: { src: PercentHeal, alt: 'Soins en %' },
    18: { src: PercentCrit, alt: 'Critique en %' },
    19: { src: Block, alt: 'Blocage' },
    20: { src: Initiative, alt: 'Initiative' },
    21: { src: Po, alt: 'Portée' },
    22: { src: Dodge, alt: 'Esquive' },
    23: { src: Lock, alt: 'Tacle' },
    24: { src: Wisdom, alt: 'Sagesse' },
    25: { src: Prospecting, alt: 'Prospection' },
    26: { src: Control, alt: 'Contrôle' },
    27: { src: Will, alt: 'Volonté' },

    28: { src: CritMastery, alt: 'Maîtrise critique' },
    29: { src: CritResist, alt: 'Résistance critique' },
    30: { src: RearMastery, alt: 'Maîtrise dos' },
    31: { src: RearResist, alt: 'Résistance dos' },
    32: { src: MeleeMastery, alt: 'Maîtrise mêlée' },
    33: { src: DistanceMastery, alt: 'Maîtrise distance' },
    34: { src: HealMastery, alt: 'Maîtrise soin' },
    35: { src: BerserkMastery, alt: 'Maîtrise berserk' }
};

// Importation des aptitudes
import Intelligence from './assets/iconsAptitudes/intelligence.webp';
import Strength from './assets/iconsAptitudes/strength.webp';
import Agility from './assets/iconsAptitudes/agility.webp';
import Chance from './assets/iconsAptitudes/chance.webp';
import Major from './assets/iconsAptitudes/major.webp';

export const nameCategories = {
    1: { src: Intelligence, alt: 'Intelligence' },
    2: { src: Strength, alt: 'Strength' },
    3: { src: Agility, alt: 'Agility' },
    4: { src: Chance, alt: 'Chance' },
    5: { src: Major, alt: 'Major' },
}

import IntelligenceHover from './assets/iconsAptitudes/intelligence_over.webp';
import StrengthHover from './assets/iconsAptitudes/strength_over.webp';
import AgilityHover from './assets/iconsAptitudes/agility_over.webp';
import ChanceHover from './assets/iconsAptitudes/chance_over.webp';
import MajorHover from './assets/iconsAptitudes/major_over.webp';

export const nameCategoriesHover = {
    1: { src: IntelligenceHover, alt: 'Intelligence hover' },
    2: { src: StrengthHover, alt: 'Strength hover' },
    3: { src: AgilityHover, alt: 'Agility hover' },
    4: { src: ChanceHover, alt: 'Chance hover' },
    5: { src: MajorHover, alt: 'Major hover' },
}

// Branche Intelligence
import PercentHpApt from './assets/aptitudes/apt_hp.webp';
import ElementalResistanceApt from './assets/aptitudes/apt_reselem.webp';
import BareerApt from './assets/aptitudes/apt_bareer.webp';
import PercentHealthReceivedApt from './assets/aptitudes/apt_healthreceived.webp';
import PercentHpAsArmorApt from './assets/aptitudes/apt_hpasarmor.webp';

import PercentHpAptHover from './assets/capacites/hp.webp';
import ElementalResistanceAptHover from './assets/capacites/elementalShield.webp';
import BareerAptHover from './assets/capacites/bareer-removebg.webp';
import PercentHealthReceivedAptHover from './assets/capacites/healReceivedIcon-remove.webp';
import PercentHpAsArmorAptHover from './assets/capacites/armor.webp';

// Branche Force
import ElementalMasteryApt from './assets/aptitudes/apt_elemmastery.webp';
import MeleeMasteryApt from './assets/aptitudes/apt_masterymelee.webp';
import DistanceMasteryApt from './assets/aptitudes/apt_masteryrange.webp';
import RawHpApt from './assets/aptitudes/apt_rawhp.webp';

// Branche Agilité
import LockApt from './assets/aptitudes/apt_tackle.webp';
import DodgeApt from './assets/aptitudes/apt_dodge.webp';
import InitiativeApt from './assets/aptitudes/apt_init.webp';
import LockAndDodgeApt from './assets/aptitudes/apt_tackledodge.webp';
import WillApt from './assets/aptitudes/apt_will.webp';

// Branche Chance
import CriticalApt from './assets/aptitudes/apt_criticalhit.webp';
import BlockApt from './assets/aptitudes/apt_block.webp';
import CriticalMasteryApt from './assets/aptitudes/apt_masterycritical.webp';
import RearMasterypApt from './assets/aptitudes/apt_rearmastery.webp';
import BerserkMasteryApt from './assets/aptitudes/apt_berserkmastery.webp';
import HealthMasteryApt from './assets/aptitudes/apt_masteryhealth.webp';
import RearResistanceApt from './assets/aptitudes/apt_rearresist.webp';
import CriticalResistanceApt from './assets/aptitudes/apt_resistcritical.webp';

// Branche Majeur
import PaApt from './assets/aptitudes/apt_pa.webp';
import PmApt from './assets/aptitudes/apt_pm.webp';
import PoApt from './assets/aptitudes/apt_range.webp';
import WpApt from './assets/aptitudes/apt_wakfupoint.webp';
import ControlApt from './assets/aptitudes/apt_control.webp';
import PercentDamageApt from './assets/aptitudes/apt_rawdamages.webp';
import ElementalResistanceMajorApt from './assets/aptitudes/apt_resistanceelem.webp';

export const aptLogos = {
    1: {
        1: { src: PercentHpApt, alt: '% Points de Vie' },
        2: { src: ElementalResistanceApt, alt: 'Résistance Elémentaire' },
        3: { src: BareerApt, alt: 'Barrière' },
        4: { src: PercentHealthReceivedApt, alt: '% Soins Reçus' },
        5: { src: PercentHpAsArmorApt, alt: '% Points de Vie en Armure' },
    },
    2: {
        1: { src: ElementalMasteryApt, alt: 'Maîtrise Elémentaire' },
        2: { src: MeleeMasteryApt, alt: 'Maîtrise Mêlée' },
        3: { src: DistanceMasteryApt, alt: 'Maîtrise Distance' },
        4: { src: RawHpApt, alt: 'Points de Vie' },
    },
    3: {
        1: { src: LockApt, alt: 'Tacle' },
        2: { src: DodgeApt, alt: 'Esquive' },
        3: { src: InitiativeApt, alt: 'Initiative' },
        4: { src: LockAndDodgeApt, alt: 'Tacle et Esquive' },
        5: { src: WillApt, alt: 'Volonté' },
    },
    4: {
        1: { src: CriticalApt, alt: 'Critique' },
        2: { src: BlockApt, alt: 'Parade' },
        3: { src: CriticalMasteryApt, alt: 'Maîtrise Critique' },
        4: { src: RearMasterypApt, alt: 'Maîtrise Dos' },
        5: { src: BerserkMasteryApt, alt: 'Maîtrise Berserk' },
        6: { src: HealthMasteryApt, alt: 'Maîtrise Soin' },
        7: { src: RearResistanceApt, alt: 'Résistance Dos' },
        8: { src: CriticalResistanceApt, alt: 'Résistance Critique' },
    },
    5: {
        1: { src: PaApt, alt: 'Point d\'Action' },
        2: { src: PmApt, alt: 'Point de Mouvement' },
        3: { src: PoApt, alt: 'Portée' },
        4: { src: WpApt, alt: 'Point de Wakfu' },
        5: { src: ControlApt, alt: 'Contrôle' },
        6: { src: PercentDamageApt, alt: '% Dommages Infligés' },
        7: { src: ElementalResistanceMajorApt, alt: 'Résistance Elementaire' },
    },
}
export const aptLogosHover = {
    1: {
        1: { src: PercentHpAptHover, alt: '% Points de Vie' },
        2: { src: ElementalResistanceAptHover, alt: 'Resistance élémentaire' },
        3: { src: BareerAptHover, alt: 'Barrière' },
        4: { src: PercentHealthReceivedAptHover, alt: '% Soins reçus' },
        5: { src: PercentHpAsArmorAptHover, alt: '% Points de Vie en Armure' },
    },
    2: {
        1: { src: PercentDamage, alt: 'Percent damage' },
        2: { src: MeleeMastery, alt: 'melee mastery' },
        3: { src: DistanceMastery, alt: 'distance mastery' },
        4: { src: PercentHpAptHover, alt: '% Points de Vie' },
    },
    3: {
        1: { src: Dodge, alt: 'Esquive' },
        2: { src: Lock, alt: 'Tacle' },
        3: { src: Initiative, alt: 'Initiative' },
        4: {
            1: { src: Dodge, alt: 'Esquive' },
            2: { src: Lock, alt: 'Tacle' },
        },
        5: { src: Will, alt: 'Volonté' },
    },
    4: {
        1: { src: PercentCrit, alt: '% Coup Critique' },
        2: { src: Block, alt: '% Parade' },
        3: { src: CritMastery, alt: 'Maîtrise Critique' },
        4: { src: RearMastery, alt: 'Maîtrise Dos' },
        5: { src: BerserkMastery, alt: 'Maîtrise Berserk' },
        6: { src: HealMastery, alt: 'Maîtrise Soin' },
        7: { src: RearResist, alt: 'Résistance Dos' },
        8: { src: CritResist, alt: 'Résistance Critique' },
    },
    5: {
        1: { src: Pa, alt: 'Point d\'Action' },
        2: {
            1: { src: PercentDamage, alt: 'Point de Dommage' },
            2: { src: Pm, alt: 'Point de Mouvement' },
        },
        3: {
            1: { src: PercentDamage, alt: 'Point de Dommage' },
            2: { src: Po, alt: 'Portée' },
        },
        4: { src: Pw, alt: 'Point de Wakfu' },
        5: {
            1: { src: PercentDamage, alt: 'Point de Dommage' },
            2: { src: Control, alt: 'Contrôle' },
        },
        6: { src: PercentDamage, alt: '% Dommages Infligés' },
        7: { src: ElementalResistanceAptHover, alt: 'Résistance Elémentaire' },
    }
}

// Importation minus plus 0
import Minus from './assets/aptitudes/minus.webp';
import Plus from './assets/aptitudes/plus.webp';
import Zero from './assets/aptitudes/zero.webp';

export const selectors = {
    1: { src: Minus, alt: 'Minus' },
    2: { src: Plus, alt: 'Plus' },
    3: { src: Zero, alt: 'Zero' },
}

// Importation des cases d'enchantement
import ShardBlueActived from './assets/enchant/shard_blue_full.webp';
import ShardGreenActived from './assets/enchant/shard_green_full.webp';
import ShardRedActived from './assets/enchant/shard_red_full.webp';
import ShardWhiteActived from './assets/enchant/shard_white_full.webp';
import ShardWhiteEmpty from './assets/enchant/shard_white_empty.webp';
import Epic from './assets/enchant/epic.webp';
import Relic from './assets/enchant/relic.webp';

export const shards = {
    1: { src: ShardRedActived, alt: 'Shard Red Actived' },
    2: { src: ShardGreenActived, alt: 'Shard Green Actived' },
    3: { src: ShardBlueActived, alt: 'Shard Blue Actived' },
    4: { src: ShardWhiteActived, alt: 'Shard White Actived' },
    5: { src: ShardWhiteEmpty, alt: 'Shard White Empty' },
    6: { src: Epic, alt: 'Epique' },
    7: { src: Relic, alt: 'Relique' },
}

// Importations des parchemins
import GreenParchment from './assets/sublimations/greenParchment.webp';
import OrangeParchment from './assets/sublimations/orangeParchment.webp';
import WhiteParchment from './assets/sublimations/whiteParchment.webp';

export const parchments = {
    1: { src: GreenParchment, alt: 'Green Parchment' },
    2: { src: OrangeParchment, alt: 'Orange Parchment' },
    3: { src: WhiteParchment, alt: 'White Parchment' },
}

// Importation des icons d'équipement
import HelmetSearch from './assets/emplacementEquipements/helmet.webp';
import NecklaceSearch from './assets/emplacementEquipements/necklace.webp';
import BreastplateSearch from './assets/emplacementEquipements/breastplate.webp';
import RingSearch from './assets/emplacementEquipements/ring.webp';
import BootsSearch from './assets/emplacementEquipements/boots.webp';
import CapeSearch from './assets/emplacementEquipements/cape.webp';
import EpaulettesSearch from './assets/emplacementEquipements/epaulettes.webp';
import BeltSearch from './assets/emplacementEquipements/belt.webp';
import TwoHandedSearch from './assets/emplacementEquipements/two_handed_weapon.webp';

import DaggerSearch from "./assets/emplacementEquipements/dagger.webp";
import EmblemSearch from "./assets/emplacementEquipements/emblem.webp";
import MountSearch from "./assets/emplacementEquipements/mount.webp";
import PetSearch from "./assets/emplacementEquipements/pet.webp";
import ToolsSearch from "./assets/emplacementEquipements/tools.webp";
import ShieldSearch from "./assets/emplacementEquipements/shield.webp";
import OneHandedSearch from "./assets/emplacementEquipements/one_handed_weapon.webp";

export const runesEquipment = {
    0: { src: HelmetSearch, alt: 'Casque' },
    1: { src: NecklaceSearch, alt: 'Amulette' },
    2: { src: BreastplateSearch, alt: 'Plastron' },
    3: { src: RingSearch, alt: 'Anneau' },
    4: { src: RingSearch, alt: 'Anneau' },
    5: { src: BootsSearch, alt: 'Bottes' },
    6: { src: CapeSearch, alt: 'Cape' },
    7: { src: EpaulettesSearch, alt: 'Epaulettes' },
    8: { src: BeltSearch, alt: 'Ceinture' },
    9: { src: TwoHandedSearch, alt: 'Arme à 2 Mains' },
}

export const enchantmentEquipment = {
    1: {
        1: { src: HelmetSearch, alt: 'Casque' },
        2: { src: CapeSearch, alt: 'Cape' },
    },
    2: {
        1: { src: BeltSearch, alt: 'Ceinture' },
        2: { src: OneHandedSearch, alt: 'Arme 1 main' },
        3: { src: TwoHandedSearch, alt: 'Arme 2 mains' },
    },
    3: {
        1: { src: NecklaceSearch, alt: 'Amulette' },
        2: { src: CapeSearch, alt: 'Cape' },
    },
    4: {
        1: { src: BreastplateSearch, alt: 'Plastron' },
        2: { src: BootsSearch, alt: 'Bottes' },
    },
    5: {
        1: { src: EpaulettesSearch, alt: 'Epaulettes' },
        2: { src: OneHandedSearch, alt: 'Arme 1 main' },
        3: { src: TwoHandedSearch, alt: 'Arme 2 mains' },
    },
    6: {
        1: { src: BeltSearch, alt: 'Ceinture' },
        2: { src: BootsSearch, alt: 'Bottes' },
    },
    7: {
        1: { src: RingSearch, alt: 'Anneau' },
        2: { src: RingSearch, alt: 'Anneau' },
    },
    8: {
        1: { src: NecklaceSearch, alt: 'Amulette' },
        2: { src: CapeSearch, alt: 'Cape' },
    },
    9: {
        1: { src: BreastplateSearch, alt: 'Plastron' },
        2: { src: BeltSearch, alt: 'Ceinture' },
    },
    10: {
        1: { src: BreastplateSearch, alt: 'Plastron' },
        2: { src: CapeSearch, alt: 'Cape' },
    },
    11: {
        1: { src: RingSearch, alt: 'Anneau' },
        2: { src: RingSearch, alt: 'Anneau' },
    },
    12: {
        1: { src: EpaulettesSearch, alt: 'Epaulettes' },
        2: { src: BreastplateSearch, alt: 'Plastron' },
    },
    13: {
        1: { src: BreastplateSearch, alt: 'Plastron' },
        2: { src: CapeSearch, alt: 'Cape' },
    },
    14: {
        1: { src: HelmetSearch, alt: 'Casque' },
        2: { src: OneHandedSearch, alt: 'Arme 1 main' },
        3: { src: TwoHandedSearch, alt: 'Arme 2 mains' },
    },
    15: {
        1: { src: EpaulettesSearch, alt: 'Epaulettes' },
        2: { src: NecklaceSearch, alt: 'Amulette' },
    },
}

export const searchEquipment = {
    1: { src: HelmetSearch, alt: 'Casque', tag: 'headgear' },
    2: { src: NecklaceSearch, alt: 'Amulette', tag: 'amulet' },
    3: { src: BreastplateSearch, alt: 'Plastron', tag: 'breastplate' },
    4: { src: RingSearch, alt: 'Anneau', tag: 'ring' },
    5: { src: BootsSearch, alt: 'Bottes', tag: 'boots' },
    6: { src: CapeSearch, alt: 'Cape', tag: 'cape' },
    7: { src: EpaulettesSearch, alt: 'Epaulettes', tag: 'epaulettes' },
    8: { src: BeltSearch, alt: 'Ceinture', tag: 'belt' },
    9: { src: DaggerSearch, alt: 'Dague', tag: 'dagger' },
    10: { src: ShieldSearch, alt: 'Bouclier', tag: 'shield' },
    11: { src: OneHandedSearch, alt: 'Arme 1 main', tag: 'one-handed' },
    12: { src: TwoHandedSearch, alt: 'Arme 2 mains', tag: 'two-handed' },
    13: { src: EmblemSearch, alt: 'Emblème', tag: 'emblem' },
    14: { src: MountSearch, alt: 'Monture', tag: 'mount' },
    15: { src: PetSearch, alt: 'Familier', tag: 'pet' },
    16: { src: ToolsSearch, alt: 'Outils', tag: 'tools' },
};

// Importation des Sublimations épiques
import Epic1 from './assets/sublimations/epic/type_1.webp';
import Epic2 from './assets/sublimations/epic/type_2.webp';
import Epic3 from './assets/sublimations/epic/type_3.webp';
import Epic4 from './assets/sublimations/epic/type_4.webp';
import Epic5 from './assets/sublimations/epic/type_5.webp';
import Epic6 from './assets/sublimations/epic/type_6.webp';
import Epic7 from './assets/sublimations/epic/type_7.webp';
import Epic8 from './assets/sublimations/epic/type_8.webp';
import Epic9 from './assets/sublimations/epic/type_9.webp';
import Epic10 from './assets/sublimations/epic/type_10.webp';

export const sublimationsEpic = {
    1: { src: Epic1, alt: 'Epique 1' },
    2: { src: Epic2, alt: 'Epique 2' },
    3: { src: Epic3, alt: 'Epique 3' },
    4: { src: Epic4, alt: 'Epique 4' },
    5: { src: Epic5, alt: 'Epique 5' },
    6: { src: Epic6, alt: 'Epique 6' },
    7: { src: Epic7, alt: 'Epique 7' },
    8: { src: Epic8, alt: 'Epique 8' },
    9: { src: Epic9, alt: 'Epique 9' },
    10: { src: Epic10, alt: 'Epique 10' },
}

// Importation des Sublimations reliques
import Relic1 from './assets/sublimations/relic/type_1.webp';
import Relic2 from './assets/sublimations/relic/type_2.webp';
import Relic3 from './assets/sublimations/relic/type_3.webp';
import Relic4 from './assets/sublimations/relic/type_4.webp';
import Relic5 from './assets/sublimations/relic/type_5.webp';
import Relic6 from './assets/sublimations/relic/type_6.webp';
import Relic7 from './assets/sublimations/relic/type_7.webp';
import Relic8 from './assets/sublimations/relic/type_8.webp';
import Relic9 from './assets/sublimations/relic/type_9.webp';
import Relic10 from './assets/sublimations/relic/type_10.webp';

export const sublimationsRelic = {
    1: { src: Relic1, alt: 'Relique 1' },
    2: { src: Relic2, alt: 'Relique 2' },
    3: { src: Relic3, alt: 'Relique 3' },
    4: { src: Relic4, alt: 'Relique 4' },
    5: { src: Relic5, alt: 'Relique 5' },
    6: { src: Relic6, alt: 'Relique 6' },
    7: { src: Relic7, alt: 'Relique 7' },
    8: { src: Relic8, alt: 'Relique 8' },
    9: { src: Relic9, alt: 'Relique 9' },
    10: { src: Relic10, alt: 'Relique 10' },
}

// Importation des raretés d'équipement
import CommonRarity from './assets/rarity/common.webp';
import RareRarity from './assets/rarity/rare.webp';
import MythicRarity from './assets/rarity/mythic.webp';
import LegendaryRarity from './assets/rarity/legendary.webp';
import MemoryRarity from './assets/rarity/memory.webp';
import RelicRarity from './assets/rarity/relic.webp';
import EpicRarity from './assets/rarity/epic.webp';

export const rarityEquipment = {
    1: { src: CommonRarity, alt: "Commun", tag: "common", color: "#cccccc" },  // Blanc clair pour commun
    2: { src: RareRarity, alt: "Rare", tag: "rare", color: "#006400" },        // Vert légèrement foncé pour rare
    3: { src: MythicRarity, alt: "Mythique", tag: "mythic", color: "#ff8c00" }, // Orange légèrement foncé pour mythique
    4: { src: LegendaryRarity, alt: "Légendaire", tag: "legendary", color: "#eac91be6" }, // Or pour légendaire (jaune clair)
    5: { src: MemoryRarity, alt: "Souvenir", tag: "memory", color: "#87ceeb" }, // Bleu ciel pour souvenir
    6: { src: EpicRarity, alt: "Epique", tag: "epic", color: "#ffb6c1" },       // Rose clair pour épique
    7: { src: RelicRarity, alt: "Relique", tag: "relic", color: "#6a0dad" },    // Violet légèrement foncé pour relique
};
