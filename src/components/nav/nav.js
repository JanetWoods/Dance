import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export default class Nav extends Component {
    logOut = () => {
        sessionStorage.clear("credentials")
        this.props.setAuth()
    }
    render(){
        return(
            <nav>
                <ul>
                    <li className="nav-item">
                        <Link className="nav-link" to="/DanceList">Dance</Link>
                    </li>
                    <li>

                    </li>
                </ul>
                <p className="nav-link"> Hi {this.props.activeUser.username}</p>
                <button
                type="button"
                className="btn btn-outline-info"
                onClick={this.logOut}>
                    Logout
                </button>
            </nav>
        )
    }

}