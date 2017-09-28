import * as React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import './Buttons.css';

class Buttons extends React.Component {
    render() {
        return (
            <div>
                <Container className="answers-buttons">
                    <Row>
                        <Col className="center-text pad-left-0 margin-top-5">
                            <span className="app-title">Choose your numbers:</span><br />
                            <span className="rolled-number">1</span>
                            <span className="rolled-number">2</span>
                            <span className="rolled-number">3</span>
                            <span className="rolled-number">4</span>
                            <span className="rolled-number">5</span>
                            <span className="rolled-number">6</span>
                            <span className="rolled-number">7</span>
                            <span className="rolled-number">8</span>
                            <span className="rolled-number">9</span>
                        </Col>
                    </Row>
                </Container>
                <Container className="button-holder">
                    <Row>
                        <Col>
                            <Button color="info" className="confirm-button">Confirm</Button>{' '}
                            <Button color="danger" className="redraw-button">Redraw</Button>{' '}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Buttons;
