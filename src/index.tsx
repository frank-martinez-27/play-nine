import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App-component/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
