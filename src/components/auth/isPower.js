import React, { Component } from "react"
import PowerAccessLayer from "../powerAccessLayer";

export default class IsPower extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.isPowerUser() ?
                <PowerAccessLayer {...this.props}/>

                :  `Be an angel and come dance (for free) at the lessons for new dancers. (please)`
                }

            </React.Fragment>
        )
    }
}