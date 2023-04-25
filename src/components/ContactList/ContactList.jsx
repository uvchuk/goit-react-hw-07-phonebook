import { Contact } from 'components/Contact/Contact';
import { useFetchContactsQuery } from 'services/ContactsAPI';
import './ContactList.module.css';

export const ContactList = ({ filter }) => {
  const { data: contacts } = useFetchContactsQuery();
  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <ul>
      {filteredContacts?.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};
