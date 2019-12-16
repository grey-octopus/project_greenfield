import React, {useEffect,useState} from "react";
import Answer from "./Answer";
import { useParams } from "react-router-dom";


const AnswerList = (props) => {
  console.log("answer props:",props)
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
          <button onClick={() => setCount(count + 2)}>
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
