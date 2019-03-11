import React, { Component } from "react";



export default class NewEventForm extends Component {

  state = {
    whenDate: "",
    dinnerTime: "",
    danceTime: "",
    endTime: "",
    cost:"",
    danceNotes:"",
    typeOfEventId: 0,
    locationId: 0
  }
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  }

}
