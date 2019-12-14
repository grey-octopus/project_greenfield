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
  console.log('modal props', props.characteristics);
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

  function mapChars() {
    let obj = props.characteristics;
    let chars = Object.keys(obj).map(function(key) {
      return [Number(key), obj[key]];
    });

    return chars;
  }

  // data: {
  //   body:
  //     "Now is the winter of our discontent Made glorious summer by this sun of York; And all the clouds that lour'd upon our house In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths; Our bruised arms hung up for monuments;",
  //   rating: 4,
  //   name: 'jh',
  //   summary: 'Now is the winter of our discontent',
  //   recommend: true,
  //   email: 'jhaddock385@gmail.com',
  //   characteristics: { '62': 2, '63': 2, '64': 2, '65': 2 }
  // }

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
        <div>{mapChars()}</div>
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
