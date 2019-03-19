import React, { Component } from "react";

export default class NewEventForm extends Component {

  state = {
    whenDate: "",
    throughDate: "",
    dinnerTime: "19:00",
    danceTime: "19:30",
    endTime: "22:00",
    cost: "7.00",
    danceNotes: "",
    typeOfEventId: 0,
    locationId: 0,
    clubId: 1,
    eventSite: ""
  }
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  }
  makeNewEvent = evt => {

    evt.preventDefault()

    if (this.state.danceTime === "") {
      alert("When does it start?")
    }
    if(this.state.typeOfEventId === "") {
      alert("Please select a type of event.  Is it a class? A Workshop? What is it?")
    }
    if (this.state.clubId === "") {
      alert("Please select a host club")
    }
    if(this.state.whenDate === ""){
      alert("What day is it?")
    }
    else {
      const newEvent = {
        danceNotes: this.state.danceNotes,
        whenDate: this.state.whenDate,
        dinnerTime: this.state.dinnerTime.value,
        danceTime: this.state.danceTime,
        endTime: this.state.endTime,
        cost: this.state.cost,
        typeOfEventId: this.state.typeOfEventId,
        locationId: this.state.typeOfEventId,
        clubId: this.state.clubId,
        eventSite: this.state.eventSite,
        throughDate: this.state.throughDate
      }
      this.props.addDance(newEvent)
        .then(() => {
          this.props.history.push("/DanceList")
        })
    }
  }
  render() {
    return (
      <React.Fragment>
        <form className="form-newEvent">
          <div className="form-group">
            <label htmlFor="whenDate">What Day is it?</label>
            <input type="date"
              onChange={this.handleFieldChange}
              id="whenDate"
              required />
          </div>
          <div className="form-group">
            <label htmlFor="throughDate"> End Date (for multi-day events)</label>
            <input type="date"
              onChange={this.handleFieldChange}
              value={this.state.throughDate}
              id="throughDate"
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventURL"> Event URL (if applicable)</label>
            <input type="url"
              onChange={this.handleFieldChange}
              value={this.state.eventSite}
              id="eventSite" />
          </div>


          <div className="form-group">
            <label htmlFor="typeOfEventId">Type of Event</label>
            <select
              name="typeOfEvent"
              id="typeOfEventId"
              onChange={this.handleFieldChange}
              value={this.state.typeOfEventId}>
              <option required value="">Select Event/Dance Type</option>
              {this.props.typeOfEvents.map(typeE => (
                <option key={typeE.id} id={typeE.id} value={typeE.id}>{typeE.nameType}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <select
              name="location"
              id="locationId"
              onChange={this.handleFieldChange}
              required
              value={this.state.locationId}>
              <option value="">Select Location</option>
              {this.props.locations.map(loc => (
                <option key={loc.id} id={loc.id} value={loc.id}> {loc.nameLocation} </option>
              ))}
            </select>
          </div>


          <div className="form-group">
            <label htmlFor="club">Host Club</label>
            <select
              name="club"
              id="clubId"
              onChange={this.handleFieldChange}
              value={this.state.clubId}
              required>

              <option value="">Select club</option>
              {this.props.clubs.map(club => (
                <option key={club.id} id={club.id} value={club.id}> {club.clubName} </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="danceNotes">Need to know Notes about this dance:</label>
            <input type="text"
              onChange={this.handleFieldChange}
              id="danceNotes" />
          </div>
          <div className="form-group">
            <label htmlFor="dinnerTime">Dinner Time: </label>
            <input type="time"
              placeholder="19:00"
              onChange={this.handleFieldChange}
              defaultValue={this.state.dinnerTime}
              value={this.state.dinnerTime}
              id="dinnerTime" />
          </div>
          <div className="form-group">
            <label htmlFor="danceTime">Dance begins at: </label>
            <input type="time"
              placeholder="19:30"
              onChange={this.handleFieldChange}
              value={this.state.danceTime}
              defaultValue={this.state.danceTime}
              id="danceTime" />
          </div>
          <div className="form-group">
            <label htmlFor="endTime">Dance Until: </label>
            <input type="time"
              id="endTime"
              placeholder="22:00"
              onChange={this.handleFieldChange}
              value={this.state.endTime}
              defaultValue={this.state.endTime} />
          </div>
          <div className="form-group">
            <label htmlFor="cost"> Cost </label>
            <input type="number"
              min="0"
              step="any"
              onChange={this.handleFieldChange}
              id="cost" />
          </div>

          <button
            type="submt"
            onClick={this.makeNewEvent}
            className="list-button">Add Dance Event
              </button>

        </form>
      </React.Fragment>
    )
  }

}
