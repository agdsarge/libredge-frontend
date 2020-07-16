import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import SideContainer from './SideContainer'
import FocusContainer from './FocusContainer'

export default class ContentGrid extends Component {
    render() {
        return (
            <Grid id="mainGrid">
                <Grid.Column width={4} >
                    <SideContainer orientation="left" />
                </Grid.Column>
                <Grid.Column width={8} >
                    <FocusContainer />
                </Grid.Column>
                <Grid.Column width={4} >
                    <SideContainer orientation="right" />
                </Grid.Column>
            </Grid>
        )
    }
}
