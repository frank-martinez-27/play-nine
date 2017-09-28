import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Title.css';

class Title extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={{ size: 6, push: 2, pull: 2 }} className="center-text">
                            <i className="fa fa-star pad-3" />
                            <i className="fa fa-star pad-3" />
                            <i className="fa fa-star pad-3" />
                            <i className="fa fa-star pad-3" />
                            <i className="fa fa-star pad-3" />
                            <i className="fa fa-star pad-3" />
                            <i className="fa fa-star pad-3" />
                            <i className="fa fa-star pad-3" />
                            <i className="fa fa-star pad-3" />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={{ size: 6, push: 2, pull: 2 }} className="center-text">
                            <span className="app-title">Play</span><br />
                            <span className="app-subtitle">Nine!</span>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={{ size: 6, push: 2, pull: 2 }} className="center-text">
                            <i className="fa fa-star pad-3" />
                            <i className="fa fa-star pad-3" />
                            <i className="fa fa-star pad-3" />
                            <i className="fa fa-star pad-3" />
                            <i className="fa fa-star pad-3" />
                            <i className="fa fa-star pad-3" />
                            <i className="fa fa-star pad-3" />
                            <i className="fa fa-star pad-3" />
                            <i className="fa fa-star pad-3" />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Title;