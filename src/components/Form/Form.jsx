import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Contacts from 'components/Contacts/Contacts';

class Form extends Component {
  state = {
    name: '',
  };

  onAddContact = e => {
    e.preventDefault();
    const idshka = nanoid();
    console.log(e.currentTarget.name);
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  render() {
    return (
      <>
        <h1>PhoneBook</h1>
        <form action="#" onSubmit={this.onAddContact}>
          <label htmlFor="addContactName">Name</label>
          <input
            id="addContactName"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <Contacts
          contacts={this.props.state.contacts}
          onDelete={this.props.onDeleteContact}
        />
      </>
    );
  }
}
export default Form;
