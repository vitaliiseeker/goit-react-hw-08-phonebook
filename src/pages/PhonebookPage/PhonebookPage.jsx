import { useState } from "react";
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Notification } from "components/Notification/Notification";
import { Loader } from "components/Loader/Loader";
import { Wrap, Title } from "./PhonebookPage.styled";


export const PhonebookPage = () => {
  const [contact, setContact] = useState(null);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const changeContact = currentContact => {
    setContact(currentContact);
  }
 const closeUpdateForm = ()  => {
    setContact(null);
  }

  return (
    <>
      <Title>Phonebook</Title>
      {error && <Notification message={error} />}
      {isLoading && <Loader />}
      {!error && !isLoading &&
        <Wrap>
          <ContactList
            changeContact={changeContact}
          />
          <ContactForm
            contact={contact}
            closeUpdateForm={closeUpdateForm}
          />
        </Wrap>}
    </>

  )
};


