import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Spell {
  number: string;
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

function generateSpellId(spell: Spell): string {
  return `${spell.src}-${spell.alt}`;
}

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
    addActiveSpell(state, action: PayloadAction<{ spell: Spell; index: number }>) {
      const { spell, index } = action.payload;
      if (!spell.number) {
        spell.number = generateSpellId(spell);
      }
      state.activeSpells[index] = {
        ...spell,
        key: `${state.selectedClass}-active-${spell.number}-${Date.now()}`,
      };
      if (!state.usedSpells.includes(spell.number)) {
        state.usedSpells.push(spell.number);
      }
    },
    removeActiveSpell(state, action: PayloadAction<Spell>) {
      if (!action.payload.number) {
        action.payload.number = generateSpellId(action.payload);
      }
      state.activeSpells = state.activeSpells.map((spell) =>
          spell?.number === action.payload.number ? null : spell
      );
      state.usedSpells = state.usedSpells.filter((id) => id !== action.payload.number);
    },
    addPassiveSpell(state, action: PayloadAction<{ spell: Spell; index: number }>) {
      const { spell, index } = action.payload;
      if (!spell.number) {
        spell.number = generateSpellId(spell);
      }
      state.passiveSpells[index] = {
        ...spell,
        key: `${state.selectedClass}-passive-${spell.number}-${Date.now()}`,
      };
      if (!state.usedSpells.includes(spell.number)) {
        state.usedSpells.push(spell.number);
      }
    },
    removePassiveSpell(state, action: PayloadAction<Spell>) {
      if (!action.payload.number) {
        action.payload.number = generateSpellId(action.payload);
      }
      state.passiveSpells = state.passiveSpells.map((spell) =>
          spell?.number === action.payload.number ? null : spell
      );
      state.usedSpells = state.usedSpells.filter((id) => id !== action.payload.number);
    },
    clearAllSpells(state) {
      state.activeSpells = Array(12).fill(null);
      state.passiveSpells = Array(6).fill(null);
      state.usedSpells = [];
    },
    loadSpellsFromStorage(state, action: PayloadAction<SpellsState>) {
      state.selectedClass = action.payload.selectedClass;
      state.activeSpells = action.payload.activeSpells.map((spell) => {
        if (spell) {
          if (!spell.number) {
            spell.number = generateSpellId(spell);
          }
          return spell;
        }
        return null;
      });
      state.passiveSpells = action.payload.passiveSpells.map((spell) => {
        if (spell) {
          if (!spell.number) {
            spell.number = generateSpellId(spell);
          }
          return spell;
        }
        return null;
      });
      state.selectedSpell = action.payload.selectedSpell;
      state.draggedSpell = action.payload.draggedSpell;
      state.usedSpells = [
        ...state.activeSpells.filter((spell): spell is Spell => spell !== null).map((spell) => spell.number!),
        ...state.passiveSpells.filter((spell): spell is Spell => spell !== null).map((spell) => spell.number!),
      ];
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
