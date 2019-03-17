import React, { Component } from "react"
import { Link } from 'react-router-dom'
import ClubCard from "../club/clubCard"

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
                            Edit
                            </button>

                        <button className="list-button"
                            type="button"
                            onClick={() => {
                                this.props.deleteDance(this.props.dance.id)
                            }} >
                            Delete
                            </button>

                        <p className="list-item">
                            {this.props.dance.typeOfEvent.nameType}-- {this.props.dance.club.clubName}<br/>
                            When: {this.props.dance.whenDate}<br/>
                            {/* Where: {this.props.dance.location.nameLocation}:  {this.props.dance.location.street}  {this.props.dance.location.city}, {this.props.location.stateId}  <br/> */}
                            $ {this.props.dance.cost}<br/>
                            -- {this.props.dance.danceNotes} --
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

