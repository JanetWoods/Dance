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
import Account from "./auth/account"
import Register from "./auth/register"
import NewClubForm from "./club/newClubForm"
import NewLocationForm from "./location/newLocationForm"
import DanceEvent from "./dance/danceEvent"
import Locations from "./location/locations"
import LocationDetail from "./location/locationDetail"
import EditLocationForm from "./location/editLocationForm"
import EditClubForm from "./club/editClubForm"
import Clubs from "./club/clubList"
import Filter from "./dance/filter"
import DanceDetail from "./dance/detailedDance"
import FilterByState from "./dance/filterByStateONLY"

export default class ApplicationViews extends Component {
    state = {
        dances: [],
        users: [],
        clubs: [],
        typeOfUser: [],
        typeOfEvents: [],
        locations: [],
        states: [],
        detailedDances: []
    }

    aUserId = this.props.activeUser.id
    userPower = this.props.userPower



    addDance = (event) => {
        return danceMgr.addDance(event)
            .then(() => {
                return danceMgr.getAll()
            })
            .then(() => danceMgr.getDanceDetail())
            .then(detailedDances => this.setState({
                detailedDances: detailedDances
            }))
            .then(dances => this.setState({
                dances: dances
            }))
    }
    deleteDance = (danceId) => {
        return danceMgr.deleteDance(danceId)
            .then(() => danceMgr.getDanceDetail())
            .then(detailedDances => this.setState({
                detailedDances: detailedDances
            }))
            .then(dances => this.setState({
                dances: dances
            }))
    }
    deleteClub = (id) => {
        return clubMgr.deleteClub(id)
            .then(()=> clubMgr.getAll())
            .then(clubs => this.setState({
                clubs: clubs
            }))
    }

    deleteLocation = (locationId) => {
        return locationMgr.deleteLocation(locationId)
            .then(() => {
                return locationMgr.getAll()
            })
            .then(locations => this.setState({
                locations: locations
            }))
    }

    updateDance = (dance) => {
        return danceMgr.updateDance(dance)
            .then(() => danceMgr.getDanceDetail())
            .then(detailedDances => this.setState({
                detailedDances: detailedDances
            }))
            .then(dances => this.setState({
                dances: dances
            }))
    }


    getUser = (id) => {
        return userMgr.getUser(id)
            .then((user) => {
                this.setState({
                    user: user
                })
            })
    }

    retrieveDance = (danceId) => {
        return danceMgr.getdance(danceId)
            .then((dance) =>
                this.setState({
                    dance: dance
                })
            )
    }

    updateUser = (updatedUser) => {
        return userMgr.updateUser(updatedUser)
            .then(() => {
                userMgr.getAll()
            })
            .then(users => this.setState({
                users: users
            }))
    }
    addUser = (user => {
        return userMgr.addUser(user)
            .then(user => this.setState({
                user: user
            }))
    })

    addLocation = (location) => {
        return locationMgr.addLocation(location)
            .then(() => {
                return locationMgr.getAll()
                    .then(locations => this.setState({
                        locations: locations
                    }))
            })
    }
    addClub = (club) => {
        return clubMgr.addClub(club)
            .then(() => {
                return clubMgr.getAll()
                    .then(clubs => this.setState({
                        clubs: clubs
                    }))
            })
    }
    filterByState = (stateId) => {
        return stateMgr.getDanceByStateDetail(stateId)
            .then((states) =>
                this.setState({
                    states: states
                })
                .then(detailedDances => this.setState({
                    detailedDances: detailedDances
                }))
                .then(dances => this.setState({
                    dances: dances
                }))
            )
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
        return clubMgr.editClub(club)
            .then(() => {
                return clubMgr.getAll()
            })
            .then(clubs => this.setState({
                clubs: clubs
            }))
    }

    updateLocation = (location) => {
        return locationMgr.updatelocation(location)
            .then(() => {
                return locationMgr.getAll()
                    .then(locations => this.setState({
                        locations: locations
                    }))
            })
    }

    retrieveLocation = (locationId) => {
        return locationMgr.getlocation(locationId)
            .then((location) =>
                this.setState({
                    location: location
                })
            )
    }
    getTHISDanceDetail = (id) => {
        return danceMgr.getTHISDanceDetail(id)
            .then((dance) =>
                this.setState({
                    dance: dance
                })
            )
    }
    updateLocation = (location) => {
        return locationMgr.updatelocation(location)
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
            // .sort((a,b)=> (a.clubName > b.clubName) ? 1 : -1)

            .then(() => eventTypeMgr.getAll())
            // .sort((a, b) => (a.nameType > b.nameType) ? 1 : -1)
            .then(typeOfEvents => newState.typeOfEvents = typeOfEvents)

            .then(() => locationMgr.getAll())
            // .sort((a, b) => (a.nameLocation > b.nameLocation) ? 1 : -1)
            .then(locations => newState.locations = locations)

            .then(() => regionMgr.getAll())
            .then(regions => newState.regions = regions)

            .then(() => typeOfUserMgr.getAll())
            .then(typeOfUser => newState.typeOfUser = typeOfUser)

            .then(() => stateMgr.getAll())
            .then(states => newState.states = states)

            .then(() => userMgr.getAll())
            .then(users => newState.users = users)

            .then(() => danceMgr.getDanceDetail())
            .then(detailedDances => newState.detailedDances = detailedDances)

            .then(() => this.setState(newState))
    }

    render() {
        console.log("application View to you: ", this.props.activeUser.username)
        console.log("userPower: ", this.props.userPower)
        return (
            <React.Fragment >

                <Route exact path="/" render={props => {
                    return <DanceList {...props}
                        dances={this.state.dances}
                        clubs={this.state.clubs}
                        deleteDance={this.deleteDance}
                        editDance={this.editDance}
                        detailedDances={this.state.detailedDances}
                    />
                }} />
                <Route exact path="/account/user/:id(\d+)" render={props => {
                    return <Account {...props}
                        user={this.state.user}
                        clubs={this.state.clubs}
                        updateUser={this.updateUser}
                        getUser={this.user}
                    />
                }} />

                <Route exact path="/register" render={props => {
                    return <Register {...props}
                        users={this.state.users}
                        addUser={this.addUser}
                        clubs={this.state.clubs}
                        updateUser={this.updateUser} />
                }} />

                <Route exact path="/dance/new" render={props => {
                    return <NewEventForm {...props}
                        dances={this.state.dances}
                        addDance={this.addDance}
                        locations={this.state.locations}
                        typeOfEvents={this.state.typeOfEvents}
                        userPower={this.props.userPower}
                        clubs={this.state.clubs}
                        isEmpty={this.isEmpty} />
                }} />
                <Route exact path="/dances/edit/:id(\d+)" render={props => {
                    return <EditDanceForm {...props}
                        userPower={this.props.userPower}
                        dance={this.state.dance}
                        editDance={this.editDance}
                        getdance={this.getdance}
                        updateDance={this.updateDance}
                        locations={this.state.locations}
                        typeOfEvents={this.state.typeOfEvents}
                        detailedDances={this.detailedDances}
                        clubs={this.state.clubs} />
                }} />
                <Route exact path="/dances/detail/:id(\d+)" render={props => {
                    return <DanceDetail {...props}
                        userPower={this.props.userPower}
                        dance={this.state.dance}
                        getdance={this.getdance}
                        locations={this.state.locations}
                        typeOfEvents={this.state.typeOfEvents}
                        detailedDances={this.detailedDances}
                        clubs={this.state.clubs}
                        getTHISDanceDetail={this.getTHISDanceDetail}
                    />
                }} />
                <Route exact path="/locations/:id(\d+)" render={props => {
                    return <LocationDetail {...props}
                        users={this.state.users}
                        states={this.state.states}
                        locations={this.state.locations}
                        deleteLocation={this.deleteLocation}
                    />
                }} />
                <Route exact path="/DanceList" render={props => {
                    return <DanceList
                        dances={this.state.dances}
                        deleteDance={this.deleteDance}
                        userPower={this.props.userPower}
                        detailedDances={this.state.detailedDances}
                        addDance={this.addDance}
                        editDance={this.editDance}
                        {...props} />
                }} />

                <Route exact path="/filteredList" render={props => {
                    return <Filter
                        dances={this.state.dances}
                        deleteDance={this.deleteDance}
                        userPower={this.props.userPower}
                        detailedDances={this.state.detailedDances}
                        typeOfEvents={this.state.typeOfEvents}
                        addDance={this.addDance}
                        editDance={this.editDance}
                        states={this.state.states}
                        Filter={this.state.filter}
                        filterByState={this.filterByState}
                        {...props} />
                }} />
                <Route exact path="/FilterByState" render={props => {
                    return <FilterByState
                        dances={this.state.dances}
                        deleteDance={this.deleteDance}
                        userPower={this.props.userPower}
                        detailedDances={this.state.detailedDances}
                        typeOfEvents={this.state.typeOfEvents}
                        addDance={this.addDance}
                        editDance={this.editDance}
                        states={this.state.states}
                        Filter={this.filter}
                        filterByState={this.filterByState}
                        {...props} />
                }} />
                <Route exact path="/DanceEvent" render={props => {
                    return <DanceEvent
                        dances={this.state.dances}
                        deleteDance={this.deleteDance}
                        userPower={this.props.userPower}
                        detailedDances={this.state.detailedDances}
                        addDance={this.addDance}
                        locations={this.state.locations}
                        editDance={this.editDance}
                        {...props} />
                }} />

                <Route exact path="/newClub" render={props => {
                    return <NewClubForm {...props}
                        clubs={this.state.clubs}
                        addClub={this.addClub}
                        users={this.state.users}
                        states={this.state.states}
                        locations={this.state.locations} />
                }} />
                <Route exact path="/newLocation" render={props => {
                    return <NewLocationForm {...props}
                        addLocation={this.addLocation}
                        users={this.state.users}
                        states={this.state.states}
                        locations={this.state.locations} />
                }} />
                <Route exact path="/Locations" render={props => {
                    return <Locations {...props}
                        addLocation={this.addLocation}
                        users={this.state.users}
                        states={this.state.states}
                        locations={this.state.locations}
                        deleteLocation={this.deleteLocation} />
                }} />
                <Route exact path="/Locations/edit/:id(\d+)" render={props => {
                    return <EditLocationForm  {...props}
                        updateLocation={this.updateLocation}
                        users={this.state.users}
                        states={this.state.states}
                        locations={this.state.locations} />
                }} />
                <Route exact path="/clubs/edit/:id(\d+)" render={props => {
                    return <EditClubForm  {...props}
                        updateClub={this.updateClub}
                        clubs={this.props.clubs}
                        users={this.state.users}
                        states={this.state.states}
                        locations={this.state.locations}
                        club={this.state.club} />
                }} />
                <Route exact path="/clubs" render={props => {
                    return <Clubs  {...props}
                        updateClub={this.updateClub}
                        users={this.state.users}
                        states={this.state.states}
                        locations={this.state.locations}
                        deleteClub={this.deleteClub}
                        clubs={this.state.clubs} />
                }} />




            </React.Fragment>
        )
    }
}