import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImageState {
  selectedImage: string | null;
  modalIsOpen: boolean;
}

const initialState: ImageState = {
  selectedImage: null,
  modalIsOpen: false,
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setSelectedImage(state, action: PayloadAction<string>) {
      state.selectedImage = action.payload;
    },
    openModal(state) {
      state.modalIsOpen = true;
    },
    closeModal(state) {
      state.modalIsOpen = false;
    },
  },
});

export const { setSelectedImage, openModal, closeModal } = imageSlice.actions;

export default imageSlice.reducer;
