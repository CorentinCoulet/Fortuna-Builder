import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AptitudeMajorState {
  points: number[];
  valueCount: number;
}

const initialState: AptitudeMajorState = {
  points: [0, 0, 0, 0, 0, 0, 0],
  valueCount: 0,
};

const maxPoints = [1, 1, 1, 1, 1, 1, 1];

const aptitudeMajorSlice = createSlice({
  name: 'major',
  initialState,
  reducers: {
    setLevelPoints(state, action: PayloadAction<number>) {
      state.valueCount = action.payload;
      state.points = [0, 0, 0, 0, 0, 0, 0];
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

export const { setLevelPoints, incrementPoint, decrementPoint, resetPoint, setPointsFromStorage } = aptitudeMajorSlice.actions;

export default aptitudeMajorSlice.reducer;
