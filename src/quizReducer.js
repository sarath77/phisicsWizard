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
        case 'SET_CURRENT_ANSWER':
            console.log('answer');
            console.log(action.answer);
            console.log(state.questions[state.currentQuestionIndex]);

            return {
                ...state,
                questions: state.questions.map((question, index) =>
                    index === state.currentQuestionIndex ? {...question, userAnswer: action.answer} : question
                )
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