import React, { Component } from "react"

export default class Sorry extends Component {
    render() {
        return (
            <React.Fragment>

                <h2>No account yet? Register</h2>
                <button className="list-button"
                    type="button"
                    onClick={() => {
                        this.props.history.push('/register')
                    }} >
                    Register
    </button>
            </React.Fragment>
        )
    }
}