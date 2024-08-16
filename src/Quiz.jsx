import React, {useEffect, useState} from 'react';
import MCQ from './MCQ';
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux";

const Quiz = () => {
    let selectedIndex = useSelector((state) => {
        console.log(state);
        return state.quiz.currentQuestionIndex;
    });
    let questions = useSelector((state) => [...state.quiz.questions]);

    let [selectedAnswer, setSelectedAnswer] = useState(-1);
    const handleAnswer = (answerIndex) => {
        setSelectedAnswer(answerIndex);
    };

    useEffect(() => {
        setSelectedAnswer(-1);
    }, [selectedIndex]);

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