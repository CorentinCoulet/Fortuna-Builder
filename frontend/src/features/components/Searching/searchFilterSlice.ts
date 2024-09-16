import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
    itemName: string;
    levelRange: [number, number];
    selectedRarities: string[];
    selectedEquipmentTags: string[];
    searchTriggered: boolean;
}

const initialState: FiltersState = {
    itemName: '',
    levelRange: [1, 230],
    selectedRarities: [],
    selectedEquipmentTags: [],
    searchTriggered: false,
};

const searchFiltersSlice = createSlice({
    name: 'searchFilters',
    initialState,
    reducers: {
        setItemName: (state, action: PayloadAction<string>) => {
            state.itemName = action.payload;
        },
        setLevelRange: (state, action: PayloadAction<[number, number]>) => {
            state.levelRange = action.payload;
        },
        setSelectedRarities: (state, action: PayloadAction<string[]>) => {
            state.selectedRarities = action.payload;
        },
        setSelectedEquipmentTags: (state, action: PayloadAction<string[]>) => {
            state.selectedEquipmentTags = action.payload;
        },
        setAdditionalTag: (state, action: PayloadAction<string>) => {
            state.selectedEquipmentTags = [action.payload];
        },
        setSearchTriggered: (state, action: PayloadAction<boolean>) => {
            state.searchTriggered = action.payload;
        },
        clearFilters: (state) => {
            state.itemName = '';
            state.levelRange = [1, 230];
            state.selectedRarities = [];
            state.selectedEquipmentTags = [];
        },
    },
});

export const {
    setItemName,
    setLevelRange,
    setSelectedRarities,
    setSelectedEquipmentTags,
    setAdditionalTag,
    setSearchTriggered,
    clearFilters,
} = searchFiltersSlice.actions;

export default searchFiltersSlice.reducer;
