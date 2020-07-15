import React, { Component } from 'react'

export default class SideContainer extends Component{
    render() {
        return (
            <div id="sideContainer" style={this.props.style}>
                <p> {this.props.mesg} </p>
            </div>
        )
    }
}
