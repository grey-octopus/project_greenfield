import React, { useState } from 'react';
import AnswerList from './AnswerList';
import AddAnAnswer from './AddAnAnswer';
import axios from 'axios';
import Highlighter from 'react-highlight-words';
import { useParams } from 'react-router-dom';
import API_URL from '../../../config';

const Question = (props) => {
  //console.log('hello',props)
  const { prodId } = useParams();
  const [helpfulness, setHelpfulness] = useState(
    props.question.question_helpfulness
  );
  const [clicked, setClicked] = useState(false);
  const handleClick = (e) => {
    if (!clicked) {
      return axios
        .put(`${API_URL}qa/question/${props.question.question_id}/helpful`)
        .then(() => {
          return axios.get(`${API_URL}qa/${prodId}`);
        })
        .then((data) => {
          var results = data.data.results;
          for (var item of results) {
            if (item.question_id === props.question.question_id) {
              setHelpfulness(item.question_helpfulness);
            }
          }
        });
    }
  };
  return (
    <div id={props.question.question_id} style={{ marginBottom: '2%' }}>
      <span className='question'>
        <span style={{ marginRight: '10px' }}>Q:</span>
        <Highlighter
          searchWords={props.searchTerm.length >= 3 ? [props.searchTerm] : ['']}
          autoEscape={true}
          textToHighlight={props.question.question_body}
        >
          {props.question.question_body}
        </Highlighter>
      </span>

      <span className='helpfulness'>
        Helpful?
        <span
          onClick={(e) => {
            handleClick(e);
            setClicked(true);
          }}
          className='underline'
        >
          Yes
        </span>
        <span>({helpfulness || '#'})</span>
        <span className='space'>|</span>
        <AddAnAnswer
          setQuestionList={props.setQuestionList}
          setFilter={props.setFilter}
          questionId={props.question.question_id}
        />
      </span>

      <AnswerList
        questionId={props.question.question_id}
        answerList={props.question.answers}
      />
      <br />
    </div>
  );
};

export default Question;
