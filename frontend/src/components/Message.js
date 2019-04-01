import React, { Component } from  'react';
import './css/Message.css';

class Message extends Component {
     
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.checked !== nextProps.checked;
    // }
  

    whichButton(id,isStarred){
        if(isStarred === 1) return <input className="message-button star"  onClick={() => this.props.updateStar(id,isStarred)} type="button" value="Starred!" />
        else return <input className="message-button no-star"  onClick={() => this.props.updateStar(id,isStarred)} type="button" value="Star Message!" />
    }

    render() {
        const {content,avatar,handle,source,timestamp,isStarred,id} = this.props;
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
                            {this.whichButton(id,isStarred)}
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