import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class ChatForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chatInput: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({chatInput: ''})
    }

    render() { return(
        <div>
            <hr />
            <Form inverted onSubmit={this.handleSubmit} >
                <div className="ui fluid transparent input" >
                    <input
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Please be polite in the chat"
                        name="chatInput"
                        value={this.state.chatInput}
                        style={{color:"ivory"}}/>

                {/*}
                    had to remove this boilerplate to get the right color on line 35
                    <Form.Input fluid transparent
                        placeholder="Please be polite in the chat"
                        name='chatInput'
                        value={this.state.chatInput}
                        onChange={this.handleChange}
                    />*/}
                </div>
            </Form>
            {/* <Button.Group fluid buttons={['One', 'Two']} /> */}
        </div>
    )}
}
