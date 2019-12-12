import { connect } from "react-redux";
import fetchQuestionList from "../actions/fetchQuestionList.js";
import QuestionList from "../components/QuestionList.jsx";


const mapStateToProps = (state) => {
    return {
        prodId: state.fetchProductInfoReducer.prodId,
        questionList: state.questionList.questionList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuestionList: (prodId) => {
            dispatch(fetchQuestionList(prodId))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(QuestionList);