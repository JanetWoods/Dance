import React, { Component } from "react"
import DanceEvent from "./danceEvent"
import { Link } from 'react-router-dom'
import "./dance.css"


export default class DanceList extends Component {
    powerUser = sessionStorage.getItem("Type")


    render() {
        return (
            (sessionStorage.getItem("Type") === "PowerUser") ?

            <React.Fragment>
            <Link className="location-link" to="/dance/new">Add Event</Link>

            <h2>Dances</h2>
            <p>(Note: Club dances are free for club members dancing at their home club.)</p>
            {
                this.props.detailedDances.sort(function compare(a, b) {
                    var dateA = new Date(a.whenDate);
                    var dateB = new Date(b.whenDate);
                    return dateA - dateB;
                }).map(dance => {

                    return <section className="container">

                        <DanceEvent key={`dance-${dance.id}`}{...this.props} dance={dance} powerUser={this.powerUser}/>
                    </section>

                })
            }
        </React.Fragment>

            :
            <React.Fragment>

                <h2>Dances</h2>
        <p>(Note: Club dances are free for club members dancing at their home club.)</p>
        {
                this.props.detailedDances.sort(function compare(a, b) {
                    var dateA = new Date(a.whenDate);
                    var dateB = new Date(b.whenDate);
                    return dateA - dateB;
                }).map(dance => {

                    return <section className="card">

                        <DanceEvent key={`dance-${dance.id}`}{...this.props} dance={dance} powerUser={this.powerUser}/>
                    </section>

                })
            }
            </React.Fragment>
        )
    }

}