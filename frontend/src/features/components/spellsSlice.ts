import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SpellsState {
    selectedClass: string;
}

const initialState: SpellsState = {
    selectedClass: 'Cra',
};

const spellsSlice = createSlice({
    name: 'spells',
    initialState,
    reducers: {
        setSelectedClass(state, action: PayloadAction<string>) {
            state.selectedClass = action.payload;
        },
    },
});

export const { setSelectedClass } = spellsSlice.actions;

export default spellsSlice.reducer;
