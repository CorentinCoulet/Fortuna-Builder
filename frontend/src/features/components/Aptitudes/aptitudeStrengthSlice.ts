import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store';

interface AptitudeStrengthState {
  points: number[];
  valueCount: number;
}

const initialState: AptitudeStrengthState = {
  points: [0, 0, 0, 0],
  valueCount: 0,
};

const maxPoints = [Infinity, 40, 40, Infinity];

const aptitudeStrengthSlice = createSlice({
  name: 'strength',
  initialState,
  reducers: {
    setLevelPoints(state, action: PayloadAction<number>) {
      state.valueCount = action.payload;
      state.points = [0, 0, 0, 0];
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
    resetAllPoints(state) {
      state.points.forEach((point, index) => {
        state.valueCount += state.points[index];
        state.points[index] = 0;
      });
    },
    setPointsFromStorage(state, action: PayloadAction<number[]>) {
      state.points = action.payload;
    },
  },
});

export const { setLevelPoints, incrementPoint, decrementPoint, resetPoint, resetAllPoints, setPointsFromStorage } = aptitudeStrengthSlice.actions;

export const selectStrengthPoints = (state: RootState) => state.strength.points;

export default aptitudeStrengthSlice.reducer;
