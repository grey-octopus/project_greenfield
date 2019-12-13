import React, {useEffect} from "react";
import Answer from "./Answer";
import { useParams } from "react-router-dom";


const AnswerList = (props) => {
  console.log("answer props:",props)
  useEffect(()=>{
      props.fetchAnswerList(props.questionId)
  },[]);
  let limit = 2;
  if(props.answerList && props.answerList.length !== 0) {
      //console.log("hi")
      const total = props.answerList.length;
      return (
          <div>
              {
                  props.answerList.slice(0,limit).map(
                      (a,i) => {
                          return <Answer key={a.answer_id} answer={props.answerList[i]}/>
                      }
                  )
              }
              {(total > limit) ? (<button>MoreAnswers</button>):null}
              
              
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
