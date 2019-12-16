import React, { useEffect, useState } from "react";
import Question from "./Question"

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [questionList, setQuestionList] = useState(props.questionList);
  useEffect(()=>{
    
  })
  let filtered;
  return (
    <div>
      <input 
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        onChange={(e)=>{
          let term = e.target.value.toLowerCase();
          setSearchTerm(term);
          if(term.length >= 3){
            filtered = props.questionList.filter(
              (q) => {
                console.log("term",term)
                return q.question_body.toLowerCase().includes(term)
              })
            console.log("filtered",filtered)
            setQuestionList(filtered);
            questionList.map((q,i) =>{
              return (
                <Question key={q.question_id} question={props.questionList[i]} />
              );
            })
          }
        }}
      />
    </div>
  )
}

export default Search
