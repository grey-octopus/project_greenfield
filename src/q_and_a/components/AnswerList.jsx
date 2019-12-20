import React, {useEffect,useState} from "react";
import Answer from "./Answer";
import { useParams } from "react-router-dom";
const buttonStyle={
  border: 'none',
  textDecoration: 'underline',
  fontWeight: 'bold',
  marginLeft: '20px',
  fontSize: '13px'
}

const AnswerList = (props) => {
  //const {count} = useParams();
  const [count,setCount] = useState(2);
  // useEffect(()=>{
  //     props.fetchAnswerList(props.questionId)
  // },[]);
  const answers = props.answerList;
  let answerList = [];
  for(var key in answers) {
    answerList.push(answers[key]);
  }
  //sort answerList by helpfulness
  answerList.sort((a,b)=>{
    return b.helpfulness - a.helpfulness
  })
  //seller first
  for(var i = 0; i < answerList.length; i ++) {
    
    if(answerList[i].answerer_name.toLowerCase() === 'seller'){
      var seller = answerList.splice(i,1);
      var temp = seller.concat(answerList);
      answerList = temp;
    }
  }


  if(props.answerList && answerList.length !== 0) {
    
    const total = answerList.length;
    //console.log("hi",total)
    return (
      <div>
        {
          answerList.map((a,i) => {
            return <Answer key={a.id} answer={a} questionId={props.questionId}/>
          }).slice(0,count)
        }
        {total > count ? (
          <button 
            onClick={() => setCount(count + 2)}
            style={buttonStyle}
          >
            LOAD MORE ANSWERS
          </button>
        ) : null} 
        </div>
      )
  } else {
      return (
        <div>
          
        </div>
      )
  }
  
}

export default AnswerList
