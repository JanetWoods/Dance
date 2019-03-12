import React, { Component } from "react"
import IsAuth from "./components/auth/isAuth"

export default class Dance extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    isPowerUser = () => sessionStorage.getItem("Type") === "PowerUser"

    state = {authTrigger: this.isAuthenticated(),
            authPower: this.isPowerUser()}

    setAuth =() => {
        this.setState({authTrigger: this.isAuthenticated()})
    }
    setPower = () => {
        this.setState({authPower: this.isPowerUser()})
    }
    render(){
        return (
        <React.Fragment>
            <IsAuth isAuthenticated={this.isAuthenticated} setAuth={this.setAuth}/>
        </React.Fragment>
        )
    }
}