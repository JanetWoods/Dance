import React, { Component } from "react";
import danceMgr from "../../modules/danceMgr";

export default class NewEventForm extends Component {

  state = {
    id:"",
    whenDate: "",
    dinnerTime: "19:00",
    danceTime: "19:30",
    endTime: "22:00",
    cost: "7.00",
    danceNotes: "",
    typeOfEventId: 0,
    locationId: 0
  }
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  }
  editThisEvent = evt => {

    evt.preventDefault()

    if (this.state.danceTime == null) {
      alert("When does it start?")
    }
    else {
      const updatedEvent = {
        id:this.state.id,
        danceNotes: this.state.danceNotes,
        whenDate: this.state.whenDate,
        dinnerTime: this.state.dinnerTime.value,
        danceTime: this.state.danceTime,
        endTime: this.state.endTime,
        cost: this.state.cost,
        typeOfEventId: this.state.typeOfEventId,
        locationId: this.state.typeOfEventId
      }
      this.props.editThisEvent(updatedEvent)
        .then(() => {
          this.props.history.push("/DanceList")
        })
    }
  }

  componentDidMount(dance){
    danceMgr.getDance(this.props.match.params.id)
    .then((dance)=>{
      this.setState({
        id:dance.id,
        danceNotes: dance.danceNotes,
        whenDate: dance.whenDate,
        dinnerTime: dance.dinnerTime,
        danceTime: dance.danceTime,
        endTime: dance.endTime,
        cost: dance.cost,
        typeOfEventId: dance.typeOfEventId,
        locationId: dance.typeOfEventId
      })
    })
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
            <label htmlFor="typeOfEventId">Type of Event</label>
            <select
              name="typeOfEvent"
              id="typeOfEventId"
              onChange={this.handleFieldChange}
              value={this.state.typeOfEventId}>
              <option value="">Select Event/Dance Type</option>
              {this.props.typesOfEvents.map(typeE => (
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
              value={this.state.locationId}>

              <option value="">Select Location</option>
              {this.props.locations.map(loc => (
                <option key={loc.id} id={loc.id} value={loc.id}> {loc.nameLocation} </option>
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
