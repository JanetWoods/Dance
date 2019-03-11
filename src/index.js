import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Dance from "../src/dance"
import { BrowserRouter as Router } from "react-router-dom"
import Nav from "./components/nav/nav"

ReactDOM.render(
    <Router>
        <Dance />
        {/* <PowerDance/> */}
    </Router>,
    document.getElementById('root')
);

serviceWorker.unregister();
