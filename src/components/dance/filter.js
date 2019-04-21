import React, { Component } from "react"
import moment from 'moment'
import { Link } from 'react-router-dom'
import DanceEvent from "./danceEvent"
import "../dance/dance.css"
import danceMgr from "../../modules/danceMgr";

export default class Filter extends Component {

    state = {
        typeOfEventId: "",
        locationId: "",
        typeOfEvents: [],
        dances: [],
        states: [],
        stateId: "",

    }
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }
    handleStateSelection = stateId => {
        this.filterByState(stateId);
    }

    powerUser = sessionStorage.getItem("Type")

    render() {
        return (
            (sessionStorage.getItem("Type") === "PowerUser") ?
                <React.Fragment>
                    <div className="top-container">
                        <p><Link className="dance-link" to="/dance/new">Add Event</Link></p>
                    </div>
                    <form className="form-filter">
                        <div>
                            <select
                                name="state"
                                id="state"
                                onChange={this.handleFieldChange}
                                value={this.state.state}>
                                <option required value="">Select State</option>
                                {this.props.states.map(sx => (
                                    <option key={sx.id} id={sx.id} value={sx.id}>{sx.stateLong}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <select
                                name="typeOfEvent"
                                id="typeOfEvent"
                                onChange={this.handleFieldChange}
                                value={this.state.typeOfE}>
                                <option required value="">Select Event/Dance Type</option>
                                {this.props.typeOfEvents.map(typeE => (
                                    <option key={typeE.id} id={typeE.id} value={typeE.id}>{typeE.nameType}</option>
                                ))}
                            </select>
                        </div>
                    </form>
                    {
                        this.props.detailedDances
                            .filter(dance => dance.location.stateId === this.state.state)
                            .filter(dance => dance.typeOfEventId === parseInt(this.state.typeOfEvent))
                            .filter(dance => dance.whenDate >= moment().format("YYYY-MM-DD"))
                            .sort(function compare(a, b) {
                                var dateA = new Date(a.whenDate);
                                var dateB = new Date(b.whenDate);
                                return dateA - dateB;
                            })
                            .map(dance => {
                                return <section key={`dance-${dance.id}`}>
                                    <DanceEvent key={`dance-${dance.id}`}{...this.props} dance={dance} />
                                </section>
                            })
                    }
                    {/* </div> */}
                </React.Fragment>
                :
                <React.Fragment>
                    <form className="form-filter">
                        <div>
                            <select
                                name="typeOfEvent"
                                id="typeOfEvent"
                                onChange={this.handleFieldChange}
                                value={this.state.typeOfEvent}>
                                <option required value="">Select Event/Dance Type</option>
                                {this.props.typeOfEvents.map(typeE => (
                                    <option key={typeE.id} id={typeE.id} value={typeE.id}>{typeE.nameType}</option>
                                ))}
                            </select>
                        </div>
                    </form>
                    {
                        this.props.detailedDances
                            .filter(dance => dance.typeOfEventId === parseInt(this.state.typeOfEvent))
                            .filter(dance => dance.whenDate >= moment().format("YYYY-MM-DD"))
                            .sort(function compare(a, b) {
                                var dateA = new Date(a.whenDate);
                                var dateB = new Date(b.whenDate);
                                return dateA - dateB;
                            })
                            .map(dance => {
                                return <section key={`dance-${dance.id}`}>
                                    <DanceEvent key={`dance-${dance.id}`}{...this.props} dance={dance} />
                                </section>
                            })
                    }
                </React.Fragment>
        )
    }
}
