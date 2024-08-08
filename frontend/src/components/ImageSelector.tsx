import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { RootState, AppDispatch } from "../store";
import { setSelectedImage, openModal, closeModal } from "../features/components/imageSlice";
import '../styles/components/ImageSelector.scss';
import Cra from "../assets/class/cra.jpg";

interface ImageSelectorProps {
  images: string[];
}

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
          src={selectedImage || Cra}
          alt="Selected"
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
