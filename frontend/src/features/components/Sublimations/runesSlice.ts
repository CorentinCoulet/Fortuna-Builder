import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Shard {
  src: string;
  alt: string;
  statValue: number;
  label: string;
  runeLevel: number;
}

interface RunesState {
  selectedShard: Shard | null;
  equippedShards: Array<Shard | null>;
}

const initialState: RunesState = {
  selectedShard: null,
  equippedShards: Array(10).fill(null),
};

const runesSlice = createSlice({
  name: 'runes',
  initialState,
  reducers: {
    setSelectedShard: (state, action: PayloadAction<Shard | null>) => {
      state.selectedShard = action.payload;
    },
    clearSelectedShard: (state) => {
      state.selectedShard = null;
    },
    equipShard: (state, action: PayloadAction<{ shard: Shard; index: number }>) => {
      const { shard, index } = action.payload;
      if (state.equippedShards[index]) {
        state.equippedShards[index] = null;
      }
      state.equippedShards[index] = shard; 
      state.selectedShard = null; 
    },
    unequipShard: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.equippedShards[index] = null;
    },
  },
});

export const { 
  setSelectedShard, 
  clearSelectedShard,
  equipShard,
  unequipShard,
} = runesSlice.actions;

export default runesSlice.reducer;
