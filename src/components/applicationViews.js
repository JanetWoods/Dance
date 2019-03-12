import React, {Component} from "react"
import { Route } from "react-router-dom"
import danceMgr from "../modules/danceMgr"
import DanceList from "./dance/danceList"
import NewEventForm from "./dance/newEventForm"
import EditDanceForm from "./dance/editDanceForm"

export default class ApplicationViews extends Component {
    state={
        dances:[],
        users:[],
        clubs:[],
        typeOfUser:[],
        typesOfEvents:[],
        locations:[],
        states:[]
    }

    aUserId = this.props.activeUser.id

    addEvent = (event)=>{
        return danceMgr.addDance(event)
        .then(()=>danceMgr.getAll())
        .then(dances => this.setState({
            dances:dances
        }))
    }

    componentDidMount(){
        const newState = {}
        console.log("component mounted, Application View.")

        //get everything from the managers.
        //then set state
        danceMgr.getAll()
        .then(dances => newState.dances = dances)
        .then(()=> this.setState(newState))
        //then users:[],
        // then clubs:[],
        // then typeOfUser:[],
        // then typesOfEvents:[],
        // then locations:[],
        // then states:[]
}

    render(){
        console.log("application View to you: ", this.props.activeUser.username)
        return(
            <React.Fragment >
                <Route exact path="/" render={props => {
                    return <DanceList {...props}
                    dances={this.state.dances}/>
                }}/>
                <Route exact path="/dance/new" render={props => {
                    return <NewEventForm {...props}
                    dances={this.state.dances}
                    addEvent={this.addEvent}/>
                }}/>
                <Route exact path="/editDance" render={props => {
                    return <EditDanceForm {...props}
                    dance={this.state.dance}
                    editDance={this.editDance}/>
                }}/>
                <Route exact path="/DanceList" render={props => {
                    return <DanceList
                    dances={this.state.dances}
                    {...props}/>
                }}/>
            </React.Fragment>
        )
    }
}