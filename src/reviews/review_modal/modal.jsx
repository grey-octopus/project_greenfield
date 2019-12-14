import Modal from 'react-modal';
import publishReview from '../apiHelpers.js';
import React, { useEffect, useState } from 'react';
import StarSelector from './StarSelector.jsx';
import Characteristics from './Characteristics.jsx';

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
  const [numOfStarsFilled, setNumOfStarsFilled] = useState(0);
  const [bodyForm, setBodyForm] = useState({ body: '' });
  //this is happening before props are provided
  // let obj = props.characteristics;
  // // let chars = Object.keys(obj).map(function(key) {
  // //   return [Number(key), obj[key]];
  // // });

  // let chars = Object.keys(obj);

  // console.log(chars);

  // console.log('modal props', props.characteristics);
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

  function handleBodyFormChange(event) {
    event.persist();
    setBodyForm(event.target.value);
  }

  function handlePublish(e) {
    event.preventDefault();
    console.log('handle publish');
    console.log(e);
    //publishReview();
  }

  // const handleInputChange = (event) => {
  //   event.persist();
  //   setInputs((inputs) => ({
  //     ...inputs,
  //     [event.target.name]: event.target.value
  //   }));
  // };

  //0 star = 0
  //1 star = 20
  //2 star = 40
  //3 star = 55
  //4 star = 75
  //5 star = 100

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
        <form>
          <div>
            <div>
              <StarSelector
                setNumOfStarsFilled={setNumOfStarsFilled}
                numOfStarsFilled={numOfStarsFilled}
              />
            </div>
          </div>
          <div>Do you recommend this product?</div>
          <input type="radio" name="recommend" value="yes"></input>
          <input type="radio" name="recommend" value="false"></input>
          <div>
            <Characteristics characteristics={props.characteristics} />:
          </div>

          <div>Summary:</div>
          <input />

          <div>Review Body:</div>

          <textarea
            rows="4"
            cols="50"
            value={bodyForm.body}
            onChange={(e) => {
              handleBodyFormChange(e);
            }}
          ></textarea>

          {/* <button>Submit image</button> */}

          <div>Nickname:</div>
          <input />

          <div>Email:</div>
          <input />

          <button
            onClick={(e) => {
              handlePublish(e);
            }}
          >
            Submit!
          </button>

          <button onClick={closeModal}>close</button>
        </form>
      </Modal>
    </div>
  );
};

export default ReviewModal;
