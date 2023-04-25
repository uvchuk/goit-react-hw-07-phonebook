import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'services/ContactsAPI';
import { Button, Spinner } from 'react-bootstrap';
import './ContactForm.module.css';

export const ContactForm = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();
  const onSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;
    if (checkIfExist(name))
      return alert('This contact is exist in your phonebook!');
    addContact({ name, phone });
    form.reset();
  };

  const checkIfExist = name => {
    return contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );
  };

  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <label>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="visually-hidden">Loading...</span>
          </>
        ) : (
          <span>Add to contact</span>
        )}
      </Button>
    </form>
  );
};
