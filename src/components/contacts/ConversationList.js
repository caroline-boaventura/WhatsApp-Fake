import React, { Component } from 'react';
import contactList from '../../contactsList/contactList';
import '../../App.css';

class ConversationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: 'container-list',
    }

    this.changeClassDiv = this.changeClassDiv.bind(this);
  }

  changeClassDiv = (event) => {

    if (event.target.classList.value === 'container-list') {
      event.target.classList.remove('container-list')
    }
    console.log()

    // event.target.classList.toggle('backgroundColorFixed')
    // this.setState({
    //   backgroundColor: 'backgroundColorFixed'
    // })
  }



  render() {
    const { backgroundColor } = this.state;
    const { changeContactName } = this.props;

    return (
      <aside>
        {contactList.map(contact => (
          <div className={backgroundColor} onClick={() => changeContactName(contact.name, contact.picture, contact.conversation)} >
            <img src={contact.picture} alt={contact.name} />
            <div>
              <h6>{contact.name}</h6>
              <p>{contact.message}</p>
            </div>

          </div>
        ))}
      </aside>
    )
  }
}

export default ConversationList;