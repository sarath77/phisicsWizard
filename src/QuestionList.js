import React, {useState} from 'react';
import {Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";

const QuestionsList = () => {
    let selectedIndex = useSelector((state) => state.quiz.currentQuestionIndex);
    let questions = useSelector((state) => [...state.quiz.questions]);
    const dispatch = useDispatch();
    return (
        <Col xs={3} className="border-end h-100 pt-3">
            <h3>Exercise</h3>
            <ListGroup>
                {questions.map((question, index) => (
                    <ListGroupItem key={index} variant={`${selectedIndex === index ? 'primary' : ''}`}
                                   onClick={() => {
                                       dispatch({type: 'SET_QUESTION', index: index});
                                   }}>
                        {question.title}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </Col>
    );
};

export default QuestionsList;