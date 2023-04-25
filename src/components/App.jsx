import { useState } from 'react';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Contact } from './Contact/Contact';
import { useFetchContactsQuery } from 'services/ContactsAPI';

const PhoneBook = () => {
  const [filter, setFilter] = useState('');
  const getFilter = filter => setFilter(filter);

  const { data: contacts, isLoading, error } = useFetchContactsQuery();

  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm></ContactForm>
      </Section>
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts && contacts.length > 0 && (
        <Section title={'Contacts'}>
          <Filter getFilter={getFilter} />
          <ContactList filter={filter}>
            <Contact />
          </ContactList>
        </Section>
      )}
    </>
  );
};

export default PhoneBook;
