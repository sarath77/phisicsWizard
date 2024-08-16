import initialState from "./InitialState";

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEXT_QUESTION':
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1
            };
        case 'SET_QUESTION':
            return {
                ...state,
                currentQuestionIndex: action.index
            };
        case 'ANSWER_CORRECT':
            return {
                ...state,
                numCorrect: state.numCorrect + 1
            };
        default:
            return state;
    }
};

export default quizReducer;