import * as React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './Stars.css';

class Stars extends React.Component<myInterfaces.IstarsProps> {    
    render() {
        let generateStars: Array<number> = Array.from(Array(this.props.numberOfStars));
        return (
            <div className="height-stars">
                <Container>
                    <Row>
                        <Col className="center-text pad-left-0 margin-top-2">
                            <span className="app-title">Random stars:</span><br />
                            {generateStars.map((i, j) => <i key={j} className="fa fa-star pad-9 size-3" />)}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Stars;