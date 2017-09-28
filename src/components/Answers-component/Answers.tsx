import * as React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './Answers.css';

class Answers extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col className="center-text pad-left-0 margin-top-5">
                            <span className="app-title">Your roll:</span><br />
                            <span className="rolled-number">1</span>
                            <span className="rolled-number">3</span>
                            <span className="rolled-number">5</span>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Answers;