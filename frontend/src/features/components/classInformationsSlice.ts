import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ClassInformationsState {
  buildName: string;
  level: number;

  hp: number;
  armor: number;
  ap: number;
  wp: number;
  mp: number;

  waterArmor: number;
  waterMastery: number;
  earthArmor: number;
  earthMastery: number;
  airArmor: number;
  airMastery: number;
  fireArmor: number;
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

  hp: 0,
  armor: 0,
  ap: 6,
  wp: 6,
  mp: 3,

  waterArmor: 0,
  waterMastery: 0,
  earthArmor: 0,
  earthMastery: 0,
  airArmor: 0,
  airMastery: 0,
  fireArmor: 0,
  fireMastery: 0,
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
      state.hp = action.payload;
    },
    setArmor(state, action: PayloadAction<number>){
      state.armor = action.payload;
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

    setWaterArmor(state, action: PayloadAction<number>) {
      state.waterArmor = action.payload;
    },
    setWaterMastery(state, action: PayloadAction<number>) {
      state.waterMastery = action.payload;
    },
    setEarthArmor(state, action: PayloadAction<number>) {
      state.earthArmor = action.payload;
    },
    setEarthMastery(state, action: PayloadAction<number>) {
      state.earthMastery = action.payload;
    },
    setAirArmor(state, action: PayloadAction<number>) {
      state.airArmor = action.payload;
    },
    setAirMastery(state, action: PayloadAction<number>) {
      state.airMastery = action.payload;
    },
    setFireArmor(state, action: PayloadAction<number>) {
      state.fireArmor = action.payload;
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

  setWaterArmor,
  setWaterMastery,
  setEarthArmor,
  setEarthMastery,
  setAirArmor,
  setAirMastery,
  setFireArmor,
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

export default classInformationsSlice.reducer;
