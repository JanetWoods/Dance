import React, { Component } from "react"
import { Link } from 'react-router-dom'
import LocationCard from "./location"
import "./location.css"
export default class Locations extends Component {

    render() {
        return (
            (sessionStorage.getItem("Type") === "PowerUser") ?
                <React.Fragment>
                    <div className="top-container">
                    <li className="nav-item">
                        <Link className="nav-link" to="/newLocation">Add Location</Link>
                    </li>
                    </div>
                    <h2 className="list-title">Locations</h2>
                    {
                        this.props.locations.map(location => {

                            return <section>


                                <LocationCard key={`location-${this.props.location.id}`}{...this.props} location={location} powerUser={this.powerUser} />


                            </section>

                        })
                    }
                </React.Fragment>
                :
                <React.Fragment>
                    <h2 className="list-title">Locations</h2>
                    {
                        this.props.locations.map(location => {

                            return <section>

                                <LocationCard key={`location-${this.props.location.id}`}{...this.props} location={location} powerUser={this.powerUser} />


                            </section>

                        })
                    }
                </React.Fragment>

        )
    }

}