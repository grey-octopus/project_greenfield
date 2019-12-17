import axios from "axios";

const fetchQuestionList = (prodId) => {
    return (dispatch) => {
        return axios.get(`http://3.134.102.30/qa/${prodId}`).then(
            (data) => {
                return dispatch({
                    type: "FETCH_QUESTION_LIST",
                    questionList: data.data.results,
                    // count: 2
                })
            }
        )
    }
}

export default fetchQuestionList;