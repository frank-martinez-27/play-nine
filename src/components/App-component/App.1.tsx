import * as React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="background">
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
                  <Container className="answers">
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

export default App;
