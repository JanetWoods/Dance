import React, { Component } from "react"
import { Link } from 'react-router-dom'
import "../dance/dance.css"

export default class DanceEvent extends Component {
    powerUser = sessionStorage.getItem("Type")

    render() {
        return (
            (sessionStorage.getItem("Type") === "PowerUser") ?

                    <React.Fragment >
                <div key={`dance-${this.props.dance.id}`} className="card-dance">
                <div className="gradient-border" >
                        <p > <strong>{this.props.dance.typeOfEvent.nameType}</strong></p>
                    <p> <strong className="list-item"> {this.props.dance.whenDate} </strong> </p>
                            {/* <br /> */}
                           <p><strong> <span><Link to={`/locations/${this.props.dance.location.id}`} {...this.props}>                                {this.props.dance.location.city}{",   "}     {this.props.dance.location.stateId} </Link></span>


                                <a href={`${this.props.dance.eventSite}`} target="new">{this.props.dance.eventSite}</a>
                            </strong>
                        </p>
                        <p className="list-button-row">
                        <button className="list-button"
                                type="button"
                                onClick={() => {
                                    this.props.history.push(`/dances/detail/${this.props.dance.id}`)
                                }} >
                                More
                            </button>

                            <button className="list-button"
                                type="button"
                                onClick={() => {
                                    this.props.history.push(`/dances/edit/${this.props.dance.id}`)
                                }} >
                                Edit
                            </button>

                            <button className="list-button"
                                type="button"
                                onClick={() => {
                                    this.props.deleteDance(this.props.dance.id)
                                }} >
                                Delete
                            </button>
                        </p>
                    </div>
                    </div>
                    </React.Fragment>
                :
                <div key={`dance-${this.props.dance.id}`} className="card-dance">
                <div className="gradient-border" >
                    <React.Fragment>
                        <p className="list-item"> <strong>{this.props.dance.typeOfEvent.nameType}</strong>,
                        <strong className="list-item"> {this.props.dance.whenDate} </strong>

                            <br />
                            </p>

                        <p className="list-item">

                            <span><Link to={`/locations/${this.props.dance.location.id}`} {...this.props}>
                                {this.props.dance.location.city}{",  "} {this.props.dance.location.stateId} </Link></span>

                            <a href={`${this.props.dance.eventSite}`} target="new">{this.props.dance.eventSite}
                            </a>
                            </p>
                            <p className="list-button-row">
                            <button className="list-button"
                                type="button"
                                onClick={() => {
                                    this.props.history.push(`/dances/detail/${this.props.dance.id}`)
                                }} >
                                More
                            </button>
                                </p>
                    </React.Fragment >
                </div>
                 </div>
        )
    }
}

