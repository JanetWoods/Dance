import React, { Component } from "react"
import { Link } from 'react-router-dom'


export default class LocationCard extends Component {

    render() {
        return (
            (sessionStorage.getItem("Type") === "PowerUser") ?

                <div key={`location-${this.props.location.id}`} className="location-card">
                    <strong>{this.props.location.nameLocation}</strong>
                    {this.props.location.street} ,  {this.props.location.city},  {this.props.location.stateId}<br />
                    {this.props.location.locationNotes}<br />

                  <p>
                        <button className="list-button"
                        type="button"
                        onClick={() => {
                            this.props.history.push(`/locations/edit/${this.props.location.id}`)
                        }} >
                        Edit
                            </button>

                    <button className="list-button"
                        type="button"
                        onClick={() => {
                            this.props.deleteLocation(this.props.location.id)
                        }} >
                        Delete
                            </button>
                            </p>
                </div>
                :

                <div key={`location-${this.props.location.id}`} className="location-card">
                    <strong>{this.props.location.nameLocation}</strong>
                    {this.props.location.street} ,  {this.props.location.city},  {this.props.location.stateId}<br />
                    {this.props.location.locationNotes}<br />
                </div>
        )
    }
}

