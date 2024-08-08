export const SET_SELECTED_IMAGE = 'SET_SELECTED_IMAGE';

interface SetSelectedImageAction {
  type: typeof SET_SELECTED_IMAGE;
  payload: string;
}

export type ImageActionTypes = SetSelectedImageAction;

export const setSelectedImage = (image: string): ImageActionTypes => ({
  type: SET_SELECTED_IMAGE,
  payload: image,
});
