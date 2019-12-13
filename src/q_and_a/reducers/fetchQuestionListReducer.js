const fetchQuestionListReducer = (state=[],action) => {
    switch (action.type) {
        case "FETCH_QUESTION_LIST":
            return {
                ...state,
                questionList: action.questionList,
                count: action.count
            }
        default:
            return state;
    }
}

export default fetchQuestionListReducer;