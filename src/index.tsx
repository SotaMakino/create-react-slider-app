import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './helpers/serviceWorker';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
