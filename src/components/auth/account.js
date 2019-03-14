import React, { Component } from "react"
import userMgr from "../../modules/userMgr"
import "../dance/dance.css"
import clubMgr from "../../modules/clubMgr";

export default class Account extends Component {
    state = {
        id:parseInt(sessionStorage.getItem("credentials")),
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
            id:this.props.match.params.id,
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
        .then(()=>this.props.history.push("/"))
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
            <form className="form-updateAccount">
                <h1 className="h3 mb-3 font-weight-normal">Update Your Account</h1>
                <label htmlFor="UserName"
                    type="username"
                    id="username"
                    placeholder={`username`}
                    >{this.props.username}</label>


                <label htmlFor="inputNameFirst">First Name</label>
                <input onChange={this.handleFieldChange}
                    type="nameFirst"
                    id="nameFirst"
                    value={this.state.nameFirst}
                    defaultValue={this.state.nameFirst}
                    placeholder={this.state.nameFirst}
                    autoFocus=""
                    required="" />

                <label htmlFor="inputNameLast">Last Name</label>
                <input onChange={this.handleFieldChange}
                    type="nameLast"
                    id="nameLast"
                    placeholder={this.state.nameLast}
                    value={this.state.nameLast}
                    defaultvalue={this.state.nameLast}
                    autoFocus=""
                    required="" />

                <label htmlFor="inputPhone">Phone Number</label>
                <input onChange={this.handleFieldChange}
                    type="phone"
                    id="phone"
                    placeholder={this.state.phone}
                    defaultValue={this.state.phone}
                    value={this.state.phone}
                    autoFocus="" />

                <label htmlFor="email">email</label>
                <input onChange={this.handleFieldChange}
                    type="email"
                    id="email"
                    placeholder={this.state.email}
                    defaultValue={this.state.email}
                    value={this.state.email}
                    autoFocus="" />



                <div className="form-group">
                    <label htmlFor="club"> Select your club </label>
                    <select
                        name="club"
                        id="club"
                        onChange={this.handleFieldChange}
                        defaultValue={this.state.clubId}
                        value={this.state.clubId}>

                        <option value="">Select Your Club </option>
                        {this.props.clubs.map(club => (
                            <option key={club.id} id={club.id} value={club.id}>{club.clubName}</option>
                        ))}
                    </select>
                </div>

                <button type="submit" onClick={this.EditUser}>
                    Save Changes
            </button>
            </form>
        )
    }
}