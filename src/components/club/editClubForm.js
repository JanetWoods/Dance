import React, { Component } from "react";
import clubMgr from "../../modules/clubMgr"
import "./club.css"
export default class EditClubForm extends Component {

  state = {
      id: 0,
    clubName: "",
    stateId: "",
    presidentId: 1,
    vicePresidentId: 1,
    secretaryId: 1,
    otherOfficerId: 1,
    regionId: 1,
    usualLocationId: 1,
    clubeSite:""
  }
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  }
  makeUpdatedClub = evt => {

    evt.preventDefault()
    if(this.state.clubName == null || this.state.clubName === ""){
        alert("What's the club's Name?")
    }
    else{
      const updatedClub = {
        id: parseInt(this.state.id),
        clubName: this.state.clubName,
        stateId: this.state.stateId,
        presidentId: parseInt(this.state.presidentId),
        vicePresidentId: parseInt(this.state.vicePresidentId),
        secretaryId: parseInt(this.state.secretaryId),
        otherOfficerId: parseInt(this.state.otherOfficerId),
        regionId: parseInt(this.state.regionId),
        usualLocationId: parseInt(this.state.usualLocationId),
      }
      this.props.updateClub(updatedClub)
        .then(() => {
          this.props.history.push("/clubs")
        })
    }
  }
  componentDidMount(club){
      clubMgr.get(this.props.match.params.id)
      .then((club)=> {
          this.setState({
            id: parseInt(club.id),
            clubName: club.clubName,
            stateId: club.stateId,
            presidentId: parseInt(club.presidentId),
            vicePresidentId: parseInt(club.vicePresidentId),
            secretaryId: parseInt(club.secretaryId),
            otherOfficerId: parseInt(club.otherOfficerId),
            regionId: parseInt(club.regionId),
            usualLocationId: parseInt(club.usualLocationId),
          })
      })
  }
  render() {
    return (
      <React.Fragment>
        <form className="form-container">
        <div className="gradient-border">
          <div className="form-group">
            <label htmlFor="clubName">Name of Club</label>
            <input type="text"
              onChange={this.handleFieldChange}
              id="clubName"
              value={this.state.clubName}/>
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

              <option value="locationId"> Preferred dance location</option>
              {this.props.locations.map(location => (
                <option key={location.id} id={location.id} value={location.id}> {location.nameLocation} </option>
                ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="clubSite">Website</label>
            <input type="url"
              onChange={this.handleFieldChange}
              id="clubSite"
              value={this.state.clubSite}/>
          </div>

          <button
            type="submt"
            onClick={this.makeUpdatedClub}
            className="list-button">Save
              </button>
            </div>
        </form>
      </React.Fragment>
    )
  }
}