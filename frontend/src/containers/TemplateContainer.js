import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {fetchMessages,updateStar,clickTrash,deleteMessage,sortMessage,highlightMessage} from '../actions';
import Template from '../components/Template';
import Highlight from '../components/Highlight';
import MessageList from '../components/MessageList';


class TemplateContainer extends Component {
    
    componentDidMount() {
      if(this.props.messages.length === 0) this.props.fetchMessages()
    }
    
    render() {
      const {messages, length, updateStar,showTrash,clickTrash,deleteMessage,sortMessage,highlightMessage,areSorted} = this.props
      return (
          <Template 
              highlight = {( 
                <Highlight 
                  length={length} 
                  showTrash={showTrash}
                  clickTrash = {clickTrash}
                  sortMessage = {sortMessage}
                  highlightMessage = {highlightMessage}
                  areSorted={areSorted}
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
    showTrash : messages.showTrash,
    areSorted: messages.areSorted
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
  },
  highlightMessage: (texts) => {
    dispatch(highlightMessage(texts))
  }
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TemplateContainer));
