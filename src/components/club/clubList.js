import React, { Component } from "react"
import { Link } from 'react-router-dom'
import ClubCard from "./clubCard"

export default class Clubs extends Component {
    powerUser = sessionStorage.getItem("Type")

    render() {
        return (
            (sessionStorage.getItem("Type") === "PowerUser") ?

                (<React.Fragment>

                    <li className="nav-item">
                        <Link className="nav-link" to="/newClub">Add Club</Link>
                    </li>
                    <h2>Clubs</h2>
                    {
                        this.props.states.map(state =>
                            <section>
                                <div key={state.id}>

                                    {
                                        this.props.clubs.filter(
                                            club => club.stateId === state.id
                                        )
                                            .map(
                                                club =>
                                                    club.stateId !== null ?
                                                        <ClubCard key={`club-${club.id}`}{...this.props} club={club} powerUser={this.powerUser} />
                                                        : {}
                                            )
                                    }

                                </div>
                            </section>
                        )

                    }
                </React.Fragment>)

                :
                (<React.Fragment>
                    <h2>Clubs</h2>
                    {
                        this.props.states.map(state =>
                            <section>
                                <div key={state.id}>

                                    {
                                        this.props.clubs.filter(
                                            club => club.stateId === state.id
                                        )
                                            .map(
                                                club =>
                                                    club.stateId !== null ?
                                                        <ClubCard key={`club-${club.id}`}{...this.props} club={club} powerUser={this.powerUser} />
                                                        : {}
                                            )
                                    }

                                </div>
                            </section>
                        )

                    }
                </React.Fragment>)
        )
    }
}
