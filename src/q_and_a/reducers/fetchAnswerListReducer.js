const fetchAnswerListReducer = (state=[],action) => {
  switch (action.type) {
      case "FETCH_ANSWER_LIST":
          return {
              ...state,
              answerList: action.answerList
          }
      default:
          return state;
  }
}

export default fetchAnswerListReducer;