import React from 'react'
var moment = require('moment');

const Answer = (props) => {
  const date = moment(props.answer.date).format("MMM Do YY")
  return (
    <div>
      A: {props.answer.body}
      <div>by {props.answer.answerer_name}, {date} 
      | Helpful?<span>Yes</span>({props.answer.helpfulness||"#"})
      | <span>Report</span>
      </div>
    </div>
  )
}

export default Answer;
