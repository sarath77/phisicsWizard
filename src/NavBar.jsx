import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from "./LoginButton";

function NavBar() {
    return (
        <Navbar bg="dark" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Physics Wizard</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <LoginButton/>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;