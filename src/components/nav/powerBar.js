import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from "reactstrap"
import "./nav.css"


export default class PowerBar extends Component {
    logOut = () => {
        sessionStorage.clear("credentials")
        sessionStorage.clear("Type")
        sessionStorage.clear("username")
        this.props.setAuth()
        this.props.setPower()
    }
    render(){
        return(
            <nav>
                <ul>
                    <li className="nav-item">
                        <h2>  You are seeing the power bar, more to follow.... </h2>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/DanceList">Dances</Link>
                    </li>
                </ul>
                <p className="nav-link"> Welcome {this.props.activeUser.username}, Thank You for keeping us up-to-date!</p>
            </nav>
        )
    }

}