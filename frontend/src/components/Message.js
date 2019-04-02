import React, { Component } from  'react';
import Parser from 'html-react-parser';    
import { DateConverter } from '../utils/DateConverter'
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

    highlightHelper(content){
        if(typeof content === 'string') return content
        else{
            var val = content.map( function(item) {
                if(item.search("</span>")) return Parser(item)
                else return item
            })
            return val
        }
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
                            {source} | {DateConverter(timestamp)}
                        </span>
    
                        <span className="buttons">
                            {this.whichButton(id,isStarred,isTrashed)}
                            {this.showTrashButton(isTrashed,deleteMessage,id)}
                        </span>                      
                    </div>
                    <div className="content-down">{this.highlightHelper(content)}</div>
                </div>
          </div>
        );
    }
}

export default Message;