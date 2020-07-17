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
        return this.state.history.map(c => {
            let usr = c.user.username
            let mesg = c.body
            return <p><i>{usr}</i>: {mesg}</p>
        })
    }

    render() {
        return (<div id='borderedChatHistory'>{this.createChatHistory()}</div>)
    }

}
