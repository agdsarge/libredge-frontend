import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'

class NavBar extends Component {

    handleMouse = (e, bool) => {
        bool ? e.target.style.color = 'cornflowerBlue' : e.target.style.color = 'black'
    }

    render() {
        console.log(this.props.currentUser)
        return (
            <div id='navBarMenuSemantic'>
                <Menu pointing secondary>
                    <Menu.Item name="LIBREDGE" onMouseOver={(e) => this.handleMouse(e, true)} onMouseLeave={(e) => this.handleMouse(e, false)}/>
                    <Menu.Item name="OTHER" onMouseOver={(e) => this.handleMouse(e, true)} onMouseLeave={(e) => this.handleMouse(e, false)}/>
                    <Menu.Menu position="right">
                        { this.props.currentUser ?
                            <Menu.Item name="SIGN OUT"
                                onMouseOver={(e) => this.handleMouse(e, true)}
                                onMouseLeave={(e) => this.handleMouse(e, false)}
                            />
                            :
                            <Menu.Item name="SIGN IN"
                                onMouseOver={(e) => this.handleMouse(e, true)}
                                onMouseLeave={(e) => this.handleMouse(e, false)}
                                onClick={(e) => this.props.dispatch({action: "SET_USER", payload: null})}
                            />
                    }
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(NavBar)
