import React, { Component } from "react"
import "./location.css"


export default class LocationCard extends Component {

    render() {
        return (
            (sessionStorage.getItem("Type") === "PowerUser") ?
            <React.Fragment>

                <div  className="location-card">
                <div className="gradient-border">
                    <p className="list-button-row">
                        <strong>{this.props.location.nameLocation}</strong>
                    </p>
                    <p className="list-button-row">
                    {this.props.location.street}
                    </p>
                    <p className="list-button-row">
                    {this.props.location.city},  {this.props.location.stateId}
                    </p>
                    <p className="list-button-row">
                     Note: {`     ${this.props.location.locationNotes} `}<br />
                    </p>

                    <p className="list-button-row">
                        <button className="list-button"
                            onClick={() => {
                                this.props.history.push(`/locations/edit/${this.props.location.id}`)
                            }} >
                            Edit
                            </button>

                        <button className="list-button"
                            onClick={() => {
                                this.props.deleteLocation(this.props.location.id)
                            }} >
                            Delete
                            </button>
                    </p>
                </div>
                </div>
                            </React.Fragment>
                :
                <div key={`location-${this.props.location.id}`} className="location-card">
                   <div className="gradient-border">
                    <p className="list-button-row">
                        <strong>{this.props.location.nameLocation}</strong>
                    </p>
                    <p className="list-button-row">
                    {this.props.location.street}
                    </p>
                    <p className="list-button-row">
                      {this.props.location.city},  {this.props.location.stateId}<br />
                   </p>
                    <p className="list-button-row">
                    Note: {this.props.location.locationNotes}<br />
                   </p>
                </div>
                </div>


        )
    }
}

