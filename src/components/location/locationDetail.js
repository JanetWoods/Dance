import React, { Component } from "react"
import { Link } from 'react-router-dom'
import locationMgr from "../../modules/locationMgr"
import "./location.css"

export default class LocationDetail extends Component {

     location = this.props.locations.find(location =>
        location.id === parseInt(this.props.match.params.id))
        state={
            location:{}
        }

        componentDidMount() {

            locationMgr.get(this.props.match.params.id)
            .then((location)=>{
                this.setState({
                  location: location
                })
            })
        }
    render() {

        return (

            <div key={`location-${this.state.location.id}`} className="location-card">
                <strong>{this.state.location.nameLocation}</strong>
                {this.state.location.street} , ---- {this.state.location.city},  {this.state.location.stateId}<br/>

                 {this.state.location.locationNotes}<br/>


            </div>


        )
    }
}

