import React, { Component } from "react"
import { Link } from 'react-router-dom'
import ClubCard from "../club/clubCard"
import "./dance.css"

export default class DanceEvent extends Component {
    powerUser = sessionStorage.getItem("Type")

    render() {
        return (
            (sessionStorage.getItem("Type") === "PowerUser") ?

                <div key={`dance-${this.props.dance.id}`} className="card">

                    <React.Fragment className="card">

                    <p className="list-item"> What: <strong> {this.props.dance.typeOfEvent.nameType}</strong>,
                         When:  <strong className="list-item"> {this.props.dance.whenDate}, </strong>
                            Host:<strong className="list-item"> {this.props.dance.club.clubName}</strong><br />

                            <Link className="nav-link" to={`/locations/${this.props.dance.location.id}`} {...this.props}>
                                Where:  {this.props.dance.location.nameLocation}
                            </Link></p>
                        <p className="list-item"> ${this.props.dance.cost},
                            Note:  {this.props.dance.danceNotes}

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
                            </button>  </p>

                    </React.Fragment>
                </div>
                :
                <div>

                    <React.Fragment>
                        <p className="list-item"> What: <strong> {this.props.dance.typeOfEvent.nameType}</strong>,
                         When:  <strong className="list-item"> {this.props.dance.whenDate}, </strong>
                            Host:<strong className="list-item"> {this.props.dance.club.clubName}</strong><br />

                            <Link className="nav-link" to={`/locations/${this.props.dance.location.id}`} {...this.props}>
                                Where:  {this.props.dance.location.nameLocation}
                            </Link></p>
                        <p className="list-item"> ${this.props.dance.cost},
                            Note:  {this.props.dance.danceNotes}</p>

                    </React.Fragment >
                </div>
        )
    }
}

