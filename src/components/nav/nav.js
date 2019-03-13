import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./nav.css"

export default class NavBar extends Component {
    logOut = () => {
        sessionStorage.clear("credentials")
        sessionStorage.clear("Type")
        sessionStorage.clear("username")
        this.props.setAuth()
    }
    render(){
        return(
            <nav className="navBar">
                <ul>
                    <li className="nav-item">
                        <Link className="nav-link" to="/DanceEvent">Dance Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/DanceList">Dances</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dance/new">Add Event</Link>
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