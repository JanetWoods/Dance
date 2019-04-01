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
                        <div key={`club-${this.props.club.id}`} className="club-card">
                            <React.Fragment>
                            <div className="gradient-border">

                                <p className="list-item">
                                    {this.props.club.clubName}
                                </p>

                                 <p>
                                    <a href={`${this.props.club.clubSite}`} target="new">{this.props.club.clubSite}</a>
                                  </p>

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
                    </React.Fragment>
                        </div>
                </section>
                :
                    <section className="club-card">
                <div className="gradient-border">
                        {this.props.club.stateId}
                        <div key={`club-${this.props.club.id}`}>
                            <p>
                                {this.props.club.clubName}
                            </p>

                          <p>
                                <a href={`${this.props.club.clubSite}`} target="new">{this.props.club.clubSite}</a>
                              </p>

                        </div>
                </div>
                    </section>
        )
    }

}