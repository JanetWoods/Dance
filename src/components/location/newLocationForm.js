import React, { Component } from "react";

export default class NewLocationForm extends Component {

  state = {
    nameLocation: "",
    street: "",
    city: "",
    zip: "",
    stateId: "",
    locationNotes: ""
  }
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  }
  makeNewLocation = evt => {

    evt.preventDefault()
    if(this.state.nameLocation === " "){
        alert("What do people call that place?")
    }
    else{
      const newLocation = {
        nameLocation: this.state.nameLocation,
        street: this.state.street,
        city: this.state.city,
        zip: this.state.zip,
        stateId: this.state.stateId,
        zip: this.state.zip,
        locationNotes: this.state.locationNotes
      }
      this.props.addLocation(newLocation)
        .then(() => {
          this.props.history.push("/")
        })
    }
  }
  render() {
    return (
      <React.Fragment>
        <form className="form-newEvent">
          <div className="form-group">
            <label htmlFor="nameLocation">Name of Location</label>
            <input type="text"
              onChange={this.handleFieldChange}
              id="nameLocation"
              value={this.state.nameLocation}/>
              </div>

          <div className="form-group">
            <label htmlFor="street">Street Address</label>
            <input type="text"
              onChange={this.handleFieldChange}
              id="street"
              value={this.state.street}/>
            </div>

          <div className="form-group">
            <label htmlFor="city"> City </label>
            <input type="text"
              onChange={this.handleFieldChange}
              id="city"
              value={this.state.city}/>
          </div>

          <div className="form-group">
            <label htmlFor="stateId">State</label>
            <select
              name="stateId"
              id="stateId"
              onChange={this.handleFieldChange}
              value={this.state.stateId}>
              <option value="stateId">Select state</option>
              {this.props.states.map(state => (
                <option key={state.id} id={state.id} value={state.id}>{state.stateLong}</option>
              ))}
            </select>
          </div>


          <div className="form-group">
            <label htmlFor="zip"> Zip </label>
            <input type="text"
              onChange={this.handleFieldChange}
              id="zip"
              value={this.state.zip}/>
          </div>

          <div className="form-group">
            <label htmlFor="locationNotes"> Notes About This Location </label>
            <input type="text"
              onChange={this.handleFieldChange}
              id="locationNotes"
              value={this.state.locationNotes}/>
            </div>

          <button
            type="submt"
            onClick={this.makeNewLocation}
            className="list-button">Add
              </button>

        </form>
      </React.Fragment>
    )
  }
}