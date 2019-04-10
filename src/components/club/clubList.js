import React, { Component } from "react"
import { Link } from 'react-router-dom'
import ClubCard from "./clubCard"
import "../club/club.css"

export default class Clubs extends Component {
    powerUser = sessionStorage.getItem("Type")

    render() {
        return (
            (sessionStorage.getItem("Type") === "PowerUser") ?

                (<React.Fragment>
                <div className="top-container">
                    <li className="nav-item">
                        <Link className="nav-link" to="/newClub">Add Club</Link>
                    </li>
                    </div>
                    <h2 className="list-title">Clubs</h2>
                      <div>
                    {
                        this.props.states
                        .map(state =>
                            <section key={state.stateId}>
                               <h4 className="list-title-left"> {state.stateLong}</h4>
                                    {
                                        this.props.clubs
                                        .sort((a,b)=> (a.clubName > b.clubName) ? 1 : -1)
                                        .filter(
                                            club => club.stateId === state.id
                                        )
                                        .map(
                                                club =>
                                                    club.stateId !== null ?
                                                        <ClubCard key={`club-${club.id}`}{...this.props} club={club} powerUser={this.powerUser} />
                                                        : {}
                                            )
                                    }
                            </section>
                        )
                    }
                    </div>
                </React.Fragment>)

                :
                (<React.Fragment>
                     <h2 className="list-title">Clubs</h2>
                      <div className="container">
                    {
                        this.props.states
                        .map(state =>
                            <section key={state.stateId} >
                                    {
                                        this.props.clubs
                                        .sort((a,b)=> (a.clubName > b.clubName) ? 1 : -1)
                                        .filter(
                                            club => club.stateId === state.id
                                        ).map(
                                         club =>
                                         club.stateId !== null ?
                                         <ClubCard key={`club-${club.id}`}{...this.props} club={club} powerUser={this.powerUser} />
                                         : {}
                                            )
                                    }
                             </section>
                        )
                    }
                    </div>
                </React.Fragment>)
        )
    }
}
