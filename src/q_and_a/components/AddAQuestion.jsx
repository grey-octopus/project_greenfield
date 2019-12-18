import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QAModal from './Modal';

const AddAQuestion = (props) => {
  const [click,setClick] = useState(false);
  return (
    <div>
      <button onClick={(e)=>{setClick(true)}}>ADD A QUESTION</button>
      {
        click ?
          <QAModal
            name='question' setQuestionList={props.setQuestionList}
          />:null
      }
      
    </div>
  )
}

export default AddAQuestion;
