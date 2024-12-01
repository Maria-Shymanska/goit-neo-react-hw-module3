import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";

function App() {
  const [contactList, setContactList] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const contacts = window.localStorage.getItem("contacts");
    if (contacts !== null) {
      setContactList(JSON.parse(contacts));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contactList));
  }, [contactList]);

  const handleAddContact = (newContact) => {
    setContactList((prevContactList) => {
      return [...prevContactList, newContact];
    });
  };

  const handleDelete = (id) => {
    setContactList((prevContactList) =>
      prevContactList.filter((contact) => contact.id !== id)
    );
  };

  const filteredContactList = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.App}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox filter={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContactList} onDelete={handleDelete} />
    </div>
  );
}

export default App;
