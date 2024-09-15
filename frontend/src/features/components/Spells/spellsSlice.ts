import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Spell {
  src: string;
  alt: string;
  key?: string;
  name?: string;
  effects?: string;
  details?: string;
}

interface SpellsState {
  selectedClass: string;
  activeSpells: (Spell | null)[];
  passiveSpells: (Spell | null)[];
  selectedSpell: Spell | null;
  draggedSpell: Spell | null;
  usedSpells: string[];
}

const initialState: SpellsState = {
  selectedClass: '',
  activeSpells: Array(12).fill(null),
  passiveSpells: Array(6).fill(null),
  selectedSpell: null,
  draggedSpell: null,
  usedSpells: [],
};

const spellsSlice = createSlice({
  name: 'spells',
  initialState,
  reducers: {
    setSelectedClass(state, action: PayloadAction<string>) {
      state.selectedClass = action.payload;
      state.activeSpells = Array(12).fill(null);
      state.passiveSpells = Array(6).fill(null);
      state.usedSpells = [];
    },
    addActiveSpell(state, action: PayloadAction<{ spell: Spell, index: number }>) {
      const { spell, index } = action.payload;
      state.activeSpells[index] = {
        ...spell,
        key: `${state.selectedClass}-active-${spell.src}-${Date.now()}`,
      };
      if (!state.usedSpells.includes(spell.src)) {
        state.usedSpells.push(spell.src);
      }
    },
    removeActiveSpell(state, action: PayloadAction<Spell>) {
      state.activeSpells = state.activeSpells.map(spell =>
        spell?.src === action.payload.src && spell?.alt === action.payload.alt ? null : spell
      );
      state.usedSpells = state.usedSpells.filter(src => src !== action.payload.src);
    },
    addPassiveSpell(state, action: PayloadAction<{ spell: Spell, index: number }>) {
      const { spell, index } = action.payload;
      state.passiveSpells[index] = {
        ...spell,
        key: `${state.selectedClass}-passive-${spell.src}-${Date.now()}`,
      };
      if (!state.usedSpells.includes(spell.src)) {
        state.usedSpells.push(spell.src);
      }
    },
    removePassiveSpell(state, action: PayloadAction<Spell>) {
      state.passiveSpells = state.passiveSpells.map(spell =>
        spell?.src === action.payload.src && spell?.alt === action.payload.alt ? null : spell
      );
      state.usedSpells = state.usedSpells.filter(src => src !== action.payload.src);
    },
    clearAllSpells(state) {
      state.activeSpells = Array(12).fill(null);
      state.passiveSpells = Array(6).fill(null);
      state.usedSpells = [];
    },
    loadSpellsFromStorage(state, action: PayloadAction<SpellsState>) {
      state.selectedClass = action.payload.selectedClass;
      state.activeSpells = action.payload.activeSpells;
      state.passiveSpells = action.payload.passiveSpells;
      state.selectedSpell = action.payload.selectedSpell;
      state.draggedSpell = action.payload.draggedSpell;
    },
    setSelectedSpell(state, action: PayloadAction<Spell | null>) {
      state.selectedSpell = action.payload;
    },
    spellDrag(state, action: PayloadAction<Spell | null>) {
      state.draggedSpell = action.payload;
    },
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
  setSelectedSpell,
  spellDrag,
} = spellsSlice.actions;

export default spellsSlice.reducer;
