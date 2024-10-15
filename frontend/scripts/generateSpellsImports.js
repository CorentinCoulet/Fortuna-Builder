// Common
import CommonActive1 from '../src/assets/sorts/common/active-1.webp';
import CommonActive2 from '../src/assets/sorts/common/active-2.webp';
import CommonActive3 from '../src/assets/sorts/common/active-3.webp';
import CommonPassive1 from '../src/assets/sorts/common/passive-1.webp';
import CommonPassive2 from '../src/assets/sorts/common/passive-2.webp';
import CommonPassive3 from '../src/assets/sorts/common/passive-3.webp';
import CommonPassive4 from '../src/assets/sorts/common/passive-4.webp';
import CommonPassive5 from '../src/assets/sorts/common/passive-5.webp';
import CommonPassive6 from '../src/assets/sorts/common/passive-6.webp';
import CommonPassive7 from '../src/assets/sorts/common/passive-7.webp';
import CommonPassive8 from '../src/assets/sorts/common/passive-8.webp';
export const CommonSpells = {
    active: {
        1: { 
            src: CommonActive1, 
            alt: 'Maîtrise d\'Arme', 
            number: 5622, 
            description: "En lançant ce sort, le porteur s'enrobe du savoir ancestral de tous les maîtres d'armes l'ayant précédé, le flot de pouvoir se déverse dans ses veines et le rend euphorique, prêt à tabasser gaiement tous ses adversaires !", 
            effects: ["Maîtrise d'Armes (Niv.100)", "Passe son tour"] 
        },
        2: { 
            src: CommonActive2, 
            alt: 'Charme de Masse', 
            number: 5623, 
            description: "Ce sort permet de simuler une attirance physique pour votre cible et de la transférer vers d'autres pour les attirer fatalement vers elle. Attention, ce sort est fort en émotions.", 
            effects: ["CIBLE 150 Tacle", "Attire de 2 cases TAILLE:3 vers la CIBLE"] 
        },
        3: {
            src: CommonActive3, 
            alt: 'Os à Moelle', 
            number: 6327, 
            description: "Les disciples d'Ouginak vous ont enseigné comment se délecter d'un bon Os à Moelle. Ce sort invoque un obstacle bloquant. À la fin de votre tour, l'Os est grignotté pour soigner les cibles à son contact.", 
            effects: ["Invoque un Os à Moelle", "En fin de tour du lanceur:", "FLECHE L'Os à Moelle perd 1% PV max", "FLECHE Soin EAU : 28 autour de l'Os à Moelle TAILLE:1-1"] 
        },
    },
    passive: {
        1: {
            src: CommonPassive1,
            alt: 'Esquive',
            number: 4957,
            description : "Pour s'échapper un moment, ou même durablement, ce passif est idéal !",
            stats: {
                1: ["60 Esquive", "Après avoir esquivé (avec pertes):", "FLECHE 20 Esquive (3 tours)"],
                2: ["180 Esquive", "Après avoir esquivé (avec pertes):", "FLECHE 60 Esquive (3 tours)"],
            },
            bonus: {
                1: { dodge: 60 },
                2: { dodge: 180 },
            },
            restriction: 105,
        },
        2: {
            src: CommonPassive2,
            alt: 'Tacle',
            number: 4958,
            description : "Hopla ! Où croyez-vous aller ? Restez donc ici !",
            stats: {
                1: ["60 Tacle", "Après avoir taclé une CIBLE :", "FLECHE 20 Tacle (3 tours)"],
                2: ["180 Tacle", "Après avoir taclé une CIBLE :", "FLECHE 60 Tacle (3 tours)"],
            },
            bonus: {
                1: { lock: 60 },
            },
            restriction: 115,
        },

        3: {
            src: CommonPassive3,
            alt: 'Initiative',
            number: 4956,
            description: "Une bonne respiration, une boisson fraîche et on entame le combat",
            stats: { 
                1: ["60 Initiative", "5% Dommages infligés aux CIBLE ayant plus d'Initiative"],
                2: ["120 Initiative", "10% Dommages infligés aux CIBLE ayant plus d'Initiative"],
            },
            bonus: {
                1: { initiative: 60 },
                2: { initiative: 120 },
            },
            restriction: 125,
        },
        4: { 
            src: CommonPassive4, 
            alt: 'Motivation', 
            number: 5237, 
            description: "En étant motivé, on peut rapidement prendre le pas sur ses adversaires.",
            stats: { 
                1: ["1 PA", "-20% Dommages infligés"],
                2: ["1 PA", "-20% Dommages infligés", "10 Volonté"],
            }, 
            bonus: { 
                1: { ap: 1, damageDealt: -20 },
                2: { ap: 1, damageDealt: -20, will: 10 },
            },
            restriction: 135,
        },
        5: { 
            src: CommonPassive5, 
            alt: 'Médecine', 
            number: 5146, 
            description: "Besoin d'un soigneur dans votre équipe ? Je suis là !",
            stats: {
                1: ["25% Soins réalisés", "20% Armure donnée", "-15% Dommages infligés"],
                2: ["30% Soins réalisés", "25% Armure donnée", "-15% Dommages infligés"],
            }, 
            bonus: {
                1: {},
                2: {},  
            }, 
            restrictions: 155,
        },
        6: { 
            src: CommonPassive6, 
            alt: 'Rock', 
            number: 5145, 
            description: "Plus solide que la montagne, je prendrais les dégâts pour vous !",
            stats: { 
                1: ["30% Points de Vie", "20% Soins reçus", " -25% Dommages infligés", "-50% Soins réalisés"], 
                2: ["60% Points de Vie", "25% Soins reçus", " -25% Dommages infligés", "-50% Soins réalisés"] 
            }, 
            bonus: { 
                1: {hp: "30%", }, 
                2: {} 
            },
            restrictions: 165,
        },
        7: { 
            src: CommonPassive7, 
            alt: 'Carnage', 
            number: 5144, 
            description: "Soif de sang et de pouvoir, je suis là pour faire des dégâts !", 
            stats: { 
                1: ["10% Dommages infligés", "10% Dommages Infligés aux CIBLE ayant de l'Armure", "-30% Soins réalisés"],
                2: ["15% Dommages infligés", "10% Dommages Infligés aux CIBLE ayant de l'Armure", "-30% Soins réalisés"],
            }, 
            bonus: {

            }, 
            restrictions: 175, 
        },
        8: { 
            src: CommonPassive8, 
            alt: 'Fluctuation', 
            number: 5621, 
            description: "Lorsqu'un combattant se frotte à un autre, une énergie se transmet forcément de l'un à l'autre. Le concept de ce passif réside dans l'utilisation détournée de cette énergie, à des fins brutales.", 
            stats: { 
                1: ["Lorsque vous esquivez une CIBLE :", "FLECHE Avec pertes: CIBLE Fluctuation (+7 Niv.)", "FLECHE Sans perte: CIBLE Fluctuation (+10 Niv.)", "Lorsque vous taclez une CIBLE :", "FLECHE Fluctuation (+10 Niv.)", "Aux CIBLE terminant leur tour à votre contact :", "FLECHE CIBLE Fluctuation (+12 Niv.)"], 
                2: ["Lorsque vous esquivez une CIBLE :", "FLECHE Avec pertes: CIBLE Fluctuation (+10 Niv.)", "FLECHE Sans perte: CIBLE Fluctuation (+15 Niv.)", "Lorsque vous taclez une CIBLE :", "FLECHE Fluctuation (+15 Niv.)", "Aux CIBLE terminant leur tour à votre contact :","FLECHE CIBLE Fluctuation (+20 Niv.)"], },  
            restrictions: 185, 
        },
    },
};
// Cra
import CraActive1 from '../src/assets/sorts/cra/active-1.webp';
import CraActive2 from '../src/assets/sorts/cra/active-2.webp';
import CraActive3 from '../src/assets/sorts/cra/active-3.webp';
import CraActive4 from '../src/assets/sorts/cra/active-4.webp';
import CraActive5 from '../src/assets/sorts/cra/active-5.webp';
import CraActive6 from '../src/assets/sorts/cra/active-6.webp';
import CraEarth1 from '../src/assets/sorts/cra/earth-1.webp';
import CraEarth2 from '../src/assets/sorts/cra/earth-2.webp';
import CraEarth3 from '../src/assets/sorts/cra/earth-3.webp';
import CraEarth4 from '../src/assets/sorts/cra/earth-4.webp';
import CraEarth5 from '../src/assets/sorts/cra/earth-5.webp';
import CraFire1 from '../src/assets/sorts/cra/fire-1.webp';
import CraFire2 from '../src/assets/sorts/cra/fire-2.webp';
import CraFire3 from '../src/assets/sorts/cra/fire-3.webp';
import CraFire4 from '../src/assets/sorts/cra/fire-4.webp';
import CraFire5 from '../src/assets/sorts/cra/fire-5.webp';
import CraPassive1 from '../src/assets/sorts/cra/passive-1.webp';
import CraPassive10 from '../src/assets/sorts/cra/passive-10.webp';
import CraPassive11 from '../src/assets/sorts/cra/passive-11.webp';
import CraPassive12 from '../src/assets/sorts/cra/passive-12.webp';
import CraPassive13 from '../src/assets/sorts/cra/passive-13.webp';
import CraPassive14 from '../src/assets/sorts/cra/passive-14.webp';
import CraPassive15 from '../src/assets/sorts/cra/passive-15.webp';
import CraPassive16 from '../src/assets/sorts/cra/passive-16.webp';
import CraPassive17 from '../src/assets/sorts/cra/passive-17.webp';
import CraPassive18 from '../src/assets/sorts/cra/passive-18.webp';
import CraPassive19 from '../src/assets/sorts/cra/passive-19.webp';
import CraPassive2 from '../src/assets/sorts/cra/passive-2.webp';
import CraPassive3 from '../src/assets/sorts/cra/passive-3.webp';
import CraPassive4 from '../src/assets/sorts/cra/passive-4.webp';
import CraPassive5 from '../src/assets/sorts/cra/passive-5.webp';
import CraPassive6 from '../src/assets/sorts/cra/passive-6.webp';
import CraPassive7 from '../src/assets/sorts/cra/passive-7.webp';
import CraPassive8 from '../src/assets/sorts/cra/passive-8.webp';
import CraPassive9 from '../src/assets/sorts/cra/passive-9.webp';
import CraWind1 from '../src/assets/sorts/cra/wind-1.webp';
import CraWind2 from '../src/assets/sorts/cra/wind-2.webp';
import CraWind3 from '../src/assets/sorts/cra/wind-3.webp';
import CraWind4 from '../src/assets/sorts/cra/wind-4.webp';
import CraWind5 from '../src/assets/sorts/cra/wind-5.webp';
export const CraSpells = {
    active: {
        1: { src: CraActive1, alt: 'Roulade', number: 4774 },
        2: { src: CraActive2, alt: 'Retraite balisée', number: 4805 },
        3: { src: CraActive3, alt: 'Eclaireur', number: 4806 },
        4: { src: CraActive4, alt: 'Œil de taupe', number: 7753 },
        5: { src: CraActive5, alt: 'Frappe Incisive', number: 4808 },
        6: { src: CraActive6, alt: 'Rafale', number: 6842 },
    },
    earth: {
        1: { src: CraEarth1, alt: 'Flèche cinglante', number: 4816 },
        2: { src: CraEarth2, alt: 'Pluie de flèches', number: 4817 },
        3: { src: CraEarth3, alt: 'Flèche criblante', number: 4818 },
        4: { src: CraEarth4, alt: 'Flèche perçante', number: 4815 },
        5: { src: CraEarth5, alt: 'Flèche destructrice', number: 4814 },
    },
    fire: {
        1: { src: CraFire1, alt: 'Flèche fulminante', number: 4820 },
        2: { src: CraFire2, alt: 'Flèche d\'immolation', number: 4822 },
        3: { src: CraFire3, alt: 'Flèche enflammée', number: 4821 },
        4: { src: CraFire4, alt: 'Flèche ardente', number: 4769 },
        5: { src: CraFire5, alt: 'Flèche explosive', number: 4819 },
    },
    passive: {
        1: { src: CraPassive1, alt: 'Archer futé', number: 6945 },
        2: { src: CraPassive2, alt: 'Éclaireur spécialisé', number: 6946 },
        3: { src: CraPassive3, alt: 'Balises discrètes', number: 6947 },
        4: { src: CraPassive4, alt: 'Précision vorace', number: 6950 },
        5: { src: CraPassive5, alt: 'Esprit affûté', number: 6960 },
        6: { src: CraPassive6, alt: 'Instinct du chasseur', number: 6957 },
        7: { src: CraPassive7, alt: 'La voie de l\'arc', number: 6951 },
        8: { src: CraPassive8, alt: 'Débalisage massif', number: 6952 },
        9: { src: CraPassive9, alt: 'Redirection brutale', number: 6953 },
        10: { src: CraPassive10, alt: 'Paradoxe du Crâ', number: 6955 },
        11: { src: CraPassive11, alt: 'Éclaireur intouchable', number: 6956 },
        12: { src: CraPassive12, alt: 'Tireur solitaire', number: 6959 },
        13: { src: CraPassive13, alt: 'Balisage rapproché', number: 6958 },
        14: { src: CraPassive14, alt: 'Parti pris', number: 6948 },
        15: { src: CraPassive15, alt: 'Distance focale', number: 6949 },
        16: { src: CraPassive16, alt: 'L\'art des Balises', number: 6961 },
        17: { src: CraPassive17, alt: 'Pointe protectrice', number: 7795 },
        18: { src: CraPassive18, alt: 'Perforation Crâ', number: 6963 },
        19: { src: CraPassive19, alt: 'Mouvement ponctuel', number: 6962 },
    },
    wind: {
        1: { src: CraWind1, alt: 'Flèche chercheuse', number: 4813 },
        2: { src: CraWind2, alt: 'Flèche de recul', number: 4810 },
        3: { src: CraWind3, alt: 'Flèche tempête', number: 4809 },
        4: { src: CraWind4, alt: 'Flèche harcelante', number: 4811 },
        5: { src: CraWind5, alt: 'Flèche statique', number: 4812 },
    },
};
// Ecaflip
import EcaflipActive1 from '../src/assets/sorts/ecaflip/active-1.webp';
import EcaflipActive2 from '../src/assets/sorts/ecaflip/active-2.webp';
import EcaflipActive3 from '../src/assets/sorts/ecaflip/active-3.webp';
import EcaflipActive4 from '../src/assets/sorts/ecaflip/active-4.webp';
import EcaflipActive5 from '../src/assets/sorts/ecaflip/active-5.webp';
import EcaflipActive6 from '../src/assets/sorts/ecaflip/active-6.webp';
import EcaflipEarth1 from '../src/assets/sorts/ecaflip/earth-1.webp';
import EcaflipEarth2 from '../src/assets/sorts/ecaflip/earth-2.webp';
import EcaflipEarth3 from '../src/assets/sorts/ecaflip/earth-3.webp';
import EcaflipEarth4 from '../src/assets/sorts/ecaflip/earth-4.webp';
import EcaflipEarth5 from '../src/assets/sorts/ecaflip/earth-5.webp';
import EcaflipFire1 from '../src/assets/sorts/ecaflip/fire-1.webp';
import EcaflipFire2 from '../src/assets/sorts/ecaflip/fire-2.webp';
import EcaflipFire3 from '../src/assets/sorts/ecaflip/fire-3.webp';
import EcaflipFire4 from '../src/assets/sorts/ecaflip/fire-4.webp';
import EcaflipFire5 from '../src/assets/sorts/ecaflip/fire-5.webp';
import EcaflipPassive1 from '../src/assets/sorts/ecaflip/passive-1.webp';
import EcaflipPassive10 from '../src/assets/sorts/ecaflip/passive-10.webp';
import EcaflipPassive11 from '../src/assets/sorts/ecaflip/passive-11.webp';
import EcaflipPassive12 from '../src/assets/sorts/ecaflip/passive-12.webp';
import EcaflipPassive13 from '../src/assets/sorts/ecaflip/passive-13.webp';
import EcaflipPassive14 from '../src/assets/sorts/ecaflip/passive-14.webp';
import EcaflipPassive15 from '../src/assets/sorts/ecaflip/passive-15.webp';
import EcaflipPassive16 from '../src/assets/sorts/ecaflip/passive-16.webp';
import EcaflipPassive17 from '../src/assets/sorts/ecaflip/passive-17.webp';
import EcaflipPassive18 from '../src/assets/sorts/ecaflip/passive-18.webp';
import EcaflipPassive19 from '../src/assets/sorts/ecaflip/passive-19.webp';
import EcaflipPassive2 from '../src/assets/sorts/ecaflip/passive-2.webp';
import EcaflipPassive20 from '../src/assets/sorts/ecaflip/passive-20.webp';
import EcaflipPassive3 from '../src/assets/sorts/ecaflip/passive-3.webp';
import EcaflipPassive4 from '../src/assets/sorts/ecaflip/passive-4.webp';
import EcaflipPassive5 from '../src/assets/sorts/ecaflip/passive-5.webp';
import EcaflipPassive6 from '../src/assets/sorts/ecaflip/passive-6.webp';
import EcaflipPassive7 from '../src/assets/sorts/ecaflip/passive-7.webp';
import EcaflipPassive8 from '../src/assets/sorts/ecaflip/passive-8.webp';
import EcaflipPassive9 from '../src/assets/sorts/ecaflip/passive-9.webp';
import EcaflipWater1 from '../src/assets/sorts/ecaflip/water-1.webp';
import EcaflipWater2 from '../src/assets/sorts/ecaflip/water-2.webp';
import EcaflipWater3 from '../src/assets/sorts/ecaflip/water-3.webp';
import EcaflipWater4 from '../src/assets/sorts/ecaflip/water-4.webp';
import EcaflipWater5 from '../src/assets/sorts/ecaflip/water-5.webp';
export const EcaflipSpells = {
    active: {
        1: { src: EcaflipActive1, alt: 'Quitte ou double', number: 2060 },
        2: { src: EcaflipActive2, alt: 'Topkaj', number: 2075 },
        3: { src: EcaflipActive3, alt: 'Félintuition', number: 2061 },
        4: { src: EcaflipActive4, alt: 'Jeton de vie', number: 2078 },
        5: { src: EcaflipActive5, alt: 'Coup du sort', number: 2079 },
        6: { src: EcaflipActive6, alt: 'Trèfle', number: 7225 },
    },
    earth: {
        1: { src: EcaflipEarth1, alt: 'Pile ou face', number: 2041 },
        2: { src: EcaflipEarth2, alt: 'All in', number: 2047 },
        3: { src: EcaflipEarth3, alt: 'Bataille', number: 2049 },
        4: { src: EcaflipEarth4, alt: 'Tout ou rien', number: 2043 },
        5: { src: EcaflipEarth5, alt: 'Trois cartes', number: 2044 },
    },
    fire: {
        1: { src: EcaflipFire1, alt: 'Craps', number: 2045 },
        2: { src: EcaflipFire2, alt: 'Dé du chateux', number: 2050 },
        3: { src: EcaflipFire3, alt: 'Dé six', number: 2042 },
        4: { src: EcaflipFire4, alt: 'Routte à dés', number: 2048 },
        5: { src: EcaflipFire5, alt: 'Feulement', number: 2046 },
    },
    passive: {
        1: { src: EcaflipPassive1, alt: 'La Mésaventure', number: 2068 },
        2: { src: EcaflipPassive2, alt: 'Pucif', number: 2062 },
        3: { src: EcaflipPassive3, alt: 'En veine', number: 2076 },
        4: { src: EcaflipPassive4, alt: 'L\'Infortune', number: 2080 },
        5: { src: EcaflipPassive5, alt: 'Tarot veinard', number: 2059 },
        6: { src: EcaflipPassive6, alt: 'Tarot divinatoire', number: 5246 },
        7: { src: EcaflipPassive7, alt: 'Le Destin D\'Ecaflip', number: 5250 },
        8: { src: EcaflipPassive8, alt: 'Impact félin', number: 5249 },
        9: { src: EcaflipPassive9, alt: 'Triche', number: 5251 },
        10: { src: EcaflipPassive10, alt: 'Veine soigneuse', number: 7954 },
        11: { src: EcaflipPassive11, alt: 'Tarot félin', number: 7955 },
        12: { src: EcaflipPassive12, alt: 'La fortune sourit aux audacieux', number: 7956 },
        13: { src: EcaflipPassive13, alt: 'Pile, je gagne', number: 7957 },
        14: { src: EcaflipPassive14, alt: 'Dés généreux', number: 7958 },
        15: { src: EcaflipPassive15, alt: 'Félin suprême', number: 7959 },
        16: { src: EcaflipPassive16, alt: 'Black Jack', number: 7960 },
        17: { src: EcaflipPassive17, alt: 'Atouts périodiques', number: 7961 },
        18: { src: EcaflipPassive18, alt: 'Veines des cartes', number: 8001 },
        19: { src: EcaflipPassive19, alt: 'Sept fétiches', number: 7999 },
        20: { src: EcaflipPassive20, alt: 'L\'Univers', number: 8000 },
    },
    water: {
        1: { src: EcaflipWater1, alt: 'Langue rapeuse', number: 2065 },
        2: { src: EcaflipWater2, alt: 'Lacérations', number: 2066 },
        3: { src: EcaflipWater3, alt: 'Capucine', number: 2067 },
        4: { src: EcaflipWater4, alt: 'Bas les pattes', number: 2072 },
        5: { src: EcaflipWater5, alt: 'Pupuce', number: 2073 },
    },
};
// Eliotrope
import EliotropeActive1 from '../src/assets/sorts/eliotrope/active-1.webp';
import EliotropeActive2 from '../src/assets/sorts/eliotrope/active-2.webp';
import EliotropeActive3 from '../src/assets/sorts/eliotrope/active-3.webp';
import EliotropeActive4 from '../src/assets/sorts/eliotrope/active-4.webp';
import EliotropeActive5 from '../src/assets/sorts/eliotrope/active-5.webp';
import EliotropeActive6 from '../src/assets/sorts/eliotrope/active-6.webp';
import EliotropeEarth1 from '../src/assets/sorts/eliotrope/earth-1.webp';
import EliotropeEarth2 from '../src/assets/sorts/eliotrope/earth-2.webp';
import EliotropeEarth3 from '../src/assets/sorts/eliotrope/earth-3.webp';
import EliotropeEarth4 from '../src/assets/sorts/eliotrope/earth-4.webp';
import EliotropeEarth5 from '../src/assets/sorts/eliotrope/earth-5.webp';
import EliotropePassive1 from '../src/assets/sorts/eliotrope/passive-1.webp';
import EliotropePassive10 from '../src/assets/sorts/eliotrope/passive-10.webp';
import EliotropePassive11 from '../src/assets/sorts/eliotrope/passive-11.webp';
import EliotropePassive12 from '../src/assets/sorts/eliotrope/passive-12.webp';
import EliotropePassive13 from '../src/assets/sorts/eliotrope/passive-13.webp';
import EliotropePassive14 from '../src/assets/sorts/eliotrope/passive-14.webp';
import EliotropePassive15 from '../src/assets/sorts/eliotrope/passive-15.webp';
import EliotropePassive16 from '../src/assets/sorts/eliotrope/passive-16.webp';
import EliotropePassive17 from '../src/assets/sorts/eliotrope/passive-17.webp';
import EliotropePassive18 from '../src/assets/sorts/eliotrope/passive-18.webp';
import EliotropePassive19 from '../src/assets/sorts/eliotrope/passive-19.webp';
import EliotropePassive2 from '../src/assets/sorts/eliotrope/passive-2.webp';
import EliotropePassive20 from '../src/assets/sorts/eliotrope/passive-20.webp';
import EliotropePassive3 from '../src/assets/sorts/eliotrope/passive-3.webp';
import EliotropePassive4 from '../src/assets/sorts/eliotrope/passive-4.webp';
import EliotropePassive5 from '../src/assets/sorts/eliotrope/passive-5.webp';
import EliotropePassive6 from '../src/assets/sorts/eliotrope/passive-6.webp';
import EliotropePassive7 from '../src/assets/sorts/eliotrope/passive-7.webp';
import EliotropePassive8 from '../src/assets/sorts/eliotrope/passive-8.webp';
import EliotropePassive9 from '../src/assets/sorts/eliotrope/passive-9.webp';
import EliotropeWater1 from '../src/assets/sorts/eliotrope/water-1.webp';
import EliotropeWater2 from '../src/assets/sorts/eliotrope/water-2.webp';
import EliotropeWater3 from '../src/assets/sorts/eliotrope/water-3.webp';
import EliotropeWater4 from '../src/assets/sorts/eliotrope/water-4.webp';
import EliotropeWater5 from '../src/assets/sorts/eliotrope/water-5.webp';
import EliotropeWind1 from '../src/assets/sorts/eliotrope/wind-1.webp';
import EliotropeWind2 from '../src/assets/sorts/eliotrope/wind-2.webp';
import EliotropeWind3 from '../src/assets/sorts/eliotrope/wind-3.webp';
import EliotropeWind4 from '../src/assets/sorts/eliotrope/wind-4.webp';
import EliotropeWind5 from '../src/assets/sorts/eliotrope/wind-5.webp';
export const EliotropeSpells = {
    active: {
        1: { src: EliotropeActive1, alt: 'Coalition', number: 7199 },
        2: { src: EliotropeActive2, alt: 'Empreinte de Wakfu', number: 7198 },
        3: { src: EliotropeActive3, alt: 'Brèche temporaire', number: 4683 },
        4: { src: EliotropeActive4, alt: 'Exode', number: 4684 },
        5: { src: EliotropeActive5, alt: 'Incandescence', number: 4685 },
        6: { src: EliotropeActive6, alt: 'Barrière', number: 7200 },
    },
    earth: {
        1: { src: EliotropeEarth1, alt: 'Targe fracassante', number: 4669 },
        2: { src: EliotropeEarth2, alt: 'Egide ardente', number: 4668 },
        3: { src: EliotropeEarth3, alt: 'Séisme', number: 4670 },
        4: { src: EliotropeEarth4, alt: 'Heurt', number: 4695 },
        5: { src: EliotropeEarth5, alt: 'Raclée', number: 4671 },
    },
    passive: {
        1: { src: EliotropePassive1, alt: 'Résilience', number: 4690 },
        2: { src: EliotropePassive2, alt: 'Traquenard', number: 4687 },
        3: { src: EliotropePassive3, alt: 'Intermédiaire', number: 4689 },
        4: { src: EliotropePassive4, alt: 'Rage', number: 4686 },
        5: { src: EliotropePassive5, alt: 'Transitoire', number: 5131 },
        6: { src: EliotropePassive6, alt: 'Effervescence', number: 4688 },
        7: { src: EliotropePassive7, alt: 'Portail céleste', number: 5143 },
        8: { src: EliotropePassive8, alt: 'Disciple du portail', number: 5056 },
        9: { src: EliotropePassive9, alt: 'Réminiscence', number: 5132 },
        10: { src: EliotropePassive10, alt: 'Interstellaire', number: 7202 },
        11: { src: EliotropePassive11, alt: 'Dimension blanche', number: 7203 },
        12: { src: EliotropePassive12, alt: 'Quiétude', number: 7204 },
        13: { src: EliotropePassive13, alt: 'Espace-temps', number: 7205 },
        14: { src: EliotropePassive14, alt: 'Porta(i)l', number: 7206 },
        15: { src: EliotropePassive15, alt: 'Bouclier de la fin', number: 7207 },
        16: { src: EliotropePassive16, alt: 'Épée du début', number: 7208 },
        17: { src: EliotropePassive17, alt: 'Cicatrisation', number: 7209 },
        18: { src: EliotropePassive18, alt: 'Concentration', number: 7210 },
        19: { src: EliotropePassive19, alt: 'Système lunaire', number: 7720 },
        20: { src: EliotropePassive20, alt: 'Souffle de la déesse', number: 7814 },
    },
    water: 
    {
        1: { src: EliotropeWater1, alt: 'Wakméha', number: 4691 },
        2: { src: EliotropeWater2, alt: 'Pulsation', number: 4692 },
        3: { src: EliotropeWater3, alt: 'Déluge', number: 4693 },
        4: { src: EliotropeWater4, alt: 'Tourbillon', number: 4680 },
        5: { src: EliotropeWater5, alt: 'Cataclysme', number: 4694 },
    },
    wind: {
        1: { src: EliotropeWind1, alt: 'Flux torrenciel', number: 4697 },
        2: { src: EliotropeWind2, alt: 'Siphon', number: 4698 },
        3: { src: EliotropeWind3, alt: 'Salve éthérée', number: 4699 },
        4: { src: EliotropeWind4, alt: 'Tempête', number: 4700 },
        5: { src: EliotropeWind5, alt: 'Lame déchaînée', number: 4701 },
    },
};
// Eniripsa
import EniripsaActive1 from '../src/assets/sorts/eniripsa/active-1.webp';
import EniripsaActive2 from '../src/assets/sorts/eniripsa/active-2.webp';
import EniripsaActive3 from '../src/assets/sorts/eniripsa/active-3.webp';
import EniripsaActive4 from '../src/assets/sorts/eniripsa/active-4.webp';
import EniripsaActive5 from '../src/assets/sorts/eniripsa/active-5.webp';
import EniripsaActive6 from '../src/assets/sorts/eniripsa/active-6.webp';
import EniripsaFire1 from '../src/assets/sorts/eniripsa/fire-1.webp';
import EniripsaFire2 from '../src/assets/sorts/eniripsa/fire-2.webp';
import EniripsaFire3 from '../src/assets/sorts/eniripsa/fire-3.webp';
import EniripsaFire4 from '../src/assets/sorts/eniripsa/fire-4.webp';
import EniripsaFire5 from '../src/assets/sorts/eniripsa/fire-5.webp';
import EniripsaPassive1 from '../src/assets/sorts/eniripsa/passive-1.webp';
import EniripsaPassive10 from '../src/assets/sorts/eniripsa/passive-10.webp';
import EniripsaPassive11 from '../src/assets/sorts/eniripsa/passive-11.webp';
import EniripsaPassive12 from '../src/assets/sorts/eniripsa/passive-12.webp';
import EniripsaPassive13 from '../src/assets/sorts/eniripsa/passive-13.webp';
import EniripsaPassive14 from '../src/assets/sorts/eniripsa/passive-14.webp';
import EniripsaPassive15 from '../src/assets/sorts/eniripsa/passive-15.webp';
import EniripsaPassive16 from '../src/assets/sorts/eniripsa/passive-16.webp';
import EniripsaPassive17 from '../src/assets/sorts/eniripsa/passive-17.webp';
import EniripsaPassive18 from '../src/assets/sorts/eniripsa/passive-18.webp';
import EniripsaPassive19 from '../src/assets/sorts/eniripsa/passive-19.webp';
import EniripsaPassive2 from '../src/assets/sorts/eniripsa/passive-2.webp';
import EniripsaPassive20 from '../src/assets/sorts/eniripsa/passive-20.webp';
import EniripsaPassive3 from '../src/assets/sorts/eniripsa/passive-3.webp';
import EniripsaPassive4 from '../src/assets/sorts/eniripsa/passive-4.webp';
import EniripsaPassive5 from '../src/assets/sorts/eniripsa/passive-5.webp';
import EniripsaPassive6 from '../src/assets/sorts/eniripsa/passive-6.webp';
import EniripsaPassive7 from '../src/assets/sorts/eniripsa/passive-7.webp';
import EniripsaPassive8 from '../src/assets/sorts/eniripsa/passive-8.webp';
import EniripsaPassive9 from '../src/assets/sorts/eniripsa/passive-9.webp';
import EniripsaWater1 from '../src/assets/sorts/eniripsa/water-1.webp';
import EniripsaWater2 from '../src/assets/sorts/eniripsa/water-2.webp';
import EniripsaWater3 from '../src/assets/sorts/eniripsa/water-3.webp';
import EniripsaWater4 from '../src/assets/sorts/eniripsa/water-4.webp';
import EniripsaWater5 from '../src/assets/sorts/eniripsa/water-5.webp';
import EniripsaWind1 from '../src/assets/sorts/eniripsa/wind-1.webp';
import EniripsaWind2 from '../src/assets/sorts/eniripsa/wind-2.webp';
import EniripsaWind3 from '../src/assets/sorts/eniripsa/wind-3.webp';
import EniripsaWind4 from '../src/assets/sorts/eniripsa/wind-4.webp';
import EniripsaWind5 from '../src/assets/sorts/eniripsa/wind-5.webp';
export const EniripsaSpells = {
    active: {
        1: { src: EniripsaActive1, alt: 'Rénisurrection', number: 1535 },
        2: { src: EniripsaActive2, alt: 'Jouvence', number: 782 },
        3: { src: EniripsaActive3, alt: 'Lien d\'amitié', number: 781 },
        4: { src: EniripsaActive4, alt: 'Déphasage', number: 627 },
        5: { src: EniripsaActive5, alt: 'Interdiction', number: 1538 },
        6: { src: EniripsaActive6, alt: 'Fontaine salvatrice', number: 7985 },
    },
    fire: {
        1: { src: EniripsaFire1, alt: 'Explo-soin', number: 645 },
        2: { src: EniripsaFire2, alt: 'Cure alternative', number: 1539 },
        3: { src: EniripsaFire3, alt: 'Feu gardien', number: 638 },
        4: { src: EniripsaFire4, alt: 'Corro-soin', number: 636 },
        5: { src: EniripsaFire5, alt: 'Flamme purificatrice', number: 1534 },
    },
    passive: {
        1: { src: EniripsaPassive1, alt: 'Paroxysme vital', number: 1536 },
        2: { src: EniripsaPassive2, alt: 'Serial marqueur', number: 1537 },
        3: { src: EniripsaPassive3, alt: 'Ponction', number: 5454 },
        4: { src: EniripsaPassive4, alt: 'Marquage précis', number: 644 },
        5: { src: EniripsaPassive5, alt: 'Vampiripsa', number: 5463 },
        6: { src: EniripsaPassive6, alt: 'Radiance', number: 7987 },
        7: { src: EniripsaPassive7, alt: 'Présence', number: 7990 },
        8: { src: EniripsaPassive8, alt: 'Médecin sans barrière', number: 628 },
        9: { src: EniripsaPassive9, alt: 'Soin unique', number: 1415 },
        10: { src: EniripsaPassive10, alt: 'Super Lapino II', number: 7991 },
        11: { src: EniripsaPassive11, alt: 'Transgression', number: 7992 },
        12: { src: EniripsaPassive12, alt: 'Délai', number: 5451 },
        13: { src: EniripsaPassive13, alt: 'Elixir de vent', number: 7993 },
        14: { src: EniripsaPassive14, alt: 'Apprenti alchimiste', number: 7994 },
        15: { src: EniripsaPassive15, alt: 'Secret de fabrication', number: 7995 },
        16: { src: EniripsaPassive16, alt: 'Marque anbareul', number: 7996 },
        17: { src: EniripsaPassive17, alt: 'Tous pour moi', number: 5453 },
        18: { src: EniripsaPassive18, alt: 'Paradoxe Contre-naturel', number: 7997 },
        19: { src: EniripsaPassive19, alt: 'Ambivalence', number: 7998 },
        20: { src: EniripsaPassive20, alt: 'Nature morte', number: 5455 },
    },
    water: {
        1: { src: EniripsaWater1, alt: 'Vivification', number: 1533 },
        2: { src: EniripsaWater2, alt: 'Mot soignant', number: 779 },
        3: { src: EniripsaWater3, alt: 'Infusion', number: 1532 },
        4: { src: EniripsaWater4, alt: 'Revitalisation', number: 780 },
        5: { src: EniripsaWater5, alt: 'Reconstitution', number: 625 },
    },
    wind: {
        1: { src: EniripsaWind1, alt: 'Anatomie', number: 630 },
        2: { src: EniripsaWind2, alt: 'Psychose', number: 1540 },
        3: { src: EniripsaWind3, alt: 'Colli-mateur', number: 623 },
        4: { src: EniripsaWind4, alt: 'Fiole infectée', number: 1542 },
        5: { src: EniripsaWind5, alt: 'Torpeur', number: 1541 },
    },
};
// Enutrof 
import EnutrofActive1 from '../src/assets/sorts/enutrof/active-1.webp';
import EnutrofActive2 from '../src/assets/sorts/enutrof/active-2.webp';
import EnutrofActive3 from '../src/assets/sorts/enutrof/active-3.webp';
import EnutrofActive4 from '../src/assets/sorts/enutrof/active-4.webp';
import EnutrofActive5 from '../src/assets/sorts/enutrof/active-5.webp';
import EnutrofActive6 from '../src/assets/sorts/enutrof/active-6.webp';
import EnutrofEarth1 from '../src/assets/sorts/enutrof/earth-1.webp';
import EnutrofEarth2 from '../src/assets/sorts/enutrof/earth-2.webp';
import EnutrofEarth3 from '../src/assets/sorts/enutrof/earth-3.webp';
import EnutrofEarth4 from '../src/assets/sorts/enutrof/earth-4.webp';
import EnutrofEarth5 from '../src/assets/sorts/enutrof/earth-5.webp';
import EnutrofFire1 from '../src/assets/sorts/enutrof/fire-1.webp';
import EnutrofFire2 from '../src/assets/sorts/enutrof/fire-2.webp';
import EnutrofFire3 from '../src/assets/sorts/enutrof/fire-3.webp';
import EnutrofFire4 from '../src/assets/sorts/enutrof/fire-4.webp';
import EnutrofFire5 from '../src/assets/sorts/enutrof/fire-5.webp';
import EnutrofPassive1 from '../src/assets/sorts/enutrof/passive-1.webp';
import EnutrofPassive10 from '../src/assets/sorts/enutrof/passive-10.webp';
import EnutrofPassive2 from '../src/assets/sorts/enutrof/passive-2.webp';
import EnutrofPassive3 from '../src/assets/sorts/enutrof/passive-3.webp';
import EnutrofPassive4 from '../src/assets/sorts/enutrof/passive-4.webp';
import EnutrofPassive5 from '../src/assets/sorts/enutrof/passive-5.webp';
import EnutrofPassive6 from '../src/assets/sorts/enutrof/passive-6.webp';
import EnutrofPassive7 from '../src/assets/sorts/enutrof/passive-7.webp';
import EnutrofPassive8 from '../src/assets/sorts/enutrof/passive-8.webp';
import EnutrofPassive9 from '../src/assets/sorts/enutrof/passive-9.webp';
import EnutrofWater1 from '../src/assets/sorts/enutrof/water-1.webp';
import EnutrofWater2 from '../src/assets/sorts/enutrof/water-2.webp';
import EnutrofWater3 from '../src/assets/sorts/enutrof/water-3.webp';
import EnutrofWater4 from '../src/assets/sorts/enutrof/water-4.webp';
import EnutrofWater5 from '../src/assets/sorts/enutrof/water-5.webp';
export const EnutrofSpells = {
    active: {
        1: { src: EnutrofActive1, alt: 'Excavation', number: 6324 },
        2: { src: EnutrofActive2, alt: 'Appel du compagnon', number: 2027 },
        3: { src: EnutrofActive3, alt: 'Dette', number: 6405 },
        4: { src: EnutrofActive4, alt: 'Maladresse', number: 6337 },
        5: { src: EnutrofActive5, alt: 'Force de l\'âge', number: 2064 },
        6: { src: EnutrofActive6, alt: 'Richesse sismique', number: 2026 },
    },
    earth: {
        1: { src: EnutrofEarth1, alt: 'Pelle du jugement', number: 2008 },
        2: { src: EnutrofEarth2, alt: 'Pelle tueuse', number: 2010 },
        3: { src: EnutrofEarth3, alt: 'Roulage de pelle', number: 2011 },
        4: { src: EnutrofEarth4, alt: 'Pelle mêle', number: 2012 },
        5: { src: EnutrofEarth5, alt: 'Pelle sismique', number: 2013 },
    },
    fire: {
        1: { src: EnutrofFire1, alt: 'Fusion', number: 2018 },
        2: { src: EnutrofFire2, alt: 'Météore', number: 2019 },
        3: { src: EnutrofFire3, alt: 'Braise', number: 2021 },
        4: { src: EnutrofFire4, alt: 'Coup de grisou', number: 2037 },
        5: { src: EnutrofFire5, alt: 'Coulée de lave', number: 2022 },
    },
    passive: {
        1: { src: EnutrofPassive1, alt: 'Art de la prospection', number: 2028 },
        2: { src: EnutrofPassive2, alt: 'Géologie avancée', number: 2009 },
        3: { src: EnutrofPassive3, alt: 'Pas si vieux', number: 2057 },
        4: { src: EnutrofPassive4, alt: 'Côté en bourse', number: 5076 },
        5: { src: EnutrofPassive5, alt: 'Bénédiction Enutrof', number: 2039 },
        6: { src: EnutrofPassive6, alt: 'Volonté Enutrof', number: 5059 },
        7: { src: EnutrofPassive7, alt: 'Phorzertanker', number: 5075 },
        8: { src: EnutrofPassive8, alt: 'Simulation', number: 2040 },
        9: { src: EnutrofPassive9, alt: 'Intérêts créditeurs', number: 6326 },
        10: { src: EnutrofPassive10, alt: 'Cupidité', number: 5071 },
    },
    water: {
        1: { src: EnutrofWater1, alt: 'Purge', number: 2032 },
        2: { src: EnutrofWater2, alt: 'Filouterie', number: 2015 },
        3: { src: EnutrofWater3, alt: 'Coupures', number: 2014 },
        4: { src: EnutrofWater4, alt: 'Taxe', number: 2016 },
        5: { src: EnutrofWater5, alt: 'Epuration', number: 2017 },
    },
};
// Feca
import FecaActive1 from '../src/assets/sorts/feca/active-1.webp';
import FecaActive2 from '../src/assets/sorts/feca/active-2.webp';
import FecaActive3 from '../src/assets/sorts/feca/active-3.webp';
import FecaActive4 from '../src/assets/sorts/feca/active-4.webp';
import FecaActive5 from '../src/assets/sorts/feca/active-5.webp';
import FecaActive6 from '../src/assets/sorts/feca/active-6.webp';
import FecaEarth1 from '../src/assets/sorts/feca/earth-1.webp';
import FecaEarth2 from '../src/assets/sorts/feca/earth-2.webp';
import FecaEarth3 from '../src/assets/sorts/feca/earth-3.webp';
import FecaEarth4 from '../src/assets/sorts/feca/earth-4.webp';
import FecaEarth5 from '../src/assets/sorts/feca/earth-5.webp';
import FecaFire1 from '../src/assets/sorts/feca/fire-1.webp';
import FecaFire2 from '../src/assets/sorts/feca/fire-2.webp';
import FecaFire3 from '../src/assets/sorts/feca/fire-3.webp';
import FecaFire4 from '../src/assets/sorts/feca/fire-4.webp';
import FecaFire5 from '../src/assets/sorts/feca/fire-5.webp';
import FecaPassive1 from '../src/assets/sorts/feca/passive-1.webp';
import FecaPassive10 from '../src/assets/sorts/feca/passive-10.webp';
import FecaPassive11 from '../src/assets/sorts/feca/passive-11.webp';
import FecaPassive12 from '../src/assets/sorts/feca/passive-12.webp';
import FecaPassive13 from '../src/assets/sorts/feca/passive-13.webp';
import FecaPassive14 from '../src/assets/sorts/feca/passive-14.webp';
import FecaPassive15 from '../src/assets/sorts/feca/passive-15.webp';
import FecaPassive16 from '../src/assets/sorts/feca/passive-16.webp';
import FecaPassive17 from '../src/assets/sorts/feca/passive-17.webp';
import FecaPassive18 from '../src/assets/sorts/feca/passive-18.webp';
import FecaPassive2 from '../src/assets/sorts/feca/passive-2.webp';
import FecaPassive3 from '../src/assets/sorts/feca/passive-3.webp';
import FecaPassive4 from '../src/assets/sorts/feca/passive-4.webp';
import FecaPassive5 from '../src/assets/sorts/feca/passive-5.webp';
import FecaPassive6 from '../src/assets/sorts/feca/passive-6.webp';
import FecaPassive7 from '../src/assets/sorts/feca/passive-7.webp';
import FecaPassive8 from '../src/assets/sorts/feca/passive-8.webp';
import FecaPassive9 from '../src/assets/sorts/feca/passive-9.webp';
import FecaWater1 from '../src/assets/sorts/feca/water-1.webp';
import FecaWater2 from '../src/assets/sorts/feca/water-2.webp';
import FecaWater3 from '../src/assets/sorts/feca/water-3.webp';
import FecaWater4 from '../src/assets/sorts/feca/water-4.webp';
import FecaWater5 from '../src/assets/sorts/feca/water-5.webp';
export const FecaSpells = {
    active: {
        1: { src: FecaActive1, alt: 'Immunité', number: 6982 },
        2: { src: FecaActive2, alt: 'Trêve', number: 6983 },
        3: { src: FecaActive3, alt: 'Pacification', number: 6984 },
        4: { src: FecaActive4, alt: 'Provocation', number: 6985 },
        5: { src: FecaActive5, alt: 'Égide', number: 6986 },
        6: { src: FecaActive6, alt: 'Magnétisme', number: 6987 },
    },
    earth: {
        1: { src: FecaEarth1, alt: 'Frappe tellurique', number: 6977 },
        2: { src: FecaEarth2, alt: 'Orbe défensif', number: 6978 },
        3: { src: FecaEarth3, alt: 'Bastion', number: 6979 },
        4: { src: FecaEarth4, alt: 'Rempart', number: 6980 },
        5: { src: FecaEarth5, alt: 'Bâton', number: 6981 },
    },
    fire: {
        1: { src: FecaFire1, alt: 'Fécalistofedes', number: 6967 },
        2: { src: FecaFire2, alt: 'Météorite', number: 6968 },
        3: { src: FecaFire3, alt: 'Attaque naturelle', number: 6969 },
        4: { src: FecaFire4, alt: 'Magma', number: 6970 },
        5: { src: FecaFire5, alt: 'Volcan', number: 6971 },
    },
    passive: {
        1: { src: FecaPassive1, alt: 'Glyphe augmenté', number: 6988 },
        2: { src: FecaPassive2, alt: 'Ligne', number: 6989 },
        3: { src: FecaPassive3, alt: 'Un pour tous', number: 6990 },
        4: { src: FecaPassive4, alt: 'Maître des boucliers', number: 6991 },
        5: { src: FecaPassive5, alt: 'Qui veut la paix prépare la guerre', number: 6992 },
        6: { src: FecaPassive6, alt: 'Marché pacifiste', number: 6993 },
        7: { src: FecaPassive7, alt: 'Connaissance de la carte', number: 6994 },
        8: { src: FecaPassive8, alt: 'La meilleure défense est \'attaque', number: 6995 },
        9: { src: FecaPassive9, alt: 'Armure de combat', number: 6996 },
        10: { src: FecaPassive10, alt: 'Peau rocheuse', number: 6997 },
        11: { src: FecaPassive11, alt: 'Oeil pour oeil', number: 6998 },
        12: { src: FecaPassive12, alt: 'Glyphes persistants', number: 6999 },
        13: { src: FecaPassive13, alt: 'Berger', number: 7000 },
        14: { src: FecaPassive14, alt: 'Expérience du terrain', number: 7001 },
        15: { src: FecaPassive15, alt: 'Boucliers élémentaires', number: 7002 },
        16: { src: FecaPassive16, alt: 'Carapace d\'épines', number: 7003 },
        17: { src: FecaPassive17, alt: 'Compréhensible du Wakfu', number: 7004 },
        18: { src: FecaPassive18, alt: 'Protecteur du troupeau', number: 7005 },
    },
    water: {
        1: { src: FecaWater1, alt: 'Goutte', number: 6972 },
        2: { src: FecaWater2, alt: 'Onde', number: 6973 },
        3: { src: FecaWater3, alt: 'Avalanche', number: 6974 },
        4: { src: FecaWater4, alt: 'Orage', number: 6975 },
        5: { src: FecaWater5, alt: 'Lame de fond', number: 6976 },
    },
};
// Huppermage
import HuppermageActive1 from '../src/assets/sorts/huppermage/active-1.webp';
import HuppermageActive2 from '../src/assets/sorts/huppermage/active-2.webp';
import HuppermageActive3 from '../src/assets/sorts/huppermage/active-3.webp';
import HuppermageActive4 from '../src/assets/sorts/huppermage/active-4.webp';
import HuppermageActive5 from '../src/assets/sorts/huppermage/active-5.webp';
import HuppermageActive6 from '../src/assets/sorts/huppermage/active-6.webp';
import HuppermageEarth1 from '../src/assets/sorts/huppermage/earth-1.webp';
import HuppermageEarth2 from '../src/assets/sorts/huppermage/earth-2.webp';
import HuppermageEarth3 from '../src/assets/sorts/huppermage/earth-3.webp';
import HuppermageEarth4 from '../src/assets/sorts/huppermage/earth-4.webp';
import HuppermageEarth5 from '../src/assets/sorts/huppermage/earth-5.webp';
import HuppermageFire1 from '../src/assets/sorts/huppermage/fire-1.webp';
import HuppermageFire2 from '../src/assets/sorts/huppermage/fire-2.webp';
import HuppermageFire3 from '../src/assets/sorts/huppermage/fire-3.webp';
import HuppermageFire4 from '../src/assets/sorts/huppermage/fire-4.webp';
import HuppermageFire5 from '../src/assets/sorts/huppermage/fire-5.webp';
import HuppermagePassive1 from '../src/assets/sorts/huppermage/passive-1.webp';
import HuppermagePassive10 from '../src/assets/sorts/huppermage/passive-10.webp';
import HuppermagePassive11 from '../src/assets/sorts/huppermage/passive-11.webp';
import HuppermagePassive12 from '../src/assets/sorts/huppermage/passive-12.webp';
import HuppermagePassive13 from '../src/assets/sorts/huppermage/passive-13.webp';
import HuppermagePassive14 from '../src/assets/sorts/huppermage/passive-14.webp';
import HuppermagePassive15 from '../src/assets/sorts/huppermage/passive-15.webp';
import HuppermagePassive16 from '../src/assets/sorts/huppermage/passive-16.webp';
import HuppermagePassive17 from '../src/assets/sorts/huppermage/passive-17.webp';
import HuppermagePassive18 from '../src/assets/sorts/huppermage/passive-18.webp';
import HuppermagePassive2 from '../src/assets/sorts/huppermage/passive-2.webp';
import HuppermagePassive3 from '../src/assets/sorts/huppermage/passive-3.webp';
import HuppermagePassive4 from '../src/assets/sorts/huppermage/passive-4.webp';
import HuppermagePassive5 from '../src/assets/sorts/huppermage/passive-5.webp';
import HuppermagePassive6 from '../src/assets/sorts/huppermage/passive-6.webp';
import HuppermagePassive7 from '../src/assets/sorts/huppermage/passive-7.webp';
import HuppermagePassive8 from '../src/assets/sorts/huppermage/passive-8.webp';
import HuppermagePassive9 from '../src/assets/sorts/huppermage/passive-9.webp';
import HuppermageWater1 from '../src/assets/sorts/huppermage/water-1.webp';
import HuppermageWater2 from '../src/assets/sorts/huppermage/water-2.webp';
import HuppermageWater3 from '../src/assets/sorts/huppermage/water-3.webp';
import HuppermageWater4 from '../src/assets/sorts/huppermage/water-4.webp';
import HuppermageWater5 from '../src/assets/sorts/huppermage/water-5.webp';
import HuppermageWind1 from '../src/assets/sorts/huppermage/wind-1.webp';
import HuppermageWind2 from '../src/assets/sorts/huppermage/wind-2.webp';
import HuppermageWind3 from '../src/assets/sorts/huppermage/wind-3.webp';
import HuppermageWind4 from '../src/assets/sorts/huppermage/wind-4.webp';
import HuppermageWind5 from '../src/assets/sorts/huppermage/wind-5.webp';
export const HuppermageSpells = {
    active: {
        1: { src: HuppermageActive1, alt: 'Forteresse solaire', number: 5575 },
        2: { src: HuppermageActive2, alt: 'Surcharge runique', number: 7755 },
        3: { src: HuppermageActive3, alt: 'Mur d\'énergie', number: 5576 },
        4: { src: HuppermageActive4, alt: 'Visio Imperum', number: 7754 },
        5: { src: HuppermageActive5, alt: 'Principio Valere', number: 5577 },
        6: { src: HuppermageActive6, alt: 'Runification', number: 7809 },
    },
    earth: {
        1: { src: HuppermageEarth1, alt: 'Éboulement', number: 5567 },
        2: { src: HuppermageEarth2, alt: 'Faille', number: 5569 },
        3: { src: HuppermageEarth3, alt: 'Faisceau de lune', number: 5597 },
        4: { src: HuppermageEarth4, alt: 'Feuillure', number: 5568 },
        5: { src: HuppermageEarth5, alt: 'Épée de lumière', number: 5595 },
    },
    fire: {
        1: { src: HuppermageFire1, alt: 'Flux d\'énergie', number: 5562 },
        2: { src: HuppermageFire2, alt: 'Disque luminescent', number: 5571 },
        3: { src: HuppermageFire3, alt: 'Résonance', number: 5561 },
        4: { src: HuppermageFire4, alt: 'Lueur de l\'aube', number: 5563 },
        5: { src: HuppermageFire5, alt: 'Rayon crépusculaire', number: 5591 },
    },
    passive: {
        1: { src: HuppermagePassive1, alt: 'Dynamo', number: 5579 },
        2: { src: HuppermagePassive2, alt: 'Antithèse', number: 7802 },
        3: { src: HuppermagePassive3, alt: 'Distension Élémentaire', number: 5581 },
        4: { src: HuppermagePassive4, alt: 'Liaison Lumineuse', number: 5582 },
        5: { src: HuppermagePassive5, alt: 'Plénitude', number: 5585 },
        6: { src: HuppermagePassive6, alt: 'Universalité', number: 5583 },
        7: { src: HuppermagePassive7, alt: 'Extension des sens', number: 7797 },
        8: { src: HuppermagePassive8, alt: 'Profusion runique', number: 5586 },
        9: { src: HuppermagePassive9, alt: 'Absorption Qudramentale', number: 5587 },
        10: { src: HuppermagePassive10, alt: 'Réfraction Élémentaire', number: 5588 },
        11: { src: HuppermagePassive11, alt: 'Altruisme de l\'âme', number: 7804 },
        12: { src: HuppermagePassive12, alt: 'Nouveau souffle', number: 7805 },
        13: { src: HuppermagePassive13, alt: 'Essor de l\'âme', number: 7803 },
        14: { src: HuppermagePassive14, alt: 'Pulsation', number: 7801 },
        15: { src: HuppermagePassive15, alt: 'Sauvegarde Runique', number: 5584 },
        16: { src: HuppermagePassive16, alt: 'Initiative de l\'âme', number: 5580 },
        17: { src: HuppermagePassive17, alt: 'Combinaison Élémentaire', number: 7800 },
        18: { src: HuppermagePassive18, alt: 'Transcendance Runique', number: 7798 },
    },
    water: {
        1: { src: HuppermageWater1, alt: 'Averse', number: 5564 },
        2: { src: HuppermageWater2, alt: 'Débâcle', number: 5565 },
        3: { src: HuppermageWater3, alt: 'Flèche de lumière', number: 5594 },
        4: { src: HuppermageWater4, alt: 'Vestige', number: 5566 },
        5: { src: HuppermageWater5, alt: 'Larmes scintillantes', number: 5593 },
    },
    wind: {
        1: { src: HuppermageWind1, alt: 'Papillons diurnes', number: 5570 },
        2: { src: HuppermageWind2, alt: 'Ombres dansantes', number: 5572 },
        3: { src: HuppermageWind3, alt: 'Orbes luisants', number: 5590 },
        4: { src: HuppermageWind4, alt: 'Mirage', number: 5596 },
        5: { src: HuppermageWind5, alt: 'Halo Chatoyant', number: 5592 },
    },
};
// Iop
import IopActive1 from '../src/assets/sorts/iop/active-1.webp';
import IopActive2 from '../src/assets/sorts/iop/active-2.webp';
import IopActive3 from '../src/assets/sorts/iop/active-3.webp';
import IopActive4 from '../src/assets/sorts/iop/active-4.webp';
import IopActive5 from '../src/assets/sorts/iop/active-5.webp';
import IopActive6 from '../src/assets/sorts/iop/active-6.webp';
import IopEarth1 from '../src/assets/sorts/iop/earth-1.webp';
import IopEarth2 from '../src/assets/sorts/iop/earth-2.webp';
import IopEarth3 from '../src/assets/sorts/iop/earth-3.webp';
import IopEarth4 from '../src/assets/sorts/iop/earth-4.webp';
import IopEarth5 from '../src/assets/sorts/iop/earth-5.webp';
import IopFire1 from '../src/assets/sorts/iop/fire-1.webp';
import IopFire2 from '../src/assets/sorts/iop/fire-2.webp';
import IopFire3 from '../src/assets/sorts/iop/fire-3.webp';
import IopFire4 from '../src/assets/sorts/iop/fire-4.webp';
import IopFire5 from '../src/assets/sorts/iop/fire-5.webp';
import IopPassive1 from '../src/assets/sorts/iop/passive-1.webp';
import IopPassive10 from '../src/assets/sorts/iop/passive-10.webp';
import IopPassive2 from '../src/assets/sorts/iop/passive-2.webp';
import IopPassive3 from '../src/assets/sorts/iop/passive-3.webp';
import IopPassive4 from '../src/assets/sorts/iop/passive-4.webp';
import IopPassive5 from '../src/assets/sorts/iop/passive-5.webp';
import IopPassive6 from '../src/assets/sorts/iop/passive-6.webp';
import IopPassive7 from '../src/assets/sorts/iop/passive-7.webp';
import IopPassive8 from '../src/assets/sorts/iop/passive-8.webp';
import IopPassive9 from '../src/assets/sorts/iop/passive-9.webp';
import IopWind1 from '../src/assets/sorts/iop/wind-1.webp';
import IopWind2 from '../src/assets/sorts/iop/wind-2.webp';
import IopWind3 from '../src/assets/sorts/iop/wind-3.webp';
import IopWind4 from '../src/assets/sorts/iop/wind-4.webp';
import IopWind5 from '../src/assets/sorts/iop/wind-5.webp';
export const IopSpells = {
    active: {
        1: { src: IopActive1, alt: 'Bond', number: 4790 },
        2: { src: IopActive2, alt: 'Posture de Défense', number: 4791 },
        3: { src: IopActive3, alt: 'Etendard de Bravoure', number: 4793 },
        4: { src: IopActive4, alt: 'Focus', number: 4792 },
        5: { src: IopActive5, alt: 'Heure de Gloire', number: 5130 },
        6: { src: IopActive6, alt: 'Amplification', number: 4794 },
    },
    earth: {
        1: { src: IopEarth1, alt: 'Ebranler', number: 4780 },
        2: { src: IopEarth2, alt: 'Roknocerok', number: 4781 },
        3: { src: IopEarth3, alt: 'Impact', number: 4782 },
        4: { src: IopEarth4, alt: 'Charge', number: 4783 },
        5: { src: IopEarth5, alt: 'Ravage', number: 4784 },
    },
    fire: {
        1: { src: IopFire1, alt: 'Fulgur', number: 4775 },
        2: { src: IopFire2, alt: 'Epée Céleste', number: 4778 },
        3: { src: IopFire3, alt: 'Super Iop Punch', number: 4777 },
        4: { src: IopFire4, alt: 'Epée du Jugement', number: 4776 },
        5: { src: IopFire5, alt: 'Colère de Iop', number: 4779 },
    },
    passive: {
        1: { src: IopPassive1, alt: 'Virilité', number: 4795 },
        2: { src: IopPassive2, alt: 'Autorité', number: 4797 },
        3: { src: IopPassive3, alt: 'Démonstration', number: 4798 },
        4: { src: IopPassive4, alt: 'Expert Tacleur', number: 4799 },
        5: { src: IopPassive5, alt: 'Roi de la Colline', number: 5102 },
        6: { src: IopPassive6, alt: 'Démonstration', number: 4796 },
        7: { src: IopPassive7, alt: 'Charge Furieuse', number: 5101 },
        8: { src: IopPassive8, alt: 'Faille Sismique', number: 5104 },
        9: { src: IopPassive9, alt: 'Bravoure', number: 5100 },
        10: { src: IopPassive10, alt: 'Persécuteur', number: 5103 },
    },
    wind: {
        1: { src: IopWind1, alt: 'Jabs', number: 4785 },
        2: { src: IopWind2, alt: 'Rafale', number: 4786 },
        3: { src: IopWind3, alt: 'Torgnole', number: 4787 },
        4: { src: IopWind4, alt: 'Eventrail', number: 4788 },
        5: { src: IopWind5, alt: 'Uppercut', number: 4789 },
    },
};
// Osamodas
import OsamodasActive1 from '../src/assets/sorts/osamodas/active-1.webp';
import OsamodasActive2 from '../src/assets/sorts/osamodas/active-2.webp';
import OsamodasActive3 from '../src/assets/sorts/osamodas/active-3.webp';
import OsamodasActive4 from '../src/assets/sorts/osamodas/active-4.webp';
import OsamodasActive5 from '../src/assets/sorts/osamodas/active-5.webp';
import OsamodasActive6 from '../src/assets/sorts/osamodas/active-6.webp';
import OsamodasEarth1 from '../src/assets/sorts/osamodas/earth-1.webp';
import OsamodasEarth2 from '../src/assets/sorts/osamodas/earth-2.webp';
import OsamodasEarth3 from '../src/assets/sorts/osamodas/earth-3.webp';
import OsamodasEarth4 from '../src/assets/sorts/osamodas/earth-4.webp';
import OsamodasEarth5 from '../src/assets/sorts/osamodas/earth-5.webp';
import OsamodasFire1 from '../src/assets/sorts/osamodas/fire-1.webp';
import OsamodasFire2 from '../src/assets/sorts/osamodas/fire-2.webp';
import OsamodasFire3 from '../src/assets/sorts/osamodas/fire-3.webp';
import OsamodasFire4 from '../src/assets/sorts/osamodas/fire-4.webp';
import OsamodasFire5 from '../src/assets/sorts/osamodas/fire-5.webp';
import OsamodasPassive1 from '../src/assets/sorts/osamodas/passive-1.webp';
import OsamodasPassive10 from '../src/assets/sorts/osamodas/passive-10.webp';
import OsamodasPassive11 from '../src/assets/sorts/osamodas/passive-11.webp';
import OsamodasPassive12 from '../src/assets/sorts/osamodas/passive-12.webp';
import OsamodasPassive13 from '../src/assets/sorts/osamodas/passive-13.webp';
import OsamodasPassive14 from '../src/assets/sorts/osamodas/passive-14.webp';
import OsamodasPassive15 from '../src/assets/sorts/osamodas/passive-15.webp';
import OsamodasPassive16 from '../src/assets/sorts/osamodas/passive-16.webp';
import OsamodasPassive17 from '../src/assets/sorts/osamodas/passive-17.webp';
import OsamodasPassive2 from '../src/assets/sorts/osamodas/passive-2.webp';
import OsamodasPassive3 from '../src/assets/sorts/osamodas/passive-3.webp';
import OsamodasPassive4 from '../src/assets/sorts/osamodas/passive-4.webp';
import OsamodasPassive5 from '../src/assets/sorts/osamodas/passive-5.webp';
import OsamodasPassive6 from '../src/assets/sorts/osamodas/passive-6.webp';
import OsamodasPassive7 from '../src/assets/sorts/osamodas/passive-7.webp';
import OsamodasPassive8 from '../src/assets/sorts/osamodas/passive-8.webp';
import OsamodasPassive9 from '../src/assets/sorts/osamodas/passive-9.webp';
import OsamodasWind1 from '../src/assets/sorts/osamodas/wind-1.webp';
import OsamodasWind2 from '../src/assets/sorts/osamodas/wind-2.webp';
import OsamodasWind3 from '../src/assets/sorts/osamodas/wind-3.webp';
import OsamodasWind4 from '../src/assets/sorts/osamodas/wind-4.webp';
import OsamodasWind5 from '../src/assets/sorts/osamodas/wind-5.webp';
export const OsamodasSpells = {
    active: {
        1: { src: OsamodasActive1, alt: 'Dernier souffle', number: 7322 },
        2: { src: OsamodasActive2, alt: 'Piqure', number: 7323 },
        3: { src: OsamodasActive3, alt: 'Célérité', number: 7324 },
        4: { src: OsamodasActive4, alt: 'Cri affaiblissant', number: 7325 },
        5: { src: OsamodasActive5, alt: 'Relais', number: 7326 },
        6: { src: OsamodasActive6, alt: 'Lien animal', number: 7327 },
    },
    earth: {
        1: { src: OsamodasEarth1, alt: 'Tempête de sable', number: 7312 },
        2: { src: OsamodasEarth2, alt: 'Pesanteur', number: 7313 },
        3: { src: OsamodasEarth3, alt: 'Empalement', number: 7314 },
        4: { src: OsamodasEarth4, alt: 'Gambade', number: 7315 },
        5: { src: OsamodasEarth5, alt: 'Frappe du craqueleur', number: 7316 },
    },
    fire: {
        1: { src: OsamodasFire1, alt: 'Corbeau incendiaire', number: 7307 },
        2: { src: OsamodasFire2, alt: 'Fouet enflammé', number: 7308 },
        3: { src: OsamodasFire3, alt: 'Tornade de flammes', number: 7309 },
        4: { src: OsamodasFire4, alt: 'Attisement', number: 7310 },
        5: { src: OsamodasFire5, alt: 'Souffle du dragon', number: 7311 },
    },
    passive: {
        1: { src: OsamodasPassive1, alt: 'Rage du Mulou', number: 7328 },
        2: { src: OsamodasPassive2, alt: 'Don animal', number: 7329 },
        3: { src: OsamodasPassive3, alt: 'Vision du corbac', number: 7330 },
        4: { src: OsamodasPassive4, alt: 'Guerrier invocateur', number: 7331 },
        5: { src: OsamodasPassive5, alt: 'Invocateur solitaire', number: 7332 },
        6: { src: OsamodasPassive6, alt: 'Puissance draconique', number: 7338 },
        7: { src: OsamodasPassive7, alt: 'Esprit du phénix', number: 7334 },
        8: { src: OsamodasPassive8, alt: 'Force-taure', number: 7335 },
        9: { src: OsamodasPassive9, alt: 'Synergie animale', number: 7336 },
        10: { src: OsamodasPassive10, alt: 'Symbiose', number: 7337 },
        11: { src: OsamodasPassive11, alt: 'Transcendance draconique', number: 7333 },
        12: { src: OsamodasPassive12, alt: 'Étoile du Sud', number: 7339 },
        13: { src: OsamodasPassive13, alt: 'Sacrifice animal', number: 7340 },
        14: { src: OsamodasPassive14, alt: 'Étoile de l\'Est', number: 7341 },
        15: { src: OsamodasPassive15, alt: 'Dévouement animal', number: 7342 },
        16: { src: OsamodasPassive16, alt: 'Art du dressage', number: 7343 },
        17: { src: OsamodasPassive17, alt: 'Partage animal', number: 7344 },
    },
    wind: {
        1: { src: OsamodasWind1, alt: 'Fouet', number: 7317 },
        2: { src: OsamodasWind2, alt: 'Déplumage', number: 7318 },
        3: { src: OsamodasWind3, alt: 'Transfert', number: 7319 },
        4: { src: OsamodasWind4, alt: 'Souffle répulsif', number: 7320 },
        5: { src: OsamodasWind5, alt: 'Tornade de plumes', number: 7321 },
    },
};
// Ouginak
import OuginakActive1 from '../src/assets/sorts/ouginak/active-1.webp';
import OuginakActive2 from '../src/assets/sorts/ouginak/active-2.webp';
import OuginakActive3 from '../src/assets/sorts/ouginak/active-3.webp';
import OuginakActive4 from '../src/assets/sorts/ouginak/active-4.webp';
import OuginakActive5 from '../src/assets/sorts/ouginak/active-5.webp';
import OuginakActive6 from '../src/assets/sorts/ouginak/active-6.webp';
import OuginakEarth1 from '../src/assets/sorts/ouginak/earth-1.webp';
import OuginakEarth2 from '../src/assets/sorts/ouginak/earth-2.webp';
import OuginakEarth3 from '../src/assets/sorts/ouginak/earth-3.webp';
import OuginakEarth4 from '../src/assets/sorts/ouginak/earth-4.webp';
import OuginakEarth5 from '../src/assets/sorts/ouginak/earth-5.webp';
import OuginakPassive1 from '../src/assets/sorts/ouginak/passive-1.webp';
import OuginakPassive10 from '../src/assets/sorts/ouginak/passive-10.webp';
import OuginakPassive11 from '../src/assets/sorts/ouginak/passive-11.webp';
import OuginakPassive12 from '../src/assets/sorts/ouginak/passive-12.webp';
import OuginakPassive13 from '../src/assets/sorts/ouginak/passive-13.webp';
import OuginakPassive14 from '../src/assets/sorts/ouginak/passive-14.webp';
import OuginakPassive15 from '../src/assets/sorts/ouginak/passive-15.webp';
import OuginakPassive16 from '../src/assets/sorts/ouginak/passive-16.webp';
import OuginakPassive17 from '../src/assets/sorts/ouginak/passive-17.webp';
import OuginakPassive18 from '../src/assets/sorts/ouginak/passive-18.webp';
import OuginakPassive19 from '../src/assets/sorts/ouginak/passive-19.webp';
import OuginakPassive2 from '../src/assets/sorts/ouginak/passive-2.webp';
import OuginakPassive3 from '../src/assets/sorts/ouginak/passive-3.webp';
import OuginakPassive4 from '../src/assets/sorts/ouginak/passive-4.webp';
import OuginakPassive5 from '../src/assets/sorts/ouginak/passive-5.webp';
import OuginakPassive6 from '../src/assets/sorts/ouginak/passive-6.webp';
import OuginakPassive7 from '../src/assets/sorts/ouginak/passive-7.webp';
import OuginakPassive8 from '../src/assets/sorts/ouginak/passive-8.webp';
import OuginakPassive9 from '../src/assets/sorts/ouginak/passive-9.webp';
import OuginakWater1 from '../src/assets/sorts/ouginak/water-1.webp';
import OuginakWater2 from '../src/assets/sorts/ouginak/water-2.webp';
import OuginakWater3 from '../src/assets/sorts/ouginak/water-3.webp';
import OuginakWater4 from '../src/assets/sorts/ouginak/water-4.webp';
import OuginakWater5 from '../src/assets/sorts/ouginak/water-5.webp';
import OuginakWind1 from '../src/assets/sorts/ouginak/wind-1.webp';
import OuginakWind2 from '../src/assets/sorts/ouginak/wind-2.webp';
import OuginakWind3 from '../src/assets/sorts/ouginak/wind-3.webp';
import OuginakWind4 from '../src/assets/sorts/ouginak/wind-4.webp';
import OuginakWind5 from '../src/assets/sorts/ouginak/wind-5.webp';
export const OuginakSpells = {
    active: {
        1: { src: OuginakActive1, alt: 'Chasseur', number: 6284 },
        2: { src: OuginakActive2, alt: 'Élan', number: 7552 },
        3: { src: OuginakActive3, alt: 'Canine', number: 6287 },
        4: { src: OuginakActive4, alt: 'Apaisement', number: 6288 },
        5: { src: OuginakActive5, alt: 'Poursuite', number: 6285 },
        6: { src: OuginakActive6, alt: 'Meute', number: 7551 },
    },
    earth: {
        1: { src: OuginakEarth1, alt: 'Croc-en-jambe', number: 6261 },
        2: { src: OuginakEarth2, alt: 'Bastonnade', number: 6263 },
        3: { src: OuginakEarth3, alt: 'Molosse', number: 6265 },
        4: { src: OuginakEarth4, alt: 'Hachure', number: 6262 },
        5: { src: OuginakEarth5, alt: 'Saccade', number: 6264 },
    },
    passive: {
        1: { src: OuginakPassive1, alt: 'Compagnon', number: 6274 },
        2: { src: OuginakPassive2, alt: 'Marchandage', number: 6280 },
        3: { src: OuginakPassive3, alt: 'Canin\'Os', number: 7596 },
        4: { src: OuginakPassive4, alt: 'Acharné', number: 7553 },
        5: { src: OuginakPassive5, alt: 'Chasse ouverte', number: 7554 },
        6: { src: OuginakPassive6, alt: 'Digestion', number: 7555 },
        7: { src: OuginakPassive7, alt: 'Énergie Canine', number: 7556 },
        8: { src: OuginakPassive8, alt: 'Ardeur', number: 6275 },
        9: { src: OuginakPassive9, alt: 'Pillage', number: 6277 },
        10: { src: OuginakPassive10, alt: 'Fureur', number: 7557 },
        11: { src: OuginakPassive11, alt: 'Epuisement', number: 6276 },
        12: { src: OuginakPassive12, alt: 'Pistage', number: 6281 },
        13: { src: OuginakPassive13, alt: 'Flair', number: 6279 },
        14: { src: OuginakPassive14, alt: 'Art Canin', number: 6272 },
        15: { src: OuginakPassive15, alt: 'Terrier', number: 6271 },
        16: { src: OuginakPassive16, alt: 'Crocs Futés', number: 6278 },
        17: { src: OuginakPassive17, alt: 'Traqueur Canin', number: 7558 },
        18: { src: OuginakPassive18, alt: 'Force sage', number: 6282 },
        19: { src: OuginakPassive19, alt: 'Maître Chien', number: 6273 },
    },
    water: {
        1: { src: OuginakWater1, alt: 'Emeute', number: 6260 },
        2: { src: OuginakWater2, alt: 'Fléau', number: 6257 },
        3: { src: OuginakWater3, alt: 'Rupture', number: 6258 },
        4: { src: OuginakWater4, alt: 'Plombage', number: 6256 },
        5: { src: OuginakWater5, alt: 'Balafre', number: 6259 },
    },
    wind: {
        1: { src: OuginakWind1, alt: 'Balayage', number: 6266 },
        2: { src: OuginakWind2, alt: 'Contusion', number: 6267 },
        3: { src: OuginakWind3, alt: 'Cador', number: 6268 },
        4: { src: OuginakWind4, alt: 'Brise\'Os', number: 6269 },
        5: { src: OuginakWind5, alt: 'Baroud', number: 6270 },
    },
};
// Pandawa
import PandawaActive1 from '../src/assets/sorts/pandawa/active-1.webp';
import PandawaActive2 from '../src/assets/sorts/pandawa/active-2.webp';
import PandawaActive3 from '../src/assets/sorts/pandawa/active-3.webp';
import PandawaActive4 from '../src/assets/sorts/pandawa/active-4.webp';
import PandawaActive5 from '../src/assets/sorts/pandawa/active-5.webp';
import PandawaActive6 from '../src/assets/sorts/pandawa/active-6.webp';
import PandawaEarth1 from '../src/assets/sorts/pandawa/earth-1.webp';
import PandawaEarth2 from '../src/assets/sorts/pandawa/earth-2.webp';
import PandawaEarth3 from '../src/assets/sorts/pandawa/earth-3.webp';
import PandawaEarth4 from '../src/assets/sorts/pandawa/earth-4.webp';
import PandawaEarth5 from '../src/assets/sorts/pandawa/earth-5.webp';
import PandawaFire1 from '../src/assets/sorts/pandawa/fire-1.webp';
import PandawaFire2 from '../src/assets/sorts/pandawa/fire-2.webp';
import PandawaFire3 from '../src/assets/sorts/pandawa/fire-3.webp';
import PandawaFire4 from '../src/assets/sorts/pandawa/fire-4.webp';
import PandawaFire5 from '../src/assets/sorts/pandawa/fire-5.webp';
import PandawaPassive1 from '../src/assets/sorts/pandawa/passive-1.webp';
import PandawaPassive10 from '../src/assets/sorts/pandawa/passive-10.webp';
import PandawaPassive2 from '../src/assets/sorts/pandawa/passive-2.webp';
import PandawaPassive3 from '../src/assets/sorts/pandawa/passive-3.webp';
import PandawaPassive4 from '../src/assets/sorts/pandawa/passive-4.webp';
import PandawaPassive5 from '../src/assets/sorts/pandawa/passive-5.webp';
import PandawaPassive6 from '../src/assets/sorts/pandawa/passive-6.webp';
import PandawaPassive7 from '../src/assets/sorts/pandawa/passive-7.webp';
import PandawaPassive8 from '../src/assets/sorts/pandawa/passive-8.webp';
import PandawaPassive9 from '../src/assets/sorts/pandawa/passive-9.webp';
import PandawaWater1 from '../src/assets/sorts/pandawa/water-1.webp';
import PandawaWater2 from '../src/assets/sorts/pandawa/water-2.webp';
import PandawaWater3 from '../src/assets/sorts/pandawa/water-3.webp';
import PandawaWater4 from '../src/assets/sorts/pandawa/water-4.webp';
import PandawaWater5 from '../src/assets/sorts/pandawa/water-5.webp';
export const PandawaSpells = {
    active: {
        1: { src: PandawaActive1, alt: 'Tonneau', number: 4718 },
        2: { src: PandawaActive2, alt: 'Soif', number: 6844 },
        3: { src: PandawaActive3, alt: 'Happy Hour', number: 4721 },
        4: { src: PandawaActive4, alt: 'Ether', number: 4719 },
        5: { src: PandawaActive5, alt: 'Téléportono', number: 4720 },
        6: { src: PandawaActive6, alt: 'Ebriété', number: 6845 },
    },
    earth: {
        1: { src: PandawaEarth1, alt: 'Triple Karma Leet', number: 4712 },
        2: { src: PandawaEarth2, alt: 'Six Roses', number: 4713 },
        3: { src: PandawaEarth3, alt: 'Frappe Fût', number: 4714 },
        4: { src: PandawaEarth4, alt: 'Lucha L\'ambrée', number: 4715 },
        5: { src: PandawaEarth5, alt: 'Blitzkriek', number: 4716 },
    },
    fire: {
        1: { src: PandawaFire1, alt: 'Souffle Enflammé', number: 4702 },
        2: { src: PandawaFire2, alt: 'Tournée Générale', number: 4703 },
        3: { src: PandawaFire3, alt: 'Coup Laiteux', number: 4704 },
        4: { src: PandawaFire4, alt: 'Flasque Explosive', number: 4705 },
        5: { src: PandawaFire5, alt: 'Toilaitage', number: 4706 },
    },
    passive: {
        1: { src: PandawaPassive1, alt: 'Cocktail', number: 4722 },
        2: { src: PandawaPassive2, alt: 'Maître de l\'Ivresse', number: 4723 },
        3: { src: PandawaPassive3, alt: 'Tonneau sans Fond', number: 4724 },
        4: { src: PandawaPassive4, alt: 'Tonneau Agressif', number: 4725 },
        5: { src: PandawaPassive5, alt: 'Instinct Laiteux', number: 4726 },
        6: { src: PandawaPassive6, alt: 'Bambouteille', number: 5148 },
        7: { src: PandawaPassive7, alt: 'Cyanose', number: 5149 },
        8: { src: PandawaPassive8, alt: 'Buvette', number: 5150 },
        9: { src: PandawaPassive9, alt: 'Pandémie', number: 5151 },
        10: { src: PandawaPassive10, alt: 'Éméché', number: 6846 },
    },
    water: {
        1: { src: PandawaWater1, alt: 'Souffle Laiteux', number: 4707 },
        2: { src: PandawaWater2, alt: 'Nuage Laiteux', number: 4708 },
        3: { src: PandawaWater3, alt: 'Tekilait', number: 4709 },
        4: { src: PandawaWater4, alt: 'Vague de Lait', number: 4710 },
        5: { src: PandawaWater5, alt: 'Fontaine de Laiqueur', number: 4711 },
    },
};
// Roublard
import RoublardActive1 from '../src/assets/sorts/roublard/active-1.webp';
import RoublardActive2 from '../src/assets/sorts/roublard/active-2.webp';
import RoublardActive3 from '../src/assets/sorts/roublard/active-3.webp';
import RoublardActive4 from '../src/assets/sorts/roublard/active-4.webp';
import RoublardActive5 from '../src/assets/sorts/roublard/active-5.webp';
import RoublardActive6 from '../src/assets/sorts/roublard/active-6.webp';
import RoublardEarth1 from '../src/assets/sorts/roublard/earth-1.webp';
import RoublardEarth2 from '../src/assets/sorts/roublard/earth-2.webp';
import RoublardEarth3 from '../src/assets/sorts/roublard/earth-3.webp';
import RoublardEarth4 from '../src/assets/sorts/roublard/earth-4.webp';
import RoublardEarth5 from '../src/assets/sorts/roublard/earth-5.webp';
import RoublardFire1 from '../src/assets/sorts/roublard/fire-1.webp';
import RoublardFire2 from '../src/assets/sorts/roublard/fire-2.webp';
import RoublardFire3 from '../src/assets/sorts/roublard/fire-3.webp';
import RoublardFire4 from '../src/assets/sorts/roublard/fire-4.webp';
import RoublardFire5 from '../src/assets/sorts/roublard/fire-5.webp';
import RoublardPassive1 from '../src/assets/sorts/roublard/passive-1.webp';
import RoublardPassive10 from '../src/assets/sorts/roublard/passive-10.webp';
import RoublardPassive11 from '../src/assets/sorts/roublard/passive-11.webp';
import RoublardPassive12 from '../src/assets/sorts/roublard/passive-12.webp';
import RoublardPassive13 from '../src/assets/sorts/roublard/passive-13.webp';
import RoublardPassive14 from '../src/assets/sorts/roublard/passive-14.webp';
import RoublardPassive15 from '../src/assets/sorts/roublard/passive-15.webp';
import RoublardPassive16 from '../src/assets/sorts/roublard/passive-16.webp';
import RoublardPassive17 from '../src/assets/sorts/roublard/passive-17.webp';
import RoublardPassive18 from '../src/assets/sorts/roublard/passive-18.webp';
import RoublardPassive19 from '../src/assets/sorts/roublard/passive-19.webp';
import RoublardPassive2 from '../src/assets/sorts/roublard/passive-2.webp';
import RoublardPassive20 from '../src/assets/sorts/roublard/passive-20.webp';
import RoublardPassive3 from '../src/assets/sorts/roublard/passive-3.webp';
import RoublardPassive4 from '../src/assets/sorts/roublard/passive-4.webp';
import RoublardPassive5 from '../src/assets/sorts/roublard/passive-5.webp';
import RoublardPassive6 from '../src/assets/sorts/roublard/passive-6.webp';
import RoublardPassive7 from '../src/assets/sorts/roublard/passive-7.webp';
import RoublardPassive8 from '../src/assets/sorts/roublard/passive-8.webp';
import RoublardPassive9 from '../src/assets/sorts/roublard/passive-9.webp';
import RoublardWind1 from '../src/assets/sorts/roublard/wind-1.webp';
import RoublardWind2 from '../src/assets/sorts/roublard/wind-2.webp';
import RoublardWind3 from '../src/assets/sorts/roublard/wind-3.webp';
import RoublardWind4 from '../src/assets/sorts/roublard/wind-4.webp';
import RoublardWind5 from '../src/assets/sorts/roublard/wind-5.webp';
export const RoublardSpells = {
    active: {
        1: { src: RoublardActive1, alt: 'Botte', number: 6490 },
        2: { src: RoublardActive2, alt: 'Fumigènes', number: 6494 },
        3: { src: RoublardActive3, alt: 'Grappin', number: 6492 },
        4: { src: RoublardActive4, alt: 'Evanescence', number: 6491 },
        5: { src: RoublardActive5, alt: 'Aimant', number: 6493 },
        6: { src: RoublardActive6, alt: 'Défourailleur', number: 6489 },
    },
    earth: {
        1: { src: RoublardEarth1, alt: 'Mitraille', number: 6468 },
        2: { src: RoublardEarth2, alt: 'Troublon', number: 6469 },
        3: { src: RoublardEarth3, alt: 'Balle plombate', number: 6470 },
        4: { src: RoublardEarth4, alt: 'Dague boomerang', number: 6471 },
        5: { src: RoublardEarth5, alt: 'Pulsar', number: 6472 },
    },
    fire: {
        1: { src: RoublardFire1, alt: 'Barbrûlé', number: 6463 },
        2: { src: RoublardFire2, alt: 'Bombe collante', number: 6464 },
        3: { src: RoublardFire3, alt: 'Exécution', number: 6465 },
        4: { src: RoublardFire4, alt: 'Croisemennt', number: 6466 },
        5: { src: RoublardFire5, alt: 'Perforation', number: 6467 },
    },
    passive: {
        1: { src: RoublardPassive1, alt: 'Trainée de poudre', number: 7983 },
        2: { src: RoublardPassive2, alt: 'Roublaboom', number: 6479 },
        3: { src: RoublardPassive3, alt: 'Explobombe', number: 7065 },
        4: { src: RoublardPassive4, alt: 'Artificier', number: 6482 },
        5: { src: RoublardPassive5, alt: 'Fugitif', number: 6488 },
        6: { src: RoublardPassive6, alt: 'Maître des lames', number: 6486 },
        7: { src: RoublardPassive7, alt: 'Bombes élémentaires', number: 7090 },
        8: { src: RoublardPassive8, alt: 'Tunique renforcée', number: 6483 },
        9: { src: RoublardPassive9, alt: 'Bomber Fan', number: 6481 },
        10: { src: RoublardPassive10, alt: 'Tir surprise', number: 7062 },
        11: { src: RoublardPassive11, alt: 'Fuyard', number: 6480 },
        12: { src: RoublardPassive12, alt: 'Maître Roublard', number: 7091 },
        13: { src: RoublardPassive13, alt: 'Baril', number: 7063 },
        14: { src: RoublardPassive14, alt: 'Lame rouillée', number: 6485 },
        15: { src: RoublardPassive15, alt: 'Démineur', number: 6484 },
        16: { src: RoublardPassive16, alt: 'Mur de poudre', number: 6487 },
        17: { src: RoublardPassive17, alt: 'Dynamite', number: 7064 },
        18: { src: RoublardPassive18, alt: 'Jackpot', number: 7092 },
        19: { src: RoublardPassive19, alt: 'Tacticien', number: 7982 },
        20: { src: RoublardPassive20, alt: 'Bombes à retardement', number: 7984 },
    },
    wind: {
        1: { src: RoublardWind1, alt: 'Coup rapide', number: 6473 },
        2: { src: RoublardWind2, alt: 'Tricherie', number: 6474 },
        3: { src: RoublardWind3, alt: 'Espingole', number: 6475 },
        4: { src: RoublardWind4, alt: 'Longue lame', number: 6478 },
        5: { src: RoublardWind5, alt: 'Oblitération', number: 6476 },
    },
};
// Sacrieur 
import SacrieurActive1 from '../src/assets/sorts/sacrieur/active-1.webp';
import SacrieurActive2 from '../src/assets/sorts/sacrieur/active-2.webp';
import SacrieurActive3 from '../src/assets/sorts/sacrieur/active-3.webp';
import SacrieurActive4 from '../src/assets/sorts/sacrieur/active-4.webp';
import SacrieurActive5 from '../src/assets/sorts/sacrieur/active-5.webp';
import SacrieurActive6 from '../src/assets/sorts/sacrieur/active-6.webp';
import SacrieurEarth1 from '../src/assets/sorts/sacrieur/earth-1.webp';
import SacrieurEarth2 from '../src/assets/sorts/sacrieur/earth-2.webp';
import SacrieurEarth3 from '../src/assets/sorts/sacrieur/earth-3.webp';
import SacrieurEarth4 from '../src/assets/sorts/sacrieur/earth-4.webp';
import SacrieurEarth5 from '../src/assets/sorts/sacrieur/earth-5.webp';
import SacrieurFire1 from '../src/assets/sorts/sacrieur/fire-1.webp';
import SacrieurFire2 from '../src/assets/sorts/sacrieur/fire-2.webp';
import SacrieurFire3 from '../src/assets/sorts/sacrieur/fire-3.webp';
import SacrieurFire4 from '../src/assets/sorts/sacrieur/fire-4.webp';
import SacrieurFire5 from '../src/assets/sorts/sacrieur/fire-5.webp';
import SacrieurPassive1 from '../src/assets/sorts/sacrieur/passive-1.webp';
import SacrieurPassive10 from '../src/assets/sorts/sacrieur/passive-10.webp';
import SacrieurPassive11 from '../src/assets/sorts/sacrieur/passive-11.webp';
import SacrieurPassive12 from '../src/assets/sorts/sacrieur/passive-12.webp';
import SacrieurPassive13 from '../src/assets/sorts/sacrieur/passive-13.webp';
import SacrieurPassive14 from '../src/assets/sorts/sacrieur/passive-14.webp';
import SacrieurPassive15 from '../src/assets/sorts/sacrieur/passive-15.webp';
import SacrieurPassive16 from '../src/assets/sorts/sacrieur/passive-16.webp';
import SacrieurPassive17 from '../src/assets/sorts/sacrieur/passive-17.webp';
import SacrieurPassive18 from '../src/assets/sorts/sacrieur/passive-18.webp';
import SacrieurPassive19 from '../src/assets/sorts/sacrieur/passive-19.webp';
import SacrieurPassive2 from '../src/assets/sorts/sacrieur/passive-2.webp';
import SacrieurPassive20 from '../src/assets/sorts/sacrieur/passive-20.webp';
import SacrieurPassive3 from '../src/assets/sorts/sacrieur/passive-3.webp';
import SacrieurPassive4 from '../src/assets/sorts/sacrieur/passive-4.webp';
import SacrieurPassive5 from '../src/assets/sorts/sacrieur/passive-5.webp';
import SacrieurPassive6 from '../src/assets/sorts/sacrieur/passive-6.webp';
import SacrieurPassive7 from '../src/assets/sorts/sacrieur/passive-7.webp';
import SacrieurPassive8 from '../src/assets/sorts/sacrieur/passive-8.webp';
import SacrieurPassive9 from '../src/assets/sorts/sacrieur/passive-9.webp';
import SacrieurWind1 from '../src/assets/sorts/sacrieur/wind-1.webp';
import SacrieurWind2 from '../src/assets/sorts/sacrieur/wind-2.webp';
import SacrieurWind3 from '../src/assets/sorts/sacrieur/wind-3.webp';
import SacrieurWind4 from '../src/assets/sorts/sacrieur/wind-4.webp';
import SacrieurWind5 from '../src/assets/sorts/sacrieur/wind-5.webp';
export const SacrieurSpells = {
    active: {
        1: { src: SacrieurActive1, alt: 'Attirance', number: 5043 },
        2: { src: SacrieurActive2, alt: 'Sacrifice', number: 5045 },
        3: { src: SacrieurActive3, alt: 'Transposition', number: 5044 },
        4: { src: SacrieurActive4, alt: 'Armure sanguine', number: 5047 },
        5: { src: SacrieurActive5, alt: 'Entaille', number: 7211 },
        6: { src: SacrieurActive6, alt: 'Transfert sanguin', number: 7212 },
    },
    earth: {
        1: { src: SacrieurEarth1, alt: 'Pied rocheux', number: 5033 },
        2: { src: SacrieurEarth2, alt: 'Poing tatoué agrippant', number: 5039 },
        3: { src: SacrieurEarth3, alt: 'Démence', number: 5035 },
        4: { src: SacrieurEarth4, alt: 'Colonnades', number: 5037 },
        5: { src: SacrieurEarth5, alt: 'Fracasse', number: 5036 },
    },
    fire: {
        1: { src: SacrieurFire1, alt: 'Sang pour sang', number: 5028 },
        2: { src: SacrieurFire2, alt: 'Furie sanguinaire', number: 5030 },
        3: { src: SacrieurFire3, alt: 'Sang brûlant', number: 5031 },
        4: { src: SacrieurFire4, alt: 'Cage de sang', number: 5029 },
        5: { src: SacrieurFire5, alt: 'Punition', number: 5032 },
    },
    passive: {
        1: { src: SacrieurPassive1, alt: 'Placidité', number: 5050 },
        2: { src: SacrieurPassive2, alt: 'Sang tatoué', number: 5051 },
        3: { src: SacrieurPassive3, alt: 'Veines de Wakfu', number: 5194 },
        4: { src: SacrieurPassive4, alt: 'Mobilité', number: 5192 },
        5: { src: SacrieurPassive5, alt: 'Pacte de sang', number: 5053 },
        6: { src: SacrieurPassive6, alt: 'Libation', number: 5193 },
        7: { src: SacrieurPassive7, alt: 'Transcendance', number: 5054 },
        8: { src: SacrieurPassive8, alt: 'Traînée de sang', number: 5049 },
        9: { src: SacrieurPassive9, alt: 'Fracasseur', number: 5195 },
        10: { src: SacrieurPassive10, alt: 'Refus de la mort', number: 5052 },
        11: { src: SacrieurPassive11, alt: 'Circulation sanguine', number: 7213 },
        12: { src: SacrieurPassive12, alt: 'Jeu dangereux', number: 7214 },
        13: { src: SacrieurPassive13, alt: 'Vision', number: 7215 },
        14: { src: SacrieurPassive14, alt: 'Armure brûlante', number: 7216 },
        15: { src: SacrieurPassive15, alt: 'Pacte de Wakfu', number: 7217 },
        16: { src: SacrieurPassive16, alt: 'Coeur de Sacrieur', number: 7218 },
        17: { src: SacrieurPassive17, alt: 'Mal des transports', number: 7219 },
        18: { src: SacrieurPassive18, alt: 'Pilier', number: 7220 },
        19: { src: SacrieurPassive19, alt: 'Immolation', number: 7224 },
        20: { src: SacrieurPassive20, alt: 'Exécuteur', number: 7830 },
    },
    wind: {
        1: { src: SacrieurWind1, alt: 'Aversion', number: 5038 },
        2: { src: SacrieurWind2, alt: 'Projection', number: 5041 },
        3: { src: SacrieurWind3, alt: 'Assaut', number: 5040 },
        4: { src: SacrieurWind4, alt: 'Tempête spirituelle', number: 5034 },
        5: { src: SacrieurWind5, alt: 'Fulgurance', number: 5042 },
    },
};
// Sadida
import SadidaActive1 from '../src/assets/sorts/sadida/active-1.webp';
import SadidaActive2 from '../src/assets/sorts/sadida/active-2.webp';
import SadidaActive3 from '../src/assets/sorts/sadida/active-3.webp';
import SadidaActive4 from '../src/assets/sorts/sadida/active-4.webp';
import SadidaActive5 from '../src/assets/sorts/sadida/active-5.webp';
import SadidaActive6 from '../src/assets/sorts/sadida/active-6.webp';
import SadidaEarth1 from '../src/assets/sorts/sadida/earth-1.webp';
import SadidaEarth2 from '../src/assets/sorts/sadida/earth-2.webp';
import SadidaEarth3 from '../src/assets/sorts/sadida/earth-3.webp';
import SadidaEarth4 from '../src/assets/sorts/sadida/earth-4.webp';
import SadidaEarth5 from '../src/assets/sorts/sadida/earth-5.webp';
import SadidaPassive1 from '../src/assets/sorts/sadida/passive-1.webp';
import SadidaPassive10 from '../src/assets/sorts/sadida/passive-10.webp';
import SadidaPassive11 from '../src/assets/sorts/sadida/passive-11.webp';
import SadidaPassive12 from '../src/assets/sorts/sadida/passive-12.webp';
import SadidaPassive13 from '../src/assets/sorts/sadida/passive-13.webp';
import SadidaPassive14 from '../src/assets/sorts/sadida/passive-14.webp';
import SadidaPassive15 from '../src/assets/sorts/sadida/passive-15.webp';
import SadidaPassive16 from '../src/assets/sorts/sadida/passive-16.webp';
import SadidaPassive17 from '../src/assets/sorts/sadida/passive-17.webp';
import SadidaPassive18 from '../src/assets/sorts/sadida/passive-18.webp';
import SadidaPassive19 from '../src/assets/sorts/sadida/passive-19.webp';
import SadidaPassive2 from '../src/assets/sorts/sadida/passive-2.webp';
import SadidaPassive20 from '../src/assets/sorts/sadida/passive-20.webp';
import SadidaPassive3 from '../src/assets/sorts/sadida/passive-3.webp';
import SadidaPassive4 from '../src/assets/sorts/sadida/passive-4.webp';
import SadidaPassive5 from '../src/assets/sorts/sadida/passive-5.webp';
import SadidaPassive6 from '../src/assets/sorts/sadida/passive-6.webp';
import SadidaPassive7 from '../src/assets/sorts/sadida/passive-7.webp';
import SadidaPassive8 from '../src/assets/sorts/sadida/passive-8.webp';
import SadidaPassive9 from '../src/assets/sorts/sadida/passive-9.webp';
import SadidaWater1 from '../src/assets/sorts/sadida/water-1.webp';
import SadidaWater2 from '../src/assets/sorts/sadida/water-2.webp';
import SadidaWater3 from '../src/assets/sorts/sadida/water-3.webp';
import SadidaWater4 from '../src/assets/sorts/sadida/water-4.webp';
import SadidaWater5 from '../src/assets/sorts/sadida/water-5.webp';
import SadidaWind1 from '../src/assets/sorts/sadida/wind-1.webp';
import SadidaWind2 from '../src/assets/sorts/sadida/wind-2.webp';
import SadidaWind3 from '../src/assets/sorts/sadida/wind-3.webp';
import SadidaWind4 from '../src/assets/sorts/sadida/wind-4.webp';
import SadidaWind5 from '../src/assets/sorts/sadida/wind-5.webp';
export const SadidaSpells = {
    active: {
        1: { src: SadidaActive1, alt: 'Arbre', number: 915 },
        2: { src: SadidaActive2, alt: 'Sacrifice Poupesque', number: 920 },
        3: { src: SadidaActive3, alt: 'Eveil Sylvestre', number: 5057 },
        4: { src: SadidaActive4, alt: 'Fertilisant', number: 7054 },
        5: { src: SadidaActive5, alt: 'Force de la nature', number: 8139 },
        6: { src: SadidaActive6, alt: 'Toxines', number: 914 },
    },
    earth: {
        1: { src: SadidaEarth1, alt: 'Ronce', number: 925 },
        2: { src: SadidaEarth2, alt: 'Engrais', number: 929 },
        3: { src: SadidaEarth3, alt: 'Herbes Folles', number: 927 },
        4: { src: SadidaEarth4, alt: 'Tremblement de Terre', number: 935 },
        5: { src: SadidaEarth5, alt: 'Ronces Multiples', number: 937 },
    },
    passive: {
        1: { src: SadidaPassive1, alt: 'Prière Sadida', number: 4959 },
        2: { src: SadidaPassive2, alt: 'Croissance accélérée', number: 8152 },
        3: { src: SadidaPassive3, alt: 'Exploupée', number: 933 },
        4: { src: SadidaPassive4, alt: 'Don sylvestre', number: 917 },
        5: { src: SadidaPassive5, alt: 'Mauvaise graine', number: 8154 },
        6: { src: SadidaPassive6, alt: 'Dévouement poupesque', number: 8153 },
        7: { src: SadidaPassive7, alt: 'Sadida Solitaire', number: 912 },
        8: { src: SadidaPassive8, alt: 'Terrain fertile', number: 8151 },
        9: { src: SadidaPassive9, alt: 'Lien Poupesque', number: 916 },
        10: { src: SadidaPassive10, alt: 'Savoir Sadida', number: 8157 },
        11: { src: SadidaPassive11, alt: 'Cycle sylvestre', number: 8155 },
        12: { src: SadidaPassive12, alt: 'Venimeux', number: 5234 },
        13: { src: SadidaPassive13, alt: 'Terrain d\'entente', number: 7053 },
        14: { src: SadidaPassive14, alt: 'Chaîne de la nature', number: 8158 },
        15: { src: SadidaPassive15, alt: 'Poussée sylvestre', number: 8150 },
        16: { src: SadidaPassive16, alt: 'Cummunication végétale', number: 8156 },
        17: { src: SadidaPassive17, alt: 'Garde Feuille', number: 913 },
        18: { src: SadidaPassive18, alt: 'Bénédiction Voodoll', number: 8149 },
        19: { src: SadidaPassive19, alt: 'Terrain infecté', number: 5055 },
        20: { src: SadidaPassive20, alt: 'Murmures Sauvages', number: 5058 },
    },
    water: {
        1: { src: SadidaWater1, alt: 'Vaporiser', number: 921 },
        2: { src: SadidaWater2, alt: 'Larme du Sadida', number: 918 },
        3: { src: SadidaWater3, alt: 'Gadoule', number: 930 },
        4: { src: SadidaWater4, alt: 'Rouille', number: 931 },
        5: { src: SadidaWater5, alt: 'Drainage', number: 922 },
    },
    // 932-919-928-934-938-0-0-0-0-0-0-0-0-0-0-0-0-0
    wind: {
        1: { src: SadidaWind1, alt: 'Relent Boisé', number: 932 },
        2: { src: SadidaWind2, alt: 'Vent Empoisonné', number: 919 },
        3: { src: SadidaWind3, alt: 'Coup de Froid', number: 928 },
        4: { src: SadidaWind4, alt: 'Kohmir', number: 934 },
        5: { src: SadidaWind5, alt: 'Bourrasque', number: 938 },
    },
};
// Sram
import SramActive1 from '../src/assets/sorts/sram/active-1.webp';
import SramActive2 from '../src/assets/sorts/sram/active-2.webp';
import SramActive3 from '../src/assets/sorts/sram/active-3.webp';
import SramActive4 from '../src/assets/sorts/sram/active-4.webp';
import SramActive5 from '../src/assets/sorts/sram/active-5.webp';
import SramActive6 from '../src/assets/sorts/sram/active-6.webp';
import SramFire1 from '../src/assets/sorts/sram/fire-1.webp';
import SramFire2 from '../src/assets/sorts/sram/fire-2.webp';
import SramFire3 from '../src/assets/sorts/sram/fire-3.webp';
import SramFire4 from '../src/assets/sorts/sram/fire-4.webp';
import SramFire5 from '../src/assets/sorts/sram/fire-5.webp';
import SramPassive1 from '../src/assets/sorts/sram/passive-1.webp';
import SramPassive10 from '../src/assets/sorts/sram/passive-10.webp';
import SramPassive2 from '../src/assets/sorts/sram/passive-2.webp';
import SramPassive3 from '../src/assets/sorts/sram/passive-3.webp';
import SramPassive4 from '../src/assets/sorts/sram/passive-4.webp';
import SramPassive5 from '../src/assets/sorts/sram/passive-5.webp';
import SramPassive6 from '../src/assets/sorts/sram/passive-6.webp';
import SramPassive7 from '../src/assets/sorts/sram/passive-7.webp';
import SramPassive8 from '../src/assets/sorts/sram/passive-8.webp';
import SramPassive9 from '../src/assets/sorts/sram/passive-9.webp';
import SramWater1 from '../src/assets/sorts/sram/water-1.webp';
import SramWater2 from '../src/assets/sorts/sram/water-2.webp';
import SramWater3 from '../src/assets/sorts/sram/water-3.webp';
import SramWater4 from '../src/assets/sorts/sram/water-4.webp';
import SramWater5 from '../src/assets/sorts/sram/water-5.webp';
import SramWind1 from '../src/assets/sorts/sram/wind-1.webp';
import SramWind2 from '../src/assets/sorts/sram/wind-2.webp';
import SramWind3 from '../src/assets/sorts/sram/wind-3.webp';
import SramWind4 from '../src/assets/sorts/sram/wind-4.webp';
import SramWind5 from '../src/assets/sorts/sram/wind-5.webp';
export const SramSpells = {
    active: {
        1: { src: SramActive1, alt: 'Invisibilité', number: 4604 },
        2: { src: SramActive2, alt: 'Double', number: 4603 },
        3: { src: SramActive3, alt: 'Ombre Piège', number: 4597 },
        4: { src: SramActive4, alt: 'Galopade', number: 4601 },
        5: { src: SramActive5, alt: 'Assassinat', number: 6850 },
        6: { src: SramActive6, alt: 'Surineur', number: 4602 },
    },
    fire: {
        1: { src: SramFire1, alt: 'Premier Sang', number: 4588 },
        2: { src: SramFire2, alt: 'Châtiment', number: 4589 },
        3: { src: SramFire3, alt: 'Ouvrir les veines', number: 4590 },
        4: { src: SramFire4, alt: 'Saignée mortelle', number: 4587 },
        5: { src: SramFire5, alt: 'Mise à mort', number: 4586 },
    },
    passive: {
        1: { src: SramPassive1, alt: 'Assassin', number: 4608 },
        2: { src: SramPassive2, alt: 'Lame Sanglante', number: 5123 },
        3: { src: SramPassive3, alt: 'Assaut Brutal', number: 4606 },
        4: { src: SramPassive4, alt: 'Maître des Ombres', number: 4607 },
        5: { src: SramPassive5, alt: 'Maître des Pièges', number: 4609 },
        6: { src: SramPassive6, alt: 'Plan Tordu', number: 5089 },
        7: { src: SramPassive7, alt: 'Embuscade', number: 5122 },
        8: { src: SramPassive8, alt: 'Escroquerie', number: 5124 },
        9: { src: SramPassive9, alt: 'Duperie', number: 5126 },
        10: { src: SramPassive10, alt: 'Sram dans l\'Âme', number: 4610 },
    },
    water: {
        1: { src: SramWater1, alt: 'Kleptosram', number: 4584 },
        2: { src: SramWater2, alt: 'Filouterie', number: 4583 },
        3: { src: SramWater3, alt: 'Attaque perfide', number: 4585 },
        4: { src: SramWater4, alt: 'Escrosramerie', number: 4581 },
        5: { src: SramWater5, alt: 'Arnaque', number: 4579 },
    },
    wind: {
        1: { src: SramWind1, alt: 'Coup pénétrant', number: 4594 },
        2: { src: SramWind2, alt: 'Peur', number: 4596 },
        3: { src: SramWind3, alt: 'Fourberie', number: 4595 },
        4: { src: SramWind4, alt: 'Coup Sournois', number: 4593 },
        5: { src: SramWind5, alt: 'Traumatisme', number: 4592 },
    },
};
// Streamer
import StreamerActive1 from '../src/assets/sorts/streamer/active-1.webp';
import StreamerActive2 from '../src/assets/sorts/streamer/active-2.webp';
import StreamerActive3 from '../src/assets/sorts/streamer/active-3.webp';
import StreamerActive4 from '../src/assets/sorts/streamer/active-4.webp';
import StreamerActive5 from '../src/assets/sorts/streamer/active-5.webp';
import StreamerActive6 from '../src/assets/sorts/streamer/active-6.webp';
import StreamerEarth1 from '../src/assets/sorts/streamer/earth-1.webp';
import StreamerEarth2 from '../src/assets/sorts/streamer/earth-2.webp';
import StreamerEarth3 from '../src/assets/sorts/streamer/earth-3.webp';
import StreamerEarth4 from '../src/assets/sorts/streamer/earth-4.webp';
import StreamerEarth5 from '../src/assets/sorts/streamer/earth-5.webp';
import StreamerFire1 from '../src/assets/sorts/streamer/fire-1.webp';
import StreamerFire2 from '../src/assets/sorts/streamer/fire-2.webp';
import StreamerFire3 from '../src/assets/sorts/streamer/fire-3.webp';
import StreamerFire4 from '../src/assets/sorts/streamer/fire-4.webp';
import StreamerFire5 from '../src/assets/sorts/streamer/fire-5.webp';
import StreamerPassive1 from '../src/assets/sorts/streamer/passive-1.webp';
import StreamerPassive10 from '../src/assets/sorts/streamer/passive-10.webp';
import StreamerPassive11 from '../src/assets/sorts/streamer/passive-11.webp';
import StreamerPassive12 from '../src/assets/sorts/streamer/passive-12.webp';
import StreamerPassive13 from '../src/assets/sorts/streamer/passive-13.webp';
import StreamerPassive14 from '../src/assets/sorts/streamer/passive-14.webp';
import StreamerPassive15 from '../src/assets/sorts/streamer/passive-15.webp';
import StreamerPassive16 from '../src/assets/sorts/streamer/passive-16.webp';
import StreamerPassive17 from '../src/assets/sorts/streamer/passive-17.webp';
import StreamerPassive18 from '../src/assets/sorts/streamer/passive-18.webp';
import StreamerPassive19 from '../src/assets/sorts/streamer/passive-19.webp';
import StreamerPassive2 from '../src/assets/sorts/streamer/passive-2.webp';
import StreamerPassive20 from '../src/assets/sorts/streamer/passive-20.webp';
import StreamerPassive3 from '../src/assets/sorts/streamer/passive-3.webp';
import StreamerPassive4 from '../src/assets/sorts/streamer/passive-4.webp';
import StreamerPassive5 from '../src/assets/sorts/streamer/passive-5.webp';
import StreamerPassive6 from '../src/assets/sorts/streamer/passive-6.webp';
import StreamerPassive7 from '../src/assets/sorts/streamer/passive-7.webp';
import StreamerPassive8 from '../src/assets/sorts/streamer/passive-8.webp';
import StreamerPassive9 from '../src/assets/sorts/streamer/passive-9.webp';
import StreamerWater1 from '../src/assets/sorts/streamer/water-1.webp';
import StreamerWater2 from '../src/assets/sorts/streamer/water-2.webp';
import StreamerWater3 from '../src/assets/sorts/streamer/water-3.webp';
import StreamerWater4 from '../src/assets/sorts/streamer/water-4.webp';
import StreamerWater5 from '../src/assets/sorts/streamer/water-5.webp';
export const StreamerSpells = {
    active: {
        1: { src: StreamerActive1, alt: 'Blindage', number: 6917 },
        2: { src: StreamerActive2, alt: 'Surtension', number: 6918 },
        3: { src: StreamerActive3, alt: 'Machinerie', number: 6919 },
        4: { src: StreamerActive4, alt: 'Embuscade', number: 6920 },
        5: { src: StreamerActive5, alt: 'Transition', number: 6921 },
        6: { src: StreamerActive6, alt: 'Flux de Stasis', number: 6922 },
    },
    earth: {
        1: { src: StreamerEarth1, alt: 'À la masse', number: 6912 },
        2: { src: StreamerEarth2, alt: 'Piétinement', number: 6913 },
        3: { src: StreamerEarth3, alt: 'Pilonnage', number: 6914 },
        4: { src: StreamerEarth4, alt: 'Marteau aimant', number: 6915 },
        5: { src: StreamerEarth5, alt: 'Choc', number: 6916 },
    },
    fire: {
        1: { src: StreamerFire1, alt: 'Feu ardent', number: 6902 },
        2: { src: StreamerFire2, alt: 'Crache flammes', number: 6903 },
        3: { src: StreamerFire3, alt: 'Calcination', number: 6904 },
        4: { src: StreamerFire4, alt: 'Flambage', number: 6905 },
        5: { src: StreamerFire5, alt: 'Sabordage', number: 6906 },
    },
    passive: {
        1: { src: StreamerPassive1, alt: 'Modérateur', number: 6925 },
        2: { src: StreamerPassive2, alt: 'Routes sinueuses', number: 6926 },
        3: { src: StreamerPassive3, alt: 'Versatilité', number: 6927 },
        4: { src: StreamerPassive4, alt: 'Blindage renforcé', number: 6928 },
        5: { src: StreamerPassive5, alt: 'Stratégie robotique', number: 6929 },
        6: { src: StreamerPassive6, alt: 'Technologie de transports', number: 6930 },
        7: { src: StreamerPassive7, alt: 'Assitance tellurique', number: 6931 },
        8: { src: StreamerPassive8, alt: 'Substitution mécanique', number: 6932 },
        9: { src: StreamerPassive9, alt: 'Patience', number: 6933 },
        10: { src: StreamerPassive10, alt: 'Alliage léger', number: 6934 },
        11: { src: StreamerPassive11, alt: 'Transfert brutal', number: 6935 },
        12: { src: StreamerPassive12, alt: 'Revêtement à toute épreuve', number: 6936 },
        13: { src: StreamerPassive13, alt: 'Activation', number: 6937 },
        14: { src: StreamerPassive14, alt: 'Exécution immédiate', number: 6938 },
        15: { src: StreamerPassive15, alt: 'Protection stasifiée', number: 6939 },
        16: { src: StreamerPassive16, alt: 'Roues chaudes', number: 6940 },
        17: { src: StreamerPassive17, alt: 'Conquête sereine', number: 6941 },
        18: { src: StreamerPassive18, alt: 'Tacticien', number: 6942 },
        19: { src: StreamerPassive19, alt: 'Mécanique avancée', number: 6943 },
        20: { src: StreamerPassive20, alt: 'Commutation', number: 7810 },
    },
    water: {
        1: { src: StreamerWater1, alt: 'Courant', number: 6907 },
        2: { src: StreamerWater2, alt: 'Évaporation', number: 6908 },
        3: { src: StreamerWater3, alt: 'Ecume', number: 6909 },
        4: { src: StreamerWater4, alt: 'Flibuste', number: 6910 },
        5: { src: StreamerWater5, alt: 'Dissolution', number: 6911 },
    },
};
// Xelor
import XelorActive1 from '../src/assets/sorts/xelor/active-1.webp';
import XelorActive2 from '../src/assets/sorts/xelor/active-2.webp';
import XelorActive3 from '../src/assets/sorts/xelor/active-3.webp';
import XelorActive4 from '../src/assets/sorts/xelor/active-4.webp';
import XelorActive5 from '../src/assets/sorts/xelor/active-5.webp';
import XelorActive6 from '../src/assets/sorts/xelor/active-6.webp';
import XelorFire1 from '../src/assets/sorts/xelor/fire-1.webp';
import XelorFire2 from '../src/assets/sorts/xelor/fire-2.webp';
import XelorFire3 from '../src/assets/sorts/xelor/fire-3.webp';
import XelorFire4 from '../src/assets/sorts/xelor/fire-4.webp';
import XelorFire5 from '../src/assets/sorts/xelor/fire-5.webp';
import XelorPassive1 from '../src/assets/sorts/xelor/passive-1.webp';
import XelorPassive10 from '../src/assets/sorts/xelor/passive-10.webp';
import XelorPassive11 from '../src/assets/sorts/xelor/passive-11.webp';
import XelorPassive12 from '../src/assets/sorts/xelor/passive-12.webp';
import XelorPassive13 from '../src/assets/sorts/xelor/passive-13.webp';
import XelorPassive14 from '../src/assets/sorts/xelor/passive-14.webp';
import XelorPassive15 from '../src/assets/sorts/xelor/passive-15.webp';
import XelorPassive16 from '../src/assets/sorts/xelor/passive-16.webp';
import XelorPassive17 from '../src/assets/sorts/xelor/passive-17.webp';
import XelorPassive18 from '../src/assets/sorts/xelor/passive-18.webp';
import XelorPassive19 from '../src/assets/sorts/xelor/passive-19.webp';
import XelorPassive2 from '../src/assets/sorts/xelor/passive-2.webp';
import XelorPassive20 from '../src/assets/sorts/xelor/passive-20.webp';
import XelorPassive3 from '../src/assets/sorts/xelor/passive-3.webp';
import XelorPassive4 from '../src/assets/sorts/xelor/passive-4.webp';
import XelorPassive5 from '../src/assets/sorts/xelor/passive-5.webp';
import XelorPassive6 from '../src/assets/sorts/xelor/passive-6.webp';
import XelorPassive7 from '../src/assets/sorts/xelor/passive-7.webp';
import XelorPassive8 from '../src/assets/sorts/xelor/passive-8.webp';
import XelorPassive9 from '../src/assets/sorts/xelor/passive-9.webp';
import XelorWater1 from '../src/assets/sorts/xelor/water-1.webp';
import XelorWater2 from '../src/assets/sorts/xelor/water-2.webp';
import XelorWater3 from '../src/assets/sorts/xelor/water-3.webp';
import XelorWater4 from '../src/assets/sorts/xelor/water-4.webp';
import XelorWater5 from '../src/assets/sorts/xelor/water-5.webp';
import XelorWind1 from '../src/assets/sorts/xelor/wind-1.webp';
import XelorWind2 from '../src/assets/sorts/xelor/wind-2.webp';
import XelorWind3 from '../src/assets/sorts/xelor/wind-3.webp';
import XelorWind4 from '../src/assets/sorts/xelor/wind-4.webp';
import XelorWind5 from '../src/assets/sorts/xelor/wind-5.webp';
export const XelorSpells = {
    active: {
        1: { src: XelorActive1, alt: 'Dévouement', number: 2839 },
        2: { src: XelorActive2, alt: 'Contre la montre', number: 776 },
        3: { src: XelorActive3, alt: 'Sinistro', number: 777 },
        4: { src: XelorActive4, alt: 'Rouage', number: 766 },
        5: { src: XelorActive5, alt: 'Prémonition', number: 757 },
        6: { src: XelorActive6, alt: 'Régulateur', number: 5344 },
    },
    fire: {
        1: { src: XelorFire1, alt: 'Perturbation', number: 750 },
        2: { src: XelorFire2, alt: 'Suspension', number: 751 },
        3: { src: XelorFire3, alt: 'Éclair obscur', number: 752 },
        4: { src: XelorFire4, alt: 'Aiguille', number: 754 },
        5: { src: XelorFire5, alt: 'Poussière', number: 753 },
    },
    passive: {
        1: { src: XelorPassive1, alt: 'Maître du cadran', number: 758 },
        2: { src: XelorPassive2, alt: 'Promptitude', number: 5352 },
        3: { src: XelorPassive3, alt: 'Présage', number: 5351 },
        4: { src: XelorPassive4, alt: 'Tique, Taque', number: 5353 },
        5: { src: XelorPassive5, alt: 'Taque, Tique', number: 764 },
        6: { src: XelorPassive6, alt: 'Horlogerie', number: 761 },
        7: { src: XelorPassive7, alt: 'Mémoire', number: 756 },
        8: { src: XelorPassive8, alt: 'Cours du temps', number: 785 },
        9: { src: XelorPassive9, alt: 'Contre-horaire', number: 7184 },
        10: { src: XelorPassive10, alt: 'Déjà vu', number: 7185 },
        11: { src: XelorPassive11, alt: 'Connaissance du passé', number: 7186 },
        12: { src: XelorPassive12, alt: 'Présages violents', number: 7187 },
        13: { src: XelorPassive13, alt: 'Dimension sombre', number: 7188 },
        14: { src: XelorPassive14, alt: 'Ralentissement du temps', number: 7189 },
        15: { src: XelorPassive15, alt: 'Rémanence', number: 7190 },
        16: { src: XelorPassive16, alt: 'Mécanismes spécialisés', number: 7191 },
        17: { src: XelorPassive17, alt: 'Permutation momentanée', number: 7192 },
        18: { src: XelorPassive18, alt: 'Mage de combat', number: 7193 },
        19: { src: XelorPassive19, alt: 'Flétrissement', number: 7195 },
        20: { src: XelorPassive20, alt: 'Assimilation', number: 7196 },
    },
    water: {
        1: { src: XelorWater1, alt: 'Martel-heure', number: 749 },
        2: { src: XelorWater2, alt: 'Ralentissement', number: 775 },
        3: { src: XelorWater3, alt: 'Horloge', number: 763 },
        4: { src: XelorWater4, alt: 'Sablier', number: 783 },
        5: { src: XelorWater5, alt: 'Désynchronisation', number: 1417 },
    },
    wind: {
        1: { src: XelorWind1, alt: 'Pointe-heure', number: 767 },
        2: { src: XelorWind2, alt: 'Tempus fugit', number: 765 },
        3: { src: XelorWind3, alt: 'Paradoxe', number: 1418 },
        4: { src: XelorWind4, alt: 'Symétrie', number: 772 },
        5: { src: XelorWind5, alt: 'Retour spontané', number: 771 },
    },
};
// Zobal 
import ZobalActive1 from '../src/assets/sorts/zobal/active-1.webp';
import ZobalActive2 from '../src/assets/sorts/zobal/active-2.webp';
import ZobalActive3 from '../src/assets/sorts/zobal/active-3.webp';
import ZobalActive4 from '../src/assets/sorts/zobal/active-4.webp';
import ZobalActive5 from '../src/assets/sorts/zobal/active-5.webp';
import ZobalActive6 from '../src/assets/sorts/zobal/active-6.webp';
import ZobalFire1 from '../src/assets/sorts/zobal/fire-1.webp';
import ZobalFire2 from '../src/assets/sorts/zobal/fire-2.webp';
import ZobalFire3 from '../src/assets/sorts/zobal/fire-3.webp';
import ZobalFire4 from '../src/assets/sorts/zobal/fire-4.webp';
import ZobalFire5 from '../src/assets/sorts/zobal/fire-5.webp';
import ZobalPassive1 from '../src/assets/sorts/zobal/passive-1.webp';
import ZobalPassive10 from '../src/assets/sorts/zobal/passive-10.webp';
import ZobalPassive11 from '../src/assets/sorts/zobal/passive-11.webp';
import ZobalPassive12 from '../src/assets/sorts/zobal/passive-12.webp';
import ZobalPassive13 from '../src/assets/sorts/zobal/passive-13.webp';
import ZobalPassive14 from '../src/assets/sorts/zobal/passive-14.webp';
import ZobalPassive15 from '../src/assets/sorts/zobal/passive-15.webp';
import ZobalPassive16 from '../src/assets/sorts/zobal/passive-16.webp';
import ZobalPassive17 from '../src/assets/sorts/zobal/passive-17.webp';
import ZobalPassive18 from '../src/assets/sorts/zobal/passive-18.webp';
import ZobalPassive19 from '../src/assets/sorts/zobal/passive-19.webp';
import ZobalPassive2 from '../src/assets/sorts/zobal/passive-2.webp';
import ZobalPassive3 from '../src/assets/sorts/zobal/passive-3.webp';
import ZobalPassive4 from '../src/assets/sorts/zobal/passive-4.webp';
import ZobalPassive5 from '../src/assets/sorts/zobal/passive-5.webp';
import ZobalPassive6 from '../src/assets/sorts/zobal/passive-6.webp';
import ZobalPassive7 from '../src/assets/sorts/zobal/passive-7.webp';
import ZobalPassive8 from '../src/assets/sorts/zobal/passive-8.webp';
import ZobalPassive9 from '../src/assets/sorts/zobal/passive-9.webp';
import ZobalWater1 from '../src/assets/sorts/zobal/water-1.webp';
import ZobalWater2 from '../src/assets/sorts/zobal/water-2.webp';
import ZobalWater3 from '../src/assets/sorts/zobal/water-3.webp';
import ZobalWater4 from '../src/assets/sorts/zobal/water-4.webp';
import ZobalWater5 from '../src/assets/sorts/zobal/water-5.webp';
import ZobalWind1 from '../src/assets/sorts/zobal/wind-1.webp';
import ZobalWind2 from '../src/assets/sorts/zobal/wind-2.webp';
import ZobalWind3 from '../src/assets/sorts/zobal/wind-3.webp';
import ZobalWind4 from '../src/assets/sorts/zobal/wind-4.webp';
import ZobalWind5 from '../src/assets/sorts/zobal/wind-5.webp';
export const ZobalSpells = {
    active: {
        1: { 
            src: ZobalActive1, 
            alt: 'Esprit masqué', 
            number: 7084,
            description: "Le pouvoir des masques permet d'invoquer un double de lui-même. Attention cependant, le Zobal subira également les dégâts reçus par son Esprit Masqué (sauf les dommages qui entraînent la mort de l'Esprit Masqué).",
            effects: ["Invoque un Esprit Masqué (40% des PV max du Zobal)", "FLECHE Copie les caractéristiques du Zobal", "FLECHE Possède 6 PA + les PA non utilisés par le Zobal ce tour", "FLECHE Possède 6 PW", "FLECHE Le Zobal reçoit aussi les Dommages reçus par l'Esprit Masqué", "FLECHE Ne peut pas tacler"], 
            restrictions: {
                ap: 4,
                mp: 0,
                wp: 1,
                range: '1',
                noRangeNeeded: false,
                editableRange: false,
                selfUse: false,
                line: false,
                monocible: false,
                area: false,
            }
        },
        2: { 
            src: ZobalActive2, 
            alt: 'Danse motivante', 
            number: 7085,
            description: "Ce sort applique un état qui booste la mobilité et la protection d'un allié (ou du Zobal lui-même) pendant deux tours.",
            effects: ["Danse motivante (l'état dure 2 tours)", "En début de tour :", "FLECHE 2 PM (1 tour)", "FLECHE 4% des PV max de la cible en Armure"], 
            restrictions: {
                ap: 3,
                mp: 0,
                wp: 0,
                range: '1-3',
                noRangeNeeded: false,
                editableRange: true,
                selfUse: true,
                line: false,
                monocible: false,
                area: false,
            }
        },
        3: { src: ZobalActive3, alt: 'Danse macabre', number: 7086,
            description: "Est-ce une danse ou un rituel ? Nul ne le sait. Toujours est-il que la Danse Macabre du Zobal lui permet de ressusciter ses alliés.",
            effects: ["Lancé sur ALLIE K.O :", "FLECHE Réanime l'ALLIE avec 30% PV max", "FLECHE Convalescent (Niv.1). 2 PA (1 tour)"], 
            restrictions: {
                ap: 4,
                mp: 0,
                wp: 1,
                range: '1',
                noRangeNeeded: false,
                editableRange: false,
                selfUse: false,
                line: false,
                monocible: false,
                area: false,
            }
         },
        4: { src: ZobalActive4, alt: 'Voltige', number: 7087,
            description: "Le zobal se téléporte sur une case libre, à côté d'un combattant allié ou ennemi. S'il termine son tour juste après cette action, il gagne des résistance jusqu'au prochain tour.",
            effects: ["Téléporte le Zobal sur une case à côté d'un combattant", "Connexion : 80 Résistance Elémentaire (1 tour) en fin de tour"], 
            restrictions: {
                ap: 3,
                mp: 0,
                wp: 0,
                range: '6',
                noRangeNeeded: true,
                editableRange: false,
                selfUse: false,
                line: true,
                monocible: false,
                area: false,
            }
         },
        5: { src: ZobalActive5, alt: 'Aura de brutalité', number: 7088,
            description: "Le Zobal s'entoure d'une Aura de brutalité. Les alliés à son contact infligent plus de dommages à leurs adversaires.",
            effects: ["Aura de brutalité", "20% Dommages infligés"], 
            restrictions: {
                ap: 2,
                mp: 0,
                wp: 1,
                range: '0',
                noRangeNeeded: true,
                editableRange: false,
                selfUse: false,
                line: false,
                monocible: false,
                area: false,
            }
         },
        6: { src: ZobalActive6, alt: 'Solidité', number: 7089,
            description: "Le Zobal stabilise sa cible. La cible ne peut plus subir d'effet de déplacement (téléportation, poussée, etc.) pendant 1 tour.",
            effects: ["Stabilisé (1 tour)"], 
            restrictions: {
                ap: 1,
                mp: 0,
                wp: 1,
                range: '0-5',
                noRangeNeeded: false,
                editableRange: true,
                selfUse: false,
                line: true,
                monocible: false,
                area: false,
            }
         },
    },
    fire: {
        1: {
            src: ZobalFire1, alt: 'Coup de pied fouetté', number: 7066,
            description: "Ce sort inflige des dommages puis retourne la cible, de manière à donner le dos.",
            effects: ["Dommage FEU : VALUE", "Tourne la cible de dos", "(Si la cible est déjà de dos, pousse de 1 case)"], 
            restrictions: {
                ap: 3,
                mp: 0,
                wp: 0,
                range: '1-3',
                noRangeNeeded: false,
                editableRange: false,
                selfUse: false,
                line: true,
                monocible: true,
                area: false,
            }
        },
        2: { 
            src: ZobalFire2, 
            alt: 'Fêlure', 
            number: 7067,
            description: "Un sort simple mais efficace, qui inflige des dégâts en zone et réduit les protections et soins reçus par les ennemis.",
            effects: ["Dommage FEU : VALUE TAILLE:3-1", "Incurable et Friable (Niv.3) TAILLE:3-1"], 
            restrictions: {
                ap: 3,
                mp: 0,
                wp: 0,
                range: '1',
                noRangeNeeded: false,
                editableRange: false,
                selfUse: false,
                line: false,
                monocible: false,
                area: true,
            }
        },
        3: { src: ZobalFire3, alt: 'Détraquage', number: 7068,
            description: "Ce sort inflige des dommages aux ennemis en zone. Si des alliées sont dans la zone de dommage, ils gagnent un bonus de dommages.",
            effects: ["ENNEMI Dommage FEU : VALUE TAILLE:1-1*1-1", "ALLIE Amplification (+10 Niv.) TAILLE:1-1*1-1"], 
            restrictions: {
                ap: 4,
                mp: 0,
                wp: 0,
                range: 0,
                noRangeNeeded: false,
                editableRange: false,
                selfUse: false,
                line: false,
                monocible: false,
                area: true,
            }
        },
        4: { src: ZobalFire4, alt: 'Névrose', number: 7069,
            description: "Ce sort permet d'attirer les ennemis autour d'un allié, ou d'infliger des dommages importants à un ennemi en monocible, selon la cible.",
            effects: ["Lancé sur ALLIE :", "FLECHE ALLIE Enflammé (Niv.125)", "FLECHE Attire de 3 cases les CIBLE alignés (max 4 cases)", "Lancé sur ENNEMI :", "FLECHE Dommages FEU : VALEUR", "FLECHE Echaudé (Niv.4)"], 
            restrictions: {
                ap: 4,
                mp: 0,
                wp: 1,
                range: "1-4",
                noRangeNeeded: false,
                editableRange: true,
                selfUse: true,
                line: false,
                monocible: true,
                area: false,
            }
         },
        5: { src: ZobalFire5, alt: 'Cabriole', number: 7070,
            description: "Le Zobal se téléporte à plusieurs cases de distance tout en faisant des dommages sur son passage. Si des alliées sont sur son chemin, ils gagnent de l'armure.",
            effects: ["Sur le chemin :", "FLECHE ENNEMI Dommage FEU : VALEUR (mêlée)", "FLECHE ALLIE ARMOR Armure", "Se téléporte sur la case"], 
            restrictions: {
                ap: 6,
                mp: 0,
                wp: 0,
                range: "3-5",
                noRangeNeeded: true,
                editableRange: false,
                selfUse: false,
                line: true,
                monocible: false,
                area: false,
            } 
         },
    },
    passive: {
        1: { src: ZobalPassive1, alt: 'Jeu de jambes', number: 7093, },
        2: { src: ZobalPassive2, alt: 'Bas les masques', number: 7094 },
        3: { src: ZobalPassive3, alt: 'Poussées violentes', number: 7095 },
        4: { src: ZobalPassive4, alt: 'Art de la vengeance', number: 7096 },
        5: { src: ZobalPassive5, alt: 'Masque de vie', number: 7097 },
        6: { src: ZobalPassive6, alt: 'Carnaval', number: 7098 },
        7: { src: ZobalPassive7, alt: 'Armure unique', number: 7099 },
        8: { src: ZobalPassive8, alt: 'Ancre', number: 7100 },
        9: { src: ZobalPassive9, alt: 'Brute', number: 7101 },
        10: { src: ZobalPassive10, alt: 'Protecteur reculé', number: 7102 },
        11: { src: ZobalPassive11, alt: 'Collisions de support', number: 7103 },
        12: { src: ZobalPassive12, alt: 'Érosion', number: 7104 },
        13: { src: ZobalPassive13, alt: 'Virevolte', number: 7105 },
        14: { src: ZobalPassive14, alt: 'Collisions régénérantes', number: 7106 },
        15: { src: ZobalPassive15, alt: 'Miroirs', number: 7107 },
        16: { src: ZobalPassive16, alt: 'Au contact', number: 7108 },
        17: { src: ZobalPassive17, alt: 'Art de la fuite', number: 7111 },
        18: { src: ZobalPassive18, alt: 'Regard masqué', number: 7112 },
        19: { src: ZobalPassive19, alt: 'Poussées d\'entrave', number: 7113 },
    },
    water: {
        1: { src: ZobalWater1, alt: 'Signe', number: 7071,
            description: "Ce sort flexible peut soigner un allié ou infliger des dommages à un ennemi.",
            effects: ["ENNEMI Dommages WATER : VALUE", "ALLIE Soin WATER : VALEUR"], 
            restrictions: {
                ap: 2,
                mp: 0,
                wp: 0,
                range: '1-7',
                noRangeNeeded: true,
                editableRange: true,
                selfUse: true,
                line: false,
                monocible: true,
                area: false,
            }
         },
        2: { src: ZobalWater2, alt: 'Armature', number: 7072,
            description: "Ce sort donne une bonne quantité d'Armure et de Tacle à un allié, afin de l'aider à apprécier les combats en mêlée.",
            effects: ["ALLIE LOCK Tacle (1 tour)", "ALLIE ARMOR Armure"], 
            restrictions: {
                ap: 4,
                mp: 0,
                wp: 0,
                range: '1-5',
                noRangeNeeded: false,
                editableRange: true,
                selfUse: true,
                line: false,
                monocible: true,
                area: false,
            },
            defaultValue: {
                LOCK: "0 + LVL",
                ARMOR: 6,
            }
         },
        3: { src: ZobalWater3, alt: 'Rescousse', number: 7073,
            description: "Rescousse permet de faire des dégâts en zone, ou de soigner et de donner de l'Esquive en zone, selon le combattant ciblé.",
            effects: ["Lancé sur un ENNEMI :", "FLECHE CIBLE Dommage WATER : VALEUR TAILLE:3", "Sinon :", "FLECHE CIBLE Soin WATER : HEAL TAILLE:3", "FLECHE CIBLE DODGE Esquive TAILLE:3"], 
            restrictions: {
                ap: 3,
                mp: 0,
                wp: 0,
                range: '1-5',
                noRangeNeeded: false,
                editableRange: true,
                selfUse: false,
                line: true,
                monocible: false,
                area: true,
            },
            defaultValue: {
                VALUE: 3,
                HEAL: 6,
                DODGE: 15
            }
         },
        4: { src: ZobalWater4, alt: 'Acharnement', number: 7074,
            description: "Ce sort possède un effet en zone : il inflige des dommages aux ennemis et soigne les alliés.",
            effects: ["ENNEMI Dommage WATER : VALEUR TAILLE:1", "ALLIE Soin WATER : HEAL TAILLE:1"], 
            restrictions: {
                ap: 5,
                mp: 0,
                wp: 0,
                range: '1-5',
                noRangeNeeded: false,
                editableRange: false,
                selfUse: false,
                line: false,
                monocible: false,
                area: true,
            },
            defaultValue: {
                VALUE: 5,
                HEAL: 10,
            }
         },
        5: { src: ZobalWater5, alt: 'Sarabande', number: 7075,
            description: "Sur un ennemi, le Zobal inflige des dégâts et peut retirer un Point de Wakfu. Sur un allié, il le soigne.",
            effects: ["ENNEMI Dommage WATER : VALUE", "ENNEMI -1 PW", "ALLIE Soin WATER : HEAL","ALLIE 50 Résistance Elémentaire"], 
            restrictions: {
                ap: 5,
                mp: 0,
                wp: 1,
                range: '1-3',
                noRangeNeeded: false,
                editableRange: true,
                selfUse: true,
                line: true,
                monocible: true,
                area: false,
            },
            defaultValue: {
                VALUE: 6,
                HEAL: 12,
            }
         },
    },
    wind: {
        1: { src: ZobalWind1, alt: 'Fugue', number: 7076,
            description: "Le Zobal inflige des dommages à une cible avec lui, puis recule d'une case tout en le repoussant.",
            effects: ["ENNEMI Dommage WIND : VALUE", "S'éloigne et pousse de 1 case"], 
            restrictions: {
                ap: 3,
                mp: 0,
                wp: 0,
                range: '1-3',
                noRangeNeeded: false,
                editableRange: false,
                selfUse: false,
                line: true,
                monocible: true,
                area: false,
            },
            defaultValue: {
                VALUE: 3,
            }
         },
        2: { src: ZobalWind2, alt: 'Poursuite', number: 7077,
            description: "Poursuite permet de faire reculer la cible, tout en la poursanvant pour qu'elle ne s'échappe pas.",
            effects: ["ENNEMI Dommage WIND : VALUE", "Pousse de 2 cases puis suit"], 
            restrictions: {
                ap: 0,
                mp: 2,
                wp: 0,
                range: '1',
                noRangeNeeded: false,
                editableRange: false,
                selfUse: false,
                line: false,
                monocible: true,
                area: false,
            },
            defaultValue: {
                VALUE: 1,
            }
         },
        3: { src: ZobalWind3, alt: 'Culbute', number: 7078,
            description: "Le Zobal tire la cible puis passe dans son dos.",
            effects: ["Attire de 1 case puis passe de l'autre côté de la cible", "ENNEMI Dommage WIND : VALUE"], 
            restrictions: {
                ap: 2,
                mp: 0,
                wp: 0,
                range: '1-4',
                noRangeNeeded: true,
                editableRange: false,
                selfUse: false,
                line: true,
                monocible: true,
                area: false,
            },
            defaultValue: {
                VALUE: 2,
            }
         },
        4: { src: ZobalWind4, alt: 'Cavalcade', number: 7079,
            description: "Cavalcade permet de lier le Zobal à une cible. Il pourra ensuite la tirer avec lui.",
            effects: ["ENNEMI Dommage WIND : VALUE", "CIBLE Cavalcade"], 
            restrictions: {
                ap: 2,
                mp: 0,
                wp: 0,
                range: '1',
                noRangeNeeded: false,
                editableRange: false,
                selfUse: false,
                line: false,
                monocible: true,
                area: false,
            },
            defaultValue: {
                VALUE: 2,
            }
         },
        5: { src: ZobalWind5, alt: 'Dislocation', number: 7080,
            description: "Le Zobal effectue un saut vers sa cible, et échange de position avec celle-ci.",
            effects: ["Echange de position", "ENNEMI Dommage WIND : VALEUR"], 
            restrictions: {
                ap: 4,
                mp: 0,
                wp: 0,
                range: '1-5',
                noRangeNeeded: false,
                editableRange: false,
                selfUse: false,
                line: false,
                monocible: false,
                area: true,
            },
            defaultValue: {
                VALUE: 3,
            }
         },
    },
};
