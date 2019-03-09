import React, { Component } from "react"
import Nav from "./nav/nav"
import ApplicationViews from "./applicationViews"

export default class UserAccessLayer extends Component {
    state= {
        activeUser: {}
    }
    componentDidMount() {
        //get active user id, then set state.
    }
}