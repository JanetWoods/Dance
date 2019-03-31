import React, { Component } from "react"
import UserAccessLayer from "../userAccessLayer";
import Login from "./login"
import Register from "./register";

export default class IsAuth extends Component {


    render() {
        return (
            <React.Fragment>

                {this.props.isAuthenticated() ?
                    <UserAccessLayer {...this.props} />
                    : <React.Fragment>
                        <Login {...this.props} />

                        <Register {...this.props}/>
                    </React.Fragment>}
            </React.Fragment>
        )
    }
}