import React from 'react'
import AnswerListContainer from '../containers/AnswerListContainer'
import AddAnAnswer from './AddAnAnswer'

const Question = (props) => {
    //console.log('hello',props)
    return (
        <div id={props.question.question_id}>
            Q: {props.question.question_body}
            ---- Helpful?<span>Yes</span>({props.question.question_helpfulness||"#"})
            | <AddAnAnswer />
            
            
            <AnswerListContainer questionId={props.question.question_id}/>
            <br/>
        </div>
    )
}

export default Question
