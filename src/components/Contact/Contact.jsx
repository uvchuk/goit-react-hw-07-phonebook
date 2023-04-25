import { useDeleteContactMutation } from 'services/ContactsAPI';
import { Button, Spinner } from 'react-bootstrap';
import './Contact.module.css';

export const Contact = ({ id, name, phone }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <li>
      <span>
        {name}: <span>{phone}</span>
      </span>
      <Button
        variant="danger"
        type="button"
        disabled={isLoading}
        onClick={() => {
          deleteContact(id);
        }}
      >
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
          <span>Delete</span>
        )}
      </Button>
    </li>
  );
};
