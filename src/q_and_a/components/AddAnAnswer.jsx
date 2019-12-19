import React,{useEffect, useState} from 'react'
import QAModal from './Modal';

const AddAnAnswer = (props) => {
  const [click,setClick] = useState(false);
  return (
    <div>
      <button onClick={(e)=>setClick(true)}>ADD AN ANSWER</button>
      {
        click ?
          <QAModal
            name='answer'
            questionId={props.questionId}
            setQuestionList={props.setQuestionList}
            setFilter={props.setFilter}
          />:null
     }
    </div>
  )
}

export default AddAnAnswer;
