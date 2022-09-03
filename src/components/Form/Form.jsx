import React, { useState } from 'react';
import Contacts from 'components/Contacts/Contacts';

const Form = ({ state, onDeleteContact, onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const onDeleteContact = number => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== number),
  //   }));
  // };

  const onAddContactToState = e => {
    e.preventDefault();
    onAddContact(name, number);
    reset();
  };

  const manageInput = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        throw new Error('wtf?');
    }
    // this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <>
      <h1>PhoneBook</h1>
      <form action="#" onSubmit={onAddContactToState}>
        <label htmlFor="addContactName">Name</label>
        <input
          id="addContactName"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={manageInput}
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={manageInput}
        />
        <button type="submit">Add contact</button>
      </form>
      <Contacts contacts={state} onDelete={onDeleteContact} />
    </>
  );
};
export default Form;
