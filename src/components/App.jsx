import { useState, useEffect } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

export const App = () => {
  const test = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    if (localStorage.getItem('phoneBook') !== null) {
      return JSON.parse(localStorage.getItem('phoneBook'));
    } else {
      return test;
    }
  });

  const onDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('phoneBook', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    if (localStorage.getItem('phoneBook') !== null) {
      setContacts(JSON.parse(localStorage.getItem('phoneBook')));
    } else {
      setContacts(test);
    }
  }, []);

  const onAddContact = (value, number) => {
    const id = nanoid();
    const trimmedName = value.trim();
    if (
      contacts.some(
        contact =>
          contact.name.toLocaleLowerCase() === value.toLocaleLowerCase()
      )
    ) {
      window.alert(value + 'is already in contacts');
      return;
    }
    const contact = { id, name: trimmedName, number };
    setContacts(oldArray => [...oldArray, contact]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <Form
        state={filteredContacts}
        onDeleteContact={onDeleteContact}
        onAddContact={onAddContact}
      />
      <Filter value={filter} onChange={changeFilter} />
    </>
  );
};
