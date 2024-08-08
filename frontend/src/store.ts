import { configureStore } from '@reduxjs/toolkit';
import classInformationsReducer from './features/components/classInformationsSlice';
import imageReducer from './features/components/imageSlice';
import editableValuesReducer from './features/components/editableValuesSlice';

export const store = configureStore({
  reducer: {
    editableValues: editableValuesReducer,
    classInformations: classInformationsReducer,
    image: imageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
