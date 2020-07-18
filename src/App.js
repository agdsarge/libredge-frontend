import React, { Component } from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import { Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import NavBar from './components/NavBar'
import ContentGrid from './containers/ContentGrid'
// import Lobby from './containers/Lobby'

import './App.css';

const jwtURL = 'http://localhost:3005/api/v1/token'


class App extends Component {
    componentDidMount() {
        if(localStorage.getItem('jwt-libredge')) {
            fetch(jwtURL, {
                method: "GET",
                headers: {Authentication: localStorage.getItem('jwt-libredge')}
            })
            .then(res => res.json())
            .then(d =>
                this.props.dispatch({type: 'SET_USER', payload: d}))
        }
    }
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
    return {
        currentUser: state.currentUser,
        currentRoute: state.currentRoute}
}

export default connect(mapStateToProps)(App)

// <Switch>
//     <Route path="*" render={(rp) => <Lobby />}/>
// </Switch>
