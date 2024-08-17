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
import Sadida from"./assets/class/sadida.webp";
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
export const PrimaryStats: { [key: number]: {src: string; alt: string } } = {
    1: { src : Hp, alt: 'Hp'},
    2: { src : Shield, alt: 'Shield'},
    3: { src : Pa, alt: 'Pa'},
    4: { src : Pm, alt: 'Pm'},
    5: { src : Pw, alt: 'Pw'},

    6: { src : WaterMastery, alt: 'Water mastery'},
    7: { src : WaterResistance, alt: 'Water resistance'},
    8: { src : EarthMastery, alt: 'Earth mastery'},
    9: { src : EarthResistance, alt: 'Earth resistance'},
    10: { src : WindMastery, alt: 'Wind mastery'},
    11: { src : WindResistance, alt: 'Wind resistance'},
    12: { src : FireMastery, alt: 'Fire mastery'},
    13: { src : FireResistance, alt: 'Fire resistance'},
    14: { src : ArmorReceived, alt: 'Armor received'},
    15: { src : ArmorGiven, alt: 'Armor given'},

    16: { src : PercentDamage, alt: 'Percent damage'},
    17: { src : PercentHeal, alt: 'Percent heal'},
    18: { src : PercentCrit, alt: 'Percent crit'},
    19: { src : Block, alt: 'Block'},
    20: { src : Initiative, alt: 'Initiative'},
    21: { src : Po, alt: 'Po'},
    22: { src : Dodge, alt: 'Dodge'},
    23: { src : Lock, alt: 'Lock'},
    24: { src : Wisdom, alt: 'Wisdom'},
    25: { src : Prospecting, alt: 'Prospecting'},
    26: { src : Control, alt: 'Control'},
    27: { src : Will, alt: 'Will'},

    28: { src : CritMastery, alt: 'Critical mastery'},
    29: { src : CritResist, alt: 'Critical resistance'},
    30: { src : RearMastery, alt: 'Rear mastery'},
    31: { src : RearResist, alt: 'Rear resistance'},
    32: { src : MeleeMastery, alt: 'melee mastery'},
    33: { src : DistanceMastery, alt: 'distance mastery'},
    34: { src : HealMastery, alt: 'heal mastery'},
    35: { src : BerserkMastery, alt: 'berserk mastery'},
};

// Importantion des aptitudes
import Intelligence from './assets/iconsAptitudes/intelligence.webp';
import Strength from './assets/iconsAptitudes/strength.webp';
import Agility from './assets/iconsAptitudes/agility.webp';
import Chance from './assets/iconsAptitudes/chance.webp';
import Major from './assets/iconsAptitudes/major.webp';
export const nameCategories = {
    1: { src : Intelligence, alt: 'Intelligence'},
    2: { src : Strength, alt: 'Strength'},
    3: { src : Agility, alt: 'Agility'},
    4: { src : Chance, alt: 'Chance'},
    5: { src : Major, alt: 'Major'},
}

import IntelligenceHover from './assets/iconsAptitudes/intelligence_over.webp';
import StrengthHover from './assets/iconsAptitudes/strength_over.webp';
import AgilityHover from './assets/iconsAptitudes/agility_over.webp';
import ChanceHover from './assets/iconsAptitudes/chance_over.webp';
import MajorHover from './assets/iconsAptitudes/major_over.webp';
export const nameCategoriesHover = {
    1: { src : IntelligenceHover, alt: 'Intelligence hover'},
    2: { src : StrengthHover, alt: 'Strength hover'},
    3: { src : AgilityHover, alt: 'Agility hover'},
    4: { src : ChanceHover, alt: 'Chance hover'},
    5: { src : MajorHover, alt: 'Major hover'},
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
        1: { src : PercentHpApt, alt: '% Points de Vie'},
        2: { src : ElementalResistanceApt, alt: 'Résistance Elémentaire'},
        3: { src : BareerApt, alt: 'Barrière'},
        4: { src : PercentHealthReceivedApt, alt: '% Soins Reçus'},
        5: { src : PercentHpAsArmorApt, alt: '% Points de Vie en Armure'},
    },
    2: {
        1: { src : ElementalMasteryApt, alt: 'Maîtrise Elémentaire'},
        2: { src : MeleeMasteryApt, alt: 'Maîtrise Mêlée'},
        3: { src : DistanceMasteryApt, alt: 'Maîtrise Distance'},
        4: { src : RawHpApt, alt: 'Points de Vie'},
    },
    3: {
        1: { src : LockApt, alt: 'Tacle'},
        2: { src : DodgeApt, alt: 'Esquive'},
        3: { src : InitiativeApt, alt: 'Initiative'},
        4: { src : LockAndDodgeApt, alt: 'Tacle et Esquive'},
        5: { src : WillApt, alt: 'Volonté'},
    },
    4: {
        1: { src : CriticalApt, alt: 'Critique'},
        2: { src : BlockApt, alt: 'Parade'},
        3: { src : CriticalMasteryApt, alt: 'Maîtrise Critique'},
        4: { src : RearMasterypApt, alt: 'Maîtrise Dos'},
        5: { src : BerserkMasteryApt, alt: 'Maîtrise Berserk'}, 
        6: { src : HealthMasteryApt, alt: 'Maîtrise Soin'}, 
        7: { src : RearResistanceApt, alt: 'Résistance Dos'}, 
        8: { src : CriticalResistanceApt, alt: 'Résistance Critique'},
    },
    5: {
        1: { src : PaApt, alt: 'Point d\'Action'},
        2: { src : PmApt, alt: 'Point de Mouvement'},
        3: { src : PoApt, alt: 'Portée'},
        4: { src : WpApt, alt: 'Point de Wakfu'},
        5: { src : ControlApt, alt: 'Contrôle'}, 
        6: { src : PercentDamageApt, alt: '% Dommages Infligés'}, 
        7: { src : ElementalResistanceMajorApt, alt: 'Résistance Elementaire'}, 
    },
}
export const aptLogosHover = {
    1: {
        1: { src : PercentHpAptHover, alt: '% Points de Vie'},
        2: { src : ElementalResistanceAptHover, alt: 'Resistance élémentaire'},
        3: { src : BareerAptHover, alt: 'Barrière'},
        4: { src : PercentHealthReceivedAptHover, alt: '% Soins reçus'},
        5: { src : PercentHpAsArmorAptHover, alt: '% Points de Vie en Armure'},
    },
    2: {
        1: { src : PercentDamage, alt: 'Percent damage'},
        2: { src : MeleeMastery, alt: 'melee mastery'},
        3: { src : DistanceMastery, alt: 'distance mastery'},
        4: { src : PercentHpAptHover, alt: '% Points de Vie'},
    },
    3: {
        1: { src : Dodge, alt:  'Esquive'},
        2: { src : Lock, alt: 'Tacle'},
        3: { src: Initiative, alt: 'Initiative'},
        4: {
            1: { src : Dodge, alt:  'Esquive'},
            2: { src : Lock, alt: 'Tacle'},
        },
        5: { src : Will, alt: 'Volonté'},
    },
    4: {
        1: { src : PercentCrit, alt:  '% Coup Critique'},
        2: { src : Block, alt: '% Parade'},
        3: { src: CritMastery, alt: 'Maîtrise Critique'},
        4: { src : RearMastery, alt: 'Maîtrise Dos'},
        5: { src: BerserkMastery, alt: 'Maîtrise Berserk'},
        6: { src : HealMastery, alt: 'Maîtrise Soin'},
        7: { src: RearResist, alt: 'Résistance Dos'},
        8: { src: CritResist, alt: 'Résistance Critique'},
    },
    5: {
        1: { src : Pa, alt:  'Point d\'Action'},
        2: { 
            1: { src : PercentDamage, alt: 'Point de Dommage'},
            2: { src : Pm, alt: 'Point de Mouvement'},
        },
        3: {
            1: { src : PercentDamage, alt: 'Point de Dommage'},
            2: { src: Po, alt: 'Portée'},
        },
        4: { src : Pw, alt: 'Point de Wakfu'},
        5: { 
            1: { src : PercentDamage, alt: 'Point de Dommage'},
            2: { src: Control, alt: 'Contrôle'},
        },
        6: { src : PercentDamage, alt: '% Dommages Infligés'},
        7: { src: ElementalResistanceAptHover, alt: 'Résistance Elémentaire'},
    }
}

// Importation minus plus 0
import Minus from './assets/aptitudes/minus.webp';
import Plus from './assets/aptitudes/plus.webp';
import Zero from './assets/aptitudes/zero.webp';
export const selectors = {
    1: { src : Minus, alt: 'Minus'},
    2: { src : Plus, alt: 'Plus'},
    3: { src : Zero, alt: 'Zero'},
}

// Importation des cases d'enchantement
import ShardBlueActived from './assets/enchant/shard_blue_full.webp';
import ShardGreenActived from './assets/enchant/shard_green_full.webp';
import ShardRedActived from './assets/enchant/shard_red_full.webp';
import ShardWhiteActived from './assets/enchant/shard_white_full.webp';
import ShardWhiteEmpty from './assets/enchant/shard_white_empty.webp';
export const shards = {
    1: { src : ShardBlueActived, alt: 'Shard Blue Actived'},
    2: { src : ShardGreenActived, alt: 'Shard Green Actived'},
    3: { src : ShardRedActived, alt: 'Shard Red Actived'},
    4: { src : ShardWhiteActived, alt: 'Shard White Actived'},
    5: { src : ShardWhiteEmpty, alt: 'Shard White Empty'},
}

// Importations des parchemins
import GreenParchment from './assets/sublimations/greenParchment.webp';
import OrangeParchment from './assets/sublimations/orangeParchment.webp';
import WhiteParchment from './assets/sublimations/whiteParchment.webp';
export const parchments = {
    1: { src : GreenParchment, alt: 'Green Parchment'},
    2: { src : OrangeParchment, alt: 'Orange Parchment'},
    3: { src : WhiteParchment, alt: 'White Parchment'},
}