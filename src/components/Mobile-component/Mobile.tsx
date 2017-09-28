import * as React from 'react';
import TitleComponent from '../Title-component/Title';
import StarsComponent from '../Stars-component/Stars';
import AnswersComponent from '../Answers-component/Answers';
import ButtonsComponent from '../Buttons-component/Buttons';
import { Container, Col, Row } from 'reactstrap';

class Mobile extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>
                        <div className="marvel-device iphone8 silver">
                            <div className="top-bar" />
                            <div className="sleep" />
                            <div className="volume" />
                            <div className="camera" />
                            <div className="sensor" />
                            <div className="speaker" />
                            <div className="screen">
                                
                                <TitleComponent />

                                <StarsComponent />

                                <AnswersComponent />

                                <ButtonsComponent />

                            </div>
                            <div className="home" />
                            <div className="bottom-bar" />
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Mobile;