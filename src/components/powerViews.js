import React, {Component} from "react"
import { Route } from "react-router-dom"
import DanceEvent from "./dance/danceEvent"
import danceMgr from "../modules/danceMgr"
import DanceList from "./dance/danceList"
export default class PowerViews extends Component {
    state={
        dances:[],
        users:[],
        clubs:[],
        typeOfUser:[],
        typeOfEvents:[]
    }

    aUserId = this.props.activeUser.id

    addDance = dance => {
        return danceMgr.addTask(dance)
          .then(() => {
            return danceMgr.getAll()
          })
          .then(dances =>
            this.setState({
              dances: dances
            }))
      }
      getSpecificDance = (id) => {
        return danceMgr.get(id)
          .then(dance =>
            this.setState({
              dance: dance
            })
          )
      }

      componentDidMount(){
        const newState = {}
        console.log("component mounted, Power View.")

        //get everything from the managers.
        //then set state
        danceMgr.getAll()
        .then(dances => newState.dances = dances)
        .then(()=> this.setState(newState))
}

    render(){
        console.log("PowerView for you, ", this.props.activeUser.username)
        return(
            <React.Fragment >
                {/* <Route exact Path="/DanceList" render={props => {
                    return<DanceList {...props}
                    dances={this.state.dances}/>
                }}/> */}

            </React.Fragment>
        )
    }
}