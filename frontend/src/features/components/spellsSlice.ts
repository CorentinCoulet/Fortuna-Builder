import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Spell {
  src: string;
  alt: string;
  key?: string;
}

interface SpellsState {
  selectedClass: string;
  activeSpells: Spell[];
  passiveSpells: Spell[];
}

const initialState: SpellsState = {
  selectedClass: 'Cra',
  activeSpells: [],
  passiveSpells: [],
};

const spellsSlice = createSlice({
  name: 'spells',
  initialState,
  reducers: {
    setSelectedClass(state, action: PayloadAction<string>) {
      state.selectedClass = action.payload;
      state.activeSpells = [];
      state.passiveSpells = [];
    },
    addActiveSpell(state, action: PayloadAction<Spell>) {
        if (state.activeSpells.length < 12) {
            state.activeSpells.push({
                ...action.payload,
                key: `${state.selectedClass}-active-${action.payload.src}-${Date.now()}`
            });
        }
    },
    removeActiveSpell(state, action: PayloadAction<Spell>) {
      state.activeSpells = state.activeSpells.filter(
        (spell) => spell.src !== action.payload.src || spell.alt !== action.payload.alt
      );
    },
    addPassiveSpell(state, action: PayloadAction<Spell>) {
        if (state.passiveSpells.length < 6) {
            state.passiveSpells.push({
                ...action.payload,
                key: `${state.selectedClass}-passive-${action.payload.src}-${Date.now()}`
            });
        }
    },
    removePassiveSpell(state, action: PayloadAction<Spell>) {
      state.passiveSpells = state.passiveSpells.filter(
        (spell) => spell.src !== action.payload.src || spell.alt !== action.payload.alt
      );
    },
    clearAllSpells(state) {
      state.activeSpells = [];
      state.passiveSpells = [];
    },
    loadSpellsFromStorage(state, action: PayloadAction<SpellsState>) {
        state.activeSpells = action.payload.activeSpells.map(spell => ({
            ...spell,
            key: `${spell.src}-${Date.now()}`
        }));
        state.passiveSpells = action.payload.passiveSpells.map(spell => ({
            ...spell,
            key: `${spell.src}-${Date.now()}`
        }));
    }
  },
});

export const {
  setSelectedClass,
  addActiveSpell,
  removeActiveSpell,
  addPassiveSpell,
  removePassiveSpell,
  clearAllSpells,
  loadSpellsFromStorage,
} = spellsSlice.actions;

export default spellsSlice.reducer;


6463-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0