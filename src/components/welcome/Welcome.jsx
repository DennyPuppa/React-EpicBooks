import Alert from 'react-bootstrap/Alert';
import { Container, Row, Col } from "react-bootstrap";
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const AlertWelcome = () => {

    const {isDarkMode} = useContext(ThemeContext)
    console.log("WELCOME:" + isDarkMode);

    return (
        <Container>
            <Row>
                <Col>
                    <Alert key="dark" variant={isDarkMode ? "light" : "dark"}>
                        Welcome to EpicBooks!
                    </Alert>
                </Col>
            </Row>
        </Container>
    );
}

export default AlertWelcome;