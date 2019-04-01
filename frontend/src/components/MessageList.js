import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
    
    // ShouldComponentUpdate(nextProps, nextState) {
    //     return this.props.todos !== nextProps.todos;
    // }
    render() {
        const {messages,updateStar} = this.props;
        const messageList = messages.map(
            message => {
                const {id} = message
                return (
                    <Message 
                        key = {id}
                        updateStar = {updateStar}
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