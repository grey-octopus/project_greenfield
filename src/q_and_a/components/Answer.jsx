import React,{useState} from 'react';
import axios from 'axios';
var moment = require('moment');

const answerStyle={
  fontSize: '16px',
  color: '#525252'
}
const answerAStyle={
  fontWeight: 'bold',
  fontSize: '16px',
  color: '#525252'
}

const Answer = (props) => {
  const [helpfulness,setHelpfulness] = useState(props.answer.helpfulness);
  const [clicked,setClicked] = useState(false);
  const date = moment(props.answer.date).format("MMM Do YY");
  const handleClick = (e)=>{
    if(!clicked){
      if(helpfulness === "#") {
        setHelpfulness(1);
      } else {
        setHelpfulness(helpfulness + 1);
      }
      return axios.put(`http://3.134.102.30/qa/answer/${props.answer.id}/helpful`,{"helpfulness":helpfulness})
    }

  }
  return (
    <div>
      <span style={answerAStyle}>A:</span> 
      <span style={answerStyle}>{props.answer.body}</span><br/>
      by {props.answer.answerer_name}, {date} 
      | Helpful?<span id={props.answer.id} onClick={(e)=>{
                                             handleClick(e)
                                             setClicked(true);
                                             }}>Yes</span>({helpfulness||"#"})
      | <span>Report</span>
    </div>
  )
}

export default Answer
