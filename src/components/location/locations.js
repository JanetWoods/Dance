import React, { Component } from "react"
import { Link } from 'react-router-dom'
import LocationCard from "./location"



export default class Locations extends Component {



    render() {
        return (

            <React.Fragment>
            {/* <Link className="nav-link" to="/dance/new">Add Event</Link> */}

            <h2>Locations</h2>
            {
                this.props.locations.map(location => {

                    return <section className="container">

                        <LocationCard key={`location-${this.props.location.id}`}{...this.props} location={location} powerUser={this.powerUser}/>


                    </section>

                })
            }
        </React.Fragment>

        )
    }

}