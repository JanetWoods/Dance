import React, { Component } from "react"
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
            <div className="gradient-border">
             <h3>  {this.state.location.nameLocation}   </h3>
             <br/>
               <p className="list-item"> {this.state.location.street}</p>
              <br/>

            <p className="list-item">   {this.state.location.city},  {this.state.location.stateId}, {this.state.location.zip}</p>
               <br/>
                <p className="list-item">Note:  {this.state.location.locationNotes}</p>

            </div>
            </div>


        )
    }
}

