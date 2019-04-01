import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {fetchMessages} from '../actions';
import Template from '../components/Template';
import Highlight from '../components/Highlight';
import MessageList from '../components/MessageList';


class TemplateContainer extends Component {
    
    componentDidMount() {
      this.props.fetchMessages()
    }
    
    render() {
      const {messages, length} = this.props
      return (
          <Template 
              highlight = {( 
                <Highlight length={length} />
              )}
              messages = {( 
                <MessageList messages = {messages}/>
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
  }
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TemplateContainer));
