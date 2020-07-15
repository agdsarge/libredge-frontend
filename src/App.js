import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch, Redirect, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

import NavBar from './components/NavBar'
import ContentGrid from './containers/ContentGrid'
import Lobby from './containers/Lobby'

import './App.css';

class App extends Component {
    render() {
        return (
                <div id='supra'>
                <NavBar />
                <ContentGrid />
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(App)

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
//
// <Switch>
//     <Route path="*" render={(rp) => <Lobby />}/>
// </Switch>
