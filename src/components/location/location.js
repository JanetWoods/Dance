import React, { Component } from "react"
import { Link } from 'react-router-dom'


export default class LocationCard extends Component {

    render() {
        return (
            (sessionStorage.getItem("Type") === "PowerUser") ?

                <div key={`location-${this.props.location.id}`} className="card">
                    <strong>{this.props.location.nameLocation}</strong>
                    {this.props.location.street} ,  {this.props.location.city},  {this.props.location.stateId}<br />
                    {this.props.location.locationNotes}<br />

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
                </div>
                :

                <div key={`location-${this.props.location.id}`} className="card">
                    <strong>{this.props.location.nameLocation}</strong>
                    {this.props.location.street} ,  {this.props.location.city},  {this.props.location.stateId}<br />
                    {this.props.location.locationNotes}<br />
                </div>
        )
    }
}

