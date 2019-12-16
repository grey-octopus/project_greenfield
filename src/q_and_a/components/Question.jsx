import React,{useState} from 'react'
import AnswerList from './AnswerList'
import AddAnAnswer from './AddAnAnswer'
import axios from 'axios'

const Question = (props) => {
    //console.log('hello',props)
    const [helpfulness,setHelpfulness] = useState(props.question.question_helpfulness);
    const [clicked,setClicked] = useState(false);
    const handleClick = (e)=>{
        const target = e.target
        if(!clicked){
            if(helpfulness === "#") {
                setHelpfulness(1);
              } else {
                setHelpfulness(helpfulness + 1);
              }
              return axios.put(`http://3.134.102.30/qa/question/${props.question.question_id}/helpful`,{"helpfulness":helpfulness})
        }

      }
    return (
        <div id={props.question.question_id}>
            Q: {props.question.question_body}
            ---- Helpful?<span onClick={(e)=>{
                                handleClick(e);
                                setClicked(true);
                                }}>Yes</span>({helpfulness||"#"})
            | <AddAnAnswer />
            
            
            <AnswerList
                questionId={props.question.question_id}
                answerList={props.question.answers}
            />
            <br/>
        </div>
    )
}

export default Question
