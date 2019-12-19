import React, { useEffect, useState } from "react";
import Question from "./Question";
//import Search from "./Search";
import { useParams } from "react-router-dom";
//import MoreAnsweredQuestions from "./MoreAnsweredQuestions"
import AddAQuestion from "./AddAQuestion";
import axios from "axios";



const inputStyle ={
  width: '80%',
  padding: '12px 20px',
  margin: '12px 10px',
  display: 'inline-block',
  border: '1px solid #ccc',
  //borderRadius: '4px',
  boxSizing: 'border-box',
  fontSize: '14px',
  fontWeight: 'bold'
//   backgroundImage: `url('../../../dist/img/searchicon.png')`,
//   backgroundPosition: '10px 10px', 
//   backgroundRepeat: 'no-repeat'
      
}
const buttonStyle = {
  width: '30%',
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid',
  padding: '12px 24px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '14px',
  margin: '18px 2px',
  cursor: 'pointer',
  fontWeight: 'bold'
}



const QuestionList = props => {
  //console.log("props:",props)
  //const initialList = props.fetchQuestionList(prodId);
  const { prodId } = useParams();
  const [count, setCount] = useState(4);
  const [searchTerm,setSearchTerm] = useState("")
  const [questionList, setQuestionList] = useState([]);
  const [filteredList, setFilter] = useState([]);
  let filtered;

  useEffect(() => {
    axios.get(`http://3.134.102.30/qa/${prodId}?count=20`).then(
            (data) => {
                setFilter(data.data.results);
                setQuestionList(data.data.results);
            }
        )
  }, []);

  
  if (questionList && questionList.length !== 0) {
    const total = filteredList.length;
    //console.log(total)
    return (
      <div>
        <div id="searchBar">
          <input 
          style={inputStyle}
          type="text"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          onChange={(e)=>{
            let term = e.target.value.toLowerCase();
            setSearchTerm(term);
            if(term.length >= 3){
              filtered = questionList.filter(
                (q) => {
                  return q.question_body.toLowerCase().includes(term)
                })
              setFilter(filtered);
              
            } else {
              setFilter(questionList);
            }
          }}
          />
        </div>
        
        <div>
          {filteredList.length !==0 ? 
            filteredList
            .map((q, i) => {
              return (
                <Question key={q.question_id} question={filteredList[i]} searchTerm={searchTerm}/>
              );
            })
            .slice(0, count):
            <div>Sorry, we couldn't find any results matching "{searchTerm}"</div>}
          <div style={{display: 'flex', justifyContent: 'flex-start'}}>{total > count ? (
            <button
              style={buttonStyle} 
              onClick={() => setCount(count + 2)}>
              MORE ANSWERED QUESTIONS
            </button>
          ) : null}
          <AddAQuestion 
            setQuestionList={setQuestionList}
            setFilter={setFilter}/></div>
        </div>
      </div>
    );
  } else {
    return <div>AddAQuestion</div>;
  }
};

export default QuestionList;
