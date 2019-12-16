import Modal from 'react-modal';
import publishReview from '../apiHelpers.js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  const [inputForms, setInputForms] = useState({ body: '' });
  const [userCharRatings, setCharRatings] = useState({});
  const { prodId } = useParams();

  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleInputChange(event) {
    event.persist();
    setInputForms({ ...inputForms, [event.target.name]: event.target.value });
    console.log(inputForms);
  }

  function handlePublish(info) {
    event.preventDefault();
    publishReview({
      prodId: prodId,
      forms: info,
      stars: numOfStarsFilled,
      chars: userCharRatings
    });
  }

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
          <input
            type="radio"
            name="recommend"
            value="true"
            onChange={handleInputChange}
          ></input>
          <input
            type="radio"
            name="recommend"
            value="false"
            onChange={handleInputChange}
          ></input>
          <div>
            <Characteristics
              characteristics={props.characteristics}
              setCharRatings={setCharRatings}
              userCharRatings={userCharRatings}
            />
          </div>

          <div>Summary:</div>
          <textarea
            name="summary"
            rows="4"
            cols="50"
            value={inputForms.summary}
            onChange={(e) => {
              handleInputChange(e);
            }}
          ></textarea>

          <div>Review Body:</div>

          <textarea
            name="body"
            rows="4"
            cols="50"
            value={inputForms.body}
            onChange={(e) => {
              handleInputChange(e);
            }}
          ></textarea>

          {/* <button>Submit image</button> */}

          <div>Nickname:</div>
          <input
            name="nickname"
            value={inputForms.nickname}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />

          <div>Email:</div>
          <input
            name="email"
            value={inputForms.email}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />

          <button
            onClick={(e) => {
              handlePublish(inputForms);
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
