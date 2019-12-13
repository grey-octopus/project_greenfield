import React, {useEffect,useState} from "react";
import Answer from "./Answer";
import { useParams } from "react-router-dom";


const AnswerList = (props) => {
  //console.log("answer props:",props)
  //const {count} = useParams();
  const [count,setCount] = useState(2);
  useEffect(()=>{
      props.fetchAnswerList(props.questionId)
  },[]);
  if(props.answerList && props.answerList.length !== 0) {
    //console.log("hi")
    const total = props.answerList.length;
    return (
      <div>
        {
          props.answerList.map(
            (a,i) => {
              return <Answer key={a.answer_id} answer={props.answerList[i]}/>
            }
          ).slice(0,count)
        } 
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
