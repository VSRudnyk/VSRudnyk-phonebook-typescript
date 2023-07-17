import { RotatingLines } from 'react-loader-spinner';
import { Button } from '@mui/material';
import {
  Item,
  NameContainer,
  ItemContainer,
  Name,
} from './ContactListItem.styled';
import { useDeleteContactMutation } from '../../redux/contactsAPI';

interface Contact {
  _id: string;
  name: string;
  number: string;
}

export const ContactListItem = ({ _id, name, number }: Contact) => {
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactMutation();

  return (
    <Item>
      <ItemContainer>
        <NameContainer>
          <Name>{name}</Name>
          <Name>{number}</Name>
        </NameContainer>
        <Button
          variant="outlined"
          type="button"
          disabled={isDeleting}
          size="small"
          color="primary"
          onClick={() => deleteContacts(_id)}
        >
          {isDeleting && <RotatingLines width="10" />} Delete
        </Button>
      </ItemContainer>
    </Item>
  );
};
