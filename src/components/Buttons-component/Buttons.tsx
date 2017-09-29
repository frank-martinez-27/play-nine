import * as React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import './Buttons.css';

class Buttons extends React.Component<myInterfaces.IbuttonsProps, myInterfaces.IbuttonsState> {
    numbersList: Array<number> = Array.from({ length: (10 - 1) }, (v, k) => k + 1);
    numberClassName = (sNumber: number) => {
        if (this.props.selectedNumbers.indexOf(sNumber) >= 0) {
            return 'rolled-number selected';
        }
        return 'rolled-number';
    }
    render() {
        return (
            <div>
                <Container className="answers-buttons">
                    <Row>
                        <Col className="center-text pad-left-0 margin-top-5">
                            <span className="app-title">Choose your numbers:</span><br />
                            {this.numbersList.map(
                                (sNumber, i) =>
                                    <span
                                        key={i}
                                        className={this.numberClassName(sNumber)}
                                        onClick={() => this.props.selectNumber(sNumber)}
                                    >
                                        {sNumber}
                                    </span>
                            )}
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
