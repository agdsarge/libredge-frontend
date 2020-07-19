import React, { Component } from 'react'

export default class ChatHistory extends Component {
    constructor() {
        super()
        this.state = {
            history: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3005/api/v1/games/FirstSimpleTestGame')
        .then(r => r.json())
        .then(d => {
            this.setState({history: d.messages})
        })
    }

    createChatHistory = () => {
        return this.state.history.map(c => 
            <p key={c.id}><i>{c.user.username}</i>: {c.body}</p>
        )
    }

    render() {
        return (<div id='borderedChatHistory'>{this.createChatHistory()}</div>)
    }

}
