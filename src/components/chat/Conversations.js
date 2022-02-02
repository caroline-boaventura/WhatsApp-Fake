import React, { Component } from 'react';
import contactList from '../../contactsList/contactList';
import '../../App.css';

class Conversations extends Component {

  render() {
    const { conversation } = this.props;
    return (
      <main className="container-conversations">
        {console.log(Array.isArray(conversation), 'CONVERSATIONS AQUI')}

        {(!Array.isArray(conversation)) ? null
          : conversation.map((chat, index) => {
            if (index % 2 === 0) {
              return (
                <div className="grid-item item-left" key={index}>
                  <p>{chat.C}</p>
                  <img src={chat.picture} alt="conversation" />

                </div>
              )
            }

            return (
              <div className="grid-item item-right" key={index}>
                <img src={chat.picture} alt="conversation" />
                <p>{chat.C}</p>

              </div>
            )
          })

        }
      </main>
    )
  }
}

export default Conversations;