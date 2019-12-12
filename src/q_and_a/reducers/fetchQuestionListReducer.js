const fetchQuestionListReducer = (state=[],action) => {
    switch (action.type) {
        case "FETCH_QUESTION_LIST":
            return {
                questionList: action.questionList
            }
        default:
            return state;
    }
}

export default fetchQuestionListReducer;