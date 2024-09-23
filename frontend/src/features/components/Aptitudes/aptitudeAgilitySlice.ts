import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store';

interface AptitudeAgilityState {
  points: number[];
  valueCount: number;
}

const initialState: AptitudeAgilityState = {
  points: [0, 0, 0, 0, 0],
  valueCount: 0,
};

const maxPoints = [Infinity, Infinity, 20, Infinity, 20];

const aptitudeAgilitySlice = createSlice({
  name: 'agility',
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

export const { setLevelPoints, incrementPoint, decrementPoint, resetPoint, resetAllPoints, setPointsFromStorage } = aptitudeAgilitySlice.actions;

export const selectAgilityPoints = (state: RootState) => state.agility.points;

export default aptitudeAgilitySlice.reducer;
