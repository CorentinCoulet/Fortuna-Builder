import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { RootState, AppDispatch } from "../store";
import { setSelectedImage, openModal, closeModal } from "../features/components/imageSlice";
import '../styles/components/ImageSelector.scss';
import { Images } from "../asset";

interface ImageSelectorProps {
  images: string[];
}

const getFileName = (path: string) => {
  const fileName = path.split('/').pop()?.split('.')[0] || '';
  return fileName.charAt(0).toUpperCase() + fileName.slice(1);
};

const ImageSelector: React.FC<ImageSelectorProps> = ({ images }) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedImage = useSelector(
    (state: RootState) => state.image.selectedImage
  );
  const modalIsOpen = useSelector(
    (state: RootState) => state.image.modalIsOpen
  );

  const handleImageClick = () => {
    dispatch(openModal());
  };

  const handleImageSelect = (image: string) => {
    dispatch(setSelectedImage(image));
    dispatch(closeModal());
  };

  return (
    <div>
      <section className="sect1" onClick={handleImageClick}>
        <img
          loading="lazy"
          src={selectedImage || Images[1]}
          alt={getFileName(selectedImage || Images[1])}
          className="imgClasses"
        />
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => dispatch(closeModal())}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <div className="image-gallery">
            {images.map((image, index) => (
              <img
                loading="lazy"
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                onClick={() => handleImageSelect(image)}
                className="thumbnail"
              />
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ImageSelector;
