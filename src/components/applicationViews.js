import React, {Component} from "react"
import { Route } from "react-router-dom"
import DanceEvent from "./dance/danceEvent"

export default class ApplicationViews extends Component {
    state={
        dances:[],
        users:[],
        clubs:[],
        typeOfUser:[],
        typeOfEvents:[]
    }

    aUserId = this.props.activeUserId()

    componentDidMount(){
        const newState={}
        console.log("component mounted.")

        //get everything from the managers.
        //then set state
    }
    render(){
        console.log(this.props.activeUser.username)
        return(
            <React.Fragment >
                <Route path="/DanceEvent" render={props => {
                    return<DanceEvent {...props}
                    dances={this.state.dances}/>
                }}/>
            </React.Fragment>
        )
    }
}