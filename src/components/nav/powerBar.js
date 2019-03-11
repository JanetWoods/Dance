import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import {Nav} from "reactstrap"


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

                    <li>
                        <h2>  You are seeing the power bar, more to come.... </h2>
                    </li>
                </ul>
                <p className="nav-link"> Welcome {this.props.activeUser.username}, Thank You for keeping us up-to-date!</p>
            </nav>
        )
    }

}