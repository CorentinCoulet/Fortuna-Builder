import { configureStore } from '@reduxjs/toolkit';
import classInformationsReducer from './features/components/Builder/classInformationsSlice';
import imageReducer from './features/components/Builder/imageSlice';
import editableValuesReducer from './features/components/Builder/editableValuesSlice';
import spellsReducer from './features/components/Spells/spellsSlice';
import runesReducer from './features/components/Sublimations/runesSlice';
import aptitudeIntelReducer from './features/components/Aptitudes/aptitudeIntelSlice';
import aptitudeStrengthReducer from './features/components/Aptitudes/aptitudeStrengthSlice';
import aptitudeAgilityReducer from './features/components/Aptitudes/aptitudeAgilitySlice';
import aptitudeChanceReducer from './features/components/Aptitudes/aptitudeChanceSlice';
import aptitudeMajorReducer from './features/components/Aptitudes/aptitudeMajorSlice'; 
import sublimationsReducer from './features/components/Sublimations/sublimationsSlice';

export const store = configureStore({
  reducer: {
    editableValues: editableValuesReducer,
    classInformations: classInformationsReducer,
    image: imageReducer,
    spells: spellsReducer,
    runes: runesReducer,
    intel: aptitudeIntelReducer,
    strength: aptitudeStrengthReducer,
    agility: aptitudeAgilityReducer,
    chance: aptitudeChanceReducer,
    major: aptitudeMajorReducer,
    sublimations: sublimationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
