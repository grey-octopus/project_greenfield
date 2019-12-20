import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QAModal from './Modal';

const buttonStyle = {
  width: '250px',
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid',
  padding: '12px 24px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '14px',
  marginTop: '10px',
  marginRight: '18px',
  marginLeft: '15%',
  height: '46px',
  cursor: 'pointer',
  fontWeight: 'bold'
}

const AddAQuestion = (props) => {
  const [click,setClick] = useState(false);
  return (
    <div>
      <button 
        onClick={(e)=>{setClick(true)}}
        style={buttonStyle}
        >ADD A QUESTION +
      </button>
      {
        click ?
          <QAModal
            name='question'
            setClick={setClick} 
            // filteredList={props.filteredList}
            setQuestionList={props.setQuestionList}
            setFilter={props.setFilter}
          />:null
      }
      
    </div>
  )
}

export default AddAQuestion;
