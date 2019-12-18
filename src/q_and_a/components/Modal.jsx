import React,{ useEffect, useState } from 'react';
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

const QAModal = (props) =>{
  const { prodId } = useParams();
  const[addQA,setQA] = useState({
    content: '',
    nickname: '',
    email: '',
    photos: ''
  })

  const [modalIsOpen,toggleModal] = useState(true);
  // const openModal = (e) => {
  //   toggleModal(true);
  // }
  const closeModal = (e) => {
    toggleModal(false);
  }

  const handleInputChange = (e) =>{
    const target = e.target
    console.log({target})
    console.log(e.target.name)
    setQA({
      ...addQA,
      [e.target.name]: target.value
    })
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://3.134.102.30/qa/${prodId}`,{
            body: addQA.content,
            name: addQA.nickname,
            email: addQA.email
          })
         .then(
           ()=>{
             axios.get(`http://3.134.102.30/qa/${prodId}`)
           }
         )
         .then(
           (data)=> {
             //setFilter(data.data.results);
             setQuestionList(data.data.results);
          
           }
         )
         .catch(
           (err) => {
            console.log(err)
           }
         )
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add QA Modal">
        <form onSubmit={(e)=>{handleSubmit(e)}}>
          <div>Your Question:</div>
          <textarea
            name="content"
            rows="4"
            cols="50"
            size="1000"
            placeholder="About the [product name]"
            required
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          <div>Nickname:</div>
          <input
            name="nickname"
            type="text"
            size="60"
            placeholder="Example: jackson11!"
            required
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          <div>Email:</div>
          <input
            name="email"
            type="email"
            size="60"
            placeholder="Example: jackson11@gmail.com"
            required
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          <br/>
          <input
            name="submit"
            type="submit"
            value="Submit"
          />
        </form>
    </Modal>
  )
}

export default QAModal;