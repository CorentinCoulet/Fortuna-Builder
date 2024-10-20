import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Sublimation {
    src?: string;
    alt?: string;
    label?: string;
    type?: 'epic' | 'relic' | 'rare' | 'mythique' | 'legendaire' | null;
    descriptif?: string;
    bonus?: Record<string, number> | null;
    order?: { src: string; alt: string }[],
    max?: number;
}

interface ApplyBonusPayload {
    bonus: Record<string, number>;
}

interface RemoveBonusPayload {
    bonus: Record<string, number>;
}
interface SublimationsState {
    selectedEpicSublimation: Sublimation | null;
    selectedRelicSublimation: Sublimation | null;
    selectedNormalSublimation: Sublimation | null;
    equippedEpicSublimation: Sublimation | null;
    equippedRelicSublimation: Sublimation | null;
    equippedNormalSublimation: (Sublimation | null)[];
}

const initialState: SublimationsState = {
    selectedEpicSublimation: null,
    selectedRelicSublimation: null,
    selectedNormalSublimation: null,
    equippedEpicSublimation: null,
    equippedRelicSublimation: null,
    equippedNormalSublimation: [],
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
        setEquippedNormalSublimation: (state, action: PayloadAction<{ index: number, sublimation: Sublimation | null }>) => {
            const { index, sublimation } = action.payload;
            state.equippedNormalSublimation[index] = sublimation;
          },
        clearSublimations: (state) => {
            state.selectedEpicSublimation = null;
            state.selectedRelicSublimation = null;
            state.selectedNormalSublimation = null;
            state.equippedEpicSublimation = null;
            state.equippedRelicSublimation = null;
            state.equippedNormalSublimation = [];
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
    clearSublimations,
} = sublimationsSlice.actions;

export default sublimationsSlice.reducer;
