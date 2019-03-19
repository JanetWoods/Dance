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
    powerUser = sessionStorage.getItem("Type")

render(){
    return(
        (sessionStorage.getItem("Type") === "PowerUser") ?
            <nav className="navBar">
                <ul>
                    <li className="nav-item">
                        <Link className="nav-link" to="/DanceList">Dances</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/locations"> Locations </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/clubs"> Clubs </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={`/account/user/${this.props.activeUser.id}`}>Your Account</Link>
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
        :
        <nav className="navBar">
        <ul>
            <li className="nav-item">
                <Link className="nav-link" to="/DanceList">Dances</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={`/account/user/${this.props.activeUser.id}`}>Your Account</Link>
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