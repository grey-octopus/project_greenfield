import React, { useEffect, useState } from 'react';
import Question from './Question';
import { useParams } from 'react-router-dom';
import AddAQuestion from './AddAQuestion';
import axios from 'axios';

const QuestionList = props => {
  const { prodId } = useParams();
  const [count, setCount] = useState(4);
  const [searchTerm, setSearchTerm] = useState('');
  const [questionList, setQuestionList] = useState([]);
  const [filteredList, setFilter] = useState([]);
  let filtered;

  useEffect(() => {
    axios.get(`http://3.134.102.30/qa/${prodId}?count=200`).then(data => {
      setFilter(data.data.results);
      setQuestionList(data.data.results);
    });
  }, [prodId]);

  if (questionList && questionList.length !== 0) {
    const total = filteredList.length;
    return (
      <div className='question-container'>
        <div id='searchBar'>
          <input
            className='question-input'
            type='text'
            placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
            onChange={e => {
              let term = e.target.value.toLowerCase();
              setSearchTerm(term);
              if (term.length >= 3) {
                filtered = questionList.filter(q => {
                  return q.question_body.toLowerCase().includes(term);
                });
                setFilter(filtered);
              } else {
                setFilter(questionList);
              }
            }}
          />
        </div>

        <div className='question-scroll'>
          {filteredList.length !== 0 ? (
            filteredList
              .map((q, i) => {
                return (
                  <Question
                    key={q.question_id}
                    question={filteredList[i]}
                    searchTerm={searchTerm}
                    setQuestionList={setQuestionList}
                    setFilter={setFilter}
                  />
                );
              })
              .slice(0, count)
          ) : (
            <div>
              Sorry, we couldn't find any results matching "{searchTerm}"
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            {total > count ? (
              <button
                className='question-list-btn'
                onClick={() => setCount(count + 2)}
              >
                MORE ANSWERED QUESTIONS
              </button>
            ) : null}
            <AddAQuestion
              setQuestionList={setQuestionList}
              setFilter={setFilter}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <AddAQuestion setQuestionList={setQuestionList} setFilter={setFilter} />
    );
  }
};

export default QuestionList;
