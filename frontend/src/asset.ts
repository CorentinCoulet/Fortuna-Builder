// Importation des classes
import Cra from "./assets/class/cra.jpg";
import Ecaflip from "./assets/class/ecaflip.jpg";
import Eliotrope from "./assets/class/eliotrope.jpg";
import Eniripsa from "./assets/class/eniripsa.jpg";
import Enutrof from "./assets/class/enutrof.jpg";
import Feca from "./assets/class/feca.jpg";
import Huppermage from "./assets/class/huppermage.jpg";
import Iop from "./assets/class/iop.jpg";
import Osamodas from "./assets/class/osamodas.jpg";
import Ouginak from "./assets/class/ouginak.jpg";
import Pandawa from "./assets/class/pandawa.jpg";
import Roublard from "./assets/class/roublard.jpg";
import Sacrieur from "./assets/class/sacrieur.jpg";
import Sadida from"./assets/class/sadida.jpg";
import Sram from "./assets/class/sram.jpg";
import Steameur from "./assets/class/steameur.jpg";
import Xelor from "./assets/class/xelor.jpg";
import Zobal from "./assets/class/zobal.jpg";
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
import Headgear from './assets/equipements/headgear.png';
import Amulet from './assets/equipements/amulet.png';
import Cape from './assets/equipements/cape.png';
import Epaulettes from './assets/equipements/epaulettes.png';
import Breastplate from './assets/equipements/breastplate.png';
import Belt from './assets/equipements/belt.png';
import RightRing from './assets/equipements/right_ring.png';
import LeftRing from './assets/equipements/left_ring.png';
import Boots from './assets/equipements/boots.png';
import RightHand from './assets/equipements/right_hand.png';
import LeftHand from './assets/equipements/left_hand.png';
import Emblem from './assets/equipements/emblem.png';
import Pet from './assets/equipements/pet.png';
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
import WaterMastery from './assets/elements/water.png';
import EarthResistance from './assets/elements/earth_resistance.webp';
import EarthMastery from './assets/elements/earth.png';
import WindResistance from './assets/elements/wind_resistance.webp';
import WindMastery from './assets/elements/wind.png';
import FireResistance from './assets/elements/fire_resistance.webp';
import FireMastery from './assets/elements/fire.png';
import ArmorReceived from './assets/elements/received_armor.webp';
import ArmorGiven from './assets/elements/given_armor.webp';

// Importation des stats spécifiques
import PercentDamage from './assets/maitrises/damage_dealt.png';
import PercentHeal from './assets/maitrises/heals.png';
import PercentCrit from './assets/maitrises/ch.png';
import Block from './assets/maitrises/block.png';
import Initiative from './assets/maitrises/initiative.png';
import Po from './assets/maitrises/range.png';
import Dodge from './assets/maitrises/dodge.png';
import Lock from './assets/maitrises/lock.png';
import Wisdom from './assets/maitrises/wisdom.png';
import Prospecting from './assets/maitrises/prospecting.png';
import Control from './assets/maitrises/control.png';
import Will from './assets/maitrises/will.webp';

// Importations des maitrises secondaires
import CritMastery from './assets/maitrises/crit_mastery.png';
import CritResist from './assets/maitrises/rear_resist.png';
import RearMastery from './assets/maitrises/rear_mastery.png';
import RearResist from './assets/maitrises/rear_resist.png';
import MeleeMastery from './assets/maitrises/melee_mastery.png';
import DistanceMastery from './assets/maitrises/distance_mastery.png';
import HealMastery from './assets/maitrises/heals.png';
import BerserkMastery from './assets/maitrises/berserk_mastery.png';
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

    16: { src : PercentDamage, alt: 'Percent damaga'},
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
import Intelligence from './assets/aptitudes/intelligence.webp';
import Strength from './assets/aptitudes/strength.webp';
import Agility from './assets/aptitudes/agility.webp';
import Chance from './assets/aptitudes/chance.webp';
import Major from './assets/aptitudes/major.webp';
export const nameCategories = {
    1: { src : Intelligence, alt: 'Intelligence'},
    2: { src : Strength, alt: 'Strength'},
    3: { src : Agility, alt: 'Agility'},
    4: { src : Chance, alt: 'Chance'},
    5: { src : Major, alt: 'Major'},
}

import IntelligenceHover from './assets/aptitudes/intelligence_over.webp';
import StrengthHover from './assets/aptitudes/strength_over.webp';
import AgilityHover from './assets/aptitudes/agility_over.webp';
import ChanceHover from './assets/aptitudes/chance_over.webp';
import MajorHover from './assets/aptitudes/major_over.webp';
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
        1: { src : PercentHpApt, alt: 'Percent hp'},
        2: { src : ElementalResistanceApt, alt: 'Elemental resistance'},
        3: { src : BareerApt, alt: 'bareer'},
        4: { src : PercentHealthReceivedApt, alt: 'Percent healt received'},
        5: { src : PercentHpAsArmorApt, alt: 'Percent hp as armor'},
    },
    2: {
        1: { src : ElementalMasteryApt, alt: 'Elemental mastery'},
        2: { src : MeleeMasteryApt, alt: 'Melee mastery'},
        3: { src : DistanceMasteryApt, alt: 'Distance mastery'},
        4: { src : RawHpApt, alt: 'Raw hp'},
    },
    3: {
        1: { src : LockApt, alt: 'Lock'},
        2: { src : DodgeApt, alt: 'Dodge'},
        3: { src : InitiativeApt, alt: 'Initiative'},
        4: { src : LockAndDodgeApt, alt: 'Lock and dodge'},
        5: { src : WillApt, alt: 'Will'},
    },
    4: {
        1: { src : CriticalApt, alt: 'Critical'},
        2: { src : BlockApt, alt: 'Block'},
        3: { src : CriticalMasteryApt, alt: 'Critical mastery'},
        4: { src : RearMasterypApt, alt: 'Rear mastery'},
        5: { src : BerserkMasteryApt, alt: 'Berserk mastery'}, 
        6: { src : HealthMasteryApt, alt: 'Healt mastery'}, 
        7: { src : RearResistanceApt, alt: 'Rear resistance'}, 
        8: { src : CriticalResistanceApt, alt: 'Critical resistance'},
    },
    5: {
        1: { src : PaApt, alt: 'Action point'},
        2: { src : PmApt, alt: 'Movement point'},
        3: { src : PoApt, alt: 'Range'},
        4: { src : WpApt, alt: 'Wakfu point'},
        5: { src : ControlApt, alt: 'Control'}, 
        6: { src : PercentDamageApt, alt: 'Percent damage'}, 
        7: { src : ElementalResistanceMajorApt, alt: 'Elemental resistance'}, 
    },
}

// Importation minus plus 0
import Minus from './assets/aptitudes/minus.png';
import Plus from './assets/aptitudes/plus.png';
import Zero from './assets/aptitudes/zero.png';
export const selectors = {
    1: { src : Minus, alt: 'Minus'},
    2: { src : Plus, alt: 'Plus'},
    3: { src : Zero, alt: 'Zero'},
}