import React, {useEffect, useState} from 'react';
import MCQ from './MCQ';
import {Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const Quiz = () => {
    let selectedIndex = useSelector((state) => {
        console.log(state);
        return state.quiz.currentQuestionIndex;
    });
    let questions = useSelector((state) => [...state.quiz.questions]);

    const dispatch = useDispatch();
    let answerState = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex].userAnswer);
    let [selectedAnswer, setSelectedAnswer] = useState(answerState);
    const handleAnswer = (answerIndex) => {
        setSelectedAnswer(answerIndex);
        dispatch({
            type: 'SET_CURRENT_ANSWER',
            answer: answerIndex
        })
    };

    useEffect(() => {
        setSelectedAnswer(answerState);
    }, [answerState, selectedIndex]);

    let answer = questions[selectedIndex].answer;
    return (<>
        <Row>
            <Col>
                <MCQ
                    question={questions[selectedIndex].question}
                    options={questions[selectedIndex].options}
                    onAnswer={handleAnswer}
                />
            </Col>
        </Row>

        <Row className="mt-3">
            {selectedAnswer !== -1 &&
                (selectedAnswer === answer ? (<h2> That's Correct</h2>) : (<h2> That's Incorrect</h2>))}
        </Row>
    </>);
};

export default Quiz;