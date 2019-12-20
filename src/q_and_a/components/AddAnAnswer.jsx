import React,{useEffect, useState} from 'react'
import QAModal from './Modal';

const buttonStyle={
  border: 'none',
  textDecoration: 'underline'
}

const AddAnAnswer = (props) => {
  const [click,setClick] = useState(false);
  return (
    <span>
      <button 
        onClick={(e)=>setClick(true)}
        style={buttonStyle}
      >
        ADD AN ANSWER
      </button>
      {
        click ?
          <QAModal
            name='answer'
            setClick={setClick}
            questionId={props.questionId}
            setQuestionList={props.setQuestionList}
            setFilter={props.setFilter}
          />:null
     }
    </span>
  )
}

export default AddAnAnswer;
