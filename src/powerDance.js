import React, { Component } from "react"
import IsAuth from "./components/auth/isAuth"
import Dance from "./dance"

export default class PowerDance extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials" !== null)

    isPowerUser = () => sessionStorage.getItem("Type" === "PowerUser")


    state = {
             authTrigger: this.isAuthenticated(),
             powerTrigger: this.isPowerUser()
            }

    setAuth =() => {
        this.setState({authTrigger: this.isAuthenticated()}, {powerTrigger:this.isSuperAuth()}
        )
    }
    setPower=() => {
        this.setState({powerTrigger:this.isPowerUser()},
        {authTrigger: this.isAuthenticated()})
    }

    render(){
        return <React.Fragment>
            <IsAuth isAuthenticated={this.isAuthenticated} setAuth={this.setAuth}
            setPower={this.setPower} isPowerUser={this.isPowerUser}/>

        </React.Fragment>
    }
}