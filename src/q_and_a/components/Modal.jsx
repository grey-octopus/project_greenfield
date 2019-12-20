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
const buttonStyle = {
  width: '30%',
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid',
  padding: '6px 16px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '14px',
  margin: '12px 0px',
  cursor: 'pointer',
  fontWeight: 'bold'
}
const inputStyle = {
  width: '70%',
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid',
  padding: '6px 16px',
  margin: '12px 0px',
  borderColor: 'grey'
}

const QAModal = (props) =>{
  const { prodId } = useParams();
  const[addQA,setQA] = useState({
    content: '',
    nickname: '',
    email: '',
    photos: []
  })

  const [modalIsOpen,toggleModal] = useState(true);
  // const openModal = (e) => {
  //   toggleModal(true);
  // }

  const closeModal = (e) => {
    toggleModal(false);
    props.setClick(false);
  }

  const handleInputChange = (e) =>{
    const target = e.target
    //console.log({target})
    //console.log(e.target.name)
    setQA({
      ...addQA,
      [e.target.name]: target.value
    })
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal(e);
    if(props.name === 'question'){
      axios.post(`http://3.134.102.30/qa/${prodId}`,{
            body: addQA.content,
            name: addQA.nickname,
            email: addQA.email
          })
         .then(
           ()=>{
            //console.log('sent')
            //toggleModal(true)
            return axios.get(`http://3.134.102.30/qa/${prodId}?count=20`)
           }
         )
         .then(
           (data)=> {
             //console.log(data)
             props.setFilter(data.data.results);
             props.setQuestionList(data.data.results);
          
           }
         )
         .catch(
           (err) => {
            console.log(err)
           }
         )
    } else{
      console.log('questionId',props.questionId)
      axios.post(`http://3.134.102.30/qa/${props.questionId}/answers`,{
        body: addQA.content,
        name: addQA.nickname,
        email: addQA.email,
        photos: addQA.photos
      })
     .then(
       ()=>{
        return axios.get(`http://3.134.102.30/qa/${prodId}?count=200`)
       }
     )
     .then(
       (data)=> {
         props.setFilter(data.data.results);
         props.setQuestionList(data.data.results);
      
       }
     )
     .catch(
       (err) => {
        console.log(err)
       }
     )
    }
    
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add QA Modal">
        <form onSubmit={(e)=>{handleSubmit(e)}}>
          {props.name === 'question'?
            <div>Your Question:</div>:
            <div>Your Answer:</div>
            }
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
            style={inputStyle}
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
            style={inputStyle}
            required
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          {props.name === 'answer'?
            <div>
              <div>Upload Your Photos:</div>
              <input type="file" name="photos"></input>
            </div>:
            null}
          <br/>
          <input
            name="submit"
            type="submit"
            value="Submit"
            style={buttonStyle}
          />
        </form>
    </Modal>
  )
}

export default QAModal;