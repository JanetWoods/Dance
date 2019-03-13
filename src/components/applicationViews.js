import React, { Component } from "react"
import { Route } from "react-router-dom"
import danceMgr from "../modules/danceMgr"
import DanceList from "./dance/danceList"
import NewEventForm from "./dance/newEventForm"
import EditDanceForm from "./dance/editDanceForm"
import clubMgr from "../modules/clubMgr"
import eventTypeMgr from "../modules/eventTypeMgr"
import locationMgr from "../modules/locationMgr"
import regionMgr from "../modules/regionMgr"
import stateMgr from "../modules/stateMgr"
import typeOfUserMgr from "../modules/typeOfUserMgr"
import userMgr from "../modules/userMgr"

export default class ApplicationViews extends Component {
    state = {
        dances: [],
        users: [],
        clubs: [],
        typeOfUser: [],
        typesOfEvents: [],
        locations: [],
        states: []
    }

    aUserId = this.props.activeUser.id
    userPower = this.props.userPower

    addDance = (event) => {
        return danceMgr.addDance(event)
            .then(() => {
                return danceMgr.getAll()
            })
            .then(dances => this.setState({
                dances: dances
            }))
    }
    deleteDance = (danceId) => {
        return danceMgr.deleteDance(danceId)
            .then(() => {
                return danceMgr.getAll()
            })
            .then(dances => this.setState({
                dances: dances
            }))
    }
    retrieveDance = (danceId) => {
        return danceMgr.getdance(danceId)
            .then((dance) =>
                this.setState({
                    dance: dance
                })
            )
    }
    updateDance = (dance) => {
        return danceMgr.editDance(dance)
            .then(() => {
                return danceMgr.getAll()
            })
            .then(dances => this.setState({
                dances: dances
            }))
    }
    addClub = (club) => {
        return clubMgr.updateClub(club)
            .then(() => {
                return clubMgr.getAll()
                    .then(clubs => this.setState({
                        clubs: clubs
                    }))
            })
    }
    retrieveClub = (clubId) => {
        return clubMgr.getclub(clubId)
            .then((club) =>
                this.setState({
                    club: club
                })
            )
    }
    updateClub = (club) => {
        return clubMgr.editclub(club)
            .then(() => {
                return clubMgr.getAll()
            })
            .then(clubs => this.setState({
                clubs: clubs
            }))
    }
    deleteClub = (clubId) => {
        return clubMgr.deleteclub(clubId)
            .then(() => {
                return clubMgr.getAll()
            })
            .then(clubs => this.setState({
                clubs: clubs
            }))
    }
    addLocation = (location) => {
        return locationMgr.updatelocation(location)
            .then(() => {
                return locationMgr.getAll()
                    .then(locations => this.setState({
                        locations: locations
                    }))
            })
    }
    deleteLocation = (locationId) => {
        return locationMgr.deletelocation(locationId)
            .then(() => {
                return locationMgr.getAll()
            })
            .then(locations => this.setState({
                locations: locations
            }))
    }
    retrieveLocation = (locationId) => {
        return locationMgr.getlocation(locationId)
            .then((location) =>
                this.setState({
                    location: location
                })
            )
    }
    updateLocation = (location) => {
        return locationMgr.editlocation(location)
            .then(() => {
                return locationMgr.getAll()
            })
            .then(locations => this.setState({
                locations: locations
            }))
    }
    componentDidMount() {
        const newState = {}
        console.log("component mounted, Application View.")

        //get everything from the managers.
        //then set state
        danceMgr.getAll()
            .then(dances => newState.dances = dances)

            .then(() => clubMgr.getAll())
            .then(clubs => newState.clubs = clubs)

            .then(() => eventTypeMgr.getAll())
            .then(typesOfEvents => newState.typesOfEvents = typesOfEvents)

            .then(() => locationMgr.getAll())
            .then(locations => newState.locations = locations)

            .then(() => regionMgr.getAll())
            .then(regions => newState.regions = regions)

            .then(() => typeOfUserMgr.getAll())
            .then(typeOfUser => newState.typeOfUser = typeOfUser)

            .then(() => stateMgr.getAll())
            .then(states => newState.states = states)

            .then(() => userMgr.getAll())
            .then(users => newState.users = users)

            .then(() => this.setState(newState))
    }

    render() {
        console.log("application View to you: ", this.props.activeUser.username)

        return (
            <React.Fragment >

                <Route exact path="/" render={props => {
                    return <DanceList {...props}
                        dances={this.state.dances} />
                }} />

                <Route exact path="/dance/new" render={props => {
                    return <NewEventForm {...props}
                        dances={this.state.dances}
                        addDance={this.addDance}
                        locations={this.state.locations}
                        typesOfEvents={this.state.typesOfEvents}/>
                }} />
                <Route exact path="/editDance" render={props => {
                    return <EditDanceForm {...props}
                        dance={this.state.dance}
                        editDance={this.editDance} />
                }} />
                <Route exact path="/DanceList" render={props => {
                    return <DanceList
                        dances={this.state.dances}
                        {...props} />
                }} />
            </React.Fragment>
        )
    }
}