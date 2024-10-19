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

export interface ClassBonusValues {
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

  sublimationValues: ClassBonusValues;
  manualValues: ClassBonusValues;
  equipmentValues: ClassBonusValues;
}

const initialState: ClassInformationsState = {
  buildName: 'Build 230',
  level: 230,

  // Valeurs de base
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

  // Valeurs de sublimation
  sublimationValues: {
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
  },

  // Valeurs manuelles
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
  },

  // Valeurs d'équipement
  equipmentValues: {
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

const classInformationsSlice = createSlice({
  name: 'classInformations',
  initialState,
  reducers: {
    applyEquipmentBonus(
      state: ClassInformationsState,
      action: PayloadAction<Partial<ClassBonusValues>>
    ) {
      // Ajout des bonus pour les statistiques simples
      state.baseHp += action.payload.baseHp ?? 0;
      state.baseArmor += action.payload.baseArmor ?? 0;
      state.ap += action.payload.ap ?? 0;
      state.wp += action.payload.wp ?? 0;
      state.mp += action.payload.mp ?? 0;
      state.damageDealt += action.payload.damageDealt ?? 0;

      // Ajout des bonus pour les résistances
      if (action.payload.resistances) {
        state.resistances.waterResist += action.payload.resistances.waterResist ?? 0;
        state.resistances.earthResist += action.payload.resistances.earthResist ?? 0;
        state.resistances.airResist += action.payload.resistances.airResist ?? 0;
        state.resistances.fireResist += action.payload.resistances.fireResist ?? 0;
      }

      // Ajout des bonus pour les maîtrises
      if (action.payload.masteries) {
        state.masteries.waterMastery += action.payload.masteries.waterMastery ?? 0;
        state.masteries.earthMastery += action.payload.masteries.earthMastery ?? 0;
        state.masteries.airMastery += action.payload.masteries.airMastery ?? 0;
        state.masteries.fireMastery += action.payload.masteries.fireMastery ?? 0;
      }

    },

    removeEquipmentBonus(
      state: ClassInformationsState,
      action: PayloadAction<Partial<ClassBonusValues>>
    ) {
      // Retrait des bonus pour les statistiques simples
      state.baseHp -= action.payload.baseHp ?? 0;
      state.baseArmor -= action.payload.baseArmor ?? 0;
      state.ap -= action.payload.ap ?? 0;
      state.wp -= action.payload.wp ?? 0;
      state.mp -= action.payload.mp ?? 0;
      state.damageDealt -= action.payload.damageDealt ?? 0;

      // Retrait des bonus pour les résistances
      if (action.payload.resistances) {
        state.resistances.waterResist -= action.payload.resistances.waterResist ?? 0;
        state.resistances.earthResist -= action.payload.resistances.earthResist ?? 0;
        state.resistances.airResist -= action.payload.resistances.airResist ?? 0;
        state.resistances.fireResist -= action.payload.resistances.fireResist ?? 0;
      }

      // Retrait des bonus pour les maîtrises
      if (action.payload.masteries) {
        state.masteries.waterMastery -= action.payload.masteries.waterMastery ?? 0;
        state.masteries.earthMastery -= action.payload.masteries.earthMastery ?? 0;
        state.masteries.airMastery -= action.payload.masteries.airMastery ?? 0;
        state.masteries.fireMastery -= action.payload.masteries.fireMastery ?? 0;
      }
    },
    resetEquipmentValues(state) {
      state.equipmentValues = initialState.equipmentValues;
    },

    updateProperty<T extends keyof ClassInformationsState>(
      state: ClassInformationsState,
      action: PayloadAction<{ key: T; value: ClassInformationsState[T] }>
    ) {
      state[action.payload.key] = action.payload.value;
    },
    updateMasteries(
      state: ClassInformationsState,
      action: PayloadAction<Partial<Masteries>>
    ) {
      state.masteries = { 
        ...state.masteries, 
        ...action.payload 
      };
    },
    updateResistances(
      state: ClassInformationsState,
      action: PayloadAction<Partial<Resistances>>
    ) {
      state.resistances = {
        ...state.resistances,
        ...action.payload,
      };
    },
    updateManualMasteries(
      state: ClassInformationsState,
      action: PayloadAction<Partial<Masteries>>
    ) {
      state.manualValues.masteries = {
        ...state.manualValues.masteries,
        ...action.payload,
      };
    },
    updateManualResistances(
      state: ClassInformationsState,
      action: PayloadAction<Partial<Resistances>>
    ) {
      state.manualValues.resistances = {
        ...state.manualValues.resistances,
        ...action.payload,
      };
    },
    updateManualProperty<T extends keyof ClassInformationsState['manualValues']>(
      state: ClassInformationsState,
      action: PayloadAction<{ key: T; value: ClassInformationsState['manualValues'][T] }>
    ) {
      state.manualValues[action.payload.key] = action.payload.value;
    },
    updateEquipmentProperty<T extends keyof ClassInformationsState['equipmentValues']>(
      state: ClassInformationsState,
      action: PayloadAction<{ key: T; value: ClassInformationsState['equipmentValues'][T] }>
    ) {
      state.equipmentValues[action.payload.key] = action.payload.value;
    },

    resetManualValues(state: ClassInformationsState) {
      state.manualValues = initialState.manualValues;
    },
    resetSublimationValues(state: ClassInformationsState) {
      state.sublimationValues = initialState.sublimationValues;
    },

    applyGuildBonus(state) {
      state.baseHp += 55;
      state.resistances.fireResist += 20;
      state.resistances.waterResist += 20;
      state.resistances.earthResist += 20;
      state.resistances.airResist += 20;
      state.damageDealt += 8;
      state.heals += 8;
      state.prospecting += 10;
      state.wisdom += 10;
      state.initiative += 10;
      state.lock += 10;
      state.dodge += 10;
    },
    removeGuildBonus(state) {
      state.baseHp -= 55;
      state.resistances.fireResist -= 20;
      state.resistances.waterResist -= 20;
      state.resistances.earthResist -= 20;
      state.resistances.airResist -= 20;
      state.damageDealt -= 8;
      state.heals -= 8;
      state.prospecting -= 10;
      state.wisdom -= 10;
      state.initiative -= 10;
      state.lock -= 10;
      state.dodge -= 10;
    },

    applyWorldBonus(state) {
      state.baseHp += 10;
      state.prospecting += 10;
      state.wisdom += 10;
    },
    removeWorldBonus(state) {
      state.baseHp -= 10;
      state.prospecting -= 10;
      state.wisdom -= 10;
    },
  },
});

export const {
  applyEquipmentBonus,
  removeEquipmentBonus,
  resetEquipmentValues,
  updateProperty,
  updateMasteries,
  updateResistances,
  updateManualProperty,
  updateManualMasteries,
  updateManualResistances,
  updateEquipmentProperty,
  resetManualValues,
  resetSublimationValues,
  applyGuildBonus,
  removeGuildBonus,
  applyWorldBonus,
  removeWorldBonus,
} = classInformationsSlice.actions;

// Sélecteur pour calculer les stats finales
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
      classInfo.equipmentValues.baseHp +
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
        classInfo.equipmentValues.resistances.waterResist +
        resistBonusIntel +
        resistBonusMajor,
      earthResist:
        classInfo.resistances.earthResist +
        classInfo.manualValues.resistances.earthResist +
        classInfo.equipmentValues.resistances.earthResist +
        resistBonusIntel +
        resistBonusMajor,
      airResist:
        classInfo.resistances.airResist +
        classInfo.manualValues.resistances.airResist +
        classInfo.equipmentValues.resistances.airResist +
        resistBonusIntel +
        resistBonusMajor,
      fireResist:
        classInfo.resistances.fireResist +
        classInfo.manualValues.resistances.fireResist +
        classInfo.equipmentValues.resistances.fireResist +
        resistBonusIntel +
        resistBonusMajor,
    };

    // Calcul de l'armure
    const armorBonus = intelPoints[4] * 4;
    const totalBaseArmor =
      classInfo.baseArmor +
      classInfo.manualValues.baseArmor +
      classInfo.equipmentValues.baseArmor;
    const armor = totalBaseArmor + Math.floor((hp * armorBonus) / 100);

    // Calcul des maîtrises élémentaires
    const bonusStrength = strengthPoints[0] * 5;
    const elems = {
      waterMastery:
        classInfo.masteries.waterMastery +
        classInfo.manualValues.masteries.waterMastery +
        classInfo.equipmentValues.masteries.waterMastery +
        bonusStrength,
      earthMastery:
        classInfo.masteries.earthMastery +
        classInfo.manualValues.masteries.earthMastery +
        classInfo.equipmentValues.masteries.earthMastery +
        bonusStrength,
      airMastery:
        classInfo.masteries.airMastery +
        classInfo.manualValues.masteries.airMastery +
        classInfo.equipmentValues.masteries.airMastery +
        bonusStrength,
      fireMastery:
        classInfo.masteries.fireMastery +
        classInfo.manualValues.masteries.fireMastery +
        classInfo.equipmentValues.masteries.fireMastery +
        bonusStrength,
    };

    // Calcul des autres statistiques
    const meleeMastery =
      classInfo.meleeMastery +
      classInfo.manualValues.meleeMastery +
      classInfo.equipmentValues.meleeMastery +
      strengthPoints[1] * 8;
    const distanceMastery =
      classInfo.distanceMastery +
      classInfo.manualValues.distanceMastery +
      classInfo.equipmentValues.distanceMastery +
      strengthPoints[2] * 8;

    const lock =
      classInfo.lock +
      classInfo.manualValues.lock +
      classInfo.equipmentValues.lock +
      agilityPoints[0] * 6 +
      agilityPoints[3] * 4;
    const dodge =
      classInfo.dodge +
      classInfo.manualValues.dodge +
      classInfo.equipmentValues.dodge +
      agilityPoints[1] * 6 +
      agilityPoints[3] * 4;
    const initiative =
      classInfo.initiative +
      classInfo.manualValues.initiative +
      classInfo.equipmentValues.initiative +
      agilityPoints[2] * 4;
    const will =
      classInfo.will +
      classInfo.manualValues.will +
      classInfo.equipmentValues.will +
      agilityPoints[4];

    const critical =
      classInfo.critical +
      classInfo.manualValues.critical +
      classInfo.equipmentValues.critical +
      chancePoints[0];
    const block =
      classInfo.block +
      classInfo.manualValues.block +
      classInfo.equipmentValues.block +
      chancePoints[1];
    const critMastery =
      classInfo.critMastery +
      classInfo.manualValues.critMastery +
      classInfo.equipmentValues.critMastery +
      chancePoints[2] * 4;
    const rearMastery =
      classInfo.rearMastery +
      classInfo.manualValues.rearMastery +
      classInfo.equipmentValues.rearMastery +
      chancePoints[3] * 6;
    const berserkMastery =
      classInfo.berserkMastery +
      classInfo.manualValues.berserkMastery +
      classInfo.equipmentValues.berserkMastery +
      chancePoints[4] * 8;
    const healMastery =
      classInfo.healMastery +
      classInfo.manualValues.healMastery +
      classInfo.equipmentValues.healMastery +
      chancePoints[5] * 6;
    const rearResist =
      classInfo.rearResist +
      classInfo.manualValues.rearResist +
      classInfo.equipmentValues.rearResist +
      chancePoints[6] * 4;
    const critResist =
      classInfo.critResist +
      classInfo.manualValues.critResist +
      classInfo.equipmentValues.critResist +
      chancePoints[7] * 4;

    const ap =
      classInfo.ap +
      classInfo.manualValues.ap +
      classInfo.equipmentValues.ap +
      majorPoints[0];
    const mp =
      classInfo.mp +
      classInfo.manualValues.mp +
      classInfo.equipmentValues.mp +
      majorPoints[1];
    const range =
      classInfo.range +
      classInfo.manualValues.range +
      classInfo.equipmentValues.range +
      majorPoints[2];
    const wp =
      classInfo.wp +
      classInfo.manualValues.wp +
      classInfo.equipmentValues.wp +
      majorPoints[3] * 2;
    const control =
      classInfo.control +
      classInfo.manualValues.control +
      classInfo.equipmentValues.control +
      majorPoints[4] * 2;
    const damageDealt =
      classInfo.damageDealt +
      classInfo.manualValues.damageDealt +
      classInfo.equipmentValues.damageDealt +
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
