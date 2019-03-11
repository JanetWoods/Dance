import React, { Component } from "react"
import Nav from "./nav/nav"
import ApplicationViews from "./applicationViews"
import userMgr from "../modules/userMgr";

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

    render() {
        return(
            <React.Fragment>
                <Nav setAuth={this.props.setAuth} activeUser={this.state.activeUser}/>
                <ApplicationViews
                activeUserId={this.activeUserId}
                activeUser={this.state.activeUser}
                />
            </React.Fragment>
        )
    }
}