import React from 'react'
var moment = require('moment');

const Answer = (props) => {
  const date = moment(props.answer.date).format("MMM Do YY")
  return (
    <div>
      A: {props.answer.body}<br/>
      by {props.answer.answerer_name}, {date} 
      | Helpful?<span>Yes</span>({props.answer.helpfulness||"#"})
      | <span>Report</span>
    </div>
  )
}

export default Answer
