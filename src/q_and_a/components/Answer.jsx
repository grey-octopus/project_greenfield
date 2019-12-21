import React, { useState } from 'react';
import axios from 'axios';
import Images from './Images';
var moment = require('moment');

const Answer = props => {
  const [helpfulness, setHelpfulness] = useState(props.answer.helpfulness);
  const [clicked, setClicked] = useState(false);
  const [reported, setReported] = useState(false);
  const date = moment(props.answer.date).format('MMM Do YY');
  const handleClick = e => {
    if (!clicked) {
      return axios
        .put(`http://3.134.102.30/qa/answer/${props.answer.id}/helpful`)
        .then(() => {
          return axios.get(
            `http://3.134.102.30/qa/${props.questionId}/answers`
          );
        })
        .then(data => {
          var results = data.data.results;
          for (var item of results) {
            if (item.answer_id === props.answer.id) {
              setHelpfulness(item.helpfulness);
            }
          }
        });
    }
  };

  const handleReport = () => {
    if (!reported) {
      return axios
        .put(`http://3.134.102.30/qa/answer/${props.answer.id}/report`)
        .then(() => {
          return axios.get(
            `http://3.134.102.30/qa/${props.questionId}/answers`
          );
        })
        .then(() => {
          setReported(true);
        });
    }
  };
  return (
    <div style={{ marginBottom: '15px' }}>
      {reported ? <div className='reported'>It's been reported!</div> : null}
      <span className='answer-a'>A:</span>
      <span className='answer'>{props.answer.body}</span>
      <br />
      {props.answer.photos.length > 0 ? (
        <Images photos={props.answer.photos} />
      ) : null}
      <span className='answer-sub'>
        <i>by</i> {props.answer.answerer_name}, {date}
        <span className='answer-sub'>|</span>
        Helpful?
        <span
          id={props.answer.id}
          onClick={e => {
            handleClick(e);
            setClicked(true);
          }}
          className='underline'
        >
          Yes
        </span>
        ({helpfulness || '#'})<span className='answer-space'>|</span>
        <span
          onClick={e => {
            handleReport(e);
          }}
          className='underline'
        >
          Report
        </span>
      </span>
    </div>
  );
};

export default Answer;
