import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import Chat from './components/chat/Chat';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactName: '',
      picture: '',
      conversation: {}
    }

    this.changeContactName = this.changeContactName.bind(this);
  }

  changeContactName = (name, picture, conversation) => {
    this.setState({
      contactName: name,
      picture,
      conversation
    });
  }

  render() {
    const { contactName, picture, conversation } = this.state;

    return (
      <div className="container-app">
        <Contacts changeContactName={this.changeContactName} />
        <Chat contactName={contactName} picture={picture} conversation={conversation} />
      </div>
    )
  }
}

export default App;
