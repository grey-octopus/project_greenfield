import React, {useEffect} from "react";
import Question from "./Question";

const QuestionList = ({fetchQuestionList, questionList, prodId}) => {
    console.log("props:",prodId)
    useEffect(()=>{
        fetchQuestionList(prodId)
    },[]);
    if(questionList && questionList.length === 0) {
        return (
            <div>
                {
                    questionList.map(
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