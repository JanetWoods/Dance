import React, { Component } from "react"
import DanceEvent from "./danceEvent"
export default class DanceList extends Component {

    render(){
        return(
            <React.Fragment>
                <h2>Dances</h2>
                {
                    this.props.dances.map(dance => {
                        return <DanceEvent key={`dance-${dance.id}`} dance={dance}/>
                    })
                }
            </React.Fragment>
        )
    }

}