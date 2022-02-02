import React, { Component } from 'react';
import Header from './Header';
import ConversationList from './ConversationList';

class Contacts extends Component {
  render() {
    const { changeContactName } = this.props;
    return (
      <div>
        <Header />
        <ConversationList changeContactName={changeContactName} />
      </div>
    )
  }
}

export default Contacts;