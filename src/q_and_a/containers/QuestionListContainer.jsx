import { connect } from "react-redux";
import fetchQuestionList from "../actions/fetchQuestionList.js";
import QuestionList from "../components/QuestionList.jsx";
import handleCountChange from "../actions/handleCountChange.js";

const mapStateToProps = (state) => {
    return {
        questionList: state.fetchQuestionListReducer.questionList,
        //count: state.fetchQuestionListReducer.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuestionList: (prodId) => {
            dispatch(fetchQuestionList(prodId))
        }
        // handleCountChange: (count) => {
        //     dispatch(handleCountChange(count))
        // }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(QuestionList);