import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Sublimation {
    src?: string;
    alt?: string;
    label?: string;
    type?: 'epic' | 'relic' | 'rare' | 'mythique' | 'legendaire' | null;
    descriptif? : string;
    bonus?: Record<string, number> | null;
    order?: { src: string; alt: string }[],
    max?: number;
}

interface SublimationsState {
    selectedEpicSublimation: Sublimation | null;
    selectedRelicSublimation: Sublimation | null;
    selectedNormalSublimation: Sublimation | null; 
    equippedEpicSublimation: Sublimation | null;
    equippedRelicSublimation: Sublimation | null;
    equippedNormalSublimation: Sublimation | null;
}

const initialState: SublimationsState = {
    selectedEpicSublimation: null,
    selectedRelicSublimation: null,
    selectedNormalSublimation: null,
    equippedEpicSublimation: null,
    equippedRelicSublimation: null,
    equippedNormalSublimation: null,
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
        setSelectedNormalSublimation: (state, action: PayloadAction<Sublimation | null>) => {
            state.selectedNormalSublimation = action.payload;
        },
        setEquippedEpicSublimation: (state, action: PayloadAction<Sublimation | null>) => {
            state.equippedEpicSublimation = action.payload;
        },
        setEquippedRelicSublimation: (state, action: PayloadAction<Sublimation | null>) => {
            state.equippedRelicSublimation = action.payload;
        },
        setEquippedNormalSublimation: (state, action: PayloadAction<Sublimation | null>) => {
            state.equippedNormalSublimation = action.payload;
        },
    },
});

export const {
    setSelectedEpicSublimation,
    setSelectedRelicSublimation,
    setSelectedNormalSublimation,
    setEquippedEpicSublimation,
    setEquippedRelicSublimation,
    setEquippedNormalSublimation,
} = sublimationsSlice.actions;

export default sublimationsSlice.reducer;
