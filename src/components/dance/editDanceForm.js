import React, { Component } from "react";
export default class editDanceForm extends Component {

  state = {
    whenDate: "",
    dinnerTime: "",
    danceTime: "",
    endTime: "",
    cost: "",
    danceNotes: "",
    typeOfEventId: 0,
    locationId: 0
  }

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  }
  makeNewEvent = evt => {
    // evt.preventDefault()
    if (this.state.danceTime === "") {
      window.alert("When does it start?")
    }
    else {
      const newDance = {
        danceNotes: this.state.danceNotes,
        whenDate: this.state.whenDate,
        dinnerTime: this.state.dinnerTime,
        danceTime: this.state.danceTime,
        endTime: this.state.endTime,
        cost: this.state.cost,
        typeOfEventId: this.state.typeOfEventId,
        locationId: this.state.typeOfEventId
      }
      this.props.addDance(newDance)
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
              id="whenDate" />
          </div>
          <div className="form-group">
            <label htmlFor="dinnerTime">Dinner Time: </label>
            <input type="time"
              onChange={this.handleFieldChange}
              id="dinnerTime" />
          </div>
          <div className="form-group">
            <label htmlFor="danceTime">Dance begins at: </label>
            <input type="time"
              onChange={this.handleFieldChange}
              id="danceTime" />
          </div>
          <div className="form-group">
            <label htmlFor="endTime">Dance Until: </label>
            <input type="time"
              onChange={this.handleFieldChange}
              id="endTime" />
          </div>
          <div className="form-group">
            <label htmlFor="cost"> Cost </label>
            <input type="number"
              min="0"
              step="any"
              onChange={this.handleFieldChange}
              id="cost" />
          </div>
          <div className="form-group">
            <label htmlFor="locationId">Location</label>
          </div>

          <button
            type="submit"
            onClick={this.makeNewEvent}
            className="list-button">Add Dance Event
              </button>
        </form>
      </React.Fragment>
    )
  }

}
