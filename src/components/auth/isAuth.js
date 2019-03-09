import React, { Component } from "react"
import { Route } from "react-router-dom"
import UserAccessLayer from "../userAccessLayer";
import Login from "../auth"

class IsAuth extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.isAuthenticated() ? (
                    <UserAccessLayer {...this.props} />
                ) : (
                        <Login {...this.props} />
                    )}
            </React.Fragment>
        )
    }
}