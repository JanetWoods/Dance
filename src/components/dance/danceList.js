import React, { Component } from "react"
import DanceEvent from "./danceEvent"
import { Link } from 'react-router-dom'
import "./dance.css"
import moment from 'moment'
export default class FilterDances extends Component {
    powerUser = sessionStorage.getItem("Type")

    render() {
        return (
            (sessionStorage.getItem("Type") === "PowerUser") ?

                <React.Fragment>
                    <div className="top-container">
                        <h4><Link className="dance-link" to="/dance/new">Add Event</Link></h4>
                    </div>

                    <h2 className="list-title">Dances</h2>
                    {/* <div className="container"> */}
                        {
                            this.props.detailedDances
                                .filter(dance => dance.whenDate >= moment().format("YYYY-MM-DD"))
                                .sort(function compare(a, b) {
                                    var dateA = new Date(a.whenDate);
                                    var dateB = new Date(b.whenDate);
                                    return dateA - dateB;
                                })
                                .map(dance => {
                                    return <section>
                                        <DanceEvent key={`dance-${dance.id}`}{...this.props} dance={dance} />
                                    </section>
                                })
                        }
                    {/* </div> */}
                </React.Fragment>
                :
                <React.Fragment>
                    <h2 className="list-title">Dances</h2>
                    {
                        this.props.detailedDances
                        .filter(dance => dance.whenDate >= moment().format("YYYY-MM-DD"))
                        .sort(function compare(a, b) {
                            var dateA = new Date(a.whenDate);
                            var dateB = new Date(b.whenDate);
                            return dateB - dateA;
                        }).map(dance => {
                            return <section>
                                <DanceEvent key={`dance-${dance.id}`}{...this.props} dance={dance}/>
                            </section>
                        })
                    }
                </React.Fragment>
        )
    }

}