import React, { Component } from "react"
import DanceEvent from "./danceEvent"
import { Link } from 'react-router-dom'

export default class ListByType extends Component {

    // powerUser = sessionStorage.getItem("Type")
    render() {
        return (
            <React.Fragment>
                <Link className="nav-link" to="/dance/new">Add Event</Link>


                <h2>Dances</h2>
                <p>(Note: Club dances are free for club members dancing at their home club.)</p>


                {this.props.dances.map(dance =>
                    <React.Fragment>

                        <div key={dance.typeOfEventId}>

                            {/* <h2>{typeofEvent.nameType}</h2> */}
                                {/* .map( */}
                                    < DanceEvent key={`dance-${dance.id}`}{...this.props} dance={dance} powerUser={this.powerUser} />
                                {/* ) */}

                        </div>
                    </React.Fragment>

                )}
            </React.Fragment>
        )
    }
}