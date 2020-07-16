import React, { Component } from 'react'

export default class SideContainer extends Component{
    render() {
        return (
            <div id="sideContainer">
                <p> {this.props.mesg} </p>
            </div>
        )
    }
}
