import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { selectIntelPoints } from '../Aptitudes/aptitudeIntelSlice';
import { selectStrengthPoints } from '../Aptitudes/aptitudeStrengthSlice';
import { selectAgilityPoints } from '../Aptitudes/aptitudeAgilitySlice';
import { selectChancePoints } from '../Aptitudes/aptitudeChanceSlice';
import { selectMajorPoints } from '../Aptitudes/aptitudeMajorSlice';

export interface Resistances {
  waterResist: number;
  earthResist: number;
  airResist: number;
  fireResist: number;
}

export interface Masteries {
  waterMastery: number;
  earthMastery: number;
  airMastery: number;
  fireMastery: number;
}

export interface ClassInformationsState {
  buildName: string;
  level: number;

  baseHp: number;
  baseArmor: number;
  ap: number;
  wp: number;
  mp: number;

  resistances: Resistances;
  masteries: Masteries;
  armorReceived: number;
  armorGiven: number;

  damageDealt: number;
  critical: number;
  initiative: number;
  dodge: number;
  wisdom: number;
  control: number;
  heals: number;
  block: number;
  range: number;
  lock: number;
  prospecting: number;
  will: number;

  critMastery: number;
  critResist: number;
  rearMastery: number;
  rearResist: number;
  meleeMastery: number;
  distanceMastery: number;
  healMastery: number;
  berserkMastery: number;

  manualValues: {
    baseHp: number;
    baseArmor: number;
    ap: number;
    wp: number;
    mp: number;
  
    resistances: Resistances;
    masteries: Masteries;
    armorReceived: number;
    armorGiven: number;
  
    damageDealt: number;
    critical: number;
    initiative: number;
    dodge: number;
    wisdom: number;
    control: number;
    heals: number;
    block: number;
    range: number;
    lock: number;
    prospecting: number;
    will: number;
  
    critMastery: number;
    critResist: number;
    rearMastery: number;
    rearResist: number;
    meleeMastery: number;
    distanceMastery: number;
    healMastery: number;
    berserkMastery: number;
  };
}


const initialState: ClassInformationsState = {
  buildName: 'Build 230',
  level: 230,

  // valeurs de base
  baseHp: 60,
  baseArmor: 0,
  ap: 6,
  wp: 6,
  mp: 3,

  resistances: {
    waterResist: 0,
    earthResist: 0,
    airResist: 0,
    fireResist: 0,
  },
  masteries: {
    waterMastery: 0,
    earthMastery: 0,
    airMastery: 0,
    fireMastery: 0,
  },
  armorReceived: 0,
  armorGiven: 0,

  damageDealt: 0,
  critical: 3,
  initiative: 0,
  dodge: 0,
  wisdom: 0,
  control: 1,
  heals: 0,
  block: 0,
  range: 0,
  lock: 0,
  prospecting: 0,
  will: 0,

  critMastery: 0,
  critResist: 0,
  rearMastery: 0,
  rearResist: 0,
  meleeMastery: 0,
  distanceMastery: 0,
  healMastery: 0,
  berserkMastery: 0,

  // valeurs ajoutées manuellement
  manualValues: {
    baseHp: 0,
    baseArmor: 0,
    ap: 0,
    wp: 0,
    mp: 0,
  
    resistances: {
      waterResist: 0,
      earthResist: 0,
      airResist: 0,
      fireResist: 0,
    },
    masteries: {
      waterMastery: 0,
      earthMastery: 0,
      airMastery: 0,
      fireMastery: 0,
    },
    armorReceived: 0,
    armorGiven: 0,
  
    damageDealt: 0,
    critical: 0,
    initiative: 0,
    dodge: 0,
    wisdom: 0,
    control: 0,
    heals: 0,
    block: 0,
    range: 0,
    lock: 0,
    prospecting: 0,
    will: 0,
  
    critMastery: 0,
    critResist: 0,
    rearMastery: 0,
    rearResist: 0,
    meleeMastery: 0,
    distanceMastery: 0,
    healMastery: 0,
    berserkMastery: 0,
  }  
};

const guildBonus = {
  hp: 55,
  fireResist: 20,
  waterResist: 20,
  earthResist: 20,
  airResist: 20,
  damageDealt: 8,
  heals: 8,
  prospecting: 10,
  wisdom: 10,
  initiative: 10,
  lock: 10,
  dodge: 10,
};

const worldBonus = {
  hp: 10,
  prospectiong: 10,
  wisdom: 10,
}

const classInformationsSlice = createSlice({
  name: 'classInformations',
  initialState,
  reducers: {
    updateProperty<T extends keyof ClassInformationsState>(
      state: ClassInformationsState,
      action: PayloadAction<{ key: T; value: ClassInformationsState[T] }>
    ) {
      state[action.payload.key] = action.payload.value;
    },
    updateManualProperty<T extends keyof ClassInformationsState['manualValues']>(
      state: ClassInformationsState,
      action: PayloadAction<{ key: T; value: ClassInformationsState['manualValues'][T] }>
    ) {
      state.manualValues[action.payload.key] = action.payload.value;
    },
    updateResistances(state, action: PayloadAction<Partial<Resistances>>) {
      state.resistances = { ...state.resistances, ...action.payload };
    },
    updateManualResistances(
      state: ClassInformationsState,
      action: PayloadAction<Partial<Resistances>>
    ) {
      state.manualValues.resistances = {...state.manualValues.resistances, ...action.payload};
    },
    updateMasteries(state, action: PayloadAction<Partial<Masteries>>) {
      state.masteries = { ...state.masteries, ...action.payload };
    },
    updateManualMasteries(
      state: ClassInformationsState,
      action: PayloadAction<Partial<Masteries>>
    ) {
      state.manualValues.masteries = {...state.manualValues.masteries, ...action.payload};
    },
    applyGuildBonus(state) {
      state.baseHp += guildBonus.hp;
      state.resistances.fireResist += guildBonus.fireResist;
      state.resistances.waterResist += guildBonus.waterResist;
      state.resistances.earthResist += guildBonus.earthResist;
      state.resistances.airResist += guildBonus.airResist;
      state.damageDealt += guildBonus.damageDealt;
      state.heals += guildBonus.heals;
      state.prospecting += guildBonus.prospecting;
      state.wisdom += guildBonus.wisdom;
      state.initiative += guildBonus.initiative;
      state.lock += guildBonus.lock;
      state.dodge += guildBonus.dodge;
    },
    removeGuildBonus(state) {
      state.baseHp -= guildBonus.hp;
      state.resistances.fireResist -= guildBonus.fireResist;
      state.resistances.waterResist -= guildBonus.waterResist;
      state.resistances.earthResist -= guildBonus.earthResist;
      state.resistances.airResist -= guildBonus.airResist;
      state.damageDealt -= guildBonus.damageDealt;
      state.heals -= guildBonus.heals;
      state.prospecting -= guildBonus.prospecting;
      state.wisdom -= guildBonus.wisdom;
      state.initiative -= guildBonus.initiative;
      state.lock -= guildBonus.lock;
      state.dodge -= guildBonus.dodge;
    },
    applyWorldBonus(state) {
      state.baseHp += worldBonus.hp;
      state.prospecting += worldBonus.prospectiong;
      state.wisdom += worldBonus.wisdom;
    },
    removeWorldBonus(state) {
      state.baseHp -= worldBonus.hp;
      state.prospecting -= worldBonus.prospectiong;
      state.wisdom -= worldBonus.wisdom;
    },
  },
});

export const {
  updateProperty,
  updateManualProperty,
  updateResistances,
  updateManualResistances,
  updateMasteries,
  updateManualMasteries,
  applyGuildBonus,
  removeGuildBonus,
  applyWorldBonus,
  removeWorldBonus,
} = classInformationsSlice.actions;

// Aptitudes
export const selectCalculatedStats = createSelector(
  (state: RootState) => state.classInformations,
  selectIntelPoints,
  selectStrengthPoints,
  selectAgilityPoints,
  selectChancePoints,
  selectMajorPoints,
  (
    classInfo,
    intelPoints,
    strengthPoints,
    agilityPoints,
    chancePoints,
    majorPoints
  ) => {
    // Calcul des points de vie
    let totalBaseHp =
      classInfo.baseHp +
      classInfo.manualValues.baseHp +
      (classInfo.level - 1) * 10;

    if (strengthPoints[3] > 0) {
      totalBaseHp += strengthPoints[3] * 20;
    }
    if (intelPoints[0] > 0) {
      totalBaseHp *= 1 + (intelPoints[0] * 4) / 100;
    }
    const hp = Math.floor(totalBaseHp);

    // Calcul des résistances
    const resistBonusIntel = intelPoints[1] * 10;
    const resistBonusMajor = majorPoints[6] * 50;
    const resists = {
      waterResist:
        classInfo.resistances.waterResist +
        classInfo.manualValues.resistances.waterResist +
        resistBonusIntel +
        resistBonusMajor,
      earthResist:
        classInfo.resistances.earthResist +
        classInfo.manualValues.resistances.earthResist +
        resistBonusIntel +
        resistBonusMajor,
      airResist:
        classInfo.resistances.airResist +
        classInfo.manualValues.resistances.airResist +
        resistBonusIntel +
        resistBonusMajor,
      fireResist:
        classInfo.resistances.fireResist +
        classInfo.manualValues.resistances.fireResist +
        resistBonusIntel +
        resistBonusMajor,
    };

    // Calcul de l'armure
    const armorBonus = intelPoints[4] * 4;
    const totalBaseArmor = classInfo.baseArmor + classInfo.manualValues.baseArmor;
    const armor = totalBaseArmor + Math.floor((hp * armorBonus) / 100);

    // Calcul des maîtrises élémentaires
    const bonusStrength = strengthPoints[0] * 5;
    const bonusMajorPM = majorPoints[1] * 20;
    const bonusMajorPO = majorPoints[2] * 40;
    const bonusMajorControl = majorPoints[4] * 40;
    const elems = {
      waterMastery:
        classInfo.masteries.waterMastery +
        classInfo.manualValues.masteries.waterMastery +
        bonusStrength +
        bonusMajorPM +
        bonusMajorPO +
        bonusMajorControl,
      earthMastery:
        classInfo.masteries.earthMastery +
        classInfo.manualValues.masteries.earthMastery +
        bonusStrength +
        bonusMajorPM +
        bonusMajorPO +
        bonusMajorControl,
      airMastery:
        classInfo.masteries.airMastery +
        classInfo.manualValues.masteries.airMastery +
        bonusStrength +
        bonusMajorPM +
        bonusMajorPO +
        bonusMajorControl,
      fireMastery:
        classInfo.masteries.fireMastery +
        classInfo.manualValues.masteries.fireMastery +
        bonusStrength +
        bonusMajorPM +
        bonusMajorPO +
        bonusMajorControl,
    };

    // Calcul des autres statistiques
    const meleeMastery =
      classInfo.meleeMastery +
      classInfo.manualValues.meleeMastery +
      strengthPoints[1] * 8;
    const distanceMastery =
      classInfo.distanceMastery +
      classInfo.manualValues.distanceMastery +
      strengthPoints[2] * 8;

    const lock =
      classInfo.lock +
      classInfo.manualValues.lock +
      agilityPoints[0] * 6 +
      agilityPoints[3] * 4;
    const dodge =
      classInfo.dodge +
      classInfo.manualValues.dodge +
      agilityPoints[1] * 6 +
      agilityPoints[3] * 4;
    const initiative =
      classInfo.initiative +
      classInfo.manualValues.initiative +
      agilityPoints[2] * 4;
    const will =
      classInfo.will +
      classInfo.manualValues.will +
      agilityPoints[4];

    const critical =
      classInfo.critical +
      classInfo.manualValues.critical +
      chancePoints[0];
    const block =
      classInfo.block +
      classInfo.manualValues.block +
      chancePoints[1];
    const critMastery =
      classInfo.critMastery +
      classInfo.manualValues.critMastery +
      chancePoints[2] * 4;
    const rearMastery =
      classInfo.rearMastery +
      classInfo.manualValues.rearMastery +
      chancePoints[3] * 6;
    const berserkMastery =
      classInfo.berserkMastery +
      classInfo.manualValues.berserkMastery +
      chancePoints[4] * 8;
    const healMastery =
      classInfo.healMastery +
      classInfo.manualValues.healMastery +
      chancePoints[5] * 6;
    const rearResist =
      classInfo.rearResist +
      classInfo.manualValues.rearResist +
      chancePoints[6] * 4;
    const critResist =
      classInfo.critResist +
      classInfo.manualValues.critResist +
      chancePoints[7] * 4;

    const ap =
      classInfo.ap +
      classInfo.manualValues.ap +
      majorPoints[0];
    const mp =
      classInfo.mp +
      classInfo.manualValues.mp +
      majorPoints[1];
    const range =
      classInfo.range +
      classInfo.manualValues.range +
      majorPoints[2];
    const wp =
      classInfo.wp +
      classInfo.manualValues.wp +
      majorPoints[3] * 2;
    const control =
      classInfo.control +
      classInfo.manualValues.control +
      majorPoints[4] * 2;
    const damageDealt =
      classInfo.damageDealt +
      classInfo.manualValues.damageDealt +
      majorPoints[5] * 10;

    return {
      hp,
      armor,
      resists,
      elems,
      meleeMastery,
      distanceMastery,
      lock,
      dodge,
      initiative,
      will,
      critical,
      block,
      critMastery,
      rearMastery,
      berserkMastery,
      healMastery,
      rearResist,
      critResist,
      ap,
      mp,
      range,
      wp,
      control,
      damageDealt,
    };
  }
);


export default classInformationsSlice.reducer;
