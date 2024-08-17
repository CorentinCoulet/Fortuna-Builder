import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AptitudeIntelState {
  points: number[];
  valueCount: number;
}

const initialState: AptitudeIntelState = {
  points: [0, 0, 0, 0, 0],
  valueCount: 0, 
};

const maxPoints = [Infinity, 10, 10, 5, 10];

const aptitudeIntelSlice = createSlice({
  name: 'intel',
  initialState,
  reducers: {
    setLevelPoints(state, action: PayloadAction<number>) {
      state.valueCount = action.payload;
      state.points = [0, 0, 0, 0, 0];
    },
    incrementPoint(state, action: PayloadAction<{ index: number; increment: number }>) {
      const { index, increment } = action.payload;
      if (state.valueCount >= increment) {
        state.points[index] = Math.min(state.points[index] + increment, maxPoints[index]);
        state.valueCount -= increment;
      }
    },
    decrementPoint(state, action: PayloadAction<{ index: number; decrement: number }>) {
      const { index, decrement } = action.payload;
      if (state.points[index] >= decrement) {
        state.points[index] -= decrement;
        state.valueCount += decrement;
      }
    },
    resetPoint(state, action: PayloadAction<number>) {
      const index = action.payload;
      state.valueCount += state.points[index];
      state.points[index] = 0;
    },
    setPointsFromStorage(state, action: PayloadAction<number[]>) {
      state.points = action.payload;
    },
  },
});

export const { setLevelPoints, incrementPoint, decrementPoint, resetPoint, setPointsFromStorage } = aptitudeIntelSlice.actions;

export default aptitudeIntelSlice.reducer;
