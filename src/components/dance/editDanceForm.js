import React, { Component } from "react";
import danceMgr from "../../modules/danceMgr";

export default class NewEventForm extends Component {

  state = {
    id: 0,
    whenDate: "",
    throughDate: "",
    dinnerTime: "",
    danceTime: "",
    endTime: "",
    cost: " ",
    danceNotes: "",
    typeOfEventId: 0,
    locationId: 0,
    eventSite:""
  }
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  }
  editThisEvent = evt => {
    evt.preventDefault()

      const updatedEvent = {
        id: parseInt(this.state.id),
        danceNotes: this.state.danceNotes,
        whenDate: this.state.whenDate,
        throughDate: this.state.throughDate,
        dinnerTime: this.state.dinnerTime,
        danceTime: this.state.danceTime,
        endTime: this.state.endTime,
        cost: this.state.cost,
        typeOfEventId: parseInt(this.state.typeOfEventId),
        locationId: parseInt(this.state.locationId),
        clubId: parseInt(this.state.clubId),
        eventSite: this.state.eventSite
      }
      this.props.updateDance(updatedEvent)
        .then(() => {
          this.props.history.push("/")
        })

  }

  componentDidMount(dance) {
    danceMgr.getDance(this.props.match.params.id)
      .then((dance) => {
        this.setState({
          id: parseInt(dance.id),
          danceNotes: dance.danceNotes,
          whenDate: dance.whenDate,
          dinnerTime: dance.dinnerTime,
          danceTime: dance.danceTime,
          endTime: dance.endTime,
          cost: dance.cost,
          typeOfEventId: dance.typeOfEventId,
          locationId: dance.locationId,
          clubId: dance.clubId
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
              value={this.state.whenDate}
              id="whenDate"
               />
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
              <option value="">Select Event/Dance Type</option>
              {this.props.typeOfEvents.map(typeE => (
                <option key={typeE.id} id={typeE.id} value={typeE.id}>{typeE.nameType}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="club">Host Club</label>
            <select
              name="club"
              id="clubId"
              onChange={this.handleFieldChange}
              value={this.state.clubId}>

              <option value="">Select club</option>
              {this.props.clubs.map(club => (
                <option key={club.id} id={club.id} value={club.id}> {club.clubName} </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="locationId">Location</label>
            <select
              name="locationId"
              id="locationId"
              onChange={this.handleFieldChange}
              value={this.state.locationId}
              defaultValue={this.state.locationId}>

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
              value={this.state.danceNotes}
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
            <label htmlFor="cost"> Cost $</label>
            <input type="number"
              min="0"
              step="any"
              onChange={this.handleFieldChange}
              value={this.state.cost}
              id="cost" />
          </div>

          <button
            type="submt"
            onClick={this.editThisEvent}
            className="list-button">Save</button>

        </form>
      </React.Fragment>
    )
  }

}
