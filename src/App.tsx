import { useState } from 'react';
import { ContactForm } from './Components/ContactForm';
import { ContactList } from './Components/ContactList';
import { Filter } from './Components/Filter/Filter';
import { useGetContactQuery } from './redux/contactsAPI';
// import { LoginView } from './views/LoginView/LoginView';

export const App = () => {
  const [filter, setFilter] = useState('');

  const { data: contacts } = useGetContactQuery('');

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
    <div className="App">
      <ContactForm />
      {/* <LoginView /> */}
      <Filter value={filter} onChange={changeFilter} />
      <ContactList items={visibleContacts} />
    </div>
  );
};
