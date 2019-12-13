import { connect } from "react-redux";
import fetchAnswerList from "../actions/fetchAnswerList.js";
import AnswerList from "../components/AnswerList.jsx";

const mapStateToProps = (state) => {
    return {
        answerList: state.fetchAnswerListReducer.answerList,
        //questionId: state.fetchAnswerListReducer.questionId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAnswerList: (questionId) => {
            dispatch(fetchAnswerList(questionId))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AnswerList);