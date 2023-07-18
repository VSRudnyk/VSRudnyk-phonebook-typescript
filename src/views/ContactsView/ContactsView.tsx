import { useState } from 'react';
import { ContactForm } from '../../Components/ContactForm';
import { ContactList } from '../../Components/ContactList';
import { Filter } from '../../Components/Filter/Filter';
import { useGetContactQuery } from '../../redux/contactsAPI';
import {
  Container,
  HeaderTitle,
  ContactListTitle,
} from './ContactsView.styled';
import { Loader } from '../../Components/Loader/Loader';

export default function ContactsView() {
  const [filter, setFilter] = useState('');

  const { data, isLoading } = useGetContactQuery('');

  const changeFilter = (name: string): void => {
    setFilter(name);
  };

  const getVisibleContacts = () => {
    const normalizedFilter: string = filter.toLowerCase();
    if (data?.result) {
      return data?.result.filter((item: { name: string }) =>
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
        <ContactForm type="add" />

        <ContactListTitle>Contacts</ContactListTitle>
        <Filter value={filter} onChange={changeFilter} />

        <ContactList items={visibleContacts} />
      </>
      {isLoading && <Loader color="#2196f3" width="100" height="100" />}
    </Container>
  );
}
