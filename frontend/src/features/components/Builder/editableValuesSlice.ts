import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EditableValueState {
  values: Record<string, number>;
}

const initialState: EditableValueState = {
  values: {},
};

const editableValuesSlice = createSlice({
  name: 'editableValues',
  initialState,
  reducers: {
    setInitialValue(state, action: PayloadAction<{ label: string, value: number }>) {
      state.values[action.payload.label] = action.payload.value;
    },
    updateValue(state, action: PayloadAction<{ label: string, increment: number }>) {
      state.values[action.payload.label] += action.payload.increment;
    },
    resetValue(state, action: PayloadAction<{ label: string }>) {
      state.values[action.payload.label] = 0;
    },
    resetAllValues(state) {
      Object.keys(state.values).forEach((key) => {
        state.values[key] = 0;
      });
    },
  },
});

export const { setInitialValue, updateValue, resetValue, resetAllValues } = editableValuesSlice.actions;
export default editableValuesSlice.reducer;
