import React, { Component } from "react"
import typeOfEventMgr from "../../modules/clubMgr";
import "../club/club.css"
export default class ClubCard extends Component {

    typeOfEvent = this.props.typeOfEvents.find(typeOfEvent =>
        typeOfEvent.id === parseInt(this.props.match.params.id))
    state = {
        typeOfEvent: {}
    }
    componentDidMount() {
        typeOfEventMgr.get(this.props.match.params.id)
            .then((typeOfEvent) => {
                this.setState({
                    typeOfEvent: typeOfEvent
                })
            })
    }
    render() {
        return (
            (sessionStorage.getItem("Type") === "PowerUser") ?

                <section >
                    <div key={`typeOfEvent-${this.props.typeOfEvent.id}`} className="typeOfEvent-card">
                        <React.Fragment>
                            <div className="gradient-border">

                                <p className="list-item">
                                    {this.props.typeOfEvent.typeOfEventName}
                                </p>

                                <p>
                                    <a href={`${this.props.typeOfEvent.typeOfEventSite}`} target="new">{this.props.typeOfEvent.typeOfEventSite}</a>
                                </p>

                                <p>

                                    <button className="list-button"
                                        type="button"
                                        onClick={() => {
                                            this.props.history.push(`/typeOfEvents/edit/${this.props.typeOfEvent.id}`)
                                        }} >
                                        Edit
                            </button>
                                    <button className="list-button"
                                        type="button"
                                        onClick={() => {
                                            this.props.deletetypeOfEvent(this.props.typeOfEvent.id)
                                        }} >
                                        Delete
                            </button>
                                </p>
                            </div>
                        </React.Fragment>
                    </div>
                </section>
                :
                <section className="typeOfEvent-card">
                    <div className="gradient-border">
                        {this.props.typeOfEvent.stateId}
                        <div key={`typeOfEvent-${this.props.typeOfEvent.id}`}>
                            <p>
                                {this.props.typeOfEvent.typeOfEventName}
                            </p>

                            <p>
                                <a href={`${this.props.typeOfEvent.typeOfEventSite}`} target="new">{this.props.typeOfEvent.typeOfEventSite}</a>
                            </p>

                        </div>
                    </div>
                </section>
        )
    }

}