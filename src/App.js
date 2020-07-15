import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'
import './App.css';

export default class App extends Component {
    render() {
        return (
            <Grid style={{backgroundColor: "black"}}>
                <Grid.Column width={4} >
                    <div style={{backgroundColor: "lightblue"}}>
                        <p> GEORGE LUCAS </p>
                    </div>
                </Grid.Column>
                <Grid.Column width={8} >
                    <div style={{backgroundColor: "limegreen", textAlign: "center"}}>
                        <p> WES ANDERSON </p>
                        <p> another p </p>
                    </div>
                </Grid.Column>
                <Grid.Column width={4} >
                    <div style={{backgroundColor: "coral", textAlign: "right"}}>
                        <p> DAVID LEAN </p>
                    </div>
                </Grid.Column>
            </Grid>
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
