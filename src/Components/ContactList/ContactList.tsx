import { List } from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';

interface Contact {
  id: number;
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
          {items.map((contact) => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </List>
      )}
    </>
  );
};
