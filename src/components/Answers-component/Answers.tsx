import * as React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './Answers.css';

class Answers extends React.Component<myInterfaces.IanswersProps, myInterfaces.IanswersState> {
    render() {
        return (
            <div className="height-answers">
                <Container>
                    <Row>
                        <Col className="center-text pad-left-0 margin-top-5">
                            <span className="app-title">Your roll:</span><br />
                            {this.props.selectedNumbers.map(
                                (sNumber: number, i: number) => 
                                    <span key={i} className="rolled-number">{sNumber}</span>
                            )};

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Answers;