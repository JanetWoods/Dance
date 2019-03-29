import React, { Component } from "react"
import clubMgr from "../../modules/clubMgr";
import "../club/club.css"
export default class ClubCard extends Component {

    club = this.props.clubs.find(club =>
        club.id === parseInt(this.props.match.params.id))
    state = {
        club: {}
    }
    componentDidMount() {
        clubMgr.get(this.props.match.params.id)
            .then((club) => {
                this.setState({
                    club: club
                })
            })
    }
    render() {
        return (
            (sessionStorage.getItem("Type") === "PowerUser") ?

                <section >
                    <React.Fragment>
                        <div key={`club-${this.props.club.id}`} className="club-card">
                            <div className="gradient-border">

                                <p className="list-item">
                                    {this.props.club.clubName}
                                </p>
                                <br />
                                <p>

                                    <button className="list-button"
                                        type="button"
                                        onClick={() => {
                                            this.props.history.push(`/clubs/edit/${this.props.club.id}`)
                                        }} >
                                        Edit
                            </button>
                                </p>
                            </div>
                        </div>
                    </React.Fragment>
                </section>
                :
                <div className="gradient-border">
                    <section className="club-card">
                        {this.props.club.stateId}
                        <div key={`club-${this.props.club.id}`}>
                            <p>
                                {this.props.club.clubName}
                            </p>
                        </div>
                    </section>
                </div>
        )
    }

}