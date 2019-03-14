import React, { Component } from "react"
import UserAccessLayer from "../userAccessLayer";
import Login from "./login"
import Sorry from "./sorry";

export default class IsAuth extends Component {
    render() {
        return (
            <React.Fragment>
                 <Sorry {...this.props}/>
                {this.props.isAuthenticated()  ?
                    <UserAccessLayer {...this.props} />
                :   <Login {...this.props} />}
            </React.Fragment>
        )
    }
}