import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from "redux/contacts/contactsOperations";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Notification } from "components/Notification/Notification";
import { Loader } from "components/Loader/Loader";
import { Wrap} from "./ContactsPage.styled";

export const ContactsPage = () => {
  const [contact, setContact] = useState(null);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const changeContact = currentContact => {
    setContact(currentContact);
  }

  const closeUpdateForm = () => {
    setContact(null);
  }

  return (
    <>
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


