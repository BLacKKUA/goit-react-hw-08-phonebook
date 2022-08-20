import React, { Component } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onDeleteContact = number => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== number),
    }));
  };

  onAddContact = (value, number) => {
    const id = nanoid();
    const trimmedName = value.trim();
    if (
      this.state.contacts.some(
        contact =>
          contact.name.toLocaleLowerCase() === value.toLocaleLowerCase()
      )
    ) {
      window.alert(value + 'is already in contacts');
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id, name: trimmedName, number }],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <Form
          state={filteredContacts}
          onDeleteContact={this.onDeleteContact}
          onAddContact={this.onAddContact}
        />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
      </>
    );
  }
}
