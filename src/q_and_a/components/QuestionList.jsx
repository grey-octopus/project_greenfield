import React, { useEffect, useState } from "react";
import Question from "./Question";
//import Search from "./Search";
import { useParams } from "react-router-dom";
//import MoreAnsweredQuestions from "./MoreAnsweredQuestions"
import AddAQuestion from "./AddAQuestion";
import axios from "axios";

const QuestionList = props => {
  console.log("props:",props)
  //const initialList = props.fetchQuestionList(prodId);
  const { prodId } = useParams();
  const [count, setCount] = useState(4);
  const [questionList, setQuestionList] = useState([]);
  let filtered;
  useEffect(() => {
    axios.get(`http://3.134.102.30/qa/${prodId}`).then(
            (data) => {
                return setQuestionList(data.data.results)
            }
        )
  }, []);

  
  if (questionList && questionList.length !== 0) {
    const total = questionList.length;
    console.log(total)
    return (
      <div>
        <div id="searchBar">
          <input 
          type="text"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          onChange={(e)=>{
            let term = e.target.value.toLowerCase();
            if(term.length >= 3){
              filtered = questionList.filter(
                (q) => {
                  console.log("term",term)
                  return q.question_body.toLowerCase().includes(term)
                })
              setQuestionList(filtered);
            } else {
                axios.get(`http://3.134.102.30/qa/${prodId}`).then(
                    (data) => {
                    return setQuestionList(data.data.results)
                })
                
            }
          }}
          />
        </div>
        <div>
          {questionList
            .map((q, i) => {
              return (
                <Question key={q.question_id} question={questionList[i]} />
              );
            })
            .slice(0, count)}
          {total > count ? (
            <button onClick={() => setCount(count + 2)}>
              MORE ANSWERED QUESTIONS
            </button>
          ) : null}
          <AddAQuestion />
        </div>
      </div>
    );
  } else {
    return <div>AddAQuestion</div>;
  }
};

export default QuestionList;
