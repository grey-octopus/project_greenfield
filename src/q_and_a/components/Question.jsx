import React,{useState} from 'react'
import AnswerList from './AnswerList'
import AddAnAnswer from './AddAnAnswer'
import axios from 'axios'
import Highlighter from 'react-highlight-words'

const questionStyle={
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#525252'
}
const helpfulnessStyle={
    fontSize: '12px',
    float: 'right'
}

const underlineStyle={
    textDecoration: 'underline',
}
const spaceStyle={
    marginRight:'10px',
    marginLeft:'10px'
  }


const Question = (props) => {
    //console.log('hello',props)
    const [helpfulness,setHelpfulness] = useState(props.question.question_helpfulness);
    const [clicked,setClicked] = useState(false);
    const handleClick = (e)=>{
        const target = e.target
        if(!clicked){
            if(helpfulness === "#") {
                setHelpfulness(1);
              } else {
                setHelpfulness(helpfulness + 1);
              }
              return axios.put(`http://3.134.102.30/qa/question/${props.question.question_id}/helpful`)
        }

      }
    return (
        <div 
            id={props.question.question_id}
            style={{marginBottom:'2%'}}
        >
            <span style={questionStyle}>
            <span style={{marginRight:'10px'}}>Q:</span>
            <Highlighter
              searchWords={props.searchTerm.length >=3? [props.searchTerm]:[""]}
              autoEscape={true}
              textToHighlight={props.question.question_body}
              >  
            {props.question.question_body}
            </Highlighter>
            </span>
           
            <span style={helpfulnessStyle}>Helpful?
                <span 
                  onClick={
                    (e)=>{
                      handleClick(e);
                      setClicked(true);
                  }}
                  style={underlineStyle}>
                    Yes
                  </span>
                  <span>
                    ({helpfulness||"#"})
                  </span>
                  <span style={spaceStyle}>|</span>
            <AddAnAnswer 
                setQuestionList={props.setQuestionList}
                setFilter={props.setFilter}
                questionId={props.question.question_id}/></span>
            
            
            <AnswerList
                questionId={props.question.question_id}
                answerList={props.question.answers}
            />
            <br/>
        </div>
    )
}

export default Question
