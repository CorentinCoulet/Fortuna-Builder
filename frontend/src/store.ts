import { configureStore } from '@reduxjs/toolkit';
import classInformationsReducer from './features/components/classInformationsSlice';
import imageReducer from './features/components/imageSlice';
import editableValuesReducer from './features/components/editableValuesSlice';
import spellsReducer from './features/components/spellsSlice';
import aptitudeIntelReducer from './features/components/aptitudeIntelSlice';
import aptitudeStrengthReducer from './features/components/aptitudeStrengthSlice';
import aptitudeAgilityReducer from './features/components/aptitudeAgilitySlice';
import aptitudeChanceReducer from './features/components/aptitudeChanceSlice';
import aptitudeMajorReducer from './features/components/aptitudeMajorSlice';

export const store = configureStore({
  reducer: {
    editableValues: editableValuesReducer,
    classInformations: classInformationsReducer,
    image: imageReducer,
    spells: spellsReducer,
    intel: aptitudeIntelReducer,
    strength: aptitudeStrengthReducer,
    agility: aptitudeAgilityReducer,
    chance: aptitudeChanceReducer,
    major: aptitudeMajorReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
