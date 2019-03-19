import React, { Component } from "react";
import locationMgr from "../../modules/locationMgr"
export default class EditLocationForm extends Component {

  state = {
    id: 0,
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
  editThisLocation = evt => {
    evt.preventDefault()

    const updatedLocation = {
      id: this.state.id,
      nameLocation: this.state.nameLocation,
      street: this.state.street,
      city: this.state.city,
      zip: this.state.zip,
      stateId: this.state.stateId,
      locationNotes: this.state.locationNotes
    }
    this.props.updateLocation(updatedLocation)
      .then(() => {
        this.props.history.push("/locations")
      })

  }

  componentDidMount(location) {
    locationMgr.get(this.props.match.params.id)
      .then((location) => {
        this.setState({
          id: location.id,
          nameLocation: location.nameLocation,
          street: location.street,
          city: location.city,
          zip: location.zip,
          stateId: location.stateId,
          locationNotes: location.locationNotes
        })
      })
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
              value={this.state.nameLocation} />
          </div>

          <div className="form-group">
            <label htmlFor="street">Street Address</label>
            <input type="text"
              onChange={this.handleFieldChange}
              id="street"
              value={this.state.street} />
          </div>

          <div className="form-group">
            <label htmlFor="city"> City </label>
            <input type="text"
              onChange={this.handleFieldChange}
              id="city"
              value={this.state.city} />
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
              value={this.state.zip} />
          </div>

          <div className="form-group">
            <label htmlFor="locationNotes"> Notes About This Location </label>
            <input type="text"
              onChange={this.handleFieldChange}
              id="locationNotes"
              value={this.state.locationNotes} />
          </div>

          <button
            type="submt"
            onClick={this.editThisLocation}
            className="list-button">Save
              </button>

        </form>
      </React.Fragment>
    )
  }
}