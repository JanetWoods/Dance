import React, { Component } from "react"
import userMgr from "../../modules/userMgr"
import "./account.css"
import clubMgr from "../../modules/clubMgr";

export default class Account extends Component {
    state = {
        id: parseInt(sessionStorage.getItem("credentials")),
        password: "",
        username: "",
        typeOfUserId: 1,
        nameFirst: "",
        nameLast: "",
        clubId: 0,
        phone: "",
        email: "",
        clubs: [],
        yourClub: clubMgr.get(this.props.match.params.clubId).clubName
    }
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    EditUser = e => {
        e.preventDefault()
        const updatedUser = {
            id: this.props.match.params.id,
            username: this.state.username,
            password: this.state.password,
            typeOfUserId: this.state.typeOfUserId,
            nameFirst: this.state.nameFirst,
            nameLast: this.state.nameLast,
            clubId: this.state.clubId,
            phone: this.state.phone,
            email: this.state.email
        }
        console.log("updated User: ", updatedUser)
        this.props.updateUser(updatedUser)
            .then(() => this.props.history.push("/"))
    }
    componentDidMount(user) {
        userMgr.get(this.props.match.params.id)
            .then((user) => {
                this.setState({
                    id: user.id,
                    username: user.username,
                    password: user.password,
                    typeOfUserId: user.typeOfUserId,
                    nameFirst: user.nameFirst,
                    nameLast: user.nameLast,
                    clubId: user.clubId,
                    phone: user.phone,
                    email: user.email
                })
            })
    }

    render() {

        return (
            <div className="gradient-border" >
                <form className="form-container">
                    <h2> {this.state.nameFirst} {this.state.nameLast}</h2>

                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input onChange={this.handleFieldChange}
                            type="username"
                            id="username"
                            value={this.state.username}
                            defaultValue={this.state.username}
                            placeholder={this.state.username}
                            autoFocus=""
                            required="" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputPhone">Phone Number</label>
                        <input onChange={this.handleFieldChange}
                            type="phone"
                            id="phone"
                            placeholder={this.state.phone}
                            defaultValue={this.state.phone}
                            value={this.state.phone}
                            autoFocus="" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input onChange={this.handleFieldChange}
                            type="email"
                            id="email"
                            placeholder={this.state.email}
                            defaultValue={this.state.email}
                            value={this.state.email}
                            autoFocus="" />
                    </div>

                    <div className="form-group">
                        <label width="auto" htmlFor="clubId"> Select your club </label>
                        <select
                            name="clubId"
                            id="clubId"
                            onChange={this.handleFieldChange}
                            defaultValue={this.state.clubId}
                            value={this.state.clubId}>
                            <option value="">Select Your Club </option>
                            {this.props.clubs.map(club => (
                                <option key={club.id} id={club.id} value={club.id}>{club.clubName}</option>
                            ))}
                        </select>

                    </div>

                    <div className="list-button-row">
                        <button type="submit" onClick={this.EditUser}>
                            Save Changes
            </button>
                    </div>
                </form>
            </div>
        )
    }
}