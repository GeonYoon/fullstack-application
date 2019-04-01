import React, { Component } from  'react';
import './css/Message.css';

class Message extends Component {
     
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.checked !== nextProps.checked;
    // }
  

    whichButton(id,isStarred,isTrashed){
        if(isTrashed === 0)
            if(isStarred === 1) return <input className="message-button star"  onClick={() => this.props.updateStar(id,isStarred)} type="button" value="Starred!" />
            else return <input className="message-button no-star"  onClick={() => this.props.updateStar(id,isStarred)} type="button" value="Star Message!" />
        else
            if(isStarred === 1) return <input className="message-button trashed-star" type="button" value="Starred!" />
            else return <input className="message-button trashed-nostar" type="button" value="Star Message!" />
    }

    showTrashButton(isTrashed,deleteMessage,id){
        if(isTrashed === 0) return <input className="message-button trash" onClick={() => deleteMessage(id)} type="button" value="Trash" />
    }

    render() {
        const {content,avatar,handle,source,timestamp,isStarred,id,deleteMessage,isTrashed} = this.props;
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
                            {this.whichButton(id,isStarred,isTrashed)}
                            {this.showTrashButton(isTrashed,deleteMessage,id)}
                        </span>                      
                    </div>
                    <div className="content-down">{content}</div>
                </div>
          </div>
        );
    }
}

export default Message;