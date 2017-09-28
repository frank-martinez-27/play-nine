import * as React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './Stars.css';

class Stars extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col className="center-text pad-left-0 margin-top-5">
                            <span className="app-title">Random stars:</span><br />
                            <i className="fa fa-star pad-9 size-3" />
                            <i className="fa fa-star pad-9 size-3" />
                            <i className="fa fa-star pad-9 size-3" />
                            <i className="fa fa-star pad-9 size-3" />
                            <i className="fa fa-star pad-9 size-3" />
                            <i className="fa fa-star pad-9 size-3" />
                            <i className="fa fa-star pad-9 size-3" />
                            <i className="fa fa-star pad-9 size-3" />
                            <i className="fa fa-star pad-9 size-3" />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Stars;