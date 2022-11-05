import { useState, useEffect  } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { selectToken } from 'redux/auth/authSelectors';
import { fetchContacts } from "redux/contacts/contactsOperations";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Notification } from "components/Notification/Notification";
import { Loader } from "components/Loader/Loader";
import { Wrap, Title } from "./PhonebookPage.styled";

export const PhonebookPage = () => {
  const [contact, setContact] = useState(null);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) dispatch(fetchContacts());
  }, []);

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
      {!error &&
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


