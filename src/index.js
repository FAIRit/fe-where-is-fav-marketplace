import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Firebase, {FirebaseContext} from './components/Firebase';

import * as serviceWorker from './serviceWorker';
import './../node_modules/leaflet/dist/leaflet.css'


ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App/>
    </FirebaseContext.Provider>,
    document.getElementById('root'));


serviceWorker.unregister();
