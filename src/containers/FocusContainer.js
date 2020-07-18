import React, { Component } from 'react'
import LoginContainer from  './LoginContainer'
import { connect } from 'react-redux'

class FocusContainer extends Component {
    render() {
        return (
            <div id="focusContainer">
                {this.props.currentRoute === 'login' ?
                    <LoginContainer />
                    :
                    <h1> YO </h1>
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        currentRoute: state.currentRoute
    }
}

export default connect(mapStateToProps)(FocusContainer)
