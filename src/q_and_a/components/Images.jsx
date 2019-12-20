import React,{useState} from 'react';
import Modal from 'react-modal';

const thumbnailStyle = {
  border: '1px solid #ddd',
  height: '150px',
  marginLeft:'26px'
}

const h3Style={
  textAlign:'center',
  fontWeight:'bold'
}
const modalPhotoStyle = {
  height: '600px'
}
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

const Images = (props) => {
  const [modalIsOpen,toggleModal] = useState(false);
  const [id,setId] = useState(-1);
  const closeModal = ()=>{
    toggleModal(false);
    setId(-1);
  }
  return (
    <div>
      {props.photos.map((p,i)=>{
        return (
          <img 
            id={i}
            src={p} 
            alt="any" 
            style={thumbnailStyle}
            onClick={
              (e)=>{
                toggleModal(true)
                setId(i)
              }
            }
          />

          )
      })}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Photo Modal"
      >
        <img src={props.photos[id]} alt='any' style={modalPhotoStyle}/>
        <h3 style={h3Style}>Pic - {id + 1}</h3>
      </Modal>
    </div>
  )
}

export default Images
