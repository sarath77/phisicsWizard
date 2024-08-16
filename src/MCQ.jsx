import React, {useEffect, useState} from 'react';
import {Col, ListGroup, ListGroupItem, Row} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";

const MCQ = ({question, options, onAnswer}) => {

    let currIndex = useSelector((state) => state.quiz.currentQuestionIndex);
    let questions = useSelector((state) => [...state.quiz.questions]);

    let [selectedIndex, setSelectedIndex] = useState(-1);
    let [isSubmitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();

    const handleOptionClick = () => {
        setSubmitted(true);
        onAnswer(selectedIndex);
    };

    const onNextQuestion = () => {
        dispatch({type: 'NEXT_QUESTION'});
    }

    useEffect(() => {
        setSelectedIndex(-1);
        setSubmitted(false);
    }, [question]);
    return (<>
        <div>
            <h3>{question}</h3>
            <ListGroup>
                {options.map((option, index) =>
                    (<ListGroupItem key={index}
                                    variant={`${selectedIndex === index ? 'info' : ''}`}
                                    onClick={() => !isSubmitted && setSelectedIndex(index)}>
                        {option}
                    </ListGroupItem>))}
            </ListGroup>
        </div>
        <Row className="mt-3">
            <Col>
                {!isSubmitted && <Button variant="success" onClick={() => handleOptionClick()}>
                    Submit
                </Button>}

                {isSubmitted && currIndex + 1 !== questions.length && <Button variant="success" onClick={() => onNextQuestion()}>
                    Next Question
                </Button>}
            </Col>
        </Row>
    </>);
};

export default MCQ;