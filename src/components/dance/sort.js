import React, { Component } from "react";

export default class Sort extends Component {
    render() {
        return (

            (field, primer) => {
                let key = primer ?
                    function (x) { return primer(x[field]) } :
                    function (x) { return x[field] };

                return function (a, b) {
                    return a = key(a), b = key(b)
                }
            }
        )
    }
}
