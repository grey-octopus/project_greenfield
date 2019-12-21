import React, { useState } from 'react';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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

const QAModal = props => {
  const { prodId } = useParams();
  const [addQA, setQA] = useState({
    content: '',
    nickname: '',
    email: '',
    photos: []
  });

  const [modalIsOpen, toggleModal] = useState(true);

  const closeModal = e => {
    toggleModal(false);
    props.setClick(false);
  };

  const handleInputChange = e => {
    const target = e.target;
    setQA({
      ...addQA,
      [e.target.name]: target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    closeModal(e);
    if (props.name === 'question') {
      axios
        .post(`http://3.134.102.30/qa/${prodId}`, {
          body: addQA.content,
          name: addQA.nickname,
          email: addQA.email
        })
        .then(() => {
          return axios.get(`http://3.134.102.30/qa/${prodId}?count=20`);
        })
        .then(data => {
          props.setFilter(data.data.results);
          props.setQuestionList(data.data.results);
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      axios
        .post(`http://3.134.102.30/qa/${props.questionId}/answers`, {
          body: addQA.content,
          name: addQA.nickname,
          email: addQA.email,
          photos: addQA.photos
        })
        .then(() => {
          return axios.get(`http://3.134.102.30/qa/${prodId}?count=200`);
        })
        .then(data => {
          props.setFilter(data.data.results);
          props.setQuestionList(data.data.results);
        })
        .catch(err => {
          console.error(err);
        });
    }
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Add QA Modal'
    >
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        {props.name === 'question' ? (
          <div>Your Question:</div>
        ) : (
          <div>Your Answer:</div>
        )}
        <textarea
          name='content'
          rows='4'
          cols='50'
          size='1000'
          placeholder='About the [product name]'
          required
          onChange={e => {
            handleInputChange(e);
          }}
        />
        <div>Nickname:</div>
        <input
          name='nickname'
          type='text'
          size='60'
          placeholder='Example: jackson11!'
          className='modal-input'
          required
          onChange={e => {
            handleInputChange(e);
          }}
        />
        <div>Email:</div>
        <input
          name='email'
          type='email'
          size='60'
          placeholder='Example: jackson11@gmail.com'
          className='modal-input'
          required
          onChange={e => {
            handleInputChange(e);
          }}
        />
        {props.name === 'answer' ? (
          <div>
            <div>Upload Your Photos:</div>
            <input type='file' name='photos'></input>
          </div>
        ) : null}
        <br />
        <input
          name='submit'
          type='submit'
          value='Submit'
          className='modal-btn'
        />
      </form>
    </Modal>
  );
};

export default QAModal;
