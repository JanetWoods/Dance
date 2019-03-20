import React, { Component } from "react"
import DanceEvent from "./danceEvent"
import { Link } from 'react-router-dom'
import DanceList from '../dance/danceList'

export default class FilteredDances extends Component {

    constructor(props) {
        super(props);
        this.state = {
            states:this.props.states,
            filtered: [],
            dances:this.props.dances,
            stateId: "KY"
        }
    }
    componentDidMount() {
        this.setState({
            filtered: this.props.states,
            states: this.props.states
        })
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.states
        })
    }
    handleFieldChange = evt => {
        //    let currentList=[];
        //    let newList=[];
        //     if(evt.target.value !== ""){
        //         currentList = this.props.states
        //     }else{
        //         return stateId === filter
        //         newList = currentList.filter(stateId =>
        //             filter=stateId)
        //             filtered: newList;
        //         }}
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }
    render() {
        return (
            <section>

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


                <button
                    type="submt"
                    onClick={this.SearchThis}
                    className="list-button">Save
        </button>

{/*
                <React.Fragment>
                    <DanceEvent key={`dance-${dance.id}`}{...this.props} dance={dance} powerUser={this.powerUser} />
                </React.Fragment> */}
            </section>

        )
    }
}






