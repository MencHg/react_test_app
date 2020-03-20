// Learn more about service workers: https://bit.ly/CRA-PWA
import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/main.css'
import './assets/css/rest.css'
import './assets/css/basic.css'
import './assets/css/loading.css'
import './plugins/axios'
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();