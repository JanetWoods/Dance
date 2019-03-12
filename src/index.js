import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Dance from "../src/dance"
import { BrowserRouter as Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router>
        <Dance />
    </Router>,
    document.getElementById('root')
);

serviceWorker.unregister();
