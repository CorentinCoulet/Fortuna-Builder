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
}

const initialState: RunesState = {
  selectedShard: null,
};

const runesSlice = createSlice({
  name: 'runes',
  initialState,
  reducers: {
    setSelectedShard: (state, action: PayloadAction<Shard | null>) => {
      state.selectedShard = action.payload;
    },
  },
});

export const { setSelectedShard } = runesSlice.actions;

export default runesSlice.reducer;
