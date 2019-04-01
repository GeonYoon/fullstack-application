import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {fetchMessages,updateStar,clickTrash,deleteMessage,sortMessage} from '../actions';
import Template from '../components/Template';
import Highlight from '../components/Highlight';
import MessageList from '../components/MessageList';


class TemplateContainer extends Component {
    
    componentDidMount() {
      if(this.props.messages.length === 0){
        console.log("This is first time. Call get method")
        this.props.fetchMessages()
      }
      else{
        console.log("message already exist")
      }
    }
    
    render() {
      const {messages, length, updateStar,showTrash,clickTrash,deleteMessage,sortMessage} = this.props
      return (
          <Template 
              highlight = {( 
                <Highlight 
                  length={length} 
                  showTrash={showTrash}
                  clickTrash = {clickTrash}
                  sortMessage = {sortMessage}
                />
              )}
              messages = {( 
                <MessageList 
                  messages = {messages}
                  showTrash={showTrash}
                  updateStar = {updateStar}
                  deleteMessage = {deleteMessage}
                />
              )}
          >
          </Template>
      );
    }
}

const mapStateToProps = ({messages}) => {
  return {
    messages : messages.messages,
    length: messages.length,
    showTrash : messages.showTrash
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: () => {
    dispatch(fetchMessages());
  },
  updateStar: (id,value) => {
    dispatch(updateStar(id,value));
  },
  clickTrash: () => {
    dispatch(clickTrash());
  },
  deleteMessage: (id) => {
    dispatch(deleteMessage(id))
  },
  sortMessage: () => {
    dispatch(sortMessage())
  }
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TemplateContainer));
