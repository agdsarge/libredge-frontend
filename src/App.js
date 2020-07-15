import React, { Component } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react'
import SideContainer from './containers/SideContainer'
import FocusContainer from './containers/FocusContainer'
import NavBar from './components/NavBar'
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
            <NavBar />
            <Grid id="grad">
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
            </div>
            )
    }
}

// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
