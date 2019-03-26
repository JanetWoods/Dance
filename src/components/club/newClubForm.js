import React, { Component } from "react";

export default class NewClubForm extends Component {

  state = {
    clubName: "",
    stateId: "",
    presidentId: "",
    vicePresidentId: "",
    secretaryId: "",
    otherOfficerId: "",
    regionId: "",
    usualLocationId: "",
  }
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  }
  makeNewClub = evt => {

    evt.preventDefault()
    if(this.state.clubName == null || this.state.clubName === ""){
        alert("What's the club's Name?")
    }
    else{
      const newClub = {
        clubName: this.state.clubName,
        stateId: this.state.stateId,
        presidentId: this.state.presidentId,
        vicePresidentId: this.state.vicePresidentId,
        secretaryId: this.state.secretaryId,
        otherOfficerId: this.state.otherOfficerId,
        regionId: this.state.regionId,
        usualLocationId: this.state.usualLocationId,
      }
      this.props.addClub(newClub)
        .then(() => {
          this.props.history.push("/clubs")
        })
    }
  }
  render() {
    return (
      <React.Fragment>
        <form className="form-newEvent">
          <div className="form-group">
            <label htmlFor="clubName">Name of Club</label>
            <input type="text"
              onChange={this.handleFieldChange}
              id="clubName"
              value={this.state.className}/>


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
            <label htmlFor="locationId">Usual Dance Location</label>
            <select
              name="loationId"
              id="locationId"
              onChange={this.handleFieldChange}
              value={this.state.locationId}>

              <option value="locationId">Select preferred dance location</option>
              {this.props.locations.map(location => (
                <option key={location.id} id={location.id} value={location.id}> {location.nameLocation} </option>
              ))}
            </select>
          </div>

          <button
            type="submt"
            onClick={this.makeNewClub}
            className="list-button">Add Club
              </button>

        </form>
      </React.Fragment>
    )
  }
}