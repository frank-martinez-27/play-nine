import * as React from 'react';
import TitleComponent from '../Title-component/Title';
import StarsComponent from '../Stars-component/Stars';
import AnswersComponent from '../Answers-component/Answers';
import ButtonsComponent from '../Buttons-component/Buttons';
import { Container, Col, Row } from 'reactstrap';
import './Game.css';

class Game extends React.Component<myInterfaces.IgameProps, myInterfaces.IgameState> {
    state = {
        selectedNumbers: [],
        randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
        answerIsCorrect: undefined,
    };
    selectNumber = (clickedNumber: never): void => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return; }
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    }
    unselectNumber = (clickedNumber: never): void => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.filter((sNumber: number) => sNumber !== clickedNumber)
        }));
    }
    checkAnswer = (): void => {
        this.setState(prevState => ({
            answerIsCorrect: prevState.randomNumberOfStars ===
            prevState.selectedNumbers.reduce((acc: number, n: number) => acc + n, 0)
        }));
    }
    render() {
        const { selectedNumbers, randomNumberOfStars, answerIsCorrect } = this.state;
        return (
            <div>
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

                                    <StarsComponent numberOfStars={randomNumberOfStars} />

                                    <AnswersComponent
                                        selectedNumbers={selectedNumbers}
                                        unselectNumber={this.unselectNumber}
                                    />

                                    <ButtonsComponent
                                        selectedNumbers={selectedNumbers}
                                        selectNumber={this.selectNumber}
                                        answerIsCorrect={answerIsCorrect}
                                        checkAnswer={this.checkAnswer}
                                    />

                                </div>
                                <div className="home" />
                                <div className="bottom-bar" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Game;
