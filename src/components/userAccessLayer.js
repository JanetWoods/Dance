import React, { Component } from "react"
import ApplicationViews from "./applicationViews"
import userMgr from "../modules/userMgr";
import NavBar from "./nav/nav";

export default class UserAccessLayer extends Component {
    state= {
        activeUser: {}
    }
    componentDidMount() {
    userMgr.get(this.activeUserId()).then(activeUser =>
        this.setState({activeUser: activeUser})
        )
    }
    activeUserId=()=>parseInt(sessionStorage.getItem("credentials"))
    userPower=()=>(sessionStorage.getItem("Type"))

    render() {
        return(
            <React.Fragment>
                <NavBar setAuth={this.props.setAuth}
                activeUser={this.state.activeUser}
                setPower={this.state.userPower}/>

                <ApplicationViews
                setPower={this.state.userPower}
                activeUserId={this.state.activeUserId}
                activeUser={this.state.activeUser}
                />
            </React.Fragment>
        )
    }
}