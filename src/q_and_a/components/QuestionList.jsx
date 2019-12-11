import React from "react";
import { connect} from "react-redux";
import Question from "./Question";

const QuestionList = (props) => {
    if(props.questionList.length === 0) {
        return (
            <div>
                <AddAQuestion />
            </div>
        )
    } else {
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
    }
    
}

export default QuestionList