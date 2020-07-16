import React, { Component } from 'react'
import { connect } from 'react-redux'

class SideContainer extends Component{
    render() {
        return (
            <div id="sideContainer">
                <p> {this.props.currentUser ?  this.props.currentUser : this.props.orientation} </p>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(SideContainer)
