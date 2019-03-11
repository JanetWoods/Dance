import React, { Component } from "react"
import NavBar from "./nav/nav"
import ApplicationViews from "./applicationViews"
import userMgr from "../modules/userMgr";

export default class PowerAccessLayer extends Component {
    state= {
        activeUser: {}
    }
    componentDidMount() {
    userMgr.get(this.activeUserId()).then(activeUser =>
        this.setState({activeUser: activeUser})
        )
    }
    activeUserId=()=>parseInt(sessionStorage.getItem("credentials"))

    render() {
        return(
            <React.Fragment>
                <NavBar setAuth={this.props.setAuth}
                setPower={this.props.setPower} activeUser={this.state.activeUser}/>
                <ApplicationViews
                activeUserId={this.activeUserId}
                activeUser={this.state.activeUser}
                />
            </React.Fragment>
        )
    }
}