const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      <h1>Contacts</h1>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => onDelete(contact.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;
