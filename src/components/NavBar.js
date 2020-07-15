import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class NavBar extends Component {
    render() { return (
        <Menu pointing secondary>
            <Menu.Item name="STRING" />
            <Menu.Item name="OTHER" />
            <Menu.Menu position="right">
                <Menu.Item name="SIGN IN" />
            </Menu.Menu>
        </Menu>
    )}
}
