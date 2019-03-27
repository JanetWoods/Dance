import React, { Component } from "react"
import DanceEvent from "./danceEvent"
import { Link } from 'react-router-dom'
import "./dance.css"
import moment from 'moment'
import Filter from "./filter"

export default class DanceList extends Component {


    powerUser = sessionStorage.getItem("Type")

    render() {
        let type= this.props.filter.type;

        return (
            (sessionStorage.getItem("Type") === "PowerUser") ?

                <React.Fragment>
                    <div className="top-container">
                        <p><Link className="dance-link" to="/dance/new">Add Event</Link></p>
                    </div>

                    <h2 className="list-title">Dances</h2>
                    <div >

                        {
                            this.props.detailedDances
                            .filter(dance => dance.whenDate >= moment().format("YYYY-MM-DD"))
                            .sort(function compare(a, b) {
                                var dateA = new Date(a.whenDate);
                                var dateB = new Date(b.whenDate);
                                return dateB - dateA;
                            })
                            .map(dance => {

                                return <section key={`dance-${dance.id}`}>

                                    <DanceEvent key={`dance-${dance.id}`}{...this.props} dance={dance} />
                                </section>

                            })
                        }
                    </div>
                </React.Fragment>

                :
                <React.Fragment>

                    <h2>Dances</h2>
                    {
                        this.props.detailedDances.sort(function compare(a, b) {
                            var dateA = new Date(a.whenDate);
                            var dateB = new Date(b.whenDate);
                            return dateB - dateA;
                        }).map(dance => {

                            return <section>

                                <DanceEvent key={`dance-${dance.id}`}{...this.props} dance={dance} powerUser={this.powerUser} />
                            </section>

                        })
                    }
                </React.Fragment>
        )
    }

}