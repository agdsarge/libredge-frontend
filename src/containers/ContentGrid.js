import React, { Component } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react'
import SideContainer from './SideContainer'
import FocusContainer from './FocusContainer'

export default class ContentGrid extends Component {
    render() {
        return (
            <Grid id="mainGrid">
                <Grid.Column width={4} >
                    <SideContainer mesg="GEORGE LUCAS" style={{backgroundColor: "lightblue"}} />
                </Grid.Column>
                <Grid.Column width={8} >
                    <FocusContainer />
                </Grid.Column>
                <Grid.Column width={4} >
                    <SideContainer mesg="DAVID LEAN" style={{backgroundColor: "coral"}} />
                </Grid.Column>
            </Grid>
        )
    }
}
