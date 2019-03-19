import React, { Component } from "react"
import { Link } from 'react-router-dom'
import ClubCard from "./clubCard"

export default class Clubs extends Component {
    powerUser = sessionStorage.getItem("Type")

    render() {
        return (
            (sessionStorage.getItem("Type") === "PowerUser") ?
                <React.Fragment>

                    <li className="nav-item">
                        <Link className="nav-link" to="/newClub">Add Club</Link>
                    </li>
                    <h2>Clubs</h2>
                    {
                        this.props.clubs.map(club => {

                            return <section className="container">


                                <ClubCard key={`club-${club.id}`}{...this.props} club={club} powerUser={this.powerUser} />


                            </section>

                        })
                    }
                </React.Fragment>
                :
                <React.Fragment>
                    {
                        this.props.clubs.map(club => {

                            return <section className="container">


                                <clubCard key={`club-${club.id}`}{...this.props} club={club} powerUser={this.powerUser} />


                            </section>

                        })
                    }
                </React.Fragment>

        )
    }

}