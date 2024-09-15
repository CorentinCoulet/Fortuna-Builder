import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EquippedItem {
  src: string;
  alt: string;
}

interface EquippedItemsState {
  [tag: string]: EquippedItem | null;
}

const initialState: EquippedItemsState = {};

const equippedItemsSlice = createSlice({
  name: 'equippedItem',
  initialState,
  reducers: {
    equipItem: (state, action: PayloadAction<{ tag: string; item: EquippedItem }>) => {
      state[action.payload.tag] = action.payload.item;
    },
    unequipItem: (state, action: PayloadAction<{ tag: string }>) => {
      state[action.payload.tag] = null;
    },
  },
});

export const { equipItem, unequipItem } = equippedItemsSlice.actions;
export default equippedItemsSlice.reducer;
