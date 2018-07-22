import React, { Component } from 'react';
import './Bot.css';
import ConversationStack from './ConversationStack/ConversationStack';

// import askWatson from "./__WatsonService__/__WatsonService";

class Bot extends Component{
    state = {
        inputValue : "",        // Current value of the input query by user
        chatHistory : [         // ENTRIES => { user : "queries" } OR { watson : "response" }
            {watson : "Hi my name is Watson."},
            {user : 'Hi there'},
            {watson : 'What is your name?'},
            {user : 'My name is Sonik Sainsate'},
        ]
    }

    handler_inputValue = (event) => {
        const inputValue = event.target.value;
        this.setState(prevState => {
            return { inputValue }
        });
    }

    queryPassed = (event) => {
        event.preventDefault();
        const chatHistory = [...this.state.chatHistory];
        chatHistory.push({ user : this.state.inputValue});
        this.setState({ chatHistory, inputValue : "" });
        // askWatson(this.state.inputValue);
    }

    render() {
        return(
            <div className="conversationBlock">
                <ConversationStack stack={this.state.chatHistory}/>
                <form className="interationInput" onSubmit={this.queryPassed}>
                    <input type="text" autoFocus
                           value={this.state.inputValue}
                           onChange={this.handler_inputValue}
                           placeholder = "Talk to watson"/>
                </form>
            </div>
        );
    }
} 

export default Bot;