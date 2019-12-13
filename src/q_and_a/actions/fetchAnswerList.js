import axios from "axios";

const fetchAnswerList = (questionId) => {
  //console.log("quesId",questionId)
  return (dispatch) => {
      return axios.get(`http://3.134.102.30/qa/${questionId}/answers`).then(
          (data) => {
              return dispatch({
                  type: "FETCH_ANSWER_LIST",
                  answerList: data.data.results
                  
              })
          }
      )
  }
}

export default fetchAnswerList;