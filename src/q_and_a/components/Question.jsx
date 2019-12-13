import React from 'react'
import AnswerListContainer from '../containers/AnswerListContainer'

const Question = (props) => {
    //console.log('hello',props)
    return (
        <div id={props.question.question_id}>
            Q: {props.question.question_body}
            <AnswerListContainer questionId={props.question.question_id}/>
        </div>
    )
}

export default Question
