import React, {useEffect} from "react";
import Question from "./Question";
import { useParams } from "react-router-dom";

const QuestionList = (props) => {
    console.log("props:",props)
    const { prodId } = useParams();
    useEffect(()=>{
        props.fetchQuestionList(prodId)
    },[]);
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