import React, { Component } from "react"
import { Route } from "react-router-dom"
import UserAccessLayer from "../userAccessLayer";
import Login from "./login"
import IsPower from "./isPowerUser"

export default class IsAuth extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.isAuthenticated()  ?
                    <UserAccessLayer {...this.props} />
                :   <Login {...this.props} />}

                <IsPower {...this.props}/>
            </React.Fragment>
        )
    }
}