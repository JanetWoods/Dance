import React, { Component } from "react"
import userMgr from "../modules/userMgr";
import PowerBar from "./nav/powerBar"
import PowerViews from "./powerViews"

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
                <PowerBar setAuth={this.props.setAuth}
                setPower={this.props.setPower}
                activeUser={this.state.activeUser}/>

                <PowerViews
                setPower={this.props.setPower}
                activeUserId={this.state.activeUserId}
                activeUser={this.state.activeUser}/>

            </React.Fragment>
        )
    }
}