import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Sublimation {
    src: string;
    alt: string;
    label?: string;
    type?: 'epic' | 'relic';
    bonus?: Record<string, number> | null;
}

interface SublimationsState {
    selectedEpicSublimation: Sublimation | null;
    selectedRelicSublimation: Sublimation | null;
}

const initialState: SublimationsState = {
    selectedEpicSublimation: null,
    selectedRelicSublimation: null,
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
    },
});

export const {
    setSelectedEpicSublimation,
    setSelectedRelicSublimation,
} = sublimationsSlice.actions;

export default sublimationsSlice.reducer;
