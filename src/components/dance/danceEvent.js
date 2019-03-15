import React, { Component } from "react"
import { Link } from 'react-router-dom'

export default class DanceEvent extends Component {
    powerUser = sessionStorage.getItem("Type")

    render() {
        return (
            (sessionStorage.getItem("Type") === "PowerUser") ?

                <div key={`dance-${this.props.dance.id}`} className="card">

                    <React.Fragment>

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

                        <p className="list-item">
                            {this.props.dance.whenDate}-- {this.props.dance.danceNotes} --
                            {this.props.dance.clubName}

                            Cost: {this.props.dance.cost}

                        </p>
                    </React.Fragment>
                </div>
                :
                <React.Fragment>
                    <p>
                        Dance:
                  </p>
                    <p>
                        Cost: {this.props.dance.cost}
                    </p>

                </React.Fragment >
        )
    }
}

