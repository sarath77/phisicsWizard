const initialState = {
    currentQuestionIndex: 0,
    numCorrect: 0,
    questions: [
        {
            title: "Question 1",
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Rome"],
            answer: 0,
            userAnswer : -1
        },
        {
            title: "Question 2",
            question: "What is the largest planet in our solar system?",
            options: ["Jupiter", "Saturn", "Mars", "Earth"],
            answer: 0,
            userAnswer : -1
        }
    ]
};

export default initialState;