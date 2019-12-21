import React, { useState } from 'react';
import QAModal from './Modal';

const AddAQuestion = props => {
  const [click, setClick] = useState(false);
  return (
    <div>
      <button
        onClick={e => {
          setClick(true);
        }}
        className='question-btn'
      >
        ADD A QUESTION +
      </button>
      {click ? (
        <QAModal
          name='question'
          setClick={setClick}
          setQuestionList={props.setQuestionList}
          setFilter={props.setFilter}
        />
      ) : null}
    </div>
  );
};

export default AddAQuestion;
