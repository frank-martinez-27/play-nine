import * as React from 'react';
import GameComponent from '../Game-component/Game';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="background">
        <GameComponent />
      </div>
    );
  }
}

export default App;
