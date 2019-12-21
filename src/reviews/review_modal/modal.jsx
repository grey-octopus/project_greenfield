import Modal from 'react-modal';
import { publishReview } from '../apiHelpers.js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarSelector from './StarSelector.jsx';
import Characteristics from './Characteristics.jsx';

const customStyles = {
  content: {
    top: '44%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const submittedStyles = {
  content: {
    top: '44%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const ReviewModal = (props) => {
  const [minCharLimit, setMinCharLimit] = useState({
    text: 'Minimum required characters left: [50]'
  });
  const [numOfStarsFilled, setNumOfStarsFilled] = useState(0);
  const [inputForms, setInputForms] = useState({
    body: '',
    summary: '',
    nickname: '',
    email: ''
  });

  const [userCharRatings, setCharRatings] = useState({});
  const { prodId } = useParams();

  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#525252';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleInputChange(event) {
    event.persist();
    setInputForms({ ...inputForms, [event.target.name]: event.target.value });

    if (inputForms.body.length >= 50) {
      let charNumText = 'Minimum reached';
      setMinCharLimit({ text: charNumText });
    } else {
      let charNumText = `Minimum required characters left: ${50 -
        inputForms.body.length}`;
      setMinCharLimit({ text: charNumText });
    }
  }

  function handlePublish(info) {
    event.preventDefault();

    let verify = true;

    if (info.body.length < 50) {
      verify = false;
      // console.log(info.body.length);
      // console.log('body absent');
    }
    if (info.summary.length === 0) {
      // verify = false;
      // console.log('summary absent');
    }
    if (info.nickname.length === 0) {
      // verify = false;
      // console.log('name absent');
    }
    if (info.email.length === 0) {
      // verify = false;
      // console.log('email absent');
    }

    if (verify === true) {
      publishReview({
        prodId: prodId,
        forms: info,
        stars: numOfStarsFilled,
        chars: userCharRatings
      });
      closeModal();
    } else {
    }
  }

  //0 star = 0
  //1 star = 20
  //2 star = 40
  //3 star = 55
  //4 star = 75
  //5 star = 100

  return (
    <div>
      <button id="review-submit-button" onClick={openModal}>
        ADD A REVIEW &nbsp; &nbsp; +
      </button>
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
          <label for="recommend">Yes</label>
          <input
            type="radio"
            name="recommend"
            value="true"
            onChange={handleInputChange}
          ></input>
          <label for="recommend">No</label>
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
          <div className="validation-note">{minCharLimit.text}</div>

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

          <div className="modal-button-block">
            <button
              className="modal-submit"
              onClick={(e) => {
                handlePublish(inputForms);
              }}
            >
              Submit!
            </button>

            <button className="modal-submit" onClick={closeModal}>
              close
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ReviewModal;
