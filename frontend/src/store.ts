import { configureStore } from '@reduxjs/toolkit';
import classInformationsReducer from './features/components/classInformationsSlice';
import imageReducer from './features/components/imageSlice';
import editableValuesReducer from './features/components/editableValuesSlice';
import spellsReducer from './features/components/spellsSlice';

export const store = configureStore({
  reducer: {
    editableValues: editableValuesReducer,
    classInformations: classInformationsReducer,
    image: imageReducer,
    spells: spellsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
