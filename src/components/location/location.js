import React, { Component } from "react"
import "./location.css"


export default class LocationCard extends Component {

    render() {
        return (
            (sessionStorage.getItem("Type") === "PowerUser") ?
                <div key={`location-${this.props.location.id}`} className="location-card">
                <div className="gradient-border">
                    <p className="list-button-row">
                        <strong>{this.props.location.nameLocation}</strong>
                    </p>
                    {this.props.location.street} ,  {this.props.location.city},  {this.props.location.stateId}<br />
                    {this.props.location.locationNotes}<br />
                    <br />

                    <p>
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
                :
                <div key={`location-${this.props.location.id}`} className="location-card">
                    <p className="list-button-row">
                        <strong>{this.props.location.nameLocation}</strong>
                    </p>
                    {this.props.location.street} ,  {this.props.location.city},  {this.props.location.stateId}<br />
                    {this.props.location.locationNotes}<br />
                </div>

        )
    }
}

