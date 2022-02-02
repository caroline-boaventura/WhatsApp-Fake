import React, { Component } from 'react';
import Header from './Header';
import Conversations from './Conversations';
import ChatBar from './ChatBar';

class Chat extends Component {
  render() {
    const { contactName, picture, conversation } = this.props;
    return (
      <div className="container-chat">
        <Header contactName={contactName} picture={picture} />
        <Conversations conversation={conversation} picture={picture} />
        <ChatBar />
      </div>
    )
  }
}

export default Chat;