import * as React from 'react';
import TitleComponent from '../Title-component/Title';
import StarsComponent from '../Stars-component/Stars';
import AnswersComponent from '../Answers-component/Answers';
import ButtonsComponent from '../Buttons-component/Buttons';
import DoneComponent from '../Done-component/DoneComponent';
import { Container, Col, Row, Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import './Game.css';

class Game extends React.Component<myInterfaces.IgameProps, myInterfaces.IgameState> {
    state = Game.initialState();
    static initialState = () => ({
        selectedNumbers: [],
        randomNumberOfStars: Game.randomNumberGenerator(),
        usedNumbers: [],
        answerIsCorrect: undefined,
        redraws: 10,
        doneStatus: undefined,
        modal: false
    })
    static possibleCombinationSum = (arr: Array<number>, n: number): boolean => {
        if (arr.indexOf(n) >= 0) { return true; }
        if (arr[0] > n) { return false; }
        if (arr[arr.length - 1] > n) {
            arr.pop();
            return Game.possibleCombinationSum(arr, n);
        }
        var listSize = arr.length, combinationsCount = (1 << listSize);
        for (var i = 1; i < combinationsCount; i++) {
            var combinationSum = 0;
            for (var j = 0; j < listSize; j++) {
                if (i & (1 << j)) { combinationSum += arr[j]; }
            }
            if (n === combinationSum) { return true; }
        }
        return false;
    }
    static randomNumberGenerator = () => 1 + Math.floor(Math.random() * 9);

    selectNumber = (clickedNumber: never): void => {
        if (this.state.usedNumbers.indexOf(clickedNumber) >= 0) { return; }
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return; }
        this.setState(prevState => ({
            answerIsCorrect: undefined,
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    }
    unselectNumber = (clickedNumber: never): void => {
        this.setState(prevState => ({
            answerIsCorrect: undefined,
            selectedNumbers: prevState.selectedNumbers.filter((sNumber: number) => sNumber !== clickedNumber)
        }));
    }
    checkAnswer = (): void => {
        this.setState(prevState => ({
            answerIsCorrect: prevState.randomNumberOfStars ===
            prevState.selectedNumbers.reduce((acc: number, n: number) => acc + n, 0)
        }));
    }
    acceptAnswer = (): void => {
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            answerIsCorrect: undefined,
            randomNumberOfStars: Game.randomNumberGenerator()
        }), this.updateDoneStatus);
    }
    redraw = (): void => {
        if (this.state.redraws === 0) { return; }
        this.setState(prevState => ({
            randomNumberOfStars: Game.randomNumberGenerator(),
            answerIsCorrect: undefined,
            selectedNumbers: [],
            redraws: --prevState.redraws
        }), this.updateDoneStatus);
    }
    toggleModal = (): void => {
        this.setState({ modal: !this.state.modal }, this.resetGame);
    }
    resetGame = () => this.setState(Game.initialState());
    updateDoneStatus = (): void => {
        this.setState(prevState => {
            if (prevState.usedNumbers.length === 9) {
                return { doneStatus: 'You Win! Nice!', modal: true };
            }
            if (prevState.redraws === 0 && !this.possibleSolution(prevState)) {
                return { doneStatus: 'You Lose! Try Again!', modal: true };
            }
            return { doneStatus: undefined, modal: false };
        });
    }
    possibleSolution = (state: myInterfaces.IgameState) => {
        let arrayOfNums: Array<number> = Array.from(Array(9), (e, i) => i + 1);
        const possibleNumbers = arrayOfNums.filter(arrVal => state.usedNumbers.indexOf(arrVal) === -1);

        return Game.possibleCombinationSum(possibleNumbers, state.randomNumberOfStars);
    }
    render() {
        const {
            selectedNumbers,
            randomNumberOfStars,
            answerIsCorrect,
            usedNumbers,
            redraws,
            doneStatus,
            modal } = this.state;
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
                                    <Modal isOpen={modal} toggle={this.toggleModal}>
                                        <ModalHeader toggle={this.toggleModal}>Game Over</ModalHeader>
                                        <ModalBody>
                                            <DoneComponent doneStatus={doneStatus} />
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="primary" className="modal-btn" onClick={this.toggleModal}>
                                                Play Again
                                            </Button>{' '}
                                            <a
                                                href="https://github.com/frank-martinez-27/"
                                                className="btn btn-warning modal-btn"
                                            >
                                                Back to GitHub
                                            </a>
                                        </ModalFooter>
                                    </Modal>
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
                                        usedNumbers={usedNumbers}
                                        acceptAnswer={this.acceptAnswer}
                                        redraw={this.redraw}
                                        redraws={redraws}
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
