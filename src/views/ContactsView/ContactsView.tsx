import { toast } from 'react-hot-toast';
import { InfinitySpin } from 'react-loader-spinner';
import { useState } from 'react';
import { ContactForm } from '../../Components/ContactForm';
import { ContactList } from '../../Components/ContactList';
import { Filter } from '../../Components/Filter/Filter';
import { useGetContactQuery } from '../../redux/contactsAPI';
import { useAddContactMutation } from '../../redux/contactsAPI';
import {
  Container,
  HeaderTitle,
  ContactListTitle,
} from './ContactsView.styled';

interface SubmitValues {
  name: string;
  number: string;
}

export default function ContactsView() {
  const [filter, setFilter] = useState('');

  const { data: contacts, isLoading } = useGetContactQuery('');
  const [addContact, { isLoading: loading }] = useAddContactMutation();

  const addMyContact = (value: SubmitValues) => {
    for (const contact of contacts) {
      if (contact.name === value.name) {
        toast.error(`${value.name} is already in contacts.`);
        return;
      }
    }
    addContact(value);
    toast.success(`Contact ${value.name} has been added`);
  };

  const changeFilter = (name: string): void => {
    setFilter(name);
  };

  const getVisibleContacts = () => {
    const normalizedFilter: string = filter.toLowerCase();
    if (contacts) {
      return contacts.filter((item: { name: string }) =>
        item.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };
  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <>
        <HeaderTitle>Phonebook</HeaderTitle>
        <ContactListTitle>Add new contact</ContactListTitle>
        <ContactForm action={addMyContact} loading={loading} />

        <ContactListTitle>Contacts</ContactListTitle>
        <Filter value={filter} onChange={changeFilter} />
        {isLoading ? (
          <InfinitySpin color="grey" />
        ) : (
          <ContactList items={visibleContacts} />
        )}
      </>
    </Container>
  );
}
