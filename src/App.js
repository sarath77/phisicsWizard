import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import Quiz from "./Quiz";
import {useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import QuestionList from "./QuestionList";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="App bg-dark text-light" data-bs-theme="dark">
            <NavBar/>
            <Container style={{height: '100vh'}}>
                <Row className="h-100">
                    <QuestionList/>
                    <Col className="h-100 pt-3">
                        <Quiz/>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default App;
