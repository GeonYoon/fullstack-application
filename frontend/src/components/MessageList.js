import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
    
    // ShouldComponentUpdate(nextProps, nextState) {
    //     return this.props.todos !== nextProps.todos;
    // }
    render() {
        const {messages} = this.props;
        const messageList = messages.map(
            message => {
                const {id} = message
                return (
                    <Message 
                        key = {id}
                        {...message}
                    />
                )
            }
        )
        return (
            <div>
               {messageList}
            </div>
        );
    }
}

export default MessageList;