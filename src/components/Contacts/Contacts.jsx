import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/reducer';
import { getContacts, getFilters } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const numbers = useSelector(getContacts);
  const filter = useSelector(getFilters);
  let filteredContacts = '';
  if (filter !== '' && filter !== undefined && filter !== null) {
    filteredContacts = numbers.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  } else {
    filteredContacts = numbers;
  }

  const deleteOnClick = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <h1>Contacts</h1>
      <ul>
        {filteredContacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => deleteOnClick(contact.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;
