import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
    constructor() {
        super()
        this.state = {hover: null}
    }

    handleMouse = (e, bool) => {
        bool ? e.target.style.color = 'cornflowerBlue' : e.target.style.color = 'black'
    }

    render() {
        let { hover } = this.state
        return (
            <div id='navBarMenuSemantic'>
                <Menu pointing secondary>
                    <Menu.Item name="LIBREDGE" onMouseOver={(e) => this.handleMouse(e, true)} onMouseLeave={(e) => this.handleMouse(e, false)}/>
                    <Menu.Item name="OTHER" onMouseOver={(e) => this.handleMouse(e, true)} onMouseLeave={(e) => this.handleMouse(e, false)}/>
                    <Menu.Menu position="right">
                        <Menu.Item name="SIGN IN" onMouseOver={(e) => this.handleMouse(e, true)} onMouseLeave={(e) => this.handleMouse(e, false)}/>
                    </Menu.Menu>
                </Menu>
            </div>

        )
    }
}
