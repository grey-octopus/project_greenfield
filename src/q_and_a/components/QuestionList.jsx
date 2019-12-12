import React, {useEffect} from "react";
import Question from "./Question";

const QuestionList = (props) => {
    console.log("props:",props)
    useEffect(()=>{
        props.fetchQuestionList(props.prodId)
    })
    if(props.questionList && props.questionList.length === 0) {
        return (
            <div>
                {
                    props.questionList.map(
                        (q) => {
                            return <Question key={q.question_id}/>
                        }
                    )
                }
                <MoreAnsweredQuestions />
                <AddAQuestion />
            </div>
        )
    } else {
        return (
            <div>
                AddAQuestion
            </div>
        )
    }
    
}

export default QuestionList