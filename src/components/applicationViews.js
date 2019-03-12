import React, {Component} from "react"
import { Route } from "react-router-dom"
import danceMgr from "../modules/danceMgr"
import DanceList from "./dance/danceList"
export default class ApplicationViews extends Component {
    state={
        dances:[],
        users:[],
        clubs:[],
        typeOfUser:[],
        typeOfEvents:[]
    }

    aUserId = this.props.activeUser.id

    componentDidMount(){
        const newState = {}
        console.log("component mounted, Application View.")

        //get everything from the managers.
        //then set state
        danceMgr.getAll()
        .then(dances => newState.dances = dances)
        .then(()=> this.setState(newState))
}

    render(){
        console.log("application View to you: ", this.props.activeUser.username)
        return(
            <React.Fragment >
                <Route exact path="/" render={props => {
                    return <DanceList {...props}
                    dances={this.state.dances}/>
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