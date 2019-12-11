import axios from "axios";

const fetchQuetionList = (prodId) => {
    return dispatch => {
        return axios.get(`http://3.134.102.30/qa/${prodId}`).then(
            (data) => {
                return dispatch({
                    type: "FETCH_QUESTION_LIST",
                    questionList: data.data.results
                })
            }
        )
    }
}

export default fetchQuetionList;