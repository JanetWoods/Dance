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
    userType=()=>(sessionStorage.getItem("Type"))

    render() {
        return(
            <React.Fragment>
                <NavBar setAuth={this.props.setAuth} activeUser={this.state.activeUser}
                setPower={this.props.setPower}/>
                <ApplicationViews
                activeUserId={this.activeUserId}
                activeUser={this.state.activeUser}
                setPower={this.props.setPower}/>
            </React.Fragment>
        )
    }
}