import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from 'react-router-dom';
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
                    <Router>
                        <NavBar />
                        <Switch >
                            <Route exact path='/login' render={(rp) =>
                                this.props.currentUser ?
                                    <Redirect to='/lobby'/>
                                        :
                                    <ContentGrid {...rp} />}
                            />
                            <Route exact path='/register' render={(rp) =>
                                    <ContentGrid {...rp} />} />

                            <Route exact path='/game' render={(rp) =>
                                this.props.currentUser ?
                                    <ContentGrid {...rp} />
                                        :
                                    <Redirect to='/login' />}
                            />
                            <Route exact path='/lobby' render={(rp) =>
                                this.props.currentUser ?
                                    <ContentGrid {...rp} />
                                        :
                                    <Redirect to='/login' />}
                            />



                        </Switch >
                    </Router>

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
