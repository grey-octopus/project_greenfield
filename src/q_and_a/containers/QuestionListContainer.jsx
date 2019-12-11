import { connect } from "react-redux";
//import fetchQuestionList from "../actions/fetchQuestionList.js";
import QuestionList from "../components/QuestionList.js";

const mapStateToProps = (state) => {
    return {
        questionList: state.fetchQuestionListReducer.questionList
    }
}

export default connect(mapStateToProps,null)(QuestionList);