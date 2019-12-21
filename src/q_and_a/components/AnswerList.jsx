import React, { useState } from 'react';
import Answer from './Answer';

const AnswerList = props => {
  const [count, setCount] = useState(2);

  const answers = props.answerList;
  let answerList = [];
  for (var key in answers) {
    answerList.push(answers[key]);
  }
  // sort answerList by helpfulness
  answerList.sort((a, b) => {
    return b.helpfulness - a.helpfulness;
  });
  // seller first
  for (var i = 0; i < answerList.length; i++) {
    if (answerList[i].answerer_name.toLowerCase() === 'seller') {
      var seller = answerList.splice(i, 1);
      var temp = seller.concat(answerList);
      answerList = temp;
    }
  }

  if (props.answerList && answerList.length !== 0) {
    const total = answerList.length;
    return (
      <div>
        {answerList
          .map((a, i) => {
            return (
              <Answer key={a.id} answer={a} questionId={props.questionId} />
            );
          })
          .slice(0, count)}
        {total > count ? (
          <button
            onClick={() => setCount(count + 2)}
            className='answer-list-btn'
          >
            LOAD MORE ANSWERS
          </button>
        ) : null}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default AnswerList;
