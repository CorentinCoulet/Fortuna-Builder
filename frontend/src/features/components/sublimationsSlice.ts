import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Sublimation {
    src: string;
    alt: string;
    label?: string;
    type?: 'epic' | 'relic';
    descriptif? : string;
    bonus?: Record<string, number> | null;
}

interface SublimationsState {
    selectedEpicSublimation: Sublimation | null;
    selectedRelicSublimation: Sublimation | null;
    equippedEpicSublimation: Sublimation | null;
    equippedRelicSublimation: Sublimation | null;
}

const initialState: SublimationsState = {
    selectedEpicSublimation: null,
    selectedRelicSublimation: null,
    equippedEpicSublimation: null,
    equippedRelicSublimation: null,
};

const sublimationsSlice = createSlice({
    name: 'sublimations',
    initialState,
    reducers: {
        setSelectedEpicSublimation: (state, action: PayloadAction<Sublimation | null>) => {
            state.selectedEpicSublimation = action.payload;
        },
        setSelectedRelicSublimation: (state, action: PayloadAction<Sublimation | null>) => {
            state.selectedRelicSublimation = action.payload;
        },
        setEquippedEpicSublimation: (state, action: PayloadAction<Sublimation | null>) => {
            state.equippedEpicSublimation = action.payload;
        },
        setEquippedRelicSublimation: (state, action: PayloadAction<Sublimation | null>) => {
            state.equippedRelicSublimation = action.payload;
        },
    },
});

export const {
    setSelectedEpicSublimation,
    setSelectedRelicSublimation,
    setEquippedEpicSublimation,
    setEquippedRelicSublimation,
} = sublimationsSlice.actions;

export default sublimationsSlice.reducer;
