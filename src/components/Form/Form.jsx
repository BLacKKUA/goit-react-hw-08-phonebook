import React, { Component } from 'react';
import Contacts from 'components/Contacts/Contacts';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  onDeleteContact = number => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== number),
    }));
  };

  onAddContact = e => {
    e.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number);
    this.reset();
  };

  manageInput = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
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
            value={this.state.name}
            onChange={this.manageInput}
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.manageInput}
          />
          <button type="submit">Add contact</button>
        </form>
        <Contacts
          contacts={this.props.state}
          onDelete={this.props.onDeleteContact}
        />
      </>
    );
  }
}
export default Form;
