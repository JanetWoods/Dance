import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./nav.css"
import { Route } from "react-router-dom"

export default class NavBar extends Component {
    logOut = () => {
        sessionStorage.clear("credentials")
        sessionStorage.clear("Type")
        sessionStorage.clear("username")
        this.props.setAuth()
    }
    powerUser = sessionStorage.getItem("Type")

    render() {
        return (
            (sessionStorage.getItem("Type") === "PowerUser") ?

                <nav className="navBar navbar-light light-blue p-0 shadow">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link" to="/DanceList">All</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/FilterByState">Search State</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/filteredList">Advanced Filter</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/locations"> Locations </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/clubs"> Clubs </Link>
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
                <nav className="navBar navbar-light light-blue p-0 shadow">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link" to="/DanceList">All</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/FilterByState">Search By State</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/filteredList">Advanced Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/clubs"> Clubs </Link>
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