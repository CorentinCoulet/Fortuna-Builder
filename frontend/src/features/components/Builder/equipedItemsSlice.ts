import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EquippedItem {
  src: string;
  alt: string;
}

interface EquippedItemsState {
  [tag: string]: EquippedItem | null;
  tempRingItem: EquippedItem | null;
}

const initialState: EquippedItemsState = {
  tempRingItem: null,
};

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
    setTempRingItem: (state, action: PayloadAction<EquippedItem>) => {
      state.tempRingItem = action.payload;
    },
    clearTempRingItem: (state) => {
      state.tempRingItem = null; 
    },
  },
});

export const { equipItem, unequipItem, setTempRingItem, clearTempRingItem } = equippedItemsSlice.actions;
export default equippedItemsSlice.reducer;
