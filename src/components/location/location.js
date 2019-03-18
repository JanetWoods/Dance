import React, { Component } from "react"
import { Link } from 'react-router-dom'


export default class LocationCard extends Component {

    render() {
        return (

            <div key={`location-${this.props.location.id}`} className="card">
                <strong>{this.props.location.nameLocation}</strong>
                {this.props.location.street} ,  {this.props.location.city},  {this.props.location.stateId}<br/>
                 {this.props.location.locationNotes}<br/>
            </div>


        )
    }
}

