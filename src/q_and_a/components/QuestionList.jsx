import React, {useEffect} from "react";
import Question from "./Question";
import { useParams } from "react-router-dom";
//import MoreAnsweredQuestions from "./MoreAnsweredQuestions"
import AddAQuestion from "./AddAQuestion";


const QuestionList = (props) => {
    console.log("props:",props)
    const { prodId } = useParams();
    useEffect(()=>{
        props.fetchQuestionList(prodId)
        props.handleCountChange(props.count)
    },[]);
    
    if(props.questionList && props.questionList.length !== 0) {
        //console.log("hi")
        const total = props.questionList.length;
        return (
            <div>
                {
                    props.questionList.map(
                        (q,i) => {
                            return <Question key={q.question_id} question={props.questionList[i]}/>
                        }
                    ).slice(0,props.count)
                }
        {(total >= props.count) ? (<button onClick={() => props.handleCountChange(props.count)}>MoreAnsweredQuestions</button>):null}
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