import { List } from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';

interface Contact {
  _id: string;
  name: string;
  number: string;
}

interface Prop {
  items: Contact[];
}

export const ContactList = ({ items }: Prop) => {
  return (
    <>
      {items && (
        <List>
          {items.map(contact => (
            <ContactListItem key={contact._id} {...contact} />
          ))}
        </List>
      )}
    </>
  );
};
