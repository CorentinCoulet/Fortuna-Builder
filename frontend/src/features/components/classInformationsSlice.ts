import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { selectIntelPoints } from './Aptitudes/aptitudeIntelSlice';
import { selectStrengthPoints } from './Aptitudes/aptitudeStrengthSlice';
import { selectAgilityPoints } from './Aptitudes/aptitudeAgilitySlice';
import { selectChancePoints } from './Aptitudes/aptitudeChanceSlice';
import { selectMajorPoints } from './Aptitudes/aptitudeMajorSlice';

interface ClassInformationsState {
  buildName: string;
  level: number;

  baseHp: number;
  baseArmor: number;
  ap: number;
  wp: number;
  mp: number;

  waterResist: number;
  waterMastery: number;
  earthResist: number;
  earthMastery: number;
  airResist: number;
  airMastery: number;
  fireResist: number;
  fireMastery: number;
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

const initialState: ClassInformationsState = {
  buildName: 'Build 230',
  level: 230,

  baseHp: 60,
  baseArmor: 0,
  ap: 6,
  wp: 6,
  mp: 3,

  waterResist: 0,
  waterMastery: 0,
  earthResist: 0,
  earthMastery: 0,
  airResist: 0,
  airMastery: 0,
  fireResist: 0,
  fireMastery: 0,
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
};

const classInformationsSlice = createSlice({
  name: 'classInformations',
  initialState,
  reducers: {
    setBuildName(state, action: PayloadAction<string>) {
      state.buildName = action.payload;
    },
    setLevel(state, action: PayloadAction<number>) {
      state.level = action.payload;
    },

    setHp(state, action: PayloadAction<number>) {
      state.baseHp = action.payload;
    },
    setArmor(state, action: PayloadAction<number>){
      state.baseArmor = action.payload;
    },
    setAp(state, action: PayloadAction<number>) {
      state.ap = action.payload;
    },
    setWp(state, action: PayloadAction<number>) {
      state.wp = action.payload;
    },
    setMp(state, action: PayloadAction<number>) {
      state.mp = action.payload;
    },

    setWaterResist(state, action: PayloadAction<number>) {
      state.waterResist = action.payload;
    },
    setWaterMastery(state, action: PayloadAction<number>) {
      state.waterMastery = action.payload;
    },
    setEarthResist(state, action: PayloadAction<number>) {
      state.earthResist = action.payload;
    },
    setEarthMastery(state, action: PayloadAction<number>) {
      state.earthMastery = action.payload;
    },
    setAirResist(state, action: PayloadAction<number>) {
      state.airResist = action.payload;
    },
    setAirMastery(state, action: PayloadAction<number>) {
      state.airMastery = action.payload;
    },
    setFireResist(state, action: PayloadAction<number>) {
      state.fireResist = action.payload;
    },
    setFireMastery(state, action: PayloadAction<number>) {
      state.fireMastery = action.payload;
    },
    setArmorReceived(state, action: PayloadAction<number>) {
      state.armorReceived = action.payload;
    },
    setArmorGiven(state, action: PayloadAction<number>) {
      state.armorGiven = action.payload;
    },

    setDamageDealt(state, action: PayloadAction<number>) {
      state.damageDealt = action.payload;
    },
    setCritical(state, action: PayloadAction<number>) {
      state.critical = action.payload;
    },
    setInitiative(state, action: PayloadAction<number>) {
      state.initiative = action.payload;
    },
    setDodge(state, action: PayloadAction<number>) {
      state.dodge = action.payload;
    },
    setWisdom(state, action: PayloadAction<number>) {
      state.wisdom = action.payload;
    },
    setControl(state, action: PayloadAction<number>) {
      state.control = action.payload;
    },
    setHeals(state, action: PayloadAction<number>) {
      state.heals = action.payload;
    },
    setBlock(state, action: PayloadAction<number>) {
      state.block = action.payload;
    },
    setRange(state, action: PayloadAction<number>) {
      state.range = action.payload;
    },
    setLock(state, action: PayloadAction<number>) {
      state.lock = action.payload;
    },
    setProspecting(state, action: PayloadAction<number>) {
      state.prospecting = action.payload;
    },
    setWill(state, action: PayloadAction<number>) {
      state.will = action.payload;
    },

    setCritMastery(state, action: PayloadAction<number>) {
      state.critMastery = action.payload;
    },
    setCritResist(state, action: PayloadAction<number>) {
      state.critResist = action.payload;
    },
    setRearMastery(state, action: PayloadAction<number>) {
      state.rearMastery = action.payload;
    },
    setRearResist(state, action: PayloadAction<number>) {
      state.rearResist = action.payload;
    },
    setMeleeMastery(state, action: PayloadAction<number>) {
      state.meleeMastery = action.payload;
    },
    setDistanceResist(state, action: PayloadAction<number>) {
      state.distanceMastery = action.payload;
    },
    setHealMastery(state, action: PayloadAction<number>) {
      state.healMastery = action.payload;
    },
    setBerserkMastery(state, action: PayloadAction<number>) {
      state.berserkMastery = action.payload;
    },
  },
});

export const {
  setBuildName,
  setLevel,

  setHp, 
  setArmor,
  setAp,
  setWp,
  setMp,

  setWaterResist,
  setWaterMastery,
  setEarthResist,
  setEarthMastery,
  setAirResist,
  setAirMastery,
  setFireResist,
  setFireMastery,
  setArmorReceived,
  setArmorGiven,

  setDamageDealt,
  setCritical,
  setInitiative,
  setDodge,
  setWisdom,
  setControl,
  setHeals,
  setBlock,
  setRange,
  setLock,
  setProspecting,
  setWill,

  setCritMastery,
  setCritResist,
  setRearMastery,
  setRearResist,
  setMeleeMastery,
  setDistanceResist,
  setHealMastery,
  setBerserkMastery,
} = classInformationsSlice.actions;

// Aptitudes
export const selectCalculatedStats = createSelector(
  (state: RootState) => state.classInformations,
  selectIntelPoints,
  selectStrengthPoints,
  selectAgilityPoints,
  selectChancePoints,
  selectMajorPoints,
  (classInfo, intelPoints, strengthPoints, agilityPoints, chancePoints, majorPoints) => {
    // Calcul des points de vie
    let totalBaseHp = classInfo.baseHp + (classInfo.level - 1) * 10;
    if (strengthPoints[3] > 0) {
      totalBaseHp += (strengthPoints[3] * 20);
    }
    if (intelPoints[0] > 0) {
      totalBaseHp *= (1 + intelPoints[0] * 4 / 100);
    }
    const hp = Math.floor(totalBaseHp);

    // Calcul des résistances
    const resistBonusIntel = intelPoints[1] * 10;
    const resistBonusMajor = majorPoints[6] * 50;
    const resists = {
      waterResist: classInfo.waterResist + resistBonusIntel + resistBonusMajor,
      earthResist: classInfo.earthResist + resistBonusIntel + resistBonusMajor,
      airResist: classInfo.airResist + resistBonusIntel + resistBonusMajor,
      fireResist: classInfo.fireResist + resistBonusIntel + resistBonusMajor,
    };

    // Calcul de l'armure
    const armorBonus = intelPoints[4] * 4;
    const armor = classInfo.baseArmor + Math.floor(hp * (armorBonus / 100));

    // Calcul des maîtrises élémentaires
    const bonusStrength = strengthPoints[0] * 5;
    const bonusMajorPM = majorPoints[1] * 20;
    const bonusMajorPO = majorPoints[2] * 40;
    const bonusMajorControl = majorPoints[4] * 40;
    const elems = {
      waterMastery: classInfo.waterMastery + bonusStrength + bonusMajorPM + bonusMajorPO + bonusMajorControl,
      earthMastery: classInfo.earthMastery + bonusStrength + bonusMajorPM + bonusMajorPO + bonusMajorControl,
      airMastery: classInfo.airMastery + bonusStrength + bonusMajorPM + bonusMajorPO + bonusMajorControl,
      fireMastery: classInfo.fireMastery + bonusStrength + bonusMajorPM + bonusMajorPO + bonusMajorControl,
    };

    // Calcul des autres statistiques
    const meleeMastery = classInfo.meleeMastery + strengthPoints[1] * 8;
    const distanceMastery = classInfo.distanceMastery + strengthPoints[2] * 8;

    const lock = classInfo.lock + agilityPoints[0] * 6 + agilityPoints[3] * 4;
    const dodge = classInfo.dodge + agilityPoints[1] * 6 + agilityPoints[3] * 4;
    const initiative = classInfo.initiative + agilityPoints[2] * 4;
    const will = classInfo.will + agilityPoints[4];

    const critical = classInfo.critical + chancePoints[0];
    const block = classInfo.block + chancePoints[1];
    const critMastery = classInfo.critMastery + chancePoints[2] * 4;
    const rearMastery = classInfo.rearMastery + chancePoints[3] * 6;
    const berserkMastery = classInfo.berserkMastery + chancePoints[4] * 8;
    const healMastery = classInfo.healMastery + chancePoints[5] * 6;
    const rearResist = classInfo.rearResist + chancePoints[6] * 4;
    const critResist = classInfo.critResist + chancePoints[7] * 4;

    const ap = classInfo.ap + majorPoints[0];
    const mp = classInfo.mp + majorPoints[1];
    const range = classInfo.range + majorPoints[2];
    const wp = classInfo.wp + majorPoints[3] * 2;
    const control = classInfo.control + majorPoints[4] * 2;
    const damageDealt = classInfo.damageDealt + majorPoints[5] * 10;

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
