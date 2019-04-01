import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {fetchMessages,updateStar} from '../actions';
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
      const {messages, length, updateStar} = this.props
      return (
          <Template 
              highlight = {( 
                <Highlight length={length} />
              )}
              messages = {( 
                <MessageList 
                  messages = {messages}
                  updateStar = {updateStar}
                />
              )}
          >
          </Template>
      );
    }
}

const mapStateToProps = ({messages, length}) => {
  return {
    messages : messages.messages,
    length: messages.length
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: () => {
    dispatch(fetchMessages());
  },
  updateStar: (id,value) => {
    dispatch(updateStar(id,value));
  }
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TemplateContainer));
