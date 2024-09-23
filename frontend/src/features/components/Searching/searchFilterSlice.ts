import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
    itemName: string;
    levelRange: [number, number];
    selectedRarities: string[];
    selectedEquipmentTags: string[];
    searchTriggered: boolean;
    instantSearch: boolean;
}

const initialState: FiltersState = {
    itemName: '',
    levelRange: [1, 230],
    selectedRarities: [],
    selectedEquipmentTags: [],
    searchTriggered: false,
    instantSearch: false,
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
        replaceAllTagsWithClicked: (state, action: PayloadAction<string>) => {
            state.selectedEquipmentTags = [action.payload];
          },
        setSearchTriggered: (state, action: PayloadAction<boolean>) => {
            state.searchTriggered = action.payload;
        },
        setInstantSearch: (state, action: PayloadAction<boolean>) => {
            state.instantSearch = action.payload;
        },
        clearFilters: (state) => {
            state.itemName = '';
            state.levelRange = [1, 230];
            state.selectedRarities = [];
            state.selectedEquipmentTags = [];
            state.searchTriggered = false;
            state.instantSearch = false;
        },
    },
});

export const {
    setItemName,
    setLevelRange,
    setSelectedRarities,
    setSelectedEquipmentTags,
    setAdditionalTag,
    replaceAllTagsWithClicked,
    setSearchTriggered,
    setInstantSearch,
    clearFilters,
} = searchFiltersSlice.actions;

export default searchFiltersSlice.reducer;
