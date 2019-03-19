import React, { Component } from "react"
import clubMgr from "../../modules/clubMgr";

export default class ClubCard extends Component {

    club=this.props.clubs.find(club =>
        club.id === parseInt(this.props.match.params.id))
        state={
            club:{}
        }
        componentDidMount(){
            clubMgr.get(this.props.match.params.id)
            .then((club)=> {
                this.setState({
                    club: club
                })
            })
        }
render(){
    return(
        (sessionStorage.getItem("Type") === "PowerUser") ?
        <div key={`club-${this.props.club.id}`}>

        <React.Fragment>
        {this.props.club.stateId} :   {this.props.club.clubName}

        <button className="list-button"
                                type="button"
                                onClick={() => {
                                    this.props.history.push(`/clubs/edit/${this.props.club.id}`)
                                }} >
                                Edit
                            </button>
        </React.Fragment>
            </div>
            :
            <div key={`club-${this.props.club.id}`}>
            <React.Fragment>
            {this.props.club.stateId} :   {this.props.club.clubName}


            </React.Fragment>
                </div>
    )
}

}