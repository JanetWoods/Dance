import React, { Component } from "react"

export default class DanceEvent extends Component {

    render() {
        return (
            <React.Fragment>
                Cost of dance: {this.props.dance.cost}
            </React.Fragment>
        )
    }
}