import React, { Component } from "react"
import PowerAccessLayer from "../powerAccessLayer";

export default class IsPower extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.isPowerUser() ?
                <PowerAccessLayer {...this.props}/>
                :  `<h2> Already know how to square dance?</h2>
                    <p>
                    Be an angel and come dance (for free) at the lessons for new dancers. (please)
                    </p>`
                }

            </React.Fragment>
        )
    }
}