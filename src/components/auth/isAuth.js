import React, { Component } from "react"
import UserAccessLayer from "../userAccessLayer";
import Login from "./login"

export default class IsAuth extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.isAuthenticated()  ?
                    <UserAccessLayer {...this.props} />
                :   <Login {...this.props} />}
            </React.Fragment>
        )
    }
}