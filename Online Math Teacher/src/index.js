import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
<Router>
<App/>
</Router>
,document.querySelector('#root'));
