import React, { Component } from "react"
import { Link } from 'react-router-dom'
import "./dance.css"
import danceMgr from "../../modules/danceMgr"

export default class DanceDetail extends Component {
    powerUser = sessionStorage.getItem("Type")
    state = {
        id: "",
        whenDate: "",
        throughDate: "",
        dinnerTime: "",
        danceTime: "",
        endTime: "",
        cost: "",
        danceNotes: "",
        typeOfEventId: 0,
        locationId: 0,
        eventSite: "",
        typeOfEvent: {},
        location: {},
        club: {}
    }
    componentDidMount(dance) {
        danceMgr.getTHISDanceDetail(this.props.match.params.id)
            .then((dance) => {
                this.setState(dance)
            })
            let now = new Date()
    }
    render() {

        return (
            <React.Fragment >
                <div className="card-detailed">

                    <p className="list-title"> <strong>{this.state.typeOfEvent.nameType}</strong></p>
                    <p className="list-item">  When:{"  "} <strong> {"  "} {`${this.state.whenDate}`}</strong> </p>
                    <p className="list-item">Through:{" "} {this.state.throughDate}  (if a multi-day event)</p>
                    <p className="list-item">Dinner:{" "}  {this.state.dinnerTime}</p>
                    <p className="list-item">Dance:{" "}  {this.state.danceTime}</p>

                    <p className="list-item">Host Club:{" "}   {this.state.club.clubName}</p>

                    <p className="list-item">Where:  <strong>{" "}{this.state.location.nameLocation} </strong></p>
                    <p className="list-item">{this.state.location.street}, {" "}{this.state.location.city},{" "} {this.state.location.stateId}{" "} {this.state.location.zip}</p>


                    <p className="list-item"><a list-item href={`${this.state.eventSite}`} target="new">{"  "}{this.state.eventSite}
                             </a></p>

                    <p className="list-item">  Note: {" "} {this.state.danceNotes}</p>
                    <p className="list-item"> ${this.state.cost}{"  "} <br/></p>
                    <p className="list-item">(Note: Club dances are free for club members dancing at their home club.)</p>

                </div>
            </React.Fragment>


        )
    }
}

