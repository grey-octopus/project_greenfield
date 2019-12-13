import React, { useEffect } from 'react';
import Modal from 'react-modal';
import publishReview from './apiHelpers.js';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const ReviewModal = (props) => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handlePublish() {
    publishReview();
  }

  return (
    <div>
      <button onClick={openModal}>Post Review</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          Write your review about this product
        </h2>
        <div>Rating *****</div>
        <div>Do you recommend this product?</div>
        <div>Characteristics:</div>
        <form>
          <div>Summary:</div>
          <input />
        </form>

        <form>
          <div>Review Body:</div>
          <input />
        </form>

        <button>Submit image</button>

        <form>
          <div>Nickname:</div>
          <input />
        </form>

        <form>
          <div>Email:</div>
          <input />

          <button>Submit!</button>

          <button onClick={closeModal}>close</button>
        </form>
      </Modal>
    </div>
  );
};

export default ReviewModal;
