import React from 'react';
import Contacts from 'components/Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const Form = () => {
  const dispatch = useDispatch();
  const numbers = useSelector(getContacts);
  const onAddContactToState = e => {
    e.preventDefault();
    const form = e.target;
    if (
      numbers.some(
        contact =>
          contact.name.toLocaleLowerCase() ===
          form.elements.name.value.toLocaleLowerCase()
      )
    ) {
      window.alert(form.elements.name.value + 'is already in contacts');
      return;
    }

    dispatch(
      addContact({
        name: form.elements.name.value,
        phone: form.elements.number.value,
      })
    );
    form.reset();
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
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
      <Contacts />
    </>
  );
};
export default Form;
