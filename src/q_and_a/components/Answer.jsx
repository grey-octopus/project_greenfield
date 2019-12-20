import React,{useState} from 'react';
import axios from 'axios';
import Images from './Images'
var moment = require('moment');

const answerStyle={
  fontSize: '15px',
  paddingTop: '40px',
  marginBottom: '20px',
  color: '#525252'
}
const answerAStyle={
  fontWeight: 'bold',
  fontSize: '16px',
  color: '#525252',
  marginRight:'10px'
}
const subStyle={
  fontSize: '14px',
  color: '#525252',
  marginLeft:'26px'
}

const spaceStyle={
  marginRight:'10px',
  marginLeft:'10px'
}
const underlineStyle={
  textDecoration: 'underline',
}
const reportedStyle={
  borderLeft:'6px solid',
  borderColor: '#2196F3',
  backgroundColor:'#ddffff'
}

const Answer = (props) => {
  const [helpfulness,setHelpfulness] = useState(props.answer.helpfulness);
  const [clicked,setClicked] = useState(false);
  const [reported,setReported] = useState(false);
  const date = moment(props.answer.date).format("MMM Do YY");
  const handleClick = (e)=>{
    if(!clicked){
      return axios.put(`http://3.134.102.30/qa/answer/${props.answer.id}/helpful`)
                  .then(
                    ()=>{
                      return axios.get(`http://3.134.102.30/qa/${props.questionId}/answers`)
                    }
                  ).then(
                    (data) => {
                      var results=data.data.results;
                      for(var item of results) {
                        if(item.answer_id === props.answer.id){
                          setHelpfulness(item.helpfulness)
                        }
                      }
                    }
                  )
    }

  }

  const handleReport = ()=> {
    if(!reported){
      return axios.put(`http://3.134.102.30/qa/answer/${props.answer.id}/report`)
                  .then(
                    ()=>{
                      return axios.get(`http://3.134.102.30/qa/${props.questionId}/answers`)
                    }
                  ).then(
                    () => {
                      setReported(true)
                    }
                  )
    }
  }
  return (
    <div style={{marginBottom: '15px'}}>
      {reported? <div style={reportedStyle}>It's been reported!</div>:null}
      <span style={answerAStyle}>A:</span> 
      <span style={answerStyle}>{props.answer.body}</span><br/>
      {props.answer.photos.length > 0 ?
        <Images photos={props.answer.photos}/>:
        null
      }
      <span style={subStyle}><i>by</i> {props.answer.answerer_name}, {date} 
      <span style={spaceStyle}>|</span>
      Helpful?
      <span 
          id={props.answer.id} 
          onClick={(e)=>{
             handleClick(e)
             setClicked(true);
          }}
          style={underlineStyle}
      >
        Yes
      </span>
      ({helpfulness||"#"})
      <span style={spaceStyle}>|</span>
      <span 
        onClick={(e)=>{
          handleReport(e)
        }}
        style={underlineStyle}>Report</span>
      </span>
      
    </div>
  )
}

export default Answer
