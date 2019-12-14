import React from 'react'
import AnswerList from './AnswerList'
import AddAnAnswer from './AddAnAnswer'

const Question = (props) => {
    //console.log('hello',props)
    return (
        <div id={props.question.question_id}>
            Q: {props.question.question_body}
            ---- Helpful?<span>Yes</span>({props.question.question_helpfulness||"#"})
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
