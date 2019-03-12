import React, { Component } from "react"
import { Link } from "react-router-dom"
// import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

export default class NavBar extends Component {
    logOut = () => {
        sessionStorage.clear("credentials")
        sessionStorage.clear("Type")
        sessionStorage.clear("username")
        this.props.setAuth()
    }
    render(){
        return(
            <nav>
                <ul>
                    <li className="nav-item">
                        <Link className="nav-link" to="/DanceEvent">Dance Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/DanceList">Dances</Link>
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