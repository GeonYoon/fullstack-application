import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Template from '../components/Template';
import Highlight from '../components/Highlight';
import MessageList from '../components/MessageList';


class TemplateContainer extends Component {
    
    componentDidMount() {
        // not now 
    }
    render() {
      const {messages} = this.props
      return (
          <Template 
              highlight = {( 
                <Highlight />
              )}
              messages = {( 
                <MessageList 
                  messages = {messages}
                />
              )}
          >
          </Template>
      );
    }
}

const mapStateToProps = ({messages}) => {
  return {
    messages : messages.messages
  }
};

// const mapDispatchToProps = (dispatch) => ({
//   toggle: (key) => {
//     dispatch(toggle(key));
//   }
// });

export default withRouter(connect(mapStateToProps,null)(TemplateContainer));
