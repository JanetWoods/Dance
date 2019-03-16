import React, { Component } from "react"
import clubMgr from "../../modules/clubMgr";

export default class ClubCard extends Component {
render(){
    return(
            <div key={`club-${this.props.club.id}`}>
        <React.Fragment>
        {this.props.club.clubName}


        </React.Fragment>
            </div>
    )
}

}