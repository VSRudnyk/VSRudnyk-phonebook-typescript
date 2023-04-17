import { Item } from './ContactListItem.styled';
import { useDeleteContactMutation } from '../../redux/contactsAPI';
import { RotatingLines } from 'react-loader-spinner';

interface Contact {
  id: number;
  name: string;
  number: string;
}

export const ContactListItem = ({ id, name, number }: Contact) => {
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactMutation();

  return (
    <Item>
      {name}: {number}
      <button
        type="button"
        disabled={isDeleting}
        onClick={() => deleteContacts(id)}
      >
        {isDeleting && <RotatingLines width="10" />} Delete
      </button>
    </Item>
  );
};
