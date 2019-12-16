import React,{useState} from 'react';
import axios from 'axios';
var moment = require('moment');

const Answer = (props) => {
  const [helpfulness,setHelpfulness] = useState(props.answer.helpfulness);
  const date = moment(props.answer.date).format("MMM Do YY");
  const handleClick = (e)=>{
    const target = e.target
    console.log({target})
    return axios.put(`http://3.134.102.30/qa/answer/${props.answer.id}/helpful`,{"helpfulness":props.helpfulness+1})
         .then(
           ()=> {
             console.log('qid',props.questionId)
             setHelpfulness(helpfulness + 1);
             return axios.get(`http://3.134.102.30/qa/${props.questionId}/answers`)
           })
  }
  return (
    <div>
      A: {props.answer.body}<br/>
      by {props.answer.answerer_name}, {date} 
      | Helpful?<span id={props.answer.id}onClick={(e)=>handleClick(e)}>Yes</span>({helpfulness||"#"})
      | <span>Report</span>
    </div>
  )
}

export default Answer
