const fetchQuestionListReducer = (state=[],action) => {
    switch (action.type) {
        case "FETCH_QUESTION_LIST":
            return {
                ...state,
                questionBody: action.questionBody,
                helpfulness: action.helpfulness
            }
        default:
            return state;
    }
}

export default fetchQuestionListReducer;