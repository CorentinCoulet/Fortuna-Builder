// Importation des classes
import Cra from "./assets/class/cra.jpg";
import Eca from "./assets/class/eca.jpg";
import Elio from "./assets/class/elio.jpg";
import Eni from "./assets/class/eni.jpg";
import Enu from "./assets/class/enu.jpg";
import Feca from "./assets/class/feca.jpg";
import Hupper from "./assets/class/hupper.jpg";
import Iop from "./assets/class/iop.jpg";
import Osa from "./assets/class/osa.jpg";
import Ougi from "./assets/class/ougi.jpg";
import Panda from "./assets/class/panda.jpg";
import Roub from "./assets/class/roub.jpg";
import Sacri from "./assets/class/sacri.jpg";
import Sadi from"./assets/class/sadi.jpg";
import Sram from "./assets/class/sram.jpg";
import Steam from "./assets/class/steam.jpg";
import Xel from "./assets/class/xel.jpg";
import Zobal from "./assets/class/zobal.jpg";

export const Images = [
    Cra,
    Eca,
    Elio,
    Eni,
    Enu,
    Feca,
    Hupper,
    Iop,
    Osa,
    Ougi,
    Panda,
    Roub,
    Sacri,
    Sadi,
    Sram,
    Steam,
    Xel,
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

