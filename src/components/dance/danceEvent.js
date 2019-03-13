import React, { Component } from "react"
import { Link } from 'react-router-dom'

export default class DanceEvent extends Component {

    render() {
        return (
            <React.Fragment>
                <div key={`dance-${this.props.dance.id}`} className="list-item">

                    <button className="list-button"
                        type="button"
                        onClick={() => {
                            this.props.history.push(`/dances/edit/${this.props.dance.id}`)
                        }} >
                        Edit This Event
                </button>

                    <button className="list-button"
                        type="button"
                        onClick={() => {
                            this.props.deleteDance(`${this.props.dance.id}`)
                        }} >
                        Delete This Event
                </button>

                    Dance:
                Cost of dance: {this.props.dance.cost}
                </div>
            </React.Fragment>
        )
    }
}