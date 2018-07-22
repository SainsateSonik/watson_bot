import React from 'react';
import './ConversationStack.css';

const conversationStack = (props) => {
    const stack = props.stack.map((chatPhrase, index) => {
        const key = Object.keys(chatPhrase)[0];
        return <li className={key + "_dialogue"} key={index}>{chatPhrase[key]}</li>;
    })
    return(
        <ul className="chatStack">
            {stack}
        </ul>
    );
}

export default conversationStack;