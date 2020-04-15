import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import './../node_modules/leaflet/dist/leaflet.css';
import './../node_modules/leaflet-geosearch/dist/style.css';

ReactDOM.render(
        <App/>,
    document.getElementById('root'));


serviceWorker.unregister();
