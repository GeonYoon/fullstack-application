import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
    
    // ShouldComponentUpdate(nextProps, nextState) {
    //     return this.props.todos !== nextProps.todos;
    // }
    render() {
        const {messages,updateStar,showTrash,deleteMessage} = this.props;
        
        let filtered_message = messages.filter(m=>m.isTrashed === showTrash);

        const messageList = filtered_message.map(
            message => {
                const {id} = message
                return (
                    <Message 
                        key = {id}
                        updateStar = {updateStar}
                        deleteMessage = {deleteMessage}
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