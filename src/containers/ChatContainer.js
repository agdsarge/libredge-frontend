import React, { Component } from 'react'
import ChatHistory from '../components/ChatHistory'
import ChatForm from '../components/ChatForm'

export default class ChatContainer extends Component {
    render() {
        return(
            <div style={{height:'100%'}}>
                <ChatHistory />
                <ChatForm />
            </div>)
    }
}
