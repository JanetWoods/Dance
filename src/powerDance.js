import React, { Component } from "react"
import IsAuth from "./components/auth/isAuth"

export default class PowerDance extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials" !== null)

    state = {authTrigger: this.isAuthenticated()}

    setAuth =() => {
        this.setState({authTrigger: this.isAuthenticated()})
    }
    render(){
        return <React.Fragment>
            <IsAuth isAuthenticated={this.isAuthenticated} setAuth={this.setAuth}/>

        </React.Fragment>
    }
}