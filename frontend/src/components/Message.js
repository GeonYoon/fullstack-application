import React, { Component } from  'react';
import './css/Message.css';

class Message extends Component {
     
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.checked !== nextProps.checked;
    // }
    
    render() {
        const {content,avatar,handle,source,timestamp} = this.props;
        return (
            <div className="message">
                <div className="col s3 message-image">
                    <div><img src={avatar} alt="Not Found"/></div>
                    {handle}
                </div>
                <div className="col s9 message-content">
                    <div>
                        <span className="source-time">
                            {source} | {timestamp}
                        </span>
                       
                        <span className="buttons">
                            <input className="message-button star" type="button" value="Star Message!" />
                            <input className="message-button trash" type="button" value="Trash" />
                        </span>                      
                    </div>
                    <div className="content-down">{content}</div>
                </div>
          </div>
        );
    }
}

export default Message;