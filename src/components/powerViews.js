import React, {Component} from "react"
import { Route } from "react-router-dom"
import DanceEvent from "./dance/danceEvent"
import danceMgr from "../modules/danceMgr"

export default class PowerViews extends Component {
    state={
        dances:[],
        users:[],
        clubs:[],
        typeOfUser:[],
        typeOfEvents:[]
    }

    aUserId = this.props.activeUserId()

    addDance = dance => {
        return danceMgr.addTask(dance)
          .then(() => {
            return danceMgr.getAll()
          })
          .then(tasks =>
            this.setState({
              tasks: tasks
            }))
      }
    componentDidMount(){
        const newState = {}
        console.log("component mounted.")

        //get everything from the managers.
        //then set state
        danceMgr.getAll()
        .then((dances)=>{newState.dances = dances})
        .then(()=> this.setState(newState))
    }
    render(){
        console.log(this.props.activeUser.username)
        return(
            <React.Fragment >
                <Route exactPath="/DanceEvents" render={props => {
                    return<DanceEvent {...props}
                    dances={this.state.dances}/>
                }}/>
            </React.Fragment>
        )
    }
}